
        !function(t) {
            var e = {};
            function n(r) {
                if (e[r])
                    return e[r].exports;
                var o = e[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return t[r].call(o.exports, o, o.exports, n),
                o.l = !0,
                o.exports
            }
            n.m = t,
            n.c = e,
            n.d = function(t, e, r) {
                n.o(t, e) || Object.defineProperty(t, e, {
                    configurable: !1,
                    enumerable: !0,
                    get: r
                })
            }
            ,
            n.n = function(t) {
                var e = t && t.__esModule ? function() {
                    return t.default
                }
                : function() {
                    return t
                }
                ;
                return n.d(e, "a", e),
                e
            }
            ,
            n.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            ,
            n.p = "",
            n(n.s = 0)
        }([function(t, e, n) {
            "use strict";
            window.wsb = window.wsb || {},
            window.wsb.ActionText || (window.wsb.ActionText = n(1))
        }
        , function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            }
              , o = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value"in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n),
                    r && t(e, r),
                    e
                }
            }()
              , i = l(n(2))
              , u = n(3)
              , a = l(n(4))
              , c = n(5);
            function l(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var f = function(t) {
                function e() {
                    return function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    function(t, e) {
                        if (!t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e)
                        throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, i.default.Component),
                o(e, [{
                    key: "render",
                    value: function() {
                        var t = this.props
                          , e = t.id
                          , n = t.tagType
                          , o = t.text
                          , a = t.style
                          , l = t.script;
                        return i.default.createElement(u.UX2.Element.Block, {
                            id: e,
                            style: a
                        }, i.default.createElement(u.UX2.Element.Text, r({}, (0,
                        c.omit)(this.props, ["id", "style", "script", "dataAid", "tagType"]), {
                            tag: n,
                            children: o
                        })), l && i.default.createElement(u.UX.Script, {
                            shared: !0,
                            children: [l]
                        }))
                    }
                }]),
                e
            }();
            e.default = f,
            f.propTypes = {
                id: a.default.string,
                tagType: a.default.string,
                text: a.default.string,
                style: a.default.object,
                dataAid: a.default.string,
                onClick: a.default.func,
                script: a.default.string
            },
            f.defaultProps = {
                tagType: "div",
                text: "",
                style: {},
                onClick: c.noop
            },
            t.exports = e.default
        }
        , function(t, e) {
            t.exports = React
        }
        , function(t, e) {
            t.exports = Core
        }
        , function(t, e) {
            t.exports = PropTypes
        }
        , function(t, e) {
            t.exports = _
        }
        ]);