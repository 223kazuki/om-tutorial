// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_tutorial.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('clojure.test.check.generators');
goog.require('clojure.test.check');
goog.require('om.next');
goog.require('clojure.test.check.properties');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof om_tutorial.core.read !== 'undefined'){
} else {
om_tutorial.core.read = (function (){var method_table__17708__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17709__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17710__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17711__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17712__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-tutorial.core","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17712__auto__,method_table__17708__auto__,prefer_table__17709__auto__,method_cache__17710__auto__,cached_hierarchy__17711__auto__));
})();
}
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword(null,"people","people",1443537404),(function (p__32214,key,_){
var map__32215 = p__32214;
var map__32215__$1 = ((((!((map__32215 == null)))?((((map__32215.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32215.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32215):map__32215);
var env = map__32215__$1;
var state = cljs.core.get.call(null,map__32215__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__32215__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om.next.db__GT_tree.call(null,query,cljs.core.get.call(null,st,key),st)], null);
}));
if(typeof om_tutorial.core.mutate !== 'undefined'){
} else {
om_tutorial.core.mutate = (function (){var method_table__17708__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17709__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17710__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17711__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17712__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-tutorial.core","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17712__auto__,method_table__17708__auto__,prefer_table__17709__auto__,method_cache__17710__auto__,cached_hierarchy__17711__auto__));
})();
}
om_tutorial.core.add_friend = (function om_tutorial$core$add_friend(state,id,friend){
var add_STAR_ = (function om_tutorial$core$add_friend_$_add_STAR_(friends,ref){
var G__32224 = friends;
var G__32224__$1 = ((cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([ref], true),friends)))?cljs.core.conj.call(null,G__32224,ref):G__32224);
return G__32224__$1;
});
if(!(cljs.core._EQ_.call(null,id,friend))){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-id","person/by-id",1144472464),id,new cljs.core.Keyword(null,"friends","friends",-127631374)], null),add_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-id","person/by-id",1144472464),friend], null));
} else {
return state;
}
});
cljs.core._add_method.call(null,om_tutorial.core.mutate,new cljs.core.Symbol("friend","add","friend/add",-1531660896,null),(function (p__32225,key,p__32226){
var map__32227 = p__32225;
var map__32227__$1 = ((((!((map__32227 == null)))?((((map__32227.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32227.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32227):map__32227);
var env = map__32227__$1;
var state = cljs.core.get.call(null,map__32227__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__32228 = p__32226;
var map__32228__$1 = ((((!((map__32228 == null)))?((((map__32228.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32228.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32228):map__32228);
var params = map__32228__$1;
var id = cljs.core.get.call(null,map__32228__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var friend = cljs.core.get.call(null,map__32228__$1,new cljs.core.Keyword(null,"friend","friend",-286879240));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__32227,map__32227__$1,env,state,map__32228,map__32228__$1,params,id,friend){
return (function (){
return cljs.core.swap_BANG_.call(null,state,om_tutorial.core.add_friend,id,friend);
});})(map__32227,map__32227__$1,env,state,map__32228,map__32228__$1,params,id,friend))
], null);
}));
om_tutorial.core.remove_friend = (function om_tutorial$core$remove_friend(state,id,friend){
var remove_STAR_ = (function om_tutorial$core$remove_friend_$_remove_STAR_(friends,ref){
var G__32238 = friends;
var G__32238__$1 = (cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([ref], true),friends))?cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([ref], true)),G__32238):G__32238);
return G__32238__$1;
});
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-id","person/by-id",1144472464),id,new cljs.core.Keyword(null,"friends","friends",-127631374)], null),remove_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-id","person/by-id",1144472464),friend], null));
});
cljs.core._add_method.call(null,om_tutorial.core.mutate,new cljs.core.Symbol("friend","remove","friend/remove",-495637009,null),(function (p__32239,key,p__32240){
var map__32241 = p__32239;
var map__32241__$1 = ((((!((map__32241 == null)))?((((map__32241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32241):map__32241);
var env = map__32241__$1;
var state = cljs.core.get.call(null,map__32241__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__32242 = p__32240;
var map__32242__$1 = ((((!((map__32242 == null)))?((((map__32242.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32242.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32242):map__32242);
var params = map__32242__$1;
var id = cljs.core.get.call(null,map__32242__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var friend = cljs.core.get.call(null,map__32242__$1,new cljs.core.Keyword(null,"friend","friend",-286879240));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__32241,map__32241__$1,env,state,map__32242,map__32242__$1,params,id,friend){
return (function (){
return cljs.core.swap_BANG_.call(null,state,om_tutorial.core.remove_friend,id,friend);
});})(map__32241,map__32241__$1,env,state,map__32242,map__32242__$1,params,id,friend))
], null);
}));
om_tutorial.core.init_data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"people","people",1443537404),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"name","name",1843675177),"Bob",new cljs.core.Keyword(null,"friends","friends",-127631374),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Laura",new cljs.core.Keyword(null,"friends","friends",-127631374),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"Mary",new cljs.core.Keyword(null,"friends","friends",-127631374),cljs.core.PersistentVector.EMPTY], null)], null)], null);
/**
 * @constructor
 */
om_tutorial.core.Friend = (function om_tutorial$core$Friend(){
var this__20146__auto__ = this;
React.Component.apply(this__20146__auto__,arguments);

if(!((this__20146__auto__.initLocalState == null))){
this__20146__auto__.state = this__20146__auto__.initLocalState();
} else {
this__20146__auto__.state = {};
}

return this__20146__auto__;
});

om_tutorial.core.Friend.prototype = goog.object.clone(React.Component.prototype);

var x32249_32254 = om_tutorial.core.Friend.prototype;
x32249_32254.componentWillUpdate = ((function (x32249_32254){
return (function (next_props__20082__auto__,next_state__20083__auto__){
var this__20081__auto__ = this;
if(((!((this__20081__auto__ == null)))?(((false) || (this__20081__auto__.om$next$Ident$))?true:false):false)){
var ident__20085__auto___32255 = om.next.ident.call(null,this__20081__auto__,om.next.props.call(null,this__20081__auto__));
var next_ident__20086__auto___32256 = om.next.ident.call(null,this__20081__auto__,om.next._next_props.call(null,next_props__20082__auto__,this__20081__auto__));
if(cljs.core.not_EQ_.call(null,ident__20085__auto___32255,next_ident__20086__auto___32256)){
var idxr__20087__auto___32257 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20081__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__20087__auto___32257 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__20087__auto___32257),((function (idxr__20087__auto___32257,ident__20085__auto___32255,next_ident__20086__auto___32256,this__20081__auto__,x32249_32254){
return (function (indexes__20088__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__20088__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__20085__auto___32255], null),cljs.core.disj,this__20081__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__20086__auto___32256], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__20081__auto__);
});})(idxr__20087__auto___32257,ident__20085__auto___32255,next_ident__20086__auto___32256,this__20081__auto__,x32249_32254))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__20081__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__20081__auto__);
});})(x32249_32254))
;

x32249_32254.shouldComponentUpdate = ((function (x32249_32254){
return (function (next_props__20082__auto__,next_state__20083__auto__){
var this__20081__auto__ = this;
var next_children__20084__auto__ = next_props__20082__auto__.children;
var next_props__20082__auto____$1 = goog.object.get(next_props__20082__auto__,"omcljs$value");
var next_props__20082__auto____$2 = (function (){var G__32251 = next_props__20082__auto____$1;
var G__32251__$1 = (((next_props__20082__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__32251):G__32251);
return G__32251__$1;
})();
var or__16795__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__20081__auto__),next_props__20082__auto____$2);
if(or__16795__auto__){
return or__16795__auto__;
} else {
var or__16795__auto____$1 = (function (){var and__16783__auto__ = this__20081__auto__.state;
if(cljs.core.truth_(and__16783__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__20081__auto__.state,"omcljs$state"),goog.object.get(next_state__20083__auto__,"omcljs$state"));
} else {
return and__16783__auto__;
}
})();
if(cljs.core.truth_(or__16795__auto____$1)){
return or__16795__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__20081__auto__.props.children,next_children__20084__auto__);
}
}
});})(x32249_32254))
;

