    let e = Array.prototype.slice.call(document.getElementsByClassName("show-mobile"));
    e.forEach(a => {
      if (!window.mobilecheck()) a.style.display = "none";
    })

    e = Array.prototype.slice.call(document.getElementsByClassName("hide-mobile"));
    e.forEach(a => {
      if (window.mobilecheck()) a.style.display = "none";
    })

    e = Array.prototype.slice.call(document.getElementsByClassName("nav-menu-badge"));
    e.forEach(a => {
      if (window.mobilecheck()) a.style.marginBottom = "7px";
    })

    e = Array.prototype.slice.call(document.getElementsByClassName("nav-menu-icon"));
    e.forEach(a => {
      if (window.mobilecheck()) a.style.paddingBottom = "4px";
    })