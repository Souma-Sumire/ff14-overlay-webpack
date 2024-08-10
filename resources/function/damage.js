const kShiftFlagValues = ['3E', '113', '213', '313']
const kShiftFlagValues2 = ['A10', 'E']

function getDamage(e) {
  let offset = 0;
  const flags = e.line[8] ?? ''
  if (kShiftFlagValues.includes(flags) || kShiftFlagValues2.includes(flags)) {
    offset += 2
  }
  function getEffect() {
    if (e.line[8 + offset].length < 3) return "";
    switch (e.line[8 + offset].substr(e.line[8 + offset].length - 3, 1)) {
      case "1":
        return "暴击";
      case "2":
        return "直击";
      case "3":
        return "直暴";
      default:
        return "";
    }
  }
  let result = {
    type: "unknown",
    damageType: "unknown",
    damageEffect: "unknown",
    skillName: e.line[5],
    skillID: e.line[4],
    value: 0,
    fromID: e.line[2],
    fromIsFriendly: e.line[2].substring(0, 1) === "1",
    fromIsEnemy: e.line[2].substring(0, 1) === "4",
    fromName: e.line[3],
    targetID: e.line[6],
    targetisFriendly: e.line[6].substring(0, 1) === "1",
    targetisEnemy: e.line[6].substring(0, 1) === "4",
    targetName: e.line[7],
  };
  let damage = e.line[9 + offset].padStart(8, "0");
  if (damage[4] !== "4") {
    result.value = parseInt(damage.substring(0, 4), 16);
  } else {
    let A = damage.substring(0, 2);
    let B = damage.substring(2, 4);
    // let C = damage.substring(4, 6);
    let D = damage.substring(6, 8);
    let BsubD = ("0x" + B - ("0x" + D)).toString(16).toUpperCase();
    if (BsubD.length === 1) BsubD = "0" + BsubD;
    result.value = parseInt(D + A + BsubD, 16);
  }
  if (/^F.*[^13456]$/.test(e.line[8 + offset])) {
    return result;
  } else if (/1$/.test(e.line[8 + offset])) {
    if (result.value === 0) {
      result.type = "damage";
      result.damageType = "dodge";
      result.damageEffect = "回避";
    } else {
      return result;
    }
  } else if (/33$/.test(e.line[8 + offset])) {
    result.type = "damage";
    result.damageType = "death";
    result.damageEffect = "即死";
  } else if (/7?[1-4]\w{3}[35]$|[16]$/.test(e.line[8 + offset])) {
    result.type = "damage";
    result.damageType = "physics";
    result.damageEffect = getEffect();
  } else if (/5\w{4}$|^E$/.test(e.line[8 + offset])) {
    result.type = "damage";
    result.damageType = "magic";
    result.damageEffect = getEffect();
  } else if (/^(?:\d0)?3$|6\w{4}$/.test(e.line[8 + offset])) {
    result.type = "damage";
    result.damageType = "darkness";
    result.damageEffect = getEffect();
  } else if (/1.{3}4$/.test(e.line[8 + offset])) {
    result.type = "heal";
    result.damageType = "heal";
    result.damageEffect = "暴疗";
  } else if (/4$/.test(e.line[8 + offset])) {
    result.type = "heal";
    result.damageType = "heal";
    result.damageEffect = "  ";
  }
  return result;
}
export { getDamage };
