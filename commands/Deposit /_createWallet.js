/*CMD
  command: /createWallet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Deposit 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "AdminCUR" // field name
})
var webhook = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "AdminWebhookDeposit" // field name
})
var api_key = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "AdminApikey" // field name
})
var url = Libs.Webhooks.getUrlFor({
  command: "/wdgenarate",
  user_id: user.id
 })
HTTP.post({
  url: webhook,
  body: {
   api_key: api_key,
   currency: cur,
   webhook: url
  }
 })

