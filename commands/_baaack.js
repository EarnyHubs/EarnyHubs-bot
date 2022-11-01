/*CMD
  command: /baaack
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 

  <<KEYBOARD

  KEYBOARD
  aliases: back 🔙, 🔙 back, 🔙 back, back 🔙
CMD*/

var stmg = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "BotStart" // field name
})

Bot.sendKeyboard(
  "🤖 Message Bots,💻 Visit Sites,📣 Join Chats,👁 Watch Ads\n💰 Balance ,🙌🏻 Referrals ,⚙️ Settings\n📊 My Ads",
  stmg,
  { disable_web_page_preview: true }
)
