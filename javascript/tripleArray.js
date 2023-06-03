target = 40;

let array = [80, 50, 90, 60, 25, 45, 10, 5]

for (let i = 0; i < array.length; i++) {
        // console.log(array[i]);
    for (let j = i + 1; j < array.length; j++) {

        for (let k = 0; k < array.length; k++) {
            // console.log(array[i],array[j],array[k]);
            if(array[i]+array[j]+array[k] == target){
                return console.log(array[i],"+",array[j],"+",array[k],"=",target);
            }
        }
    }
}