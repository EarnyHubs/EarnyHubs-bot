/*CMD
  command: /Budget_edit
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Ads Editor
  answer: 
  keyboard: 
  aliases: 
CMD*/

var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "AdminCUR" // field name
})
var id = User.getProperty("Ms")
var data = Bot.getProperty(id)
var owner = data.owner
var balance = Libs.ResourcesLib.anotherUserRes("balance", owner)
var df = data.number
var bot_title = data.bot_title
var bot_description = data.bot_description
var bot_link = data.bot_link
var bot_status = data.bot_status
var clicks = data.clicks
var bot_click = data.bot_click
var nock1 = data.nock1
if (nock1 == "2") {
  var niis1 = "-dram" + df + "2"
  var gasol = "visit"
} else {
  if (nock1 == "3") {
    var niis1 = "-dram" + df + "3"
    var gasol = "chats"
  } else {
    if (nock1 == "4") {
      var niis1 = "-dram" + df + "4"
      var gasol = "watch"
    } else {
      var niis1 = "-dram" + df
      var gasol = "bots"
    }
  }
}
var kol = AdminPanel.getFieldValue({
  panel_name: "Ads_bots_cpc", // panel name
  field_name: "Ads_" + gasol + "_budget" // field name
})
var kol = AdminPanel.getFieldValue({
  panel_name: "Ads_bots_click", // panel name
  field_name: "Ads_"+gasol+"_click" // field name
})
//100 X 0.01 = 1
//so your cliks 1 total
var number_click = kol * message
var node = number_click.toFixed(2)
if (node.includes(".")) {
  var keep = node.split(".")[0]
} else {
  var keep = number_click
}
var budgets = AdminPanel.getFieldValue({
  panel_name: "Ads_bots_cpc", // panel name
  field_name: "Ads_" + gasol + "_budget" // field name
})
if (message.includes("-")) {
  Bot.sendMessage(
    "❌ *Send please an amount greater or equal to* " + budgets + " " + cur
  )
  Bot.runCommand("/Budget_edit")
  return
}
if (!isNumeric(message)) {
  Bot.sendMessage(
    "❌ *Send please an amount greater or equal to *" + budgets + " " + cur
  )
  Bot.runCommand("/Budget_edit")
  return
}
if (message < budgets) {
  Bot.sendMessage(
    "❌ *Send please an amount greater or equal to *" + budgets + " " + cur
  )
  Bot.runCommand("/Budget_edit")
  return
}
var junx = Libs.ResourcesLib.anotherChatRes(owner, "global" + niis1)
if (junx.value() == clicks) {
  var da = "Disabled 🚫"
} else {
  if (bot_click > balance.value()) {
    var da = "⏸ *Paused*: budget reached or out of funds."
  } else {
    if (bot_status == "Disabled 🚫") {
      var da = "Disabled 🚫"
    } else {
      var da = "Enabled ✅"
    }
  }
}
var data = {
  owner: owner,
  bot_title: bot_title,
  bot_description: bot_description,
  bot_link: bot_link,
  bot_status: da,
  clicks: keep,
  bot_buget: message,
  bot_click: bot_click,
  number: df,
  ads: id,
  nock1: nock1
}
Bot.setProperty(id, data)
Bot.sendMessage("Your ad has been updated.")
