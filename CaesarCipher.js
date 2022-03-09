function CaesarCipher(string, sequence, cripOrDecrip) {
  var stringSplited = Array.from(string);

  return stringSplited.map((e) =>
    String.fromCharCode(e.charCodeAt(0) + (cripOrDecrip ? sequence : -sequence))
  );
}

console.log(CaesarCipher("DEF", 3, true));
