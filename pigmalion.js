//esta version repite sumas que ya hice, recorre el array completo

function sumaDaX(nums, requiredSum) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      //me aseguro de no repetir el primer array
      if (nums[j] + nums[i] === requiredSum) {
        return true;
      }
    }
  }
  return false;
}

console.log(sumaDaX([1, 4, 3, 9], 8)); //false
console.log(sumaDaX([1, 2, 4, 4], 8)); //true

function sumaDaXOptimizado(nums, requiredSum) {
  const visto = new Set(); //creo valores unicos con un set
  for (const num of nums) { //itero los numeros
    const complemento = requiredSum - num; //busco el complemento de requiredSum
    if (visto.has(complemento)) return true; //si lo encuentro ya tengo mi par
    visto.add(num); //si no agrego el num al set
  }
  return false;
}

console.log(sumaDaXOptimizado([1, 4, 3, 9], 8)); //false
console.log(sumaDaXOptimizado([1, 2, 4, 4], 8)); //true
