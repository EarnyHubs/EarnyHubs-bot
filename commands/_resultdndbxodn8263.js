/*CMD
  command: /resultdndbxodn8263
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let arr=params.split(' ')
let id=arr[0]
let wdid=arr[1]
User.setProperty("mgid22"+id+wdid,options.result.message_id,'integer')
