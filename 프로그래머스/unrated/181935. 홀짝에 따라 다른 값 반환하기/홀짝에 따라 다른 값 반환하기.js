function solution(n) {
    let answer = 0;
    // n 이 홀수일 때
    if ( n % 2 == 1 ) {
        for ( let i = 1; i <= n; i+=2 ) {
            answer += i
        }
    // n 이 짝수일 때
    } else if ( n % 2 == 0 ) {
        for ( let i = 0; i <= n; i+=2 ) {
            answer += i**2
        }
    }
    return answer;
}