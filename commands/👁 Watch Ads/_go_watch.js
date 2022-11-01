/*CMD
  command: /go_watch
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

var df = params
var data = Bot.getProperty("#W" + df)
var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "AdminCUR" // field name
})
if (data) {
  var ma = User.getProperty("User#W" + df)
  if (ma) {
    Bot.sendMessage("👍 Already Done")
    return
  }
  var bot_status = data.bot_status
  if (
    (bot_status == "Disabled 🚫") |
    (bot_status == "⏸ Paused: budget reached or out of funds.")
  ) {
    Bot.sendMessage("You are trying. this ads currently disable or pause")
    return
  }

  var owner = data.owner
  var cnn = data.bot_link
  var cahnnel = cnn.split("=")[0]
  var mid = cnn.split("=")[1]
  var clicks = data.clicks
  var nock1 = data.nock1
  function canRun() {
    var last_run_at = User.getProperty("last_run_at")
    if (!last_run_at) {
      return true
    }

    var minutes = (Date.now() - last_run_at) / 100 / 10

    var minutes_in_day = 3 * 3
    var next = minutes_in_day - minutes
    var wait_hours = Math.floor(next / 3)
    next -= wait_hours * 3
    var wait_minutes = Math.floor(next)
    var seconds = Math.floor((next - wait_minutes) * 3)
    if (minutes < minutes_in_day) {
      return
    }
    return true
  }

  if (!canRun()) {
    return
  }
  User.setProperty("last_run_at", Date.now(), "integer")
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
  Bot.sendInlineKeyboard(
    [
      [
        {
          title: "Skip ➡️",
          command: "/watch s #W" + params + " " + params
        },
        {
          title: "✅ Wached",
          command: "/watch r #W" + params + " " + params
        }
      ]
    ],
    "📄 *Post Promotion*\n\n🧾 *Task*: Read *this post* to earn *" +
      cur +
      "*\n\n⏳ *Available Submissions*: " +
      clicks
    // junx.value()
  )

  Api.forwardMessage({
    from_chat_id: cahnnel,
    message_id: mid
  })
} else {
  Bot.sendMessage("This Ads Number is Not Found maybe not created")
}

