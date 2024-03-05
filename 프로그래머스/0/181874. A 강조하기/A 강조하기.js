// A 가 아니면 먼저 소문자로 바꿔준 뒤, a 를 A 로 바꾸어서 출력

function solution(myString) {
    return myString = myString.toLowerCase().replaceAll('a', 'A')
}