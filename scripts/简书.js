// ==UserScript==
// @name        Pure_简书
// @namespace   https://www.jianshu.com/*
// @match       https://www.jianshu.com/*
// @grant       none
// @version     0.0.1
// @author      13号寄信人
// @description 净化简书
// @license     MIT
// ==/UserScript==

(function () {
    'use strict';

    appendStyle(buildCss())

    function buildCss() {
        if (browserDetection() !== "PC") {
            //------------------------移动端------------------------
            console.log("Not PC")
            return ``
        } else {
            //------------------------桌面端------------------------
            console.log("Is PC")
            return `
        ._2OwGUo , ._3Pnjry , .ouvJEz:nth-child(2) , footer {
            display: none !important;
        }
        ._gp-ck {
            width: 100% !important;
        }
        `
        }
    }

    function appendStyle(css) {
        let styleNode = document.createElement("style");
        styleNode.appendChild(document.createTextNode(css));
        (document.querySelector("head") || document.documentElement).appendChild(styleNode);
    }

    function browserDetection() {
        const userAgent = window.navigator.userAgent.toLowerCase();
        let browser = null;
        if (userAgent.match(/ipad/i)) {
            browser = 'ipad';
        } else if (userAgent.match(/iphone os/i)) {
            browser = 'iphone';
        } else if (userAgent.match(/midp/i)) {
            browser = 'midp'
        } else if (userAgent.match(/rv:1.2.3.4/i)) {
            browser = 'rv:1.2.3.4';
        } else if (userAgent.match(/ucweb/i)) {
            browser = 'ucweb';
        } else if (userAgent.match(/android/i)) {
            browser = 'android';
        } else if (userAgent.match(/windows ce/i)) {
            browser = 'windowsCe';
        } else if (userAgent.match(/windows mobile/i)) {
            browser = 'windowsMobile';
        } else {
            browser = 'PC'
        }
        return browser;
    }
})();