"use strict";
const input = document.querySelector("#i");
const output = document.querySelector("#o");
const unopenedUl = document.querySelector("#unopened");

input.addEventListener("keyup", () => {
  let text = input.value;
  unopenedUl.innerHTML = "";
  const regex = /RegularExpression="(?<reg>[^"]+?)">/g;

  output.value = text.replaceAll(regex, (_matched, capture) => {
    const a_echo = capture.match(/\^\.\{1[45]\} ?00:(.{4}):(.+)/);
    const b_cast = capture.match(/\^\.\{1[45]\} ?(1[4567]):(.+)/);
    const c_effect = capture.match(/(?:\((.*)\))?? ??(gains|loses) the effect of ??(.+)( ??for ??(.+) ??Seconds??)?/);
    const d_added = capture.match(/\^\.\{27\}Added new combatant (.+?)\).+HP: ([^ ]+)/);
    const y_special = capture.match(/\^\.\{1[45]\}(?=\()(.+)/);
    const z_other = capture.match(/\^\.\{1[45]\} ?([\d\w]+):(.+)/);
    const z_other2 = capture.match(/\\\[\.\.:\.\.:\.\.\\\.\.\.\.\\\] (.+)/);
    const z_other3 = capture.match(/\\\] (\d.+)/);
    const network = capture.match(/^\^\d+/);
    if (a_echo) {
      return `RegularExpression="\^\.\{14\} \\w+ 00:${a_echo[1]}::?${a_echo[2]}">`;
    } else if (b_cast) {
      return `RegularExpression="\^\.\{14\} \\w+ ${b_cast[1]}:${b_cast[2]}">`;
    } else if (c_effect) {
      return `RegularExpression="\^\.\{14\} \\w+ ${c_effect[2] === "gains" ? "1A" : "1E"}:[^:]+:${c_effect[3]}:${
        c_effect[4] ?? "[^:]+"
      }:.{8}:${c_effect[1]}:">`;
    } else if (d_added) {
      return `RegularExpression="\^\.\{14\} \\w+ 03:.{8}:${d_added[1]}:[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:${
        d_added[2] ?? "[^:]*"
      }:">`;
    } else if (y_special) {
      return `RegularExpression="\^\.\{14\} \\w+ ${y_special[1]}">`;
    } else if (z_other) {
      return `RegularExpression="\^\.\{14\} \\w+ ${z_other[1]}:${z_other[2]}">`;
    } else if (z_other2) {
      return `RegularExpression="\^\.\{14\} \\w+ ${z_other2[1]}">`;
    } else if (z_other3) {
      return `RegularExpression="\^\.\{14\} \\w+ ${z_other3[1]}">`;
    } else if (network) {
      return `RegularExpression="${network.input}">`;
    } else {
      let li = document.createElement("li");
      li.innerText = capture;
      unopenedUl.append(li);
      return `RegularExpression="${capture}">`;
    }
  });
});
