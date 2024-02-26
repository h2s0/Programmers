// for 문으로 풀기

function solution(todo_list, finished) {
    let answer = [];
    for( let i = 0; i < finished.length; i++ ) {
        if ( finished[i] === false ) {
            answer.push(todo_list[i])
        }
    }
    return answer;
}

// finished 배열에서 false인 요소의 인덱스에 해당하는 todo_list의 요소들만을 선택하여 출력해주기