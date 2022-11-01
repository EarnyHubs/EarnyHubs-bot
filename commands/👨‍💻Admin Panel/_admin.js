/*CMD
  command: /admin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 👨‍💻Admin Panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin_id = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "ADMIN_ID" // field name
})
if (!admin_id) {
  Bot.sendMessage("No admin go to panel set admin")
  return
}
if (user.telegramid == admin_id) {
  Bot.sendInlineKeyboard(
    [
      [{ title: "➕ Add balance / Remove balance ➖", command: "/adm_add_bal" }],
      [
        { title: "🔒User Ban", command: "/adm_block" },
        { title: "🔓User Unban", command: "/adm_unblock" }
      ],[{ title: "🌐 Broadcast", command: "/adm_broadcast" }]
    ],
    "Hello admin Welcome to admin panel"
  )
}

