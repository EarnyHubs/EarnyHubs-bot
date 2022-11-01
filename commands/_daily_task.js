/*CMD
  command: /daily_task
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
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
Bot.sendMessage("sending in progress")
  Bot.run({
    command: "/broadcast4"
  })
  Bot.run({
    command: "/broadcast1"
  })
  Bot.run({
    command: "/broadcast2"
  })

  Bot.run({
    command: "/broadcast3"
  })
  return
}
//run this command every day ask user enable notification ads

