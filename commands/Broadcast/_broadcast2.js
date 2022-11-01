/*CMD
  command: /broadcast2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Broadcast
  answer: 
  keyboard: 
  aliases: 
CMD*/

var us = Bot.getProperty("OnM_all", { list: {} })
var adsg2 = Libs.ResourcesLib.anotherChatRes("adsg2", "global")
if (!adsg2.value()) {
  return
}
var msg =
  "‼️ *New Tasks Available\n\n🔔 You have " +
  adsg2.value() +
  " New Tasks Available In 🤖 Message Bots*"
Bot.setProperty("ads2", msg, "string")
adsg2.set(0)
Bot.sendMessage("in progress")
for (var i in us.list) {
  var ase = us.list[i]
  Bot.run({
    command: "/ads_broadcastingc2 " + ase
  })
}

