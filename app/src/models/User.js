"use strict"

const UserStorage = require("./UserStorage");

class User{
constructor(body) {
    this.body = body;
}   

 async login() {
    const client = this.body;
    const { id, psword } = await UserStorage.getUserInfo(client.id);  

    //pending이유 userInfo가 반환하기전에 실행돼서 await / async 비동기함수로
    //await는 promises를 반환하는 변수한테 주는 옵션 

    if (id) { 
        if (id === client.id && psword === client.psword) {
             return { success: true};
        }
        return { success: false, msg: "비밀번호가 틀렸습니다."};
        }
    return { success: false, msg: "존재하지 않는 아이디입니다."};
    }
 register() {
        const client = this.body;
        const response = UserStorage.save(client);
        return response
    }
}


module.exports = User;