function solution(arr, k) {
    let answer = [];
    if ( k % 2 == 1 ) {
        arr.forEach( (num) => answer.push(num*k) )
    } else if ( k % 2 == 0 ) {
        arr.forEach( (num) => answer.push(num+k) )
    }
    return answer
}