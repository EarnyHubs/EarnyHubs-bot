var url = Libs.Webhooks.getUrlFor(

   { command: "onGitPush", user_id: user.id }

)

Api.sendMessage({

  text: "Github webhook: " +

     "\n<pre>" + url + "</pre>",

  parse_mode: "html",

  disable_web_page_preview: true

})

Bot.sendMessage(url);
