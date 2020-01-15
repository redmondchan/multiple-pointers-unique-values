// function that accepts a sorted array and counts the unique values in the array Ex: [1, 1, 1, 1, 2] return 2

function uniqueValues(array){
  let index = 0

  for(let i = 1; i < array.length; i++){
    if(array[index] !== array[i]){
      index++
      array[index] = array[i]
    }
  }
  return index + 1
}

// function uniqueValues(array){
//   let index1 = 0
//   let index2 = 1
//   let count = 1

//   if(array.length === 0){
//     return 0
//   }

//   while(index2 < array.length){
//     if(array[index1] !== array[index2]){
//       count += 1
//       index1 += 1
//       index2 += 1
//     } else {
//       index1 += 1
//       index2 += 1
//     }
//   }
//   return count
// }

console.log(uniqueValues([])) // 1
console.log(uniqueValues([1, 1, 1, 1, 2])) //2
console.log(uniqueValues([1, 2, 3, 4, 5])) //5
console.log(uniqueValues([1, 1, 2, 2, 3, 3])) //3
