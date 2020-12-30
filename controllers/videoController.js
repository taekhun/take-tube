//1st arg : 렌더링 할 템플릿
//2nd arg : 템플릿에 추가할 정보가 담긴 객체

export const home = (req, res) => res.render("home", {pageTitle : "Home"});

export const search = (req, res) => {
    const {query: {term : searchingBy}} = req;
    //const term = req.query.term
    res.render("search", {pageTitle : "Search", searchingBy : searchingBy});
    //res.render("search", {pageTitle : "Search", searchingBy});
}

export const upload = (req, res) => res.render("upload", {pageTitle : "Upload"});

export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle : "Video Title"});

export const editVideo = (req, res) => res.render("editVideo", {pageTitle : "Edit Detail"});

export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle : "Delete Video"});
