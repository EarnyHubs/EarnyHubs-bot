/*CMD
  command: /started
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🤖 Message Bot

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (request.data) {
  var message_id = request.message.message_id
}

var data = Bot.getProperty("#B" + params + "")
User.setProperty("may", params, "string")
var bot = data.nock1
var bot1 = data.bot_link

Api.editMessageText({
  message_id: message_id,
  text:
    "🤖 *Bot Promotion*\nTo complete this promotion, start [" +
    bot +
    "](" +
    bot1 +
    ") and forward a message from the bot to this chat.",
  disable_web_page_preview: true,
  parse_mode: "Markdown"
})
Bot.runCommand("/OnStarted")

