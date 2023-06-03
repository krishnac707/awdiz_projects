let target = 60;
let array = [58, 2, 40, 57, 60, 10, 20, 50, 42, 39, 52]

for (let i = 0; i < array.length; i++) {

    for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] == target) {
            // console.log(array[i], array[j], "got");
             console.log(array[i], "+", array[j], "=", array[i] + array[j]);
            
        }
    }
}