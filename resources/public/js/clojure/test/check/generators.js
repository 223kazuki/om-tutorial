// Compiled by ClojureScript 1.7.170 {}
goog.provide('clojure.test.check.generators');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.test.check.rose_tree');
goog.require('cljs.core');
goog.require('clojure.test.check.random');
goog.require('goog.testing.PseudoRandom');
goog.require('clojure.string');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
clojure.test.check.generators.Generator = (function (gen,__meta,__extmap,__hash){
this.gen = gen;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
clojure.test.check.generators.Generator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17409__auto__,k__17410__auto__){
var self__ = this;
var this__17409__auto____$1 = this;
return cljs.core._lookup.call(null,this__17409__auto____$1,k__17410__auto__,null);
});

clojure.test.check.generators.Generator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17411__auto__,k28892,else__17412__auto__){
var self__ = this;
var this__17411__auto____$1 = this;
var G__28894 = (((k28892 instanceof cljs.core.Keyword))?k28892.fqn:null);
switch (G__28894) {
case "gen":
return self__.gen;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28892,else__17412__auto__);

}
});

clojure.test.check.generators.Generator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17423__auto__,writer__17424__auto__,opts__17425__auto__){
var self__ = this;
var this__17423__auto____$1 = this;
var pr_pair__17426__auto__ = ((function (this__17423__auto____$1){
return (function (keyval__17427__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17424__auto__,cljs.core.pr_writer,""," ","",opts__17425__auto__,keyval__17427__auto__);
});})(this__17423__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17424__auto__,pr_pair__17426__auto__,"#clojure.test.check.generators.Generator{",", ","}",opts__17425__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gen","gen",142575302),self__.gen],null))], null),self__.__extmap));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IIterable$ = true;

clojure.test.check.generators.Generator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28891){
var self__ = this;
var G__28891__$1 = this;
return (new cljs.core.RecordIter((0),G__28891__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen","gen",142575302)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17407__auto__){
var self__ = this;
var this__17407__auto____$1 = this;
return self__.__meta;
});

clojure.test.check.generators.Generator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17403__auto__){
var self__ = this;
var this__17403__auto____$1 = this;
return (new clojure.test.check.generators.Generator(self__.gen,self__.__meta,self__.__extmap,self__.__hash));
});

clojure.test.check.generators.Generator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17413__auto__){
var self__ = this;
var this__17413__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17404__auto__){
var self__ = this;
var this__17404__auto____$1 = this;
var h__17230__auto__ = self__.__hash;
if(!((h__17230__auto__ == null))){
return h__17230__auto__;
} else {
var h__17230__auto____$1 = cljs.core.hash_imap.call(null,this__17404__auto____$1);
self__.__hash = h__17230__auto____$1;

return h__17230__auto____$1;
}
});

clojure.test.check.generators.Generator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17405__auto__,other__17406__auto__){
var self__ = this;
var this__17405__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16783__auto__ = other__17406__auto__;
if(cljs.core.truth_(and__16783__auto__)){
var and__16783__auto____$1 = (this__17405__auto____$1.constructor === other__17406__auto__.constructor);
if(and__16783__auto____$1){
return cljs.core.equiv_map.call(null,this__17405__auto____$1,other__17406__auto__);
} else {
return and__16783__auto____$1;
}
} else {
return and__16783__auto__;
}
})())){
return true;
} else {
return false;
}
});

clojure.test.check.generators.Generator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17418__auto__,k__17419__auto__){
var self__ = this;
var this__17418__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gen","gen",142575302),null], null), null),k__17419__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17418__auto____$1),self__.__meta),k__17419__auto__);
} else {
return (new clojure.test.check.generators.Generator(self__.gen,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17419__auto__)),null));
}
});

clojure.test.check.generators.Generator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17416__auto__,k__17417__auto__,G__28891){
var self__ = this;
var this__17416__auto____$1 = this;
var pred__28895 = cljs.core.keyword_identical_QMARK_;
var expr__28896 = k__17417__auto__;
if(cljs.core.truth_(pred__28895.call(null,new cljs.core.Keyword(null,"gen","gen",142575302),expr__28896))){
return (new clojure.test.check.generators.Generator(G__28891,self__.__meta,self__.__extmap,null));
} else {
return (new clojure.test.check.generators.Generator(self__.gen,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17417__auto__,G__28891),null));
}
});

clojure.test.check.generators.Generator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17421__auto__){
var self__ = this;
var this__17421__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gen","gen",142575302),self__.gen],null))], null),self__.__extmap));
});

clojure.test.check.generators.Generator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17408__auto__,G__28891){
var self__ = this;
var this__17408__auto____$1 = this;
return (new clojure.test.check.generators.Generator(self__.gen,G__28891,self__.__extmap,self__.__hash));
});

clojure.test.check.generators.Generator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17414__auto__,entry__17415__auto__){
var self__ = this;
var this__17414__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17415__auto__)){
return cljs.core._assoc.call(null,this__17414__auto____$1,cljs.core._nth.call(null,entry__17415__auto__,(0)),cljs.core._nth.call(null,entry__17415__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17414__auto____$1,entry__17415__auto__);
}
});

clojure.test.check.generators.Generator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",1783106829,null)], null);
});

clojure.test.check.generators.Generator.cljs$lang$type = true;

clojure.test.check.generators.Generator.cljs$lang$ctorPrSeq = (function (this__17443__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"clojure.test.check.generators/Generator");
});

clojure.test.check.generators.Generator.cljs$lang$ctorPrWriter = (function (this__17443__auto__,writer__17444__auto__){
return cljs.core._write.call(null,writer__17444__auto__,"clojure.test.check.generators/Generator");
});

clojure.test.check.generators.__GT_Generator = (function clojure$test$check$generators$__GT_Generator(gen){
return (new clojure.test.check.generators.Generator(gen,null,null,null));
});

clojure.test.check.generators.map__GT_Generator = (function clojure$test$check$generators$map__GT_Generator(G__28893){
return (new clojure.test.check.generators.Generator(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(G__28893),null,cljs.core.dissoc.call(null,G__28893,new cljs.core.Keyword(null,"gen","gen",142575302)),null));
});

/**
 * Test if `x` is a generator. Generators should be treated as opaque values.
 */
