function cashOut(amount){
    // console.log(typeof amount);
    
    if (typeof amount !== "number") {
        return "Invalid"
    }
    else if(amount < 0) {
        return "please give me positive number"
    }
    const charge = (amount * 1.75)/100 
    return charge
    
}

const amount =" 0";
const result = cashOut(amount)
console.log(result);
