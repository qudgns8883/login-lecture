//메인파일을 통해 node 서버의 기본 설정

//모듈
const express = require("express");
const bodyparser = require("body-parser");  //바디를 읽기 위한 모듈
const app = express();

//라우팅
const home = require("./src/routes/home");


//앱셋팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));    
//정적경로로 추가, login.ejs에서 login.js로 접근하기 위해서 ,dirname: 현재 파일위치반환
app.use(express.json());
//바디파서가 제이슨데이터를 파싱할 수 있도록 명시
app.use(express.urlencoded({ extended: true}));
//URL을 통해 전달되는 데이터에 한글, 공배 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use("/",home); //use > 미들 웨어를 등록해주는 메서드.

module.exports = app;    //내보내기
