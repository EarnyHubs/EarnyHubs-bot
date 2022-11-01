/*CMD
  command: /broadcast4
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Broadcast
  answer: 
  keyboard: 
  aliases: 
CMD*/

var us = Bot.getProperty("OnW_all", { list: {} })
var adsg4 = Libs.ResourcesLib.anotherChatRes("adsg4", "global")
if (!adsg4.value()) {
  return
}
var msg =
  "‼️ *New Tasks Available\n\n🔔 You have " +
  adsg4.value() +
  " New Tasks Available In 👁 Watch Ads*"
Bot.setProperty("ads4", msg, "string")
adsg4.set(0)
Bot.sendMessage("in progress")
for (var i in us.list) {
  var ase = us.list[i]
Bot.run({
    command: "/ads_broadcastingc4 " + ase
  })
}
