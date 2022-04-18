// 1. 피보나치 수열의 알고리즘을 구현하세요

// 1. 반복적으로 배열에 수를 더해나가는 것.
// 2. n-1번째 수(마지막에서 2번째 수) + n번째 수(마지막 수)를 배열에 추가
// 3. 2번을 n(입력된 인자)만큼 반복한다

// 배열
let arr = [0, 1];

function fibonacci(n){
    // 반복문
    for(let i = 0; i < n; i ++){
        arr.push(arr[arr.length-2] + arr[arr.length-1]) // 마지막에서 2번째 수 + 마지막 수를 더한 값을 배열에 추가
    };
    return arr[n] // 마지막 수를 반환
}


