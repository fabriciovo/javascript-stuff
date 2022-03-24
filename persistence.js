function persistence(num) {
  re(num, 0);
}
function re(num, index) {
  var initialValue = num.toString().split("");
  if (initialValue.length === 1) return initialValue[0];
  
  var newSum = index;
  
  var sum = num
    .toString()
    .split("")
    .map((e) => parseInt(e))
    .reduce((previousValue, currentValue) => {
      return previousValue * currentValue;
    }, 1);



    var array = num.toString().split("").length > 1
    for(var i = 0; i<  num.toString().split("").length; i++){
        num
    }
}
persistence(999);
