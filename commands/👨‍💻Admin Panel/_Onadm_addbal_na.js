/*CMD
  command: /Onadm_addbal_na
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 👨‍💻Admin Panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

var messsage_id = options.id
var tgid = options.tg
var amount = message
var t = "*Successful added balance*\n\n(amount : " + message + " to user : " + tgid+")"

var res = Libs.ResourcesLib.anotherUserRes("balance", tgid)
res.add(+parseFloat(amount))
Api.editMessageText({
  message_id: messsage_id,
  text: t,
  parse_mode: "Markdown"
})

