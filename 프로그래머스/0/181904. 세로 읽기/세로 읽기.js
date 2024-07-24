function solution(my_string, m, c) {
    let arrays = [];
    let stringArr = [...my_string];
    for ( i = 0; i < stringArr.length; i += m ) {
        arrays.push(stringArr.slice(i, i + m));
    }
    let answer = [];
    arrays.map((array) => {
        answer.push(array[c-1]);
    })
    return answer.join('');
}