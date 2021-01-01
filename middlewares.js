//local 변수, routes변수를 담는 곳
//next()를 통해 다음 middleware(다음 줄)로 넘겨야 함

import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "take-tube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated : true,
        id : 1
    }
    next();
}
