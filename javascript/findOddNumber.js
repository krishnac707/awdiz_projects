// let givenArray = [23, 45, 56, 67, 23, 56, 68, 34, 4556, 78, 655, 23, 568787, 89845, 343, 54576,7873, 323, 54, 636, 6836, 575];

// function findOdd(oddNum){
//     let res=[];
//     for (let i = 0; i < oddNum.length; i++) {
//         if(oddNum[i]%2 == 1){
//             // console.log(givenArray[i]);
//             res.push(oddNum[i]);
//         }
//     }
//     console.log(res);
// }
// findOdd(givenArray);

// let givenArray = ["krishna","ravi","aakash","avinash","aadarsh"];
// console.log(givenArray);
// givenArray.push("rahul");
// console.log(givenArray);

// console.log(givenArray.pop());
// givenArray.pop();
// console.log(givenArray);

//unshift is use to add element in given array
// givenArray.unshift("rohit");
// console.log(givenArray);

//shift is used to remove element from given array
// givenArray.shift();
// console.log(givenArray);

// let startNum = 4986;
// let endNum = 5079;

// function divisibleFive(startNum,endNum) {
//     let res = []
//   for (let i = startNum; i <= endNum; i++) {
//     if (i % 5 == 0) {
//         res.push(i);
//     }
//     console.log(res);
//   }
// }

// divisibleFive(startNum,endNum);

// Q.Find numbers who are divisible by 2, 5, and 10 from given range,
//     then use that array to make new array with second element of array.
// (note - use reverse for loop)

var start = 8723;
var end = 6567;
function twoStage(start, end) {
  let filteredArray = [];
  let result = [];
  for (let i = start; end <= i; i--) {
    if (i % 2 == 0 && i % 5 == 0 && i % 10 == 0) {
      filteredArray.push(i);
    }
  }
  for (let j = 1; j < filteredArray.length; j = j + 2) {
    result.push(filteredArray[j]);
  }
  console.log(result);
}

twoStage(start, end);
