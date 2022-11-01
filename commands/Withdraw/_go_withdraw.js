/*CMD
  command: /go_withdraw
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Withdraw

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (!options) {
  Bot.sendMessage("Withdraw security")
  return
}
var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "AdminCUR" // field name
})
var amnt = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "Wdmin" // field name
})
var balance = Libs.ResourcesLib.userRes("payout")
if (message < amnt) {
  Bot.sendMessage("_❌ Minimum withdraw " + amnt + "_")
  return
}
if (message > balance.value()) {
  Bot.sendMessage(
    "_❌ Maximum withdraw " + balance.value().toFixed(6) + " " + cur + "_"
  )
  return
}
var webhook = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "AdminWebhookWithdraw" // field name
})
var api_key = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "AdminApikey" // field name
})
var wallet = User.getProperty("address")
var url = Libs.Webhooks.getUrlFor({
  command: "/Onwithdraw",
  user_id: user.id
})
HTTP.post({
  url: webhook,
  body: {
    api_key: api_key,
    currency: cur,
    amount: message,
    address: wallet,
    webhook: url
  }
})
