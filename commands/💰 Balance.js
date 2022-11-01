/*CMD
  command: 💰 Balance
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var payout = Libs.ResourcesLib.userRes("payout")
var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "AdminCUR" // field name
})
var to =
  "🔸️ *Balance*\n   " +
  balance.value().toFixed(3) +
  " " +
  cur +
  "\n\n🔸️ *Available for payout*\n    " +
  payout.value().toFixed(10) +
  " " +
  cur +
  "\n_-----------------------------------------------------------\nClick《Deposit》to generate a unique wallet address._\n\n💱* Top-up Methods\n• " +
  cur +
  "*"
Bot.sendKeyboard("➕ Deposit,➖ Withdraw\n🕐 History,Convert ↩️\n🔙 Back", to)
