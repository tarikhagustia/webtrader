define(["exports","jquery","../windows/windows","../websockets/binary_websockets","webtrader-charts","highstock-release/modules/offline-exporting","common/util"],function(a,b,c,d,e){"use strict";function f(a){return a&&a.__esModule?a:{"default":a}}Object.defineProperty(a,"__esModule",{value:!0}),a.addNewWindow=void 0;var g=f(b),h=f(c),i=f(d),j=f(e),k=local_storage.get("config");j["default"].init({appId:i["default"].app_id,lang:"en",server:k?k.websocket_url:"wss://frontend.binaryws.com/websockets/v3"});var l=a.addNewWindow=function(a){var b=a,c=g["default"]("<div/>");a=g["default"].extend({title:a.instrumentName,relativePosition:!0,close:function(){e.actions.destroy(),g["default"](this).dialog("destroy").remove()},resize:function(){return e&&e.actions.reflow()},refresh:function(){return e.actions.refresh()},open:function(){g["default"](this);g["default"](this).parent().promise().done(function(){return e.actions.reflow()})}},a);var d=h["default"].createBlankWindow(c,a),e=j["default"].chartWindow.addNewChart(c,b);e.actions.reflow();var f=d.track({module_id:"chartWindow",is_unique:!1,data:e.data()});return e.events.anyChange=function(){return f(e.data())},d.dialog("open"),d};a["default"]={addNewWindow:l}});