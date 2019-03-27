
        !function(e) {
            var t = {};
            function n(i) {
                if (t[i])
                    return t[i].exports;
                var o = t[i] = {
                    i: i,
                    l: !1,
                    exports: {}
                };
                return e[i].call(o.exports, o, o.exports, n),
                o.l = !0,
                o.exports
            }
            n.m = e,
            n.c = t,
            n.d = function(e, t, i) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    configurable: !1,
                    enumerable: !0,
                    get: i
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
            n(n.s = 6)
        }([function(e, t) {
            e.exports = _
        }
        , function(e, t) {
            e.exports = PropTypes
        }
        , function(e, t) {
            e.exports = React
        }
        , function(e, t) {
            e.exports = Core
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.isImbalanced = t.getEditorPageScale = t.getRichTextCharCount = t.getRichText = t.resolveForCharCount = t.resolveFontSizeCharCount = t.stringToChildren = t.spacingHorizontal = t.spacingVertical = void 0;
            var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
              , o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
              , r = n(0)
              , l = (t.spacingVertical = function() {
                return {
                    "> :nth-child(n)": {
                        marginBottom: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "medium"
                    },
                    " > :last-child": {
                        marginBottom: "0 !important"
                    }
                }
            }
            ,
            t.spacingHorizontal = function() {
                return {
                    "> :nth-child(n)": {
                        marginRight: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "medium"
                    },
                    " > :last-child": {
                        marginRight: "0 !important"
                    }
                }
            }
            ,
            t.stringToChildren = function(e) {
                if ("string" == typeof e)
                    return {
                        children: e.trim()
                    };
                if (e && "object" === (void 0 === e ? "undefined" : o(e))) {
                    var t = e.children
                      , n = void 0 === t ? null : t;
                    return "string" == typeof n && (n = n.trim()),
                    i({}, e, {
                        children: n
                    })
                }
                return {
                    children: null
                }
            }
            ,
            t.resolveFontSizeCharCount = function(e) {
                var t = e.count
                  , n = void 0 === t ? 0 : t
                  , i = e.fontSizeMap
                  , o = void 0 === i ? {} : i
                  , l = e.defaultFontSize;
                return Object.keys(o).reduce(function(e, t) {
                    return e || (0,
                    r.inRange)(n, o[t][0], o[t][1] || 500) && t
                }, !1) || l
            }
            ,
            t.resolveForCharCount = function(e) {
                var t = e.count
                  , n = void 0 === t ? 0 : t
                  , i = e.valueMap
                  , o = void 0 === i ? {} : i
                  , l = e.defaultValue
                  , a = e.maxCharCount
                  , s = void 0 === a ? 500 : a;
                return Object.keys(o).reduce(function(e, t) {
                    return e || (0,
                    r.inRange)(n, o[t][0], o[t][1] || s) && t
                }, !1) || l
            }
            ,
            t.getRichText = function(e) {
                try {
                    return JSON.parse(e)
                } catch (e) {
                    return {}
                }
            }
            );
            t.getRichTextCharCount = function(e) {
                var t = l(e)
                  , n = 0;
                return t.blocks && t.blocks.forEach(function(e) {
                    var t = e.text.length;
                    n += (0,
                    r.clamp)(t, 25, Math.max(t, 25))
                }),
                n
            }
            ,
            t.getEditorPageScale = function() {
                var e = document.getElementById("render-container")
                  , t = 1;
                if (e) {
                    var n = e.firstChild.style.transform.match(/[0-9.]+/);
                    t = n && n.length > 0 ? n[0] : 1
                }
                return t
            }
            ,
            t.isImbalanced = function(e, t) {
                var n = (0,
                r.last)(e)
                  , i = (0,
                r.sum)(e)
                  , o = (0,
                r.sum)(t);
                return Math.abs(i - o) > Math.abs(i - n - (o + n))
            }
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i, o = n(9), r = (i = o) && i.__esModule ? i : {
                default: i
            };
            t.default = (0,
            r.default)({
                BACKGROUND_IMAGE_RENDERED: null,
                HAMBURGER_MENU_LINK: null,
                HEADER_WIDGET: null,
                HEADER_SECTION: null,
                HEADER_VIDEO: null,
                HEADER_PHONE_RENDERED: null,
                HEADER_PIPE_RENDERED: null,
                HEADER_ADDRESS_RENDERED: null,
                HEADER_LOGO_RENDERED: null,
                HEADER_LOGO_IMAGE_RENDERED: null,
                HEADER_TAGLINE_RENDERED: null,
                HEADER_TAGLINE2_RENDERED: null,
                HEADER_NAV_RENDERED: null,
                HEADER_CTA_BTN: null,
                CART_ICON_RENDER: null,
                CART_ICON_COUNT: null,
                CART_ICON_PIPE: null,
                CART_TEXT: null,
                SEARCH_FORM_RENDERED: null,
                SEARCH_ICON_RENDERED: null,
                SEARCH_ICON_RENDERED_OPEN: null,
                SEARCH_CLOSE_RENDERED: null,
                SEARCH_FIELD_RENDERED: null,
                NAV_MORE: null,
                NAV_DROPDOWN: null,
                i18n_ICON_RENDERED: null,
                i18n_BAR_RENDERED: null,
                BANNER_RENDERED: null,
                BANNER_TEXT_RENDERED: null,
                GROUP_RENDERED: null,
                MEMBERSHIP_EMAIL_ADDRESS: null,
                MEMBERSHIP_SIGNOUT_LINK: null,
                MEMBERSHIP_SIGNIN_LINK: null,
                MEMBERSHIP_ICON_RENDERED: null,
                MEMBERSHIP_ICON_DESKTOP_RENDERED: null,
                SEASONAL_FALL_LEFT_ICON_RENDERED: null,
                SEASONAL_FALL_RIGHT_ICON_RENDERED: null,
                SEASONAL_WINTER_LEFT_ICON_RENDERED: null,
                SEASONAL_WINTER_RIGHT_ICON_RENDERED: null
            }),
            e.exports = t.default
        }
        , function(e, t, n) {
            "use strict";
            window.wsb = window.wsb || {},
            window.wsb.NavOverflow = window.wsb.NavOverflow || n(7)
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
              , o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value"in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n),
                    i && e(t, i),
                    t
                }
            }()
              , r = p(n(1))
              , l = n(2)
              , a = p(l)
              , s = n(0)
              , u = n(4)
              , c = n(8)
              , d = p(n(5))
              , f = p(n(10))
              , h = p(n(11));
            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var v = void 0
              , E = function(e) {
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
                    return e.handleResize = e.handleResize.bind(e),
                    e.throttleResize = e.throttleResize.bind(e),
                    e.renderNavItems = e.renderNavItems.bind(e),
                    e.renderSplitNavItems = e.renderSplitNavItems.bind(e),
                    e.state = {
                        isActive: !1
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
                }(t, l.Component),
                o(t, [{
                    key: "componentDidMount",
                    value: function() {
                        (0,
                        f.default)(),
                        this.mounted = !0,
                        window.addEventListener("resize", this.throttleResize, {
                            passive: !0
                        }),
                        window.addEventListener("CartQuantityChange", this.throttleResize, {
                            passive: !0
                        }),
                        this.handleResize()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.mounted = !1,
                        window.removeEventListener("resize", this.throttleResize, {
                            passive: !0
                        }),
                        window.removeEventListener("CartQuantityChange", this.throttleResize, {
                            passive: !0
                        })
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e, t) {
                        !t.isActive && this.state.isActive || this.handleResize()
                    }
                }, {
                    key: "resetVisibility",
                    value: function(e) {
                        e.forEach(function(e) {
                            e.style.display = "",
                            e.style.visibility = "hidden",
                            e.classList.remove("visible"),
                            e.classList.remove("last-visible-nav-item")
                        })
                    }
                }, {
                    key: "throttleResize",
                    value: function() {
                        window.clearTimeout(v),
                        v = setTimeout(this.handleResize, 100)
                    }
                }, {
                    key: "handleResize",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                          , t = this.props
                          , n = t.parentId
                          , i = t.splitNavId
                          , o = t.inlineUtilitiesMenu;
                        if (!(e > 5) && this.mounted && "undefined" != typeof document && n) {
                            var r = document.getElementById(n);
                            if (this.items = r && Array.prototype.slice.call(r.children),
                            this.items && this.items.length) {
                                this.resetVisibility(this.items),
                                o && (this.inlineUtilitiesMenu = this.items.pop(),
                                (0,
                                c.show)(this.inlineUtilitiesMenu)),
                                this.more = this.items.pop();
                                var l = this.more && this.more.querySelector("ul");
                                if (this.moreItems = l && Array.prototype.slice.call(l.children),
                                this.moreItems && this.moreItems.length)
                                    return this.resetVisibility(this.moreItems),
                                    this.maxWidth = (0,
                                    c.getWidth)(r.parentElement, "floor"),
                                    i ? this.renderSplitNavItems(e) : this.renderNavItems();
                                setTimeout(this.handleResize.bind(this, ++e), 1)
                            } else
                                setTimeout(this.handleResize.bind(this, ++e), 1)
                        }
                    }
                }, {
                    key: "renderNavItems",
                    value: function() {
                        var e = this.items
                          , t = this.more
                          , n = this.moreItems
                          , i = this.maxWidth
                          , o = this.inlineUtilitiesMenu
                          , r = (0,
                        c.getWidths)(e)
                          , l = (0,
                        c.getWidth)(t)
                          , a = i - (o ? (0,
                        c.getWidth)(o) : 0)
                          , u = !1;
                        if ((0,
                        s.sum)(r) > a) {
                            var d = e.length - 1
                              , f = (0,
                            s.sum)(r);
                            (0,
                            s.forEachRight)(r, function(e) {
                                f + l < a || (f -= e,
                                d--)
                            }),
                            d++;
                            for (var h = 0; h < d; h++)
                                (0,
                                c.show)(e[h]),
                                (0,
                                c.hide)(n[h]);
                            for (var p = d; p < e.length; p++)
                                (0,
                                c.hide)(e[p]),
                                (0,
                                c.show)(n[p]),
                                e[p].querySelector('[data-ux="NavLinkActive"]') && (u = !0);
                            (0,
                            c.show)(t)
                        } else
                            e.forEach(function(e) {
                                return (0,
                                c.show)(e)
                            }),
                            (0,
                            c.hide)(t);
                        u !== this.state.isActive && this.setState({
                            isActive: u
                        })
                    }
                }, {
                    key: "renderSplitNavItems",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                          , t = this.props.splitNavId
                          , n = this.items
                          , i = this.more
                          , o = this.moreItems
                          , r = this.maxWidth
                          , l = this.inlineUtilitiesMenu
                          , a = document.getElementById(t);
                        this.leftItems = a && a.children && [].slice.call(a.children);
                        var d = this.leftItems;
                        if (d && d.length) {
                            var f = d.pop()
                              , h = (0,
                            c.getWidths)(n)
                              , p = 0
                              , v = l ? (0,
                            c.getWidth)(l) : 0
                              , E = 0
                              , y = h.concat(v).findIndex(function(e) {
                                if (E + e > r)
                                    return e;
                                E += e
                            });
                            y < 0 && (y = h.length);
                            var g = h.slice(0, y)
                              , m = h.slice(y)
                              , b = !1;
                            for ((0,
                            s.forEachRight)(h, function() {
                                (0,
                                s.sum)(m) + p + v < r || (m.pop(),
                                b = !0,
                                p = (0,
                                c.getWidth)(i))
                            }); g.length > 1 && (0,
                            u.isImbalanced)(g, m.concat([p, v])); )
                                m.unshift(g.pop());
                            for (var _ = !1, R = 0; R < g.length; R++)
                                (0,
                                c.show)(d[R]),
                                (0,
                                c.hide)(n[R]),
                                (0,
                                c.hide)(o[R]);
                            for (var O = g.length; O < g.length + m.length; O++)
                                (0,
                                c.hide)(d[O]),
                                (0,
                                c.show)(n[O]),
                                (0,
                                c.hide)(o[O]);
                            for (var I = g.length + m.length; I < n.length; I++)
                                (0,
                                c.hide)(d[I]),
                                (0,
                                c.hide)(n[I]),
                                (0,
                                c.show)(o[I]),
                                n[I].querySelector('[data-ux="NavLinkActive"]') && (_ = !0);
                            b ? (0,
                            c.show)(i) : (0,
                            c.hide)(i),
                            (0,
                            c.hide)(f),
                            _ !== this.state.isActive && this.setState({
                                isActive: _
                            }),
                            (l || (b ? i : (0,
                            s.last)(n))).classList.add("last-visible-nav-item")
                        } else
                            setTimeout(this.handleResize.bind(this, ++e), 1)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props
                          , t = e.enableActiveFlyoutMenu
                          , n = e.hideDropdown
                          , o = function(e, t) {
                            var n = {};
                            for (var i in e)
                                t.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
                            return n
                        }(e, ["enableActiveFlyoutMenu", "hideDropdown"]);
                        return n ? null : a.default.createElement(h.default, i({}, (0,
                        s.pick)(o, ["style", "toggleId", "navBarId", "parentId", "activeProps", "label", "enableNoOverlapDropdown"]), {
                            "data-aid": d.default.NAV_MORE,
                            ignoreCloseAttr: "data-ignore-close",
                            isActive: t && this.state.isActive
                        }))
                    }
                }]),
                t
            }();
            E.propTypes = {
                parentId: r.default.string.isRequired,
                toggleId: r.default.string.isRequired,
                splitNavId: r.default.string,
                activeProps: r.default.object,
                label: r.default.string.isRequired,
                renderMode: r.default.string.isRequired,
                style: r.default.object,
                enableActiveFlyoutMenu: r.default.bool,
                enableNoOverlapDropdown: r.default.bool,
                hideDropdown: r.default.bool,
                inlineUtilitiesMenu: r.default.bool
            },
            E.defaultProps = {
                activeProps: {}
            },
            t.default = E,
            e.exports = t.default
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.getMobileViewportHeight = t.getMobileViewportContainer = t.show = t.hide = t.getWidths = t.getWidth = void 0;
            var i = n(0)
              , o = n(3).constants.renderModes
              , r = t.getWidth = function(e) {
                return "ceil" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ceil") ? Math.ceil(e.getBoundingClientRect().width) : Math.floor(e.getBoundingClientRect().width)
            }
              , l = (t.getWidths = function(e) {
                return e.map(function(e) {
                    return r(e)
                })
            }
            ,
            t.hide = function(e) {
                e.style.display = "none",
                e.style.visibility = "hidden",
                e.classList.remove("visible")
            }
            ,
            t.show = function(e) {
                e.style.display = "",
                e.style.visibility = "visible",
                e.classList.add("visible")
            }
            ,
            t.getMobileViewportContainer = function(e) {
                return e === o.PREVIEW && (document.querySelector(".mobile-phone-preview-container .viewport") || document.querySelector("#render-container")) || document.querySelector("body")
            }
            );
            t.getMobileViewportHeight = function(e) {
                if ("undefined" == typeof document || e !== o.PREVIEW)
                    return "100vh";
                var t = l(e);
                if (!t)
                    return "100vh";
                var n = document.querySelector(".mobile-phone-preview-container .ux-scaled")
                  , r = 1;
                if (n) {
                    var a = (0,
                    i.get)(n, "style.transform", "").match(/[0-9.]+/);
                    a && a.length > 0 && (r = a[0])
                }
                return t.getBoundingClientRect().height / r
            }
        }
        , function(e, t) {
            e.exports = keyMirror
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ;
            t.default = function() {
                if (o)
                    return;
                o = !0;
                var e = window.EventTarget || window.Node
                  , t = !1;
                if (document.createElement("div").addEventListener("test", function() {}, {
                    get passive() {
                        return t = !0,
                        !1
                    }
                }),
                !t) {
                    var n = e.prototype.addEventListener
                      , r = e.prototype.removeEventListener;
                    e.prototype.addEventListener = function(e, t, o) {
                        var r = "object" === (void 0 === o ? "undefined" : i(o)) ? o.capture : o;
                        n.call(this, e, t, r)
                    }
                    ,
                    e.prototype.removeEventListener = function(e, t, n) {
                        var o = "object" === (void 0 === n ? "undefined" : i(n)) ? n.capture : n;
                        r.call(this, e, t, o)
                    }
                }
            }
            ;
            var o = !1;
            e.exports = t.default
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
              , o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value"in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n),
                    i && e(t, i),
                    t
                }
            }()
              , r = n(2)
              , l = p(r)
              , a = p(n(1))
              , s = n(0)
              , u = n(3)
              , c = p(n(12))
              , d = p(n(15))
              , f = n(4)
              , h = p(n(5));
            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var v = function(e) {
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
                }(t, r.Component),
                o(t, [{
                    key: "handleChange",
                    value: function() {
                        this.setState({
                            open: !this.state.open
                        })
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e, t) {
                        if (t.open !== this.state.open) {
                            var n = e.toggleId
                              , i = document.getElementById(n);
                            i && (this.props.enableNoOverlapDropdown && i.setAttribute("style", "top: " + this.handleDropdownOffsetChange() + "px"),
                            i.classList.toggle(d.default.HIDE_CLASS, !this.state.open))
                        }
                    }
                }, {
                    key: "handleDropdownOffsetChange",
                    value: function() {
                        var e = this.props
                          , t = e.navBarId
                          , n = e.parentId
                          , i = document.getElementById(t).getBoundingClientRect()
                          , o = document.getElementById(n).getElementsByTagName("li")[0].getBoundingClientRect()
                          , r = (0,
                        f.getEditorPageScale)();
                        return i && o ? (i.height - (o.top - i.top)) / r : 0
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props
                          , n = e.label
                          , o = e.renderCustomIcon
                          , r = e.id
                          , a = e.isActive
                          , d = e.overrideIconStyle
                          , f = e.dataAid
                          , p = e.hasHover
                          , v = this.state.open
                          , E = (0,
                        s.omit)(this.props, Object.keys(t.propTypes).concat(["Component", "renderMode"]))
                          , y = v ? "180" : "0"
                          , g = i({
                            position: "relative",
                            marginLeft: "xsmall",
                            top: "3px",
                            color: "inherit"
                        }, d);
                        return l.default.createElement(u.UX2.Element.Block, {
                            style: {
                                display: "flex"
                            }
                        }, l.default.createElement(c.default, i({
                            onChange: this.handleChange,
                            isActive: a
                        }, E, v && this.props.activeProps, {
                            "data-edit-interactive": !0
                        }), l.default.createElement("div", {
                            style: {
                                pointerEvents: p ? "auto" : "none"
                            },
                            "data-aid": f || h.default.NAV_DROPDOWN
                        }, n, l.default.createElement(u.UX2.Element.Icon, {
                            id: r,
                            icon: o.name || "chevronDown",
                            size: o.size || "small",
                            rotate: o.name ? "" : y,
                            style: g
                        }))))
                    }
                }]),
                t
            }();
            v.propTypes = {
                toggleId: a.default.string.isRequired,
                activeProps: a.default.object,
                label: a.default.string.isRequired,
                renderCustomIcon: a.default.object,
                id: a.default.string,
                isActive: a.default.bool,
                enableNoOverlapDropdown: a.default.bool,
                widgetId: a.default.string,
                overrideIconStyle: a.default.object,
                dataAid: a.default.string,
                hasHover: a.default.bool,
                navBarId: a.default.string,
                parentId: a.default.string
            },
            v.defaultProps = {
                activeProps: {},
                label: "",
                renderCustomIcon: {},
                hasHover: !1
            },
            t.default = v,
            e.exports = t.default
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
              , o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value"in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n),
                    i && e(t, i),
                    t
                }
            }()
              , r = n(2)
              , l = f(r)
              , a = f(n(13))
              , s = f(n(1))
              , u = n(0)
              , c = n(3)
              , d = n(14);
            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var h = function(e) {
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
                    u.uniqueId)(),
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
                }(t, r.Component),
                o(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this._link = a.default.findDOMNode(this),
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
                          , i = t.ignoreCloseAttr
                          , o = t.closeOnOutsideClick
                          , r = t.toggleId
                          , l = !0;
                        return n ? l = (0,
                        d.selfOrParentHasAttribute)(e.target, n) : i && (l = !(0,
                        d.selfOrParentHasAttribute)(e.target, i)),
                        !l && r && o && (l = !(0,
                        d.selfOrParentHasId)(e.target, r)),
                        l && !(0,
                        d.selfOrParentHasId)(e.target, this._id)
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
                          , i = this.props.onChange;
                        n !== this.state.open && i(this.state.open)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = (0,
                        u.omit)(this.props, ["onChange", "style"])
                          , t = this.props
                          , n = t.style
                          , o = t.activeStyle
                          , r = t.isActive
                          , a = i({
                            fontFamily: "alt",
                            fontColor: "highContrast",
                            fontColorHover: "highlight",
                            display: "inline-block"
                        }, r ? i({
                            display: "inline-flex",
                            alignItems: "center"
                        }, o) : i({}, n))
                          , s = r ? c.UX2.Element.Link.Active : c.UX2.Element.Link;
                        return l.default.createElement(s, i({
                            tag: "a",
                            style: a,
                            href: "#",
                            onClick: this.handleToggle,
                            "data-toggle-ignore": !0,
                            id: this._id
                        }, e))
                    }
                }]),
                t
            }();
            h.propTypes = {
                onChange: s.default.func.isRequired,
                closeAttr: s.default.string,
                ignoreCloseAttr: s.default.string,
                activeStyle: s.default.object,
                style: s.default.object,
                closeOnOutsideClick: s.default.bool,
                toggleId: s.default.string,
                isActive: s.default.bool
            },
            t.default = h,
            e.exports = t.default
        }
        , function(e, t) {
            e.exports = ReactDOM
        }
        , function(e, t, n) {
            "use strict";
            function i(e, t, n) {
                for (var i = e; i; ) {
                    var o = i.getAttribute && i.getAttribute(t);
                    if (o && (void 0 === n || o === n))
                        return !0;
                    i = i.parentNode
                }
                return !1
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.selfOrParentHasAttribute = i,
            t.selfOrParentHasId = function(e, t) {
                return i(e, "id", t)
            }
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = {
                DESKTOP_MAX_ITEMS: 3,
                CLOSE_ICON: "✕",
                PIPE_ICON: "|",
                MAGNIFY_ICON: "magGlass",
                HIDE_CLASS: "px_-d-none",
                CART_PARAMS: "olsPage=cart",
                SEARCH_PARAMS: "olsPage=search"
            },
            e.exports = t.default
        }
        ]);