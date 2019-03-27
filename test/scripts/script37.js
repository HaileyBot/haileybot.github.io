
        !function(e) {
            var t = {};
            function n(o) {
                if (t[o])
                    return t[o].exports;
                var i = t[o] = {
                    i: o,
                    l: !1,
                    exports: {}
                };
                return e[o].call(i.exports, i, i.exports, n),
                i.l = !0,
                i.exports
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
            n(n.s = 6)
        }([function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = {
                facebook: {
                    name: "Facebook",
                    prefix: "https://www.facebook.com/",
                    placeholder: "https://www.facebook.com/pagename",
                    arguments: {
                        externalLinkID: "CREATE_FACEBOOK_LINK"
                    }
                },
                twitter: {
                    name: "Twitter",
                    prefix: "https://twitter.com/",
                    placeholder: "https://twitter.com/username"
                },
                instagram: {
                    name: "Instagram",
                    prefix: "https://www.instagram.com/",
                    placeholder: "https://www.instagram.com/username"
                },
                pinterest: {
                    name: "Pinterest",
                    prefix: "https://www.pinterest.com/",
                    placeholder: "https://www.pinterest.com/username"
                },
                linkedin: {
                    name: "LinkedIn",
                    prefix: "https://www.linkedin.com/",
                    placeholder: "https://www.linkedin.com/in/user"
                },
                youtube: {
                    name: "YouTube",
                    prefix: "https://www.youtube.com/",
                    placeholder: "https://www.youtube.com/username"
                },
                googlePlus: {
                    name: "Google+",
                    prefix: "https://plus.google.com/",
                    placeholder: "https://plus.google.com/username",
                    arguments: {
                        validationRegex: "^https://plus.google.com/((?!.*https?:).*)$",
                        validationValueMatchGroupIndex: 1
                    }
                },
                yelp: {
                    name: "Yelp",
                    prefix: "https://www.yelp.com/biz/",
                    placeholder: "https://www.yelp.com/biz",
                    arguments: {
                        validationRegex: "^https://(www.)?yelp.com/biz/((?!.*https?:).*)$",
                        validationValueMatchGroupIndex: 2
                    }
                },
                xing: {
                    name: "Xing",
                    prefix: "https://www.xing.com/",
                    placeholder: "https://xing.com/profile/username",
                    behindFeatureFlag: "enableXing"
                }
            }
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
        , function(e, t) {
            e.exports = _
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o, i = n(12), a = (o = i) && o.__esModule ? o : {
                default: o
            };
            t.default = (0,
            a.default)({
                FOOTER_COPYRIGHT_RENDERED: null,
                FOOTER_POWERED_BY_RENDERED: null,
                FOOTER_IMPRINT_RENDERED: null,
                FOOTER_DATA_POLICY_RENDERED: null,
                FOOTER_PAGE_LINK_RENDERED: null,
                FOOTER_TERMS_CONDITIONS_RENDERED: null,
                FOOTER_COOKIE_TITLE_RENDERED: null,
                FOOTER_COOKIE_MESSAGE_RENDERED: null,
                FOOTER_COOKIE_CLOSE_RENDERED: null,
                FOOTER_FACEBOOK_LINK: null,
                FOOTER_TWITTER_LINK: null,
                FOOTER_LINKEDIN_LINK: null,
                FOOTER_YOUTUBE_LINK: null,
                FOOTER_INSTAGRAM_LINK: null,
                FOOTER_GOOGLEPLUS_LINK: null,
                FOOTER_YELP_LINK: null,
                FOOTER_SOCIAL_LINKS: null,
                FOOTER_BUSINESS_NAME_RENDERED: null,
                FOOTER_ADDRESS_RENDERED: null,
                FOOTER_PHONE_RENDERED: null
            }),
            e.exports = t.default
        }
        , function(e, t, n) {
            "use strict";
            window.wsb = window.wsb || {},
            window.wsb.CookieBanner = window.wsb.CookieBanner || n(7)
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
              , i = function() {
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
              , a = n(1)
              , r = d(a)
              , l = d(n(2))
              , u = n(3)
              , s = n(8)
              , c = d(n(5));
            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var f = {
                bannerLayout: {
                    padding: "medium",
                    position: "fixed",
                    bottom: "0",
                    right: "0",
                    zIndex: 1e4,
                    width: "100%",
                    height: "auto",
                    textAlign: "left",
                    backgroundColor: "section",
                    borderRadius: "0",
                    margin: "0",
                    "@sm": {
                        margin: "medium",
                        width: "320px",
                        maxHeight: "280px",
                        borderRadius: "7px"
                    },
                    transition: "all 1s cubic-bezier(0.49, -0.29, 0.4, 1.26)"
                },
                cookieTitle: {
                    marginBottom: "0",
                    paddingBottom: "xsmall",
                    fontSize: "large"
                },
                cookieButton: {
                    cursor: "pointer",
                    marginTop: "medium",
                    marginBottom: "xxsmall"
                },
                cookieMessage: {
                    a: {
                        textDecoration: "underline"
                    },
                    maxHeight: "300px",
                    overflowY: "auto",
                    "@sm": {
                        maxHeight: "140px"
                    }
                }
            }
              , p = function(e) {
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
                    return e.handleOnClick = e.handleOnClick.bind(e),
                    e.cookieIsValid = e.cookieIsValid.bind(e),
                    e.state = {
                        dismissed: !1,
                        bottom: "-500px"
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
                }(t, a.Component),
                i(t, [{
                    key: "handleOnClick",
                    value: function(e) {
                        e.preventDefault(),
                        (0,
                        s.setCookie)("cookie_warning_displayed"),
                        this.setState({
                            dismissed: !0
                        })
                    }
                }, {
                    key: "cookieIsValid",
                    value: function() {
                        return (0,
                        s.hasCookie)("cookie_warning_displayed")
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        setTimeout(function() {
                            e.setState({
                                bottom: "0"
                            })
                        }, 200)
                    }
                }, {
                    key: "render",
                    value: function() {
                        if (this.state.dismissed || this.cookieIsValid())
                            return null;
                        var e = this.props
                          , t = e.message
                          , n = e.bannerTitle
                          , i = e.buttonText
                          , a = this.state.bottom
                          , l = u.UX2.Element
                          , s = l.Text
                          , d = l.Button
                          , p = l.Heading
                          , m = o({}, f.bannerLayout, {
                            bottom: a
                        });
                        return r.default.createElement(u.UX2.Group, null, r.default.createElement(u.UX2.Component.Background, {
                            category: "primary",
                            style: m
                        }, r.default.createElement(p, {
                            style: f.cookieTitle,
                            children: n,
                            "data-aid": c.default.FOOTER_COOKIE_TITLE_RENDERED
                        }), r.default.createElement(s, {
                            richtext: !0,
                            "data-aid": c.default.FOOTER_COOKIE_MESSAGE_RENDERED,
                            style: f.cookieMessage,
                            children: t
                        }), r.default.createElement(d, {
                            tag: "a",
                            children: i,
                            style: f.cookieButton,
                            onMouseUp: this.handleOnClick,
                            onTouchEnd: this.handleOnClick,
                            "data-aid": c.default.FOOTER_COOKIE_CLOSE_RENDERED,
                            size: "small"
                        })))
                    }
                }]),
                t
            }();
            p.propTypes = {
                bannerTitle: l.default.string,
                buttonText: l.default.string,
                message: l.default.string
            },
            t.default = p,
            e.exports = t.default
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.hasCookie = t.setCookie = t.isCookieWarningEnabled = t.mapPropsToSocialProps = t.isSocialLinksSet = t.isSocialFeatureOn = void 0;
            var o, i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            , a = n(9), r = n(5), l = (o = r) && o.__esModule ? o : {
                default: o
            };
            var u = Object.keys(a.SocialProviders)
              , s = {}
              , c = 864e5;
            function d(e) {
                return u.some(function(t) {
                    return !!e[t + "Profile"]
                })
            }
            u.forEach(function(e) {
                s[e.toUpperCase()] = "FOOTER_" + e.toUpperCase() + "_LINK"
            }),
            s.SOCIAL = l.default.FOOTER_SOCIAL_LINKS,
            t.isSocialFeatureOn = function(e) {
                return !(!e.socialProfiles.socialAccountsEnabled || !d(e.socialProfiles))
            }
            ,
            t.isSocialLinksSet = d,
            t.mapPropsToSocialProps = function(e) {
                var t = {};
                return u.forEach(function(n) {
                    var o = n + "Profile";
                    t[o] = e[o]
                }),
                i({
                    dataAids: s
                }, t)
            }
            ,
            t.isCookieWarningEnabled = function(e) {
                return !(!e.featureFlags || !e.featureFlags.get("enableCookieWarning"))
            }
            ,
            t.setCookie = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 60
                  , n = new Date;
                n.setTime(n.getTime() + c * t);
                var o = "expires=" + n.toUTCString();
                document.cookie = e + "=true;" + o + ";path=/"
            }
            ,
            t.hasCookie = function(e) {
                return "undefined" == typeof document || document.cookie.indexOf(e) >= 0
            }
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.SocialProviders = t.SocialManifest = t.default = void 0;
            var o = r(n(10))
              , i = r(n(11))
              , a = r(n(0));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = o.default,
            t.SocialManifest = i.default,
            t.SocialProviders = a.default
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
              , i = s(n(1))
              , a = s(n(2))
              , r = n(4)
              , l = n(3)
              , u = s(n(0));
            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var c = function(e) {
                var t = e.dataAids
                  , n = e.baseProps
                  , a = e.iconProps
                  , s = e.showGrayIcons
                  , c = e.iconSuffix
                  , d = void 0 === c ? "" : c
                  , f = e.staticContent
                  , p = void 0 === f ? {} : f
                  , m = l.UX2.Element
                  , E = m.Block
                  , O = m.Link
                  , g = m.Icon
                  , _ = Object.keys(u.default).map(function(n) {
                    var o = "xing" === n ? n.toUpperCase() : n.toLowerCase();
                    return {
                        name: u.default[n].name,
                        prefix: u.default[n].prefix,
                        profileId: e[n + "Profile"],
                        icon: o + d,
                        dataAid: t[n.toUpperCase()]
                    }
                }).filter(function(e) {
                    return e.profileId || s
                });
                if (!_.length)
                    return null;
                var h = (0,
                r.merge)({
                    style: {
                        display: "flex",
                        justifyContent: "center",
                        paddingHorizontal: "none",
                        paddingVertical: "small"
                    }
                }, n)
                  , b = (0,
                r.merge)({
                    size: "medium",
                    style: {
                        fontColor: "highContrast",
                        marginHorizontal: "xxsmall"
                    }
                }, a)
                  , w = _.map(function(e, t) {
                    var n = i.default.createElement(g, o({
                        key: t,
                        icon: e.icon
                    }, b));
                    return s ? n : i.default.createElement(O, {
                        tag: "a",
                        href: e.prefix + e.profileId,
                        target: "_blank",
                        rel: "noopener",
                        key: t,
                        "data-aid": e.dataAid,
                        children: n,
                        "aria-label": p[e.name] || e.name
                    })
                });
                return i.default.createElement(E, o({
                    "data-aid": t.SOCIAL
                }, h), w)
            };
            c.propTypes = {
                dataAids: a.default.object.isRequired,
                baseProps: a.default.object,
                iconProps: a.default.object,
                facebookProfile: a.default.string,
                twitterProfile: a.default.string,
                instagramProfile: a.default.string,
                pinterestProfile: a.default.string,
                linkedinProfile: a.default.string,
                youtubeProfile: a.default.string,
                googlePlusProfile: a.default.string,
                xingProfile: a.default.string,
                showGrayIcons: a.default.bool,
                iconSuffix: a.default.string,
                staticContent: a.default.object
            },
            t.default = c
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o, i = n(4), a = n(0), r = (o = a) && o.__esModule ? o : {
                default: o
            };
            var l = Object.keys(r.default)
              , u = {};
            l.forEach(function(e) {
                u[e + "Binding"] = {
                    kind: "extensionBinding",
                    type: "TEXT",
                    extensionName: "BusinessInfo",
                    field: e + "Profile"
                }
            });
            var s = {
                kind: "extensionDefinition",
                name: "BusinessInfo",
                fields: l.map(function(e) {
                    return {
                        name: e + "Profile",
                        path: "properties." + e + "Profile"
                    }
                })
            }
              , c = l.map(function(e) {
                return {
                    id: e + "Profile",
                    type: {
                        type: e + "Binding",
                        arguments: (0,
                        i.merge)({
                            prefix: r.default[e].prefix,
                            strictValidation: !0,
                            validationRegex: "^https?:\\/\\/(www\\.)?" + e + "\\.com\\/((?!.*https?:).*)$",
                            validationValueMatchGroupIndex: 2,
                            validationErrorMsg: {
                                message: "socialLinkValidationErrorMsg",
                                args: {
                                    socialApp: {
                                        kind: "translatedValue",
                                        value: e.toLowerCase() + "Text"
                                    }
                                }
                            }
                        }, r.default[e].arguments)
                    },
                    editingDisplay: {
                        titleId: {
                            kind: "translatedValue",
                            value: e.toLowerCase() + "Text"
                        },
                        placeholder: r.default[e].placeholder || "",
                        behindFeatureFlag: r.default[e].behindFeatureFlag || ""
                    }
                }
            });
            t.default = {
                socialMutatorType: u,
                socialExtensions: s,
                socialFields: c
            }
        }
        , function(e, t) {
            e.exports = keyMirror
        }
        ]);