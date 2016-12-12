(ns om-tutorial.core
  (:require [clojure.test.check :as tc]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop :include-macros true]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(enable-console-print!)

(defmulti read om/dispatch)

(defmethod read :people
  [{:keys [state query] :as env} key _]
  (let [st @state]
    {:value (om/db->tree query (get st key) st)}))

(defmulti mutate om/dispatch)

;; (defn add-friend [state id friend]
;;   (letfn [(add* [friends ref]
;;             (cond-> friends
;;               (not (some #{ref} friends)) (conj ref)))]
;;     (-> state
;;       (update-in [:person/by-id id :friends]
;;         add* [:person/by-id friend]))))

(defn add-friend [state id friend]
  (letfn [(add* [friends ref]
            (cond-> friends
              (not (some #{ref} friends)) (conj ref)))]
    (if-not (= id friend) ;; FIXED
      (-> state
        (update-in [:person/by-id id :friends]
          add* [:person/by-id friend]))
      state)))

(defmethod mutate 'friend/add
  [{:keys [state] :as env} key {:keys [id friend] :as params}]
  {:action
   (fn [] (swap! state add-friend id friend))})

(defn remove-friend [state id friend]
  (letfn [(remove* [friends ref]
            (cond->> friends
              (some #{ref} friends) (into [] (remove #{ref}))))]
    (-> state
      (update-in [:person/by-id id :friends]
        remove* [:person/by-id friend]))))

(defmethod mutate 'friend/remove
  [{:keys [state] :as env} key {:keys [id friend] :as params}]
  {:action (fn [] (swap! state remove-friend id friend))})

(def init-data
  {:people [{:id 0 :name "Bob" :friends []}
            {:id 1 :name "Laura" :friends []}
            {:id 2 :name "Mary" :friends []}]})

(defui Friend
  static om/Ident
  (ident [this props]
    [:person/by-id (:id props)])
  static om/IQuery
  (query [this]
    [:id :name]))

(defui Person
  static om/Ident
  (ident [this props]
    [:person/by-id (:id props)])
  static om/IQuery
  (query [this]
    [:id :name {:friends (om/get-query Friend)}]))

(defui People
  static om/IQuery
  (query [this]
    [{:people (om/get-query Person)}]))

(def app-state
  (atom (om/tree->db People init-data true)))

(def parser (om/parser {:read read :mutate mutate}))

(def gen-tx-add-remove
  (gen/vector
    (gen/fmap seq
      (gen/tuple
        (gen/elements '[friend/add friend/remove])
        (gen/fmap (fn [[n m]] {:id n :friend m})
          (gen/tuple
            (gen/elements [0 1 2])
            (gen/elements [0 1 2])))))))

;; (println (gen/sample gen-tx-add-remove 10))

(defn self-friended? [{:keys [id friends]}]
  (boolean (some #{id} (map :id friends))))

(defn prop-no-self-friending []
  (prop/for-all [tx gen-tx-add-remove]
    (let [parser (om/parser {:read read :mutate mutate})
          state  (atom (om/tree->db People init-data true))]
      (parser {:state state} tx)
      (let [ui (parser {:state state} (om/get-query People))]
        (not (some self-friended? (:people ui)))))))

(println (tc/quick-check 100 (prop-no-self-friending)))

(println "Hello world?")
