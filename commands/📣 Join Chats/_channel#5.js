/*CMD
  command: /channel#5
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 📣 Join Chats
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
  field_name: "Ads_chats_cpc" // field name
})
if (message.includes("-")) {
  Bot.sendMessage("❌ *Send please an amount greater or equal to* "+cpc+" "+cur)
  Bot.runCommand("/channel#5")
  return
}
if (!isNumeric(message)) {
  Bot.sendMessage("❌ *Send please an amount greater or equal to *"+cpc+" "+cur)
  Bot.runCommand("/channel#5")
  return
}
if (message < cpc) {
  Bot.sendMessage("❌ *Send please an amount greater or equal to *"+cpc+" "+cur)
  Bot.runCommand("/channel#5")
  return
}
Bot.sendMessage(
  "*How much do you want to spend on this campaign?*\n\nAvailable balance: *" +
    balance.value().toFixed(10) +
    " "+cur+"\n\n➡️ Enter a value in "+cur+"*:"
)

User.setProperty("BOT_click", message, "string")
Bot.runCommand("/channel#6")
//0.00001 LTC
