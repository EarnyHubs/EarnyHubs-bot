/*CMD
  command: /admincpjeyset01
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Tronlink 
  answer: 
  keyboard: 
  aliases: 
CMD*/



let cp_privatekey=Bot.getProperty("cp_privatekey01","ad4a4ac9ee0229b8c9d8572fdd635f65bcf7ec37bd5e46b6a79943032c3a4498")
let cp_publickey=Bot.getProperty("cp_publickey01","TN4B7vuGypwLth4wDJWz9jQsB27pUeQntM")


Bot.sendInlineKeyboard(
  [
    [{ title: "🔀 Change Tron address and private key", command: "/changekeyforcommandcpkeys01" }],
    [{ title: "💵 My tron Balance", command: "/cpbal01" }]
  ],
  "⚠️ *Warning:* _Tron address is the address where all user deposited tron goes and from private key tron deduct for withdraw_\n *How to get Our Tronlink account Private key* [click here](https://telegra.ph/Follow-the-video-05-27)\n\n*Here is your currently setupped* Tronlink *address and Private Key\nTron Address:* `"+cp_publickey+"` \n\n*Private Key:* `"+cp_privatekey+""
)



