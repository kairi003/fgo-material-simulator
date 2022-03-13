// ==UserScript==
// @name         syncmat
// @namespace    https://github.com/kairi003/
// @version      1.8
// @description  Sync FGO Material Simulater
// @author       kairi003
// @match        http://fgosimulator.webcrow.jp/Material/
// @match        https://fgosim.github.io/Material/
// @updateURL    https://github.com/kairi003/fgo-material-simulator/raw/master/userscript/syncmat.user.js
// @downloadURL  https://github.com/kairi003/fgo-material-simulator/raw//master/userscript/syncmat.user.js
// @grant        none
// @run-at       document-start
// ==/UserScript==

{
  'use strict';
  const ldmat = e=>{fetch('https://script.google.com/macros/s/AKfycbxyg5oN2HuWqECCzcOkupUh2Heg0TvzScQrCGNpTBPl7JQ_B1o/exec').then(r=>r.json()).then(d=>Object.assign(localStorage,d)&alert('LOAD: '+new Date(d.date))&location.reload());};
  const psmat = e=>{localStorage.date=new Date().toJSON();fetch('https://script.google.com/macros/s/AKfycbxyg5oN2HuWqECCzcOkupUh2Heg0TvzScQrCGNpTBPl7JQ_B1o/exec',{method:"POST",mode:'no-cors',headers:{"Content-Type":"application/json"},body:JSON.stringify(localStorage)}).then(r=>alert('PUSH: '+new Date(localStorage.date)));};
  const main = () => {
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
  }
  if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', main);
  } else {
    main();
  }
}
