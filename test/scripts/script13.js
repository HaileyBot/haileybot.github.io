
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
            n(n.s = 0)
        }([function(e, t, n) {
            "use strict";
            window.wsb = window.wsb || {},
            window.wsb.CartIcon || (window.wsb.CartIcon = n(1))
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
              , l = c(n(2))
              , a = c(n(3))
              , u = n(4)
              , i = n(5)
              , E = function(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e,
                t
            }(n(6))
              , s = n(8);
            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var R = function(e) {
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
                    return n.state = {
                        totalQuantity: 0
                    },
                    n.handleOnClick = n.handleOnClick.bind(n),
                    n.cartRouter = n.cartRouter.bind(n),
                    n.onStoreChange = n.onStoreChange.bind(n),
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
                    key: "updateStoreState",
                    value: function() {
                        var e = this.state.totalQuantity
                          , t = i.CartStore.getState().cart
                          , n = t ? t.total_quantity : 0;
                        n !== e && this.setState({
                            totalQuantity: n
                        }, window.dispatchEvent.bind(null, new Event("CartQuantityChange")))
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        i.Logger.debug("OLS: HeaderCartIcon.componentDidMount"),
                        this.updateStoreState(),
                        i.CartStore.addListener("change", this.onStoreChange),
                        i.OlsConfigActions.setConfig(this.props),
                        i.OlsConfigActions.loadConfig(),
                        i.CartActions.loadCart()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        i.Logger.debug("OLS: HeaderCartIcon.componentWillUnmount"),
                        i.CartStore.removeListener("change", this.onStoreChange)
                    }
                }, {
                    key: "onStoreChange",
                    value: function() {
                        i.Logger.debug("OLS: HeaderCartIcon.onStoreChange"),
                        this.updateStoreState()
                    }
                }, {
                    key: "renderItemCount",
                    value: function() {
                        var e = this.state.totalQuantity;
                        return e > 0 ? a.default.createElement(u.UX2.Element.Element, {
                            style: {
                                color: "inherit",
                                fontSize: "medium",
                                marginLeft: "xxsmall"
                            },
                            "data-aid": E.CART_ICON_COUNT,
                            children: "(" + i.NumberFormatter.toFormattedNumber(e) + ")"
                        }) : null
                    }
                }, {
                    key: "handleOnClick",
                    value: function() {
                        i.Logger.debug("OLS: CartIcon.handleOnClick"),
                        i.RouteHandler.navigate(i.ShopViewConstants.CART),
                        i.ScrollWidgetActions.scrollShopWidget()
                    }
                }, {
                    key: "getLinkProps",
                    value: function() {
                        var e = this.props
                          , t = e.isShopPage
                          , n = e.shopPageId
                          , o = e.shopRoute
                          , r = e.domainName
                          , l = e.renderMode
                          , a = e.pageRoute;
                        return t ? {
                            onClick: this.handleOnClick
                        } : {
                            href: o + "?" + s.CART_PARAMS,
                            "data-page": n,
                            "data-page-query": s.CART_PARAMS,
                            renderMode: l,
                            domainName: r,
                            pageRoute: a
                        }
                    }
                }, {
                    key: "cartRouter",
                    value: function() {
                        var e = this.props
                          , t = e.cartStyles
                          , n = e.staticContent
                          , r = void 0 === n ? {} : n;
                        return a.default.createElement(u.UX2.Element.Link, o({
                            style: {
                                display: "flex",
                                alignItems: "center"
                            }
                        }, this.getLinkProps(), {
                            "aria-label": r.cartIcon || "Shopping Cart Icon",
                            convertToAbsolute: !0
                        }), a.default.createElement(u.UX2.Element.Icon, {
                            icon: "cart1",
                            style: t,
                            "data-aid": E.CART_ICON_RENDER
                        }), this.renderItemCount())
                    }
                }, {
                    key: "render",
                    value: function() {
                        i.Logger.debug("OLS: CartIcon.render");
                        return a.default.createElement(u.UX2.Element.Block, {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                fontSize: "xsmall"
                            },
                            children: this.cartRouter()
                        })
                    }
                }]),
                t
            }();
            R.propTypes = {
                isShopPage: l.default.bool,
                shopPageId: l.default.string,
                shopRoute: l.default.string,
                accountId: l.default.string,
                websiteId: l.default.string,
                olsStatus: l.default.string,
                olsAccountStatus: l.default.string,
                env: l.default.string,
                renderMode: l.default.string,
                domainName: l.default.string,
                pageRoute: l.default.string,
                cartStyles: l.default.object,
                isReseller: l.default.bool,
                staticContent: l.default.object
            },
            t.default = R,
            e.exports = t.default
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
        , function(e, t) {
            e.exports = OLSCore
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o, r = n(7), l = (o = r) && o.__esModule ? o : {
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