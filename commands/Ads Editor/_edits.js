/*CMD
  command: /edits
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
var id_1 = params.split(" ")[0]
var id_2 = params.split(" ")[1]
var df = id_2.slice(2)
User.setProperty("Ms", id_2, "string")
if (id_1 == "title") {
  Bot.sendMessage("*Enter a title for your ad:*")
  Bot.runCommand("/Title_edit")
  return
}
if (id_1 == "description") {
  Bot.sendMessage("*Enter a description for your ad:*")
  Bot.runCommand("/Description_edit")
  return
}
if (id_1 == "url") {
  Bot.sendMessage(
    "➕ *Promotion\nCreation*\n\n*Send now this information*: `link`\n\n*🔎 Now send the link to the bot that you want to promote*.\n(All the traffic will be sent to that link)"
  )
  Bot.runCommand("/Url_edit")
  return
}
if (id_1 == "cpc") {
  var data = Bot.getProperty(id_2)
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
  var cpc = AdminPanel.getFieldValue({
    panel_name: "Ads_bots_cpc", // panel name
    field_name: "Ads_" + gasol + "_cpc" // field name
  })
  Bot.sendMessage(
    "*What is the most you want to pay per click?*\n\nMinimum Cost Per Click (CPC): *" +
      cpc +
      " " +
      cur +
      "*\n\n*➡️ Enter a value in " +
      cur +
      ":*"
  )
  Bot.runCommand("/Cpc_edit")
  return
}

if (id_1 == "budget") {
  var data = Bot.getProperty(id_2)
  var owner = data.owner
  var balance = Libs.ResourcesLib.anotherUserRes("balance", owner)
  Bot.sendMessage(
    "*How much do you want to spend on this campaign?*\n\nAvailable balance: *" +
      balance.value().toFixed(10) +
      " " +
      cur +
      "\n\n➡️ Enter a value in " +
      cur +
      "*:"
  )
  Bot.runCommand("/Budget_edit")
  return
}
if (id_1 == "delete") {
  Api.editMessageText({
    message_id: message_id,
    text:
      "Are you sure you want to *delete* this ad?\n\n*This action cannot be undone*.",
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "✅ Yes", callback_data: "/deleteAd " + id_2 },
          { text: "❌ Cancel", callback_data: "/editB " + id_2 }
        ]
      ]
    }
  })
  return
}
if (id_1 == "back") {
  var data = Bot.getProperty(id_2)
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
  if (bot_status == "Enabled ✅") {
    var h = "Disable 🚫"
    var h1 = "/OnOFF disable " + id_2 + ""
  } else {
    var h = "Enable ✅"
    var h1 = "/OnOFF enable " + id_2 + ""
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
    ads: id_2,
    nock1: nock1
  }
  Bot.setProperty(id_2, data)
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
  return
}

