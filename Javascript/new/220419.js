/*
    캔버스 설정
    document
    context    
 */

const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
const arcRadius = 20; // 원 반지름

// 원 관련 변수
let arcPosX = canvas.width/2 + 120;
let arcPosY = canvas.height/2;
let arcMoveDirX = -1;
let arcMoveDirY = -1;
let arcMoveSpeed = 2;

// 사각형 바 관련 변수
const barWidth = 100;
const barHeight = 20;
let barPosX = canvas.width/2 - barWidth/2;
let barPosY =  canvas.height - barHeight;
let barMoveSpeed = 30;


// 실습. 동그라미가 오른쪽으로 움직이다가 캔버스 끝에 닿으면 왼쪽으로 이동.
// 왼쪽으로 이동하다가 오른쪽에 닿으면 다시 반대로 이동.

document.addEventListener('keydown', keyDownEventHandler); // keydown이라는 이벤트가 발생하면 함수를 호출한다
// document.addEventListener('keyup', keyUpEventHandler); // keydown이라는 이벤트가 발생하면 함수를 호출한다



// 키보드 조작

function keyDownEventHandler(e) { // 무슨키를 눌렀는지 알기 위해 매개변수 e 대입
    if (e.key == 'ArrowRight') {
        // 바를 오른쪽으로 이동
        // console.log("ArrowRight 는", e.key)
        if(barPosX + barWidth < canvas.width) {
            barPosX += barMoveSpeed
        }
    }
    else if (e.key == 'ArrowLeft') {
        // 바를 왼쪽으로 이동
        // console.log("ArrowLeft 는", e.key)
        if(barPosX > 0) {
            barPosX -= barMoveSpeed
        }
        
    }
}





// 도형 움직이기


function barUpdate() {
    
}


function update() {
    // 데이터 수정(도형의 위치 이동)
    if(arcPosX - arcRadius < 0) {
        arcMoveDirX = 1
    } else if (arcPosX + arcRadius > canvas.width) {
        arcMoveDirX = -1
    }

    if(arcPosY - arcRadius < 0){
       arcMoveDirY = 1; 
    } else if(arcPosY + arcRadius > canvas.height) {
        arcMoveDirY = -1;
    }

    arcPosX += arcMoveDirX * arcMoveSpeed; // 원 좌우로 움직이기. 
    arcPosY += arcMoveDirY * arcMoveSpeed; // 원 위아래로 움직이기
}




// 그리기


function draw() {
    // 화면 클리어
    context.clearRect(0, 0, canvas.width, canvas.height); // 움직이고 이전 상태는 지운다. 아니면 잔상이 남음
    // 다른 도형 그리기
    drawRect();
    drawArc();
}

// 사각형 그리는 함수
function drawRect() {
    context.beginPath(); // 그리기 시작


    context.rect(barPosX, barPosY, barWidth, barHeight); // rect는 좌상단 기준으로 그리기
    context.fillStyle = 'red';
    context.fill();

    context.closePath(); // 그리기 종료

}

// 원 그리는 함수
function drawArc(){
    context.beginPath(); // 그리기 시작

    context.arc(arcPosX, arcPosY, arcRadius, 0, 2 * Math.PI)
    context.fillStyle = 'blue';
    context.fill();
    
    context.closePath(); // 그리기 종료
}


// 지속적인 변화주기 setInterval. 함수이름, 시간, 
setInterval(update, 10);
setInterval(draw, 10);