clojure.test.check.generators.generator_QMARK_ = (function clojure$test$check$generators$generator_QMARK_(x){
return (x instanceof clojure.test.check.generators.Generator);
});
clojure.test.check.generators.make_gen = (function clojure$test$check$generators$make_gen(generator_fn){
return (new clojure.test.check.generators.Generator(generator_fn,null,null,null));
});
clojure.test.check.generators.call_gen = (function clojure$test$check$generators$call_gen(p__28899,rnd,size){
var map__28902 = p__28899;
var map__28902__$1 = ((((!((map__28902 == null)))?((((map__28902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28902):map__28902);
var generator_fn = cljs.core.get.call(null,map__28902__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
return generator_fn.call(null,rnd,size);
});
clojure.test.check.generators.gen_pure = (function clojure$test$check$generators$gen_pure(value){
return clojure.test.check.generators.make_gen.call(null,(function (rnd,size){
return value;
}));
});
clojure.test.check.generators.gen_fmap = (function clojure$test$check$generators$gen_fmap(k,p__28904){
var map__28907 = p__28904;
var map__28907__$1 = ((((!((map__28907 == null)))?((((map__28907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28907):map__28907);
var h = cljs.core.get.call(null,map__28907__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
return clojure.test.check.generators.make_gen.call(null,((function (map__28907,map__28907__$1,h){
return (function (rnd,size){
return k.call(null,h.call(null,rnd,size));
});})(map__28907,map__28907__$1,h))
);
});
clojure.test.check.generators.gen_bind = (function clojure$test$check$generators$gen_bind(p__28909,k){
var map__28915 = p__28909;
var map__28915__$1 = ((((!((map__28915 == null)))?((((map__28915.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28915.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28915):map__28915);
var h = cljs.core.get.call(null,map__28915__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
return clojure.test.check.generators.make_gen.call(null,((function (map__28915,map__28915__$1,h){
return (function (rnd,size){
var vec__28917 = clojure.test.check.random.split.call(null,rnd);
var r1 = cljs.core.nth.call(null,vec__28917,(0),null);
var r2 = cljs.core.nth.call(null,vec__28917,(1),null);
var inner = h.call(null,r1,size);
var map__28918 = k.call(null,inner);
var map__28918__$1 = ((((!((map__28918 == null)))?((((map__28918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28918):map__28918);
var result = cljs.core.get.call(null,map__28918__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
return result.call(null,r2,size);
});})(map__28915,map__28915__$1,h))
);
});
/**
 * Given a random number generator, returns an infinite lazy sequence
 *   of random number generators.
 */
clojure.test.check.generators.lazy_random_states = (function clojure$test$check$generators$lazy_random_states(rr){
return (new cljs.core.LazySeq(null,(function (){
var vec__28921 = clojure.test.check.random.split.call(null,rr);
var r1 = cljs.core.nth.call(null,vec__28921,(0),null);
var r2 = cljs.core.nth.call(null,vec__28921,(1),null);
return cljs.core.cons.call(null,r1,clojure$test$check$generators$lazy_random_states.call(null,r2));
}),null,null));
});
/**
 * Takes a sequence of generators and returns a generator of sequences (er, vectors).
 */
clojure.test.check.generators.gen_seq__GT_seq_gen = (function clojure$test$check$generators$gen_seq__GT_seq_gen(gens){
return clojure.test.check.generators.make_gen.call(null,(function (rnd,size){
return cljs.core.mapv.call(null,(function (p1__28922_SHARP_,p2__28923_SHARP_){
return clojure.test.check.generators.call_gen.call(null,p1__28922_SHARP_,p2__28923_SHARP_,size);
}),gens,clojure.test.check.random.split_n.call(null,rnd,cljs.core.count.call(null,gens)));
}));
});
clojure.test.check.generators.fmap = (function clojure$test$check$generators$fmap(f,gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Second arg to fmap must be a generator"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"generator?","generator?",522926188,null),new cljs.core.Symbol(null,"gen","gen",1783106829,null))))].join('')));
}

return clojure.test.check.generators.gen_fmap.call(null,(function (p1__28924_SHARP_){
return clojure.test.check.rose_tree.fmap.call(null,f,p1__28924_SHARP_);
}),gen);
});
/**
 * Create a generator that always returns `value`,
 *   and never shrinks. You can think of this as
 *   the `constantly` of generators.
 */
clojure.test.check.generators.return$ = (function clojure$test$check$generators$return(value){
return clojure.test.check.generators.gen_pure.call(null,clojure.test.check.rose_tree.pure.call(null,value));
});
clojure.test.check.generators.bind_helper = (function clojure$test$check$generators$bind_helper(k){
return (function (rose){
return clojure.test.check.generators.gen_fmap.call(null,clojure.test.check.rose_tree.join,clojure.test.check.generators.make_gen.call(null,(function (rnd,size){
return clojure.test.check.rose_tree.fmap.call(null,(function (p1__28925_SHARP_){
return clojure.test.check.generators.call_gen.call(null,p1__28925_SHARP_,rnd,size);
}),clojure.test.check.rose_tree.fmap.call(null,k,rose));
})));
});
});
/**
 * Create a new generator that passes the result of `gen` into function
 *   `k`. `k` should return a new generator. This allows you to create new
 *   generators that depend on the value of other generators. For example,
 *   to create a generator which first generates a vector of integers, and
 *   then chooses a random element from that vector:
 * 
 *    (gen/bind (gen/such-that not-empty (gen/vector gen/int))
 *              ;; this function takes a realized vector,
 *              ;; and then returns a new generator which
 *              ;; chooses a random element from it
 *              gen/elements)
 * 
 *   
 */
clojure.test.check.generators.bind = (function clojure$test$check$generators$bind(generator,k){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,generator))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to bind must be a generator"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"generator?","generator?",522926188,null),new cljs.core.Symbol(null,"generator","generator",1067569246,null))))].join('')));
}

return clojure.test.check.generators.gen_bind.call(null,generator,clojure.test.check.generators.bind_helper.call(null,k));
});
clojure.test.check.generators.make_size_range_seq = (function clojure$test$check$generators$make_size_range_seq(max_size){
return cljs.core.cycle.call(null,cljs.core.range.call(null,(0),max_size));
});
/**
 * Return a sequence of realized values from `generator`.
 */
clojure.test.check.generators.sample_seq = (function clojure$test$check$generators$sample_seq(var_args){
var args28928 = [];
var len__17853__auto___28931 = arguments.length;
var i__17854__auto___28932 = (0);
while(true){
if((i__17854__auto___28932 < len__17853__auto___28931)){
args28928.push((arguments[i__17854__auto___28932]));

var G__28933 = (i__17854__auto___28932 + (1));
i__17854__auto___28932 = G__28933;
continue;
} else {
}
break;
}

var G__28930 = args28928.length;
switch (G__28930) {
case 1:
return clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28928.length)].join('')));

}
});

clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$1 = (function (generator){
return clojure.test.check.generators.sample_seq.call(null,generator,(100));
});

clojure.test.check.generators.sample_seq.cljs$core$IFn$_invoke$arity$2 = (function (generator,max_size){
var r = clojure.test.check.random.make_random.call(null);
var size_seq = clojure.test.check.generators.make_size_range_seq.call(null,max_size);
return cljs.core.map.call(null,((function (r,size_seq){
return (function (p1__28926_SHARP_,p2__28927_SHARP_){
return clojure.test.check.rose_tree.root.call(null,clojure.test.check.generators.call_gen.call(null,generator,p1__28926_SHARP_,p2__28927_SHARP_));
});})(r,size_seq))
,clojure.test.check.generators.lazy_random_states.call(null,r),size_seq);
});

clojure.test.check.generators.sample_seq.cljs$lang$maxFixedArity = 2;
/**
 * Return a sequence of `num-samples` (default 10)
 *   realized values from `generator`.
 */
clojure.test.check.generators.sample = (function clojure$test$check$generators$sample(var_args){
var args28935 = [];
var len__17853__auto___28938 = arguments.length;
var i__17854__auto___28939 = (0);
while(true){
if((i__17854__auto___28939 < len__17853__auto___28938)){
args28935.push((arguments[i__17854__auto___28939]));

var G__28940 = (i__17854__auto___28939 + (1));
i__17854__auto___28939 = G__28940;
continue;
} else {
}
break;
}

var G__28937 = args28935.length;
switch (G__28937) {
case 1:
return clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28935.length)].join('')));

}
});

clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$1 = (function (generator){
return clojure.test.check.generators.sample.call(null,generator,(10));
});

clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$2 = (function (generator,num_samples){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,generator))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to sample must be a generator"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"generator?","generator?",522926188,null),new cljs.core.Symbol(null,"generator","generator",1067569246,null))))].join('')));
}

return cljs.core.take.call(null,num_samples,clojure.test.check.generators.sample_seq.call(null,generator));
});

clojure.test.check.generators.sample.cljs$lang$maxFixedArity = 2;
/**
 * Returns a single sample value from the generator, using a default
 *   size of 30.
 */
clojure.test.check.generators.generate = (function clojure$test$check$generators$generate(var_args){
var args28942 = [];
var len__17853__auto___28945 = arguments.length;
var i__17854__auto___28946 = (0);
while(true){
if((i__17854__auto___28946 < len__17853__auto___28945)){
args28942.push((arguments[i__17854__auto___28946]));

var G__28947 = (i__17854__auto___28946 + (1));
i__17854__auto___28946 = G__28947;
continue;
} else {
}
break;
}

var G__28944 = args28942.length;
switch (G__28944) {
case 1:
return clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28942.length)].join('')));

}
});

clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$1 = (function (generator){
return clojure.test.check.generators.generate.call(null,generator,(30));
});

clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$2 = (function (generator,size){
var rng = clojure.test.check.random.make_random.call(null);
return clojure.test.check.rose_tree.root.call(null,clojure.test.check.generators.call_gen.call(null,generator,rng,size));
});

clojure.test.check.generators.generate.cljs$lang$maxFixedArity = 2;
clojure.test.check.generators.halfs = (function clojure$test$check$generators$halfs(n){
return cljs.core.take_while.call(null,(function (p1__28949_SHARP_){
return cljs.core.not_EQ_.call(null,(0),p1__28949_SHARP_);
}),cljs.core.iterate.call(null,(function (p1__28950_SHARP_){
return cljs.core.quot.call(null,p1__28950_SHARP_,(2));
}),n));
});
clojure.test.check.generators.shrink_int = (function clojure$test$check$generators$shrink_int(integer){
return cljs.core.map.call(null,(function (p1__28951_SHARP_){
return (integer - p1__28951_SHARP_);
}),clojure.test.check.generators.halfs.call(null,integer));
});
clojure.test.check.generators.int_rose_tree = (function clojure$test$check$generators$int_rose_tree(value){
return clojure.test.check.rose_tree.make_rose.call(null,value,cljs.core.map.call(null,clojure$test$check$generators$int_rose_tree,clojure.test.check.generators.shrink_int.call(null,value)));
});
clojure.test.check.generators.rand_range = (function clojure$test$check$generators$rand_range(rnd,lower,upper){
if((lower <= upper)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"lower","lower",-1534114948,null),new cljs.core.Symbol(null,"upper","upper",1886775433,null))))].join('')));
}

