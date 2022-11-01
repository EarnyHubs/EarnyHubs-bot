/*CMD
  command: /adm_unblock
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 👨‍💻Admin Panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (request.data) {
  var z = request.message.message_id
}
var t = "✳️ *Enter User TelegramID to unban*"
Api.editMessageText({
  message_id: z,
  text: t,
  parse_mode: "Markdown"
})
Bot.run({
  command: "/Onadm_ublock",
  options: { id: z }
})

