/*CMD
  command: /Verify
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var verify = User.getProperty("verify")
if(verify){
Bot.runCommand("/start2")
return}

var url2 = Libs.Webhooks.getUrlFor({
  command: "onWebhook",
  user_id: user.id
})

var webPage = "https://api.jobians.top/captcha/verify?https://t.me/EarnyHubsBot" + encodeURIComponent(url2)

Bot.sendMessage("ℹ️ [Please Verify Yourself By Clicking This Link
⚠️ Don't Use VPN]("+webPage+")",{ disable_web_page_preview: true })

onWebhook

if (!content) {
  return
}
var data = JSON.parse(content)
var ip = data.results.ip.split(".").slice(0,3).join(".")
var captcha = data.results.captcha
var vpn = data.results.vpn

var verify = User.getProperty("verify")
if(verify){
return}

if(vpn == "yes"){
Bot.sendMessage("🚨 You Are Ban For Using VPN!")
Bot.blockChat(chat.id);
return} 

var ips = Bot.getProperty("ips", { list: {} })
if(ips.list[ip]){
  Bot.sendMessage("❌ You Have Been Banned For Using Multiple Account");
  Bot.blockChat(chat.id);
  return 
}

if(captcha == "ok"){
var ips = Bot.getProperty("ips", { list: {} });
ips.list[ip] = true;
Bot.setProperty("ips", ips, "json");
Bot.sendMessage("✅ You Are Verified Now");
User.setProperty("verify","ok","string")
Bot.runCommand("/start2")
}
