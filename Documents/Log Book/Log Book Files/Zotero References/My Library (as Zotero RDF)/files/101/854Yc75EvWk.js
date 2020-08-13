if (self.CavalryLogger) { CavalryLogger.start_js(["4NFIS"]); }

__d("asyncSleep",["regeneratorRuntime","Promise"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){return b("regeneratorRuntime").async(function(c){while(1)switch(c.prev=c.next){case 0:c.next=2;return b("regeneratorRuntime").awrap(new(b("Promise"))(function(b){return setTimeout(b,a)}));case 2:case"end":return c.stop()}},null,this)}e.exports=a}),null);
__d("ReadToggle.react",["cx","Event","Keys","React","emptyFunction","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$2=function(a){b("Event").getKeyCode(a)===b("Keys").RETURN&&d.props.onClick()},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){if(this.props.isRead)return b("React").jsx("div",{"aria-label":this.props.readLabel,className:this.$1(),"data-hover":"tooltip","data-testid":this.props.testid,"data-tooltip-alignh":"center","data-tooltip-content":this.props.readLabel,onClick:this.props.onClick,onKeyDown:this.$2,role:"button",tabIndex:0});else return b("React").jsx("div",{"aria-label":this.props.unreadLabel,className:this.$1(),"data-hover":"tooltip","data-testid":this.props.testid,"data-tooltip-alignh":"center","data-tooltip-content":this.props.unreadLabel,onClick:this.props.onClick,onKeyDown:this.$2,role:"button",tabIndex:"0"})};d.$1=function(){return b("joinClasses")(this.props.className,(this.props.isRead?"":"_5c9q")+(this.props.isRead?" _5c9_":""))};return c}(b("React").Component);c.propTypes={isRead:a.bool.isRequired,onClick:a.func.isRequired,readLabel:a.node.isRequired,unreadLabel:a.node.isRequired};c.defaultProps={onClick:b("emptyFunction")};e.exports=c}),null);
__d("Button.react",["cx","AbstractButton.react","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props.use||"default",c=this.props.size||"medium";c="_42fu"+(a==="special"?" _42gz":"")+(a==="confirm"?" _42g-":"")+(c==="large"?" _42gy":"")+(this.props.suppressed?" _42gx":"")+(a!=="default"?" selected":"");return b("React").jsx(b("AbstractButton.react"),babelHelpers["extends"]({},this.props,{label:this.props.label,className:b("joinClasses")(this.props.className,c)}))};return c}(b("React").Component);c.propTypes={use:a.oneOf(["special","confirm","default"]),size:a.oneOf(["medium","large"]),suppressed:a.bool};e.exports=c}),null);
__d("getNormalizedClientRect",["getDocumentScrollElement"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){__p&&__p();var c=a.getBoundingClientRect(),d=0,e=0;a=b("getDocumentScrollElement")(a.ownerDocument);var f=a.getBoundingClientRect();if(f.left>0)d=-f.left;else{a=a.scrollWidth+f.left;var g=f.width;g>a&&(d=g-a)}f.top>0&&(e=-f.top);return{bottom:c.bottom+e,height:c.height,left:c.left+d,right:c.right+d,top:c.top+e,width:c.width}}e.exports=a}),null);
__d("StickyArea",["cx","CSS","DOM","DOMQuery","Event","Run","Style","ViewportBounds","getNormalizedClientRect","getOverlayZIndex","getStyleProperty","removeFromArray","throttle"],(function(a,b,c,d,e,f,g){__p&&__p();var h=[],i=null,j=null,k=b("throttle").acrossTransitions(n,1e3),l="$$StickyArea_scrollListener",m="$$StickyArea_scrollListenerCount";function n(){h.sort(function(a,b){a=a.getNode();b=b.getNode();if(a.compareDocumentPosition)return 3-(a.compareDocumentPosition(b)&6);else return a.sourceIndex-b.sourceIndex})}function o(a,c,d){var e=a.getPlaceholder(),f=a.getNode(),g=b("Style").get(f,"float");a=a.getData();(a.placeholderWidth!==c||a.placeholderHeight!==d||a.placeholderFloat!==g)&&(b("Style").apply(e,{"float":g,height:d+"px",width:c+"px"}),a.placeholderHeight=d,a.placeholderWidth=c);f.nextSibling!==e&&b("DOM").insertAfter(f,e)}function p(a,c){var d=a.getData();d.fixed!==c&&(b("Style").apply(a.getNode(),d.styles),b("CSS").conditionShow(a.getPlaceholder(),c),b("CSS").conditionClass(a.getNode(),"_1a1e",c),b("Event").fire(a.getNode(),"change"),d.fixed=c)}function q(a,b){if(!a)return 0;else if(b.right<=a.rect.left||b.left>=a.rect.right)return q(a.prev,b);else return a.bottom}function r(){__p&&__p();var a=0,c=h.length,d=100,e=null;function f(g,i){__p&&__p();var j=d;while(a<c){var k=h[a],l=k.getNode(),m=k._scrollTarget;if(i&&!b("DOMQuery").contains(i,l))break;d=Math.max(j,k.getZIndex());var n=k.getData(),r=l.parentNode,s=n.styles;if(r==null){a++;continue}for(var t in s)s[t]="";p(k,!1);var u=l.offsetHeight,v=parseFloat(b("getStyleProperty")(l,"width"))||l.offsetWidth,w=m!==window?m.getBoundingClientRect().top:0,x=b("getNormalizedClientRect")(l);m=q(g||(m===window?e:null),x)+k.getOffset();var y=x.top-w;if(y<=m){s.width=v+"px";y=parseInt(b("Style").get(r,"padding-bottom"),10);var z=b("getNormalizedClientRect")(r);if(z.bottom-y>m+u||!k.getIsBoundToContainer()){var A=parseInt(b("Style").get(l,"margin-left"),10);s.position="fixed";s.bottom="auto";s.top=m+w+"px";s.left=x.left-A+"px"}else{(!n.parent||r!==n.parent)&&(b("Style").get(r,"position")==="static"&&b("Style").set(r,"position","relative"),n.parent=r);s.position="absolute";s.top="auto";s.bottom=y+"px";w=parseInt(b("Style").get(r,"border-left-width"),10);s.left=x.left-z.left-w+"px"}o(k,v,u);p(k,!0)}a++;A={bottom:m+u,prev:g,rect:x};n=0;k.getIsBoundToContainer()||(e=A,n=100);f(A,r);y=k.getZIndexOverride()||d+++n;b("Style").set(l,"z-index",y)}}f(null,null)}a=function(){"use strict";__p&&__p();function a(c,d,e,f){f===void 0&&(f={}),this._isDestroyed=!1,this._node=c,this._data={fixed:!1,placeholderFloat:null,placeholderHeight:null,placeholderWidth:null,styles:{}},this._offset=e,this._boundToContainer=f.boundToContainer!==!1,f.stickTo===a.stickTo.SCROLL_PARENT?this._scrollTarget=b("Style").getScrollParent(c.parentNode)||window:this._scrollTarget=window,this._zIndexOverride=f.zIndexOverride,b("CSS").addClass(c,"_k"),d||b("Run").onLeave(this.destroy.bind(this)),!this._scrollTarget[l]?(this._scrollTarget[l]=b("Event").listen(this._scrollTarget,"scroll",function(){k(),r()}),this._scrollTarget[m]=1):this._scrollTarget[m]++,h.length||(i=b("Event").listen(window,"resize",function(){k(),r()}),j=b("ViewportBounds").subscribe("change",function(){k(),r()})),h.push(this),a.reflow()}var c=a.prototype;c.destroy=function(){__p&&__p();if(this._isDestroyed)return;b("removeFromArray")(h,this);this._scrollTarget[m]--;this._scrollTarget[m]===0&&(this._scrollTarget[l].remove(),this._scrollTarget[l]=null);h.length||(i.remove(),i=null,j.unsubscribe(),j=null);this._placeholder&&b("DOM").remove(this._placeholder);var a=0;for(var c in this._data.styles)this._data.styles[c]="",a++;a&&b("Style").apply(this._node,this._data.styles);this._isDestroyed=!0};c.getData=function(){return this._data};c.getNode=function(){return this._node};c.getOffset=function(){return this._offset||0};c.getPlaceholder=function(){this._placeholder||(this._placeholder=b("DOM").create("div"));return this._placeholder};c.getIsBoundToContainer=function(){return this._boundToContainer};c.getZIndexOverride=function(){return this._zIndexOverride};c.getZIndex=function(){this._zIndex||(this._zIndex=b("getOverlayZIndex")(this._node));return this._zIndex};c.setOffset=function(a){this._offset=a};return a}();a.reflow=b("throttle").acrossTransitions(function(){n(),r()},100);a.stickTo={SCROLL_PARENT:"SCROLL_PARENT",WINDOW:"WINDOW"};e.exports=a}),null);
__d("VideoPlayerCea608Command",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({TEXT:"text",PAC:"pac",MIDROW:"midrow",CARRIAGE_RETURN:"carriage_return",START_ROLL_UP_2:"start_roll_up_2",START_ROLL_UP_3:"start_roll_up_3",START_ROLL_UP_4:"start_roll_up_4",END_OF_CAPTION:"end_of_caption",ERASE_DISPLAY_MEMORY:"erase_display_memory",ERASE_NON_DISPLAY_MEMORY:"erase_non_display_memory",BACKSPACE:"backspace",DELETE_TIL_END_OF_ROW:"delete_til_end_of_row",RESUME_DIRECT_CAPTIONING:"resume_direct_captioning",RESUME_CAPTION_LOADING:"resume_caption_loading",TAB_OFFSET:"tab_offset",FLASH_ON:"flash_on",__DEPRECATED__ALARM_OFF:"alarm_off",__DEPRECATED__ALARM_ON:"alarm_on",__DEPRECATED__TEXT_RESTART:"text_restart",__DEPRECATED__RESUME_TEXT_DISPLAY:"resume_text_display"});e.exports=a}),null);
__d("VideoPlayerCea608CaptionsSourceImplFacebook",["VideoPlayerCea608Command","extractCEA608","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=!1,h,i=15,j=32,k=function(){__p&&__p();function a(){this.$2=0;this.$1=new Array(j);for(var a=0;a<j;++a)this.$1[a]=" "}var b=a.prototype;b.setPos=function(a){this.$2=Math.max(0,Math.min(j-1,a))};b.movePos=function(a){a=this.$2+a;this.setPos(a)};b.backspace=function(){this.movePos(-1),this.$1[this.$2]=" "};b.putCharacter=function(a){var b=this.$2;b<j&&(this.$1[b]=a,this.movePos(1))};b.clearFromPos=function(a){for(var a=a;a<j;a++)this.$1[a]=" "};b.clear=function(){this.clearFromPos(0),this.$2=0};b.clearToEndOfRow=function(){this.clearFromPos(this.$2)};b.getCharacters=function(){return this.$1};b.getPos=function(){return this.$2};return a}(),l=function(){__p&&__p();function a(){this.$2=i-1;this.$3=null;this.$1=new Array(i);for(var a=0;a<i;++a)this.$1[a]=new k()}var b=a.prototype;b.clear=function(){this.$1.forEach(function(a,b){a.clear()})};b.setPAC=function(a){var b=a.row-1;this.$3!=null&&b<this.$3-1&&(b=this.$3-1);this.$2=b;b=this.$1[this.$2];a.indent!==null&&b.setPos(a.indent)};b.putCharacter=function(a){var b=this.$1[this.$2];b.putCharacter(a)};b.movePos=function(a){var b=this.$1[this.$2];b.movePos(a)};b.setRollupSize=function(a){this.$3=a};b.rollup=function(){if(this.$3==null)return;var a=this.$2+1-this.$3;a=this.$1.splice(a,1)[0];a.clear();this.$1.splice(this.$2,0,a)};b.backspace=function(){this.$1[this.$2].backspace()};b.clearToEndOfRow=function(){this.$1[this.$2].clearToEndOfRow()};b.getRows=function(){return this.$1.slice()};b.getCurrentRowIndex=function(){return this.$2};return a}();function m(a){return a.getRows().map(function(a){return a.getCharacters().join("")})}function n(a){var b=a.getCurrentRowIndex();return"\n"+a.getRows().map(function(a,c){var d=a.getPos();return String(c+1).padStart(3," ")+" ["+a.getCharacters().join("")+"]"+(c===b?"< ":"  ")+String(d).padStart(2," ")}).join("\n")+"\n"}var o=function(){__p&&__p();function a(){}var c=a.prototype;c.handleCommand=function(a,c,d){__p&&__p();switch(a.type){case b("VideoPlayerCea608Command").TEXT:d.putCharacter(a.data.character);return!1;case b("VideoPlayerCea608Command").TAB_OFFSET:d.movePos(a.data.tabOffset);return!1;case b("VideoPlayerCea608Command").CARRIAGE_RETURN:return!1;case b("VideoPlayerCea608Command").BACKSPACE:d.backspace();return!1;case b("VideoPlayerCea608Command").DELETE_TIL_END_OF_ROW:d.clearToEndOfRow();return!1;case b("VideoPlayerCea608Command").ERASE_DISPLAY_MEMORY:c.clear();return!0;case b("VideoPlayerCea608Command").ERASE_NON_DISPLAY_MEMORY:d.clear();return!1;case b("VideoPlayerCea608Command").PAC:d.setPAC(a.data.pacData);return!1;default:return!1}};return a}(),p=function(){__p&&__p();function a(){}var c=a.prototype;c.handleCommand=function(a,c,d){__p&&__p();switch(a.type){case b("VideoPlayerCea608Command").TEXT:c.putCharacter(a.data.character);return!0;case b("VideoPlayerCea608Command").TAB_OFFSET:c.movePos(a.data.tabOffset);return!1;case b("VideoPlayerCea608Command").CARRIAGE_RETURN:return!1;case b("VideoPlayerCea608Command").BACKSPACE:c.backspace();return!0;case b("VideoPlayerCea608Command").DELETE_TIL_END_OF_ROW:c.clearToEndOfRow();return!0;case b("VideoPlayerCea608Command").ERASE_DISPLAY_MEMORY:c.clear();return!0;case b("VideoPlayerCea608Command").PAC:c.setPAC(a.data.pacData);return!1;default:return!1}};return a}(),q=function(){__p&&__p();function a(){}var c=a.prototype;c.handleCommand=function(a,b,c){return this.$1(a,b,c)};c.$1=function(a,c,d){__p&&__p();switch(a.type){case b("VideoPlayerCea608Command").TEXT:c.putCharacter(a.data.character);return!0;case b("VideoPlayerCea608Command").TAB_OFFSET:c.movePos(a.data.tabOffset);return!1;case b("VideoPlayerCea608Command").CARRIAGE_RETURN:c.rollup();return!0;case b("VideoPlayerCea608Command").BACKSPACE:c.backspace();return!0;case b("VideoPlayerCea608Command").DELETE_TIL_END_OF_ROW:c.clearToEndOfRow();return!0;case b("VideoPlayerCea608Command").ERASE_DISPLAY_MEMORY:c.clear();return!0;case b("VideoPlayerCea608Command").ERASE_NON_DISPLAY_MEMORY:d.clear();return!1;case b("VideoPlayerCea608Command").PAC:c.setPAC(a.data.pacData);return!1;default:return!1}};return a}();a=function(){__p&&__p();function a(a){__p&&__p();var b=a.onCaptionsLoaded;a=a.onCaptionsChanged;this.$1=null;this.$2=null;this.$3=[];this.$4=null;this.$5=new l();this.$6=new l();this.$7=new o();this.$8=null;this.$9={changedCount:0,commandsHandledCount:0,fragmentsInsertedCount:0,fragmentsProcessedCount:0,processStartedCount:0,processedCount:0,timeUpdateHandledCount:0};this.$1=b;this.$2=a}var c=a.prototype;c.appendFragments_DEPRECATED=function(a){this.$10(a)};c.processBytes=function(a){var c=this;this.$9.processStartedCount++;return b("extractCEA608")({debugLogEnabled:g,timescale:a.timescale,videoBytes:a.videoBytes}).then(function(a){c.$9.processedCount++,c.$10(a)})};c.handleTimeUpdate=function(a){this.$11(a)};c.getStagingScreenForTestSnapshot=function(){return n(this.$6)};c.getDisplayScreenForTestSnapshot=function(){return n(this.$5)};c.getCurrentScreenRows=function(){return this.$8};c.destroy=function(){this.$1=null,this.$2=null,this.$3.length=0,this.$4=null,this.$5.clear(),this.$6.clear(),this.$8=null,this.$9={changedCount:0,commandsHandledCount:0,fragmentsInsertedCount:0,fragmentsProcessedCount:0,processStartedCount:0,processedCount:0,timeUpdateHandledCount:0}};c.$10=function(a){__p&&__p();var b=this,c=this.$1;c&&(c(),this.$1=null);a.forEach(function(a){var c=a.presentationTime,d;for(d=b.$3.length;d>0;d--){var e=d===b.$3.length?Number.MAX_VALUE:b.$3[d].presentationTime,f=b.$3[d-1].presentationTime;if(c<e&&c>=f)break}b.$9.fragmentsInsertedCount++;b.$3.splice(d,0,a)})};c.$11=function(a){__p&&__p();this.$9.timeUpdateHandledCount++;if(!this.$3.length||this.$3[0].presentationTime>a)return;var c=0,d=!1;for(;c<this.$3.length;++c){var e=this.$3[c];if(e.presentationTime>a)break;this.$9.fragmentsProcessedCount++;if(this.$4!=null&&(e.type!==b("VideoPlayerCea608Command").TEXT||e.data.isSpecial===!0)&&JSON.stringify(e)===JSON.stringify(this.$4))continue;this.$4=e;e=this.$12(e);e&&(d=!0);this.$9.commandsHandledCount++}this.$3.splice(0,c);this.$13(m(this.$5),{textAlignment:this.$14(this.$7)})};c.$12=function(a){__p&&__p();switch(a.type){case b("VideoPlayerCea608Command").RESUME_CAPTION_LOADING:this.$7=new o();return!1;case b("VideoPlayerCea608Command").RESUME_DIRECT_CAPTIONING:this.$7=new p();this.$5=this.$6;this.$6=new l();return!0;case b("VideoPlayerCea608Command").END_OF_CAPTION:if(this.$7 instanceof o){var c=this.$6;this.$6=this.$5;this.$5=c;return!0}return!1;case b("VideoPlayerCea608Command").START_ROLL_UP_2:this.$5.setRollupSize(2);this.$7=new q();return!1;case b("VideoPlayerCea608Command").START_ROLL_UP_3:this.$5.setRollupSize(3);this.$7=new q();return!1;case b("VideoPlayerCea608Command").START_ROLL_UP_4:this.$5.setRollupSize(4);this.$7=new q();return!1}c=this.$7.handleCommand(a,this.$5,this.$6);return c};c.$14=function(a){if(a instanceof o)return"center";else if(a instanceof p)return"center";else if(a instanceof q)return"left";else return"center"};c.$13=function(a,b){if(this.$8==null||this.$8.length!==a.length||this.$8.some(function(b,c){return b!==a[c]})){this.$9.changedCount++;var c=this.$2;c&&c(a,b)}this.$8=a};return a}();e.exports=a}),null);