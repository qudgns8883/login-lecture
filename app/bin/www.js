"use strict";

const app = require("../app");   //상위 폴더 app을 불러옴
const PORT  = 3000;            


app.listen(PORT,  () => {
     console.log("서버 가동");
});

//서버 가동 경로