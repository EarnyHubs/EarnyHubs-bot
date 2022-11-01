/*CMD
  command: /Onadm_block
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 👨‍💻Admin Panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

var tgID = message
badUsers = Bot.getProperty("badUsers", { list: {} })
badUsers.list[tgID] = true

Bot.setProperty("badUsers", badUsers, "json")
var messsage_id = options.id
var t = "*Successful ban user id* : "+message
Api.editMessageText({
  message_id: messsage_id,
  text: t,
  parse_mode: "Markdown"
})

