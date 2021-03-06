# KGA_daily  

css - position  
https://ofcourse.kr/css-course/position-%EC%86%8D%EC%84%B1  

vscode 단축키  
https://blog.naver.com/jiwon3194/222512040766  

반복문 사용 시, 무한 루프가 돌때는 연산자가 제한범위안에 제대로 있는 지 확인할 것.  
```javascript
while( i < 10 ) {  
  if((i % 2) == 0){  
    text += "<br>
    The number is " + i;  
  }  
  i++;  
}  
```

Math.abs()  
Math.abs() 함수는 주어진 숫자의 절대값을 반환합니다. x가 양수이거나 0이라면 x를 리턴하고, x가 음수라면 x의 반대값, 즉 양수를 반환합니다.  
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/abs  


form태그의 action = # 의 의미  
https://stackoverflow.com/questions/8862035/what-does-it-mean-when-the-form-action-attribute-is-number-pound-symbol-sig/8862207#8862207  



자바스크립트 label  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label  



NodeJS  
nvm 설치 및 버전확인 및 변경  
https://gist.github.com/falsy/8aa42ae311a9adb50e2ca7d8702c9af1  


nvm ls  
nvm 버전 확인  

nvm 버전사용  
nvm nvm use 버전(ex nvm use 16.13.0)

빌트인 모듈은 따로 설치를 안해줘도 사용가능하다 (ex http)



REPL 터미널  
read eval print loop  

var를 선언하고 값을 할당하면 값이 저장되지만,  
출력이 되지는 않는다. 그래서 undefined가 뜸.  
> var y = 10  
undefined  

밑줄을 사용하여 마지막 결과를 얻을 수 있다.
var sum = _ 는 위에서 더한 결과를 담는다.


npm install할때는 -save 옵션을 붙일 것.  
npm install -s 모듈. npm install 모듈 -save  
그래야 package.json의 dependencies에서 관리가 됨.  

npm uninstall 모듈명  
npm search 모듈명  

npm init - package.json을 생성함.  

Buffer의 개념.  
https://tk-one.github.io/2018/08/28/nodejs-buffer/  
https://www.youtube.com/watch?v=BsWWPhM8Lvk  

readFilfe, readFileSync  
https://balmostory.tistory.com/33  


파일시스템(fs.open)  
https://psyhm.tistory.com/15  


tcp ip  
https://aws-hyoh.tistory.com/entry/TCPIP-%EC%89%BD%EA%B2%8C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0


url.parse()  
URL 문자열을 입력하면 URL 객체를 만든다. 만든 url 객체에서 pathname 키의 밸류를 가져옴. https://gongbu-ing.tistory.com/9  


url.parse에 줄이 생기는 이유는 더이상 사용하지 않으니 추천하지 않는다  
https://velog.io/@satoshi25/url.parse-deprecated  

nodejs .on 메소드
https://stickie.tistory.com/66

https://www.wenyanet.com/opensource/ko/604a5b03e303543c092ca57f.html#zip-single-folder  
zip-lib - 노드에 대한 zip 및 unzip 라이브러리  


Promise  
```javascript

// resolve 반환
const promise1 = new Promise((resolve, reject) => {
  resolve();
});

promise1.then(() => {
  console.log("then!");
}).catch(() => {
  console.log("catch!");
});

// reject 반환
const promise1 = new Promise((resolve, reject) => {
  reject();
});

```

https://elvanov.com/2597  
https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Using_promises  

콜백 함수를 전달해주는 고전적인 방식과는 달리, Promise는 아래와 같은 특징을 보장합니다.  
callback 방식보다 Promise 방식이 비동기 작업에 대해 훨씬 쉽고 직관적으로 코딩할 수 있다고 생각합니다.  
  콜백의 장단점  
1. 콜백은 자바스크립트 Event Loop이 현재 실행중인 콜 스택을 완료하기 이전에는 절대 호출되지 않습니다.  
2. 비동기 작업이 성공하거나 실패한 뒤에 then() 을 이용하여 추가한 콜백의 경우에도 위와 같습니다.  
3. then()을 여러번 사용하여 여러개의 콜백을 추가 할 수 있습니다. 그리고 각각의 콜백은 주어진 순서대로 하나 하나 실행되게 됩니다.  
  .then() / .catch  
Promise 의 특징은 new Promise(...) 하는 순간 여기에 할당된 비동기 작업은 바로 시작됩니다.  
비동기 작업의 특징은 작업이 언제 끝날지 모르기 때문에 일단 배를 떠나보낸다고 이야기했습니다.  
그럼 그 이후에 이 작업이 성공하거나 실패하는 순간에 우리가 또 뒷처리를 해줘야겠죠?  
Promise 가 끝나고 난 다음의 동작을 우리가 설정해줄 수 있는데, 그것이 바로 then 메소드와 catch 메소드입니다.  

