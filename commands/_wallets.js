/*CMD
  command: /wallets
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let bannnk=Bot.getProperty("banuser"+user.telegramid)
if(bannnk=="banned"){
return
}
var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "AdminCUR" // field name
})
var b=[
[{title:"💼 Set/ Change Wallet",command:"/sewa"}]]
let wall=Bot.getProperty("wallet"+user.telegramid)

if(!wall){
User.setProperty("walletuserid","not set","string")}else{
User.setProperty("walletuserid",wall,"string")}
var wagas=User.getProperty("walletuserid")

Bot.sendInlineKeyboard(b,"💡* Your currently set "+cur+" wallet is: *"+" `"+wagas+"`\n\n💹 *It will be used for all future withdrawals.*",{on_result:"/setxms"})
