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

   fetch("/login", {
    method: "POST",
    headers: {
         "Content-Type": "application/json",
    },
     body: JSON.stringify(req),
   })
   .then((res) => res.json())
   .then(console.log);
   }