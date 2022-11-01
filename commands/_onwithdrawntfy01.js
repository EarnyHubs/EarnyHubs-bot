/*CMD
  command: /onwithdrawntfy01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var time = new Date();
var time = time.toLocaleString();
var git = JSON.parse(content)
let txid= git.response.txid
let amount= User.getProperty("trugy")
let cur= Bot.getProperty("cur")
let address= User.getProperty("Wallet")
let goo= amount*0.08
let gooo=goo.toFixed(2)
let wdlist = Libs.ResourcesLib.userRes("withdrawalslist")
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
let mention_name='<a href="tg://user?id='+user.telegramid+'">'+valid_name+'</a>'
var Lang = {
    'amount' : amount+" "+cur,
   'first_name' :user.first_name,
'username':u_name,
'id':user.telegramid,
'txurl':txurl2,
'txnid':txid,
'usd':gooo,
'name':valid_name,
'mention':mention_name,
'balance':Libs.ResourcesLib.userRes("balance").value().toFixed(3),
'cur':cur,
'servertime':new Date().toLocaleString('en-US', {timeZone: 'Africa/Addis_Ababa' 
})
};
 let withdrawal_text=Bot.getProperty("withdrawal_channel_text")
if(!withdrawal_text){
var txt="➖ <b>New Withdrawal</b>"+" \n\n🤵 <b>Paid to: </b>"+user.first_name+"\n💳 Amount: <b>"+amount+" "+cur+" </b>\n\n🔗<b> Transaction Hash </b>:\n"+txurl2
var par="html"
}else{
var par="html"
var txt= withdrawal_text.replace(/{([a-z_]+)}/gi, function(fullmatch, key) {
  return Lang[key] ? Lang[key] : fullmatch;
});
}
let y=amount
let k="💵 *Withdrawal Paid*\nThe owner *Automatically Paid *your withdrawal of *"+amount+" "+cur+"* on your wallet"+" \n"+"`"+ address+"`"+"\n\n"+txid
Bot.sendMessage(k)
Bot.setProperty("wdtxid"+user.telegramid+wdlist.value(),txid,"string")
Bot.setProperty("wdstatus"+user.telegramid+wdlist.value(),"✅ Paid","string")
let apst=Bot.getProperty("autopoststatus")
if(apst=="en"){
let chann=Bot.getProperty("autopost")
Api.sendMessage({ chat_id : chann , text :txt, parse_mode:par, disable_web_page_preview: true });}
var ty = "0"
User.setProperty("trugy")
