! function(e) {
 function t(r) {
  if (n[r]) return n[r].exports;
  var i = n[r] = {
   exports: {},
   id: r,
   loaded: !1
  };
  return e[r].call(i.exports, i, i.exports, t),
   i.loaded = !0,
   i.exports
 }
 var n = {};
 return t.m = e,
  t.c = n,
  t.p = "",
  t(0)
}([function(e, t, n) {
 e.exports = n(1)
}, function(e, t, n) {
 "use strict";
 window.guacImage = n(2)
}, function(e, t) {
 "use strict";

 function n(e, t, n, a) {
  n = n || {};
  var o, u, c, d, s, l = n.delay || 500,
   h = n.cellSize || {
    x: 20,
    y: 20
   },
   f = function(e, r) {
    var i = 'url("' + e + '")',
     a = i;
    if (n.backgroundLayers && n.backgroundLayers.constructor === Array) {
     var o = n.backgroundLayers.map(function(e) {
      return e.replace(/{width}/g, r.w).replace(/{height}/g, r.h)
     });
     a = [].concat(o, [i]).join(", ")
    }
    t.style.backgroundImage = a,
     setTimeout(function() {
      t.style.opacity = 1
     }, 300)
   }.bind(this),
   w = function() {
    a ? a(u, c) : n.useTreatmentData ? f(u, c) : t.style.backgroundImage = 'url("' + u + '")',
     t.setAttribute("data-guac-image", "loaded")
   }.bind(this),
   g = function() {
    t.setAttribute("data-guac-image", "loading"),
     o = null;
    var n = r(t, h);
    if (!n) return s();
    if (!c || n.w !== c.w || n.h !== c.h) return c = n,
     s(1);
    if (u = i(e, n, h), u !== d) {
     d = u;
     var a = document.createElement("img");
     a.src = u,
      a.complete || !a.addEventListener ? w() : a.addEventListener("load", w)
    }
   }.bind(this);
  s = function(e) {
    o && clearTimeout(o),
     o = setTimeout(g, isNaN(e) ? l : e)
   }.bind(this),
   this.unmount = function() {
    o && (clearTimeout(o), o = null),
     window.removeEventListener("resize", s)
   },
   window.addEventListener("resize", s),
   g()
 }

 function r(e, t) {
  var n = {
   w: t.x,
   h: t.y
  };
  if ("undefined" != typeof window && e) {
   var r = Math.min(window.devicePixelRatio || 1, 3),
    i = window.getComputedStyle(e);
   if (n.w = Math.round(parseInt(i.width, 10) * r), n.h = Math.round(parseInt(i.height, 10) * r), isNaN(n.w) || isNaN(n.h)) return
  }
  return n
 }

 function i(e, t, n) {
  var r = t.w % n.x,
   i = t.h % n.y,
   a = Math.max(r ? t.w + (n.x - r) : t.w, n.x),
   o = Math.max(i ? t.h + (n.y - i) : t.h, n.y);
  return e.replace(/\{width\}/g, a).replace(/\{height\}/g, o)
 }
 n.getUrl = function(e, t, n) {
   if (!t) throw new Error("cellSize is required");
   var a = r(n, t);
   if (a) return i(e, a, t)
  },
  e.exports = n
}]);