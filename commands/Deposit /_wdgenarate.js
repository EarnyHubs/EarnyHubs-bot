/*CMD
  command: /wdgenarate
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Deposit 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "AdminCUR" // field name
})
var data = JSON.parse(content)
var error = data.result.Error
if (error) {
  Bot.inspect(content)
  return
}
var address = data.result.address
if (address) {
  Bot.sendMessage(
    "*This is your personal deposit address*.\n\n*" +
      cur +
      " address*:\n`" +
      address +
      "`\n\n🕝 Transaction will be credited after 3 network confirmations."
  )

  User.setProperty("wallet", address, "string")
  return
}
var amount = data.result.amount
var cur = data.result.currency
var transaction = data.result.transaction
var txid = data.result.blockchair
var balance = Libs.ResourcesLib.userRes("balance")
balance.add(+amount)
var myr = User.getProperty("Reffer")
var percent = "2"
var amounti = amount
var ko10 = percent * 1
var ko11 = ko10 / 100
var df1 = ko11 * 1
var moko = df1 * 1
var rc24 = amounti * moko
var rc96 = rc24 * 1
var ref = Libs.ResourcesLib.anotherUserRes("payout", myr)
var ref1 = Libs.ResourcesLib.anotherUserRes("earned", myr)
if (myr) {
  ref1.add(+rc96.toFixed(10))
  ref.add(+rc96.toFixed(10))
}
var time = Libs.DateTimeFormat.format(new Date(), "dd/m/yyyy h:M:s T") + "M"
var history = User.getProperty("history")
if (!history) {
  var newh =
    "Type: *Deposit 📥* \nAmount: *" +
    amount +
    " " +
    cur +
    "*\nDate: " +
    time +
    "\nStatus: *Sent* ✅\nTransaction: [view here](" +
    txid +
    ")"
  User.setProperty("history", newh, "string")
} else {
  var nwh =
    "Type: *Deposit 📥* \nAmount: *" +
    amount +
    " " +
    cur +
    "*\nDate: " +
    time +
    "\nStatus: *Sent* ✅\nTransaction: [view here](" +
    txid +
    ")"
  var toal = nwh + "\n\n" + history
  User.setProperty("history", toal, "string")
}
Bot.sendMessage(
  "Your deposit successfull\n\namount: " +
    amount +
    " " +
    cur +
    "\nTransaction: " +
    transaction
)

