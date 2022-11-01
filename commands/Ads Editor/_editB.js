/*CMD
  command: /editB
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
var df = params.slice(2)
var data = Bot.getProperty(params)
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
var junx = Libs.ResourcesLib.anotherChatRes(owner, "global" + niis1)
var balance = Libs.ResourcesLib.anotherUserRes("balance", owner)
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
  clicks: clicks,
  bot_buget: bot_buget,
  bot_click: bot_click,
  number: df,
  ads: params,
  nock1: nock1
}
Bot.setProperty(params, data)
var t =
  "*Campaign " +
  params +
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
var b = [
  [
    { text: "Edit title", callback_data: "/edits title " + params + "" },
    {
      text: "Edit description",
      callback_data: "/edits description " + params + ""
    }
  ],
  [
    { text: "Edit URL", callback_data: "/edits url " + params + "" },
    { text: "Edit CPC", callback_data: "/edits cpc " + params + "" }
  ],
  [
    { text: "Edit budget", callback_data: "/edits budget " + params + "" },
    { text: "🗑 Delete", callback_data: "/edits delete " + params + "" }
  ],
  [{ text: "🔙 Back", callback_data: "/edits back " + params + "" }]
]
Api.editMessageText({
  message_id: message_id,
  text: t,
  parse_mode: "Markdown",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: b
  }
})