x32249_32254.componentWillUnmount = ((function (x32249_32254){
return (function (){
var this__20081__auto__ = this;
var r__20092__auto__ = om.next.get_reconciler.call(null,this__20081__auto__);
var cfg__20093__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__20092__auto__);
var st__20094__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__20093__auto__);
var indexer__20091__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__20093__auto__);
if(cljs.core.truth_((function (){var and__16783__auto__ = !((st__20094__auto__ == null));
if(and__16783__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__20094__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__20081__auto__], null));
} else {
return and__16783__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__20094__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__20081__auto__);
} else {
}

if((indexer__20091__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__20091__auto__,this__20081__auto__);
}
});})(x32249_32254))
;

x32249_32254.componentDidUpdate = ((function (x32249_32254){
return (function (prev_props__20089__auto__,prev_state__20090__auto__){
var this__20081__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__20081__auto__);
});})(x32249_32254))
;

x32249_32254.isMounted = ((function (x32249_32254){
return (function (){
var this__20081__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__20081__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x32249_32254))
;

x32249_32254.componentWillMount = ((function (x32249_32254){
return (function (){
var this__20081__auto__ = this;
var indexer__20091__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20081__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__20091__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__20091__auto__,this__20081__auto__);
}
});})(x32249_32254))
;


om_tutorial.core.Friend.prototype.constructor = om_tutorial.core.Friend;

om_tutorial.core.Friend.prototype.constructor.displayName = "om-tutorial.core/Friend";

om_tutorial.core.Friend.prototype.om$isComponent = true;

var x32252_32258 = om_tutorial.core.Friend;
x32252_32258.om$next$Ident$ = true;

x32252_32258.om$next$Ident$ident$arity$2 = ((function (x32252_32258){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-id","person/by-id",1144472464),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x32252_32258))
;

x32252_32258.om$next$IQuery$ = true;

x32252_32258.om$next$IQuery$query$arity$1 = ((function (x32252_32258){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x32252_32258))
;


var x32253_32259 = om_tutorial.core.Friend.prototype;
x32253_32259.om$next$Ident$ = true;

x32253_32259.om$next$Ident$ident$arity$2 = ((function (x32253_32259){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-id","person/by-id",1144472464),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x32253_32259))
;

x32253_32259.om$next$IQuery$ = true;

x32253_32259.om$next$IQuery$query$arity$1 = ((function (x32253_32259){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x32253_32259))
;


om_tutorial.core.Friend.cljs$lang$type = true;

om_tutorial.core.Friend.cljs$lang$ctorStr = "om-tutorial.core/Friend";

om_tutorial.core.Friend.cljs$lang$ctorPrWriter = (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"om-tutorial.core/Friend");
});
/**
 * @constructor
 */
om_tutorial.core.Person = (function om_tutorial$core$Person(){
var this__20146__auto__ = this;
React.Component.apply(this__20146__auto__,arguments);

if(!((this__20146__auto__.initLocalState == null))){
this__20146__auto__.state = this__20146__auto__.initLocalState();
} else {
this__20146__auto__.state = {};
}

return this__20146__auto__;
});

om_tutorial.core.Person.prototype = goog.object.clone(React.Component.prototype);

var x32264_32269 = om_tutorial.core.Person.prototype;
x32264_32269.componentWillUpdate = ((function (x32264_32269){
return (function (next_props__20082__auto__,next_state__20083__auto__){
var this__20081__auto__ = this;
if(((!((this__20081__auto__ == null)))?(((false) || (this__20081__auto__.om$next$Ident$))?true:false):false)){
var ident__20085__auto___32270 = om.next.ident.call(null,this__20081__auto__,om.next.props.call(null,this__20081__auto__));
var next_ident__20086__auto___32271 = om.next.ident.call(null,this__20081__auto__,om.next._next_props.call(null,next_props__20082__auto__,this__20081__auto__));
if(cljs.core.not_EQ_.call(null,ident__20085__auto___32270,next_ident__20086__auto___32271)){
var idxr__20087__auto___32272 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20081__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__20087__auto___32272 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__20087__auto___32272),((function (idxr__20087__auto___32272,ident__20085__auto___32270,next_ident__20086__auto___32271,this__20081__auto__,x32264_32269){
return (function (indexes__20088__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__20088__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__20085__auto___32270], null),cljs.core.disj,this__20081__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__20086__auto___32271], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__20081__auto__);
});})(idxr__20087__auto___32272,ident__20085__auto___32270,next_ident__20086__auto___32271,this__20081__auto__,x32264_32269))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__20081__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__20081__auto__);
});})(x32264_32269))
;

x32264_32269.shouldComponentUpdate = ((function (x32264_32269){
return (function (next_props__20082__auto__,next_state__20083__auto__){
var this__20081__auto__ = this;
var next_children__20084__auto__ = next_props__20082__auto__.children;
var next_props__20082__auto____$1 = goog.object.get(next_props__20082__auto__,"omcljs$value");
var next_props__20082__auto____$2 = (function (){var G__32266 = next_props__20082__auto____$1;
var G__32266__$1 = (((next_props__20082__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__32266):G__32266);
return G__32266__$1;
})();
var or__16795__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__20081__auto__),next_props__20082__auto____$2);
if(or__16795__auto__){
return or__16795__auto__;
} else {
var or__16795__auto____$1 = (function (){var and__16783__auto__ = this__20081__auto__.state;
if(cljs.core.truth_(and__16783__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__20081__auto__.state,"omcljs$state"),goog.object.get(next_state__20083__auto__,"omcljs$state"));
} else {
return and__16783__auto__;
}
})();
if(cljs.core.truth_(or__16795__auto____$1)){
return or__16795__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__20081__auto__.props.children,next_children__20084__auto__);
}
}
});})(x32264_32269))
;

