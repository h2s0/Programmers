// A를 B로 B를 A로 바꾼다.
// 바꾼 문자열에서 pat 의 존재를 검사하여 있으면 1, 없으면 0을 출력한다.

function solution(myString, pat) {
    myString = myString.replace(/A/g, "C").replace(/B/g, "A").replace(/C/g, "B")
    return myString.includes(pat) ? 1 : 0;
}

// replaceAll, replace 를 사용하여 A 를 B 로, B 를 A 로 바꾸면 항상 AAA.. 값을 가지는 이슈를 C 라는 대체 문자를 사용하여 해결하였다.