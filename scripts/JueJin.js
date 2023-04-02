// ==UserScript==
// @name        Pure_掘金
// @namespace   https://juejin.cn/*
// @match       https://juejin.cn/*
// @grant       none
// @version     0.1
// @author      13号寄信人
// @description 净化掘金
// @license     MIT
// ==/UserScript==

(function () {
    'use strict';
    let all = []
    //博文底部插件推广
    all.push(...document.getElementsByClassName('recommend-box'))
    all.push(...document.getElementsByClassName('global-component-box'))
    all.push(...document.getElementsByClassName('article-end'))
    for (let i = 0; i < all.length; i++) {
        let self = all[i]
        self.parentElement.removeChild(self)
    }


    //-----样式-----
    //博文居中
    let view = document.getElementsByClassName('view')[0]
    view.style.display = 'flex'
    view.style.justifyContent = 'center'
})();