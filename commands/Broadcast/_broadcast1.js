/*CMD
  command: /broadcast1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Broadcast
  answer: 
  keyboard: 
  aliases: 
CMD*/

var us = Bot.getProperty("OnV_all", { list: {} })
var adsg1 = Libs.ResourcesLib.anotherChatRes("adsg1", "global")
if (!adsg1.value()) {
  return
}
var msg =
  "‼️ *New Tasks Available\n\n🔔 You have " +
  adsg1.value() +
  " New Tasks Available In 💻 Visit Sites*"
Bot.setProperty("ads1", msg, "string")
adsg1.set(0)
Bot.sendMessage("in progress")
for (var i in us.list) {
  var ase = us.list[i]
  Bot.run({
    command: "/ads_broadcastingc1 " + ase
  })
}

