//설치한 express 불러오기
const express = require("express"); //== import express from "express"
const app = express();

// HTTP GET 방식, POST, PATCH, PUT, DELETE
// www.naver.com/ << 요 슬래쉬
app.get("/", (req, res, next) => {
  res.send("hello"); // send => 안에 있는 메세지를 client 에게 전달.(render역할도 함)
});
