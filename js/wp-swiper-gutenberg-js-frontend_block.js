!function(){"use strict";new function(){var t=this;t.options={},t.init=function(){t.init_options()},t.getNumber=function(t,e=1){return Number(t)?Number(t):e},this.JSONify=t=>{var e={};for(var a in t)e['"'+a+'"']=t[a];return e},t.init_options=function(){var e=document.querySelectorAll(".wp-swiper");window.wpSwiper=[];for(let a=0;a<e.length;a++){let i=e[a].querySelector(".swiper-container");if(i.hasAttribute("data-freemode")&&"true"==i.getAttribute("data-freemode")&&(t.options.freeMode=i.getAttribute("data-freemode")),i.hasAttribute("data-navigation")&&"true"==i.getAttribute("data-navigation")&&(t.options.navigation={nextEl:e[a].querySelector(".swiper-button-next"),prevEl:e[a].querySelector(".swiper-button-prev")}),i.hasAttribute("data-pagination")&&"true"==i.getAttribute("data-pagination")?(t.options.pagination={el:e[a].querySelector(".swiper-pagination")},i.getAttribute("data-paginationtype")&&(t.options.pagination.type=i.getAttribute("data-paginationtype")),i.getAttribute("data-clickablepagination")&&(t.options.pagination.clickable=i.getAttribute("data-clickablepagination"))):t.options.pagination=!1,i.hasAttribute("data-slidespercolumn")&&(t.options.slidesPerColumn=t.getNumber(i.getAttribute("data-slidespercolumn"),1)),i.hasAttribute("data-autoplay")&&(t.options.autoplay="true"==i.getAttribute("data-autoplay")),i.hasAttribute("data-delay")&&t.options.autoplay&&(t.options.autoplay={},t.options.autoplay.delay=i.getAttribute("data-delay")),i.hasAttribute("data-speed")&&(t.options.speed=t.getNumber(i.getAttribute("data-speed"),500)),i.hasAttribute("data-loop")&&(t.options.loop="true"==i.getAttribute("data-loop")),i.hasAttribute("data-effect")&&(t.options.effect=i.getAttribute("data-effect")),i.hasAttribute("data-slidesperview")&&(t.options.slidesPerView=i.getAttribute("data-slidesperview")),i.hasAttribute("data-spacebetween")&&(t.options.spaceBetween=t.getNumber(i.getAttribute("data-spacebetween"),0)),i.hasAttribute("data-breakpoints")){const e=i.getAttribute("data-breakpoints");void 0!==e&&(t.options.breakpoints=JSON.parse(e.replace(/\\/g,"")))}i.hasAttribute("data-mousewheel")&&(t.options.mousewheel=i.getAttribute("data-mousewheel")),i.hasAttribute("data-releaseonedges")&&"true"===i.getAttribute("data-mousewheel")&&"true"===i.getAttribute("data-releaseonedges")&&(t.options.mousewheel={},t.options.mousewheel.releaseOnEdges=i.getAttribute("data-releaseonedges")),window.wpSwiper[a]=new Swiper(i,t.options)}},window.addEventListener("DOMContentLoaded",(e=>{try{t.init()}catch(t){console.warn("JS Error: "),console.log(t)}}))}}();
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */