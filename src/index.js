
// You should implement your task here.
module.exports = function towelSort (matrix) {
  if (arguments.length === 0 || matrix.length === 0) return [];

  let result = [];
  let koef = 0;
  
  for(let i = 0; i < matrix.length; i++){
    if(koef == 0){
      result.push(...matrix[i].sort((a, b) => a - b));
      koef = 1;
    }else{
      result.push(...matrix[i].sort((a, b) => a - b).reverse());
      koef = 0;
    }
  }

  return result;
}
