// ==UserScript==
// @name         syncmat
// @namespace    https://raw.githubusercontent.com/kairi003/fgo-material-simulator/master/fgo-material-simulator/userscript/
// @version      1.2
// @description  Sync FGO Material Simulater
// @author       kairi_003
// @match        http://fgosimulator.webcrow.jp/Material/
// @updateURL    https://raw.githubusercontent.com/kairi003/fgo-material-simulator/master/fgo-material-simulator/userscript/syncmat.js
// @downloadURL  https://raw.githubusercontent.com/kairi003/fgo-material-simulator/master/fgo-material-simulator/userscript/syncmat.js
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
  'use strict';
  const ldmat = e=>{fetch('https://script.google.com/macros/s/AKfycbxyg5oN2HuWqECCzcOkupUh2Heg0TvzScQrCGNpTBPl7JQ_B1o/exec').then(r=>r.json()).then(d=>Object.assign(localStorage,d)&alert('LOAD: '+new Date(d.date))&location.reload());};
  const psmat = e=>{localStorage.date=new Date().toJSON();fetch('https://script.google.com/macros/s/AKfycbxyg5oN2HuWqECCzcOkupUh2Heg0TvzScQrCGNpTBPl7JQ_B1o/exec',{method:"POST",mode:'no-cors',headers:{"Content-Type":"application/json"},body:JSON.stringify(localStorage)}).then(r=>alert('PUSH: '+new Date(localStorage.date)));};
  document.addEventListener('DOMContentLoaded', e=>{
    const addButton = (text, func) => {
      const tools = document.createElement('div');
      tools.className = 'tools';
      const button = document.createElement('button');
      button.textContent = text;
      button.addEventListener('click', func);
      toolSyncBox.append(tools);
      tools.append(button);
    };
    const toolSyncBox = document.createElement('div');
    toolSyncBox.className = 'toolMainBox';
    document.querySelector('.toolBox').append(toolSyncBox);
    addButton('Load', ldmat);
    addButton('Push', psmat);
  });
})();
