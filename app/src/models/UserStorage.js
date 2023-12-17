"use strict"
  
//로그인 검증

class UserStorage {
    static #users = {         
        //다이렉트로 users를 받아올려면 정적변수 static 사용
        //퍼블릭에서 프리메이트변수로 선언 # > 외부에서 불러올 수 없도록    
     id: ["qudgns8883", "병훈", "예삐삐"],
     psword: ["1234", "1234", "12341234"],
     name: ["qudgns8883", "병훈", "예삐삐"],
    };
    //로그인 데이터
    static getUsers(...fields) {       
        //클래스 자체에서 메소드로 접근할려면 static
        //...변수명 입력하면 파라미터로 넘어온 데이터들이 배열형태로 넘어감
        const users = this.#users;
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


 static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);    //users의 키값만 usersKeys에 리스트로 => [id,psword]
    const userInfo = usersKeys.reduce((newUser, info) =>{ //키값이 순차적으로 들어감
        newUser[info] = users[info][idx];
        return newUser; 
    }, {});

    return userInfo;
}
};
module.exports = UserStorage;