/*CMD
  command: /settings
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (request.data) {
  var message_id = request.message.message_id
}
if (params == "main") {
  var onV1 = User.getProperty("OnV")
  if (!onV1) {
    var ont1 = "onV"
    var on1 = "✅ Turn on for visiting site task"
    var opo1 = "*disabled* 🔕"
  } else {
    var ont1 = "OFFOnV"
    var on1 = "❌ Turn off for visiting site task"
    var opo1 = "*enable* 🔔"
  }
  var onV2 = User.getProperty("OnM")
  if (!onV2) {
    var ont2 = "onM"
    var on2 = "✅ Turn on for messaging bot task"
    var opo2 = "*disabled* 🔕"
  } else {
    var ont2 = "OFFOnM"
    var on2 = "❌ Turn off for messaging bot task"
    var opo2 = "*enable* 🔔"
  }
  var onV3 = User.getProperty("OnJ")
  if (!onV3) {
    var ont3 = "onJ"
    var on3 = "✅ Turn on for joining chats task"
    var opo3 = "*disabled* 🔕"
  } else {
    var ont3 = "OFFOnJ"
    var on3 = "❌ Turn off for joining chats task"
    var opo3 = "*enable* 🔔"
  }
  var onV4 = User.getProperty("OnW")
  if (!onV4) {
    var ont4 = "onW"
    var on4 = "✅ Turn on for viewing channel task"
    var opo4 = "*disabled* 🔕"
  } else {
    var ont4 = "OFFOnW"
    var on4 = "❌ Turn off for viewing channel task"
    var opo4 = "*enable* 🔔"
  }
  var b = [
    [
      {
        text: on1,
        callback_data: "/settings " + ont1 + ""
      }
    ],
    [
      {
        text: on2,
        callback_data: "/settings " + ont2 + ""
      }
    ],
    [
      {
        text: on3,
        callback_data: "/settings " + ont3 + ""
      }
    ],
    [
      {
        text: on4,
        callback_data: "/settings " + ont4 + ""
      }
    ],
    [{ text: "⬅️ Back", callback_data: "/settings back" }]
  ]

  Api.editMessageText({
    message_id: message_id,
    text:
      "Here are your settings for new task alerts.\n\nVisit sites: " +
      opo1 +
      "\nMessage bots: " +
      opo2 +
      "\nJoin chats: " +
      opo3 +
      "\nView post: " +
      opo4 +
      "\n\nUse the buttons below to turn on/off alerts for each task.",
    parse_mode: "Markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: b
    }
  })
  return
}
if (params == "onV") {
  var us = Bot.getProperty("OnV_all", { list: {} })
  us.list[user.telegramid] = user.telegramid
  Bot.setProperty("OnV_all", us, "json")
  User.setProperty("OnV", "on", "string")
  var onV1 = User.getProperty("OnV")
  if (!onV1) {
    var ont1 = "onV"
    var on1 = "✅ Turn on for visiting site task"
    var opo1 = "*disabled* 🔕"
  } else {
    var ont1 = "OFFOnV"
    var on1 = "❌ Turn off for visiting site task"
    var opo1 = "*enable* 🔔"
  }
  var onV2 = User.getProperty("OnM")
  if (!onV2) {
    var ont2 = "onM"
    var on2 = "✅ Turn on for messaging bot task"
    var opo2 = "*disabled* 🔕"
  } else {
    var ont2 = "OFFOnM"
    var on2 = "❌ Turn off for messaging bot task"
    var opo2 = "*enable* 🔔"
  }
  var onV3 = User.getProperty("OnJ")
  if (!onV3) {
    var ont3 = "onJ"
    var on3 = "✅ Turn on for joining chats task"
    var opo3 = "*disabled* 🔕"
  } else {
    var ont3 = "OFFOnJ"
    var on3 = "❌ Turn off for joining chats task"
    var opo3 = "*enable* 🔔"
  }
  var onV4 = User.getProperty("OnW")
  if (!onV4) {
    var ont4 = "onW"
    var on4 = "✅ Turn on for viewing channel task"
    var opo4 = "*disabled* 🔕"
  } else {
    var ont4 = "OFFOnW"
    var on4 = "❌ Turn off for viewing channel task"
    var opo4 = "*enable* 🔔"
  }
  var b = [
    [
      {
        text: on1,
        callback_data: "/settings " + ont1 + ""
      }
    ],
    [
      {
        text: on2,
        callback_data: "/settings " + ont2 + ""
      }
    ],
    [
      {
        text: on3,
        callback_data: "/settings " + ont3 + ""
      }
    ],
    [
      {
        text: on4,
        callback_data: "/settings " + ont4 + ""
      }
    ],
    [{ text: "⬅️ Back", callback_data: "/settings back" }]
  ]
  Api.editMessageText({
    message_id: message_id,
    text:
      "Here are your settings for new task alerts.\n\nVisit sites: " +
      opo1 +
      "\nMessage bots: " +
      opo2 +
      "\nJoin chats: " +
      opo3 +
      "\nView post: " +
      opo4 +
      "\n\nUse the buttons below to turn on/off alerts for each task.",
    parse_mode: "Markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: b
    }
  })
  return
}
if (params == "onM") {
var us = Bot.getProperty("OnM_all", { list: {} })
  us.list[user.telegramid] = user.telegramid
  Bot.setProperty("OnM_all", us, "json")
  User.setProperty("OnM", "on", "string")
  var onV1 = User.getProperty("OnV")
  if (!onV1) {
    var ont1 = "onV"
    var on1 = "✅ Turn on for visiting site task"
    var opo1 = "*disabled* 🔕"
  } else {
    var ont1 = "OFFOnV"
    var on1 = "❌ Turn off for visiting site task"
    var opo1 = "*enable* 🔔"
  }
  var onV2 = User.getProperty("OnM")
  if (!onV2) {
    var ont2 = "onM"
    var on2 = "✅ Turn on for messaging bot task"
    var opo2 = "*disabled* 🔕"
  } else {
    var ont2 = "OFFOnM"
    var on2 = "❌ Turn off for messaging bot task"
    var opo2 = "*enable* 🔔"
  }
  var onV3 = User.getProperty("OnJ")
  if (!onV3) {
    var ont3 = "onJ"
    var on3 = "✅ Turn on for joining chats task"
    var opo3 = "*disabled* 🔕"
  } else {
    var ont3 = "OFFOnJ"
    var on3 = "❌ Turn off for joining chats task"
    var opo3 = "*enable* 🔔"
  }
  var onV4 = User.getProperty("OnW")
  if (!onV4) {
    var ont4 = "onW"
    var on4 = "✅ Turn on for viewing channel task"
    var opo4 = "*disabled* 🔕"
  } else {
    var ont4 = "OFFOnW"
    var on4 = "❌ Turn off for viewing channel task"
    var opo4 = "*enable* 🔔"
  }
  var b = [
    [
      {
        text: on1,
        callback_data: "/settings " + ont1 + ""
      }
    ],
    [
      {
        text: on2,
        callback_data: "/settings " + ont2 + ""
      }
    ],
    [
      {
        text: on3,
        callback_data: "/settings " + ont3 + ""
      }
    ],
    [
      {
        text: on4,
        callback_data: "/settings " + ont4 + ""
      }
    ],
    [{ text: "⬅️ Back", callback_data: "/settings back" }]
  ]
  Api.editMessageText({
    message_id: message_id,
    text:
      "Here are your settings for new task alerts.\n\nVisit sites: " +
      opo1 +
      "\nMessage bots: " +
      opo2 +
      "\nJoin chats: " +
      opo3 +
      "\nView post: " +
      opo4 +
      "\n\nUse the buttons below to turn on/off alerts for each task.",
    parse_mode: "Markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: b
    }
  })
  return
}
if (params == "onJ") {
var us = Bot.getProperty("OnJ_all", { list: {} })
  us.list[user.telegramid] = user.telegramid
  Bot.setProperty("OnJ_all", us, "json")
  User.setProperty("OnJ", "on", "string")
  var onV1 = User.getProperty("OnV")
  if (!onV1) {
    var ont1 = "onV"
    var on1 = "✅ Turn on for visiting site task"
    var opo1 = "*disabled* 🔕"
  } else {
    var ont1 = "OFFOnV"
    var on1 = "❌ Turn off for visiting site task"
    var opo1 = "*enable* 🔔"
  }
  var onV2 = User.getProperty("OnM")
  if (!onV2) {
    var ont2 = "onM"
    var on2 = "✅ Turn on for messaging bot task"
    var opo2 = "*disabled* 🔕"
  } else {
    var ont2 = "OFFOnM"
    var on2 = "❌ Turn off for messaging bot task"
    var opo2 = "*enable* 🔔"
  }
  var onV3 = User.getProperty("OnJ")
  if (!onV3) {
    var ont3 = "onJ"
    var on3 = "✅ Turn on for joining chats task"
    var opo3 = "*disabled* 🔕"
  } else {
    var ont3 = "OFFOnJ"
    var on3 = "❌ Turn off for joining chats task"
    var opo3 = "*enable* 🔔"
  }
  var onV4 = User.getProperty("OnW")
  if (!onV4) {
    var ont4 = "onW"
    var on4 = "✅ Turn on for viewing channel task"
    var opo4 = "*disabled* 🔕"
  } else {
    var ont4 = "OFFOnW"
    var on4 = "❌ Turn off for viewing channel task"
    var opo4 = "*enable* 🔔"
  }
  var b = [
    [
      {
        text: on1,
        callback_data: "/settings " + ont1 + ""
      }
    ],
    [
      {
        text: on2,
        callback_data: "/settings " + ont2 + ""
      }
    ],
    [
      {
        text: on3,
        callback_data: "/settings " + ont3 + ""
      }
    ],
    [
      {
        text: on4,
        callback_data: "/settings " + ont4 + ""
      }
    ],
    [{ text: "⬅️ Back", callback_data: "/settings back" }]
  ]

  Api.editMessageText({
    message_id: message_id,
    text:
      "Here are your settings for new task alerts.\n\nVisit sites: " +
      opo1 +
      "\nMessage bots: " +
      opo2 +
      "\nJoin chats: " +
      opo3 +
      "\nView post: " +
      opo4 +
      "\n\nUse the buttons below to turn on/off alerts for each task.",
    parse_mode: "Markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: b
    }
  })
  return
}
if (params == "onW") {
var us = Bot.getProperty("OnW_all", { list: {} })
  us.list[user.telegramid] = user.telegramid
  Bot.setProperty("OnW_all", us, "json")
  User.setProperty("OnW", "on", "string")
  var onV1 = User.getProperty("OnV")
  if (!onV1) {
    var ont1 = "onV"
    var on1 = "✅ Turn on for visiting site task"
    var opo1 = "*disabled* 🔕"
  } else {
    var ont1 = "OFFOnV"
    var on1 = "❌ Turn off for visiting site task"
    var opo1 = "*enable* 🔔"
  }
  var onV2 = User.getProperty("OnM")
  if (!onV2) {
    var ont2 = "onM"
    var on2 = "✅ Turn on for messaging bot task"
    var opo2 = "*disabled* 🔕"
  } else {
    var ont2 = "OFFOnM"
    var on2 = "❌ Turn off for messaging bot task"
    var opo2 = "*enable* 🔔"
  }
  var onV3 = User.getProperty("OnJ")
  if (!onV3) {
    var ont3 = "onJ"
    var on3 = "✅ Turn on for joining chats task"
    var opo3 = "*disabled* 🔕"
  } else {
    var ont3 = "OFFOnJ"
    var on3 = "❌ Turn off for joining chats task"
    var opo3 = "*enable* 🔔"
  }
  var onV4 = User.getProperty("OnW")
  if (!onV4) {
    var ont4 = "onW"
    var on4 = "✅ Turn on for viewing channel task"
    var opo4 = "*disabled* 🔕"
  } else {
    var ont4 = "OFFOnW"
    var on4 = "❌ Turn off for viewing channel task"
    var opo4 = "*enable* 🔔"
  }
  var b = [
    [
      {
        text: on1,
        callback_data: "/settings " + ont1 + ""
      }
    ],
    [
      {
        text: on2,
        callback_data: "/settings " + ont2 + ""
      }
    ],
    [
      {
        text: on3,
        callback_data: "/settings " + ont3 + ""
      }
    ],
    [
      {
        text: on4,
        callback_data: "/settings " + ont4 + ""
      }
    ],
    [{ text: "⬅️ Back", callback_data: "/settings back" }]
  ]
  Api.editMessageText({
    message_id: message_id,
    text:
      "Here are your settings for new task alerts.\n\nVisit sites: " +
      opo1 +
      "\nMessage bots: " +
      opo2 +
      "\nJoin chats: " +
      opo3 +
      "\nView post: " +
      opo4 +
      "\n\nUse the buttons below to turn on/off alerts for each task.",
    parse_mode: "Markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: b
    }
  })
  return
}
if (params == "back") {
  var mty1 = [[{ text: "Task Alert", callback_data: "/settings main" }],
    [{ text: "Set Wallet", callback_data: "/wallets" }]
  ]
  var mty = "Choose a setting to edit below:"
  Api.editMessageText({
    message_id: message_id,
    text: mty,
    parse_mode: "Markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: mty1
    }
  })
  return
}
var oi = params.split("OFF")[1]
var us = Bot.getProperty(oi+"_all", { list: {} })
  us.list[user.telegramid] = ""
  Bot.setProperty(oi+"_all", us, "json")
User.setProperty("" + oi + "", "", "string")

var onV1 = User.getProperty("OnV")
if (!onV1) {
  var ont1 = "onV"
  var on1 = "✅ Turn on for visiting site task"
  var opo1 = "*disabled* 🔕"
} else {
  var ont1 = "OFFOnV"
  var on1 = "❌ Turn off for visiting site task"
  var opo1 = "*enable* 🔔"
}
var onV2 = User.getProperty("OnM")
if (!onV2) {
  var ont2 = "onM"
  var on2 = "✅ Turn on for messaging bot task"
  var opo2 = "*disabled* 🔕"
} else {
  var ont2 = "OFFOnM"
  var on2 = "❌ Turn off for messaging bot task"
  var opo2 = "*enable* 🔔"
}
var onV3 = User.getProperty("OnJ")
if (!onV3) {
  var ont3 = "onJ"
  var on3 = "✅ Turn on for joining chats task"
  var opo3 = "*disabled* 🔕"
} else {
  var ont3 = "OFFOnJ"
  var on3 = "❌ Turn off for joining chats task"
  var opo3 = "*enable* 🔔"
}
var onV4 = User.getProperty("OnW")
if (!onV4) {
  var ont4 = "onW"
  var on4 = "✅ Turn on for viewing channel task"
  var opo4 = "*disabled* 🔕"
} else {
  var ont4 = "OFFOnW"
  var on4 = "❌ Turn off for viewing channel task"
  var opo4 = "*enable* 🔔"
}
var b = [
  [
    {
      text: on1,
      callback_data: "/settings " + ont1 + ""
    }
  ],
  [
    {
      text: on2,
      callback_data: "/settings " + ont2 + ""
    }
  ],
  [
    {
      text: on3,
      callback_data: "/settings " + ont3 + ""
    }
  ],
  [
    {
      text: on4,
      callback_data: "/settings " + ont4 + ""
    }
  ],
  [{ text: "⬅️ Back", callback_data: "/settings back" }]
]
Api.editMessageText({
  message_id: message_id,
  text:
    " Here are your settings for new task alerts.\n\nVisit sites: " +
    opo1 +
    "\nMessage bots: " +
    opo2 +
    "\nJoin chats: " +
    opo3 +
    "\nView post: " +
    opo4 +
    "\n\nUse the buttons below to turn on/off alerts for each task..",
  parse_mode: "Markdown",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: b
  }
})

