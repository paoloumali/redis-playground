const Strings = (redis) => {

  redis.set('name', 'Paul');
  redis.get('name', (err, result) => console.log(result));

}

export default Strings;




