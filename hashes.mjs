const Hashes = (redis) => {
  redis.hmset('user:1', 'name', 'Paolo', 'age', 35);
  redis.hgetall('user:1', (err, result) => console.log(result));
  redis.hincrby('user:1', 'age', 1);
}

export default Hashes;
