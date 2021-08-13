String.prototype.toJadenCase = function () {
  //...
  const wordsArr = this.split(' ');
  wordsArr.forEach((word, idx) => wordsArr[idx] = word.charAt(0).toUpperCase() + word.slice(1));
  return wordsArr.join(' ');
};


// Comparing to other solutions.. 
// could have used map and chained everything in one line! 