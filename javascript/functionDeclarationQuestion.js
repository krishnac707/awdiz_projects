// var number1 = 9876;
// var number2 = 5678;

// function subtraction(num1,num2){
//     return num1-num2;
// }
// let res = subtraction(number1,number2);
// console.log(res);



// var number3 = 9876;
// var number4 = 5678;
// function multiplication(num1,num2){
//     let mul = num1 * num2;
//     return mul;
// }

// let res= multiplication(number3,number4)
// console.log(res);

// var number5 = 9876;
// var number6 = 5678;
// function divid(num1,num2){
//     let divide = num1 / num2;
//     return divide;
// }

// let res= divid(number5,number6)
// console.log(res);

let array = [34, 45, 56, 67, 78, 34, 76, 234, 567, 7834, 56, 34, 109, 2, 1];
let target = 112;


function additionOfThreeNumber(array3, target) {
    let flagg = false;


    for (let i = 0; i < array3.length - 2; i++) {
        // console.log(array3[i]);

        for (let j = i + 1; j < array3.length - 1; j++) {

            for (let k = j + 1; k < array3.length; k++) {

                if (array3[i] + array3[j] + array3[k] == target) {

                    console.log(array3[i], array3[j], array3[k], "hello");
                    flagg = true;
                }
            }
        }
    }

    if (flagg == false) {
        console.log("Addition is not matched");
    }

}

additionOfThreeNumber(array, target);

// console.log(res,"world");







