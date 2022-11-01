/*CMD
  command: /go_chats
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

var data = Bot.getProperty("#J" + params)
if (data) {
  var ma = User.getProperty("User#J" + params)
  if (ma) {
    Bot.sendMessage("Already Done")
    return
  }
  var bot_status = data.bot_status
  if (
    (bot_status == "Disabled 🚫") |
    (bot_status == "⏸ Paused: budget reached or out of funds.")
  ) {
    Bot.sendMessage("You are trying. this ads current disable or pause")
    return
  }
  var bot_title = data.bot_title
  var bot_description = data.bot_description
  var bot_link = data.bot_link
  Bot.sendInlineKeyboard(
    [
      [
        {
          title: "🚀 Go to Channel 🚀",
          url: bot_link.replace("@", "t.me/")
        }
      ],
      [
        { title: "Skip ➡️", command: "/Jskip " + params },
        { title: "✅ Joined", command: "/Jstarted " + params }
      ]
    ],
    bot_title +
      "\n\n" +
      bot_description +
      "\n\n------------------------------------------------\n⚠️_You will be redirected to a third party telegram channel._",
    { disable_web_page_preview: true }
  )
} else {
  Bot.sendMessage("This Ads Number is Not Found maybe not created")
}

