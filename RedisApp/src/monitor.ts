import { MonitorServer } from 'redis-smq-monitor'
import {configuration} from './monitorConfig'
let congig1 = configuration
const monitorServer = MonitorServer.createInstance(configuration);
console.log('in monitot.ts monitor server : ',monitorServer)
monitorServer.listen(
).catch((err: Error) => {
  console.error(err);
});

