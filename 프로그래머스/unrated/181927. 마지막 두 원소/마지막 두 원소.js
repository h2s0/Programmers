function solution(num_list) {
    let last = num_list.length-1;
    let second = num_list.length-2;
    
    if (num_list[last] > num_list[second]) {
        num_list.push(num_list[last] - num_list[second])
    } else {
        num_list.push(num_list[last] * 2)
    }
    return num_list;
}