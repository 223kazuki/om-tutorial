// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16795__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16795__auto__){
return or__16795__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16795__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16795__auto__)){
return or__16795__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24864_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24864_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__24869 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24870 = null;
var count__24871 = (0);
var i__24872 = (0);
while(true){
if((i__24872 < count__24871)){
var n = cljs.core._nth.call(null,chunk__24870,i__24872);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24873 = seq__24869;
var G__24874 = chunk__24870;
var G__24875 = count__24871;
var G__24876 = (i__24872 + (1));
seq__24869 = G__24873;
chunk__24870 = G__24874;
count__24871 = G__24875;
i__24872 = G__24876;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24869);
if(temp__4425__auto__){
var seq__24869__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24869__$1)){
var c__17598__auto__ = cljs.core.chunk_first.call(null,seq__24869__$1);
var G__24877 = cljs.core.chunk_rest.call(null,seq__24869__$1);
var G__24878 = c__17598__auto__;
var G__24879 = cljs.core.count.call(null,c__17598__auto__);
var G__24880 = (0);
seq__24869 = G__24877;
chunk__24870 = G__24878;
count__24871 = G__24879;
i__24872 = G__24880;
continue;
} else {
var n = cljs.core.first.call(null,seq__24869__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24881 = cljs.core.next.call(null,seq__24869__$1);
var G__24882 = null;
var G__24883 = (0);
var G__24884 = (0);
seq__24869 = G__24881;
chunk__24870 = G__24882;
count__24871 = G__24883;
i__24872 = G__24884;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__24923_24930 = cljs.core.seq.call(null,deps);
var chunk__24924_24931 = null;
var count__24925_24932 = (0);
var i__24926_24933 = (0);
while(true){
if((i__24926_24933 < count__24925_24932)){
var dep_24934 = cljs.core._nth.call(null,chunk__24924_24931,i__24926_24933);
topo_sort_helper_STAR_.call(null,dep_24934,(depth + (1)),state);

var G__24935 = seq__24923_24930;
var G__24936 = chunk__24924_24931;
var G__24937 = count__24925_24932;
var G__24938 = (i__24926_24933 + (1));
seq__24923_24930 = G__24935;
chunk__24924_24931 = G__24936;
count__24925_24932 = G__24937;
i__24926_24933 = G__24938;
continue;
} else {
var temp__4425__auto___24939 = cljs.core.seq.call(null,seq__24923_24930);
if(temp__4425__auto___24939){
var seq__24923_24940__$1 = temp__4425__auto___24939;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24923_24940__$1)){
var c__17598__auto___24941 = cljs.core.chunk_first.call(null,seq__24923_24940__$1);
var G__24942 = cljs.core.chunk_rest.call(null,seq__24923_24940__$1);
var G__24943 = c__17598__auto___24941;
var G__24944 = cljs.core.count.call(null,c__17598__auto___24941);
var G__24945 = (0);
seq__24923_24930 = G__24942;
chunk__24924_24931 = G__24943;
count__24925_24932 = G__24944;
i__24926_24933 = G__24945;
continue;
} else {
var dep_24946 = cljs.core.first.call(null,seq__24923_24940__$1);
topo_sort_helper_STAR_.call(null,dep_24946,(depth + (1)),state);

var G__24947 = cljs.core.next.call(null,seq__24923_24940__$1);
var G__24948 = null;
var G__24949 = (0);
var G__24950 = (0);
seq__24923_24930 = G__24947;
chunk__24924_24931 = G__24948;
count__24925_24932 = G__24949;
i__24926_24933 = G__24950;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24927){
var vec__24929 = p__24927;
var x = cljs.core.nth.call(null,vec__24929,(0),null);
var xs = cljs.core.nthnext.call(null,vec__24929,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24929,x,xs,get_deps__$1){
return (function (p1__24885_SHARP_){
return clojure.set.difference.call(null,p1__24885_SHARP_,x);
});})(vec__24929,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__24963 = cljs.core.seq.call(null,provides);
var chunk__24964 = null;
var count__24965 = (0);
var i__24966 = (0);
while(true){
if((i__24966 < count__24965)){
var prov = cljs.core._nth.call(null,chunk__24964,i__24966);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24967_24975 = cljs.core.seq.call(null,requires);
var chunk__24968_24976 = null;
var count__24969_24977 = (0);
var i__24970_24978 = (0);
while(true){
if((i__24970_24978 < count__24969_24977)){
var req_24979 = cljs.core._nth.call(null,chunk__24968_24976,i__24970_24978);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24979,prov);

var G__24980 = seq__24967_24975;
var G__24981 = chunk__24968_24976;
var G__24982 = count__24969_24977;
var G__24983 = (i__24970_24978 + (1));
seq__24967_24975 = G__24980;
chunk__24968_24976 = G__24981;
count__24969_24977 = G__24982;
i__24970_24978 = G__24983;
continue;
} else {
var temp__4425__auto___24984 = cljs.core.seq.call(null,seq__24967_24975);
if(temp__4425__auto___24984){
var seq__24967_24985__$1 = temp__4425__auto___24984;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24967_24985__$1)){
var c__17598__auto___24986 = cljs.core.chunk_first.call(null,seq__24967_24985__$1);
var G__24987 = cljs.core.chunk_rest.call(null,seq__24967_24985__$1);
var G__24988 = c__17598__auto___24986;
var G__24989 = cljs.core.count.call(null,c__17598__auto___24986);
var G__24990 = (0);
seq__24967_24975 = G__24987;
chunk__24968_24976 = G__24988;
count__24969_24977 = G__24989;
i__24970_24978 = G__24990;
continue;
} else {
var req_24991 = cljs.core.first.call(null,seq__24967_24985__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24991,prov);

var G__24992 = cljs.core.next.call(null,seq__24967_24985__$1);
var G__24993 = null;
var G__24994 = (0);
var G__24995 = (0);
seq__24967_24975 = G__24992;
chunk__24968_24976 = G__24993;
count__24969_24977 = G__24994;
i__24970_24978 = G__24995;
continue;
}
} else {
}
}
break;
}

var G__24996 = seq__24963;
var G__24997 = chunk__24964;
var G__24998 = count__24965;
var G__24999 = (i__24966 + (1));
seq__24963 = G__24996;
chunk__24964 = G__24997;
count__24965 = G__24998;
i__24966 = G__24999;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24963);
if(temp__4425__auto__){
var seq__24963__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24963__$1)){
var c__17598__auto__ = cljs.core.chunk_first.call(null,seq__24963__$1);
var G__25000 = cljs.core.chunk_rest.call(null,seq__24963__$1);
var G__25001 = c__17598__auto__;
var G__25002 = cljs.core.count.call(null,c__17598__auto__);
var G__25003 = (0);
seq__24963 = G__25000;
chunk__24964 = G__25001;
count__24965 = G__25002;
i__24966 = G__25003;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24963__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24971_25004 = cljs.core.seq.call(null,requires);
var chunk__24972_25005 = null;
var count__24973_25006 = (0);
var i__24974_25007 = (0);
while(true){
if((i__24974_25007 < count__24973_25006)){
var req_25008 = cljs.core._nth.call(null,chunk__24972_25005,i__24974_25007);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25008,prov);

var G__25009 = seq__24971_25004;
var G__25010 = chunk__24972_25005;
var G__25011 = count__24973_25006;
var G__25012 = (i__24974_25007 + (1));
seq__24971_25004 = G__25009;
chunk__24972_25005 = G__25010;
count__24973_25006 = G__25011;
i__24974_25007 = G__25012;
continue;
} else {
var temp__4425__auto___25013__$1 = cljs.core.seq.call(null,seq__24971_25004);
if(temp__4425__auto___25013__$1){
var seq__24971_25014__$1 = temp__4425__auto___25013__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24971_25014__$1)){
var c__17598__auto___25015 = cljs.core.chunk_first.call(null,seq__24971_25014__$1);
var G__25016 = cljs.core.chunk_rest.call(null,seq__24971_25014__$1);
var G__25017 = c__17598__auto___25015;
var G__25018 = cljs.core.count.call(null,c__17598__auto___25015);
var G__25019 = (0);
seq__24971_25004 = G__25016;
chunk__24972_25005 = G__25017;
count__24973_25006 = G__25018;
i__24974_25007 = G__25019;
continue;
} else {
var req_25020 = cljs.core.first.call(null,seq__24971_25014__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25020,prov);

var G__25021 = cljs.core.next.call(null,seq__24971_25014__$1);
var G__25022 = null;
var G__25023 = (0);
var G__25024 = (0);
seq__24971_25004 = G__25021;
chunk__24972_25005 = G__25022;
count__24973_25006 = G__25023;
i__24974_25007 = G__25024;
continue;
}
} else {
}
}
break;
}

