// ==UserScript==
// @name         fxmat
// @namespace    https://github.com/kairi003/
// @version      1.0
// @description  Fix FGO Material Simulater
// @author       kairi_003
// @match        http://fgosimulator.webcrow.jp/Material/
// @updateURL    https://raw.githubusercontent.com/kairi003/fgo-material-simulator/master/fgo-material-simulator/userscript/fxmat.js
// @downloadURL  https://raw.githubusercontent.com/kairi003/fgo-material-simulator/master/fgo-material-simulator/userscript/fxmat.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const style = document.createElement('style');
    style.textContent = `
    .icon{
        max-height:73px !important;
    }
    .box-chaldea{
        margin:2px !important;
    }
    .white{
        box-sizing:border-box !important;
    }`;
    document.head.append(style);
})();