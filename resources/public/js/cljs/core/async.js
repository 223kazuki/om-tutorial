// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args22015 = [];
var len__17853__auto___22021 = arguments.length;
var i__17854__auto___22022 = (0);
while(true){
if((i__17854__auto___22022 < len__17853__auto___22021)){
args22015.push((arguments[i__17854__auto___22022]));

var G__22023 = (i__17854__auto___22022 + (1));
i__17854__auto___22022 = G__22023;
continue;
} else {
}
break;
}

var G__22017 = args22015.length;
switch (G__22017) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22015.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22018 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22018 = (function (f,blockable,meta22019){
this.f = f;
this.blockable = blockable;
this.meta22019 = meta22019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22020,meta22019__$1){
var self__ = this;
var _22020__$1 = this;
return (new cljs.core.async.t_cljs$core$async22018(self__.f,self__.blockable,meta22019__$1));
});

cljs.core.async.t_cljs$core$async22018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22020){
var self__ = this;
var _22020__$1 = this;
return self__.meta22019;
});

cljs.core.async.t_cljs$core$async22018.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22018.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22018.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22018.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22018.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22019","meta22019",1575367035,null)], null);
});

cljs.core.async.t_cljs$core$async22018.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22018.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22018";

cljs.core.async.t_cljs$core$async22018.cljs$lang$ctorPrWriter = (function (this__17393__auto__,writer__17394__auto__,opt__17395__auto__){
return cljs.core._write.call(null,writer__17394__auto__,"cljs.core.async/t_cljs$core$async22018");
});

cljs.core.async.__GT_t_cljs$core$async22018 = (function cljs$core$async$__GT_t_cljs$core$async22018(f__$1,blockable__$1,meta22019){
return (new cljs.core.async.t_cljs$core$async22018(f__$1,blockable__$1,meta22019));
});

}

return (new cljs.core.async.t_cljs$core$async22018(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args22027 = [];
var len__17853__auto___22030 = arguments.length;
var i__17854__auto___22031 = (0);
while(true){
if((i__17854__auto___22031 < len__17853__auto___22030)){
args22027.push((arguments[i__17854__auto___22031]));

var G__22032 = (i__17854__auto___22031 + (1));
i__17854__auto___22031 = G__22032;
continue;
} else {
}
break;
}

var G__22029 = args22027.length;
switch (G__22029) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22027.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args22034 = [];
var len__17853__auto___22037 = arguments.length;
var i__17854__auto___22038 = (0);
while(true){
if((i__17854__auto___22038 < len__17853__auto___22037)){
args22034.push((arguments[i__17854__auto___22038]));

var G__22039 = (i__17854__auto___22038 + (1));
i__17854__auto___22038 = G__22039;
continue;
} else {
}
break;
}

var G__22036 = args22034.length;
switch (G__22036) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22034.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args22041 = [];
var len__17853__auto___22044 = arguments.length;
var i__17854__auto___22045 = (0);
while(true){
if((i__17854__auto___22045 < len__17853__auto___22044)){
args22041.push((arguments[i__17854__auto___22045]));

var G__22046 = (i__17854__auto___22045 + (1));
i__17854__auto___22045 = G__22046;
continue;
} else {
}
break;
}

var G__22043 = args22041.length;
switch (G__22043) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22041.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22048 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22048);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22048,ret){
return (function (){
return fn1.call(null,val_22048);
});})(val_22048,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args22049 = [];
var len__17853__auto___22052 = arguments.length;
var i__17854__auto___22053 = (0);
while(true){
if((i__17854__auto___22053 < len__17853__auto___22052)){
args22049.push((arguments[i__17854__auto___22053]));

var G__22054 = (i__17854__auto___22053 + (1));
i__17854__auto___22053 = G__22054;
continue;
} else {
}
break;
}

var G__22051 = args22049.length;
switch (G__22051) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22049.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17698__auto___22056 = n;
var x_22057 = (0);
while(true){
if((x_22057 < n__17698__auto___22056)){
(a[x_22057] = (0));

var G__22058 = (x_22057 + (1));
x_22057 = G__22058;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__22059 = (i + (1));
i = G__22059;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22063 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22063 = (function (alt_flag,flag,meta22064){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22064 = meta22064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22065,meta22064__$1){
var self__ = this;
var _22065__$1 = this;
return (new cljs.core.async.t_cljs$core$async22063(self__.alt_flag,self__.flag,meta22064__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22063.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22065){
var self__ = this;
var _22065__$1 = this;
return self__.meta22064;
});})(flag))
;

cljs.core.async.t_cljs$core$async22063.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22063.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22063.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22063.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22063.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22064","meta22064",1591476797,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22063.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22063";

cljs.core.async.t_cljs$core$async22063.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17393__auto__,writer__17394__auto__,opt__17395__auto__){
return cljs.core._write.call(null,writer__17394__auto__,"cljs.core.async/t_cljs$core$async22063");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22063 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22063(alt_flag__$1,flag__$1,meta22064){
return (new cljs.core.async.t_cljs$core$async22063(alt_flag__$1,flag__$1,meta22064));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22063(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22069 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22069 = (function (alt_handler,flag,cb,meta22070){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22070 = meta22070;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22071,meta22070__$1){
var self__ = this;
var _22071__$1 = this;
return (new cljs.core.async.t_cljs$core$async22069(self__.alt_handler,self__.flag,self__.cb,meta22070__$1));
});

cljs.core.async.t_cljs$core$async22069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22071){
var self__ = this;
var _22071__$1 = this;
return self__.meta22070;
});

cljs.core.async.t_cljs$core$async22069.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22069.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22069.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22069.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22069.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22070","meta22070",2113085364,null)], null);
});

cljs.core.async.t_cljs$core$async22069.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22069.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22069";

cljs.core.async.t_cljs$core$async22069.cljs$lang$ctorPrWriter = (function (this__17393__auto__,writer__17394__auto__,opt__17395__auto__){
return cljs.core._write.call(null,writer__17394__auto__,"cljs.core.async/t_cljs$core$async22069");
});

cljs.core.async.__GT_t_cljs$core$async22069 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22069(alt_handler__$1,flag__$1,cb__$1,meta22070){
return (new cljs.core.async.t_cljs$core$async22069(alt_handler__$1,flag__$1,cb__$1,meta22070));
});

}

