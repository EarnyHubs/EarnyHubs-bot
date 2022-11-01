/*CMD
  command: /setkeyforpublicincoinpauymentslib
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Tronlink 
  answer: 
  keyboard: 
  aliases: 
CMD*/


let cp_pre=Bot.getProperty("cp_privatekey01")
let cp_pub=Bot.getProperty("cp_publickey01")


Bot.setProperty("bb_apikey01", message,"string")

Libs.CoinPayments.setPrivateKey(cp_pre);
Libs.CoinPayments.setPublicKey(cp_pub);
Libs.CoinPayments.setBBApiKey(message);


Bot.sendMessage("*Your tronlink keys has been successfully updated*")



Bot.sendInlineKeyboard(
  [
    [{ title: "⬅️ Back To Settings", command: "/adminlogin" }]
  ],
  "Choose a setting to edit below:"
)


let res = Libs.ResourcesLib.anotherUserRes("cp_key_count", 452080432);
res.add(1)

