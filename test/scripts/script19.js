
        (function(props) {
            window.Core.utils.renderBootstrap({
                elId: 'bs-6',
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
            "label": "Invite",
            "toggleId": "5144d473-4712-4489-a8a0-e34c9bd88cad-n-499514-navId-toggleId",
            "parentId": "n-499514-navId",
            "navBarId": "n-499512-navBarId",
            "isActive": false,
            "item": [{
                "isFlyoutMenu": false,
                "active": false,
                "pageId": "2dd73f31-d076-4b79-8aa3-b8f1627ef644",
                "name": "Add Bot",
                "href": "http:\u002F\u002Finvite.haileybot.com",
                "target": "_blank",
                "visible": true,
                "requiresAuth": false,
                "rel": "noopener",
                "type": "page",
                "showInFooter": true
            }, {
                "isFlyoutMenu": false,
                "active": false,
                "pageId": "de363f11-e5df-4a5a-9266-d6454c646a8d",
                "name": "Join Support Server",
                "href": "http:\u002F\u002Fdiscord.gg\u002F7QH4YeD",
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