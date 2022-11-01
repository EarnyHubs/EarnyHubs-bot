/*CMD
  command: /status
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var count_user = Libs.ResourcesLib.anotherChatRes("count_user", "all")
var enabled = Libs.ResourcesLib.anotherChatRes("notification", "all")
var bots = Libs.ResourcesLib.anotherChatRes("ads", "global")
var posted = Libs.ResourcesLib.anotherChatRes("ads", "global4")
var chats = Libs.ResourcesLib.anotherChatRes("ads", "global3")
var visted = Libs.ResourcesLib.anotherChatRes("ads", "global2")
Bot.sendMessage(
  "*💹 Live Staticts*\n\n👤  *User*: " +
    count_user.value() +
    "\n🖥 * Visit sites*: " +
    visted.value() +
    "\n🤖  *Message bots*: " +
    bots.value() +
    "\n📣  *Join chats*: " +
    chats.value() +
    "\n👁  *Watch Ads*: " +
    posted.value() +
    "")
