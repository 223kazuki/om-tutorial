// Compiled by ClojureScript 1.7.170 {}
goog.provide('clojure.test.check.clojure_test');
goog.require('cljs.core');
goog.require('cljs.test');
clojure.test.check.clojure_test.assert_check = (function clojure$test$check$clojure_test$assert_check(p__29335){
var map__29339 = p__29335;
var map__29339__$1 = ((((!((map__29339 == null)))?((((map__29339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29339):map__29339);
var m = map__29339__$1;
var result = cljs.core.get.call(null,map__29339__$1,new cljs.core.Keyword(null,"result","result",1415092211));
cljs.core.prn.call(null,m);

if((result instanceof Error)){
throw result;
} else {
try{var value__29051__auto__ = result;
if(cljs.core.truth_(value__29051__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Keyword(null,"actual","actual",107306363),value__29051__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Keyword(null,"actual","actual",107306363),value__29051__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return value__29051__auto__;
}catch (e29341){var t__29086__auto__ = e29341;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Keyword(null,"actual","actual",107306363),t__29086__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}
});
clojure.test.check.clojure_test._STAR_default_test_count_STAR_ = (100);
clojure.test.check.clojure_test.process_options = (function clojure$test$check$clojure_test$process_options(options){
if((options == null)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),clojure.test.check.clojure_test._STAR_default_test_count_STAR_], null);
} else {
if(typeof options === 'number'){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),options], null);
} else {
if(cljs.core.map_QMARK_.call(null,options)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"num-tests","num-tests",2050041354).cljs$core$IFn$_invoke$arity$1(options))){
return options;
} else {
return cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),clojure.test.check.clojure_test._STAR_default_test_count_STAR_);
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid defspec options: "),cljs.core.str(cljs.core.pr_str.call(null,options))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bad-options","bad-options",-1002783472),options], null));

}
}
}
});
/**
 * Controls whether property trials should be reported via clojure.test/report.
 *   Valid values include:
 * 
 *   * false - no reporting of trials (default)
 *   * a function - will be passed a clojure.test/report-style map containing
 *   :clojure.test.check/property and :clojure.test.check/trial slots
 *   * true - provides quickcheck-style trial reporting (dots) via
 *   `trial-report-dots`
 * 
 *   (Note that all reporting requires running `quick-check` within the scope of a
 *   clojure.test run (via `test-ns`, `test-all-vars`, etc.)
 * 
 *   Reporting functions offered by clojure.test.check include `trial-report-dots` and
 *   `trial-report-periodic` (which prints more verbose trial progress information
 *   every `*trial-report-period*` milliseconds.
 */
clojure.test.check.clojure_test._STAR_report_trials_STAR_ = false;
/**
 * If true, a verbose report of the property being tested, the
 *   failing return value, and the arguments provoking that failure is emitted
 *   prior to the start of the shrinking search.
 */
clojure.test.check.clojure_test._STAR_report_shrinking_STAR_ = false;
/**
 * Milliseconds between reports emitted by `trial-report-periodic`.
 */
