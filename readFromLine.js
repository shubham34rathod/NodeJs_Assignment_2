const readLine=require("readline");


const rl=readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function takeInput(message){
    return new Promise((callbackFunc, error)=>{
        rl.question(message, (input)=>{
            callbackFunc(input)
        }, function(){
            error();
        });
    });
}


 async function LineInput(){
    const name=await takeInput("Please enter your name:");
    console.log("Hello " + name);
    rl.close();
 }

 LineInput();