```javascript
function startAsync(age) {
  return new Promise((resolve, reject) => {
    if (age > 20) resolve();
    else reject();
  });
}

setTimeout(() => {
  const promise1 = startAsync(25);
  promise1
    .then(() => {
      console.log("1 then!");
    })
    .catch(() => {
      console.log("1 catch!");
    });
  const promise2 = startAsync(15);
  promise2
    .then(() => {
      console.log("2 then!");
    })
    .catch(() => {
      console.log("2 catch!");
    });
}, 1000);

// 결과  
1 then!  
2 catch!  
```
```javascript
function startAsync(age) {
  return new Promise((resolve, reject) => {
    if (age > 20) resolve(`${age} success`);            // 위의 예시와 다르게 resolve와 reject에 인자가 들어가있다
    else reject(new Error(`${age} is not over 20`));
  });
}

setTimeout(() => {
  const promise1 = startAsync(25);
  promise1
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.error(error);
    });
  const promise2 = startAsync(15);
  promise2
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.error(error);
    });
}, 1000);

//결과

25 success
Error: 15 is not over 20
    at /home/taehoon/Desktop/playground-nodejs/index.js:4:17
    at new Promise (<anonymous>)
    at startAsync (/home/taehoon/Desktop/playground-nodejs/index.js:2:10)
    at Timeout._onTimeout (/home/taehoon/Desktop/playground-nodejs/index.js:17:20)
    at listOnTimeout (internal/timers.js:554:17)
    at processTimers (internal/timers.js:497:7)
```

async 함수  
async 함수는 Promise 와 굉장히 밀접한 연관을 가지고 있는데, 기존에 작성하던 executor 로부터 몇 가지 규칙만 적용한다면  
new Promise(…) 를 리턴하는 함수를 async 함수로 손쉽게 변환할 수 있습니다.  

1. 함수에 async 키위드를 붙입니다.  
2. new Promise... 부분을 없애고 executor 본문 내용만 남깁니다.  
3. resolve(value); 부분을 return value; 로 변경합니다.  
4. reject(new Error(…)); 부분을 throw new Error(…); 로 수정합니다.  

```javascript
// 바로 위 예시를 async 함수로 표현하면 다음과 같다.
async function startAsync(age) {
  if (age > 20) return `${age} success`;
  else throw new Error(`${age} is not over 20`);
}
```

await 함수  

await 키워드는 async 함수 안에서만 작동한다. await가 붙은 로직은 끝날때까지 종료되지 않는다. 비동기인 async 안에서 동기적으로 작동한다.

await: Promise 가 끝날 때까지 기다린다.  
await 는 Promise 가 fulfilled 가 되든지 rejected 가 되든지 아무튼 간에 끝날 때까지 기다리는 함수입니다.  
async 함수에서만 사용할 수 있습니다.  

특성  
1. 문법적으로 await [[Promise 객체]] 이렇게 사용합니다.
2. await 은 Promise 가 완료될 때까지 기다립니다. 
3. await 은 Promise 가 resolve 한 값을 내놓습니다.
4. 해당 Promise 에서 reject 가 발생한다면 예외가 발생합니다.

```javascript
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!"), 1000)
  });

  let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)

  alert(result); // "완료!"
}

f();

/*
함수를 호출하고, 함수 본문이 실행되는 도중에 (*)로 표시한 줄에서 실행이 잠시 '중단’되었다가 프라미스가 처리되면 실행이 재개됩니다. 
이때 프라미스 객체의 result 값이 변수 result에 할당됩니다. 따라서 위 예시를 실행하면 1초 뒤에 '완료!'가 출력됩니다.
*/
```

```javascript
function setTimeoutPromise(timeout) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
           resolve(); 
        }, timeout);
    })
}


function testAsyncAwaitFunc()
{
    // await setTimeoutPromise(1000)
    console.log("async")
}


function testFunc1() {
    console.log('testFunc1');
}

async function compare() {
    // await testAsyncAwaitFunc(); //
    testAsyncAwaitFunc(); // 
    testFunc1(); 
}

// 함수 실행
compare();


// 결과
// compare 함수의 상태에 따라 결과가 나눠진다.

// compare 함수가 일반함수라면, 그냥 함수들이 차례대로 실행된다. 만약 함수들 중 settimeout이 걸려있다면 그게 우선적으로 적용된다.

// compare 함수가 비동기함수라면(앞에 async가 붙었다면), await 유무에 따라 다르다.
    // await가 붙은 곳은 무조건 실행하고 넘어간다. 내부에 settimeout이 몇초던 간에.
    // await가 내부에 아무데도 없고, 먼저 실행된 함수가 비동기함수라면(async가 붙은) 일반 함수가 먼저 결과를 도출한다. 그리고 비동기 함수(async가 붙은)가 결과를 도출한다.



```

