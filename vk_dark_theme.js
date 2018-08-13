// ==UserScript==
// @name         VK Dark Theme
// @version      0.1.1
// @description  https://github.com/bogdanbelous/VK-Dark-Theme/blob/master/README.md
// @author       bogdanbelous
// @homepage     https://github.com/bogdanbelous/VK-Dark-Theme/
// @updateURL    https://raw.githubusercontent.com/bogdanbelous/VK-Dark-Theme/master/vk_dark_theme.js
// @include      https://vk.com/*
// @include      http://vk.com/*
// @run-at       document-start
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
