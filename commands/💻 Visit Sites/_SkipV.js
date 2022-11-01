/*CMD
  command: /SkipV
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💻 Visit Sites
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (request.data) {
  var message_id = request.message.message_id
}
User.setProperty("User#V" + params + "", "done", "string")
Api.editMessageText({
  message_id: message_id,
  text: "Promotion skipped succesfully!",
  parse_mode: "Markdown"
})