axios 사용법  
https://velog.io/@april_5/TIL43-Axios-%EC%82%AC%EC%9A%A9%EB%B2%95#axiosput
https://joshua1988.github.io/web-development/javascript/js-async-await/#async--await-%EA%B0%84%EB%8B%A8%ED%95%9C-%EC%98%88%EC%A0%9C
Axios vs fetch  
https://velog.io/@kysung95/%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D-Ajax%EC%99%80-Axios-%EA%B7%B8%EB%A6%AC%EA%B3%A0-fetch#fetch-1  




전역변수  
var, let, const 등을 쓰지 않고 선언한 변수는 '전역변수'이다.  
즉 어디서나 불러서 사용할 수 있음.  
```javascript
function calc (a, b) {
  let sum1 = a + b;
  sum2 = a + b;
  return sum1;
}

console.log(calc(20,30)) // 50  
console.log(sum2) // 50  
sum1 // Uncaught ReferenceError: sum1 is not defined  
```

인스턴스  
```javascript
let student = {
  'id' : 123,
  'class' : Higher
  .
  .
  .
}
// 인스턴스는 student.
```

try catch문  
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/try...catch  
 
try_statements : 실행될 선언들  
catch_statements : try 블록에서 예외가 발생했을 때 실행될 선언들  
exception_var : catch 블록과 관련된 예외 객체를 담기 위한 식별자  
finally_statements : try 선언이 완료된 이후에 실행된 선언들. 이 선언들은 예외 발생 여부와 상관없이 실행된다.  

npm multer 모듈
https://jamong-icetea.tistory.com/133


connection Pool 개념  

- 데이터베이스에 연결된 Connection을 미리 만들어 둔후 Pool에 보관하였다가 필요할 때 Pool에서 Connection을 가져다 사용한 후, 다시 Pool에 반환하는 기법입니다. Connection Pool을 이용하면 여러 Connection을 이용할 수 있기 때문에 더 큰 부하를 견딜 수 있습니다.  
- 또한 기존처럼 필요할때 마다 Connection을 생성하고 닫지 않아도 되기 때문에 어플리케이션의 성능향상 또한 기대할 수 있습니다.  

https://techbless.github.io/2020/01/17/Node-js%EC%97%90%EC%84%9C-Mysql-Connection-Pool-%EC%9D%B4%EC%9A%A9%ED%95%98%EA%B8%B0/  
https://velog.io/@gwon713/Nodejs-MySQL-DB-connection-pool  
https://darrengwon.tistory.com/688  

sort 메소드  
sort메소드는 return 값이 음수,양수,0인지에 따라서 순서를 정한다.  
https://webclub.tistory.com/110  
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sortㅇ
오름차순 정렬  
배열.sort((a, b) => a - b);  

dotenv 모듈. 
https://www.daleseo.com/js-dotenv/  

```javascript
// 1. env파일 생성하여 환경변수 설정
DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3

// 2. .config() 함수를 호출
require("dotenv").config();

// 3. process.env로 변수 사용 가능.
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASS:", process.env.DB_PASS);
```

.urlencoded({ extended : false })  
https://velog.io/@hyunju-song/body-parser%EC%9D%98-urlencoded%EB%8A%94-%EB%8F%84%EB%8C%80%EC%B2%B4-%EC%96%B4%EB%96%A4-%EC%97%AD%ED%95%A0%EC%9D%84-%ED%95%98%EB%8A%94-%EA%B1%B8%EA%B9%8C  


fetch() 함수 사용법  
https://yeri-kim.github.io/posts/fetch/  

```javascript
fetch('https://api.google.com/user/3')
  .then(res => res.json())
  .then(res => {
    if (res.success) {
        console.log(`${res.user.name}` 님 환영합니다);
    }
  });
```

미들웨어  
https://psyhm.tistory.com/8  


.env과 dbconfig.json 차이
.json은 객체 한 덩어리로 전달되지만, .env는 설정한 변수가 한 줄 단위로 사용된다.

addEventListner  
https://opentutorials.org/course/1375/6761  



  리액트(12/13 ~ )

함수형 컴포넌트 vs 클래스형 컴포넌트
https://devowen.com


브랜치 strategy  
https://hyeon9mak.github.io/git-branch-strategy/  
https://techblog.woowahan.com/2553/  

원격 브랜치(깃헙 사이트)를 삭제하는 법  
git push origin --delete 브랜치명  
https://www.lesstif.com/gitbook/git-delete-remote-branch-20776547.html  

한 브랜치에서 새로 브랜치 분기해서 나오기  
git branch 생성할 브랜치명 분기해나올 브랜치명  
https://mylko72.gitbooks.io/git/content/branch/checkout.html  

파비콘 제작 사이트  
https://www.favicon-generator.org/  


로고 제작 사이트  
https://www.logaster.com/logo/?t=BuildingBOY  
https://www.logaster.com/v3/signin/?next=%2Fa%2Faccount%2F795026522%2Flogo%2Fdetail%3Bp%3D0%3Bl%3D0  

