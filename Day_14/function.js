function nice(name){
    console.log("hey "+"you are good person")
    console.log("hey "+"you are bad person")
    console.log("hey "+"you are looking sad")
}

nice("harry");

function sum(a,b) {
    console.log(a+b)
    return a+ b;
}

 let result = sum(3,5)
 
 console.log("The sum of these number is : ", result)

 // arrow function
 const sum1 = (e)=>{
    console.log("I am an arrow function ", e)
 }

 sum1(23)