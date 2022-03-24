function isPangram(string){
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");
    return alphabets.every(x => string.toLowerCase().includes(x));
}