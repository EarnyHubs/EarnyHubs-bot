/*CMD
  command: /resulttosetid4button
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//Bot.sendMessage(inspect(options))
let id=options.result.message_id
let arr=params.split(' ')
let telegramid=arr[0]
let amount=arr[1]*1
let wdlist=arr[2]

Bot.setProperty("mgid"+telegramid+wdlist,id,'integer')