var factor = clojure.test.check.random.rand_double.call(null,rnd);
return cljs.core.long$.call(null,Math.floor((lower + ((factor * (1.0 + upper)) - (factor * lower)))));
});
/**
 * Create a generator that depends on the size parameter.
 *   `sized-gen` is a function that takes an integer and returns
 *   a generator.
 */
clojure.test.check.generators.sized = (function clojure$test$check$generators$sized(sized_gen){
return clojure.test.check.generators.make_gen.call(null,(function (rnd,size){
var sized_gen__$1 = sized_gen.call(null,size);
return clojure.test.check.generators.call_gen.call(null,sized_gen__$1,rnd,size);
}));
});
/**
 * Create a new generator with `size` always bound to `n`.
 */
clojure.test.check.generators.resize = (function clojure$test$check$generators$resize(n,generator){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,generator))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Second arg to resize must be a generator"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"generator?","generator?",522926188,null),new cljs.core.Symbol(null,"generator","generator",1067569246,null))))].join('')));
}

var map__28954 = generator;
var map__28954__$1 = ((((!((map__28954 == null)))?((((map__28954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28954):map__28954);
var gen = cljs.core.get.call(null,map__28954__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
return clojure.test.check.generators.make_gen.call(null,((function (map__28954,map__28954__$1,gen){
return (function (rnd,_size){
return gen.call(null,rnd,n);
});})(map__28954,map__28954__$1,gen))
);
});
/**
 * Create a new generator that modifies the size parameter by the given function. Intended to
 * support generators with sizes that need to grow at different rates compared to the normal
 * linear scaling.
 */
clojure.test.check.generators.scale = (function clojure$test$check$generators$scale(f,generator){
return clojure.test.check.generators.sized.call(null,(function (n){
return clojure.test.check.generators.resize.call(null,f.call(null,n),generator);
}));
});
/**
 * Create a generator that returns numbers in the range
 *   `min-range` to `max-range`, inclusive.
 */
clojure.test.check.generators.choose = (function clojure$test$check$generators$choose(lower,upper){
return clojure.test.check.generators.make_gen.call(null,(function (rnd,_size){
var value = clojure.test.check.generators.rand_range.call(null,rnd,lower,upper);
return clojure.test.check.rose_tree.filter.call(null,((function (value){
return (function (p1__28956_SHARP_){
return ((p1__28956_SHARP_ >= lower)) && ((p1__28956_SHARP_ <= upper));
});})(value))
,clojure.test.check.generators.int_rose_tree.call(null,value));
}));
});
/**
 * Create a generator that randomly chooses a value from the list of
 *   provided generators. Shrinks toward choosing an earlier generator,
 *   as well as shrinking the value generated by the chosen generator.
 * 
 *   Examples:
 * 
 *    (one-of [gen/int gen/boolean (gen/vector gen/int)])
 * 
 *   
 */
clojure.test.check.generators.one_of = (function clojure$test$check$generators$one_of(generators){
if(cljs.core.every_QMARK_.call(null,clojure.test.check.generators.generator_QMARK_,generators)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arg to one-of must be a collection of generators"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"generator?","generator?",522926188,null),new cljs.core.Symbol(null,"generators","generators",-269612955,null))))].join('')));
}

return clojure.test.check.generators.bind.call(null,clojure.test.check.generators.choose.call(null,(0),(cljs.core.count.call(null,generators) - (1))),(function (p1__28957_SHARP_){
return cljs.core.nth.call(null,generators,p1__28957_SHARP_);
}));
});
clojure.test.check.generators.pick = (function clojure$test$check$generators$pick(p__28958,n){
while(true){
var vec__28961 = p__28958;
var h = cljs.core.nth.call(null,vec__28961,(0),null);
var tail = cljs.core.nthnext.call(null,vec__28961,(1));
var vec__28962 = h;
var chance = cljs.core.nth.call(null,vec__28962,(0),null);
var gen = cljs.core.nth.call(null,vec__28962,(1),null);
if((n <= chance)){
return gen;
} else {
var G__28963 = tail;
var G__28964 = (n - chance);
p__28958 = G__28963;
n = G__28964;
continue;
}
break;
}
});
/**
 * Create a generator that chooses a generator from `pairs` based on the
 *   provided likelihoods. The likelihood of a given generator being chosen is
 *   its likelihood divided by the sum of all likelihoods
 * 
 *   Examples:
 * 
 *    (gen/frequency [[5 gen/int] [3 (gen/vector gen/int)] [2 gen/boolean]])
 *   
 */
clojure.test.check.generators.frequency = (function clojure$test$check$generators$frequency(pairs){
if(cljs.core.every_QMARK_.call(null,(function (p__28968){
var vec__28969 = p__28968;
var x = cljs.core.nth.call(null,vec__28969,(0),null);
var g = cljs.core.nth.call(null,vec__28969,(1),null);
var and__16783__auto__ = typeof x === 'number';
if(and__16783__auto__){
return clojure.test.check.generators.generator_QMARK_.call(null,g);
} else {
return and__16783__auto__;
}
}),pairs)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arg to frequency must be a list of [num generator] pairs"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"g","g",-916345864,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"number?","number?",-1747282210,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"generator?","generator?",522926188,null),new cljs.core.Symbol(null,"g","g",-916345864,null)))),new cljs.core.Symbol(null,"pairs","pairs",-2039825990,null))))].join('')));
}

var total = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.first,pairs));
return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.choose.call(null,(1),total),((function (total){
return (function (p1__28965_SHARP_){
return clojure.test.check.generators.pick.call(null,pairs,clojure.test.check.rose_tree.root.call(null,p1__28965_SHARP_));
});})(total))
);
});
/**
 * Create a generator that randomly chooses an element from `coll`.
 * 
 *   Examples:
 * 
 *    (gen/elements [:foo :bar :baz])
 *   
 */
clojure.test.check.generators.elements = (function clojure$test$check$generators$elements(coll){
if(cljs.core.seq.call(null,coll)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("elements cannot be called with an empty collection"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"coll","coll",-1006698606,null))))].join('')));
}

