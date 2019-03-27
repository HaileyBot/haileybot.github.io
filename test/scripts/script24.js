
        (function(props) {
            window.Core.utils.renderBootstrap({
                elId: 'bs-10',
                componentName: 'NavOverflow',
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
            "label": "More",
            "parentId": "n-499514-navId",
            "toggleId": "515-moreId",
            "navBarId": "n-499512-navBarId",
            "enableActiveFlyoutMenu": true,
            "enableNoOverlapDropdown": true,
            "widgetId": "d40eb72d-bbbe-4ad0-8d41-f338eca2705b",
            "section": "default",
            "category": "accent",
            "locale": "en-CA",
            "renderMode": "PUBLISH",
            "viewDevice": "TABLET_RENDER_DEVICE"
        });