var G__25025 = cljs.core.next.call(null,seq__24963__$1);
var G__25026 = null;
var G__25027 = (0);
var G__25028 = (0);
seq__24963 = G__25025;
chunk__24964 = G__25026;
count__24965 = G__25027;
i__24966 = G__25028;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__25033_25037 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25034_25038 = null;
var count__25035_25039 = (0);
var i__25036_25040 = (0);
while(true){
if((i__25036_25040 < count__25035_25039)){
var ns_25041 = cljs.core._nth.call(null,chunk__25034_25038,i__25036_25040);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25041);

var G__25042 = seq__25033_25037;
var G__25043 = chunk__25034_25038;
var G__25044 = count__25035_25039;
var G__25045 = (i__25036_25040 + (1));
seq__25033_25037 = G__25042;
chunk__25034_25038 = G__25043;
count__25035_25039 = G__25044;
i__25036_25040 = G__25045;
continue;
} else {
var temp__4425__auto___25046 = cljs.core.seq.call(null,seq__25033_25037);
if(temp__4425__auto___25046){
var seq__25033_25047__$1 = temp__4425__auto___25046;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25033_25047__$1)){
var c__17598__auto___25048 = cljs.core.chunk_first.call(null,seq__25033_25047__$1);
var G__25049 = cljs.core.chunk_rest.call(null,seq__25033_25047__$1);
var G__25050 = c__17598__auto___25048;
var G__25051 = cljs.core.count.call(null,c__17598__auto___25048);
var G__25052 = (0);
seq__25033_25037 = G__25049;
chunk__25034_25038 = G__25050;
count__25035_25039 = G__25051;
i__25036_25040 = G__25052;
continue;
} else {
var ns_25053 = cljs.core.first.call(null,seq__25033_25047__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25053);

var G__25054 = cljs.core.next.call(null,seq__25033_25047__$1);
var G__25055 = null;
var G__25056 = (0);
var G__25057 = (0);
seq__25033_25037 = G__25054;
chunk__25034_25038 = G__25055;
count__25035_25039 = G__25056;
i__25036_25040 = G__25057;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16795__auto__ = goog.require__;
if(cljs.core.truth_(or__16795__auto__)){
return or__16795__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__25058__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25058 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25059__i = 0, G__25059__a = new Array(arguments.length -  0);
while (G__25059__i < G__25059__a.length) {G__25059__a[G__25059__i] = arguments[G__25059__i + 0]; ++G__25059__i;}
  args = new cljs.core.IndexedSeq(G__25059__a,0);
} 
return G__25058__delegate.call(this,args);};
G__25058.cljs$lang$maxFixedArity = 0;
G__25058.cljs$lang$applyTo = (function (arglist__25060){
var args = cljs.core.seq(arglist__25060);
return G__25058__delegate(args);
});
G__25058.cljs$core$IFn$_invoke$arity$variadic = G__25058__delegate;
return G__25058;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25062 = cljs.core._EQ_;
var expr__25063 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25062.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25063))){
var path_parts = ((function (pred__25062,expr__25063){
return (function (p1__25061_SHARP_){
return clojure.string.split.call(null,p1__25061_SHARP_,/[\/\\]/);
});})(pred__25062,expr__25063))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__25062,expr__25063){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25065){if((e25065 instanceof Error)){
var e = e25065;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25065;

}
}})());
});
;})(path_parts,sep,root,pred__25062,expr__25063))
} else {
if(cljs.core.truth_(pred__25062.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25063))){
return ((function (pred__25062,expr__25063){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__25062,expr__25063){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25062,expr__25063))
);

return deferred.addErrback(((function (deferred,pred__25062,expr__25063){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25062,expr__25063))
);
});
;})(pred__25062,expr__25063))
} else {
return ((function (pred__25062,expr__25063){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25062,expr__25063))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25066,callback){
var map__25069 = p__25066;
var map__25069__$1 = ((((!((map__25069 == null)))?((((map__25069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25069):map__25069);
var file_msg = map__25069__$1;
var request_url = cljs.core.get.call(null,map__25069__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25069,map__25069__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25069,map__25069__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__21970__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21970__auto__){
return (function (){
var f__21971__auto__ = (function (){var switch__21858__auto__ = ((function (c__21970__auto__){
return (function (state_25093){
var state_val_25094 = (state_25093[(1)]);
if((state_val_25094 === (7))){
var inst_25089 = (state_25093[(2)]);
var state_25093__$1 = state_25093;
var statearr_25095_25115 = state_25093__$1;
(statearr_25095_25115[(2)] = inst_25089);

(statearr_25095_25115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (1))){
var state_25093__$1 = state_25093;
var statearr_25096_25116 = state_25093__$1;
(statearr_25096_25116[(2)] = null);

(statearr_25096_25116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (4))){
var inst_25073 = (state_25093[(7)]);
var inst_25073__$1 = (state_25093[(2)]);
var state_25093__$1 = (function (){var statearr_25097 = state_25093;
(statearr_25097[(7)] = inst_25073__$1);

return statearr_25097;
})();
if(cljs.core.truth_(inst_25073__$1)){
var statearr_25098_25117 = state_25093__$1;
(statearr_25098_25117[(1)] = (5));

} else {
var statearr_25099_25118 = state_25093__$1;
(statearr_25099_25118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (6))){
var state_25093__$1 = state_25093;
var statearr_25100_25119 = state_25093__$1;
(statearr_25100_25119[(2)] = null);

(statearr_25100_25119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (3))){
var inst_25091 = (state_25093[(2)]);
var state_25093__$1 = state_25093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25093__$1,inst_25091);
} else {
if((state_val_25094 === (2))){
var state_25093__$1 = state_25093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25093__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25094 === (11))){
var inst_25085 = (state_25093[(2)]);
var state_25093__$1 = (function (){var statearr_25101 = state_25093;
(statearr_25101[(8)] = inst_25085);

return statearr_25101;
})();
var statearr_25102_25120 = state_25093__$1;
(statearr_25102_25120[(2)] = null);

(statearr_25102_25120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (9))){
var inst_25079 = (state_25093[(9)]);
var inst_25077 = (state_25093[(10)]);
var inst_25081 = inst_25079.call(null,inst_25077);
var state_25093__$1 = state_25093;
var statearr_25103_25121 = state_25093__$1;
(statearr_25103_25121[(2)] = inst_25081);

(statearr_25103_25121[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (5))){
var inst_25073 = (state_25093[(7)]);
var inst_25075 = figwheel.client.file_reloading.blocking_load.call(null,inst_25073);
var state_25093__$1 = state_25093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25093__$1,(8),inst_25075);
} else {
if((state_val_25094 === (10))){
var inst_25077 = (state_25093[(10)]);
var inst_25083 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25077);
var state_25093__$1 = state_25093;
var statearr_25104_25122 = state_25093__$1;
(statearr_25104_25122[(2)] = inst_25083);

(statearr_25104_25122[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (8))){
var inst_25079 = (state_25093[(9)]);
var inst_25073 = (state_25093[(7)]);
var inst_25077 = (state_25093[(2)]);
var inst_25078 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25079__$1 = cljs.core.get.call(null,inst_25078,inst_25073);
var state_25093__$1 = (function (){var statearr_25105 = state_25093;
(statearr_25105[(9)] = inst_25079__$1);

(statearr_25105[(10)] = inst_25077);

return statearr_25105;
})();
if(cljs.core.truth_(inst_25079__$1)){
var statearr_25106_25123 = state_25093__$1;
(statearr_25106_25123[(1)] = (9));

} else {
var statearr_25107_25124 = state_25093__$1;
(statearr_25107_25124[(1)] = (10));

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
});})(c__21970__auto__))
;
return ((function (switch__21858__auto__,c__21970__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21859__auto__ = null;
var figwheel$client$file_reloading$state_machine__21859__auto____0 = (function (){
var statearr_25111 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25111[(0)] = figwheel$client$file_reloading$state_machine__21859__auto__);

(statearr_25111[(1)] = (1));

return statearr_25111;
});
var figwheel$client$file_reloading$state_machine__21859__auto____1 = (function (state_25093){
while(true){
var ret_value__21860__auto__ = (function (){try{while(true){
var result__21861__auto__ = switch__21858__auto__.call(null,state_25093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21861__auto__;
}
break;
}
}catch (e25112){if((e25112 instanceof Object)){
var ex__21862__auto__ = e25112;
var statearr_25113_25125 = state_25093;
(statearr_25113_25125[(5)] = ex__21862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25126 = state_25093;
state_25093 = G__25126;
continue;
} else {
return ret_value__21860__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21859__auto__ = function(state_25093){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21859__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21859__auto____1.call(this,state_25093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21859__auto____0;
figwheel$client$file_reloading$state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21859__auto____1;
return figwheel$client$file_reloading$state_machine__21859__auto__;
})()
;})(switch__21858__auto__,c__21970__auto__))
})();
var state__21972__auto__ = (function (){var statearr_25114 = f__21971__auto__.call(null);
(statearr_25114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21970__auto__);

return statearr_25114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21972__auto__);
});})(c__21970__auto__))
);

return c__21970__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25127,callback){
var map__25130 = p__25127;
var map__25130__$1 = ((((!((map__25130 == null)))?((((map__25130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25130):map__25130);
var file_msg = map__25130__$1;
var namespace = cljs.core.get.call(null,map__25130__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25130,map__25130__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25130,map__25130__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25132){
var map__25135 = p__25132;
var map__25135__$1 = ((((!((map__25135 == null)))?((((map__25135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25135):map__25135);
var file_msg = map__25135__$1;
var namespace = cljs.core.get.call(null,map__25135__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16783__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16783__auto__){
var or__16795__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16795__auto__)){
return or__16795__auto__;
} else {
var or__16795__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16795__auto____$1)){
return or__16795__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16783__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25137,callback){
var map__25140 = p__25137;
var map__25140__$1 = ((((!((map__25140 == null)))?((((map__25140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25140):map__25140);
var file_msg = map__25140__$1;
var request_url = cljs.core.get.call(null,map__25140__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25140__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21970__auto___25228 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21970__auto___25228,out){
return (function (){
var f__21971__auto__ = (function (){var switch__21858__auto__ = ((function (c__21970__auto___25228,out){
return (function (state_25210){
var state_val_25211 = (state_25210[(1)]);
if((state_val_25211 === (1))){
var inst_25188 = cljs.core.nth.call(null,files,(0),null);
var inst_25189 = cljs.core.nthnext.call(null,files,(1));
var inst_25190 = files;
var state_25210__$1 = (function (){var statearr_25212 = state_25210;
(statearr_25212[(7)] = inst_25190);

(statearr_25212[(8)] = inst_25189);

(statearr_25212[(9)] = inst_25188);

return statearr_25212;
})();
var statearr_25213_25229 = state_25210__$1;
(statearr_25213_25229[(2)] = null);

(statearr_25213_25229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25211 === (2))){
var inst_25190 = (state_25210[(7)]);
var inst_25193 = (state_25210[(10)]);
var inst_25193__$1 = cljs.core.nth.call(null,inst_25190,(0),null);
var inst_25194 = cljs.core.nthnext.call(null,inst_25190,(1));
var inst_25195 = (inst_25193__$1 == null);
var inst_25196 = cljs.core.not.call(null,inst_25195);
var state_25210__$1 = (function (){var statearr_25214 = state_25210;
(statearr_25214[(11)] = inst_25194);

(statearr_25214[(10)] = inst_25193__$1);

return statearr_25214;
})();
if(inst_25196){
var statearr_25215_25230 = state_25210__$1;
(statearr_25215_25230[(1)] = (4));

} else {
var statearr_25216_25231 = state_25210__$1;
(statearr_25216_25231[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25211 === (3))){
var inst_25208 = (state_25210[(2)]);
var state_25210__$1 = state_25210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25210__$1,inst_25208);
} else {
if((state_val_25211 === (4))){
var inst_25193 = (state_25210[(10)]);
var inst_25198 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25193);
var state_25210__$1 = state_25210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25210__$1,(7),inst_25198);
} else {
if((state_val_25211 === (5))){
var inst_25204 = cljs.core.async.close_BANG_.call(null,out);
var state_25210__$1 = state_25210;
var statearr_25217_25232 = state_25210__$1;
(statearr_25217_25232[(2)] = inst_25204);

(statearr_25217_25232[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25211 === (6))){
var inst_25206 = (state_25210[(2)]);
var state_25210__$1 = state_25210;
var statearr_25218_25233 = state_25210__$1;
(statearr_25218_25233[(2)] = inst_25206);

(statearr_25218_25233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25211 === (7))){
var inst_25194 = (state_25210[(11)]);
var inst_25200 = (state_25210[(2)]);
var inst_25201 = cljs.core.async.put_BANG_.call(null,out,inst_25200);
var inst_25190 = inst_25194;
var state_25210__$1 = (function (){var statearr_25219 = state_25210;
(statearr_25219[(7)] = inst_25190);

(statearr_25219[(12)] = inst_25201);

return statearr_25219;
})();
var statearr_25220_25234 = state_25210__$1;
(statearr_25220_25234[(2)] = null);

(statearr_25220_25234[(1)] = (2));


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
});})(c__21970__auto___25228,out))
;
return ((function (switch__21858__auto__,c__21970__auto___25228,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21859__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21859__auto____0 = (function (){
var statearr_25224 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25224[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21859__auto__);

(statearr_25224[(1)] = (1));

return statearr_25224;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21859__auto____1 = (function (state_25210){
while(true){
var ret_value__21860__auto__ = (function (){try{while(true){
var result__21861__auto__ = switch__21858__auto__.call(null,state_25210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21861__auto__;
}
break;
}
}catch (e25225){if((e25225 instanceof Object)){
var ex__21862__auto__ = e25225;
var statearr_25226_25235 = state_25210;
(statearr_25226_25235[(5)] = ex__21862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25236 = state_25210;
state_25210 = G__25236;
continue;
} else {
return ret_value__21860__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21859__auto__ = function(state_25210){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21859__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21859__auto____1.call(this,state_25210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21859__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21859__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21859__auto__;
})()
;})(switch__21858__auto__,c__21970__auto___25228,out))
})();
var state__21972__auto__ = (function (){var statearr_25227 = f__21971__auto__.call(null);
(statearr_25227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21970__auto___25228);

return statearr_25227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21972__auto__);
});})(c__21970__auto___25228,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25237,opts){
var map__25241 = p__25237;
var map__25241__$1 = ((((!((map__25241 == null)))?((((map__25241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25241):map__25241);
var eval_body__$1 = cljs.core.get.call(null,map__25241__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25241__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16783__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16783__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16783__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25243){var e = e25243;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25244_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25244_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__25249){
var vec__25250 = p__25249;
var k = cljs.core.nth.call(null,vec__25250,(0),null);
var v = cljs.core.nth.call(null,vec__25250,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25251){
var vec__25252 = p__25251;
var k = cljs.core.nth.call(null,vec__25252,(0),null);
var v = cljs.core.nth.call(null,vec__25252,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25256,p__25257){
var map__25504 = p__25256;
var map__25504__$1 = ((((!((map__25504 == null)))?((((map__25504.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25504.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25504):map__25504);
var opts = map__25504__$1;
var before_jsload = cljs.core.get.call(null,map__25504__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25504__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25504__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25505 = p__25257;
var map__25505__$1 = ((((!((map__25505 == null)))?((((map__25505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25505):map__25505);
var msg = map__25505__$1;
var files = cljs.core.get.call(null,map__25505__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25505__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25505__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21970__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21970__auto__,map__25504,map__25504__$1,opts,before_jsload,on_jsload,reload_dependents,map__25505,map__25505__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21971__auto__ = (function (){var switch__21858__auto__ = ((function (c__21970__auto__,map__25504,map__25504__$1,opts,before_jsload,on_jsload,reload_dependents,map__25505,map__25505__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25658){
var state_val_25659 = (state_25658[(1)]);
if((state_val_25659 === (7))){
var inst_25521 = (state_25658[(7)]);
var inst_25520 = (state_25658[(8)]);
var inst_25519 = (state_25658[(9)]);
var inst_25522 = (state_25658[(10)]);
var inst_25527 = cljs.core._nth.call(null,inst_25520,inst_25522);
var inst_25528 = figwheel.client.file_reloading.eval_body.call(null,inst_25527,opts);
var inst_25529 = (inst_25522 + (1));
var tmp25660 = inst_25521;
var tmp25661 = inst_25520;
var tmp25662 = inst_25519;
var inst_25519__$1 = tmp25662;
var inst_25520__$1 = tmp25661;
var inst_25521__$1 = tmp25660;
var inst_25522__$1 = inst_25529;
var state_25658__$1 = (function (){var statearr_25663 = state_25658;
(statearr_25663[(7)] = inst_25521__$1);

(statearr_25663[(8)] = inst_25520__$1);

(statearr_25663[(9)] = inst_25519__$1);

(statearr_25663[(10)] = inst_25522__$1);

(statearr_25663[(11)] = inst_25528);

return statearr_25663;
})();
var statearr_25664_25750 = state_25658__$1;
(statearr_25664_25750[(2)] = null);

(statearr_25664_25750[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (20))){
var inst_25562 = (state_25658[(12)]);
var inst_25570 = figwheel.client.file_reloading.sort_files.call(null,inst_25562);
var state_25658__$1 = state_25658;
var statearr_25665_25751 = state_25658__$1;
(statearr_25665_25751[(2)] = inst_25570);

(statearr_25665_25751[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (27))){
var state_25658__$1 = state_25658;
var statearr_25666_25752 = state_25658__$1;
(statearr_25666_25752[(2)] = null);

(statearr_25666_25752[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (1))){
var inst_25511 = (state_25658[(13)]);
var inst_25508 = before_jsload.call(null,files);
var inst_25509 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25510 = (function (){return ((function (inst_25511,inst_25508,inst_25509,state_val_25659,c__21970__auto__,map__25504,map__25504__$1,opts,before_jsload,on_jsload,reload_dependents,map__25505,map__25505__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25253_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25253_SHARP_);
});
;})(inst_25511,inst_25508,inst_25509,state_val_25659,c__21970__auto__,map__25504,map__25504__$1,opts,before_jsload,on_jsload,reload_dependents,map__25505,map__25505__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25511__$1 = cljs.core.filter.call(null,inst_25510,files);
var inst_25512 = cljs.core.not_empty.call(null,inst_25511__$1);
var state_25658__$1 = (function (){var statearr_25667 = state_25658;
(statearr_25667[(14)] = inst_25509);

(statearr_25667[(15)] = inst_25508);

(statearr_25667[(13)] = inst_25511__$1);

return statearr_25667;
})();
if(cljs.core.truth_(inst_25512)){
var statearr_25668_25753 = state_25658__$1;
(statearr_25668_25753[(1)] = (2));

} else {
var statearr_25669_25754 = state_25658__$1;
(statearr_25669_25754[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (24))){
var state_25658__$1 = state_25658;
var statearr_25670_25755 = state_25658__$1;
(statearr_25670_25755[(2)] = null);

(statearr_25670_25755[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (39))){
var inst_25612 = (state_25658[(16)]);
var state_25658__$1 = state_25658;
var statearr_25671_25756 = state_25658__$1;
(statearr_25671_25756[(2)] = inst_25612);

(statearr_25671_25756[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (46))){
var inst_25653 = (state_25658[(2)]);
var state_25658__$1 = state_25658;
var statearr_25672_25757 = state_25658__$1;
(statearr_25672_25757[(2)] = inst_25653);

(statearr_25672_25757[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (4))){
var inst_25556 = (state_25658[(2)]);
var inst_25557 = cljs.core.List.EMPTY;
var inst_25558 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25557);
var inst_25559 = (function (){return ((function (inst_25556,inst_25557,inst_25558,state_val_25659,c__21970__auto__,map__25504,map__25504__$1,opts,before_jsload,on_jsload,reload_dependents,map__25505,map__25505__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25254_SHARP_){
var and__16783__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25254_SHARP_);
if(cljs.core.truth_(and__16783__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25254_SHARP_));
} else {
return and__16783__auto__;
}
});
;})(inst_25556,inst_25557,inst_25558,state_val_25659,c__21970__auto__,map__25504,map__25504__$1,opts,before_jsload,on_jsload,reload_dependents,map__25505,map__25505__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25560 = cljs.core.filter.call(null,inst_25559,files);
var inst_25561 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25562 = cljs.core.concat.call(null,inst_25560,inst_25561);
var state_25658__$1 = (function (){var statearr_25673 = state_25658;
(statearr_25673[(12)] = inst_25562);

(statearr_25673[(17)] = inst_25558);

(statearr_25673[(18)] = inst_25556);

return statearr_25673;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25674_25758 = state_25658__$1;
(statearr_25674_25758[(1)] = (16));

} else {
var statearr_25675_25759 = state_25658__$1;
(statearr_25675_25759[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (15))){
var inst_25546 = (state_25658[(2)]);
var state_25658__$1 = state_25658;
var statearr_25676_25760 = state_25658__$1;
(statearr_25676_25760[(2)] = inst_25546);

(statearr_25676_25760[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (21))){
var inst_25572 = (state_25658[(19)]);
var inst_25572__$1 = (state_25658[(2)]);
var inst_25573 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25572__$1);
var state_25658__$1 = (function (){var statearr_25677 = state_25658;
(statearr_25677[(19)] = inst_25572__$1);

return statearr_25677;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25658__$1,(22),inst_25573);
} else {
if((state_val_25659 === (31))){
var inst_25656 = (state_25658[(2)]);
var state_25658__$1 = state_25658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25658__$1,inst_25656);
} else {
if((state_val_25659 === (32))){
var inst_25612 = (state_25658[(16)]);
var inst_25617 = inst_25612.cljs$lang$protocol_mask$partition0$;
var inst_25618 = (inst_25617 & (64));
var inst_25619 = inst_25612.cljs$core$ISeq$;
var inst_25620 = (inst_25618) || (inst_25619);
var state_25658__$1 = state_25658;
if(cljs.core.truth_(inst_25620)){
var statearr_25678_25761 = state_25658__$1;
(statearr_25678_25761[(1)] = (35));

} else {
var statearr_25679_25762 = state_25658__$1;
(statearr_25679_25762[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (40))){
var inst_25633 = (state_25658[(20)]);
var inst_25632 = (state_25658[(2)]);
var inst_25633__$1 = cljs.core.get.call(null,inst_25632,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25634 = cljs.core.get.call(null,inst_25632,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25635 = cljs.core.not_empty.call(null,inst_25633__$1);
var state_25658__$1 = (function (){var statearr_25680 = state_25658;
(statearr_25680[(21)] = inst_25634);

(statearr_25680[(20)] = inst_25633__$1);

return statearr_25680;
})();
if(cljs.core.truth_(inst_25635)){
var statearr_25681_25763 = state_25658__$1;
(statearr_25681_25763[(1)] = (41));

} else {
var statearr_25682_25764 = state_25658__$1;
(statearr_25682_25764[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (33))){
var state_25658__$1 = state_25658;
var statearr_25683_25765 = state_25658__$1;
(statearr_25683_25765[(2)] = false);

(statearr_25683_25765[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (13))){
var inst_25532 = (state_25658[(22)]);
var inst_25536 = cljs.core.chunk_first.call(null,inst_25532);
var inst_25537 = cljs.core.chunk_rest.call(null,inst_25532);
var inst_25538 = cljs.core.count.call(null,inst_25536);
var inst_25519 = inst_25537;
var inst_25520 = inst_25536;
var inst_25521 = inst_25538;
var inst_25522 = (0);
var state_25658__$1 = (function (){var statearr_25684 = state_25658;
(statearr_25684[(7)] = inst_25521);

(statearr_25684[(8)] = inst_25520);

(statearr_25684[(9)] = inst_25519);

(statearr_25684[(10)] = inst_25522);

return statearr_25684;
})();
var statearr_25685_25766 = state_25658__$1;
(statearr_25685_25766[(2)] = null);

(statearr_25685_25766[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (22))){
var inst_25575 = (state_25658[(23)]);
var inst_25580 = (state_25658[(24)]);
var inst_25572 = (state_25658[(19)]);
var inst_25576 = (state_25658[(25)]);
var inst_25575__$1 = (state_25658[(2)]);
var inst_25576__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25575__$1);
var inst_25577 = (function (){var all_files = inst_25572;
var res_SINGLEQUOTE_ = inst_25575__$1;
var res = inst_25576__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25575,inst_25580,inst_25572,inst_25576,inst_25575__$1,inst_25576__$1,state_val_25659,c__21970__auto__,map__25504,map__25504__$1,opts,before_jsload,on_jsload,reload_dependents,map__25505,map__25505__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25255_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25255_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25575,inst_25580,inst_25572,inst_25576,inst_25575__$1,inst_25576__$1,state_val_25659,c__21970__auto__,map__25504,map__25504__$1,opts,before_jsload,on_jsload,reload_dependents,map__25505,map__25505__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25578 = cljs.core.filter.call(null,inst_25577,inst_25575__$1);
var inst_25579 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25580__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25579);
var inst_25581 = cljs.core.not_empty.call(null,inst_25580__$1);
var state_25658__$1 = (function (){var statearr_25686 = state_25658;
(statearr_25686[(23)] = inst_25575__$1);

(statearr_25686[(24)] = inst_25580__$1);

(statearr_25686[(26)] = inst_25578);

(statearr_25686[(25)] = inst_25576__$1);

return statearr_25686;
})();
if(cljs.core.truth_(inst_25581)){
var statearr_25687_25767 = state_25658__$1;
(statearr_25687_25767[(1)] = (23));

} else {
var statearr_25688_25768 = state_25658__$1;
(statearr_25688_25768[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (36))){
var state_25658__$1 = state_25658;
var statearr_25689_25769 = state_25658__$1;
(statearr_25689_25769[(2)] = false);

(statearr_25689_25769[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (41))){
var inst_25633 = (state_25658[(20)]);
var inst_25637 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25638 = cljs.core.map.call(null,inst_25637,inst_25633);
var inst_25639 = cljs.core.pr_str.call(null,inst_25638);
var inst_25640 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25639)].join('');
var inst_25641 = figwheel.client.utils.log.call(null,inst_25640);
var state_25658__$1 = state_25658;
var statearr_25690_25770 = state_25658__$1;
(statearr_25690_25770[(2)] = inst_25641);

(statearr_25690_25770[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (43))){
var inst_25634 = (state_25658[(21)]);
var inst_25644 = (state_25658[(2)]);
var inst_25645 = cljs.core.not_empty.call(null,inst_25634);
var state_25658__$1 = (function (){var statearr_25691 = state_25658;
(statearr_25691[(27)] = inst_25644);

return statearr_25691;
})();
if(cljs.core.truth_(inst_25645)){
var statearr_25692_25771 = state_25658__$1;
(statearr_25692_25771[(1)] = (44));

} else {
var statearr_25693_25772 = state_25658__$1;
(statearr_25693_25772[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (29))){
var inst_25612 = (state_25658[(16)]);
var inst_25575 = (state_25658[(23)]);
var inst_25580 = (state_25658[(24)]);
var inst_25578 = (state_25658[(26)]);
var inst_25572 = (state_25658[(19)]);
var inst_25576 = (state_25658[(25)]);
var inst_25608 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25611 = (function (){var all_files = inst_25572;
var res_SINGLEQUOTE_ = inst_25575;
var res = inst_25576;
var files_not_loaded = inst_25578;
var dependencies_that_loaded = inst_25580;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25612,inst_25575,inst_25580,inst_25578,inst_25572,inst_25576,inst_25608,state_val_25659,c__21970__auto__,map__25504,map__25504__$1,opts,before_jsload,on_jsload,reload_dependents,map__25505,map__25505__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25610){
var map__25694 = p__25610;
var map__25694__$1 = ((((!((map__25694 == null)))?((((map__25694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25694):map__25694);
var namespace = cljs.core.get.call(null,map__25694__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25612,inst_25575,inst_25580,inst_25578,inst_25572,inst_25576,inst_25608,state_val_25659,c__21970__auto__,map__25504,map__25504__$1,opts,before_jsload,on_jsload,reload_dependents,map__25505,map__25505__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25612__$1 = cljs.core.group_by.call(null,inst_25611,inst_25578);
var inst_25614 = (inst_25612__$1 == null);
var inst_25615 = cljs.core.not.call(null,inst_25614);
var state_25658__$1 = (function (){var statearr_25696 = state_25658;
(statearr_25696[(16)] = inst_25612__$1);

(statearr_25696[(28)] = inst_25608);

return statearr_25696;
})();
if(inst_25615){
var statearr_25697_25773 = state_25658__$1;
(statearr_25697_25773[(1)] = (32));

} else {
var statearr_25698_25774 = state_25658__$1;
(statearr_25698_25774[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (44))){
var inst_25634 = (state_25658[(21)]);
var inst_25647 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25634);
var inst_25648 = cljs.core.pr_str.call(null,inst_25647);
var inst_25649 = [cljs.core.str("not required: "),cljs.core.str(inst_25648)].join('');
var inst_25650 = figwheel.client.utils.log.call(null,inst_25649);
var state_25658__$1 = state_25658;
var statearr_25699_25775 = state_25658__$1;
(statearr_25699_25775[(2)] = inst_25650);

(statearr_25699_25775[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (6))){
var inst_25553 = (state_25658[(2)]);
var state_25658__$1 = state_25658;
var statearr_25700_25776 = state_25658__$1;
(statearr_25700_25776[(2)] = inst_25553);

(statearr_25700_25776[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (28))){
var inst_25578 = (state_25658[(26)]);
var inst_25605 = (state_25658[(2)]);
var inst_25606 = cljs.core.not_empty.call(null,inst_25578);
var state_25658__$1 = (function (){var statearr_25701 = state_25658;
(statearr_25701[(29)] = inst_25605);

return statearr_25701;
})();
if(cljs.core.truth_(inst_25606)){
var statearr_25702_25777 = state_25658__$1;
(statearr_25702_25777[(1)] = (29));

} else {
var statearr_25703_25778 = state_25658__$1;
(statearr_25703_25778[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (25))){
var inst_25576 = (state_25658[(25)]);
var inst_25592 = (state_25658[(2)]);
var inst_25593 = cljs.core.not_empty.call(null,inst_25576);
var state_25658__$1 = (function (){var statearr_25704 = state_25658;
(statearr_25704[(30)] = inst_25592);

return statearr_25704;
})();
if(cljs.core.truth_(inst_25593)){
var statearr_25705_25779 = state_25658__$1;
(statearr_25705_25779[(1)] = (26));

} else {
var statearr_25706_25780 = state_25658__$1;
(statearr_25706_25780[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (34))){
var inst_25627 = (state_25658[(2)]);
var state_25658__$1 = state_25658;
if(cljs.core.truth_(inst_25627)){
var statearr_25707_25781 = state_25658__$1;
(statearr_25707_25781[(1)] = (38));

} else {
var statearr_25708_25782 = state_25658__$1;
(statearr_25708_25782[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (17))){
var state_25658__$1 = state_25658;
var statearr_25709_25783 = state_25658__$1;
(statearr_25709_25783[(2)] = recompile_dependents);

(statearr_25709_25783[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (3))){
var state_25658__$1 = state_25658;
var statearr_25710_25784 = state_25658__$1;
(statearr_25710_25784[(2)] = null);

(statearr_25710_25784[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (12))){
var inst_25549 = (state_25658[(2)]);
var state_25658__$1 = state_25658;
var statearr_25711_25785 = state_25658__$1;
(statearr_25711_25785[(2)] = inst_25549);

(statearr_25711_25785[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (2))){
var inst_25511 = (state_25658[(13)]);
var inst_25518 = cljs.core.seq.call(null,inst_25511);
var inst_25519 = inst_25518;
var inst_25520 = null;
var inst_25521 = (0);
var inst_25522 = (0);
var state_25658__$1 = (function (){var statearr_25712 = state_25658;
(statearr_25712[(7)] = inst_25521);

(statearr_25712[(8)] = inst_25520);

(statearr_25712[(9)] = inst_25519);

(statearr_25712[(10)] = inst_25522);

return statearr_25712;
})();
var statearr_25713_25786 = state_25658__$1;
(statearr_25713_25786[(2)] = null);

(statearr_25713_25786[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (23))){
var inst_25575 = (state_25658[(23)]);
var inst_25580 = (state_25658[(24)]);
var inst_25578 = (state_25658[(26)]);
var inst_25572 = (state_25658[(19)]);
var inst_25576 = (state_25658[(25)]);
var inst_25583 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25585 = (function (){var all_files = inst_25572;
var res_SINGLEQUOTE_ = inst_25575;
var res = inst_25576;
var files_not_loaded = inst_25578;
var dependencies_that_loaded = inst_25580;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25575,inst_25580,inst_25578,inst_25572,inst_25576,inst_25583,state_val_25659,c__21970__auto__,map__25504,map__25504__$1,opts,before_jsload,on_jsload,reload_dependents,map__25505,map__25505__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25584){
var map__25714 = p__25584;
var map__25714__$1 = ((((!((map__25714 == null)))?((((map__25714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25714):map__25714);
var request_url = cljs.core.get.call(null,map__25714__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25575,inst_25580,inst_25578,inst_25572,inst_25576,inst_25583,state_val_25659,c__21970__auto__,map__25504,map__25504__$1,opts,before_jsload,on_jsload,reload_dependents,map__25505,map__25505__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25586 = cljs.core.reverse.call(null,inst_25580);
var inst_25587 = cljs.core.map.call(null,inst_25585,inst_25586);
var inst_25588 = cljs.core.pr_str.call(null,inst_25587);
var inst_25589 = figwheel.client.utils.log.call(null,inst_25588);
var state_25658__$1 = (function (){var statearr_25716 = state_25658;
(statearr_25716[(31)] = inst_25583);

return statearr_25716;
})();
var statearr_25717_25787 = state_25658__$1;
(statearr_25717_25787[(2)] = inst_25589);

(statearr_25717_25787[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (35))){
var state_25658__$1 = state_25658;
var statearr_25718_25788 = state_25658__$1;
(statearr_25718_25788[(2)] = true);

(statearr_25718_25788[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (19))){
var inst_25562 = (state_25658[(12)]);
var inst_25568 = figwheel.client.file_reloading.expand_files.call(null,inst_25562);
var state_25658__$1 = state_25658;
var statearr_25719_25789 = state_25658__$1;
(statearr_25719_25789[(2)] = inst_25568);

(statearr_25719_25789[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (11))){
var state_25658__$1 = state_25658;
var statearr_25720_25790 = state_25658__$1;
(statearr_25720_25790[(2)] = null);

(statearr_25720_25790[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (9))){
var inst_25551 = (state_25658[(2)]);
var state_25658__$1 = state_25658;
var statearr_25721_25791 = state_25658__$1;
(statearr_25721_25791[(2)] = inst_25551);

(statearr_25721_25791[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (5))){
var inst_25521 = (state_25658[(7)]);
var inst_25522 = (state_25658[(10)]);
var inst_25524 = (inst_25522 < inst_25521);
var inst_25525 = inst_25524;
var state_25658__$1 = state_25658;
if(cljs.core.truth_(inst_25525)){
var statearr_25722_25792 = state_25658__$1;
(statearr_25722_25792[(1)] = (7));

} else {
var statearr_25723_25793 = state_25658__$1;
(statearr_25723_25793[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (14))){
var inst_25532 = (state_25658[(22)]);
var inst_25541 = cljs.core.first.call(null,inst_25532);
var inst_25542 = figwheel.client.file_reloading.eval_body.call(null,inst_25541,opts);
var inst_25543 = cljs.core.next.call(null,inst_25532);
var inst_25519 = inst_25543;
var inst_25520 = null;
var inst_25521 = (0);
var inst_25522 = (0);
var state_25658__$1 = (function (){var statearr_25724 = state_25658;
(statearr_25724[(32)] = inst_25542);

(statearr_25724[(7)] = inst_25521);

(statearr_25724[(8)] = inst_25520);

(statearr_25724[(9)] = inst_25519);

(statearr_25724[(10)] = inst_25522);

return statearr_25724;
})();
var statearr_25725_25794 = state_25658__$1;
(statearr_25725_25794[(2)] = null);

(statearr_25725_25794[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (45))){
var state_25658__$1 = state_25658;
var statearr_25726_25795 = state_25658__$1;
(statearr_25726_25795[(2)] = null);

(statearr_25726_25795[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (26))){
var inst_25575 = (state_25658[(23)]);
var inst_25580 = (state_25658[(24)]);
var inst_25578 = (state_25658[(26)]);
var inst_25572 = (state_25658[(19)]);
var inst_25576 = (state_25658[(25)]);
var inst_25595 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25597 = (function (){var all_files = inst_25572;
var res_SINGLEQUOTE_ = inst_25575;
var res = inst_25576;
var files_not_loaded = inst_25578;
var dependencies_that_loaded = inst_25580;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25575,inst_25580,inst_25578,inst_25572,inst_25576,inst_25595,state_val_25659,c__21970__auto__,map__25504,map__25504__$1,opts,before_jsload,on_jsload,reload_dependents,map__25505,map__25505__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25596){
var map__25727 = p__25596;
var map__25727__$1 = ((((!((map__25727 == null)))?((((map__25727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25727):map__25727);
var namespace = cljs.core.get.call(null,map__25727__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25727__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25575,inst_25580,inst_25578,inst_25572,inst_25576,inst_25595,state_val_25659,c__21970__auto__,map__25504,map__25504__$1,opts,before_jsload,on_jsload,reload_dependents,map__25505,map__25505__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25598 = cljs.core.map.call(null,inst_25597,inst_25576);
var inst_25599 = cljs.core.pr_str.call(null,inst_25598);
var inst_25600 = figwheel.client.utils.log.call(null,inst_25599);
var inst_25601 = (function (){var all_files = inst_25572;
var res_SINGLEQUOTE_ = inst_25575;
var res = inst_25576;
var files_not_loaded = inst_25578;
var dependencies_that_loaded = inst_25580;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25575,inst_25580,inst_25578,inst_25572,inst_25576,inst_25595,inst_25597,inst_25598,inst_25599,inst_25600,state_val_25659,c__21970__auto__,map__25504,map__25504__$1,opts,before_jsload,on_jsload,reload_dependents,map__25505,map__25505__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25575,inst_25580,inst_25578,inst_25572,inst_25576,inst_25595,inst_25597,inst_25598,inst_25599,inst_25600,state_val_25659,c__21970__auto__,map__25504,map__25504__$1,opts,before_jsload,on_jsload,reload_dependents,map__25505,map__25505__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25602 = setTimeout(inst_25601,(10));
var state_25658__$1 = (function (){var statearr_25729 = state_25658;
(statearr_25729[(33)] = inst_25595);

(statearr_25729[(34)] = inst_25600);

return statearr_25729;
})();
var statearr_25730_25796 = state_25658__$1;
(statearr_25730_25796[(2)] = inst_25602);

(statearr_25730_25796[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (16))){
var state_25658__$1 = state_25658;
var statearr_25731_25797 = state_25658__$1;
(statearr_25731_25797[(2)] = reload_dependents);

(statearr_25731_25797[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (38))){
var inst_25612 = (state_25658[(16)]);
var inst_25629 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25612);
var state_25658__$1 = state_25658;
var statearr_25732_25798 = state_25658__$1;
(statearr_25732_25798[(2)] = inst_25629);

(statearr_25732_25798[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (30))){
var state_25658__$1 = state_25658;
var statearr_25733_25799 = state_25658__$1;
(statearr_25733_25799[(2)] = null);

(statearr_25733_25799[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (10))){
var inst_25532 = (state_25658[(22)]);
var inst_25534 = cljs.core.chunked_seq_QMARK_.call(null,inst_25532);
var state_25658__$1 = state_25658;
if(inst_25534){
var statearr_25734_25800 = state_25658__$1;
(statearr_25734_25800[(1)] = (13));

} else {
var statearr_25735_25801 = state_25658__$1;
(statearr_25735_25801[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (18))){
var inst_25566 = (state_25658[(2)]);
var state_25658__$1 = state_25658;
if(cljs.core.truth_(inst_25566)){
var statearr_25736_25802 = state_25658__$1;
(statearr_25736_25802[(1)] = (19));

} else {
var statearr_25737_25803 = state_25658__$1;
(statearr_25737_25803[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (42))){
var state_25658__$1 = state_25658;
var statearr_25738_25804 = state_25658__$1;
(statearr_25738_25804[(2)] = null);

(statearr_25738_25804[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (37))){
var inst_25624 = (state_25658[(2)]);
var state_25658__$1 = state_25658;
var statearr_25739_25805 = state_25658__$1;
(statearr_25739_25805[(2)] = inst_25624);

(statearr_25739_25805[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (8))){
var inst_25532 = (state_25658[(22)]);
var inst_25519 = (state_25658[(9)]);
var inst_25532__$1 = cljs.core.seq.call(null,inst_25519);
var state_25658__$1 = (function (){var statearr_25740 = state_25658;
(statearr_25740[(22)] = inst_25532__$1);

return statearr_25740;
})();
if(inst_25532__$1){
var statearr_25741_25806 = state_25658__$1;
(statearr_25741_25806[(1)] = (10));

} else {
var statearr_25742_25807 = state_25658__$1;
(statearr_25742_25807[(1)] = (11));

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
});})(c__21970__auto__,map__25504,map__25504__$1,opts,before_jsload,on_jsload,reload_dependents,map__25505,map__25505__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21858__auto__,c__21970__auto__,map__25504,map__25504__$1,opts,before_jsload,on_jsload,reload_dependents,map__25505,map__25505__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21859__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21859__auto____0 = (function (){
var statearr_25746 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25746[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21859__auto__);

(statearr_25746[(1)] = (1));

return statearr_25746;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21859__auto____1 = (function (state_25658){
while(true){
var ret_value__21860__auto__ = (function (){try{while(true){
var result__21861__auto__ = switch__21858__auto__.call(null,state_25658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21861__auto__;
}
break;
}
}catch (e25747){if((e25747 instanceof Object)){
var ex__21862__auto__ = e25747;
var statearr_25748_25808 = state_25658;
(statearr_25748_25808[(5)] = ex__21862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25809 = state_25658;
state_25658 = G__25809;
continue;
} else {
return ret_value__21860__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21859__auto__ = function(state_25658){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21859__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21859__auto____1.call(this,state_25658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21859__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21859__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21859__auto__;
})()
;})(switch__21858__auto__,c__21970__auto__,map__25504,map__25504__$1,opts,before_jsload,on_jsload,reload_dependents,map__25505,map__25505__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21972__auto__ = (function (){var statearr_25749 = f__21971__auto__.call(null);
(statearr_25749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21970__auto__);

return statearr_25749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21972__auto__);
});})(c__21970__auto__,map__25504,map__25504__$1,opts,before_jsload,on_jsload,reload_dependents,map__25505,map__25505__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21970__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25812,link){
var map__25815 = p__25812;
var map__25815__$1 = ((((!((map__25815 == null)))?((((map__25815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25815):map__25815);
var file = cljs.core.get.call(null,map__25815__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__25815,map__25815__$1,file){
return (function (p1__25810_SHARP_,p2__25811_SHARP_){
if(cljs.core._EQ_.call(null,p1__25810_SHARP_,p2__25811_SHARP_)){
return p1__25810_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__25815,map__25815__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25821){
var map__25822 = p__25821;
var map__25822__$1 = ((((!((map__25822 == null)))?((((map__25822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25822):map__25822);
var match_length = cljs.core.get.call(null,map__25822__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25822__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25817_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25817_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args25824 = [];
var len__17853__auto___25827 = arguments.length;
var i__17854__auto___25828 = (0);
while(true){
if((i__17854__auto___25828 < len__17853__auto___25827)){
args25824.push((arguments[i__17854__auto___25828]));

var G__25829 = (i__17854__auto___25828 + (1));
i__17854__auto___25828 = G__25829;
continue;
} else {
}
break;
}

var G__25826 = args25824.length;
switch (G__25826) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25824.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25831_SHARP_,p2__25832_SHARP_){
return cljs.core.assoc.call(null,p1__25831_SHARP_,cljs.core.get.call(null,p2__25832_SHARP_,key),p2__25832_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25833){
var map__25836 = p__25833;
var map__25836__$1 = ((((!((map__25836 == null)))?((((map__25836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25836):map__25836);
var f_data = map__25836__$1;
var file = cljs.core.get.call(null,map__25836__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25838,files_msg){
var map__25845 = p__25838;
var map__25845__$1 = ((((!((map__25845 == null)))?((((map__25845.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25845.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25845):map__25845);
var opts = map__25845__$1;
var on_cssload = cljs.core.get.call(null,map__25845__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25847_25851 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25848_25852 = null;
var count__25849_25853 = (0);
var i__25850_25854 = (0);
while(true){
if((i__25850_25854 < count__25849_25853)){
var f_25855 = cljs.core._nth.call(null,chunk__25848_25852,i__25850_25854);
figwheel.client.file_reloading.reload_css_file.call(null,f_25855);

var G__25856 = seq__25847_25851;
var G__25857 = chunk__25848_25852;
var G__25858 = count__25849_25853;
var G__25859 = (i__25850_25854 + (1));
seq__25847_25851 = G__25856;
chunk__25848_25852 = G__25857;
count__25849_25853 = G__25858;
i__25850_25854 = G__25859;
continue;
} else {
var temp__4425__auto___25860 = cljs.core.seq.call(null,seq__25847_25851);
if(temp__4425__auto___25860){
var seq__25847_25861__$1 = temp__4425__auto___25860;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25847_25861__$1)){
var c__17598__auto___25862 = cljs.core.chunk_first.call(null,seq__25847_25861__$1);
var G__25863 = cljs.core.chunk_rest.call(null,seq__25847_25861__$1);
var G__25864 = c__17598__auto___25862;
var G__25865 = cljs.core.count.call(null,c__17598__auto___25862);
var G__25866 = (0);
seq__25847_25851 = G__25863;
chunk__25848_25852 = G__25864;
count__25849_25853 = G__25865;
i__25850_25854 = G__25866;
continue;
} else {
var f_25867 = cljs.core.first.call(null,seq__25847_25861__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25867);

var G__25868 = cljs.core.next.call(null,seq__25847_25861__$1);
var G__25869 = null;
var G__25870 = (0);
var G__25871 = (0);
seq__25847_25851 = G__25868;
chunk__25848_25852 = G__25869;
count__25849_25853 = G__25870;
i__25850_25854 = G__25871;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25845,map__25845__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25845,map__25845__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map