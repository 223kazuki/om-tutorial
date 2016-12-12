// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25888_25902 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25889_25903 = null;
var count__25890_25904 = (0);
var i__25891_25905 = (0);
while(true){
if((i__25891_25905 < count__25890_25904)){
var f_25906 = cljs.core._nth.call(null,chunk__25889_25903,i__25891_25905);
cljs.core.println.call(null,"  ",f_25906);

var G__25907 = seq__25888_25902;
var G__25908 = chunk__25889_25903;
var G__25909 = count__25890_25904;
var G__25910 = (i__25891_25905 + (1));
seq__25888_25902 = G__25907;
chunk__25889_25903 = G__25908;
count__25890_25904 = G__25909;
i__25891_25905 = G__25910;
continue;
} else {
var temp__4425__auto___25911 = cljs.core.seq.call(null,seq__25888_25902);
if(temp__4425__auto___25911){
var seq__25888_25912__$1 = temp__4425__auto___25911;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25888_25912__$1)){
var c__17598__auto___25913 = cljs.core.chunk_first.call(null,seq__25888_25912__$1);
var G__25914 = cljs.core.chunk_rest.call(null,seq__25888_25912__$1);
var G__25915 = c__17598__auto___25913;
var G__25916 = cljs.core.count.call(null,c__17598__auto___25913);
var G__25917 = (0);
seq__25888_25902 = G__25914;
chunk__25889_25903 = G__25915;
count__25890_25904 = G__25916;
i__25891_25905 = G__25917;
continue;
} else {
var f_25918 = cljs.core.first.call(null,seq__25888_25912__$1);
cljs.core.println.call(null,"  ",f_25918);

var G__25919 = cljs.core.next.call(null,seq__25888_25912__$1);
var G__25920 = null;
var G__25921 = (0);
var G__25922 = (0);
seq__25888_25902 = G__25919;
chunk__25889_25903 = G__25920;
count__25890_25904 = G__25921;
i__25891_25905 = G__25922;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25923 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16795__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16795__auto__)){
return or__16795__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25923);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25923)))?cljs.core.second.call(null,arglists_25923):arglists_25923));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25892 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25893 = null;
var count__25894 = (0);
var i__25895 = (0);
while(true){
if((i__25895 < count__25894)){
var vec__25896 = cljs.core._nth.call(null,chunk__25893,i__25895);
var name = cljs.core.nth.call(null,vec__25896,(0),null);
var map__25897 = cljs.core.nth.call(null,vec__25896,(1),null);
var map__25897__$1 = ((((!((map__25897 == null)))?((((map__25897.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25897.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25897):map__25897);
var doc = cljs.core.get.call(null,map__25897__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25897__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25924 = seq__25892;
var G__25925 = chunk__25893;
var G__25926 = count__25894;
var G__25927 = (i__25895 + (1));
seq__25892 = G__25924;
chunk__25893 = G__25925;
count__25894 = G__25926;
i__25895 = G__25927;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25892);
if(temp__4425__auto__){
var seq__25892__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25892__$1)){
var c__17598__auto__ = cljs.core.chunk_first.call(null,seq__25892__$1);
var G__25928 = cljs.core.chunk_rest.call(null,seq__25892__$1);
var G__25929 = c__17598__auto__;
var G__25930 = cljs.core.count.call(null,c__17598__auto__);
var G__25931 = (0);
seq__25892 = G__25928;
chunk__25893 = G__25929;
count__25894 = G__25930;
i__25895 = G__25931;
continue;
} else {
var vec__25899 = cljs.core.first.call(null,seq__25892__$1);
var name = cljs.core.nth.call(null,vec__25899,(0),null);
var map__25900 = cljs.core.nth.call(null,vec__25899,(1),null);
var map__25900__$1 = ((((!((map__25900 == null)))?((((map__25900.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25900.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25900):map__25900);
var doc = cljs.core.get.call(null,map__25900__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25900__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25932 = cljs.core.next.call(null,seq__25892__$1);
var G__25933 = null;
var G__25934 = (0);
var G__25935 = (0);
seq__25892 = G__25932;
chunk__25893 = G__25933;
count__25894 = G__25934;
i__25895 = G__25935;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map