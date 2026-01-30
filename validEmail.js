function validEmail(email){
    console.log(email);
    if (typeof email !== "string") {
        return "Invalid";
    }
    else if(email[0] === "." || email[0] === "-" || email[0] === "_" || email[0] === "+" || email[0] === "@"){
        // console.log(email);
        return false;
    }
    else if(!email.includes("@") || email.includes(" ")){
        return false;
    }
    else if (!email.endsWith(".com")) {
        return false;
    }
    else{
        return true;
    }
}

const email = "abc@gmail.com";
const result = validEmail(email);
console.log(result);
