/*CMD
  command: /admin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ๐จโ๐ปAdmin Panel
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
      [{ title: "โ Add balance / Remove balance โ", command: "/adm_add_bal" }],
      [
        { title: "๐User Ban", command: "/adm_block" },
        { title: "๐User Unban", command: "/adm_unblock" }
      ],[{ title: "๐ Broadcast", command: "/adm_broadcast" }]
    ],
    "Hello admin Welcome to admin panel"
  )
}

