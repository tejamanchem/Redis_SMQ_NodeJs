import { ICallback, RedisClientName } from 'redis-smq-common/dist/types';
let express = require('express');
const { QueueManager } = require('redis-smq');
const config = require('./config')
 import {producer} from "./producer"
import { getALLMessages,getMessageBySeqId,deleteMessageInQueue,myQueueManager} from './queueManager';
var bodyParser = require('body-parser');


let PORT = 3000;
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



app.post('/job', async(req:any, res:any) => {
    console.log("sending message");
     let queueExists = myQueueManager(req.body.queueName)
    let result = producer(req.body)
    res.send(`pushed new message into queue`)
});


app.get('/jobs', async(req:any, res:any) => {
    console.log("sending message");
    let result = getALLMessages();
    console.log(result);
    res.send(`messages from the queue ${result}`);
});

app.delete('/job/delete',async(req:any,res:any)=>{
    console.log('this is delete request')
    let result = deleteMessageInQueue(req.query.seqId)
    res.send(`deleted message in queue ${result}`)
})

// app.get('/jobs/queue', async(req:any, res:any) => {
//     console.log("sending message");
//     let result = deleteMessages(req.params.seqId);
//     console.log(result);
//     res.send(`messages from the queue ${result}`);
// });




app.listen(PORT, () => console.log("Server started!"));

