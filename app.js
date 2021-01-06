import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
// const express = require('express');
// // require => express를 내 파일 내에서 찾고 -> node_module에서 찾음

import "./passport";

const app = express();

const CookieStore = MongoStore(session);

console.log(process.env.COOKIE_SECRET);
// Middlewares (top-bottom)
// app.use(helmet()); // 보안
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.set("view engine", "pug"); //View-engine setting
app.use("/uploads", express.static("uploads")); // "/uploads"로 가면 => uploads directory 안으로 들어감
app.use("/static", express.static("static"));
app.use(cookieParser()); // 쿠키관리
app.use(bodyParser.json()); // request의 form, json 관리
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev")); // 접속한 log관리

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({ mongooseConnection: mongoose.connection }),
  })
);
app.use(passport.initialize());
// cookieParser에서 얻은 쿠키 => passport 초기화
// 요청한 req의 오브젝트 => req.user로 만듦
app.use(passport.session());
// deserialize

app.use(localsMiddleware);
//위에서 얻은 req.user로 판단 then, Route
//라우터로 뿌려줌에 따라, 어디서나 사용자 로그인 정보를 갖고있음
app.use(routes.home, globalRouter); // "/~"에 접속하면 => globalRouter에서 찾음
app.use(routes.users, userRouter); // "/users/"에 접속하면 => userRouter에서 찾음
app.use(routes.videos, videoRouter); // "/videos/"에 접속하면 => videoRouter에서 찾음

export default app;
//딴데서 import하면 app object를 내보냄
