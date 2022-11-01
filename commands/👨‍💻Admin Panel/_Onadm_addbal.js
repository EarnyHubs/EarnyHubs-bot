/*CMD
  command: /Onadm_addbal
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 👨‍💻Admin Panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.deleteMessage({
  message_id: request.message_id
})
var messsage_id = options.id
var t =
  "✳️ *How much you want to add or remove balance*\n\n(use + for adding and - for removing)"
Api.editMessageText({
  message_id: messsage_id,
  text: t,
  parse_mode: "Markdown"
})
Bot.run({
  command: "/Onadm_addbal_na",
  options: { tg: message, id: messsage_id }
})

