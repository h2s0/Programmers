function solution(my_string) {
    let array = [...my_string];
    let answer = 0;
    array.forEach((item) => {
        if(!isNaN(item)) {
            answer += Number(item);
        }
    })
    return answer;
}