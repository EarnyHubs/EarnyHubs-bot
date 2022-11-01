/*CMD
  command: /panel
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 👨‍💻Admin Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var panel = {
  title: "Admin Information",
  description: "Please fill here your admin id",

  index: 0,
  icon: "key",

  button_title: "SAVE",

  fields: [
    {
      name: "ADMIN_ID",
      title: "Admin ID",
      description: "you can enable and disable other ads /myads #B1",
      type: "string",
      placeholder: "5481127830"
    },
    {
      name: "AdminCUR",
      title: "Currency ID",
      description: "example: LTC",
      type: "string",
      placeholder: "TRX"
    },
    {
      name: "BotStart",
      title: "Bot Start",
      description: "example: hello welcome to my bot",
      type: "text",
      placeholder: "......."
    },
    {
      name: "Wdmin",
      title: "Minimum Withdraw",
      description: "example: 0.00001",
      type: "string",
      placeholder: "30"
    },
    {
      name: "AdminApikey",
      title: "API key Gainer Wallet bot",
      description: "your api key",
      type: "string",
      placeholder: "kedn6fadsabhgd4asss66lvbe"
    },
    {
      name: "AdminWebhookDeposit",
      title: "Webhook receive from Gainer Wallet Bot",
      description: "your Webhook deposit",
      type: "string",
      placeholder:
        "https://api.bots.business/v1/bots/703862/new-webhook?&command=Deposit%26transaction&public_user_token=77559b2e9b2485acff681f3274daf6a0&user_id=14414452"
    },
    {
      name: "AdminWebhookWithdraw",
      title: "Webhook send from Gainer Wallet Bot",
      description: "your Webhook withdraw",
      type: "string",
      placeholder:
        "https://api.bots.business/v1/bots/703862/new-webhook?&command=send%26withdraw&public_user_token=4ef470a99a017826fe7f76144ad1d805&user_id=14414452"
    }
  ]
}
//panel 2
var panel2 = {
  title: "Ads Panel",
  description: "Please fill here your ads panel",

  index: 0,
  icon: "key",

  button_title: "SAVE",

  fields: [
    {
      name: "Ads_bots_cpc",
      title: "🤖 Message Bots cpc",
      description: "minimum cpc",
      type: "string",
      placeholder: "your minimum cpc per click"
    },
    {
      name: "Ads_bots_budget",
      title: "🤖 Message Bots budget",
      description: "minimum budget",
      type: "string",
      placeholder: "your minimum budget create ads"
    },
    {
      name: "Ads_visit_cpc",
      title: "💻 Visit Sites cpc",
      description: "minimum cpc",
      type: "string",
      placeholder: "your minimum cpc create ads"
    },
    {
      name: "Ads_visit_budget",
      title: "💻 Visit Sites budget",
      description: "minimum budget",
      type: "string",
      placeholder: "your minimum budget create ads"
    },
    {
      name: "Ads_chats_cpc",
      title: "📣 Join Chats cpc",
      description: "minimum cpc",
      type: "string",
      placeholder: "your minimum cpc create ads"
    },
    {
      name: "Ads_chats_budget",
      title: "📣 Join Chats budget",
      description: "minimum budget",
      type: "string",
      placeholder: "your minimum budget create ads"
    },
    {
      name: "Ads_watch_cpc",
      title: "👁 Watch Ads cpc",
      description: "minimum cpc",
      type: "string",
      placeholder: "your minimum cpc create ads"
    },
    {
      name: "Ads_watch_budget",
      title: "👁 Watch Ads budget",
      description: "minimum budget",
      type: "string",
      placeholder: "your minimum budget create ads"
    }
  ]
}
//3
var panel3 = {
  title: "Ads Click Total",
  description: "Please fill here your ads Click Total",

  index: 0,
  icon: "key",

  button_title: "SAVE",

  fields: [
    {
      name: "Ads_bots_click",
      title: "🤖 Message Bots Click total",
      description:
        "How much your minimum budget in message bots Example: I set my minimum budget to: 0.001 Multiplication 0.001 X 1000 = 1 Write: 1000 👇and If your minimum budget 0.1 Write: 10 👇",
      type: "string",
      placeholder: "your number click total"
    },
    {
      name: "Ads_visit_click",
      title: "💻 Visit Sites Click total",
      description:
        "How much your minimum budget in message bots Example: I set my minimum budget to: 0.001 Multiplication 0.001 X 1000 = 1 Write: 1000 👇and If your minimum budget 0.1 Write: 10 👇",
      type: "string",
      placeholder: "your number click total"
    },
    {
      name: "Ads_chats_click",
      title: "📣 Join Chats Click total",
      description:
        "How much your minimum budget in message bots Example: I set my minimum budget to: 0.001 Multiplication 0.001 X 1000 = 1 Write: 1000 👇and If your minimum budget 0.1 Write: 10 👇",
      type: "string",
      placeholder: "your number click total"
    },
    {
      name: "Ads_watch_click",
      title: "👁 Watch Ads Click total",
      description:
        "How much your minimum budget in message bots Example: I set my minimum budget to: 0.001 Multiplication 0.001 X 1000 = 1 Write: 1000 👇and If your minimum budget 0.1 Write: 10 👇",
      type: "string",
      placeholder: "your number click total"
    }
  ]
}
AdminPanel.setPanel({
  panel_name: "ADMIN_ID",
  data: panel
})
AdminPanel.setPanel({
  panel_name: "Ads_bots_cpc",
  data: panel2
})
AdminPanel.setPanel({
  panel_name: "Ads_bots_click",
  data: panel3
})
var panel4 = {
  title: "Reward Verification",
  description: "Please fill here your ads Total Reward",

  index: 0,
  icon: "key",

  button_title: "SAVE",

  fields: [
    {
      name: "reward_verify",
      title: "Reward Verification",
      description: "Set your reward here",
      type: "string",
      placeholder: "Set your reward here"
    }
  ]
}
AdminPanel.setPanel({
  panel_name: "reward_verify",
  data: panel4
})
Bot.sendMessage("Go to bb app setup adminpanel")

