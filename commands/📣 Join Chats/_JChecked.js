/*CMD
  command: /JChecked
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 📣 Join Chats

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (request.data) {
  var message_id = request.message.message_id
}
var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "AdminCUR" // field name
})
var df = params
var users = options.result.status
var data = Bot.getProperty("#J" + params)
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
  var niis = "-dram" + df + "2"
} else {
  if (nock1 == "3") {
    var niis = "-dram" + df + "3"
  } else {
    var niis = "-dram" + df
  }
}
var junx = Libs.ResourcesLib.anotherChatRes(owner, "global" + niis)

if ((users == "member") | (users == "administrator") | (users == "creator")) {
  if (User.getProperty("User#J" + params)) {
    return
  }
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
  Bot.sendMessage(
    "✅* Task Completed*!\nYou earned: " +
      bot_click +
      " " +
      cur +
      "\n\nIf you leave the channel, you will loose what you earned!"
  )
  User.setProperty("User#J" + params, "done", "string")
  var junx = Libs.ResourcesLib.anotherChatRes(owner, "global" + niis)
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
    number: params,
    ads: "#J" + params,
    nock1: nock1
  }
  Bot.setProperty("#J" + params, datas)
  Bot.run({
    command: "/Check_ha",
    run_after: 18000,
    options: { channel: bot_link, earn: bot_click, owner: owner }
  })
} else {
  var t =
    "❌ *You have to join the channel first!\n\n🎉 Channel Promotion*\n\n🧾 *Task*: Join this [channel](" +
    bot_link.replace("@", "t.me/") +
    ") to earn *" +
    cur +
    "*\n\n⏳ *Available Submissions*: " +
    clicks
  //junx.value()

  Api.editMessageText({
    message_id: message_id,
    text: t,
    parse_mode: "Markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "🚀 Go to Channel 🚀",
            url: bot_link.replace("@", "t.me/")
          }
        ],
        [
          { text: "Skip ➡️", callback_data: "/Jskip " + params + "" },
          { text: "✅ Joined", callback_data: "/Jstarted " + params}
        ]
      ]
    }
  })
}