npm install 안될때(command not found)  
https://www.inflearn.com/questions/156199  

배열 안에 선언된 변수(ex. [row])에는 iterable(반복가능한 ex 배열)한 무언가가 대입되어야 한다.  
https://helloworldjavascript.net/pages/260-iteration.html  

.execute()  
http://pythonstudy.xyz/python/article/202-MySQL-%EC%BF%BC%EB%A6%AC  
변수를 []로 감싼 비슷한 사례 https://stackoverflow.com/questions/44004418/node-js-async-await-using-with-mysql/51690276  

    /* 브라우저 콘솔창에서 실험
        let [test] = [[1,2,3], [4,5,6]] // [test] 내부에 이중배열 할당

        test// 결과 : [1,2,3]. 이름을 입력하면 배열의 첫번째 요소를 도출한다.
        test.length // 결과 : 3
        [test] // 결과 [Array(3)]. 열면 [1, 2, 3] 도출되는 것을 확인
        [test].length // 결과 : 1
        [test][0] // 결과 [1, 2, 3]
        [test][1] // 결과 undefined
    */
    // 실험 결과 : 배열의 첫번째 요소만 다루는 방법인 듯 하다. 

리액트 로그인  
https://ddeck.tistory.com/33?category=866566  
리액트 회원가입  
https://wonyoung2257.tistory.com/7  


세션과 쿠키  
세션은 [서버] 쪽에 정보를 저장하고 쿠키는 [클라이언트] 쪽에 정보를 저장한다는 것이 세션과 쿠키의 가장 큰 차이점 입니다.  
라이프 사이클에서의 차이가 중요.  
https://interconnection.tistory.com/74  
https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=weekamp&logNo=220931266233  
https://interconnection.tistory.com/74  

chmod 기능  
https://zamezzz.tistory.com/28  

// C++

namespace  
https://thinkpro.tistory.com/22  

서식문자 
https://iflife1124.tistory.com/15  

포인터  
포인터란, 메모리의 주소 값을 저장하는 변수이며, 포인터 변수라고도 부른다. 
포인터 변수는 자기 자신의 메모리 주소도 갖고 있고, 데이터로써 메모리 주소를 가질 수 있다.  
포인터 변수의 일반적인 형식. 
: type * name ex) int * number;  
ex)
```c
string food = "Pizza";
string *ptr = &food; // * 앞에 있는 string은 food가 "Pizza"라는 string 이기에 작성한 것.

예제1)
    string food = "Hamburger";
    string *ptrFood = &food;

    cout << "food : " << food << ", Address of food : " << &food << endl;
    cout << "ptrFood : " << *ptrFood << ", Address of ptrFood : " << ptrFood << endl;

    int nNumber = 1234;
    int *ptrNumber = &nNumber;

    cout << "nNumber : " << nNumber << ", Address of food : " << &nNumber << endl;
    cout << "ptrNumber : " << *ptrNumber << ", Address of ptrNumber : " << ptrNumber << endl;

    //결과
    /*
        food : Hamburger, Address of food : 0x7ffee1777658
        ptrFood : Hamburger, Address of ptrFood : 0x7ffee1777658
        
        nNumber : 1234, Address of food : 0x7ffee1777640
        ptrNumber : 1234, Address of ptrNumber : 0x7ffee1777640
    */
```

이중포인터  
포인터를 가리키는 포인터.  

```c
int main()
{
    char a;
    char* b;
    char** c;

    a = 'z';
    b = &a;
    c = &b;

    cout << "**c : " << **c << endl;

    return 0;

    // 결과
    // **c : z
}
```

strcpy  
C 스타일의 문자열인 char*, char[] 타입의 문자열을 복사하는 함수.  
https://blockdmask.tistory.com/348  
```c
> 간단한 사용법.

char origin[] = "BlockDMask";
char dest[100];
strncpy(dest, origin, sizeof(origin));
```


C언어 동적메모리할당(malloc, calloc)  
https://blog.naver.com/sharonichoya/220501158281  
```c
// 예제

    int* pi = (int* p) malloc(sizeof(int) * 10);
    // 정수 10개를 저장할 수 있는 메모리공간(즉 40바이트)를 할당하고 그 첫번째 주소를 int*로 형변환하여 pi에 저장
    
    char* pc = (char*)malloc(sizeof(char) * 1);
    // char 1개 만큼의 사이즈를 동적할당한 후 첫번째 주소를 char*로 형변환하여 pc에 저장
    
    typedef struct book
    {
      char name[10]; 
      int isbn;
      int price;
      int yeawr;
      struct book* pb;
    }BOOK;
    BOOK* p = (BOOK*)malloc (sizeof(BOOK) * 30)
    // BOOK 구조체 30개를 저장할 수 있는 메모리공간을 할당한 후 BOOK 구조체 포인터로 변환하여 p에 저장
    
    
// calloc(DynamicMemExam) 사용예제
    char cAlphabet, *pAlphabet, *ptr;
    pAlphabet = (char*)calloc(35, sizeof(char));

    if(pAlphabet == NULL) // 실수를 방지하기 위한 로직
    {
        cout << "Dynamic memory allocation fail..." << endl;   
        exit(1);
    }

    ptr = pAlphabet; // 주소를 그대로 준 것

    for(cAlphabet = 0x41; cAlphabet < 0x5B; cAlphabet++)
    {
        *ptr++ = cAlphabet;
    }
    *ptr = '\0'; // 문자열의 마지막은 null이어야해서 \0을 넣음

    cout << "Alphabet String : " << pAlphabet << endl; // *ptr은 null이 들어가서 찍어도 아무것도 안나옴. 그래서 연산에만 사용하고 pAlphabet을 찍음
    // Alphabet String : ABCDEFGHIJKLMNOPQRSTUVWXYZ
    
    free(pAlphabet);
    return 0;
```

