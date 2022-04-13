/*
 * @Author: Souma
 * @LastEditTime: 2021-09-29 06:18:56
 */
function logProcessing(line, type) {
  if (logsIndex[type]) for (const key in logsIndex[type]) result[key] = line[logsIndex[type][key]];
  return result;
}
let logsIndex = {
    action: {
      casterID: 2,
      casterName: 3,
      actionID: 4,
      actionName: 5,
      targetID: 6,
      targetName: 7,
      castTime: 8,
    },
    status: {
      statusID: 2,
      statusName: 3,
      statusTime: 4,
      casterID: 5,
      casterName: 6,
      targetID: 7,
      targetName: 8,
    },
  },
  result = {};
export { logProcessing };
