/*
 * @Author: Souma
 * @LastEditTime: 2021-08-24 11:50:40
 */
let TTS = (t) => (t ? callOverlayHandler({ call: "cactbotSay", text: t }) : "");
export { TTS };
