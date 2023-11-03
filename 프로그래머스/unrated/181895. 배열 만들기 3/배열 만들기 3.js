function solution(arr, intervals) {
    let answer = [];
    
    let a1 = intervals[0][0];
    let b1 = intervals[0][1];
    let a2 = intervals[1][0];
    let b2 = intervals[1][1];
    
    answer.push(...arr.slice(a1,b1+1))
    answer.push(...arr.slice(a2,b2+1))
    return answer;
}