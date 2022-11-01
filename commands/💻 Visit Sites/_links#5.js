/*CMD
  command: /links#5
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 💻 Visit Sites
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "AdminCUR" // field name
})
var budgets = AdminPanel.getFieldValue({
  panel_name: "Ads_bots_cpc", // panel name
  field_name: "Ads_visit_budget" // field name
})
if (message.includes("+-")) {
  Bot.sendMessage(
    "❌ *Send please an amount greater or equal to* " + budgets + " " + cur
  )
  Bot.runCommand("/links#5")
  return
}
if (!isNumeric(message)) {
  Bot.sendMessage(
    "❌ *Send please an amount greater or equal to *" + budgets + " " + cur
  )
  Bot.runCommand("/links#5")
  return
}
if (message < budgets) {
  Bot.sendMessage(
    "❌ *Send please an amount greater or equal to *" + budgets + " " + cur
  )
  Bot.runCommand("/links#5")
  return
}

if (message > balance.value()) {
  Bot.sendKeyboard(
    "➕ Deposit,🔙 Back",
    "❌ You do not own enough " +
      cur +
      " for this!\n*You own*: " +
      balance.value().toFixed(10) +
      " " +
      cur
  )
  return
}
User.setProperty("BOT_buget", message, "string")
if (message > balance.value()) {
  User.setProperty(
    "BOT_status",
    "⏸ *Paused*: budget reached or out of funds.",
    "string"
  )
} else {
  var sts = User.getProperty("BOT_status")
  if (sts == "Disabled 🚫") {
    User.setProperty("BOT_status", "Disabled 🚫", "string")
  } else {
    User.setProperty("BOT_status", "Enabled ✅", "string")
  }
}
var no = Libs.ResourcesLib.anotherChatRes("ads", "global2")
no.add(+1)

var bot_link = User.getProperty("BOT_link")
var bot_title = User.getProperty("BOT_title")
var bot_description = User.getProperty("BOT_description")
var bot_buget = User.getProperty("BOT_buget")
var kol = AdminPanel.getFieldValue({
  panel_name: "Ads_bots_click", // panel name
  field_name: "Ads_visit_click" // field name
})
//100 X 0.01 = 1
//so your cliks 1 total
var number_click = kol * bot_buget
var node = number_click.toFixed(2)
if (node.includes(".")) {
  var keep = node.split(".")[0]
} else {
  var keep = number_click
}
var bot_click = User.getProperty("BOT_click")
var bot_status = User.getProperty("BOT_status")
var junx = Libs.ResourcesLib.anotherChatRes(
  user.telegramid,
  "global-dram" + no.value() + "2"
)
junx.set(0)
var nock = "2"
var data = {
  owner: user.telegramid,
  bot_title: bot_title,
  bot_description: bot_description,
  bot_link: bot_link,
  bot_status: bot_status,
  clicks: keep,
  bot_buget: bot_buget,
  bot_click: bot_click,
  number: no.value(),
  ads: "#V" + no.value(),
  nock1: nock
}
Bot.setProperty("#V" + no.value(), data)
var ads = Libs.ResourcesLib.userRes("ads")
ads.add(+1)
if (bot_status == "Enabled ✅") {
  var h = "Disable 🚫"
  var h1 = "/OnOFF disable #V" + no.value() + ""
} else {
  var h = "Enable ✅"
  var h1 = "/OnOFF enable #V" + no.value() + ""
}
Bot.sendInlineKeyboard(
  [
    [
      { title: "✏️ Edit", command: "/editB #V" + no.value() + "" },
      { title: h, command: h1 }
    ]
  ],
  "*Campaign #V" +
    no.value() +
    " - 🔗 Link URL*\n\nTitle: *" +
    bot_title +
    "*\nDescription: *" +
    bot_description +
    "*\nURL: *" +
    bot_link +
    "*\nStatus: *" +
    bot_status +
    "*\n\nDaily budget: *" +
    bot_buget +
    " " +
    cur +
    "*\nCPC: *" +
    bot_click +
    " " +
    cur +
    "*\nClicks: *" +
    keep +
    "* total / *" +
    junx.value() +
    "* today",
  { disable_web_page_preview: true }
)
var myr = User.getProperty("Reffer")
var percent = "1"
var amount = bot_click
var ko10 = percent * 1
var ko11 = ko10 / 100
var df1 = ko11 * 1
var moko = df1 * 1
var rc24 = amount * moko
var rc96 = rc24 * 1
var ref = Libs.ResourcesLib.anotherUserRes("payout", myr)
var ref1 = Libs.ResourcesLib.anotherUserRes("earned", myr)
if (myr) {
  ref1.add(+rc96.toFixed(10))
  ref.add(+rc96.toFixed(10))
}
var adsg1 = Libs.ResourcesLib.anotherChatRes("adsg1", "global")
adsg1.add(+1)