x32264_32269.componentWillUnmount = ((function (x32264_32269){
return (function (){
var this__20081__auto__ = this;
var r__20092__auto__ = om.next.get_reconciler.call(null,this__20081__auto__);
var cfg__20093__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__20092__auto__);
var st__20094__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__20093__auto__);
var indexer__20091__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__20093__auto__);
if(cljs.core.truth_((function (){var and__16783__auto__ = !((st__20094__auto__ == null));
if(and__16783__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__20094__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__20081__auto__], null));
} else {
return and__16783__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__20094__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__20081__auto__);
} else {
}

if((indexer__20091__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__20091__auto__,this__20081__auto__);
}
});})(x32264_32269))
;

x32264_32269.componentDidUpdate = ((function (x32264_32269){
return (function (prev_props__20089__auto__,prev_state__20090__auto__){
var this__20081__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__20081__auto__);
});})(x32264_32269))
;

x32264_32269.isMounted = ((function (x32264_32269){
return (function (){
var this__20081__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__20081__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x32264_32269))
;

x32264_32269.componentWillMount = ((function (x32264_32269){
return (function (){
var this__20081__auto__ = this;
var indexer__20091__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20081__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__20091__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__20091__auto__,this__20081__auto__);
}
});})(x32264_32269))
;


om_tutorial.core.Person.prototype.constructor = om_tutorial.core.Person;

om_tutorial.core.Person.prototype.constructor.displayName = "om-tutorial.core/Person";

om_tutorial.core.Person.prototype.om$isComponent = true;

var x32267_32273 = om_tutorial.core.Person;
x32267_32273.om$next$Ident$ = true;

x32267_32273.om$next$Ident$ident$arity$2 = ((function (x32267_32273){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-id","person/by-id",1144472464),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x32267_32273))
;

x32267_32273.om$next$IQuery$ = true;

x32267_32273.om$next$IQuery$query$arity$1 = ((function (x32267_32273){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"friends","friends",-127631374),om.next.get_query.call(null,om_tutorial.core.Friend)], null)], null);
});})(x32267_32273))
;


