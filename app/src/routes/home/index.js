"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");  //ctrl을 불러옴

router.get ("/", ctrl.output.home);         //ctrl에서 불러옴 루트경로는 홈
router.get ("/login", ctrl.output.login);   //ctrl에서 불러옴 로그인경로는 로그인화면-
router.get ("/register", ctrl.output.register);
router.post ("/login", ctrl.process.login); //post로 받을 수 있는 경로

module.exports = router;