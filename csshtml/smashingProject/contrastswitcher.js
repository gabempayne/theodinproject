(window.webpackJsonp = window.webpackJsonp || []).push([
    [21], {
        274: function(t, e, r) {
            "use strict";
            r.r(e);
            var s = r(573),
                n = function(t, e) {
                    var r = e ? "add" : "remove";
                    document.body.classList[r]("contrast"), t.setAttribute("aria-pressed", e), t.querySelector(".settings--state").textContent = e ? "Bring red back!" : "Seriously, red?"
                };
            e.default = function(t) {
                var e = t.element,
                    r = t.store,
                    a = r.getState().settings;
                n(e, a.highContrast), e.addEventListener("click", function() {
                    var t = "true" === e.getAttribute("aria-pressed") || !1;
                    n(e, !t), r.dispatch(Object(s.I)({
                        highContrast: !t
                    }))
                })
            }
        }
    }
]);