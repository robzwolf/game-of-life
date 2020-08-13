if (self.CavalryLogger) { CavalryLogger.start_js(["\/\/7Kp"]); }

__d("CookieConsentBlacklistedHrefs",[],(function(a,b,c,d,e,f){e.exports={hrefs:["/about/basics","/privacy/explanation","/ads/settings","/help/111814505650678","/help/1561485474074139","/help/568137493302217","/help/769828729705201","/help/cookies","/policies/cookies","/policy/cookies"]}}),null);
__d("PixelRatioConst",[],(function(a,b,c,d,e,f){e.exports={cookieName:"dpr"}}),null);
__d("DesktopHscrollUnitEventConstants",[],(function(a,b,c,d,e,f){e.exports={HSCROLL_ITEM_INSERTED_EVENT:"DesktopHScrollUnit/itemInserted",HSCROLL_ITEM_SHOWN_EVENT:"DesktopHScrollUnit/itemShown",HSCROLL_ITEM_HIDE_EVENT:"DesktopHScrollUnit/HideIndividualItem",HSCROLL_ITEM_SCROLL_BEFORE_XOUT_EVENT:"DesktopHScrollUnit/scrollItemBeforeXout",HSCROLL_ITEM_UNHIDE_EVENT:"DesktopHScrollUnit/unhideIndividualItem",HSCROLL_LAST_ITEM_NFX_ACTION_TAKEN:"logLastAdXout",HSCROLL_PAGER_ITEM_HIDE_EVENT:"onXoutIndividualItem"}}),null);
__d("BusinessURI.brands",["BizSiteIdentifier.brands","URI","isFacebookURI"],(function(a,b,c,d,e,f){__p&&__p();var g,h=function(c){"use strict";__p&&__p();babelHelpers.inheritsLoose(a,c);function a(a,d){a=c.call(this,a)||this;if(b("BizSiteIdentifier.brands").isBizSite()){d=d||b("BizSiteIdentifier.brands").getBusinessID();d&&a.addQueryData("business_id",d);a.$BusinessURI1(a.getSubdomain())||a.setSubdomain("business")}if(!b("isFacebookURI")(babelHelpers.assertThisInitialized(a)))throw new Error("Business URI must be FB URI");return babelHelpers.assertThisInitialized(a)||babelHelpers.assertThisInitialized(a)}var d=a.prototype;d.$BusinessURI1=function(a){return a==="developers"};return a}(g||b("URI"));a=function(a,b){return new h(a,b)};a.BusinessURI=h;e.exports=a}),null);
__d("EntstreamFeedObject",["csx","CSS","Parent"],(function(a,b,c,d,e,f,g){var h={getRoot:function(a){return b("Parent").bySelector(a,"._5jmm")},getHscrollOuterRootIfAvailable:function(a){a=a;b("CSS").matchesSelector(a,"._170y")&&(a=h.getRoot(a.parentNode));return a}};e.exports=h}),null);
__d("HelpLiteFlyoutBootloader",["regeneratorRuntime","Deferred","JSResource"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=!1,h=null,i=null,j={loadFlyout:function(){return b("regeneratorRuntime").async(function(a){while(1)switch(a.prev=a.next){case 0:j.loadFlyoutWithHelpType(null);case 1:case"end":return a.stop()}},null,this)},loadFlyoutWithHelpType:function(a){__p&&__p();var c,d,e,f;return b("regeneratorRuntime").async(function(h){__p&&__p();while(1)switch(h.prev=h.next){case 0:h.next=2;return b("regeneratorRuntime").awrap(b("JSResource")("HelpLiteFlyout").__setRef("HelpLiteFlyoutBootloader").load());case 2:c=h.sent;if(!g){h.next=6;break}c.refreshHelp();return h.abrupt("return");case 6:g=!0;a&&j.setHelpType(a);h.next=10;return b("regeneratorRuntime").awrap(this._getDeferredFlyoutElements().getPromise());case 10:d=h.sent,e=d.flyout,f=d.flyoutRoot,c.registerFlyoutToggler(e,f),c.loadBody();case 15:case"end":return h.stop()}},null,this)},setHelpType:function(a){i=a},getHelpType:function(){return i},_getDeferredFlyoutElements:function(){h==null&&(h=new(b("Deferred"))());return h},registerFlyoutElements:function(a,b){this._getDeferredFlyoutElements().resolve({flyout:a,flyoutRoot:b})}};e.exports=j}),null);
__d("PageHooks",["Arbiter","ErrorUtils","InitialJSLoader","PageEvents"],(function(a,b,c,d,e,f){__p&&__p();var g;f={DOMREADY_HOOK:"domreadyhooks",ONLOAD_HOOK:"onloadhooks"};function h(){var c=a.CavalryLogger;!window.domready&&c&&c.getInstance().setTimeStamp("t_prehooks");k(l.DOMREADY_HOOK);!window.domready&&c&&c.getInstance().setTimeStamp("t_hooks");window.domready=!0;b("Arbiter").inform("uipage_onload",!0,"state")}function i(){k(l.ONLOAD_HOOK),window.loaded=!0}function j(a,c){return(g||(g=b("ErrorUtils"))).applyWithGuard(a,null,null,function(a){a.event_type=c,a.category="runhook"},"PageHooks:"+c)}function k(a){__p&&__p();var b=a=="onbeforeleavehooks"||a=="onbeforeunloadhooks";do{var c=window[a];if(!c)break;b||(window[a]=null);for(var d=0;d<c.length;d++){var e=j(c[d],a);if(b&&e)return e}}while(!b&&window[a])}function c(){window.domready||(window.domready=!0,k("onloadhooks")),window.loaded||(window.loaded=!0,k("onafterloadhooks"))}function d(){var a,c;(a=b("Arbiter")).registerCallback(h,[(c=b("PageEvents")).BIGPIPE_DOMREADY,b("InitialJSLoader").INITIAL_JS_READY]);a.registerCallback(i,[c.BIGPIPE_DOMREADY,c.BIGPIPE_ONLOAD,b("InitialJSLoader").INITIAL_JS_READY]);a.subscribe(c.NATIVE_ONBEFOREUNLOAD,function(a,b){b.warn=k("onbeforeleavehooks")||k("onbeforeunloadhooks"),b.warn||(window.domready=!1,window.loaded=!1)},"new");a.subscribe(c.NATIVE_ONUNLOAD,function(a,b){k("onunloadhooks"),k("onafterunloadhooks")},"new")}var l=babelHelpers["extends"]({_domreadyHook:h,_onloadHook:i,runHook:j,runHooks:k,keepWindowSetAsLoaded:c},f);d();a.PageHooks=e.exports=l}),null);
__d("legacy:onload-action",["PageHooks"],(function(a,b,c,d,e,f){a._domreadyHook=(c=b("PageHooks"))._domreadyHook;a._onloadHook=c._onloadHook;a.runHook=c.runHook;a.runHooks=c.runHooks;a.keep_window_set_as_loaded=c.keepWindowSetAsLoaded}),3);
__d("FlipDirection",["DOM","Input","Style"],(function(a,b,c,d,e,f){__p&&__p();a={setDirection:function(a,c,d){__p&&__p();c===void 0&&(c=5);d===void 0&&(d=!1);var e=b("DOM").isNodeOfType(a,"input")&&a.type=="text",f=b("DOM").isNodeOfType(a,"textarea");if(!(e||f)||a.getAttribute("data-prevent-auto-flip"))return;e=b("Input").getValue(a);f=a.style&&a.style.direction;if(!f||d){f=0;d=!0;for(var g=0;g<e.length;g++){var h=e.charCodeAt(g);if(h>=48){d&&(d=!1,f++);if(h>=1470&&h<=1920){b("Style").set(a,"direction","rtl");a.setAttribute("dir","rtl");return}if(f==c){b("Style").set(a,"direction","ltr");a.setAttribute("dir","ltr");return}}else d=!0}}else e.length===0&&(b("Style").set(a,"direction",""),a.removeAttribute("dir"))}};e.exports=a}),null);
__d("FlipDirectionOnKeypress",["Event","FlipDirection"],(function(a,b,c,d,e,f){a=function(a){a=a.getTarget();b("FlipDirection").setDirection(a)};b("Event").listen(document.documentElement,{keyup:a,input:a})}),null);
__d("LitestandMessages",[],(function(a,b,c,d,e,f){a=Object.freeze({NEWSFEED_LOAD:"LitestandMessages/NewsFeedLoad",LEAVE_HOME:"LitestandMessages/LeaveHome",STORIES_REQUESTED:"LitestandMessages/StoriesRequested",STORIES_INSERTED:"LitestandMessages/StoriesInserted",NEWER_STORIES_REQUESTED:"LitestandMessages/NewerStoriesRequested",NEWER_STORIES_INSERTED:"LitestandMessages/NewerStoriesInserted",NEW_STORIES_CONTAINER_CREATED:"LitestandMessages/NewStoriesContainer",RHC_RELOADED:"LitestandMessages/RHCReloaded",STREAM_LOAD_ERROR:"LitestandMessages/StreamLoadError",DUPLICATE_CURSOR_ERROR:"LitestandMessages/DuplicateCursorError",STREAM_LOAD_RETRY:"LitestandMessages/StreamLoadRetry"});e.exports=a}),null);
__d("Nectar",["Env","getContextualParent"],(function(a,b,c,d,e,f){__p&&__p();var g;function h(a){a.nctr||(a.nctr={})}function i(a){__p&&__p();if((g||(g=b("Env"))).module||!a)return(g||(g=b("Env"))).module;var c={fbpage_fan_confirm:!0,photos_snowlift:!0},d;while(a&&a.getAttribute){var e=a.getAttribute("id");if(e!=null&&e.startsWith("pagelet_"))return e;!d&&c[e]&&(d=e);a=b("getContextualParent")(a)}return d}a={addModuleData:function(a,b){b=i(b);b&&(h(a),a.nctr._mod=b)},addImpressionID:function(a){(g||(g=b("Env"))).impid&&(h(a),a.nctr._impid=(g||(g=b("Env"))).impid)}};e.exports=a}),null);
__d("FBEngagementWhiteopsFraudSensorTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:FBEngagementWhiteopsFraudSensorLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:FBEngagementWhiteopsFraudSensorLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:FBEngagementWhiteopsFraudSensorLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setInstanceID=function(a){this.$1.instance_id=a;return this};c.setPageID=function(a){this.$1.page_id=a;return this};c.setPostID=function(a){this.$1.post_id=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setTqBotDetectionProductEnum=function(a){this.$1.tq_bot_detection_product_enum=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={instance_id:!0,page_id:!0,post_id:!0,time:!0,tq_bot_detection_product_enum:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("AsyncRequestNectarLogging",["AsyncRequest","Nectar"],(function(a,b,c,d,e,f){Object.assign(b("AsyncRequest").prototype,{setNectarModuleData:function(a){this.method=="POST"&&b("Nectar").addModuleData(this.data,a)}})}),null);
__d("Ease",[],(function(a,b,c,d,e,f){__p&&__p();var g={makePowerOut:function(a){var b=g.makePowerIn(a);return function(a){return 1-b(1-a)}},makePowerIn:function(a){return function(b){b=Math.pow(b,a);return(b*1e4|0)/1e4}},makePowerInOut:function(a){var b=g.makePowerIn(a),c=g.makePowerOut(a);return function(a){return a<.5?.5*b(a*2):.5*c(a*2-1)+.5}},expoOut:function(a){return 1-Math.pow(2,-10*a)},expoIn:function(a){return 1-g.expoOut(1-a)},expoInOut:function(a){return a<.5?.5*g.expoIn(a*2):.5*g.expoOut(a*2-1)+.5},sineOut:function(a){return Math.sin(a*Math.PI*.5)},sineIn:function(a){return 1-Math.cos(a*Math.PI*.5)},sineInOut:function(a){return-.5*(Math.cos(Math.PI*a)-1)},circOut:function(a){a--;return Math.sqrt(1-a*a)},circIn:function(a){return 1-g.circOut(1-a)},circInOut:function(a){return a<.5?.5*g.circIn(a*2):.5*g.circOut(a*2-1)+.5},bounceOut:function(a){if(a<1/2.75)return 7.5625*a*a;else if(a<2/2.75)return 7.5625*(a-=1.5/2.75)*a+.75;else if(a<2.5/2.75)return 7.5625*(a-=2.25/2.75)*a+.9375;else return 7.5625*(a-=2.625/2.75)*a+.984375},bounceIn:function(a){return 1-g.bounceOut(1-a)},bounceInOut:function(a){return a<.5?.5*g.bounceIn(a*2):.5*g.bounceOut(a*2-1)+.5},makeBounceOut:function(a){a=a||1;return function(b){b=(1-Math.cos(b*Math.PI*a))*(1-b)+b;return 1-Math.abs(1-b)}},makeBounceIn:function(a){var b=g.makeBounceOut(a);return function(a){return 1-b(1-a)}},makeElasticOut:function(a,b){a<1&&(a=1);var c=Math.PI*2;return function(d){if(d===0||d===1)return d;var e=b/c*Math.asin(1/a);return a*Math.pow(2,-10*d)*Math.sin((d-e)*c/b)+1}},makeElasticIn:function(a,b){var c=g.makeElasticOut(a,b);return function(a){return 1-c(1-a)}},makeElasticInOut:function(a,b){b*=1.5;var c=g.makeElasticIn(a,b),d=g.makeElasticOut(a,b);return function(a){return a<.5?.5*c(a*2):.5*d(a*2-1)+.5}},makeBackOut:function(a){var b=g.makeBackIn(a);return function(a){return 1-b(1-a)}},makeBackIn:function(a){return function(b){return b*b*((a+1)*b-a)}},makeBackInOut:function(a){a*=1.525;var b=g.makeBackIn(a),c=g.makeBackOut(a);return function(a){return a<.5?.5*b(a*2):.5*c(a*2-1)+.5}}};g.elasticOut=g.makeElasticOut(1,.3);g.elasticIn=g.makeElasticIn(1,.3);g.elasticInOut=g.makeElasticInOut(1,.3);g.backOut=g.makeBackOut(1.7);g.backIn=g.makeBackIn(1.7);g.backInOut=g.makeBackInOut(1.7);e.exports=g}),null);
__d("KeyboardShortcutToken",["KeyEventController"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,b,c){this.$1=!0,this.key=a,this.handler=b,this.filter=c.filter,this.persistOnTransition=c.persistOnTransition,this.shortcutInfo=c.shortcutInfo,this.register()}var c=a.prototype;c.register=function(){var a=this;if(!this.$1)return;this.token=b("KeyEventController").registerKey(this.key,this.handler,this.filter,!1,function(){return a.persistOnTransition})};c.remove=function(){this.token.remove(),this.$1=!1};c.unregister=function(){this.token.remove()};c.isActive=function(){return this.$1};c.getKey=function(){return this.key};c.getShortcutInfo=function(){return this.shortcutInfo};return a}();e.exports=a}),null);
__d("PageTransitions",["requireCond","cr:917439"],(function(a,b,c,d,e,f){e.exports=b("cr:917439")}),null);
__d("translateKey",["fbt","invariant"],(function(a,b,c,d,e,f,g,h){var i={alt:g._("alt"),enter:g._("enter"),"delete":g._("delete"),shift:g._("shift"),opt:g._("opt"),ctrl:g._("ctrl"),cmd:g._("cmd"),esc:g._("esc"),tab:g._("tab"),up:g._("up"),down:g._("down"),right:g._("right"),left:g._("left"),page_up:g._("page up"),page_down:g._("page down"),home:g._("home"),end:g._("end")};function a(a){if(Object.prototype.hasOwnProperty.call(i,a))return i[a];a.length===1||h(0,2507);return a}e.exports=a}),null);
__d("KeyboardShortcuts",["csx","cx","fbt","Arbiter","BasicFBNux","CSS","Dock","KeyboardShortcutToken","KeyEventController","Layer","ModalLayer","NavigationMessage","PageTransitions","Run","emptyFunction","translateKey"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();a={_arbiter:null,_hasTriggeredShortcut:!1,_flyoutNub:null,_nubNux:null,_nubNuxID:null,_tokenLayers:[],showInfo:b("emptyFunction"),register:function(a,c,d){__p&&__p();var e=this,f=d?d:{};d=function(a,b){c.call(e,a,b),f.allowDefault||a.prevent(),e._hasTriggeredShortcut||e._handleFirstShortcutTriggered()};var g=f.baseFilters||[b("KeyEventController").defaultFilter],h=function(a,b){__p&&__p();for(var c=g,d=Array.isArray(c),e=0,c=d?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h;if(d){if(e>=c.length)break;h=c[e++]}else{e=c.next();if(e.done)break;h=e.value}h=h;if(!h(a,b))return!1}return!f.filter||f.filter(a,b)};a=new(b("KeyboardShortcutToken"))(a,d,{filter:h,persistOnTransition:f.persistOnTransition,shortcutInfo:f.shortcutInfo});this._tokenLayers.length||this._tokenLayers.push([]);this._tokenLayers[this._tokenLayers.length-1].push(a);this.inform("token_added");return a},init:function(){__p&&__p();var a=this;this._cleanup=this._cleanup.bind(this);b("Run").onLeave(this._cleanup);b("Arbiter").subscribe(b("NavigationMessage").NAVIGATION_BEGIN,this._cleanup);b("Layer").subscribe("show",function(c,d){d.hasBehavior(b("ModalLayer"))&&a.pushLayer()});b("Layer").subscribe("hide",function(c,d){d.hasBehavior(b("ModalLayer"))&&a.popLayer()});this.register("SLASH",function(){var c=a._getFlyoutNub();c&&b("Dock").toggle(c)},{filter:function(a,b){return a.getModifiers().shift},persistOnTransition:!0,shortcutInfo:{displayKeys:[b("translateKey")("?")],description:i._("Show this help dialogue")}})},_cleanup:function(){__p&&__p();var a=this,c=[];this._tokenLayers.forEach(function(a){var b=[];a.forEach(function(a){a.isActive()&&b.push(a)});b.length&&c.push(b)});this._tokenLayers=c;this.inform("cleanup");b("PageTransitions").registerCompletionCallback(function(){b("Run").onLeave(a._cleanup),b("Arbiter").subscribe(b("NavigationMessage").NAVIGATION_BEGIN,a._cleanup)})},pushLayer:function(){var a=this._getTopLayer();a&&a.forEach(function(a){a.unregister()});this._tokenLayers.push([])},popLayer:function(){if(this._tokenLayers.length===0)return;var a=this._tokenLayers.pop();a.forEach(function(a){a.remove()});a=this._getTopLayer();a&&a.forEach(function(a){a.register()})},_getTopLayer:function(){return!this._tokenLayers.length?null:this._tokenLayers[this._tokenLayers.length-1]},_getBaseLayer:function(){return!this._tokenLayers.length?null:this._tokenLayers[0]},getShortcutInfos:function(){var a=[],b=this._getBaseLayer();b&&b.forEach(function(b){var c=b.getShortcutInfo();b.isActive()&&c!=null&&a.push(c)});return a},_getArbiterInstance:function(){this._arbiter||(this._arbiter=new(b("Arbiter"))());return this._arbiter},inform:function(a,b,c){return this._getArbiterInstance().inform(a,b,c)},subscribe:function(a,b,c){return this._getArbiterInstance().subscribe(a,b,c)},unsubscribe:function(a){this._getArbiterInstance().unsubscribe(a)},_handleFirstShortcutTriggered:function(){this._hasTriggeredShortcut=!0;var a=this._getFlyoutNub();a&&(b("CSS").removeClass(a,"_ur5"),this._nubNux&&this._nubNuxID&&(this._nubNux.show(),b("BasicFBNux").onView(this._nubNuxID),this._nubNux.subscribe("hide",b("BasicFBNux").onDismiss.bind(this,this._nubNuxID))))},_getFlyoutNub:function(){this._flyoutNub||(this._flyoutNub=document.querySelector("#pagelet_dock ._rz3"));return this._flyoutNub},showShortcutFlyout:function(){this._hasTriggeredShortcut||this._handleFirstShortcutTriggered();var a=this._getFlyoutNub();a&&b("Dock").show(a)},hasFlyoutToShow:function(){return this._getFlyoutNub()!=null&&this.getShortcutInfos().length>0},initNUXEvent:function(a,b){this._nubNux=a,this._nubNuxID=b}};a.init();e.exports=a}),null);
__d("coalesce",[],(function(a,b,c,d,e,f){function a(){for(var a=0;a<arguments.length;++a)if((a<0||arguments.length<=a?void 0:arguments[a])!=null)return a<0||arguments.length<=a?void 0:arguments[a];return null}e.exports=a}),null);
__d("OnVisible",["Arbiter","DOM","Event","Parent","Run","SubscriptionsHandler","Vector","ViewportBounds","coalesce","killswitch","queryThenMutateDOM"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[],h=0,i=[],j,k=null,l,m;function n(){g.forEach(function(a){a.remove()}),k&&(k.release(),k=null),h=0,g.length=0}function o(){__p&&__p();if(!g.length){n();return}i.length=0;j=b("Vector").getScrollPosition().y;l=b("Vector").getViewportDimensions().y;m=b("ViewportBounds").getTop();var a=g.length;for(var c=0;c<a;++c){var d=g[c];isNaN(d.elementHeight)&&i.push(c);d.elementHeight=b("Vector").getElementDimensions(d.element).y;d.elementPos=b("Vector").getElementPosition(d.element);d.hidden=b("Parent").byClass(d.element,"hidden_elem");d.scrollArea&&(d.scrollAreaHeight=b("Vector").getElementDimensions(d.scrollArea).y,d.scrollAreaY=b("Vector").getElementPosition(d.scrollArea).y)}h=a}function p(){__p&&__p();for(var a=Math.min(g.length,h)-1;a>=0;--a){var b=g[a];if(!b.elementPos||b.removed){g.splice(a,1);continue}if(b.hidden)continue;var c=b.buffer,d=!1,e=j+l+c,f=b.elementPos.y;if(e>f){var k=j+m-c,n=f+b.elementHeight;d=!b.strict||k<f&&e>n;if(d&&b.scrollArea){k=b.scrollAreaY+b.scrollAreaHeight+c;d=f>=b.scrollAreaY-c&&f<k}}(b.inverse?!d:d)&&(b.remove(),b.handler(i.indexOf(a)!==-1))}}function q(){r();if(g.length)return;k==null&&(k=new(b("SubscriptionsHandler"))(),k.addSubscriptions(b("Event").listen(window,"scroll",r),b("Event").listen(window,"resize",r),b("Arbiter").subscribe("dom-scroll",r)))}function r(){b("queryThenMutateDOM")(o,p,"OnVisible/positionCheck")}a=function(){__p&&__p();function a(a,c,d,e,f,h){this.element=a,this.handler=c,this.strict=d,this.buffer=b("coalesce")(e,300),this.inverse=b("coalesce")(f,!1),this.scrollArea=h||null,this.scrollArea&&(this.scrollAreaListener=this.$1()),g.length===0&&(b("killswitch")("ON_VISIBLE_COMPONENT_CLEANUP")?b("Run").onLeave(n):b("Run").onCleanupOrLeave(a,n)),q(),g.push(this)}var c=a.prototype;c.remove=function(){if(this.removed)return;this.removed=!0;this.scrollAreaListener&&this.scrollAreaListener.remove()};c.reset=function(){this.elementHeight=null,this.removed=!1,this.scrollArea&&(this.scrollAreaListener=this.$1()),g.indexOf(this)===-1&&g.push(this),q()};c.setBuffer=function(a){this.buffer=a,r()};c.checkBuffer=function(){r()};c.getElement=function(){return this.element};c.$1=function(){return b("Event").listen(b("DOM").find(this.scrollArea,".uiScrollableAreaWrap"),"scroll",this.checkBuffer)};return a}();Object.assign(a,{checkBuffer:r});e.exports=a}),null);
__d("WebPixelRatio",["SiteData"],(function(a,b,c,d,e,f){a={get:function(){return b("SiteData").pr!=null&&b("SiteData").pr>0?b("SiteData").pr:window.devicePixelRatio||1}};e.exports=a}),null);
__d("WebPixelRatioDetector",["Cookie","DOMEventListener","PixelRatioConst","Run"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("PixelRatioConst").cookieName,h=!1,i=!1,j=!1;function k(){return window.devicePixelRatio||1}function l(){b("Cookie").set(g,String(k()))}function m(){b("Cookie").clear(g)}function n(){if(i)return;i=!0;j&&m();k()!==1?l():m()}a={startDetecting:function(a){a&&(j=!0);if(h)return;h=!0;"onpagehide"in window&&b("DOMEventListener").add(window,"pagehide",n);b("Run").onBeforeUnload(n,!1)}};e.exports=a}),null);
__d("onEnclosingPageletDestroy",["Arbiter","DOMQuery"],(function(a,b,c,d,e,f){function a(a,c){var d=b("Arbiter").subscribe("pagelet/destroy",function(e,f){b("DOMQuery").contains(f.root,a)&&(d.unsubscribe(),c())});return d}e.exports=a}),null);
__d("QueryHistory",[],(function(a,b,c,d,e,f){var g={};a={set:function(a,b){g[this._key(a)]=b},get:function(a){return g[this._key(a)]},_key:function(a){return"uri-"+a.getQualifiedURI().toString()}};e.exports=a}),null);
__d("SimpleSearchNavigation",["Arbiter","DOMQuery","Input","QueryHistory","URI"],(function(a,b,c,d,e,f){__p&&__p();var g,h=null,i=null;a={registerInput:function(a,c){var d=this;i=b("DOMQuery").scry(a,"input")[0];h&&this._updateTitle(h,c);b("Arbiter").subscribe("page_transition",function(a,c){d._updateTitle(b("QueryHistory").get(c.uri))})},_updateTitle:function(a,c){i&&(b("Input").setValue(i,a||""),i.setAttribute("singlestate",a&&c),i.blur())},setPageTitle:function(a,c){b("QueryHistory").set((g||(g=b("URI"))).getNextURI(),a);i?this._updateTitle(a,c):h=a;c={};b("Arbiter").inform("search/updateNullState",c,"state")},setPageQuery:function(a){b("Arbiter").inform("search/updateNullState",a,"state")}};e.exports=a}),null);
__d("StickyPlaceholderInput",["CSS","DOM","Event","Input","Parent","emptyFunction","getElementText"],(function(a,b,c,d,e,f){__p&&__p();function g(a){return b("Parent").byClass(a,"uiStickyPlaceholderInput")}function h(a){return b("DOM").scry(a,".placeholder")[0]}function i(a){a=a||window.event;var c=a.target||a.srcElement;if(b("DOM").isNodeOfType(c,["input","textarea"])){var d=g(c);d&&setTimeout(function(){b("CSS").conditionClass(d,"uiStickyPlaceholderEmptyInput",!c.value.length)},0)}}var j={init:function(){j.init=b("emptyFunction"),b("Event").listen(document.documentElement,{keydown:i,keyup:i,paste:i,focusout:i})},registerInput:function(a){j.init();var c=a.getAttribute("placeholder")||"";if(c.length)if(document.activeElement===a)var d=b("Event").listen(a,"blur",function(){j.manipulateInput(a,c),d.remove()});else j.manipulateInput(a,c)},manipulateInput:function(a,c){var d=b("DOM").create("div",{className:"placeholder","aria-hidden":"true"},c),e=b("DOM").create("div",{className:"uiStickyPlaceholderInput"},d);b("DOM").isNodeOfType(a,"textarea")&&b("CSS").addClass(e,"uiStickyPlaceholderTextarea");b("Event").listen(d,"click",function(){a.focus()});a.value===c&&(a.value="");a.setAttribute("placeholder","");b("DOM").replace(a,e);b("DOM").appendContent(e,a);b("CSS").conditionClass(e,"uiStickyPlaceholderEmptyInput",!a.value.length)},setPlaceholderText:function(a,c){var d=g(a);if(!d)b("Input").setPlaceholder(a,c);else{a=h(d);a&&b("DOM").setContent(a,c)}},getPlaceholderText:function(a){a=g(a);a=h(a);return a&&b("getElementText")(a)},update:function(a){var c=g(a);c&&b("CSS").conditionClass(c,"uiStickyPlaceholderEmptyInput",!a.value.length)},getVisibleText:function(a){var c=g(a);if(b("CSS").hasClass(c,"uiStickyPlaceholderEmptyInput")){c=h(c);return c&&b("getElementText")(c)}else return a.value}};e.exports=j}),null);
__d("getEarlyResources",[],(function(a,b,c,d,e,f){"use strict";function a(){return Array.from(document.querySelectorAll("head script[data-bootloader-hash]"))}e.exports=a}),null);
__d("WebDevicePerfInfoLogging",["Banzai","JSScheduler","VisibilityListener","WebDevicePerfInfoData","getEarlyResources"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){__p&&__p();var b=document.createElement("canvas");b=b.getContext("webgl")||b.getContext("experimental-webgl");if(!b)return;var c=b.getExtension("WEBGL_debug_renderer_info");if(!c)return;var d=b.getParameter(c.UNMASKED_RENDERER_WEBGL);b=b.getParameter(c.UNMASKED_VENDOR_WEBGL);a.gpu_vendor=b;a.gpu_renderer=d}function h(a){__p&&__p();var c=window.performance.getEntriesByType("resource"),d=b("getEarlyResources")(),e={};d.forEach(function(a){a=a.getAttribute("src");a!==null&&a!==void 0&&(e[a]=!0)});var f=0,g=0,h=0,i=0;c.forEach(function(a){if(e[a.name]===!0){var c=b("VisibilityListener").getHiddenTime(a.startTime,a.responseEnd);c=c!=null&&c>0;if(!c){c=a.transferSize===0;var d=a.transferSize<a.encodedBodySize,j=a.responseEnd-a.responseStart;c?(f+=a.encodedBodySize/j,g++):d||(h+=a.transferSize/j,i++)}}});g>0&&(a.cached_speed_sample=f/g,a.cached_file_count=g);i>0&&(a.remote_speed_sample=h/i,a.remote_file_count=i)}function i(){var a={};navigator&&navigator.hardwareConcurrency!==void 0&&(a.cpu_cores=navigator.hardwareConcurrency);navigator&&navigator.deviceMemory!==void 0&&(a.ram=navigator.deviceMemory);b("WebDevicePerfInfoData").needsFullUpdate&&g(a);b("WebDevicePerfInfoData").shouldLogResourcePerf&&h(a);b("Banzai").post("web_device_perf_info_log",a)}a={doLog:function(){(b("WebDevicePerfInfoData").needsFullUpdate||b("WebDevicePerfInfoData").needsPartialUpdate||b("WebDevicePerfInfoData").shouldLogResourcePerf)&&b("JSScheduler").scheduleSpeculativeCallback(i)}};e.exports=a}),null);
__d("XConsentCookieController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/cookie/consent/",{})}),null);
__d("DeferredCookie",["requireCond","Cookie","CookieConsent","cr:1109759","SubscriptionList","cr:1083116","XConsentCookieController","cr:1069930","promiseDone","cr:1083117"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=new Map();a={shouldAddDefaultListener:!0,defaultHandler:null,sentConsentToServer:!1,callbacks:new(b("SubscriptionList"))(),addToQueue:function(a,c,d,e,f,i,j){if(!(g||(g=b("CookieConsent"))).isDeferCookies()){f?b("Cookie").setWithoutChecksIfFirstPartyContext(a,c,d,e,j):b("Cookie").setWithoutChecks(a,c,d,e,j);return}if(h.has(a))return;h.set(a,{name:a,value:c,nMilliSecs:d,path:e,firstPartyOnly:f,secure:j});i&&this.addDefaultInteractionListener()},flushAllCookiesWithoutRequestingConsentSeePrivacyXFNBeforeUsing:function(){h.forEach(function(a,c){a.firstPartyOnly?b("Cookie").setWithoutChecksIfFirstPartyContext(a.name,a.value,a.nMilliSecs,a.path,a.secure):b("Cookie").setWithoutChecks(a.name,a.value,a.nMilliSecs,a.path,a.secure)}),(g||(g=b("CookieConsent"))).setConsented(),this.callbacks.fireCallbacks(),h=new Map(),this.removeDefaultInteractionListener()},flushAllCookies:function(){this.flushAllCookiesWithoutRequestingConsentSeePrivacyXFNBeforeUsing();if(!this.sentConsentToServer){var a=b("XConsentCookieController").getURIBuilder().getURI();this.sentConsentToServer=!0;b("cr:1069930")!=null?b("promiseDone")(b("cr:1069930")(a.toString(),{data:{},method:"POST"}),null,function(a){b("cr:1083117")&&b("cr:1083117")("Cookie consent has not been set successfully: "+a.errorMsg,"comet_infra")}):b("cr:1083116")!=null&&new(b("cr:1083116"))(a).send()}},removeDefaultInteractionListener:function(){this.shouldAddDefaultListener=!1,this.defaultHandler&&(window.removeEventListener?window.removeEventListener("click",this.defaultHandler,!0):document.detachEvent&&document.detachEvent("onclick",this.defaultHandler),this.defaultHandler=null)},addDefaultInteractionListener:function(a){this.shouldAddDefaultListener&&(this.shouldAddDefaultListener=!1,this.defaultHandler=a!=null?a:this.baseInteractionHandler.bind(this),window.addEventListener?window.addEventListener("click",this.defaultHandler,!0):document.attachEvent&&document.attachEvent("onclick",this.defaultHandler))},registerCallbackOnCookieFlush:function(a){!(g||(g=b("CookieConsent"))).isDeferCookies()?a():this.callbacks.add(a)},baseInteractionHandler:function(a){var c=a.target;if(!(c instanceof HTMLElement))return;if(a instanceof MouseEvent&&!this.isValidClick(a))return;b("cr:1109759")!=null&&!b("cr:1109759").isBlacklisted(c)&&this.flushAllCookies()},isValidClick:function(a){return a.which===void 0?!0:a.which==1},canEmbedThirdPartyPixel:function(){return(g||(g=b("CookieConsent"))).isCookiesBlocked()||(g||(g=b("CookieConsent"))).isDeferCookies()?!1:h.size===0}};e.exports=a}),null);
__d("XRefererFrameController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/common/referer_frame.php",{})}),null);
__d("ControlledReferer",["Bootloader","DeferredCookie","URI","XRefererFrameController","isMessengerDotComURI","isOculusDotComURI","isWorkplaceDotComURI","lowerFacebookDomain"],(function(a,b,c,d,e,f){__p&&__p();var g,h={useFacebookReferer:function(a,c,d){__p&&__p();if(!b("DeferredCookie").canEmbedThirdPartyPixel()){b("Bootloader").loadModules(["BanzaiODS"],function(a){a.bumpEntityKey(2966,"defer_cookies","block_controlled_referer_iframe")},"ControlledReferer");return}var e=!1;function f(){if(e)return;var b=a.contentWindow.location.pathname;if(b!=="/intern/common/referer_frame.php"&&b!=="/common/referer_frame.php")return;e=!0;a.contentWindow.document.body.style.margin=0;c()}var h;b("isMessengerDotComURI")((g||(g=b("URI"))).getRequestURI())?h=b("XRefererFrameController").getURIBuilder().getURI().toString():b("isOculusDotComURI")((g||(g=b("URI"))).getRequestURI())?h="/common/referer_frame.php":!b("lowerFacebookDomain").isValidDocumentDomain()?h="/intern/common/referer_frame.php":h=b("XRefererFrameController").getURIBuilder().getURI().toString();d==null&&b("isWorkplaceDotComURI")((g||(g=b("URI"))).getRequestURI())&&(d="workplace");d&&(h+="?fb_source="+d);a.onload=f;a.src=h},useFacebookRefererHtml:function(a,b,c){h.useFacebookReferer(a,function(){a.contentWindow.document.body.innerHTML=b},c)}};e.exports=h}),null);
__d("FBSiteWhiteOps",["ControlledReferer","FBEngagementWhiteopsFraudSensorTypedLogger","Style","URI","UserAgent"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;a={appendToWindow:function(a,c,d,e,f){__p&&__p();e===void 0&&(e=null);f===void 0&&(f=null);var h=window.document.body;try{var i="fbsbx-sig-iframe-detection";if(h.getElementsByClassName(i).length!==0)return;var j=window.document.createElement("iframe");b("Style").apply(j,{height:"1px",width:"1px",opacity:"0",position:"relative",zIndex:"-9999999"});j.id="fbsbx-sig-iframe-"+a;j.className=i;j.referrerPolicy="no-referrer";b("ControlledReferer").useFacebookReferer(j,function(){__p&&__p();j.sandbox="allow-scripts allow-same-origin";var h="https://s.update.fbsbx.com/2/843748/utils.html?ti="+a+"&di=facebook.com&bt="+c+"&dt=8437481520966594402012";d&&(h+="&sn="+d);e!=null&&e!==""&&(h+="&c1="+e);f!=null&&f!==""&&(h+="&c3="+f);h=new(g||(g=b("URI")))(h);var i=j.contentWindow.document,k="fbsbx-sig-iframe-form-"+a,l=h.toString();h=h.getQueryData();if(b("UserAgent").isBrowser("IE")||b("UserAgent").isBrowser("Edge")||b("UserAgent").isBrowser("IE Mobile")){var m="";for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&(m+="<input "+('name="'+n+'" ')+'type="hidden" autocomplete="off" '+('value="'+h[n]+'" />'));i.body.innerHTML='<form method="GET" id='+k+">"+m+"</form>";m=i.getElementById(k);m.action=l}else{i.body.innerHTML='<form method="GET" id='+k+"></form>";m=i.getElementById(k);m.action=l;for(var o in h)if(Object.prototype.hasOwnProperty.call(h,o)){l=i.createElement("input");l.name=o;l.value=h[o];l.autocomplete="off";l.type="hidden";m.appendChild(l)}}i.body.innerHTML+='<iframe height="100%" width="100%" onload=\'document.getElementById("'+k+"\").submit()'/>;"});h.appendChild(j)}catch(a){}},log:function(a,c,d){new(b("FBEngagementWhiteopsFraudSensorTypedLogger"))().setInstanceID(a).setTqBotDetectionProductEnum(c).log()}};e.exports=a}),null);
__d("BanzaiNectar",["Banzai"],(function(a,b,c,d,e,f){function a(a){return{log:function(c,d,e){d={e:d,a:e};b("Banzai").post("nectar:"+c,d,a)}}}c=a();c.create=a;e.exports=c}),null);
__d("PagesEventObserver",["Banzai"],(function(a,b,c,d,e,f){var g="pages_client_logging",h={VITAL_WAIT:b("Banzai").VITAL_WAIT,logData_DEPRECATED:function(a,c){c={delay:c||b("Banzai").VITAL_WAIT};b("Banzai").post(g,a,c)},notify:function(a,c,d,e,f){d=babelHelpers["extends"]({},d,{event_name:a,page_id:c,dedupe:e!==!1});a={delay:f||b("Banzai").VITAL_WAIT};b("Banzai").post(g,d,a)},registerLogOnClick:function(a,b,c){c===void 0&&(c=null),a.addEventListener("click",function(){c&&h.notify(c,b,null,null,null)})}};e.exports=h}),null);
__d("CookieConsentBlacklist",["CookieConsentBlacklistedHrefs","Parent"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={isBlacklisted:function(a){__p&&__p();a=a;if(!this.hasCookieBanner())return!0;var c=b("Parent").byAttribute(a,"data-cookiebanner");if(c){c=c.getAttribute("data-cookiebanner");switch(c){case"close_button":return!1;case"banner":return!0}}c=b("Parent").byAttribute(a,"data-nocookies");if(c)return!0;a.tagName.toLowerCase()!=="a"&&(a=b("Parent").byTag(a,"a"));if(a instanceof HTMLAnchorElement&&typeof a.href==="string"){c=a.href;for(var a=0;a<this.blacklistedHrefs.length;a++)if(c.indexOf(this.blacklistedHrefs[a])>-1)return!0}return!1},blacklistedHrefs:b("CookieConsentBlacklistedHrefs").hrefs,hasCookieBanner:function(){var a=document.querySelectorAll('[data-cookiebanner="banner"]');return a.length>0}};e.exports=a}),null);
__d("VisualCompletionGating",["requireCond","cr:729414"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:729414")}),null);
__d("clamp",[],(function(a,b,c,d,e,f){function a(a,b,c){if(a<b)return b;return a>c?c:a}e.exports=a}),null);
__d("ImageBlock.react",["cx","invariant","LeftRight.react","React","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();function i(a){a=a.children;a&&(a.length===2||a.length===3)||h(0,97);a[0]!==null||h(0,98);return a}function j(a){return"img _8o"+(a==="small"?" _8r":"")+(a==="medium"?" _8s":"")+(a==="large"?" _8t":"")}a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a=i(this.props),c=a[0],d=a[1];a=a[2];var e=this.props,f=e.imageClassName,g=e.contentClassName,h=e.spacing;e=babelHelpers.objectWithoutPropertiesLoose(e,["imageClassName","contentClassName","spacing"]);var k=c.props,l=k.className,m=k.alt,n=k.tabIndex;k=k.title;l={className:b("joinClasses")(l,j(h),f)};c.type==="img"?m===void 0&&(l.alt=""):(c.type==="a"||c.type==="link")&&n===void 0&&k===void 0&&c.props["aria-label"]===void 0&&(l.tabIndex="-1",l["aria-hidden"]="true");c=b("React").cloneElement(c,l);f=!0;this.props.flexibleContent!=null&&(f=this.props.flexibleContent);m=b("joinClasses")(g,(f?"_42ef":"")+(h==="small"?" _8u":""));!a?n=b("React").jsx("div",{className:m,children:d}):n=b("React").jsxs(b("LeftRight.react"),{className:m,direction:b("LeftRight.react").DIRECTION.right,children:[d,a]});return b("React").jsxs(b("LeftRight.react"),babelHelpers["extends"]({},e,{direction:b("LeftRight.react").DIRECTION.left,children:[c,n]}))};return c}(b("React").Component);a.defaultProps={spacing:"small"};e.exports=a}),null);
__d("filterObject",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=Object.prototype.hasOwnProperty;function a(a,b,c){if(!a)return null;var d={};for(var e in a)g.call(a,e)&&b.call(c,a[e],e,a)&&(d[e]=a[e]);return d}e.exports=a}),null);
__d("ImmutableRecordWithV4Types",["immutable"],(function(a,b,c,d,e,f){"use strict";a=b("immutable").Record;e.exports={Record:a}}),null);
__d("QuicklingRefreshOverheadUtil",["QuicklingConfig","WebStorage","performanceAbsoluteNow"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h,i=null,j=1e4;a={onQuicklingStart:function(){i=(g||(g=b("performanceAbsoluteNow")))()},onQuicklingVersionMatch:function(){i=null},onQuicklingRefreshStart:function(){if(!b("QuicklingConfig").logRefreshOverhead||i===null)return;var a=(h||(h=b("WebStorage"))).getSessionStorage();if(!a)return;a.setItem("quickling_refresh_overhead",((g||(g=b("performanceAbsoluteNow")))()-i).toString());a.setItem("quickling_refresh_start",Date.now().toString())},getOverhead:function(a){__p&&__p();if(!b("QuicklingConfig").logRefreshOverhead)return null;var c=(h||(h=b("WebStorage"))).getSessionStorageForRead();if(!c)return null;var d=c.getItem("quickling_refresh_start");if(d==null)return null;if(a-parseInt(d,10)>j)return null;a=c.getItem("quickling_refresh_overhead");return a!=null?parseFloat(a):null}};e.exports=a}),null);
__d("randomShuffle",["randomInt"],(function(a,b,c,d,e,f){__p&&__p();function a(a){for(var c=a.length-1;c>0;c--){var d=b("randomInt").call(this,c+1);if(d!=c){var e=a[d];a[d]=a[c];a[c]=e}}return a}e.exports=a}),null);
__d("mayHaveConnectedCharacters",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a.match(/[\u0900-\u097F\u0980-\u09FF\u0A00-\u0A7F\u0A80-\u0AFF\u0B00-\u0B7F\u0B80-\u0BFF\u0C00-\u0C7F\u0C80-\u0CFF\u0D00-\u0D7F\u0D80-\u0DFF\u0E00-\u0E7F\u0E80-\u0EFF\u0F00-\u0FFF\u1000-\u109F\u1700-\u171F\u1720-\u173F\u1740-\u175F\u1760-\u177F\u1780-\u17FF\u1900-\u194F\u1950-\u197F\u1980-\u19DF\u19E0-\u19FF\u1A00-\u1A1F\u1A20-\u1AAF\u1B00-\u1B7F\u1B80-\u1BBF\u1BC0-\u1BFF\u1C00-\u1C4F\u1CC0-\u1CCF\uA800-\uA82F\uA840-\uA87F\uA880-\uA8DF\uA8E0-\uA8FF\uA930-\uA95F\uA980-\uA9DF\uA9E0-\uA9FF\uAA00-\uAA5F\uAA60-\uAA7F\uAA80-\uAADF\uAAE0-\uAAFF\uABC0-\uABFF\u0600-\u06FF\u0750–\u077F\u08A0–\u08FF\uFB50–\uFDFF\uFE70–\uFEFF\u4e00-\u9faf\u0D80-\u0DFF\u0E80-\u0EFF]/)!=null}e.exports=a}),null);
__d("ClientServiceWorkerMessage",[],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,b,c){this.$1=a,this.$2=b,this.$3=c}var b=a.prototype;b.sendViaController=function(){if(!navigator.serviceWorker||!navigator.serviceWorker.controller)return;var a=new self.MessageChannel();this.$3&&(a.port1.onmessage=this.$3);navigator.serviceWorker.controller.postMessage({command:this.$1,data:this.$2},[a.port2])};return a}();e.exports=a}),null);
__d("ServiceWorkerRegistration",["Promise","BrowserPaymentHandlerConfig","ClientServiceWorkerMessage","EventListener","Run","promiseDone"],(function(a,b,c,d,e,f){__p&&__p();var g=!!navigator.serviceWorker,h={},i=Object.freeze({name:"Facebook Payments",method:"basic-card",capabilities:{supportedNetworks:["discover"],supportedTypes:["credit","debit"]}}),j=Object.freeze({name:"Facebook Payments",method:self.location.origin,capabilities:{supportedNetworks:["discover"],supportedTypes:["credit","debit"]}});function k(){var a=navigator.serviceWorker;if(!g||!a)throw new Error("serviceWorker is not supported in this browser");return a}var l={isSupported:function(){return g},registerWorkerIfUnregisteredAfterDD:function(a){b("Run").onAfterLoad(function(){l.registerWorkerIfUnregistered(a)})},registerWorkerIfUnregistered:function(a){__p&&__p();var c=this;if(h[a])return h[a];var d=k();h[a]=new(b("Promise"))(function(e,f){c.getWorkerRegistration(a).done(function(c){if(!c){var g=b("EventListener").listen(window,"message",function(a){a.data&&a.data.command&&a.data.command==="ServiceWorkerInstallError"&&f()});b("promiseDone")(b("Promise").resolve(d.register(a,{updateViaCache:"all"})),function(){g.remove(),b("promiseDone")(b("Promise").resolve(d.ready),e)})}else e(c),b("BrowserPaymentHandlerConfig").enabled&&c.paymentManager&&c.paymentManager.instruments&&(c.paymentManager.instruments.set("Facebook",j),c.paymentManager.instruments.set("FacebookBasicCard",i))})});h[a].done(function(){h[a]=null});return h[a]},unregisterControllingWorker:function(){return new(b("Promise"))(function(a,c){c=new(b("ClientServiceWorkerMessage"))("unregister",{},function(){a(!0)});c.sendViaController()})},getWorkerRegistration:function(a){var c=k();return b("Promise").resolve(c.getRegistration(a))},isAWorkerActivated:function(){return!navigator.serviceWorker||!navigator.serviceWorker.getRegistration?b("Promise").resolve(!1):navigator.serviceWorker.getRegistration().then(function(a){return!!(a&&a.active)})}};e.exports=l}),null);
__d("XPushRegisterServiceWorkerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/push/register/service_worker/",{})}),null);