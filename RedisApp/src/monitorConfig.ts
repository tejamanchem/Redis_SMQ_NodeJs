// 'use strict';

// export const configuration1 = {
//     redis: {
//         driver: 'redis',
//         options: {
//             host: '127.0.0.1',
//             port: 6379,
//             connect_timeout: 3600000,
//         }
//     },
//     monitor: {
//         enabled: true,
//         host: '127.0.0.1',
//         port: 3000,
//     },
// }

const { ConsumerEventListener, ProducerEventListener } = require('redis-smq-monitor');
import { RedisClientName } from 'redis-smq-common/dist/types';
import { IConfig }  from 'redis-smq/dist/types'
export const configuration = {
  eventListeners: {
    consumerEventListeners: [ConsumerEventListener],
    producerEventListeners: [ProducerEventListener],
  },
  monitor: {
            enabled: true,
            server:{
              host: 'localhost',
              port: 3000,
          },
          logger: {
              enabled: false,
          },
          messages: {
              store: true,
        }
      }
    }
  