return (new cljs.core.async.t_cljs$core$async22069(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22072_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22072_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22073_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22073_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16795__auto__ = wport;
if(cljs.core.truth_(or__16795__auto__)){
return or__16795__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22074 = (i + (1));
i = G__22074;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16795__auto__ = ret;
if(cljs.core.truth_(or__16795__auto__)){
return or__16795__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16783__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16783__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16783__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17860__auto__ = [];
var len__17853__auto___22080 = arguments.length;
var i__17854__auto___22081 = (0);
while(true){
if((i__17854__auto___22081 < len__17853__auto___22080)){
args__17860__auto__.push((arguments[i__17854__auto___22081]));

var G__22082 = (i__17854__auto___22081 + (1));
i__17854__auto___22081 = G__22082;
continue;
} else {
}
break;
}

var argseq__17861__auto__ = ((((1) < args__17860__auto__.length))?(new cljs.core.IndexedSeq(args__17860__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17861__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22077){
var map__22078 = p__22077;
var map__22078__$1 = ((((!((map__22078 == null)))?((((map__22078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22078):map__22078);
var opts = map__22078__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22075){
var G__22076 = cljs.core.first.call(null,seq22075);
var seq22075__$1 = cljs.core.next.call(null,seq22075);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22076,seq22075__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args22083 = [];
var len__17853__auto___22133 = arguments.length;
var i__17854__auto___22134 = (0);
while(true){
if((i__17854__auto___22134 < len__17853__auto___22133)){
args22083.push((arguments[i__17854__auto___22134]));

var G__22135 = (i__17854__auto___22134 + (1));
i__17854__auto___22134 = G__22135;
continue;
} else {
}
break;
}

var G__22085 = args22083.length;
switch (G__22085) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22083.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21970__auto___22137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21970__auto___22137){
return (function (){
var f__21971__auto__ = (function (){var switch__21858__auto__ = ((function (c__21970__auto___22137){
return (function (state_22109){
var state_val_22110 = (state_22109[(1)]);
if((state_val_22110 === (7))){
var inst_22105 = (state_22109[(2)]);
var state_22109__$1 = state_22109;
var statearr_22111_22138 = state_22109__$1;
(statearr_22111_22138[(2)] = inst_22105);

(statearr_22111_22138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22110 === (1))){
var state_22109__$1 = state_22109;
var statearr_22112_22139 = state_22109__$1;
(statearr_22112_22139[(2)] = null);

(statearr_22112_22139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22110 === (4))){
var inst_22088 = (state_22109[(7)]);
var inst_22088__$1 = (state_22109[(2)]);
var inst_22089 = (inst_22088__$1 == null);
var state_22109__$1 = (function (){var statearr_22113 = state_22109;
(statearr_22113[(7)] = inst_22088__$1);

return statearr_22113;
})();
if(cljs.core.truth_(inst_22089)){
var statearr_22114_22140 = state_22109__$1;
(statearr_22114_22140[(1)] = (5));

} else {
var statearr_22115_22141 = state_22109__$1;
(statearr_22115_22141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22110 === (13))){
var state_22109__$1 = state_22109;
var statearr_22116_22142 = state_22109__$1;
(statearr_22116_22142[(2)] = null);

(statearr_22116_22142[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22110 === (6))){
var inst_22088 = (state_22109[(7)]);
var state_22109__$1 = state_22109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22109__$1,(11),to,inst_22088);
} else {
if((state_val_22110 === (3))){
var inst_22107 = (state_22109[(2)]);
var state_22109__$1 = state_22109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22109__$1,inst_22107);
} else {
if((state_val_22110 === (12))){
var state_22109__$1 = state_22109;
var statearr_22117_22143 = state_22109__$1;
(statearr_22117_22143[(2)] = null);

(statearr_22117_22143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22110 === (2))){
var state_22109__$1 = state_22109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22109__$1,(4),from);
} else {
if((state_val_22110 === (11))){
var inst_22098 = (state_22109[(2)]);
var state_22109__$1 = state_22109;
if(cljs.core.truth_(inst_22098)){
var statearr_22118_22144 = state_22109__$1;
(statearr_22118_22144[(1)] = (12));

} else {
var statearr_22119_22145 = state_22109__$1;
(statearr_22119_22145[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22110 === (9))){
var state_22109__$1 = state_22109;
var statearr_22120_22146 = state_22109__$1;
(statearr_22120_22146[(2)] = null);

(statearr_22120_22146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22110 === (5))){
var state_22109__$1 = state_22109;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22121_22147 = state_22109__$1;
(statearr_22121_22147[(1)] = (8));

} else {
var statearr_22122_22148 = state_22109__$1;
(statearr_22122_22148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22110 === (14))){
var inst_22103 = (state_22109[(2)]);
var state_22109__$1 = state_22109;
var statearr_22123_22149 = state_22109__$1;
(statearr_22123_22149[(2)] = inst_22103);

(statearr_22123_22149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22110 === (10))){
var inst_22095 = (state_22109[(2)]);
var state_22109__$1 = state_22109;
var statearr_22124_22150 = state_22109__$1;
(statearr_22124_22150[(2)] = inst_22095);

(statearr_22124_22150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22110 === (8))){
var inst_22092 = cljs.core.async.close_BANG_.call(null,to);
var state_22109__$1 = state_22109;
var statearr_22125_22151 = state_22109__$1;
(statearr_22125_22151[(2)] = inst_22092);

(statearr_22125_22151[(1)] = (10));


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
});})(c__21970__auto___22137))
;
return ((function (switch__21858__auto__,c__21970__auto___22137){
return (function() {
var cljs$core$async$state_machine__21859__auto__ = null;
var cljs$core$async$state_machine__21859__auto____0 = (function (){
var statearr_22129 = [null,null,null,null,null,null,null,null];
(statearr_22129[(0)] = cljs$core$async$state_machine__21859__auto__);

(statearr_22129[(1)] = (1));

return statearr_22129;
});
var cljs$core$async$state_machine__21859__auto____1 = (function (state_22109){
while(true){
var ret_value__21860__auto__ = (function (){try{while(true){
var result__21861__auto__ = switch__21858__auto__.call(null,state_22109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21861__auto__;
}
break;
}
}catch (e22130){if((e22130 instanceof Object)){
var ex__21862__auto__ = e22130;
var statearr_22131_22152 = state_22109;
(statearr_22131_22152[(5)] = ex__21862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22153 = state_22109;
state_22109 = G__22153;
continue;
} else {
return ret_value__21860__auto__;
}
break;
}
});
cljs$core$async$state_machine__21859__auto__ = function(state_22109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21859__auto____1.call(this,state_22109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21859__auto____0;
cljs$core$async$state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21859__auto____1;
return cljs$core$async$state_machine__21859__auto__;
})()
;})(switch__21858__auto__,c__21970__auto___22137))
})();
var state__21972__auto__ = (function (){var statearr_22132 = f__21971__auto__.call(null);
(statearr_22132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21970__auto___22137);

return statearr_22132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21972__auto__);
});})(c__21970__auto___22137))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__22337){
var vec__22338 = p__22337;
var v = cljs.core.nth.call(null,vec__22338,(0),null);
var p = cljs.core.nth.call(null,vec__22338,(1),null);
var job = vec__22338;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21970__auto___22520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21970__auto___22520,res,vec__22338,v,p,job,jobs,results){
return (function (){
var f__21971__auto__ = (function (){var switch__21858__auto__ = ((function (c__21970__auto___22520,res,vec__22338,v,p,job,jobs,results){
return (function (state_22343){
var state_val_22344 = (state_22343[(1)]);
if((state_val_22344 === (1))){
var state_22343__$1 = state_22343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22343__$1,(2),res,v);
} else {
if((state_val_22344 === (2))){
var inst_22340 = (state_22343[(2)]);
var inst_22341 = cljs.core.async.close_BANG_.call(null,res);
var state_22343__$1 = (function (){var statearr_22345 = state_22343;
(statearr_22345[(7)] = inst_22340);

return statearr_22345;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22343__$1,inst_22341);
} else {
return null;
}
}
});})(c__21970__auto___22520,res,vec__22338,v,p,job,jobs,results))
;
return ((function (switch__21858__auto__,c__21970__auto___22520,res,vec__22338,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21859__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21859__auto____0 = (function (){
var statearr_22349 = [null,null,null,null,null,null,null,null];
(statearr_22349[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21859__auto__);

(statearr_22349[(1)] = (1));

return statearr_22349;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21859__auto____1 = (function (state_22343){
while(true){
var ret_value__21860__auto__ = (function (){try{while(true){
var result__21861__auto__ = switch__21858__auto__.call(null,state_22343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21861__auto__;
}
break;
}
}catch (e22350){if((e22350 instanceof Object)){
var ex__21862__auto__ = e22350;
var statearr_22351_22521 = state_22343;
(statearr_22351_22521[(5)] = ex__21862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22522 = state_22343;
state_22343 = G__22522;
continue;
} else {
return ret_value__21860__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21859__auto__ = function(state_22343){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21859__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21859__auto____1.call(this,state_22343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21859__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21859__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21859__auto__;
})()
;})(switch__21858__auto__,c__21970__auto___22520,res,vec__22338,v,p,job,jobs,results))
})();
var state__21972__auto__ = (function (){var statearr_22352 = f__21971__auto__.call(null);
(statearr_22352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21970__auto___22520);

return statearr_22352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21972__auto__);
});})(c__21970__auto___22520,res,vec__22338,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22353){
var vec__22354 = p__22353;
var v = cljs.core.nth.call(null,vec__22354,(0),null);
var p = cljs.core.nth.call(null,vec__22354,(1),null);
var job = vec__22354;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17698__auto___22523 = n;
var __22524 = (0);
while(true){
if((__22524 < n__17698__auto___22523)){
var G__22355_22525 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22355_22525) {
case "compute":
var c__21970__auto___22527 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22524,c__21970__auto___22527,G__22355_22525,n__17698__auto___22523,jobs,results,process,async){
return (function (){
var f__21971__auto__ = (function (){var switch__21858__auto__ = ((function (__22524,c__21970__auto___22527,G__22355_22525,n__17698__auto___22523,jobs,results,process,async){
return (function (state_22368){
var state_val_22369 = (state_22368[(1)]);
if((state_val_22369 === (1))){
var state_22368__$1 = state_22368;
var statearr_22370_22528 = state_22368__$1;
(statearr_22370_22528[(2)] = null);

(statearr_22370_22528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22369 === (2))){
var state_22368__$1 = state_22368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22368__$1,(4),jobs);
} else {
if((state_val_22369 === (3))){
var inst_22366 = (state_22368[(2)]);
var state_22368__$1 = state_22368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22368__$1,inst_22366);
} else {
if((state_val_22369 === (4))){
var inst_22358 = (state_22368[(2)]);
var inst_22359 = process.call(null,inst_22358);
var state_22368__$1 = state_22368;
if(cljs.core.truth_(inst_22359)){
var statearr_22371_22529 = state_22368__$1;
(statearr_22371_22529[(1)] = (5));

} else {
var statearr_22372_22530 = state_22368__$1;
(statearr_22372_22530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22369 === (5))){
var state_22368__$1 = state_22368;
var statearr_22373_22531 = state_22368__$1;
(statearr_22373_22531[(2)] = null);

(statearr_22373_22531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22369 === (6))){
var state_22368__$1 = state_22368;
var statearr_22374_22532 = state_22368__$1;
(statearr_22374_22532[(2)] = null);

(statearr_22374_22532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22369 === (7))){
var inst_22364 = (state_22368[(2)]);
var state_22368__$1 = state_22368;
var statearr_22375_22533 = state_22368__$1;
(statearr_22375_22533[(2)] = inst_22364);

(statearr_22375_22533[(1)] = (3));


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
});})(__22524,c__21970__auto___22527,G__22355_22525,n__17698__auto___22523,jobs,results,process,async))
;
return ((function (__22524,switch__21858__auto__,c__21970__auto___22527,G__22355_22525,n__17698__auto___22523,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21859__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21859__auto____0 = (function (){
var statearr_22379 = [null,null,null,null,null,null,null];
(statearr_22379[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21859__auto__);

(statearr_22379[(1)] = (1));

return statearr_22379;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21859__auto____1 = (function (state_22368){
while(true){
var ret_value__21860__auto__ = (function (){try{while(true){
var result__21861__auto__ = switch__21858__auto__.call(null,state_22368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21861__auto__;
}
break;
}
}catch (e22380){if((e22380 instanceof Object)){
var ex__21862__auto__ = e22380;
var statearr_22381_22534 = state_22368;
(statearr_22381_22534[(5)] = ex__21862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22535 = state_22368;
state_22368 = G__22535;
continue;
} else {
return ret_value__21860__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21859__auto__ = function(state_22368){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21859__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21859__auto____1.call(this,state_22368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21859__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21859__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21859__auto__;
})()
;})(__22524,switch__21858__auto__,c__21970__auto___22527,G__22355_22525,n__17698__auto___22523,jobs,results,process,async))
})();
var state__21972__auto__ = (function (){var statearr_22382 = f__21971__auto__.call(null);
(statearr_22382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21970__auto___22527);

return statearr_22382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21972__auto__);
});})(__22524,c__21970__auto___22527,G__22355_22525,n__17698__auto___22523,jobs,results,process,async))
);


break;
case "async":
var c__21970__auto___22536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22524,c__21970__auto___22536,G__22355_22525,n__17698__auto___22523,jobs,results,process,async){
return (function (){
var f__21971__auto__ = (function (){var switch__21858__auto__ = ((function (__22524,c__21970__auto___22536,G__22355_22525,n__17698__auto___22523,jobs,results,process,async){
return (function (state_22395){
var state_val_22396 = (state_22395[(1)]);
if((state_val_22396 === (1))){
var state_22395__$1 = state_22395;
var statearr_22397_22537 = state_22395__$1;
(statearr_22397_22537[(2)] = null);

(statearr_22397_22537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22396 === (2))){
var state_22395__$1 = state_22395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22395__$1,(4),jobs);
} else {
if((state_val_22396 === (3))){
var inst_22393 = (state_22395[(2)]);
var state_22395__$1 = state_22395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22395__$1,inst_22393);
} else {
if((state_val_22396 === (4))){
var inst_22385 = (state_22395[(2)]);
var inst_22386 = async.call(null,inst_22385);
var state_22395__$1 = state_22395;
if(cljs.core.truth_(inst_22386)){
var statearr_22398_22538 = state_22395__$1;
(statearr_22398_22538[(1)] = (5));

} else {
var statearr_22399_22539 = state_22395__$1;
(statearr_22399_22539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22396 === (5))){
var state_22395__$1 = state_22395;
var statearr_22400_22540 = state_22395__$1;
(statearr_22400_22540[(2)] = null);

(statearr_22400_22540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22396 === (6))){
var state_22395__$1 = state_22395;
var statearr_22401_22541 = state_22395__$1;
(statearr_22401_22541[(2)] = null);

(statearr_22401_22541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22396 === (7))){
var inst_22391 = (state_22395[(2)]);
var state_22395__$1 = state_22395;
var statearr_22402_22542 = state_22395__$1;
(statearr_22402_22542[(2)] = inst_22391);

(statearr_22402_22542[(1)] = (3));


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
});})(__22524,c__21970__auto___22536,G__22355_22525,n__17698__auto___22523,jobs,results,process,async))
;
return ((function (__22524,switch__21858__auto__,c__21970__auto___22536,G__22355_22525,n__17698__auto___22523,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21859__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21859__auto____0 = (function (){
var statearr_22406 = [null,null,null,null,null,null,null];
(statearr_22406[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21859__auto__);

(statearr_22406[(1)] = (1));

return statearr_22406;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21859__auto____1 = (function (state_22395){
while(true){
var ret_value__21860__auto__ = (function (){try{while(true){
var result__21861__auto__ = switch__21858__auto__.call(null,state_22395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21861__auto__;
}
break;
}
}catch (e22407){if((e22407 instanceof Object)){
var ex__21862__auto__ = e22407;
var statearr_22408_22543 = state_22395;
(statearr_22408_22543[(5)] = ex__21862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22544 = state_22395;
state_22395 = G__22544;
continue;
} else {
return ret_value__21860__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21859__auto__ = function(state_22395){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21859__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21859__auto____1.call(this,state_22395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21859__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21859__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21859__auto__;
})()
;})(__22524,switch__21858__auto__,c__21970__auto___22536,G__22355_22525,n__17698__auto___22523,jobs,results,process,async))
})();
var state__21972__auto__ = (function (){var statearr_22409 = f__21971__auto__.call(null);
(statearr_22409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21970__auto___22536);

return statearr_22409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21972__auto__);
});})(__22524,c__21970__auto___22536,G__22355_22525,n__17698__auto___22523,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22545 = (__22524 + (1));
__22524 = G__22545;
continue;
} else {
}
break;
}

var c__21970__auto___22546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21970__auto___22546,jobs,results,process,async){
return (function (){
var f__21971__auto__ = (function (){var switch__21858__auto__ = ((function (c__21970__auto___22546,jobs,results,process,async){
return (function (state_22431){
var state_val_22432 = (state_22431[(1)]);
if((state_val_22432 === (1))){
var state_22431__$1 = state_22431;
var statearr_22433_22547 = state_22431__$1;
(statearr_22433_22547[(2)] = null);

(statearr_22433_22547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (2))){
var state_22431__$1 = state_22431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22431__$1,(4),from);
} else {
if((state_val_22432 === (3))){
var inst_22429 = (state_22431[(2)]);
var state_22431__$1 = state_22431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22431__$1,inst_22429);
} else {
if((state_val_22432 === (4))){
var inst_22412 = (state_22431[(7)]);
var inst_22412__$1 = (state_22431[(2)]);
var inst_22413 = (inst_22412__$1 == null);
var state_22431__$1 = (function (){var statearr_22434 = state_22431;
(statearr_22434[(7)] = inst_22412__$1);

return statearr_22434;
})();
if(cljs.core.truth_(inst_22413)){
var statearr_22435_22548 = state_22431__$1;
(statearr_22435_22548[(1)] = (5));

} else {
var statearr_22436_22549 = state_22431__$1;
(statearr_22436_22549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (5))){
var inst_22415 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22431__$1 = state_22431;
var statearr_22437_22550 = state_22431__$1;
(statearr_22437_22550[(2)] = inst_22415);

(statearr_22437_22550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (6))){
var inst_22412 = (state_22431[(7)]);
var inst_22417 = (state_22431[(8)]);
var inst_22417__$1 = cljs.core.async.chan.call(null,(1));
var inst_22418 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22419 = [inst_22412,inst_22417__$1];
var inst_22420 = (new cljs.core.PersistentVector(null,2,(5),inst_22418,inst_22419,null));
var state_22431__$1 = (function (){var statearr_22438 = state_22431;
(statearr_22438[(8)] = inst_22417__$1);

return statearr_22438;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22431__$1,(8),jobs,inst_22420);
} else {
if((state_val_22432 === (7))){
var inst_22427 = (state_22431[(2)]);
var state_22431__$1 = state_22431;
var statearr_22439_22551 = state_22431__$1;
(statearr_22439_22551[(2)] = inst_22427);

(statearr_22439_22551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22432 === (8))){
var inst_22417 = (state_22431[(8)]);
var inst_22422 = (state_22431[(2)]);
var state_22431__$1 = (function (){var statearr_22440 = state_22431;
(statearr_22440[(9)] = inst_22422);

return statearr_22440;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22431__$1,(9),results,inst_22417);
} else {
if((state_val_22432 === (9))){
var inst_22424 = (state_22431[(2)]);
var state_22431__$1 = (function (){var statearr_22441 = state_22431;
(statearr_22441[(10)] = inst_22424);

return statearr_22441;
})();
var statearr_22442_22552 = state_22431__$1;
(statearr_22442_22552[(2)] = null);

(statearr_22442_22552[(1)] = (2));


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
});})(c__21970__auto___22546,jobs,results,process,async))
;
return ((function (switch__21858__auto__,c__21970__auto___22546,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21859__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21859__auto____0 = (function (){
var statearr_22446 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22446[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21859__auto__);

(statearr_22446[(1)] = (1));

return statearr_22446;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21859__auto____1 = (function (state_22431){
while(true){
var ret_value__21860__auto__ = (function (){try{while(true){
var result__21861__auto__ = switch__21858__auto__.call(null,state_22431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21861__auto__;
}
break;
}
}catch (e22447){if((e22447 instanceof Object)){
var ex__21862__auto__ = e22447;
var statearr_22448_22553 = state_22431;
(statearr_22448_22553[(5)] = ex__21862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22554 = state_22431;
state_22431 = G__22554;
continue;
} else {
return ret_value__21860__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21859__auto__ = function(state_22431){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21859__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21859__auto____1.call(this,state_22431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21859__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21859__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21859__auto__;
})()
;})(switch__21858__auto__,c__21970__auto___22546,jobs,results,process,async))
})();
var state__21972__auto__ = (function (){var statearr_22449 = f__21971__auto__.call(null);
(statearr_22449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21970__auto___22546);

return statearr_22449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21972__auto__);
});})(c__21970__auto___22546,jobs,results,process,async))
);


var c__21970__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21970__auto__,jobs,results,process,async){
return (function (){
var f__21971__auto__ = (function (){var switch__21858__auto__ = ((function (c__21970__auto__,jobs,results,process,async){
return (function (state_22487){
var state_val_22488 = (state_22487[(1)]);
if((state_val_22488 === (7))){
var inst_22483 = (state_22487[(2)]);
var state_22487__$1 = state_22487;
var statearr_22489_22555 = state_22487__$1;
(statearr_22489_22555[(2)] = inst_22483);

(statearr_22489_22555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (20))){
var state_22487__$1 = state_22487;
var statearr_22490_22556 = state_22487__$1;
(statearr_22490_22556[(2)] = null);

(statearr_22490_22556[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (1))){
var state_22487__$1 = state_22487;
var statearr_22491_22557 = state_22487__$1;
(statearr_22491_22557[(2)] = null);

(statearr_22491_22557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (4))){
var inst_22452 = (state_22487[(7)]);
var inst_22452__$1 = (state_22487[(2)]);
var inst_22453 = (inst_22452__$1 == null);
var state_22487__$1 = (function (){var statearr_22492 = state_22487;
(statearr_22492[(7)] = inst_22452__$1);

return statearr_22492;
})();
if(cljs.core.truth_(inst_22453)){
var statearr_22493_22558 = state_22487__$1;
(statearr_22493_22558[(1)] = (5));

} else {
var statearr_22494_22559 = state_22487__$1;
(statearr_22494_22559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (15))){
var inst_22465 = (state_22487[(8)]);
var state_22487__$1 = state_22487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22487__$1,(18),to,inst_22465);
} else {
if((state_val_22488 === (21))){
var inst_22478 = (state_22487[(2)]);
var state_22487__$1 = state_22487;
var statearr_22495_22560 = state_22487__$1;
(statearr_22495_22560[(2)] = inst_22478);

(statearr_22495_22560[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (13))){
var inst_22480 = (state_22487[(2)]);
var state_22487__$1 = (function (){var statearr_22496 = state_22487;
(statearr_22496[(9)] = inst_22480);

return statearr_22496;
})();
var statearr_22497_22561 = state_22487__$1;
(statearr_22497_22561[(2)] = null);

(statearr_22497_22561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (6))){
var inst_22452 = (state_22487[(7)]);
var state_22487__$1 = state_22487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22487__$1,(11),inst_22452);
} else {
if((state_val_22488 === (17))){
var inst_22473 = (state_22487[(2)]);
var state_22487__$1 = state_22487;
if(cljs.core.truth_(inst_22473)){
var statearr_22498_22562 = state_22487__$1;
(statearr_22498_22562[(1)] = (19));

} else {
var statearr_22499_22563 = state_22487__$1;
(statearr_22499_22563[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (3))){
var inst_22485 = (state_22487[(2)]);
var state_22487__$1 = state_22487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22487__$1,inst_22485);
} else {
if((state_val_22488 === (12))){
var inst_22462 = (state_22487[(10)]);
var state_22487__$1 = state_22487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22487__$1,(14),inst_22462);
} else {
if((state_val_22488 === (2))){
var state_22487__$1 = state_22487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22487__$1,(4),results);
} else {
if((state_val_22488 === (19))){
var state_22487__$1 = state_22487;
var statearr_22500_22564 = state_22487__$1;
(statearr_22500_22564[(2)] = null);

(statearr_22500_22564[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (11))){
var inst_22462 = (state_22487[(2)]);
var state_22487__$1 = (function (){var statearr_22501 = state_22487;
(statearr_22501[(10)] = inst_22462);

return statearr_22501;
})();
var statearr_22502_22565 = state_22487__$1;
(statearr_22502_22565[(2)] = null);

(statearr_22502_22565[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (9))){
var state_22487__$1 = state_22487;
var statearr_22503_22566 = state_22487__$1;
(statearr_22503_22566[(2)] = null);

(statearr_22503_22566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (5))){
var state_22487__$1 = state_22487;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22504_22567 = state_22487__$1;
(statearr_22504_22567[(1)] = (8));

} else {
var statearr_22505_22568 = state_22487__$1;
(statearr_22505_22568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (14))){
var inst_22465 = (state_22487[(8)]);
var inst_22467 = (state_22487[(11)]);
var inst_22465__$1 = (state_22487[(2)]);
var inst_22466 = (inst_22465__$1 == null);
var inst_22467__$1 = cljs.core.not.call(null,inst_22466);
var state_22487__$1 = (function (){var statearr_22506 = state_22487;
(statearr_22506[(8)] = inst_22465__$1);

(statearr_22506[(11)] = inst_22467__$1);

return statearr_22506;
})();
if(inst_22467__$1){
var statearr_22507_22569 = state_22487__$1;
(statearr_22507_22569[(1)] = (15));

} else {
var statearr_22508_22570 = state_22487__$1;
(statearr_22508_22570[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (16))){
var inst_22467 = (state_22487[(11)]);
var state_22487__$1 = state_22487;
var statearr_22509_22571 = state_22487__$1;
(statearr_22509_22571[(2)] = inst_22467);

(statearr_22509_22571[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (10))){
var inst_22459 = (state_22487[(2)]);
var state_22487__$1 = state_22487;
var statearr_22510_22572 = state_22487__$1;
(statearr_22510_22572[(2)] = inst_22459);

(statearr_22510_22572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (18))){
var inst_22470 = (state_22487[(2)]);
var state_22487__$1 = state_22487;
var statearr_22511_22573 = state_22487__$1;
(statearr_22511_22573[(2)] = inst_22470);

(statearr_22511_22573[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (8))){
var inst_22456 = cljs.core.async.close_BANG_.call(null,to);
var state_22487__$1 = state_22487;
var statearr_22512_22574 = state_22487__$1;
(statearr_22512_22574[(2)] = inst_22456);

(statearr_22512_22574[(1)] = (10));


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
});})(c__21970__auto__,jobs,results,process,async))
;
return ((function (switch__21858__auto__,c__21970__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21859__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21859__auto____0 = (function (){
var statearr_22516 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22516[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21859__auto__);

(statearr_22516[(1)] = (1));

return statearr_22516;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21859__auto____1 = (function (state_22487){
while(true){
var ret_value__21860__auto__ = (function (){try{while(true){
var result__21861__auto__ = switch__21858__auto__.call(null,state_22487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21861__auto__;
}
break;
}
}catch (e22517){if((e22517 instanceof Object)){
var ex__21862__auto__ = e22517;
var statearr_22518_22575 = state_22487;
(statearr_22518_22575[(5)] = ex__21862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22576 = state_22487;
state_22487 = G__22576;
continue;
} else {
return ret_value__21860__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21859__auto__ = function(state_22487){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21859__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21859__auto____1.call(this,state_22487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21859__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21859__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21859__auto__;
})()
;})(switch__21858__auto__,c__21970__auto__,jobs,results,process,async))
})();
var state__21972__auto__ = (function (){var statearr_22519 = f__21971__auto__.call(null);
(statearr_22519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21970__auto__);

return statearr_22519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21972__auto__);
});})(c__21970__auto__,jobs,results,process,async))
);

return c__21970__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args22577 = [];
var len__17853__auto___22580 = arguments.length;
var i__17854__auto___22581 = (0);
while(true){
if((i__17854__auto___22581 < len__17853__auto___22580)){
args22577.push((arguments[i__17854__auto___22581]));

var G__22582 = (i__17854__auto___22581 + (1));
i__17854__auto___22581 = G__22582;
continue;
} else {
}
break;
}

var G__22579 = args22577.length;
switch (G__22579) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22577.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args22584 = [];
var len__17853__auto___22587 = arguments.length;
var i__17854__auto___22588 = (0);
while(true){
if((i__17854__auto___22588 < len__17853__auto___22587)){
args22584.push((arguments[i__17854__auto___22588]));

var G__22589 = (i__17854__auto___22588 + (1));
i__17854__auto___22588 = G__22589;
continue;
} else {
}
break;
}

var G__22586 = args22584.length;
switch (G__22586) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22584.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args22591 = [];
var len__17853__auto___22644 = arguments.length;
var i__17854__auto___22645 = (0);
while(true){
if((i__17854__auto___22645 < len__17853__auto___22644)){
args22591.push((arguments[i__17854__auto___22645]));

var G__22646 = (i__17854__auto___22645 + (1));
i__17854__auto___22645 = G__22646;
continue;
} else {
}
break;
}

var G__22593 = args22591.length;
switch (G__22593) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22591.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21970__auto___22648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21970__auto___22648,tc,fc){
return (function (){
var f__21971__auto__ = (function (){var switch__21858__auto__ = ((function (c__21970__auto___22648,tc,fc){
return (function (state_22619){
var state_val_22620 = (state_22619[(1)]);
if((state_val_22620 === (7))){
var inst_22615 = (state_22619[(2)]);
var state_22619__$1 = state_22619;
var statearr_22621_22649 = state_22619__$1;
(statearr_22621_22649[(2)] = inst_22615);

(statearr_22621_22649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (1))){
var state_22619__$1 = state_22619;
var statearr_22622_22650 = state_22619__$1;
(statearr_22622_22650[(2)] = null);

(statearr_22622_22650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (4))){
var inst_22596 = (state_22619[(7)]);
var inst_22596__$1 = (state_22619[(2)]);
var inst_22597 = (inst_22596__$1 == null);
var state_22619__$1 = (function (){var statearr_22623 = state_22619;
(statearr_22623[(7)] = inst_22596__$1);

return statearr_22623;
})();
if(cljs.core.truth_(inst_22597)){
var statearr_22624_22651 = state_22619__$1;
(statearr_22624_22651[(1)] = (5));

} else {
var statearr_22625_22652 = state_22619__$1;
(statearr_22625_22652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (13))){
var state_22619__$1 = state_22619;
var statearr_22626_22653 = state_22619__$1;
(statearr_22626_22653[(2)] = null);

(statearr_22626_22653[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (6))){
var inst_22596 = (state_22619[(7)]);
var inst_22602 = p.call(null,inst_22596);
var state_22619__$1 = state_22619;
if(cljs.core.truth_(inst_22602)){
var statearr_22627_22654 = state_22619__$1;
(statearr_22627_22654[(1)] = (9));

} else {
var statearr_22628_22655 = state_22619__$1;
(statearr_22628_22655[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (3))){
var inst_22617 = (state_22619[(2)]);
var state_22619__$1 = state_22619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22619__$1,inst_22617);
} else {
if((state_val_22620 === (12))){
var state_22619__$1 = state_22619;
var statearr_22629_22656 = state_22619__$1;
(statearr_22629_22656[(2)] = null);

(statearr_22629_22656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (2))){
var state_22619__$1 = state_22619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22619__$1,(4),ch);
} else {
if((state_val_22620 === (11))){
var inst_22596 = (state_22619[(7)]);
var inst_22606 = (state_22619[(2)]);
var state_22619__$1 = state_22619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22619__$1,(8),inst_22606,inst_22596);
} else {
if((state_val_22620 === (9))){
var state_22619__$1 = state_22619;
var statearr_22630_22657 = state_22619__$1;
(statearr_22630_22657[(2)] = tc);

(statearr_22630_22657[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (5))){
var inst_22599 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22600 = cljs.core.async.close_BANG_.call(null,fc);
var state_22619__$1 = (function (){var statearr_22631 = state_22619;
(statearr_22631[(8)] = inst_22599);

return statearr_22631;
})();
var statearr_22632_22658 = state_22619__$1;
(statearr_22632_22658[(2)] = inst_22600);

(statearr_22632_22658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (14))){
var inst_22613 = (state_22619[(2)]);
var state_22619__$1 = state_22619;
var statearr_22633_22659 = state_22619__$1;
(statearr_22633_22659[(2)] = inst_22613);

(statearr_22633_22659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (10))){
var state_22619__$1 = state_22619;
var statearr_22634_22660 = state_22619__$1;
(statearr_22634_22660[(2)] = fc);

(statearr_22634_22660[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22620 === (8))){
var inst_22608 = (state_22619[(2)]);
var state_22619__$1 = state_22619;
if(cljs.core.truth_(inst_22608)){
var statearr_22635_22661 = state_22619__$1;
(statearr_22635_22661[(1)] = (12));

} else {
var statearr_22636_22662 = state_22619__$1;
(statearr_22636_22662[(1)] = (13));

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
});})(c__21970__auto___22648,tc,fc))
;
return ((function (switch__21858__auto__,c__21970__auto___22648,tc,fc){
return (function() {
var cljs$core$async$state_machine__21859__auto__ = null;
var cljs$core$async$state_machine__21859__auto____0 = (function (){
var statearr_22640 = [null,null,null,null,null,null,null,null,null];
(statearr_22640[(0)] = cljs$core$async$state_machine__21859__auto__);

(statearr_22640[(1)] = (1));

return statearr_22640;
});
var cljs$core$async$state_machine__21859__auto____1 = (function (state_22619){
while(true){
var ret_value__21860__auto__ = (function (){try{while(true){
var result__21861__auto__ = switch__21858__auto__.call(null,state_22619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21861__auto__;
}
break;
}
}catch (e22641){if((e22641 instanceof Object)){
var ex__21862__auto__ = e22641;
var statearr_22642_22663 = state_22619;
(statearr_22642_22663[(5)] = ex__21862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22664 = state_22619;
state_22619 = G__22664;
continue;
} else {
return ret_value__21860__auto__;
}
break;
}
});
cljs$core$async$state_machine__21859__auto__ = function(state_22619){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21859__auto____1.call(this,state_22619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21859__auto____0;
cljs$core$async$state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21859__auto____1;
return cljs$core$async$state_machine__21859__auto__;
})()
;})(switch__21858__auto__,c__21970__auto___22648,tc,fc))
})();
var state__21972__auto__ = (function (){var statearr_22643 = f__21971__auto__.call(null);
(statearr_22643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21970__auto___22648);

return statearr_22643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21972__auto__);
});})(c__21970__auto___22648,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21970__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21970__auto__){
return (function (){
var f__21971__auto__ = (function (){var switch__21858__auto__ = ((function (c__21970__auto__){
return (function (state_22728){
var state_val_22729 = (state_22728[(1)]);
if((state_val_22729 === (7))){
var inst_22724 = (state_22728[(2)]);
var state_22728__$1 = state_22728;
var statearr_22730_22751 = state_22728__$1;
(statearr_22730_22751[(2)] = inst_22724);

(statearr_22730_22751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22729 === (1))){
var inst_22708 = init;
var state_22728__$1 = (function (){var statearr_22731 = state_22728;
(statearr_22731[(7)] = inst_22708);

return statearr_22731;
})();
var statearr_22732_22752 = state_22728__$1;
(statearr_22732_22752[(2)] = null);

(statearr_22732_22752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22729 === (4))){
var inst_22711 = (state_22728[(8)]);
var inst_22711__$1 = (state_22728[(2)]);
var inst_22712 = (inst_22711__$1 == null);
var state_22728__$1 = (function (){var statearr_22733 = state_22728;
(statearr_22733[(8)] = inst_22711__$1);

return statearr_22733;
})();
if(cljs.core.truth_(inst_22712)){
var statearr_22734_22753 = state_22728__$1;
(statearr_22734_22753[(1)] = (5));

} else {
var statearr_22735_22754 = state_22728__$1;
(statearr_22735_22754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22729 === (6))){
var inst_22711 = (state_22728[(8)]);
var inst_22708 = (state_22728[(7)]);
var inst_22715 = (state_22728[(9)]);
var inst_22715__$1 = f.call(null,inst_22708,inst_22711);
var inst_22716 = cljs.core.reduced_QMARK_.call(null,inst_22715__$1);
var state_22728__$1 = (function (){var statearr_22736 = state_22728;
(statearr_22736[(9)] = inst_22715__$1);

return statearr_22736;
})();
if(inst_22716){
var statearr_22737_22755 = state_22728__$1;
(statearr_22737_22755[(1)] = (8));

} else {
var statearr_22738_22756 = state_22728__$1;
(statearr_22738_22756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22729 === (3))){
var inst_22726 = (state_22728[(2)]);
var state_22728__$1 = state_22728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22728__$1,inst_22726);
} else {
if((state_val_22729 === (2))){
var state_22728__$1 = state_22728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22728__$1,(4),ch);
} else {
if((state_val_22729 === (9))){
var inst_22715 = (state_22728[(9)]);
var inst_22708 = inst_22715;
var state_22728__$1 = (function (){var statearr_22739 = state_22728;
(statearr_22739[(7)] = inst_22708);

return statearr_22739;
})();
var statearr_22740_22757 = state_22728__$1;
(statearr_22740_22757[(2)] = null);

(statearr_22740_22757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22729 === (5))){
var inst_22708 = (state_22728[(7)]);
var state_22728__$1 = state_22728;
var statearr_22741_22758 = state_22728__$1;
(statearr_22741_22758[(2)] = inst_22708);

(statearr_22741_22758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22729 === (10))){
var inst_22722 = (state_22728[(2)]);
var state_22728__$1 = state_22728;
var statearr_22742_22759 = state_22728__$1;
(statearr_22742_22759[(2)] = inst_22722);

(statearr_22742_22759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22729 === (8))){
var inst_22715 = (state_22728[(9)]);
var inst_22718 = cljs.core.deref.call(null,inst_22715);
var state_22728__$1 = state_22728;
var statearr_22743_22760 = state_22728__$1;
(statearr_22743_22760[(2)] = inst_22718);

(statearr_22743_22760[(1)] = (10));


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
});})(c__21970__auto__))
;
return ((function (switch__21858__auto__,c__21970__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21859__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21859__auto____0 = (function (){
var statearr_22747 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22747[(0)] = cljs$core$async$reduce_$_state_machine__21859__auto__);

(statearr_22747[(1)] = (1));

return statearr_22747;
});
var cljs$core$async$reduce_$_state_machine__21859__auto____1 = (function (state_22728){
while(true){
var ret_value__21860__auto__ = (function (){try{while(true){
var result__21861__auto__ = switch__21858__auto__.call(null,state_22728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21861__auto__;
}
break;
}
}catch (e22748){if((e22748 instanceof Object)){
var ex__21862__auto__ = e22748;
var statearr_22749_22761 = state_22728;
(statearr_22749_22761[(5)] = ex__21862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22762 = state_22728;
state_22728 = G__22762;
continue;
} else {
return ret_value__21860__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21859__auto__ = function(state_22728){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21859__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21859__auto____1.call(this,state_22728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21859__auto____0;
cljs$core$async$reduce_$_state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21859__auto____1;
return cljs$core$async$reduce_$_state_machine__21859__auto__;
})()
;})(switch__21858__auto__,c__21970__auto__))
})();
var state__21972__auto__ = (function (){var statearr_22750 = f__21971__auto__.call(null);
(statearr_22750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21970__auto__);

return statearr_22750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21972__auto__);
});})(c__21970__auto__))
);

return c__21970__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args22763 = [];
var len__17853__auto___22815 = arguments.length;
var i__17854__auto___22816 = (0);
while(true){
if((i__17854__auto___22816 < len__17853__auto___22815)){
args22763.push((arguments[i__17854__auto___22816]));

var G__22817 = (i__17854__auto___22816 + (1));
i__17854__auto___22816 = G__22817;
continue;
} else {
}
break;
}

var G__22765 = args22763.length;
switch (G__22765) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22763.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21970__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21970__auto__){
return (function (){
var f__21971__auto__ = (function (){var switch__21858__auto__ = ((function (c__21970__auto__){
return (function (state_22790){
var state_val_22791 = (state_22790[(1)]);
if((state_val_22791 === (7))){
var inst_22772 = (state_22790[(2)]);
var state_22790__$1 = state_22790;
var statearr_22792_22819 = state_22790__$1;
(statearr_22792_22819[(2)] = inst_22772);

(statearr_22792_22819[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (1))){
var inst_22766 = cljs.core.seq.call(null,coll);
var inst_22767 = inst_22766;
var state_22790__$1 = (function (){var statearr_22793 = state_22790;
(statearr_22793[(7)] = inst_22767);

return statearr_22793;
})();
var statearr_22794_22820 = state_22790__$1;
(statearr_22794_22820[(2)] = null);

(statearr_22794_22820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (4))){
var inst_22767 = (state_22790[(7)]);
var inst_22770 = cljs.core.first.call(null,inst_22767);
var state_22790__$1 = state_22790;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22790__$1,(7),ch,inst_22770);
} else {
if((state_val_22791 === (13))){
var inst_22784 = (state_22790[(2)]);
var state_22790__$1 = state_22790;
var statearr_22795_22821 = state_22790__$1;
(statearr_22795_22821[(2)] = inst_22784);

(statearr_22795_22821[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (6))){
var inst_22775 = (state_22790[(2)]);
var state_22790__$1 = state_22790;
if(cljs.core.truth_(inst_22775)){
var statearr_22796_22822 = state_22790__$1;
(statearr_22796_22822[(1)] = (8));

} else {
var statearr_22797_22823 = state_22790__$1;
(statearr_22797_22823[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (3))){
var inst_22788 = (state_22790[(2)]);
var state_22790__$1 = state_22790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22790__$1,inst_22788);
} else {
if((state_val_22791 === (12))){
var state_22790__$1 = state_22790;
var statearr_22798_22824 = state_22790__$1;
(statearr_22798_22824[(2)] = null);

(statearr_22798_22824[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (2))){
var inst_22767 = (state_22790[(7)]);
var state_22790__$1 = state_22790;
if(cljs.core.truth_(inst_22767)){
var statearr_22799_22825 = state_22790__$1;
(statearr_22799_22825[(1)] = (4));

} else {
var statearr_22800_22826 = state_22790__$1;
(statearr_22800_22826[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (11))){
var inst_22781 = cljs.core.async.close_BANG_.call(null,ch);
var state_22790__$1 = state_22790;
var statearr_22801_22827 = state_22790__$1;
(statearr_22801_22827[(2)] = inst_22781);

(statearr_22801_22827[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (9))){
var state_22790__$1 = state_22790;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22802_22828 = state_22790__$1;
(statearr_22802_22828[(1)] = (11));

} else {
var statearr_22803_22829 = state_22790__$1;
(statearr_22803_22829[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (5))){
var inst_22767 = (state_22790[(7)]);
var state_22790__$1 = state_22790;
var statearr_22804_22830 = state_22790__$1;
(statearr_22804_22830[(2)] = inst_22767);

(statearr_22804_22830[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (10))){
var inst_22786 = (state_22790[(2)]);
var state_22790__$1 = state_22790;
var statearr_22805_22831 = state_22790__$1;
(statearr_22805_22831[(2)] = inst_22786);

(statearr_22805_22831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22791 === (8))){
var inst_22767 = (state_22790[(7)]);
var inst_22777 = cljs.core.next.call(null,inst_22767);
var inst_22767__$1 = inst_22777;
var state_22790__$1 = (function (){var statearr_22806 = state_22790;
(statearr_22806[(7)] = inst_22767__$1);

return statearr_22806;
})();
var statearr_22807_22832 = state_22790__$1;
(statearr_22807_22832[(2)] = null);

(statearr_22807_22832[(1)] = (2));


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
});})(c__21970__auto__))
;
return ((function (switch__21858__auto__,c__21970__auto__){
return (function() {
var cljs$core$async$state_machine__21859__auto__ = null;
var cljs$core$async$state_machine__21859__auto____0 = (function (){
var statearr_22811 = [null,null,null,null,null,null,null,null];
(statearr_22811[(0)] = cljs$core$async$state_machine__21859__auto__);

(statearr_22811[(1)] = (1));

return statearr_22811;
});
var cljs$core$async$state_machine__21859__auto____1 = (function (state_22790){
while(true){
var ret_value__21860__auto__ = (function (){try{while(true){
var result__21861__auto__ = switch__21858__auto__.call(null,state_22790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21861__auto__;
}
break;
}
}catch (e22812){if((e22812 instanceof Object)){
var ex__21862__auto__ = e22812;
var statearr_22813_22833 = state_22790;
(statearr_22813_22833[(5)] = ex__21862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22834 = state_22790;
state_22790 = G__22834;
continue;
} else {
return ret_value__21860__auto__;
}
break;
}
});
cljs$core$async$state_machine__21859__auto__ = function(state_22790){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21859__auto____1.call(this,state_22790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21859__auto____0;
cljs$core$async$state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21859__auto____1;
return cljs$core$async$state_machine__21859__auto__;
})()
;})(switch__21858__auto__,c__21970__auto__))
})();
var state__21972__auto__ = (function (){var statearr_22814 = f__21971__auto__.call(null);
(statearr_22814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21970__auto__);

return statearr_22814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21972__auto__);
});})(c__21970__auto__))
);

return c__21970__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17450__auto__ = (((_ == null))?null:_);
var m__17451__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17450__auto__)]);
if(!((m__17451__auto__ == null))){
return m__17451__auto__.call(null,_);
} else {
var m__17451__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17451__auto____$1 == null))){
return m__17451__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17450__auto__ = (((m == null))?null:m);
var m__17451__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17450__auto__)]);
if(!((m__17451__auto__ == null))){
return m__17451__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17451__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17451__auto____$1 == null))){
return m__17451__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17450__auto__ = (((m == null))?null:m);
var m__17451__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17450__auto__)]);
if(!((m__17451__auto__ == null))){
return m__17451__auto__.call(null,m,ch);
} else {
var m__17451__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17451__auto____$1 == null))){
return m__17451__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17450__auto__ = (((m == null))?null:m);
var m__17451__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17450__auto__)]);
if(!((m__17451__auto__ == null))){
return m__17451__auto__.call(null,m);
} else {
var m__17451__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17451__auto____$1 == null))){
return m__17451__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23056 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23056 = (function (mult,ch,cs,meta23057){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23057 = meta23057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23058,meta23057__$1){
var self__ = this;
var _23058__$1 = this;
return (new cljs.core.async.t_cljs$core$async23056(self__.mult,self__.ch,self__.cs,meta23057__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23056.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23058){
var self__ = this;
var _23058__$1 = this;
return self__.meta23057;
});})(cs))
;

cljs.core.async.t_cljs$core$async23056.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23056.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23056.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23056.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23056.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23056.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23056.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23057","meta23057",-2105468354,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23056.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23056.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23056";

cljs.core.async.t_cljs$core$async23056.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17393__auto__,writer__17394__auto__,opt__17395__auto__){
return cljs.core._write.call(null,writer__17394__auto__,"cljs.core.async/t_cljs$core$async23056");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23056 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23056(mult__$1,ch__$1,cs__$1,meta23057){
return (new cljs.core.async.t_cljs$core$async23056(mult__$1,ch__$1,cs__$1,meta23057));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23056(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21970__auto___23277 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21970__auto___23277,cs,m,dchan,dctr,done){
return (function (){
var f__21971__auto__ = (function (){var switch__21858__auto__ = ((function (c__21970__auto___23277,cs,m,dchan,dctr,done){
return (function (state_23189){
var state_val_23190 = (state_23189[(1)]);
if((state_val_23190 === (7))){
var inst_23185 = (state_23189[(2)]);
var state_23189__$1 = state_23189;
var statearr_23191_23278 = state_23189__$1;
(statearr_23191_23278[(2)] = inst_23185);

(statearr_23191_23278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (20))){
var inst_23090 = (state_23189[(7)]);
var inst_23100 = cljs.core.first.call(null,inst_23090);
var inst_23101 = cljs.core.nth.call(null,inst_23100,(0),null);
var inst_23102 = cljs.core.nth.call(null,inst_23100,(1),null);
var state_23189__$1 = (function (){var statearr_23192 = state_23189;
(statearr_23192[(8)] = inst_23101);

return statearr_23192;
})();
if(cljs.core.truth_(inst_23102)){
var statearr_23193_23279 = state_23189__$1;
(statearr_23193_23279[(1)] = (22));

} else {
var statearr_23194_23280 = state_23189__$1;
(statearr_23194_23280[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (27))){
var inst_23130 = (state_23189[(9)]);
var inst_23137 = (state_23189[(10)]);
var inst_23061 = (state_23189[(11)]);
var inst_23132 = (state_23189[(12)]);
var inst_23137__$1 = cljs.core._nth.call(null,inst_23130,inst_23132);
var inst_23138 = cljs.core.async.put_BANG_.call(null,inst_23137__$1,inst_23061,done);
var state_23189__$1 = (function (){var statearr_23195 = state_23189;
(statearr_23195[(10)] = inst_23137__$1);

return statearr_23195;
})();
if(cljs.core.truth_(inst_23138)){
var statearr_23196_23281 = state_23189__$1;
(statearr_23196_23281[(1)] = (30));

} else {
var statearr_23197_23282 = state_23189__$1;
(statearr_23197_23282[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (1))){
var state_23189__$1 = state_23189;
var statearr_23198_23283 = state_23189__$1;
(statearr_23198_23283[(2)] = null);

(statearr_23198_23283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (24))){
var inst_23090 = (state_23189[(7)]);
var inst_23107 = (state_23189[(2)]);
var inst_23108 = cljs.core.next.call(null,inst_23090);
var inst_23070 = inst_23108;
var inst_23071 = null;
var inst_23072 = (0);
var inst_23073 = (0);
var state_23189__$1 = (function (){var statearr_23199 = state_23189;
(statearr_23199[(13)] = inst_23107);

(statearr_23199[(14)] = inst_23070);

(statearr_23199[(15)] = inst_23072);

(statearr_23199[(16)] = inst_23071);

(statearr_23199[(17)] = inst_23073);

return statearr_23199;
})();
var statearr_23200_23284 = state_23189__$1;
(statearr_23200_23284[(2)] = null);

(statearr_23200_23284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (39))){
var state_23189__$1 = state_23189;
var statearr_23204_23285 = state_23189__$1;
(statearr_23204_23285[(2)] = null);

(statearr_23204_23285[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (4))){
var inst_23061 = (state_23189[(11)]);
var inst_23061__$1 = (state_23189[(2)]);
var inst_23062 = (inst_23061__$1 == null);
var state_23189__$1 = (function (){var statearr_23205 = state_23189;
(statearr_23205[(11)] = inst_23061__$1);

return statearr_23205;
})();
if(cljs.core.truth_(inst_23062)){
var statearr_23206_23286 = state_23189__$1;
(statearr_23206_23286[(1)] = (5));

} else {
var statearr_23207_23287 = state_23189__$1;
(statearr_23207_23287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (15))){
var inst_23070 = (state_23189[(14)]);
var inst_23072 = (state_23189[(15)]);
var inst_23071 = (state_23189[(16)]);
var inst_23073 = (state_23189[(17)]);
var inst_23086 = (state_23189[(2)]);
var inst_23087 = (inst_23073 + (1));
var tmp23201 = inst_23070;
var tmp23202 = inst_23072;
var tmp23203 = inst_23071;
var inst_23070__$1 = tmp23201;
var inst_23071__$1 = tmp23203;
var inst_23072__$1 = tmp23202;
var inst_23073__$1 = inst_23087;
var state_23189__$1 = (function (){var statearr_23208 = state_23189;
(statearr_23208[(18)] = inst_23086);

(statearr_23208[(14)] = inst_23070__$1);

(statearr_23208[(15)] = inst_23072__$1);

(statearr_23208[(16)] = inst_23071__$1);

(statearr_23208[(17)] = inst_23073__$1);

return statearr_23208;
})();
var statearr_23209_23288 = state_23189__$1;
(statearr_23209_23288[(2)] = null);

(statearr_23209_23288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (21))){
var inst_23111 = (state_23189[(2)]);
var state_23189__$1 = state_23189;
var statearr_23213_23289 = state_23189__$1;
(statearr_23213_23289[(2)] = inst_23111);

(statearr_23213_23289[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (31))){
var inst_23137 = (state_23189[(10)]);
var inst_23141 = done.call(null,null);
var inst_23142 = cljs.core.async.untap_STAR_.call(null,m,inst_23137);
var state_23189__$1 = (function (){var statearr_23214 = state_23189;
(statearr_23214[(19)] = inst_23141);

return statearr_23214;
})();
var statearr_23215_23290 = state_23189__$1;
(statearr_23215_23290[(2)] = inst_23142);

(statearr_23215_23290[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (32))){
var inst_23130 = (state_23189[(9)]);
var inst_23131 = (state_23189[(20)]);
var inst_23132 = (state_23189[(12)]);
var inst_23129 = (state_23189[(21)]);
var inst_23144 = (state_23189[(2)]);
var inst_23145 = (inst_23132 + (1));
var tmp23210 = inst_23130;
var tmp23211 = inst_23131;
var tmp23212 = inst_23129;
var inst_23129__$1 = tmp23212;
var inst_23130__$1 = tmp23210;
var inst_23131__$1 = tmp23211;
var inst_23132__$1 = inst_23145;
var state_23189__$1 = (function (){var statearr_23216 = state_23189;
(statearr_23216[(22)] = inst_23144);

(statearr_23216[(9)] = inst_23130__$1);

(statearr_23216[(20)] = inst_23131__$1);

(statearr_23216[(12)] = inst_23132__$1);

(statearr_23216[(21)] = inst_23129__$1);

return statearr_23216;
})();
var statearr_23217_23291 = state_23189__$1;
(statearr_23217_23291[(2)] = null);

(statearr_23217_23291[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (40))){
var inst_23157 = (state_23189[(23)]);
var inst_23161 = done.call(null,null);
var inst_23162 = cljs.core.async.untap_STAR_.call(null,m,inst_23157);
var state_23189__$1 = (function (){var statearr_23218 = state_23189;
(statearr_23218[(24)] = inst_23161);

return statearr_23218;
})();
var statearr_23219_23292 = state_23189__$1;
(statearr_23219_23292[(2)] = inst_23162);

(statearr_23219_23292[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (33))){
var inst_23148 = (state_23189[(25)]);
var inst_23150 = cljs.core.chunked_seq_QMARK_.call(null,inst_23148);
var state_23189__$1 = state_23189;
if(inst_23150){
var statearr_23220_23293 = state_23189__$1;
(statearr_23220_23293[(1)] = (36));

} else {
var statearr_23221_23294 = state_23189__$1;
(statearr_23221_23294[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (13))){
var inst_23080 = (state_23189[(26)]);
var inst_23083 = cljs.core.async.close_BANG_.call(null,inst_23080);
var state_23189__$1 = state_23189;
var statearr_23222_23295 = state_23189__$1;
(statearr_23222_23295[(2)] = inst_23083);

(statearr_23222_23295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (22))){
var inst_23101 = (state_23189[(8)]);
var inst_23104 = cljs.core.async.close_BANG_.call(null,inst_23101);
var state_23189__$1 = state_23189;
var statearr_23223_23296 = state_23189__$1;
(statearr_23223_23296[(2)] = inst_23104);

(statearr_23223_23296[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (36))){
var inst_23148 = (state_23189[(25)]);
var inst_23152 = cljs.core.chunk_first.call(null,inst_23148);
var inst_23153 = cljs.core.chunk_rest.call(null,inst_23148);
var inst_23154 = cljs.core.count.call(null,inst_23152);
var inst_23129 = inst_23153;
var inst_23130 = inst_23152;
var inst_23131 = inst_23154;
var inst_23132 = (0);
var state_23189__$1 = (function (){var statearr_23224 = state_23189;
(statearr_23224[(9)] = inst_23130);

(statearr_23224[(20)] = inst_23131);

(statearr_23224[(12)] = inst_23132);

(statearr_23224[(21)] = inst_23129);

return statearr_23224;
})();
var statearr_23225_23297 = state_23189__$1;
(statearr_23225_23297[(2)] = null);

(statearr_23225_23297[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (41))){
var inst_23148 = (state_23189[(25)]);
var inst_23164 = (state_23189[(2)]);
var inst_23165 = cljs.core.next.call(null,inst_23148);
var inst_23129 = inst_23165;
var inst_23130 = null;
var inst_23131 = (0);
var inst_23132 = (0);
var state_23189__$1 = (function (){var statearr_23226 = state_23189;
(statearr_23226[(9)] = inst_23130);

(statearr_23226[(27)] = inst_23164);

(statearr_23226[(20)] = inst_23131);

(statearr_23226[(12)] = inst_23132);

(statearr_23226[(21)] = inst_23129);

return statearr_23226;
})();
var statearr_23227_23298 = state_23189__$1;
(statearr_23227_23298[(2)] = null);

(statearr_23227_23298[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (43))){
var state_23189__$1 = state_23189;
var statearr_23228_23299 = state_23189__$1;
(statearr_23228_23299[(2)] = null);

(statearr_23228_23299[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (29))){
var inst_23173 = (state_23189[(2)]);
var state_23189__$1 = state_23189;
var statearr_23229_23300 = state_23189__$1;
(statearr_23229_23300[(2)] = inst_23173);

(statearr_23229_23300[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (44))){
var inst_23182 = (state_23189[(2)]);
var state_23189__$1 = (function (){var statearr_23230 = state_23189;
(statearr_23230[(28)] = inst_23182);

return statearr_23230;
})();
var statearr_23231_23301 = state_23189__$1;
(statearr_23231_23301[(2)] = null);

(statearr_23231_23301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (6))){
var inst_23121 = (state_23189[(29)]);
var inst_23120 = cljs.core.deref.call(null,cs);
var inst_23121__$1 = cljs.core.keys.call(null,inst_23120);
var inst_23122 = cljs.core.count.call(null,inst_23121__$1);
var inst_23123 = cljs.core.reset_BANG_.call(null,dctr,inst_23122);
var inst_23128 = cljs.core.seq.call(null,inst_23121__$1);
var inst_23129 = inst_23128;
var inst_23130 = null;
var inst_23131 = (0);
var inst_23132 = (0);
var state_23189__$1 = (function (){var statearr_23232 = state_23189;
(statearr_23232[(9)] = inst_23130);

(statearr_23232[(29)] = inst_23121__$1);

(statearr_23232[(30)] = inst_23123);

(statearr_23232[(20)] = inst_23131);

(statearr_23232[(12)] = inst_23132);

(statearr_23232[(21)] = inst_23129);

return statearr_23232;
})();
var statearr_23233_23302 = state_23189__$1;
(statearr_23233_23302[(2)] = null);

(statearr_23233_23302[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (28))){
var inst_23148 = (state_23189[(25)]);
var inst_23129 = (state_23189[(21)]);
var inst_23148__$1 = cljs.core.seq.call(null,inst_23129);
var state_23189__$1 = (function (){var statearr_23234 = state_23189;
(statearr_23234[(25)] = inst_23148__$1);

return statearr_23234;
})();
if(inst_23148__$1){
var statearr_23235_23303 = state_23189__$1;
(statearr_23235_23303[(1)] = (33));

} else {
var statearr_23236_23304 = state_23189__$1;
(statearr_23236_23304[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (25))){
var inst_23131 = (state_23189[(20)]);
var inst_23132 = (state_23189[(12)]);
var inst_23134 = (inst_23132 < inst_23131);
var inst_23135 = inst_23134;
var state_23189__$1 = state_23189;
if(cljs.core.truth_(inst_23135)){
var statearr_23237_23305 = state_23189__$1;
(statearr_23237_23305[(1)] = (27));

} else {
var statearr_23238_23306 = state_23189__$1;
(statearr_23238_23306[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (34))){
var state_23189__$1 = state_23189;
var statearr_23239_23307 = state_23189__$1;
(statearr_23239_23307[(2)] = null);

(statearr_23239_23307[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (17))){
var state_23189__$1 = state_23189;
var statearr_23240_23308 = state_23189__$1;
(statearr_23240_23308[(2)] = null);

(statearr_23240_23308[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (3))){
var inst_23187 = (state_23189[(2)]);
var state_23189__$1 = state_23189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23189__$1,inst_23187);
} else {
if((state_val_23190 === (12))){
var inst_23116 = (state_23189[(2)]);
var state_23189__$1 = state_23189;
var statearr_23241_23309 = state_23189__$1;
(statearr_23241_23309[(2)] = inst_23116);

(statearr_23241_23309[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (2))){
var state_23189__$1 = state_23189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23189__$1,(4),ch);
} else {
if((state_val_23190 === (23))){
var state_23189__$1 = state_23189;
var statearr_23242_23310 = state_23189__$1;
(statearr_23242_23310[(2)] = null);

(statearr_23242_23310[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (35))){
var inst_23171 = (state_23189[(2)]);
var state_23189__$1 = state_23189;
var statearr_23243_23311 = state_23189__$1;
(statearr_23243_23311[(2)] = inst_23171);

(statearr_23243_23311[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (19))){
var inst_23090 = (state_23189[(7)]);
var inst_23094 = cljs.core.chunk_first.call(null,inst_23090);
var inst_23095 = cljs.core.chunk_rest.call(null,inst_23090);
var inst_23096 = cljs.core.count.call(null,inst_23094);
var inst_23070 = inst_23095;
var inst_23071 = inst_23094;
var inst_23072 = inst_23096;
var inst_23073 = (0);
var state_23189__$1 = (function (){var statearr_23244 = state_23189;
(statearr_23244[(14)] = inst_23070);

(statearr_23244[(15)] = inst_23072);

(statearr_23244[(16)] = inst_23071);

(statearr_23244[(17)] = inst_23073);

return statearr_23244;
})();
var statearr_23245_23312 = state_23189__$1;
(statearr_23245_23312[(2)] = null);

(statearr_23245_23312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (11))){
var inst_23070 = (state_23189[(14)]);
var inst_23090 = (state_23189[(7)]);
var inst_23090__$1 = cljs.core.seq.call(null,inst_23070);
var state_23189__$1 = (function (){var statearr_23246 = state_23189;
(statearr_23246[(7)] = inst_23090__$1);

return statearr_23246;
})();
if(inst_23090__$1){
var statearr_23247_23313 = state_23189__$1;
(statearr_23247_23313[(1)] = (16));

} else {
var statearr_23248_23314 = state_23189__$1;
(statearr_23248_23314[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (9))){
var inst_23118 = (state_23189[(2)]);
var state_23189__$1 = state_23189;
var statearr_23249_23315 = state_23189__$1;
(statearr_23249_23315[(2)] = inst_23118);

(statearr_23249_23315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (5))){
var inst_23068 = cljs.core.deref.call(null,cs);
var inst_23069 = cljs.core.seq.call(null,inst_23068);
var inst_23070 = inst_23069;
var inst_23071 = null;
var inst_23072 = (0);
var inst_23073 = (0);
var state_23189__$1 = (function (){var statearr_23250 = state_23189;
(statearr_23250[(14)] = inst_23070);

(statearr_23250[(15)] = inst_23072);

(statearr_23250[(16)] = inst_23071);

(statearr_23250[(17)] = inst_23073);

return statearr_23250;
})();
var statearr_23251_23316 = state_23189__$1;
(statearr_23251_23316[(2)] = null);

(statearr_23251_23316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (14))){
var state_23189__$1 = state_23189;
var statearr_23252_23317 = state_23189__$1;
(statearr_23252_23317[(2)] = null);

(statearr_23252_23317[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (45))){
var inst_23179 = (state_23189[(2)]);
var state_23189__$1 = state_23189;
var statearr_23253_23318 = state_23189__$1;
(statearr_23253_23318[(2)] = inst_23179);

(statearr_23253_23318[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (26))){
var inst_23121 = (state_23189[(29)]);
var inst_23175 = (state_23189[(2)]);
var inst_23176 = cljs.core.seq.call(null,inst_23121);
var state_23189__$1 = (function (){var statearr_23254 = state_23189;
(statearr_23254[(31)] = inst_23175);

return statearr_23254;
})();
if(inst_23176){
var statearr_23255_23319 = state_23189__$1;
(statearr_23255_23319[(1)] = (42));

} else {
var statearr_23256_23320 = state_23189__$1;
(statearr_23256_23320[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (16))){
var inst_23090 = (state_23189[(7)]);
var inst_23092 = cljs.core.chunked_seq_QMARK_.call(null,inst_23090);
var state_23189__$1 = state_23189;
if(inst_23092){
var statearr_23257_23321 = state_23189__$1;
(statearr_23257_23321[(1)] = (19));

} else {
var statearr_23258_23322 = state_23189__$1;
(statearr_23258_23322[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (38))){
var inst_23168 = (state_23189[(2)]);
var state_23189__$1 = state_23189;
var statearr_23259_23323 = state_23189__$1;
(statearr_23259_23323[(2)] = inst_23168);

(statearr_23259_23323[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (30))){
var state_23189__$1 = state_23189;
var statearr_23260_23324 = state_23189__$1;
(statearr_23260_23324[(2)] = null);

(statearr_23260_23324[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (10))){
var inst_23071 = (state_23189[(16)]);
var inst_23073 = (state_23189[(17)]);
var inst_23079 = cljs.core._nth.call(null,inst_23071,inst_23073);
var inst_23080 = cljs.core.nth.call(null,inst_23079,(0),null);
var inst_23081 = cljs.core.nth.call(null,inst_23079,(1),null);
var state_23189__$1 = (function (){var statearr_23261 = state_23189;
(statearr_23261[(26)] = inst_23080);

return statearr_23261;
})();
if(cljs.core.truth_(inst_23081)){
var statearr_23262_23325 = state_23189__$1;
(statearr_23262_23325[(1)] = (13));

} else {
var statearr_23263_23326 = state_23189__$1;
(statearr_23263_23326[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (18))){
var inst_23114 = (state_23189[(2)]);
var state_23189__$1 = state_23189;
var statearr_23264_23327 = state_23189__$1;
(statearr_23264_23327[(2)] = inst_23114);

(statearr_23264_23327[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (42))){
var state_23189__$1 = state_23189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23189__$1,(45),dchan);
} else {
if((state_val_23190 === (37))){
var inst_23148 = (state_23189[(25)]);
var inst_23157 = (state_23189[(23)]);
var inst_23061 = (state_23189[(11)]);
var inst_23157__$1 = cljs.core.first.call(null,inst_23148);
var inst_23158 = cljs.core.async.put_BANG_.call(null,inst_23157__$1,inst_23061,done);
var state_23189__$1 = (function (){var statearr_23265 = state_23189;
(statearr_23265[(23)] = inst_23157__$1);

return statearr_23265;
})();
if(cljs.core.truth_(inst_23158)){
var statearr_23266_23328 = state_23189__$1;
(statearr_23266_23328[(1)] = (39));

} else {
var statearr_23267_23329 = state_23189__$1;
(statearr_23267_23329[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (8))){
var inst_23072 = (state_23189[(15)]);
var inst_23073 = (state_23189[(17)]);
var inst_23075 = (inst_23073 < inst_23072);
var inst_23076 = inst_23075;
var state_23189__$1 = state_23189;
if(cljs.core.truth_(inst_23076)){
var statearr_23268_23330 = state_23189__$1;
(statearr_23268_23330[(1)] = (10));

} else {
var statearr_23269_23331 = state_23189__$1;
(statearr_23269_23331[(1)] = (11));

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
});})(c__21970__auto___23277,cs,m,dchan,dctr,done))
;
return ((function (switch__21858__auto__,c__21970__auto___23277,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21859__auto__ = null;
var cljs$core$async$mult_$_state_machine__21859__auto____0 = (function (){
var statearr_23273 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23273[(0)] = cljs$core$async$mult_$_state_machine__21859__auto__);

(statearr_23273[(1)] = (1));

return statearr_23273;
});
var cljs$core$async$mult_$_state_machine__21859__auto____1 = (function (state_23189){
while(true){
var ret_value__21860__auto__ = (function (){try{while(true){
var result__21861__auto__ = switch__21858__auto__.call(null,state_23189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21861__auto__;
}
break;
}
}catch (e23274){if((e23274 instanceof Object)){
var ex__21862__auto__ = e23274;
var statearr_23275_23332 = state_23189;
(statearr_23275_23332[(5)] = ex__21862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23333 = state_23189;
state_23189 = G__23333;
continue;
} else {
return ret_value__21860__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21859__auto__ = function(state_23189){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21859__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21859__auto____1.call(this,state_23189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21859__auto____0;
cljs$core$async$mult_$_state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21859__auto____1;
return cljs$core$async$mult_$_state_machine__21859__auto__;
})()
;})(switch__21858__auto__,c__21970__auto___23277,cs,m,dchan,dctr,done))
})();
var state__21972__auto__ = (function (){var statearr_23276 = f__21971__auto__.call(null);
(statearr_23276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21970__auto___23277);

return statearr_23276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21972__auto__);
});})(c__21970__auto___23277,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args23334 = [];
var len__17853__auto___23337 = arguments.length;
var i__17854__auto___23338 = (0);
while(true){
if((i__17854__auto___23338 < len__17853__auto___23337)){
args23334.push((arguments[i__17854__auto___23338]));

var G__23339 = (i__17854__auto___23338 + (1));
i__17854__auto___23338 = G__23339;
continue;
} else {
}
break;
}

var G__23336 = args23334.length;
switch (G__23336) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23334.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17450__auto__ = (((m == null))?null:m);
var m__17451__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17450__auto__)]);
if(!((m__17451__auto__ == null))){
return m__17451__auto__.call(null,m,ch);
} else {
var m__17451__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17451__auto____$1 == null))){
return m__17451__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17450__auto__ = (((m == null))?null:m);
var m__17451__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17450__auto__)]);
if(!((m__17451__auto__ == null))){
return m__17451__auto__.call(null,m,ch);
} else {
var m__17451__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17451__auto____$1 == null))){
return m__17451__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17450__auto__ = (((m == null))?null:m);
var m__17451__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17450__auto__)]);
if(!((m__17451__auto__ == null))){
return m__17451__auto__.call(null,m);
} else {
var m__17451__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17451__auto____$1 == null))){
return m__17451__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17450__auto__ = (((m == null))?null:m);
var m__17451__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17450__auto__)]);
if(!((m__17451__auto__ == null))){
return m__17451__auto__.call(null,m,state_map);
} else {
var m__17451__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17451__auto____$1 == null))){
return m__17451__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17450__auto__ = (((m == null))?null:m);
var m__17451__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17450__auto__)]);
if(!((m__17451__auto__ == null))){
return m__17451__auto__.call(null,m,mode);
} else {
var m__17451__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17451__auto____$1 == null))){
return m__17451__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17860__auto__ = [];
var len__17853__auto___23351 = arguments.length;
var i__17854__auto___23352 = (0);
while(true){
if((i__17854__auto___23352 < len__17853__auto___23351)){
args__17860__auto__.push((arguments[i__17854__auto___23352]));

var G__23353 = (i__17854__auto___23352 + (1));
i__17854__auto___23352 = G__23353;
continue;
} else {
}
break;
}

var argseq__17861__auto__ = ((((3) < args__17860__auto__.length))?(new cljs.core.IndexedSeq(args__17860__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17861__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23345){
var map__23346 = p__23345;
var map__23346__$1 = ((((!((map__23346 == null)))?((((map__23346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23346):map__23346);
var opts = map__23346__$1;
var statearr_23348_23354 = state;
(statearr_23348_23354[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__23346,map__23346__$1,opts){
return (function (val){
var statearr_23349_23355 = state;
(statearr_23349_23355[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23346,map__23346__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_23350_23356 = state;
(statearr_23350_23356[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23341){
var G__23342 = cljs.core.first.call(null,seq23341);
var seq23341__$1 = cljs.core.next.call(null,seq23341);
var G__23343 = cljs.core.first.call(null,seq23341__$1);
var seq23341__$2 = cljs.core.next.call(null,seq23341__$1);
var G__23344 = cljs.core.first.call(null,seq23341__$2);
var seq23341__$3 = cljs.core.next.call(null,seq23341__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23342,G__23343,G__23344,seq23341__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23520 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23520 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23521){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23521 = meta23521;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23522,meta23521__$1){
var self__ = this;
var _23522__$1 = this;
return (new cljs.core.async.t_cljs$core$async23520(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23521__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23520.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23522){
var self__ = this;
var _23522__$1 = this;
return self__.meta23521;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23520.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23520.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23520.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23520.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23520.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23520.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23520.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23520.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23520.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23521","meta23521",1443609380,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23520.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23520.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23520";

cljs.core.async.t_cljs$core$async23520.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17393__auto__,writer__17394__auto__,opt__17395__auto__){
return cljs.core._write.call(null,writer__17394__auto__,"cljs.core.async/t_cljs$core$async23520");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23520 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23520(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23521){
return (new cljs.core.async.t_cljs$core$async23520(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23521));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23520(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21970__auto___23683 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21970__auto___23683,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21971__auto__ = (function (){var switch__21858__auto__ = ((function (c__21970__auto___23683,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23620){
var state_val_23621 = (state_23620[(1)]);
if((state_val_23621 === (7))){
var inst_23538 = (state_23620[(2)]);
var state_23620__$1 = state_23620;
var statearr_23622_23684 = state_23620__$1;
(statearr_23622_23684[(2)] = inst_23538);

(statearr_23622_23684[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (20))){
var inst_23550 = (state_23620[(7)]);
var state_23620__$1 = state_23620;
var statearr_23623_23685 = state_23620__$1;
(statearr_23623_23685[(2)] = inst_23550);

(statearr_23623_23685[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (27))){
var state_23620__$1 = state_23620;
var statearr_23624_23686 = state_23620__$1;
(statearr_23624_23686[(2)] = null);

(statearr_23624_23686[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (1))){
var inst_23526 = (state_23620[(8)]);
var inst_23526__$1 = calc_state.call(null);
var inst_23528 = (inst_23526__$1 == null);
var inst_23529 = cljs.core.not.call(null,inst_23528);
var state_23620__$1 = (function (){var statearr_23625 = state_23620;
(statearr_23625[(8)] = inst_23526__$1);

return statearr_23625;
})();
if(inst_23529){
var statearr_23626_23687 = state_23620__$1;
(statearr_23626_23687[(1)] = (2));

} else {
var statearr_23627_23688 = state_23620__$1;
(statearr_23627_23688[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (24))){
var inst_23580 = (state_23620[(9)]);
var inst_23573 = (state_23620[(10)]);
var inst_23594 = (state_23620[(11)]);
var inst_23594__$1 = inst_23573.call(null,inst_23580);
var state_23620__$1 = (function (){var statearr_23628 = state_23620;
(statearr_23628[(11)] = inst_23594__$1);

return statearr_23628;
})();
if(cljs.core.truth_(inst_23594__$1)){
var statearr_23629_23689 = state_23620__$1;
(statearr_23629_23689[(1)] = (29));

} else {
var statearr_23630_23690 = state_23620__$1;
(statearr_23630_23690[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (4))){
var inst_23541 = (state_23620[(2)]);
var state_23620__$1 = state_23620;
if(cljs.core.truth_(inst_23541)){
var statearr_23631_23691 = state_23620__$1;
(statearr_23631_23691[(1)] = (8));

} else {
var statearr_23632_23692 = state_23620__$1;
(statearr_23632_23692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (15))){
var inst_23567 = (state_23620[(2)]);
var state_23620__$1 = state_23620;
if(cljs.core.truth_(inst_23567)){
var statearr_23633_23693 = state_23620__$1;
(statearr_23633_23693[(1)] = (19));

} else {
var statearr_23634_23694 = state_23620__$1;
(statearr_23634_23694[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (21))){
var inst_23572 = (state_23620[(12)]);
var inst_23572__$1 = (state_23620[(2)]);
var inst_23573 = cljs.core.get.call(null,inst_23572__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23574 = cljs.core.get.call(null,inst_23572__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23575 = cljs.core.get.call(null,inst_23572__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23620__$1 = (function (){var statearr_23635 = state_23620;
(statearr_23635[(10)] = inst_23573);

(statearr_23635[(13)] = inst_23574);

(statearr_23635[(12)] = inst_23572__$1);

return statearr_23635;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23620__$1,(22),inst_23575);
} else {
if((state_val_23621 === (31))){
var inst_23602 = (state_23620[(2)]);
var state_23620__$1 = state_23620;
if(cljs.core.truth_(inst_23602)){
var statearr_23636_23695 = state_23620__$1;
(statearr_23636_23695[(1)] = (32));

} else {
var statearr_23637_23696 = state_23620__$1;
(statearr_23637_23696[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (32))){
var inst_23579 = (state_23620[(14)]);
var state_23620__$1 = state_23620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23620__$1,(35),out,inst_23579);
} else {
if((state_val_23621 === (33))){
var inst_23572 = (state_23620[(12)]);
var inst_23550 = inst_23572;
var state_23620__$1 = (function (){var statearr_23638 = state_23620;
(statearr_23638[(7)] = inst_23550);

return statearr_23638;
})();
var statearr_23639_23697 = state_23620__$1;
(statearr_23639_23697[(2)] = null);

(statearr_23639_23697[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (13))){
var inst_23550 = (state_23620[(7)]);
var inst_23557 = inst_23550.cljs$lang$protocol_mask$partition0$;
var inst_23558 = (inst_23557 & (64));
var inst_23559 = inst_23550.cljs$core$ISeq$;
var inst_23560 = (inst_23558) || (inst_23559);
var state_23620__$1 = state_23620;
if(cljs.core.truth_(inst_23560)){
var statearr_23640_23698 = state_23620__$1;
(statearr_23640_23698[(1)] = (16));

} else {
var statearr_23641_23699 = state_23620__$1;
(statearr_23641_23699[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (22))){
var inst_23580 = (state_23620[(9)]);
var inst_23579 = (state_23620[(14)]);
var inst_23578 = (state_23620[(2)]);
var inst_23579__$1 = cljs.core.nth.call(null,inst_23578,(0),null);
var inst_23580__$1 = cljs.core.nth.call(null,inst_23578,(1),null);
var inst_23581 = (inst_23579__$1 == null);
var inst_23582 = cljs.core._EQ_.call(null,inst_23580__$1,change);
var inst_23583 = (inst_23581) || (inst_23582);
var state_23620__$1 = (function (){var statearr_23642 = state_23620;
(statearr_23642[(9)] = inst_23580__$1);

(statearr_23642[(14)] = inst_23579__$1);

return statearr_23642;
})();
if(cljs.core.truth_(inst_23583)){
var statearr_23643_23700 = state_23620__$1;
(statearr_23643_23700[(1)] = (23));

} else {
var statearr_23644_23701 = state_23620__$1;
(statearr_23644_23701[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (36))){
var inst_23572 = (state_23620[(12)]);
var inst_23550 = inst_23572;
var state_23620__$1 = (function (){var statearr_23645 = state_23620;
(statearr_23645[(7)] = inst_23550);

return statearr_23645;
})();
var statearr_23646_23702 = state_23620__$1;
(statearr_23646_23702[(2)] = null);

(statearr_23646_23702[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (29))){
var inst_23594 = (state_23620[(11)]);
var state_23620__$1 = state_23620;
var statearr_23647_23703 = state_23620__$1;
(statearr_23647_23703[(2)] = inst_23594);

(statearr_23647_23703[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (6))){
var state_23620__$1 = state_23620;
var statearr_23648_23704 = state_23620__$1;
(statearr_23648_23704[(2)] = false);

(statearr_23648_23704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (28))){
var inst_23590 = (state_23620[(2)]);
var inst_23591 = calc_state.call(null);
var inst_23550 = inst_23591;
var state_23620__$1 = (function (){var statearr_23649 = state_23620;
(statearr_23649[(15)] = inst_23590);

(statearr_23649[(7)] = inst_23550);

return statearr_23649;
})();
var statearr_23650_23705 = state_23620__$1;
(statearr_23650_23705[(2)] = null);

(statearr_23650_23705[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (25))){
var inst_23616 = (state_23620[(2)]);
var state_23620__$1 = state_23620;
var statearr_23651_23706 = state_23620__$1;
(statearr_23651_23706[(2)] = inst_23616);

(statearr_23651_23706[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (34))){
var inst_23614 = (state_23620[(2)]);
var state_23620__$1 = state_23620;
var statearr_23652_23707 = state_23620__$1;
(statearr_23652_23707[(2)] = inst_23614);

(statearr_23652_23707[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (17))){
var state_23620__$1 = state_23620;
var statearr_23653_23708 = state_23620__$1;
(statearr_23653_23708[(2)] = false);

(statearr_23653_23708[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (3))){
var state_23620__$1 = state_23620;
var statearr_23654_23709 = state_23620__$1;
(statearr_23654_23709[(2)] = false);

(statearr_23654_23709[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (12))){
var inst_23618 = (state_23620[(2)]);
var state_23620__$1 = state_23620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23620__$1,inst_23618);
} else {
if((state_val_23621 === (2))){
var inst_23526 = (state_23620[(8)]);
var inst_23531 = inst_23526.cljs$lang$protocol_mask$partition0$;
var inst_23532 = (inst_23531 & (64));
var inst_23533 = inst_23526.cljs$core$ISeq$;
var inst_23534 = (inst_23532) || (inst_23533);
var state_23620__$1 = state_23620;
if(cljs.core.truth_(inst_23534)){
var statearr_23655_23710 = state_23620__$1;
(statearr_23655_23710[(1)] = (5));

} else {
var statearr_23656_23711 = state_23620__$1;
(statearr_23656_23711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (23))){
var inst_23579 = (state_23620[(14)]);
var inst_23585 = (inst_23579 == null);
var state_23620__$1 = state_23620;
if(cljs.core.truth_(inst_23585)){
var statearr_23657_23712 = state_23620__$1;
(statearr_23657_23712[(1)] = (26));

} else {
var statearr_23658_23713 = state_23620__$1;
(statearr_23658_23713[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (35))){
var inst_23605 = (state_23620[(2)]);
var state_23620__$1 = state_23620;
if(cljs.core.truth_(inst_23605)){
var statearr_23659_23714 = state_23620__$1;
(statearr_23659_23714[(1)] = (36));

} else {
var statearr_23660_23715 = state_23620__$1;
(statearr_23660_23715[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (19))){
var inst_23550 = (state_23620[(7)]);
var inst_23569 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23550);
var state_23620__$1 = state_23620;
var statearr_23661_23716 = state_23620__$1;
(statearr_23661_23716[(2)] = inst_23569);

(statearr_23661_23716[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (11))){
var inst_23550 = (state_23620[(7)]);
var inst_23554 = (inst_23550 == null);
var inst_23555 = cljs.core.not.call(null,inst_23554);
var state_23620__$1 = state_23620;
if(inst_23555){
var statearr_23662_23717 = state_23620__$1;
(statearr_23662_23717[(1)] = (13));

} else {
var statearr_23663_23718 = state_23620__$1;
(statearr_23663_23718[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (9))){
var inst_23526 = (state_23620[(8)]);
var state_23620__$1 = state_23620;
var statearr_23664_23719 = state_23620__$1;
(statearr_23664_23719[(2)] = inst_23526);

(statearr_23664_23719[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (5))){
var state_23620__$1 = state_23620;
var statearr_23665_23720 = state_23620__$1;
(statearr_23665_23720[(2)] = true);

(statearr_23665_23720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (14))){
var state_23620__$1 = state_23620;
var statearr_23666_23721 = state_23620__$1;
(statearr_23666_23721[(2)] = false);

(statearr_23666_23721[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (26))){
var inst_23580 = (state_23620[(9)]);
var inst_23587 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23580);
var state_23620__$1 = state_23620;
var statearr_23667_23722 = state_23620__$1;
(statearr_23667_23722[(2)] = inst_23587);

(statearr_23667_23722[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (16))){
var state_23620__$1 = state_23620;
var statearr_23668_23723 = state_23620__$1;
(statearr_23668_23723[(2)] = true);

(statearr_23668_23723[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (38))){
var inst_23610 = (state_23620[(2)]);
var state_23620__$1 = state_23620;
var statearr_23669_23724 = state_23620__$1;
(statearr_23669_23724[(2)] = inst_23610);

(statearr_23669_23724[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (30))){
var inst_23580 = (state_23620[(9)]);
var inst_23573 = (state_23620[(10)]);
var inst_23574 = (state_23620[(13)]);
var inst_23597 = cljs.core.empty_QMARK_.call(null,inst_23573);
var inst_23598 = inst_23574.call(null,inst_23580);
var inst_23599 = cljs.core.not.call(null,inst_23598);
var inst_23600 = (inst_23597) && (inst_23599);
var state_23620__$1 = state_23620;
var statearr_23670_23725 = state_23620__$1;
(statearr_23670_23725[(2)] = inst_23600);

(statearr_23670_23725[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (10))){
var inst_23526 = (state_23620[(8)]);
var inst_23546 = (state_23620[(2)]);
var inst_23547 = cljs.core.get.call(null,inst_23546,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23548 = cljs.core.get.call(null,inst_23546,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23549 = cljs.core.get.call(null,inst_23546,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23550 = inst_23526;
var state_23620__$1 = (function (){var statearr_23671 = state_23620;
(statearr_23671[(16)] = inst_23547);

(statearr_23671[(17)] = inst_23549);

(statearr_23671[(7)] = inst_23550);

(statearr_23671[(18)] = inst_23548);

return statearr_23671;
})();
var statearr_23672_23726 = state_23620__$1;
(statearr_23672_23726[(2)] = null);

(statearr_23672_23726[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (18))){
var inst_23564 = (state_23620[(2)]);
var state_23620__$1 = state_23620;
var statearr_23673_23727 = state_23620__$1;
(statearr_23673_23727[(2)] = inst_23564);

(statearr_23673_23727[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (37))){
var state_23620__$1 = state_23620;
var statearr_23674_23728 = state_23620__$1;
(statearr_23674_23728[(2)] = null);

(statearr_23674_23728[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23621 === (8))){
var inst_23526 = (state_23620[(8)]);
var inst_23543 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23526);
var state_23620__$1 = state_23620;
var statearr_23675_23729 = state_23620__$1;
(statearr_23675_23729[(2)] = inst_23543);

(statearr_23675_23729[(1)] = (10));


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
});})(c__21970__auto___23683,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21858__auto__,c__21970__auto___23683,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21859__auto__ = null;
var cljs$core$async$mix_$_state_machine__21859__auto____0 = (function (){
var statearr_23679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23679[(0)] = cljs$core$async$mix_$_state_machine__21859__auto__);

(statearr_23679[(1)] = (1));

return statearr_23679;
});
var cljs$core$async$mix_$_state_machine__21859__auto____1 = (function (state_23620){
while(true){
var ret_value__21860__auto__ = (function (){try{while(true){
var result__21861__auto__ = switch__21858__auto__.call(null,state_23620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21861__auto__;
}
break;
}
}catch (e23680){if((e23680 instanceof Object)){
var ex__21862__auto__ = e23680;
var statearr_23681_23730 = state_23620;
(statearr_23681_23730[(5)] = ex__21862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23731 = state_23620;
state_23620 = G__23731;
continue;
} else {
return ret_value__21860__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21859__auto__ = function(state_23620){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21859__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21859__auto____1.call(this,state_23620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21859__auto____0;
cljs$core$async$mix_$_state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21859__auto____1;
return cljs$core$async$mix_$_state_machine__21859__auto__;
})()
;})(switch__21858__auto__,c__21970__auto___23683,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21972__auto__ = (function (){var statearr_23682 = f__21971__auto__.call(null);
(statearr_23682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21970__auto___23683);

return statearr_23682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21972__auto__);
});})(c__21970__auto___23683,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17450__auto__ = (((p == null))?null:p);
var m__17451__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17450__auto__)]);
if(!((m__17451__auto__ == null))){
return m__17451__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17451__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17451__auto____$1 == null))){
return m__17451__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17450__auto__ = (((p == null))?null:p);
var m__17451__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17450__auto__)]);
if(!((m__17451__auto__ == null))){
return m__17451__auto__.call(null,p,v,ch);
} else {
var m__17451__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17451__auto____$1 == null))){
return m__17451__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args23732 = [];
var len__17853__auto___23735 = arguments.length;
var i__17854__auto___23736 = (0);
while(true){
if((i__17854__auto___23736 < len__17853__auto___23735)){
args23732.push((arguments[i__17854__auto___23736]));

var G__23737 = (i__17854__auto___23736 + (1));
i__17854__auto___23736 = G__23737;
continue;
} else {
}
break;
}

var G__23734 = args23732.length;
switch (G__23734) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23732.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17450__auto__ = (((p == null))?null:p);
var m__17451__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17450__auto__)]);
if(!((m__17451__auto__ == null))){
return m__17451__auto__.call(null,p);
} else {
var m__17451__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17451__auto____$1 == null))){
return m__17451__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17450__auto__ = (((p == null))?null:p);
var m__17451__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17450__auto__)]);
if(!((m__17451__auto__ == null))){
return m__17451__auto__.call(null,p,v);
} else {
var m__17451__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17451__auto____$1 == null))){
return m__17451__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args23740 = [];
var len__17853__auto___23865 = arguments.length;
var i__17854__auto___23866 = (0);
while(true){
if((i__17854__auto___23866 < len__17853__auto___23865)){
args23740.push((arguments[i__17854__auto___23866]));

var G__23867 = (i__17854__auto___23866 + (1));
i__17854__auto___23866 = G__23867;
continue;
} else {
}
break;
}

var G__23742 = args23740.length;
switch (G__23742) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23740.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16795__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16795__auto__)){
return or__16795__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16795__auto__,mults){
return (function (p1__23739_SHARP_){
if(cljs.core.truth_(p1__23739_SHARP_.call(null,topic))){
return p1__23739_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23739_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16795__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23743 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23743 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23744){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23744 = meta23744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23745,meta23744__$1){
var self__ = this;
var _23745__$1 = this;
return (new cljs.core.async.t_cljs$core$async23743(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23744__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23743.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23745){
var self__ = this;
var _23745__$1 = this;
return self__.meta23744;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23743.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23743.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23743.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async23743.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23743.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23743.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23743.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23743.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23744","meta23744",-1409319420,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23743.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23743.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23743";

cljs.core.async.t_cljs$core$async23743.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17393__auto__,writer__17394__auto__,opt__17395__auto__){
return cljs.core._write.call(null,writer__17394__auto__,"cljs.core.async/t_cljs$core$async23743");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23743 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23743(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23744){
return (new cljs.core.async.t_cljs$core$async23743(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23744));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23743(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21970__auto___23869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21970__auto___23869,mults,ensure_mult,p){
return (function (){
var f__21971__auto__ = (function (){var switch__21858__auto__ = ((function (c__21970__auto___23869,mults,ensure_mult,p){
return (function (state_23817){
var state_val_23818 = (state_23817[(1)]);
if((state_val_23818 === (7))){
var inst_23813 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
var statearr_23819_23870 = state_23817__$1;
(statearr_23819_23870[(2)] = inst_23813);

(statearr_23819_23870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (20))){
var state_23817__$1 = state_23817;
var statearr_23820_23871 = state_23817__$1;
(statearr_23820_23871[(2)] = null);

(statearr_23820_23871[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (1))){
var state_23817__$1 = state_23817;
var statearr_23821_23872 = state_23817__$1;
(statearr_23821_23872[(2)] = null);

(statearr_23821_23872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (24))){
var inst_23796 = (state_23817[(7)]);
var inst_23805 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23796);
var state_23817__$1 = state_23817;
var statearr_23822_23873 = state_23817__$1;
(statearr_23822_23873[(2)] = inst_23805);

(statearr_23822_23873[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (4))){
var inst_23748 = (state_23817[(8)]);
var inst_23748__$1 = (state_23817[(2)]);
var inst_23749 = (inst_23748__$1 == null);
var state_23817__$1 = (function (){var statearr_23823 = state_23817;
(statearr_23823[(8)] = inst_23748__$1);

return statearr_23823;
})();
if(cljs.core.truth_(inst_23749)){
var statearr_23824_23874 = state_23817__$1;
(statearr_23824_23874[(1)] = (5));

} else {
var statearr_23825_23875 = state_23817__$1;
(statearr_23825_23875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (15))){
var inst_23790 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
var statearr_23826_23876 = state_23817__$1;
(statearr_23826_23876[(2)] = inst_23790);

(statearr_23826_23876[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (21))){
var inst_23810 = (state_23817[(2)]);
var state_23817__$1 = (function (){var statearr_23827 = state_23817;
(statearr_23827[(9)] = inst_23810);

return statearr_23827;
})();
var statearr_23828_23877 = state_23817__$1;
(statearr_23828_23877[(2)] = null);

(statearr_23828_23877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (13))){
var inst_23772 = (state_23817[(10)]);
var inst_23774 = cljs.core.chunked_seq_QMARK_.call(null,inst_23772);
var state_23817__$1 = state_23817;
if(inst_23774){
var statearr_23829_23878 = state_23817__$1;
(statearr_23829_23878[(1)] = (16));

} else {
var statearr_23830_23879 = state_23817__$1;
(statearr_23830_23879[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (22))){
var inst_23802 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
if(cljs.core.truth_(inst_23802)){
var statearr_23831_23880 = state_23817__$1;
(statearr_23831_23880[(1)] = (23));

} else {
var statearr_23832_23881 = state_23817__$1;
(statearr_23832_23881[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (6))){
var inst_23798 = (state_23817[(11)]);
var inst_23748 = (state_23817[(8)]);
var inst_23796 = (state_23817[(7)]);
var inst_23796__$1 = topic_fn.call(null,inst_23748);
var inst_23797 = cljs.core.deref.call(null,mults);
var inst_23798__$1 = cljs.core.get.call(null,inst_23797,inst_23796__$1);
var state_23817__$1 = (function (){var statearr_23833 = state_23817;
(statearr_23833[(11)] = inst_23798__$1);

(statearr_23833[(7)] = inst_23796__$1);

return statearr_23833;
})();
if(cljs.core.truth_(inst_23798__$1)){
var statearr_23834_23882 = state_23817__$1;
(statearr_23834_23882[(1)] = (19));

} else {
var statearr_23835_23883 = state_23817__$1;
(statearr_23835_23883[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (25))){
var inst_23807 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
var statearr_23836_23884 = state_23817__$1;
(statearr_23836_23884[(2)] = inst_23807);

(statearr_23836_23884[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (17))){
var inst_23772 = (state_23817[(10)]);
var inst_23781 = cljs.core.first.call(null,inst_23772);
var inst_23782 = cljs.core.async.muxch_STAR_.call(null,inst_23781);
var inst_23783 = cljs.core.async.close_BANG_.call(null,inst_23782);
var inst_23784 = cljs.core.next.call(null,inst_23772);
var inst_23758 = inst_23784;
var inst_23759 = null;
var inst_23760 = (0);
var inst_23761 = (0);
var state_23817__$1 = (function (){var statearr_23837 = state_23817;
(statearr_23837[(12)] = inst_23761);

(statearr_23837[(13)] = inst_23758);

(statearr_23837[(14)] = inst_23783);

(statearr_23837[(15)] = inst_23759);

(statearr_23837[(16)] = inst_23760);

return statearr_23837;
})();
var statearr_23838_23885 = state_23817__$1;
(statearr_23838_23885[(2)] = null);

(statearr_23838_23885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (3))){
var inst_23815 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23817__$1,inst_23815);
} else {
if((state_val_23818 === (12))){
var inst_23792 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
var statearr_23839_23886 = state_23817__$1;
(statearr_23839_23886[(2)] = inst_23792);

(statearr_23839_23886[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (2))){
var state_23817__$1 = state_23817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23817__$1,(4),ch);
} else {
if((state_val_23818 === (23))){
var state_23817__$1 = state_23817;
var statearr_23840_23887 = state_23817__$1;
(statearr_23840_23887[(2)] = null);

(statearr_23840_23887[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (19))){
var inst_23798 = (state_23817[(11)]);
var inst_23748 = (state_23817[(8)]);
var inst_23800 = cljs.core.async.muxch_STAR_.call(null,inst_23798);
var state_23817__$1 = state_23817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23817__$1,(22),inst_23800,inst_23748);
} else {
if((state_val_23818 === (11))){
var inst_23758 = (state_23817[(13)]);
var inst_23772 = (state_23817[(10)]);
var inst_23772__$1 = cljs.core.seq.call(null,inst_23758);
var state_23817__$1 = (function (){var statearr_23841 = state_23817;
(statearr_23841[(10)] = inst_23772__$1);

return statearr_23841;
})();
if(inst_23772__$1){
var statearr_23842_23888 = state_23817__$1;
(statearr_23842_23888[(1)] = (13));

} else {
var statearr_23843_23889 = state_23817__$1;
(statearr_23843_23889[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (9))){
var inst_23794 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
var statearr_23844_23890 = state_23817__$1;
(statearr_23844_23890[(2)] = inst_23794);

(statearr_23844_23890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (5))){
var inst_23755 = cljs.core.deref.call(null,mults);
var inst_23756 = cljs.core.vals.call(null,inst_23755);
var inst_23757 = cljs.core.seq.call(null,inst_23756);
var inst_23758 = inst_23757;
var inst_23759 = null;
var inst_23760 = (0);
var inst_23761 = (0);
var state_23817__$1 = (function (){var statearr_23845 = state_23817;
(statearr_23845[(12)] = inst_23761);

(statearr_23845[(13)] = inst_23758);

(statearr_23845[(15)] = inst_23759);

(statearr_23845[(16)] = inst_23760);

return statearr_23845;
})();
var statearr_23846_23891 = state_23817__$1;
(statearr_23846_23891[(2)] = null);

(statearr_23846_23891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (14))){
var state_23817__$1 = state_23817;
var statearr_23850_23892 = state_23817__$1;
(statearr_23850_23892[(2)] = null);

(statearr_23850_23892[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (16))){
var inst_23772 = (state_23817[(10)]);
var inst_23776 = cljs.core.chunk_first.call(null,inst_23772);
var inst_23777 = cljs.core.chunk_rest.call(null,inst_23772);
var inst_23778 = cljs.core.count.call(null,inst_23776);
var inst_23758 = inst_23777;
var inst_23759 = inst_23776;
var inst_23760 = inst_23778;
var inst_23761 = (0);
var state_23817__$1 = (function (){var statearr_23851 = state_23817;
(statearr_23851[(12)] = inst_23761);

(statearr_23851[(13)] = inst_23758);

(statearr_23851[(15)] = inst_23759);

(statearr_23851[(16)] = inst_23760);

return statearr_23851;
})();
var statearr_23852_23893 = state_23817__$1;
(statearr_23852_23893[(2)] = null);

(statearr_23852_23893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (10))){
var inst_23761 = (state_23817[(12)]);
var inst_23758 = (state_23817[(13)]);
var inst_23759 = (state_23817[(15)]);
var inst_23760 = (state_23817[(16)]);
var inst_23766 = cljs.core._nth.call(null,inst_23759,inst_23761);
var inst_23767 = cljs.core.async.muxch_STAR_.call(null,inst_23766);
var inst_23768 = cljs.core.async.close_BANG_.call(null,inst_23767);
var inst_23769 = (inst_23761 + (1));
var tmp23847 = inst_23758;
var tmp23848 = inst_23759;
var tmp23849 = inst_23760;
var inst_23758__$1 = tmp23847;
var inst_23759__$1 = tmp23848;
var inst_23760__$1 = tmp23849;
var inst_23761__$1 = inst_23769;
var state_23817__$1 = (function (){var statearr_23853 = state_23817;
(statearr_23853[(12)] = inst_23761__$1);

(statearr_23853[(13)] = inst_23758__$1);

(statearr_23853[(15)] = inst_23759__$1);

(statearr_23853[(17)] = inst_23768);

(statearr_23853[(16)] = inst_23760__$1);

return statearr_23853;
})();
var statearr_23854_23894 = state_23817__$1;
(statearr_23854_23894[(2)] = null);

(statearr_23854_23894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (18))){
var inst_23787 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
var statearr_23855_23895 = state_23817__$1;
(statearr_23855_23895[(2)] = inst_23787);

(statearr_23855_23895[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (8))){
var inst_23761 = (state_23817[(12)]);
var inst_23760 = (state_23817[(16)]);
var inst_23763 = (inst_23761 < inst_23760);
var inst_23764 = inst_23763;
var state_23817__$1 = state_23817;
if(cljs.core.truth_(inst_23764)){
var statearr_23856_23896 = state_23817__$1;
(statearr_23856_23896[(1)] = (10));

} else {
var statearr_23857_23897 = state_23817__$1;
(statearr_23857_23897[(1)] = (11));

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
});})(c__21970__auto___23869,mults,ensure_mult,p))
;
return ((function (switch__21858__auto__,c__21970__auto___23869,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21859__auto__ = null;
var cljs$core$async$state_machine__21859__auto____0 = (function (){
var statearr_23861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23861[(0)] = cljs$core$async$state_machine__21859__auto__);

(statearr_23861[(1)] = (1));

return statearr_23861;
});
var cljs$core$async$state_machine__21859__auto____1 = (function (state_23817){
while(true){
var ret_value__21860__auto__ = (function (){try{while(true){
var result__21861__auto__ = switch__21858__auto__.call(null,state_23817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21861__auto__;
}
break;
}
}catch (e23862){if((e23862 instanceof Object)){
var ex__21862__auto__ = e23862;
var statearr_23863_23898 = state_23817;
(statearr_23863_23898[(5)] = ex__21862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23899 = state_23817;
state_23817 = G__23899;
continue;
} else {
return ret_value__21860__auto__;
}
break;
}
});
cljs$core$async$state_machine__21859__auto__ = function(state_23817){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21859__auto____1.call(this,state_23817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21859__auto____0;
cljs$core$async$state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21859__auto____1;
return cljs$core$async$state_machine__21859__auto__;
})()
;})(switch__21858__auto__,c__21970__auto___23869,mults,ensure_mult,p))
})();
var state__21972__auto__ = (function (){var statearr_23864 = f__21971__auto__.call(null);
(statearr_23864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21970__auto___23869);

return statearr_23864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21972__auto__);
});})(c__21970__auto___23869,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args23900 = [];
var len__17853__auto___23903 = arguments.length;
var i__17854__auto___23904 = (0);
while(true){
if((i__17854__auto___23904 < len__17853__auto___23903)){
args23900.push((arguments[i__17854__auto___23904]));

var G__23905 = (i__17854__auto___23904 + (1));
i__17854__auto___23904 = G__23905;
continue;
} else {
}
break;
}

var G__23902 = args23900.length;
switch (G__23902) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23900.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args23907 = [];
var len__17853__auto___23910 = arguments.length;
var i__17854__auto___23911 = (0);
while(true){
if((i__17854__auto___23911 < len__17853__auto___23910)){
args23907.push((arguments[i__17854__auto___23911]));

var G__23912 = (i__17854__auto___23911 + (1));
i__17854__auto___23911 = G__23912;
continue;
} else {
}
break;
}

var G__23909 = args23907.length;
switch (G__23909) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23907.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args23914 = [];
var len__17853__auto___23985 = arguments.length;
var i__17854__auto___23986 = (0);
while(true){
if((i__17854__auto___23986 < len__17853__auto___23985)){
args23914.push((arguments[i__17854__auto___23986]));

var G__23987 = (i__17854__auto___23986 + (1));
i__17854__auto___23986 = G__23987;
continue;
} else {
}
break;
}

var G__23916 = args23914.length;
switch (G__23916) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23914.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21970__auto___23989 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21970__auto___23989,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21971__auto__ = (function (){var switch__21858__auto__ = ((function (c__21970__auto___23989,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23955){
var state_val_23956 = (state_23955[(1)]);
if((state_val_23956 === (7))){
var state_23955__$1 = state_23955;
var statearr_23957_23990 = state_23955__$1;
(statearr_23957_23990[(2)] = null);

(statearr_23957_23990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23956 === (1))){
var state_23955__$1 = state_23955;
var statearr_23958_23991 = state_23955__$1;
(statearr_23958_23991[(2)] = null);

(statearr_23958_23991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23956 === (4))){
var inst_23919 = (state_23955[(7)]);
var inst_23921 = (inst_23919 < cnt);
var state_23955__$1 = state_23955;
if(cljs.core.truth_(inst_23921)){
var statearr_23959_23992 = state_23955__$1;
(statearr_23959_23992[(1)] = (6));

} else {
var statearr_23960_23993 = state_23955__$1;
(statearr_23960_23993[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23956 === (15))){
var inst_23951 = (state_23955[(2)]);
var state_23955__$1 = state_23955;
var statearr_23961_23994 = state_23955__$1;
(statearr_23961_23994[(2)] = inst_23951);

(statearr_23961_23994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23956 === (13))){
var inst_23944 = cljs.core.async.close_BANG_.call(null,out);
var state_23955__$1 = state_23955;
var statearr_23962_23995 = state_23955__$1;
(statearr_23962_23995[(2)] = inst_23944);

(statearr_23962_23995[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23956 === (6))){
var state_23955__$1 = state_23955;
var statearr_23963_23996 = state_23955__$1;
(statearr_23963_23996[(2)] = null);

(statearr_23963_23996[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23956 === (3))){
var inst_23953 = (state_23955[(2)]);
var state_23955__$1 = state_23955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23955__$1,inst_23953);
} else {
if((state_val_23956 === (12))){
var inst_23941 = (state_23955[(8)]);
var inst_23941__$1 = (state_23955[(2)]);
var inst_23942 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23941__$1);
var state_23955__$1 = (function (){var statearr_23964 = state_23955;
(statearr_23964[(8)] = inst_23941__$1);

return statearr_23964;
})();
if(cljs.core.truth_(inst_23942)){
var statearr_23965_23997 = state_23955__$1;
(statearr_23965_23997[(1)] = (13));

} else {
var statearr_23966_23998 = state_23955__$1;
(statearr_23966_23998[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23956 === (2))){
var inst_23918 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23919 = (0);
var state_23955__$1 = (function (){var statearr_23967 = state_23955;
(statearr_23967[(7)] = inst_23919);

(statearr_23967[(9)] = inst_23918);

return statearr_23967;
})();
var statearr_23968_23999 = state_23955__$1;
(statearr_23968_23999[(2)] = null);

(statearr_23968_23999[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23956 === (11))){
var inst_23919 = (state_23955[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23955,(10),Object,null,(9));
var inst_23928 = chs__$1.call(null,inst_23919);
var inst_23929 = done.call(null,inst_23919);
var inst_23930 = cljs.core.async.take_BANG_.call(null,inst_23928,inst_23929);
var state_23955__$1 = state_23955;
var statearr_23969_24000 = state_23955__$1;
(statearr_23969_24000[(2)] = inst_23930);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23955__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23956 === (9))){
var inst_23919 = (state_23955[(7)]);
var inst_23932 = (state_23955[(2)]);
var inst_23933 = (inst_23919 + (1));
var inst_23919__$1 = inst_23933;
var state_23955__$1 = (function (){var statearr_23970 = state_23955;
(statearr_23970[(7)] = inst_23919__$1);

(statearr_23970[(10)] = inst_23932);

return statearr_23970;
})();
var statearr_23971_24001 = state_23955__$1;
(statearr_23971_24001[(2)] = null);

(statearr_23971_24001[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23956 === (5))){
var inst_23939 = (state_23955[(2)]);
var state_23955__$1 = (function (){var statearr_23972 = state_23955;
(statearr_23972[(11)] = inst_23939);

return statearr_23972;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23955__$1,(12),dchan);
} else {
if((state_val_23956 === (14))){
var inst_23941 = (state_23955[(8)]);
var inst_23946 = cljs.core.apply.call(null,f,inst_23941);
var state_23955__$1 = state_23955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23955__$1,(16),out,inst_23946);
} else {
if((state_val_23956 === (16))){
var inst_23948 = (state_23955[(2)]);
var state_23955__$1 = (function (){var statearr_23973 = state_23955;
(statearr_23973[(12)] = inst_23948);

return statearr_23973;
})();
var statearr_23974_24002 = state_23955__$1;
(statearr_23974_24002[(2)] = null);

(statearr_23974_24002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23956 === (10))){
var inst_23923 = (state_23955[(2)]);
var inst_23924 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23955__$1 = (function (){var statearr_23975 = state_23955;
(statearr_23975[(13)] = inst_23923);

return statearr_23975;
})();
var statearr_23976_24003 = state_23955__$1;
(statearr_23976_24003[(2)] = inst_23924);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23955__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23956 === (8))){
var inst_23937 = (state_23955[(2)]);
var state_23955__$1 = state_23955;
var statearr_23977_24004 = state_23955__$1;
(statearr_23977_24004[(2)] = inst_23937);

(statearr_23977_24004[(1)] = (5));


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
});})(c__21970__auto___23989,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21858__auto__,c__21970__auto___23989,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21859__auto__ = null;
var cljs$core$async$state_machine__21859__auto____0 = (function (){
var statearr_23981 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23981[(0)] = cljs$core$async$state_machine__21859__auto__);

(statearr_23981[(1)] = (1));

return statearr_23981;
});
var cljs$core$async$state_machine__21859__auto____1 = (function (state_23955){
while(true){
var ret_value__21860__auto__ = (function (){try{while(true){
var result__21861__auto__ = switch__21858__auto__.call(null,state_23955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21861__auto__;
}
break;
}
}catch (e23982){if((e23982 instanceof Object)){
var ex__21862__auto__ = e23982;
var statearr_23983_24005 = state_23955;
(statearr_23983_24005[(5)] = ex__21862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24006 = state_23955;
state_23955 = G__24006;
continue;
} else {
return ret_value__21860__auto__;
}
break;
}
});
cljs$core$async$state_machine__21859__auto__ = function(state_23955){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21859__auto____1.call(this,state_23955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21859__auto____0;
cljs$core$async$state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21859__auto____1;
return cljs$core$async$state_machine__21859__auto__;
})()
;})(switch__21858__auto__,c__21970__auto___23989,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21972__auto__ = (function (){var statearr_23984 = f__21971__auto__.call(null);
(statearr_23984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21970__auto___23989);

return statearr_23984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21972__auto__);
});})(c__21970__auto___23989,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args24008 = [];
var len__17853__auto___24064 = arguments.length;
var i__17854__auto___24065 = (0);
while(true){
if((i__17854__auto___24065 < len__17853__auto___24064)){
args24008.push((arguments[i__17854__auto___24065]));

var G__24066 = (i__17854__auto___24065 + (1));
i__17854__auto___24065 = G__24066;
continue;
} else {
}
break;
}

var G__24010 = args24008.length;
switch (G__24010) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24008.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21970__auto___24068 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21970__auto___24068,out){
return (function (){
var f__21971__auto__ = (function (){var switch__21858__auto__ = ((function (c__21970__auto___24068,out){
return (function (state_24040){
var state_val_24041 = (state_24040[(1)]);
if((state_val_24041 === (7))){
var inst_24019 = (state_24040[(7)]);
var inst_24020 = (state_24040[(8)]);
var inst_24019__$1 = (state_24040[(2)]);
var inst_24020__$1 = cljs.core.nth.call(null,inst_24019__$1,(0),null);
var inst_24021 = cljs.core.nth.call(null,inst_24019__$1,(1),null);
var inst_24022 = (inst_24020__$1 == null);
var state_24040__$1 = (function (){var statearr_24042 = state_24040;
(statearr_24042[(9)] = inst_24021);

(statearr_24042[(7)] = inst_24019__$1);

(statearr_24042[(8)] = inst_24020__$1);

return statearr_24042;
})();
if(cljs.core.truth_(inst_24022)){
var statearr_24043_24069 = state_24040__$1;
(statearr_24043_24069[(1)] = (8));

} else {
var statearr_24044_24070 = state_24040__$1;
(statearr_24044_24070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24041 === (1))){
var inst_24011 = cljs.core.vec.call(null,chs);
var inst_24012 = inst_24011;
var state_24040__$1 = (function (){var statearr_24045 = state_24040;
(statearr_24045[(10)] = inst_24012);

return statearr_24045;
})();
var statearr_24046_24071 = state_24040__$1;
(statearr_24046_24071[(2)] = null);

(statearr_24046_24071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24041 === (4))){
var inst_24012 = (state_24040[(10)]);
var state_24040__$1 = state_24040;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24040__$1,(7),inst_24012);
} else {
if((state_val_24041 === (6))){
var inst_24036 = (state_24040[(2)]);
var state_24040__$1 = state_24040;
var statearr_24047_24072 = state_24040__$1;
(statearr_24047_24072[(2)] = inst_24036);

(statearr_24047_24072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24041 === (3))){
var inst_24038 = (state_24040[(2)]);
var state_24040__$1 = state_24040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24040__$1,inst_24038);
} else {
if((state_val_24041 === (2))){
var inst_24012 = (state_24040[(10)]);
var inst_24014 = cljs.core.count.call(null,inst_24012);
var inst_24015 = (inst_24014 > (0));
var state_24040__$1 = state_24040;
if(cljs.core.truth_(inst_24015)){
var statearr_24049_24073 = state_24040__$1;
(statearr_24049_24073[(1)] = (4));

} else {
var statearr_24050_24074 = state_24040__$1;
(statearr_24050_24074[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24041 === (11))){
var inst_24012 = (state_24040[(10)]);
var inst_24029 = (state_24040[(2)]);
var tmp24048 = inst_24012;
var inst_24012__$1 = tmp24048;
var state_24040__$1 = (function (){var statearr_24051 = state_24040;
(statearr_24051[(10)] = inst_24012__$1);

(statearr_24051[(11)] = inst_24029);

return statearr_24051;
})();
var statearr_24052_24075 = state_24040__$1;
(statearr_24052_24075[(2)] = null);

(statearr_24052_24075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24041 === (9))){
var inst_24020 = (state_24040[(8)]);
var state_24040__$1 = state_24040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24040__$1,(11),out,inst_24020);
} else {
if((state_val_24041 === (5))){
var inst_24034 = cljs.core.async.close_BANG_.call(null,out);
var state_24040__$1 = state_24040;
var statearr_24053_24076 = state_24040__$1;
(statearr_24053_24076[(2)] = inst_24034);

(statearr_24053_24076[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24041 === (10))){
var inst_24032 = (state_24040[(2)]);
var state_24040__$1 = state_24040;
var statearr_24054_24077 = state_24040__$1;
(statearr_24054_24077[(2)] = inst_24032);

(statearr_24054_24077[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24041 === (8))){
var inst_24012 = (state_24040[(10)]);
var inst_24021 = (state_24040[(9)]);
var inst_24019 = (state_24040[(7)]);
var inst_24020 = (state_24040[(8)]);
var inst_24024 = (function (){var cs = inst_24012;
var vec__24017 = inst_24019;
var v = inst_24020;
var c = inst_24021;
return ((function (cs,vec__24017,v,c,inst_24012,inst_24021,inst_24019,inst_24020,state_val_24041,c__21970__auto___24068,out){
return (function (p1__24007_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24007_SHARP_);
});
;})(cs,vec__24017,v,c,inst_24012,inst_24021,inst_24019,inst_24020,state_val_24041,c__21970__auto___24068,out))
})();
var inst_24025 = cljs.core.filterv.call(null,inst_24024,inst_24012);
var inst_24012__$1 = inst_24025;
var state_24040__$1 = (function (){var statearr_24055 = state_24040;
(statearr_24055[(10)] = inst_24012__$1);

return statearr_24055;
})();
var statearr_24056_24078 = state_24040__$1;
(statearr_24056_24078[(2)] = null);

(statearr_24056_24078[(1)] = (2));


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
});})(c__21970__auto___24068,out))
;
return ((function (switch__21858__auto__,c__21970__auto___24068,out){
return (function() {
var cljs$core$async$state_machine__21859__auto__ = null;
var cljs$core$async$state_machine__21859__auto____0 = (function (){
var statearr_24060 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24060[(0)] = cljs$core$async$state_machine__21859__auto__);

(statearr_24060[(1)] = (1));

return statearr_24060;
});
var cljs$core$async$state_machine__21859__auto____1 = (function (state_24040){
while(true){
var ret_value__21860__auto__ = (function (){try{while(true){
var result__21861__auto__ = switch__21858__auto__.call(null,state_24040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21861__auto__;
}
break;
}
}catch (e24061){if((e24061 instanceof Object)){
var ex__21862__auto__ = e24061;
var statearr_24062_24079 = state_24040;
(statearr_24062_24079[(5)] = ex__21862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24080 = state_24040;
state_24040 = G__24080;
continue;
} else {
return ret_value__21860__auto__;
}
break;
}
});
cljs$core$async$state_machine__21859__auto__ = function(state_24040){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21859__auto____1.call(this,state_24040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21859__auto____0;
cljs$core$async$state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21859__auto____1;
return cljs$core$async$state_machine__21859__auto__;
})()
;})(switch__21858__auto__,c__21970__auto___24068,out))
})();
var state__21972__auto__ = (function (){var statearr_24063 = f__21971__auto__.call(null);
(statearr_24063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21970__auto___24068);

return statearr_24063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21972__auto__);
});})(c__21970__auto___24068,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args24081 = [];
var len__17853__auto___24130 = arguments.length;
var i__17854__auto___24131 = (0);
while(true){
if((i__17854__auto___24131 < len__17853__auto___24130)){
args24081.push((arguments[i__17854__auto___24131]));

var G__24132 = (i__17854__auto___24131 + (1));
i__17854__auto___24131 = G__24132;
continue;
} else {
}
break;
}

var G__24083 = args24081.length;
switch (G__24083) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24081.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21970__auto___24134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21970__auto___24134,out){
return (function (){
var f__21971__auto__ = (function (){var switch__21858__auto__ = ((function (c__21970__auto___24134,out){
return (function (state_24107){
var state_val_24108 = (state_24107[(1)]);
if((state_val_24108 === (7))){
var inst_24089 = (state_24107[(7)]);
var inst_24089__$1 = (state_24107[(2)]);
var inst_24090 = (inst_24089__$1 == null);
var inst_24091 = cljs.core.not.call(null,inst_24090);
var state_24107__$1 = (function (){var statearr_24109 = state_24107;
(statearr_24109[(7)] = inst_24089__$1);

return statearr_24109;
})();
if(inst_24091){
var statearr_24110_24135 = state_24107__$1;
(statearr_24110_24135[(1)] = (8));

} else {
var statearr_24111_24136 = state_24107__$1;
(statearr_24111_24136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24108 === (1))){
var inst_24084 = (0);
var state_24107__$1 = (function (){var statearr_24112 = state_24107;
(statearr_24112[(8)] = inst_24084);

return statearr_24112;
})();
var statearr_24113_24137 = state_24107__$1;
(statearr_24113_24137[(2)] = null);

(statearr_24113_24137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24108 === (4))){
var state_24107__$1 = state_24107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24107__$1,(7),ch);
} else {
if((state_val_24108 === (6))){
var inst_24102 = (state_24107[(2)]);
var state_24107__$1 = state_24107;
var statearr_24114_24138 = state_24107__$1;
(statearr_24114_24138[(2)] = inst_24102);

(statearr_24114_24138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24108 === (3))){
var inst_24104 = (state_24107[(2)]);
var inst_24105 = cljs.core.async.close_BANG_.call(null,out);
var state_24107__$1 = (function (){var statearr_24115 = state_24107;
(statearr_24115[(9)] = inst_24104);

return statearr_24115;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24107__$1,inst_24105);
} else {
if((state_val_24108 === (2))){
var inst_24084 = (state_24107[(8)]);
var inst_24086 = (inst_24084 < n);
var state_24107__$1 = state_24107;
if(cljs.core.truth_(inst_24086)){
var statearr_24116_24139 = state_24107__$1;
(statearr_24116_24139[(1)] = (4));

} else {
var statearr_24117_24140 = state_24107__$1;
(statearr_24117_24140[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24108 === (11))){
var inst_24084 = (state_24107[(8)]);
var inst_24094 = (state_24107[(2)]);
var inst_24095 = (inst_24084 + (1));
var inst_24084__$1 = inst_24095;
var state_24107__$1 = (function (){var statearr_24118 = state_24107;
(statearr_24118[(8)] = inst_24084__$1);

(statearr_24118[(10)] = inst_24094);

return statearr_24118;
})();
var statearr_24119_24141 = state_24107__$1;
(statearr_24119_24141[(2)] = null);

(statearr_24119_24141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24108 === (9))){
var state_24107__$1 = state_24107;
var statearr_24120_24142 = state_24107__$1;
(statearr_24120_24142[(2)] = null);

(statearr_24120_24142[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24108 === (5))){
var state_24107__$1 = state_24107;
var statearr_24121_24143 = state_24107__$1;
(statearr_24121_24143[(2)] = null);

(statearr_24121_24143[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24108 === (10))){
var inst_24099 = (state_24107[(2)]);
var state_24107__$1 = state_24107;
var statearr_24122_24144 = state_24107__$1;
(statearr_24122_24144[(2)] = inst_24099);

(statearr_24122_24144[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24108 === (8))){
var inst_24089 = (state_24107[(7)]);
var state_24107__$1 = state_24107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24107__$1,(11),out,inst_24089);
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
});})(c__21970__auto___24134,out))
;
return ((function (switch__21858__auto__,c__21970__auto___24134,out){
return (function() {
var cljs$core$async$state_machine__21859__auto__ = null;
var cljs$core$async$state_machine__21859__auto____0 = (function (){
var statearr_24126 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24126[(0)] = cljs$core$async$state_machine__21859__auto__);

(statearr_24126[(1)] = (1));

return statearr_24126;
});
var cljs$core$async$state_machine__21859__auto____1 = (function (state_24107){
while(true){
var ret_value__21860__auto__ = (function (){try{while(true){
var result__21861__auto__ = switch__21858__auto__.call(null,state_24107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21861__auto__;
}
break;
}
}catch (e24127){if((e24127 instanceof Object)){
var ex__21862__auto__ = e24127;
var statearr_24128_24145 = state_24107;
(statearr_24128_24145[(5)] = ex__21862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24146 = state_24107;
state_24107 = G__24146;
continue;
} else {
return ret_value__21860__auto__;
}
break;
}
});
cljs$core$async$state_machine__21859__auto__ = function(state_24107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21859__auto____1.call(this,state_24107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21859__auto____0;
cljs$core$async$state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21859__auto____1;
return cljs$core$async$state_machine__21859__auto__;
})()
;})(switch__21858__auto__,c__21970__auto___24134,out))
})();
var state__21972__auto__ = (function (){var statearr_24129 = f__21971__auto__.call(null);
(statearr_24129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21970__auto___24134);

return statearr_24129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21972__auto__);
});})(c__21970__auto___24134,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24154 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24154 = (function (map_LT_,f,ch,meta24155){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24155 = meta24155;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24156,meta24155__$1){
var self__ = this;
var _24156__$1 = this;
return (new cljs.core.async.t_cljs$core$async24154(self__.map_LT_,self__.f,self__.ch,meta24155__$1));
});

cljs.core.async.t_cljs$core$async24154.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24156){
var self__ = this;
var _24156__$1 = this;
return self__.meta24155;
});

cljs.core.async.t_cljs$core$async24154.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24154.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24154.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24154.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24154.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24157 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24157 = (function (map_LT_,f,ch,meta24155,_,fn1,meta24158){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24155 = meta24155;
this._ = _;
this.fn1 = fn1;
this.meta24158 = meta24158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24159,meta24158__$1){
var self__ = this;
var _24159__$1 = this;
return (new cljs.core.async.t_cljs$core$async24157(self__.map_LT_,self__.f,self__.ch,self__.meta24155,self__._,self__.fn1,meta24158__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24157.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24159){
var self__ = this;
var _24159__$1 = this;
return self__.meta24158;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24157.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24157.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24157.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24157.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24147_SHARP_){
return f1.call(null,(((p1__24147_SHARP_ == null))?null:self__.f.call(null,p1__24147_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24157.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24155","meta24155",-759057068,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24154","cljs.core.async/t_cljs$core$async24154",-1388835834,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24158","meta24158",1551768939,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24157.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24157.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24157";

cljs.core.async.t_cljs$core$async24157.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17393__auto__,writer__17394__auto__,opt__17395__auto__){
return cljs.core._write.call(null,writer__17394__auto__,"cljs.core.async/t_cljs$core$async24157");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24157 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24157(map_LT___$1,f__$1,ch__$1,meta24155__$1,___$2,fn1__$1,meta24158){
return (new cljs.core.async.t_cljs$core$async24157(map_LT___$1,f__$1,ch__$1,meta24155__$1,___$2,fn1__$1,meta24158));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24157(self__.map_LT_,self__.f,self__.ch,self__.meta24155,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16783__auto__ = ret;
if(cljs.core.truth_(and__16783__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16783__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24154.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24154.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24154.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24155","meta24155",-759057068,null)], null);
});

cljs.core.async.t_cljs$core$async24154.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24154.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24154";

cljs.core.async.t_cljs$core$async24154.cljs$lang$ctorPrWriter = (function (this__17393__auto__,writer__17394__auto__,opt__17395__auto__){
return cljs.core._write.call(null,writer__17394__auto__,"cljs.core.async/t_cljs$core$async24154");
});

cljs.core.async.__GT_t_cljs$core$async24154 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24154(map_LT___$1,f__$1,ch__$1,meta24155){
return (new cljs.core.async.t_cljs$core$async24154(map_LT___$1,f__$1,ch__$1,meta24155));
});

}

return (new cljs.core.async.t_cljs$core$async24154(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24163 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24163 = (function (map_GT_,f,ch,meta24164){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24164 = meta24164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24165,meta24164__$1){
var self__ = this;
var _24165__$1 = this;
return (new cljs.core.async.t_cljs$core$async24163(self__.map_GT_,self__.f,self__.ch,meta24164__$1));
});

cljs.core.async.t_cljs$core$async24163.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24165){
var self__ = this;
var _24165__$1 = this;
return self__.meta24164;
});

cljs.core.async.t_cljs$core$async24163.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24163.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24163.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24163.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24163.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24163.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24163.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24164","meta24164",1781126693,null)], null);
});

cljs.core.async.t_cljs$core$async24163.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24163.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24163";

cljs.core.async.t_cljs$core$async24163.cljs$lang$ctorPrWriter = (function (this__17393__auto__,writer__17394__auto__,opt__17395__auto__){
return cljs.core._write.call(null,writer__17394__auto__,"cljs.core.async/t_cljs$core$async24163");
});

cljs.core.async.__GT_t_cljs$core$async24163 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24163(map_GT___$1,f__$1,ch__$1,meta24164){
return (new cljs.core.async.t_cljs$core$async24163(map_GT___$1,f__$1,ch__$1,meta24164));
});

}

return (new cljs.core.async.t_cljs$core$async24163(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24169 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24169 = (function (filter_GT_,p,ch,meta24170){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24170 = meta24170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24171,meta24170__$1){
var self__ = this;
var _24171__$1 = this;
return (new cljs.core.async.t_cljs$core$async24169(self__.filter_GT_,self__.p,self__.ch,meta24170__$1));
});

cljs.core.async.t_cljs$core$async24169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24171){
var self__ = this;
var _24171__$1 = this;
return self__.meta24170;
});

cljs.core.async.t_cljs$core$async24169.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24169.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24169.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24169.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24169.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24169.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24169.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24169.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24170","meta24170",-1904103372,null)], null);
});

cljs.core.async.t_cljs$core$async24169.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24169.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24169";

cljs.core.async.t_cljs$core$async24169.cljs$lang$ctorPrWriter = (function (this__17393__auto__,writer__17394__auto__,opt__17395__auto__){
return cljs.core._write.call(null,writer__17394__auto__,"cljs.core.async/t_cljs$core$async24169");
});

cljs.core.async.__GT_t_cljs$core$async24169 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24169(filter_GT___$1,p__$1,ch__$1,meta24170){
return (new cljs.core.async.t_cljs$core$async24169(filter_GT___$1,p__$1,ch__$1,meta24170));
});

}

return (new cljs.core.async.t_cljs$core$async24169(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args24172 = [];
var len__17853__auto___24216 = arguments.length;
var i__17854__auto___24217 = (0);
while(true){
if((i__17854__auto___24217 < len__17853__auto___24216)){
args24172.push((arguments[i__17854__auto___24217]));

var G__24218 = (i__17854__auto___24217 + (1));
i__17854__auto___24217 = G__24218;
continue;
} else {
}
break;
}

var G__24174 = args24172.length;
switch (G__24174) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24172.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21970__auto___24220 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21970__auto___24220,out){
return (function (){
var f__21971__auto__ = (function (){var switch__21858__auto__ = ((function (c__21970__auto___24220,out){
return (function (state_24195){
var state_val_24196 = (state_24195[(1)]);
if((state_val_24196 === (7))){
var inst_24191 = (state_24195[(2)]);
var state_24195__$1 = state_24195;
var statearr_24197_24221 = state_24195__$1;
(statearr_24197_24221[(2)] = inst_24191);

(statearr_24197_24221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24196 === (1))){
var state_24195__$1 = state_24195;
var statearr_24198_24222 = state_24195__$1;
(statearr_24198_24222[(2)] = null);

(statearr_24198_24222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24196 === (4))){
var inst_24177 = (state_24195[(7)]);
var inst_24177__$1 = (state_24195[(2)]);
var inst_24178 = (inst_24177__$1 == null);
var state_24195__$1 = (function (){var statearr_24199 = state_24195;
(statearr_24199[(7)] = inst_24177__$1);

return statearr_24199;
})();
if(cljs.core.truth_(inst_24178)){
var statearr_24200_24223 = state_24195__$1;
(statearr_24200_24223[(1)] = (5));

} else {
var statearr_24201_24224 = state_24195__$1;
(statearr_24201_24224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24196 === (6))){
var inst_24177 = (state_24195[(7)]);
var inst_24182 = p.call(null,inst_24177);
var state_24195__$1 = state_24195;
if(cljs.core.truth_(inst_24182)){
var statearr_24202_24225 = state_24195__$1;
(statearr_24202_24225[(1)] = (8));

} else {
var statearr_24203_24226 = state_24195__$1;
(statearr_24203_24226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24196 === (3))){
var inst_24193 = (state_24195[(2)]);
var state_24195__$1 = state_24195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24195__$1,inst_24193);
} else {
if((state_val_24196 === (2))){
var state_24195__$1 = state_24195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24195__$1,(4),ch);
} else {
if((state_val_24196 === (11))){
var inst_24185 = (state_24195[(2)]);
var state_24195__$1 = state_24195;
var statearr_24204_24227 = state_24195__$1;
(statearr_24204_24227[(2)] = inst_24185);

(statearr_24204_24227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24196 === (9))){
var state_24195__$1 = state_24195;
var statearr_24205_24228 = state_24195__$1;
(statearr_24205_24228[(2)] = null);

(statearr_24205_24228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24196 === (5))){
var inst_24180 = cljs.core.async.close_BANG_.call(null,out);
var state_24195__$1 = state_24195;
var statearr_24206_24229 = state_24195__$1;
(statearr_24206_24229[(2)] = inst_24180);

(statearr_24206_24229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24196 === (10))){
var inst_24188 = (state_24195[(2)]);
var state_24195__$1 = (function (){var statearr_24207 = state_24195;
(statearr_24207[(8)] = inst_24188);

return statearr_24207;
})();
var statearr_24208_24230 = state_24195__$1;
(statearr_24208_24230[(2)] = null);

(statearr_24208_24230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24196 === (8))){
var inst_24177 = (state_24195[(7)]);
var state_24195__$1 = state_24195;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24195__$1,(11),out,inst_24177);
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
});})(c__21970__auto___24220,out))
;
return ((function (switch__21858__auto__,c__21970__auto___24220,out){
return (function() {
var cljs$core$async$state_machine__21859__auto__ = null;
var cljs$core$async$state_machine__21859__auto____0 = (function (){
var statearr_24212 = [null,null,null,null,null,null,null,null,null];
(statearr_24212[(0)] = cljs$core$async$state_machine__21859__auto__);

(statearr_24212[(1)] = (1));

return statearr_24212;
});
var cljs$core$async$state_machine__21859__auto____1 = (function (state_24195){
while(true){
var ret_value__21860__auto__ = (function (){try{while(true){
var result__21861__auto__ = switch__21858__auto__.call(null,state_24195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21861__auto__;
}
break;
}
}catch (e24213){if((e24213 instanceof Object)){
var ex__21862__auto__ = e24213;
var statearr_24214_24231 = state_24195;
(statearr_24214_24231[(5)] = ex__21862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24232 = state_24195;
state_24195 = G__24232;
continue;
} else {
return ret_value__21860__auto__;
}
break;
}
});
cljs$core$async$state_machine__21859__auto__ = function(state_24195){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21859__auto____1.call(this,state_24195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21859__auto____0;
cljs$core$async$state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21859__auto____1;
return cljs$core$async$state_machine__21859__auto__;
})()
;})(switch__21858__auto__,c__21970__auto___24220,out))
})();
var state__21972__auto__ = (function (){var statearr_24215 = f__21971__auto__.call(null);
(statearr_24215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21970__auto___24220);

return statearr_24215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21972__auto__);
});})(c__21970__auto___24220,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24233 = [];
var len__17853__auto___24236 = arguments.length;
var i__17854__auto___24237 = (0);
while(true){
if((i__17854__auto___24237 < len__17853__auto___24236)){
args24233.push((arguments[i__17854__auto___24237]));

var G__24238 = (i__17854__auto___24237 + (1));
i__17854__auto___24237 = G__24238;
continue;
} else {
}
break;
}

var G__24235 = args24233.length;
switch (G__24235) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24233.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21970__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21970__auto__){
return (function (){
var f__21971__auto__ = (function (){var switch__21858__auto__ = ((function (c__21970__auto__){
return (function (state_24405){
var state_val_24406 = (state_24405[(1)]);
if((state_val_24406 === (7))){
var inst_24401 = (state_24405[(2)]);
var state_24405__$1 = state_24405;
var statearr_24407_24448 = state_24405__$1;
(statearr_24407_24448[(2)] = inst_24401);

(statearr_24407_24448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (20))){
var inst_24371 = (state_24405[(7)]);
var inst_24382 = (state_24405[(2)]);
var inst_24383 = cljs.core.next.call(null,inst_24371);
var inst_24357 = inst_24383;
var inst_24358 = null;
var inst_24359 = (0);
var inst_24360 = (0);
var state_24405__$1 = (function (){var statearr_24408 = state_24405;
(statearr_24408[(8)] = inst_24360);

(statearr_24408[(9)] = inst_24382);

(statearr_24408[(10)] = inst_24357);

(statearr_24408[(11)] = inst_24358);

(statearr_24408[(12)] = inst_24359);

return statearr_24408;
})();
var statearr_24409_24449 = state_24405__$1;
(statearr_24409_24449[(2)] = null);

(statearr_24409_24449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (1))){
var state_24405__$1 = state_24405;
var statearr_24410_24450 = state_24405__$1;
(statearr_24410_24450[(2)] = null);

(statearr_24410_24450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (4))){
var inst_24346 = (state_24405[(13)]);
var inst_24346__$1 = (state_24405[(2)]);
var inst_24347 = (inst_24346__$1 == null);
var state_24405__$1 = (function (){var statearr_24411 = state_24405;
(statearr_24411[(13)] = inst_24346__$1);

return statearr_24411;
})();
if(cljs.core.truth_(inst_24347)){
var statearr_24412_24451 = state_24405__$1;
(statearr_24412_24451[(1)] = (5));

} else {
var statearr_24413_24452 = state_24405__$1;
(statearr_24413_24452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (15))){
var state_24405__$1 = state_24405;
var statearr_24417_24453 = state_24405__$1;
(statearr_24417_24453[(2)] = null);

(statearr_24417_24453[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (21))){
var state_24405__$1 = state_24405;
var statearr_24418_24454 = state_24405__$1;
(statearr_24418_24454[(2)] = null);

(statearr_24418_24454[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (13))){
var inst_24360 = (state_24405[(8)]);
var inst_24357 = (state_24405[(10)]);
var inst_24358 = (state_24405[(11)]);
var inst_24359 = (state_24405[(12)]);
var inst_24367 = (state_24405[(2)]);
var inst_24368 = (inst_24360 + (1));
var tmp24414 = inst_24357;
var tmp24415 = inst_24358;
var tmp24416 = inst_24359;
var inst_24357__$1 = tmp24414;
var inst_24358__$1 = tmp24415;
var inst_24359__$1 = tmp24416;
var inst_24360__$1 = inst_24368;
var state_24405__$1 = (function (){var statearr_24419 = state_24405;
(statearr_24419[(8)] = inst_24360__$1);

(statearr_24419[(14)] = inst_24367);

(statearr_24419[(10)] = inst_24357__$1);

(statearr_24419[(11)] = inst_24358__$1);

(statearr_24419[(12)] = inst_24359__$1);

return statearr_24419;
})();
var statearr_24420_24455 = state_24405__$1;
(statearr_24420_24455[(2)] = null);

(statearr_24420_24455[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (22))){
var state_24405__$1 = state_24405;
var statearr_24421_24456 = state_24405__$1;
(statearr_24421_24456[(2)] = null);

(statearr_24421_24456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (6))){
var inst_24346 = (state_24405[(13)]);
var inst_24355 = f.call(null,inst_24346);
var inst_24356 = cljs.core.seq.call(null,inst_24355);
var inst_24357 = inst_24356;
var inst_24358 = null;
var inst_24359 = (0);
var inst_24360 = (0);
var state_24405__$1 = (function (){var statearr_24422 = state_24405;
(statearr_24422[(8)] = inst_24360);

(statearr_24422[(10)] = inst_24357);

(statearr_24422[(11)] = inst_24358);

(statearr_24422[(12)] = inst_24359);

return statearr_24422;
})();
var statearr_24423_24457 = state_24405__$1;
(statearr_24423_24457[(2)] = null);

(statearr_24423_24457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (17))){
var inst_24371 = (state_24405[(7)]);
var inst_24375 = cljs.core.chunk_first.call(null,inst_24371);
var inst_24376 = cljs.core.chunk_rest.call(null,inst_24371);
var inst_24377 = cljs.core.count.call(null,inst_24375);
var inst_24357 = inst_24376;
var inst_24358 = inst_24375;
var inst_24359 = inst_24377;
var inst_24360 = (0);
var state_24405__$1 = (function (){var statearr_24424 = state_24405;
(statearr_24424[(8)] = inst_24360);

(statearr_24424[(10)] = inst_24357);

(statearr_24424[(11)] = inst_24358);

(statearr_24424[(12)] = inst_24359);

return statearr_24424;
})();
var statearr_24425_24458 = state_24405__$1;
(statearr_24425_24458[(2)] = null);

(statearr_24425_24458[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (3))){
var inst_24403 = (state_24405[(2)]);
var state_24405__$1 = state_24405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24405__$1,inst_24403);
} else {
if((state_val_24406 === (12))){
var inst_24391 = (state_24405[(2)]);
var state_24405__$1 = state_24405;
var statearr_24426_24459 = state_24405__$1;
(statearr_24426_24459[(2)] = inst_24391);

(statearr_24426_24459[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (2))){
var state_24405__$1 = state_24405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24405__$1,(4),in$);
} else {
if((state_val_24406 === (23))){
var inst_24399 = (state_24405[(2)]);
var state_24405__$1 = state_24405;
var statearr_24427_24460 = state_24405__$1;
(statearr_24427_24460[(2)] = inst_24399);

(statearr_24427_24460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (19))){
var inst_24386 = (state_24405[(2)]);
var state_24405__$1 = state_24405;
var statearr_24428_24461 = state_24405__$1;
(statearr_24428_24461[(2)] = inst_24386);

(statearr_24428_24461[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (11))){
var inst_24357 = (state_24405[(10)]);
var inst_24371 = (state_24405[(7)]);
var inst_24371__$1 = cljs.core.seq.call(null,inst_24357);
var state_24405__$1 = (function (){var statearr_24429 = state_24405;
(statearr_24429[(7)] = inst_24371__$1);

return statearr_24429;
})();
if(inst_24371__$1){
var statearr_24430_24462 = state_24405__$1;
(statearr_24430_24462[(1)] = (14));

} else {
var statearr_24431_24463 = state_24405__$1;
(statearr_24431_24463[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (9))){
var inst_24393 = (state_24405[(2)]);
var inst_24394 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24405__$1 = (function (){var statearr_24432 = state_24405;
(statearr_24432[(15)] = inst_24393);

return statearr_24432;
})();
if(cljs.core.truth_(inst_24394)){
var statearr_24433_24464 = state_24405__$1;
(statearr_24433_24464[(1)] = (21));

} else {
var statearr_24434_24465 = state_24405__$1;
(statearr_24434_24465[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (5))){
var inst_24349 = cljs.core.async.close_BANG_.call(null,out);
var state_24405__$1 = state_24405;
var statearr_24435_24466 = state_24405__$1;
(statearr_24435_24466[(2)] = inst_24349);

(statearr_24435_24466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (14))){
var inst_24371 = (state_24405[(7)]);
var inst_24373 = cljs.core.chunked_seq_QMARK_.call(null,inst_24371);
var state_24405__$1 = state_24405;
if(inst_24373){
var statearr_24436_24467 = state_24405__$1;
(statearr_24436_24467[(1)] = (17));

} else {
var statearr_24437_24468 = state_24405__$1;
(statearr_24437_24468[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (16))){
var inst_24389 = (state_24405[(2)]);
var state_24405__$1 = state_24405;
var statearr_24438_24469 = state_24405__$1;
(statearr_24438_24469[(2)] = inst_24389);

(statearr_24438_24469[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24406 === (10))){
var inst_24360 = (state_24405[(8)]);
var inst_24358 = (state_24405[(11)]);
var inst_24365 = cljs.core._nth.call(null,inst_24358,inst_24360);
var state_24405__$1 = state_24405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24405__$1,(13),out,inst_24365);
} else {
if((state_val_24406 === (18))){
var inst_24371 = (state_24405[(7)]);
var inst_24380 = cljs.core.first.call(null,inst_24371);
var state_24405__$1 = state_24405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24405__$1,(20),out,inst_24380);
} else {
if((state_val_24406 === (8))){
var inst_24360 = (state_24405[(8)]);
var inst_24359 = (state_24405[(12)]);
var inst_24362 = (inst_24360 < inst_24359);
var inst_24363 = inst_24362;
var state_24405__$1 = state_24405;
if(cljs.core.truth_(inst_24363)){
var statearr_24439_24470 = state_24405__$1;
(statearr_24439_24470[(1)] = (10));

} else {
var statearr_24440_24471 = state_24405__$1;
(statearr_24440_24471[(1)] = (11));

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
});})(c__21970__auto__))
;
return ((function (switch__21858__auto__,c__21970__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21859__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21859__auto____0 = (function (){
var statearr_24444 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24444[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21859__auto__);

(statearr_24444[(1)] = (1));

return statearr_24444;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21859__auto____1 = (function (state_24405){
while(true){
var ret_value__21860__auto__ = (function (){try{while(true){
var result__21861__auto__ = switch__21858__auto__.call(null,state_24405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21861__auto__;
}
break;
}
}catch (e24445){if((e24445 instanceof Object)){
var ex__21862__auto__ = e24445;
var statearr_24446_24472 = state_24405;
(statearr_24446_24472[(5)] = ex__21862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24473 = state_24405;
state_24405 = G__24473;
continue;
} else {
return ret_value__21860__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21859__auto__ = function(state_24405){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21859__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21859__auto____1.call(this,state_24405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21859__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21859__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21859__auto__;
})()
;})(switch__21858__auto__,c__21970__auto__))
})();
var state__21972__auto__ = (function (){var statearr_24447 = f__21971__auto__.call(null);
(statearr_24447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21970__auto__);

return statearr_24447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21972__auto__);
});})(c__21970__auto__))
);

return c__21970__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24474 = [];
var len__17853__auto___24477 = arguments.length;
var i__17854__auto___24478 = (0);
while(true){
if((i__17854__auto___24478 < len__17853__auto___24477)){
args24474.push((arguments[i__17854__auto___24478]));

var G__24479 = (i__17854__auto___24478 + (1));
i__17854__auto___24478 = G__24479;
continue;
} else {
}
break;
}

var G__24476 = args24474.length;
switch (G__24476) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24474.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args24481 = [];
var len__17853__auto___24484 = arguments.length;
var i__17854__auto___24485 = (0);
while(true){
if((i__17854__auto___24485 < len__17853__auto___24484)){
args24481.push((arguments[i__17854__auto___24485]));

var G__24486 = (i__17854__auto___24485 + (1));
i__17854__auto___24485 = G__24486;
continue;
} else {
}
break;
}

var G__24483 = args24481.length;
switch (G__24483) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24481.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args24488 = [];
var len__17853__auto___24539 = arguments.length;
var i__17854__auto___24540 = (0);
while(true){
if((i__17854__auto___24540 < len__17853__auto___24539)){
args24488.push((arguments[i__17854__auto___24540]));

var G__24541 = (i__17854__auto___24540 + (1));
i__17854__auto___24540 = G__24541;
continue;
} else {
}
break;
}

var G__24490 = args24488.length;
switch (G__24490) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24488.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21970__auto___24543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21970__auto___24543,out){
return (function (){
var f__21971__auto__ = (function (){var switch__21858__auto__ = ((function (c__21970__auto___24543,out){
return (function (state_24514){
var state_val_24515 = (state_24514[(1)]);
if((state_val_24515 === (7))){
var inst_24509 = (state_24514[(2)]);
var state_24514__$1 = state_24514;
var statearr_24516_24544 = state_24514__$1;
(statearr_24516_24544[(2)] = inst_24509);

(statearr_24516_24544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (1))){
var inst_24491 = null;
var state_24514__$1 = (function (){var statearr_24517 = state_24514;
(statearr_24517[(7)] = inst_24491);

return statearr_24517;
})();
var statearr_24518_24545 = state_24514__$1;
(statearr_24518_24545[(2)] = null);

(statearr_24518_24545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (4))){
var inst_24494 = (state_24514[(8)]);
var inst_24494__$1 = (state_24514[(2)]);
var inst_24495 = (inst_24494__$1 == null);
var inst_24496 = cljs.core.not.call(null,inst_24495);
var state_24514__$1 = (function (){var statearr_24519 = state_24514;
(statearr_24519[(8)] = inst_24494__$1);

return statearr_24519;
})();
if(inst_24496){
var statearr_24520_24546 = state_24514__$1;
(statearr_24520_24546[(1)] = (5));

} else {
var statearr_24521_24547 = state_24514__$1;
(statearr_24521_24547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (6))){
var state_24514__$1 = state_24514;
var statearr_24522_24548 = state_24514__$1;
(statearr_24522_24548[(2)] = null);

(statearr_24522_24548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (3))){
var inst_24511 = (state_24514[(2)]);
var inst_24512 = cljs.core.async.close_BANG_.call(null,out);
var state_24514__$1 = (function (){var statearr_24523 = state_24514;
(statearr_24523[(9)] = inst_24511);

return statearr_24523;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24514__$1,inst_24512);
} else {
if((state_val_24515 === (2))){
var state_24514__$1 = state_24514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24514__$1,(4),ch);
} else {
if((state_val_24515 === (11))){
var inst_24494 = (state_24514[(8)]);
var inst_24503 = (state_24514[(2)]);
var inst_24491 = inst_24494;
var state_24514__$1 = (function (){var statearr_24524 = state_24514;
(statearr_24524[(10)] = inst_24503);

(statearr_24524[(7)] = inst_24491);

return statearr_24524;
})();
var statearr_24525_24549 = state_24514__$1;
(statearr_24525_24549[(2)] = null);

(statearr_24525_24549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (9))){
var inst_24494 = (state_24514[(8)]);
var state_24514__$1 = state_24514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24514__$1,(11),out,inst_24494);
} else {
if((state_val_24515 === (5))){
var inst_24494 = (state_24514[(8)]);
var inst_24491 = (state_24514[(7)]);
var inst_24498 = cljs.core._EQ_.call(null,inst_24494,inst_24491);
var state_24514__$1 = state_24514;
if(inst_24498){
var statearr_24527_24550 = state_24514__$1;
(statearr_24527_24550[(1)] = (8));

} else {
var statearr_24528_24551 = state_24514__$1;
(statearr_24528_24551[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (10))){
var inst_24506 = (state_24514[(2)]);
var state_24514__$1 = state_24514;
var statearr_24529_24552 = state_24514__$1;
(statearr_24529_24552[(2)] = inst_24506);

(statearr_24529_24552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24515 === (8))){
var inst_24491 = (state_24514[(7)]);
var tmp24526 = inst_24491;
var inst_24491__$1 = tmp24526;
var state_24514__$1 = (function (){var statearr_24530 = state_24514;
(statearr_24530[(7)] = inst_24491__$1);

return statearr_24530;
})();
var statearr_24531_24553 = state_24514__$1;
(statearr_24531_24553[(2)] = null);

(statearr_24531_24553[(1)] = (2));


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
});})(c__21970__auto___24543,out))
;
return ((function (switch__21858__auto__,c__21970__auto___24543,out){
return (function() {
var cljs$core$async$state_machine__21859__auto__ = null;
var cljs$core$async$state_machine__21859__auto____0 = (function (){
var statearr_24535 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24535[(0)] = cljs$core$async$state_machine__21859__auto__);

(statearr_24535[(1)] = (1));

return statearr_24535;
});
var cljs$core$async$state_machine__21859__auto____1 = (function (state_24514){
while(true){
var ret_value__21860__auto__ = (function (){try{while(true){
var result__21861__auto__ = switch__21858__auto__.call(null,state_24514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21861__auto__;
}
break;
}
}catch (e24536){if((e24536 instanceof Object)){
var ex__21862__auto__ = e24536;
var statearr_24537_24554 = state_24514;
(statearr_24537_24554[(5)] = ex__21862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24555 = state_24514;
state_24514 = G__24555;
continue;
} else {
return ret_value__21860__auto__;
}
break;
}
});
cljs$core$async$state_machine__21859__auto__ = function(state_24514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21859__auto____1.call(this,state_24514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21859__auto____0;
cljs$core$async$state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21859__auto____1;
return cljs$core$async$state_machine__21859__auto__;
})()
;})(switch__21858__auto__,c__21970__auto___24543,out))
})();
var state__21972__auto__ = (function (){var statearr_24538 = f__21971__auto__.call(null);
(statearr_24538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21970__auto___24543);

return statearr_24538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21972__auto__);
});})(c__21970__auto___24543,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24556 = [];
var len__17853__auto___24626 = arguments.length;
var i__17854__auto___24627 = (0);
while(true){
if((i__17854__auto___24627 < len__17853__auto___24626)){
args24556.push((arguments[i__17854__auto___24627]));

var G__24628 = (i__17854__auto___24627 + (1));
i__17854__auto___24627 = G__24628;
continue;
} else {
}
break;
}

var G__24558 = args24556.length;
switch (G__24558) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24556.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21970__auto___24630 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21970__auto___24630,out){
return (function (){
var f__21971__auto__ = (function (){var switch__21858__auto__ = ((function (c__21970__auto___24630,out){
return (function (state_24596){
var state_val_24597 = (state_24596[(1)]);
if((state_val_24597 === (7))){
var inst_24592 = (state_24596[(2)]);
var state_24596__$1 = state_24596;
var statearr_24598_24631 = state_24596__$1;
(statearr_24598_24631[(2)] = inst_24592);

(statearr_24598_24631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24597 === (1))){
var inst_24559 = (new Array(n));
var inst_24560 = inst_24559;
var inst_24561 = (0);
var state_24596__$1 = (function (){var statearr_24599 = state_24596;
(statearr_24599[(7)] = inst_24560);

(statearr_24599[(8)] = inst_24561);

return statearr_24599;
})();
var statearr_24600_24632 = state_24596__$1;
(statearr_24600_24632[(2)] = null);

(statearr_24600_24632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24597 === (4))){
var inst_24564 = (state_24596[(9)]);
var inst_24564__$1 = (state_24596[(2)]);
var inst_24565 = (inst_24564__$1 == null);
var inst_24566 = cljs.core.not.call(null,inst_24565);
var state_24596__$1 = (function (){var statearr_24601 = state_24596;
(statearr_24601[(9)] = inst_24564__$1);

return statearr_24601;
})();
if(inst_24566){
var statearr_24602_24633 = state_24596__$1;
(statearr_24602_24633[(1)] = (5));

} else {
var statearr_24603_24634 = state_24596__$1;
(statearr_24603_24634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24597 === (15))){
var inst_24586 = (state_24596[(2)]);
var state_24596__$1 = state_24596;
var statearr_24604_24635 = state_24596__$1;
(statearr_24604_24635[(2)] = inst_24586);

(statearr_24604_24635[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24597 === (13))){
var state_24596__$1 = state_24596;
var statearr_24605_24636 = state_24596__$1;
(statearr_24605_24636[(2)] = null);

(statearr_24605_24636[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24597 === (6))){
var inst_24561 = (state_24596[(8)]);
var inst_24582 = (inst_24561 > (0));
var state_24596__$1 = state_24596;
if(cljs.core.truth_(inst_24582)){
var statearr_24606_24637 = state_24596__$1;
(statearr_24606_24637[(1)] = (12));

} else {
var statearr_24607_24638 = state_24596__$1;
(statearr_24607_24638[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24597 === (3))){
var inst_24594 = (state_24596[(2)]);
var state_24596__$1 = state_24596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24596__$1,inst_24594);
} else {
if((state_val_24597 === (12))){
var inst_24560 = (state_24596[(7)]);
var inst_24584 = cljs.core.vec.call(null,inst_24560);
var state_24596__$1 = state_24596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24596__$1,(15),out,inst_24584);
} else {
if((state_val_24597 === (2))){
var state_24596__$1 = state_24596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24596__$1,(4),ch);
} else {
if((state_val_24597 === (11))){
var inst_24576 = (state_24596[(2)]);
var inst_24577 = (new Array(n));
var inst_24560 = inst_24577;
var inst_24561 = (0);
var state_24596__$1 = (function (){var statearr_24608 = state_24596;
(statearr_24608[(7)] = inst_24560);

(statearr_24608[(8)] = inst_24561);

(statearr_24608[(10)] = inst_24576);

return statearr_24608;
})();
var statearr_24609_24639 = state_24596__$1;
(statearr_24609_24639[(2)] = null);

(statearr_24609_24639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24597 === (9))){
var inst_24560 = (state_24596[(7)]);
var inst_24574 = cljs.core.vec.call(null,inst_24560);
var state_24596__$1 = state_24596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24596__$1,(11),out,inst_24574);
} else {
if((state_val_24597 === (5))){
var inst_24564 = (state_24596[(9)]);
var inst_24560 = (state_24596[(7)]);
var inst_24569 = (state_24596[(11)]);
var inst_24561 = (state_24596[(8)]);
var inst_24568 = (inst_24560[inst_24561] = inst_24564);
var inst_24569__$1 = (inst_24561 + (1));
var inst_24570 = (inst_24569__$1 < n);
var state_24596__$1 = (function (){var statearr_24610 = state_24596;
(statearr_24610[(12)] = inst_24568);

(statearr_24610[(11)] = inst_24569__$1);

return statearr_24610;
})();
if(cljs.core.truth_(inst_24570)){
var statearr_24611_24640 = state_24596__$1;
(statearr_24611_24640[(1)] = (8));

} else {
var statearr_24612_24641 = state_24596__$1;
(statearr_24612_24641[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24597 === (14))){
var inst_24589 = (state_24596[(2)]);
var inst_24590 = cljs.core.async.close_BANG_.call(null,out);
var state_24596__$1 = (function (){var statearr_24614 = state_24596;
(statearr_24614[(13)] = inst_24589);

return statearr_24614;
})();
var statearr_24615_24642 = state_24596__$1;
(statearr_24615_24642[(2)] = inst_24590);

(statearr_24615_24642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24597 === (10))){
var inst_24580 = (state_24596[(2)]);
var state_24596__$1 = state_24596;
var statearr_24616_24643 = state_24596__$1;
(statearr_24616_24643[(2)] = inst_24580);

(statearr_24616_24643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24597 === (8))){
var inst_24560 = (state_24596[(7)]);
var inst_24569 = (state_24596[(11)]);
var tmp24613 = inst_24560;
var inst_24560__$1 = tmp24613;
var inst_24561 = inst_24569;
var state_24596__$1 = (function (){var statearr_24617 = state_24596;
(statearr_24617[(7)] = inst_24560__$1);

(statearr_24617[(8)] = inst_24561);

return statearr_24617;
})();
var statearr_24618_24644 = state_24596__$1;
(statearr_24618_24644[(2)] = null);

(statearr_24618_24644[(1)] = (2));


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
});})(c__21970__auto___24630,out))
;
return ((function (switch__21858__auto__,c__21970__auto___24630,out){
return (function() {
var cljs$core$async$state_machine__21859__auto__ = null;
var cljs$core$async$state_machine__21859__auto____0 = (function (){
var statearr_24622 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24622[(0)] = cljs$core$async$state_machine__21859__auto__);

(statearr_24622[(1)] = (1));

return statearr_24622;
});
var cljs$core$async$state_machine__21859__auto____1 = (function (state_24596){
while(true){
var ret_value__21860__auto__ = (function (){try{while(true){
var result__21861__auto__ = switch__21858__auto__.call(null,state_24596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21861__auto__;
}
break;
}
}catch (e24623){if((e24623 instanceof Object)){
var ex__21862__auto__ = e24623;
var statearr_24624_24645 = state_24596;
(statearr_24624_24645[(5)] = ex__21862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24646 = state_24596;
state_24596 = G__24646;
continue;
} else {
return ret_value__21860__auto__;
}
break;
}
});
cljs$core$async$state_machine__21859__auto__ = function(state_24596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21859__auto____1.call(this,state_24596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21859__auto____0;
cljs$core$async$state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21859__auto____1;
return cljs$core$async$state_machine__21859__auto__;
})()
;})(switch__21858__auto__,c__21970__auto___24630,out))
})();
var state__21972__auto__ = (function (){var statearr_24625 = f__21971__auto__.call(null);
(statearr_24625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21970__auto___24630);

return statearr_24625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21972__auto__);
});})(c__21970__auto___24630,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24647 = [];
var len__17853__auto___24721 = arguments.length;
var i__17854__auto___24722 = (0);
while(true){
if((i__17854__auto___24722 < len__17853__auto___24721)){
args24647.push((arguments[i__17854__auto___24722]));

var G__24723 = (i__17854__auto___24722 + (1));
i__17854__auto___24722 = G__24723;
continue;
} else {
}
break;
}

var G__24649 = args24647.length;
switch (G__24649) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24647.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21970__auto___24725 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21970__auto___24725,out){
return (function (){
var f__21971__auto__ = (function (){var switch__21858__auto__ = ((function (c__21970__auto___24725,out){
return (function (state_24691){
var state_val_24692 = (state_24691[(1)]);
if((state_val_24692 === (7))){
var inst_24687 = (state_24691[(2)]);
var state_24691__$1 = state_24691;
var statearr_24693_24726 = state_24691__$1;
(statearr_24693_24726[(2)] = inst_24687);

(statearr_24693_24726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (1))){
var inst_24650 = [];
var inst_24651 = inst_24650;
var inst_24652 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24691__$1 = (function (){var statearr_24694 = state_24691;
(statearr_24694[(7)] = inst_24651);

(statearr_24694[(8)] = inst_24652);

return statearr_24694;
})();
var statearr_24695_24727 = state_24691__$1;
(statearr_24695_24727[(2)] = null);

(statearr_24695_24727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (4))){
var inst_24655 = (state_24691[(9)]);
var inst_24655__$1 = (state_24691[(2)]);
var inst_24656 = (inst_24655__$1 == null);
var inst_24657 = cljs.core.not.call(null,inst_24656);
var state_24691__$1 = (function (){var statearr_24696 = state_24691;
(statearr_24696[(9)] = inst_24655__$1);

return statearr_24696;
})();
if(inst_24657){
var statearr_24697_24728 = state_24691__$1;
(statearr_24697_24728[(1)] = (5));

} else {
var statearr_24698_24729 = state_24691__$1;
(statearr_24698_24729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (15))){
var inst_24681 = (state_24691[(2)]);
var state_24691__$1 = state_24691;
var statearr_24699_24730 = state_24691__$1;
(statearr_24699_24730[(2)] = inst_24681);

(statearr_24699_24730[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (13))){
var state_24691__$1 = state_24691;
var statearr_24700_24731 = state_24691__$1;
(statearr_24700_24731[(2)] = null);

(statearr_24700_24731[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (6))){
var inst_24651 = (state_24691[(7)]);
var inst_24676 = inst_24651.length;
var inst_24677 = (inst_24676 > (0));
var state_24691__$1 = state_24691;
if(cljs.core.truth_(inst_24677)){
var statearr_24701_24732 = state_24691__$1;
(statearr_24701_24732[(1)] = (12));

} else {
var statearr_24702_24733 = state_24691__$1;
(statearr_24702_24733[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (3))){
var inst_24689 = (state_24691[(2)]);
var state_24691__$1 = state_24691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24691__$1,inst_24689);
} else {
if((state_val_24692 === (12))){
var inst_24651 = (state_24691[(7)]);
var inst_24679 = cljs.core.vec.call(null,inst_24651);
var state_24691__$1 = state_24691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24691__$1,(15),out,inst_24679);
} else {
if((state_val_24692 === (2))){
var state_24691__$1 = state_24691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24691__$1,(4),ch);
} else {
if((state_val_24692 === (11))){
var inst_24659 = (state_24691[(10)]);
var inst_24655 = (state_24691[(9)]);
var inst_24669 = (state_24691[(2)]);
var inst_24670 = [];
var inst_24671 = inst_24670.push(inst_24655);
var inst_24651 = inst_24670;
var inst_24652 = inst_24659;
var state_24691__$1 = (function (){var statearr_24703 = state_24691;
(statearr_24703[(11)] = inst_24671);

(statearr_24703[(7)] = inst_24651);

(statearr_24703[(12)] = inst_24669);

(statearr_24703[(8)] = inst_24652);

return statearr_24703;
})();
var statearr_24704_24734 = state_24691__$1;
(statearr_24704_24734[(2)] = null);

(statearr_24704_24734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (9))){
var inst_24651 = (state_24691[(7)]);
var inst_24667 = cljs.core.vec.call(null,inst_24651);
var state_24691__$1 = state_24691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24691__$1,(11),out,inst_24667);
} else {
if((state_val_24692 === (5))){
var inst_24659 = (state_24691[(10)]);
var inst_24655 = (state_24691[(9)]);
var inst_24652 = (state_24691[(8)]);
var inst_24659__$1 = f.call(null,inst_24655);
var inst_24660 = cljs.core._EQ_.call(null,inst_24659__$1,inst_24652);
var inst_24661 = cljs.core.keyword_identical_QMARK_.call(null,inst_24652,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24662 = (inst_24660) || (inst_24661);
var state_24691__$1 = (function (){var statearr_24705 = state_24691;
(statearr_24705[(10)] = inst_24659__$1);

return statearr_24705;
})();
if(cljs.core.truth_(inst_24662)){
var statearr_24706_24735 = state_24691__$1;
(statearr_24706_24735[(1)] = (8));

} else {
var statearr_24707_24736 = state_24691__$1;
(statearr_24707_24736[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (14))){
var inst_24684 = (state_24691[(2)]);
var inst_24685 = cljs.core.async.close_BANG_.call(null,out);
var state_24691__$1 = (function (){var statearr_24709 = state_24691;
(statearr_24709[(13)] = inst_24684);

return statearr_24709;
})();
var statearr_24710_24737 = state_24691__$1;
(statearr_24710_24737[(2)] = inst_24685);

(statearr_24710_24737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (10))){
var inst_24674 = (state_24691[(2)]);
var state_24691__$1 = state_24691;
var statearr_24711_24738 = state_24691__$1;
(statearr_24711_24738[(2)] = inst_24674);

(statearr_24711_24738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (8))){
var inst_24659 = (state_24691[(10)]);
var inst_24655 = (state_24691[(9)]);
var inst_24651 = (state_24691[(7)]);
var inst_24664 = inst_24651.push(inst_24655);
var tmp24708 = inst_24651;
var inst_24651__$1 = tmp24708;
var inst_24652 = inst_24659;
var state_24691__$1 = (function (){var statearr_24712 = state_24691;
(statearr_24712[(14)] = inst_24664);

(statearr_24712[(7)] = inst_24651__$1);

(statearr_24712[(8)] = inst_24652);

return statearr_24712;
})();
var statearr_24713_24739 = state_24691__$1;
(statearr_24713_24739[(2)] = null);

(statearr_24713_24739[(1)] = (2));


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
});})(c__21970__auto___24725,out))
;
return ((function (switch__21858__auto__,c__21970__auto___24725,out){
return (function() {
var cljs$core$async$state_machine__21859__auto__ = null;
var cljs$core$async$state_machine__21859__auto____0 = (function (){
var statearr_24717 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24717[(0)] = cljs$core$async$state_machine__21859__auto__);

(statearr_24717[(1)] = (1));

return statearr_24717;
});
var cljs$core$async$state_machine__21859__auto____1 = (function (state_24691){
while(true){
var ret_value__21860__auto__ = (function (){try{while(true){
var result__21861__auto__ = switch__21858__auto__.call(null,state_24691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21861__auto__;
}
break;
}
}catch (e24718){if((e24718 instanceof Object)){
var ex__21862__auto__ = e24718;
var statearr_24719_24740 = state_24691;
(statearr_24719_24740[(5)] = ex__21862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24741 = state_24691;
state_24691 = G__24741;
continue;
} else {
return ret_value__21860__auto__;
}
break;
}
});
cljs$core$async$state_machine__21859__auto__ = function(state_24691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21859__auto____1.call(this,state_24691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21859__auto____0;
cljs$core$async$state_machine__21859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21859__auto____1;
return cljs$core$async$state_machine__21859__auto__;
})()
;})(switch__21858__auto__,c__21970__auto___24725,out))
})();
var state__21972__auto__ = (function (){var statearr_24720 = f__21971__auto__.call(null);
(statearr_24720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21970__auto___24725);

return statearr_24720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21972__auto__);
});})(c__21970__auto___24725,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map