"use strict"
//html문서와 연결된 자바스크립트 파일 , 프론트단에서 동작하는

const id = document.querySelector("#id"),          
psword = document.querySelector("#psword"),      
loginBtn = document.querySelector("#button");     
   //html의 선택자를 통해 값을 변수에 넣음 , login.ejs의 태그에 대한 정보
   //id로 부여된 선택자를 가지고 올 수 있게 앞에 #을 붙임
   //선택자의 값을 가지고 오기전에 콘솔이 먼저 실행돼서 ,defer명령어로 추가된 문서 순서로


loginBtn.addEventListener("click", login);
  //클릭이벤트가 발생하면 로그인

  function login() {     
   const req = {
     id: id.value,
    psword: psword.value,
   };
   //텍스트에 입력된 값을 받아옴 ,오브젝트여서 : ,
   
   fetch("/login", {    //해당 데이터를 서버로 전달하기 위해 fetch ,login 경로로 전달
    method: "POST",     //바디로 값을 전달할려면 post의 매서드로 해야함(restapi영상보기)
    headers: {
         "Content-Type": "application/json",
    },                  //전달하는 데이터가 제이슨이라고 명시
     body: JSON.stringify(req),      //오브젝트로 바디라는 키값으로 제이슨타입으로 문자열로 받음
   })
   .then((res) => res.json())    //제이슨을 반환 값으로 전달
   .then((res) => {
  //.then 서버에서 응답한 데이터를(로그인 성공여부) 가져옴
  //읽은 body의 텍스트를 primise형태로 반환해서 한번 더 then
  
    if (res.success) {
      location.href = "/";  
    } else {
      alert(res.msg);
    }
   })
   //success가 ture면 로그인루트 아니면 알림메세지
   .catch((err) => {
    console.error("로그인 중 에러 발생");
   });
   }
   //로직을 수행하다가 에러가 발생 시 처리방법