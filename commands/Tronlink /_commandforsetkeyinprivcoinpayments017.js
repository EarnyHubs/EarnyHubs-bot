/*CMD
  command: /commandforsetkeyinprivcoinpayments017
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Tronlink 
  answer: 
  keyboard: 
  aliases: 
CMD*/


Bot.setProperty("cp_privatekey01", message,"string")
Bot.sendMessage("_Now send me your Tron address in which all user deposited tron goes_")
Bot.runCommand("/setkeyforpublicincoinpauyments")

