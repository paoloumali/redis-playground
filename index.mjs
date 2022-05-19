import Redis from 'ioredis';
import Strings from './strings.mjs';
import Hashes from './hashes.mjs';

const redis = new Redis();

Strings(redis);
Hashes(redis);


