function solution(cipher, code) {
    let arr = [...cipher];
    let answer = [];
    for ( let i = 0; i < cipher.length; i++ ) {
        if ( (i + 1) % code === 0 ) {
            answer.push(arr[i]);
        }
    }
    return answer.join('');
}