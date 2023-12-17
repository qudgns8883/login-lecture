"use strict";
//컨트롤러 


const User = require("../../models/User");  //인증받기
const output = {
    home: (req, res) =>{
        res.render("home/index");          
    },
    login: (req, res) =>{
        res.render("home/login");
    },
};
//해당 페이지를 랜더링 ,오브젝트여서 ; , index.js

const process = {
    login: (req, res) => {
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
    },
};

module.exports = {
output,
process,
};