/*CMD
  command: /bot#2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🤖 Message Bot
  answer: 
  keyboard: 
  aliases: 
CMD*/

var bot_name = User.getProperty("BOT_name")
if (!message.split("?")[1]) {
  Bot.sendMessage(
    "❌ Your bot url has to start like this: https://t.me/" +
      bot_name +
      "?start=yourref"
  )
  Bot.runCommand("/bot#2")
  return
}
User.setProperty("BOT_link", message, "string")
Bot.sendInlineKeyboard(
  [{ title: "Click Here", url: "" + message + "" }],
  "⬇️ Your ref. link ⬇️"
)
Bot.sendMessage("*Enter a title for your ad*:")
Bot.runCommand("/bot#3")
