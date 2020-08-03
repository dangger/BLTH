# BLTH  
**Bilibili Live Tasks Helper**  

![TamperMonkey 4.10](https://img.shields.io/badge/TamperMonkey_4.10-pass-green.svg) ![Chromium 83](https://img.shields.io/badge/Chromium_83-pass-green.svg) ![Firefox 77](https://img.shields.io/badge/Firefox_77-pass-green.svg)  

+ 在 Tampermonkey 脚本设置中需要将此脚本的设置 “仅在顶层页面（框架）运行” 设置为否(默认为否)才使脚本在特殊直播间运行。  
+ 不保证能通过其它油猴插件(Greasemonkey/Violentmonkey等)运行。  

----------------------------------

### 点击以下任一链接安装脚本
### 1.githubusercontent源：[Bilibili-SGTH_1](https://raw.githubusercontent.com/andywang425/Bilibili-SGTH/master/B%E7%AB%99%E7%9B%B4%E6%92%AD%E9%97%B4%E6%8C%82%E6%9C%BA%E5%8A%A9%E6%89%8B.user.js)  
### 2.gitcdn源：[Bilibili-SGTH_2](https://gitcdn.xyz/repo/andywang425/Bilibili-SGTH/master/B%E7%AB%99%E7%9B%B4%E6%92%AD%E9%97%B4%E6%8C%82%E6%9C%BA%E5%8A%A9%E6%89%8B.user.js)  
### 3.jsdelivr源：[Bilibili-SGTH_3](https://cdn.jsdelivr.net/gh/andywang425/Bilibili-SGTH/B%E7%AB%99%E7%9B%B4%E6%92%AD%E9%97%B4%E6%8C%82%E6%9C%BA%E5%8A%A9%E6%89%8B.user.js)    
<details>
<summary><strong>展开查看原格式版链接</strong></summary>      
需要自行复制到tampermonkey中新建脚本进行安装。
 
### 1.githubusercontent源：[Bilibili-SGTH_Origin_1](https://raw.githubusercontent.com/andywang425/Bilibili-SGTH/master/B%E7%AB%99%E7%9B%B4%E6%92%AD%E9%97%B4%E6%8C%82%E6%9C%BA%E5%8A%A9%E6%89%8B.js)  
### 2.gitcdn源：[Bilibili-SGTH_Origin_2](https://gitcdn.xyz/repo/andywang425/Bilibili-SGTH/master/B%E7%AB%99%E7%9B%B4%E6%92%AD%E9%97%B4%E6%8C%82%E6%9C%BA%E5%8A%A9%E6%89%8B.js)  
### 3.jsdelivr源：[Bilibili-SGTH_Origin_3](https://cdn.jsdelivr.net/gh/andywang425/Bilibili-SGTH/B%E7%AB%99%E7%9B%B4%E6%92%AD%E9%97%B4%E6%8C%82%E6%9C%BA%E5%8A%A9%E6%89%8B.js)    
</details>

_(3，4访问快但可能不是最新版)_

-------------------------------

#### 使用方法 
在Tampermonkey中启用脚本，登陆bilibili后打开任意b站直播间。  
#### 一些建议
启用脚本后不要参与小时榜和广播礼物的抽奖，重复抢次数多了会进小黑屋。  
_注：这里的小黑屋并非主站的小黑屋，是指被b站风控限制抽奖，领银瓜子宝箱等，与主站无关。_  
如果开启抽奖附加延迟，可能出现领不到礼物的情况，请降低或取消延迟。  
**部分设置更改后需要刷新页面才能生效。**  
**使用前建议先关闭广告拦截插件，并确认相关浏览器设置(如cookie权限，脚本拦截)否则该脚本可能无法正常运行。**  

辣条交流群:[1106094437](https://jq.qq.com/?_wv=1027&k=fCSfWf1O)，欢迎进来聊天或者提点建议~  
_如果有什么建议可以给我提Issues，我会试着改进~_  
## 功能细节 

_脚本窗口可以上下滚动！部分设置可能需要滚动后才能看到。_  
+ 抽奖前随机延迟  
+ 特定时段不参与抽奖  
+ 随机跳过抽奖  
+ 能设置当天最多抢辣条数量  
+ 抽奖前模拟进入目标房间  
+ 抽奖前概率发送活跃弹幕（防检测）  
+ 点击**直播画面上方**按钮隐藏/显示脚本窗口和抽奖信息  
+ 进入小黑屋后强制重复抽奖直到成功，最多尝试5次  
+ 屏蔽不必要的页面元素  
+ 定时刷新直播间  
+ 自动完成每日任务  
   1.登陆主站  
   2.观看视频  
   3.自动投币，可指定给某用户的视频投币  
   4.分享视频  
   5.银瓜子换硬币  
   6.直播区签到  
   7.应援团签到  
   8.自动领银瓜子宝箱  
   9.模拟移动端心跳，领双端观看直播奖励  
+ 自动后台循环开关标签页获取小心心  
+ 自动点亮勋章
+ 自动送礼  

以上功能涉及参数可自定义。  
## 说明
**关于脚本代码格式**  
本脚本在三个平台上的代码格式有所不同
+ github: 压缩和原格式都有，默认安装压缩格式
+ openuserjs: 第一次安装为原格式，若用tampermonkey更新则会变为压缩格式
+ greasyfork: 原格式

注：项目文件中的[B站直播间挂机助手.user.js](https://github.com/andywang425/Bilibili-SGTH/blob/master/B%E7%AB%99%E7%9B%B4%E6%92%AD%E9%97%B4%E6%8C%82%E6%9C%BA%E5%8A%A9%E6%89%8B.user.js)是压缩后的脚本。  
原格式的脚本为[B站直播间挂机助手.js](https://github.com/andywang425/Bilibili-SGTH/blob/master/B%E7%AB%99%E7%9B%B4%E6%92%AD%E9%97%B4%E6%8C%82%E6%9C%BA%E5%8A%A9%E6%89%8B.js)。  

**关于输入数据格式**  
+ 浮点数(小数)或整数: 抽奖前附加随机延迟，随机跳过礼物，抽奖时概率发送活跃弹幕。  
+ 数组(或单个整数): 优先送礼房间，不送礼房间, 自动点亮勋章房间号。  
+ 其余只支持整数。  

**关于自动送礼**  
+ 自动送礼只会送出辣条，亿圆和小心心。  
+ 如果要填写多个优先送礼房间或不送礼房间，每个房间号之间需用半角逗号,隔开。如 666,777,888 (其实就是数组的格式)。若不勾选送礼优先高等级粉丝牌则优先送低等级粉丝牌。  
+ 礼物到期时间: 将要在这个时间段里过期的礼物会被送出(勾选送满全部勋章时无论是否将要过期都会被送出)。  
+ 送礼设置优先级:  
  不送礼房间>优先送礼房间>优先高等级粉丝牌>送满全部勋章。  
+ 送礼设置逻辑规则:  
  无论【优先高等级粉丝牌】如何设置，会根据【送满全部勋章】（勾选则无视是否到期补满亲密度，否则只送到期的）条件去按优先送礼房间先后顺序送礼。  
  之后根据【优先高等级粉丝牌】决定先送高级还是低级（勾选先高级，不勾选先低级）。  
  1. 如果勾选了送满全部勋章且指定优先送礼房间，会先按顺序依次给优先送礼房间送礼（前提是你得有优先房间的粉丝勋章），无视礼物过期时间。之后若勾选了优先高等级粉丝牌，则按等级由高到低给剩余粉丝牌送礼。否则按等级由低到等高给剩余粉丝牌送礼。
  2. 如果未勾选送满全部勋章但指定了优先送礼房间，那么会先给优先送礼房间送出即将过期礼物（前提是你得有优先房间的粉丝勋章）。然后若勾选了优先高等级粉丝牌，则给剩下粉丝勋章中等级由高到低的牌子送出即将过期礼物。否则按等级由低到高给剩余粉丝牌送出即将过期礼物。  
+ 不会送出永久礼物。  
+ 【剩余礼物】指送完了所有粉丝牌，但仍有剩余的将在1天内过期的礼物。会在指定送礼时间被送出。  
+ 【剩余礼物送礼直播间】和【剩余礼物送礼直播间拥有者UID】必须对应。任意一项填0则不送剩余礼物。  

**关于自动投币**
+ 脚本会根据今日你已获得的投币经验值判断你已经投了多少个币，然后自动投剩余没投的币。  
  >如今日已获得投币经验20，脚本投币数量设置为4，则会投2个币。  
+ 【给用户(UID:___)的视频投币】若填0则给动态中的视频依次投币(不存在UID为0的用户)。  

**关于任务执行时间**  
+ 初次启用某一项任务时立刻执行。  
+ 登陆主站，观看视频，自动投币，分享视频，银瓜子换硬币，领银瓜子宝箱，直播区签到每日凌晨0点1分时时执行。  
+ 应援团签到在第二天早上8点执行。  

**关于节奏风暴**  
+ 仅会参加被广播的节奏风暴。若无法参加请尝试实名后再参加。  
+ 这个功能目前处于实验阶段，且风险较大。  

**关于内容屏蔽**  
+ 【移除直播画面】本质上是删除了`bilibili-live-player`这个类，不能节省流量，但可以降低GPU使用率。  

**关于小心心**  
+ 因为b站最近一直在加各种请求参数校验，目前通过在后台打开新标签页的方式来获取小心心。  
  几乎不占用cpu，gpu和带宽（除非你点进了脚本打开的标签页）。
+ 检测到包裹内有一组24个7天的小心心后会停止打开标签页，并关闭之前打开的标签页。  
+ 在获取完所有小心心之前直播间不刷新。  
+ 关闭（或刷新）运行脚本的网页后会关闭所有由脚本打开的标签页。  
+ 点亮勋章指送出一个小心心。  
+ 点亮勋章会在自动送礼之前进行。  
+ 若不勾选【点亮勋章时忽略亲密度上限】，则仅会点亮当日剩余亲密度大于等于小心心亲密度的勋章。  
+ 勋章点亮模式说明
  + 白名单：点亮【自动点亮勋章房间号】所对应的粉丝勋章。
  + 黑名单：点亮所有粉丝勋章中除了【自动点亮勋章房间号】所对应勋章的粉丝勋章。  
  _提示：如果想点亮所有勋章，选黑名单然后不填写拥有勋章的房间号即可。_  

**其它设置说明**  
+ 定时重载直播间是为了防止脚本因长时间运行出现bug。  
+ 重置所有为默认：指将设置和任务执行时间缓存重置为默认。  
+ 再次执行每日任务会使相关缓存重置为默认，可以在勾选了新的任务设置后使用。  
+ 抽奖前随机延时能把抽奖分散开来，避免短时间内抽奖次数过多被风控。  
+ 成功领取双端观看直播奖励后，移动端心跳会停止。  
+ 支持输入框回车保存。  

**关于运行日志**  
脚本默认开启运行日志，打开控制台在Filter中输入`IGIFTMSG`即可过滤出本脚本的日志。若想关闭日志可以在脚本头部加入`console.log = () => {}`。  
如果使用脚本过程中遇到问题，可以在控制台中寻找相关错误信息。若无法解决可以进行反馈，并给出错误信息和问题描述。  

**关于反馈**  
反馈bug前请先阅读[bug_report.md](https://github.com/andywang425/Bilibili-SGTH/blob/master/.github/ISSUE_TEMPLATE/bug_report.md)。不符合规范的反馈可能会被关闭。  
## 许可证  
![MIT License](https://img.shields.io/badge/license-MIT-green)  
## 其它信息  
这个项目的部分代码来源于以下几个项目:  
+ [B站直播自动抢辣条二代by十六夜](https://greasyfork.org/en/scripts/381907-b%E7%AB%99%E7%9B%B4%E6%92%AD%E8%87%AA%E5%8A%A8%E6%8A%A2%E8%BE%A3%E6%9D%A1%E4%BA%8C%E4%BB%A3by%E5%8D%81%E5%85%AD%E5%A4%9C) (MIT) by [十六夜](https://greasyfork.org/en/users/289469-%E5%8D%81%E5%85%AD%E5%A4%9C)
+ [Bilibili-LRHH](https://github.com/SeaLoong/Bilibili-LRHH) (MIT) by [SeaLoong](https://github.com/SeaLoong)  
+ [Bilibili-LRHH](https://github.com/pjy612/Bilibili-LRHH) (MIT, _forked from SeaLoong/Bilibili-LRHH_) by [pjy612](https://github.com/pjy612)
+ [TampermonkeyJS](https://github.com/lzghzr/TampermonkeyJS) (MIT) by [lzghzr](https://github.com/lzghzr)  
+ <del>[bilibili-pcheartbeat](https://github.com/lkeme/bilibili-pcheartbeat) (GPL3) by [lkeme](https://github.com/lkeme/)</del>（现已弃用）  

本脚本使用的库：  
+ [BilibiliAPI_Mod](https://github.com/andywang425/Bilibili-SGTH/blob/master/BilibiliAPI_Mod.js)：B站API及常用函数。  
+ [OCRAD](https://github.com/antimatter15/ocrad.js)：识别领银瓜子宝箱验证码。  
+ [libBilibiliToken](https://github.com/lzghzr/TampermonkeyJS/blob/master/BiliveClientHeart/BiliveClientHeart.user.js)：获取移动端token。  
+ <del>[bilibili-pcheartbeat](https://github.com/lkeme/bilibili-pcheartbeat)：计算PC心跳的请求参数`s`。</del>（现已弃用）  

感谢以上这些项目的作者~ 

## 更新日志
>### 4.0
>改名；尝试修复自动送礼的一个bug。 
>### 3.9.1.2
>【小心心】修复标签页计数bug。  
>### 3.9.1.1
>优化小心心模块：优化小心心上限的检测；不重复打开已打开的标签页；关闭（或刷新）脚本运行的直播间后由脚本打开的标签页会被关闭。
>领银瓜子宝箱验证码错误后延时150毫秒再尝试，降低风控概率。    
>### 3.9.1
>增加输入项【打开标签页数量上限】防止一下开太多导致浏览器崩溃；增加今日小心心是否全部获取的判定，全部获取后关闭标签页。  
>### 3.9
>改为使用后台打开标签页的方式获取小心心；修复点亮勋章和自动送礼的一些小bug。  
>### 3.8.2
>新功能：【间隔__分钟送礼】，【点亮勋章时忽略亲密度上限】。送礼和点亮算法优化。  
>### 3.8.1
>送礼算法优化；在获取完所有小心心之前直播间不刷新；pc心跳bug修复。  
>### 3.8
>小心心无需通过跳转房间获得，脚本会直接发心跳包。尝试修复暴力猴无法使用的bug。自动点亮勋章算法优化。    
>### 3.7.3
>支持点亮指定勋章，提供了白名单和黑名单两种点亮策略。移动端token缓存，若token不过期则不会获取，降低登陆频率。  
>### 3.7.2.1
>提高获取礼物数据的兼容性，即使失败也能加载备用数据。（顺便测试下webhook）  
>### 3.7.2
>继续尝试修复自动投币在硬币不足时会出错的bug；礼物到期时间单位由秒改为天；新增提示功能。  
>（修复b站api变化导致的自动送礼的bug，然后我刚一修好，b站api又改回去了，白忙活。。。）  
>### 3.7.1
>尝试修复自动投币在硬币不足时会出错的bug；修复自动跳转房间重复跳转的bug；新增内容屏蔽设置。  
>### 3.7
>新增小心心模块：可以自动查找勋章列表中正在直播的房间进行跳转获取小心心，检测到当前房间停播后会再次查找。  
>### 3.6.2
>bug fix；送礼排除礼物策略由黑名单改为白名单。  
>### 3.6.1
>增加送礼排除直播间的功能；优化隐藏抽奖信息功能，现在隐藏抽奖信息时会产生不可见的抽奖信息，点击显示即可看到（旧版隐藏时不会记录抽奖信息）；bug fix  
>### 3.6
>取消了模拟进入房间概率，改为记录进入过的房间号（上限100）。若发现进入过了则不会重复进入。修复了自动投币会给UP不是指定UID用户的联合投稿视频投币的bug。修复多次获取APPToken的bug。修复回车保存无效的bug。应援团签到时间改为第二天8点。  
>### 3.5.5
>修复检查小时榜分区的bug。投币设置选项优化。支持输入框回车保存。  
>### 3.5.4.1
>修复节奏风暴，移动端心跳的一些bug。  
>### 3.5.4
>自动投币可指定给某用户的视频投币。  
>### 3.5.3
>修复火狐特有的一个关于正则表达式的bug。现在支持火狐啦~  
>### 3.5.2
>现在可以检查所有分区的小时榜，能参与的抽奖数量大幅增加。  
>### 3.5.1
>修复读取统计错误的bug；修复开启不抽奖时段不刷新直播间后导致的不会刷新页面的bug；尝试修复多次调用info接口导致大会员被封的问题；不再使用GM_getValue和GM_setValue两个GM函数。  
>### 3.5
>新增节奏风暴抽奖功能；由于设置太多，现在界面可以上下滚动。重置统计时间更精准，误差在1秒内。  
>### 3.4
>支持模拟移动端心跳，领双端观看直播奖励。  
>### 3.3
>增加剩余礼物送礼功能。修复了包裹内无可送礼物时送礼导致的bug。聊天区提示及控制台日志优化。  
>### 3.2.1
>活跃弹幕池修改；领银瓜子宝箱初始化时间滞后；部分输入支持浮点数  
>### 3.2  
>运行日志优化，显示时间；定时送礼模块算法优化，更加精确，增加手动立刻送礼功能；再次执行每日任务，重置统计，不会刷新页面；bug fix  
>### 3.1.1  
>bug fix  
>### 3.1  
>支持自定义送礼时间，取消送礼检查间隔选项。脚本会在指定的一分钟内集中送礼。  
>### 3.0.1  
>补充脚本内说明;界面调整;更新源换为jsdelivr。 
>### 3.0  
>增加自动送礼功能;界面调整，增加脚本内简要说明。
>### 2.6.1  
>修复检查小时榜的bug
>### 2.6  
>银瓜子宝箱验证码识别模块优化，提高验证码识别准确率；修复点击显示/隐藏按钮后聊天信息滚动问题；脚本内置检查更新源换为github;支持自定义检查小时榜间隔
>### 2.5.7  
>移除不必要的页面元素，防止遮挡按钮;细节调整
>### 2.5.6  
>日常修bug，解决了动态中无视频时分享视频引起的错误；界面微调。
>### 2.5.5  
>修复一些bug；运行日志更加详细；优化了重复运行检测，减少性能消耗。  
>### 2.5.4  
>考虑到有时候油猴检查更新功能会失效，增加检查脚本更新的按钮  
>### 2.5.3  
>解决了禁止重复运行方面的bug；转移脚本到GitHub  
>### 2.5.2  
>界面调整：保存按钮变为全局，重新加入重置统计按钮  
>### 2.5.1  
>增加银瓜子换硬币功能;界面细节优化。  
_中间一段日志丢失_  
>### 2.2  
>加入选项：进黑屋后强制重复抽奖直到成功，最多重试5次(危险)；CACHE优化  
>### 2.1.3  
>重复运行检测，在一个直播间启用脚本后打开其它直播间不会运行此脚本。  
>### 2.1.2  
>播放器为flash时不自动切换为html播放器  
>### 2.1.1  
>应援团签到细节优化  
>### 2.1  
>增加自动应援团签到功能;修复了SC会遮挡弹幕区上方按钮的bug;活跃弹幕池修改,去除无意义的句号和空格改为表情;限制活跃弹幕发送概率必须小于5%  
>### 2.0.2  
>API源调整,为之后更新做准备  
>### 2.0  
>新功能:抽奖前有概率在目标房间发送一条活跃弹幕(概率别调太高，b站限制每秒只能发一条弹幕);jQuery换源，用BilibiliAPI_Mod(自制API，已压缩)代替原SeaLoogn大佬的BilibiliAPI,包含更多B站API及函数(已压缩，加载更快);本脚本也已压缩，提高载入速度;修复部分时段不抽奖输入框写入非常规时间段时脚本无法正确执行的bug，并增加分钟选项，更加精确(3分钟一检测，所以实际会有一点误差);细节上的改进;  
>### 1.8  
>每次抽奖前抽奖模拟一次进入直播间的动作，防检测(所以会产生很多观看历史记录);重新加入亲密度统计(暂时没用);加入银瓜子统计;优化辣条上限检测方法。  
>### 1.7.2  
>现在上船奖励变为辣条，不再统计亲密度;再次优化了抽奖信息滚动。  
>### 1.7.1  
>解决了弹幕聊天记录和抽奖信息滚动异常的问题;修复了一个按钮的css样式;添加一个脚本图标(辣条)。  
>### 1.7  
>礼物信息保存到浏览器缓存，出现重复领取的现象大大降低。修复了开启延时会无法抽奖的bug。  
>### 1.6  
>更新css样式,窗口更好看了。  
>### 1.5.3  
>随机延迟算法优化：随机延时包括最大和最小值;最大最小值相同时延时固定。    
_更早的日志就不显示了~_
