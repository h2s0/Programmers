function solution(n, k) {
    let answer = [];
    for ( let i = 0; i <= n; i+=k ) {
        answer.push(i)
    }
    return answer.slice(1);
}