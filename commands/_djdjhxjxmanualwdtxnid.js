/*CMD
  command: /djdjhxjxmanualwdtxnid
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(!message){
Bot.sendMessage("*Invaild txn id. enter txnid again*")
Bot.runCommand("/djdjhxjxmanualwdtxnid")
return
}
var txid=message
var cur=Bot.getProperty("cur")
var js=User.getProperty("last_usage_idn")
let name=js.name
let id=js.id
let msgid=js.msgid
let wdid=js.wdid
let amount=js.amount*1
var wallet= Bot.getProperty("wallet"+id)
Bot.setProperty("wdstatus"+id+wdid,"✅ Paid","string")
let mgiad=User.getProperty("mgid22"+id+wdid)
Bot.setProperty("wdtxid"+id+wdid,message,"string")
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
var d="Payment Successfully Paid To: "+'<a href="'+'tg://user?id='+id+'">'+name+'</a>'
Api.deleteMessage({chat_id:chat.chatid,message_id:msgid})
Api.editMessageText({chat_id:chat.chatid,message_id:mgiad,text:d,parse_mode:"html"})
let tx="💵 <b>Withdrawal Paid</b>\nThe owner <b>Manually Paid</b> your withdrawal of <b>"+amount+" "+cur+"</b> on your wallet"+" \n"+"<code>"+ wallet+"</code>"+"\n\n"+message

Bot.setProperty("wd_manage_st"+id+wdid,true,'boolean')
var pending=Bot.getProperty("pending_wds", [ ])
if(pending.length>0){
const index = pending.findIndex(x => x.w_id == wdid); 
delete pending[index]
let pe_d=pending.filter(function (el) {

    return el != null && el != "";
  });
Bot.setProperty("pending_wds", pe_d,"json")
}
Api.sendMessage({chat_id:id,text:tx,parse_mode:"html"})
let user=Bot.getProperty("user_info"+id).user_info
if(!user.last_name){
var valid_name=user.first_name
}else{

var valid_name=user.first_name+" "+user.last_name
}
if(!user.username){
var u_name= valid_name
}else{
var u_name="@"+user.username
}
let txurl2='<a href="https://tx.botdev.me/'+cur+'/'+txid+'">'+txid+' </a>'

let mention_name='<a href="tg://user?id='+id+'">'+valid_name+'</a>'
var Lang = {
    'amount' : amount+" "+cur,
   'first_name' :user.first_name,
'username':u_name,
'id':user.telegramid,
'txurl':txurl2,
'txnid':txid,
'name':valid_name,
'mention':mention_name,
'balance':Libs.ResourcesLib.anotherUserRes("balance", id).value().toFixed(8),
'cur':cur
};
let withdrawal_text=Bot.getProperty("withdrawal_channel_text")
if(!withdrawal_text){
var txt="➖ *New Withdrawal Paid*"+" \n\n🤵 Paid to: *"+user.first_name+"*"+"\n\n*💌 Address: *"+wallet+"\n\n💵 Amount: *"+amount+" "+cur+"*\n\n💳 *Txid :*\n"+"["+txid+"]"+"(https://tx.botdev.me/"+cur+"/"+txid+")"
var par="Markdown"
}else{
var par="html"
var txt= withdrawal_text.replace(/{([a-z_]+)}/gi, function(fullmatch, key) {
  return Lang[key] ? Lang[key] : fullmatch;
});
}
let apst=Bot.getProperty("autopoststatus","disable")
if(apst=="en"){
let chann=Bot.getProperty("autopost","jzhxh")
Api.sendMessage({ chat_id : chann , text :txt, parse_mode:par, disable_web_page_preview: true })
}
