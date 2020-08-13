if (self.CavalryLogger) { CavalryLogger.start_js(["CTuWC"]); }

__d("TabBarItem.react",["cx","Event","Focus","Keys","React","ReactDOM","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsx("li",babelHelpers["extends"]({},this.props,{children:this.props.children}))};return c}(b("React").Component);d=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.onKeyDown=function(a){var c=b("Event").getKeyCode(a);c===b("Keys").SPACE&&d.refs.tab&&(b("ReactDOM").findDOMNode(d.refs.tab).click(),b("Event").prevent(a))},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=this.props,c=a.selected,d=a.hideFocusRing;a=a.shouldWrapTab;c="_45hc"+(c?" _1hqh":"");d="_3m1v"+(d?" _468f":"");return a?this.$1(c,d):this.$2(b("joinClasses")(c,d))};d.$1=function(a,c){__p&&__p();var d=this.props,e=d.id,f=d.className,g=d.href,h=d.ajaxify,i=d.tabIndex,j=d.rel,k=d.target,l=d.selected,m=d.wrapper,n=d.mockSpacebarClick,o=d["aria-haspopup"];d.focused;d.hideFocusRing;d.shouldWrapTab;d=babelHelpers.objectWithoutPropertiesLoose(d,["id","className","href","ajaxify","tabIndex","rel","target","selected","wrapper","mockSpacebarClick","aria-haspopup","focused","hideFocusRing","shouldWrapTab"]);g=g||"#";var p={};n&&(p.onKeyDown=this.onKeyDown);n=b("React").jsx("a",{"aria-haspopup":o,"aria-describedby":e,ref:"tab",ajaxify:h,href:g,role:"tab",rel:j,target:k,tabIndex:i,className:c,"aria-selected":l,children:this.props.children});return b("React").jsx(m,babelHelpers["extends"]({},d,{tabIndex:null,className:b("joinClasses")(f,a),role:"presentation",children:b("React").cloneElement(n,p)}))};d.$2=function(a){__p&&__p();var c=this.props,d=c.id,e=c.className,f=c.href,g=c.selected,h=c.mockSpacebarClick;c=babelHelpers.objectWithoutPropertiesLoose(c,["id","className","href","selected","mockSpacebarClick"]);f=f||"#";var i={};h&&(i.onKeyDown=this.onKeyDown);delete c.menuAlignh;delete c.menuClassName;delete c.tabComponent;delete c.maxDropdownHeight;delete c.focused;delete c.hideFocusRing;delete c.wrapper;delete c.shouldWrapTab;h=b("React").jsx("a",babelHelpers["extends"]({"aria-haspopup":this.props["aria-haspopup"],"aria-describedby":d},c,{href:f,ref:"tab",role:"tab",className:b("joinClasses")(e,a),"aria-selected":g,children:this.props.children}));return b("React").cloneElement(h,i)};d.componentDidMount=function(){this.focus()};d.componentDidUpdate=function(a){this.props.focused!==a.focused&&this.focus()};d.focus=function(){this.props.focused&&b("Focus").set(this.refs.tab,!this.props.hideFocusRing)};return c}(b("React").Component);d.propTypes={wrapper:a.func.isRequired,shouldWrapTab:a.bool,tabIndex:a.oneOf([-1,0]),selected:a.bool,focused:a.bool,hideFocusRing:a.bool,mockSpacebarClick:a.bool};d.defaultProps={"aria-haspopup":!1,wrapper:c,shouldWrapTab:!0,tabIndex:-1,selected:!1,focused:!1,hideFocusRing:!1,mockSpacebarClick:!0};e.exports=d}),null);
__d("TabBarItemWrapper.react",["React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.getComponent=function(a){return a.component};var c=b.prototype;c.render=function(){return this.props.component};return b}(b("React").Component);e.exports=a}),null);
__d("TabBar.react",["cx","fbt","invariant","BootloadedComponent.react","Event","JSResource","React","ReactDOM","RTLKeys","TabBarItem.react","TabBarItemWrapper.react","clearTimeout","emptyFunction","joinClasses","setTimeout"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();a=h._("More");c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var d,e;for(var f=arguments.length,g=new Array(f),h=0;h<f;h++)g[h]=arguments[h];return(d=e=a.call.apply(a,[this].concat(g))||this,e.$2=!1,e.state={activeTabKey:e.props.activeTabKey||e.props.defaultActiveTabKey,focusedTabKey:null,previousFocusedTabKey:null,visibleTabsCount:0,shouldCalculateVisibleTabs:!0,hideFocusRing:!0},e.onMouseDown=function(){e.setState({hideFocusRing:!0})},e.onKeyDown=function(a){__p&&__p();var d=b("Event").getKeyCode(a);switch(d){case b("RTLKeys").UP:case b("RTLKeys").getRight():case b("RTLKeys").DOWN:case b("RTLKeys").getLeft():var f,g=e.groupTabsByVisibility();g=g.visibleTabs;d=d===b("RTLKeys").UP||d===b("RTLKeys").getLeft();var h=d?-1:1,i=d?0:g.length-1,j=e.getFocusedTabIndex();j===-1&&h===-1&&(j=g.length);j===-1?f=null:j===i&&h===1?f=c.MORE_TAB_KEY:(d=d?Math.max:Math.min,d=d(j+h,i),f=g[d].key);f&&e.setState({focusedTabKey:f,hideFocusRing:!1});break;case b("RTLKeys").RETURN:j=e.getFocusedTab();if(j){h=j.key;i=e.props.onTabClick(h,a);i!==!1&&e.$2&&e.activateTab(h)}break}},e.onKeyUp=function(a){b("Event").getKeyCode(a)===b("RTLKeys").TAB&&e.state.hideFocusRing&&e.setState({hideFocusRing:!1})},e.onBlur=function(){e.setState(function(a){return{previousFocusedTabKey:a.focusedTabKey,focusedTabKey:null}}),e.$1=b("setTimeout")(function(){e.setState({previousFocusedTabKey:null})},c.BLUR_TIMEOUT)},d)||babelHelpers.assertThisInitialized(e)}var d=c.prototype;d.componentDidMount=function(){this.$3(),this.$4(),this.$2=!0};d.componentWillUnmount=function(){b("clearTimeout")(this.$1),this.$2=!1};d.UNSAFE_componentWillReceiveProps=function(a){this.setState(function(b){return{shouldCalculateVisibleTabs:!0,activeTabKey:a.activeTabKey||b.activeTabKey}})};d.shouldComponentUpdate=function(a,b){if(this.state.focusedTabKey&&!b.focusedTabKey)return!1;return!this.state.focusedTabKey&&!b.focusedTabKey&&this.state.previousFocusedTabKey&&!b.previousFocusedTabKey?!1:!0};d.componentDidUpdate=function(){this.state.shouldCalculateVisibleTabs&&this.$3(),this.$4()};d.render=function(){__p&&__p();var a=this,d=this.getTabs(),e=d.length,f=this.getActiveTabIndex();f=d[f];var g=this.getActiveTabIndex(!0),h;f&&(h=f.key);var i=this.props.dropdownTabComponent;i=b("React").jsx(i,{ref:"more",className:"_45hd _2pik",children:b("React").jsx("span",{className:"_1b0",children:this.props.moreLabel})},"_dropdown");if(this.state.shouldCalculateVisibleTabs)d=d.map(function(b,c){return a.$5(b,c,h,null,g,!1,!1)}),e>2&&d.push(i);else{e=this.groupTabsByVisibility();d=e.visibleTabs;e=e.extraTabs;var j=this.isDropdownSelected(),k=this.state.visibleTabsCount,l=this.state.focusedTabKey;l=l&&this.getFocusedTabIndex()===-1?c.MORE_TAB_KEY:l;d=d.map(function(b,c){return a.$5(b,c,h,l,g,!0,!0)});e=e.map(function(b,c){return a.$5(b,c,h,null,g,!0,!1)});if(e.length){var m;k===0&&f&&(m=f);f=m&&m.props.children||this.props.moreLabel;var n="_dropdown";i=b("React").jsx(b("BootloadedComponent.react"),{bootloadLoader:b("JSResource")("TabBarDropdownItem.react").__setRef("TabBar.react"),bootloadPlaceholder:i,menuAlignh:this.props.dropdownMenuAlignh,menuClassName:this.props.dropdownMenuClassName,selected:j,focused:l===c.MORE_TAB_KEY,hideFocusRing:this.state.hideFocusRing,onMouseDown:this.onMouseDown,onFocus:this.onFocus.bind(this,n),onBlur:this.onBlur,ref:"more",label:f,tabComponent:this.props.dropdownTabComponent,maxDropdownHeight:this.props.maxDropdownHeight,children:e},n);k===0?d=i:d.push(i)}}j=Object.assign({},this.props);delete j.moreLabel;delete j.maxTabsVisible;delete j.onTabClick;delete j.activeTabKey;delete j.onHeightCalculated;delete j.onWidthCalculated;delete j.orientation;delete j.alwaysShowActive;delete j.dropdownTabComponent;delete j.shouldCalculateVisibleTabs;return b("React").jsx("ul",babelHelpers["extends"]({},j,{className:b("joinClasses")(this.props.className,"_43o4"+(this.props.orientation==="horizontal"?" _4470":"")+(this.props.orientation==="vertical"?" _4471":"")),role:"tablist",onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp,children:d}))};d.setWidth=function(a){b("ReactDOM").findDOMNode(this).style.width=a,this.setState({shouldCalculateVisibleTabs:!0})};d.setHeight=function(a){b("ReactDOM").findDOMNode(this).style.height=a,this.setState({shouldCalculateVisibleTabs:!0})};d.$4=function(){this.props.orientation==="vertical"?this.$6():this.$7()};d.$6=function(){this.props.onWidthCalculated(b("ReactDOM").findDOMNode(this).clientWidth)};d.$7=function(){this.props.onHeightCalculated(b("ReactDOM").findDOMNode(this).clientHeight)};d.$3=function(){__p&&__p();var a=this,b=this.getTabs(),c=b.length,d=Object.keys(this.refs).map(function(b){return a.$8(a.refs[b])}),e=Math.ceil(this.$8(this)),f=this.$8(this.refs.more),g=Math.min(c,this.props.maxTabsVisible);if(!this.props.shouldCalculateVisibleTabs){this.setState({visibleTabsCount:g,shouldCalculateVisibleTabs:!1});return}var h=this.getActiveTabIndex();this.props.alwaysShowActive&&h!==-1&&(b.unshift(b.splice(h,1)[0]),d.unshift(d.splice(h,1)[0]));g=0;h=0;for(var i=0;i<c;i++){var j=d[i],k=b[i].key||"";if(h+j>e&&!k.startsWith("visual_poll_")){if(g>0&&c>2)while(g>0&&(h+f>e||c-g<2))g--,h-=d[g];else g=0;break}g++;h+=j}this.setState({visibleTabsCount:Math.min(g,this.props.maxTabsVisible),shouldCalculateVisibleTabs:!1})};d.$8=function(a){a=b("ReactDOM").findDOMNode(a);if(!a||!(a instanceof HTMLElement))return 0;a=a.getBoundingClientRect();var c=a.width;a=a.height;return this.props.orientation==="vertical"?a:c};d.getActiveTabIndex=function(a){__p&&__p();a===void 0&&(a=!1);var b=this.state.activeTabKey;if(a){a=this.groupTabsByVisibility();a=a.visibleTabs;a=a}else a=this.getTabs();return a.findIndex(function(a){return b!=null&&a&&a.key===b})};d.getFocusedTabIndex=function(){var a=this.state.focusedTabKey||this.state.previousFocusedTabKey,b=this.groupTabsByVisibility();b=b.visibleTabs;return b.findIndex(function(b){return a!=null&&b&&b.key===a})};d.getFocusedTab=function(){var a=this.state.focusedTabKey,b=this.groupTabsByVisibility();b=b.visibleTabs;var c=b.findIndex(function(b){return a!=null&&b&&b.key===a});return b[c]};d.onClick=function(a,b){b=this.props.onTabClick(a,b);b!==!1&&this.$2&&this.activateTab(a)};d.onFocus=function(a,c){b("clearTimeout")(this.$1),a!==this.state.focusedTabKey&&(this.setState({focusedTabKey:a,previousFocusedTabKey:null}),c.preventDefault(),c.stopPropagation())};d.$5=function(a,d,e,f,g,h,j){__p&&__p();var k=this;a.key!==c.MORE_TAB_KEY||i(0,4969);e=e!=null&&e===a.key;f=f!=null&&f===a.key;f={selected:e,focused:f,tabIndex:e||g===-1&&d===0?0:-1,hideFocusRing:this.state.hideFocusRing};h?(f.onClick=function(b,c){c=(c=c)!=null?c:b;k.onClick(a.key,c)},f.onMouseDown=this.onMouseDown):f.mockSpacebarClick=!1;j&&(f.onFocus=this.onFocus.bind(this,a.key),f.onBlur=this.onBlur);a=b("React").cloneElement(a,f);return b("React").jsx(b("TabBarItemWrapper.react"),{component:a,ref:d},a.key)};d.activateTab=function(a){a&&this.setState({activeTabKey:a,focusedTabKey:a,shouldCalculateVisibleTabs:!0})};d.getTabs=function(){var a=[];b("React").Children.forEach(this.props.children,function(b){b&&a.push(b)});return a};d.groupTabsByVisibility=function(){__p&&__p();var a=this.state.visibleTabsCount,b=this.getTabs(),c=this.getActiveTabIndex(),d,e;if(!this.props.alwaysShowActive||c<a||a===0)e=b.slice(a),d=b.slice(0,a);else{c=b.splice(c,1)[0];a=a>0?a-1:0;e=b.slice(a);d=b.slice(0,a);d.push(c)}return{visibleTabs:d,extraTabs:e}};d.isDropdownSelected=function(){var a=this.state.visibleTabsCount,b=this.getActiveTabIndex();a=!this.props.alwaysShowActive&&b>=a||a===0&&b>-1;return a};return c}(b("React").Component);c.MORE_TAB_KEY="_moreTab";c.BLUR_TIMEOUT=120;c.Tab=b("TabBarItem.react");c.defaultProps={alwaysShowActive:!0,className:"",dropdownTabComponent:b("TabBarItem.react"),maxTabsVisible:Infinity,moreLabel:a,onHeightCalculated:b("emptyFunction").thatReturns,onTabClick:b("emptyFunction").thatReturnsTrue,onWidthCalculated:b("emptyFunction").thatReturns,orientation:"horizontal",shouldCalculateVisibleTabs:!0};e.exports=c}),null);
__d("XUINotice.react",["ix","cx","fbt","Image.react","React","XUICloseButton.react","asset","joinClasses"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j={notify:{altText:i._("Notice"),className:null,iconSrc:g("504080")},success:{altText:i._("Success"),className:"_3qh4",iconSrc:g("505224")},warn:{altText:i._("Warning"),className:"_585o",iconSrc:g("478325")},recommend:{altText:i._("Recommend"),className:"_1wpa",iconSrc:g("478325")},quiet:{altText:i._("Quiet"),className:"_5d83",iconSrc:g("504080")}};a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,d=a.children,e=a.className,f=a.onDismiss,g=a.use;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","className","onDismiss","use"]);g=g==null?c.defaultProps.use:g;g=j[g];e=b("joinClasses")("_585n",g.className,e);var h=null;f&&(h=b("React").jsx(b("XUICloseButton.react"),{className:"_585q",href:"#",onClick:f}));f="_585r"+(f?" _2i-a":"")+(this.props.size==="medium"?" _50f4":"")+(this.props.size==="small"?" _50f3":"");return b("React").jsxs("div",babelHelpers["extends"]({},a,{className:e,children:[b("React").jsx(b("Image.react"),{alt:g.altText,className:"_585p",src:g.iconSrc}),h,b("React").jsx("div",{className:f,children:d})]}))};return c}(b("React").Component);a.defaultProps={use:"notify",size:"medium"};e.exports=a}),null);
__d("XUIPageNavigationItem.react",["cx","AsyncRequest","React","TabBarItem.react","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.onClick=function(a,c){if(d.props.disabled)return null;d.props.ajaxify&&d.props.rel==="async"&&new(b("AsyncRequest"))(d.props.ajaxify).send();return d.props.onClick?d.props.onClick(a,c):!0},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){__p&&__p();var a=(this.props.disabled?"_7x7s":"")+" _5vwz"+(this.props.selected?" _5vwy":""),c=this.props;if(c.ajaxify&&c.rel==="async"){var d=c;d.ajaxify;d.rel;d=babelHelpers.objectWithoutPropertiesLoose(d,["ajaxify","rel"]);c=d;c.onClick=this.onClick}d=this.props.children;var e,f=typeof d==="string"?d:b("React").isValidElement(d)&&d.props.children&&d.props.children.textContent;if(f){var g=c.maxWidth!=null?{maxWidth:c.maxWidth}:null;d=b("React").jsx("div",{className:"_4xjz",children:d});e=b("React").jsx("div",{className:"_4xj-","aria-hidden":!0,style:g,children:f})}f=(g=c.itemContentClass)!=null?g:"_4jq5";return b("React").jsxs(b("TabBarItem.react"),babelHelpers["extends"]({},c,{className:b("joinClasses")(this.props.className,a),children:[b("React").jsxs("div",{className:f,children:[d,e]}),b("React").jsx("span",{className:this.props.disabled?"":"_13xf"})]}))};return c}(b("React").Component);a.defaultProps={selected:!1};e.exports=a}),null);
__d("XUIPageNavigationGroup.react",["React","TabBar.react","XUIPageNavigationItem.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.componentDidUpdate=function(){this.refs.bar.setWidth(this.props.width)};d.componentDidMount=function(){this.refs.bar.setWidth(this.props.width)};d.render=function(){return b("React").jsx(b("TabBar.react"),babelHelpers["extends"]({},this.props,{ref:"bar",children:this.props.children}))};return c}(b("React").Component);c.Item=b("XUIPageNavigationItem.react");c.propTypes={moreLabel:a.string,maxTabsVisible:function(a,b,c){a=a[b];if(a!=null&&!(typeof a==="number"&&a>=0))throw new Error("Invalid `"+b+"` supplied to `"+c+"`, expected positive integer.")},width:a.string};c.defaultProps={maxTabsVisible:Infinity};e.exports=c}),null);
__d("XUIPageNavigation.react",["csx","cx","invariant","Arbiter","CSS","DOMQuery","Event","LeftRight.react","React","ReactDOM","Run","SubscriptionsHandler","UITinyViewportAction","Vector","ViewportBounds","XUIPageNavigationGroup.react","joinClasses","killswitch","throttle"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=15;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={activeTabKey:void 0,leftWidth:null},d.onTabClick=function(a,c){if(d.props.onTabClick){var e=d.props.onTabClick(a,c);if(!e)return e}b("Arbiter").inform("pageNavigation/tabChanged");c.button===0&&d.setState({activeTabKey:a});return!0},d.resizeNavbarGroups=function(){__p&&__p();if(!d.refs.left)return;var a=b("ReactDOM").findDOMNode(babelHelpers.assertThisInitialized(d));a=a instanceof Element?a.clientWidth:0;if(isNaN(a)||a===0)return;if(!isNaN(d.$4)&&d.refs.right){var c=a-d.$4-j;d.$4<c&&(c=d.$4-j);d.setState({rightWidth:c+"px"})}if(!isNaN(d.$3)){c=a-d.$3-j;c<d.$3&&(c=d.$3+j);d.setState({leftWidth:String(c)+"px"})}else d.refs.right||d.setState({leftWidth:String(a)+"px"})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){__p&&__p();var a=this;this.$5=new(b("SubscriptionsHandler"))();this.resizeNavbarGroups();this.$6();var c="^.fixed_elem._5vx1";this.wrapper=b("DOMQuery").scry(b("ReactDOM").findDOMNode(this),c)[0];this.wrapper&&(this.$7(),b("killswitch")("SEARCH_WWW_XUIPAGENAVIGATION_AUGMENT_FIXED_POSITION")||b("Run").onCleanupOrLeave(this.wrapper,function(){a.$1!=null&&a.$1.remove()}),b("killswitch")("SEARCH_WWW_XUIPAGENAVIGATION_AUGMENT_FIXED_POSITION")||b("UITinyViewportAction").isTiny()&&b("CSS").removeClass(this.wrapper,"fixed_elem"),this.$5.addSubscriptions(b("UITinyViewportAction").subscribe("change",function(){this.$1.remove(),b("UITinyViewportAction").isTiny()?b("killswitch")("SEARCH_WWW_XUIPAGENAVIGATION_AUGMENT_FIXED_POSITION")||b("CSS").removeClass(this.wrapper,"fixed_elem"):(b("killswitch")("SEARCH_WWW_XUIPAGENAVIGATION_AUGMENT_FIXED_POSITION")||b("CSS").addClass(this.wrapper,"fixed_elem"),this.$7())}.bind(this))));this.props.showDropShadowOnScroll&&(this.wrapper||b("DOMQuery").scry(b("ReactDOM").findDOMNode(this),"^._k").length)&&this.props.scrollThreshold!==null&&this.$8()};d.componentWillUnmount=function(){this.$5.release()};d.onWidthCalculated=function(a,b){a?this.$3=b:this.$4=b};d.render=function(){__p&&__p();var a=this,c,d="_5vx2 _5vx4";d=b("joinClasses")(d,this.props.className);var e=[],f=(c=(c=this.props.activeTabKey)!=null?c:this.state.activeTabKey)!=null?c:this.props.defaultActiveTabKey;b("React").Children.forEach(this.props.children,function(c,d){if(c===null)return;var g={onTabClick:a.onTabClick,activeTabKey:f,onWidthCalculated:a.onWidthCalculated.bind(a,d),ref:d?"right":"left",key:d,width:void 0};d===0&&(g.width=a.state.leftWidth);e.push(b("React").cloneElement(c,g))});e.length===1||e.length===2||i(0,114,e.length);return b("React").jsx("div",{className:d,children:b("React").jsx(b("LeftRight.react"),{className:"_5vx7",direction:this.props.floatDirection,children:e})})};d.$7=function(){var a=this.wrapper.offsetHeight,c=b("ViewportBounds").getTop();this.$1=b("ViewportBounds").addTop(c+a);b("killswitch")("SEARCH_WWW_XUIPAGENAVIGATION_AUGMENT_FIXED_POSITION")&&b("Arbiter").subscribe("page_transition",function(){this.$1.remove()})};d.$6=function(){this.$5.addSubscriptions(b("Event").listen(window,"resize",b("throttle")(this.resizeNavbarGroups,30)))};d.$8=function(){var a=this;this.$5.addSubscriptions(b("Event").listen(window,"scroll",function(){var c;c=b("Vector").getScrollPosition().y>((c=a.props.scrollThreshold)!=null?c:0);if(a.$2===c)return;a.$2=c;var d=b("ReactDOM").findDOMNode(a);d!=null&&(d instanceof Element||typeof d==="string")&&b("CSS").conditionClass(d,"_51j8",c)}))};return c}(b("React").PureComponent);a.defaultProps={showDropShadowOnScroll:!0,scrollThreshold:0,floatDirection:"both"};a.Group=b("XUIPageNavigationGroup.react");a.Item=b("XUIPageNavigationGroup.react").Item;e.exports=a}),null);
__d("InputSelection",["DOM","Focus"],(function(a,b,c,d,e,f){__p&&__p();a={get:function(a){__p&&__p();try{if(typeof a.selectionStart==="number")return{start:a.selectionStart,end:a.selectionEnd}}catch(a){return{start:0,end:0}}if(!document.selection)return{start:0,end:0};var c=document.selection.createRange();if(c.parentElement()!==a)return{start:0,end:0};var d=a.value.length;if(b("DOM").isNodeOfType(a,"input"))return{start:-c.moveStart("character",-d),end:-c.moveEnd("character",-d)};else{var e=c.duplicate();e.moveToElementText(a);e.setEndPoint("StartToEnd",c);a=d-e.text.length;e.setEndPoint("StartToStart",c);return{start:d-e.text.length,end:a}}},set:function(a,c,d){__p&&__p();c=c;d=d;d===void 0&&(d=c);if(document.selection){if(a.tagName=="TEXTAREA"){var e=(a.value.slice(0,c).match(/\r/g)||[]).length,f=(a.value.slice(c,d).match(/\r/g)||[]).length;c-=e;d-=e+f}e=a.createTextRange();e.collapse(!0);e.moveStart("character",c);e.moveEnd("character",d-c);e.select()}else a.selectionStart=c,a.selectionEnd=Math.min(d,a.value.length),b("Focus").set(a)}};e.exports=a}),null);
__d("PopoverMenuContextMinWidth",["cx","CSS","Style","shield"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){__p&&__p();var c=this;this._onSetMenu=function(){c._menu=c._popoverMenu.getMenu();c._showSubscription=c._popover.subscribe("show",b("shield")(c._updateWidth,c));var a=c._updateWidth.bind(c);c._menuSubscription=c._menu.subscribe(["change","resize"],function(){window.setTimeout(a,0)});c._updateWidth()};this._popoverMenu=a;this._popover=a.getPopover()}var c=a.prototype;c.enable=function(){this._setMenuSubscription=this._popoverMenu.subscribe("setMenu",b("shield")(this._onSetMenu,this))};c.disable=function(){this._setMenuSubscription.unsubscribe(),this._setMenuSubscription=null,this._showSubscription&&(this._showSubscription.unsubscribe(),this._showSubscription=null),this._menuSubscription&&(this._menuSubscription.unsubscribe(),this._menuSubscription=null)};c._updateWidth=function(){var a=this._menu.getRoot(),c=this._popoverMenu.getTriggerElem();c=c.offsetWidth;b("Style").set(a,"min-width",c+"px");b("CSS").conditionClass(a,"_575s",c>=a.offsetWidth)};return a}();Object.assign(a.prototype,{_setMenuSubscription:null,_showSubscription:null,_menuSubscription:null});e.exports=a}),null);
__d("FacebarStructuredFragment",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a,b){if(a&&b)return a.toLowerCase()==b.toLowerCase();else return!a&&!b}var h=new RegExp("[\\u0590-\\u07bf\\u08a0-\\u08ff\\ufb1d-\\ufb4f\\ufb50-\\ufefc\\u200e-\\u200f\\u202a-\\u202e]");a=function(){__p&&__p();function a(a){this._text=String(a.text),this._uid=a.uid?String(a.uid):null,this._type=a.type?String(a.type):null,this._typeParts=null,this._isLocal=Boolean(a.isLocal),this._categoryName=a.categoryName?a.categoryName:null}var b=a.prototype;b.getText=function(){return this._text};b.getUID=function(){return this._uid};b.getType=function(){return this._type};b.getTypePart=function(a){return this._getTypeParts()[a]};b.getLength=function(){return this._text.length};b.isType=function(a){for(var b=0;b<arguments.length;b++)if(!g(arguments[b],this.getTypePart(b)))return!1;return!0};b.isLocal=function(){return this._isLocal};b.getCategoryName=function(){return this._categoryName};b.isWhitespace=function(){return/^\s*$/.test(this._text)};b.hasRTL=function(){return h.test(this._text)};b.toStruct=function(){return{text:this._text,type:this._type,uid:this._uid,isLocal:this._isLocal,categoryName:this._categoryName}};b.getHash=function(a){a=a!=null?this._getTypeParts().slice(0,a).join(":"):this._type;return String(a)+"::"+this._text};b._getTypeParts=function(){var a=this._typeParts;a==null&&(a=this._type!=null?this._type.split(":"):[],this._typeParts=a);return a};return a}();e.exports=a}),null);
__d("FacebarStructuredText",["FacebarStructuredFragment","createArrayFromMixed"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=/\s+$/;function h(a){if(!a)return[];else if(a instanceof k)return a.toArray();else return b("createArrayFromMixed")(a).map(function(a){return new(b("FacebarStructuredFragment"))(a)})}function i(a){return new(b("FacebarStructuredFragment"))({text:a,type:"text"})}function j(a,c,d){var e=a.getText();c=e.replace(c,d);if(e!=c)return new(b("FacebarStructuredFragment"))({text:c,type:a.getType(),uid:a.getUID()});else return a}var k=function(){__p&&__p();function a(a){this._fragments=a||[],this._hash=null}var b=a.prototype;b.matches=function(a,b){if(a){var c=this._fragments,d=a._fragments;return c.length==d.length&&!c.some(function(a,c){var e;!b&&a.getUID()?e=a.getUID()!=d[c].getUID():e=a.getText()!=d[c].getText()||a.getType()!=d[c].getType();return e||a.isLocal()!=d[c].isLocal()})}return!1};b.trim=function(){var b=null,c=null;this.forEach(function(a,d){a.isWhitespace()||(b===null&&(b=d),c=d)});if(c!==null){var d=this._fragments.slice(b,c+1);d.push(j(d.pop(),g,""));return new a(d)}else return new a([])};b.pad=function(){var b=this.getFragment(-1);if(b&&!g.test(b.getText())&&b.getText()!=="")return new a(this._fragments.concat(i(" ")));else return this};b.forEach=function(a){this._fragments.forEach(a);return this};b.matchType=function(a){var b=null;for(var c=0;c<this._fragments.length;c++){var d=this._fragments[c],e=d.isType.apply(d,arguments);if(e&&!b)b=d;else if(e||!d.isWhitespace())return null}return b};b.hasType=function(a){var b=arguments;return this._fragments.some(function(a){return!a.isWhitespace()&&a.isType.apply(a,b)})};b.isLocal=function(){return this._fragments.some(function(a){return a.isLocal()})};b.getCategoryName=function(){var a=this._fragments.filter(function(a){return a.getCategoryName()});return a.length>0?a[0].getCategoryName():null};b.endsOnType=function(a){var b=arguments,c=this._fragments[this._fragments.length-1];return!!c&&!c.isWhitespace()&&c.isType.apply(c,b)};b.isEmptyOrWhitespace=function(){return!this._fragments.some(function(a){return!a.isWhitespace()})};b.hasRTL=function(){return this._fragments.some(function(a){return a.hasRTL()})};b.isEmpty=function(){return this.getLength()===0};b.getFragment=function(a){return this._fragments[a>=0?a:this._fragments.length+a]};b.getCount=function(){return this._fragments.length};b.getLength=function(){return this._fragments.reduce(function(a,b){return a+b.getLength()},0)};b.toStruct=function(){return this._fragments.map(function(a){return a.toStruct()})};b.toArray=function(){return this._fragments.slice()};b.toString=function(){return this._fragments.map(function(a){return a.getText()}).join("")};b.getHash=function(){this._hash===null&&(this._hash=this._fragments.map(function(a){if(a.getUID())return"[["+a.getHash(1)+"]]";else return a.getText()}).join(""));return this._hash};a.fromStruct=function(b){return new a(h(b))};a.fromString=function(b){return new a([i(b.toString())])};return a}();e.exports=k}),null);
__d("FacebarNavigation",["csx","Arbiter","DOMQuery","FacebarBootloader","FacebarStructuredText","FlipDirection","Input","QueryHistory","URI"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=null,j=null,k=null,l=!1,m=!0,n=!1;function o(a,b){n||(k=a),n=!1,l=b,m=!1,p()}function p(){if(m)return;else j?(l&&j.pageTransition(),j.setPageQuery(k),m=!0):i&&k&&!b("Input").getValue(i)&&b("Input").setValue(i,k.structure.toString()+" ");i!=null&&(b("FlipDirection").setDirection(i),i.blur())}function q(a){return String(a.getPath()).startsWith("/search/")&&a.getQueryData().epa==="SERP_TAB"&&!a.getQueryData().hard_refresh}b("Arbiter").subscribe("page_transition",function(a,c){q(c.uri)||o(b("QueryHistory").get(c.uri),!0)});b("Arbiter").subscribe("save_facebar_query",function(a,b){n=!0});a={registerInput:function(a){i=b("DOMQuery").scry(a,"._586f")[0],i==null&&(i=b("DOMQuery").scry(a,"._1frb")[0]),p()},registerBehavior:function(a){j=a,p()},setPageQuery:function(a){b("QueryHistory").set((h||(h=b("URI"))).getNextURI(),a),a.structure instanceof b("FacebarStructuredText")||(a.structure=b("FacebarStructuredText").fromStruct(a.structure)),o(a,!1),b("FacebarBootloader").requestSearch()}};e.exports=a}),null);
__d("XUIPageNavigationShim",["DOMContainer.react","PagesEventObserver","React","isNode"],(function(a,b,c,d,e,f){__p&&__p();var g=function(){var a=0;return function(){return"XUIPageNavigationShim-"+a++}}();function h(a){__p&&__p();var c;a.children&&(c=a.children.map(function(a){if(typeof a==="object"&&typeof a.ctor==="function")return h(a);else if(b("isNode")(a))return b("React").jsx(b("DOMContainer.react"),{children:a},g());else return a}),c.length===1&&(c=c[0]));var d=a.ctor;a.props.ignoreTabClick?a.props.onTabClick=function(){return!1}:a.props.pageid&&(a.props.onTabClick=function(c,d){b("PagesEventObserver").notify("admin_nav_tab_click",a.props.pageid,{tab:c})});return b("React").jsx(d,babelHelpers["extends"]({},a.props,{children:c}),g())}a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.render=function(){return h(this.props)};return b}(b("React").Component);e.exports=a}),null);