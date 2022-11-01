/*CMD
  command: /OnStarted
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🤖 Message Bot
  answer: 
  keyboard: 
  aliases: 
CMD*/

var may = User.getProperty("may")
var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "AdminCUR" // field name
})
if (!request.forward_from) {
  Bot.sendMessage("‼️* This is not forward from bot message*")
  Bot.runCommand("/OnStarted")
  return
}
if (request.forward_from.is_bot == false) {
  Bot.sendMessage("‼️* This is not forward message*")
  Bot.runCommand("/OnStarted")
  return
}

var data = Bot.getProperty("#B" + may + "")
var kaj7 = User.getProperty("User#B" + may + "")
if (kaj7) {
  Bot.sendMessage("Sorry, That Task Is No Longer Valid. 😟")
  return
}
var owner = data.owner
var bot_title = data.bot_title
var bot_description = data.bot_description
var bot_link = data.bot_link
var bot_status = data.bot_status
var bot_buget = data.bot_buget
var clicks = data.clicks
var bot_click = data.bot_click
var nock = data.nock1
var noted1 = data.ads
var botta = request.forward_from.username
if (botta == nock) {
  //ha
  var myr = User.getProperty("Reffer")
  var percent = "15"
  var amount = bot_click
  var ko10 = percent * 1
  var ko11 = ko10 / 100
  var df1 = ko11 * 1
  var moko = df1 * 1
  var rc24 = amount * moko
  var rc96 = rc24 * 1
  var ref = Libs.ResourcesLib.anotherUserRes("balance", myr)
  var ref1 = Libs.ResourcesLib.anotherUserRes("earned", myr)
  if (myr) {
    ref1.add(+rc96.toFixed(10))
    ref.add(+rc96.toFixed(10))
  }
  var u_balance = Libs.ResourcesLib.userRes("payout")
  u_balance.add(+bot_click)
  Bot.sendMessage("✅* Task Completed*!\nYou earned: " + bot_click + " " + cur)
  User.setProperty("User#B" + may + "", "done", "string")
  var junx = Libs.ResourcesLib.anotherChatRes(owner, "global-dram" + may)
  var balance = Libs.ResourcesLib.anotherUserRes("balance", owner)
  balance.add(-bot_click)
  junx.add(+1)
  if (junx.value() + 1 > clicks) {
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
  var datas = {
    owner: owner,
    bot_title: bot_title,
    bot_description: bot_description,
    bot_link: bot_link,
    bot_status: da,
    clicks: clicks,
    bot_buget: bot_buget,
    bot_click: bot_click,
    number: may,
    ads: noted1,
    nock1: nock
  }
  Bot.setProperty(noted1, datas)
} else {
  Bot.sendMessage("‼️* This is not forward message*")
}

