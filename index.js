function getNumbers(){
    let num1=parseInt(prompt("enter 1st number"));
    let num2=parseInt(prompt("enter 2nd number"));
    console.log("user entered",num1)
    console.log("user entered",num2)
    addNumbers(num1,num2)
}

function addNumbers(num1,num2){
    console.log("the result is",num1+num2)
    return("result is",num1+num2)
}

getNumbers();
// 