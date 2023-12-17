"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");  //ctrl을 불러옴

router.get ("/", ctrl.output.home);         //ctrl에서 불러옴 루트경로는 홈
router.get ("/login", ctrl.output.login);   //ctrl에서 불러옴 로그인경로는 로그인화면-
router.get ("/register", ctrl.output.register);// register로 요청이들어오면 함수가 실행

router.post ("/login", ctrl.process.login); //post로 받을 수 있는 경로
router.post ("/register", ctrl.process.register);

module.exports = router;