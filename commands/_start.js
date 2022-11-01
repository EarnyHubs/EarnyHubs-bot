/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (chat.chat_type != "private") {
  return
}
var stmg = AdminPanel.getFieldValue({
  panel_name: "ADMIN_ID", // panel name
  field_name: "BotStart" // field name
})
if (!stmg) {
  Bot.sendMessage(
    "hi please run Command /panel then go to BB app Setup your panel"
  )
}
if (!user.first_name) {
  var valid_name = user.last_name
} else {
  var valid_name = user.first_name
}
var count_user = Libs.ResourcesLib.anotherChatRes("count_user", "all")
var first_timer = User.getProperty("first_timers")
if (!first_timer) {
  Bot.setProperty("referral-1" + user.telegramid, "yes", "string")
  count_user.add(1)
  var us = Bot.getProperty("all_user", { list: {} })
  us.list[count_user.value()] = user.telegramid
  Bot.setProperty("all_user", us, "json")
  if (params == user.telegramid) {
    Bot.sendMessage("ℹ️ You are the user of this bot already.")
    return
  } else {
    var u = params
    var inl = Bot.getProperty("referral-1" + u)
    if (inl == "yes") {
      User.setProperty("Reffer", u, "string")
      var bal1 = Libs.ResourcesLib.anotherUserRes("ref-lvl1", u)
      bal1.add(+1)
    }
    Bot.setProperty("referral-2" + user.telegramid, u, "string")
  }
  //default alert message
  //For Visiting site
  var us1 = Bot.getProperty("OnV_all", { list: {} })
  us1.list[user.telegramid] = user.telegramid
  Bot.setProperty("OnV_all", us1, "json")
  User.setProperty("OnV", "on", "string")
  //On for message bot
  var us2 = Bot.getProperty("OnM_all", { list: {} })
  us2.list[user.telegramid] = user.telegramid
  Bot.setProperty("OnM_all", us2, "json")
  User.setProperty("OnM", "on", "string")

  //On for joining channel
  var us3 = Bot.getProperty("OnJ_all", { list: {} })
  us3.list[user.telegramid] = user.telegramid
  Bot.setProperty("OnJ_all", us3, "json")
  User.setProperty("OnJ", "on", "string")

  //For viewing ads
  var us4 = Bot.getProperty("OnW_all", { list: {} })
  us4.list[user.telegramid] = user.telegramid
  Bot.setProperty("OnW_all", us4, "json")
  User.setProperty("OnW", "on", "string")
  User.setProperty("first_timers", "end", "string")
  Bot.sendKeyboard(
    "🤖 Message Bots,💻 Visit Sites,📣 Join Chats,👁 Watch Ads\n💰 Balance ,🙌🏻 Referrals ,⚙️ Settings\n📊 My Ads",
    stmg,
    { disable_web_page_preview: true }
  )
} else {
  if (params) {
    Bot.sendMessage("ℹ️ You are the user of this bot already.")
    Bot.sendKeyboard(
      "🤖 Message Bots,💻 Visit Sites,📣 Join Chats,👁 Watch Ads\n💰 Balance ,🙌🏻 Referrals ,⚙️ Settings\n📊 My Ads",
      stmg,
      { disable_web_page_preview: true }
    )
    return
  }
  Bot.sendKeyboard(
    "🤖 Message Bots,💻 Visit Sites,📣 Join Chats,👁 Watch Ads\n💰 Balance ,🙌🏻 Referrals ,⚙️ Settings\n📊 My Ads",
    stmg,
    { disable_web_page_preview: true }
  )
}
Bot.setProperty("autowithdrawal01","enabled","string")
