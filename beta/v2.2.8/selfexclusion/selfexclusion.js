define(["exports","jquery","windows/windows","websockets/binary_websockets","lodash","common/rivetsExtra","moment","text!selfexclusion/selfexclusion.html","accountstatus/accountstatus","jquery-growl","common/util"],function(a,b,c,d,e,f,g,h,i){"use strict";function j(a){return a&&a.__esModule?a:{"default":a}}function k(){var a=local_storage.get("authorize");x.exclude_until?q["default"].utc(x.exclude_until,"YYYY-MM-DD").isAfter(q["default"].utc().startOf("day"))&&(local_storage.set("excluded",!0),s["default"].recheckStatus(a),o["default"].defer(function(){l["default"].growl.error({message:"You have excluded yourself until ".i18n()+x.exclude_until})})):x.timeout_until?q["default"].unix(x.timeout_until).isAfter(q["default"]().unix().valueOf())&&(local_storage.set("excluded",!0),s["default"].recheckStatus(a),l["default"].growl.error({message:"You have excluded yourself until ".i18n()+q["default"].unix(x.timeout_until).utc().format("YYYY-MM-DD HH:mm")+"GMT"})):(local_storage.set("excluded",!1),s["default"].recheckStatus(a))}Object.defineProperty(a,"__esModule",{value:!0}),a.init=void 0;var l=j(b),m=j(c),n=j(d),o=j(e),p=j(f),q=j(g),r=j(h),s=j(i),t=null,u=null,v=null,w={max_balance:{limit:1e20,set:!1,name:"Maximum balance".i18n()},max_turnover:{limit:1e20,set:!1,name:"Daily turnover limit".i18n()},max_losses:{limit:1e20,set:!1,name:"Daily limit on losses".i18n()},max_7day_turnover:{limit:1e20,set:!1,name:"7-day turnover limit".i18n()},max_7day_losses:{limit:1e20,set:!1,name:"7-day limit on losses".i18n()},max_30day_turnover:{limit:1e20,set:!1,name:"30-day turnover limit".i18n()},max_30day_losses:{limit:1e20,set:!1,name:"30-day limit on losses".i18n()},max_open_bets:{limit:101,set:!1,name:"Maximum open positions".i18n()},session_duration_limit:{limit:60480,set:!1,name:"Session duration limit".i18n()},exclude_until:{limit:null,set:!1,name:"Exclude time".i18n()},timeout_until:{limit:null,set:!1,name:"Time out until".i18n()}},x={max_balance:null,max_turnover:null,max_losses:null,max_7day_turnover:null,max_7day_losses:null,max_30day_turnover:null,max_30day_losses:null,max_open_bets:null,session_duration_limit:null,exclude_until:null,timeout_until_date:null,timeout_until_time:null,binary_url_contact:getBinaryUrl("contact.html"),trimString:function(a,b){var c=l["default"](a.target),d=currencyFractionalDigits(),e=(c.attr("maxlength"),new RegExp("[\\d]{0,20}(\\.[\\d]{1,"+d+"})?","g")),f=(c.val().toString().match(e)||[])[0],g=c.attr("rv-value");b[g]=f},update:function(a,b){var c={set_self_exclusion:1},d=[];if(b.timeout_until_date){var e=q["default"](b.timeout_until_date);if(b.timeout_until_time){var f=q["default"](b.timeout_until_time,"HH:mm");e.add(f.format("HH"),"hours").add(f.format("mm"),"minutes")}e.isAfter(q["default"]().add(6,"weeks"))&&d.push("Please enter a value less than 6 weeks for time out until.".i18n()),e.isAfter(q["default"]())||d.push("Exclude time must be after today.".i18n()),b.timeout_until=e.unix()}else b.timeout_until_time&&d.push("Please select a date for time out until.".i18n());if(l["default"].each(w,function(a,e){if(b[a]=b[a]&&b[a].toString(),b[a]||e.set){if("exclude_until"===a){if(q["default"].utc(b.exclude_until,"YYYY-MM-DD").isBefore(q["default"].utc().startOf("day").add(6,"months")))return void d.push("Exclude until time cannot be less than 6 months.".i18n());if(q["default"].utc(b.exclude_until,"YYYY-MM-DD").isAfter(q["default"].utc().startOf("day").add(5,"years")))return void d.push("Exclude until time cannot be more than 5 years.".i18n())}if(b[a]&&-1!==b[a].indexOf("e"))return void d.push("Please enter a valid value for ".i18n()+e.name);if(!b[a]||b[a]<=0||e.limit&&b[a]>e.limit)return void d.push("Please enter a value between 0 and ".i18n()+e.limit+" for ".i18n()+e.name);c[a]=b[a]}else b[a]=void 0}),d.length>0)return void d.forEach(function(a){l["default"].growl.error({message:a})});if(c.timeout_until||c.exclude_until){var g=window.confirm('When you click "Ok" you will be excluded from trading on the site until the selected date.'.i18n());if(0==g)return}n["default"].send(c).then(function(){l["default"].growl.notice({message:"Your changes have been updated".i18n()}),k(),A()})["catch"](function(a){l["default"].growl.error({message:a.message})})}},y=function(){return require(["css!selfexclusion/selfexclusion.css"]),new Promise(function(a){var b=l["default"](r["default"]).i18n();b.find(".datepicker").datepicker({dateFormat:"yy-mm-dd",minDate:q["default"].utc().toDate(),maxDate:q["default"].utc().add(6,"weeks").toDate()}),b.find(".timepicker").timepicker({timeFormat:"HH:MM"}),t=m["default"].createBlankWindow(l["default"]("<div/>"),{title:"Self-Exclusion Facilities".i18n(),width:900,minHeight:500,height:500,"data-authorized":"true",destroy:function(){t=null}}),b.appendTo(t),p["default"].bind(b[0],x),z(),a()})},z=function(){return l["default"].growl.notice({message:"Loading self-exclusion settings.".i18n()}),n["default"].send({get_self_exclusion:1}).then(function(a){a.get_self_exclusion&&(l["default"].each(w,function(b){x[b]=a.get_self_exclusion[b],a.get_self_exclusion[b]&&(w[b].limit=a.get_self_exclusion[b],w[b].set=!0)}),k())})["catch"](function(a){l["default"].growl.error({message:a.message})})},A=function(){if(!o["default"].isUndefined(x.session_duration_limit)&&!o["default"].isNull(x.session_duration_limit)&&o["default"].isFinite(o["default"].toNumber(x.session_duration_limit))){u&&clearTimeout(u);var a=60*x.session_duration_limit*1e3;a-=o["default"].now()-v,a>Math.pow(2,32)&&(a=Math.pow(2,32)),u=setTimeout(function(){l["default"].growl.warning({message:"Logging out because of self-exclusion session time out!".i18n()}),n["default"].invalidate()},a)}},B=function(){t&&t.dialog("destroy"),t=null,u&&clearTimeout(u),u=null,v=null,x.max_balance=null,x.max_turnover=null,x.max_losses=null,x.max_7day_turnover=null,x.max_7day_losses=null,x.max_30day_turnover=null,x.max_30day_losses=null,x.max_open_bets=null,x.session_duration_limit=null,x.exclude_until=null,l["default"](".resources a.selfexclusion").addClass("disabled")};n["default"].events.on("login",function(){n["default"].cached.authorize().then(function(a){a.authorize.is_virtual?B():(v=o["default"].now(),z().then(function(){A()}),l["default"]("#nav-menu a.selfexclusion").removeClass("disabled"))})["catch"](function(){B()})}),n["default"].events.on("logout",B);var C=a.init=function(a){a.click(function(){l["default"](this).hasClass("disabled")||n["default"].cached.authorize().then(function(){t?(z(),t.moveToTop()):y().then(function(){t.dialog("open")})})["catch"](function(a){})})};a["default"]={init:C}});