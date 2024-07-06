/*
 * @Author: Souma
 * @LastEditTime: 2021-10-13 08:30:14
 */
let jobList = [
  { ID: "1", en: "GLA", cn: "剑术师", jp: "剣術士", Role: "Tank", IsBaseCLass: true, simple1: "剑", simple2: "剑术" },
  { ID: "2", en: "PGL", cn: "格斗家", jp: "格闘士", Role: "Dps", IsBaseCLass: true, simple1: "格", simple2: "格斗" },
  { ID: "3", en: "MRD", cn: "斧术师", jp: "斧術士", Role: "Tank", IsBaseCLass: true, simple1: "斧", simple2: "斧术" },
  { ID: "4", en: "LNC", cn: "枪术师", jp: "槍術士", Role: "Dps", IsBaseCLass: true, simple1: "枪", simple2: "枪术" },
  { ID: "5", en: "ARC", cn: "弓箭手", jp: "弓術士", Role: "Dps", IsBaseCLass: true, simple1: "弓", simple2: "弓箭" },
  { ID: "6", en: "CNJ", cn: "幻术师", jp: "幻術士", Role: "Healer", IsBaseCLass: true, simple1: "幻", simple2: "幻术" },
  { ID: "7", en: "THM", cn: "咒术师", jp: "呪術士", Role: "Dps", IsBaseCLass: true, simple1: "咒", simple2: "咒术" },
  { ID: "19", en: "PLD", cn: "骑士", jp: "ナイト", Role: "Tank", IsBaseCLass: false, simple1: "骑", simple2: "骑士" },
  { ID: "20", en: "MNK", cn: "武僧", jp: "モンク", Role: "Dps", IsBaseCLass: false, simple1: "僧", simple2: "武僧" },
  { ID: "21", en: "WAR", cn: "战士", jp: "戦士", Role: "Tank", IsBaseCLass: false, simple1: "战", simple2: "战士" },
  { ID: "22", en: "DRG", cn: "龙骑士", jp: "竜騎士", Role: "Dps", IsBaseCLass: false, simple1: "龙", simple2: "龙骑" },
  { ID: "23", en: "BRD", cn: "吟游诗人", jp: "吟遊詩人", Role: "Dps", IsBaseCLass: false, simple1: "诗", simple2: "诗人" },
  { ID: "24", en: "WHM", cn: "白魔法师", jp: "白魔道士", Role: "Healer", IsBaseCLass: false, simple1: "白", simple2: "白魔" },
  { ID: "25", en: "BLM", cn: "黑魔法师", jp: "黒魔道士", Role: "Dps", IsBaseCLass: false, simple1: "黑", simple2: "黑魔" },
  { ID: "26", en: "ACN", cn: "秘术师", jp: "巴術士", Role: "Dps", IsBaseCLass: true, simple1: "秘", simple2: "秘术" },
  { ID: "27", en: "SMN", cn: "召唤师", jp: "召喚士", Role: "Dps", IsBaseCLass: false, simple1: "召", simple2: "召唤" },
  { ID: "28", en: "SCH", cn: "学者", jp: "学者", Role: "Healer", IsBaseCLass: false, simple1: "学", simple2: "学者" },
  { ID: "29", en: "ROG", cn: "双剑师", jp: "双剣士", Role: "Dps", IsBaseCLass: true, simple1: "双", simple2: "双剑" },
  { ID: "30", en: "NIN", cn: "忍者", jp: "忍者", Role: "Dps", IsBaseCLass: false, simple1: "忍", simple2: "忍者" },
  { ID: "31", en: "MCH", cn: "机工士", jp: "機工士", Role: "Dps", IsBaseCLass: false, simple1: "机", simple2: "机工" },
  { ID: "32", en: "DRK", cn: "暗黑骑士", jp: "暗黒騎士", Role: "Tank", IsBaseCLass: false, simple1: "暗", simple2: "暗骑" },
  { ID: "33", en: "AST", cn: "占星术士", jp: "占星術師", Role: "Healer", IsBaseCLass: false, simple1: "占", simple2: "占星" },
  { ID: "34", en: "SAM", cn: "武士", jp: "侍", Role: "Dps", IsBaseCLass: false, simple1: "侍", simple2: "武士" },
  { ID: "35", en: "RDM", cn: "赤魔法师", jp: "赤魔道士", Role: "Dps", IsBaseCLass: false, simple1: "赤", simple2: "赤魔" },
  { ID: "36", en: "BLU", cn: "青魔法师", jp: "青魔道士", Role: "Dps", IsBaseCLass: false, simple1: "青", simple2: "青魔" },
  { ID: "37", en: "GNB", cn: "绝枪战士", jp: "ガンブレイカー", Role: "Tank", IsBaseCLass: false, simple1: "绝", simple2: "绝枪" },
  { ID: "38", en: "DNC", cn: "舞者", jp: "踊り子", Role: "Dps", IsBaseCLass: false, simple1: "舞", simple2: "舞者" },
  { ID: "39", en: "RPR", cn: "钐镰客", jp: "リーパー", Role: "Dps", IsBaseCLass: false, simple1: "镰", simple2: "钐镰" },
  { ID: "40", en: "SGE", cn: "贤者", jp: "賢者", Role: "Healer", IsBaseCLass: false, simple1: "贤", simple2: "贤者" },
  { ID: "41", en: "VPR", cn: "蝰蛇剑士", jp: "ヴァイパー", Role: "Dps", IsBaseCLass: false, simple1: "蛇", simple2: "蝰蛇" },
  { ID: "42", en: "PCT", cn: "绘灵法师", jp: "ピクトマンサー", Role: "Dps", IsBaseCLass: false, simple1: "绘", simple2: "绘灵" },
];
export function getJobByID(id) {
  return jobList.find((job) => job.ID === id.toString());
}
