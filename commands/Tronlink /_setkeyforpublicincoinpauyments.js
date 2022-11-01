/*CMD
  command: /setkeyforpublicincoinpauyments
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Tronlink 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(!message){
Bot.sendMessage("!*Invaild Private key. Try again*")
return
}
Bot.setProperty("cp_publickey01", message,"string")
Bot.sendMessage("_Now send me your _*Tron withdraw account address from account withdraw held whose account tron address*")
Bot.runCommand("/setkeyforpublicincoinpauymentslib")

