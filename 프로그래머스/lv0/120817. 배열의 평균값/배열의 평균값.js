function solution(numbers) {
    let total = 0;
    numbers.forEach(function(item){
        total += item;
    })
    let answer = total / numbers.length;
    return answer;
}