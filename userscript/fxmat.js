// ==UserScript==
// @name         fxmat
// @namespace    https://github.com/kairi003/fgo-material-simulator
// @version      1.4
// @description  Fix FGO Material Simulater
// @author       kairi003
// @match        http://fgosimulator.webcrow.jp/Material/
// @updateURL    https://raw.githubusercontent.com/kairi003/fgo-material-simulator/master/userscript/fxmat.js
// @downloadURL  https://raw.githubusercontent.com/kairi003/fgo-material-simulator/master/userscript/fxmat.js
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    document.head.insertAdjacentHTML('beforeend','<style>.icon{max-height:73px !important;}.box-chaldea{margin:2px !important;}.white{box-sizing:border-box !important;}</style>');
})();