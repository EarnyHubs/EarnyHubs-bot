/*CMD
  command: /setxms
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Tronlink 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg_id = options.result.message_id;
User.setProperty("mswd" , msg_id,  "integer");


var b=[
[{title:"💼 Set/ Change Wallet",command:"/sewa "+msg_id}]]
Bot.editInlineKeyboard(b,msg_id)
