function isBestFriend(friend1,friend2){
    // console.log(friend1,friend2);
    if (typeof friend1 !== "object" || typeof friend2 !== "object") {
        return "Invalid"
    }

    else if (friend1.roll === friend2.bestFriend) {
        return true;
    }
    else if(friend2.roll === friend1.bestFriend){
        return true;
    }
    else{
        return false;
    }
}

const friend1 = {name: "kamal", roll: 3, bestFriend: 3}
// const friend1 = true
const friend2 = {name: "jamal", roll: 2, bestFriend: 1}
const result  = isBestFriend(friend1, friend2)
console.log(result);
