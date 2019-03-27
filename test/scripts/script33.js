
        (function() {
            window.onMembershipLogout = function() {
                window.location.assign('/m/logout');
            }
            ;
            var onClickApplication = setInterval(function() {
                var membershipSignOut = document.querySelector('#n-499-membership-sign-out-mobile');
                if (membershipSignOut && !membershipSignOut.onclick) {
                    membershipSignOut.onclick = window.onMembershipLogout;
                }
            }, 500);
            setTimeout(function() {
                return clearInterval(onClickApplication);
            }, 1000);

            var cookieValue = void 0;
            var cookie = "info_c2=";
            var parsedCookies = document.cookie.split(";");
            for (var i = 0; i < parsedCookies.length; i++) {
                var targetCookie = parsedCookies[i];
                while (targetCookie.charAt(0) === " ") {
                    targetCookie = targetCookie.substring(1, targetCookie.length);
                }
                if (targetCookie.indexOf(cookie) === 0) {
                    var rawCookie = targetCookie.substring(cookie.length, targetCookie.length);
                    cookieValue = rawCookie && JSON.parse(rawCookie);
                }
            }
            var membershipEmail = cookieValue && cookieValue.contactEmail;

            var membershipIcon = document.querySelector('#n-499-membership-mobile-footer');
            if (membershipIcon && !cookieValue) {
                membershipIcon.style.display = 'none';
                var dropdownElement = document.querySelector('#n-499-mobile-dropdown');
                if (dropdownElement) {
                    dropdownElement.style['padding-bottom'] = '20px';
                }
            } else {
                var membershipEmailField = document.querySelector('#n-499-membership-mobile-email');
                if (membershipEmailField) {
                    membershipEmailField.innerText = membershipEmail;
                }
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
                    var desktopMembershipIcon = document.querySelector('[data-aid="MEMBERSHIP_ICON_DESKTOP_RENDERED"]');
                    if (desktopMembershipIcon) {
                        desktopMembershipIcon.style.display = 'none';
                    }
                }
            }

        }
        )();