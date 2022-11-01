/*CMD
  command: /broadcast3
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Broadcast
  answer: 
  keyboard: 
  aliases: 
CMD*/

var us = Bot.getProperty("OnJ_all", { list: {} })
var adsg3 = Libs.ResourcesLib.anotherChatRes("adsg3", "global")
if (!adsg3.value()) {
  return
}
var msg =
  "‼️ *New Tasks Available\n\n🔔 You have " +
  adsg3.value() +
  " New Tasks Available In 📣 Join Chats*"
Bot.setProperty("ads3", msg, "string")
adsg3.set(0)
Bot.sendMessage("in progress")
for (var i in us.list) {
  var ase = us.list[i]

  Bot.run({
    command: "/ads_broadcastingc3 " + ase
  })
}