var v = cljs.core.vec.call(null,coll);
return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.choose.call(null,(0),(cljs.core.count.call(null,v) - (1))),((function (v){
return (function (p1__28970_SHARP_){
return clojure.test.check.generators.gen_pure.call(null,clojure.test.check.rose_tree.fmap.call(null,v,p1__28970_SHARP_));
});})(v))
);
});
clojure.test.check.generators.such_that_helper = (function clojure$test$check$generators$such_that_helper(max_tries,pred,gen,tries_left,rng,size){
while(true){
if((tries_left === (0))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Couldn't satisfy such-that predicate after "),cljs.core.str(max_tries),cljs.core.str(" tries.")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
var vec__28972 = clojure.test.check.random.split.call(null,rng);
var r1 = cljs.core.nth.call(null,vec__28972,(0),null);
var r2 = cljs.core.nth.call(null,vec__28972,(1),null);
var value = clojure.test.check.generators.call_gen.call(null,gen,r1,size);
if(cljs.core.truth_(pred.call(null,clojure.test.check.rose_tree.root.call(null,value)))){
return clojure.test.check.rose_tree.filter.call(null,pred,value);
} else {
var G__28973 = max_tries;
var G__28974 = pred;
var G__28975 = gen;
var G__28976 = (tries_left - (1));
var G__28977 = r2;
var G__28978 = (size + (1));
max_tries = G__28973;
pred = G__28974;
gen = G__28975;
tries_left = G__28976;
rng = G__28977;
size = G__28978;
continue;
}
}
break;
}
});
/**
 * Create a generator that generates values from `gen` that satisfy predicate
 *   `pred`. Care is needed to ensure there is a high chance `gen` will satisfy
 *   `pred`. By default, `such-that` will try 10 times to generate a value that
 *   satisfies the predicate. If no value passes this predicate after this number
 *   of iterations, a runtime exception will be throw. You can pass an optional
 *   third argument to change the number of times tried. Note also that each
 *   time such-that retries, it will increase the size parameter.
 * 
 *   Examples:
 * 
 *    ;; generate non-empty vectors of integers
 *    ;; (note, gen/not-empty does exactly this)
 *    (gen/such-that not-empty (gen/vector gen/int))
 *   
 */
clojure.test.check.generators.such_that = (function clojure$test$check$generators$such_that(var_args){
var args28979 = [];
var len__17853__auto___28982 = arguments.length;
var i__17854__auto___28983 = (0);
while(true){
if((i__17854__auto___28983 < len__17853__auto___28982)){
args28979.push((arguments[i__17854__auto___28983]));

var G__28984 = (i__17854__auto___28983 + (1));
i__17854__auto___28983 = G__28984;
continue;
} else {
}
break;
}

var G__28981 = args28979.length;
switch (G__28981) {
case 2:
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28979.length)].join('')));

}
});

clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2 = (function (pred,gen){
return clojure.test.check.generators.such_that.call(null,pred,gen,(10));
});

clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$3 = (function (pred,gen,max_tries){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Second arg to such-that must be a generator"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"generator?","generator?",522926188,null),new cljs.core.Symbol(null,"gen","gen",1783106829,null))))].join('')));
}

return clojure.test.check.generators.make_gen.call(null,(function (rand_seed,size){
return clojure.test.check.generators.such_that_helper.call(null,max_tries,pred,gen,max_tries,rand_seed,size);
}));
});

clojure.test.check.generators.such_that.cljs$lang$maxFixedArity = 3;
/**
 * Modifies a generator so that it doesn't generate empty collections.
 * 
 *   Examples:
 * 
 *    ;; generate a vector of booleans, but never the empty vector
 *    (gen/not-empty (gen/vector gen/boolean))
 *   
 */
