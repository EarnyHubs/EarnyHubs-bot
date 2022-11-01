/*CMD
  command: /deleteAd
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Ads Editor
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (request.data) {
  var message_id = request.message.message_id
}
if (!params) {
  return
}
var ads = Libs.ResourcesLib.userRes("ads")
ads.add(-1)
Bot.setProperty(params, "", "string")
Api.editMessageText({
  message_id: message_id,
  text: "Your ad has been deleted.",
  parse_mode: "Markdown"
})

