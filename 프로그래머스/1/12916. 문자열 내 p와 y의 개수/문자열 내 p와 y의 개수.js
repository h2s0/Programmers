function solution(s){
    let arr = [...(s.toLowerCase())];
    return arr.filter(e => 'p' === e).length === arr.filter(e => 'y' === e).length ? true : false
}