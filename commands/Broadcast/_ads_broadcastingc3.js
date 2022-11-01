/*CMD
  command: /ads_broadcastingc3
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Broadcast
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
var users = params
var msg = Bot.getProperty("ads3")
Bot.sendMessageToChatWithId(users, msg)
return
}
