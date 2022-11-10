import { RedisClientName } from 'redis-smq-common/dist/types';
import { Consumer, Producer, Message, QueueManager } from 'redis-smq'
import { IConfig }  from 'redis-smq/dist/types'
export const config:IConfig = {
    namespace: 'ns1',
    redis: {
      client: RedisClientName.IOREDIS,
      options: {
        host: '127.0.0.1',
        port: 6379,
      },
    },
    logger: {
      enabled: true,
      options: {
        level: 'info',
        // streams: [
        //   {
        //     path: path.normalize(`${__dirname}/logs/redis-smq.log`),
        //   },
        // ],
      },     
    },
    messages: {
      store: {
        acknowledged: {
          queueSize: 5000,
        },
        deadLettered: {
          queueSize: 5000,
          expire: 24 * 60 * 60 * 1000
        },
      }
    }
  }
