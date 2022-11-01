/*CMD
  command: /Onwithdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Withdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

var data = JSON.parse(content)
var error = data.result.Error
if (error) {
  Bot.inspect(content)
  return
}
var status = data.result.status
if (status) {
  Bot.inspect(content)
return
}
var amount = data.result.amount
var wallet = data.result.to
var cur = data.result.currency
var transaction = data.result.transaction
var txid = data.result.blockchair
var time = Libs.DateTimeFormat.format(new Date(), "dd/m/yyyy h:M:s T") + "M"
var history = User.getProperty("history")
if (!history) {
  var newh =
    "Type: *Withdrawal 📤* \nAmount: *" +
    amount +
    " " +
    cur +
    "*\nAddress: " +
    wallet +
    "\nDate: " +
    time +
    "\nStatus: *Sent* ✅\nTransaction: [view here](" +
    txid +
    ")"
  User.setProperty("history", newh, "string")
} else {
  var nwh =
    "Type: *Withdrawal 📤* \nAmount: *" +
    amount +
    " " +
    cur +
    "*\nAddress: " +
    wallet +
    "\nDate: " +
    time +
    "\nStatus: *Sent* ✅\nTransaction: [view here](" +
    txid +
    ")"
  var toal = nwh + "\n\n" + history
  User.setProperty("history", toal, "string")
}
Bot.sendMessage(
  "Your Withdraw\n\namount: " + amount + cur + "\nTransaction: " + transaction
)
