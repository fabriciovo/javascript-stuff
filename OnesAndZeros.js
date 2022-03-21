const binaryArrayToNumber = arr => {
    var count = 0;
    var array = arr.reverse();
    
    for(var i = 0; i < array.length; i++){
      if(array[i] === 1){
        count += Math.ceil(Math.pow(2, i));
      }
    }
    return count;
  };

  const binaryArrayToNumberReduce = arr => {
    return arr.reduce((total, cur) => (total = total * 2 + cur), 0);
  }
  const binaryArrayToNumberParseInt = arr => {
    return parseInt(Number(arr.join('')), 2)
  };



  console.log(binaryArrayToNumber([0,0,1,0]))