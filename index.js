function hasTargetSum(array, target) {
  // Iterate through each number in the array
  for (let i = 0; i < array.length; i++) {
    // Iterate through the remaining numbers in the array
    for (let j = i + 1; j < array.length; j++) {
      // Check if the pair of numbers adds up to the target
      if (array[i] + array[j] === target) {
        return true; // Found a pair that adds up to the target
      }
    }
  }

  // No pair of numbers adds up to the target
  return false;
}
/* 
 //The time complexity of the hasTargetSum function is O(n^2), 
 //where n is the length of the input array.

 //The outer loop runs n times, and for each iteration of the 
 //outer loop, the inner loop runs n - 1 times
 //(since it starts from the next index). 
 //This results in a total of n * (n - 1) iterations,
 //which simplifies to O(n^2)
*/

/* 
  //The function hasTargetSum takes 2 arguments
  //the for loop iterated through each item in the array and added 2 numbers
  //If 2 of the numbers sum to the target, it returns true
  //otherwise it returns false
*/

/*

//hasTargetSum function takes in an of integers and a target 
//integer. It aims to determine whether there exists pair of
// numbers in array that adds up to the target.

//Use a nested loop structure. The outer
// loop iter over each number in the array, while the inner loop
// iterates over the remaining numbers following the current number
// Compare every possible pair of numbers in array.

//Within the nested loops, check if the sum of the current pair 
//of numbers equals the target. If the sum matches the target, 
//we immediately return true, indicating that a pair has been found.

// If complete all iterations of the nested loops without finding a 
// pair that adds up to the target, we return false, indicating that
// no such pair exists in the array.

// This solution has a time complexity of O(n^2) because it compares
// every pair of numbers in the worst case scenario
// The function may exit early if a pair is found, resulting in
// better time complexity in those cases.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
