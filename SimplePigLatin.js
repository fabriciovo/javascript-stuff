function pigIt(str) {
  var string = str.split(" ");
  var result = [];
  let wordTemp = "";
  for (let x in string) {
    let temp = string[x].split("");
    if (temp[0].match(/[a-z]/i)) {
      for (let y = 0; y < temp.length; y++) {
        let first = temp[0];
        let last = temp[temp.length - 1];

        if (y !== 0) {
          wordTemp += temp[y];
        }
        if (y === temp.length - 1) {
          wordTemp += `${first}ay`;
        }
      }
      result.push(wordTemp);
      wordTemp = "";
    } else {
      result.push(string[x]);
    }
  }
  return result.join(" ");
}
console.log(pigIt("Acta est fabula"));
