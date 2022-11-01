/*CMD
  command: /OnCheck_ha
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 📣 Join Chats
  answer: 
  keyboard: 
  aliases: 
CMD*/

var users = options.result.status
if ((users == "member") | (users == "administrator") | (users == "creator")) {
  return
}
var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "AdminCUR" // field name
})
var amnt = params.split(" ")[0]
var owner = params.split(" ")[1]
var ows = Libs.ResourcesLib.anotherUserRes("balance", owner)
ows.add(+amnt)
var balance = Libs.ResourcesLib.userRes("payout")
balance.add(-amnt)
var myr = User.getProperty("Reffer")
var percent = "15"
var amount = amnt
var ko10 = percent * 1
var ko11 = ko10 / 100
var df1 = ko11 * 1
var moko = df1 * 1
var rc24 = amount * moko
var rc96 = rc24 * 1
var ref = Libs.ResourcesLib.anotherUserRes("payout", myr)
var ref1 = Libs.ResourcesLib.anotherUserRes("earned", myr)
if (myr) {
  ref1.add(-rc96.toFixed(10))
  ref.add(-rc96.toFixed(10))
}
Bot.sendMessage(
  "❌ *Left Chat!*\nYou lost: *" +
    amnt +
    " " +
    cur +
    "* because you left this chat."
)

