function solution(my_string, num1, num2) {
    const arr = my_string.split('');
    const num2_replacement = my_string[num1];
    const num1_replacement = my_string[num2];
    arr[num1] = num1_replacement;
    arr[num2] = num2_replacement;
    return arr.join("");
}