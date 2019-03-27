
        !function(e) {
            var t = {};
            function r(n) {
                if (t[n])
                    return t[n].exports;
                var o = t[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return e[n].call(o.exports, o, o.exports, r),
                o.l = !0,
                o.exports
            }
            r.m = e,
            r.c = t,
            r.d = function(e, t, n) {
                r.o(e, t) || Object.defineProperty(e, t, {
                    configurable: !1,
                    enumerable: !0,
                    get: n
                })
            }
            ,
            r.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                }
                : function() {
                    return e
                }
                ;
                return r.d(t, "a", t),
                t
            }
            ,
            r.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            r.p = "",
            r(r.s = 2)
        }([function(e, t) {
            e.exports = React
        }
        , function(e, t) {
            e.exports = PropTypes
        }
        , function(e, t, r) {
            "use strict";
            window.wsb = window.wsb || {},
            window.wsb.WrappedAbsLink = window.wsb.WrappedAbsLink || r(3)
        }
        , function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
              , o = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r),
                    n && e(t, n),
                    t
                }
            }()
              , i = r(0)
              , u = p(i)
              , a = p(r(1))
              , c = p(r(4))
              , f = p(r(5));
            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = function(e) {
                function t() {
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, i.Component),
                o(t, [{
                    key: "render",
                    value: function() {
                        var e = this.props.href
                          , t = this.props.isActive
                          , r = "undefined" != typeof window && (0,
                        c.default)(window.location.href) || {};
                        return r.r && (t = r.r === encodeURIComponent(e)),
                        u.default.createElement(f.default, n({}, this.props, {
                            isActive: t
                        }))
                    }
                }]),
                t
            }();
            s.propTypes = {
                href: a.default.string,
                isActive: a.default.bool
            },
            t.default = s,
            e.exports = t.default
        }
        , function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = function(e) {
                var t = void 0
                  , r = {}
                  , n = /(\?|&)([^=]+)=([^&]+)/g;
                do {
                    (t = n.exec(e)) && (r[t[2]] = t[3])
                } while (t);return r
            }
            ,
            e.exports = t.default
        }
        , function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
              , o = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r),
                    n && e(t, n),
                    t
                }
            }()
              , i = r(0)
              , u = f(i)
              , a = f(r(1))
              , c = r(6);
            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var p = {
                "/idx/wrapper": !0
            }
              , s = function(e) {
                function t() {
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, i.Component),
                o(t, [{
                    key: "render",
                    value: function() {
                        var e = c.UX2.Element.Link
                          , t = this.props
                          , r = t.renderMode
                          , o = t.pageRoute
                          , i = t.isActive
                          , a = function(e, t) {
                            var r = {};
                            for (var n in e)
                                t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
                            return r
                        }(t, ["renderMode", "pageRoute", "isActive"])
                          , f = r === c.constants.renderModes.PUBLISH && p[o]
                          , s = i ? e.Active : e;
                        return u.default.createElement(s, n({
                            convertToAbsolute: f
                        }, a))
                    }
                }]),
                t
            }();
            s.propTypes = {
                renderMode: a.default.string,
                pageRoute: a.default.string,
                isActive: a.default.bool
            },
            t.default = s,
            e.exports = t.default
        }
        , function(e, t) {
            e.exports = Core
        }
        ]);