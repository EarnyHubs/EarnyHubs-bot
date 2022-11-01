/*CMD
  command: /set_wallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

User.setProperty("address",message,"string")
Bot.sendMessage("🖊* Done*: Your new wallet is\n"+message)
