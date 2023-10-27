function solution(my_string) {
    let answer = my_string.replaceAll('a','')
    let answer1 = answer.replaceAll('e','')
    let answer2 = answer1.replaceAll('o','')
    let answer3 = answer2.replaceAll('u','')
    let answer4 = answer3.replaceAll('i','')
    return answer4
}