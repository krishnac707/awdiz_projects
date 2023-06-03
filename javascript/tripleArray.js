target = 40;

let array = [80, 50, 90, 30, 60, 25, 45, 10, 5]

// for (let i = 0; i < array.length - 1; i++) {
//     console.log(array[i]);
//     for (let j = i + 1; j < array.length; j++) {
//         console.log(array[i], array[j]);
//         if (array[i] + array[j] == target) {
//             return console.log(array[i], "+", array[j],"=", target, "GOt it");
//         }
//     }
// }

for (let i = 0; i < array.length - 2; i++) {
    for (let j = i + 1; j < array.length - 1; j++) {
        for (let k = j + 1; k < array.length; k++) {
            console.log(array[i], array[j], array[k]);
            if (array[i] + array[j] + array[k] == target) {
                return console.log(array[i], "+", array[j], "+", array[k], "=", array[i] + array[j] + array[k]);
            }
        }
    }
}