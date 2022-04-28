// 웹에 명령어를 입력해서 내 노드를 제어하는 서버
import express from 'express';
import bodyParser from 'body-parser';


// 초기화 함수
const initHttpServer = (myHttpPort) => {
    const app = express();
    app.use(bodyParser.json());

    app.get('/', (req, res) => {
        res.send("Hello, World")
    })


    //block.js의 블록 데이터를 조회
    app.get('/blocks', (req, res) => {
        res.send(getBlocks());
    })









    app.listen(myHttpPort, () => {// listen은 매개변수가 2개.
        console.log('listening httpServer Port : ', myHttpPort);
    })

}

export {initHttpServer}





