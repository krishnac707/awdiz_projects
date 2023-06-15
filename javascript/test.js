
let target = 25;
let array = [2, 3, 5, 5, 32, 54, 23, 12, 45, 23, 43, 1, 34, 65, 1, 54, 6, 33, 4, 9, 7];

for (let i = 0; i < array.length - 3; i++) {

    for (let j = i + 1; j < array.length - 2; j++) {

        for (let k = j + 1; k < array.length - 1; k++) {

            for (let l = k + 1; l < array.length; l++) {

                if (array[i] + array[j] + array[k] + array[l] == target) {
                    console.log(array[i] ,array[j] ,array[k] ,array[l],"=",array[i] + array[j] + array[k] + array[l],"got it");
                }
            }
        }
    }

}