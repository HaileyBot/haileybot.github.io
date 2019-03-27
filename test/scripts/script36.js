
        (function(props) {
            window.Core.utils.renderBootstrap({
                elId: 'bs-17',
                componentName: 'ActionText',
                props: props,
                contextKey: 'context-bs-17'
            });
        }
        )({
            "id": "n-499-membership-sign-out-mobile",
            "text": "SIGN OUT",
            "style": {
                "cursor": "pointer",
                "fontColor": "highContrast"
            },
            "dataAid": "MEMBERSHIP_SIGNOUT_LINK",
            "script": "(function () {\n    window.onMembershipLogout = function () {\n      window.location.assign('\u002Fm\u002Flogout');\n    };\n    var onClickApplication = setInterval(function () {\n      var membershipSignOut = document.querySelector('#n-499-membership-sign-out-mobile');\n      if (membershipSignOut && !membershipSignOut.onclick) {\n        membershipSignOut.onclick = window.onMembershipLogout;\n      }\n    }, 500);\n    setTimeout(function () {\n      return clearInterval(onClickApplication);\n    }, 1000);\n    \n  var cookieValue = void 0;\n  var cookie = \"info_c2=\";\n  var parsedCookies = document.cookie.split(\";\");\n  for (var i = 0; i \u003C parsedCookies.length; i++) {\n    var targetCookie = parsedCookies[i];\n    while (targetCookie.charAt(0) === \" \") {\n      targetCookie = targetCookie.substring(1, targetCookie.length);\n    }\n    if (targetCookie.indexOf(cookie) === 0) {\n      var rawCookie = targetCookie.substring(cookie.length, targetCookie.length);\n      cookieValue = rawCookie && JSON.parse(rawCookie);\n    }\n  }\n    var membershipEmail = cookieValue && cookieValue.contactEmail;\n    \n    var membershipIcon = document.querySelector('#n-499-membership-mobile-footer');\n    if (membershipIcon && !cookieValue) {\n      membershipIcon.style.display = 'none';\n      var dropdownElement = document.querySelector('#n-499-mobile-dropdown');\n      if (dropdownElement) {\n        dropdownElement.style['padding-bottom'] = '20px';\n      }\n    } else {\n      var membershipEmailField = document.querySelector('#n-499-membership-mobile-email');\n      if (membershipEmailField) {\n        membershipEmailField.innerText = membershipEmail;\n      }\n      if (\u002FAndroid|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini\u002Fi.test(navigator.userAgent)) {\n        var desktopMembershipIcon = document.querySelector('[data-aid=\"MEMBERSHIP_ICON_DESKTOP_RENDERED\"]');\n        if (desktopMembershipIcon) {\n          desktopMembershipIcon.style.display = 'none';\n        }\n      }\n    }\n    \n  })()",
            "widgetId": "d40eb72d-bbbe-4ad0-8d41-f338eca2705b",
            "section": "default",
            "category": "accent",
            "locale": "en-CA",
            "renderMode": "PUBLISH",
            "viewDevice": "TABLET_RENDER_DEVICE"
        });