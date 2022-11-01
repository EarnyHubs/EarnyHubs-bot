/*CMD
  command: /adm_add_bal
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 👨‍💻Admin Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (request.data) {
  var z = request.message.message_id
}
var t = "✳️ *Enter User TelegramID to add balance*"
Api.editMessageText({
  message_id: z,
  text: t,
  parse_mode: "Markdown"
})
Bot.run({
  command: "/Onadm_addbal",
  options: { id: z }
})

