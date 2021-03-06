//local 변수, routes변수를 담는 곳
//next()를 통해 다음 middleware(다음 줄)로 넘겨야 함
import multer from "multer";
import routes from "./routes";

//multer : img to url
const multerVideo = multer({ dest: "uploads/videos/" });
const multerAvatar = multer({ dest: "uploads/avatars/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "take-tube";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};

//부적절한 Route 방지
//공용 버전
export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

//로그인 버전
export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

export const uploadVideo = multerVideo.single("videoFile");
export const uploadAvatar = multerAvatar.single("avatar");
