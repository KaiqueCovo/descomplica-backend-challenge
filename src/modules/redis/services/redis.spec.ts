import { Test, TestingModule } from '@nestjs/testing';
import { RedisCacheService } from './redis';
import { CacheModule, CACHE_MANAGER } from '@nestjs/common';
import { Cache } from 'cache-manager';

describe('UserCacheService', () => {
  let service: RedisCacheService;
  let cacheManager: Cache;

  const mockCache = {
    get: jest.fn(),
    set: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CacheModule.register({})],
      providers: [
        RedisCacheService,
        {
          provide: CACHE_MANAGER,
          useValue: mockCache,
        },
      ],
    }).compile();

    service = module.get<RedisCacheService>(RedisCacheService);
    cacheManager = module.get<Cache>(CACHE_MANAGER);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be get cache', async () => {
    mockCache.get.mockReturnValue('cache');

    const cached = await service.get('key');

    expect(cached).not.toBeFalsy();
    expect(cached).toBe('cache');
    expect(mockCache.get).toHaveBeenCalledTimes(1);
  });

  it('should be set cache', async () => {
    mockCache.set.mockReturnValue('cache');

    const cached = await service.set('key', 'cache');

    expect(cached).not.toBeFalsy();
    expect(cached).toBe('cache');
    expect(mockCache.set).toHaveBeenCalledTimes(1);
  });

  it('cache manager should be available', () => {
    expect(cacheManager).toBeDefined();
  });
});
