
        !function(e) {
            var t = {};
            function n(o) {
                if (t[o])
                    return t[o].exports;
                var r = t[o] = {
                    i: o,
                    l: !1,
                    exports: {}
                };
                return e[o].call(r.exports, r, r.exports, n),
                r.l = !0,
                r.exports
            }
            n.m = e,
            n.c = t,
            n.d = function(e, t, o) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    configurable: !1,
                    enumerable: !0,
                    get: o
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
            n(n.s = 4)
        }([function(e, t) {
            e.exports = _
        }
        , function(e, t) {
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
            window.wsb.HeaderFlyoutMenu = window.wsb.HeaderFlyoutMenu || n(5)
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
              , r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1,
                        o.configurable = !0,
                        "value"in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n),
                    o && e(t, o),
                    t
                }
            }()
              , l = n(1)
              , i = p(l)
              , a = p(n(2))
              , u = n(0)
              , s = n(3)
              , c = p(n(6))
              , f = p(n(9))
              , d = n(10)
              , E = p(n(11));
            function p(e) {
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
                }(t, l.Component),
                r(t, [{
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
                              , o = document.getElementById(n);
                            o && (this.props.enableNoOverlapDropdown && o.setAttribute("style", "top: " + this.handleDropdownOffsetChange() + "px"),
                            o.classList.toggle(f.default.HIDE_CLASS, !this.state.open))
                        }
                    }
                }, {
                    key: "handleDropdownOffsetChange",
                    value: function() {
                        var e = this.props
                          , t = e.navBarId
                          , n = e.parentId
                          , o = document.getElementById(t).getBoundingClientRect()
                          , r = document.getElementById(n).getElementsByTagName("li")[0].getBoundingClientRect()
                          , l = (0,
                        d.getEditorPageScale)();
                        return o && r ? (o.height - (r.top - o.top)) / l : 0
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props
                          , n = e.label
                          , r = e.renderCustomIcon
                          , l = e.id
                          , a = e.isActive
                          , f = e.overrideIconStyle
                          , d = e.dataAid
                          , p = e.hasHover
                          , h = this.state.open
                          , _ = (0,
                        u.omit)(this.props, Object.keys(t.propTypes).concat(["Component", "renderMode"]))
                          , g = h ? "180" : "0"
                          , R = o({
                            position: "relative",
                            marginLeft: "xsmall",
                            top: "3px",
                            color: "inherit"
                        }, f);
                        return i.default.createElement(s.UX2.Element.Block, {
                            style: {
                                display: "flex"
                            }
                        }, i.default.createElement(c.default, o({
                            onChange: this.handleChange,
                            isActive: a
                        }, _, h && this.props.activeProps, {
                            "data-edit-interactive": !0
                        }), i.default.createElement("div", {
                            style: {
                                pointerEvents: p ? "auto" : "none"
                            },
                            "data-aid": d || E.default.NAV_DROPDOWN
                        }, n, i.default.createElement(s.UX2.Element.Icon, {
                            id: l,
                            icon: r.name || "chevronDown",
                            size: r.size || "small",
                            rotate: r.name ? "" : g,
                            style: R
                        }))))
                    }
                }]),
                t
            }();
            h.propTypes = {
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
            h.defaultProps = {
                activeProps: {},
                label: "",
                renderCustomIcon: {},
                hasHover: !1
            },
            t.default = h,
            e.exports = t.default
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
              , r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1,
                        o.configurable = !0,
                        "value"in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n),
                    o && e(t, o),
                    t
                }
            }()
              , l = n(1)
              , i = d(l)
              , a = d(n(7))
              , u = d(n(2))
              , s = n(0)
              , c = n(3)
              , f = n(8);
            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var E = function(e) {
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
                }(t, l.Component),
                r(t, [{
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
                          , o = t.ignoreCloseAttr
                          , r = t.closeOnOutsideClick
                          , l = t.toggleId
                          , i = !0;
                        return n ? i = (0,
                        f.selfOrParentHasAttribute)(e.target, n) : o && (i = !(0,
                        f.selfOrParentHasAttribute)(e.target, o)),
                        !i && l && r && (i = !(0,
                        f.selfOrParentHasId)(e.target, l)),
                        i && !(0,
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
                          , o = this.props.onChange;
                        n !== this.state.open && o(this.state.open)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = (0,
                        s.omit)(this.props, ["onChange", "style"])
                          , t = this.props
                          , n = t.style
                          , r = t.activeStyle
                          , l = t.isActive
                          , a = o({
                            fontFamily: "alt",
                            fontColor: "highContrast",
                            fontColorHover: "highlight",
                            display: "inline-block"
                        }, l ? o({
                            display: "inline-flex",
                            alignItems: "center"
                        }, r) : o({}, n))
                          , u = l ? c.UX2.Element.Link.Active : c.UX2.Element.Link;
                        return i.default.createElement(u, o({
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
            E.propTypes = {
                onChange: u.default.func.isRequired,
                closeAttr: u.default.string,
                ignoreCloseAttr: u.default.string,
                activeStyle: u.default.object,
                style: u.default.object,
                closeOnOutsideClick: u.default.bool,
                toggleId: u.default.string,
                isActive: u.default.bool
            },
            t.default = E,
            e.exports = t.default
        }
        , function(e, t) {
            e.exports = ReactDOM
        }
        , function(e, t, n) {
            "use strict";
            function o(e, t, n) {
                for (var o = e; o; ) {
                    var r = o.getAttribute && o.getAttribute(t);
                    if (r && (void 0 === n || r === n))
                        return !0;
                    o = o.parentNode
                }
                return !1
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.selfOrParentHasAttribute = o,
            t.selfOrParentHasId = function(e, t) {
                return o(e, "id", t)
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
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.isImbalanced = t.getEditorPageScale = t.getRichTextCharCount = t.getRichText = t.resolveForCharCount = t.resolveFontSizeCharCount = t.stringToChildren = t.spacingHorizontal = t.spacingVertical = void 0;
            var o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
              , r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
              , l = n(0)
              , i = (t.spacingVertical = function() {
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
                if (e && "object" === (void 0 === e ? "undefined" : r(e))) {
                    var t = e.children
                      , n = void 0 === t ? null : t;
                    return "string" == typeof n && (n = n.trim()),
                    o({}, e, {
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
                  , o = e.fontSizeMap
                  , r = void 0 === o ? {} : o
                  , i = e.defaultFontSize;
                return Object.keys(r).reduce(function(e, t) {
                    return e || (0,
                    l.inRange)(n, r[t][0], r[t][1] || 500) && t
                }, !1) || i
            }
            ,
            t.resolveForCharCount = function(e) {
                var t = e.count
                  , n = void 0 === t ? 0 : t
                  , o = e.valueMap
                  , r = void 0 === o ? {} : o
                  , i = e.defaultValue
                  , a = e.maxCharCount
                  , u = void 0 === a ? 500 : a;
                return Object.keys(r).reduce(function(e, t) {
                    return e || (0,
                    l.inRange)(n, r[t][0], r[t][1] || u) && t
                }, !1) || i
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
                var t = i(e)
                  , n = 0;
                return t.blocks && t.blocks.forEach(function(e) {
                    var t = e.text.length;
                    n += (0,
                    l.clamp)(t, 25, Math.max(t, 25))
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
                l.last)(e)
                  , o = (0,
                l.sum)(e)
                  , r = (0,
                l.sum)(t);
                return Math.abs(o - r) > Math.abs(o - n - (r + n))
            }
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o, r = n(12), l = (o = r) && o.__esModule ? o : {
                default: o
            };
            t.default = (0,
            l.default)({
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
        , function(e, t) {
            e.exports = keyMirror
        }
        ]);