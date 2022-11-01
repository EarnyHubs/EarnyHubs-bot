/*CMD
  command: /wssyfd45
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var cur=Bot.getProperty("cur")
let ad=Bot.getProperty("admin01")
if(chat.chatid==ad){
if(params){
let arr=params.split(' ')
let telegramid=arr[0]
let amount=arr[1]*1
let wdid=arr[2]
let id=Bot.getProperty("mgid"+telegramid+wdid)
var wall=Bot.getProperty("wallet"+telegramid)
let inf=Bot.getProperty("user_info"+telegramid,[ ])
let name=inf.user_info.first_name
var txt="Payment to: "+'<a href="'+'tg://user?id='+telegramid+'">'+name+'</a>'
let json={
name:name,
id:telegramid,
amount:amount,
msgid:id,
wallet:wall,
wdid:wdid
}
txt+="\n\nPayment amount <code>"+amount+" "+cur+"</code> "+" to the wallet <code>"+wall+"</code>"
Api.editMessageText({chat_id:chat.chatid,message_id:id,text:txt,parse_mode:"html"})
let r="\n<b>Now send me txnid that you send payment to this user</b>"
Api.sendMessage({chat_id:chat.chatid,text:r,parse_mode:"html",reply_to_message_id:id,on_result:"/resultdndbxodn8263"+" "+telegramid+" "+wdid})
User.setProperty("last_usage_idn",json,"json")
Bot.runCommand("/djdjhxjxmanualwdtxnid")
}
}else{
Bot.runCommand("/start")
}
