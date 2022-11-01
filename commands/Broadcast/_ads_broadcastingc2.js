/*CMD
  command: /ads_broadcastingc2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Broadcast
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (params) {
  var users = params
  var msg = Bot.getProperty("ads2")
  Bot.sendMessageToChatWithId(users, msg)
  return
}

