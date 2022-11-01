/*CMD
  command: /channel#1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 📣 Join Chats
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (message.includes("https://t.me/")) {
  var na = "@" + message.split("https://t.me/")[1]
} else {
  var na = message
}
User.setProperty("BOT_link", na, "string")
HTTP.get({
  url:
    "https://api.telegram.org/bot" +
    bot.token +
    "/getChatMember?chat_id=" +
    na +
    "&user_id=" +
    bot.token +
    "",
  success: "/channel_group_check"
})