clojure.test.check.generators.not_empty = (function clojure$test$check$generators$not_empty(gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arg to not-empty must be a generator"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"generator?","generator?",522926188,null),new cljs.core.Symbol(null,"gen","gen",1783106829,null))))].join('')));
}

return clojure.test.check.generators.such_that.call(null,cljs.core.not_empty,gen);
});
/**
 * Create a new generator that is just like `gen`, except does not shrink
 *   at all. This can be useful when shrinking is taking a long time or is not
 *   applicable to the domain.
 */
clojure.test.check.generators.no_shrink = (function clojure$test$check$generators$no_shrink(gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arg to no-shrink must be a generator"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"generator?","generator?",522926188,null),new cljs.core.Symbol(null,"gen","gen",1783106829,null))))].join('')));
}

return clojure.test.check.generators.gen_bind.call(null,gen,(function (rose){
return clojure.test.check.generators.gen_pure.call(null,clojure.test.check.rose_tree.make_rose.call(null,clojure.test.check.rose_tree.root.call(null,rose),cljs.core.PersistentVector.EMPTY));
}));
});
/**
 * Create a new generator like `gen`, but will consider nodes for shrinking
 *   even if their parent passes the test (up to one additional level).
 */
clojure.test.check.generators.shrink_2 = (function clojure$test$check$generators$shrink_2(gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arg to shrink-2 must be a generator"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"generator?","generator?",522926188,null),new cljs.core.Symbol(null,"gen","gen",1783106829,null))))].join('')));
}

return clojure.test.check.generators.gen_bind.call(null,gen,cljs.core.comp.call(null,clojure.test.check.generators.gen_pure,clojure.test.check.rose_tree.collapse));
});
/**
 * Generates one of `true` or `false`. Shrinks to `false`.
 */
clojure.test.check.generators.boolean$ = clojure.test.check.generators.elements.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null));
/**
 * Create a generator that returns a vector, whose elements are chosen
 *   from the generators in the same position. The individual elements shrink
 *   according to their generator, but the value will never shrink in count.
 * 
 *   Examples:
 * 
 *    (def t (tuple gen/int gen/boolean))
 *    (sample t)
 *    ;; => ([1 true] [2 true] [2 false] [1 false] [0 true] [-2 false] [-6 false]
 *    ;; =>  [3 true] [-4 false] [9 true]))
 *   
 */
clojure.test.check.generators.tuple = (function clojure$test$check$generators$tuple(var_args){
var args__17860__auto__ = [];
var len__17853__auto___28987 = arguments.length;
var i__17854__auto___28988 = (0);
while(true){
if((i__17854__auto___28988 < len__17853__auto___28987)){
args__17860__auto__.push((arguments[i__17854__auto___28988]));

var G__28989 = (i__17854__auto___28988 + (1));
i__17854__auto___28988 = G__28989;
continue;
} else {
}
break;
}

var argseq__17861__auto__ = ((((0) < args__17860__auto__.length))?(new cljs.core.IndexedSeq(args__17860__auto__.slice((0)),(0))):null);
return clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__17861__auto__);
});

clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic = (function (generators){
if(cljs.core.every_QMARK_.call(null,clojure.test.check.generators.generator_QMARK_,generators)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Args to tuple must be generators"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"generator?","generator?",522926188,null),new cljs.core.Symbol(null,"generators","generators",-269612955,null))))].join('')));
}

return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.gen_seq__GT_seq_gen.call(null,generators),(function (roses){
return clojure.test.check.generators.gen_pure.call(null,clojure.test.check.rose_tree.zip.call(null,cljs.core.vector,roses));
}));
});

clojure.test.check.generators.tuple.cljs$lang$maxFixedArity = (0);

clojure.test.check.generators.tuple.cljs$lang$applyTo = (function (seq28986){
return clojure.test.check.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28986));
});
/**
 * Generates a positive or negative integer bounded by the generator's
 *   `size` parameter.
 *   (Really returns a long)
 */
clojure.test.check.generators.int$ = clojure.test.check.generators.sized.call(null,(function (size){
return clojure.test.check.generators.choose.call(null,(- size),size);
}));
/**
 * Generates natural numbers, starting at zero. Shrinks to zero.
 */
clojure.test.check.generators.nat = clojure.test.check.generators.fmap.call(null,(function (p1__28990_SHARP_){
return Math.abs(cljs.core.long$.call(null,p1__28990_SHARP_));
}),clojure.test.check.generators.int$);
/**
 * Generate positive integers bounded by the generator's `size` parameter.
 */
clojure.test.check.generators.pos_int = clojure.test.check.generators.nat;
/**
 * Generate negative integers bounded by the generator's `size` parameter.
 */
clojure.test.check.generators.neg_int = clojure.test.check.generators.fmap.call(null,(function (p1__28991_SHARP_){
return ((-1) * p1__28991_SHARP_);
}),clojure.test.check.generators.nat);
/**
 * Generate strictly positive integers bounded by the generator's `size`
 * parameter.
 */
clojure.test.check.generators.s_pos_int = clojure.test.check.generators.fmap.call(null,cljs.core.inc,clojure.test.check.generators.nat);
/**
 * Generate strictly negative integers bounded by the generator's `size`
 * parameter.
 */
clojure.test.check.generators.s_neg_int = clojure.test.check.generators.fmap.call(null,cljs.core.dec,clojure.test.check.generators.neg_int);
/**
 * Create a generator whose elements are chosen from `gen`. The count of the
 *   vector will be bounded by the `size` generator parameter.
 */
clojure.test.check.generators.vector = (function clojure$test$check$generators$vector(var_args){
var args28993 = [];
var len__17853__auto___28996 = arguments.length;
var i__17854__auto___28997 = (0);
while(true){
if((i__17854__auto___28997 < len__17853__auto___28996)){
args28993.push((arguments[i__17854__auto___28997]));

var G__28998 = (i__17854__auto___28997 + (1));
i__17854__auto___28997 = G__28998;
continue;
} else {
}
break;
}

var G__28995 = args28993.length;
switch (G__28995) {
case 1:
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28993.length)].join('')));

}
});

clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1 = (function (generator){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,generator))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arg to vector must be a generator"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"generator?","generator?",522926188,null),new cljs.core.Symbol(null,"generator","generator",1067569246,null))))].join('')));
}

return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.sized.call(null,(function (p1__28992_SHARP_){
return clojure.test.check.generators.choose.call(null,(0),p1__28992_SHARP_);
})),(function (num_elements_rose){
return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.gen_seq__GT_seq_gen.call(null,cljs.core.repeat.call(null,clojure.test.check.rose_tree.root.call(null,num_elements_rose),generator)),(function (roses){
return clojure.test.check.generators.gen_pure.call(null,clojure.test.check.rose_tree.shrink.call(null,cljs.core.vector,roses));
}));
}));
});

clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$2 = (function (generator,num_elements){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,generator))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to vector must be a generator"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"generator?","generator?",522926188,null),new cljs.core.Symbol(null,"generator","generator",1067569246,null))))].join('')));
}

return cljs.core.apply.call(null,clojure.test.check.generators.tuple,cljs.core.repeat.call(null,num_elements,generator));
});

clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3 = (function (generator,min_elements,max_elements){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,generator))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to vector must be a generator"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"generator?","generator?",522926188,null),new cljs.core.Symbol(null,"generator","generator",1067569246,null))))].join('')));
}

return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.choose.call(null,min_elements,max_elements),(function (num_elements_rose){
return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.gen_seq__GT_seq_gen.call(null,cljs.core.repeat.call(null,clojure.test.check.rose_tree.root.call(null,num_elements_rose),generator)),(function (roses){
return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.gen_pure.call(null,clojure.test.check.rose_tree.shrink.call(null,cljs.core.vector,roses)),(function (rose){
return clojure.test.check.generators.gen_pure.call(null,clojure.test.check.rose_tree.filter.call(null,(function (v){
return ((cljs.core.count.call(null,v) >= min_elements)) && ((cljs.core.count.call(null,v) <= max_elements));
}),rose));
}));
}));
}));
});

clojure.test.check.generators.vector.cljs$lang$maxFixedArity = 3;
/**
 * Like `vector`, but generates lists.
 */
clojure.test.check.generators.list = (function clojure$test$check$generators$list(generator){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,generator))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First arg to list must be a generator"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"generator?","generator?",522926188,null),new cljs.core.Symbol(null,"generator","generator",1067569246,null))))].join('')));
}

return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.sized.call(null,(function (p1__29000_SHARP_){
return clojure.test.check.generators.choose.call(null,(0),p1__29000_SHARP_);
})),(function (num_elements_rose){
return clojure.test.check.generators.gen_bind.call(null,clojure.test.check.generators.gen_seq__GT_seq_gen.call(null,cljs.core.repeat.call(null,clojure.test.check.rose_tree.root.call(null,num_elements_rose),generator)),(function (roses){
return clojure.test.check.generators.gen_pure.call(null,clojure.test.check.rose_tree.shrink.call(null,cljs.core.list,roses));
}));
}));
});
clojure.test.check.generators.swap = (function clojure$test$check$generators$swap(coll,p__29001){
var vec__29003 = p__29001;
var i1 = cljs.core.nth.call(null,vec__29003,(0),null);
var i2 = cljs.core.nth.call(null,vec__29003,(1),null);
return cljs.core.assoc.call(null,coll,i2,coll.call(null,i1),i1,coll.call(null,i2));
});
/**
 * Create a generator that generates random permutations of `coll`. Shrinks
 *   toward the original collection: `coll`. `coll` will be turned into a vector,
 *   if it's not already.
 */
clojure.test.check.generators.shuffle = (function clojure$test$check$generators$shuffle(coll){
var index_gen = clojure.test.check.generators.choose.call(null,(0),(cljs.core.count.call(null,coll) - (1)));
return clojure.test.check.generators.fmap.call(null,((function (index_gen){
return (function (p1__29004_SHARP_){
return cljs.core.reduce.call(null,clojure.test.check.generators.swap,cljs.core.vec.call(null,coll),p1__29004_SHARP_);
});})(index_gen))
,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.tuple.call(null,index_gen,index_gen),(0),((2) * cljs.core.count.call(null,coll))));
});
/**
 * Create a generator that generates maps, with keys chosen from
 *   `key-gen` and values chosen from `val-gen`.
 */
clojure.test.check.generators.map = (function clojure$test$check$generators$map(key_gen,val_gen){
var input = clojure.test.check.generators.vector.call(null,clojure.test.check.generators.tuple.call(null,key_gen,val_gen));
return clojure.test.check.generators.fmap.call(null,((function (input){
return (function (p1__29005_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__29005_SHARP_);
});})(input))
,input);
});
/**
 * Like clojure.core/hash-map, except the values are generators.
 * Returns a generator that makes maps with the supplied keys and
 * values generated using the supplied generators.
 * 
 *   Examples:
 * 
 *  (gen/hash-map :a gen/boolean :b gen/nat)
 *   
 */
clojure.test.check.generators.hash_map = (function clojure$test$check$generators$hash_map(var_args){
var args__17860__auto__ = [];
var len__17853__auto___29008 = arguments.length;
var i__17854__auto___29009 = (0);
while(true){
if((i__17854__auto___29009 < len__17853__auto___29008)){
args__17860__auto__.push((arguments[i__17854__auto___29009]));

var G__29010 = (i__17854__auto___29009 + (1));
i__17854__auto___29009 = G__29010;
continue;
} else {
}
break;
}

var argseq__17861__auto__ = ((((0) < args__17860__auto__.length))?(new cljs.core.IndexedSeq(args__17860__auto__.slice((0)),(0))):null);
return clojure.test.check.generators.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__17861__auto__);
});

clojure.test.check.generators.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var ks = cljs.core.take_nth.call(null,(2),kvs);
var vs = cljs.core.take_nth.call(null,(2),cljs.core.rest.call(null,kvs));
if(cljs.core.every_QMARK_.call(null,clojure.test.check.generators.generator_QMARK_,vs)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Value args to hash-map must be generators"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"generator?","generator?",522926188,null),new cljs.core.Symbol(null,"vs","vs",-381565563,null))))].join('')));
}

return clojure.test.check.generators.fmap.call(null,((function (ks,vs){
return (function (p1__29006_SHARP_){
return cljs.core.zipmap.call(null,ks,p1__29006_SHARP_);
});})(ks,vs))
,cljs.core.apply.call(null,clojure.test.check.generators.tuple,vs));
});

clojure.test.check.generators.hash_map.cljs$lang$maxFixedArity = (0);

clojure.test.check.generators.hash_map.cljs$lang$applyTo = (function (seq29007){
return clojure.test.check.generators.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29007));
});
/**
 * Generates character from 0-255.
 */
clojure.test.check.generators.char$ = clojure.test.check.generators.fmap.call(null,cljs.core.char$,clojure.test.check.generators.choose.call(null,(0),(255)));
/**
 * Generate only ascii character.
 */
clojure.test.check.generators.char_ascii = clojure.test.check.generators.fmap.call(null,cljs.core.char$,clojure.test.check.generators.choose.call(null,(32),(126)));
/**
 * Generate alphanumeric characters.
 */
