function solution(my_string) {
    let answer = my_string.trim().split(" ");
    let answer2 = [];
    answer.forEach((item) => {
        if( item !== '' ) {
            answer2.push(item)
        }
    })
    return answer2
}