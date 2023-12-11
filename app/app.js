//모듈
const express = require("express");
const bodyparser = require("body-parser");
const app = express();

//라우팅
const home = require("./src/routes/home");


//앱셋팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
// URL을 통해 전달되는 데이터에 한글, 공배 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({ extended: true}));

app.use("/",home); //use > 미들 웨어를 등록해주는 메서드.

module.exports = app;