new와 delete 연산자  
https://jhnyang.tistory.com/334  



쉬운 포인터사용법
```c
    int testNum = 100;
    int* ptrNum = &testNum;

    cout << "testNum : " << testNum << endl;
    cout << "&testNum : " << &testNum << endl;
    cout << "ptrNum : " << ptrNum << endl;
    cout << "*ptrNum : " << *ptrNum << endl;
    
    //결과
    /*
        testNum : 100
        &testNum : 0x7ffee2c22668
        ptrNum : 0x7ffee2c22668
        *ptrNum : 100
    */
```

C++ 에서의 public, private, protected.  
https://hwan-shell.tistory.com/25  


주소를 쓰는 이유. 어떤 값을 바꿀 때, 그 값의 '주소'에 새로운 값을 대입하기 위해. 만약 '주소'에 새로운 데이터를 넣지 않으면, 새로운 주소에 데이터가 할당된다.  
그럴 경우 1. 실제로 인자로 받은 그 변수를 정확하게 바꾸기 위해.  2. 메모리 낭비도 일어나고, 연산도 느려질 것.
```c
#include <iostream>
#include <string>

using namespace std;
void abc(int &x) // 여기서 &x를 x로 변경한다면, cout의 결과는 200이 나온다. 인자의 기존 주소(&x)가 아닌새로운 주소(메모리)에 값을 할당해버리기 때문
{
    x = 100;
}

int main()
{
    string food = "Pizza";
    string &meal = food; // 주소값을 준 것. meal은 food를 바라보는 새로운 방식(같은 주소)
    meal = "Hamburger"; // 같은 주소(meal과 food의 주소)에 같은 데이터를 넣었기에 food 값도 변경.
    // meal = "Hamburger"; // 같은 주소(meal과 food의 주소)에 같은 데이터를 넣었기에 food 값도 변경.

    cout << food << ", Address of food : " << &food << endl;
    cout << meal << ", Address of meal : " << &meal << endl; // 같은 주소가 나옴

    int xx = 200;
    abc(xx);
    cout << "xx : " << xx << endl; // &x -> 100, x -> 200

    // 결과 : void abc(int &x) - 인자를 주소로 받을 경우
    /* 
        Hamburger, Address of food : 0x7ffee2457648
        Hamburger, Address of meal : 0x7ffee2457648
        xx : 100 - abc함수의 인자의 주소에 100을 넣기 때문.
    */

       // 결과 : void abc(int x) - 인자를 그냥 받을 경우
    /* 
        Hamburger, Address of food : 0x7ffee2457648
        Hamburger, Address of meal : 0x7ffee2457648
        xx : 200 - 인자의 기존 주소(&x)가 아닌새로운 주소(메모리)에 값을 할당해버리기 때문. 새로운 주소에 200을 넣는 것이다. 
        인자에 &를 붙인다면(== 인자로 주소를 받는다면) 기존 주소의 데이터가 200에서 100으로 바뀌는 것
    */
}
```

public, private  

class : 클래스 내에 선언되는 것들은 기본적으로 다 private이고, public 내부에 선언된 것들이 public이다.  
구조체, 함수 : 기본적으로 public이다.  
```c
    private: - 이 지시자 없이 그냥 선언해도 private로 선언된다.
        int m_nCurrentPage;
        void SetPercent();

    public:
        CBook(); 
        CBook(const CBook&); 
        CBook(const string& title, int nTotalPage);
        string m_strTitle;
        int m_nTotalPage;
        double m_fPercent;
        void Move(int nPage);
        void Open();
        void Read();

        const CBook& ThickerBook(const CBook&);
```

react-slick(캐러셀)  
https://react-slick.neostack.com/  




리눅스 강의(2/8 ~)  

whoami : 현재 계정 확인    
~ : 루트로 이동  

