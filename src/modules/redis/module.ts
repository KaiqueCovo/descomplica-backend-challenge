import { Module, CacheModule } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import { RedisCacheService } from './services/redis';

import { REDIS_HOST, REDIS_PORT, REDIS_TTL } from 'src/settings';

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: REDIS_HOST,
      port: REDIS_PORT,
      ttl: REDIS_TTL,
    }),
  ],
  providers: [RedisCacheService],
  exports: [RedisCacheService],
})
export class RedisCacheModule {}
