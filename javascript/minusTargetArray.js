target = 40;

let array = [80, 50, 90, 60, 25, 45, 10, 5]

for (let i = 0; i < array.length; i++) {
//    console.log(array[i]);
   for (let j = 0; j < array.length; j++) {
        
        if(array[i]-array[j] == target){
            return console.log(array[i],"-",array[j],"=",target);
        }

   }
    
}