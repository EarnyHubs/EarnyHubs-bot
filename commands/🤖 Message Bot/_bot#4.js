/*CMD
  command: /bot#4
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🤖 Message Bot
  answer: 
  keyboard: 
  aliases: 
CMD*/

User.setProperty("BOT_description", message, "string")
var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "AdminCUR" // field name
})
var cpc = AdminPanel.getFieldValue({
  panel_name: "Ads_bots_cpc", // panel name
  field_name: "Ads_bots_cpc" // field name
})
Bot.sendMessage(
  "*What is the most you want to pay per click?*\n\nMinimum Cost Per Click (CPC): *"+cpc+" " +
    cur +
    "*\n\n➡️* Enter a value in " +
    cur +
    "*:"
)
Bot.runCommand("/bot#5")

