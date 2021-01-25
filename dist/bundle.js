(()=>{"use strict";function t(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function i(t,i){(null==i||i>t.length)&&(i=t.length);for(var e=0,n=new Array(i);e<i;e++)n[e]=t[e];return n}function e(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var n;n=document.querySelector(".up"),window.addEventListener("scroll",(function(){window.scrollY>=400?n.classList.add("is-visible"):n.classList.remove("is-visible")})),n.addEventListener("click",(function t(){0!==window.scrollY&&setTimeout((function(){window.scrollTo(0,window.scrollY-30),t()}),5)})),new(function(){function n(t){var i=t.main,e=t.wrap,o=t.next,r=t.prev,s=t.infinity,l=void 0!==s&&s,a=t.position,d=void 0===a?0:a,h=t.slidesToShow,c=void 0===h?2:h,u=t.responsive,p=void 0===u?[]:u;!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,n),this.main=document.querySelector(i),this.wrap=document.querySelector(e),this.slides=document.querySelector(e).children,this.next=document.querySelector(o),this.prev=document.querySelector(r),this.options={position:d,infinity:l,widthSlide:Math.floor(100/c)},this.slidesToShow=c,this.responsive=p}var o,r;return o=n,(r=[{key:"init",value:function(){this.addServClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responsInit()}},{key:"responsInit",value:function(){var e,n=this,o=this.slidesToShow,r=this.responsive.map((function(t){return t.breakpoint})),s=Math.max.apply(Math,function(t){if(Array.isArray(t))return i(t)}(e=r)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(e)||t(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=function(){var t=document.documentElement.clientWidth;if(t<s)for(var i=0;i<r.length;i++)t<r[i]&&(n.slidesToShow=n.responsive[i].slideToShow,n.options.widthSlide=Math.floor(100/n.slidesToShow),n.addStyle());else n.slidesToShow=o,n.options.widthSlide=Math.floor(100/n.slidesToShow),n.addStyle()};l(),window.addEventListener("resize",l)}},{key:"addServClass",value:function(){this.main.classList.add("video-slider"),this.wrap.classList.add("video-slider__wrap");var i,e=function(i,e){var n;if("undefined"==typeof Symbol||null==i[Symbol.iterator]){if(Array.isArray(i)||(n=t(i))){n&&(i=n);var o=0,r=function(){};return{s:r,n:function(){return o>=i.length?{done:!0}:{done:!1,value:i[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,l=!0,a=!1;return{s:function(){n=i[Symbol.iterator]()},n:function(){var t=n.next();return l=t.done,t},e:function(t){a=!0,s=t},f:function(){try{l||null==n.return||n.return()}finally{if(a)throw s}}}}(this.slides);try{for(e.s();!(i=e.n()).done;)i.value.classList.add("video-slider__item")}catch(t){e.e(t)}finally{e.f()}}},{key:"addStyle",value:function(){var t=document.getElementById("videoCarousell-style");t||((t=document.createElement("style")).id="videoCarousel-style"),t.textContent="\n\t\t\t\t.video-slider {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t}\n\t\t\t\t.video-slider__wrap {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\ttransition: transform 0.3s;\n\t\t\t\t\twill-change: transform; \t\t\t\t\t\n\t\t\t\t}\n\t\t\t\t.video-slider__item {\n\t\t\t\t\tflex: 0 0 ".concat(this.options.widthSlide,"%;\n\t\t\t\t\tmargin: auto 0;\n\t\t\t\t\tmax-width: 548px;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\tmargin-right: 80px;\n\t\t\t\t}\n\t\t\t"),document.head.appendChild(t)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.slides.length-this.slidesToShow),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.slides.length-this.slidesToShow)&&(++this.options.position,this.options.position>this.slides.length-this.slidesToShow&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}}])&&e(o.prototype,r),n}())({main:".video-elements",wrap:".video-carousel",prev:".video-arrow .arrow-left",next:".video-arrow .arrow-right",slidesToShow:2,infinity:!0,responsive:[{breakpoint:1024,slideToShow:2},{breakpoint:768,slideToShow:2},{breakpoint:530,slideToShow:1}]}).init()})();