/*CMD
  command: /adminlogin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Tronlink 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendInlineKeyboard(
  [
    [{title:"🔒 Connect with Tronlink",command:"/admincpjeyset01"}],
    [{ title: "Set Wallet", command: "/wallets" }]
  ],
  "Choose a setting to edit below:"
)

