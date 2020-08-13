if (self.CavalryLogger) { CavalryLogger.start_js(["xMvz3"]); }

__d("AnimatedImageMarauderLogger",["MarauderLogger"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(){this.$1=!1,this.$2=null,this.$3=null,this.$4=!1,this.$5=!1,this.$6=!1,this.$7=null,this.$8=!1,this.$9=null,this.$10=null,this.$11=0,this.$12=!1}var c=a.prototype;c.initSession=function(a,b,c,d,e,f){this.$1=a,this.$13=b,this.$6=d,this.$7=c,this.$8=e,this.$9=f,this.$4=!0};c.hasCurrentSession=function(){return this.$4};c.logAnimatedRender=function(a){this.$10&&this.$11===0&&(this.$2=a-this.$10,this.$5=!0)};c.logStaticClick=function(a){this.$10=a,this.$12=!0};c.endSession=function(a){this.$9&&(this.$11=a-this.$9),this.$4=!1,this.logSession()};c.logSession=function(){var a={autoplay:this.$1,download_time:this.$2,is_video:this.$6,image_src:this.$7,fbid:this.$13,load_succeeded:this.$5,plays_inline:this.$8,time_spent:this.$11,was_tapped:this.$12};b("MarauderLogger").log("animated_image_session",void 0,a)};return a}();e.exports=a}),null);
__d("FeedAnimatedImageShare.react",["cx","AnimatedImageMarauderLogger","DOMContainer.react","Event","Image.react","OnVisible.react","React","ReactDOM","ReactTransitionEvents","SubscriptionsHandler"],(function(a,b,c,d,e,f,g){__p&&__p();var h=20;a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={disableAutoplay:!1,hasPlayedAtleastOnce:!1,isLoaded:!1,isLoading:!1,isPlaying:!1,wasPlaying:!1},c.$3=null,c.$5=function(){c.setState({disableAutoplay:!0});if(!c.props.isPlayableInline){window.open(c.props.href,"_blank");return}c.state.isPlaying?c.pause("user_initiated"):c.play("user_initiated")},c.$7=function(){c.$2.reset()},c.$13=function(a){c.$2=a},c.$14=function(){c.$11(),!c.state.isPlaying&&c.props.isPlayableInline&&(c.$8()||c.state.wasPlaying)&&c.play(c.state.wasPlaying?"page_visibility_initiated":"autoplay_initiated")},c.$6=function(){c.$12(),c.setState({wasPlaying:c.state.isPlaying}),c.state.isPlaying&&c.pause("page_visibility_initiated")},c.play=function(a){c.$1.logStaticClick(Date.now());c.setState({isPlaying:!0});if(c.props.videoController){c.state.hasPlayedAtleastOnce||c.setState({hasPlayedAtleastOnce:!0});var b=c.props.videoController;b&&b.play(a)}else c.$9()},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){this.$1=new(b("AnimatedImageMarauderLogger"))(),this.refs.playButton&&b("ReactTransitionEvents").addEndEventListener(b("ReactDOM").findDOMNode(this.refs.playButton),this.play),this.$4()};d.$4=function(){var a=this;if(!this.props.videoController||!this.refs.videoPlayer)return;b("ReactDOM").findDOMNode(this.refs.videoPlayer).addEventListener("click",this.$5);this.props.videoController.addListener("finishPlayback",function(){window.setTimeout(function(){a.props.videoController.play("loop_initiated")},1)});this.$3=new(b("SubscriptionsHandler"))();this.$3.addSubscriptions(b("Event").listen(window,"blur",this.$6),b("Event").listen(window,"focus",this.$7))};d.componentWillUnmount=function(){this.$3&&this.$3.release()};d.$8=function(){return this.props.autoplay&&!this.state.disableAutoplay};d.$9=function(){var a=this;if(this.state.isLoading)return;this.setState({isLoading:!0});var b=new Image();b.onload=function(){a.setState({hasPlayedAtleastOnce:!0,isLoaded:!0,isLoading:!1}),a.$1.logAnimatedRender(Date.now())};b.src=this.props.animatedSrc};d.$10=function(){if(this.props.disableClickToPlayButton)return null;var a=this.props.isPlayableInline&&(!this.state.isPlaying||this.state.isLoading),c=this.state.isLoading,d=!this.state.hasPlayedAtleastOnce&&this.state.isLoaded;return b("React").jsxs("div",{className:a?"":"hidden_elem",onClick:this.$5,role:"presentation",children:[b("React").jsx("div",{ref:"playButton",className:"_393-"+(d?" _30a":"")}),b("React").jsx("div",{className:"_30b"+(c?" _30c":"")+(d?" _30e":"")}),b("React").jsx("div",{className:"_30h"+(d?" _30i":"")})]})};d.$11=function(){this.$1.initSession(this.props.autoplay,this.props.fbid,this.props.href,this.props.isPlayableInline,!!this.props.videoController,Date.now())};d.$12=function(){this.$1&&this.$1.hasCurrentSession()&&this.$1.endSession(Date.now())};d.$15=function(){return!this.props.staticSrc?null:b("React").jsx(b("Image.react"),{className:"_9_m _30j",src:this.props.staticSrc,width:this.props.width,height:this.props.height,onClick:this.$5})};d.$16=function(){return b("React").jsx(b("Image.react"),{className:"_9_m",src:this.props.animatedSrc,width:this.props.width,height:this.props.height,onClick:this.$5})};d.$17=function(){return!this.state.isPlaying||!this.state.isLoaded||!this.props.isPlayableInline?this.$15():this.$16()};d.$18=function(){return!this.props.videoElement?null:b("React").jsxs("span",{children:[b("React").jsx("span",{className:this.state.hasPlayedAtleastOnce?"":"hidden_elem",children:b("React").jsx(b("DOMContainer.react"),{ref:"videoPlayer",children:this.props.videoElement})}),b("React").jsx("span",{className:this.state.hasPlayedAtleastOnce?"hidden_elem":"",children:this.$15()})]})};d.$19=function(){if(!this.state.isPlaying)if(this.props.overlayNode)return this.props.overlayNode;else if(this.props.overlay)return b("React").jsx(b("DOMContainer.react"),{children:this.props.overlay});return null};d.pause=function(a){this.setState({isPlaying:!1}),this.props.videoController&&this.props.videoController.pause(a)};d.render=function(){var a=-1*(this.props.height*h/100);return b("React").jsx(b("OnVisible.react"),{onVisible:this.$14,onHidden:this.$6,buffer:a,ref:this.$13,children:b("React").jsxs("div",{className:this.props.className,children:[this.$18()||this.$17(),this.$10(),this.$19()]})})};return c}(b("React").Component);a.defaultProps={autoplay:!1,isPlayableInline:!1};e.exports=a}),null);