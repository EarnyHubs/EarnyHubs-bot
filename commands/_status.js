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
  "*š¹ Live Staticts*\n\nš¤  *User*: " +
    count_user.value() +
    "\nš„ * Visit sites*: " +
    visted.value() +
    "\nš¤  *Message bots*: " +
    bots.value() +
    "\nš£  *Join chats*: " +
    chats.value() +
    "\nš  *Watch Ads*: " +
    posted.value() +
    "")
