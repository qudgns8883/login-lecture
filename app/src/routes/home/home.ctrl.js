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
    register: (req, res) =>{
        res.render("home/register");
    }
};
//해당 페이지를 랜더링 ,오브젝트여서 ; , index.js

const process = {
    login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
    },
    register: (req, res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    },
};

module.exports = {
output,
process,
};