/*CMD
  command: /link#1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 💻 Visit Sites
  answer: 
  keyboard: 
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

