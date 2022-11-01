/*CMD
  command: /links#4
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 💻 Visit Sites
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "AdminCUR" // field name
})
var cpc = AdminPanel.getFieldValue({
  panel_name: "Ads_bots_cpc", // panel name
  field_name: "Ads_visit_cpc" // field name
})
if (message.includes("+-")) {
  Bot.sendMessage("❌ *Send please an amount greater or equal to* "+cpc+" "+cur)
  Bot.runCommand("/links#4")
  return
}
if (!isNumeric(message)) {
  Bot.sendMessage("❌ *Send please an amount greater or equal to *"+cpc+" "+cur)
  Bot.runCommand("/links#4")
  return
}
if (message < cpc) {
  Bot.sendMessage("❌ *Send please an amount greater or equal to *"+cpc+" "+cur)
  Bot.runCommand("/links#4")
  return
}
User.setProperty("BOT_click", message, "string")
Bot.sendMessage(
  "*How much do you want to spend on this campaign?*\n\nAvailable balance:* " +
    balance.value().toFixed(10) +
    " "+cur+"\n\n➡️ Enter a value in "+cur+"*:"
)
Bot.runCommand("/links#5")
