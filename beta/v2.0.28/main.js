requirejs.config({baseUrl:".",paths:{jquery:"lib/jquery/dist/jquery.min","jquery-ui":"lib/jquery-ui/jquery-ui.min",highstock:"lib/highstock/highstock","highcharts-more":"lib/highstock/highcharts-more","highcharts-exporting":"lib/highstock/modules/offline-exporting","jquery.dialogextend":"lib/binary-com-jquery-dialogextended/jquery.dialogextend.min","jquery-growl":"lib/growl/javascripts/jquery.growl","jquery-validation":"lib/jquery-validation/dist/jquery.validate.min",modernizr:"lib/modernizr/modernizr",lokijs:"lib/lokijs/build/lokijs.min","color-picker":"lib/colorpicker/jquery.colorpicker",datatables:"lib/datatables/media/js/jquery.dataTables.min","datatables-jquery-ui":"lib/datatables/media/js/dataTables.jqueryui.min",currentPriceIndicator:"charts/indicators/highcharts_custom/currentprice","es6-promise":"lib/es6-promise/promise.min",rivets:"lib/rivets/dist/rivets.min",sightglass:"lib/sightglass/index",timepicker:"lib/binary-com-jquery-ui-timepicker/jquery.ui.timepicker","js-cookie":"lib/js-cookie/src/js.cookie",lodash:"lib/lodash/dist/lodash.min","jquery-sparkline":"lib/jquery-sparkline/dist/jquery.sparkline.min",moment:"lib/moment/min/moment.min",ddslick:"lib/ddslick/jquery.ddslick.min",indicator_levels:"charts/indicators/level"},map:{"*":{css:"lib/require-css/css.min",text:"lib/text/text.js"}},waitSeconds:0,shim:{"websockets/binary_websockets":{deps:["Promise"in window&&"reject"in window.Promise&&"all"in window.Promise?"":"es6-promise"]},timepicker:{deps:["css!lib/binary-com-jquery-ui-timepicker/jquery.ui.timepicker.css","jquery-ui","jquery"]},"jquery-ui":{deps:["jquery"]},highstock:{deps:["jquery"]},"highcharts-exporting":{deps:["highstock","lib/highstock/modules/exporting"]},"jquery-growl":{deps:["jquery"]},datatables:{deps:["jquery-ui"]},currentPriceIndicator:{deps:["highstock"]},sightglass:{exports:"sightglass"},rivets:{deps:["sightglass"],exports:"rivets"},"highcharts-more":{deps:["highstock"]}}}),require(["websockets/binary_websockets"]),require(["jquery","modernizr","common/util"],function(a){"use strict";function b(){require(["affiliates/affiliates"],function(a){a.init()})}function c(){var b=function(a){load_ondemand(a.find("a.tradingTimes"),"click","Loading Trading Times ...","tradingtimes/tradingTimes",function(b){var c=a.find("a.tradingTimes");b.init(c),c.click()}),load_ondemand(a.find("a.assetIndex"),"click","loading Asset Index ...","assetindex/assetIndex",function(b){var c=a.find("a.assetIndex");b.init(c),c.click()}),load_ondemand(a.find("a.portfolio"),"click","loading portfolio ...","portfolio/portfolio",function(b){var c=a.find("a.portfolio");b.init(c),c.click()}),load_ondemand(a.find("a.profitTable"),"click","loading Profit Table ...","profittable/profitTable",function(b){var c=a.find("a.profitTable");b.init(c),c.click()}),load_ondemand(a.find("a.statement"),"click","loading Statement Table ...","statement/statement",function(b){var c=a.find("a.statement");b.init(c),c.click()}),load_ondemand(a.find("a.download"),"click","loading Download/View Data ...","download/download",function(b){var c=a.find("a.download");b.init(c),c.click()}),load_ondemand(a.find("a.selfexclusion"),"click","loading Self-Exclusion ...","selfexclusion/selfexclusion",function(b){var c=a.find("a.selfexclusion");b.init(c),c.click()})};require(["navigation/navigation","jquery-ui"],function(c){c.init(b),a("#menu").menu(),require(["instruments/instruments","trade/tradeMenu","jquery-growl"],function(b,c){a.growl.notice({message:"Loading chart and trade menus ..."}),b.init(),c.init()}),require(["windows/windows"],function(b){var c=a("#nav-menu .windows");b.init(c),a(".sk-spinner-container").hide(),b.fixFooterPosition(),a("body > .footer").show()})})}return Modernizr.svg?(require(["jquery-ui","highstock","lokijs"]),require(["css!lib/jquery-ui/themes/smoothness/jquery-ui.min.css","css!main.css"]),require(["css!lib/growl/stylesheets/jquery.growl.css"]),"true"==getParameterByName("affiliates")?b():c(),void require(["css!lib/hamburger.css","css!charts/charts.css","css!lib/datatables/media/css/jquery.dataTables.min.css","css!lib/datatables/media/css/dataTables.jqueryui.min.css","css!lib/colorpicker/jquery.colorpicker.css"],function(){("true"===getParameterByName("gtm")||void 0===getParameterByName("gtm")||a.trim(getParameterByName("gtm")).length<=0)&&require(["gtm/gtm"],function(a){a.init()})})):void(window.location.href="unsupported_browsers.html")});