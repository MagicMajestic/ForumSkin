// ==UserScript==
// @name         Forum Skin
// @namespace    http://tampermonkey.net/
// @version      0.9
// @description  Добавляет кнопки с BBCode фразами на форум Majestic RP
// @author       Magic
// @match        https://forum.majestic-rp.ru/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Set a background image that covers the entire page
    document.body.style.backgroundImage = "url('https://vsthemes.org/uploads/posts/2021-09/1632557602_115504-noch-tokio_vurdalak-vymyslennyj_personaz-krasnyj_cvet-graficeskij_dizajn-1920x1080.webp')";
    document.body.style.backgroundSize = "cover";  // Stretch the image
    document.body.style.backgroundPosition = "center";  // Center the image
    document.body.style.backgroundAttachment = "fixed";  // Fix the image during scroll
})();
