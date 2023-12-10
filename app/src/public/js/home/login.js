"use strict"

const id = document.querySelector("#id"),
  psword = document.querySelector("#psword"),
  loginBtn = document.querySelector("button");

  console.log(id);
  console.log("bye");

  loginBtn.addEventListener("click", login);

   function login() {
   const req = {
     id: id.value,
    psword: psword.value,
   };

   fatch("/login",{
    method: "POST",
    Headers: {
         "Content-Type": "application/json",
    },
     body: JSON.stringify(req),
   });
   }