var x32268_32274 = om_tutorial.core.Person.prototype;
x32268_32274.om$next$Ident$ = true;

x32268_32274.om$next$Ident$ident$arity$2 = ((function (x32268_32274){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-id","person/by-id",1144472464),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x32268_32274))
;

x32268_32274.om$next$IQuery$ = true;

x32268_32274.om$next$IQuery$query$arity$1 = ((function (x32268_32274){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"friends","friends",-127631374),om.next.get_query.call(null,om_tutorial.core.Friend)], null)], null);
});})(x32268_32274))
;


om_tutorial.core.Person.cljs$lang$type = true;

om_tutorial.core.Person.cljs$lang$ctorStr = "om-tutorial.core/Person";

om_tutorial.core.Person.cljs$lang$ctorPrWriter = (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"om-tutorial.core/Person");
});
/**
 * @constructor
 */
om_tutorial.core.People = (function om_tutorial$core$People(){
var this__20146__auto__ = this;
React.Component.apply(this__20146__auto__,arguments);

if(!((this__20146__auto__.initLocalState == null))){
this__20146__auto__.state = this__20146__auto__.initLocalState();
} else {
this__20146__auto__.state = {};
}

return this__20146__auto__;
});

om_tutorial.core.People.prototype = goog.object.clone(React.Component.prototype);

