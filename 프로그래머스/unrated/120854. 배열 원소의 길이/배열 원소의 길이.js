function solution(strlist) {
    let answer = [];
    strlist.map((item) => {
        answer.push(item.length);
    });
    return answer;
}