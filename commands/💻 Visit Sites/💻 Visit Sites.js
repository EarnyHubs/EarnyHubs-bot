/*CMD
  command: 💻 Visit Sites
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

var da = "<a href='t.me/botsbusinessselleradmin'>Owner</a>"
var visted = Libs.ResourcesLib.anotherChatRes("ads", "global2")
if (!visted.value()) {
  Api.sendMessage({
    text:
      " <b>‼️Aw snap! There are no more ads available</b>.\n\nPress MY ADS to create a new task\n\n▶️ More bots by " +
      da,
    disable_web_page_preview: true,
    parse_mode: "html"
  })
} else {
  var ary = Array.from({ length: visted.value() + 1 }, (v, i) => i)

  for (var i in ary) {
    var data = Bot.getProperty("#V" + ary[i])
    if (data) {
      var ads = data.ads
      var num = data.number
      var status = data.bot_status
      var amount = data.bot_click
      var owner = data.owner
      var balance = Libs.ResourcesLib.anotherUserRes("balance", owner)
      if (status == "Enabled ✅") {
        var users = User.getProperty("User" + ads)
        if (!users) {
          if (owner == user.telegramid) {
          } else {
            if (amount < balance.value()) {
              Bot.runCommand("/go_visit " + num)
              return
            }
          }
        }
      }
      if (
        (status == "Disabled 🚫") |
        (status == "⏸ Paused: budget reached or out of funds.")
      ) {
        User.setProperty("User" + ads, "", "string")
      }
      if (visted.value() == num) {
        Api.sendMessage({
          text:
            "<b>‼️Aw snap! There are no more ads available</b>.\n\nPress MY ADS to create a new task\n\n▶️ More bots by " +
            da,
          disable_web_page_preview: true,
          parse_mode: "html"
        })
        return
      }
    }
  }
}

