let express = require('express');
const { QueueManager } = require('redis-smq');
const config = require('./config')
 import {producer} from "../../test-redis-smq/producer"
var bodyParser = require('body-parser');

let QUEUENAME = "testqueue";
let NAMESPACE = "rsmq";

let PORT = 3000;
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



app.post('/job', async(req:any, res:any) => {
    console.log("sending message");
    let result = producer(req.body)
    res.send(`pushed new message into queue`)
});



app.listen(PORT, () => console.log("Server started!"));