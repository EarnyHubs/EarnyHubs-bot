/*CMD
  command: /broadcastingc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Broadcast
  answer: 
  keyboard: 
  aliases: 
CMD*/

var msg = Bot.getProperty("broadcasting")
var users = params
Bot.sendMessageToChatWithId(users, msg)

