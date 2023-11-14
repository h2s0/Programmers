function solution(names) {
    let answer = [];
    for ( let i = 0; i < names.length; i+=5 ) {
        answer.push(names[i]);
    }
    return answer;
}

// +5 한 인덱스 번호의 이름만 뽑아서 출력하기