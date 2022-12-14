/*CMD
  command: /go_message
  help: 
  need_reply: false
  auto_retry_time: 
  folder: š¤ Message Bot

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
    (bot_status == "Disabled š«") |
    (bot_status == "āø Paused: budget reached or out of funds.")
  ) {
    return
  }
  var bot_title = data.bot_title
  var bot_description = data.bot_description
  var bot_link = data.bot_link

  Bot.sendInlineKeyboard(
    [
      [{ title: "š Go to Bot š", url: bot_link }],
      [
        { title: "Skip ā”ļø", command: "/Bskip " + params },
        { title: "ā Joined", command: "/started " + params }
      ]
    ],
    bot_title +
      "\n\n" +
      bot_description +
      "\n\n------------------------------------------------\nā ļø_ You will be redirected to a third party telegram bot._",
    { parse_mode: "Markdown", disable_web_page_preview: true }
  )
} else {
}

