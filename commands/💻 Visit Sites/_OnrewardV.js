/*CMD
  command: /OnrewardV
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 💻 Visit Sites

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
if (!params) {
  Bot.sendMessage("Alert Hacker")
  return
}
var df = params.slice(2)
var kaj = User.getProperty("User" + params)
if (!kaj) {
  var data = Bot.getProperty(params)
  if (!data) {
    Bot.sendMessage("Alert Hacker")
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
  var nock1 = data.nock1
  var noted1 = data.ads
  if (nock1 == "2") {
    var niis = "-dram" + df + "2"
  } else {
    if (nock1 == "3") {
      var niis = "-dram" + df + "3"
    } else {
      var niis = "-dram" + df
    }
  }
  //ha
  var u_balance = Libs.ResourcesLib.userRes("payout")
  u_balance.add(+bot_click)
  Bot.sendMessage("✅* Task Completed*!\nYou earned: " + bot_click + " " + cur)
  User.setProperty("User" + params + "", "done", "string")
  var junx = Libs.ResourcesLib.anotherChatRes(owner, "global" + niis)
  var myr = User.getProperty("Reffer")
  var percent = "15"
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
    number: df,
    ads: noted1,
    nock1: nock1
  }
  Bot.setProperty(noted1, datas)
} else {
  Bot.sendMessage("Already Done👍")
}

