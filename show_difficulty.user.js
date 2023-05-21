// ==UserScript==
// @name         show difficulty
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  difficulty_popoverを表示する
// @author       nagao
// @match        https://minesweeper.online/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=minesweeper.online
// @grant        none
// ==/UserScript==

{
    'use strict';

    const mouseOverEvent = new MouseEvent("mouseover", {
        view: window,
        bubbles: true,
        cancelable: true
    });

    const mouseOutEvent = new MouseEvent("mouseout", {
        view: window,
        bubbles: true,
        cancelable: true
    });

    setInterval(() => {
        let element = document.querySelector("#difficulty_popover>i");
        if(element) {
            element.dispatchEvent(mouseOverEvent);
            if(document.querySelector('[id^="popover"] .loading-big')){
                element.dispatchEvent(mouseOutEvent);
            }
        }
    }, 500);
}
