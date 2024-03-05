// function solution(strArr) {
//     let result = [];
//     strArr.forEach((item) => {
//         if(!item.includes('ad')) {
//            result.push(item);
//         }
//     })
//     return result;
// }

// filter 를 사용하여 코드를 짧게 수정

function solution(strArr) {
    return strArr.filter((item) => !item.includes('ad'));
}