cat :  하나 혹은 여러개의 파일을 연결해서 전체를 보여주는 일종의 전체 훑어보기 기능입니다.  
https://macinjune.com/all-posts/mac/terminal/%EB%A7%A5-%ED%84%B0%EB%AF%B8%EB%84%90-%EC%A7%A7%EC%9D%80-%ED%8C%8C%EC%9D%BC%EC%9D%84-%EA%B0%84%EB%8B%A8%ED%95%98%EA%B2%8C-%ED%9B%91%EC%96%B4%EB%B3%B4%EA%B8%B0-cat-command/  

https://macinjune.com/all-posts/mac/terminal/%EB%A7%A5-%ED%84%B0%EB%AF%B8%EB%84%90-%EC%A7%A7%EC%9D%80-%ED%8C%8C%EC%9D%BC%EC%9D%84-%EA%B0%84%EB%8B%A8%ED%95%98%EA%B2%8C-%ED%9B%91%EC%96%B4%EB%B3%B4%EA%B8%B0-cat-command/  

for문 활용  

<img width="184" alt="스크린샷 2022-02-10 오전 9 33 54" src="https://user-images.githubusercontent.com/55314087/153314159-07491507-03f2-4fc2-88bf-0a008c31bb35.png">

<img width="391" alt="스크린샷 2022-02-10 오전 9 34 40" src="https://user-images.githubusercontent.com/55314087/153314244-5f24a84e-b7b6-4c98-9462-bb2bd4ad935a.png">



명령어치환(``사용)
<img width="308" alt="스크린샷 2022-02-10 오전 9 49 47" src="https://user-images.githubusercontent.com/55314087/153315639-6a72af19-2c35-4c68-8a6f-d0374cd0a31a.png">
<img width="224" alt="스크린샷 2022-02-10 오전 9 49 58" src="https://user-images.githubusercontent.com/55314087/153315658-2107ccf2-86ec-4ddf-9273-bff277c41dea.png">


암호화(bcrypt)  
https://velog.io/@iamhayoung/Bcrypt%EB%A1%9C-%EB%B9%84%EB%B0%80%EB%B2%88%ED%98%B8-%EC%95%94%ED%98%B8%ED%99%94%ED%95%98%EA%B8%B0  


litecoin 설치  
https://difficult-fernleaf-720.notion.site/litecoin-70cbc9decc2741eca683bac601eedcbb  


리눅스 configure, make, make install  
https://itdexter.tistory.com/325  


./litecoin-qt -datadir=/Users/kimjinkyung/litecoin021_bin/data  
gui 띄우기  


./litecoin-cli -datadir=/Users/kimjinkyung/litecoin021_bin/data getnetworkinfo  
네트워크 정보 띄우기  
끄는 법 : data 뒤에 stop 입력  


반감기 계산 및 채굴 손익계산  
https://sheepone.tistory.com/42  

리액트 2번 렌더링되는 이유  
https://okky.kr/article/705179  


  // 월렛 로그인(wallet)
  window.klaytn.enable();

bash 쉘이란?  
https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=writer0713&logNo=220702559704  

~/.bash_profile  permission 에러  
zsh: permission denied: /Users/kimjinkyung/.bash_profile  
해결법  : 
https://superuser.com/questions/369406/mac-osx-lion-terminal-bash-profile-permission-denied  


react  
spread(...)연산자  
https://learnjs.vlpt.us/useful/07-spread-and-rest.html#spread  

useState 사용해서 배열에 원소 추가하기  
https://velog.io/@jengyoung/%EC%97%AC%EB%9F%AC-%EA%B0%9C%EC%9D%98-input%EC%9D%B4-%EC%9E%88%EC%9D%84-%EB%95%8C-useState%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%9C%EB%8B%A4%EB%A9%B4  
https://velog.io/@summer_luna_0/reactuseState%EC%82%AC%EC%9A%A9%ED%95%B4%EC%84%9C-%EB%B0%B0%EC%97%B4%EC%97%90-%EA%B0%92-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0.-a.k.a-TODOLIST  
https://react.vlpt.us/basic/13-array-insert.html  


useState로 객체에 데이터 갱신  
https://gogoonbuntu.tistory.com/75  
```javascript
      // time & txnum object
      const [blockObj, setblockObj] = useState({

          time : "",
          txnum : ""

      });

      setblockObj((blockObj) => ({
        ...blockObj,
        time : response.data.result.time,
        txnum : response.data.result.tx.length        
      }))
```

aws에서 코인빌드하기  
https://blog.naver.com/redqoralsrl/222395294692  
https://velog.io/@nara7875/BlockChainAWS%EC%97%90-%EC%BD%94%EC%9D%B8-%EB%B9%8C%EB%93%9C%ED%95%98%EA%B8%B0#1-aws-%EC%84%9C%EB%B2%84-%EB%A7%8C%EB%93%A4%EA%B8%B0  
https://velog.io/@nara7875/BlockChain%EA%B1%B0%EB%9E%98%EC%86%8C-%EB%A7%8C%EB%93%A4%EA%B8%B0-2#3-rdbs  


