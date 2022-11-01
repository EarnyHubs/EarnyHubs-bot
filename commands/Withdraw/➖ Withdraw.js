/*CMD
  command: ➖ Withdraw
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Withdraw

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let bannnk=Bot.getProperty("banuser"+user.telegramid)
if(bannnk=="banned"){
//cant access
return
}
let go1=Bot.getProperty("wddismessage")
let go2=Bot.getProperty("wdendisstats01")
if(go2=="en"){
Bot.sendMessage(go1)
return
}
let bal = Libs.ResourcesLib.userRes("balance")

let wall=Bot.getProperty("wallet"+user.telegramid)
var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "AdminCUR" // field name
})
var min = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "Wdmin" // field name
})
let zero=Bot.getProperty("zero")
let ds=Bot.getProperty("wdendisstats01")

var mini=30
if(!wall){
var b=[
[{title:"💼 Set/ Change Wallet",command:"/wallets"}]]
let walle=Bot.getProperty("wallet"+user.telegramid)
let cur=Bot.getProperty("cur")
if(!walle){
User.setProperty("walletuserid","not set","string")}else{
User.setProperty("walletuserid",walle,"string")}

var wagas=User.getProperty("walletuserid")
var textal="💡* Your "+TRX+" wallet is: *"+"`"+wagas+"`"
Bot.sendInlineKeyboard(b, textal,{on_result:"/setxms"})
}else{
var payout = Libs.ResourcesLib.userRes("payout")
if(payout.value()>=mini){
var p="📤 *How many "+TRX+" you want to withdraw?*\n\n    *Minimum:* "+30+" "+TRX+"\n    *Maximum:* "+payout.value()+" "+TRX+"\n    _Maximum amount corresponds to your balance_\n\n    ➡* Send now the amount of  you want to withdraw*"
Bot.sendKeyboard("🔙 Back", p)
Bot.runCommand("/wdprivate500")
}else{
Bot.sendMessage("❌ *You have to own at least "+mini+" "+cur+" in your wallet to withdraw!*")
}}
