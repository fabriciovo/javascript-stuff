function validParentheses(parens) {
  let array = parens.split("");
  if (array.length === 0) return true;
  if (array.length % 2 !== 0) return false;
  if (array[0] !== "(" && array[array.length - 1] !== ")") return false;



  return true;
}


console.log(validParentheses("()()))"));
