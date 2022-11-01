/*CMD
  command: /watchsd
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 👁 Watch Ads

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (options) {
  var df = options.earn
  var doo = User.getProperty("User#W" + df)
  if (doo) {
    Bot.sendMessage("already done👍")
    return
  }
  var data = Bot.getProperty("#W" + df)
  var cur = AdminPanel.getFieldValue({
    panel_name: "ADMIN_ID", // panel name
    field_name: "AdminCUR" // field name
  })
  User.setProperty("User#W" + df, "done", "string")
  var owner = data.owner
  var bot_title = data.bot_title
  var bot_description = data.bot_description
  var bot_link = data.bot_link
  var bot_status = data.bot_status
  var bot_buget = data.bot_buget
  var clicks = data.clicks
  var bot_click = data.bot_click
  var nock1 = data.nock1
  if (nock1 == "2") {
    var niis1 = "-dram" + df + "2"
  } else {
    if (nock1 == "3") {
      var niis1 = "-dram" + df + "3"
    } else {
      if (nock1 == "4") {
        var niis1 = "-dram" + df + "4"
      } else {
        var niis1 = "-dram" + df
      }
    }
  }
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
  var ref = Libs.ResourcesLib.anotherUserRes("payout", myr)
  var ref1 = Libs.ResourcesLib.anotherUserRes("earned", myr)
  if (myr) {
    ref1.add(+rc96.toFixed(10))
    ref.add(+rc96.toFixed(10))
  }
  var u_balance = Libs.ResourcesLib.userRes("payout")
  u_balance.add(+bot_click)
  Bot.sendMessage("✅* Task Completed*!\nYou earned: " + bot_click + " " + cur)
  var junx = Libs.ResourcesLib.anotherChatRes(owner, "global" + niis1)
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
}
var data = {
  owner: owner,
  bot_title: bot_title,
  bot_description: bot_description,
  bot_link: bot_link,
  bot_status: da,
  clicks: clicks,
  bot_buget: bot_buget,
  bot_click: bot_click,
  number: df,
  ads: "#W" + df,
  nock1: nock1
}
Bot.setProperty("#W" + df, data)

