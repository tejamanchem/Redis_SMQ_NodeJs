'use strict';
import {Message, Producer} from 'redis-smq'
export function producer(body:any){ 
const producer = new Producer();
producer.run((err) => {
   if (err) throw err;
   const message = new Message();
   message
           .setBody({hello: `${body.data}`})
           .setScheduledCRON(`${body.cronExpression}`)
           .setQueue('test_queue'); // setting up a direct exchange
          
 
    //   .setTTL(3600000) // message expiration (in millis) 
    // message.setScheduledCRON('0 * * * * *');     
    // message.setScheduledRepeat(5);
    // message.setScheduledRepeatPeriod(10000); 
   message.getId() // null
   producer.produce(message, (err) => {
      if (err) console.log(err);
      else {
         const msgId = message.getId(); // string
         console.log('Successfully produced. Message ID is ', msgId);
         
      }
   });
})

}