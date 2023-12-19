"use strict"
  //로그인 검증
  
const fs = require("fs").promises;

class UserStorage {
   static #getUserInfo(data, id){
      const users = JSON.parse(data);    //user.json데이터를 받아서 json으로 읽음 
      const idx = users.id.indexOf(id);
      const usersKeys = Object.keys(users);    //users의 키값만 usersKeys에 리스트로 => [id,psword]
      const userInfo = usersKeys.reduce((newUser, info) =>{ //키값이 순차적으로 들어감
      newUser[info] = users[info][idx];
      return newUser; 
      }, {});

      return userInfo;
   }
   static #getUsers(data, isAll ,fields) {
      const users = JSON.parse(data);
      if (isAll) return users;
      const newUsers = fields.reduce((newUsers, field) =>{   
      //reduce메서드로 필드에 담긴 내용만 담기도록, 
      //UserStorage.getUsers("id", "psword"); 필드에 담긴 원소가 순환하도록
      //newUsers에는 초기값 그 다음 변수는 field에 나타남
      if(users.hasOwnProperty(field)){    //users에 선언한 키가 있는지 확인 
         newUsers[field] = users[field];  //키와 값이 맞으면 리턴
      }
        return newUsers; //필드에 맞는 키와 값이 다 나오게 함
      }, {}); //  ture면 > {} 에 값을 넣어줌
        return newUsers;
 }   
   
   static getUsers(isAll, ...fields) {       
      //클래스 자체에서 메소드로 접근할려면 static
      //...변수명 입력하면 파라미터로 넘어온 데이터들이 배열형태로 넘어감
      // const users = this.#users;
      return fs
         .readFile("./src/databases/users.json") //promises를 반환함
         .then((data) => {                      //로직이 성공시 data 실행
            return this.#getUsers(data,isAll ,  fields);
      })          
         .catch(console.error);  
   }

   static getUserInfo(id) {
     return fs
        .readFile("./src/databases/users.json") //promises를 반환함
        .then((data) => {                      //로직이 성공시 data 실행
           return this.#getUserInfo(data, id);
        })        
         
        .catch(console.error);  
           //로직이 실패시 err 실행 ,promises를 반환하는 오류처리는 catch로
   };
    
   static async save(userInfo){
      const users = await this.getUsers(true);
      if (users.id.includes(userInfo.id)){
         throw "이미 존재하는 아이디입니다.";
      }
      users.id.push(userInfo.id);
      users.name.push(userInfo.name);
      users.psword.push(userInfo.psword);
      fs.writeFile("./src/databases/users.json", JSON.stringify(users));
      return { success: true };
      }
   }
module.exports = UserStorage;