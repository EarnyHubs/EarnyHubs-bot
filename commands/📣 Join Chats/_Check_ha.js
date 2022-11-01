/*CMD
  command: /Check_ha
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 📣 Join Chats
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.getChatMember({
  chat_id: options.channel,
  user_id: user.telegramid,
  on_result: "/OnCheck_ha " + options.earn + " "+options.owner
})

