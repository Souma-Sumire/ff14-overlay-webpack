const buffs60 = [
  //-------------------------------------
  [30, "神圣领域", 10, 420, [19], 0],
  [43, "死斗", 10, 240, [3, 21], 0],
  [3638, "行尸走肉", 10, 300, [32], 0],
  [16152, "超火流星", 10, 360, [37], 0],
  [140, "天赐", 0, 180, [24], 0],
  [25862, "礼仪之铃", 15, 180, [24], 0],
  [25868, "疾风怒涛", 20, 120, [28], 0],
  [25874, "大宇宙", 15, 180, [33], 0],
  [27830, "魂灵风息", 0, 120, [40], 0],
  //-------------------------------------
  [7549, "牵制", 10, 90, [2, 4, 20, 22, 30, 34, 39], 1],
  [7560, "昏乱", 10, 90, [7, 25, 26, 27, 35, 36], 1],
  [7535, "雪愁", 10, 60, [1, 3, 19, 21, 32, 37], 1], //写雪仇会被念成雪球
  [3540, "幕帘", 30, 90, [19], 1],
  [7385, "大翅膀", 5, 120, [19], 1],
  [7388, "摆脱", 15, 90, [21], 1],
  [16471, "布道", 15, 90, [32], 1],
  [16160, "光心", 15, 90, [37], 1],
  [16536, "节制", 20, 120, [24], 1],
  [7405, "行吟", 15, 120, [23], 1],
  [16889, "策动", 15, 120, [31], 1],
  [16012, "桑巴", 15, 120, [38], 1],
  [25857, "抗死", 10, 120, [35], 1],
  // [25789, "即兴舞步", 30, 120, [38], 1],//太脑残了没人会用这个技能
  [18305, "魔法锤", 10, 90, [36], 1],
  [11388, "臭气", 15, 15, [36], 1],
  //--------------------------------------
  [118, "战歌", 15, 120, [5, 23], 2],
  [25785, "光神曲", 15, 110, [5, 23], 2],
  [2258, "背刺", 15, 60, [29, 30], 2],
  [24405, "神秘环", 20, 120, [39], 2],
  [3557, "连祷", 15, 120, [4, 22], 2],
  [7398, "龙肠", 20, 120, [4, 22], 2],
  [7396, "义结金兰", 15, 120, [2, 20], 2],
  [25801, "灼热之光", 30, 120, [27], 2],
  [7436, "连环计", 15, 120, [28], 2],
  [7520, "鼓励", 20, 120, [35], 2],
  [16196, "技巧舞", 20, 120, [38], 2],
  [16011, "探戈", 20, 120, [38], 2],
  [16552, "占卜", 15, 120, [33], 2],
];

const raidBuffs60 = buffs60.reduce((pre, cur, index) => {
  let i = 0;
  pre[cur[i++]] = {
    tts: cur[i++],
    duration: cur[i++],
    recast1000ms: cur[i++],
    job: cur[i++],
    type: cur[i++],
    order: index,
  };
  return pre;
}, {});

export { raidBuffs60 };
