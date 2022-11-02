import { MessageManager } from "redis-smq";

const { QueueManager } = require('redis-smq');
const config = require('./config')
let queueManager;
function myQueueManager(){
  QueueManager.createInstance(config, (err:any, queueManager:any) => {
  if (err) console.log(err);
  // Creating a LIFO queue
  else queueManager.queue.create('test_queue', false, (err:any) => console.log(err));
})
}

export function getMessages(){  
MessageManager.createInstance(config, (err:any, messageManager:any) => {
    if (err) console.log(err);
    else {
      messageManager.pendingMessages.list("test_queue",0,10,(err:any,msg:any)=> {
            if(err){
              console.log(err);
            }
            console.log(msg);
            for(let a of msg.items){
              console.log(a.message);
            }
          })
    }
  })
}
  // MessageManager.prototype.scheduledMessages.list(0,10,(err:any,msg:any)=> {
  //     if(err){
  //       console.log(err);
  //     }
  //     console.log(msg);
  //   });
