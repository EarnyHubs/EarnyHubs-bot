/*CMD
  command: 📊 My Ads
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var ads = Libs.ResourcesLib.userRes("ads")
if (!ads.value()) {
  Bot.sendKeyboard(
    "➕ New Ad ➕\nBack 🔙",
    "🔬 Here you can manage all your running/expired promotions. (" +
      ads.value() +
      " / 50)"
  )
  return
}
Bot.sendKeyboard(
  "➕ New Ad ➕\nBack 🔙",
  "🔬 Here you can manage all your running/expired promotions. (" +
    ads.value() +
    " / 50)"
)
var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "AdminCUR" // field name
})
var ary = Array.from({ length: 100 }, (v, i) => i)

for (var i in ary) {
  var data = Bot.getProperty("#B" + ary[i])

  if (data) {
    var owner = data.owner
    if (owner == user.telegramid) {
      var bot_title = data.bot_title
      var bot_description = data.bot_description
      var bot_link = data.bot_link
      var bot_status = data.bot_status
      var bot_buget = data.bot_buget
      var clicks = data.clicks
      var bot_click = data.bot_click
      var nock1 = data.nock1
      var fillout = data.ads
      var df = fillout.slice(2)
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
        var h1 = "/OnOFF disable " + fillout + ""
      } else {
        var h = "Enable ✅"
        var h1 = "/OnOFF enable " + fillout + ""
      }

      Bot.sendInlineKeyboard(
        [
          [
            { title: "✏️ Edit", command: "/editB " + fillout + "" },
            { title: h, command: h1 }
          ]
        ],
        "*Campaign " +
          fillout +
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
          "* today",
        { parse_mode: "Markdown", disable_web_page_preview: true }
      )
    }
  }
}

for (var i in ary) {
  var data = Bot.getProperty("#J" + ary[i])

  if (data) {
    var owner = data.owner
    if (owner == user.telegramid) {
      var bot_title = data.bot_title
      var bot_description = data.bot_description
      var bot_link = data.bot_link
      var bot_status = data.bot_status
      
      var bot_buget = data.bot_buget
      var clicks = data.clicks
      var bot_click = data.bot_click
      var nock1 = data.nock1
      var fillout = data.ads
      var df = fillout.slice(2)
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
        var h1 = "/OnOFF disable " + fillout + ""
      } else {
        var h = "Enable ✅"
        var h1 = "/OnOFF enable " + fillout + ""
      }

      Bot.sendInlineKeyboard(
        [
          [
            { title: "✏️ Edit", command: "/editB " + fillout + "" },
            { title: h, command: h1 }
          ]
        ],
        "*Campaign " +
          fillout +
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
          "* today",
        { parse_mode: "Markdown", disable_web_page_preview: true }
      )
    }
  }
}
for (var i in ary) {
  var data = Bot.getProperty("#V" + ary[i])
  if (data) {
    var owner = data.owner
    if (owner == user.telegramid) {
      var bot_title = data.bot_title
      var bot_description = data.bot_description
      var bot_link = data.bot_link
      var bot_status = data.bot_status
      var bot_buget = data.bot_buget
      var clicks = data.clicks
      var bot_click = data.bot_click
      var nock1 = data.nock1
      var fillout = data.ads
      var df = fillout.slice(2)
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
        var h1 = "/OnOFF disable " + fillout + ""
      } else {
        var h = "Enable ✅"
        var h1 = "/OnOFF enable " + fillout + ""
      }

      Bot.sendInlineKeyboard(
        [
          [
            { title: "✏️ Edit", command: "/editB " + fillout + "" },
            { title: h, command: h1 }
          ]
        ],
        "*Campaign " +
          fillout +
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
          "* today",
        { parse_mode: "Markdown", disable_web_page_preview: true }
      )
    }
  }
}
for (var i in ary) {
  var data = Bot.getProperty("#W" + ary[i])
  if (data) {
    var owner = data.owner
    if (owner == user.telegramid) {
      var bot_title = data.bot_title
      var bot_description = data.bot_description
      var bot_link = data.bot_link
      var bot_status = data.bot_status
      var bot_buget = data.bot_buget
      var clicks = data.clicks
      var bot_click = data.bot_click
      var nock1 = data.nock1
      var fillout = data.ads
      var df = fillout.slice(2)
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
        var h1 = "/OnOFF disable " + fillout + ""
      } else {
        var h = "Enable ✅"
        var h1 = "/OnOFF enable " + fillout + ""
      }

      Bot.sendInlineKeyboard(
        [
          [
            { title: "✏️ Edit", command: "/editB " + fillout + "" },
            { title: h, command: h1 }
          ]
        ],
        "*Campaign " +
          fillout +
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
          "* today",
        { parse_mode: "Markdown", disable_web_page_preview: true }
      )
    }
  }
}