clojure.test.check.clojure_test._STAR_trial_report_period_STAR_ = (10000);
clojure.test.check.clojure_test.last_trial_report = cljs.core.atom.call(null,(0));
var begin_test_var_method_29342 = cljs.core.get_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100)], null));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100)], null),((function (begin_test_var_method_29342){
return (function (m){
cljs.core.reset_BANG_.call(null,clojure.test.check.clojure_test.last_trial_report,(new Date()).valueOf());

if(cljs.core.truth_(begin_test_var_method_29342)){
return begin_test_var_method_29342.call(null,m);
} else {
return null;
}
});})(begin_test_var_method_29342))
);
clojure.test.check.clojure_test.get_property_name = (function clojure$test$check$clojure_test$get_property_name(p__29343){
var map__29346 = p__29343;
var map__29346__$1 = ((((!((map__29346 == null)))?((((map__29346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29346):map__29346);
var report_map = map__29346__$1;
var property_fun = cljs.core.get.call(null,map__29346__$1,new cljs.core.Keyword("clojure.test.check.clojure-test","property","clojure.test.check.clojure-test/property",1356517781));
var or__16795__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,property_fun));
if(cljs.core.truth_(or__16795__auto__)){
return or__16795__auto__;
} else {
return cljs.test.testing_vars_str.call(null,report_map);
}
});
/**
 * Intended to be bound as the value of `*report-trials*`; will emit a verbose
 *   status every `*trial-report-period*` milliseconds, like this one:
 * 
 *   Passing trial 3286 / 5000 for (your-test-var-name-here) (:)
 */
clojure.test.check.clojure_test.trial_report_periodic = (function clojure$test$check$clojure_test$trial_report_periodic(m){
var t = (new Date()).valueOf();
if(((t - clojure.test.check.clojure_test._STAR_trial_report_period_STAR_) > cljs.core.deref.call(null,clojure.test.check.clojure_test.last_trial_report))){
cljs.core.println.call(null,"Passing trial",cljs.core.first.call(null,new cljs.core.Keyword("clojure.test.check.clojure-test","trial","clojure.test.check.clojure-test/trial",866433060).cljs$core$IFn$_invoke$arity$1(m)),"/",cljs.core.second.call(null,new cljs.core.Keyword("clojure.test.check.clojure-test","trial","clojure.test.check.clojure-test/trial",866433060).cljs$core$IFn$_invoke$arity$1(m)),"for",clojure.test.check.clojure_test.get_property_name.call(null,m));

return cljs.core.reset_BANG_.call(null,clojure.test.check.clojure_test.last_trial_report,t);
} else {
return null;
}
});
/**
 * Intended to be bound as the value of `*report-trials*`; will emit a single
 *   dot every 1000 trials reported.
 */
clojure.test.check.clojure_test.trial_report_dots = (function clojure$test$check$clojure_test$trial_report_dots(p__29348){
var map__29352 = p__29348;
var map__29352__$1 = ((((!((map__29352 == null)))?((((map__29352.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29352.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29352):map__29352);
var vec__29353 = cljs.core.get.call(null,map__29352__$1,new cljs.core.Keyword("clojure.test.check.clojure-test","trial","clojure.test.check.clojure-test/trial",866433060));
var so_far = cljs.core.nth.call(null,vec__29353,(0),null);
var total = cljs.core.nth.call(null,vec__29353,(1),null);
if((so_far > (0))){
if((cljs.core.mod.call(null,so_far,(1000)) === (0))){
cljs.core.print.call(null,".");

cljs.core.flush.call(null);
} else {
}

if((so_far === total)){
return cljs.core.println.call(null);
} else {
return null;
}
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword("clojure.test.check.clojure-test","trial","clojure.test.check.clojure-test/trial",866433060)], null),(function (m){
var temp__4425__auto__ = (function (){var and__16783__auto__ = clojure.test.check.clojure_test._STAR_report_trials_STAR_;
if(cljs.core.truth_(and__16783__auto__)){
if(clojure.test.check.clojure_test._STAR_report_trials_STAR_ === true){
return clojure.test.check.clojure_test.trial_report_dots;
} else {
return clojure.test.check.clojure_test._STAR_report_trials_STAR_;
}
} else {
return and__16783__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var trial_report_fn = temp__4425__auto__;
return trial_report_fn.call(null,m);
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword("clojure.test.check.clojure-test","shrinking","clojure.test.check.clojure-test/shrinking",372289399)], null),(function (m){
if(cljs.core.truth_(clojure.test.check.clojure_test._STAR_report_shrinking_STAR_)){
return cljs.core.println.call(null,"Shrinking",clojure.test.check.clojure_test.get_property_name.call(null,m),"starting with parameters",cljs.core.pr_str.call(null,new cljs.core.Keyword("clojure.test.check.clojure-test","params","clojure.test.check.clojure-test/params",1851720992).cljs$core$IFn$_invoke$arity$1(m)));
} else {
return null;
}
}));
clojure.test.check.clojure_test.report_trial = (function clojure$test$check$clojure_test$report_trial(property_fun,so_far,num_tests){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("clojure.test.check.clojure-test","trial","clojure.test.check.clojure-test/trial",866433060),new cljs.core.Keyword("clojure.test.check.clojure-test","property","clojure.test.check.clojure-test/property",1356517781),property_fun,new cljs.core.Keyword("clojure.test.check.clojure-test","trial","clojure.test.check.clojure-test/trial",866433060),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [so_far,num_tests], null)], null));
});
clojure.test.check.clojure_test.report_failure = (function clojure$test$check$clojure_test$report_failure(property_fun,result,trial_number,failing_params){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("clojure.test.check.clojure-test","shrinking","clojure.test.check.clojure-test/shrinking",372289399),new cljs.core.Keyword("clojure.test.check.clojure-test","property","clojure.test.check.clojure-test/property",1356517781),property_fun,new cljs.core.Keyword("clojure.test.check.clojure-test","params","clojure.test.check.clojure-test/params",1851720992),cljs.core.vec.call(null,failing_params)], null));
});

//# sourceMappingURL=clojure_test.js.map