clojure.test.check.generators.char_alphanumeric = clojure.test.check.generators.fmap.call(null,cljs.core.char$,clojure.test.check.generators.one_of.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.choose.call(null,(48),(57)),clojure.test.check.generators.choose.call(null,(65),(90)),clojure.test.check.generators.choose.call(null,(97),(122))], null)));
/**
 * Deprecated - use char-alphanumeric instead.
 * 
 *   Generate alphanumeric characters.
 */
clojure.test.check.generators.char_alpha_numeric = clojure.test.check.generators.char_alphanumeric;
/**
 * Generate alpha characters.
 */
clojure.test.check.generators.char_alpha = clojure.test.check.generators.fmap.call(null,cljs.core.char$,clojure.test.check.generators.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.choose.call(null,(65),(90)),clojure.test.check.generators.choose.call(null,(97),(122))], null)));
/**
 * Generate non-alphanumeric characters that can be in a symbol.
 */
clojure.test.check.generators.char_symbol_special = clojure.test.check.generators.elements.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*","+","!","-","_","?"], null));
/**
 * Generate characters that can be the char following first of a keyword.
 */
clojure.test.check.generators.char_keyword_rest = clojure.test.check.generators.frequency.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),clojure.test.check.generators.char_alphanumeric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.char_symbol_special], null)], null));
/**
 * Generate characters that can be the first char of a keyword.
 */
clojure.test.check.generators.char_keyword_first = clojure.test.check.generators.frequency.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),clojure.test.check.generators.char_alpha], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.char_symbol_special], null)], null));
/**
 * Generate strings. May generate unprintable characters.
 */
clojure.test.check.generators.string = clojure.test.check.generators.fmap.call(null,clojure.string.join,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char$));
/**
 * Generate ascii strings.
 */
clojure.test.check.generators.string_ascii = clojure.test.check.generators.fmap.call(null,clojure.string.join,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_ascii));
/**
 * Generate alphanumeric strings.
 */
clojure.test.check.generators.string_alphanumeric = clojure.test.check.generators.fmap.call(null,clojure.string.join,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_alphanumeric));
/**
 * Deprecated - use string-alphanumeric instead.
 * 
 *   Generate alphanumeric strings.
 */
clojure.test.check.generators.string_alpha_numeric = clojure.test.check.generators.string_alphanumeric;
/**
 * Returns true if c is \+ or \- and d is non-nil and a digit.
 * 
 *   Symbols that start with +3 or -2 are not readable because they look
 *   like numbers.
 */
clojure.test.check.generators._PLUS__or___digit_QMARK_ = (function clojure$test$check$generators$_PLUS__or___digit_QMARK_(c,d){
return cljs.core.boolean$.call(null,(function (){var and__16783__auto__ = d;
if(cljs.core.truth_(and__16783__auto__)){
var and__16783__auto____$1 = (("+" === c)) || (("-" === c));
if(and__16783__auto____$1){
return goog.string.isNumeric(d);
} else {
return and__16783__auto____$1;
}
} else {
return and__16783__auto__;
}
})());
});
/**
 * Generate the segment of a namespace.
 */
clojure.test.check.generators.namespace_segment = clojure.test.check.generators.fmap.call(null,(function (p__29011){
var vec__29012 = p__29011;
var c = cljs.core.nth.call(null,vec__29012,(0),null);
var cs = cljs.core.nth.call(null,vec__29012,(1),null);
return clojure.string.join.call(null,cljs.core.cons.call(null,c,cs));
}),clojure.test.check.generators.such_that.call(null,(function (p__29013){
var vec__29014 = p__29013;
var c = cljs.core.nth.call(null,vec__29014,(0),null);
var vec__29015 = cljs.core.nth.call(null,vec__29014,(1),null);
var d = cljs.core.nth.call(null,vec__29015,(0),null);
return cljs.core.not.call(null,clojure.test.check.generators._PLUS__or___digit_QMARK_.call(null,c,d));
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.char_keyword_first,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_keyword_rest))));
/**
 * Generate a namespace (or nil for no namespace).
 */
clojure.test.check.generators.namespace = clojure.test.check.generators.fmap.call(null,(function (v){
if(cljs.core.seq.call(null,v)){
return clojure.string.join.call(null,".",v);
} else {
return null;
}
}),clojure.test.check.generators.vector.call(null,clojure.test.check.generators.namespace_segment));
/**
 * Generate segments of a keyword (between \:)
 */
clojure.test.check.generators.keyword_segment_rest = clojure.test.check.generators.fmap.call(null,(function (p__29016){
var vec__29017 = p__29016;
var c = cljs.core.nth.call(null,vec__29017,(0),null);
var cs = cljs.core.nth.call(null,vec__29017,(1),null);
return clojure.string.join.call(null,cljs.core.cons.call(null,c,cs));
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.char_keyword_rest,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_keyword_rest)));
/**
 * Generate segments of a keyword that can be first (between \:)
 */
clojure.test.check.generators.keyword_segment_first = clojure.test.check.generators.fmap.call(null,(function (p__29018){
var vec__29019 = p__29018;
var c = cljs.core.nth.call(null,vec__29019,(0),null);
var cs = cljs.core.nth.call(null,vec__29019,(1),null);
return clojure.string.join.call(null,cljs.core.cons.call(null,c,cs));
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.char_keyword_first,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_keyword_rest)));
/**
 * Generate keywords without namespaces.
 */
clojure.test.check.generators.keyword = clojure.test.check.generators.fmap.call(null,(function (p__29020){
var vec__29021 = p__29020;
var c = cljs.core.nth.call(null,vec__29021,(0),null);
var cs = cljs.core.nth.call(null,vec__29021,(1),null);
return cljs.core.keyword.call(null,clojure.string.join.call(null,":",cljs.core.cons.call(null,c,cs)));
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.keyword_segment_first,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.keyword_segment_rest)));
/**
 * Generate keywords with optional namespaces.
 */
clojure.test.check.generators.keyword_ns = clojure.test.check.generators.fmap.call(null,(function (p__29022){
var vec__29023 = p__29022;
var ns = cljs.core.nth.call(null,vec__29023,(0),null);
var c = cljs.core.nth.call(null,vec__29023,(1),null);
var cs = cljs.core.nth.call(null,vec__29023,(2),null);
return cljs.core.keyword.call(null,ns,clojure.string.join.call(null,cljs.core.cons.call(null,c,cs)));
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.namespace,clojure.test.check.generators.char_keyword_first,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_keyword_rest)));
clojure.test.check.generators.char_symbol_first = clojure.test.check.generators.frequency.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),clojure.test.check.generators.char_alpha], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),clojure.test.check.generators.char_symbol_special], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,".")], null)], null));
clojure.test.check.generators.char_symbol_rest = clojure.test.check.generators.frequency.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),clojure.test.check.generators.char_alphanumeric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),clojure.test.check.generators.char_symbol_special], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,".")], null)], null));
/**
 * Generate symbols without namespaces.
 */
