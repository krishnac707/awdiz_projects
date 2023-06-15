let array1 = [2, 3, 5, 5, 32, 54, 23, 12, 45, 23, 43, 1, 34, 65, 1, 54, 6, 33, 4, 9, 7];
let target = "start here";

let array2 = [2, 3, 5, 56,23];
let target1 = "end here";

function countOddNumber(array,position){
    for (let i = 0; i < array.length; i++) {
        if((array[i]%2)==1){
            console.log(array[i],position);
        }        
    }
}

//For array1
countOddNumber(array1,target);

//for array2
countOddNumber(array2,target1);

