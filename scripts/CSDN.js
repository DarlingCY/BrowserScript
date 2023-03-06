// ==UserScript==
// @name        Pure_CSDN
// @match       https://blog.csdn.net/*
// @grant       none
// @version     0.1
// @author      13号寄信人
// @description 净化CSDN
// ==/UserScript==

(function () {
    'use strict';
    //博文左边侧边栏
    let blogAsideArr = document.getElementsByClassName("blog_container_aside");
    for (let i = 0; i < blogAsideArr.length; i++) {
        let self = blogAsideArr[i]
        self.parentElement.removeChild(self)
    }
})();