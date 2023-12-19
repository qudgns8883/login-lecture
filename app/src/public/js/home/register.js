"use strict"
//html문서와 연결된 자바스크립트 파일 , 프론트단에서 동작하는

const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  psword = document.querySelector("#psword"),  
  confirmPsword = document.querySelector("#confirm-psword"),    
  registerBtn = document.querySelector("#button");     
   //html의 선택자를 통해 값을 변수에 넣음 , register.ejs의 태그에 대한 정보
   //id로 부여된 선택자를 가지고 올 수 있게 앞에 #을 붙임
   //선택자의 값을 가지고 오기전에 콘솔이 먼저 실행돼서 ,defer명령어로 추가된 문서 순서로
   //id태그로 #button부르기
   //login.css에서도 #button로 바꾸기
   //ejs파일에서도 p태그로 변경
   // 가운데 정렬 margin 0 auto
  
  registerBtn.addEventListener("click", register);
  //클릭이벤트가 발생하면 로그인

   function register() {   
    if(!id.value) return alert ("아이디를 입력해주세요.");
    if(!name.value) return alert ("이름을 입력해주세요.");
    if(!psword.value) return alert ("비밀번호를 입력해주세요.");
    if (psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다.")
   
   const req = {
     id: id.value,
     name: name.value,
    psword: psword.value,
  
   };

      //텍스트에 입력된 값을 받아옴 ,오브젝트여서 : ,
    
      fetch("/register", {    //해당 데이터를 서버로 전달하기 위해 fetch ,login 경로로 전달
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
          location.href = "/login";  
        } else {
          alert(res.msg);
        }
       })
       //success가 ture면 로그인루트 아니면 알림메세지
       .catch((err) => {
        console.error("회원가입 중 에러 발생");
       });
       }