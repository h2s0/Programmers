function solution(num_list) {
    if ( num_list.length >= 11 ) {
        let answer = 0;
        num_list.forEach((num) => answer += num)
        return answer;
    }
    if ( num_list.length <= 10 ) {
        let answer = 1;
        num_list.forEach((num) => answer *= num)
        return answer;
    }
}