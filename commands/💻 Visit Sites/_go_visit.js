/*CMD
  command: /go_visit
  help: 
  need_reply: false
  auto_retry_time: 
  folder: š» Visit Sites

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var data = Bot.getProperty("#V" + params)
if (data) {
  var ma = User.getProperty("User#V" + params)
  if (ma) {
    Bot.sendMessage("Already Done")
    return
  }
  var bot_status = data.bot_status
  if (
    (bot_status == "Disabled š«") |
    (bot_status == "āø Paused: budget reached or out of funds.")
  ) {
    Bot.sendMessage("You are trying. this ads current disable or pause")
    return
  }
  var bot_title = data.bot_title
  var bot_description = data.bot_description
  var bot_link = data.bot_link

  var url = Libs.Webhooks.getUrlFor({
    command: "/OnrewardV #V" + params,
    user_id: user.id,
    redirect_to: bot_link
  })
  Bot.sendInlineKeyboard(
    [
      [{ title: "š Go to Website š", url: url }],
      [{ title: "Skip ā”ļø", command: "/SkipV " + params }]
    ],
    bot_title +
      "\n\n" +
      bot_description +
      "\n\n------------------------------------------------\nā ļø_ You will be redirected to a third party website._"
  )
} else {
  Bot.sendMessage("This Ads Number is Not Found maybe not created")
}

