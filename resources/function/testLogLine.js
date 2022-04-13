"use strict";

export function testLogLine(handleLogLine, testLog, speed = 1) {
  let timeoutAll = 0;
  handleLogLine({ line: testLog[0] });
  for (let i = 1; i < testLog.length; i++) {
    let timeout = new Date(testLog[i][1]) - new Date(testLog[i - 1][1]);
    timeoutAll += timeout;
    setTimeout(() => {
      handleLogLine({ line: testLog[i] });
    }, timeoutAll / speed);
  }
}
