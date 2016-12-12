// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__26307 = cljs.core._EQ_;
var expr__26308 = (function (){var or__16795__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16795__auto__)){
return or__16795__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26307.call(null,"true",expr__26308))){
return true;
} else {
if(cljs.core.truth_(pred__26307.call(null,"false",expr__26308))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26308)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26310__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26310 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26311__i = 0, G__26311__a = new Array(arguments.length -  0);
while (G__26311__i < G__26311__a.length) {G__26311__a[G__26311__i] = arguments[G__26311__i + 0]; ++G__26311__i;}
  args = new cljs.core.IndexedSeq(G__26311__a,0);
} 
return G__26310__delegate.call(this,args);};
G__26310.cljs$lang$maxFixedArity = 0;
G__26310.cljs$lang$applyTo = (function (arglist__26312){
var args = cljs.core.seq(arglist__26312);
return G__26310__delegate(args);
});
G__26310.cljs$core$IFn$_invoke$arity$variadic = G__26310__delegate;
return G__26310;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26313){
var map__26316 = p__26313;
var map__26316__$1 = ((((!((map__26316 == null)))?((((map__26316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26316):map__26316);
var message = cljs.core.get.call(null,map__26316__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26316__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16795__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16795__auto__)){
return or__16795__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16783__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16783__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16783__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21970__auto___26478 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21970__auto___26478,ch){
return (function (){
var f__21971__auto__ = (function (){var switch__21858__auto__ = ((function (c__21970__auto___26478,ch){
return (function (state_26447){
var state_val_26448 = (state_26447[(1)]);
if((state_val_26448 === (7))){
var inst_26443 = (state_26447[(2)]);
var state_26447__$1 = state_26447;
var statearr_26449_26479 = state_26447__$1;
(statearr_26449_26479[(2)] = inst_26443);

(statearr_26449_26479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26448 === (1))){
var state_26447__$1 = state_26447;
var statearr_26450_26480 = state_26447__$1;
(statearr_26450_26480[(2)] = null);

(statearr_26450_26480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26448 === (4))){
var inst_26400 = (state_26447[(7)]);
var inst_26400__$1 = (state_26447[(2)]);
var state_26447__$1 = (function (){var statearr_26451 = state_26447;
(statearr_26451[(7)] = inst_26400__$1);

return statearr_26451;
})();
if(cljs.core.truth_(inst_26400__$1)){
var statearr_26452_26481 = state_26447__$1;
(statearr_26452_26481[(1)] = (5));

} else {
var statearr_26453_26482 = state_26447__$1;
(statearr_26453_26482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26448 === (15))){
var inst_26407 = (state_26447[(8)]);
var inst_26422 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26407);
var inst_26423 = cljs.core.first.call(null,inst_26422);
var inst_26424 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26423);
var inst_26425 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26424)].join('');
var inst_26426 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26425);
var state_26447__$1 = state_26447;
var statearr_26454_26483 = state_26447__$1;
(statearr_26454_26483[(2)] = inst_26426);

(statearr_26454_26483[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26448 === (13))){
var inst_26431 = (state_26447[(2)]);
var state_26447__$1 = state_26447;
var statearr_26455_26484 = state_26447__$1;
(statearr_26455_26484[(2)] = inst_26431);

(statearr_26455_26484[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26448 === (6))){
var state_26447__$1 = state_26447;
var statearr_26456_26485 = state_26447__$1;
(statearr_26456_26485[(2)] = null);

(statearr_26456_26485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26448 === (17))){
var inst_26429 = (state_26447[(2)]);
var state_26447__$1 = state_26447;
var statearr_26457_26486 = state_26447__$1;
(statearr_26457_26486[(2)] = inst_26429);

(statearr_26457_26486[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26448 === (3))){
var inst_26445 = (state_26447[(2)]);
var state_26447__$1 = state_26447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26447__$1,inst_26445);
} else {
if((state_val_26448 === (12))){
var inst_26406 = (state_26447[(9)]);
var inst_26420 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26406,opts);
var state_26447__$1 = state_26447;
if(cljs.core.truth_(inst_26420)){
var statearr_26458_26487 = state_26447__$1;
(statearr_26458_26487[(1)] = (15));

} else {
var statearr_26459_26488 = state_26447__$1;
(statearr_26459_26488[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26448 === (2))){
var state_26447__$1 = state_26447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26447__$1,(4),ch);
} else {
if((state_val_26448 === (11))){
var inst_26407 = (state_26447[(8)]);
var inst_26412 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26413 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26407);
var inst_26414 = cljs.core.async.timeout.call(null,(1000));
var inst_26415 = [inst_26413,inst_26414];
var inst_26416 = (new cljs.core.PersistentVector(null,2,(5),inst_26412,inst_26415,null));
var state_26447__$1 = state_26447;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26447__$1,(14),inst_26416);
} else {
if((state_val_26448 === (9))){
var inst_26407 = (state_26447[(8)]);
var inst_26433 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26434 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26407);
var inst_26435 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26434);
var inst_26436 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26435)].join('');
var inst_26437 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26436);
var state_26447__$1 = (function (){var statearr_26460 = state_26447;
(statearr_26460[(10)] = inst_26433);

return statearr_26460;
})();
var statearr_26461_26489 = state_26447__$1;
(statearr_26461_26489[(2)] = inst_26437);

(statearr_26461_26489[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26448 === (5))){
var inst_26400 = (state_26447[(7)]);
var inst_26402 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26403 = (new cljs.core.PersistentArrayMap(null,2,inst_26402,null));
var inst_26404 = (new cljs.core.PersistentHashSet(null,inst_26403,null));
var inst_26405 = figwheel.client.focus_msgs.call(null,inst_26404,inst_26400);
var inst_26406 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26405);
var inst_26407 = cljs.core.first.call(null,inst_26405);
var inst_26408 = figwheel.client.autoload_QMARK_.call(null);
var state_26447__$1 = (function (){var statearr_26462 = state_26447;
(statearr_26462[(9)] = inst_26406);

(statearr_26462[(8)] = inst_26407);

return statearr_26462;
})();
if(cljs.core.truth_(inst_26408)){
var statearr_26463_26490 = state_26447__$1;
(statearr_26463_26490[(1)] = (8));

} else {
var statearr_26464_26491 = state_26447__$1;
(statearr_26464_26491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26448 === (14))){
var inst_26418 = (state_26447[(2)]);
var state_26447__$1 = state_26447;
var statearr_26465_26492 = state_26447__$1;
(statearr_26465_26492[(2)] = inst_26418);

(statearr_26465_26492[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26448 === (16))){
var state_26447__$1 = state_26447;
var statearr_26466_26493 = state_26447__$1;
(statearr_26466_26493[(2)] = null);

(statearr_26466_26493[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26448 === (10))){
var inst_26439 = (state_26447[(2)]);
var state_26447__$1 = (function (){var statearr_26467 = state_26447;
(statearr_26467[(11)] = inst_26439);

return statearr_26467;
})();
var statearr_26468_26494 = state_26447__$1;
(statearr_26468_26494[(2)] = null);

(statearr_26468_26494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26448 === (8))){
var inst_26406 = (state_26447[(9)]);
var inst_26410 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26406,opts);
var state_26447__$1 = state_26447;
if(cljs.core.truth_(inst_26410)){
var statearr_26469_26495 = state_26447__$1;
(statearr_26469_26495[(1)] = (11));

} else {
var statearr_26470_26496 = state_26447__$1;
(statearr_26470_26496[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21970__auto___26478,ch))
;
return ((function (switch__21858__auto__,c__21970__auto___26478,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21859__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21859__auto____0 = (function (){
var statearr_26474 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26474[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21859__auto__);

(statearr_26474[(1)] = (1));

return statearr_26474;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21859__auto____1 = (function (state_26447){
while(true){
var ret_value__21860__auto__ = (function (){try{while(true){
var result__21861__auto__ = switch__21858__auto__.call(null,state_26447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21861__auto__;
}
break;
}
}catch (e26475){if((e26475 instanceof Object)){
var ex__21862__auto__ = e26475;
var statearr_26476_26497 = state_26447;
(statearr_26476_26497[(5)] = ex__21862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26498 = state_26447;
state_26447 = G__26498;
continue;
} else {
return ret_value__21860__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21859__auto__ = function(state_26447){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21859__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21859__auto____1.call(this,state_26447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21859__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21859__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21859__auto__;
})()
;})(switch__21858__auto__,c__21970__auto___26478,ch))
})();
var state__21972__auto__ = (function (){var statearr_26477 = f__21971__auto__.call(null);
(statearr_26477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21970__auto___26478);

return statearr_26477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21972__auto__);
});})(c__21970__auto___26478,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26499_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26499_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_26506 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26506){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26504 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26505 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26504,_STAR_print_newline_STAR_26505,base_path_26506){
return (function() { 
var G__26507__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26507 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26508__i = 0, G__26508__a = new Array(arguments.length -  0);
while (G__26508__i < G__26508__a.length) {G__26508__a[G__26508__i] = arguments[G__26508__i + 0]; ++G__26508__i;}
  args = new cljs.core.IndexedSeq(G__26508__a,0);
} 
return G__26507__delegate.call(this,args);};
G__26507.cljs$lang$maxFixedArity = 0;
G__26507.cljs$lang$applyTo = (function (arglist__26509){
var args = cljs.core.seq(arglist__26509);
return G__26507__delegate(args);
});
G__26507.cljs$core$IFn$_invoke$arity$variadic = G__26507__delegate;
return G__26507;
})()
;})(_STAR_print_fn_STAR_26504,_STAR_print_newline_STAR_26505,base_path_26506))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26505;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26504;
}}catch (e26503){if((e26503 instanceof Error)){
var e = e26503;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26506], null));
} else {
var e = e26503;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26506))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26510){
var map__26517 = p__26510;
var map__26517__$1 = ((((!((map__26517 == null)))?((((map__26517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26517):map__26517);
var opts = map__26517__$1;
var build_id = cljs.core.get.call(null,map__26517__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26517,map__26517__$1,opts,build_id){
return (function (p__26519){
var vec__26520 = p__26519;
var map__26521 = cljs.core.nth.call(null,vec__26520,(0),null);
var map__26521__$1 = ((((!((map__26521 == null)))?((((map__26521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26521):map__26521);
var msg = map__26521__$1;
var msg_name = cljs.core.get.call(null,map__26521__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26520,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26520,map__26521,map__26521__$1,msg,msg_name,_,map__26517,map__26517__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26520,map__26521,map__26521__$1,msg,msg_name,_,map__26517,map__26517__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26517,map__26517__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26527){
var vec__26528 = p__26527;
var map__26529 = cljs.core.nth.call(null,vec__26528,(0),null);
var map__26529__$1 = ((((!((map__26529 == null)))?((((map__26529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26529):map__26529);
var msg = map__26529__$1;
var msg_name = cljs.core.get.call(null,map__26529__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26528,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26531){
var map__26541 = p__26531;
var map__26541__$1 = ((((!((map__26541 == null)))?((((map__26541.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26541.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26541):map__26541);
var on_compile_warning = cljs.core.get.call(null,map__26541__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26541__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26541,map__26541__$1,on_compile_warning,on_compile_fail){
return (function (p__26543){
var vec__26544 = p__26543;
var map__26545 = cljs.core.nth.call(null,vec__26544,(0),null);
var map__26545__$1 = ((((!((map__26545 == null)))?((((map__26545.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26545.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26545):map__26545);
var msg = map__26545__$1;
var msg_name = cljs.core.get.call(null,map__26545__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26544,(1));
var pred__26547 = cljs.core._EQ_;
var expr__26548 = msg_name;
if(cljs.core.truth_(pred__26547.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26548))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26547.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26548))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26541,map__26541__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21970__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21970__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21971__auto__ = (function (){var switch__21858__auto__ = ((function (c__21970__auto__,msg_hist,msg_names,msg){
return (function (state_26764){
var state_val_26765 = (state_26764[(1)]);
if((state_val_26765 === (7))){
var inst_26688 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
if(cljs.core.truth_(inst_26688)){
var statearr_26766_26812 = state_26764__$1;
(statearr_26766_26812[(1)] = (8));

} else {
var statearr_26767_26813 = state_26764__$1;
(statearr_26767_26813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (20))){
var inst_26758 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
var statearr_26768_26814 = state_26764__$1;
(statearr_26768_26814[(2)] = inst_26758);

(statearr_26768_26814[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (27))){
var inst_26754 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
var statearr_26769_26815 = state_26764__$1;
(statearr_26769_26815[(2)] = inst_26754);

(statearr_26769_26815[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (1))){
var inst_26681 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26764__$1 = state_26764;
if(cljs.core.truth_(inst_26681)){
var statearr_26770_26816 = state_26764__$1;
(statearr_26770_26816[(1)] = (2));

} else {
var statearr_26771_26817 = state_26764__$1;
(statearr_26771_26817[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (24))){
var inst_26756 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
var statearr_26772_26818 = state_26764__$1;
(statearr_26772_26818[(2)] = inst_26756);

(statearr_26772_26818[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (4))){
var inst_26762 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26764__$1,inst_26762);
} else {
if((state_val_26765 === (15))){
var inst_26760 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
var statearr_26773_26819 = state_26764__$1;
(statearr_26773_26819[(2)] = inst_26760);

(statearr_26773_26819[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (21))){
var inst_26719 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
var statearr_26774_26820 = state_26764__$1;
(statearr_26774_26820[(2)] = inst_26719);

(statearr_26774_26820[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (31))){
var inst_26743 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26764__$1 = state_26764;
if(cljs.core.truth_(inst_26743)){
var statearr_26775_26821 = state_26764__$1;
(statearr_26775_26821[(1)] = (34));

} else {
var statearr_26776_26822 = state_26764__$1;
(statearr_26776_26822[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (32))){
var inst_26752 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
var statearr_26777_26823 = state_26764__$1;
(statearr_26777_26823[(2)] = inst_26752);

(statearr_26777_26823[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (33))){
var inst_26741 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
var statearr_26778_26824 = state_26764__$1;
(statearr_26778_26824[(2)] = inst_26741);

(statearr_26778_26824[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (13))){
var inst_26702 = figwheel.client.heads_up.clear.call(null);
var state_26764__$1 = state_26764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26764__$1,(16),inst_26702);
} else {
if((state_val_26765 === (22))){
var inst_26723 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26724 = figwheel.client.heads_up.append_message.call(null,inst_26723);
var state_26764__$1 = state_26764;
var statearr_26779_26825 = state_26764__$1;
(statearr_26779_26825[(2)] = inst_26724);

(statearr_26779_26825[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (36))){
var inst_26750 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
var statearr_26780_26826 = state_26764__$1;
(statearr_26780_26826[(2)] = inst_26750);

(statearr_26780_26826[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (29))){
var inst_26734 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
var statearr_26781_26827 = state_26764__$1;
(statearr_26781_26827[(2)] = inst_26734);

(statearr_26781_26827[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (6))){
var inst_26683 = (state_26764[(7)]);
var state_26764__$1 = state_26764;
var statearr_26782_26828 = state_26764__$1;
(statearr_26782_26828[(2)] = inst_26683);

(statearr_26782_26828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (28))){
var inst_26730 = (state_26764[(2)]);
var inst_26731 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26732 = figwheel.client.heads_up.display_warning.call(null,inst_26731);
var state_26764__$1 = (function (){var statearr_26783 = state_26764;
(statearr_26783[(8)] = inst_26730);

return statearr_26783;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26764__$1,(29),inst_26732);
} else {
if((state_val_26765 === (25))){
var inst_26728 = figwheel.client.heads_up.clear.call(null);
var state_26764__$1 = state_26764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26764__$1,(28),inst_26728);
} else {
if((state_val_26765 === (34))){
var inst_26745 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26764__$1 = state_26764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26764__$1,(37),inst_26745);
} else {
if((state_val_26765 === (17))){
var inst_26710 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
var statearr_26784_26829 = state_26764__$1;
(statearr_26784_26829[(2)] = inst_26710);

(statearr_26784_26829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (3))){
var inst_26700 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26764__$1 = state_26764;
if(cljs.core.truth_(inst_26700)){
var statearr_26785_26830 = state_26764__$1;
(statearr_26785_26830[(1)] = (13));

} else {
var statearr_26786_26831 = state_26764__$1;
(statearr_26786_26831[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (12))){
var inst_26696 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
var statearr_26787_26832 = state_26764__$1;
(statearr_26787_26832[(2)] = inst_26696);

(statearr_26787_26832[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (2))){
var inst_26683 = (state_26764[(7)]);
var inst_26683__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26764__$1 = (function (){var statearr_26788 = state_26764;
(statearr_26788[(7)] = inst_26683__$1);

return statearr_26788;
})();
if(cljs.core.truth_(inst_26683__$1)){
var statearr_26789_26833 = state_26764__$1;
(statearr_26789_26833[(1)] = (5));

} else {
var statearr_26790_26834 = state_26764__$1;
(statearr_26790_26834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (23))){
var inst_26726 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26764__$1 = state_26764;
if(cljs.core.truth_(inst_26726)){
var statearr_26791_26835 = state_26764__$1;
(statearr_26791_26835[(1)] = (25));

} else {
var statearr_26792_26836 = state_26764__$1;
(statearr_26792_26836[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (35))){
var state_26764__$1 = state_26764;
var statearr_26793_26837 = state_26764__$1;
(statearr_26793_26837[(2)] = null);

(statearr_26793_26837[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (19))){
var inst_26721 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26764__$1 = state_26764;
if(cljs.core.truth_(inst_26721)){
var statearr_26794_26838 = state_26764__$1;
(statearr_26794_26838[(1)] = (22));

} else {
var statearr_26795_26839 = state_26764__$1;
(statearr_26795_26839[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (11))){
var inst_26692 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
var statearr_26796_26840 = state_26764__$1;
(statearr_26796_26840[(2)] = inst_26692);

(statearr_26796_26840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (9))){
var inst_26694 = figwheel.client.heads_up.clear.call(null);
var state_26764__$1 = state_26764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26764__$1,(12),inst_26694);
} else {
if((state_val_26765 === (5))){
var inst_26685 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26764__$1 = state_26764;
var statearr_26797_26841 = state_26764__$1;
(statearr_26797_26841[(2)] = inst_26685);

(statearr_26797_26841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (14))){
var inst_26712 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26764__$1 = state_26764;
if(cljs.core.truth_(inst_26712)){
var statearr_26798_26842 = state_26764__$1;
(statearr_26798_26842[(1)] = (18));

} else {
var statearr_26799_26843 = state_26764__$1;
(statearr_26799_26843[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (26))){
var inst_26736 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26764__$1 = state_26764;
if(cljs.core.truth_(inst_26736)){
var statearr_26800_26844 = state_26764__$1;
(statearr_26800_26844[(1)] = (30));

} else {
var statearr_26801_26845 = state_26764__$1;
(statearr_26801_26845[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (16))){
var inst_26704 = (state_26764[(2)]);
var inst_26705 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26706 = figwheel.client.format_messages.call(null,inst_26705);
var inst_26707 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26708 = figwheel.client.heads_up.display_error.call(null,inst_26706,inst_26707);
var state_26764__$1 = (function (){var statearr_26802 = state_26764;
(statearr_26802[(9)] = inst_26704);

return statearr_26802;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26764__$1,(17),inst_26708);
} else {
if((state_val_26765 === (30))){
var inst_26738 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26739 = figwheel.client.heads_up.display_warning.call(null,inst_26738);
var state_26764__$1 = state_26764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26764__$1,(33),inst_26739);
} else {
if((state_val_26765 === (10))){
var inst_26698 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
var statearr_26803_26846 = state_26764__$1;
(statearr_26803_26846[(2)] = inst_26698);

(statearr_26803_26846[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (18))){
var inst_26714 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26715 = figwheel.client.format_messages.call(null,inst_26714);
var inst_26716 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26717 = figwheel.client.heads_up.display_error.call(null,inst_26715,inst_26716);
var state_26764__$1 = state_26764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26764__$1,(21),inst_26717);
} else {
if((state_val_26765 === (37))){
var inst_26747 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
var statearr_26804_26847 = state_26764__$1;
(statearr_26804_26847[(2)] = inst_26747);

(statearr_26804_26847[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (8))){
var inst_26690 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26764__$1 = state_26764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26764__$1,(11),inst_26690);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21970__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21858__auto__,c__21970__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21859__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21859__auto____0 = (function (){
var statearr_26808 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26808[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21859__auto__);

(statearr_26808[(1)] = (1));

return statearr_26808;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21859__auto____1 = (function (state_26764){
while(true){
var ret_value__21860__auto__ = (function (){try{while(true){
var result__21861__auto__ = switch__21858__auto__.call(null,state_26764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21861__auto__;
}
break;
}
}catch (e26809){if((e26809 instanceof Object)){
var ex__21862__auto__ = e26809;
var statearr_26810_26848 = state_26764;
(statearr_26810_26848[(5)] = ex__21862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26849 = state_26764;
state_26764 = G__26849;
continue;
} else {
return ret_value__21860__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21859__auto__ = function(state_26764){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21859__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21859__auto____1.call(this,state_26764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21859__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21859__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21859__auto__;
})()
;})(switch__21858__auto__,c__21970__auto__,msg_hist,msg_names,msg))
})();
var state__21972__auto__ = (function (){var statearr_26811 = f__21971__auto__.call(null);
(statearr_26811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21970__auto__);

return statearr_26811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21972__auto__);
});})(c__21970__auto__,msg_hist,msg_names,msg))
);

return c__21970__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21970__auto___26912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21970__auto___26912,ch){
return (function (){
var f__21971__auto__ = (function (){var switch__21858__auto__ = ((function (c__21970__auto___26912,ch){
return (function (state_26895){
var state_val_26896 = (state_26895[(1)]);
if((state_val_26896 === (1))){
var state_26895__$1 = state_26895;
var statearr_26897_26913 = state_26895__$1;
(statearr_26897_26913[(2)] = null);

(statearr_26897_26913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26896 === (2))){
var state_26895__$1 = state_26895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26895__$1,(4),ch);
} else {
if((state_val_26896 === (3))){
var inst_26893 = (state_26895[(2)]);
var state_26895__$1 = state_26895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26895__$1,inst_26893);
} else {
if((state_val_26896 === (4))){
var inst_26883 = (state_26895[(7)]);
var inst_26883__$1 = (state_26895[(2)]);
var state_26895__$1 = (function (){var statearr_26898 = state_26895;
(statearr_26898[(7)] = inst_26883__$1);

return statearr_26898;
})();
if(cljs.core.truth_(inst_26883__$1)){
var statearr_26899_26914 = state_26895__$1;
(statearr_26899_26914[(1)] = (5));

} else {
var statearr_26900_26915 = state_26895__$1;
(statearr_26900_26915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26896 === (5))){
var inst_26883 = (state_26895[(7)]);
var inst_26885 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26883);
var state_26895__$1 = state_26895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26895__$1,(8),inst_26885);
} else {
if((state_val_26896 === (6))){
var state_26895__$1 = state_26895;
var statearr_26901_26916 = state_26895__$1;
(statearr_26901_26916[(2)] = null);

(statearr_26901_26916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26896 === (7))){
var inst_26891 = (state_26895[(2)]);
var state_26895__$1 = state_26895;
var statearr_26902_26917 = state_26895__$1;
(statearr_26902_26917[(2)] = inst_26891);

(statearr_26902_26917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26896 === (8))){
var inst_26887 = (state_26895[(2)]);
var state_26895__$1 = (function (){var statearr_26903 = state_26895;
(statearr_26903[(8)] = inst_26887);

return statearr_26903;
})();
var statearr_26904_26918 = state_26895__$1;
(statearr_26904_26918[(2)] = null);

(statearr_26904_26918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__21970__auto___26912,ch))
;
return ((function (switch__21858__auto__,c__21970__auto___26912,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21859__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21859__auto____0 = (function (){
var statearr_26908 = [null,null,null,null,null,null,null,null,null];
(statearr_26908[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21859__auto__);

(statearr_26908[(1)] = (1));

return statearr_26908;
});
var figwheel$client$heads_up_plugin_$_state_machine__21859__auto____1 = (function (state_26895){
while(true){
var ret_value__21860__auto__ = (function (){try{while(true){
var result__21861__auto__ = switch__21858__auto__.call(null,state_26895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21861__auto__;
}
break;
}
}catch (e26909){if((e26909 instanceof Object)){
var ex__21862__auto__ = e26909;
var statearr_26910_26919 = state_26895;
(statearr_26910_26919[(5)] = ex__21862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26920 = state_26895;
state_26895 = G__26920;
continue;
} else {
return ret_value__21860__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21859__auto__ = function(state_26895){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21859__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21859__auto____1.call(this,state_26895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21859__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21859__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21859__auto__;
})()
;})(switch__21858__auto__,c__21970__auto___26912,ch))
})();
var state__21972__auto__ = (function (){var statearr_26911 = f__21971__auto__.call(null);
(statearr_26911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21970__auto___26912);

return statearr_26911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21972__auto__);
});})(c__21970__auto___26912,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21970__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21970__auto__){
return (function (){
var f__21971__auto__ = (function (){var switch__21858__auto__ = ((function (c__21970__auto__){
return (function (state_26941){
var state_val_26942 = (state_26941[(1)]);
if((state_val_26942 === (1))){
var inst_26936 = cljs.core.async.timeout.call(null,(3000));
var state_26941__$1 = state_26941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26941__$1,(2),inst_26936);
} else {
if((state_val_26942 === (2))){
var inst_26938 = (state_26941[(2)]);
var inst_26939 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26941__$1 = (function (){var statearr_26943 = state_26941;
(statearr_26943[(7)] = inst_26938);

return statearr_26943;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26941__$1,inst_26939);
} else {
return null;
}
}
});})(c__21970__auto__))
;
return ((function (switch__21858__auto__,c__21970__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21859__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21859__auto____0 = (function (){
var statearr_26947 = [null,null,null,null,null,null,null,null];
(statearr_26947[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21859__auto__);

(statearr_26947[(1)] = (1));

return statearr_26947;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21859__auto____1 = (function (state_26941){
while(true){
var ret_value__21860__auto__ = (function (){try{while(true){
var result__21861__auto__ = switch__21858__auto__.call(null,state_26941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21861__auto__;
}
break;
}
}catch (e26948){if((e26948 instanceof Object)){
var ex__21862__auto__ = e26948;
var statearr_26949_26951 = state_26941;
(statearr_26949_26951[(5)] = ex__21862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26952 = state_26941;
state_26941 = G__26952;
continue;
} else {
return ret_value__21860__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21859__auto__ = function(state_26941){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21859__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21859__auto____1.call(this,state_26941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21859__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21859__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21859__auto__;
})()
;})(switch__21858__auto__,c__21970__auto__))
})();
var state__21972__auto__ = (function (){var statearr_26950 = f__21971__auto__.call(null);
(statearr_26950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21970__auto__);

return statearr_26950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21972__auto__);
});})(c__21970__auto__))
);

return c__21970__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26953){
var map__26960 = p__26953;
var map__26960__$1 = ((((!((map__26960 == null)))?((((map__26960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26960):map__26960);
var ed = map__26960__$1;
var formatted_exception = cljs.core.get.call(null,map__26960__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26960__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26960__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26962_26966 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26963_26967 = null;
var count__26964_26968 = (0);
var i__26965_26969 = (0);
while(true){
if((i__26965_26969 < count__26964_26968)){
var msg_26970 = cljs.core._nth.call(null,chunk__26963_26967,i__26965_26969);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26970);

var G__26971 = seq__26962_26966;
var G__26972 = chunk__26963_26967;
var G__26973 = count__26964_26968;
var G__26974 = (i__26965_26969 + (1));
seq__26962_26966 = G__26971;
chunk__26963_26967 = G__26972;
count__26964_26968 = G__26973;
i__26965_26969 = G__26974;
continue;
} else {
var temp__4425__auto___26975 = cljs.core.seq.call(null,seq__26962_26966);
if(temp__4425__auto___26975){
var seq__26962_26976__$1 = temp__4425__auto___26975;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26962_26976__$1)){
var c__17598__auto___26977 = cljs.core.chunk_first.call(null,seq__26962_26976__$1);
var G__26978 = cljs.core.chunk_rest.call(null,seq__26962_26976__$1);
var G__26979 = c__17598__auto___26977;
var G__26980 = cljs.core.count.call(null,c__17598__auto___26977);
var G__26981 = (0);
seq__26962_26966 = G__26978;
chunk__26963_26967 = G__26979;
count__26964_26968 = G__26980;
i__26965_26969 = G__26981;
continue;
} else {
var msg_26982 = cljs.core.first.call(null,seq__26962_26976__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26982);

var G__26983 = cljs.core.next.call(null,seq__26962_26976__$1);
var G__26984 = null;
var G__26985 = (0);
var G__26986 = (0);
seq__26962_26966 = G__26983;
chunk__26963_26967 = G__26984;
count__26964_26968 = G__26985;
i__26965_26969 = G__26986;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26987){
var map__26990 = p__26987;
var map__26990__$1 = ((((!((map__26990 == null)))?((((map__26990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26990):map__26990);
var w = map__26990__$1;
var message = cljs.core.get.call(null,map__26990__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16783__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16783__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16783__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26998 = cljs.core.seq.call(null,plugins);
var chunk__26999 = null;
var count__27000 = (0);
var i__27001 = (0);
while(true){
if((i__27001 < count__27000)){
var vec__27002 = cljs.core._nth.call(null,chunk__26999,i__27001);
var k = cljs.core.nth.call(null,vec__27002,(0),null);
var plugin = cljs.core.nth.call(null,vec__27002,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27004 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26998,chunk__26999,count__27000,i__27001,pl_27004,vec__27002,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27004.call(null,msg_hist);
});})(seq__26998,chunk__26999,count__27000,i__27001,pl_27004,vec__27002,k,plugin))
);
} else {
}

var G__27005 = seq__26998;
var G__27006 = chunk__26999;
var G__27007 = count__27000;
var G__27008 = (i__27001 + (1));
seq__26998 = G__27005;
chunk__26999 = G__27006;
count__27000 = G__27007;
i__27001 = G__27008;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26998);
if(temp__4425__auto__){
var seq__26998__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26998__$1)){
var c__17598__auto__ = cljs.core.chunk_first.call(null,seq__26998__$1);
var G__27009 = cljs.core.chunk_rest.call(null,seq__26998__$1);
var G__27010 = c__17598__auto__;
var G__27011 = cljs.core.count.call(null,c__17598__auto__);
var G__27012 = (0);
seq__26998 = G__27009;
chunk__26999 = G__27010;
count__27000 = G__27011;
i__27001 = G__27012;
continue;
} else {
var vec__27003 = cljs.core.first.call(null,seq__26998__$1);
var k = cljs.core.nth.call(null,vec__27003,(0),null);
var plugin = cljs.core.nth.call(null,vec__27003,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27013 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26998,chunk__26999,count__27000,i__27001,pl_27013,vec__27003,k,plugin,seq__26998__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27013.call(null,msg_hist);
});})(seq__26998,chunk__26999,count__27000,i__27001,pl_27013,vec__27003,k,plugin,seq__26998__$1,temp__4425__auto__))
);
} else {
}

var G__27014 = cljs.core.next.call(null,seq__26998__$1);
var G__27015 = null;
var G__27016 = (0);
var G__27017 = (0);
seq__26998 = G__27014;
chunk__26999 = G__27015;
count__27000 = G__27016;
i__27001 = G__27017;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args27018 = [];
var len__17853__auto___27021 = arguments.length;
var i__17854__auto___27022 = (0);
while(true){
if((i__17854__auto___27022 < len__17853__auto___27021)){
args27018.push((arguments[i__17854__auto___27022]));

var G__27023 = (i__17854__auto___27022 + (1));
i__17854__auto___27022 = G__27023;
continue;
} else {
}
break;
}

var G__27020 = args27018.length;
switch (G__27020) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27018.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17860__auto__ = [];
var len__17853__auto___27029 = arguments.length;
var i__17854__auto___27030 = (0);
while(true){
if((i__17854__auto___27030 < len__17853__auto___27029)){
args__17860__auto__.push((arguments[i__17854__auto___27030]));

var G__27031 = (i__17854__auto___27030 + (1));
i__17854__auto___27030 = G__27031;
continue;
} else {
}
break;
}

var argseq__17861__auto__ = ((((0) < args__17860__auto__.length))?(new cljs.core.IndexedSeq(args__17860__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17861__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27026){
var map__27027 = p__27026;
var map__27027__$1 = ((((!((map__27027 == null)))?((((map__27027.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27027.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27027):map__27027);
var opts = map__27027__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27025){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27025));
});

//# sourceMappingURL=client.js.map