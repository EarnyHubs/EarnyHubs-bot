/*CMD
  command: /channel_group_check
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 📣 Join Chats
  answer: 
  keyboard: 
  aliases: 
CMD*/

var c = JSON.parse(content)
if (c.ok == false) {
  Bot.sendMessage(
    "❌ Make the bot *ADMIN* of your channel, with the rights to add people!"
  )
  Bot.runCommand("/channel#1")

  return
}
if (c.result.status == "administrator") {
  Bot.runCommand("/channel#2")
} else {
  Bot.sendMessage(
    "❌ Make the bot *ADMIN* of your channel, with the rights to add people!"
  )
  Bot.runCommand("/channel#1")
}

