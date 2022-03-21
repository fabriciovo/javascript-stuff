function findOdd(A) {
  var odd = 0;
  var oddList = [];
  for (var i = 0; i <= A.length; i++) {
    if (A[i] % 2 !== 0 && !oddList.includes(A[i])) {
      oddList.push(A[i]);
      odd++;
    }
  }

  return odd;
}

function getSum(a, b) {
  if (a === b) return a;
  var _a = 0;
  var _b = 0;

 
  for (var i = a; i <= b; i++) {
    a += i;
    console.log(a);
  }


  return a + b;
}

console.log(getSum(-1, 2));
