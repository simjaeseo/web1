//설치한 express 불러오기
const express = require("express"); //== import express from "express"
const app = express();

// HTTP GET 방식, POST, PATCH, PUT, DELETE
// www.naver.com/ << 요 슬래쉬
app.get("/", (req, res, next) => {
  res.send("hello"); // send => 안에 있는 메세지를 client 에게 전달.(render역할도 함)
});

// 라우터라고 생각. /users 찾으면 callback함수 띄워라
app.get("/users", (req, res) => {
  res.send("<h1>users</h1>"); // 조각조각을 하나로 모아서 html을 만들어줌
  //res.render('pug',{title: "타이틀"});  // view가 필요함 pug, ejs
});

app.get("/api", (req, res) => {
  res.json({ success: true, massage: "api 요청 성공" });
});

// 앞에 :가 있으면 client에게 인자(파라미터)를 받는다고 생각
app.get("/param/:id", () => {
  const { id } = req.params; // 구조 분해할당이어서 바로 id 쓸수있음
  //const params = req.params;
  console.log(id); //http://localhost:9000/param 이라고만 치면 Cannot GET /param 이라고 뜸(인자 안줘서)
  res.end();
});

// 쿼리는 알아서 받아오기때문에 필요 없다고 함
app.get("/query", (req, res) => {
  const { name } = req.query;
  console.log(name);
  res.end();
});

// port binding
// 포트 번호 , callback함수(성공했을 때 실행하는 함수)
app.listen(9000, (err) => {
  if (err) console.error("9000 X");
  console.log("server start");
});

//(req, res, next) 는 핸들러(express), =  컨트롤러 미들러
