/*CMD
  command: /OnOFF
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Ads Editor
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (request.data) {
  var message_id = request.message.message_id
}
var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "AdminCUR" // field name
})
var id_2 = params.split(" ")[1]
var data = Bot.getProperty(id_2)
var owner = data.owner
var bot_title = data.bot_title
var bot_description = data.bot_description
var bot_link = data.bot_link
var bot_buget = data.bot_buget
var clicks = data.clicks
var bot_click = data.bot_click
var df = data.number
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
var balance = Libs.ResourcesLib.anotherUserRes("balance", owner)

if (params.split(" ")[0] == "enable") {
  if (bot_click > balance.value()) {
    var da = "⏸ *Paused*: budget reached or out of funds."
    var h = "Enable ✅"
    var h1 = "/OnOFF enable " + id_2 + ""
  } else {
    var da = "Enabled ✅"
    var h = "Disable 🚫"
    var h1 = "/OnOFF disable " + id_2 + ""
    junx.set(0)
  }

  var tess =
    "*Campaign " +
    id_2 +
    " - Manage*\n\nTitle: *" +
    bot_title +
    "*\nDescription: *" +
    bot_description +
    "*\nURL: *" +
    bot_link +
    "*\nStatus: *" +
    da +
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

  Api.editMessageText({
    message_id: message_id,
    text: tess,
    parse_mode: "Markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [
        [
          { text: "✏️ Edit", callback_data: "/editB " + id_2 + "" },
          { text: h, callback_data: h1 }
        ]
      ]
    }
  })
  var data = {
    owner: owner,
    bot_title: bot_title,
    bot_description: bot_description,
    bot_link: bot_link,
    bot_status: da,
    clicks: clicks,
    bot_buget: bot_buget,
    bot_click: bot_click,
    number: data.number,
    ads: id_2,
    nock1: nock1
  }
  Bot.setProperty(id_2, data)

  return
}
if (params.split(" ")[0] == "disable") {
  var da = "Disabled 🚫"
  var tess =
    "*Campaign " +
    id_2 +
    " - Manage*\n\nTitle: *" +
    bot_title +
    "*\nDescription: *" +
    bot_description +
    "*\nURL: *" +
    bot_link +
    "*\nStatus: *" +
    da +
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

  Api.editMessageText({
    message_id: message_id,
    text: tess,
    parse_mode: "Markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [
        [
          { text: "✏️ Edit", callback_data: "/editB " + id_2 + "" },
          { text: "Enabled ✅", callback_data: "/OnOFF enable " + id_2 + "" }
        ]
      ]
    }
  })
var data = {
    owner: owner,
    bot_title: bot_title,
    bot_description: bot_description,
    bot_link: bot_link,
    bot_status: da,
    clicks: clicks,
    bot_buget: bot_buget,
    bot_click: bot_click,
    number: data.number,
    ads: id_2,
    nock1: nock1
  }
  Bot.setProperty(id_2, data)
  return
}

