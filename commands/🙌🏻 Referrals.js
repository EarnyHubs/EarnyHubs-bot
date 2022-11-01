/*CMD
  command: 🙌🏻 Referrals
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var ref = Libs.ResourcesLib.userRes("ref-lvl1")
var earned = Libs.ResourcesLib.userRes("earned")
var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "AdminCUR" // field name
})
Bot.sendKeyboard(
  "Back 🔙",
  "🔎 You have *" +
    ref.value() +
    "* referrals, and earned\n*" +
    earned.value().toFixed(3) +
    " " +
    cur +
    "*.\n\nTo refer people to the bot, send them this link\nhttps://t.me/" +
    bot.name +
    "?start=" +
    user.telegramid +
    "\n\n💵 You will earn 15% of your friends earnings from tasks, and 1% if your friend creates a new ad, and 2% if your friend deposit\n\n_You can withdraw affiliate income or spend it on ADS!_"
)

