/*CMD
  command: /convert
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Convert ā©ļø
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
    "ā Deposit,ā Withdraw\nš History,Convert ā©ļø\nš Back",
    "*š Invaild value. Enter only numeric value. Try again*",
    { is_reply: true }
  )
  return
}
if (!isNumeric(value)) {
  Bot.sendKeyboard(
    "ā Deposit,ā Withdraw\nš History,Convert ā©ļø\nš Back",
    "*š Invaild value. Enter only numeric value. Try again*",
    { is_reply: true }
  )
  return
}
if (message > payout.value() + 0.0001) {
  Bot.sendKeyboard(
    "ā Deposit,ā Withdraw\nš History,Convert ā©ļø\nš Back",
    "_š« You Don't Have Enough Balance to Convert_",
    { is_reply: true }
  )
  return
}
balance.add(+message)
payout.add(-message)
Bot.sendKeyboard(
  "ā Deposit,ā Withdraw\nš History,Convert ā©ļø\nš Back",
  "ā©ļø *Convert Successfully*\n\nš° Amount: " + message + " " + cur,
  { is_reply: true }
)

