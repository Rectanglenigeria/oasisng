/*
 * jQuery Superfish Menu Plugin - v1.7.5
 * Copyright (c) 2014 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */

;(function(e,s){"use strict";var n=function(){var n={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",menuArrowClass:"sf-arrows"},o=function(){var n=/iPhone|iPad|iPod/i.test(navigator.userAgent);return n&&e(s).load(function(){e("body").children().on("click",e.noop)}),n}(),t=function(){var e=document.documentElement.style;return"behavior"in e&&"fill"in e&&/iemobile/i.test(navigator.userAgent)}(),i=function(){return!!s.PointerEvent}(),r=function(e,s){var o=n.menuClass;s.cssArrows&&(o+=" "+n.menuArrowClass),e.toggleClass(o)},a=function(s,o){return s.find("li."+o.pathClass).slice(0,o.pathLevels).addClass(o.hoverClass+" "+n.bcClass).filter(function(){return e(this).children(o.popUpSelector).hide().show().length}).removeClass(o.pathClass)},l=function(e){e.children("a").toggleClass(n.anchorClass)},h=function(e){var s=e.css("ms-touch-action"),n=e.css("touch-action");n=n||s,n="pan-y"===n?"auto":"pan-y",e.css({"ms-touch-action":n,"touch-action":n})},u=function(s,n){var r="li:has("+n.popUpSelector+")";e.fn.hoverIntent&&!n.disableHI?s.hoverIntent(c,f,r):s.on("mouseenter.superfish",r,c).on("mouseleave.superfish",r,f);var a="MSPointerDown.superfish";i&&(a="pointerdown.superfish"),o||(a+=" touchend.superfish"),t&&(a+=" mousedown.superfish"),s.on("focusin.superfish","li",c).on("focusout.superfish","li",f).on(a,"a",n,p)},p=function(s){var n=e(this),o=n.siblings(s.data.popUpSelector);o.length>0&&o.is(":hidden")&&(n.one("click.superfish",!1),"MSPointerDown"===s.type||"pointerdown"===s.type?n.trigger("focus"):e.proxy(c,n.parent("li"))())},c=function(){var s=e(this),n=m(s);clearTimeout(n.sfTimer),s.siblings().superfish("hide").end().superfish("show")},f=function(){var s=e(this),n=m(s);o?e.proxy(d,s,n)():(clearTimeout(n.sfTimer),n.sfTimer=setTimeout(e.proxy(d,s,n),n.delay))},d=function(s){s.retainPath=e.inArray(this[0],s.$path)>-1,this.superfish("hide"),this.parents("."+s.hoverClass).length||(s.onIdle.call(v(this)),s.$path.length&&e.proxy(c,s.$path)())},v=function(e){return e.closest("."+n.menuClass)},m=function(e){return v(e).data("sf-options")};return{hide:function(s){if(this.length){var n=this,o=m(n);if(!o)return this;var t=o.retainPath===!0?o.$path:"",i=n.find("li."+o.hoverClass).add(this).not(t).removeClass(o.hoverClass).children(o.popUpSelector),r=o.speedOut;s&&(i.show(),r=0),o.retainPath=!1,o.onBeforeHide.call(i),i.stop(!0,!0).animate(o.animationOut,r,function(){var s=e(this);o.onHide.call(s)})}return this},show:function(){var e=m(this);if(!e)return this;var s=this.addClass(e.hoverClass),n=s.children(e.popUpSelector);return e.onBeforeShow.call(n),n.stop(!0,!0).animate(e.animation,e.speed,function(){e.onShow.call(n)}),this},destroy:function(){return this.each(function(){var s,o=e(this),t=o.data("sf-options");return t?(s=o.find(t.popUpSelector).parent("li"),clearTimeout(t.sfTimer),r(o,t),l(s),h(o),o.off(".superfish").off(".hoverIntent"),s.children(t.popUpSelector).attr("style",function(e,s){return s.replace(/display[^;]+;?/g,"")}),t.$path.removeClass(t.hoverClass+" "+n.bcClass).addClass(t.pathClass),o.find("."+t.hoverClass).removeClass(t.hoverClass),t.onDestroy.call(o),o.removeData("sf-options"),void 0):!1})},init:function(s){return this.each(function(){var o=e(this);if(o.data("sf-options"))return!1;var t=e.extend({},e.fn.superfish.defaults,s),i=o.find(t.popUpSelector).parent("li");t.$path=a(o,t),o.data("sf-options",t),r(o,t),l(i),h(o),u(o,t),i.not("."+n.bcClass).superfish("hide",!0),t.onInit.call(this)})}}}();e.fn.superfish=function(s){return n[s]?n[s].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof s&&s?e.error("Method "+s+" does not exist on jQuery.fn.superfish"):n.init.apply(this,arguments)},e.fn.superfish.defaults={popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:!0,disableHI:!1,onInit:e.noop,onBeforeShow:e.noop,onShow:e.noop,onBeforeHide:e.noop,onHide:e.noop,onIdle:e.noop,onDestroy:e.noop}})(jQuery,window);


/***************************************************
			SuperFish Menu
***************************************************/
jQuery.noConflict()(function($){
		"use strict";
		$('ul.sf-menu').superfish({
			delay: 500,
			autoArrows: false,
			dropShadows: false,
			hoverClass:    'sfhover',
  			animation:     {opacity: "show", marginTop: "0"},
   			animationOut:  {opacity: "hide", marginTop: "20"}
   	});
});

jQuery.noConflict()(function($){
	"use strict";
	$(document).ready(function() {

		$('p:empty').remove();
		$('.sf-menu').css({'display':'block'});

		$('.search-block > i').click( function() {
			$('.inner-search').animate( { opacity: 'toggle' } );
		});

		var ctel = document.getElementById('ctel');
		var parallax = new Parallax( ctel );
		var ctel2 = document.getElementById('ctel2');
		var parallax = new Parallax( ctel2 );
		var ctel3 = document.getElementById('ctel3');
		var parallax = new Parallax( ctel3 );
		var ctel4 = document.getElementById('ctel4');
		var parallax = new Parallax( ctel4 );
		var copyright = document.getElementById('copyright');
		var parallax = new Parallax( copyright );

		// Custom scripts
		var ct_script_pretty = ct_pretty.script_pretty;

		if ( ct_script_pretty == '1' ) {
			// Load Pretty Photo
			$('a[data-rel]').each(function() {
				$(this).attr('rel', $(this).data('rel'));
			});

			$("a[rel^='prettyPhoto']").prettyPhoto({
				animationSpeed: 'normal', /* fast/slow/normal */
				opacity: 0.80, /* Value between 0 and 1 */
				showTitle: false, /* true/false */
				theme:'light_square',
				deeplinking: false
			});
		} // Load Pretty Photo


		// Scroll To Top
	    $(window).scroll(function(){
	      if ($(this).scrollTop() > 100) {
	        $('.ct-totop').fadeIn();
	      } else {
	        $('.ct-totop').fadeOut();
	      }
	    });

	    $('.ct-totop').click(function(){
	      $("html, body").animate({ scrollTop: 0 }, 600);
	      return false;
	    });

	    // Menu to Select
		$("<select />").appendTo(".navigation");
		$("<option />",{
			"selected":"selected",
			"value":"",
			"text": "MENU"
		}).appendTo(".navigation select");
		$(".navigation li a").each(function() {
			var el = $(this);
			$("<option />",{
				"value":el.attr("href"),
				"class":"select_option",
				"text":el.text()
			}).appendTo(".navigation select");
		});
		$(".navigation select").change(function() {
			window.location = $(this).find("option:selected").val();
		});

		function scroll_document(){

		    var document_height = $(document).height();
		    var scroll_so_far = $(window).scrollTop();
		    var window_height = $(window).height();

			var max_scroll = document_height-window_height;

			var scroll_percentage = scroll_so_far/(max_scroll/100);

		    $('#loading-bar').width(scroll_percentage + '%');

		}

		$(window).scroll(function() {
			scroll_document();
		});

		$(window).resize(function() {
			scroll_document();
		});

	});
});