// 반복문을 돌려서 x 가 아니면 count 높히기, x 가 나오면 카운트를 배열로 넣기
// 마지막 문자가 x 가 아닐 경우 마지막 count 값을 빈 배열에 넣어주기

function solution(myString) {
    let count = 0;
    let answer = [];
    for ( let i = 0; i < myString.length; i++ ) {
        if ( myString[i] == 'x') {
            answer.push(count);
            count = 0;
        } else {
            count += 1;
        }
    }
    answer.push(count);
    return answer;
}