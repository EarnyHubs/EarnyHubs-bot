/*CMD
  command: /sewa
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Tronlink 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "AdminCUR" // field name
})
if(params){

let px=User.getProperty("mswd")
Bot.editMessage("🖌  *Send now your "+cur+" Address* to use it in future withdrawals!",params)
Bot.runCommand("/werst")
}
