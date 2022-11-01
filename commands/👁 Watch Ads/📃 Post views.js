/*CMD
  command: 📃 Post views
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 👁 Watch Ads

  <<ANSWER
🔎* Send or forward now here the message you want to promote*.
Users will be paid to watch the message for at least 10 seconds
  ANSWER
  keyboard: Back 🔙
  aliases: 
CMD*/

var m_id = request.chat.id
var id_ko = request.message_id
var cur = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "AdminCUR" // field name
})
var cpc = AdminPanel.getFieldValue({
  panel_name: "Ads_bots_cpc", // panel name
  field_name: "Ads_watch_cpc" // field name
})
User.setProperty("BOT_link", m_id + "=" + id_ko, "string")
Api.forwardMessage({
  from_chat_id: m_id,
  message_id: id_ko
})
Bot.sendMessage(
  "*What is the most you want to pay per click?*\n\nMinimum Cost Per Click (CPC): *"+cpc+" " +
    cur +
    "*\n\n*➡️ Enter a value in " +
    cur +
    ":*"
)
Bot.runCommand("/post#1")
