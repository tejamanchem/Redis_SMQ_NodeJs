'use strict';

import { Consumer } from  'redis-smq'

const consumer = new Consumer();

const messageHandler = (msg:any, cb:any) => {
   const payload = msg.getBody();
   console.log('Message payload', payload);
   cb(); // acknowledging the message
};

consumer.consume('test_queue', messageHandler, (err) => {
   if (err) console.error(err);
});

consumer.run();