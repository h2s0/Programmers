function solution(numLog) {
    let change = [];
    numLog.map((item, i)=> {
        change.push(numLog[i+1] - numLog[i]);
    });
    change.pop();
    let answer = [];
    change.map((num) => {
        if(num === 1) {
            answer.push("w")
        } else if(num === -1) {
            answer.push("s")
        } else if(num === 10) {
            answer.push("d")
        } else {
            answer.push("a")
        }
    })
    console.log(change);
    return answer.join('');
}