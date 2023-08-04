import { unsafeWindow } from '$'
import _ from 'lodash'
import BaseModule from '../BaseModule'
import { sleep } from '../../library/utils'

class SwitchLiveStreamQuality extends BaseModule {
  static runMultiple = true

  config = this.moduleStore.moduleConfig.EnhanceExperience.switchLiveStreamQuality

  private async waitForPlayer() {
    return new Promise<Window['livePlayer']>((resolve, reject) => {
      const topWindow = unsafeWindow.top ? unsafeWindow.top : unsafeWindow
      const findPlayertimer = setInterval(() => {
        if (
          topWindow.livePlayer &&
          _.has(topWindow.livePlayer, 'getPlayerInfo') &&
          _.has(topWindow.livePlayer, 'switchQuality')
        ) {
          clearInterval(findPlayertimer)
          clearTimeout(timeoutTimer)
          resolve(topWindow.livePlayer)
        }
      }, 200)
      const timeoutTimer = setTimeout(() => {
        clearInterval(findPlayertimer)
        clearTimeout(timeoutTimer)
        reject()
      }, 10e3)
    })
  }

  private switchQuality(livePlayer: Window['livePlayer']) {
    const playerInfo = livePlayer.getPlayerInfo()
    if (playerInfo.liveStatus === 0) {
      this.logger.log('当前直播间未开播')
    } else if (playerInfo.qualityCandidates.length === 0) {
      this.logger.warn('当前直播间没有画质选项')
    } else {
      const targetQuality = playerInfo.qualityCandidates.find(
        ({ desc }) => desc === this.config.qualityDesc
      )
      if (targetQuality && playerInfo.quality !== targetQuality.qn) {
        livePlayer.switchQuality(targetQuality.qn)
        this.logger.log(`已将画质切换为${this.config.qualityDesc}`, targetQuality)
      }
    }
  }

  public async run() {
    this.logger.log('自动切换画质模块开始运行')
    if (this.config.enabled) {
      try {
        const livePlayer = await this.waitForPlayer()
        // 切太快可能会导致有个加载图标一直转圈
        await sleep(1000)
        this.switchQuality(livePlayer)
      } catch (e) {
        this.logger.error('等待播放器超时')
      }
    }
  }
}

export default SwitchLiveStreamQuality