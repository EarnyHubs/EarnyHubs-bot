/*CMD
  command: /wals
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.deleteMessage({ message_id: request.message.message_id })
Bot.sendMessage(
  "✏️ *Send now your DGB Address* to use it in future withdrawals!"
)
Bot.runCommand("/set_wallet")

