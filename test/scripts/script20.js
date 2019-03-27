
        (function(props) {
            window.Core.utils.renderBootstrap({
                elId: 'bs-7',
                componentName: 'HeaderFlyoutMenu',
                props: props,
                contextKey: 'context-bs-5'
            });
        }
        )({
            "style": {
                ":before": {
                    "opacity": 0
                },
                "fontColor": "spacesGrey",
                "display": "flex",
                "alignItems": "center",
                "minWidth": "60vw",
                ":hover": {
                    "fontColor": "spacesBrightGrey"
                },
                ":hover:before": {
                    "backgroundColor": "spacesBrightGrey"
                },
                "@md": {
                    "minWidth": "initial"
                },
                "marginHorizontal": "-6px",
                "marginVertical": "-6px",
                "paddingHorizontal": "6px",
                "paddingVertical": "6px"
            },
            "activeStyle": {
                "fontColor": "spacesGrey",
                "display": "flex",
                "alignItems": "center",
                "minWidth": "60vw",
                ":hover": {
                    "fontColor": "spacesBrightGrey"
                },
                ":hover:before": {
                    "backgroundColor": "spacesBrightGrey"
                },
                "@md": {
                    "minWidth": "initial"
                },
                "marginHorizontal": "-6px",
                "marginVertical": "-6px",
                "paddingHorizontal": "6px",
                "paddingVertical": "6px"
            },
            "label": "Documentation",
            "toggleId": "a177ad35-4e18-4c19-8734-39342d0e1e46-n-499514-navId-toggleId",
            "parentId": "n-499514-navId",
            "navBarId": "n-499512-navBarId",
            "isActive": false,
            "item": [{
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
            "enableNoOverlapDropdown": true,
            "widgetId": "d40eb72d-bbbe-4ad0-8d41-f338eca2705b",
            "section": "default",
            "category": "accent",
            "locale": "en-CA",
            "renderMode": "PUBLISH",
            "viewDevice": "TABLET_RENDER_DEVICE"
        });