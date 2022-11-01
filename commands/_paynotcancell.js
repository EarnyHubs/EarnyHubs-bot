/*CMD
  command: /paynotcancell
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
let array=params.split(' ')
let telegramid=array[0]
let amount=array[1]*1
let wd=array[2]
var cur=Bot.getProperty("cur")
if(telegramid&&amount&&wd){
let msgid=Bot.getProperty("mgid"+telegramid+wd)
let inf=Bot.getProperty("user_info"+telegramid)
let name=inf.user_info.first_name
Bot.setProperty("wd_manage_st"+telegramid+wd,true,'boolean')
let tex="👤 "+'<a href="'+'tg://user?id='+telegramid+'">'+name+'</a>'+" | "+"<code>"+telegramid+"</code>"+"\n└ Refunded Balance: "+"<b>"+amount+" "+cur+"</b>"
Bot.setProperty("wdstatus"+telegramid+wd,"Refunded","string")
let res = Libs.ResourcesLib.anotherUserRes("balance", telegramid);
res.add(amount)
var id7=Bot.getProperty("m_requestid"+telegramid+wd,"88")
if(id7){
Api.sendMessage({chat_id:telegramid,text:"➕ *Balance Refunded:* +"+amount+" "+cur,parse_mode:"markdown", reply_to_message_id:id7,on_error:"/errorha8383poen"+" "+telegramid+" "+wd+" "+amount})
}else{
Api.sendMessage({chat_id:telegramid,text:"➕ *Balance Refunded:* +"+amount+" "+cur,parse_mode:"markdown"})
}
var pending=Bot.getProperty("pending_wds", [ ])

if(pending.length>0){

const index = pending.findIndex(x => x.w_id == wd); 
delete pending[index]

let pe_d=pending.filter(function (el) {

    return el != null && el != "";
  });
Bot.setProperty("pending_wds", pe_d,"json")
}

Api.editMessageText({chat_id:chat.chatid,text:tex,message_id:msgid,parse_mode:"html"})
}}
