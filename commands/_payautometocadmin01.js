/*CMD
  command: /payautometocadmin01
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
var rt = Bot.getProperty("wallet")
let cur=Bot.getProperty("cur")
if(telegramid&&amount&&wd){
let msgid=Bot.getProperty("mgid"+telegramid+wd)
let inf=Bot.getProperty("user_info"+telegramid)
let name=inf.user_info.first_name
let tex="👤 "+'<a href="'+'tg://user?id='+telegramid+'">'+name+'</a>'+" | "+"<code>"+telegramid+"</code>"
Bot.setProperty("wdstatus"+telegramid+wd,"✅ Paid","string")
let res = Libs.ResourcesLib.anotherUserRes("balance", telegramid);
}}
var pk = Bot.getProperty("cp_privatekey01","🛑 Not Set")
var wat = User.getProperty("Wallet")
let array=params.split(' ')
var amount = array[1]*1
var amo = amount*1000000
User.setProperty("amo", amo, "string")
HTTP.post( {
    url: "https://tronb.herokuapp.com/sendtrx",
    success: '/onwithdrawntfy01',
    body: {'receiver' : wat, 'amount' : amo , 'private_key' : pk }
});
