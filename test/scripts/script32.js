
        (function(props) {
            window.Core.utils.renderBootstrap({
                elId: 'bs-16',
                componentName: 'HeaderMobileFlyoutMenu',
                props: props,
                contextKey: 'context-bs-14'
            });
        }
        )({
            "item": {
                "isFlyoutMenu": true,
                "active": false,
                "pageId": "a177ad35-4e18-4c19-8734-39342d0e1e46",
                "name": "Documentation",
                "href": "\u002Fdocumentation",
                "target": "",
                "visible": true,
                "navigation": [{
                    "isFlyoutMenu": false,
                    "active": false,
                    "pageId": "ea4e260e-843b-40fd-9217-cda35ac068b6",
                    "name": "Overview",
                    "href": "http:\u002F\u002Fdocs.haileybot.com",
                    "target": "_blank",
                    "visible": true,
                    "requiresAuth": false,
                    "rel": "noopener",
                    "type": "page",
                    "showInFooter": true
                }, {
                    "isFlyoutMenu": false,
                    "active": false,
                    "pageId": "3459494c-ba3a-47e9-b0e7-8741f1c6cb16",
                    "name": "FAQ",
                    "href": "http:\u002F\u002Fdocs.haileybot.com\u002Ffaq",
                    "target": "_blank",
                    "visible": true,
                    "requiresAuth": false,
                    "rel": "noopener",
                    "type": "page",
                    "showInFooter": true
                }, {
                    "isFlyoutMenu": false,
                    "active": false,
                    "pageId": "89080aad-8bbd-474d-bfed-343b6b42f681",
                    "name": "ChangeLog",
                    "href": "http:\u002F\u002Fdocs.haileybot.com\u002Fv\u002Fchangelog\u002F",
                    "target": "_blank",
                    "visible": true,
                    "requiresAuth": false,
                    "rel": "noopener",
                    "type": "page",
                    "showInFooter": true
                }],
                "requiresAuth": false,
                "rel": "",
                "type": "page",
                "showInFooter": false
            },
            "styles": {
                "overlay": {
                    "position": "fixed",
                    "overflow": "hidden",
                    "display": "flex",
                    "flexDirection": "column"
                },
                "innerContainer": {
                    "overflowY": "auto",
                    "overflowX": "hidden",
                    "width": "100%"
                },
                "close": {
                    "position": "absolute",
                    "top": 15,
                    "right": 15,
                    "fontSize": "xlarge"
                },
                "list": {
                    "textAlign": "left",
                    "paddingVertical": "0",
                    "paddingHorizontal": "0",
                    "wordWrap": "break-word",
                    "overflowWrap": "break-word"
                },
                "link": {
                    "fontColor": "spacesGrey",
                    "fontColorHover": "highlight",
                    "paddingVertical": "small",
                    "paddingHorizontal": "medium",
                    "display": "flex",
                    "alignItems": "center",
                    "fontSize": "medium",
                    "fontFamily": "alternate",
                    "textTransform": "uppercase",
                    "letterSpacing": 2,
                    "justifyContent": "initial",
                    "paddingLeft": 0,
                    "minWidth": "60vw",
                    ":hover": {
                        "fontColor": "spacesBrightGrey"
                    },
                    ":hover:before": {
                        "backgroundColor": "spacesBrightGrey"
                    },
                    "@md": {
                        "minWidth": "initial"
                    }
                },
                "subList": {
                    "paddingHorizontal": "0",
                    "paddingTop": "0",
                    "paddingBottom": 0
                },
                "subListItem": {
                    "display": "block",
                    "marginBottom": "0"
                },
                "sublink": {
                    "fontColor": "section",
                    "fontSize": "medium",
                    "display": "block",
                    "paddingVertical": "xsmall",
                    "paddingLeft": "large",
                    "paddingRight": "medium",
                    ":hover": {
                        "fontColor": "spacesBrightGrey"
                    }
                },
                "activeSublink": {
                    "fontWeight": "bold"
                },
                "membership": {
                    "display": "flex",
                    "alignItems": "center",
                    "justifyContent": "space-between",
                    "paddingHorizontal": "large",
                    "paddingVertical": "medium",
                    "width": "100%",
                    "borderTopWidth": "xsmall",
                    "borderTopStyle": "solid",
                    "borderColor": "input",
                    "textTransform": "none",
                    "fontFamily": "alt",
                    "color": "highContrast",
                    "@md": {
                        "display": "none"
                    }
                },
                "membershipIcon": {
                    "marginRight": "xxsmall"
                },
                "membershipSignOut": {
                    "cursor": "pointer",
                    "fontColor": "highContrast"
                },
                "membershipEmailWrapper": {
                    "maxWidth": "70%",
                    "wordWrap": "break-word",
                    "flexWrap": "wrap"
                },
                "socialContainer": {
                    "display": "flex",
                    "justifyContent": "flex-start",
                    "alignItems": "center",
                    "marginBottom": "large",
                    "flexDirection": "column",
                    "\u003E :not(:first-child)": {
                        "marginTop": "small"
                    }
                },
                "searchFormContainer": {
                    "position": "relative",
                    "height": "auto",
                    "marginVertical": "xlarger"
                },
                "translateContainer": {
                    "@md": {
                        "display": "none"
                    }
                }
            },
            "domainName": "test.haileybot.com",
            "pageRoute": "\u002F",
            "widgetId": "d40eb72d-bbbe-4ad0-8d41-f338eca2705b",
            "section": "default",
            "category": "accent",
            "locale": "en-CA",
            "renderMode": "PUBLISH",
            "viewDevice": "TABLET_RENDER_DEVICE"
        });