permision denied 에러 해결  
chmod -R 777 디렉토리이름  

configure에서 --host와 --build의 차이  
http://lvzuufx.blogspot.com/2015/06/configure-build-host-target.html  


[리눅스] uname 명령어: 시스템 및 커널 정보 출력  
uname 명령어는 시스템 정보를 출력해줍니다. 주로 시스템과 리눅스 커널에 관련된 정보를 확인할 수 있습니다.  
uname은 리눅스뿐만 아니라 맥OS 등에서도 사용할 수 있습니다. 현재 시스템의 시스템 아키텍처나 커널 버전을 확인할 때 특히 유용합니다.  
https://www.lainyzine.com/ko/article/linux-uname-command-how-to-check-the-kernel-information-of-the-current-system/  



자바스크립트 라이브러리 비교(Node, Axios, Fetch ...)  
아래 링크의 우측 코드 확인  
https://docs.upbit.com/reference/%EC%A0%84%EC%B2%B4-%EA%B3%84%EC%A2%8C-%EC%A1%B0%ED%9A%8C  


몽고db 설치  
https://meanbymin.tistory.com/77  
https://velopert.com/457  

거래소 제작 관련 블로그글  
https://m.blog.naver.com/PostView.naver?blogId=pjt3591oo&logNo=222103669253&proxyReferer=https:%2F%2Fvelog.io%2F  


원격 브랜치 가져오기  
git checkout -b 만들 브랜치이름 origin/가져올브랜치이름  
Ex) git checkout -b master origin/master  



몽고디비 접속에러  
https://www.inflearn.com/questions/29959  
 1. 몽고디비 사이트 로그인 -> Product 탭 -> Atlas -> Database  
 2. Connect 옵션 -> Connect your Application  
 3. Version 2.2.12 or later 선택 후 String으로 접속 시도  
 
 Singleton 패턴  
 https://devmoony.tistory.com/43 
 
 DID 탈중앙화 신원증명  
 https://comart.io/blog/%ED%83%88%EC%A4%91%EC%95%99%ED%99%94-%EC%8B%A0%EC%9B%90%EC%A6%9D%EB%AA%85-did-%EA%B8%B0%EB%B3%B8-%EA%B0%9C%EB%85%90  
 
 EVM(이더리움 가상머신)개념  
 https://opentutorials.org/course/2869/18360  

web3.js 스마트컨트랙트 접근  
https://velog.io/@moonshot/web3.js-%EC%8A%A4%EB%A7%88%ED%8A%B8-%EC%BB%A8%ED%8A%B8%EB%9E%99%ED%8A%B8%EC%97%90-%EC%A0%91%EA%B7%BC%ED%95%98%EA%B8%B0   

jwt 인증  
https://velog.io/@_woogie/JWT-%EB%A1%9C%EA%B7%B8%EC%9D%B8%EB%B0%A9%EC%8B%9D-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-feat.-session%EC%97%90%EC%84%9C-jwt%EB%A1%9C  

쿠키 
브라우저 1개, 서버가 2개. 프론트 서버 , 백엔드 서버  
브라우저 <-> 프론트 A(4000)  
브라우저 <-> 백 B(3000)  

브라우저는 기본적으로 보안이라는 개념이 있고, 허락을 따로 해줘야 한다.  
헤더부분을 따로 조작하면 cors 따로 해결 가능  

쿠키로 로그인해야 하는 이유.  
세션으로 로그인 하면 그에 해당하는 서버만 로그인이 가능하다.  
하지만 쿠키로 로그인을 하게 되면 서버가 증설(ex 사용자 증가 등의 이유로)이 되어도 브라우저에서 가지고 있는 쿠키로 어느 서버건 로그인이 가능하다.  
이 쿠키를 잘 쓰기 위해 등장한게 jwt.  

로그인 전문 서버가 OAuth.  


비동기함수 이동경로  
callback queue -> call stack(이동방식은 이벤트 루프이다)  
일반함수는 바로 콜스택으로 가는 반면, 비동기함수는 콜백 큐에 머무르다가 콜스택이 비워지면 그때서야 들어간다

비동기함수

```javascript
function setTimeoutPromise(timeout) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
           resolve(); 
        }, timeout);
    })
}


function testAsyncAwaitFunc()
{
    // await setTimeoutPromise(1000)
    console.log("async")
}


function testFunc1() {
    console.log('testFunc1');
}

async function compare() {
    // await testAsyncAwaitFunc(); //
    testAsyncAwaitFunc(); // 
    testFunc1(); 
}

// 함수 실행
compare();


// 결과
// compare 함수의 상태에 따라 결과가 나눠진다.

// compare 함수가 일반함수라면, 그냥 함수들이 차례대로 실행된다. 만약 함수들 중 settimeout이 걸려있다면 그게 우선적으로 적용된다.

// compare 함수가 비동기함수라면(앞에 async가 붙었다면), await 유무에 따라 다르다.
// await가 붙은 곳은 무조건 실행하고 넘어간다. 내부에 settimeout이 몇초던 간에.
// await가 내부에 아무데도 없고, 먼저 실행된 함수가 비동기함수라면(async가 붙은) 일반 함수가 먼저 결과를 도출한다. 그리고 비동기 함수(async가 붙은)가 결과를 도출한다.

```

