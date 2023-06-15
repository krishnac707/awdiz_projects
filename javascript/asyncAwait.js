
// console.log("first");
//  setTimeout(()=>{
//     console.log("second");
//  },2000)

//  setInterval(() => {
//     console.log("fourth");
//  }, 1000);
// console.log("third");

function hello() {
    return new Promise(respone=>{
        setTimeout(()=>{
            respone("resolved");
        },2000)
    })
    
}

async function hiEveryone(){
    console.log("first");

    const result = await hello();
    console.log(result,"-result");
    console.log("third");
}

hiEveryone()

