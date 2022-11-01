/*CMD
  command: /myads
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Ads Editor
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin_id = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "ADMIN_ID" // field name
})
var df = params.slice(2)
var data = Bot.getProperty(params)
var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "AdminCUR" // field name
})
if (!data) {
  Bot.sendMessage("This adsNumber not created yet")
  return
}
//user id admin
var owner = data.owner
if ((owner == user.telegramid) | (admin_id == user.telegramid)) {
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
  var junx = Libs.ResourcesLib.anotherChatRes(owner, "global" + niis1)
  if (bot_status == "Enabled ✅") {
    var h = "Disable 🚫"
    var h1 = "/OnOFF disable " + params + ""
  } else {
    var h = "Enable ✅"
    var h1 = "/OnOFF enable " + params + ""
  }

  Bot.sendInlineKeyboard(
    [
      [
        { title: "✏️ Edit", command: "/editB " + params + "" },
        { title: h, command: h1 }
      ]
    ],
    "*Campaign " +
      params +
      " - Manage*\n\nTitle: *" +
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
      clicks +
      "* total / *" +
      junx.value() +
      "* today"
  )
} else {
  Bot.sendMessage(
    "This adsNumber is not belong to you Only creator and Admin can see this ads"
  )
}

