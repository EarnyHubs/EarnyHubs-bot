/*CMD
  command: /Jstarted
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 📣 Join Chats
  answer: 
  keyboard: 
  aliases: 
CMD*/

var data = Bot.getProperty("#J" + params + "")
var bot_link = data.bot_link
Api.getChatMember({
  chat_id: bot_link,
  user_id: user.telegramid,
  on_result: "/JChecked " + params + ""
})
