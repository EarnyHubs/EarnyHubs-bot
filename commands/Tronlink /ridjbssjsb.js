/*CMD
  command: ridjbssjsb
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Tronlink 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var rs = Libs.ResourcesLib.userRes("temp")
var raw = JSON.parse(content)
var tr = User.getProperty("wallset")
var bal = raw.balance
var ball = bal/1000000
User.setProperty("tup",ball,"string")
var cbal = User.setProperty("cbal", ball, "string")
rs.add(ball)
var dp = cbal
var rs = parseFloat(dp)
Bot.runCommand("rtyejs")

