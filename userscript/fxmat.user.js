// ==UserScript==
// @name         fxmat
// @namespace    https://github.com/kairi003/
// @version      1.9
// @description  Fix FGO Material Simulater
// @author       kairi003
// @match        http://fgosimulator.webcrow.jp/Material/
// @match        https://fgosim.github.io/Material/
// @updateURL    https://github.com/kairi003/fgo-material-simulator/raw/master/userscript/fxmat.user.js
// @downloadURL  https://github.com/kairi003/fgo-material-simulator/raw/master/userscript/fxmat.user.js
// @grant        none
// @run-at       document-start
// ==/UserScript==

{
  'use strict';
  document.head.insertAdjacentHTML('beforeend', '<style>.icon{max-height:73px !important;}.box-chaldea{margin:2px !important;}.white{box-sizing:border-box !important;}</style>');
}
