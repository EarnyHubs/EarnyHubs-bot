/*CMD
  command: /Jskip
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 📣 Join Chats
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (request.data) {
  var message_id = request.message.message_id
}
User.setProperty("User#J" + params + "", "done", "string")
Api.editMessageText({
  message_id: message_id,
  text: "Promotion skipped succesfully!",
  parse_mode: "Markdown"
})

