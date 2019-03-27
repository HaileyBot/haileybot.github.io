
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
            n(n.s = 9)
        }([function(e, t) {
            e.exports = Core
        }
        , function(e, t) {
            e.exports = PropTypes
        }
        , function(e, t) {
            e.exports = React
        }
        , function(e, t) {
            e.exports = _
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o, r = n(6), i = (o = r) && o.__esModule ? o : {
                default: o
            };
            t.default = (0,
            i.default)({
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
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.SEARCH_INPUT_LEFT_PADDING = t.categories = t.sectionHrTypes = t.widgetTypes = void 0;
            var o, r = n(6), i = (o = r) && o.__esModule ? o : {
                default: o
            }, a = n(0);
            var l = a.constants.widgetTypes
              , s = a.constants.colorPackCategories
              , u = (0,
            i.default)({
                NONE: null,
                SMALL_UNDERLINE: null,
                FULL_UNDERLINE: null,
                INLINE: null
            });
            t.widgetTypes = l,
            t.sectionHrTypes = u,
            t.categories = s,
            t.SEARCH_INPUT_LEFT_PADDING = 30
        }
        , function(e, t) {
            e.exports = keyMirror
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
        , function(e, t) {
            e.exports = OLSCore
        }
        , function(e, t, n) {
            "use strict";
            window.wsb = window.wsb || {},
            window.wsb.Search || (window.wsb.Search = n(10))
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
              , i = h(n(1))
              , a = h(n(2))
              , l = n(0)
              , s = n(3)
              , u = n(5)
              , c = h(n(11))
              , d = h(n(16))
              , f = n(8);
            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var p = {
                display: "flex",
                alignItems: "center"
            }
              , E = function(e) {
                function t(e) {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.handleFormSubmit = n.handleFormSubmit.bind(n),
                    n.searchOpen = n.searchOpen.bind(n),
                    n.searchClose = n.searchClose.bind(n),
                    n.handleResize = n.handleResize.bind(n),
                    n._anchorId = (0,
                    s.uniqueId)("Search-Anchor"),
                    n._uniqueId = (0,
                    s.uniqueId)("Search"),
                    n._closeId = (0,
                    s.uniqueId)("Close"),
                    n.searchWidth = 200,
                    n.state = {
                        searchQuery: "",
                        showSearch: !1
                    },
                    n
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
                }(t, a.default.Component),
                r(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.mounted = !0,
                        (0,
                        d.default)(),
                        this.prepareForIE11(),
                        this.calculateSearchWidth(),
                        this.calculateScreenWidth(),
                        this.calculateSearchPos(),
                        window.addEventListener("resize", this.handleResize, !1),
                        this.viewTablet && this.viewTablet.addEventListener("scroll", this.handleResize, {
                            passive: !0
                        })
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.mounted = !1,
                        window.removeEventListener("resize", this.handleResize, !1),
                        this.viewTablet && this.viewTablet.removeEventListener("scroll", this.handleResize, {
                            passive: !0
                        })
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        var e = this.props.renderMode
                          , t = this.state.showSearch;
                        e !== l.constants.renderModes.PREVIEW && e !== l.constants.renderModes.EDIT || this.calculateSearchWidth(),
                        e === l.constants.renderModes.EDIT && !0 === t && this.searchClose()
                    }
                }, {
                    key: "prepareForIE11",
                    value: function() {
                        this.isIE11 = !!window.MSInputMethodContext && !!document.documentMode,
                        this.viewTablet = document.getElementById("view-tablet")
                    }
                }, {
                    key: "handleResize",
                    value: function() {
                        var e = this.state.showSearch
                          , t = this.props
                          , n = t.isMobile
                          , o = t.renderMode;
                        if (!1 !== this.mounted && "undefined" != typeof document && o === l.constants.renderModes.PREVIEW && e && !1 !== this.isIE11) {
                            var r = document.getElementById(this._uniqueId + "-container");
                            r && n && (this.calculateSearchPos(),
                            r.style.left = this.ieSearchPos[0] + "px",
                            r.style.top = this.ieSearchPos[1] + "px")
                        }
                    }
                }, {
                    key: "calculateSearchWidth",
                    value: function() {
                        var e = this.props
                          , t = e.widthId
                          , n = e.isMobile
                          , o = e.minWidth
                          , r = e.pipeWidth;
                        if (!n) {
                            var i = document.getElementById(t);
                            if (i) {
                                var a = i.offsetWidth;
                                if (a)
                                    if (a < o)
                                        this.searchWidth = o;
                                    else {
                                        var l = r ? 35 : 0;
                                        this.searchWidth = a + l
                                    }
                                this.searchWidth += u.SEARCH_INPUT_LEFT_PADDING
                            }
                        }
                    }
                }, {
                    key: "calculateScreenWidth",
                    value: function() {
                        var e = window
                          , t = document
                          , n = t.documentElement
                          , o = t.getElementsByTagName("body")[0];
                        this.screenWidth = e.innerWidth || n.clientWidth || o.clientWidth
                    }
                }, {
                    key: "calculateSearchPos",
                    value: function() {
                        var e = this.props
                          , t = e.renderMode
                          , n = e.isMobile
                          , o = void 0
                          , r = void 0
                          , i = void 0
                          , a = void 0;
                        if (t === l.constants.renderModes.PREVIEW && this.isIE11 && n) {
                            var s = document.getElementsByClassName("viewport")[0]
                              , u = s.getBoundingClientRect();
                            r = u.left,
                            o = u.top,
                            i = s.offsetWidth,
                            a = s.offsetHeight
                        }
                        this.ieSearchPos = [r, o, i, a]
                    }
                }, {
                    key: "handleFormSubmit",
                    value: function(e) {
                        e.preventDefault(),
                        f.Logger.debug("OLS: SearchForm.handleFormSubmit", e);
                        var t = this.props
                          , n = t.isShopPage
                          , o = t.inNavigationDrawer;
                        document.activeElement && document.activeElement.blur && document.activeElement.blur();
                        var r = document.getElementById(this._anchorId);
                        if (n) {
                            var i = this.state.searchQuery;
                            i && (f.RouteHandler.navigate(f.ShopViewConstants.SEARCH_RESULTS, {
                                keywords: i
                            }),
                            f.ScrollWidgetActions.scrollShopWidget())
                        } else
                            r && r.click && r.click();
                        if (o) {
                            var a = document.getElementById(this._closeId);
                            a && a.click && a.click()
                        }
                        return this.searchClose(),
                        !1
                    }
                }, {
                    key: "searchOpen",
                    value: function() {
                        var e = this;
                        setTimeout(function() {
                            document.getElementById(e._uniqueId + "-input").focus()
                        }, 0),
                        this.setState({
                            showSearch: !0
                        }),
                        this.calculateSearchPos(),
                        document.ontouchmove = function(e) {
                            e.preventDefault()
                        }
                    }
                }, {
                    key: "searchClose",
                    value: function() {
                        this.setState({
                            showSearch: !1,
                            searchQuery: ""
                        }),
                        document.ontouchmove = function() {
                            return !0
                        }
                    }
                }, {
                    key: "renderSearchForm",
                    value: function() {
                        var e = this
                          , t = this.props
                          , n = t.isShopPage
                          , o = t.shopPageId
                          , r = t.shopRoute
                          , i = t.renderMode
                          , l = t.searchPosition
                          , s = t.showBackground
                          , u = t.isMobile
                          , d = t.inNavigationDrawer
                          , f = t.iconSizeMobile
                          , h = t.iconSizeDesktop
                          , p = t.domainName
                          , E = t.pageRoute
                          , y = t.staticContent
                          , b = t.iconSection
                          , v = t.fontColor
                          , m = t.section
                          , _ = t.keepOpen
                          , g = t.searchWidthAdj
                          , S = this.state
                          , R = S.showSearch
                          , w = S.searchQuery;
                        return a.default.createElement(c.default, {
                            isShopPage: n,
                            shopPageId: o,
                            shopRoute: r,
                            renderMode: i,
                            searchPosition: l,
                            showBackground: s,
                            isMobile: u,
                            inNavigationDrawer: d,
                            iconSizeMobile: f,
                            iconSizeDesktop: h,
                            domainName: p,
                            pageRoute: E,
                            ieSearchPos: this.ieSearchPos,
                            isIE11: this.isIE11,
                            showSearch: R || _,
                            screenWidth: this.screenWidth,
                            searchWidth: this.searchWidth + g,
                            searchQuery: w,
                            uniqueId: this._uniqueId,
                            searchClose: this.searchClose,
                            staticContent: y,
                            handleFormSubmit: this.handleFormSubmit,
                            searchInputOnChange: function(t) {
                                return e.setState(t)
                            },
                            iconSection: b,
                            fontColor: v,
                            section: m,
                            searchOpen: this.searchOpen,
                            anchorId: this._anchorId,
                            closeId: this._closeId
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        return f.Logger.debug("OLS: SearchForm.render"),
                        a.default.createElement(l.UX2.Element.Block, {
                            style: o({}, p, {
                                fontSize: "xsmall"
                            }),
                            children: this.renderSearchForm()
                        })
                    }
                }]),
                t
            }();
            E.propTypes = {
                widthId: i.default.string,
                showBackground: i.default.bool,
                searchWidth: i.default.number,
                pipeWidth: i.default.bool,
                minWidth: i.default.number,
                searchPosition: i.default.string,
                iconSizeMobile: i.default.string,
                iconSizeDesktop: i.default.string,
                fontColor: i.default.string,
                isShopPage: i.default.bool,
                shopPageId: i.default.string,
                shopRoute: i.default.string,
                iconSection: i.default.string,
                isMobile: i.default.bool,
                inNavigationDrawer: i.default.bool,
                staticContent: i.default.object,
                renderMode: i.default.string.isRequired,
                domainName: i.default.string,
                pageRoute: i.default.string,
                section: i.default.string,
                keepOpen: i.default.bool,
                searchWidthAdj: i.default.number
            },
            E.defaultProps = {
                searchWidthAdj: 0,
                minWidth: 200,
                pipeWidth: !1,
                isMobile: !1,
                inNavigationDrawer: !1,
                keepOpen: !1,
                iconSizeMobile: "24px",
                iconSizeDesktop: "16px"
            },
            t.default = E,
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
              , i = y(n(1))
              , a = y(n(2))
              , l = n(0)
              , s = n(12)
              , u = y(n(4))
              , c = n(7)
              , d = n(3)
              , f = n(8)
              , h = y(n(13))
              , p = y(n(14))
              , E = y(n(15));
            function y(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var b = {
                display: "flex",
                alignItems: "center"
            }
              , v = function(e) {
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
                }(t, a.default.Component),
                r(t, [{
                    key: "componentDidUpdate",
                    value: function() {
                        var e = this.props
                          , t = e.renderMode
                          , n = e.showSearch;
                        (0,
                        s.getMobileViewportContainer)(t).style["overflow-y"] = n ? "hidden" : "scroll"
                    }
                }, {
                    key: "renderMagnifyIcon",
                    value: function() {
                        var e = this.props
                          , t = e.showSearch
                          , n = e.iconSizeMobile
                          , o = e.iconSizeDesktop
                          , r = e.fontColor
                          , i = e.section
                          , l = e.iconSection
                          , s = e.searchOpen
                          , u = e.inNavigationDrawer
                          , c = e.handleFormSubmit;
                        return a.default.createElement(p.default, {
                            showSearch: t,
                            iconSizeMobile: n,
                            iconSizeDesktop: o,
                            fontColor: r,
                            section: i,
                            iconSection: l,
                            onSearchOpenClick: s,
                            onSearchClosedClick: c,
                            inNavigationDrawer: u
                        })
                    }
                }, {
                    key: "renderForm",
                    value: function() {
                        var e = this.props
                          , t = e.showSearch
                          , n = e.staticContent
                          , o = e.uniqueId
                          , r = e.searchInputOnChange
                          , i = e.searchQuery
                          , l = e.handleFormSubmit
                          , s = e.inNavigationDrawer;
                        return a.default.createElement(h.default, {
                            showSearch: t,
                            staticContent: n,
                            uniqueId: o,
                            onChange: r,
                            searchQuery: i,
                            formSubmit: l,
                            inNavigationDrawer: s
                        })
                    }
                }, {
                    key: "renderCloseIcon",
                    value: function(e) {
                        var t = this.props
                          , n = t.showSearch
                          , o = t.keepOpen
                          , r = t.searchClose
                          , i = {
                            display: n && !o ? "block" : "none",
                            fontSize: e ? "xlarge" : "medium",
                            position: e ? "fixed" : "static",
                            cursor: "pointer",
                            right: "small",
                            top: "small",
                            marginLeft: e ? 0 : "medium",
                            fontStyle: "normal",
                            height: "auto",
                            width: "auto"
                        };
                        return a.default.createElement(l.UX2.Element.CloseIcon, {
                            onClick: r,
                            style: i,
                            "data-aid": u.default.SEARCH_CLOSE_RENDERED
                        })
                    }
                }, {
                    key: "generatePositionValues",
                    value: function() {
                        var e = this.props
                          , t = e.showSearch
                          , n = e.iconSizeMobile
                          , o = e.renderMode
                          , r = e.isIE11
                          , i = e.ieSearchPos
                          , a = e.isMobile
                          , s = e.screenWidth
                          , u = o === l.constants.renderModes.PREVIEW && r
                          , c = void 0
                          , d = void 0
                          , f = void 0
                          , h = void 0;
                        return t ? u && t && i && a ? (d = i[0],
                        c = i[1],
                        f = i[2],
                        h = i[3]) : o === l.constants.renderModes.PREVIEW && s < 992 ? (c = "90px",
                        d = "0px",
                        f = "100%",
                        h = "100%") : (c = "0px",
                        d = "0px",
                        f = "100%",
                        h = "100%") : (c = "50%",
                        d = "auto",
                        f = n,
                        h = "auto"),
                        {
                            topVal: c,
                            leftVal: d,
                            widthVal: f,
                            heightVal: h
                        }
                    }
                }, {
                    key: "renderMobileSearchContainer",
                    value: function() {
                        var e = this.props
                          , t = e.renderMode
                          , n = e.showSearch
                          , o = e.uniqueId
                          , r = this.generatePositionValues()
                          , i = r.topVal
                          , u = r.leftVal
                          , c = r.widthVal
                          , d = r.heightVal
                          , f = {
                            display: "flex",
                            flexDirection: "column",
                            position: n ? "fixed" : "absolute",
                            top: i,
                            left: u,
                            right: n ? "auto" : "0px",
                            width: c,
                            height: n ? (0,
                            s.getMobileViewportHeight)(t) : d,
                            transform: n ? "none" : "translateY(-50%)",
                            maxWidth: n ? "100%" : c
                        };
                        n || (f.backgroundColor = "transparent");
                        var h = n ? l.UX2.Group.NavigationDrawer : l.UX2.Element.Block;
                        return a.default.createElement(h, {
                            id: o + "-container",
                            style: f
                        }, this.renderCloseIcon(!0), a.default.createElement(l.UX2.Element.Block, {
                            style: {
                                padding: n ? "large" : "none"
                            }
                        }, a.default.createElement(l.UX2.Element.Block, {
                            style: {
                                position: "relative"
                            }
                        }, this.renderForm(!0), this.renderMagnifyIcon())))
                    }
                }, {
                    key: "renderNavigationDrawerSearchContainer",
                    value: function() {
                        var e = this.props
                          , t = e.showSearch
                          , n = e.iconSizeDesktop
                          , r = {
                            container: o({}, b, {
                                paddingVertical: "small",
                                width: t ? "100%" : n
                            })
                        };
                        return a.default.createElement(l.UX2.Element.Block, {
                            style: r.container
                        }, this.renderForm(), this.renderMagnifyIcon())
                    }
                }, {
                    key: "renderDesktopSearchContainer",
                    value: function() {
                        var e = this.props
                          , t = e.searchPosition
                          , n = e.showSearch
                          , r = e.iconSizeDesktop
                          , i = e.searchWidth
                          , s = e.showBackground
                          , u = "centered" === t || s
                          , c = {
                            container: o({}, b, {
                                position: "absolute",
                                zIndex: n ? "1" : "0",
                                right: "0px",
                                top: "50%",
                                paddingVertical: n && !u ? "small" : "none",
                                backgroundColor: n && u ? "section" : "transparent",
                                width: n ? i : r,
                                transform: n && "centered" === t ? "translate(60%, -50%)" : "translateY(-50%)"
                            }),
                            searchFormWrapper: {
                                width: n ? "100%" : r
                            }
                        };
                        return a.default.createElement(l.UX2.Element.Block, {
                            style: c.container
                        }, a.default.createElement(l.UX2.Element.Block, {
                            style: c.searchFormWrapper
                        }, this.renderForm(), this.renderMagnifyIcon()), this.renderCloseIcon())
                    }
                }, {
                    key: "renderFormSubmitLink",
                    value: function() {
                        var e = this.props
                          , t = e.searchQuery
                          , n = e.shopRoute
                          , o = e.shopPageId
                          , r = e.renderMode
                          , i = e.domainName
                          , l = e.pageRoute
                          , s = e.anchorId
                          , u = c.SEARCH_PARAMS + "&keywords=" + t;
                        return a.default.createElement(E.default, {
                            id: s,
                            href: n + "?" + u,
                            "data-page": o,
                            "data-page-query": u,
                            style: {
                                display: "none"
                            },
                            renderMode: r,
                            domainName: i,
                            pageRoute: l
                        })
                    }
                }, {
                    key: "renderCloseDropdownLink",
                    value: function() {
                        var e = this.props.closeId;
                        return a.default.createElement(l.UX2.Element.Link, {
                            id: e,
                            style: {
                                display: "none"
                            },
                            "data-close": !0
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        f.Logger.debug("OLS: Search.searchForm");
                        var e = this.props
                          , t = e.isMobile
                          , n = e.inNavigationDrawer
                          , r = e.iconSizeMobile
                          , i = e.iconSizeDesktop
                          , s = e.isShopPage
                          , c = void 0;
                        return c = t ? this.renderMobileSearchContainer() : n ? this.renderNavigationDrawerSearchContainer() : this.renderDesktopSearchContainer(),
                        a.default.createElement(l.UX2.Element.Block, {
                            "data-aid": u.default.SEARCH_FORM_RENDERED,
                            style: o({
                                width: n ? "100%" : r
                            }, b, {
                                position: "relative",
                                "@md": {
                                    width: i
                                }
                            })
                        }, c, s ? null : this.renderFormSubmitLink(), n && this.renderCloseDropdownLink())
                    }
                }]),
                t
            }();
            v.propTypes = {
                isShopPage: i.default.bool,
                shopPageId: i.default.string,
                shopRoute: i.default.string,
                renderMode: i.default.string.isRequired,
                searchPosition: i.default.string,
                showBackground: i.default.bool,
                isMobile: i.default.bool,
                inNavigationDrawer: i.default.bool,
                keepOpen: i.default.bool,
                iconSizeMobile: i.default.string,
                iconSizeDesktop: i.default.string,
                domainName: i.default.string,
                pageRoute: i.default.string,
                ieSearchPos: i.default.arrayOf(i.default.string),
                isIE11: i.default.bool,
                showSearch: i.default.bool,
                screenWidth: i.default.number,
                searchWidth: i.default.string,
                searchQuery: i.default.string,
                uniqueId: i.default.string,
                searchClose: i.default.func,
                staticContent: i.default.object,
                handleFormSubmit: i.default.func,
                searchInputOnChange: i.default.func,
                iconSection: i.default.string,
                fontColor: i.default.string,
                section: i.default.string,
                searchOpen: i.default.func,
                anchorId: i.default.string,
                closeId: i.default.string
            },
            v.defaultProps = {
                searchPosition: "default",
                showBackground: !1,
                iconSizeMobile: "24px",
                iconSizeDesktop: "16px",
                ieSearchPos: [],
                searchWidth: "200px",
                searchInputOnChange: d.noop,
                searchClose: d.noop
            },
            t.default = v,
            e.exports = t.default
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.getMobileViewportHeight = t.getMobileViewportContainer = t.show = t.hide = t.getWidths = t.getWidth = void 0;
            var o = n(3)
              , r = n(0).constants.renderModes
              , i = t.getWidth = function(e) {
                return "ceil" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ceil") ? Math.ceil(e.getBoundingClientRect().width) : Math.floor(e.getBoundingClientRect().width)
            }
              , a = (t.getWidths = function(e) {
                return e.map(function(e) {
                    return i(e)
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
                return e === r.PREVIEW && (document.querySelector(".mobile-phone-preview-container .viewport") || document.querySelector("#render-container")) || document.querySelector("body")
            }
            );
            t.getMobileViewportHeight = function(e) {
                if ("undefined" == typeof document || e !== r.PREVIEW)
                    return "100vh";
                var t = a(e);
                if (!t)
                    return "100vh";
                var n = document.querySelector(".mobile-phone-preview-container .ux-scaled")
                  , i = 1;
                if (n) {
                    var l = (0,
                    o.get)(n, "style.transform", "").match(/[0-9.]+/);
                    l && l.length > 0 && (i = l[0])
                }
                return t.getBoundingClientRect().height / i
            }
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function() {
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
              , r = u(n(1))
              , i = u(n(2))
              , a = n(0)
              , l = u(n(4))
              , s = n(3);
            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var c = function(e) {
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
                }(t, i.default.Component),
                o(t, [{
                    key: "render",
                    value: function() {
                        var e = this.props
                          , t = e.staticContent
                          , n = e.showSearch
                          , o = e.onChange
                          , r = e.uniqueId
                          , s = e.searchQuery
                          , u = e.formSubmit;
                        return n && i.default.createElement(a.UX2.Group.Form.Search, {
                            section: "default",
                            onSubmit: u
                        }, i.default.createElement(a.UX2.Element.Input.Search, {
                            id: r + "-input",
                            "data-aid": l.default.SEARCH_FIELD_RENDERED,
                            onChange: function(e) {
                                return o({
                                    searchQuery: e.target.value
                                })
                            },
                            value: s,
                            autoComplete: "off",
                            name: "keywords",
                            placeholder: t.search_placeholder,
                            "aria-label": t.search_placeholder
                        }))
                    }
                }]),
                t
            }();
            c.propTypes = {
                staticContent: r.default.object,
                showSearch: r.default.bool,
                onChange: r.default.func,
                isMobile: r.default.bool,
                inNavigationDrawer: r.default.bool,
                uniqueId: r.default.string,
                searchQuery: r.default.string,
                formSubmit: r.default.func
            },
            c.defaultProps = {
                staticContent: {},
                onChange: s.noop,
                formSubmit: s.noop
            },
            t.default = c,
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
              , i = f(n(1))
              , a = f(n(2))
              , l = n(0)
              , s = f(n(4))
              , u = n(7)
              , c = n(5)
              , d = n(3);
            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var h = function(e) {
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
                }(t, a.default.Component),
                r(t, [{
                    key: "render",
                    value: function() {
                        var e = this.props
                          , t = e.iconSizeMobile
                          , n = e.iconSizeDesktop
                          , r = e.section
                          , i = e.iconSection
                          , d = e.styles
                          , f = e.showSearch
                          , h = e.onSearchOpenClick
                          , p = e.onSearchClosedClick
                          , E = e.inNavigationDrawer
                          , y = o({
                            fontSize: t,
                            cursor: "pointer",
                            position: "absolute",
                            overflow: "visible"
                        }, E ? {} : {
                            left: "0px",
                            top: "calc(50%)",
                            transform: "translateY(-50%)",
                            "@md": {
                                fontSize: n,
                                left: f ? (c.SEARCH_INPUT_LEFT_PADDING - parseFloat(n, 10)) / 2 + "px" : "0px"
                            }
                        });
                        return a.default.createElement(l.UX2.Element.Icon, {
                            icon: u.MAGNIFY_ICON,
                            "data-aid": f ? s.default.SEARCH_ICON_RENDERED_OPEN : s.default.SEARCH_ICON_RENDERED,
                            onMouseUp: f ? p : h,
                            onTouchEnd: f ? p : h,
                            section: i || r,
                            style: o({}, y, f ? {} : d)
                        })
                    }
                }]),
                t
            }();
            h.propTypes = {
                iconSizeMobile: i.default.string,
                iconSizeDesktop: i.default.string,
                section: i.default.string,
                iconSection: i.default.string,
                styles: i.default.object,
                showSearch: i.default.bool,
                onSearchOpenClick: i.default.func,
                inNavigationDrawer: i.default.bool,
                onSearchClosedClick: i.default.func
            },
            h.defaultProps = {
                iconSizeMobile: "24px",
                iconSizeDesktop: "16px",
                styles: {},
                onSearchOpenClick: d.noop,
                onSearchClosedClick: d.noop
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
              , i = n(2)
              , a = u(i)
              , l = u(n(1))
              , s = n(0);
            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var c = {
                "/idx/wrapper": !0
            }
              , d = function(e) {
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
                r(t, [{
                    key: "render",
                    value: function() {
                        var e = s.UX2.Element.Link
                          , t = this.props
                          , n = t.renderMode
                          , r = t.pageRoute
                          , i = t.isActive
                          , l = function(e, t) {
                            var n = {};
                            for (var o in e)
                                t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                            return n
                        }(t, ["renderMode", "pageRoute", "isActive"])
                          , u = n === s.constants.renderModes.PUBLISH && c[r]
                          , d = i ? e.Active : e;
                        return a.default.createElement(d, o({
                            convertToAbsolute: u
                        }, l))
                    }
                }]),
                t
            }();
            d.propTypes = {
                renderMode: l.default.string,
                pageRoute: l.default.string,
                isActive: l.default.bool
            },
            t.default = d,
            e.exports = t.default
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ;
            t.default = function() {
                if (r)
                    return;
                r = !0;
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
                      , i = e.prototype.removeEventListener;
                    e.prototype.addEventListener = function(e, t, r) {
                        var i = "object" === (void 0 === r ? "undefined" : o(r)) ? r.capture : r;
                        n.call(this, e, t, i)
                    }
                    ,
                    e.prototype.removeEventListener = function(e, t, n) {
                        var r = "object" === (void 0 === n ? "undefined" : o(n)) ? n.capture : n;
                        i.call(this, e, t, r)
                    }
                }
            }
            ;
            var r = !1;
            e.exports = t.default
        }
        ]);