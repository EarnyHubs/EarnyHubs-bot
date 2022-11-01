/*CMD
  command: /Title_edit
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Ads Editor
  answer: 
  keyboard: 
  aliases: 
CMD*/

var id = User.getProperty("Ms")
var df = id.slice(2)
var data = Bot.getProperty(id)
var owner = data.owner
var bot_description = data.bot_description
var bot_link = data.bot_link
var bot_status = data.bot_status
var bot_buget = data.bot_buget
var clicks = data.clicks
var bot_click = data.bot_click
var nock1 = data.nock1
if (nock1 == "2") {
  var niis1 = "-dram"+df+"2"
} else {
  if (nock1 == "3") {
    var niis1 = "-dram"+df+"3"
  } else {
    if (nock1 == "4") {
      var niis1 = "-dram"+df+"4"
    } else {
      var niis1 = "-dram"+df
    }
  }
}
var junx = Libs.ResourcesLib.anotherChatRes(owner, "global" + niis1)
var balance = Libs.ResourcesLib.anotherUserRes("balance", owner)
if (junx.value() == clicks) {
  var da = "Disabled 🚫"
} else {
  if (bot_click > balance.value()) {
    var da = "⏸ *Paused*: budget reached or out of funds."
  } else {
    if (bot_status == "Disabled 🚫") {
      var da = "Disabled 🚫"
    } else {
      var da = "Enabled ✅"
    }
  }
}
var data = {
    owner: owner,
    bot_title: message,
    bot_description: bot_description,
    bot_link: bot_link,
    bot_status: da,
    clicks: clicks,
    bot_buget: bot_buget,
    bot_click: bot_click,
    number: df,
    ads: id,
    nock1: nock1
  }
  Bot.setProperty(id, data)
Bot.sendMessage("Your ad has been updated.")