var x32279_32284 = om_tutorial.core.People.prototype;
x32279_32284.componentWillUpdate = ((function (x32279_32284){
return (function (next_props__20082__auto__,next_state__20083__auto__){
var this__20081__auto__ = this;
if(((!((this__20081__auto__ == null)))?(((false) || (this__20081__auto__.om$next$Ident$))?true:false):false)){
var ident__20085__auto___32285 = om.next.ident.call(null,this__20081__auto__,om.next.props.call(null,this__20081__auto__));
var next_ident__20086__auto___32286 = om.next.ident.call(null,this__20081__auto__,om.next._next_props.call(null,next_props__20082__auto__,this__20081__auto__));
if(cljs.core.not_EQ_.call(null,ident__20085__auto___32285,next_ident__20086__auto___32286)){
var idxr__20087__auto___32287 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20081__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__20087__auto___32287 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__20087__auto___32287),((function (idxr__20087__auto___32287,ident__20085__auto___32285,next_ident__20086__auto___32286,this__20081__auto__,x32279_32284){
return (function (indexes__20088__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__20088__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__20085__auto___32285], null),cljs.core.disj,this__20081__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__20086__auto___32286], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__20081__auto__);
});})(idxr__20087__auto___32287,ident__20085__auto___32285,next_ident__20086__auto___32286,this__20081__auto__,x32279_32284))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__20081__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__20081__auto__);
});})(x32279_32284))
;

x32279_32284.shouldComponentUpdate = ((function (x32279_32284){
return (function (next_props__20082__auto__,next_state__20083__auto__){
var this__20081__auto__ = this;
var next_children__20084__auto__ = next_props__20082__auto__.children;
var next_props__20082__auto____$1 = goog.object.get(next_props__20082__auto__,"omcljs$value");
var next_props__20082__auto____$2 = (function (){var G__32281 = next_props__20082__auto____$1;
var G__32281__$1 = (((next_props__20082__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__32281):G__32281);
return G__32281__$1;
})();
var or__16795__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__20081__auto__),next_props__20082__auto____$2);
if(or__16795__auto__){
return or__16795__auto__;
} else {
var or__16795__auto____$1 = (function (){var and__16783__auto__ = this__20081__auto__.state;
if(cljs.core.truth_(and__16783__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__20081__auto__.state,"omcljs$state"),goog.object.get(next_state__20083__auto__,"omcljs$state"));
} else {
return and__16783__auto__;
}
})();
if(cljs.core.truth_(or__16795__auto____$1)){
return or__16795__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__20081__auto__.props.children,next_children__20084__auto__);
}
}
});})(x32279_32284))
;

x32279_32284.componentWillUnmount = ((function (x32279_32284){
return (function (){
var this__20081__auto__ = this;
var r__20092__auto__ = om.next.get_reconciler.call(null,this__20081__auto__);
var cfg__20093__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__20092__auto__);
var st__20094__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__20093__auto__);
var indexer__20091__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__20093__auto__);
if(cljs.core.truth_((function (){var and__16783__auto__ = !((st__20094__auto__ == null));
if(and__16783__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__20094__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__20081__auto__], null));
} else {
return and__16783__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__20094__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__20081__auto__);
} else {
}

if((indexer__20091__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__20091__auto__,this__20081__auto__);
}
});})(x32279_32284))
;

x32279_32284.componentDidUpdate = ((function (x32279_32284){
return (function (prev_props__20089__auto__,prev_state__20090__auto__){
var this__20081__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__20081__auto__);
});})(x32279_32284))
;

