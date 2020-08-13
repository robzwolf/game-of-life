if (self.CavalryLogger) { CavalryLogger.start_js(["+MiHC"]); }

__d("VideoPlayerShakaPerformanceTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("vpsp_proxy:VideoPlayerShakaPerformanceLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("vpsp_proxy:VideoPlayerShakaPerformanceLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("vpsp_proxy:VideoPlayerShakaPerformanceLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAccessToken=function(a){this.$1.access_token=a;return this};c.setAdditionalBufferedRanges=function(a){this.$1.additional_buffered_ranges=a;return this};c.setAppendedBufferMs=function(a){this.$1.appended_buffer_ms=a;return this};c.setBandwidthEstimate=function(a){this.$1.bandwidth_estimate=a;return this};c.setClientTimeBegin=function(a){this.$1.client_time_begin=a;return this};c.setClientTimeEnd=function(a){this.$1.client_time_end=a;return this};c.setCode=function(a){this.$1.code=a;return this};c.setConcluder=function(a){this.$1.concluder=a;return this};c.setConnectionQualityLevel=function(a){this.$1.connection_quality_level=a;return this};c.setContentLengthHeader=function(a){this.$1.content_length_header=a;return this};c.setDevicePixelRatioFloat=function(a){this.$1.device_pixel_ratio_float=a;return this};c.setDroppedFrames=function(a){this.$1.dropped_frames=a;return this};c.setDynamicBitrate=function(a){this.$1.dynamic_bitrate=a;return this};c.setEdgeHitHeader=function(a){this.$1.edge_hit_header=a;return this};c.setEnded=function(a){this.$1.ended=a;return this};c.setError=function(a){this.$1.error=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setExpectedLength=function(a){this.$1.expected_length=a;return this};c.setInitiator=function(a){this.$1.initiator=a;return this};c.setIsDrm=function(a){this.$1.is_drm=a;return this};c.setIsLive=function(a){this.$1.is_live=a;return this};c.setIsMuted=function(a){this.$1.is_muted=a;return this};c.setIsPageVisible=function(a){this.$1.is_page_visible=a;return this};c.setIsServableViaFbms=function(a){this.$1.is_servable_via_fbms=a;return this};c.setIsTemplatedManifest=function(a){this.$1.is_templated_manifest=a;return this};c.setLastBufferedEnd=function(a){this.$1.last_buffered_end=a;return this};c.setLastBufferedStart=function(a){this.$1.last_buffered_start=a;return this};c.setLastBufferingEventEndTime=function(a){this.$1.last_buffering_event_end_time=a;return this};c.setLastPlayingEventTime=function(a){this.$1.last_playing_event_time=a;return this};c.setLength=function(a){this.$1.length=a;return this};c.setLiveheadDelta=function(a){this.$1.livehead_delta=a;return this};c.setLogicalCpuCount=function(a){this.$1.logical_cpu_count=a;return this};c.setLowestQualityRepresentationID=function(a){this.$1.lowest_quality_representation_id=a;return this};c.setManifestType=function(a){this.$1.manifest_type=a;return this};c.setOriginHitHeader=function(a){this.$1.origin_hit_header=a;return this};c.setParentID=function(a){this.$1.parent_id=a;return this};c.setPlayerOriginCallerSpecified=function(a){this.$1.player_origin_caller_specified=a;return this};c.setPlayerSuborigin=function(a){this.$1.player_suborigin=a;return this};c.setPlayerVersion=function(a){this.$1.player_version=a;return this};c.setPlayhead=function(a){this.$1.playhead=a;return this};c.setPreloadTime=function(a){this.$1.preload_time=a;return this};c.setPreviousRepresentationID=function(a){this.$1.previous_representation_id=a;return this};c.setPriorityFloat=function(a){this.$1.priority_float=a;return this};c.setPushed=function(a){this.$1.pushed=a;return this};c.setReason=function(a){this.$1.reason=a;return this};c.setRepresentationID=function(a){this.$1.representation_id=a;return this};c.setRescheduleCount=function(a){this.$1.reschedule_count=a;return this};c.setResource=function(a){this.$1.resource=a;return this};c.setResult=function(a){this.$1.result=a;return this};c.setScriptPath=function(a){this.$1.script_path=a;return this};c.setSegmentCount=function(a){this.$1.segment_count=a;return this};c.setSegmentEndTime=function(a){this.$1.segment_end_time=a;return this};c.setSegmentStartTime=function(a){this.$1.segment_start_time=a;return this};c.setSegmentTimeGap=function(a){this.$1.segment_time_gap=a;return this};c.setSequentialID=function(a){this.$1.sequential_id=a;return this};c.setSession=function(a){this.$1.session=a;return this};c.setState=function(a){this.$1.state=a;return this};c.setStreamSwitchReason=function(a){this.$1.stream_switch_reason=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setTimeBetweenBytesMax=function(a){this.$1.time_between_bytes_max=a;return this};c.setTimeSinceMainThreadAvailable=function(a){this.$1.time_since_main_thread_available=a;return this};c.setTimeToFirstByte=function(a){this.$1.time_to_first_byte=a;return this};c.setTimeToLastByte=function(a){this.$1.time_to_last_byte=a;return this};c.setTimeToRequestSent=function(a){this.$1.time_to_request_sent=a;return this};c.setTimeToRequestStart=function(a){this.$1.time_to_request_start=a;return this};c.setTotalFrames=function(a){this.$1.total_frames=a;return this};c.setType=function(a){this.$1.type=a;return this};c.setUpdatePeriod=function(a){this.$1.update_period=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setVideoDuration=function(a){this.$1.video_duration=a;return this};c.setVideoID=function(a){this.$1.video_id=a;return this};c.setVideoPlaybackExperienceIssue=function(a){this.$1.video_playback_experience_issue=a;return this};c.setWasDelayed=function(a){this.$1.was_delayed=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={access_token:!0,additional_buffered_ranges:!0,appended_buffer_ms:!0,bandwidth_estimate:!0,client_time_begin:!0,client_time_end:!0,code:!0,concluder:!0,connection_quality_level:!0,content_length_header:!0,device_pixel_ratio_float:!0,dropped_frames:!0,dynamic_bitrate:!0,edge_hit_header:!0,ended:!0,error:!0,event:!0,expected_length:!0,initiator:!0,is_drm:!0,is_live:!0,is_muted:!0,is_page_visible:!0,is_servable_via_fbms:!0,is_templated_manifest:!0,last_buffered_end:!0,last_buffered_start:!0,last_buffering_event_end_time:!0,last_playing_event_time:!0,length:!0,livehead_delta:!0,logical_cpu_count:!0,lowest_quality_representation_id:!0,manifest_type:!0,origin_hit_header:!0,parent_id:!0,player_origin_caller_specified:!0,player_suborigin:!0,player_version:!0,playhead:!0,preload_time:!0,previous_representation_id:!0,priority_float:!0,pushed:!0,reason:!0,representation_id:!0,reschedule_count:!0,resource:!0,result:!0,script_path:!0,segment_count:!0,segment_end_time:!0,segment_start_time:!0,segment_time_gap:!0,sequential_id:!0,session:!0,state:!0,stream_switch_reason:!0,time:!0,time_between_bytes_max:!0,time_since_main_thread_available:!0,time_to_first_byte:!0,time_to_last_byte:!0,time_to_request_sent:!0,time_to_request_start:!0,total_frames:!0,type:!0,update_period:!0,vc:!0,video_duration:!0,video_id:!0,video_playback_experience_issue:!0,was_delayed:!0,weight:!0};e.exports=a}),null);
__d("VideoPlayerMainThreadAvailability",["VideoPlayerShakaGlobalConfig","Visibility","nativeRequestAnimationFrame","performanceNow","requestAnimationFrame","requestIdleCallback"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=window.__fbNativeSetTimeout,i=a.__fbNativeClearTimeout,j=window.requestIdleCallback,k=window.cancelIdleCallback,l=function(a){var b=function b(){a(b)};return b},m=function(a,b){var c=function c(){a(c,b)};return c},n=function(a,b){var c=function c(){a(c,b)};return c};c=function(){__p&&__p();function a(){this.$1=!1,this.$2=null,this.$3=null,this.$4=null}var c=a.prototype;c.enable=function(){if(this.$1||!this.$5())return;this.$6();this.$7();this.$1=!0};c.getTimeSinceMainThreadAvailable=function(){return this.$2!=null?(g||(g=b("performanceNow")))()-Number(this.$2):null};c.$8=function(){this.$2=b("Visibility").isHidden()?null:(g||(g=b("performanceNow")))()};c.$9=function(){this.$2=null,typeof this.$4==="number"&&(k(this.$4),this.$4=null),typeof this.$3==="number"&&(i(this.$3),this.$3=null)};c.$7=function(){b("VideoPlayerShakaGlobalConfig").getBool("use_settimeout_for_main_thread_available",!1)?this.$10():this.$11()};c.$6=function(){var a=this,c;(c=b("Visibility")).addListener(c.VISIBLE,function(){a.$9(),a.$7()});c.addListener(c.HIDDEN,function(){a.$9()})};c.$10=function(){var a=this,c=b("VideoPlayerShakaGlobalConfig").getNumber("settimeout_polling_delay",-1);if(c>-1){var d=function b(){a.$8(),a.$3=h(b,c)};h(d,c)}};c.$11=function(){var a=this,c=b("VideoPlayerShakaGlobalConfig").getNumber("recursive_ric_timeout",-1),d;c>-1&&(d={timeout:c});c=function c(e){a.$8(),a.$4=b("requestIdleCallback")(c,d)};b("requestIdleCallback")(c,d)};c.$5=function(){return b("Visibility").isSupported()&&typeof j==="function"&&typeof k==="function"&&typeof h==="function"&&typeof i==="function"};c.maybeEnablePerformanceTest=function(){var a,c,d=b("VideoPlayerShakaGlobalConfig").getNumber("recursive_ric_timeout",-1);d>-1&&(c={timeout:d});b("VideoPlayerShakaGlobalConfig").getBool("enable_recursive_raf",!1)&&(a=l(b("requestAnimationFrame")));b("VideoPlayerShakaGlobalConfig").getBool("enable_recursive_ric",!1)&&(a=m(b("requestIdleCallback"),c));b("VideoPlayerShakaGlobalConfig").getBool("enable_recursive_native_raf",!1)&&typeof b("nativeRequestAnimationFrame")==="function"&&(a=l(b("nativeRequestAnimationFrame")));b("VideoPlayerShakaGlobalConfig").getBool("enable_recursive_native_ric",!1)&&typeof j==="function"&&(a=m(j,c));d=b("VideoPlayerShakaGlobalConfig").getNumber("recursive_native_settimeout_delay",-1);d>-1&&typeof h==="function"&&(a=n(h,d));a&&a()};return a}();e.exports=new c()}),null);
__d("VideoPlayerPlayLogger",["EventListener","SubscriptionsHandler"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,c){var d=this;this.$3=new(b("SubscriptionsHandler"))();this.$1=a;this.$2=c;this.$3.addSubscriptions(b("EventListener").listen(this.$1,"playing",function(){return d.$5()}),b("EventListener").listen(this.$1,"pause",function(){return d.$6()}))}var c=a.prototype;c.playStarted=function(){(this.$1.paused||this.$1.ended)&&(this.$4=this.$2.getOperationLogger("play").setState("pending_play").start())};c.$6=function(){this.$4&&(this.$4.setResult("aborted").log(),this.$4=null)};c.$5=function(){this.$4&&(this.$4.log(),this.$4=null)};c.unload=function(){this.$3.release()};return a}();e.exports=a}),null);
__d("ExtendableVideoPlayerShakaPerformanceTypedLogger",["VideoPlayerShakaPerformanceLoggerConfig","VideoPlayerShakaPerformanceTypedLogger"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){typeof a==="number"&&(a=Math.floor(a));return a}var h=!1;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}c.isEnabled=function(){return c.$ExtendableVideoPlayerShakaPerformanceTypedLogger3()||c.$ExtendableVideoPlayerShakaPerformanceTypedLogger4()};c.enable=function(){h=!0};c.$ExtendableVideoPlayerShakaPerformanceTypedLogger3=function(){return b("VideoPlayerShakaPerformanceLoggerConfig").isSampled};c.$ExtendableVideoPlayerShakaPerformanceTypedLogger4=function(){return h};var d=c.prototype;d.log=function(){c.isEnabled()&&a.prototype.log.call(this)};d.setState=function(b){this.$ExtendableVideoPlayerShakaPerformanceTypedLogger1=b;return a.prototype.setState.call(this,b)};d.getState=function(){return this.$ExtendableVideoPlayerShakaPerformanceTypedLogger1};d.setSequentialID=function(b){this.$ExtendableVideoPlayerShakaPerformanceTypedLogger2=b;a.prototype.setSequentialID.call(this,b);return this};d.setParentLogger=function(a){this.setParentID(a.$ExtendableVideoPlayerShakaPerformanceTypedLogger2);return this};d.setSegmentEndTime=function(b){a.prototype.setSegmentEndTime.call(this,g(b));return this};d.setSegmentTimeGap=function(b){a.prototype.setSegmentTimeGap.call(this,g(b));return this};d.setSegmentStartTime=function(b){a.prototype.setSegmentStartTime.call(this,g(b));return this};return c}(b("VideoPlayerShakaPerformanceTypedLogger"));e.exports=a}),null);
__d("VideoPlayerArtilleryOperationMarker",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(a,b,c,d){this.$2=a,this.$3=b,this.$4=c,this.$5=d,this.$6=!1}var b=a.prototype;b.markOperationStart=function(){return this.$7("Starting")};b.markOperationEnd=function(){return this.$7("Ending")};b.$7=function(a){var b=this.$4();b&&b.inform(a+" "+this.$2+" #"+this.$3,{pointGroup:this.$5.getGroupName(this.$2,this.$1),isPointOfInterest:!0,type:null}).addStringAnnotation("resource",this.$1||"").addStringAnnotation("wasPrefetchCacheHit",this.$6.toString());return this};b.setResource=function(a){this.$1=a;return this};b.setWasPrefetchCacheHit=function(a){this.$6=a;return this};return a}();e.exports=a}),null);
__d("VideoPlayerArtilleryPointGrouper",[],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(){this.$1=new Map(),this.$2=new Map()}var b=a.prototype;b.getGroupName=function(a,b){__p&&__p();if(!b){switch(a){case"start_streams":a="source_attach";break}return a}a=this.$1.get(b);if(a)return a;var c;if(b.indexOf("-init.m4v")!==-1)c="-init.m4v";else if(b.indexOf("-init.m4a")!==-1)c="-init.m4a";else if(b.indexOf(".mpd")!==-1)return"source_load";else b.indexOf(".m4v")!==-1?c=".m4v":b.indexOf(".m4a")!==-1?c=".m4a":c="unknown";var d=this.$2.get(c)+1||1;this.$2.set(c,d);a=c+" #"+d;this.$1.set(b,a);return a};return a}();e.exports=a}),null);
__d("VideoPlayerArtilleryTrace",["TimeSliceInteraction","UserAgentData","VideoPlayerArtilleryOperationMarker","VideoPlayerArtilleryPointGrouper"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=3e4,h=3e3;a=function(){__p&&__p();function a(a,c){__p&&__p();var d=this;this.$12=function(){var a=d.$2;if(a){var b=a.stallTrace,c=a.hasStalls;a=a.stallTraceTimeout;c?b.finish():b.disable();clearTimeout(a)}d.$2=null};this.$16=function(){return d.$1};this.$17=function(){var a=d.$2;return a?a.stallTrace:null};this.$3=c.videoID;this.$4=c.video;this.$5=a;this.$6=c.isLive;this.$8=c.playerOrigin;this.$9=c.playerSuborigin;this.$7=0;this.$10=new(b("VideoPlayerArtilleryPointGrouper"))()}var c=a.prototype;c.updateBufferAhead=function(a){var c=this.$2;!c&&a<=h?this.$2={stallTrace:this.$11(b("TimeSliceInteraction").create("video_stall")),hasStalls:!1,stallTraceTimeout:setTimeout(this.$12,g)}:a>h&&this.$12()};c.enterState=function(a){switch(a){case"loading":this.$13();break;case"playing":this.$14();break;default:this.$15(a);break}return this};c.$15=function(a){var b=this.$1;b&&b.inform("State: "+a)};c.getMarkers=function(a){var c=[],d=(++this.$7).toString();this.$1&&c.push(new(b("VideoPlayerArtilleryOperationMarker"))(a,d,this.$16,this.$10));var e=this.$2;e&&(a==="buffering"&&(e.hasStalls=!0),c.push(new(b("VideoPlayerArtilleryOperationMarker"))(a,d,this.$17,this.$10)));return c};c.$13=function(){var a=this.$11(b("TimeSliceInteraction").create("video_psr"));this.$1=a;this.$15("loading")};c.$14=function(){this.$15("playing");var a=this.$1;a&&(a.finish(),this.$1=null)};c.$11=function(a){a.trace().addStringAnnotation("videoID",this.$3).addStringAnnotation("sessionID",this.$5).addStringAnnotation("browserName",b("UserAgentData").browserName).addStringAnnotation("browserVersion",b("UserAgentData").browserVersion).addStringAnnotation("isLive",this.$6.toString()).addStringAnnotation("playerOrigin",this.$8||"").addStringAnnotation("playerSuborigin",this.$9||"");return a};return a}();e.exports=a}),null);
__d("oz-player/loggings/OzPerfLoggerProviderBase",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){}var b=a.prototype;b.cloneContext=function(){var a=this.createLoggerProvider();this.$8(a);return a};b.setType=function(a){this.$1=a;return this};b.setInitiator=function(a){this.$2=a;return this};b.setResource=function(a){this.$4=a;return this};b.setRepresentationID=function(a){this.$3=a;return this};b.setSegmentStartTime=function(a){this.$5=a;return this};b.setSegmentEndTime=function(a){this.$6=a;return this};b.setStreamSwitchReason=function(a){this.$7=a;return this};b.getType=function(){return this.$1};b.getInitiator=function(){return this.$2};b.getRepresentationID=function(){return this.$3};b.getStreamSwitchReason=function(){return this.$7};b.getResource=function(){return this.$4};b.getSegmentStartTime=function(){return this.$5};b.getSegmentEndTime=function(){return this.$6};b.getOperationLogger=function(a){a=this.createOperationLogger(a);return this.setOperationContext(a)};b.setOperationContext=function(a){this.$8(a);return a};b.createOperationLogger=function(a){throw new Error("Not implemented: createOperationLogger")};b.createLoggerProvider=function(){throw new Error("Not implemented: createLoggerProvider")};b.$8=function(a){this.getType()&&a.setType(this.getType()),this.getInitiator()&&a.setInitiator(this.getInitiator()),this.getResource()&&a.setResource(this.getResource()),this.getRepresentationID()&&a.setRepresentationID(this.getRepresentationID()),this.getStreamSwitchReason()&&a.setStreamSwitchReason(this.getStreamSwitchReason()),typeof this.getSegmentStartTime()==="number"&&a.setSegmentStartTime(this.getSegmentStartTime()),typeof this.getSegmentEndTime()==="number"&&a.setSegmentEndTime(this.getSegmentEndTime())};return a}();e.exports=a}),null);
__d("VideoPlayerShakaPerformanceLogger",["ExtendableVideoPlayerShakaPerformanceTypedLogger","ScriptPath","VideoPlaybackQuality","VideoPlayerArtilleryTrace","VideoPlayerMainThreadAvailability","VideoPlayerShakaGlobalConfig","VideoPlayerShakaPerformanceLoggerConfig","Visibility","clearTimeout","oz-player/loggings/OzPerfLoggerProviderBase","oz-player/utils/OzError","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("VideoPlaybackQuality").getDroppedFrames,h=b("VideoPlaybackQuality").getTotalFrames,i=9e4;b("VideoPlayerMainThreadAvailability").maybeEnablePerformanceTest();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);c.shouldInitialize=function(){return b("VideoPlayerShakaPerformanceLoggerConfig").isSampled||b("VideoPlayerShakaGlobalConfig").getBool("enable_spl_when_unsampled",!1)};c.setVideoPlaybackExperienceIssue=function(a){c.$VideoPlayerShakaPerformanceLogger25=a,b("VideoPlayerShakaGlobalConfig").getBool("enable_spl_after_submitted_playback_issue",!1)&&(b("ExtendableVideoPlayerShakaPerformanceTypedLogger").enable(),c.maybeEnableMainThreadAvailabilityLogging())};function c(d){__p&&__p();var e;e=a.call(this)||this;e.$VideoPlayerShakaPerformanceLogger11=!1;e.$VideoPlayerShakaPerformanceLogger22=0;e.$VideoPlayerShakaPerformanceLogger23=0;e.$VideoPlayerShakaPerformanceLogger21=d;e.$VideoPlayerShakaPerformanceLogger2=d.videoID;e.$VideoPlayerShakaPerformanceLogger4=d.video;e.$VideoPlayerShakaPerformanceLogger1=d.uniqueID;e.$VideoPlayerShakaPerformanceLogger3=0;e.$VideoPlayerShakaPerformanceLogger9=d.isLive;e.$VideoPlayerShakaPerformanceLogger10=d.isServableViaFbms;e.$VideoPlayerShakaPerformanceLogger8=null;e.$VideoPlayerShakaPerformanceLogger12=d.accessToken;e.$VideoPlayerShakaPerformanceLogger14=d.playerOrigin;e.$VideoPlayerShakaPerformanceLogger15=d.playerSuborigin;e.$VideoPlayerShakaPerformanceLogger16=d.playerVersion;e.$VideoPlayerShakaPerformanceLogger24=d.getBandwidthEstimate;e.setRepresentationID(d.representationId);e.$VideoPlayerShakaPerformanceLogger26=d.isDrm;e.$VideoPlayerShakaPerformanceLogger13=new(b("VideoPlayerArtilleryTrace"))(e.$VideoPlayerShakaPerformanceLogger1,d);c.maybeEnableMainThreadAvailabilityLogging();return e}c.maybeEnableMainThreadAvailabilityLogging=function(){b("VideoPlayerShakaGlobalConfig").getBool("enable_main_thread_availability_logging",!1)&&b("ExtendableVideoPlayerShakaPerformanceTypedLogger").isEnabled()&&b("VideoPlayerMainThreadAvailability").enable()};var d=c.prototype;d.$VideoPlayerShakaPerformanceLogger27=function(a){__p&&__p();var b=this.$VideoPlayerShakaPerformanceLogger4.buffered;if(b.length>0){var c=b.length-1;a=a.setLastBufferedStart(Math.round(b.start(c)*1e3)).setLastBufferedEnd(Math.round(b.end(c)*1e3));this.$VideoPlayerShakaPerformanceLogger13.updateBufferAhead((b.end(c)-this.$VideoPlayerShakaPerformanceLogger4.currentTime)*1e3)}c=[];for(var d=0;d<b.length-1;d++){var e=Math.round(this.$VideoPlayerShakaPerformanceLogger4.buffered.start(d)*1e3),f=Math.round(this.$VideoPlayerShakaPerformanceLogger4.buffered.end(d)*1e3);c.push([e,f])}c&&c.length&&(a=a.setAdditionalBufferedRanges(JSON.stringify(c)));return a};d.setType=function(a){this.$VideoPlayerShakaPerformanceLogger20=a;return this};d.createLoggerProvider=function(){return new self(this.$VideoPlayerShakaPerformanceLogger21)};d.getLiveheadDelta=function(){return this.$VideoPlayerShakaPerformanceLogger8?Math.round((this.$VideoPlayerShakaPerformanceLogger8-this.$VideoPlayerShakaPerformanceLogger4.currentTime)*1e3):null};d.getVideoID=function(){return this.$VideoPlayerShakaPerformanceLogger2};d.setIsTemplatedManifest=function(a){this.$VideoPlayerShakaPerformanceLogger11=a};d.$VideoPlayerShakaPerformanceLogger28=function(){return this.$VideoPlayerShakaPerformanceLogger11};d.getEventLogger=function(a){__p&&__p();var d=this,e=Date.now(),f=new(b("ExtendableVideoPlayerShakaPerformanceTypedLogger"))(),i=this.$VideoPlayerShakaPerformanceLogger4.currentTime,j=this.$VideoPlayerShakaPerformanceLogger4.duration;this.$VideoPlayerShakaPerformanceLogger27(f).setEvent(a).setVideoID(this.$VideoPlayerShakaPerformanceLogger2).setDroppedFrames(g(this.$VideoPlayerShakaPerformanceLogger4)).setTotalFrames(h(this.$VideoPlayerShakaPerformanceLogger4)).setDynamicBitrate(this.$VideoPlayerShakaPerformanceLogger19).setLogicalCpuCount(navigator&&navigator.hardwareConcurrency).setPlayerOriginCallerSpecified(this.$VideoPlayerShakaPerformanceLogger14).setScriptPath(b("ScriptPath").getScriptPath()).setPlayerSuborigin(this.$VideoPlayerShakaPerformanceLogger15).setPlayerVersion(this.$VideoPlayerShakaPerformanceLogger16).setBandwidthEstimate(Math.round(this.$VideoPlayerShakaPerformanceLogger24(this.$VideoPlayerShakaPerformanceLogger9))).setRepresentationID(this.getRepresentationID()).setLowestQualityRepresentationID(this.$VideoPlayerShakaPerformanceLogger18).setPlayhead(Math.round(i*1e3)).setVideoDuration(Math.round(j*1e3)).setEnded(this.$VideoPlayerShakaPerformanceLogger4.ended).setIsLive(this.$VideoPlayerShakaPerformanceLogger9).setIsServableViaFbms(this.$VideoPlayerShakaPerformanceLogger10).setIsMuted(this.$VideoPlayerShakaPerformanceLogger4.muted).setIsPageVisible(!b("Visibility").isHidden()).setIsTemplatedManifest(this.$VideoPlayerShakaPerformanceLogger28()).setSession(this.$VideoPlayerShakaPerformanceLogger1).setDevicePixelRatioFloat(window.devicePixelRatio||1).setManifestType(this.$VideoPlayerShakaPerformanceLogger17).setSequentialID(this.$VideoPlayerShakaPerformanceLogger3++).setState(this.$VideoPlayerShakaPerformanceLogger5).setLastBufferingEventEndTime(this.$VideoPlayerShakaPerformanceLogger7).setLastPlayingEventTime(this.$VideoPlayerShakaPerformanceLogger6).setLiveheadDelta(this.getLiveheadDelta()).setPushed(0).setResult("success").setAccessToken(this.$VideoPlayerShakaPerformanceLogger12).setVideoPlaybackExperienceIssue(c.$VideoPlayerShakaPerformanceLogger25).setClientTimeBegin(e).setClientTimeEnd(e).setIsDrm(this.$VideoPlayerShakaPerformanceLogger26);var k=this,l=f.setState;f.setState=function(a){a!==this.$VideoPlayerShakaPerformanceLogger5&&a==="playing"?k.$VideoPlayerShakaPerformanceLogger6=Date.now():a!=="playing"&&(k.$VideoPlayerShakaPerformanceLogger6=null);k.$VideoPlayerShakaPerformanceLogger5=a;k.$VideoPlayerShakaPerformanceLogger13.enterState(a);return l.call(this,a)};f.updateState=function(a){if(this.getState()==k.$VideoPlayerShakaPerformanceLogger5){k.$VideoPlayerShakaPerformanceLogger13.enterState(a);return this.setState(a)}return this};var m=f.setError;f.setError=function(a){typeof a==="object"?a instanceof b("oz-player/utils/OzError")?(this.setResult("failed"),this.setCode(a.getExtra().code),m.call(this,a.getType())):(a.type==="aborted"||a.type==="delay"?this.setResult("aborted"):a.type==="paused"?this.setResult("paused"):(this.setResult("failed"),m.call(this,a.type)),this.setCode(a.status||a.errorRawTransportStatus)):m.call(this,a);return this};var n=f.setManifestType;f.setManifestType=function(a){d.$VideoPlayerShakaPerformanceLogger17=a;return n.call(f,a)};return f};d.getArtilleryMarkers=function(a){return this.$VideoPlayerShakaPerformanceLogger13.getMarkers(a)};d.getOperationLogger=function(a){a=this.createOperationLogger(a);this.setOperationContext(a);return a};d.createOperationLogger=function(a){__p&&__p();var c=this,d=this.getEventLogger(a),e=this.getArtilleryMarkers(a),f=d.setResource;d.setResource=function(a){e.forEach(function(b){return b.setResource(a)});return f.call(d,a)};var g=d.log,h=this,j=!1,k=null;d.log=function(){__p&&__p();if(j)return;b("clearTimeout")(k);var c=Date.now();this.setClientTimeEnd(c);var d=b("VideoPlayerMainThreadAvailability").getTimeSinceMainThreadAvailable();this.setTimeSinceMainThreadAvailable(d!=null?Math.round(d):null);h.$VideoPlayerShakaPerformanceLogger29(d);h.$VideoPlayerShakaPerformanceLogger22=c;a==="buffering"&&(h.$VideoPlayerShakaPerformanceLogger7=Date.now());e.forEach(function(a){return a.markOperationEnd()});j=!0;return g.call(this)};d.start=function(){e.forEach(function(a){return a.markOperationStart()});k=b("setTimeoutAcrossTransitions")(function(){k=null,d.setResult("timeout"),d.log()},i);return d};d.setWasPrefetchCacheHit=function(a){e.forEach(function(b){return b.setWasPrefetchCacheHit(a)});return d};d.setLiveheadPosition=function(a){c.$VideoPlayerShakaPerformanceLogger8=a;d.setLiveheadDelta(c.getLiveheadDelta());return d};var l=d.setDynamicBitrate;d.setDynamicBitrate=function(a){a=Number(a)||null;c.setDynamicBitrate(a);return l.call(d,a)};var m=d.setLowestQualityRepresentationID;d.setLowestQualityRepresentationID=function(a){c.$VideoPlayerShakaPerformanceLogger18=a;return m.call(d,a)};return d};d.$VideoPlayerShakaPerformanceLogger29=function(a){var c=b("VideoPlayerShakaGlobalConfig").getNumber("main_thread_blocked_event_threshold",200);if(a==null||c===0||this.$VideoPlayerShakaPerformanceLogger22===0||a<c||this.$VideoPlayerShakaPerformanceLogger23<a){this.$VideoPlayerShakaPerformanceLogger23=Number(a);return}this.getEventLogger("main_thread_blocked").setClientTimeEnd(this.$VideoPlayerShakaPerformanceLogger22).setClientTimeBegin(Math.round(this.$VideoPlayerShakaPerformanceLogger22-this.$VideoPlayerShakaPerformanceLogger23)).log();this.$VideoPlayerShakaPerformanceLogger23=Number(a)};d.setDynamicBitrate=function(a){this.$VideoPlayerShakaPerformanceLogger19=a!=null?Math.round(a):null};return c}(b("oz-player/loggings/OzPerfLoggerProviderBase"));a.$VideoPlayerShakaPerformanceLogger25=null;e.exports=a}),null);
__d("oz-player/manifests/OzByteRange",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,b){return a.startByte===b.startByte}function b(a,b){return b.endByte===null?!1:a.startByte===b.endByte+1}function c(a,b){return a.startByte<b.startByte?!1:b.endByte==null||b.endByte>=a.startByte}function d(a,b){__p&&__p();a=a;b=b;if(b.startByte<a.startByte){var c=a;a=b;b=c}if(a.endByte==null)return{startByte:a.startByte,endByte:null};if(b.startByte>a.endByte+1)return null;c=b.endByte==null||b.endByte>a.endByte?b.endByte:a.endByte;return{startByte:a.startByte,endByte:c}}function f(a,b){if(b.endByte==null)return null;if(a.startByte>b.endByte)return{startByte:a.startByte,endByte:a.endByte};return a.endByte!=null&&a.endByte<=b.endByte?null:{startByte:b.endByte+1,endByte:a.endByte}}function g(a){return a.endByte==null?null:a.endByte-a.startByte+1}e.exports={startsAtSame:a,startsImmediateAfter:b,startsDuring:c,union:d,disjoinAfter:f,getLength:g}}),null);
__d("oz-player/networks/OzCreateErrorStream",["oz-player/shims/OzReadableStream"],(function(a,b,c,d,e,f){"use strict";function a(a){return new(b("oz-player/shims/OzReadableStream"))({pull:function(b){b.error(a)}})}e.exports=a}),null);
__d("oz-player/networks/OzProducerInterruptedError",[],(function(a,b,c,d,e,f){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(babelHelpers.wrapNativeSuper(Error));e.exports=a}),null);
__d("oz-player/shims/OzDeferred",["Deferred"],(function(a,b,c,d,e,f){"use strict";e.exports=b("Deferred")}),null);
__d("oz-player/networks/OzDeferredBuffer",["oz-player/shims/OzDeferred","oz-player/shims/OzMaybeNativePromise","oz-player/networks/OzProducerInterruptedError"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(a){a===void 0&&(a={});this.$3=[];this.$4=!1;this.$6=0;a=a;var b=a.disableArrayShift;a=a.useNativePromise;this.$1=!!b;this.$2=!!a}var c=a.prototype;c.produce=function(a){this.$7(a)};c.signalProducerInterruption=function(){this.$7(new(b("oz-player/networks/OzProducerInterruptedError"))("producer interrupted"))};c.consume=function(a){__p&&__p();var c=this;if(this.$4)throw new Error("A buffer can only be consumed by one client at a time");this.$4=!0;var d=b("oz-player/shims/OzMaybeNativePromise").resolve();this.isEmpty()&&(this.$5=this.$2?new(b("oz-player/shims/OzDeferred"))(b("oz-player/shims/OzMaybeNativePromise")):new(b("oz-player/shims/OzDeferred"))(),d=this.$5.getPromise());return d.then(function(){__p&&__p();if(c.$1){if(c.$3[c.$6]===void 0)throw new Error("buffer has no value at position "+c.$6)}else if(c.$3.length===0)throw new Error("buffer length must not be 0");c.$5=null;c.$4=!1;var b=c.$1?c.$8(a):c.$9(a);if(b instanceof Uint8Array)return b;throw b})};c.$7=function(a){this.$3.push(a),this.$5&&this.$5.resolve()};c.$8=function(a){__p&&__p();var b=this.$3[this.$6];if(b===void 0)return new Uint8Array([]);b=b;if(!(b instanceof Uint8Array)){this.$3[this.$6]=void 0;this.$6++;return b}if(a!==void 0&&b.length>a){var c=b.slice(a);b=b.slice(0,a);this.$3[this.$6]=c}else this.$3[this.$6]=void 0,this.$6++;return b};c.$9=function(a){__p&&__p();if(this.$3.length===0)return new Uint8Array([]);var b=this.$3[0];if(!(b instanceof Uint8Array)){this.$3.shift();return b}if(a!==void 0&&b.length>a){var c=b.slice(a);b=b.slice(0,a);this.$3[0]=c}else this.$3.shift();return b};c.isEmpty=function(){return this.$1?this.$3[this.$6]===void 0:this.$3.length===0};return a}();e.exports=a}),null);
__d("pipeErrorTo",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){try{a.error(b)}catch(a){}}e.exports=a}),null);
__d("oz-player/networks/OzPausableRangeStream",["oz-player/manifests/OzByteRange","oz-player/shims/OzDeferred","oz-player/shims/OzMaybeNativePromise","oz-player/networks/OzDeferredBuffer","pipeErrorTo"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("oz-player/manifests/OzByteRange").startsImmediateAfter;function h(){return new Error("Upstream has an inconsistent range")}var i=function(){__p&&__p();function a(){this.$1=0}var b=a.prototype;b.setBytesToSkip=function(a){this.$1=a};b.setBytesSkipped=function(a){this.$1-=a};b.getBytesToSkip=function(){return this.$1};b.hasMoreBytesToSkip=function(){return this.$1>0};return a}();a=function(){__p&&__p();function a(a,c,d,e,f){__p&&__p();var g=this;this.$5=!1;this.$7=0;this.$8=0;this.$13=!1;this.$14=0;this.$15=new i();this.$16=!1;this.$17=!1;this.$18=!1;this.$19=a;this.$20=c;this.$1=d;this.$2=e;a=f||{};c=a.fixStreamingUndefinedEndByte;d=a.disableDeferredBufferArrayShift;e=a.useNativePromiseInDeferredBuffer;f=a.enablePausableStreamResumeFromStartDangerously;var j=a.fixPausePreReadableStream;a=a.throwErrorWhenAborted;this.$11=!!c;this.$16=!!f;this.$17=!!j;this.$18=!!a;this.$3=new(b("oz-player/networks/OzDeferredBuffer"))({disableArrayShift:!!d,useNativePromise:!!e});this.$6=new this.$19({start:function(a){g.$10=a},pull:function(a){__p&&__p();if((g.$11&&g.$1.endByte===null&&g.$5||g.$7===g.$21())&&g.$3.isEmpty()){a.close();return b("oz-player/shims/OzMaybeNativePromise").resolve()}var c=function c(){__p&&__p();var d=g.$15.hasMoreBytesToSkip()?g.$15.getBytesToSkip():void 0;return g.$3.consume(d).then(function(d){if(g.$15.hasMoreBytesToSkip()){g.$15.setBytesSkipped(d.length);return c()}g.$7+=d.length;var e=g.$21();e!==null&&g.$7>(e||0)&&b("pipeErrorTo")(g.$10,h());a.enqueue(d)})["catch"](function(a){if(a==="skip_buffered_bytes"){g.$15.setBytesToSkip(g.$7);return c()}throw a})};return c()},cancel:function(a){g.$12&&g.$12.resolve("stream_cancelled"),b("pipeErrorTo")(g.$9,a)}});this.$22()}var c=a.prototype;c.$21=function(){var a=this.$1,b=a.startByte;a=a.endByte;return a!=null?a-b+1:null};c.$22=function(){__p&&__p();var a=this;this.$4=new this.$20({start:function(b){a.$9=b},write:function(b){a.$3.produce(b),a.$8+=b.length},close:function(){a.$5=!0;var c=a.$1,d=c.endByte;c=c.startByte;a.$11&&d===null&&a.$3.produce(new Uint8Array([]));d!==null&&a.$8!==(d||0)-c+1&&b("pipeErrorTo")(a.$10,h())},abort:function(c){a.$12&&(a.$18?a.$12.reject(c):a.$12.resolve("stream_aborted")),b("pipeErrorTo")(a.$10,c)}})};c.getStream=function(){return this.$6};c.startStream=function(){__p&&__p();var c=this;this.$13=!0;var d={startByte:this.$1.startByte,endByte:this.$1.endByte};!this.$16?d.startByte+=this.$8:this.$8&&(this.$3.produce("skip_buffered_bytes"),this.$8=0);var e=this.$4;return this.$2.startStream(d).then(function(d){d.pipeTo(c.$17?e:c.$4).then(function(){c.$12&&c.$12.resolve("stream_done")})["catch"](function(b){c.$12&&!c.$12.isSettled()&&(c.$17&&b===a.STREAM_PAUSED?c.$12.resolve("stream_paused"):c.$12.reject(b))});c.$12=new(b("oz-player/shims/OzDeferred"))(b("oz-player/shims/OzMaybeNativePromise"));return{statusPromise:c.$12.getPromise()}})};c.pauseStream=function(){b("pipeErrorTo")(this.$9,a.STREAM_PAUSED),this.$12&&this.$12.resolve("stream_paused"),this.$22()};c.getByteRange=function(){return this.$1};c.getBytesStreamed=function(){return this.$7};c.tryConcatByteRange=function(a){if(this.$13||!g(a,this.$1))return!1;this.$1.endByte=a.endByte;return!0};return a}();a.STREAM_PAUSED="streamPaused";e.exports=a}),null);
__d("oz-player/scheduling/OzRoundRobinPriorityTaskQueue",["oz-player/shims/OzDeferred","oz-player/shims/OzMaybeNativePromise"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(a,b){b===void 0&&(b=-1),this.$3=function(){},this.$4=[],this.$5=new Map(),this.$6=new Map(),this.$1=a,this.$2=b}var c=a.prototype;c.getHighestPriority=function(){return Math.max.apply(Math,this.$4.map(function(a){return a.queue.length?a.priority:-Infinity}))};c.enqueue=function(a,b){__p&&__p();b=this.$7(b);var c=this.$5.get(a),d=this.$8(a);if(c===b)return d;this.$5.has(a)&&this.remove(a);c=this.$9(b);var e=this.$4[c];e&&e.priority===b||(e={priority:b,queue:[]},this.$4.splice(c,0,e));this.$5.set(a,b);e.queue.push(a);this.$3(a,b>=this.$1?"immediate":"normal");return d};c.updatePriority=function(a,b){if(!this.$5.has(a))return;this.enqueue(a,b)};c.dequeue=function(){for(var a=0;a<this.$4.length;a++){var b=this.$4[a];if(b.queue.length){b=b.queue.shift();this.$5["delete"](b);return b}}return null};c.remove=function(a){__p&&__p();var b=this.$5.get(a);if(b===void 0)return;b=this.$9(b);b=this.$4[b];if(b&&b.queue){var c=b.queue.findIndex(function(b){return b===a});c>-1&&b.queue.splice(c,1)}this.$5["delete"](a)};c.setOnTaskUpdated=function(a){this.$3=a};c.clearOnTaskUpdated=function(){this.setOnTaskUpdated(function(){})};c.getLength=function(){return this.$5.size};c.$8=function(a){__p&&__p();var c=this.$6.get(a);if(!c){var d=new(b("oz-player/shims/OzDeferred"))(b("oz-player/shims/OzMaybeNativePromise"));c=d.getPromise();this.$6.set(a,c);var e=a.run;a.run=function(){return e.call(a).then(function(a){d.resolve(a);return a})["catch"](function(a){d.reject(a);throw a})}}return c};c.$9=function(a){a=this.$7(a);var b;for(b=0;b<this.$4.length;b++)if(a>=this.$4[b].priority)return b;return b};c.$7=function(a){this.$2>=0&&(a=Number.parseFloat(a.toFixed(this.$2)));return a};return a}();e.exports=a}),null);
__d("oz-player/shims/ozSetTimeoutAcrossTransitions",["setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";e.exports=b("setTimeoutAcrossTransitions")}),null);
__d("oz-player/scheduling/OzSequentialTaskScheduler",["oz-player/shims/OzMaybeNativePromise","oz-player/shims/ozSetTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(a,b){this.$3=0;this.$1=a;a=b||{};b=a.taskTimeout;this.$4=b||0}var c=a.prototype;c.start=function(){this.$1.setOnTaskUpdated(this.$5.bind(this));var a=this.$1.dequeue();a&&this.$6(a,"immediate")};c.destroy=function(){this.$2&&this.$2.cancel(),this.$1.clearOnTaskUpdated()};c.$5=function(a,b){b=this.$6(a,b);b&&this.$1.remove(a)};c.$6=function(a,c){__p&&__p();var d=this;if(this.$2&&c!=="immediate")return!1;this.$2&&this.$2.cancel();c=a.run()["catch"](function(a){});this.$4>0&&(c=b("oz-player/shims/OzMaybeNativePromise").race([c,new(b("oz-player/shims/OzMaybeNativePromise"))(function(a,c){b("oz-player/shims/ozSetTimeoutAcrossTransitions")(a,d.$4)})]));this.$3++;this.$2=a;c=c.then(function(){d.$3--;d.$2===a&&(d.$2=null);if(d.$3===0){var b=d.$1.dequeue();b&&d.$6(b,"immediate")}});return!0};return a}();e.exports=a}),null);
__d("oz-player/utils/OzTaggedTimeRanges",[],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this.$1=[],this.$2=0,this.$3=0,this.$4=a?a:function(a,b){return a===b}}var b=a.prototype;b.add=function(a,b,c){__p&&__p();if(b<a)return;if(b===a)return;if(this.$1.length===0){this.$1.push({startTime:a,endTime:b,tag:c});return}var d=0,e=0;for(var f=0;f<this.$1.length;f++){if(a===this.$1[f].startTime&&b===this.$1[f].endTime){d=f;e=f+1;break}a>=this.$1[f].startTime&&(d=f+1);b<=this.$1[f].endTime&&(e=f);if(b<this.$1[f].startTime)break}this.$1.splice(d,e-d,{startTime:a,endTime:b,tag:c});this.$5(d)};b.$5=function(a){var b=this.$1[a],c=null;a!==0&&(c=this.$1[a-1]);c!==null&&(this.$4(c.tag,b.tag)?c.endTime>=b.startTime&&(this.$1.splice(a-1,2,{startTime:c.startTime,endTime:Math.max(b.endTime,c.endTime),tag:b.tag}),a--):(c.endTime>b.startTime&&c.startTime===b.startTime?(this.$1.splice(a-1,1),a--):c.endTime>b.startTime&&this.$1.splice(a-1,1,{startTime:c.startTime,endTime:b.startTime,tag:c.tag}),c.endTime>b.endTime&&this.$1.splice(a+1,0,{startTime:b.endTime,endTime:c.endTime,tag:c.tag})));c=null;a!==this.$1.length-1&&(c=this.$1[a+1]);c&&(this.$4(c.tag,b.tag)?c.startTime<=b.endTime&&this.$1.splice(a,2,{startTime:b.startTime,endTime:Math.max(c.endTime,b.endTime),tag:b.tag}):c.startTime<=b.endTime&&(c.endTime<b.endTime?(this.$1.splice(a,1,{startTime:b.startTime,endTime:c.startTime,tag:b.tag}),this.$1.push({startTime:c.endTime,endTime:b.endTime,tag:b.tag})):this.$1.splice(a+1,1,{startTime:b.endTime,endTime:c.endTime,tag:c.tag})))};b.get=function(a){var b=a>=this.$3?this.$2:0,c=null;for(var b=b;b<this.$1.length;b++)if(this.$1[b].startTime<=a&&a<this.$1[b].endTime){c=b;break}this.$2=c===null?0:c;this.$3=a;return c===null?null:this.$1[c].tag};b.getLength=function(){return this.$1.length};return a}();e.exports=a}),null);