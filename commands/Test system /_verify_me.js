/*CMD
  command: /verify_me
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Test system 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!content) {
  return
}
var data = JSON.parse(content)
var users = data.users
var us = Bot.getProperty("all_verified-1", { list: {} })
us.list[users] = "verified"
Bot.setProperty("all_verified-1", us, "json")
var reward = AdminPanel.getFieldValue({
  panel_name: "reward_verify", // panel name
  field_name: "reward_verify" // field name
})
var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "AdminCUR" // field name
})
if (reward) {
  var msg = "✅ *Verified earned " + reward + " " + cur + "*"
} else {
  var msg = "✅ *Verified*"
}
var balance = Libs.ResourcesLib.anotherUserRes("payout", users)
var onet = User.getProperty("Ont_reward")
if (!onet) {
  User.setProperty("Ont_reward", "done", "string")
balance.add(+reward)
  Bot.sendMessageToChatWithId(users, msg)
} else {
Bot.sendMessageToChatWithId(users, msg)
}