x32279_32284.isMounted = ((function (x32279_32284){
return (function (){
var this__20081__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__20081__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x32279_32284))
;

x32279_32284.componentWillMount = ((function (x32279_32284){
return (function (){
var this__20081__auto__ = this;
var indexer__20091__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20081__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__20091__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__20091__auto__,this__20081__auto__);
}
});})(x32279_32284))
;


om_tutorial.core.People.prototype.constructor = om_tutorial.core.People;

om_tutorial.core.People.prototype.constructor.displayName = "om-tutorial.core/People";

om_tutorial.core.People.prototype.om$isComponent = true;

var x32282_32288 = om_tutorial.core.People;
x32282_32288.om$next$IQuery$ = true;

x32282_32288.om$next$IQuery$query$arity$1 = ((function (x32282_32288){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"people","people",1443537404),om.next.get_query.call(null,om_tutorial.core.Person)], null)], null);
});})(x32282_32288))
;


var x32283_32289 = om_tutorial.core.People.prototype;
x32283_32289.om$next$IQuery$ = true;

x32283_32289.om$next$IQuery$query$arity$1 = ((function (x32283_32289){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"people","people",1443537404),om.next.get_query.call(null,om_tutorial.core.Person)], null)], null);
});})(x32283_32289))
;


om_tutorial.core.People.cljs$lang$type = true;

om_tutorial.core.People.cljs$lang$ctorStr = "om-tutorial.core/People";

om_tutorial.core.People.cljs$lang$ctorPrWriter = (function (this__20148__auto__,writer__20149__auto__,opt__20150__auto__){
return cljs.core._write.call(null,writer__20149__auto__,"om-tutorial.core/People");
});
om_tutorial.core.app_state = cljs.core.atom.call(null,om.next.tree__GT_db.call(null,om_tutorial.core.People,om_tutorial.core.init_data,true));
om_tutorial.core.parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),om_tutorial.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),om_tutorial.core.mutate], null));
om_tutorial.core.gen_tx_add_remove = clojure.test.check.generators.vector.call(null,clojure.test.check.generators.fmap.call(null,cljs.core.seq,clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.elements.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("friend","add","friend/add",-1531660896,null),new cljs.core.Symbol("friend","remove","friend/remove",-495637009,null)], null)),clojure.test.check.generators.fmap.call(null,(function (p__32290){
var vec__32291 = p__32290;
var n = cljs.core.nth.call(null,vec__32291,(0),null);
var m = cljs.core.nth.call(null,vec__32291,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),n,new cljs.core.Keyword(null,"friend","friend",-286879240),m], null);
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.elements.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null)),clojure.test.check.generators.elements.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null)))))));
om_tutorial.core.self_friended_QMARK_ = (function om_tutorial$core$self_friended_QMARK_(p__32292){
var map__32295 = p__32292;
var map__32295__$1 = ((((!((map__32295 == null)))?((((map__32295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32295):map__32295);
var id = cljs.core.get.call(null,map__32295__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var friends = cljs.core.get.call(null,map__32295__$1,new cljs.core.Keyword(null,"friends","friends",-127631374));
return cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([id], true),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),friends)));
});
om_tutorial.core.prop_no_self_friending = (function om_tutorial$core$prop_no_self_friending(){
return clojure.test.check.properties.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tutorial.core.gen_tx_add_remove], null),(function (tx){
var parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),om_tutorial.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),om_tutorial.core.mutate], null));
var state = cljs.core.atom.call(null,om.next.tree__GT_db.call(null,om_tutorial.core.People,om_tutorial.core.init_data,true));
parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null),tx);

var ui = parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null),om.next.get_query.call(null,om_tutorial.core.People));
return cljs.core.not.call(null,cljs.core.some.call(null,om_tutorial.core.self_friended_QMARK_,new cljs.core.Keyword(null,"people","people",1443537404).cljs$core$IFn$_invoke$arity$1(ui)));
}));
});
cljs.core.println.call(null,clojure.test.check.quick_check.call(null,(100),om_tutorial.core.prop_no_self_friending.call(null)));
cljs.core.println.call(null,"Hello world?");

//# sourceMappingURL=core.js.map