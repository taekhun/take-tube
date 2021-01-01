//1st arg : 렌더링 할 템플릿
//2nd arg : 템플릿에 추가할 정보가 담긴 객체
import {videos} from "../db"
import routes from "../routes";

export const home = (req, res) => {
    res.render("home", {pageTitle : "Home", videos });
}

export const search = (req, res) => {
    const {query: {term : searchingBy}} = req;
    res.render("search", {pageTitle : "Search", searchingBy : searchingBy, videos});
}

export const getUpload = (req, res) => res.render("upload", {pageTitle : "Upload"});

export const postUpload = (req, res) => 
{
    const {
        body:{
            file,title,description
        }
    } = req;
    // To Do : Upload and save video
    res.redirect(routes.videoDetail(324393));
}
export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle : "Video Title"});

export const editVideo = (req, res) => res.render("editVideo", {pageTitle : "Edit Detail"});

export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle : "Delete Video"});
