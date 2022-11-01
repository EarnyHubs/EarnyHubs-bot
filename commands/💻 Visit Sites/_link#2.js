/*CMD
  command: /link#2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 💻 Visit Sites
  answer: 
  keyboard: 
  aliases: 
CMD*/

User.setProperty("BOT_title", message, "string")
Bot.sendMessage("*Enter a description for your ad:*")
Bot.runCommand("/links#3")

