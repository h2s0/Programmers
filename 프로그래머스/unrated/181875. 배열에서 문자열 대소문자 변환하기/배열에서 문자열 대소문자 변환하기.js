function solution(strArr) {
    return answer = strArr.map((item,index) => {
        return index % 2 == 1
            ? item.toUpperCase()
            : item.toLowerCase();
    });
}