clojure.test.check.generators.symbol = clojure.test.check.generators.frequency.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),clojure.test.check.generators.fmap.call(null,(function (p__29024){
var vec__29025 = p__29024;
var c = cljs.core.nth.call(null,vec__29025,(0),null);
var cs = cljs.core.nth.call(null,vec__29025,(1),null);
return cljs.core.symbol.call(null,clojure.string.join.call(null,cljs.core.cons.call(null,c,cs)));
}),clojure.test.check.generators.such_that.call(null,(function (p__29026){
var vec__29027 = p__29026;
var c = cljs.core.nth.call(null,vec__29027,(0),null);
var vec__29028 = cljs.core.nth.call(null,vec__29027,(1),null);
var d = cljs.core.nth.call(null,vec__29028,(0),null);
return cljs.core.not.call(null,clojure.test.check.generators._PLUS__or___digit_QMARK_.call(null,c,d));
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.char_symbol_first,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_symbol_rest))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,new cljs.core.Symbol(null,"/","/",-1371932971,null))], null)], null));
/**
 * Generate symbols with optional namespaces.
 */
clojure.test.check.generators.symbol_ns = clojure.test.check.generators.frequency.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),clojure.test.check.generators.fmap.call(null,(function (p__29029){
var vec__29030 = p__29029;
var ns = cljs.core.nth.call(null,vec__29030,(0),null);
var c = cljs.core.nth.call(null,vec__29030,(1),null);
var cs = cljs.core.nth.call(null,vec__29030,(2),null);
return cljs.core.symbol.call(null,ns,clojure.string.join.call(null,cljs.core.cons.call(null,c,cs)));
}),clojure.test.check.generators.such_that.call(null,(function (p__29031){
var vec__29032 = p__29031;
var _ = cljs.core.nth.call(null,vec__29032,(0),null);
var c = cljs.core.nth.call(null,vec__29032,(1),null);
var vec__29033 = cljs.core.nth.call(null,vec__29032,(2),null);
var d = cljs.core.nth.call(null,vec__29033,(0),null);
return cljs.core.not.call(null,clojure.test.check.generators._PLUS__or___digit_QMARK_.call(null,c,d));
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.namespace,clojure.test.check.generators.char_symbol_first,clojure.test.check.generators.vector.call(null,clojure.test.check.generators.char_symbol_rest))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators.return$.call(null,new cljs.core.Symbol(null,"/","/",-1371932971,null))], null)], null));
/**
 * Generates a `clojure.lang.Ratio`. Shrinks toward 0. Not all values generated
 *   will be ratios, as many values returned by `/` are not ratios.
 */
clojure.test.check.generators.ratio = clojure.test.check.generators.fmap.call(null,(function (p__29034){
var vec__29035 = p__29034;
var a = cljs.core.nth.call(null,vec__29035,(0),null);
var b = cljs.core.nth.call(null,vec__29035,(1),null);
return (a / b);
}),clojure.test.check.generators.tuple.call(null,clojure.test.check.generators.int$,clojure.test.check.generators.such_that.call(null,cljs.core.complement.call(null,cljs.core.zero_QMARK_),clojure.test.check.generators.int$)));
clojure.test.check.generators.simple_type = clojure.test.check.generators.one_of.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.int$,clojure.test.check.generators.char$,clojure.test.check.generators.string,clojure.test.check.generators.ratio,clojure.test.check.generators.boolean$,clojure.test.check.generators.keyword,clojure.test.check.generators.keyword_ns,clojure.test.check.generators.symbol,clojure.test.check.generators.symbol_ns], null));
clojure.test.check.generators.simple_type_printable = clojure.test.check.generators.one_of.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.int$,clojure.test.check.generators.char_ascii,clojure.test.check.generators.string_ascii,clojure.test.check.generators.ratio,clojure.test.check.generators.boolean$,clojure.test.check.generators.keyword,clojure.test.check.generators.keyword_ns,clojure.test.check.generators.symbol,clojure.test.check.generators.symbol_ns], null));
clojure.test.check.generators.container_type = (function clojure$test$check$generators$container_type(inner_type){
return clojure.test.check.generators.one_of.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.vector.call(null,inner_type),clojure.test.check.generators.list.call(null,inner_type),clojure.test.check.generators.map.call(null,inner_type,inner_type)], null));
});
clojure.test.check.generators.recursive_helper = (function clojure$test$check$generators$recursive_helper(container_gen_fn,scalar_gen,scalar_size,children_size,height){
if((height === (0))){
return clojure.test.check.generators.resize.call(null,scalar_size,scalar_gen);
} else {
return clojure.test.check.generators.resize.call(null,children_size,container_gen_fn.call(null,clojure$test$check$generators$recursive_helper.call(null,container_gen_fn,scalar_gen,scalar_size,children_size,(height - (1)))));
}
});
/**
 * This is a helper for writing recursive (tree-shaped) generators. The first
 *   argument should be a function that takes a generator as an argument, and
 *   produces another generator that 'contains' that generator. The vector function
 *   in this namespace is a simple example. The second argument is a scalar
 *   generator, like boolean. For example, to produce a tree of booleans:
 * 
 *  (gen/recursive-gen gen/vector gen/boolean)
 * 
 *   Vectors or maps either recurring or containing booleans or integers:
 * 
 *  (gen/recursive-gen (fn [inner] (gen/one-of [(gen/vector inner)
 *                                              (gen/map inner inner)]))
 *                     (gen/one-of [gen/boolean gen/int]))
 *   
 */
clojure.test.check.generators.recursive_gen = (function clojure$test$check$generators$recursive_gen(container_gen_fn,scalar_gen){
if(cljs.core.truth_(clojure.test.check.generators.generator_QMARK_.call(null,scalar_gen))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Second arg to recursive-gen must be a generator"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"generator?","generator?",522926188,null),new cljs.core.Symbol(null,"scalar-gen","scalar-gen",-503972759,null))))].join('')));
}

return clojure.test.check.generators.sized.call(null,(function (size){
return clojure.test.check.generators.bind.call(null,clojure.test.check.generators.choose.call(null,(1),(5)),(function (height){
var children_size = Math.pow(size,((1) / height));
return clojure.test.check.generators.recursive_helper.call(null,container_gen_fn,scalar_gen,size,children_size,height);
}));
}));
});
/**
 * A recursive generator that will generate many different, often nested, values
 */
clojure.test.check.generators.any = clojure.test.check.generators.recursive_gen.call(null,clojure.test.check.generators.container_type,clojure.test.check.generators.simple_type);
/**
 * Like any, but avoids characters that the shell will interpret as actions,
 *   like 7 and 14 (bell and alternate character set command)
 */
clojure.test.check.generators.any_printable = clojure.test.check.generators.recursive_gen.call(null,clojure.test.check.generators.container_type,clojure.test.check.generators.simple_type_printable);

//# sourceMappingURL=generators.js.map