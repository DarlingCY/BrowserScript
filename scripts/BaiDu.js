// ==UserScript==
// @name        Pure_BaiDu
// @namespace   https://www.baidu.com/s
// @match       https://www.baidu.com/s
// @grant       none
// @version     0.1
// @author      13号寄信人
// @description 净化百度
// @license     MIT
// ==/UserScript==

(function () {
    'use strict';
    let all = []
    //搜索页底部
    all.push(document.getElementById("foot"))
    //搜索页右侧热点
    all.push(document.getElementById("content_right"))
    //搜索页下方相关搜索
    all.push(document.getElementById("rs_new"))
    //大家都在搜
    all.push(...document.getElementsByClassName('result-op'))
    for (let i = 0; i < all.length; i++) {
        let self = all[i]
        self.parentElement.removeChild(self)
    }
    let container = document.getElementById("container")
    container.style.display = "flex"
    container.style.flexDirection = 'column'
    container.style.alignItems = "center"
    container.style.margin = "0"
    container.style.padding = "0"
    let page = document.getElementById("page")
    page.style.display = "flex"
    page.style.justifyContent = 'center'
    let wrapper = document.getElementById('wrapper_wrapper')
    wrapper.style.display = 'flex'
    wrapper.style.flexDirection = 'column'
    wrapper.style.alignItems = 'center'
    let contentLeft = document.getElementById('content_left')
    contentLeft.style.margin = '0'
    contentLeft.style.padding = '0'
    document.getElementsByClassName('page-inner_2jZi2').item(0).style.padding = "20px"
    let tab = document.getElementById('s_tab')
    tab.style.display = 'flex'
    tab.style.justifyContent = 'center'
    let head = document.getElementById('head')
    head.style.display = 'flex'
    head.style.justifyContent = 'center'
    let result = document.getElementsByClassName('result')
    for (let i = 0; i < result.length; i++) {
        let self = result[i]
        self.style.padding = '12px 16px'
        self.style.boxShadow = '0 2px 5px 0 rgba(0,0,0,0.01),1px 2px 1px 0 rgba(0,0,0,0.07)'
        self.style.borderRadius = '12px'
    }
})();
