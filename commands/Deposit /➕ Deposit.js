/*CMD
  command: ➕ Deposit
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Deposit 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Bot.run({
    command: "refhyhvfjk",
    run_after: 60 * 7,
  })
var depr = User.getProperty("depr")
if (depr == undefined) {
  Bot.sendMessage("✋️*Hold on..... generating your Deposit address...*")
  Bot.runCommand("etat")
} else {
 var wallset = User.getProperty("wallset")
var rs = Libs.ResourcesLib.userRes("balance");
var cbal = User.getProperty("cbal")
var hi =
  "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
var cbal2
if (cbal < 10) {
  cbal2 = cbal
} else {
  cbal2 = "0.000000"
}
var ty = [{ title: "🔁 Refresh", command: "refhyhvfjk" }]
let mnm=Bot.getProperty("minimuminvestment")
let mnt=mnm*1
Bot.sendMessage("⚠️ _If you send less than "+10+ " TRX, your deposit will be lost for forever!_\n\n_You can also check Your deposit by refresh button_ \n✅* Send the amount you want to invest to the following address:*")
Bot.sendInlineKeyboard(ty,
  " `"+ wallset +" `\n\n "
)
Bot.run({
    command: "refhyhvfjk",
    run_after: 60 * 3,
  })
}
