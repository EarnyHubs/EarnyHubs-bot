/*CMD
  command: /watch
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 👁 Watch Ads
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (request.data) {
  var message_id = request.message.message_id
}
if (params.split(" ")[0] == "r") {
  var wached = User.getProperty("User#W" + params.split(" ")[2] + "")
  if (!wached) {
    function canRun() {
      var last_run_at = User.getProperty("last_run_at")
      if (!last_run_at) {
        return true
      }
      var minutes = (Date.now() - last_run_at) / 100 / 10

      var minutes_in_day = 3 * 3
      var next = minutes_in_day - minutes
      var wait_hours = Math.floor(next / 3)
      next -= wait_hours * 3
      var wait_minutes = Math.floor(next)
      var seconds = Math.floor((next - wait_minutes) * 3)
      if (minutes < minutes_in_day) {
        Api.answerCallbackQuery({
          callback_query_id: request.id,
          text: "Wait 10 seconds",
          show_alert: true
        })

        return
      }
      return true
    }

    if (!canRun()) {
      return
    }
    User.setProperty("last_run_at", Date.now(), "integer")
    Api.deleteMessage({ message_id: message_id })
    Bot.sendMessage("*✋🏻 Hold on..... processing your task*...")
    Bot.run({
      command: "/watchsd",
      options: { earn: params.split(" ")[2] }
    })
  } else {
    Bot.sendMessage("Already Done👍")
  }
  return
}
if (params.split(" ")[0] == "s") {
  Api.deleteMessage({ message_id: message_id })
  User.setProperty("User#W" + params.split(" ")[2] + "", "done", "string")
  Bot.sendMessage("Promotion skipped succesfully!")
  return
}
