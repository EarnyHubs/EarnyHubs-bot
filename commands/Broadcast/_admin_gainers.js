/*CMD
  command: /admin_gainers
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Broadcast
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin_id = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "ADMIN_ID" // field name
})
if (!admin_id) {
  Bot.sendMessage("No admin go to panel set admin")
  return
}
if (user.telegramid == admin_id) {
  var us = Bot.getProperty("all_user", { list: {} })
  Bot.sendMessage("Broadcast in progress..")
  Bot.setProperty("broadcasting", message, "string")
  for (var i in us.list) {
    var ase = us.list[i]
    Bot.runCommand("/broadcastingc " + ase)
  }
  return
}

