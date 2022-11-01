/*CMD
  command: /convert
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Convert ↩️
  answer: 
  keyboard: 
  aliases: 
CMD*/

var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "AdminCUR" // field name
})
var payout = Libs.ResourcesLib.userRes("payout")
var balance = Libs.ResourcesLib.userRes("balance")
var value = message
if (value.includes("-")) {
Bot.sendKeyboard(
    "➕ Deposit,➖ Withdraw\n🕐 History,Convert ↩️\n🔙 Back",
    "*📛 Invaild value. Enter only numeric value. Try again*",
    { is_reply: true }
  )
  return
}
if (!isNumeric(value)) {
  Bot.sendKeyboard(
    "➕ Deposit,➖ Withdraw\n🕐 History,Convert ↩️\n🔙 Back",
    "*📛 Invaild value. Enter only numeric value. Try again*",
    { is_reply: true }
  )
  return
}
if (message > payout.value() + 0.0001) {
  Bot.sendKeyboard(
    "➕ Deposit,➖ Withdraw\n🕐 History,Convert ↩️\n🔙 Back",
    "_🚫 You Don't Have Enough Balance to Convert_",
    { is_reply: true }
  )
  return
}
balance.add(+message)
payout.add(-message)
Bot.sendKeyboard(
  "➕ Deposit,➖ Withdraw\n🕐 History,Convert ↩️\n🔙 Back",
  "↩️ *Convert Successfully*\n\n💰 Amount: " + message + " " + cur,
  { is_reply: true }
)

