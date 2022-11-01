/*CMD
  command: 🔗 Link URL
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 💻 Visit Sites

  <<ANSWER
*🌐 Start a Link Promotion*

👉🏻 Enter any valid link and start promoting!

⁉ You can promote anything:* Instagram Posts, Websites, YouTube Videos, Everything!*

➕ *Link Example*: https://gainerzyz.com?ref=12345
  ANSWER
  keyboard: Back 🔙
  aliases: 
CMD*/

if (message.includes("https://")) {
  Bot.sendInlineKeyboard(
    [{ title: "Click Here", url: "" + message + "" }],
    "⬇️ Your ref. link ⬇️"
  )
  User.setProperty("BOT_link", message, "string")
  Bot.sendMessage("*Enter a title for your ad*:")
  Bot.runCommand("/link#2")
} else {
  Bot.sendMessage("*You enter Wrong URL please enter valid URL*")
  Bot.runCommand("/link#1")
}

