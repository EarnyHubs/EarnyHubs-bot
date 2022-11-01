/*CMD
  command: /completedmkb
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Tronlink 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let cujren= Bot.getProperty("cur")
let amounts = User.getProperty("tup")
let amount=amounts*1
Libs.ResourcesLib.anotherUserRes("balance", user.telegramid).add(amount)

