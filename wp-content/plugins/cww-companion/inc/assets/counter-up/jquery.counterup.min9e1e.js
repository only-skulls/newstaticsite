/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/
!function(t){"use strict";t.fn.counterUp=function(e){var u=t.extend({time:400,delay:10},e);return this.each(function(){var e=t(this),n=u;e.waypoint(function(){var t=[],u=n.time/n.delay,a=e.text(),r=/[0-9]+,[0-9]+/.test(a);a=a.replace(/,/g,"");/^[0-9]+$/.test(a);for(var o=/^[0-9]+\.[0-9]+$/.test(a),c=o?(a.split(".")[1]||[]).length:0,s=u;s>=1;s--){var d=parseInt(a/u*s);if(o&&(d=parseFloat(a/u*s).toFixed(c)),r)for(;/(\d+)(\d{3})/.test(d.toString());)d=d.toString().replace(/(\d+)(\d{3})/,"$1,$2");t.unshift(d)}e.data("counterup-nums",t),e.text("0");e.data("counterup-func",function(){e.data("counterup-nums")&&(e.text(e.data("counterup-nums").shift()),e.data("counterup-nums").length?setTimeout(e.data("counterup-func"),n.delay):(e.data("counterup-nums"),e.data("counterup-nums",null),e.data("counterup-func",null)))}),setTimeout(e.data("counterup-func"),n.delay),this.destroy()},{offset:"100%"})})}}(jQuery);