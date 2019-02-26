function logTcclEvent() {
 var t = this.getAttribute("data-tccl");
 if (window._trfq && t) try {
  for (var e = t.split(","), r = e[0], d = e[1], n = e.splice(2), c = [], o = 0; o < n.length; o += 2) c.push([n[o], n[o + 1]]);
  window._trfq.push(["cmdLogEvent", d, r, c])
 } catch (e) {
  window._trfq.push(["cmdLogEvent", "gc_published_site_error", "tccl.published.log", [
   ["error", e.toString()],
   ["data", t]
  ]])
 }
}
"undefined" != typeof window && "undefined" != typeof document && window.addEventListener("DOMContentLoaded", function() {
 for (var t = document.querySelectorAll("[data-tccl]"), e = 0; e < t.length; e++) try {
  var r = t[e].getAttribute("data-tccl").split(",");
  t[e].addEventListener(r[1], logTcclEvent)
 } catch (t) {
  window._trfq.push(["cmdLogEvent", "gc_published_site_error", "tccl.published.add", [
   ["error", t.toString()]
  ]])
 }
});