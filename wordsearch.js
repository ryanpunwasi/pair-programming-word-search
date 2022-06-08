const transpose = (matrix) => {
  let output = [];
  if (!matrix.length) {
    return output;
  }
  
  output = matrix[0].map((column, i) => {
    return matrix.map((row, j) => {
      return matrix[j][i];
    });
  });
  return output;
};

const wordSearch = (letters, word) => {
  if (!letters.length) {
    return false;
  }
  const transposed = transpose(letters);
  const horizontalJoin = letters.map(ls => ls.join(''));
  const reverseHorizontally = letters.map(ls => ls.slice().reverse().join(''));
  const reverseVertically = transposed.map(ls => ls.slice().reverse().join(''));
  const join = transposed.map(ls => ls.join(''));
    
  let array = [horizontalJoin, join, reverseHorizontally, reverseVertically];

  for (let i = 0; i < array.length; i++) {
    for (let l of array[i]) {
      if (l.includes(word)) return true;
    }
  }
    
  return false;

};

module.exports = wordSearch;