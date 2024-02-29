// 첫 번째 기본적인 방법
// 반복문을 돌려서 str_list 에 있는 문자열들을 빈 문자열에 추가한다.
// 문자열들이 ex 를 포함하고 있으면 제외시킨다.
// 문자열을 출력한다.

// function solution(str_list, ex) {
//     let answer = "";
//     str_list.forEach((item) => {
//         if( !item.includes(ex) ){
//             answer+=item
//         }
//     })
//     return answer;
// }

// 참 값을 반환하는 값으로 새 배열을 구성하는 filter 를 사용하여 코드 길이를 줄여보자!
// filter 를 이용해 ex 를 포함하지 않는 문자열들만 출력하는 배열을 만든 뒤, join 메서드로 문자열로 만들어서 출력해주었다.

function solution(str_list, ex) {
    return (str_list.filter((item) => !(item.includes(ex)))).join('');
}