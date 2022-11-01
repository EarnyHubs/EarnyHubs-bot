/*CMD
  command: /addadmin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let adm=Bot.getProperty("admin01","No admin")
var user =Bot.getProperty("test")
if(data.chat.chatid==484675895){
if(params){
Bot.setProperty("admin01",params,"string")
Bot.sendMessage("*✅ Admin Added Succeed*\n*Current Admin:* `"+params+"`")
}else{
Bot.sendMessage("invaid format please enter correct format.\n\nFor Example:\n"+"`/addadmin 1634041643`"+"\n*Current Admin:* `"+adm+"`")}}else{
Bot.runCommand("/start")}
