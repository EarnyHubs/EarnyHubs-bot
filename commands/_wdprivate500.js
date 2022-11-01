/*CMD
  command: /wdprivate500
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var minn = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "Wdmin" // field name
})
let aw=Bot.getProperty("autowithdrawal01")
var min=0.1
let bot_username=Bot.getProperty("bot_username")
var timenow=new Date();
let wda = Libs.ResourcesLib.userRes("withdraw")
let wdlist = Libs.ResourcesLib.userRes("withdrawalslist")
var time = new Date();
var time = time.toLocaleString();
var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "AdminCUR" // field name
})
let btc = Libs.ResourcesLib.userRes("payout");
var push=Bot.getProperty("withdrawals_history"+user.telegramid,[ ])
let wall=Bot.getProperty("wallet"+user.telegramid)
let aj= Bot.getProperty("aj")
let payout = Libs.ResourcesLib.userRes("payout");
if(!wall){
var bx=[
[{title:"💼 Set/ Change Wallet",command:"/sewa"}]]
let walle=Bot.getProperty("wallet"+user.telegramid)

if(!walle){
User.setProperty("walletuserid","not set","string")}else{
User.setProperty("walletuserid",walle,"string")}
var wagas=User.getProperty("walletuserid")
var textal="💡* Your "+cur+" wallet is: *"+"`"+wagas+"`"

Bot.sendInlineKeyboard(bx, textal,{on_result:"/setxms"})
}else{
if(message=="🔙 Back"){
Bot.runCommand("/start")
}else{
let value = message;
let wallet=User.getProperty("wallet")
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

if(!isNumeric(value)){
Bot.sendMessage("❌ Send a Value over "+min+", and under (or Max) "+btc.value())
}else{
if((btc.value()<1*message) | (message*1<min)){
Bot.sendMessage("❌ Send a value over "+min+", and under (or max) "+btc.value())
return }
let amounts = message;
var amount=amounts*1
if((btc.value()>=min)&&(amount>=min)&&(amount<=btc.value())){
var last_run_at = User.getProperty("last_run_at");
if(last_run_at){
   var duration_in_hours = ((new Date) - last_run_at) / 1000/60;
}else{
   var duration_in_hours = 99;
}
if(duration_in_hours<1){
var mgs='_You already made and withdrawan. Please come back again after_ *'
let kl=1-duration_in_hours
if(kl<1){
let t2= kl
let pers=100*t2
let remtime=(pers/100)*60
mgs+=(remtime.toFixed(0))+" Second"
}else{
let detect=kl.toFixed(0)
let d1=100*detect
let d2=(d1/100)*60
mgs+=(d2.toFixed(0)/60)+" Mintue "
let detu=kl-detect
if(detu>0){
let t11=kl-detect
let t20= t11*100
let t30=(t20/100)*60
mgs+=(t30.toFixed(0))+" Second"
}}
mgs+="* _later_"
Bot.sendMessage(mgs)
return
}else{
User.setProperty("trugy", message, "string")
User.setProperty("last_run_at", (new Date), "datetime")
}
 btc.removeAnyway(parseFloat(amount));
wda.add(amount)
wdlist.add(1)
let xx =message*1
let srbp = Libs.ResourcesLib.userRes("withdrawallist");
let hst = Bot.getProperty("withdrawals"+user.telegramid)
srbp.add(1)
let bmwx = Libs.ResourcesLib.anotherUserRes("stwd", 452080432) 
bmwx.add(message*1)
let wdlist2 = Libs.ResourcesLib.userRes("withdrawalslist")
if(!hst){
Bot.setProperty("withdrawals"+user.telegramid,"➖ Withdrawal: #1\n📅 Time: "+time+" \n💰 Amount: "+message+" "+cur+" \n💳 To the wallet: "+" "+wall+""," string")}else{
Bot.setProperty("withdrawals"+user.telegramid,hst+"\n\n"+"➖ Withdrawal: #"+wdlist.value()+"\n📅 Time: "+time+" \n💰 Amount: "+message+" "+cur+" \n💳 To the wallet: "+" "+wall+"")}
if(aw!="enabled"){
Bot.sendMessage("✅ *Withdrawal Requested*\n_You will receive your payment within 24 hours!_\n\n💳 Transaction Details:"+"\n"+message+" "+cur+" "+"to the wallet\n"+"*"+wall+"*")
let megay={
user_info: 
   {
user_first_name: user.first_name,
user_last_name: user.last_name,
user_full_name: user.first_name+" "+user.last_name,
user_telegramid:user.telegramid,
user_username: user.username,
user_mention_name: " ["+user.first_name+"]"+"("+"tg://user?id="+user.telegramid+")",
user_mention_id: "["+user.telegramid+"]"+" ("+"tg://user?id="+user.telegramid+")"
},
withdrawal_id: user.telegramid+"-"+wdlist.value() ,
w_id:wdlist2.value(),

bd_time:new Date().toLocaleString('en-US', {timeZone: 'Africa/Addis_Ababa' //edit your country timezone here

})
,
withdrawal_info: {
wd_amount: message, 
wd_time: timenow,
wd_procced_type:"Manually",
wd_procced_text: "Withdrawal Procced Manually",
wd_currency: cur,
wd_wallet: wall,
wd_minimum: min,
wd_maximum: btc.value(),
total_withdrawal_on_that_time: wda.value()
}
	}

var ry=Bot.getProperty("bot_withdrawals")
if(!ry){
var y9=[ ]
}else{
var y9=ry
}

 y9.push(megay)
Bot.setProperty("bot_withdrawals",y9,"json")
var pendi6=Bot.getProperty("pending_wds", [ ])
pendi6.push(megay)
Bot.setProperty("pending_wds", pendi6,"json")
Bot.setProperty("m_requestid"+user.telegramid+wdlist2.value(),request.message_id,'integer')
Bot.setProperty("wd"+user.telegramid+"-"+wdlist2.value(),megay,"json")
push.push(megay)
Bot.setProperty("withdrawals_history"+user.telegramid,push,"json")
let adm_id=Bot.getProperty("admin01")
if(adm_id){
let tcx="#New_Withdrawal_Request\n\n<b>User:</b>"+" "+'<a href="'+'tg://user?id='+user.telegramid+'">'+user.first_name+'</a>'+" \n<b>Amount:</b>"+' <code>'+amount+' '+cur+'</code>\n<b>ID:</b>'+" <code>"+user.telegramid+"</code>"+" #wd"+wdlist.value()+"\n<b>Wallet:</b> <code>"+wall+"</code>"
Bot.setProperty("wdstatus"+user.telegramid+wdlist2.value(),"⏱ Pending","string")
var buttons=[
[{text: "Pay Manually", callback_data: "/wssyfd45"+" "+ user.telegramid+" "+amount+" "+wdlist2.value()},
{text:"Pay Automatically", callback_data:"/payautometocadmin01"+" "+user.telegramid+" "+amount+" "+wdlist2.value()}], [{text:" Cancell & Refund",callback_data:"/paynotcancell"+" "+user.telegramid+" "+amount+" "+wdlist2.value()}]
]
Api.sendMessage({chat_id:adm_id,text:tcx,parse_mode:"html", reply_markup:{inline_keyboard:buttons},on_result:"/resulttosetid4button"+" "+user.telegramid+" "+amount+" "+wdlist2.value()})
}
}else{
let amt=message
let megax={
user_info: 
   {
user_first_name: user.first_name,
user_last_name: user.last_name,
user_full_name: user.first_name+" "+user.last_name,
user_telegramid:user.telegramid,
user_username: user.username,
user_mention_name: " ["+user.first_name+"]"+"("+"tg://user?id="+user.telegramid+")",
user_mention_id: "["+user.telegramid+"]"+" ("+"tg://user?id="+user.telegramid+")"
},
withdrawal_id: user.telegramid+"-"+wdlist.value() ,
w_id:wdlist2.value(),
bd_time:new Date().toLocaleString('en-US', {timeZone: 'Asia/Dhaka' //edit your country timezone here

})
,
withdrawal_info: {
wd_amount: message, 
wd_time: timenow,
wd_procced_type: " Autometically",
wd_procced_text: "Withdrawal Autometically Procced",
wd_currency: cur,
wd_wallet: wall,
wd_minimum: min,
wd_maximum: btc.value(),
total_withdrawal_on_that_time: wda.value()
}
	}

Bot.setProperty("wd"+user.telegramid+"-"+wdlist2.value(),megax,"json")
push.push(megax)
Bot.setProperty("withdrawals_history"+user.telegramid,push,"json")

var ry4=Bot.getProperty("bot_withdrawals")
if(!ry4){
var y94=[ ]
}else{
var y94=ry4
}
 y94.push(megax)
Bot.setProperty("bot_withdrawals",y94,"json")
var pk = Bot.getProperty("cp_privatekey01","🛑 Not Set")
var wat = User.getProperty("Wallet")
var amo = amt*1000000
User.setProperty("amo", amo, "string")
HTTP.post( {
    url: "https://tronb.herokuapp.com/sendtrx",
    success: '/onwithdrawntfy01',
    body: {'receiver' : wat, 'amount' : amo , 'private_key' : pk }
});
}
let yup="Withdrawal°"+wdlist.value()+" "+" "+" ["+user.telegramid+"-"+wdlist.value()+"]("+"t.me/"+bot.name+"?start="+"wdinfo_"+user.telegramid+"-"+wdlist.value()+")"
let rej=Bot.getProperty("wdadmincheck"+user.telegramid)
if(!rej){
Bot.setProperty("wdadmincheck"+user.telegramid,yup,"string")
}else{
Bot.setProperty("wdadmincheck"+user.telegramid,rej+"\n"+yup,"string")
}
       }else{
Bot.sendMessage("*❌ You have to own at least "+min+" "+cur+" in your wallet to withdraw!*")
}}}}
