function electionResult(votes){
    // console.log(votes);

    if (!Array.isArray(votes)) {
        return "Invalid"
    }
    let mango = 0;
    let banana = 0;
    let na = 0;
    for (const vote of votes) {
        // console.log(vote);
        if (vote === "mango") {
            mango++
        }
        else if (vote === "banana") {
            banana++
        }
        else{
            na++
        }
    }
    if (mango === banana) {
        return "draw"
    }
    else if (mango > banana) {
        return "mango"
    }
    else{
        return "banana"
    }
    
}

const votes = ["mango","banana","na-vote","banana","mango","mango","banana","banana","mango","banana","banana","mango","mango","banana"]
// const votes = 678
const result = electionResult(votes)
console.log(result);
