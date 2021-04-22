// ==UserScript==
// @name         fxmat
// @namespace    https://raw.githubusercontent.com/kairi003/fgo-material-simulator/master/fgo-material-simulator/userscript/
// @version      1.1
// @description  Fix FGO Material Simulater
// @author       kairi_003
// @match        http://fgosimulator.webcrow.jp/Material/
// @updateURL    https://raw.githubusercontent.com/kairi003/fgo-material-simulator/master/fgo-material-simulator/userscript/fxmat.js
// @downloadURL  https://raw.githubusercontent.com/kairi003/fgo-material-simulator/master/fgo-material-simulator/userscript/fxmat.js
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    document.head.insertAdjacentHTML('beforeend','<style>.icon{max-height:73px !important;}.box-chaldea{margin:2px !important;}.white{box-sizing:border-box !important;}</style>');
})();