쿠키로 로그인해야 하는 이유.  


<br>
<br>

geth 공식 홈페이지  
https://geth.ethereum.org/  

geth 명령어, 옵션  
https://geth.ethereum.org/docs/interface/command-line-options  


작동중인 geth 노드의 콘솔에 연결 후 사용하기. 
geth console -> endpoint 검색 -> geth attach  
https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=zag001&logNo=221657727971  
```
geth attach ipc:/Users/kimjinkyung/Library/Ethereum/geth.ipc
```

```
// 이더리움 데이터를 받아오는 데 연산력(.threads)을 늘이거나 줄일 수 있음
geth --mine --miner.threads=1
```

geth에서 rpcport를 쓰는 이유는 내가 만든 블록체인 네트워크에 다른 사람이 접근하려고 할때 그 방법을 알려주기 위함이다.  
@127.0.0.1:30301 --port 30303 --rpcport 8545  
@127.0.0.1:30301 - 내 기본 ip  
30303 - node1의 포트  
8545 - rpcport  

geth puppeth로 프라이빗 네트워크   
https://medium.com/onther-tech/geth%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-private-ethereum-chain-private-network-%EA%B5%AC%EC%B6%95-82feeb1d0bbc  
https://brunch.co.kr/@skkrypto/80  
https://velog.io/@hustle-dev/Geth-puppeth%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%B4-%ED%94%84%EB%9D%BC%EC%9D%B4%EB%B9%97-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0-2%ED%8E%B8-POA  

이더리움 클라이언트 종류  
https://ethdocs.org/en/latest/ethereum-clients/choosing-a-client.html  

puppeth  
https://blog.ethereum.org/2017/04/14/geth-1-6-puppeth-master/  

파우셋(faucet)  
https://smartmission.tistory.com/247  

POA(권위증명)  
http://wiki.hash.kr/index.php/%EA%B6%8C%EC%9C%84%EC%A6%9D%EB%AA%85#.EC.9E.A5.EC.A0.90  

POA(권위증명)이 프라이빗 네트워크와 어울리는 이유  
https://m.blog.naver.com/mage7th/221718001743  
https://yceffort.kr/2018/09/19/how-does-proof-of-authority-consensus-work  



ethers.js  
http://www.umlcert.com/ethereum-dapps-16/  

-- 먼저 그리디 문제를 풀어 사고력을 높이고 나머지를 수행.  
0. 탐욕법 https://programmers.co.kr/learn/courses/30/parts/12244  
1. DFS, BFS - https://programmers.co.kr/learn/courses/30/parts/12421  
2. 완전탐색 - https://programmers.co.kr/learn/courses/30/parts/12230  
3. 해시 - https://programmers.co.kr/learn/courses/30/parts/12077  
4. 스택/큐 https://programmers.co.kr/learn/courses/30/parts/12081  


<br>
<br>


스마트 컨트랙트 Event.  
이벤트(Event)는 컨트랙트 내부에서 일어난 일을 클라이언트 쪽에 전달하기 위해 사용한다.  
```        
// 이벤트 선언.
event IntegersAdded(uint x, uint y, uint result);

function add(uint _x, uint _y) public {
    uint result = _x + _y;
    // 이벤트를 실행하여 앱에게 add 함수가 실행되었음을 알린다:
    IntegersAdded(_x, _y, result);
    return result;
}

// 클라이언트
YourContract.IntegersAdded(function(error, result) {
    // 결과와 관련된 행동을 취한다
})

선언한 IntegersAdded는 자신을 사용하는 함수(add)의 실행 여부를 클라이언트에 전달한다.
컨트랙트 내부에서 함수 'add'가 실행되면 포함된 이벤트가 실행되고, 이를 클라이언트도 감지한다.
        
```

<br>

ethers.js vs web3.js  
https://ko.0xzx.com/20201208139978.html  

포트번호란?  
https://it-sungwoo.tistory.com/128?category=799152  

이더리움 KeyStore파일  
https://medium.com/hexlant/%EC%9D%B4%EB%8D%94%EB%A6%AC%EC%9B%80-keystore-%ED%8C%8C%EC%9D%BC-utc-%EC%83%9D%EC%84%B1-%EB%B0%8F-%EC%95%94%ED%98%B8%ED%99%94-%EB%B3%B5%ED%98%B8%ED%99%94-%EC%9B%90%EB%A6%AC-1-2-d417cb605bf  



