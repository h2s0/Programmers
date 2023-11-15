function solution(arr) {
    arr.forEach((num, index) => {
        if(num < 50 && num % 2 === 1) {
            arr[index] = num * 2;
        } else if (num >= 50 && num % 2 === 0) {
            arr[index] = num / 2;
        }});
    return arr;
}