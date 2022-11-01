/*CMD
  command: @
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Test system 
  answer: 
  keyboard: 
  aliases: 
CMD*/

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
var badUsers = Bot.getProperty("badUsers", { list: {} })
if (badUsers.list[user.telegramid]) {
  Bot.sendMessage("You are blocked!")
  return // this is worked for all command
  // because it is in BeforeAll command
  return
}
