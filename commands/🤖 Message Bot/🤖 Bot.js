/*CMD
  command: 🤖 Bot
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🤖 Message Bot

  <<ANSWER
*🔎 Forward any message from that bot to this chat.*
-> Open the bot that you want to promote.
-> Select any messages from the bot and forward it here.
  ANSWER
  keyboard: Back 🔙
  aliases: 
CMD*/

if (!request.forward_from) {
  Bot.sendMessage("‼️* This is not forward from bot message*")
  Bot.runCommand("/bot#1")
  return
}
if (request.forward_from.is_bot == "false") {
  Bot.sendMessage("‼️* This is not forward from bot message*")
  Bot.runCommand("/bot#1")
  return
}

var bot_name = request.forward_from.username
User.setProperty("BOT_name", bot_name, "string")
Bot.sendMessage(
  "*➕ Promotion\nCreation\n\nSend now this information*: `link`\n\n*🔎 Now send the link to the bot that you want to promote*.\n(All the traffic will be sent to that link)"
)
Bot.runCommand("/bot#2")

