

function subCheck(num1, num2) {

    if (num1 - num2 > 0) {
        return console.log("number is greater");
    }
    else if (num1 - num2 == 0) {
        return console.log("number is 0");
    }
    else {
        return console.log("number is lesser");
    }

}

subCheck(54, 54);

function addition(num1, num2) {
    let add = num1 + num2;
    return add;
}

addition(54, 28);

//array question

let array = [2, 345, 56, 78, 34, 67, 4, 76, 34, 64, 34, 767]

let target = 80;

function findNumber(array1, target) {
    for (let i = 0; i < array1.length - 1; i++) {
       for (let j = i+1; j < array1.length; j++) {
            if(array1[i]+array1[j] == target){
                console.log(array1[i],array1[j]);
            }
       }

    }
}

findNumber(array,target);