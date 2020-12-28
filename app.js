import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
// const express = require('express');
// // require => express를 내 파일 내에서 찾고 -> node_module에서 찾음

const app = express();

// Middlewares 순서대로 실행
app.use(cookieParser()); // 쿠키관리
app.use(bodyParser.json()); // request의 form, json 관리
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet()); // 보안
app.use(morgan("dev")); // 접속한 log관리

app.use(routes.home, globalRouter); // "/~"에 접속하면 => globalRouter를 찾음
app.use(routes.users, userRouter); // "/users"에 접속하면 => userRouter를 찾음
app.use(routes.videos, videoRouter);

export default app;
//딴데서 import하면 app object를 내보냄
