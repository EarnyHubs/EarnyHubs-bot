/*CMD
  command: /werst
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Tronlink 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id=User.getProperty("mswd")
let g =message
if((g.length>=20)&&(g.length<=45)){
User.setProperty("Wallet",g,"string")
Bot.setProperty("wdwalletaddress"+user.telegramid,g,"string")
Bot.setProperty("wallet"+user.telegramid,message,"string")
var b=[[{title:"🔙 Back To Sittings",command:"/sitt ff"}]]
Bot.sendKeyboard("Back 🔙","🖊 *Done: *Your new wallet is\n`"+message+"`")
}else{
Bot.sendKeyboard("Back 🔙","🖊 *Error:* This is not a wallet address! Send /start to return to the menu, or send a correct address")
Bot.runCommand("/werst")
}
