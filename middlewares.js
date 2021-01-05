//local 변수, routes변수를 담는 곳
//next()를 통해 다음 middleware(다음 줄)로 넘겨야 함
import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });
// 목적 경로

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "take-tube";
  res.locals.routes = routes;
  res.locals.user = req.user || null;
  next();
};

//부적절한 Route 방지
export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

export const uploadVideo = multerVideo.single("videoFile");
