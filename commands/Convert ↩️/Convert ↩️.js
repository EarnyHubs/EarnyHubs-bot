/*CMD
  command: Convert ↩️
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Convert ↩️

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "AdminCUR" // field name
})
var payout = Libs.ResourcesLib.userRes("payout")
Api.sendMessage({
  text:
    "↩️* Convert Your Available payout to Available Balance\n\n🔸️ Available for payout\n" +
    payout.value().toFixed(10) +
    " " +
    cur +
    "\n\n➡️ How many " +
    cur +
    " you want to convert*",
  parse_mode: "Markdown",
  reply_markup: { force_reply: true }
})
Bot.runCommand("/convert")

