/*CMD
  command: /baaack
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 

  <<KEYBOARD

  KEYBOARD
  aliases: back š, š back, š back, back š
CMD*/

var stmg = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "BotStart" // field name
})

Bot.sendKeyboard(
  "š¤ Message Bots,š» Visit Sites,š£ Join Chats,š Watch Ads\nš° Balance ,šš» Referrals ,āļø Settings\nš My Ads",
  stmg,
  { disable_web_page_preview: true }
)
