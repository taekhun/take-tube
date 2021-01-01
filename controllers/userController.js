import routes from "../routes";

export const getJoin = (req, res) =>{
    res.render("join", {pageTitle : "join"});
}

export const postJoin = (req,res) =>{
    const{
        body : {name, email, password, password2}
    }=req;
    if(password !== password2){
        res.status(400);
        res.render("join", {pageTitle:"join"});
    } else {
        // To Do : Register User
        // TO Do : Log user in 
        res.redirect(routes.home)
    }
}
export const getLogin = (req, res) => res.render("login", { pageTitle : "Log in"});
export const postLogin = (req, res) => {
    res.redirect(routes.home);
}

export const logout = (req, res) => {
    //To do : Process Log out
    res.redirect(routes.home);
}
export const userDetail = (req, res) => res.render("userDetail");
export const editProfile = (req, res) => res.render("editProfile");
export const changePassword = (req, res) => res.render("changePassword");

// C : 데이터를 다루는 함수
// 라우팅 함수에서 로직, => 실행함수 부분
