/*CMD
  command: 🕐 History
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var history = User.getProperty("history")
if (!history) {
  Bot.sendMessage("You don't have any transactions yet.")
} else {
  Bot.sendMessage("*Here are your latest transactions*:\n\n" + history, {
    disable_web_page_preview: true
  })
}

