/*CMD
  command: /channel#3
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 📣 Join Chats
  answer: 
  keyboard: 
  aliases: 
CMD*/

User.setProperty("BOT_title", message, "string")
Bot.sendMessage("*Enter a description for your ad:*")
Bot.runCommand("/channel#4")

