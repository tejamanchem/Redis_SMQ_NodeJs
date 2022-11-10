import { MessageManager, QueueManager } from "redis-smq";
const config = require('./config')
let queueManager;
let NAMESPACE = "rsmq";

export function myQueueManager(queueName:any) {
  QueueManager.createInstance(config, (err:any, queueManager) => {
    if (err) console.log('err while create instance',err);
    else
      queueManager?.queue.exists(queueName, (err:any, reply) => {
        if (err) console.log('error while creating queue',err);
        else if (!reply)
          queueManager?.queue.create(queueName, false, (err:any) => console.log('error whike crresting queue',err));
        else{
          console.log('alreday existed',err)
        }
        console.log(reply)
      });
  });
return
}

//myQueueManager()

export function getPendingMessages() {
  MessageManager.createInstance(config, (err: any, messageManager: any) => {
    if (err) console.log(err);
    else {
      messageManager.pendingMessages.list("test_queue", 0, 10, (err: any, msg: any) => {
        if (err) {
          console.log(err);
        }
        console.log(msg);
        for (let a of msg.items) {
          console.log(a.message);
        }
      })
    }
  })
}

export function getALLMessages() {
  MessageManager.createInstance(config, (err: any, messageManager: any) => {
    if (err) console.log(err);
    else {
      messageManager.scheduledMessages.list(0, 10, (err: any, msg: any) => {
        if (err) {
          console.log(err);
        }
        console.log(msg);
        return msg
      })
    }
  })
}
export function getMessageBySeqId(sequenceId:any) {
  console.log('y8ur9tyu0uy09u')
  let mainresult;
  MessageManager.createInstance(config, (err: any, messageManager: any) => {
    if (err) console.log(err);
    else {
      console.log('y8ur9tyu0uy09u')
      messageManager.scheduledMessages.list(0, 10, (err: any, msg: any) => {
        if (err) {
          console.log(err);
        }
        console.log(msg);
        for(let i of msg.items){
          console.log(i,'y8ur9tyu0uy09u')
          if(i.sequenceId == sequenceId){
            mainresult= i
          }
        }
      })
    }
  })
  console.log('!@#$%',mainresult)
}

export function deleteMessageInQueue(seqId:any){

  let messaages:any = getMessageBySeqId(seqId)
  console.log(messaages)
  MessageManager.createInstance(config, (err: any, messageManager: any) => {
    if (err) console.log(err);
    else {
      messageManager.scheduledMessages.delete(messaages.messageState.uuid, (err: any, msg: any) => {
        if (err) {
          console.log(err);
        }
        console.log(msg);
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
