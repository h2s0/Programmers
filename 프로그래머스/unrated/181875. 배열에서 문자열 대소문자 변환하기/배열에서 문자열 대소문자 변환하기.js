function solution(strArr) {
    var answer = [];
    strArr.forEach((item,index) => {
        index % 2 == 1
            ? answer.push(item.toUpperCase())
            : answer.push(item.toLowerCase())
    })
    return answer;
}