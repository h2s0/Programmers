function solution(order) {
    var answer = 0;
    const arr = order.toString().split('')
    console.log(arr)
    arr.map((i) => {
        if ( i === '3' || i === '6' || i === '9' ) {
            answer = answer + 1;
        }
    })
    return answer;
}