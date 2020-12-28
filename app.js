import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
// const express = require('express');
// // require => express를 내 파일 내에서 찾고 -> node_module에서 찾음

const app = express();

// Middlewares 순서대로 실행
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet()); // 보안
app.use(morgan("dev")); // 접속한 log관리

app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);
//  ~/user로 접속하면 => userRounter 전체를 사용

export default app;
//딴데서 import하면 app object를 내보냄
