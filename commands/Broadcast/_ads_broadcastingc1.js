/*CMD
  command: /ads_broadcastingc1
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
  var msg = Bot.getProperty("ads1")
  Bot.sendMessageToChatWithId(users, msg)
  return
}
