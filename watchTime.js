function calculateWatchTime(seconds){
    // console.log(seconds);
    for (const sec of seconds) {
        if (typeof sec !== "number") {
            return "Invalid"
        }
    }
    let totalSec = 0
    for (const sec of seconds) {
        totalSec = totalSec + sec
    }
    console.log(totalSec);
    
    const hours = parseInt(totalSec / 3600)
    const hoursSec = hours * 3600
    const remainingSec = totalSec - (hours * 3600)
    // console.log(hours, remainingSec);
    const minute = parseInt(remainingSec / 60);
    // console.log(hours, minute);
    
    const remainingSeconds = minute * 60

    // console.log(totalSec -(hours * 3600)- remainingSeconds);
    const lastRemainingSec = totalSec - (hoursSec+ remainingSeconds)
    
    return {hour : hours, minute: minute, second :lastRemainingSec}
}

const seconds = [3100, 3200, 5399, 390,440]
// const seconds = [100, "200", 99, 90,40]
const result = calculateWatchTime(seconds)
console.log(result);
