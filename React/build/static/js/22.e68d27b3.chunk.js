"use strict";(self.webpackChunkcapacitor_sample_app=self.webpackChunkcapacitor_sample_app||[]).push([[22],{5022:function(t,e,n){n.r(e),n.d(e,{createSwipeBackGesture:function(){return u}});var r=n(1811),a=n(9507),i=n(7909),u=function(t,e,n,u,c){var o=t.ownerDocument.defaultView,s=(0,a.i)(t),f=function(t){return s?-t.deltaX:t.deltaX};return(0,i.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return function(t){var e=t.startX;return s?e>=o.innerWidth-50:e<=50}(t)&&e()},onStart:n,onMove:function(t){var e=f(t)/o.innerWidth;u(e)},onEnd:function(t){var e=f(t),n=o.innerWidth,a=e/n,i=function(t){return s?-t.velocityX:t.velocityX}(t),u=i>=0&&(i>.2||e>n/2),p=(u?1-a:a)*n,h=0;if(p>5){var l=p/Math.abs(i);h=Math.min(l,540)}c(u,a<=0?.01:(0,r.h)(0,a,.9999),h)}})}}}]);
//# sourceMappingURL=22.e68d27b3.chunk.js.map