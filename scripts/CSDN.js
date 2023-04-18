// ==UserScript==
// @name        Pure_CSDN
// @namespace   https://blog.csdn.net/*
// @match       https://blog.csdn.net/*
// @grant       none
// @version     0.6
// @author      13号寄信人
// @description 净化CSDN
// @license     MIT
// ==/UserScript==

(function () {
    'use strict';
    const css =
        `
        .blog_container_aside {
            display: none !important;
        }
        #rightAside {
            display: none !important;
        }
        .csdn-side-toolbar {
            display: none !important;
        }
        #mainBox {
            display: flex !important;
            justfy-content: center !important;
        }
        `

    //------------------------移动端------------------------
    let mobileAll = []
    mobileAll.push(...document.getElementsByClassName('guide-box'))
    for (let i = 0; i < mobileAll.length; i++) {
        let self = mobileAll[i]
        self.parentElement.removeChild(self)
    }
})();