"use strict"

class UserStorage {
    static #users = {
     id: ["qudgns8883", "병훈", "예삐삐"],
     psword: ["1234", "1234", "12341234"],
     name: ["qudgns8883", "병훈", "예삐삐"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) =>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;