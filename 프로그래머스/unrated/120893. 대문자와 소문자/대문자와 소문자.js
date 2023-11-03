function solution(my_string) {
    let array = [...my_string];
    let answer = [];
    for ( let i = 0; i < array.length; i++ ) {
        // 글자가 대문자일 때
        if ( array[i] === array[i].toUpperCase() ) {
            answer.push(array[i].toLowerCase())
        // 글자가 소문자일 때
        } else {
            answer.push(array[i].toUpperCase())
        }
    }
    return answer.join('');
}