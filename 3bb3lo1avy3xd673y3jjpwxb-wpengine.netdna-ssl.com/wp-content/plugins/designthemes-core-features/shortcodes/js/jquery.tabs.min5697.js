/*
 jQuery Tools 1.2.5 Tabs- The basics of UI design.
 NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 http://flowplayer.org/tools/tabs/
 Since: November 2008
 Date:    Wed Sep 22 06:02:10 2010 +0000 
*/
(function(c){function p(d,b,a){var e=this,l=d.add(this),h=d.find(a.tabs),i=b.jquery?b:d.children(b),j;h.length||(h=d.children());i.length||(i=d.parent().find(b));i.length||(i=c(b));c.extend(this,{click:function(f,g){var k=h.eq(f);if(typeof f=="string"&&f.replace("#","")){k=h.filter("[href*="+f.replace("#","")+"]");f=Math.max(h.index(k),0)}if(a.rotate){var n=h.length-1;if(f<0)return e.click(n,g);if(f>n)return e.click(0,g)}if(!k.length){if(j>=0)return e;f=a.initialIndex;k=h.eq(f)}if(f===j)return e;
g=g||c.Event();g.type="onBeforeClick";l.trigger(g,[f]);if(!g.isDefaultPrevented()){o[a.effect].call(e,f,function(){g.type="onClick";l.trigger(g,[f])});j=f;h.removeClass(a.current);k.addClass(a.current);return e}},getConf:function(){return a},getTabs:function(){return h},getPanes:function(){return i},getCurrentPane:function(){return i.eq(j)},getCurrentTab:function(){return h.eq(j)},getIndex:function(){return j},next:function(){return e.click(j+1)},prev:function(){return e.click(j-1)},destroy:function(){h.unbind(a.event).removeClass(a.current);
i.find('a[href^="#"]').unbind("click.T");return e}});c.each("onBeforeClick,onClick".split(","),function(f,g){c.isFunction(a[g])&&c(e).bind(g,a[g]);e[g]=function(k){k&&c(e).bind(g,k);return e}});if(a.history&&c.fn.history){c.tools.history.init(h);a.event="history"}h.each(function(f){c(this).bind(a.event,function(g){e.click(f,g);return g.preventDefault()})});i.find('a[href^="#"]').bind("click.T",function(f){e.click(c(this).attr("href"),f)});if(location.hash&&a.tabs=="a"&&d.find("[href="+location.hash+"]").length)e.click(location.hash);
else if(a.initialIndex===0||a.initialIndex>0)e.click(a.initialIndex)}c.tools=c.tools||{version:"1.2.5"};c.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialIndex:0,event:"click",rotate:false,history:false},addEffect:function(d,b){o[d]=b}};var o={"default":function(d,b){this.getPanes().hide().eq(d).show();b.call()},fade:function(d,b){var a=this.getConf(),e=a.fadeOutSpeed,l=this.getPanes();e?l.fadeOut(e):l.hide();l.eq(d).fadeIn(a.fadeInSpeed,b)},slide:function(d,
b){this.getPanes().slideUp(200);this.getPanes().eq(d).slideDown(400,b)},ajax:function(d,b){this.getPanes().eq(0).load(this.getTabs().eq(d).attr("href"),b)}},m;c.tools.tabs.addEffect("horizontal",function(d,b){m||(m=this.getPanes().eq(0).width());this.getCurrentPane().animate({width:0},function(){c(this).hide()});this.getPanes().eq(d).animate({width:m},function(){c(this).show();b.call()})});c.fn.fpTabs=function(d,b){var a=this.data("tabs");if(a){a.destroy();this.removeData("tabs")}if(c.isFunction(b))b=
{onBeforeClick:b};b=c.extend({},c.tools.tabs.conf,b);this.each(function(){a=new p(c(this),d,b);c(this).data("tabs",a)});return b.api?a:this}})(jQuery);
(function(c){var a;a=c.tools.tabs.slideshow={conf:{next:".forward",prev:".backward",disabledClass:"disabled",autoplay:false,autopause:true,interval:3000,clickable:true,api:false}};function b(k,i){var o=this,f=k.add(this),j=k.data("tabs"),e,d=true;function h(q){var p=c(q);return p.length<2?p:k.parent().find(q)}var n=h(i.next).click(function(){j.next()});var l=h(i.prev).click(function(){j.prev()});c.extend(o,{getTabs:function(){return j},getConf:function(){return i},play:function(){if(e){return o}var p=c.Event("onBeforePlay");f.trigger(p);if(p.isDefaultPrevented()){return o}m();d=false;f.trigger("onPlay");return o},pause:function(){if(!e){return o}var p=c.Event("onBeforePause");f.trigger(p);if(p.isDefaultPrevented()){return o}e=clearTimeout(e);f.trigger("onPause");return o},stop:function(){o.pause();d=true}});function m(){e=setTimeout(j.next,i.interval);j.onClick(function(p){if(p.originalEvent==null){e=clearTimeout(e);e=setTimeout(j.next,i.interval)}})}c.each("onBeforePlay,onPlay,onBeforePause,onPause".split(","),function(q,p){if(c.isFunction(i[p])){c(o).bind(p,i[p])}o[p]=function(r){return c(o).bind(p,r)}});if(i.autopause){j.getTabs().add(n).add(l).add(j.getPanes()).hover(o.pause,function(){if(!d){o.play()}})}if(i.autoplay){o.play()}if(i.clickable){j.getPanes().click(function(){j.next()})}if(!j.getConf().rotate){var g=i.disabledClass;if(!j.getIndex()){l.addClass(g)}j.onBeforeClick(function(q,p){l.toggleClass(g,!p);n.toggleClass(g,p==j.getTabs().length-1)})}}c.fn.slideshow=function(d){var e=this.data("slideshow");if(e){return e}d=c.extend({},a.conf,d);this.each(function(){e=new b(c(this),d);c(this).data("slideshow",e)});return d.api?e:this}})(jQuery);

/**
 * debouncedresize: special jQuery event that happens once after a window resize
 *
 * latest version and complete README available on Github:
 * https://github.com/louisremi/jquery-smartresize
 *
 * Copyright 2012 @louis_remi
 * Licensed under the MIT license.
 *
 * This saved you an hour of work? 
 * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
 */
(function(e){var t=e.event,n,r;n=t.special.debouncedresize={setup:function(){e(this).on("resize",n.handler)},teardown:function(){e(this).off("resize",n.handler)},handler:function(e,i){var s=this,o=arguments,u=function(){e.type="debouncedresize";t.dispatch.apply(s,o)};if(r){clearTimeout(r)}i?u():r=setTimeout(u,n.threshold)},threshold:150}})(jQuery);