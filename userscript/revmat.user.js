// ==UserScript==
// @name         revmat
// @namespace    https://github.com/kairi003/
// @version      0.1
// @description  Reverse FGO Material Simulater
// @author       kairi003
// @match        http://fgosimulator.webcrow.jp/Material/
// @match        https://fgosim.github.io/Material/
// @updateURL    https://github.com/kairi003/fgo-matsim-script/raw/master/userscript/revmat.user.js
// @downloadURL  https://github.com/kairi003/fgo-matsim-script/raw//master/userscript/revmat.user.js
// @grant        none
// @run-at       document-start
// ==/UserScript==

{
  'use strict';
  document.head.insertAdjacentHTML('beforeend', `<style>
  .icon-chaldea-r1,.icon-chaldea-r2,.icon-chaldea-r3,
  .icon-chaldea-r4,.icon-chaldea-r5 { display: flex; }
  .rev-check { display: inline-block !important; }
  </style>`);
  const main = () => {
    const setOrder = (boxes) => {
      const flag = +localStorage['chaldea-icon-reversed'];
      for (const box of boxes) {
        const value = box.querySelector('.box-c_image input')?.value ?? 0;
        box.style.order = (-1) ** flag * value;
      }
    }
    const revCheck = Object.assign(document.createElement('input'), {
      type: 'checkbox', id: 'revCheck', className: 'rev-check',
      checked: !!+localStorage['chaldea-icon-reversed']
    });
    document.querySelector('.select-class').appendChild(revCheck);
    revCheck.addEventListener('change', event => {
      localStorage['chaldea-icon-reversed'] = +revCheck.checked;
      setOrder(document.querySelectorAll('.box-chaldea'));
    });
    const observer = new MutationObserver((mutations) => {
      setOrder(mutations.map(m => [...m.addedNodes]).flat());
    });
    for (const container of document.querySelectorAll('[class^="icon-chaldea-r"]')) {
      observer.observe(container, {childList: true});
    }
    setOrder(document.querySelectorAll('.box-chaldea'));
  }
  if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', main);
  } else {
    main();
  }
}
