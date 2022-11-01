/*CMD
  command: ⚙️ Settings
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /setting
CMD*/

Bot.sendInlineKeyboard(
  [
    [{ title: "Task Alert", command: "/settings main" }],
    [{ title: "Set Wallet", command: "/wallets" }]
  ],
  "Choose a setting to edit below:"
)

