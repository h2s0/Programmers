function solution(numbers, direction) {
    if (direction === 'right') {
        numbers.unshift(numbers.pop());
    } else if (direction === 'left') {
        numbers.push(numbers.shift());
    }
    return numbers;
}

// right
// 인덱스 기준 : [0,1,2] => [2,0,1] / [0,1,2,3,4,5] => [5,0,1,2,3,4]
// 마지막꺼가 맨 처음으로 이동 pop unshift

// left
// 인덱스 기준 : [0,1,2,3,4,5] => [1,2,3,4,5,0]
// 맨 처음께 맨 뒤로 이동 shift push
