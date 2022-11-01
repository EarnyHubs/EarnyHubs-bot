/*CMD
  command: /chats#ad
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

var da = "<a href='t.me/gainerZYZ'>GainerZYZ</a>"
var chats = Libs.ResourcesLib.anotherChatRes("ads", "global3")
if (!chats.value()) {
  Api.sendMessage({
    text:
      " <b>‼️Aw snap! There are no more ads available</b>.\n\nPress MY ADS to create a new task\n\n▶️ More bots by " +
      da,
    disable_web_page_preview: true,
    parse_mode: "html"
  })
} else {
  for (var i = 1; i <= chats.value(); i++) {
    var data = Bot.getProperty("#J" + [i])
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
            if (amount < balance.value() + 0.0001) {
              Bot.runCommand("/go_chats " + num)
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
      if (chats.value() == num) {
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
//do not delete this bjs
for (var i = 1; i <= chats.value(); i++) {
  var data = Bot.getProperty("#W" + [i])
  var ads = data.ads
}
for (var i = 1; i <= chats.value(); i++) {
  var data = Bot.getProperty("#B" + [i])
  var ads = data.ads
}
for (var i = 1; i <= chats.value(); i++) {
  var data = Bot.getProperty("#V" + [i])
  var ads = data.ads
}

