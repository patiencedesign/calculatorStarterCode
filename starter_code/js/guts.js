// All the code you will need to create for this project will be completed below
// Your functions must be called the following:
    // multiply, divide, subtract, add, power, square_root, logBase10, generateRandomNumber
    

function multiply(first_operand , second_operand){
    return first_operand * second_operand
}

function divide(first_operand , second_operand){
    return first_operand / second_operand
    
}

function subtract(first_operand , second_operand){
    return first_operand - second_operand
    
}

function add(first_operand , second_operand){
    return first_operand + second_operand
    
}

function power(first_operand , second_operand){
    return Math.pow(first_operand, second_operand)
    
}

function square_root(first_operand){
    return Math.sqrt(first_operand)
    
}

function logBase10(first_operand){
    return Math.log10(first_operand)
}

function generateRandomNumber(){
    return Math.floor((Math.random()*100) + 1)
    
}

function factorial(first_operand){
    var array = [];
    for(i = 1; i < first_operand + 1; i++){
        array.push(i)
    }
    return array.reduce(function(a,b){return a*b;});
}