parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6KIz":[function(require,module,exports) {
"use strict";var e=document.querySelector(".page__header"),t=document.querySelector(".page__menu"),n=document.body,i=function(i){var s=i.target,o=s.closest(".icon--menu"),a=s.closest(".icon--menu-close"),c=s.closest(".page__menu"),d=t.classList.contains("page__menu--open"),l=s.classList.contains("nav__link"),r=window.innerWidth-document.documentElement.clientWidth;o&&(t.classList.add("page__menu--open"),n.classList.add("page__body--hidden"),n.style.marginRight="".concat(r,"px"),t.style.paddingRight="".concat(r,"px"),e.style.marginRight="".concat(r,"px"),document.querySelector(".page__overlay").style.display="block"),(a||d&&!c||l)&&(t.classList.remove("page__menu--open"),n.classList.remove("page__body--hidden"),n.style.marginRight=0,t.style.paddingRight=0,e.style.marginRight=0,document.querySelector(".page__overlay").style.display="none")};n.addEventListener("click",i);var s=new Swiper(".gallery__swiper",{speed:400,spaceBetween:16,pagination:{el:".swiper__pagination",clickable:!0},navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"},breakpoints:{768:{slidesPerView:2,spaceBetween:20}}}),o=function(){var e=document.querySelectorAll(".swiper__slide");window.innerWidth>=1280?(s.disable(),e.forEach(function(e){e.classList.add("swiper__slide--descktop")})):(e.forEach(function(e){e.classList.remove("swiper__slide--descktop")}),s.enable())};window.addEventListener("resize",o),window.addEventListener("load",o);var a=document.querySelector(".footer__btn-to-top"),c=function(){window.scrollTo({top:0,behavior:"smooth"})};a.addEventListener("click",c);
},{}]},{},["6KIz"], null)
//# sourceMappingURL=main.bc00539f.js.map