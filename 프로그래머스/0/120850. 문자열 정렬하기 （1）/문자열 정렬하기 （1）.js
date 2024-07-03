function solution(my_string) {
    const my_number = my_string.split('').filter((i) => !isNaN(i));
    my_number.map(Number);
    return my_number.map(Number).sort((a,b) => a-b);
}