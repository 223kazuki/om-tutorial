;; (ns om-tutorial.core
;;   (:require [goog.dom :as gdom]
;;             [goog.crypt :as gcrypt]
;;             [cognitect.transit :as t]
;;             [om.next :as om :refer-macros [defui]]
;;             [om.dom :as dom]
;;             [cljs.pprint :as pprint])
;;   (:import [goog.crypt Sha256]))
;; 
;; (enable-console-print!)
;; 
;; (def init-data
;;   {:dashboard/items
;;    [{:id 0 :type :dashboard/post
;;      :author "Laura Smith"
;;      :title "A Post!"
;;      :content "Lorem ipsum dolor sit amet, quem atomorum te quo"}
;;     {:id 1 :type :dashboard/photo
;;      :title "A Photo!"
;;      :image "photo.jpg"
;;      :caption "Lorem ipsum"}
;;     {:id 2 :type :dashboard/post
;;      :author "Jim Jacobs"
;;      :title "Another Post!"
;;      :content "Lorem ipsum dolor sit amet, quem atomorum te quo"}
;;     {:id 3 :type :dashboard/graphic
;;      :title "Charts and Stufff!"
;;      :image "chart.jpg"}
;;     {:id 4 :type :dashboard/post
;;      :author "May Fields"
;;      :title "Yet Another Post!"
;;      :content "Lorem ipsum dolor sit amet, quem atomorum te quo"}]})
;; 
;; (defui Post
;;   static om/IQuery
;;   (query [this]
;;     [:id :type :title :author :content]))
;; 
;; (defui Photo
;;   static om/IQuery
;;   (query [this]
;;     [:id :type :title :image :caption]))
;; 
;; (defui Graphic
;;   static om/IQuery
;;   (query [this]
;;     [:id :type :image]))
;; 
;; (defui DashboardItem
;;   static om/Ident
;;   (ident [this {:keys [id type]}]
;;     [type id])
;;   static om/IQuery
;;   (query [this]
;;     (zipmap
;;       [:dashboard/post :dashboard/photo :dashboard/graphic]
;;       (map #(conj % :favorites)
;;         [(om/get-query Post)
;;          (om/get-query Photo)
;;          (om/get-query Graphic)]))))
;; 
;; (defui Dashboard
;;   static om/IQuery
;;   (query [this]
;;     [{:dashboard/items (om/get-query DashboardItem)}]))
;; 
;; (defmulti read om/dispatch)
;; 
;; (defmethod read :dashboard/items
;;   [{:keys [state ast]} k _]
;;   (let [st @state]
;;     {:value   (into [] (map #(get-in st %)) (get st k))
;;      :dynamic (update-in ast [:query]
;;                 #(->> (for [[k _] %]
;;                         [k [:favorites]])
;;                   (into {})))
;;      :static  (update-in ast [:query]
;;                 #(->> (for [[k v] %]
;;                         [k (into [] (remove #{:favorites}) v)])
;;                   (into {})))}))
;; 
;; (defn sha-256 [s]
;;   (let [sha (Sha256.)
;;         _   (.update sha s)]
;;     (gcrypt/byteArrayToHex (.digest sha))))
;; 
;; (def p (om/parser {:read read}))
;; (def w (t/writer :json))
;; (def app-state (atom (om/tree->db Dashboard init-data true)))
;; 
;; (println (p {:state app-state} (om/get-query Dashboard) :static))
;; 
;; (println
;;   (let [query (p {:state app-state} (om/get-query Dashboard) :static)
;;         json (t/write w query)
;;         hash (.substring (sha-256 json) 0 16)]
;;     (str "/api/" hash)))
;; 
;; (println (p {:state app-state} (om/get-query Dashboard) :dynamic))
;; 
;; (println
;;   (let [query (p {:state app-state} (om/get-query Dashboard) :dynamic)
;;         json (t/write w query)
;;         hash (.substring (sha-256 json) 0 16)]
;;     (str "/api/" hash)))

(ns om-tutorial.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [goog.dom :as gdom]
            [cljs.core.async :as async :refer [<! >! put! chan]]
            [clojure.string :as string]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom])
  (:import [goog Uri]
           [goog.net Jsonp]))

(enable-console-print!)

(def base-url
  "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=")

(defn jsonp
  ([uri] (jsonp (chan) uri))
  ([c uri]
   (let [gjsonp (Jsonp. (Uri. uri))]
     (.send gjsonp nil #(put! c %))
     c)))

(defmulti read om/dispatch)

(defmethod read :search/results
  [{:keys [state ast] :as env} k {:keys [query]}]
  (merge
    {:value (get @state k [])}
    (when-not (or (string/blank? query)
                  (< (count query) 3))
      {:search ast})))

(defn result-list [results]
  (dom/ul #js {:key "result-list"}
          (map #(dom/li nil %) results)))

(defn search-field [ac query]
  (dom/input
    #js {:key "search-field"
         :value query
         :onChange
         (fn [e]
           (om/set-query! ac
                          {:params {:query (.. e -target -value)}}))}))

(defui AutoCompleter
  static om/IQueryParams
  (params [_]
          {:query ""})
  static om/IQuery
  (query [_]
         '[(:search/results {:query ?query})])
  Object
  (render [this]
          (let [{:keys [search/results]} (om/props this)]
            (dom/div nil
                     (dom/h2 nil "AutoCompleter")
                     (cond->
                       [(search-field this (:query (om/get-params this)))]
                       (not (empty? results)) (conj (result-list results)))))))

(defn search-loop [c]
  (go
    (loop [[query cb] (<! c)]
      (let [[_ results] (<! (jsonp (str base-url query)))]
        (cb {:search/results results}))
      (recur (<! c)))))

(defn send-to-chan [c]
  (fn [{:keys [search]} cb]
    (when search
      (let [{[search] :children} (om/query->ast search)
            query (get-in search [:params :query])]
        (put! c [query cb])))))

(def send-chan (chan))

(def reconciler
  (om/reconciler
    {:state {:search/results []}
     :parser (om/parser {:read read})
     :send (send-to-chan send-chan)
     :remotes [:search]}))

(search-loop send-chan)

(om/add-root! reconciler AutoCompleter
              (gdom/getElement "app"))

(println "Hello World")

(println (om/query->ast '[(:foo {:bar 1})]))
(println (om/ast->query {:type :root, :children [{:type :prop, :dispatch-key :foo, :key :foo, :params {:bar 1}}]}))
