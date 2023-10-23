function solution(s1, s2) {
    const same = s1.filter( (str) => s2.includes(str) )
    console.log(same)
    return same.length;
}