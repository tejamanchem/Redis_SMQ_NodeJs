import { ICallback, RedisClientName } from 'redis-smq-common/dist/types';
let express = require('express');
const { QueueManager } = require('redis-smq');
const config = require('./config')
 import {producer} from "./producer"
import {  getMessages } from './queueManager';
var bodyParser = require('body-parser');


let PORT = 3000;
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



app.post('/job', async(req:any, res:any) => {
    console.log("sending message");
    let result = producer(req.body)
    res.send(`pushed new message into queue`)
});


app.get('/jobs', async(req:any, res:any) => {
    console.log("sending message");
    let result = getMessages();
    console.log(result);
    res.send(`pushed new message into queue`);
});



app.listen(PORT, () => console.log("Server started!"));

