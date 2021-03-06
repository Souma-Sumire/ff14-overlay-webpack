const textCommand = {
  "/record": "/任务回顾",
  "/recordready": "/记录准备确认",
  "/pvpteamcmd": "/战队命令",
  "/saddlebag": "/陆行鸟鞍囊",
  "/magiaright": "/魔素板顺时旋转",
  "/magialeft": "/魔素板逆时旋转",
  "/cwlinkshellcmd": "/跨服贝命令",
  "/quickchat": "/快捷发言",
  "/bluespellbook": "/青魔法书",
  "/magiaattack": "/魔素板攻势",
  "/magiadefense": "/魔素板守势",
  "/magiaauto": "/魔素板自动",
  "/cwlinkshell1": "/跨服贝频道1",
  "/cwlinkshell2": "/跨服贝频道2",
  "/cwlinkshell3": "/跨服贝频道3",
  "/cwlinkshell4": "/跨服贝频道4",
  "/cwlinkshell5": "/跨服贝频道5",
  "/cwlinkshell6": "/跨服贝频道6",
  "/cwlinkshell7": "/跨服贝频道7",
  "/cwlinkshell8": "/跨服贝频道8",
  "/graphicpresets": "/图像设置预设",
  "/fellowship": "/同好会",
  "/fellowshipfinder": "/同好招募",
  "/collection": "/重要物品",
  "/newgame+": "/昔日重现模式",
  "/dice": "/掷骰",
  "/nameplatetype": "/姓名版显示类型",
  "/nameplatedisp": "/名牌显示",
  "/fashion": "/时尚配饰",
  "/fashionguide": "/时尚配饰一览",
  "/officialsite": "/官方网站",
  "/petmirage": "/召唤兽投影",
  "/petsize": "/召唤兽尺寸",
  "/ridepillion": "/坐骑位置",
  "/patchnote": "/更新笔记",
  "/pvpteam": "/战队频道",
  "/cwlinkshell": "/跨服贝频道",
  "/beginner": "/新人频道",
  "/say": "/说话频道",
  "/shout": "/喊话频道",
  "/tell": "/悄悄话频道",
  "/party": "/小队频道",
  "/linkshell": "/通讯贝频道",
  "/linkshell1": "/通讯贝频道1",
  "/linkshell2": "/通讯贝频道2",
  "/linkshell3": "/通讯贝频道3",
  "/linkshell4": "/通讯贝频道4",
  "/linkshell5": "/通讯贝频道5",
  "/linkshell6": "/通讯贝频道6",
  "/linkshell7": "/通讯贝频道7",
  "/linkshell8": "/通讯贝频道8",
  "/freecompany": "/部队频道",
  "/echo": "/默语",
  "/yell": "/呼喊频道",
  "/reply": "/回答",
  "/alliance": "/团队频道",
  "/join": "/参加",
  "/decline": "/拒绝",
  "/invite": "/邀请",
  "/kick": "/移除",
  "/leader": "/队长",
  "/leave": "/退队",
  "/check": "/查看",
  "/trade": "/交易",
  "/automove": "/自动前进",
  "/follow": "/跟随",
  "/meldrequest": "/委托镶嵌",
  "/character": "/角色",
  "/journal": "/日志",
  "/dutyfinder": "/任务搜索器",
  "/armourychest": "/兵装库",
  "/huntinglog": "/讨伐笔记",
  "/craftinglog": "/制作笔记",
  "/gatheringlog": "/采集笔记",
  "/fishinglog": "/钓鱼笔记",
  "/achievements": "/成就",
  "/partycmd": "/小队命令",
  "/friendlist": "/好友命令",
  "/blacklist": "/黑名单命令",
  "/search": "/搜索命令",
  "/map": "/地图",
  "/teleport": "/传送",
  "/marking": "/标记",
  "/actionlist": "/技能菜单",
  "/timers": "/任务情报",
  "/recommended": "/推荐任务",
  "/inventory": "/物品",
  "/freecompanycmd": "/部队命令",
  "/linkshellcmd": "/通讯贝命令",
  "/return": "/返回",
  "/emotelist": "/情感动作",
  "/activehelp": "/新手指南",
  "/supportdesk": "/服务台",
  "/characterconfig": "/角色设置",
  "/systemconfig": "/系统设置",
  "/keybind": "/键位设置",
  "/macros": "/用户宏",
  "/hudlayout": "/界面设置",
  "/logout": "/标题画面",
  "/shutdown": "/关闭游戏",
  "/partysort": "/小队排序",
  "/readycheck": "/准备确认",
  "/ready": "/准备完毕",
  "/notready": "/没有准备好",
  "/waymark": "/场景标记",
  "/fishguide": "/鱼类图鉴",
  "/housing": "/房屋",
  "/minionguide": "/宠物一览",
  "/mountguide": "/坐骑一览",
  "/partyfinder": "/队员招募",
  "/pvpprofile": "/对战资料",
  "/companion": "/搭档",
  "/keyitem": "/任务道具",
  "/challengelog": "/挑战笔记",
  "/sightseeinglog": "/探索笔记",
  "/goldsaucer": "/金碟游乐场",
  "/currency": "/货币一览",
  "/aethercurrent": "/风脉泉",
  "/logcolor": "/消息颜色",
  "/playguide": "/资讯中心",
  "/generaldutykey": "/任务通用键",
  "/raidfinder": "/大型任务搜索器",
  "/orchestrion": "/管弦乐琴",
  "/countdown": "/倒计时",
  "/contactlist": "/战友列表",
  "/mountspeed": "/坐骑速度",
  "/wait": "/等待",
  "/legacymark": "/十二神印记",
  "/gcsalute": "/军礼",
  "/macroicon": "/宏图标",
  "/recast": "/复唱时间",
  "/gearset": "/套装",
  "/itemsort": "/道具整理",
  "/random": "/随机数",
  "/instance": "/副本区检查",
  "/cleartellhistory": "/清除悄悄话记录",
  "/macrolock": "/锁定宏指令",
  "/macroerror": "/宏错误提示",
  "/clearlog": "/清除消息记录",
  "/macrocancel": "/取消宏",
  "/playtime": "/游戏时间",
  "/grouppose": "/集体动作",
  "/itemsearch": "/道具检索",
  "/idlingcamera": "/观景视角",
  "/duelswitch": "/决斗申请拦截",
  "/beginnerchannelinvitation": "/接受新人频道的邀请",
  "/beginnerchannelleave": "/退出新人频道",
  "/egiglamour": "/召唤兽投影",
  "/title": "/称号",
  "/bahamutsize": "/巴哈姆特尺寸",
  "/alarm": "/闹钟",
  "/busy": "/忙碌",
  "/away": "/离开",
  "/lookingforparty": "/希望组队",
  "/lookingformeld": "/接受镶嵌魔晶石请求",
  "/searchcomment": "/个人签名",
  "/beginnerstatus": "/新人状态",
  "/beginnerchannel": "/加入新人频道",
  "/returnerstatusoff": "/解除回归者状态",
  "/roleplaying": "/角色扮演中",
  "/action": "/技能",
  "/battlemode": "/武器状态",
  "/target": "/选中",
  "/targetpc": "/选中最近玩家",
  "/targetnpc": "/选中最近非玩家",
  "/targetenemy": "/选中最近敌人",
  "/battletarget": "/战斗目标",
  "/assist": "/目标的目标",
  "/facetarget": "/转向目标",
  "/nexttarget": "/右侧选择",
  "/previoustarget": "/左侧选择",
  "/targetlasttarget": "/上次目标",
  "/targetlastenemy": "/前次敌人",
  "/lockon": "/锁定",
  "/focustarget": "/焦点目标",
  "/petaction": "/召唤兽技能",
  "/companionaction": "/搭档技能",
  "/facecamera": "/面向镜头",
  "/levelsync": "/等级同步",
  "/mount": "/坐骑",
  "/additionalaction": "/额外技能",
  "/generalaction": "/共通技能",
  "/minion": "/宠物",
  "/statusoff": "/解除状态",
  "/addpvpaction": "/对战额外技能",
  "/pvpaction": "/对战技能",
  "/blueaction": "/青魔法技能",
  "/autolockon": "/自动锁定",
  "/autofacetarget": "/自动转向目标",
  "/targetring": "/目标环",
  "/targetline": "/目标线",
  "/linkline": "/联系线",
  "/autotarget": "/自动选中",
  "/displayhead": "/显示头部装备",
  "/displayarms": "/显示武器",
  "/autosheathe": "/自动收回武器",
  "/targetself": "/选中自己",
  "/groundclick": "/场景点击",
  "/chatlog": "/消息窗口",
  "/battleeffect": "/战斗特效",
  "/hud": "/指定窗口",
  "/hotbar": "/热键栏",
  "/crosshotbar": "/十字热键栏",
  "/hudreset": "/重置界面",
  "/uireset": "/重置界面窗口",
  "/uiscale": "/界面缩放",
  "/actionerror": "/技能错误",
  "/recasterror": "/复唱错误",
  "/crosshotbartype": "/操作类型",
  "/crosshotbardisplay": "/一直显示十字热键栏",
  "/pvphotbar": "/对战热键栏",
  "/pvpcrosshotbar": "/对战十字热键栏",
  "/emotelog": "/情感动作文字提示",
  "/jobhudmode": "/职业量谱模式",
  "/mastervolume": "/整体音量",
  "/bgm": "/背景音乐",
  "/soundeffects": "/音效",
  "/voice": "/语音",
  "/systemsounds": "/系统音",
  "/ambientsounds": "/环境音",
  "/soundeffectsself": "/自身音效",
  "/soundeffectsparty": "/小队成员音效",
  "/soundeffectsother": "/他人音效",
  "/systemsoundsspeaker": "/扬声器系统音",
  "/tiltcamera": "/第三人称视角俯视角度",
  "/mountbgm": "/坐骑音乐",
  "/performsounds": "/演奏音量",
  "/emote": "/感情表现",
  "/surprised": "/惊讶",
  "/angry": "/不满",
  "/furious": "/愤怒",
  "/blush": "/害羞",
  "/bow": "/行礼",
  "/cheer": "/加油",
  "/clap": "/拍手",
  "/beckon": "/招手",
  "/comfort": "/安慰",
  "/cry": "/哭泣",
  "/dance": "/跳舞",
  "/doubt": "/质疑",
  "/doze": "/打盹",
  "/fume": "/后悔",
  "/goodbye": "/道别",
  "/wave": "/挥手",
  "/huh": "/莫名",
  "/joy": "/高兴",
  "/kneel": "/下跪",
  "/chuckle": "/轻笑",
  "/laugh": "/大笑",
  "/lookout": "/张望",
  "/me": "/展示",
  "/no": "/摇头",
  "/deny": "/否定",
  "/panic": "/慌乱",
  "/point": "/指向",
  "/poke": "/戳指",
  "/congratulate": "/称赞",
  "/psych": "/激励",
  "/salute": "/敬礼",
  "/shocked": "/震惊",
  "/shrug": "/耸肩",
  "/rally": "/鼓励",
  "/soothe": "/安抚",
  "/stagger": "/迷糊",
  "/stretch": "/伸展",
  "/sulk": "/愠怒",
  "/think": "/思考",
  "/upset": "/失望",
  "/welcome": "/欢迎",
  "/yes": "/点头",
  "/thumbsup": "/肯定",
  "/examineself": "/自视",
  "/pose": "/摆造型",
  "/blowkiss": "/飞吻",
  "/grovel": "/下跪认错",
  "/happy": "/欣喜若狂",
  "/disappointed": "/大失所望",
  "/lounge": "/坐下",
  "/groundsit": "/坐下到地上",
  "/airquotes": "/引用",
  "/gcsalute": "/军礼",
  "/gcsalute": "/军礼",
  "/gcsalute": "/军礼",
  "/pray": "/祈祷",
  "/imperialsalute": "/帝国式军礼",
  "/visor": "/头部装备",
  "/megaflare": "/百万核爆",
  "/crimsonlotus": "/练武",
  "/charmed": "/魅惑拥抱",
  "/cheeron": "/声援小蓝",
  "/cheerwave": "/声援小黄",
  "/cheerjump": "/声援小红",
  "/straightface": "/平常",
  "/smile": "/微笑",
  "/grin": "/笑颜",
  "/smirk": "/自信",
  "/taunt": "/无畏",
  "/shuteyes": "/闭目",
  "/sad": "/悲伤",
  "/scared": "/恐怖",
  "/amazed": "/意外",
  "/ouch": "/痛苦",
  "/annoyed": "/反感",
  "/alert": "/吃惊",
  "/worried": "/担心",
  "/biggrin": "/咧嘴",
  "/reflect": "/沉思",
  "/furrow": "/皱眉",
  "/scoff": "/苦笑",
  "/throw": "/投掷",
  "/changepose": "/改变姿势",
  "/stepdance": "/踢踏舞",
  "/harvestdance": "/丰饶之舞",
  "/balldance": "/宫廷之舞",
  "/mandervilledance": "/绅士之舞",
  "/stroke": "/抚摸",
  "/handover": "/递交",
  "/bombdance": "/火盆舞",
  "/hurray": "/胜利欢呼",
  "/slap": "/甩巴掌",
  "/hug": "/拥抱",
  "/embrace": "/深情拥抱",
  "/hildibrand": "/绅士风度",
  "/fistbump": "/对拳",
  "/thavdance": "/萨维奈舞",
  "/golddance": "/黄金之舞",
  "/sundance": "/太阳之舞",
  "/battlestance": "/准备战斗",
  "/victorypose": "/欢呼胜利",
  "/backflip": "/后空翻",
  "/easterngreeting": "/抱拳礼",
  "/eureka": "/灵光一现",
  "/mogdance": "/莫古莫古舞",
  "/haurchefant": "/太棒了",
  "/easternstretch": "/热身",
  "/easterndance": "/东方传统舞蹈",
  "/rangerpose1r": "/战队演武正红一式",
  "/rangerpose2r": "/战队演武正黑二式",
  "/rangerpose3r": "/战队演武正黄三式",
  "/wink": "/右飞眼",
  "/rangerpose1l": "/战队演武逆红一式",
  "/rangerpose2l": "/战队演武逆黑二式",
  "/rangerpose3l": "/战队演武逆黄三式",
  "/facepalm": "/捂脸",
  "/zantetsuken": "/斩铁剑",
  "/flex": "/肉体之美",
  "/respect": "/默哀",
  "/sneer": "/阴险",
  "/prettyplease": "/撒娇",
  "/playdead": "/装死",
  "/iceheart": "/寒冰的幻想",
  "/moonlift": "/日月之舞",
  "/dote": "/表达爱意",
  "/spectacles": "/托眼镜",
  "/songbird": "/小黄莺之舞",
  "/waterfloat": "/浮水",
  "/waterflip": "/水中翻跟头",
  "/puckerup": "/嘟嘴",
  "/powerup": "/蓄力迸发",
  "/easternbow": "/行东方礼",
  "/squats": "/深蹲",
  "/pushups": "/俯卧撑",
  "/situps": "/仰卧起坐",
  "/breathcontrol": "/深呼吸",
  "/converse": "/说话",
  "/concentrate": "/认真",
  "/disturbed": "/困惑",
  "/simper": "/柔和",
  "/beam": "/满足",
  "/attention": "/立正",
  "/atease": "/稍息",
  "/box": "/练拳",
  "/ritualprayer": "/祝祷",
  "/tremble": "/害怕",
  "/winded": "/单膝跪地",
  "/aback": "/大吃一惊",
  "/greet": "/打招呼",
  "/boxstep": "/方形步",
  "/sidestep": "/侧步",
  "/ultima": "/究极",
  "/yoldance": "/胡鹰之舞",
  "/splash": "/撩水",
  "/sweat": "/好热",
  "/shiver": "/好冷",
  "/elucidate": "/说明",
  "/ponder": "/思索",
  "/leftwink": "/左飞眼",
  "/getfantasy": "/幻想舞步",
  "/popotostep": "/波波托步",
  "/hum": "/哼歌",
  "/confirm": "/确认",
  "/scheme": "/说明计划",
  "/endure": "/忍耐",
  "/tomestone": "/神典石",
  "/heeltoe": "/趾踵步",
  "/goobbuedo": "/古菩步",
  "/gratuity": "/心意",
  "/fistpump": "/振作精神",
  "/reprimand": "/提醒",
  "/sabotender": "/优雅仙人刺",
  "/mandervillemambo": "/绅士舞步",
  "/laliho": "/啦哩吼",
  "/simulationm": "/欧米茄M架势",
  "/simulationf": "/欧米茄F架势",
  "/toast": "/干杯",
  "/lean": "/背靠",
  "/headache": "/头痛",
  "/snap": "/打响指",
  "/breakfast": "/吃面包",
  "/read": "/看书",
  "/insist": "/坚持主张",
  "/consider": "/疑问",
  "/wasshoi": "/嘿哟",
  "/flowershower": "/花雨",
  "/flamedance": "/火焰之舞",
  "/highfive": "/击掌",
  "/guard": "/巡视",
  "/malevolence": "/诅咒",
  "/beesknees": "/蜜蜂之舞",
  "/lalihop": "/啦哩吼舞",
  "/eatriceball": "/吃饭团",
  "/eatapple": "/吃苹果",
  "/wringhands": "/搓手",
  "/sweep": "/扫地",
  "/paintblack": "/黑色陆行鸟之笔",
  "/paintred": "/红色陆行鸟之笔",
  "/paintyellow": "/黄色陆行鸟之笔",
  "/paintblue": "/蓝色陆行鸟之笔",
  "/fakesmile": "/假笑",
  "/pantomime": "/默剧",
  "/vexed": "/不解",
  "/shush": "/嘘",
  "/eatpizza": "/吃披萨",
};

export { textCommand };
