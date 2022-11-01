/*CMD
  command: /go_message
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 🤖 Message Bot

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var data = Bot.getProperty("#B" + params)
if (data) {
  var ma = User.getProperty("User#B" + params)
  if (ma) {
    return
  }
  var bot_status = data.bot_status
  if (
    (bot_status == "Disabled 🚫") |
    (bot_status == "⏸ Paused: budget reached or out of funds.")
  ) {
    return
  }
  var bot_title = data.bot_title
  var bot_description = data.bot_description
  var bot_link = data.bot_link

  Bot.sendInlineKeyboard(
    [
      [{ title: "🚀 Go to Bot 🚀", url: bot_link }],
      [
        { title: "Skip ➡️", command: "/Bskip " + params },
        { title: "✅ Joined", command: "/started " + params }
      ]
    ],
    bot_title +
      "\n\n" +
      bot_description +
      "\n\n------------------------------------------------\n⚠️_ You will be redirected to a third party telegram bot._",
    { parse_mode: "Markdown", disable_web_page_preview: true }
  )
} else {
}

