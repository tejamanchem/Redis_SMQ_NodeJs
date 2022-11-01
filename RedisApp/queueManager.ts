const { QueueManager } = require('redis-smq');
const config = require('./config')

QueueManager.createInstance(config, (err:any, queueManager:any) => {
  if (err) console.log(err);
  // Creating a LIFO queue
  else queueManager.queue.create('test_queue', false, (err:any) => console.log(err));
})