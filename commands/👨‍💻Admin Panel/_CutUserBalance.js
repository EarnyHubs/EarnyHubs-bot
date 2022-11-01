/*CMD
  command: /CutUserBalance
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 👨‍💻Admin Panel
  answer: ❤️ ans - *Enter User Telegram Id*
  keyboard: 
  aliases: 
CMD*/

var key = "5481127830"
if (user.telegramid == key){
Bot.run({command: "/cut", options: message})
}else{
Bot.sendMessage("❌You Are Not An Admin !")
}
