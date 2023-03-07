// ==UserScript==
// @name        Pure_CSDN
// @namespace   https://blog.csdn.net/*
// @match       https://blog.csdn.net/*
// @grant       none
// @version     0.4
// @author      13号寄信人
// @description 净化CSDN
// @license     MIT
// ==/UserScript==

(function () {
    'use strict';
    let all = []
    //博文左边侧边栏
    all.push(...document.getElementsByClassName("blog_container_aside"))
    //博文分类专栏
    all.push(document.getElementById("rightAside"))
    //博文底部右侧操作栏
    all.push(...document.getElementsByClassName("csdn-side-toolbar"))
    for (let i = 0; i < all.length; i++) {
        let self = all[i]
        self.parentElement.removeChild(self)
    }
    //博文内容
    let contentMainBox = document.getElementById("mainBox")
    contentMainBox.style.display = "flex"
    contentMainBox.style.justifyContent = "center"
})();