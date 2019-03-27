
        !function(e) {
            var t = {};
            function n(r) {
                if (t[r])
                    return t[r].exports;
                var o = t[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return e[r].call(o.exports, o, o.exports, n),
                o.l = !0,
                o.exports
            }
            n.m = e,
            n.c = t,
            n.d = function(e, t, r) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    configurable: !1,
                    enumerable: !0,
                    get: r
                })
            }
            ,
            n.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                }
                : function() {
                    return e
                }
                ;
                return n.d(t, "a", t),
                t
            }
            ,
            n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            n.p = "",
            n(n.s = 3)
        }([function(e, t) {
            e.exports = React
        }
        , function(e, t) {
            e.exports = PropTypes
        }
        , function(e, t) {
            e.exports = Core
        }
        , function(e, t, n) {
            "use strict";
            window.wsb = window.wsb || {},
            window.wsb.HeaderMobileFlyoutMenu = window.wsb.HeaderMobileFlyoutMenu || n(4)
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
              , o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value"in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n),
                    r && e(t, r),
                    t
                }
            }()
              , i = n(0)
              , a = f(i)
              , l = f(n(1))
              , u = n(2)
              , s = f(n(5))
              , c = f(n(9));
            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var p = function(e) {
                function t() {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var e = function(e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
                    return e.handleChange = e.handleChange.bind(e),
                    e.state = {
                        open: !1
                    },
                    e
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
                    key: "handleChange",
                    value: function(e) {
                        this.setState({
                            open: e
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props
                          , t = e.item
                          , n = e.styles
                          , o = e.domainName
                          , i = e.renderMode
                          , l = e.pageRoute
                          , f = this.state.open;
                        return a.default.createElement(u.UX2.Element.Block, null, a.default.createElement(s.default, r({}, this.props, {
                            style: n.link,
                            onChange: this.handleChange,
                            "data-edit-interactive": !0
                        }), a.default.createElement("span", {
                            style: {
                                pointerEvents: "none"
                            }
                        }, t.name), a.default.createElement(u.UX2.Element.Icon, {
                            icon: "chevronDown",
                            size: "small",
                            rotate: f ? "180" : "0",
                            style: {
                                position: "relative",
                                marginLeft: "xsmall",
                                color: "inherit",
                                flexShrink: "0",
                                pointerEvents: "none"
                            }
                        })), f && a.default.createElement(u.UX2.Element.List.Nested, {
                            style: n.subList
                        }, t.navigation.map(function(e) {
                            return a.default.createElement(u.UX2.Element.ListItem, {
                                tag: "li",
                                key: e.pageId,
                                style: n.subListItem
                            }, a.default.createElement(c.default, {
                                tag: "a",
                                style: r({}, n.sublink, e.active ? n.activeSublink : {
                                    fontWeight: "normal"
                                }),
                                href: e.href,
                                target: e.target,
                                rel: "_blank" === e.target ? "noopener" : "",
                                "data-page": e.pageId,
                                "data-edit-interactive": !0,
                                "data-close": !0,
                                renderMode: i,
                                domainName: o,
                                pageRoute: l,
                                "data-aid": "MOBILE_NAV_SUBLINK",
                                isActive: e.active
                            }, a.default.createElement("span", null, e.name)))
                        })))
                    }
                }]),
                t
            }();
            p.propTypes = {
                item: l.default.object.isRequired,
                styles: l.default.object.isRequired,
                domainName: l.default.string,
                renderMode: l.default.string,
                pageRoute: l.default.string
            },
            t.default = p,
            e.exports = t.default
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
              , o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value"in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n),
                    r && e(t, r),
                    t
                }
            }()
              , i = n(0)
              , a = p(i)
              , l = p(n(6))
              , u = p(n(1))
              , s = n(7)
              , c = n(2)
              , f = n(8);
            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var d = function(e) {
                function t() {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var e = function(e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
                    return e.handleClick = e.handleClick.bind(e),
                    e.handleToggle = e.handleToggle.bind(e),
                    e._id = (0,
                    s.uniqueId)(),
                    e.state = {
                        open: !1
                    },
                    e
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
                    key: "componentDidMount",
                    value: function() {
                        this._link = l.default.findDOMNode(this),
                        document.addEventListener("click", this.handleClick, !1)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        document.removeEventListener("click", this.handleClick, !1)
                    }
                }, {
                    key: "shouldClose",
                    value: function(e) {
                        var t = this.props
                          , n = t.closeAttr
                          , r = t.ignoreCloseAttr
                          , o = t.closeOnOutsideClick
                          , i = t.toggleId
                          , a = !0;
                        return n ? a = (0,
                        f.selfOrParentHasAttribute)(e.target, n) : r && (a = !(0,
                        f.selfOrParentHasAttribute)(e.target, r)),
                        !a && i && o && (a = !(0,
                        f.selfOrParentHasId)(e.target, i)),
                        a && !(0,
                        f.selfOrParentHasId)(e.target, this._id)
                    }
                }, {
                    key: "handleClick",
                    value: function(e) {
                        this.state.open && this.shouldClose(e) && this.setState({
                            open: !1
                        })
                    }
                }, {
                    key: "handleToggle",
                    value: function(e) {
                        e.preventDefault(),
                        this.setState({
                            open: !this.state.open
                        })
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e, t) {
                        var n = t.open
                          , r = this.props.onChange;
                        n !== this.state.open && r(this.state.open)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = (0,
                        s.omit)(this.props, ["onChange", "style"])
                          , t = this.props
                          , n = t.style
                          , o = t.activeStyle
                          , i = t.isActive
                          , l = r({
                            fontFamily: "alt",
                            fontColor: "highContrast",
                            fontColorHover: "highlight",
                            display: "inline-block"
                        }, i ? r({
                            display: "inline-flex",
                            alignItems: "center"
                        }, o) : r({}, n))
                          , u = i ? c.UX2.Element.Link.Active : c.UX2.Element.Link;
                        return a.default.createElement(u, r({
                            tag: "a",
                            style: l,
                            href: "#",
                            onClick: this.handleToggle,
                            "data-toggle-ignore": !0,
                            id: this._id
                        }, e))
                    }
                }]),
                t
            }();
            d.propTypes = {
                onChange: u.default.func.isRequired,
                closeAttr: u.default.string,
                ignoreCloseAttr: u.default.string,
                activeStyle: u.default.object,
                style: u.default.object,
                closeOnOutsideClick: u.default.bool,
                toggleId: u.default.string,
                isActive: u.default.bool
            },
            t.default = d,
            e.exports = t.default
        }
        , function(e, t) {
            e.exports = ReactDOM
        }
        , function(e, t) {
            e.exports = _
        }
        , function(e, t, n) {
            "use strict";
            function r(e, t, n) {
                for (var r = e; r; ) {
                    var o = r.getAttribute && r.getAttribute(t);
                    if (o && (void 0 === n || o === n))
                        return !0;
                    r = r.parentNode
                }
                return !1
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.selfOrParentHasAttribute = r,
            t.selfOrParentHasId = function(e, t) {
                return r(e, "id", t)
            }
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
              , o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value"in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n),
                    r && e(t, r),
                    t
                }
            }()
              , i = n(0)
              , a = s(i)
              , l = s(n(1))
              , u = n(2);
            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var c = {
                "/idx/wrapper": !0
            }
              , f = function(e) {
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
                        var e = u.UX2.Element.Link
                          , t = this.props
                          , n = t.renderMode
                          , o = t.pageRoute
                          , i = t.isActive
                          , l = function(e, t) {
                            var n = {};
                            for (var r in e)
                                t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                            return n
                        }(t, ["renderMode", "pageRoute", "isActive"])
                          , s = n === u.constants.renderModes.PUBLISH && c[o]
                          , f = i ? e.Active : e;
                        return a.default.createElement(f, r({
                            convertToAbsolute: s
                        }, l))
                    }
                }]),
                t
            }();
            f.propTypes = {
                renderMode: l.default.string,
                pageRoute: l.default.string,
                isActive: l.default.bool
            },
            t.default = f,
            e.exports = t.default
        }
        ]);