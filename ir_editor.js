!(function (e) {
    var t = {};
    function n(a) {
        if (t[a]) return t[a].exports;
        var r = (t[a] = { i: a, l: !1, exports: {} });
        return e[a].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function (e, t, a) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
        }),
        (n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var a = Object.create(null);
            if ((n.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var r in e)
                    n.d(
                        a,
                        r,
                        function (t) {
                            return e[t];
                        }.bind(null, r)
                    );
            return a;
        }),
        (n.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return n.d(t, "a", t), t;
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = ""),
        n((n.s = 181));
})([
    function (e, t) {
        !(function () {
            e.exports = this.wp.element;
        })();
    },
    function (e, t) {
        function n(t) {
            return (
                (e.exports = n = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      }),
                n(t)
            );
        }
        e.exports = n;
    },
    function (e, t) {
        e.exports = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        };
    },
    function (e, t) {
        function n(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                (a.enumerable = a.enumerable || !1), (a.configurable = !0), "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
            }
        }
        e.exports = function (e, t, a) {
            return t && n(e.prototype, t), a && n(e, a), e;
        };
    },
    function (e, t, n) {
        var a = n(68),
            r = n(7);
        e.exports = function (e, t) {
            return !t || ("object" !== a(t) && "function" != typeof t) ? r(e) : t;
        };
    },
    function (e, t, n) {
        var a = n(69);
        e.exports = function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && a(e, t);
        };
    },
    function (e, t) {
        !(function () {
            e.exports = this.lodash;
        })();
    },
    function (e, t) {
        e.exports = function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        };
    },
    function (e, t, n) {
        e.exports = n(155)();
    },
    function (e, t) {
        e.exports = function (e, t, n) {
            return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
        };
    },
    function (e, t, n) {
        var a;
        /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ !(function () {
            "use strict";
            var n = {}.hasOwnProperty;
            function r() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var a = arguments[t];
                    if (a) {
                        var o = typeof a;
                        if ("string" === o || "number" === o) e.push(a);
                        else if (Array.isArray(a) && a.length) {
                            var i = r.apply(null, a);
                            i && e.push(i);
                        } else if ("object" === o) for (var c in a) n.call(a, c) && a[c] && e.push(c);
                    }
                }
                return e.join(" ");
            }
            e.exports
                ? ((r.default = r), (e.exports = r))
                : void 0 ===
                      (a = function () {
                          return r;
                      }.apply(t, [])) || (e.exports = a);
        })();
    },
    function (e, t) {
        !(function () {
            e.exports = this.React;
        })();
    },
    function (e, t) {
        function n() {
            return (
                (e.exports = n =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                        }
                        return e;
                    }),
                n.apply(this, arguments)
            );
        }
        e.exports = n;
    },
    function (e, t, n) {
        var a = n(48),
            r = "object" == typeof self && self && self.Object === Object && self,
            o = a || r || Function("return this")();
        e.exports = o;
    },
    function (e, t) {
        var n = Array.isArray;
        e.exports = n;
    },
    function (e, t) {
        !(function () {
            e.exports = this.regeneratorRuntime;
        })();
    },
    function (e, t, n) {
        var a = n(83),
            r = n(88);
        e.exports = function (e, t) {
            var n = r(e, t);
            return a(n) ? n : void 0;
        };
    },
    function (e, t, n) {
        var a = n(25),
            r = n(84),
            o = n(85),
            i = "[object Null]",
            c = "[object Undefined]",
            T = a ? a.toStringTag : void 0;
        e.exports = function (e) {
            return null == e ? (void 0 === e ? c : i) : T && T in Object(e) ? r(e) : o(e);
        };
    },
    function (e, t) {
        e.exports = function (e) {
            return null != e && "object" == typeof e;
        };
    },
    function (e, t, n) {
        var a = n(44),
            r = n(70),
            o = n(149),
            i = n(14);
        e.exports = function (e, t) {
            return (i(e) ? a : o)(e, r(t, 3));
        };
    },
    function (e, t, n) {
        var a;
        /*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/ !(function () {
            "use strict";
            var r = !("undefined" == typeof window || !window.document || !window.document.createElement),
                o = { canUseDOM: r, canUseWorkers: "undefined" != typeof Worker, canUseEventListeners: r && !(!window.addEventListener && !window.attachEvent), canUseViewport: r && !!window.screen };
            void 0 ===
                (a = function () {
                    return o;
                }.call(t, n, t, e)) || (e.exports = a);
        })();
    },
    function (e, t, n) {
        var a, r, o;
        /*!
         * $script.js JS loader & dependency manager
         * https://github.com/ded/script.js
         * (c) Dustin Diaz 2014 | License MIT
         */ (o = function () {
            var e,
                t,
                n = document,
                a = n.getElementsByTagName("head")[0],
                r = !1,
                o = "push",
                i = "readyState",
                c = "onreadystatechange",
                T = {},
                E = {},
                s = {},
                h = {};
            function A(e, t) {
                for (var n = 0, a = e.length; n < a; ++n) if (!t(e[n])) return r;
                return 1;
            }
            function l(e, t) {
                A(e, function (e) {
                    return t(e), 1;
                });
            }
            function L(t, n, a) {
                t = t[o] ? t : [t];
                var r = n && n.call,
                    i = r ? n : a,
                    c = r ? t.join("") : n,
                    u = t.length;
                function m(e) {
                    return e.call ? e() : T[e];
                }
                function R() {
                    if (!--u) for (var e in ((T[c] = 1), i && i(), s)) A(e.split("|"), m) && !l(s[e], m) && (s[e] = []);
                }
                return (
                    setTimeout(function () {
                        l(t, function t(n, a) {
                            return null === n
                                ? R()
                                : (a || /^https?:\/\//.test(n) || !e || (n = -1 === n.indexOf(".js") ? e + n + ".js" : e + n),
                                  h[n]
                                      ? (c && (E[c] = 1),
                                        2 == h[n]
                                            ? R()
                                            : setTimeout(function () {
                                                  t(n, !0);
                                              }, 0))
                                      : ((h[n] = 1), c && (E[c] = 1), void I(n, R)));
                        });
                    }, 0),
                    L
                );
            }
            function I(e, r) {
                var o,
                    T = n.createElement("script");
                (T.onload = T.onerror = T[c] = function () {
                    (T[i] && !/^c|loade/.test(T[i])) || o || ((T.onload = T[c] = null), (o = 1), (h[e] = 2), r());
                }),
                    (T.async = 1),
                    (T.src = t ? e + (-1 === e.indexOf("?") ? "?" : "&") + t : e),
                    a.insertBefore(T, a.lastChild);
            }
            return (
                (L.get = I),
                (L.order = function (e, t, n) {
                    !(function a(r) {
                        (r = e.shift()), e.length ? L(r, a) : L(r, t, n);
                    })();
                }),
                (L.path = function (t) {
                    e = t;
                }),
                (L.urlArgs = function (e) {
                    t = e;
                }),
                (L.ready = function (e, t, n) {
                    e = e[o] ? e : [e];
                    var a,
                        r = [];
                    return (
                        !l(e, function (e) {
                            T[e] || r[o](e);
                        }) &&
                        A(e, function (e) {
                            return T[e];
                        })
                            ? t()
                            : ((a = e.join("|")), (s[a] = s[a] || []), s[a][o](t), n && n(r)),
                        L
                    );
                }),
                (L.done = function (e) {
                    L([null], e);
                }),
                L
            );
        }),
            e.exports ? (e.exports = o()) : void 0 === (r = "function" == typeof (a = o) ? a.call(t, n, t, e) : a) || (e.exports = r);
    },
    function (e, t, n) {
        var a = n(160);
        e.exports = function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = a(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
            }
            return o;
        };
    },
    function (e, t, n) {
        var a = n(73),
            r = n(74),
            o = n(75),
            i = n(76),
            c = n(77);
        function T(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var a = e[t];
                this.set(a[0], a[1]);
            }
        }
        (T.prototype.clear = a), (T.prototype.delete = r), (T.prototype.get = o), (T.prototype.has = i), (T.prototype.set = c), (e.exports = T);
    },
    function (e, t, n) {
        var a = n(46);
        e.exports = function (e, t) {
            for (var n = e.length; n--; ) if (a(e[n][0], t)) return n;
            return -1;
        };
    },
    function (e, t, n) {
        var a = n(13).Symbol;
        e.exports = a;
    },
    function (e, t, n) {
        var a = n(16)(Object, "create");
        e.exports = a;
    },
    function (e, t, n) {
        var a = n(97);
        e.exports = function (e, t) {
            var n = e.__data__;
            return a(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
        };
    },
    function (e, t, n) {
        var a = n(41),
            r = 1 / 0;
        e.exports = function (e) {
            if ("string" == typeof e || a(e)) return e;
            var t = e + "";
            return "0" == t && 1 / e == -r ? "-0" : t;
        };
    },
    function (e, t, n) {
        var a = n(61),
            r = n(62),
            o = n(42),
            i = n(63);
        e.exports = function (e) {
            return a(e) || r(e) || o(e) || i();
        };
    },
    function (e, t) {
        e.exports = function (e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
            return a;
        };
    },
    function (e, t) {
        function n(e, t, n, a, r, o, i) {
            try {
                var c = e[o](i),
                    T = c.value;
            } catch (e) {
                return void n(e);
            }
            c.done ? t(T) : Promise.resolve(T).then(a, r);
        }
        e.exports = function (e) {
            return function () {
                var t = this,
                    a = arguments;
                return new Promise(function (r, o) {
                    var i = e.apply(t, a);
                    function c(e) {
                        n(i, r, o, c, T, "next", e);
                    }
                    function T(e) {
                        n(i, r, o, c, T, "throw", e);
                    }
                    c(void 0);
                });
            };
        };
    },
    function (e, t, n) {
        var a = n(162),
            r = n(163),
            o = n(42),
            i = n(164);
        e.exports = function (e, t) {
            return a(e) || r(e, t) || o(e, t) || i();
        };
    },
    function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = function (e, t, n, a) {
                return "boolean" == typeof e ? e : "function" == typeof e ? e(t, n, a) : !(!0 != !!e || !e);
            },
            r = function (e, t) {
                return Object.hasOwnProperty.call(e, t);
            },
            o = function (e, t, n, a) {
                return a ? new Error(a) : new Error("Required " + e[t] + " `" + t + "` was not specified in `" + n + "`.");
            };
        t.default = function (e, t, n) {
            return (
                (function (e, t) {
                    if ("function" != typeof e) throw new TypeError("The typeValidator argument must be a function with the signature function(props, propName, componentName).");
                    if (t && "string" != typeof t) throw new TypeError("The error message is optional, but must be a string if provided.");
                })(e, n),
                function (i, c, T) {
                    for (var E = arguments.length, s = Array(3 < E ? E - 3 : 0), h = 3; h < E; h++) s[h - 3] = arguments[h];
                    return a(t, i, c, T) ? (r(i, c) ? e.apply(void 0, [i, c, T].concat(s)) : o(i, c, T, n)) : e.apply(void 0, [i, c, T].concat(s));
                }
            );
        };
    },
    function (e, t, n) {
        var a = n(16)(n(13), "Map");
        e.exports = a;
    },
    function (e, t) {
        e.exports = function (e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t);
        };
    },
    function (e, t, n) {
        var a = n(89),
            r = n(96),
            o = n(98),
            i = n(99),
            c = n(100);
        function T(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var a = e[t];
                this.set(a[0], a[1]);
            }
        }
        (T.prototype.clear = a), (T.prototype.delete = r), (T.prototype.get = o), (T.prototype.has = i), (T.prototype.set = c), (e.exports = T);
    },
    function (e, t, n) {
        var a = n(118),
            r = n(125),
            o = n(39);
        e.exports = function (e) {
            return o(e) ? a(e) : r(e);
        };
    },
    function (e, t) {
        var n = 9007199254740991;
        e.exports = function (e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= n;
        };
    },
    function (e, t, n) {
        var a = n(47),
            r = n(38);
        e.exports = function (e) {
            return null != e && r(e.length) && !a(e);
        };
    },
    function (e, t, n) {
        var a = n(14),
            r = n(41),
            o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            i = /^\w*$/;
        e.exports = function (e, t) {
            if (a(e)) return !1;
            var n = typeof e;
            return !("number" != n && "symbol" != n && "boolean" != n && null != e && !r(e)) || i.test(e) || !o.test(e) || (null != t && e in Object(t));
        };
    },
    function (e, t, n) {
        var a = n(17),
            r = n(18),
            o = "[object Symbol]";
        e.exports = function (e) {
            return "symbol" == typeof e || (r(e) && a(e) == o);
        };
    },
    function (e, t, n) {
        var a = n(30);
        e.exports = function (e, t) {
            if (e) {
                if ("string" == typeof e) return a(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0;
            }
        };
    },
    function (e) {
        e.exports = JSON.parse(
            '{"Misc":[{"entity":"&trade;","hex":"&#2122;","name":"TRADEMARK SIGN","char":"™"},{"entity":"&copy;","hex":"&#00A9;","name":"COPYRIGHT SIGN","char":"©"},{"entity":"&reg;","hex":"&#00AE;","name":"REGISTERED SIGN","char":"®"},{"hex":"&#0024;","name":"DOLLAR SIGN","char":"$"},{"hex":"&#20AC;","name":"EURO SIGN","char":"€"},{"entity":"&cent;","hex":"&#00A2;","name":"CENT SIGN","char":"¢"},{"entity":"&pound;","hex":"&#00A3;","name":"POUND SIGN","char":"£"},{"entity":"&curren;","hex":"&#00A4;","name":"CURRENCY SIGN","char":"¤"},{"entity":"&yen;","hex":"&#00A5;","name":"YEN SIGN","char":"¥"},{"entity":"&para;","hex":"&#00B6;","name":"PILCROW SIGN","char":"¶"},{"entity":"&sect;","hex":"&#00A7;","name":"SECTION SIGN","char":"§"},{"entity":"&ndash;","hex":"&#8211;","name":"EN DASH NDASH","char":"–"},{"entity":"&mdash;","hex":"&#8212;","name":"EM DASH MDASH","char":"—"},{"hex":"&#275D;","name":"HEAVY DOUBLE TURNED COMMA QUOTATION MARK ORNAMENT","char":"❝"},{"hex":"&#275E;","name":"HEAVY DOUBLE COMMA QUOTATION MARK ORNAMENT","char":"❞"},{"entity":"&infin;","hex":"&#221E;","name":"INFINITY","char":"∞"},{"entity":"&oslash;","hex":"&#00F8;","name":"LATIN SMALL LETTER O WITH STROKE","char":"ø"},{"entity":"&ne;","hex":"&#2260;","name":"NOT EQUAL TO","char":"≠"},{"hex":"&#0025;","name":"PERCENT SIGN","char":"%"},{"entity":"&hellip;","hex":"&#2026;","name":"HORIZONTAL ELLIPSIS","char":"…"},{"entity":"&int;","hex":"&#222B;","name":"INTEGRAL","char":"∫"},{"entity":"&asymp;","hex":"&#2248;","name":"ALMOST EQUAL TO","char":"≈"},{"entity":"&there4;","hex":"&#2234;","name":"THEREFORE","char":"∴"},{"entity":"&prop;","hex":"&#221D;","name":"PROPORTIONAL TO","char":"∝"},{"entity":"&micro;","hex":"&#00B5;","name":"MICRO SIGN","char":"µ"},{"entity":"&part;","hex":"&#2202;","name":"PARTIAL DIFFERENTIAL","char":"∂"},{"entity":"&Omega;","hex":"&#03A9;","name":"GREEK CAPITAL LETTER OMEGA","char":"Ω"},{"entity":"&Phi;","hex":"&#03A6;","name":"GREEK CAPITAL LETTER PHI","char":"Φ"},{"entity":"&Psi;","hex":"&#03A8;","name":"GREEK CAPITAL LETTER PSI","char":"Ψ"},{"entity":"&lambda;","hex":"&#03BB;","name":"GREEK SMALL LETTER LAMDA","char":"λ"},{"hex":"&#03F4;","name":"GREEK CAPITAL THETA SYMBOL","char":"ϴ"},{"entity":"&omega;","hex":"&#03C9;","name":"GREEK SMALL LETTER OMEGA","char":"ω"},{"hex":"&#A74F;","name":"LATIN SMALL LETTER OO","char":"ꝏ"},{"hex":"&#1D60;","name":"MODIFIER LETTER SMALL GREEK PHI","char":"ᵠ"},{"hex":"&#2103;","name":"DEGREE CELSIUS","char":"℃"},{"hex":"&#2109;","name":"DEGREE FAHRENHEIT","char":"℉"},{"hex":"&#2691;","name":"BLACK FLAG","char":"⚑"},{"hex":"&#2690;","name":"WHITE FLAG","char":"⚐"},{"hex":"&#2766;","name":"FLORAL HEART","char":"❦"},{"hex":"&#2619;","name":"REVERSED ROTATED FLORAL HEART BULLET","char":"☙"},{"hex":"&#2668;","name":"HOT SPRINGS EMOJI","char":"♨"},{"hex":"&#2601;","name":"CLOUD","char":"☁"},{"hex":"&#2696;","name":"SCALES EMOJI","char":"⚖"},{"entity":"&uml;","hex":"&#00A8;","name":"DIAERESIS","char":"¨"},{"entity":"&not;","hex":"&#00AC;","name":"NOT SIGN","char":"¬"},{"entity":"&macr;","hex":"&#00AF;","name":"MACRON","char":"¯"},{"entity":"&acute;","hex":"&#00B4;","name":"ACUTE ACCENT","char":"´"},{"entity":"&micro;","hex":"&#00B5;","name":"MICRO SIGN","char":"µ"},{"entity":"&middot;","hex":"&#00B7;","name":"MIDDLE DOT","char":"·"},{"entity":"&cedil;","hex":"&#00B8;","name":"CEDILLA","char":"¸"},{"entity":"&plusmn;","hex":"&#00B1;","name":"PLUS-MINUS SIGN","char":"±"},{"entity":"&sup1;","hex":"&#00B9;","name":"SUPERSCRIPT ONE","char":"¹"},{"entity":"&sup2;","hex":"&#00B2;","name":"SUPERSCRIPT TWO","char":"²"},{"entity":"&sup3;","hex":"&#00B3;","name":"SUPERSCRIPT THREE","char":"³"},{"entity":"&deg;","hex":"&#00B0;","name":"DEGREE SIGN","char":"°"},{"entity":"&ordf;","hex":"&#00AA;","name":"FEMININE ORDINAL INDICATOR","char":"ª"},{"entity":"&ordm;","hex":"&#00BA;","name":"MASCULINE ORDINAL INDICATOR","char":"º"},{"entity":"&frac14;","hex":"&#00BC;","name":"VULGAR FRACTION ONE QUARTER","char":"¼"},{"entity":"&frac12;","hex":"&#00BD;","name":"VULGAR FRACTION ONE HALF","char":"½"},{"entity":"&frac34;","hex":"&#00BE;","name":"VULGAR FRACTION THREE QUARTERS","char":"¾"},{"entity":"&iquest;","hex":"&#00BF;","name":"INVERTED QUESTION MARK","char":"¿"},{"entity":"&iexcl;","hex":"&#00A1;","name":"INVERTED EXCLAMATION MARK","char":"¡"},{"entity":"&brvbar;","hex":"&#00A6;","name":"BROKEN BAR","char":"¦"},{"entity":"&laquo;","hex":"&#00AB;","name":"LEFT-POINTING DOUBLE ANGLE QUOTATION MARK","char":"«"},{"entity":"&raquo;","hex":"&#00BB;","name":"RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK","char":"»"},{"hex":"&#25A0;","name":"BLACK SQUARE","char":"■"},{"hex":"&#25A1;","name":"WHITE SQUARE","char":"□"},{"hex":"&#25A2;","name":"WHITE SQUARE WITH ROUNDED CORNERS","char":"▢"},{"hex":"&#25A3;","name":"WHITE SQUARE CONTAINING BLACK SMALL SQUARE","char":"▣"},{"hex":"&#25A4;","name":"SQUARE WITH HORIZONTAL FILL","char":"▤"},{"hex":"&#25A5;","name":"SQUARE WITH VERTICAL FILL","char":"▥"},{"hex":"&#25A6;","name":"SQUARE WITH ORTHOGONAL CROSSHATCH FILL","char":"▦"},{"hex":"&#25A7;","name":"SQUARE WITH UPPER LEFT TO LOWER RIGHT FILL","char":"▧"},{"hex":"&#25A8;","name":"SQUARE WITH UPPER RIGHT TO LOWER LEFT FILL","char":"▨"},{"hex":"&#25A9;","name":"SQUARE WITH DIAGONAL CROSSHATCH FILL","char":"▩"},{"hex":"&#25AA;","name":"BLACK SMALL SQUARE","char":"▪"},{"hex":"&#25AB;","name":"WHITE SMALL SQUARE","char":"▫"},{"hex":"&#25AC;","name":"BLACK RECTANGLE","char":"▬"},{"hex":"&#25AD;","name":"WHITE RECTANGLE","char":"▭"},{"hex":"&#25AE;","name":"BLACK VERTICAL RECTANGLE","char":"▮"},{"hex":"&#25AF;","name":"WHITE VERTICAL RECTANGLE","char":"▯"},{"hex":"&#25B0;","name":"BLACK PARALLELOGRAM","char":"▰"},{"hex":"&#25B1;","name":"WHITE PARALLELOGRAM","char":"▱"},{"hex":"&#25B2;","name":"BLACK UP-POINTING TRIANGLE","char":"▲"},{"hex":"&#25B3;","name":"WHITE UP-POINTING TRIANGLE","char":"△"},{"hex":"&#25B4;","name":"BLACK UP-POINTING SMALL TRIANGLE","char":"▴"},{"hex":"&#25B5;","name":"WHITE UP-POINTING SMALL TRIANGLE","char":"▵"},{"hex":"&#25B6;","name":"BLACK RIGHT-POINTING TRIANGLE","char":"▶"},{"hex":"&#25B7;","name":"WHITE RIGHT-POINTING TRIANGLE","char":"▷"},{"hex":"&#25B8;","name":"BLACK RIGHT-POINTING SMALL TRIANGLE","char":"▸"},{"hex":"&#25B9;","name":"WHITE RIGHT-POINTING SMALL TRIANGLE","char":"▹"},{"hex":"&#25BA;","name":"BLACK RIGHT-POINTING POINTER","char":"►"},{"hex":"&#25BB;","name":"WHITE RIGHT-POINTING POINTER","char":"▻"},{"hex":"&#25BC;","name":"BLACK DOWN-POINTING TRIANGLE","char":"▼"},{"hex":"&#25BD;","name":"WHITE DOWN-POINTING TRIANGLE","char":"▽"},{"hex":"&#25BE;","name":"BLACK DOWN-POINTING SMALL TRIANGLE","char":"▾"},{"hex":"&#25BF;","name":"WHITE DOWN-POINTING SMALL TRIANGLE","char":"▿"},{"hex":"&#25C0;","name":"BLACK LEFT-POINTING TRIANGLE","char":"◀"},{"hex":"&#25C1;","name":"WHITE LEFT-POINTING TRIANGLE","char":"◁"},{"hex":"&#25C2;","name":"BLACK LEFT-POINTING SMALL TRIANGLE","char":"◂"},{"hex":"&#25C3;","name":"WHITE LEFT-POINTING SMALL TRIANGLE","char":"◃"},{"hex":"&#25C4;","name":"BLACK LEFT-POINTING POINTER","char":"◄"},{"hex":"&#25C5;","name":"WHITE LEFT-POINTING POINTER","char":"◅"},{"hex":"&#25C6;","name":"BLACK DIAMOND","char":"◆"},{"hex":"&#25C7;","name":"WHITE DIAMOND","char":"◇"},{"hex":"&#25C8;","name":"WHITE DIAMOND CONTAINING BLACK SMALL DIAMOND","char":"◈"},{"hex":"&#25C9;","name":"FISHEYE","char":"◉"},{"entity":"&loz;","hex":"&#25CA;","name":"LOZENGE","char":"◊"},{"hex":"&#25CB;","name":"WHITE CIRCLE","char":"○"},{"hex":"&#25CC;","name":"DOTTED CIRCLE","char":"◌"},{"hex":"&#25CD;","name":"CIRCLE WITH VERTICAL FILL","char":"◍"},{"hex":"&#25CE;","name":"BULLSEYE","char":"◎"},{"hex":"&#25CF;","name":"BLACK CIRCLE","char":"●"},{"hex":"&#25D0;","name":"CIRCLE WITH LEFT HALF BLACK","char":"◐"},{"hex":"&#25D1;","name":"CIRCLE WITH RIGHT HALF BLACK","char":"◑"},{"hex":"&#25D2;","name":"CIRCLE WITH LOWER HALF BLACK","char":"◒"},{"hex":"&#25D3;","name":"CIRCLE WITH UPPER HALF BLACK","char":"◓"},{"hex":"&#25D4;","name":"CIRCLE WITH UPPER RIGHT QUADRANT BLACK","char":"◔"},{"hex":"&#25D5;","name":"CIRCLE WITH ALL BUT UPPER LEFT QUADRANT BLACK","char":"◕"},{"hex":"&#25D6;","name":"LEFT HALF BLACK CIRCLE","char":"◖"},{"hex":"&#25D7;","name":"RIGHT HALF BLACK CIRCLE","char":"◗"},{"hex":"&#25D8;","name":"INVERSE BULLET","char":"◘"},{"hex":"&#25D9;","name":"INVERSE WHITE CIRCLE","char":"◙"},{"hex":"&#25DA;","name":"UPPER HALF INVERSE WHITE CIRCLE","char":"◚"},{"hex":"&#25DB;","name":"LOWER HALF INVERSE WHITE CIRCLE","char":"◛"},{"hex":"&#25DC;","name":"UPPER LEFT QUADRANT CIRCULAR ARC","char":"◜"},{"hex":"&#25DD;","name":"UPPER RIGHT QUADRANT CIRCULAR ARC","char":"◝"},{"hex":"&#25DE;","name":"LOWER RIGHT QUADRANT CIRCULAR ARC","char":"◞"},{"hex":"&#25DF;","name":"LOWER LEFT QUADRANT CIRCULAR ARC","char":"◟"},{"hex":"&#25E0;","name":"UPPER HALF CIRCLE","char":"◠"},{"hex":"&#25E1;","name":"LOWER HALF CIRCLE","char":"◡"},{"hex":"&#25E2;","name":"BLACK LOWER RIGHT TRIANGLE","char":"◢"},{"hex":"&#25E3;","name":"BLACK LOWER LEFT TRIANGLE","char":"◣"},{"hex":"&#25E4;","name":"BLACK UPPER LEFT TRIANGLE","char":"◤"},{"hex":"&#25E5;","name":"BLACK UPPER RIGHT TRIANGLE","char":"◥"},{"hex":"&#25E6;","name":"WHITE BULLET","char":"◦"},{"hex":"&#25E7;","name":"SQUARE WITH LEFT HALF BLACK","char":"◧"},{"hex":"&#25E8;","name":"SQUARE WITH RIGHT HALF BLACK","char":"◨"},{"hex":"&#25E9;","name":"SQUARE WITH UPPER LEFT DIAGONAL HALF BLACK","char":"◩"},{"hex":"&#25EA;","name":"SQUARE WITH LOWER RIGHT DIAGONAL HALF BLACK","char":"◪"},{"hex":"&#25EB;","name":"WHITE SQUARE WITH VERTICAL BISECTING LINE","char":"◫"},{"hex":"&#25EC;","name":"WHITE UP-POINTING TRIANGLE WITH DOT","char":"◬"},{"hex":"&#25ED;","name":"UP-POINTING TRIANGLE WITH LEFT HALF BLACK","char":"◭"},{"hex":"&#25EE;","name":"UP-POINTING TRIANGLE WITH RIGHT HALF BLACK","char":"◮"},{"hex":"&#25EF;","name":"LARGE CIRCLE","char":"◯"},{"hex":"&#25F0;","name":"WHITE SQUARE WITH UPPER LEFT QUADRANT","char":"◰"},{"hex":"&#25F1;","name":"WHITE SQUARE WITH LOWER LEFT QUADRANT","char":"◱"},{"hex":"&#25F2;","name":"WHITE SQUARE WITH LOWER RIGHT QUADRANT","char":"◲"},{"hex":"&#25F3;","name":"WHITE SQUARE WITH UPPER RIGHT QUADRANT","char":"◳"},{"hex":"&#25F4;","name":"WHITE CIRCLE WITH UPPER LEFT QUADRANT","char":"◴"},{"hex":"&#25F5;","name":"WHITE CIRCLE WITH LOWER LEFT QUADRANT","char":"◵"},{"hex":"&#25F6;","name":"WHITE CIRCLE WITH LOWER RIGHT QUADRANT","char":"◶"},{"hex":"&#25F7;","name":"WHITE CIRCLE WITH UPPER RIGHT QUADRANT","char":"◷"},{"hex":"&#25F8;","name":"UPPER LEFT TRIANGLE","char":"◸"},{"hex":"&#25F9;","name":"UPPER RIGHT TRIANGLE","char":"◹"},{"hex":"&#25FA;","name":"LOWER LEFT TRIANGLE","char":"◺"},{"hex":"&#25FB;","name":"WHITE MEDIUM SQUARE","char":"◻"},{"hex":"&#25FC;","name":"BLACK MEDIUM SQUARE","char":"◼"},{"hex":"&#25FD;","name":"WHITE MEDIUM SMALL SQUARE","char":"◽"},{"hex":"&#25FE;","name":"BLACK MEDIUM SMALL SQUARE","char":"◾"},{"hex":"&#25FF;","name":"LOWER RIGHT TRIANGLE","char":"◿"},{"hex":"&#2B12;","name":"SQUARE WITH TOP HALF BLACK","char":"⬒"},{"hex":"&#2B13;","name":"SQUARE WITH BOTTOM HALF BLACK","char":"⬓"},{"hex":"&#2B14;","name":"SQUARE WITH UPPER RIGHT DIAGONAL HALF BLACK","char":"⬔"},{"hex":"&#2B15;","name":"SQUARE WITH LOWER LEFT DIAGONAL HALF BLACK","char":"⬕"},{"hex":"&#2B16;","name":"DIAMOND WITH LEFT HALF BLACK","char":"⬖"},{"hex":"&#2B17;","name":"DIAMOND WITH RIGHT HALF BLACK","char":"⬗"},{"hex":"&#2B18;","name":"DIAMOND WITH TOP HALF BLACK","char":"⬘"},{"hex":"&#2B19;","name":"DIAMOND WITH BOTTOM HALF BLACK","char":"⬙"},{"hex":"&#2B1A;","name":"DOTTED SQUARE","char":"⬚"},{"hex":"&#2B1F;","name":"BLACK PENTAGON","char":"⬟"},{"hex":"&#2B20;","name":"WHITE PENTAGON","char":"⬠"},{"hex":"&#2B21;","name":"WHITE HEXAGON","char":"⬡"},{"hex":"&#2B22;","name":"BLACK HEXAGON","char":"⬢"},{"hex":"&#2B23;","name":"HORIZONTAL BLACK HEXAGON","char":"⬣"},{"hex":"&#2B24;","name":"BLACK LARGE CIRCLE","char":"⬤"},{"hex":"&#2B53;","name":"BLACK RIGHT-POINTING PENTAGON","char":"⭓"},{"hex":"&#2B54;","name":"WHITE RIGHT-POINTING PENTAGON","char":"⭔"},{"hex":"&#2600;","name":"BLACK SUN WITH RAYS","char":"☀"},{"hex":"&#2601;","name":"CLOUD","char":"☁"},{"hex":"&#2602;","name":"UMBRELLA","char":"☂"},{"hex":"&#2603;","name":"SNOWMAN","char":"☃"},{"hex":"&#2604;","name":"COMET","char":"☄"},{"hex":"&#2605;","name":"BLACK STAR","char":"★"},{"hex":"&#2606;","name":"WHITE STAR","char":"☆"},{"hex":"&#2607;","name":"LIGHTNING","char":"☇"},{"hex":"&#2608;","name":"THUNDERSTORM","char":"☈"},{"hex":"&#2609;","name":"SUN","char":"☉"},{"hex":"&#260A;","name":"ASCENDING NODE","char":"☊"},{"hex":"&#260B;","name":"DESCENDING NODE","char":"☋"},{"hex":"&#260C;","name":"CONJUNCTION","char":"☌"},{"hex":"&#260D;","name":"OPPOSITION","char":"☍"},{"hex":"&#260E;","name":"BLACK TELEPHONE","char":"☎"},{"hex":"&#260F;","name":"WHITE TELEPHONE","char":"☏"},{"hex":"&#2610;","name":"BALLOT BOX","char":"☐"},{"hex":"&#2611;","name":"BALLOT BOX WITH CHECK","char":"☑"},{"hex":"&#2612;","name":"BALLOT BOX WITH X","char":"☒"},{"hex":"&#2613;","name":"SALTIRE","char":"☓"},{"hex":"&#2614;","name":"UMBRELLA WITH RAIN DROPS","char":"☔"},{"hex":"&#2615;","name":"HOT BEVERAGE","char":"☕"},{"hex":"&#2616;","name":"WHITE SHOGI PIECE","char":"☖"},{"hex":"&#2617;","name":"BLACK SHOGI PIECE","char":"☗"},{"hex":"&#2618;","name":"SHAMROCK","char":"☘"},{"hex":"&#2619;","name":"REVERSED ROTATED FLORAL HEART BULLET","char":"☙"},{"hex":"&#261A;","name":"BLACK LEFT POINTING INDEX","char":"☚"},{"hex":"&#261B;","name":"BLACK RIGHT POINTING INDEX","char":"☛"},{"hex":"&#261C;","name":"WHITE LEFT POINTING INDEX","char":"☜"},{"hex":"&#261D;","name":"WHITE UP POINTING INDEX","char":"☝"},{"hex":"&#261E;","name":"WHITE RIGHT POINTING INDEX","char":"☞"},{"hex":"&#261F;","name":"WHITE DOWN POINTING INDEX","char":"☟"},{"hex":"&#2620;","name":"SKULL AND CROSSBONES","char":"☠"},{"hex":"&#2621;","name":"CAUTION SIGN","char":"☡"},{"hex":"&#2622;","name":"RADIOACTIVE SIGN","char":"☢"},{"hex":"&#2623;","name":"BIOHAZARD SIGN","char":"☣"},{"hex":"&#2624;","name":"CADUCEUS","char":"☤"},{"hex":"&#2625;","name":"ANKH","char":"☥"},{"hex":"&#2626;","name":"ORTHODOX CROSS","char":"☦"},{"hex":"&#2627;","name":"CHI RHO","char":"☧"},{"hex":"&#2628;","name":"CROSS OF LORRAINE","char":"☨"},{"hex":"&#2629;","name":"CROSS OF JERUSALEM","char":"☩"},{"hex":"&#262A;","name":"STAR AND CRESCENT","char":"☪"},{"hex":"&#262B;","name":"FARSI SYMBOL","char":"☫"},{"hex":"&#262C;","name":"ADI SHAKTI","char":"☬"},{"hex":"&#262D;","name":"HAMMER AND SICKLE","char":"☭"},{"hex":"&#262E;","name":"PEACE SYMBOL","char":"☮"},{"hex":"&#262F;","name":"YIN YANG","char":"☯"},{"hex":"&#2630;","name":"TRIGRAM FOR HEAVEN","char":"☰"},{"hex":"&#2631;","name":"TRIGRAM FOR LAKE","char":"☱"},{"hex":"&#2632;","name":"TRIGRAM FOR FIRE","char":"☲"},{"hex":"&#2633;","name":"TRIGRAM FOR THUNDER","char":"☳"},{"hex":"&#2634;","name":"TRIGRAM FOR WIND","char":"☴"},{"hex":"&#2635;","name":"TRIGRAM FOR WATER","char":"☵"},{"hex":"&#2636;","name":"TRIGRAM FOR MOUNTAIN","char":"☶"},{"hex":"&#2637;","name":"TRIGRAM FOR EARTH","char":"☷"},{"hex":"&#2638;","name":"WHEEL OF DHARMA","char":"☸"},{"hex":"&#2639;","name":"WHITE FROWNING FACE","char":"☹"},{"hex":"&#263A;","name":"WHITE SMILING FACE","char":"☺"},{"hex":"&#263B;","name":"BLACK SMILING FACE","char":"☻"},{"hex":"&#263C;","name":"WHITE SUN WITH RAYS","char":"☼"},{"hex":"&#263D;","name":"FIRST QUARTER MOON","char":"☽"},{"hex":"&#263E;","name":"LAST QUARTER MOON","char":"☾"},{"hex":"&#263F;","name":"MERCURY","char":"☿"},{"hex":"&#2640;","name":"FEMALE SIGN","char":"♀"},{"hex":"&#2641;","name":"EARTH","char":"♁"},{"hex":"&#2642;","name":"MALE SIGN","char":"♂"},{"hex":"&#2643;","name":"JUPITER","char":"♃"},{"hex":"&#2644;","name":"SATURN","char":"♄"},{"hex":"&#2645;","name":"URANUS","char":"♅"},{"hex":"&#2646;","name":"NEPTUNE","char":"♆"},{"hex":"&#2647;","name":"PLUTO","char":"♇"},{"hex":"&#2648;","name":"ARIES","char":"♈"},{"hex":"&#2649;","name":"TAURUS","char":"♉"},{"hex":"&#264A;","name":"GEMINI","char":"♊"},{"hex":"&#264B;","name":"CANCER","char":"♋"},{"hex":"&#264C;","name":"LEO","char":"♌"},{"hex":"&#264D;","name":"VIRGO","char":"♍"},{"hex":"&#264E;","name":"LIBRA","char":"♎"},{"hex":"&#264F;","name":"SCORPIUS","char":"♏"},{"hex":"&#2650;","name":"SAGITTARIUS","char":"♐"},{"hex":"&#2651;","name":"CAPRICORN","char":"♑"},{"hex":"&#2652;","name":"AQUARIUS","char":"♒"},{"hex":"&#2653;","name":"PISCES","char":"♓"},{"hex":"&#2654;","name":"WHITE CHESS KING","char":"♔"},{"hex":"&#2655;","name":"WHITE CHESS QUEEN","char":"♕"},{"hex":"&#2656;","name":"WHITE CHESS ROOK","char":"♖"},{"hex":"&#2657;","name":"WHITE CHESS BISHOP","char":"♗"},{"hex":"&#2658;","name":"WHITE CHESS KNIGHT","char":"♘"},{"hex":"&#2659;","name":"WHITE CHESS PAWN","char":"♙"},{"hex":"&#265A;","name":"BLACK CHESS KING","char":"♚"},{"hex":"&#265B;","name":"BLACK CHESS QUEEN","char":"♛"},{"hex":"&#265C;","name":"BLACK CHESS ROOK","char":"♜"},{"hex":"&#265D;","name":"BLACK CHESS BISHOP","char":"♝"},{"hex":"&#265E;","name":"BLACK CHESS KNIGHT","char":"♞"},{"hex":"&#265F;","name":"BLACK CHESS PAWN","char":"♟"},{"hex":"&#2660;","entity":"&spades;","name":"BLACK SPADE SUIT","char":"♠"},{"hex":"&#2661;","name":"WHITE HEART SUIT","char":"♡"},{"hex":"&#2662;","name":"WHITE DIAMOND SUIT","char":"♢"},{"hex":"&#2663;","entity":"&clubs;","name":"BLACK CLUB SUIT","char":"♣"},{"hex":"&#2664;","name":"WHITE SPADE SUIT","char":"♤"},{"hex":"&#2665;","entity":"&hearts;","name":"BLACK HEART SUIT","char":"♥"},{"hex":"&#2666;","entity":"&diams;","name":"BLACK DIAMOND SUIT","char":"♦"},{"hex":"&#2667;","name":"WHITE CLUB SUIT","char":"♧"},{"hex":"&#2668;","name":"HOT SPRINGS","char":"♨"},{"hex":"&#2669;","name":"QUARTER NOTE","char":"♩"},{"hex":"&#266A;","name":"EIGHTH NOTE","char":"♪"},{"hex":"&#266B;","name":"BEAMED EIGHTH NOTES","char":"♫"},{"hex":"&#266C;","name":"BEAMED SIXTEENTH NOTES","char":"♬"},{"hex":"&#266D;","name":"MUSIC FLAT SIGN","char":"♭"},{"hex":"&#266E;","name":"MUSIC NATURAL SIGN","char":"♮"},{"hex":"&#266F;","name":"MUSIC SHARP SIGN","char":"♯"},{"hex":"&#2670;","name":"WEST SYRIAC CROSS","char":"♰"},{"hex":"&#2671;","name":"EAST SYRIAC CROSS","char":"♱"},{"hex":"&#2672;","name":"UNIVERSAL RECYCLING SYMBOL","char":"♲"},{"hex":"&#2673;","name":"RECYCLING SYMBOL FOR TYPE-1 PLASTICS","char":"♳"},{"hex":"&#2674;","name":"RECYCLING SYMBOL FOR TYPE-2 PLASTICS","char":"♴"},{"hex":"&#2675;","name":"RECYCLING SYMBOL FOR TYPE-3 PLASTICS","char":"♵"},{"hex":"&#2676;","name":"RECYCLING SYMBOL FOR TYPE-4 PLASTICS","char":"♶"},{"hex":"&#2677;","name":"RECYCLING SYMBOL FOR TYPE-5 PLASTICS","char":"♷"},{"hex":"&#2678;","name":"RECYCLING SYMBOL FOR TYPE-6 PLASTICS","char":"♸"},{"hex":"&#2679;","name":"RECYCLING SYMBOL FOR TYPE-7 PLASTICS","char":"♹"},{"hex":"&#267A;","name":"RECYCLING SYMBOL FOR GENERIC MATERIALS","char":"♺"},{"hex":"&#267B;","name":"BLACK UNIVERSAL RECYCLING SYMBOL","char":"♻"},{"hex":"&#267C;","name":"RECYCLED PAPER SYMBOL","char":"♼"},{"hex":"&#267D;","name":"PARTIALLY-RECYCLED PAPER SYMBOL","char":"♽"},{"hex":"&#267E;","name":"PERMANENT PAPER SIGN","char":"♾"},{"hex":"&#267F;","name":"WHEELCHAIR SYMBOL","char":"♿"},{"hex":"&#2680;","name":"DIE FACE-1","char":"⚀"},{"hex":"&#2681;","name":"DIE FACE-2","char":"⚁"},{"hex":"&#2682;","name":"DIE FACE-3","char":"⚂"},{"hex":"&#2683;","name":"DIE FACE-4","char":"⚃"},{"hex":"&#2684;","name":"DIE FACE-5","char":"⚄"},{"hex":"&#2685;","name":"DIE FACE-6","char":"⚅"},{"hex":"&#2686;","name":"WHITE CIRCLE WITH DOT RIGHT","char":"⚆"},{"hex":"&#2687;","name":"WHITE CIRCLE WITH TWO DOTS","char":"⚇"},{"hex":"&#2688;","name":"BLACK CIRCLE WITH WHITE DOT RIGHT","char":"⚈"},{"hex":"&#2689;","name":"BLACK CIRCLE WITH TWO WHITE DOTS","char":"⚉"},{"hex":"&#268A;","name":"MONOGRAM FOR YANG","char":"⚊"},{"hex":"&#268B;","name":"MONOGRAM FOR YIN","char":"⚋"},{"hex":"&#268C;","name":"DIGRAM FOR GREATER YANG","char":"⚌"},{"hex":"&#268D;","name":"DIGRAM FOR LESSER YIN","char":"⚍"},{"hex":"&#268E;","name":"DIGRAM FOR LESSER YANG","char":"⚎"},{"hex":"&#268F;","name":"DIGRAM FOR GREATER YIN","char":"⚏"},{"hex":"&#2690;","name":"WHITE FLAG","char":"⚐"},{"hex":"&#2691;","name":"BLACK FLAG","char":"⚑"},{"hex":"&#2692;","name":"HAMMER AND PICK","char":"⚒"},{"hex":"&#2693;","name":"ANCHOR","char":"⚓"},{"hex":"&#2694;","name":"CROSSED SWORDS","char":"⚔"},{"hex":"&#2695;","name":"STAFF OF AESCULAPIUS","char":"⚕"},{"hex":"&#2696;","name":"SCALES","char":"⚖"},{"hex":"&#2697;","name":"ALEMBIC","char":"⚗"},{"hex":"&#2698;","name":"FLOWER","char":"⚘"},{"hex":"&#2699;","name":"GEAR","char":"⚙"},{"hex":"&#269A;","name":"STAFF OF HERMES","char":"⚚"},{"hex":"&#269B;","name":"ATOM SYMBOL","char":"⚛"},{"hex":"&#269C;","name":"FLEUR-DE-LIS","char":"⚜"},{"hex":"&#26A0;","name":"WARNING SIGN","char":"⚠"},{"hex":"&#26A1;","name":"HIGH VOLTAGE SIGN","char":"⚡"},{"hex":"&#26A2;","name":"DOUBLED FEMALE SIGN","char":"⚢"},{"hex":"&#26A3;","name":"DOUBLED MALE SIGN","char":"⚣"},{"hex":"&#26A4;","name":"INTERLOCKED FEMALE AND MALE SIGN","char":"⚤"},{"hex":"&#26A5;","name":"MALE AND FEMALE SIGN","char":"⚥"},{"hex":"&#26A6;","name":"MALE WITH STROKE SIGN","char":"⚦"},{"hex":"&#26A7;","name":"MALE WITH STROKE AND MALE AND FEMALE SIGN","char":"⚧"},{"hex":"&#26A8;","name":"VERTICAL MALE WITH STROKE SIGN","char":"⚨"},{"hex":"&#26A9;","name":"HORIZONTAL MALE WITH STROKE SIGN","char":"⚩"},{"hex":"&#26AA;","name":"MEDIUM WHITE CIRCLE","char":"⚪"},{"hex":"&#26AB;","name":"MEDIUM BLACK CIRCLE","char":"⚫"},{"hex":"&#26AC;","name":"MEDIUM SMALL WHITE CIRCLE","char":"⚬"},{"hex":"&#26AD;","name":"MARRIAGE SYMBOL","char":"⚭"},{"hex":"&#26AE;","name":"DIVORCE SYMBOL","char":"⚮"},{"hex":"&#26AF;","name":"UNMARRIED PARTNERSHIP SYMBOL","char":"⚯"},{"hex":"&#26B0;","name":"COFFIN","char":"⚰"},{"hex":"&#26B1;","name":"FUNERAL URN","char":"⚱"},{"hex":"&#26B2;","name":"NEUTER","char":"⚲"},{"entity":"&#9907;","hex":"&#26B3;","name":"CERES","char":"⚳"},{"hex":"&#26B4;","name":"PALLAS","char":"⚴"},{"hex":"&#26B5;","name":"JUNO","char":"⚵"},{"hex":"&#26B6;","name":"VESTA","char":"⚶"},{"hex":"&#26B7;","name":"CHIRON","char":"⚷"},{"hex":"&#26B8;","name":"BLACK MOON LILITH","char":"⚸"},{"hex":"&#2701;","name":"UPPER BLADE SCISSORS","char":"✁"},{"hex":"&#2702;","name":"BLACK SCISSORS","char":"✂"},{"hex":"&#2703;","name":"LOWER BLADE SCISSORS","char":"✃"},{"hex":"&#2704;","name":"WHITE SCISSORS","char":"✄"},{"hex":"&#2706;","name":"TELEPHONE LOCATION SIGN","char":"✆"},{"hex":"&#2707;","name":"TAPE DRIVE","char":"✇"},{"hex":"&#2708;","name":"AIRPLANE","char":"✈"},{"hex":"&#2709;","name":"ENVELOPE","char":"✉"},{"hex":"&#270C;","name":"VICTORY HAND","char":"✌"},{"hex":"&#270D;","name":"WRITING HAND","char":"✍"},{"hex":"&#270E;","name":"LOWER RIGHT PENCIL","char":"✎"},{"hex":"&#270F;","name":"PENCIL","char":"✏"},{"hex":"&#2710;","name":"UPPER RIGHT PENCIL","char":"✐"},{"hex":"&#2711;","name":"WHITE NIB","char":"✑"},{"hex":"&#2712;","name":"BLACK NIB","char":"✒"},{"hex":"&#2713;","name":"CHECK MARK","char":"✓"},{"hex":"&#2714;","name":"HEAVY CHECK MARK","char":"✔"},{"hex":"&#2715;","name":"MULTIPLICATION X","char":"✕"},{"hex":"&#2716;","name":"HEAVY MULTIPLICATION X","char":"✖"},{"hex":"&#2717;","name":"BALLOT X","char":"✗"},{"hex":"&#2718;","name":"HEAVY BALLOT X","char":"✘"},{"hex":"&#2719;","name":"OUTLINED GREEK CROSS","char":"✙"},{"hex":"&#271A;","name":"HEAVY GREEK CROSS","char":"✚"},{"hex":"&#271B;","name":"OPEN CENTRE CROSS","char":"✛"},{"hex":"&#271C;","name":"HEAVY OPEN CENTRE CROSS","char":"✜"},{"hex":"&#271D;","name":"LATIN CROSS","char":"✝"},{"hex":"&#271E;","name":"SHADOWED WHITE LATIN CROSS","char":"✞"},{"hex":"&#271F;","name":"OUTLINED LATIN CROSS","char":"✟"},{"hex":"&#2720;","name":"MALTESE CROSS","char":"✠"},{"hex":"&#2721;","name":"STAR OF DAVID","char":"✡"},{"hex":"&#2722;","name":"FOUR TEARDROP-SPOKED ASTERISK","char":"✢"},{"hex":"&#2723;","name":"FOUR BALLOON-SPOKED ASTERISK","char":"✣"},{"hex":"&#2724;","name":"HEAVY FOUR BALLOON-SPOKED ASTERISK","char":"✤"},{"hex":"&#2725;","name":"FOUR CLUB-SPOKED ASTERISK","char":"✥"},{"hex":"&#2726;","name":"BLACK FOUR POINTED STAR","char":"✦"},{"hex":"&#2727;","name":"WHITE FOUR POINTED STAR","char":"✧"},{"hex":"&#2729;","name":"STRESS OUTLINED WHITE STAR","char":"✩"},{"hex":"&#272A;","name":"CIRCLED WHITE STAR","char":"✪"},{"hex":"&#272B;","name":"OPEN CENTRE BLACK STAR","char":"✫"},{"hex":"&#272C;","name":"BLACK CENTRE WHITE STAR","char":"✬"},{"hex":"&#272D;","name":"OUTLINED BLACK STAR","char":"✭"},{"hex":"&#272E;","name":"HEAVY OUTLINED BLACK STAR","char":"✮"},{"hex":"&#272F;","name":"PINWHEEL STAR","char":"✯"},{"hex":"&#2730;","name":"SHADOWED WHITE STAR","char":"✰"},{"hex":"&#2731;","name":"HEAVY ASTERISK","char":"✱"},{"hex":"&#2732;","name":"OPEN CENTRE ASTERISK","char":"✲"},{"hex":"&#2733;","name":"EIGHT SPOKED ASTERISK","char":"✳"},{"hex":"&#2734;","name":"EIGHT POINTED BLACK STAR","char":"✴"},{"hex":"&#2735;","name":"EIGHT POINTED PINWHEEL STAR","char":"✵"},{"hex":"&#2736;","name":"SIX POINTED BLACK STAR","char":"✶"},{"hex":"&#2737;","name":"EIGHT POINTED RECTILINEAR BLACK STAR","char":"✷"},{"hex":"&#2738;","name":"HEAVY EIGHT POINTED RECTILINEAR BLACK STAR","char":"✸"},{"hex":"&#2739;","name":"TWELVE POINTED BLACK STAR","char":"✹"},{"hex":"&#273A;","name":"SIXTEEN POINTED ASTERISK","char":"✺"},{"hex":"&#273B;","name":"TEARDROP-SPOKED ASTERISK","char":"✻"},{"hex":"&#273C;","name":"OPEN CENTRE TEARDROP-SPOKED ASTERISK","char":"✼"},{"hex":"&#273D;","name":"HEAVY TEARDROP-SPOKED ASTERISK","char":"✽"},{"hex":"&#273E;","name":"SIX PETALLED BLACK AND WHITE FLORETTE","char":"✾"},{"hex":"&#273F;","name":"BLACK FLORETTE","char":"✿"},{"hex":"&#2740;","name":"WHITE FLORETTE","char":"❀"},{"hex":"&#2741;","name":"EIGHT PETALLED OUTLINED BLACK FLORETTE","char":"❁"},{"hex":"&#2742;","name":"CIRCLED OPEN CENTRE EIGHT POINTED STAR","char":"❂"},{"hex":"&#2743;","name":"HEAVY TEARDROP-SPOKED PINWHEEL ASTERISK","char":"❃"},{"hex":"&#2744;","name":"SNOWFLAKE","char":"❄"},{"hex":"&#2745;","name":"TIGHT TRIFOLIATE SNOWFLAKE","char":"❅"},{"hex":"&#2746;","name":"HEAVY CHEVRON SNOWFLAKE","char":"❆"},{"hex":"&#2747;","name":"SPARKLE","char":"❇"},{"hex":"&#2748;","name":"HEAVY SPARKLE","char":"❈"},{"hex":"&#2749;","name":"BALLOON-SPOKED ASTERISK","char":"❉"},{"hex":"&#274A;","name":"EIGHT TEARDROP-SPOKED PROPELLER ASTERISK","char":"❊"},{"hex":"&#274B;","name":"HEAVY EIGHT TEARDROP-SPOKED PROPELLER ASTERISK","char":"❋"},{"hex":"&#274D;","name":"SHADOWED WHITE CIRCLE","char":"❍"},{"hex":"&#274F;","name":"LOWER RIGHT DROP-SHADOWED WHITE SQUARE","char":"❏"},{"hex":"&#2750;","name":"UPPER RIGHT DROP-SHADOWED WHITE SQUARE","char":"❐"},{"hex":"&#2751;","name":"LOWER RIGHT SHADOWED WHITE SQUARE","char":"❑"},{"hex":"&#2752;","name":"UPPER RIGHT SHADOWED WHITE SQUARE","char":"❒"},{"hex":"&#2756;","name":"BLACK DIAMOND MINUS WHITE X","char":"❖"},{"hex":"&#2758;","name":"LIGHT VERTICAL BAR","char":"❘"},{"hex":"&#2759;","name":"MEDIUM VERTICAL BAR","char":"❙"},{"hex":"&#275A;","name":"HEAVY VERTICAL BAR","char":"❚"},{"hex":"&#275B;","name":"HEAVY SINGLE TURNED COMMA QUOTATION MARK ORNAMENT","char":"❛"},{"hex":"&#275C;","name":"HEAVY SINGLE COMMA QUOTATION MARK ORNAMENT","char":"❜"},{"hex":"&#275D;","name":"HEAVY DOUBLE TURNED COMMA QUOTATION MARK ORNAMENT","char":"❝"},{"hex":"&#275E;","name":"HEAVY DOUBLE COMMA QUOTATION MARK ORNAMENT","char":"❞"},{"hex":"&#2761;","name":"CURVED STEM PARAGRAPH SIGN ORNAMENT","char":"❡"},{"hex":"&#2762;","name":"HEAVY EXCLAMATION MARK ORNAMENT","char":"❢"},{"hex":"&#2763;","name":"HEAVY HEART EXCLAMATION MARK ORNAMENT","char":"❣"},{"hex":"&#2764;","name":"HEAVY BLACK HEART","char":"❤"},{"hex":"&#2765;","name":"ROTATED HEAVY BLACK HEART BULLET","char":"❥"},{"hex":"&#2766;","name":"FLORAL HEART","char":"❦"},{"hex":"&#2767;","name":"ROTATED FLORAL HEART BULLET","char":"❧"},{"hex":"&#2768;","name":"MEDIUM LEFT PARENTHESIS ORNAMENT","char":"❨"},{"hex":"&#2769;","name":"MEDIUM RIGHT PARENTHESIS ORNAMENT","char":"❩"},{"hex":"&#276A;","name":"MEDIUM FLATTENED LEFT PARENTHESIS ORNAMENT","char":"❪"},{"hex":"&#276B;","name":"MEDIUM FLATTENED RIGHT PARENTHESIS ORNAMENT","char":"❫"},{"hex":"&#276C;","name":"MEDIUM LEFT-POINTING ANGLE BRACKET ORNAMENT","char":"❬"},{"hex":"&#276D;","name":"MEDIUM RIGHT-POINTING ANGLE BRACKET ORNAMENT","char":"❭"},{"hex":"&#276E;","name":"HEAVY LEFT-POINTING ANGLE QUOTATION MARK ORNAMENT","char":"❮"},{"hex":"&#276F;","name":"HEAVY RIGHT-POINTING ANGLE QUOTATION MARK ORNAMENT","char":"❯"},{"hex":"&#2770;","name":"HEAVY LEFT-POINTING ANGLE BRACKET ORNAMENT","char":"❰"},{"hex":"&#2771;","name":"HEAVY RIGHT-POINTING ANGLE BRACKET ORNAMENT","char":"❱"},{"hex":"&#2772;","name":"LIGHT LEFT TORTOISE SHELL BRACKET ORNAMENT","char":"❲"},{"hex":"&#2773;","name":"LIGHT RIGHT TORTOISE SHELL BRACKET ORNAMENT","char":"❳"},{"hex":"&#2774;","name":"MEDIUM LEFT CURLY BRACKET ORNAMENT","char":"❴"},{"hex":"&#2775;","name":"MEDIUM RIGHT CURLY BRACKET ORNAMENT","char":"❵"},{"hex":"&#2776;","name":"DINGBAT NEGATIVE CIRCLED DIGIT ONE","char":"❶"},{"hex":"&#2777;","name":"DINGBAT NEGATIVE CIRCLED DIGIT TWO","char":"❷"},{"hex":"&#2778;","name":"DINGBAT NEGATIVE CIRCLED DIGIT THREE","char":"❸"},{"hex":"&#2779;","name":"DINGBAT NEGATIVE CIRCLED DIGIT FOUR","char":"❹"},{"hex":"&#277A;","name":"DINGBAT NEGATIVE CIRCLED DIGIT FIVE","char":"❺"},{"hex":"&#277B;","name":"DINGBAT NEGATIVE CIRCLED DIGIT SIX","char":"❻"},{"hex":"&#277C;","name":"DINGBAT NEGATIVE CIRCLED DIGIT SEVEN","char":"❼"},{"hex":"&#277D;","name":"DINGBAT NEGATIVE CIRCLED DIGIT EIGHT","char":"❽"},{"hex":"&#277E;","name":"DINGBAT NEGATIVE CIRCLED DIGIT NINE","char":"❾"},{"hex":"&#277F;","name":"DINGBAT NEGATIVE CIRCLED NUMBER TEN","char":"❿"},{"hex":"&#2780;","name":"DINGBAT CIRCLED SANS-SERIF DIGIT ONE","char":"➀"},{"hex":"&#2781;","name":"DINGBAT CIRCLED SANS-SERIF DIGIT TWO","char":"➁"},{"hex":"&#2782;","name":"DINGBAT CIRCLED SANS-SERIF DIGIT THREE","char":"➂"},{"hex":"&#2783;","name":"DINGBAT CIRCLED SANS-SERIF DIGIT FOUR","char":"➃"},{"hex":"&#2784;","name":"DINGBAT CIRCLED SANS-SERIF DIGIT FIVE","char":"➄"},{"hex":"&#2785;","name":"DINGBAT CIRCLED SANS-SERIF DIGIT SIX","char":"➅"},{"hex":"&#2786;","name":"DINGBAT CIRCLED SANS-SERIF DIGIT SEVEN","char":"➆"},{"hex":"&#2787;","name":"DINGBAT CIRCLED SANS-SERIF DIGIT EIGHT","char":"➇"},{"hex":"&#2788;","name":"DINGBAT CIRCLED SANS-SERIF DIGIT NINE","char":"➈"},{"hex":"&#2789;","name":"DINGBAT CIRCLED SANS-SERIF NUMBER TEN","char":"➉"},{"hex":"&#278A;","name":"DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT ONE","char":"➊"},{"hex":"&#278B;","name":"DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT TWO","char":"➋"},{"hex":"&#278C;","name":"DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT THREE","char":"➌"},{"hex":"&#278D;","name":"DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT FOUR","char":"➍"},{"hex":"&#278E;","name":"DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT FIVE","char":"➎"},{"hex":"&#278F;","name":"DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT SIX","char":"➏"},{"hex":"&#2790;","name":"DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT SEVEN","char":"➐"},{"hex":"&#2791;","name":"DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT EIGHT","char":"➑"},{"hex":"&#2792;","name":"DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT NINE","char":"➒"},{"hex":"&#2793;","name":"DINGBAT NEGATIVE CIRCLED SANS-SERIF NUMBER TEN","char":"➓"}],"Math":[{"hex":"&#2200;","entity":"&forall;","name":"FOR ALL","char":"∀"},{"hex":"&#2201;","name":"COMPLEMENT","char":"∁"},{"hex":"&#2202;","entity":"&part;","name":"PARTIAL DIFFERENTIAL","char":"∂"},{"hex":"&#2203;","entity":"&exist;","name":"THERE EXISTS","char":"∃"},{"hex":"&#2204;","name":"THERE DOES NOT EXIST","char":"∄"},{"hex":"&#2205;","entity":"&empty;","name":"EMPTY SET","char":"∅"},{"hex":"&#2206;","name":"INCREMENT","char":"∆"},{"hex":"&#2207;","entity":"&nabla;","name":"NABLA","char":"∇"},{"hex":"&#2208;","entity":"&isin;","name":"ELEMENT OF","char":"∈"},{"hex":"&#2209;","entity":"&notin;","name":"NOT AN ELEMENT OF","char":"∉"},{"hex":"&#220A;","name":"SMALL ELEMENT OF","char":"∊"},{"hex":"&#220B;","entity":"&ni;","name":"CONTAINS AS MEMBER","char":"∋"},{"hex":"&#220C;","name":"DOES NOT CONTAIN AS MEMBER","char":"∌"},{"hex":"&#220D;","name":"SMALL CONTAINS AS MEMBER","char":"∍"},{"hex":"&#220E;","name":"END OF PROOF","char":"∎"},{"hex":"&#220F;","entity":"&prod;","name":"N-ARY PRODUCT","char":"∏"},{"hex":"&#2210;","name":"N-ARY COPRODUCT","char":"∐"},{"hex":"&#2211;","entity":"&sum;","name":"N-ARY SUMMATION","char":"∑"},{"hex":"&#2212;","entity":"&minus;","name":"MINUS SIGN","char":"−"},{"hex":"&#2213;","name":"MINUS-OR-PLUS SIGN","char":"∓"},{"hex":"&#2214;","name":"DOT PLUS","char":"∔"},{"hex":"&#2215;","name":"DIVISION SLASH","char":"∕"},{"hex":"&#2216;","name":"SET MINUS","char":"∖"},{"hex":"&#2217;","entity":"&lowast;","name":"ASTERISK OPERATOR","char":"∗"},{"hex":"&#2218;","name":"RING OPERATOR","char":"∘"},{"hex":"&#2219;","name":"BULLET OPERATOR","char":"∙"},{"hex":"&#221A;","entity":"&radic;","name":"SQUARE ROOT","char":"√"},{"hex":"&#221B;","name":"CUBE ROOT","char":"∛"},{"hex":"&#221C;","name":"FOURTH ROOT","char":"∜"},{"hex":"&#221D;","entity":"&prop;","name":"PROPORTIONAL TO","char":"∝"},{"hex":"&#221E;","entity":"&infin;","name":"INFINITY","char":"∞"},{"hex":"&#221F;","name":"RIGHT ANGLE","char":"∟"},{"hex":"&#2220;","entity":"&ang;","name":"ANGLE","char":"∠"},{"hex":"&#2221;","name":"MEASURED ANGLE","char":"∡"},{"hex":"&#2222;","name":"SPHERICAL ANGLE","char":"∢"},{"hex":"&#2223;","name":"DIVIDES","char":"∣"},{"hex":"&#2224;","name":"DOES NOT DIVIDE","char":"∤"},{"hex":"&#2225;","name":"PARALLEL TO","char":"∥"},{"hex":"&#2226;","name":"NOT PARALLEL TO","char":"∦"},{"hex":"&#2227;","entity":"&and;","name":"LOGICAL AND","char":"∧"},{"hex":"&#2228;","entity":"&or;","name":"LOGICAL OR","char":"∨"},{"hex":"&#2229;","entity":"&cap;","name":"INTERSECTION","char":"∩"},{"hex":"&#222A;","entity":"&cup;","name":"UNION","char":"∪"},{"hex":"&#222B;","entity":"&int;","name":"INTEGRAL","char":"∫"},{"hex":"&#222C;","name":"DOUBLE INTEGRAL","char":"∬"},{"hex":"&#222D;","name":"TRIPLE INTEGRAL","char":"∭"},{"hex":"&#222E;","name":"CONTOUR INTEGRAL","char":"∮"},{"hex":"&#222F;","name":"SURFACE INTEGRAL","char":"∯"},{"hex":"&#2230;","name":"VOLUME INTEGRAL","char":"∰"},{"hex":"&#2231;","name":"CLOCKWISE INTEGRAL","char":"∱"},{"hex":"&#2232;","name":"CLOCKWISE CONTOUR INTEGRAL","char":"∲"},{"hex":"&#2233;","name":"ANTICLOCKWISE CONTOUR INTEGRAL","char":"∳"},{"hex":"&#2234;","entity":"&there4;","name":"THEREFORE","char":"∴"},{"hex":"&#2235;","name":"BECAUSE","char":"∵"},{"hex":"&#2236;","name":"RATIO","char":"∶"},{"hex":"&#2237;","name":"PROPORTION","char":"∷"},{"hex":"&#2238;","name":"DOT MINUS","char":"∸"},{"hex":"&#2239;","name":"EXCESS","char":"∹"},{"hex":"&#223A;","name":"GEOMETRIC PROPORTION","char":"∺"},{"hex":"&#223B;","name":"HOMOTHETIC","char":"∻"},{"hex":"&#223C;","entity":"&sim;","name":"TILDE OPERATOR","char":"∼"},{"hex":"&#223D;","name":"REVERSED TILDE","char":"∽"},{"hex":"&#223E;","name":"INVERTED LAZY S","char":"∾"},{"hex":"&#223F;","name":"SINE WAVE","char":"∿"},{"hex":"&#2240;","name":"WREATH PRODUCT","char":"≀"},{"hex":"&#2241;","name":"NOT TILDE","char":"≁"},{"hex":"&#2242;","name":"MINUS TILDE","char":"≂"},{"hex":"&#2243;","name":"ASYMPTOTICALLY EQUAL TO","char":"≃"},{"hex":"&#2244;","name":"NOT ASYMPTOTICALLY EQUAL TO","char":"≄"},{"hex":"&#2245;","entity":"&cong;","name":"APPROXIMATELY EQUAL TO","char":"≅"},{"hex":"&#2246;","name":"APPROXIMATELY BUT NOT ACTUALLY EQUAL TO","char":"≆"},{"hex":"&#2247;","name":"NEITHER APPROXIMATELY NOR ACTUALLY EQUAL TO","char":"≇"},{"hex":"&#2248;","entity":"&asymp;","name":"ALMOST EQUAL TO","char":"≈"},{"hex":"&#2249;","name":"NOT ALMOST EQUAL TO","char":"≉"},{"hex":"&#224A;","name":"ALMOST EQUAL OR EQUAL TO","char":"≊"},{"hex":"&#224B;","name":"TRIPLE TILDE","char":"≋"},{"hex":"&#224C;","name":"ALL EQUAL TO","char":"≌"},{"hex":"&#224D;","name":"EQUIVALENT TO","char":"≍"},{"hex":"&#224E;","name":"GEOMETRICALLY EQUIVALENT TO","char":"≎"},{"hex":"&#224F;","name":"DIFFERENCE BETWEEN","char":"≏"},{"hex":"&#2250;","name":"APPROACHES THE LIMIT","char":"≐"},{"hex":"&#2251;","name":"GEOMETRICALLY EQUAL TO","char":"≑"},{"hex":"&#2252;","name":"APPROXIMATELY EQUAL TO OR THE IMAGE OF","char":"≒"},{"hex":"&#2253;","name":"IMAGE OF OR APPROXIMATELY EQUAL TO","char":"≓"},{"hex":"&#2254;","name":"COLON EQUALS","char":"≔"},{"hex":"&#2255;","name":"EQUALS COLON","char":"≕"},{"hex":"&#2256;","name":"RING IN EQUAL TO","char":"≖"},{"hex":"&#2257;","name":"RING EQUAL TO","char":"≗"},{"hex":"&#2258;","name":"CORRESPONDS TO","char":"≘"},{"hex":"&#2259;","name":"ESTIMATES","char":"≙"},{"hex":"&#225A;","name":"EQUIANGULAR TO","char":"≚"},{"hex":"&#225B;","name":"STAR EQUALS","char":"≛"},{"hex":"&#225C;","name":"DELTA EQUAL TO","char":"≜"},{"hex":"&#225D;","name":"EQUAL TO BY DEFINITION","char":"≝"},{"hex":"&#225E;","name":"MEASURED BY","char":"≞"},{"hex":"&#225F;","name":"QUESTIONED EQUAL TO","char":"≟"},{"hex":"&#2260;","entity":"&ne;","name":"NOT EQUAL TO","char":"≠"},{"hex":"&#2261;","entity":"&equiv;","name":"IDENTICAL TO","char":"≡"},{"hex":"&#2262;","name":"NOT IDENTICAL TO","char":"≢"},{"hex":"&#2263;","name":"STRICTLY EQUIVALENT TO","char":"≣"},{"hex":"&#2264;","entity":"&le;","name":"LESS-THAN OR EQUAL TO","char":"≤"},{"hex":"&#2265;","entity":"&ge;","name":"GREATER-THAN OR EQUAL TO","char":"≥"},{"hex":"&#2266;","name":"LESS-THAN OVER EQUAL TO","char":"≦"},{"hex":"&#2267;","name":"GREATER-THAN OVER EQUAL TO","char":"≧"},{"hex":"&#2268;","name":"LESS-THAN BUT NOT EQUAL TO","char":"≨"},{"hex":"&#2269;","name":"GREATER-THAN BUT NOT EQUAL TO","char":"≩"},{"hex":"&#226A;","name":"MUCH LESS-THAN","char":"≪"},{"hex":"&#226B;","name":"MUCH GREATER-THAN","char":"≫"},{"hex":"&#226C;","name":"BETWEEN","char":"≬"},{"hex":"&#226D;","name":"NOT EQUIVALENT TO","char":"≭"},{"hex":"&#226E;","name":"NOT LESS-THAN","char":"≮"},{"hex":"&#226F;","name":"NOT GREATER-THAN","char":"≯"},{"hex":"&#2270;","name":"NEITHER LESS-THAN NOR EQUAL TO","char":"≰"},{"hex":"&#2271;","name":"NEITHER GREATER-THAN NOR EQUAL TO","char":"≱"},{"hex":"&#2272;","name":"LESS-THAN OR EQUIVALENT TO","char":"≲"},{"hex":"&#2273;","name":"GREATER-THAN OR EQUIVALENT TO","char":"≳"},{"hex":"&#2274;","name":"NEITHER LESS-THAN NOR EQUIVALENT TO","char":"≴"},{"hex":"&#2275;","name":"NEITHER GREATER-THAN NOR EQUIVALENT TO","char":"≵"},{"hex":"&#2276;","name":"LESS-THAN OR GREATER-THAN","char":"≶"},{"hex":"&#2277;","name":"GREATER-THAN OR LESS-THAN","char":"≷"},{"hex":"&#2278;","name":"NEITHER LESS-THAN NOR GREATER-THAN","char":"≸"},{"hex":"&#2279;","name":"NEITHER GREATER-THAN NOR LESS-THAN","char":"≹"},{"hex":"&#227A;","name":"PRECEDES","char":"≺"},{"hex":"&#227B;","name":"SUCCEEDS","char":"≻"},{"hex":"&#227C;","name":"PRECEDES OR EQUAL TO","char":"≼"},{"hex":"&#227D;","name":"SUCCEEDS OR EQUAL TO","char":"≽"},{"hex":"&#227E;","name":"PRECEDES OR EQUIVALENT TO","char":"≾"},{"hex":"&#227F;","name":"SUCCEEDS OR EQUIVALENT TO","char":"≿"},{"hex":"&#2280;","name":"DOES NOT PRECEDE","char":"⊀"},{"hex":"&#2281;","name":"DOES NOT SUCCEED","char":"⊁"},{"hex":"&#2282;","entity":"&sub;","name":"SUBSET OF","char":"⊂"},{"hex":"&#2283;","entity":"&sup;","name":"SUPERSET OF","char":"⊃"},{"hex":"&#2284;","entity":"&nsub;","name":"NOT A SUBSET OF","char":"⊄"},{"hex":"&#2285;","name":"NOT A SUPERSET OF","char":"⊅"},{"hex":"&#2286;","entity":"&sube;","name":"SUBSET OF OR EQUAL TO","char":"⊆"},{"hex":"&#2287;","entity":"&supe;","name":"SUPERSET OF OR EQUAL TO","char":"⊇"},{"hex":"&#2288;","name":"NEITHER A SUBSET OF NOR EQUAL TO","char":"⊈"},{"hex":"&#2289;","name":"NEITHER A SUPERSET OF NOR EQUAL TO","char":"⊉"},{"hex":"&#228A;","name":"SUBSET OF WITH NOT EQUAL TO","char":"⊊"},{"hex":"&#228B;","name":"SUPERSET OF WITH NOT EQUAL TO","char":"⊋"},{"hex":"&#228C;","name":"MULTISET","char":"⊌"},{"hex":"&#228D;","name":"MULTISET MULTIPLICATION","char":"⊍"},{"hex":"&#228E;","name":"MULTISET UNION","char":"⊎"},{"hex":"&#228F;","name":"SQUARE IMAGE OF","char":"⊏"},{"hex":"&#2290;","name":"SQUARE ORIGINAL OF","char":"⊐"},{"hex":"&#2291;","name":"SQUARE IMAGE OF OR EQUAL TO","char":"⊑"},{"hex":"&#2292;","name":"SQUARE ORIGINAL OF OR EQUAL TO","char":"⊒"},{"hex":"&#2293;","name":"SQUARE CAP","char":"⊓"},{"hex":"&#2294;","name":"SQUARE CUP","char":"⊔"},{"hex":"&#2295;","entity":"&oplus;","name":"CIRCLED PLUS","char":"⊕"},{"hex":"&#2296;","name":"CIRCLED MINUS","char":"⊖"},{"hex":"&#2297;","entity":"&otimes;","name":"CIRCLED TIMES","char":"⊗"},{"hex":"&#2298;","name":"CIRCLED DIVISION SLASH","char":"⊘"},{"hex":"&#2299;","name":"CIRCLED DOT OPERATOR","char":"⊙"},{"hex":"&#229A;","name":"CIRCLED RING OPERATOR","char":"⊚"},{"hex":"&#229B;","name":"CIRCLED ASTERISK OPERATOR","char":"⊛"},{"hex":"&#229C;","name":"CIRCLED EQUALS","char":"⊜"},{"hex":"&#229D;","name":"CIRCLED DASH","char":"⊝"},{"hex":"&#229E;","name":"SQUARED PLUS","char":"⊞"},{"hex":"&#229F;","name":"SQUARED MINUS","char":"⊟"},{"hex":"&#22A0;","name":"SQUARED TIMES","char":"⊠"},{"hex":"&#22A1;","name":"SQUARED DOT OPERATOR","char":"⊡"},{"hex":"&#22A2;","name":"RIGHT TACK","char":"⊢"},{"hex":"&#22A3;","name":"LEFT TACK","char":"⊣"},{"hex":"&#22A4;","name":"DOWN TACK","char":"⊤"},{"hex":"&#22A5;","entity":"&perp;","name":"UP TACK","char":"⊥"},{"hex":"&#22A6;","name":"ASSERTION","char":"⊦"},{"hex":"&#22A7;","name":"MODELS","char":"⊧"},{"hex":"&#22A8;","name":"TRUE","char":"⊨"},{"hex":"&#22A9;","name":"FORCES","char":"⊩"},{"hex":"&#22AA;","name":"TRIPLE VERTICAL BAR RIGHT TURNSTILE","char":"⊪"},{"hex":"&#22AB;","name":"DOUBLE VERTICAL BAR DOUBLE RIGHT TURNSTILE","char":"⊫"},{"hex":"&#22AC;","name":"DOES NOT PROVE","char":"⊬"},{"hex":"&#22AD;","name":"NOT TRUE","char":"⊭"},{"hex":"&#22AE;","name":"DOES NOT FORCE","char":"⊮"},{"hex":"&#22AF;","name":"NEGATED DOUBLE VERTICAL BAR DOUBLE RIGHT TURNSTILE","char":"⊯"},{"hex":"&#22B0;","name":"PRECEDES UNDER RELATION","char":"⊰"},{"hex":"&#22B1;","name":"SUCCEEDS UNDER RELATION","char":"⊱"},{"hex":"&#22B2;","name":"NORMAL SUBGROUP OF","char":"⊲"},{"hex":"&#22B3;","name":"CONTAINS AS NORMAL SUBGROUP","char":"⊳"},{"hex":"&#22B4;","name":"NORMAL SUBGROUP OF OR EQUAL TO","char":"⊴"},{"hex":"&#22B5;","name":"CONTAINS AS NORMAL SUBGROUP OR EQUAL TO","char":"⊵"},{"hex":"&#22B6;","name":"ORIGINAL OF","char":"⊶"},{"hex":"&#22B7;","name":"IMAGE OF","char":"⊷"},{"hex":"&#22B8;","name":"MULTIMAP","char":"⊸"},{"hex":"&#22B9;","name":"HERMITIAN CONJUGATE MATRIX","char":"⊹"},{"hex":"&#22BA;","name":"INTERCALATE","char":"⊺"},{"hex":"&#22BB;","name":"XOR","char":"⊻"},{"hex":"&#22BC;","name":"NAND","char":"⊼"},{"hex":"&#22BD;","name":"NOR","char":"⊽"},{"hex":"&#22BE;","name":"RIGHT ANGLE WITH ARC","char":"⊾"},{"hex":"&#22BF;","name":"RIGHT TRIANGLE","char":"⊿"},{"hex":"&#22C0;","name":"N-ARY LOGICAL AND","char":"⋀"},{"hex":"&#22C1;","name":"N-ARY LOGICAL OR","char":"⋁"},{"hex":"&#22C2;","name":"N-ARY INTERSECTION","char":"⋂"},{"hex":"&#22C3;","name":"N-ARY UNION","char":"⋃"},{"hex":"&#22C4;","name":"DIAMOND OPERATOR","char":"⋄"},{"hex":"&#22C5;","entity":"&sdot;","name":"DOT OPERATOR","char":"⋅"},{"hex":"&#22C6;","name":"STAR OPERATOR","char":"⋆"},{"hex":"&#22C7;","name":"DIVISION TIMES","char":"⋇"},{"hex":"&#22C8;","name":"BOWTIE","char":"⋈"},{"hex":"&#22C9;","name":"LEFT NORMAL FACTOR SEMIDIRECT PRODUCT","char":"⋉"},{"hex":"&#22CA;","name":"RIGHT NORMAL FACTOR SEMIDIRECT PRODUCT","char":"⋊"},{"hex":"&#22CB;","name":"LEFT SEMIDIRECT PRODUCT","char":"⋋"},{"hex":"&#22CC;","name":"RIGHT SEMIDIRECT PRODUCT","char":"⋌"},{"hex":"&#22CD;","name":"REVERSED TILDE EQUALS","char":"⋍"},{"hex":"&#22CE;","name":"CURLY LOGICAL OR","char":"⋎"},{"hex":"&#22CF;","name":"CURLY LOGICAL AND","char":"⋏"},{"hex":"&#22D0;","name":"DOUBLE SUBSET","char":"⋐"},{"hex":"&#22D1;","name":"DOUBLE SUPERSET","char":"⋑"},{"hex":"&#22D2;","name":"DOUBLE INTERSECTION","char":"⋒"},{"hex":"&#22D3;","name":"DOUBLE UNION","char":"⋓"},{"hex":"&#22D4;","name":"PITCHFORK","char":"⋔"},{"hex":"&#22D5;","name":"EQUAL AND PARALLEL TO","char":"⋕"},{"hex":"&#22D6;","name":"LESS-THAN WITH DOT","char":"⋖"},{"hex":"&#22D7;","name":"GREATER-THAN WITH DOT","char":"⋗"},{"hex":"&#22D8;","name":"VERY MUCH LESS-THAN","char":"⋘"},{"hex":"&#22D9;","name":"VERY MUCH GREATER-THAN","char":"⋙"},{"hex":"&#22DA;","name":"LESS-THAN EQUAL TO OR GREATER-THAN","char":"⋚"},{"hex":"&#22DB;","name":"GREATER-THAN EQUAL TO OR LESS-THAN","char":"⋛"},{"hex":"&#22DC;","name":"EQUAL TO OR LESS-THAN","char":"⋜"},{"hex":"&#22DD;","name":"EQUAL TO OR GREATER-THAN","char":"⋝"},{"hex":"&#22DE;","name":"EQUAL TO OR PRECEDES","char":"⋞"},{"hex":"&#22DF;","name":"EQUAL TO OR SUCCEEDS","char":"⋟"},{"hex":"&#22E0;","name":"DOES NOT PRECEDE OR EQUAL","char":"⋠"},{"hex":"&#22E1;","name":"DOES NOT SUCCEED OR EQUAL","char":"⋡"},{"hex":"&#22E2;","name":"NOT SQUARE IMAGE OF OR EQUAL TO","char":"⋢"},{"hex":"&#22E3;","name":"NOT SQUARE ORIGINAL OF OR EQUAL TO","char":"⋣"},{"hex":"&#22E4;","name":"SQUARE IMAGE OF OR NOT EQUAL TO","char":"⋤"},{"hex":"&#22E5;","name":"SQUARE ORIGINAL OF OR NOT EQUAL TO","char":"⋥"},{"hex":"&#22E6;","name":"LESS-THAN BUT NOT EQUIVALENT TO","char":"⋦"},{"hex":"&#22E7;","name":"GREATER-THAN BUT NOT EQUIVALENT TO","char":"⋧"},{"hex":"&#22E8;","name":"PRECEDES BUT NOT EQUIVALENT TO","char":"⋨"},{"hex":"&#22E9;","name":"SUCCEEDS BUT NOT EQUIVALENT TO","char":"⋩"},{"hex":"&#22EA;","name":"NOT NORMAL SUBGROUP OF","char":"⋪"},{"hex":"&#22EB;","name":"DOES NOT CONTAIN AS NORMAL SUBGROUP","char":"⋫"},{"hex":"&#22EC;","name":"NOT NORMAL SUBGROUP OF OR EQUAL TO","char":"⋬"},{"hex":"&#22ED;","name":"DOES NOT CONTAIN AS NORMAL SUBGROUP OR EQUAL","char":"⋭"},{"hex":"&#22EE;","name":"VERTICAL ELLIPSIS","char":"⋮"},{"hex":"&#22EF;","name":"MIDLINE HORIZONTAL ELLIPSIS","char":"⋯"},{"hex":"&#22F0;","name":"UP RIGHT DIAGONAL ELLIPSIS","char":"⋰"},{"hex":"&#22F1;","name":"DOWN RIGHT DIAGONAL ELLIPSIS","char":"⋱"},{"hex":"&#22F2;","name":"ELEMENT OF WITH LONG HORIZONTAL STROKE","char":"⋲"},{"hex":"&#22F3;","name":"ELEMENT OF WITH VERTICAL BAR AT END OF HORIZONTAL STROKE","char":"⋳"},{"hex":"&#22F4;","name":"SMALL ELEMENT OF WITH VERTICAL BAR AT END OF HORIZONTAL STROKE","char":"⋴"},{"hex":"&#22F5;","name":"ELEMENT OF WITH DOT ABOVE","char":"⋵"},{"hex":"&#22F6;","name":"ELEMENT OF WITH OVERBAR","char":"⋶"},{"hex":"&#22F7;","name":"SMALL ELEMENT OF WITH OVERBAR","char":"⋷"},{"hex":"&#22F8;","name":"ELEMENT OF WITH UNDERBAR","char":"⋸"},{"hex":"&#22F9;","name":"ELEMENT OF WITH TWO HORIZONTAL STROKES","char":"⋹"},{"hex":"&#22FA;","name":"CONTAINS WITH LONG HORIZONTAL STROKE","char":"⋺"},{"hex":"&#22FB;","name":"CONTAINS WITH VERTICAL BAR AT END OF HORIZONTAL STROKE","char":"⋻"},{"hex":"&#22FC;","name":"SMALL CONTAINS WITH VERTICAL BAR AT END OF HORIZONTAL STROKE","char":"⋼"},{"hex":"&#22FD;","name":"CONTAINS WITH OVERBAR","char":"⋽"},{"hex":"&#22FE;","name":"SMALL CONTAINS WITH OVERBAR","char":"⋾"},{"hex":"&#22FF;","name":"Z NOTATION BAG MEMBERSHIP","char":"⋿"},{"hex":"&#2153;","name":"VULGAR FRACTION ONE THIRD","char":"⅓"},{"hex":"&#2154;","name":"VULGAR FRACTION TWO THIRDS","char":"⅔"},{"hex":"&#2155;","name":"VULGAR FRACTION ONE FIFTH","char":"⅕"},{"hex":"&#2156;","name":"VULGAR FRACTION TWO FIFTHS","char":"⅖"},{"hex":"&#2157;","name":"VULGAR FRACTION THREE FIFTHS","char":"⅗"},{"hex":"&#2158;","name":"VULGAR FRACTION FOUR FIFTHS","char":"⅘"},{"hex":"&#2159;","name":"VULGAR FRACTION ONE SIXTH","char":"⅙"},{"hex":"&#215A;","name":"VULGAR FRACTION FIVE SIXTHS","char":"⅚"},{"hex":"&#215B;","name":"VULGAR FRACTION ONE EIGHTH (present in WGL4)","char":"⅛"},{"hex":"&#215C;","name":"VULGAR FRACTION THREE EIGHTHS (present in WGL4)","char":"⅜"},{"hex":"&#215D;","name":"VULGAR FRACTION FIVE EIGHTHS (present in WGL4)","char":"⅝"},{"hex":"&#215E;","name":"VULGAR FRACTION SEVEN EIGHTHS (present in WGL4)","char":"⅞"},{"hex":"&#215F;","name":"FRACTION NUMERATOR ONE","char":"⅟"},{"hex":"&#2160;","name":"ROMAN NUMERAL ONE","char":"Ⅰ"},{"hex":"&#2161;","name":"ROMAN NUMERAL TWO","char":"Ⅱ"},{"hex":"&#2162;","name":"ROMAN NUMERAL THREE","char":"Ⅲ"},{"hex":"&#2163;","name":"ROMAN NUMERAL FOUR","char":"Ⅳ"},{"hex":"&#2164;","name":"ROMAN NUMERAL FIVE","char":"Ⅴ"},{"hex":"&#2165;","name":"ROMAN NUMERAL SIX","char":"Ⅵ"},{"hex":"&#2166;","name":"ROMAN NUMERAL SEVEN","char":"Ⅶ"},{"hex":"&#2167;","name":"ROMAN NUMERAL EIGHT","char":"Ⅷ"},{"hex":"&#2168;","name":"ROMAN NUMERAL NINE","char":"Ⅸ"},{"hex":"&#2169;","name":"ROMAN NUMERAL TEN","char":"Ⅹ"},{"hex":"&#216A;","name":"ROMAN NUMERAL ELEVEN","char":"Ⅺ"},{"hex":"&#216B;","name":"ROMAN NUMERAL TWELVE","char":"Ⅻ"},{"hex":"&#216C;","name":"ROMAN NUMERAL FIFTY","char":"Ⅼ"},{"hex":"&#216D;","name":"ROMAN NUMERAL ONE HUNDRED","char":"Ⅽ"},{"hex":"&#216E;","name":"ROMAN NUMERAL FIVE HUNDRED","char":"Ⅾ"},{"hex":"&#216F;","name":"ROMAN NUMERAL ONE THOUSAND","char":"Ⅿ"},{"hex":"&#2170;","name":"SMALL ROMAN NUMERAL ONE","char":"ⅰ"},{"hex":"&#2171;","name":"SMALL ROMAN NUMERAL TWO","char":"ⅱ"},{"hex":"&#2172;","name":"SMALL ROMAN NUMERAL THREE","char":"ⅲ"},{"hex":"&#2173;","name":"SMALL ROMAN NUMERAL FOUR","char":"ⅳ"},{"hex":"&#2174;","name":"SMALL ROMAN NUMERAL FIVE","char":"ⅴ"},{"hex":"&#2175;","name":"SMALL ROMAN NUMERAL SIX","char":"ⅵ"},{"hex":"&#2176;","name":"SMALL ROMAN NUMERAL SEVEN","char":"ⅶ"},{"hex":"&#2177;","name":"SMALL ROMAN NUMERAL EIGHT","char":"ⅷ"},{"hex":"&#2178;","name":"SMALL ROMAN NUMERAL NINE","char":"ⅸ"},{"hex":"&#2179;","name":"SMALL ROMAN NUMERAL TEN","char":"ⅹ"},{"hex":"&#217A;","name":"SMALL ROMAN NUMERAL ELEVEN","char":"ⅺ"},{"hex":"&#217B;","name":"SMALL ROMAN NUMERAL TWELVE","char":"ⅻ"},{"hex":"&#217C;","name":"SMALL ROMAN NUMERAL FIFTY","char":"ⅼ"},{"hex":"&#217D;","name":"SMALL ROMAN NUMERAL ONE HUNDRED","char":"ⅽ"},{"hex":"&#217E;","name":"SMALL ROMAN NUMERAL FIVE HUNDRED","char":"ⅾ"},{"hex":"&#217F;","name":"SMALL ROMAN NUMERAL ONE THOUSAND","char":"ⅿ"},{"hex":"&#2180;","name":"ROMAN NUMERAL ONE THOUSAND C D","char":"ↀ"},{"hex":"&#2181;","name":"ROMAN NUMERAL FIVE THOUSAND","char":"ↁ"},{"hex":"&#2182;","name":"ROMAN NUMERAL TEN THOUSAND","char":"ↂ"},{"hex":"&#2183;","name":"ROMAN NUMERAL REVERSED ONE HUNDRED","char":"Ↄ"},{"hex":"&#2184;","name":"LATIN SMALL LETTER REVERSED C","char":"ↄ"},{"hex":"&#2A00;","name":"N-ARY CIRCLED DOT OPERATOR","char":"⨀"},{"hex":"&#2A01;","name":"N-ARY CIRCLED PLUS OPERATOR","char":"⨁"},{"hex":"&#2A02;","name":"N-ARY CIRCLED TIMES OPERATOR","char":"⨂"},{"hex":"&#2A0C;","name":"QUADRUPLE INTEGRAL OPERATOR","char":"⨌"},{"hex":"&#2A0D;","name":"FINITE PART INTEGRAL","char":"⨍"},{"hex":"&#2A0E;","name":"INTEGRAL WITH DOUBLE STROKE","char":"⨎"},{"hex":"&#2A0F;","name":"INTEGRAL AVERAGE WITH SLASH","char":"⨏"},{"hex":"&#2A10;","name":"CIRCULATION FUNCTION","char":"⨐"},{"hex":"&#2A11;","name":"ANTICLOCKWISE INTEGRATION","char":"⨑"},{"hex":"&#2A12;","name":"LINE INTEGRATION WITH RECTANGULAR PATH AROUND POLE","char":"⨒"},{"hex":"&#2A13;","name":"LINE INTEGRATION WITH SEMICIRCULAR PATH AROUND POLE","char":"⨓"},{"hex":"&#2A14;","name":"LINE INTEGRATION NOT INCLUDING THE POLE","char":"⨔"},{"hex":"&#2A15;","name":"INTEGRAL AROUND A POINT OPERATOR","char":"⨕"},{"hex":"&#2A16;","name":"QUATERNION INTEGRAL OPERATOR","char":"⨖"},{"hex":"&#2A17;","name":"INTEGRAL WITH LEFTWARDS ARROW WITH HOOK","char":"⨗"},{"hex":"&#2A18;","name":"INTEGRAL WITH TIMES SIGN","char":"⨘"},{"hex":"&#2A19;","name":"INTEGRAL WITH INTERSECTION","char":"⨙"},{"hex":"&#2A1A;","name":"INTEGRAL WITH UNION","char":"⨚"},{"hex":"&#2A1B;","name":"INTEGRAL WITH OVERBAR","char":"⨛"},{"hex":"&#2A1C;","name":"INTEGRAL WITH UNDERBAR","char":"⨜"},{"hex":"&#2A2F;","name":"VECTOR OR CROSS PRODUCT","char":"⨯"},{"hex":"&#2A7D;","name":"LESS-THAN OR SLANTED EQUAL TO","char":"⩽"},{"hex":"&#2A7E;","name":"GREATER-THAN OR SLANTED EQUAL TO","char":"⩾"},{"hex":"&#2A7F;","name":"LESS-THAN OR SLANTED EQUAL TO WITH DOT INSIDE","char":"⩿"},{"hex":"&#2A80;","name":"GREATER-THAN OR SLANTED EQUAL TO WITH DOT INSIDE","char":"⪀"},{"hex":"&#2A81;","name":"LESS-THAN OR SLANTED EQUAL TO WITH DOT ABOVE","char":"⪁"},{"hex":"&#2A82;","name":"GREATER-THAN OR SLANTED EQUAL TO WITH DOT ABOVE","char":"⪂"},{"hex":"&#2A83;","name":"LESS-THAN OR SLANTED EQUAL TO WITH DOT ABOVE RIGHT","char":"⪃"},{"hex":"&#2A84;","name":"GREATER-THAN OR SLANTED EQUAL TO WITH DOT ABOVE LEFT","char":"⪄"},{"hex":"&#2A85;","name":"LESS-THAN OR APPROXIMATE","char":"⪅"},{"hex":"&#2A86;","name":"GREATER-THAN OR APPROXIMATE","char":"⪆"},{"hex":"&#2A87;","name":"LESS-THAN AND SINGLE-LINE NOT EQUAL TO","char":"⪇"},{"hex":"&#2A88;","name":"GREATER-THAN AND SINGLE-LINE NOT EQUAL TO","char":"⪈"},{"hex":"&#2A89;","name":"LESS-THAN AND NOT APPROXIMATE","char":"⪉"},{"hex":"&#2A8A;","name":"GREATER-THAN AND NOT APPROXIMATE","char":"⪊"},{"hex":"&#2A8B;","name":"LESS-THAN ABOVE DOUBLE-LINE EQUAL ABOVE GREATER-THAN","char":"⪋"},{"hex":"&#2A8C;","name":"GREATER-THAN ABOVE DOUBLE-LINE EQUAL ABOVE LESS-THAN","char":"⪌"},{"hex":"&#2A8D;","name":"LESS-THAN ABOVE SIMILAR OR EQUAL","char":"⪍"},{"hex":"&#2A8E;","name":"GREATER-THAN ABOVE SIMILAR OR EQUAL","char":"⪎"},{"hex":"&#2A8F;","name":"LESS-THAN ABOVE SIMILAR ABOVE GREATER-THAN","char":"⪏"},{"hex":"&#2A90;","name":"GREATER-THAN ABOVE SIMILAR ABOVE LESS-THAN","char":"⪐"},{"hex":"&#2A91;","name":"LESS-THAN ABOVE GREATER-THAN ABOVE DOUBLE-LINE EQUAL","char":"⪑"},{"hex":"&#2A92;","name":"GREATER-THAN ABOVE LESS-THAN ABOVE DOUBLE-LINE EQUAL","char":"⪒"},{"hex":"&#2A93;","name":"LESS-THAN ABOVE SLANTED EQUAL ABOVE GREATER-THAN ABOVE SLANTED EQUAL","char":"⪓"},{"hex":"&#2A94;","name":"GREATER-THAN ABOVE SLANTED EQUAL ABOVE LESS-THAN ABOVE SLANTED EQUAL","char":"⪔"},{"hex":"&#2A95;","name":"SLANTED EQUAL TO OR LESS-THAN","char":"⪕"},{"hex":"&#2A96;","name":"SLANTED EQUAL TO OR GREATER-THAN","char":"⪖"},{"hex":"&#2A97;","name":"SLANTED EQUAL TO OR LESS-THAN WITH DOT INSIDE","char":"⪗"},{"hex":"&#2A98;","name":"SLANTED EQUAL TO OR GREATER-THAN WITH DOT INSIDE","char":"⪘"},{"hex":"&#2A99;","name":"DOUBLE-LINE EQUAL TO OR LESS-THAN","char":"⪙"},{"hex":"&#2A9A;","name":"DOUBLE-LINE EQUAL TO OR GREATER-THAN","char":"⪚"},{"hex":"&#2A9B;","name":"DOUBLE-LINE SLANTED EQUAL TO OR LESS-THAN","char":"⪛"},{"hex":"&#2A9C;","name":"DOUBLE-LINE SLANTED EQUAL TO OR GREATER-THAN","char":"⪜"},{"hex":"&#2A9D;","name":"SIMILAR OR LESS-THAN","char":"⪝"},{"hex":"&#2A9E;","name":"SIMILAR OR GREATER-THAN","char":"⪞"},{"hex":"&#2A9F;","name":"SIMILAR ABOVE LESS-THAN ABOVE EQUALS SIGN","char":"⪟"},{"hex":"&#2AA0;","name":"SIMILAR ABOVE GREATER-THAN ABOVE EQUALS SIGN","char":"⪠"},{"hex":"&#2AAE;","name":"EQUALS SIGN WITH BUMPY ABOVE","char":"⪮"},{"hex":"&#2AAF;","name":"PRECEDES ABOVE SINGLE-LINE EQUALS SIGN","char":"⪯"},{"hex":"&#2AB0;","name":"SUCCEEDS ABOVE SINGLE-LINE EQUALS SIGN","char":"⪰"},{"hex":"&#2AB1;","name":"PRECEDES ABOVE SINGLE-LINE NOT EQUAL TO","char":"⪱"},{"hex":"&#2AB2;","name":"SUCCEEDS ABOVE SINGLE-LINE NOT EQUAL TO","char":"⪲"},{"hex":"&#2AB3;","name":"PRECEDES ABOVE EQUALS SIGN","char":"⪳"},{"hex":"&#2AB4;","name":"SUCCEEDS ABOVE EQUALS SIGN","char":"⪴"},{"hex":"&#2AB5;","name":"PRECEDES ABOVE NOT EQUAL TO","char":"⪵"},{"hex":"&#2AB6;","name":"SUCCEEDS ABOVE NOT EQUAL TO","char":"⪶"},{"hex":"&#2AB7;","name":"PRECEDES ABOVE ALMOST EQUAL TO","char":"⪷"},{"hex":"&#2AB8;","name":"SUCCEEDS ABOVE ALMOST EQUAL TO","char":"⪸"},{"hex":"&#2AB9;","name":"PRECEDES ABOVE NOT ALMOST EQUAL TO","char":"⪹"},{"hex":"&#2ABA;","name":"SUCCEEDS ABOVE NOT ALMOST EQUAL TO","char":"⪺"},{"hex":"&#2AF9;","name":"DOUBLE-LINE SLANTED LESS-THAN OR EQUAL TO","char":"⫹"},{"hex":"&#2AFA;","name":"DOUBLE-LINE SLANTED GREATER-THAN OR EQUAL TO","char":"⫺"},{"hex":"&#2460;","name":"CIRCLED DIGIT ONE","char":"①"},{"hex":"&#2461;","name":"CIRCLED DIGIT TWO","char":"②"},{"hex":"&#2462;","name":"CIRCLED DIGIT THREE","char":"③"},{"hex":"&#2463;","name":"CIRCLED DIGIT FOUR","char":"④"},{"hex":"&#2464;","name":"CIRCLED DIGIT FIVE","char":"⑤"},{"hex":"&#2465;","name":"CIRCLED DIGIT SIX","char":"⑥"},{"hex":"&#2466;","name":"CIRCLED DIGIT SEVEN","char":"⑦"},{"hex":"&#2467;","name":"CIRCLED DIGIT EIGHT","char":"⑧"},{"hex":"&#2468;","name":"CIRCLED DIGIT NINE","char":"⑨"},{"hex":"&#2469;","name":"CIRCLED NUMBER TEN","char":"⑩"},{"hex":"&#246A;","name":"CIRCLED NUMBER ELEVEN","char":"⑪"},{"hex":"&#246B;","name":"CIRCLED NUMBER TWELVE","char":"⑫"},{"hex":"&#246C;","name":"CIRCLED NUMBER THIRTEEN","char":"⑬"},{"hex":"&#246D;","name":"CIRCLED NUMBER FOURTEEN","char":"⑭"},{"hex":"&#246E;","name":"CIRCLED NUMBER FIFTEEN","char":"⑮"},{"hex":"&#246F;","name":"CIRCLED NUMBER SIXTEEN","char":"⑯"},{"hex":"&#2470;","name":"CIRCLED NUMBER SEVENTEEN","char":"⑰"},{"hex":"&#2471;","name":"CIRCLED NUMBER EIGHTEEN","char":"⑱"},{"hex":"&#2472;","name":"CIRCLED NUMBER NINETEEN","char":"⑲"},{"hex":"&#2473;","name":"CIRCLED NUMBER TWENTY","char":"⑳"},{"hex":"&#2474;","name":"PARENTHESIZED DIGIT ONE","char":"⑴"},{"hex":"&#2475;","name":"PARENTHESIZED DIGIT TWO","char":"⑵"},{"hex":"&#2476;","name":"PARENTHESIZED DIGIT THREE","char":"⑶"},{"hex":"&#2477;","name":"PARENTHESIZED DIGIT FOUR","char":"⑷"},{"hex":"&#2478;","name":"PARENTHESIZED DIGIT FIVE","char":"⑸"},{"hex":"&#2479;","name":"PARENTHESIZED DIGIT SIX","char":"⑹"},{"hex":"&#247A;","name":"PARENTHESIZED DIGIT SEVEN","char":"⑺"},{"hex":"&#247B;","name":"PARENTHESIZED DIGIT EIGHT","char":"⑻"},{"hex":"&#247C;","name":"PARENTHESIZED DIGIT NINE","char":"⑼"},{"hex":"&#247D;","name":"PARENTHESIZED NUMBER TEN","char":"⑽"},{"hex":"&#247E;","name":"PARENTHESIZED NUMBER ELEVEN","char":"⑾"},{"hex":"&#247F;","name":"PARENTHESIZED NUMBER TWELVE","char":"⑿"},{"hex":"&#2480;","name":"PARENTHESIZED NUMBER THIRTEEN","char":"⒀"},{"hex":"&#2481;","name":"PARENTHESIZED NUMBER FOURTEEN","char":"⒁"},{"hex":"&#2482;","name":"PARENTHESIZED NUMBER FIFTEEN","char":"⒂"},{"hex":"&#2483;","name":"PARENTHESIZED NUMBER SIXTEEN","char":"⒃"},{"hex":"&#2484;","name":"PARENTHESIZED NUMBER SEVENTEEN","char":"⒄"},{"hex":"&#2485;","name":"PARENTHESIZED NUMBER EIGHTEEN","char":"⒅"},{"hex":"&#2486;","name":"PARENTHESIZED NUMBER NINETEEN","char":"⒆"},{"hex":"&#2487;","name":"PARENTHESIZED NUMBER TWENTY","char":"⒇"},{"hex":"&#2488;","name":"DIGIT ONE FULL STOP","char":"⒈"},{"hex":"&#2489;","name":"DIGIT TWO FULL STOP","char":"⒉"},{"hex":"&#248A;","name":"DIGIT THREE FULL STOP","char":"⒊"},{"hex":"&#248B;","name":"DIGIT FOUR FULL STOP","char":"⒋"},{"hex":"&#248C;","name":"DIGIT FIVE FULL STOP","char":"⒌"},{"hex":"&#248D;","name":"DIGIT SIX FULL STOP","char":"⒍"},{"hex":"&#248E;","name":"DIGIT SEVEN FULL STOP","char":"⒎"},{"hex":"&#248F;","name":"DIGIT EIGHT FULL STOP","char":"⒏"},{"hex":"&#2490;","name":"DIGIT NINE FULL STOP","char":"⒐"},{"hex":"&#2491;","name":"NUMBER TEN FULL STOP","char":"⒑"},{"hex":"&#2492;","name":"NUMBER ELEVEN FULL STOP","char":"⒒"},{"hex":"&#2493;","name":"NUMBER TWELVE FULL STOP","char":"⒓"},{"hex":"&#2494;","name":"NUMBER THIRTEEN FULL STOP","char":"⒔"},{"hex":"&#2495;","name":"NUMBER FOURTEEN FULL STOP","char":"⒕"},{"hex":"&#2496;","name":"NUMBER FIFTEEN FULL STOP","char":"⒖"},{"hex":"&#2497;","name":"NUMBER SIXTEEN FULL STOP","char":"⒗"},{"hex":"&#2498;","name":"NUMBER SEVENTEEN FULL STOP","char":"⒘"},{"hex":"&#2499;","name":"NUMBER EIGHTEEN FULL STOP","char":"⒙"},{"hex":"&#249A;","name":"NUMBER NINETEEN FULL STOP","char":"⒚"},{"hex":"&#249B;","name":"NUMBER TWENTY FULL STOP","char":"⒛"},{"hex":"&#249C;","name":"PARENTHESIZED LATIN SMALL LETTER A","char":"⒜"},{"hex":"&#249D;","name":"PARENTHESIZED LATIN SMALL LETTER B","char":"⒝"},{"hex":"&#249E;","name":"PARENTHESIZED LATIN SMALL LETTER C","char":"⒞"},{"hex":"&#249F;","name":"PARENTHESIZED LATIN SMALL LETTER D","char":"⒟"},{"hex":"&#24A0;","name":"PARENTHESIZED LATIN SMALL LETTER E","char":"⒠"},{"hex":"&#24A1;","name":"PARENTHESIZED LATIN SMALL LETTER F","char":"⒡"},{"hex":"&#24A2;","name":"PARENTHESIZED LATIN SMALL LETTER G","char":"⒢"},{"hex":"&#24A3;","name":"PARENTHESIZED LATIN SMALL LETTER H","char":"⒣"},{"hex":"&#24A4;","name":"PARENTHESIZED LATIN SMALL LETTER I","char":"⒤"},{"hex":"&#24A5;","name":"PARENTHESIZED LATIN SMALL LETTER J","char":"⒥"},{"hex":"&#24A6;","name":"PARENTHESIZED LATIN SMALL LETTER K","char":"⒦"},{"hex":"&#24A7;","name":"PARENTHESIZED LATIN SMALL LETTER L","char":"⒧"},{"hex":"&#24A8;","name":"PARENTHESIZED LATIN SMALL LETTER M","char":"⒨"},{"hex":"&#24A9;","name":"PARENTHESIZED LATIN SMALL LETTER N","char":"⒩"},{"hex":"&#24AA;","name":"PARENTHESIZED LATIN SMALL LETTER O","char":"⒪"},{"hex":"&#24AB;","name":"PARENTHESIZED LATIN SMALL LETTER P","char":"⒫"},{"hex":"&#24AC;","name":"PARENTHESIZED LATIN SMALL LETTER Q","char":"⒬"},{"hex":"&#24AD;","name":"PARENTHESIZED LATIN SMALL LETTER R","char":"⒭"},{"hex":"&#24AE;","name":"PARENTHESIZED LATIN SMALL LETTER S","char":"⒮"},{"hex":"&#24AF;","name":"PARENTHESIZED LATIN SMALL LETTER T","char":"⒯"},{"hex":"&#24B0;","name":"PARENTHESIZED LATIN SMALL LETTER U","char":"⒰"},{"hex":"&#24B1;","name":"PARENTHESIZED LATIN SMALL LETTER V","char":"⒱"},{"hex":"&#24B2;","name":"PARENTHESIZED LATIN SMALL LETTER W","char":"⒲"},{"hex":"&#24B3;","name":"PARENTHESIZED LATIN SMALL LETTER X","char":"⒳"},{"hex":"&#24B4;","name":"PARENTHESIZED LATIN SMALL LETTER Y","char":"⒴"},{"hex":"&#24B5;","name":"PARENTHESIZED LATIN SMALL LETTER Z","char":"⒵"},{"hex":"&#24B6;","name":"CIRCLED LATIN CAPITAL LETTER A","char":"Ⓐ"},{"hex":"&#24B7;","name":"CIRCLED LATIN CAPITAL LETTER B","char":"Ⓑ"},{"hex":"&#24B8;","name":"CIRCLED LATIN CAPITAL LETTER C","char":"Ⓒ"},{"hex":"&#24B9;","name":"CIRCLED LATIN CAPITAL LETTER D","char":"Ⓓ"},{"hex":"&#24BA;","name":"CIRCLED LATIN CAPITAL LETTER E","char":"Ⓔ"},{"hex":"&#24BB;","name":"CIRCLED LATIN CAPITAL LETTER F","char":"Ⓕ"},{"hex":"&#24BC;","name":"CIRCLED LATIN CAPITAL LETTER G","char":"Ⓖ"},{"hex":"&#24BD;","name":"CIRCLED LATIN CAPITAL LETTER H","char":"Ⓗ"},{"hex":"&#24BE;","name":"CIRCLED LATIN CAPITAL LETTER I","char":"Ⓘ"},{"hex":"&#24BF;","name":"CIRCLED LATIN CAPITAL LETTER J","char":"Ⓙ"},{"hex":"&#24C0;","name":"CIRCLED LATIN CAPITAL LETTER K","char":"Ⓚ"},{"hex":"&#24C1;","name":"CIRCLED LATIN CAPITAL LETTER L","char":"Ⓛ"},{"hex":"&#24C2;","name":"CIRCLED LATIN CAPITAL LETTER M","char":"Ⓜ"},{"hex":"&#24C3;","name":"CIRCLED LATIN CAPITAL LETTER N","char":"Ⓝ"},{"hex":"&#24C4;","name":"CIRCLED LATIN CAPITAL LETTER O","char":"Ⓞ"},{"hex":"&#24C5;","name":"CIRCLED LATIN CAPITAL LETTER P","char":"Ⓟ"},{"hex":"&#24C6;","name":"CIRCLED LATIN CAPITAL LETTER Q","char":"Ⓠ"},{"hex":"&#24C7;","name":"CIRCLED LATIN CAPITAL LETTER R","char":"Ⓡ"},{"hex":"&#24C8;","name":"CIRCLED LATIN CAPITAL LETTER S","char":"Ⓢ"},{"hex":"&#24C9;","name":"CIRCLED LATIN CAPITAL LETTER T","char":"Ⓣ"},{"hex":"&#24CA;","name":"CIRCLED LATIN CAPITAL LETTER U","char":"Ⓤ"},{"hex":"&#24CB;","name":"CIRCLED LATIN CAPITAL LETTER V","char":"Ⓥ"},{"hex":"&#24CC;","name":"CIRCLED LATIN CAPITAL LETTER W","char":"Ⓦ"},{"hex":"&#24CD;","name":"CIRCLED LATIN CAPITAL LETTER X","char":"Ⓧ"},{"hex":"&#24CE;","name":"CIRCLED LATIN CAPITAL LETTER Y","char":"Ⓨ"},{"hex":"&#24CF;","name":"CIRCLED LATIN CAPITAL LETTER Z","char":"Ⓩ"},{"hex":"&#24D0;","name":"CIRCLED LATIN SMALL LETTER A","char":"ⓐ"},{"hex":"&#24D1;","name":"CIRCLED LATIN SMALL LETTER B","char":"ⓑ"},{"hex":"&#24D2;","name":"CIRCLED LATIN SMALL LETTER C","char":"ⓒ"},{"hex":"&#24D3;","name":"CIRCLED LATIN SMALL LETTER D","char":"ⓓ"},{"hex":"&#24D4;","name":"CIRCLED LATIN SMALL LETTER E","char":"ⓔ"},{"hex":"&#24D5;","name":"CIRCLED LATIN SMALL LETTER F","char":"ⓕ"},{"hex":"&#24D6;","name":"CIRCLED LATIN SMALL LETTER G","char":"ⓖ"},{"hex":"&#24D7;","name":"CIRCLED LATIN SMALL LETTER H","char":"ⓗ"},{"hex":"&#24D8;","name":"CIRCLED LATIN SMALL LETTER I","char":"ⓘ"},{"hex":"&#24D9;","name":"CIRCLED LATIN SMALL LETTER J","char":"ⓙ"},{"hex":"&#24DA;","name":"CIRCLED LATIN SMALL LETTER K","char":"ⓚ"},{"hex":"&#24DB;","name":"CIRCLED LATIN SMALL LETTER L","char":"ⓛ"},{"hex":"&#24DC;","name":"CIRCLED LATIN SMALL LETTER M","char":"ⓜ"},{"hex":"&#24DD;","name":"CIRCLED LATIN SMALL LETTER N","char":"ⓝ"},{"hex":"&#24DE;","name":"CIRCLED LATIN SMALL LETTER O","char":"ⓞ"},{"hex":"&#24DF;","name":"CIRCLED LATIN SMALL LETTER P","char":"ⓟ"},{"hex":"&#24E0;","name":"CIRCLED LATIN SMALL LETTER Q","char":"ⓠ"},{"hex":"&#24E1;","name":"CIRCLED LATIN SMALL LETTER R","char":"ⓡ"},{"hex":"&#24E2;","name":"CIRCLED LATIN SMALL LETTER S","char":"ⓢ"},{"hex":"&#24E3;","name":"CIRCLED LATIN SMALL LETTER T","char":"ⓣ"},{"hex":"&#24E4;","name":"CIRCLED LATIN SMALL LETTER U","char":"ⓤ"},{"hex":"&#24E5;","name":"CIRCLED LATIN SMALL LETTER V","char":"ⓥ"},{"hex":"&#24E6;","name":"CIRCLED LATIN SMALL LETTER W","char":"ⓦ"},{"hex":"&#24E7;","name":"CIRCLED LATIN SMALL LETTER X","char":"ⓧ"},{"hex":"&#24E8;","name":"CIRCLED LATIN SMALL LETTER Y","char":"ⓨ"},{"hex":"&#24E9;","name":"CIRCLED LATIN SMALL LETTER Z","char":"ⓩ"},{"hex":"&#24EA;","name":"CIRCLED DIGIT ZERO","char":"⓪"},{"hex":"&#2070;","name":"SUPERSCRIPT ZERO","char":"⁰"},{"hex":"&#2071;","name":"SUPERSCRIPT LATIN SMALL LETTER I","char":"ⁱ"},{"hex":"&#2074;","name":"SUPERSCRIPT FOUR","char":"⁴"},{"hex":"&#2075;","name":"SUPERSCRIPT FIVE","char":"⁵"},{"hex":"&#2076;","name":"SUPERSCRIPT SIX","char":"⁶"},{"hex":"&#2077;","name":"SUPERSCRIPT SEVEN","char":"⁷"},{"hex":"&#2078;","name":"SUPERSCRIPT EIGHT","char":"⁸"},{"hex":"&#2079;","name":"SUPERSCRIPT NINE","char":"⁹"},{"hex":"&#207A;","name":"SUPERSCRIPT PLUS SIGN","char":"⁺"},{"hex":"&#207B;","name":"SUPERSCRIPT MINUS","char":"⁻"},{"hex":"&#207C;","name":"SUPERSCRIPT EQUALS SIGN","char":"⁼"},{"hex":"&#207D;","name":"SUPERSCRIPT LEFT PARENTHESIS","char":"⁽"},{"hex":"&#207E;","name":"SUPERSCRIPT RIGHT PARENTHESIS","char":"⁾"},{"hex":"&#207F;","name":"SUPERSCRIPT LATIN SMALL LETTER N (present in WGL4)","char":"ⁿ"},{"hex":"&#2080;","name":"SUBSCRIPT ZERO","char":"₀"},{"hex":"&#2081;","name":"SUBSCRIPT ONE","char":"₁"},{"hex":"&#2082;","name":"SUBSCRIPT TWO","char":"₂"},{"hex":"&#2083;","name":"SUBSCRIPT THREE","char":"₃"},{"hex":"&#2084;","name":"SUBSCRIPT FOUR","char":"₄"},{"hex":"&#2085;","name":"SUBSCRIPT FIVE","char":"₅"},{"hex":"&#2086;","name":"SUBSCRIPT SIX","char":"₆"},{"hex":"&#2087;","name":"SUBSCRIPT SEVEN","char":"₇"},{"hex":"&#2088;","name":"SUBSCRIPT EIGHT","char":"₈"},{"hex":"&#2089;","name":"SUBSCRIPT NINE","char":"₉"},{"hex":"&#208A;","name":"SUBSCRIPT PLUS SIGN","char":"₊"},{"hex":"&#208B;","name":"SUBSCRIPT MINUS","char":"₋"},{"hex":"&#208C;","name":"SUBSCRIPT EQUALS SIGN","char":"₌"},{"hex":"&#208D;","name":"SUBSCRIPT LEFT PARENTHESIS","char":"₍"},{"hex":"&#208E;","name":"SUBSCRIPT RIGHT PARENTHESIS","char":"₎"},{"hex":"&#2090;","name":"LATIN SUBSCRIPT SMALL LETTER A","char":"ₐ"},{"hex":"&#2091;","name":"LATIN SUBSCRIPT SMALL LETTER E","char":"ₑ"},{"hex":"&#2092;","name":"LATIN SUBSCRIPT SMALL LETTER O","char":"ₒ"},{"hex":"&#2093;","name":"LATIN SUBSCRIPT SMALL LETTER X","char":"ₓ"},{"hex":"&#2094;","name":"LATIN SUBSCRIPT SMALL LETTER SCHWA","char":"ₔ"}],"Latin":[{"entity":"&Agrave;","hex":"&#00C0;","name":"LATIN CAPITAL LETTER A WITH GRAVE","char":"À"},{"entity":"&Aacute;","hex":"&#00C1;","name":"LATIN CAPITAL LETTER A WITH ACUTE","char":"Á"},{"entity":"&Acirc;","hex":"&#00C2;","name":"LATIN CAPITAL LETTER A WITH CIRCUMFLEX","char":"Â"},{"entity":"&Atilde;","hex":"&#00C3;","name":"LATIN CAPITAL LETTER A WITH TILDE","char":"Ã"},{"entity":"&Auml;","hex":"&#00C4;","name":"LATIN CAPITAL LETTER A WITH DIAERESIS","char":"Ä"},{"entity":"&Aring;","hex":"&#00C5;","name":"LATIN CAPITAL LETTER A WITH RING ABOVE","char":"Å"},{"entity":"&AElig;","hex":"&#00C6;","name":"LATIN CAPITAL LETTER AE","char":"Æ"},{"entity":"&Ccedil;","hex":"&#00C7;","name":"LATIN CAPITAL LETTER C WITH CEDILLA","char":"Ç"},{"entity":"&Egrave;","hex":"&#00C8;","name":"LATIN CAPITAL LETTER E WITH GRAVE","char":"È"},{"entity":"&Eacute;","hex":"&#00C9;","name":"LATIN CAPITAL LETTER E WITH ACUTE","char":"É"},{"entity":"&Ecirc;","hex":"&#00CA;","name":"LATIN CAPITAL LETTER E WITH CIRCUMFLEX","char":"Ê"},{"entity":"&Euml;","hex":"&#00CB;","name":"LATIN CAPITAL LETTER E WITH DIAERESIS","char":"Ë"},{"entity":"&Igrave;","hex":"&#00CC;","name":"LATIN CAPITAL LETTER I WITH GRAVE","char":"Ì"},{"entity":"&Iacute;","hex":"&#00CD;","name":"LATIN CAPITAL LETTER I WITH ACUTE","char":"Í"},{"entity":"&Icirc;","hex":"&#00CE;","name":"LATIN CAPITAL LETTER I WITH CIRCUMFLEX","char":"Î"},{"entity":"&Iuml;","hex":"&#00CF;","name":"LATIN CAPITAL LETTER I WITH DIAERESIS","char":"Ï"},{"entity":"&ETH;","hex":"&#00D0;","name":"LATIN CAPITAL LETTER ETH","char":"Ð"},{"entity":"&Ntilde;","hex":"&#00D1;","name":"LATIN CAPITAL LETTER N WITH TILDE","char":"Ñ"},{"entity":"&Ograve;","hex":"&#00D2;","name":"LATIN CAPITAL LETTER O WITH GRAVE","char":"Ò"},{"entity":"&Oacute;","hex":"&#00D3;","name":"LATIN CAPITAL LETTER O WITH ACUTE","char":"Ó"},{"entity":"&Ocirc;","hex":"&#00D4;","name":"LATIN CAPITAL LETTER O WITH CIRCUMFLEX","char":"Ô"},{"entity":"&Otilde;","hex":"&#00D5;","name":"LATIN CAPITAL LETTER O WITH TILDE","char":"Õ"},{"entity":"&Ouml;","hex":"&#00D6;","name":"LATIN CAPITAL LETTER O WITH DIAERESIS","char":"Ö"},{"entity":"&times;","hex":"&#00D7;","name":"MULTIPLICATION SIGN","char":"×"},{"entity":"&Oslash;","hex":"&#00D8;","name":"LATIN CAPITAL LETTER O WITH STROKE","char":"Ø"},{"entity":"&Ugrave;","hex":"&#00D9;","name":"LATIN CAPITAL LETTER U WITH GRAVE","char":"Ù"},{"entity":"&Uacute;","hex":"&#00DA;","name":"LATIN CAPITAL LETTER U WITH ACUTE","char":"Ú"},{"entity":"&Ucirc;","hex":"&#00DB;","name":"LATIN CAPITAL LETTER U WITH CIRCUMFLEX","char":"Û"},{"entity":"&Uuml;","hex":"&#00DC;","name":"LATIN CAPITAL LETTER U WITH DIAERESIS","char":"Ü"},{"entity":"&Yacute;","hex":"&#00DD;","name":"LATIN CAPITAL LETTER Y WITH ACUTE","char":"Ý"},{"entity":"&THORN;","hex":"&#00DE;","name":"LATIN CAPITAL LETTER THORN","char":"Þ"},{"entity":"&szlig;","hex":"&#00DF;","name":"LATIN SMALL LETTER SHARP S","char":"ß"},{"entity":"&agrave;","hex":"&#00E0;","name":"LATIN SMALL LETTER A WITH GRAVE","char":"à"},{"entity":"&aacute;","hex":"&#00E1;","name":"LATIN SMALL LETTER A WITH ACUTE","char":"á"},{"entity":"&acirc;","hex":"&#00E2;","name":"LATIN SMALL LETTER A WITH CIRCUMFLEX","char":"â"},{"entity":"&atilde;","hex":"&#00E3;","name":"LATIN SMALL LETTER A WITH TILDE","char":"ã"},{"entity":"&auml;","hex":"&#00E4;","name":"LATIN SMALL LETTER A WITH DIAERESIS","char":"ä"},{"entity":"&aring;","hex":"&#00E5;","name":"LATIN SMALL LETTER A WITH RING ABOVE","char":"å"},{"entity":"&aelig;","hex":"&#00E6;","name":"LATIN SMALL LETTER AE","char":"æ"},{"entity":"&ccedil;","hex":"&#00E7;","name":"LATIN SMALL LETTER C WITH CEDILLA","char":"ç"},{"entity":"&egrave;","hex":"&#00E8;","name":"LATIN SMALL LETTER E WITH GRAVE","char":"è"},{"entity":"&eacute;","hex":"&#00E9;","name":"LATIN SMALL LETTER E WITH ACUTE","char":"é"},{"entity":"&ecirc;","hex":"&#00EA;","name":"LATIN SMALL LETTER E WITH CIRCUMFLEX","char":"ê"},{"entity":"&euml;","hex":"&#00EB;","name":"LATIN SMALL LETTER E WITH DIAERESIS","char":"ë"},{"entity":"&igrave;","hex":"&#00EC;","name":"LATIN SMALL LETTER I WITH GRAVE","char":"ì"},{"entity":"&iacute;","hex":"&#00ED;","name":"LATIN SMALL LETTER I WITH ACUTE","char":"í"},{"entity":"&icirc;","hex":"&#00EE;","name":"LATIN SMALL LETTER I WITH CIRCUMFLEX","char":"î"},{"entity":"&iuml;","hex":"&#00EF;","name":"LATIN SMALL LETTER I WITH DIAERESIS","char":"ï"},{"entity":"&eth;","hex":"&#00F0;","name":"LATIN SMALL LETTER ETH","char":"ð"},{"entity":"&ntilde;","hex":"&#00F1;","name":"LATIN SMALL LETTER N WITH TILDE","char":"ñ"},{"entity":"&ograve;","hex":"&#00F2;","name":"LATIN SMALL LETTER O WITH GRAVE","char":"ò"},{"entity":"&oacute;","hex":"&#00F3;","name":"LATIN SMALL LETTER O WITH ACUTE","char":"ó"},{"entity":"&ocirc;","hex":"&#00F4;","name":"LATIN SMALL LETTER O WITH CIRCUMFLEX","char":"ô"},{"entity":"&otilde;","hex":"&#00F5;","name":"LATIN SMALL LETTER O WITH TILDE","char":"õ"},{"entity":"&ouml;","hex":"&#00F6;","name":"LATIN SMALL LETTER O WITH DIAERESIS","char":"ö"},{"entity":"&divide;","hex":"&#00F7;","name":"DIVISION SIGN","char":"÷"},{"entity":"&oslash;","hex":"&#00F8;","name":"LATIN SMALL LETTER O WITH STROKE","char":"ø"},{"entity":"&ugrave;","hex":"&#00F9;","name":"LATIN SMALL LETTER U WITH GRAVE","char":"ù"},{"entity":"&uacute;","hex":"&#00FA;","name":"LATIN SMALL LETTER U WITH ACUTE","char":"ú"},{"entity":"&ucirc;","hex":"&#00FB;","name":"LATIN SMALL LETTER U WITH CIRCUMFLEX","char":"û"},{"entity":"&uuml;","hex":"&#00FC;","name":"LATIN SMALL LETTER U WITH DIAERESIS","char":"ü"},{"entity":"&yacute;","hex":"&#00FD;","name":"LATIN SMALL LETTER Y WITH ACUTE","char":"ý"},{"entity":"&thorn;","hex":"&#00FE;","name":"LATIN SMALL LETTER THORN","char":"þ"},{"entity":"&yuml;","hex":"&#00FF;","name":"LATIN SMALL LETTER Y WITH DIAERESIS","char":"ÿ"},{"hex":"&#0100;","name":"LATIN CAPITAL LETTER A WITH MACRON","char":"Ā"},{"hex":"&#0101;","name":"LATIN SMALL LETTER A WITH MACRON","char":"ā"},{"hex":"&#0102;","name":"LATIN CAPITAL LETTER A WITH BREVE","char":"Ă"},{"hex":"&#0103;","name":"LATIN SMALL LETTER A WITH BREVE","char":"ă"},{"hex":"&#0104;","name":"LATIN CAPITAL LETTER A WITH OGONEK","char":"Ą"},{"hex":"&#0105;","name":"LATIN SMALL LETTER A WITH OGONEK","char":"ą"},{"hex":"&#0106;","name":"LATIN CAPITAL LETTER C WITH ACUTE","char":"Ć"},{"hex":"&#0107;","name":"LATIN SMALL LETTER C WITH ACUTE","char":"ć"},{"hex":"&#0108;","name":"LATIN CAPITAL LETTER C WITH CIRCUMFLEX","char":"Ĉ"},{"hex":"&#0109;","name":"LATIN SMALL LETTER C WITH CIRCUMFLEX","char":"ĉ"},{"hex":"&#010A;","name":"LATIN CAPITAL LETTER C WITH DOT ABOVE","char":"Ċ"},{"hex":"&#010B;","name":"LATIN SMALL LETTER C WITH DOT ABOVE","char":"ċ"},{"hex":"&#010C;","name":"LATIN CAPITAL LETTER C WITH CARON","char":"Č"},{"hex":"&#010D;","name":"LATIN SMALL LETTER C WITH CARON","char":"č"},{"hex":"&#010E;","name":"LATIN CAPITAL LETTER D WITH CARON","char":"Ď"},{"hex":"&#010F;","name":"LATIN SMALL LETTER D WITH CARON","char":"ď"},{"hex":"&#0110;","name":"LATIN CAPITAL LETTER D WITH STROKE","char":"Đ"},{"hex":"&#0111;","name":"LATIN SMALL LETTER D WITH STROKE","char":"đ"},{"hex":"&#0112;","name":"LATIN CAPITAL LETTER E WITH MACRON","char":"Ē"},{"hex":"&#0113;","name":"LATIN SMALL LETTER E WITH MACRON","char":"ē"},{"hex":"&#0114;","name":"LATIN CAPITAL LETTER E WITH BREVE","char":"Ĕ"},{"hex":"&#0115;","name":"LATIN SMALL LETTER E WITH BREVE","char":"ĕ"},{"hex":"&#0116;","name":"LATIN CAPITAL LETTER E WITH DOT ABOVE","char":"Ė"},{"hex":"&#0117;","name":"LATIN SMALL LETTER E WITH DOT ABOVE","char":"ė"},{"hex":"&#0118;","name":"LATIN CAPITAL LETTER E WITH OGONEK","char":"Ę"},{"hex":"&#0119;","name":"LATIN SMALL LETTER E WITH OGONEK","char":"ę"},{"hex":"&#011A;","name":"LATIN CAPITAL LETTER E WITH CARON","char":"Ě"},{"hex":"&#011B;","name":"LATIN SMALL LETTER E WITH CARON","char":"ě"},{"hex":"&#011C;","name":"LATIN CAPITAL LETTER G WITH CIRCUMFLEX","char":"Ĝ"},{"hex":"&#011D;","name":"LATIN SMALL LETTER G WITH CIRCUMFLEX","char":"ĝ"},{"hex":"&#011E;","name":"LATIN CAPITAL LETTER G WITH BREVE","char":"Ğ"},{"hex":"&#011F;","name":"LATIN SMALL LETTER G WITH BREVE","char":"ğ"},{"hex":"&#0120;","name":"LATIN CAPITAL LETTER G WITH DOT ABOVE","char":"Ġ"},{"hex":"&#0121;","name":"LATIN SMALL LETTER G WITH DOT ABOVE","char":"ġ"},{"hex":"&#0122;","name":"LATIN CAPITAL LETTER G WITH CEDILLA","char":"Ģ"},{"hex":"&#0123;","name":"LATIN SMALL LETTER G WITH CEDILLA","char":"ģ"},{"hex":"&#0124;","name":"LATIN CAPITAL LETTER H WITH CIRCUMFLEX","char":"Ĥ"},{"hex":"&#0125;","name":"LATIN SMALL LETTER H WITH CIRCUMFLEX","char":"ĥ"},{"hex":"&#0126;","name":"LATIN CAPITAL LETTER H WITH STROKE","char":"Ħ"},{"hex":"&#0127;","name":"LATIN SMALL LETTER H WITH STROKE","char":"ħ"},{"hex":"&#0128;","name":"LATIN CAPITAL LETTER I WITH TILDE","char":"Ĩ"},{"hex":"&#0129;","name":"LATIN SMALL LETTER I WITH TILDE","char":"ĩ"},{"hex":"&#012A;","name":"LATIN CAPITAL LETTER I WITH MACRON","char":"Ī"},{"hex":"&#012B;","name":"LATIN SMALL LETTER I WITH MACRON","char":"ī"},{"hex":"&#012C;","name":"LATIN CAPITAL LETTER I WITH BREVE","char":"Ĭ"},{"hex":"&#012D;","name":"LATIN SMALL LETTER I WITH BREVE","char":"ĭ"},{"hex":"&#012E;","name":"LATIN CAPITAL LETTER I WITH OGONEK","char":"Į"},{"hex":"&#012F;","name":"LATIN SMALL LETTER I WITH OGONEK","char":"į"},{"hex":"&#0130;","name":"LATIN CAPITAL LETTER I WITH DOT ABOVE","char":"İ"},{"hex":"&#0131;","name":"LATIN SMALL LETTER DOTLESS I","char":"ı"},{"hex":"&#0132;","name":"LATIN CAPITAL LIGATURE IJ","char":"Ĳ"},{"hex":"&#0133;","name":"LATIN SMALL LIGATURE IJ","char":"ĳ"},{"hex":"&#0134;","name":"LATIN CAPITAL LETTER J WITH CIRCUMFLEX","char":"Ĵ"},{"hex":"&#0135;","name":"LATIN SMALL LETTER J WITH CIRCUMFLEX","char":"ĵ"},{"hex":"&#0136;","name":"LATIN CAPITAL LETTER K WITH CEDILLA","char":"Ķ"},{"hex":"&#0137;","name":"LATIN SMALL LETTER K WITH CEDILLA","char":"ķ"},{"hex":"&#0138;","name":"LATIN SMALL LETTER KRA","char":"ĸ"},{"hex":"&#0139;","name":"LATIN CAPITAL LETTER L WITH ACUTE","char":"Ĺ"},{"hex":"&#013A;","name":"LATIN SMALL LETTER L WITH ACUTE","char":"ĺ"},{"hex":"&#013B;","name":"LATIN CAPITAL LETTER L WITH CEDILLA","char":"Ļ"},{"hex":"&#013C;","name":"LATIN SMALL LETTER L WITH CEDILLA","char":"ļ"},{"hex":"&#013D;","name":"LATIN CAPITAL LETTER L WITH CARON","char":"Ľ"},{"hex":"&#013E;","name":"LATIN SMALL LETTER L WITH CARON","char":"ľ"},{"hex":"&#013F;","name":"LATIN CAPITAL LETTER L WITH MIDDLE DOT","char":"Ŀ"},{"hex":"&#0140;","name":"LATIN SMALL LETTER L WITH MIDDLE DOT","char":"ŀ"},{"hex":"&#0141;","name":"LATIN CAPITAL LETTER L WITH STROKE","char":"Ł"},{"hex":"&#0142;","name":"LATIN SMALL LETTER L WITH STROKE","char":"ł"},{"hex":"&#0143;","name":"LATIN CAPITAL LETTER N WITH ACUTE","char":"Ń"},{"hex":"&#0144;","name":"LATIN SMALL LETTER N WITH ACUTE","char":"ń"},{"hex":"&#0145;","name":"LATIN CAPITAL LETTER N WITH CEDILLA","char":"Ņ"},{"hex":"&#0146;","name":"LATIN SMALL LETTER N WITH CEDILLA","char":"ņ"},{"hex":"&#0147;","name":"LATIN CAPITAL LETTER N WITH CARON","char":"Ň"},{"hex":"&#0148;","name":"LATIN SMALL LETTER N WITH CARON","char":"ň"},{"hex":"&#0149;","name":"LATIN SMALL LETTER N PRECEDED BY APOSTROPHE","char":"ŉ"},{"hex":"&#014A;","name":"LATIN CAPITAL LETTER ENG","char":"Ŋ"},{"hex":"&#014B;","name":"LATIN SMALL LETTER ENG","char":"ŋ"},{"hex":"&#014C;","name":"LATIN CAPITAL LETTER O WITH MACRON","char":"Ō"},{"hex":"&#014D;","name":"LATIN SMALL LETTER O WITH MACRON","char":"ō"},{"hex":"&#014E;","name":"LATIN CAPITAL LETTER O WITH BREVE","char":"Ŏ"},{"hex":"&#014F;","name":"LATIN SMALL LETTER O WITH BREVE","char":"ŏ"},{"hex":"&#0150;","name":"LATIN CAPITAL LETTER O WITH DOUBLE ACUTE","char":"Ő"},{"hex":"&#0151;","name":"LATIN SMALL LETTER O WITH DOUBLE ACUTE","char":"ő"},{"entity":"&OElig;","hex":"&#0152;","name":"LATIN CAPITAL LIGATURE OE","char":"Œ"},{"entity":"&oelig;","hex":"&#0153;","name":"LATIN SMALL LIGATURE OE","char":"œ"},{"hex":"&#0154;","name":"LATIN CAPITAL LETTER R WITH ACUTE","char":"Ŕ"},{"hex":"&#0155;","name":"LATIN SMALL LETTER R WITH ACUTE","char":"ŕ"},{"hex":"&#0156;","name":"LATIN CAPITAL LETTER R WITH CEDILLA","char":"Ŗ"},{"hex":"&#0157;","name":"LATIN SMALL LETTER R WITH CEDILLA","char":"ŗ"},{"hex":"&#0158;","name":"LATIN CAPITAL LETTER R WITH CARON","char":"Ř"},{"hex":"&#0159;","name":"LATIN SMALL LETTER R WITH CARON","char":"ř"},{"hex":"&#015A;","name":"LATIN CAPITAL LETTER S WITH ACUTE","char":"Ś"},{"hex":"&#015B;","name":"LATIN SMALL LETTER S WITH ACUTE","char":"ś"},{"hex":"&#015C;","name":"LATIN CAPITAL LETTER S WITH CIRCUMFLEX","char":"Ŝ"},{"hex":"&#015D;","name":"LATIN SMALL LETTER S WITH CIRCUMFLEX","char":"ŝ"},{"hex":"&#015E;","name":"LATIN CAPITAL LETTER S WITH CEDILLA","char":"Ş"},{"hex":"&#015F;","name":"LATIN SMALL LETTER S WITH CEDILLA","char":"ş"},{"entity":"&Scaron;","hex":"&#0160;","name":"LATIN CAPITAL LETTER S WITH CARON","char":"Š"},{"entity":"&scaron;","hex":"&#0161;","name":"LATIN SMALL LETTER S WITH CARON","char":"š"},{"hex":"&#0162;","name":"LATIN CAPITAL LETTER T WITH CEDILLA","char":"Ţ"},{"hex":"&#0163;","name":"LATIN SMALL LETTER T WITH CEDILLA","char":"ţ"},{"hex":"&#0164;","name":"LATIN CAPITAL LETTER T WITH CARON","char":"Ť"},{"hex":"&#0165;","name":"LATIN SMALL LETTER T WITH CARON","char":"ť"},{"hex":"&#0166;","name":"LATIN CAPITAL LETTER T WITH STROKE","char":"Ŧ"},{"hex":"&#0167;","name":"LATIN SMALL LETTER T WITH STROKE","char":"ŧ"},{"hex":"&#0168;","name":"LATIN CAPITAL LETTER U WITH TILDE","char":"Ũ"},{"hex":"&#0169;","name":"LATIN SMALL LETTER U WITH TILDE","char":"ũ"},{"hex":"&#016A;","name":"LATIN CAPITAL LETTER U WITH MACRON","char":"Ū"},{"hex":"&#016B;","name":"LATIN SMALL LETTER U WITH MACRON","char":"ū"},{"hex":"&#016C;","name":"LATIN CAPITAL LETTER U WITH BREVE","char":"Ŭ"},{"hex":"&#016D;","name":"LATIN SMALL LETTER U WITH BREVE","char":"ŭ"},{"hex":"&#016E;","name":"LATIN CAPITAL LETTER U WITH RING ABOVE","char":"Ů"},{"hex":"&#016F;","name":"LATIN SMALL LETTER U WITH RING ABOVE","char":"ů"},{"hex":"&#0170;","name":"LATIN CAPITAL LETTER U WITH DOUBLE ACUTE","char":"Ű"},{"hex":"&#0171;","name":"LATIN SMALL LETTER U WITH DOUBLE ACUTE","char":"ű"},{"hex":"&#0172;","name":"LATIN CAPITAL LETTER U WITH OGONEK","char":"Ų"},{"hex":"&#0173;","name":"LATIN SMALL LETTER U WITH OGONEK","char":"ų"},{"hex":"&#0174;","name":"LATIN CAPITAL LETTER W WITH CIRCUMFLEX","char":"Ŵ"},{"hex":"&#0175;","name":"LATIN SMALL LETTER W WITH CIRCUMFLEX","char":"ŵ"},{"hex":"&#0176;","name":"LATIN CAPITAL LETTER Y WITH CIRCUMFLEX","char":"Ŷ"},{"hex":"&#0177;","name":"LATIN SMALL LETTER Y WITH CIRCUMFLEX","char":"ŷ"},{"entity":"&Yuml;","hex":"&#0178;","name":"LATIN CAPITAL LETTER Y WITH DIAERESIS","char":"Ÿ"},{"hex":"&#0179;","name":"LATIN CAPITAL LETTER Z WITH ACUTE","char":"Ź"},{"hex":"&#017A;","name":"LATIN SMALL LETTER Z WITH ACUTE","char":"ź"},{"hex":"&#017B;","name":"LATIN CAPITAL LETTER Z WITH DOT ABOVE","char":"Ż"},{"hex":"&#017C;","name":"LATIN SMALL LETTER Z WITH DOT ABOVE","char":"ż"},{"hex":"&#017D;","name":"LATIN CAPITAL LETTER Z WITH CARON","char":"Ž"},{"hex":"&#017E;","name":"LATIN SMALL LETTER Z WITH CARON","char":"ž"},{"hex":"&#017F;","name":"LATIN SMALL LETTER LONG S","char":"ſ"},{"hex":"&#0180;","name":"LATIN SMALL LETTER B WITH STROKE","char":"ƀ"},{"hex":"&#0181;","name":"LATIN CAPITAL LETTER B WITH HOOK","char":"Ɓ"},{"hex":"&#0182;","name":"LATIN CAPITAL LETTER B WITH TOPBAR","char":"Ƃ"},{"hex":"&#0183;","name":"LATIN SMALL LETTER B WITH TOPBAR","char":"ƃ"},{"hex":"&#0184;","name":"LATIN CAPITAL LETTER TONE SIX","char":"Ƅ"},{"hex":"&#0185;","name":"LATIN SMALL LETTER TONE SIX","char":"ƅ"},{"hex":"&#0186;","name":"LATIN CAPITAL LETTER OPEN O","char":"Ɔ"},{"hex":"&#0187;","name":"LATIN CAPITAL LETTER C WITH HOOK","char":"Ƈ"},{"hex":"&#0188;","name":"LATIN SMALL LETTER C WITH HOOK","char":"ƈ"},{"hex":"&#0189;","name":"LATIN CAPITAL LETTER AFRICAN D","char":"Ɖ"},{"hex":"&#018A;","name":"LATIN CAPITAL LETTER D WITH HOOK","char":"Ɗ"},{"hex":"&#018B;","name":"LATIN CAPITAL LETTER D WITH TOPBAR","char":"Ƌ"},{"hex":"&#018C;","name":"LATIN SMALL LETTER D WITH TOPBAR","char":"ƌ"},{"hex":"&#018D;","name":"LATIN SMALL LETTER TURNED DELTA","char":"ƍ"},{"hex":"&#018E;","name":"LATIN CAPITAL LETTER REVERSED E","char":"Ǝ"},{"hex":"&#018F;","name":"LATIN CAPITAL LETTER SCHWA","char":"Ə"},{"hex":"&#0190;","name":"LATIN CAPITAL LETTER OPEN E","char":"Ɛ"},{"hex":"&#0191;","name":"LATIN CAPITAL LETTER F WITH HOOK","char":"Ƒ"},{"entity":"&fnof;","hex":"&#0192;","name":"LATIN SMALL LETTER F WITH HOOK","char":"ƒ"},{"hex":"&#0193;","name":"LATIN CAPITAL LETTER G WITH HOOK","char":"Ɠ"},{"hex":"&#0194;","name":"LATIN CAPITAL LETTER GAMMA","char":"Ɣ"},{"hex":"&#0195;","name":"LATIN SMALL LETTER HV","char":"ƕ"},{"hex":"&#0196;","name":"LATIN CAPITAL LETTER IOTA","char":"Ɩ"},{"hex":"&#0197;","name":"LATIN CAPITAL LETTER I WITH STROKE","char":"Ɨ"},{"hex":"&#0198;","name":"LATIN CAPITAL LETTER K WITH HOOK","char":"Ƙ"},{"hex":"&#0199;","name":"LATIN SMALL LETTER K WITH HOOK","char":"ƙ"},{"hex":"&#019A;","name":"LATIN SMALL LETTER L WITH BAR","char":"ƚ"},{"hex":"&#019B;","name":"LATIN SMALL LETTER LAMBDA WITH STROKE","char":"ƛ"},{"hex":"&#019C;","name":"LATIN CAPITAL LETTER TURNED M","char":"Ɯ"},{"hex":"&#019D;","name":"LATIN CAPITAL LETTER N WITH LEFT HOOK","char":"Ɲ"},{"hex":"&#019E;","name":"LATIN SMALL LETTER N WITH LONG RIGHT LEG","char":"ƞ"},{"hex":"&#019F;","name":"LATIN CAPITAL LETTER O WITH MIDDLE TILDE","char":"Ɵ"},{"hex":"&#01A0;","name":"LATIN CAPITAL LETTER O WITH HORN","char":"Ơ"},{"hex":"&#01A1;","name":"LATIN SMALL LETTER O WITH HORN","char":"ơ"},{"hex":"&#01A2;","name":"LATIN CAPITAL LETTER OI","char":"Ƣ"},{"hex":"&#01A3;","name":"LATIN SMALL LETTER OI","char":"ƣ"},{"hex":"&#01A4;","name":"LATIN CAPITAL LETTER P WITH HOOK","char":"Ƥ"},{"hex":"&#01A5;","name":"LATIN SMALL LETTER P WITH HOOK","char":"ƥ"},{"hex":"&#01A6;","name":"LATIN LETTER YR","char":"Ʀ"},{"hex":"&#01A7;","name":"LATIN CAPITAL LETTER TONE TWO","char":"Ƨ"},{"hex":"&#01A8;","name":"LATIN SMALL LETTER TONE TWO","char":"ƨ"},{"hex":"&#01A9;","name":"LATIN CAPITAL LETTER ESH","char":"Ʃ"},{"hex":"&#01AA;","name":"LATIN LETTER REVERSED ESH LOOP","char":"ƪ"},{"hex":"&#01AB;","name":"LATIN SMALL LETTER T WITH PALATAL HOOK","char":"ƫ"},{"hex":"&#01AC;","name":"LATIN CAPITAL LETTER T WITH HOOK","char":"Ƭ"},{"hex":"&#01AD;","name":"LATIN SMALL LETTER T WITH HOOK","char":"ƭ"},{"hex":"&#01AE;","name":"LATIN CAPITAL LETTER T WITH RETROFLEX HOOK","char":"Ʈ"},{"hex":"&#01AF;","name":"LATIN CAPITAL LETTER U WITH HORN","char":"Ư"},{"hex":"&#01B0;","name":"LATIN SMALL LETTER U WITH HORN","char":"ư"},{"hex":"&#01B1;","name":"LATIN CAPITAL LETTER UPSILON","char":"Ʊ"},{"hex":"&#01B2;","name":"LATIN CAPITAL LETTER V WITH HOOK","char":"Ʋ"},{"hex":"&#01B3;","name":"LATIN CAPITAL LETTER Y WITH HOOK","char":"Ƴ"},{"hex":"&#01B4;","name":"LATIN SMALL LETTER Y WITH HOOK","char":"ƴ"},{"hex":"&#01B5;","name":"LATIN CAPITAL LETTER Z WITH STROKE","char":"Ƶ"},{"hex":"&#01B6;","name":"LATIN SMALL LETTER Z WITH STROKE","char":"ƶ"},{"hex":"&#01B7;","name":"LATIN CAPITAL LETTER EZH","char":"Ʒ"},{"hex":"&#01B8;","name":"LATIN CAPITAL LETTER EZH REVERSED","char":"Ƹ"},{"hex":"&#01B9;","name":"LATIN SMALL LETTER EZH REVERSED","char":"ƹ"},{"hex":"&#01BA;","name":"LATIN SMALL LETTER EZH WITH TAIL","char":"ƺ"},{"hex":"&#01BB;","name":"LATIN LETTER TWO WITH STROKE","char":"ƻ"},{"hex":"&#01BC;","name":"LATIN CAPITAL LETTER TONE FIVE","char":"Ƽ"},{"hex":"&#01BD;","name":"LATIN SMALL LETTER TONE FIVE","char":"ƽ"},{"hex":"&#01BE;","name":"LATIN LETTER INVERTED GLOTTAL STOP WITH STROKE","char":"ƾ"},{"hex":"&#01BF;","name":"LATIN LETTER WYNN","char":"ƿ"},{"hex":"&#01C0;","name":"LATIN LETTER DENTAL CLICK","char":"ǀ"},{"hex":"&#01C1;","name":"LATIN LETTER LATERAL CLICK","char":"ǁ"},{"hex":"&#01C2;","name":"LATIN LETTER ALVEOLAR CLICK","char":"ǂ"},{"hex":"&#01C3;","name":"LATIN LETTER RETROFLEX CLICK","char":"ǃ"},{"hex":"&#01C4;","name":"LATIN CAPITAL LETTER DZ WITH CARON","char":"Ǆ"},{"hex":"&#01C5;","name":"LATIN CAPITAL LETTER D WITH SMALL LETTER Z WITH CARON","char":"ǅ"},{"hex":"&#01C6;","name":"LATIN SMALL LETTER DZ WITH CARON","char":"ǆ"},{"hex":"&#01C7;","name":"LATIN CAPITAL LETTER LJ","char":"Ǉ"},{"hex":"&#01C8;","name":"LATIN CAPITAL LETTER L WITH SMALL LETTER J","char":"ǈ"},{"hex":"&#01C9;","name":"LATIN SMALL LETTER LJ","char":"ǉ"},{"hex":"&#01CA;","name":"LATIN CAPITAL LETTER NJ","char":"Ǌ"},{"hex":"&#01CB;","name":"LATIN CAPITAL LETTER N WITH SMALL LETTER J","char":"ǋ"},{"hex":"&#01CC;","name":"LATIN SMALL LETTER NJ","char":"ǌ"},{"hex":"&#01CD;","name":"LATIN CAPITAL LETTER A WITH CARON","char":"Ǎ"},{"hex":"&#01CE;","name":"LATIN SMALL LETTER A WITH CARON","char":"ǎ"},{"hex":"&#01CF;","name":"LATIN CAPITAL LETTER I WITH CARON","char":"Ǐ"},{"hex":"&#01D0;","name":"LATIN SMALL LETTER I WITH CARON","char":"ǐ"},{"hex":"&#01D1;","name":"LATIN CAPITAL LETTER O WITH CARON","char":"Ǒ"},{"hex":"&#01D2;","name":"LATIN SMALL LETTER O WITH CARON","char":"ǒ"},{"hex":"&#01D3;","name":"LATIN CAPITAL LETTER U WITH CARON","char":"Ǔ"},{"hex":"&#01D4;","name":"LATIN SMALL LETTER U WITH CARON","char":"ǔ"},{"hex":"&#01D5;","name":"LATIN CAPITAL LETTER U WITH DIAERESIS AND MACRON","char":"Ǖ"},{"hex":"&#01D6;","name":"LATIN SMALL LETTER U WITH DIAERESIS AND MACRON","char":"ǖ"},{"hex":"&#01D7;","name":"LATIN CAPITAL LETTER U WITH DIAERESIS AND ACUTE","char":"Ǘ"},{"hex":"&#01D8;","name":"LATIN SMALL LETTER U WITH DIAERESIS AND ACUTE","char":"ǘ"},{"hex":"&#01D9;","name":"LATIN CAPITAL LETTER U WITH DIAERESIS AND CARON","char":"Ǚ"},{"hex":"&#01DA;","name":"LATIN SMALL LETTER U WITH DIAERESIS AND CARON","char":"ǚ"},{"hex":"&#01DB;","name":"LATIN CAPITAL LETTER U WITH DIAERESIS AND GRAVE","char":"Ǜ"},{"hex":"&#01DC;","name":"LATIN SMALL LETTER U WITH DIAERESIS AND GRAVE","char":"ǜ"},{"hex":"&#01DD;","name":"LATIN SMALL LETTER TURNED E","char":"ǝ"},{"hex":"&#01DE;","name":"LATIN CAPITAL LETTER A WITH DIAERESIS AND MACRON","char":"Ǟ"},{"hex":"&#01DF;","name":"LATIN SMALL LETTER A WITH DIAERESIS AND MACRON","char":"ǟ"},{"hex":"&#01E0;","name":"LATIN CAPITAL LETTER A WITH DOT ABOVE AND MACRON","char":"Ǡ"},{"hex":"&#01E1;","name":"LATIN SMALL LETTER A WITH DOT ABOVE AND MACRON","char":"ǡ"},{"hex":"&#01E2;","name":"LATIN CAPITAL LETTER AE WITH MACRON","char":"Ǣ"},{"hex":"&#01E3;","name":"LATIN SMALL LETTER AE WITH MACRON","char":"ǣ"},{"hex":"&#01E4;","name":"LATIN CAPITAL LETTER G WITH STROKE","char":"Ǥ"},{"hex":"&#01E5;","name":"LATIN SMALL LETTER G WITH STROKE","char":"ǥ"},{"hex":"&#01E6;","name":"LATIN CAPITAL LETTER G WITH CARON","char":"Ǧ"},{"hex":"&#01E7;","name":"LATIN SMALL LETTER G WITH CARON","char":"ǧ"},{"hex":"&#01E8;","name":"LATIN CAPITAL LETTER K WITH CARON","char":"Ǩ"},{"hex":"&#01E9;","name":"LATIN SMALL LETTER K WITH CARON","char":"ǩ"},{"hex":"&#01EA;","name":"LATIN CAPITAL LETTER O WITH OGONEK","char":"Ǫ"},{"hex":"&#01EB;","name":"LATIN SMALL LETTER O WITH OGONEK","char":"ǫ"},{"hex":"&#01EC;","name":"LATIN CAPITAL LETTER O WITH OGONEK AND MACRON","char":"Ǭ"},{"hex":"&#01ED;","name":"LATIN SMALL LETTER O WITH OGONEK AND MACRON","char":"ǭ"},{"hex":"&#01EE;","name":"LATIN CAPITAL LETTER EZH WITH CARON","char":"Ǯ"},{"hex":"&#01EF;","name":"LATIN SMALL LETTER EZH WITH CARON","char":"ǯ"},{"hex":"&#01F0;","name":"LATIN SMALL LETTER J WITH CARON","char":"ǰ"},{"hex":"&#01F1;","name":"LATIN CAPITAL LETTER DZ","char":"Ǳ"},{"hex":"&#01F2;","name":"LATIN CAPITAL LETTER D WITH SMALL LETTER Z","char":"ǲ"},{"hex":"&#01F3;","name":"LATIN SMALL LETTER DZ","char":"ǳ"},{"hex":"&#01F4;","name":"LATIN CAPITAL LETTER G WITH ACUTE","char":"Ǵ"},{"hex":"&#01F5;","name":"LATIN SMALL LETTER G WITH ACUTE","char":"ǵ"},{"hex":"&#01F6;","name":"LATIN CAPITAL LETTER HWAIR","char":"Ƕ"},{"hex":"&#01F7;","name":"LATIN CAPITAL LETTER WYNN","char":"Ƿ"},{"hex":"&#01F8;","name":"LATIN CAPITAL LETTER N WITH GRAVE","char":"Ǹ"},{"hex":"&#01F9;","name":"LATIN SMALL LETTER N WITH GRAVE","char":"ǹ"},{"hex":"&#01FA;","name":"LATIN CAPITAL LETTER A WITH RING ABOVE AND ACUTE (present in WGL4)","char":"Ǻ"},{"hex":"&#01FB;","name":"LATIN SMALL LETTER A WITH RING ABOVE AND ACUTE (present in WGL4)","char":"ǻ"},{"hex":"&#01FC;","name":"LATIN CAPITAL LETTER AE WITH ACUTE (present in WGL4)","char":"Ǽ"},{"hex":"&#01FD;","name":"LATIN SMALL LETTER AE WITH ACUTE (present in WGL4)","char":"ǽ"},{"hex":"&#01FE;","name":"LATIN CAPITAL LETTER O WITH STROKE AND ACUTE (present in WGL4)","char":"Ǿ"},{"hex":"&#01FF;","name":"LATIN SMALL LETTER O WITH STROKE AND ACUTE (present in WGL4)","char":"ǿ"},{"hex":"&#0200;","name":"LATIN CAPITAL LETTER A WITH DOUBLE GRAVE","char":"Ȁ"},{"hex":"&#0201;","name":"LATIN SMALL LETTER A WITH DOUBLE GRAVE","char":"ȁ"},{"hex":"&#0202;","name":"LATIN CAPITAL LETTER A WITH INVERTED BREVE","char":"Ȃ"},{"hex":"&#0203;","name":"LATIN SMALL LETTER A WITH INVERTED BREVE","char":"ȃ"},{"hex":"&#0204;","name":"LATIN CAPITAL LETTER E WITH DOUBLE GRAVE","char":"Ȅ"},{"hex":"&#0205;","name":"LATIN SMALL LETTER E WITH DOUBLE GRAVE","char":"ȅ"},{"hex":"&#0206;","name":"LATIN CAPITAL LETTER E WITH INVERTED BREVE","char":"Ȇ"},{"hex":"&#0207;","name":"LATIN SMALL LETTER E WITH INVERTED BREVE","char":"ȇ"},{"hex":"&#0208;","name":"LATIN CAPITAL LETTER I WITH DOUBLE GRAVE","char":"Ȉ"},{"hex":"&#0209;","name":"LATIN SMALL LETTER I WITH DOUBLE GRAVE","char":"ȉ"},{"hex":"&#020A;","name":"LATIN CAPITAL LETTER I WITH INVERTED BREVE","char":"Ȋ"},{"hex":"&#020B;","name":"LATIN SMALL LETTER I WITH INVERTED BREVE","char":"ȋ"},{"hex":"&#020C;","name":"LATIN CAPITAL LETTER O WITH DOUBLE GRAVE","char":"Ȍ"},{"hex":"&#020D;","name":"LATIN SMALL LETTER O WITH DOUBLE GRAVE","char":"ȍ"},{"hex":"&#020E;","name":"LATIN CAPITAL LETTER O WITH INVERTED BREVE","char":"Ȏ"},{"hex":"&#020F;","name":"LATIN SMALL LETTER O WITH INVERTED BREVE","char":"ȏ"},{"hex":"&#0210;","name":"LATIN CAPITAL LETTER R WITH DOUBLE GRAVE","char":"Ȑ"},{"hex":"&#0211;","name":"LATIN SMALL LETTER R WITH DOUBLE GRAVE","char":"ȑ"},{"hex":"&#0212;","name":"LATIN CAPITAL LETTER R WITH INVERTED BREVE","char":"Ȓ"},{"hex":"&#0213;","name":"LATIN SMALL LETTER R WITH INVERTED BREVE","char":"ȓ"},{"hex":"&#0214;","name":"LATIN CAPITAL LETTER U WITH DOUBLE GRAVE","char":"Ȕ"},{"hex":"&#0215;","name":"LATIN SMALL LETTER U WITH DOUBLE GRAVE","char":"ȕ"},{"hex":"&#0216;","name":"LATIN CAPITAL LETTER U WITH INVERTED BREVE","char":"Ȗ"},{"hex":"&#0217;","name":"LATIN SMALL LETTER U WITH INVERTED BREVE","char":"ȗ"},{"hex":"&#0218;","name":"LATIN CAPITAL LETTER S WITH COMMA BELOW","char":"Ș"},{"hex":"&#0219;","name":"LATIN SMALL LETTER S WITH COMMA BELOW","char":"ș"},{"hex":"&#021A;","name":"LATIN CAPITAL LETTER T WITH COMMA BELOW","char":"Ț"},{"hex":"&#021B;","name":"LATIN SMALL LETTER T WITH COMMA BELOW","char":"ț"},{"hex":"&#021C;","name":"LATIN CAPITAL LETTER YOGH","char":"Ȝ"},{"hex":"&#021D;","name":"LATIN SMALL LETTER YOGH","char":"ȝ"},{"hex":"&#021E;","name":"LATIN CAPITAL LETTER H WITH CARON","char":"Ȟ"},{"hex":"&#021F;","name":"LATIN SMALL LETTER H WITH CARON","char":"ȟ"},{"hex":"&#0220;","name":"LATIN CAPITAL LETTER N WITH LONG RIGHT LEG","char":"Ƞ"},{"hex":"&#0221;","name":"LATIN SMALL LETTER D WITH CURL","char":"ȡ"},{"hex":"&#0222;","name":"LATIN CAPITAL LETTER OU","char":"Ȣ"},{"hex":"&#0223;","name":"LATIN SMALL LETTER OU","char":"ȣ"},{"hex":"&#0224;","name":"LATIN CAPITAL LETTER Z WITH HOOK","char":"Ȥ"},{"hex":"&#0225;","name":"LATIN SMALL LETTER Z WITH HOOK","char":"ȥ"},{"hex":"&#0226;","name":"LATIN CAPITAL LETTER A WITH DOT ABOVE","char":"Ȧ"},{"hex":"&#0227;","name":"LATIN SMALL LETTER A WITH DOT ABOVE","char":"ȧ"},{"hex":"&#0228;","name":"LATIN CAPITAL LETTER E WITH CEDILLA","char":"Ȩ"},{"hex":"&#0229;","name":"LATIN SMALL LETTER E WITH CEDILLA","char":"ȩ"},{"hex":"&#022A;","name":"LATIN CAPITAL LETTER O WITH DIAERESIS AND MACRON","char":"Ȫ"},{"hex":"&#022B;","name":"LATIN SMALL LETTER O WITH DIAERESIS AND MACRON","char":"ȫ"},{"hex":"&#022C;","name":"LATIN CAPITAL LETTER O WITH TILDE AND MACRON","char":"Ȭ"},{"hex":"&#022D;","name":"LATIN SMALL LETTER O WITH TILDE AND MACRON","char":"ȭ"},{"hex":"&#022E;","name":"LATIN CAPITAL LETTER O WITH DOT ABOVE","char":"Ȯ"},{"hex":"&#022F;","name":"LATIN SMALL LETTER O WITH DOT ABOVE","char":"ȯ"},{"hex":"&#0230;","name":"LATIN CAPITAL LETTER O WITH DOT ABOVE AND MACRON","char":"Ȱ"},{"hex":"&#0231;","name":"LATIN SMALL LETTER O WITH DOT ABOVE AND MACRON","char":"ȱ"},{"hex":"&#0232;","name":"LATIN CAPITAL LETTER Y WITH MACRON","char":"Ȳ"},{"hex":"&#0233;","name":"LATIN SMALL LETTER Y WITH MACRON","char":"ȳ"},{"hex":"&#0234;","name":"LATIN SMALL LETTER L WITH CURL","char":"ȴ"},{"hex":"&#0235;","name":"LATIN SMALL LETTER N WITH CURL","char":"ȵ"},{"hex":"&#0236;","name":"LATIN SMALL LETTER T WITH CURL","char":"ȶ"},{"hex":"&#0237;","name":"LATIN SMALL LETTER DOTLESS J","char":"ȷ"},{"hex":"&#0238;","name":"LATIN SMALL LETTER DB DIGRAPH","char":"ȸ"},{"hex":"&#0239;","name":"LATIN SMALL LETTER QP DIGRAPH","char":"ȹ"},{"hex":"&#023A;","name":"LATIN CAPITAL LETTER A WITH STROKE","char":"Ⱥ"},{"hex":"&#023B;","name":"LATIN CAPITAL LETTER C WITH STROKE","char":"Ȼ"},{"hex":"&#023C;","name":"LATIN SMALL LETTER C WITH STROKE","char":"ȼ"},{"hex":"&#023D;","name":"LATIN CAPITAL LETTER L WITH BAR","char":"Ƚ"},{"hex":"&#023E;","name":"LATIN CAPITAL LETTER T WITH DIAGONAL STROKE","char":"Ⱦ"},{"hex":"&#023F;","name":"LATIN SMALL LETTER S WITH SWASH TAIL","char":"ȿ"},{"hex":"&#0240;","name":"LATIN SMALL LETTER Z WITH SWASH TAIL","char":"ɀ"},{"hex":"&#0241;","name":"LATIN CAPITAL LETTER GLOTTAL STOP","char":"Ɂ"},{"hex":"&#0242;","name":"LATIN SMALL LETTER GLOTTAL STOP","char":"ɂ"},{"hex":"&#0243;","name":"LATIN CAPITAL LETTER B WITH STROKE","char":"Ƀ"},{"hex":"&#0244;","name":"LATIN CAPITAL LETTER U BAR","char":"Ʉ"},{"hex":"&#0245;","name":"LATIN CAPITAL LETTER TURNED V","char":"Ʌ"},{"hex":"&#0246;","name":"LATIN CAPITAL LETTER E WITH STROKE","char":"Ɇ"},{"hex":"&#0247;","name":"LATIN SMALL LETTER E WITH STROKE","char":"ɇ"},{"hex":"&#0248;","name":"LATIN CAPITAL LETTER J WITH STROKE","char":"Ɉ"},{"hex":"&#0249;","name":"LATIN SMALL LETTER J WITH STROKE","char":"ɉ"},{"hex":"&#024A;","name":"LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL","char":"Ɋ"},{"hex":"&#024B;","name":"LATIN SMALL LETTER Q WITH HOOK TAIL","char":"ɋ"},{"hex":"&#024C;","name":"LATIN CAPITAL LETTER R WITH STROKE","char":"Ɍ"},{"hex":"&#024D;","name":"LATIN SMALL LETTER R WITH STROKE","char":"ɍ"},{"hex":"&#024E;","name":"LATIN CAPITAL LETTER Y WITH STROKE","char":"Ɏ"},{"hex":"&#024F;","name":"LATIN SMALL LETTER Y WITH STROKE","char":"ɏ"},{"hex":"&#2C60;","name":"LATIN CAPITAL LETTER L WITH DOUBLE BAR","char":"Ⱡ"},{"hex":"&#2C61;","name":"LATIN SMALL LETTER L WITH DOUBLE BAR","char":"ⱡ"},{"hex":"&#2C62;","name":"LATIN CAPITAL LETTER L WITH MIDDLE TILDE","char":"Ɫ"},{"hex":"&#2C63;","name":"LATIN CAPITAL LETTER P WITH STROKE","char":"Ᵽ"},{"hex":"&#2C64;","name":"LATIN CAPITAL LETTER R WITH TAIL","char":"Ɽ"},{"hex":"&#2C65;","name":"LATIN SMALL LETTER A WITH STROKE","char":"ⱥ"},{"hex":"&#2C66;","name":"LATIN SMALL LETTER T WITH DIAGONAL STROKE","char":"ⱦ"},{"hex":"&#2C67;","name":"LATIN CAPITAL LETTER H WITH DESCENDER","char":"Ⱨ"},{"hex":"&#2C68;","name":"LATIN SMALL LETTER H WITH DESCENDER","char":"ⱨ"},{"hex":"&#2C69;","name":"LATIN CAPITAL LETTER K WITH DESCENDER","char":"Ⱪ"},{"hex":"&#2C6A;","name":"LATIN SMALL LETTER K WITH DESCENDER","char":"ⱪ"},{"hex":"&#2C6B;","name":"LATIN CAPITAL LETTER Z WITH DESCENDER","char":"Ⱬ"},{"hex":"&#2C6C;","name":"LATIN SMALL LETTER Z WITH DESCENDER","char":"ⱬ"},{"hex":"&#2C6D;","name":"LATIN CAPITAL LETTER ALPHA","char":"Ɑ"},{"hex":"&#2C6E;","name":"LATIN CAPITAL LETTER M WITH HOOK","char":"Ɱ"},{"hex":"&#2C6F;","name":"LATIN CAPITAL LETTER TURNED A","char":"Ɐ"},{"hex":"&#2C70;","name":"LATIN CAPITAL LETTER TURNED ALPHA","char":"Ɒ"},{"hex":"&#2C71;","name":"LATIN SMALL LETTER V WITH RIGHT HOOK","char":"ⱱ"},{"hex":"&#2C72;","name":"LATIN CAPITAL LETTER W WITH HOOK","char":"Ⱳ"},{"hex":"&#2C73;","name":"LATIN SMALL LETTER W WITH HOOK","char":"ⱳ"},{"hex":"&#2C74;","name":"LATIN SMALL LETTER V WITH CURL","char":"ⱴ"},{"hex":"&#2C75;","name":"LATIN CAPITAL LETTER HALF H","char":"Ⱶ"},{"hex":"&#2C76;","name":"LATIN SMALL LETTER HALF H","char":"ⱶ"},{"hex":"&#2C77;","name":"LATIN SMALL LETTER TAILLESS PHI","char":"ⱷ"},{"hex":"&#2C78;","name":"LATIN SMALL LETTER E WITH NOTCH","char":"ⱸ"},{"hex":"&#2C79;","name":"LATIN SMALL LETTER TURNED R WITH TAIL","char":"ⱹ"},{"hex":"&#2C7A;","name":"LATIN SMALL LETTER O WITH LOW RING INSIDE","char":"ⱺ"},{"hex":"&#2C7B;","name":"LATIN LETTER SMALL CAPITAL TURNED E","char":"ⱻ"},{"hex":"&#2C7C;","name":"LATIN SUBSCRIPT SMALL LETTER J","char":"ⱼ"},{"hex":"&#2C7D;","name":"MODIFIER LETTER CAPITAL V","char":"ⱽ"},{"hex":"&#2C7E;","name":"LATIN CAPITAL LETTER S WITH SWASH TAIL","char":"Ȿ"},{"hex":"&#2C7F;","name":"LATIN CAPITAL LETTER Z WITH SWASH TAIL","char":"Ɀ"},{"hex":"&#A720;","name":"MODIFIER LETTER STRESS AND HIGH TONE","char":"꜠"},{"hex":"&#A721;","name":"MODIFIER LETTER STRESS AND LOW TONE","char":"꜡"},{"hex":"&#A722;","name":"LATIN CAPITAL LETTER EGYPTOLOGICAL ALEF","char":"Ꜣ"},{"hex":"&#A723;","name":"LATIN SMALL LETTER EGYPTOLOGICAL ALEF","char":"ꜣ"},{"hex":"&#A724;","name":"LATIN CAPITAL LETTER EGYPTOLOGICAL AIN","char":"Ꜥ"},{"hex":"&#A725;","name":"LATIN SMALL LETTER EGYPTOLOGICAL AIN","char":"ꜥ"},{"hex":"&#A726;","name":"LATIN CAPITAL LETTER HENG","char":"Ꜧ"},{"hex":"&#A727;","name":"LATIN SMALL LETTER HENG","char":"ꜧ"},{"hex":"&#A728;","name":"LATIN CAPITAL LETTER TZ","char":"Ꜩ"},{"hex":"&#A729;","name":"LATIN SMALL LETTER TZ","char":"ꜩ"},{"hex":"&#A72A;","name":"LATIN CAPITAL LETTER TRESILLO","char":"Ꜫ"},{"hex":"&#A72B;","name":"LATIN SMALL LETTER TRESILLO","char":"ꜫ"},{"hex":"&#A72C;","name":"LATIN CAPITAL LETTER CUATRILLO","char":"Ꜭ"},{"hex":"&#A72D;","name":"LATIN SMALL LETTER CUATRILLO","char":"ꜭ"},{"hex":"&#A72E;","name":"LATIN CAPITAL LETTER CUATRILLO WITH COMMA","char":"Ꜯ"},{"hex":"&#A72F;","name":"LATIN SMALL LETTER CUATRILLO WITH COMMA","char":"ꜯ"},{"hex":"&#A730;","name":"LATIN LETTER SMALL CAPITAL F","char":"ꜰ"},{"hex":"&#A731;","name":"LATIN LETTER SMALL CAPITAL S","char":"ꜱ"},{"hex":"&#A732;","name":"LATIN CAPITAL LETTER AA","char":"Ꜳ"},{"hex":"&#A733;","name":"LATIN SMALL LETTER AA","char":"ꜳ"},{"hex":"&#A734;","name":"LATIN CAPITAL LETTER AO","char":"Ꜵ"},{"hex":"&#A735;","name":"LATIN SMALL LETTER AO","char":"ꜵ"},{"hex":"&#A736;","name":"LATIN CAPITAL LETTER AU","char":"Ꜷ"},{"hex":"&#A737;","name":"LATIN SMALL LETTER AU","char":"ꜷ"},{"hex":"&#A738;","name":"LATIN CAPITAL LETTER AV","char":"Ꜹ"},{"hex":"&#A739;","name":"LATIN SMALL LETTER AV","char":"ꜹ"},{"hex":"&#A73A;","name":"LATIN CAPITAL LETTER AV WITH HORIZONTAL BAR","char":"Ꜻ"},{"hex":"&#A73B;","name":"LATIN SMALL LETTER AV WITH HORIZONTAL BAR","char":"ꜻ"},{"hex":"&#A73C;","name":"LATIN CAPITAL LETTER AY","char":"Ꜽ"},{"hex":"&#A73D;","name":"LATIN SMALL LETTER AY","char":"ꜽ"},{"hex":"&#A73E;","name":"LATIN CAPITAL LETTER REVERSED C WITH DOT","char":"Ꜿ"},{"hex":"&#A73F;","name":"LATIN SMALL LETTER REVERSED C WITH DOT","char":"ꜿ"},{"hex":"&#A740;","name":"LATIN CAPITAL LETTER K WITH STROKE","char":"Ꝁ"},{"hex":"&#A741;","name":"LATIN SMALL LETTER K WITH STROKE","char":"ꝁ"},{"hex":"&#A742;","name":"LATIN CAPITAL LETTER K WITH DIAGONAL STROKE","char":"Ꝃ"},{"hex":"&#A743;","name":"LATIN SMALL LETTER K WITH DIAGONAL STROKE","char":"ꝃ"},{"hex":"&#A744;","name":"LATIN CAPITAL LETTER K WITH STROKE AND DIAGONAL STROKE","char":"Ꝅ"},{"hex":"&#A745;","name":"LATIN SMALL LETTER K WITH STROKE AND DIAGONAL STROKE","char":"ꝅ"},{"hex":"&#A746;","name":"LATIN CAPITAL LETTER BROKEN L","char":"Ꝇ"},{"hex":"&#A747;","name":"LATIN SMALL LETTER BROKEN L","char":"ꝇ"},{"hex":"&#A748;","name":"LATIN CAPITAL LETTER L WITH HIGH STROKE","char":"Ꝉ"},{"hex":"&#A749;","name":"LATIN SMALL LETTER L WITH HIGH STROKE","char":"ꝉ"},{"hex":"&#A74A;","name":"LATIN CAPITAL LETTER O WITH LONG STROKE OVERLAY","char":"Ꝋ"},{"hex":"&#A74B;","name":"LATIN SMALL LETTER O WITH LONG STROKE OVERLAY","char":"ꝋ"},{"hex":"&#A74C;","name":"LATIN CAPITAL LETTER O WITH LOOP","char":"Ꝍ"},{"hex":"&#A74D;","name":"LATIN SMALL LETTER O WITH LOOP","char":"ꝍ"},{"hex":"&#A74E;","name":"LATIN CAPITAL LETTER OO","char":"Ꝏ"},{"hex":"&#A74F;","name":"LATIN SMALL LETTER OO","char":"ꝏ"},{"hex":"&#A750;","name":"LATIN CAPITAL LETTER P WITH STROKE THROUGH DESCENDER","char":"Ꝑ"},{"hex":"&#A751;","name":"LATIN SMALL LETTER P WITH STROKE THROUGH DESCENDER","char":"ꝑ"},{"hex":"&#A752;","name":"LATIN CAPITAL LETTER P WITH FLOURISH","char":"Ꝓ"},{"hex":"&#A753;","name":"LATIN SMALL LETTER P WITH FLOURISH","char":"ꝓ"},{"hex":"&#A754;","name":"LATIN CAPITAL LETTER P WITH SQUIRREL TAIL","char":"Ꝕ"},{"hex":"&#A755;","name":"LATIN SMALL LETTER P WITH SQUIRREL TAIL","char":"ꝕ"},{"hex":"&#A756;","name":"LATIN CAPITAL LETTER Q WITH STROKE THROUGH DESCENDER","char":"Ꝗ"},{"hex":"&#A757;","name":"LATIN SMALL LETTER Q WITH STROKE THROUGH DESCENDER","char":"ꝗ"},{"hex":"&#A758;","name":"LATIN CAPITAL LETTER Q WITH DIAGONAL STROKE","char":"Ꝙ"},{"hex":"&#A759;","name":"LATIN SMALL LETTER Q WITH DIAGONAL STROKE","char":"ꝙ"},{"hex":"&#A75A;","name":"LATIN CAPITAL LETTER R ROTUNDA","char":"Ꝛ"},{"hex":"&#A75B;","name":"LATIN SMALL LETTER R ROTUNDA","char":"ꝛ"},{"hex":"&#A75C;","name":"LATIN CAPITAL LETTER RUM ROTUNDA","char":"Ꝝ"},{"hex":"&#A75D;","name":"LATIN SMALL LETTER RUM ROTUNDA","char":"ꝝ"},{"hex":"&#A75E;","name":"LATIN CAPITAL LETTER V WITH DIAGONAL STROKE","char":"Ꝟ"},{"hex":"&#A75F;","name":"LATIN SMALL LETTER V WITH DIAGONAL STROKE","char":"ꝟ"},{"hex":"&#A760;","name":"LATIN CAPITAL LETTER VY","char":"Ꝡ"},{"hex":"&#A761;","name":"LATIN SMALL LETTER VY","char":"ꝡ"},{"hex":"&#A762;","name":"LATIN CAPITAL LETTER VISIGOTHIC Z","char":"Ꝣ"},{"hex":"&#A763;","name":"LATIN SMALL LETTER VISIGOTHIC Z","char":"ꝣ"},{"hex":"&#A764;","name":"LATIN CAPITAL LETTER THORN WITH STROKE","char":"Ꝥ"},{"hex":"&#A765;","name":"LATIN SMALL LETTER THORN WITH STROKE","char":"ꝥ"},{"hex":"&#A766;","name":"LATIN CAPITAL LETTER THORN WITH STROKE THROUGH DESCENDER","char":"Ꝧ"},{"hex":"&#A767;","name":"LATIN SMALL LETTER THORN WITH STROKE THROUGH DESCENDER","char":"ꝧ"},{"hex":"&#A768;","name":"LATIN CAPITAL LETTER VEND","char":"Ꝩ"},{"hex":"&#A769;","name":"LATIN SMALL LETTER VEND","char":"ꝩ"},{"hex":"&#A76A;","name":"LATIN CAPITAL LETTER ET","char":"Ꝫ"},{"hex":"&#A76B;","name":"LATIN SMALL LETTER ET","char":"ꝫ"},{"hex":"&#A76C;","name":"LATIN CAPITAL LETTER IS","char":"Ꝭ"},{"hex":"&#A76D;","name":"LATIN SMALL LETTER IS","char":"ꝭ"},{"hex":"&#A76E;","name":"LATIN CAPITAL LETTER CON","char":"Ꝯ"},{"hex":"&#A76F;","name":"LATIN SMALL LETTER CON","char":"ꝯ"},{"hex":"&#A770;","name":"MODIFIER LETTER US","char":"ꝰ"},{"hex":"&#A771;","name":"LATIN SMALL LETTER DUM","char":"ꝱ"},{"hex":"&#A772;","name":"LATIN SMALL LETTER LUM","char":"ꝲ"},{"hex":"&#A773;","name":"LATIN SMALL LETTER MUM","char":"ꝳ"},{"hex":"&#A774;","name":"LATIN SMALL LETTER NUM","char":"ꝴ"},{"hex":"&#A775;","name":"LATIN SMALL LETTER RUM","char":"ꝵ"},{"hex":"&#A776;","name":"LATIN LETTER SMALL CAPITAL RUM","char":"ꝶ"},{"hex":"&#A777;","name":"LATIN SMALL LETTER TUM","char":"ꝷ"},{"hex":"&#A778;","name":"LATIN SMALL LETTER UM","char":"ꝸ"},{"hex":"&#A779;","name":"LATIN CAPITAL LETTER INSULAR D","char":"Ꝺ"},{"hex":"&#A77A;","name":"LATIN SMALL LETTER INSULAR D","char":"ꝺ"},{"hex":"&#A77B;","name":"LATIN CAPITAL LETTER INSULAR F","char":"Ꝼ"},{"hex":"&#A77C;","name":"LATIN SMALL LETTER INSULAR F","char":"ꝼ"},{"hex":"&#A77D;","name":"LATIN CAPITAL LETTER INSULAR G","char":"Ᵹ"},{"hex":"&#A77E;","name":"LATIN CAPITAL LETTER TURNED INSULAR G","char":"Ꝿ"},{"hex":"&#A77F;","name":"LATIN SMALL LETTER TURNED INSULAR G","char":"ꝿ"},{"hex":"&#A780;","name":"LATIN CAPITAL LETTER TURNED L","char":"Ꞁ"},{"hex":"&#A781;","name":"LATIN SMALL LETTER TURNED L","char":"ꞁ"},{"hex":"&#A782;","name":"LATIN CAPITAL LETTER INSULAR R","char":"Ꞃ"},{"hex":"&#A783;","name":"LATIN SMALL LETTER INSULAR R","char":"ꞃ"},{"hex":"&#A784;","name":"LATIN CAPITAL LETTER INSULAR S","char":"Ꞅ"},{"hex":"&#A785;","name":"LATIN SMALL LETTER INSULAR S","char":"ꞅ"},{"hex":"&#A786;","name":"LATIN CAPITAL LETTER INSULAR T","char":"Ꞇ"},{"hex":"&#A787;","name":"LATIN SMALL LETTER INSULAR T","char":"ꞇ"},{"hex":"&#A788;","name":"MODIFIER LETTER LOW CIRCUMFLEX ACCENT","char":"ꞈ"},{"hex":"&#A789;","name":"MODIFIER LETTER COLON","char":"꞉"},{"hex":"&#A78A;","name":"MODIFIER LETTER SHORT EQUALS SIGN","char":"꞊"},{"hex":"&#A78B;","name":"LATIN CAPITAL LETTER SALTILLO","char":"Ꞌ"},{"hex":"&#A78C;","name":"LATIN SMALL LETTER SALTILLO","char":"ꞌ"},{"hex":"&#A78D;","name":"LATIN CAPITAL LETTER TURNED H","char":"Ɥ"},{"hex":"&#A78E;","name":"LATIN SMALL LETTER L WITH RETROFLEX HOOK AND BELT","char":"ꞎ"},{"hex":"&#A790;","name":"LATIN CAPITAL LETTER N WITH DESCENDER","char":"Ꞑ"},{"hex":"&#A791;","name":"LATIN SMALL LETTER N WITH DESCENDER","char":"ꞑ"},{"hex":"&#A7A0;","name":"LATIN CAPITAL LETTER G WITH OBLIQUE STROKE","char":"Ꞡ"},{"hex":"&#A7A1;","name":"LATIN SMALL LETTER G WITH OBLIQUE STROKE","char":"ꞡ"},{"hex":"&#A7A2;","name":"LATIN CAPITAL LETTER K WITH OBLIQUE STROKE","char":"Ꞣ"},{"hex":"&#A7A3;","name":"LATIN SMALL LETTER K WITH OBLIQUE STROKE","char":"ꞣ"},{"hex":"&#A7A4;","name":"LATIN CAPITAL LETTER N WITH OBLIQUE STROKE","char":"Ꞥ"},{"hex":"&#A7A5;","name":"LATIN SMALL LETTER N WITH OBLIQUE STROKE","char":"ꞥ"},{"hex":"&#A7A6;","name":"LATIN CAPITAL LETTER R WITH OBLIQUE STROKE","char":"Ꞧ"},{"hex":"&#A7A7;","name":"LATIN SMALL LETTER R WITH OBLIQUE STROKE","char":"ꞧ"},{"hex":"&#A7A8;","name":"LATIN CAPITAL LETTER S WITH OBLIQUE STROKE","char":"Ꞩ"},{"hex":"&#A7A9;","name":"LATIN SMALL LETTER S WITH OBLIQUE STROKE","char":"ꞩ"},{"hex":"&#A7FA;","name":"LATIN LETTER SMALL CAPITAL TURNED M","char":"ꟺ"},{"hex":"&#A7FB;","name":"LATIN EPIGRAPHIC LETTER REVERSED F","char":"ꟻ"},{"hex":"&#A7FC;","name":"LATIN EPIGRAPHIC LETTER REVERSED P","char":"ꟼ"},{"hex":"&#A7FD;","name":"LATIN EPIGRAPHIC LETTER INVERTED M","char":"ꟽ"},{"hex":"&#A7FE;","name":"LATIN EPIGRAPHIC LETTER I LONGA","char":"ꟾ"},{"hex":"&#A7FF;","name":"LATIN EPIGRAPHIC LETTER ARCHAIC M","char":"ꟿ"},{"hex":"&#1E00;","name":"LATIN CAPITAL LETTER A WITH RING BELOW","char":"Ḁ"},{"hex":"&#1E01;","name":"LATIN SMALL LETTER A WITH RING BELOW","char":"ḁ"},{"hex":"&#1E02;","name":"LATIN CAPITAL LETTER B WITH DOT ABOVE","char":"Ḃ"},{"hex":"&#1E03;","name":"LATIN SMALL LETTER B WITH DOT ABOVE","char":"ḃ"},{"hex":"&#1E04;","name":"LATIN CAPITAL LETTER B WITH DOT BELOW","char":"Ḅ"},{"hex":"&#1E05;","name":"LATIN SMALL LETTER B WITH DOT BELOW","char":"ḅ"},{"hex":"&#1E06;","name":"LATIN CAPITAL LETTER B WITH LINE BELOW","char":"Ḇ"},{"hex":"&#1E07;","name":"LATIN SMALL LETTER B WITH LINE BELOW","char":"ḇ"},{"hex":"&#1E08;","name":"LATIN CAPITAL LETTER C WITH CEDILLA AND ACUTE","char":"Ḉ"},{"hex":"&#1E09;","name":"LATIN SMALL LETTER C WITH CEDILLA AND ACUTE","char":"ḉ"},{"hex":"&#1E0A;","name":"LATIN CAPITAL LETTER D WITH DOT ABOVE","char":"Ḋ"},{"hex":"&#1E0B;","name":"LATIN SMALL LETTER D WITH DOT ABOVE","char":"ḋ"},{"hex":"&#1E0C;","name":"LATIN CAPITAL LETTER D WITH DOT BELOW","char":"Ḍ"},{"hex":"&#1E0D;","name":"LATIN SMALL LETTER D WITH DOT BELOW","char":"ḍ"},{"hex":"&#1E0E;","name":"LATIN CAPITAL LETTER D WITH LINE BELOW","char":"Ḏ"},{"hex":"&#1E0F;","name":"LATIN SMALL LETTER D WITH LINE BELOW","char":"ḏ"},{"hex":"&#1E10;","name":"LATIN CAPITAL LETTER D WITH CEDILLA","char":"Ḑ"},{"hex":"&#1E11;","name":"LATIN SMALL LETTER D WITH CEDILLA","char":"ḑ"},{"hex":"&#1E12;","name":"LATIN CAPITAL LETTER D WITH CIRCUMFLEX BELOW","char":"Ḓ"},{"hex":"&#1E13;","name":"LATIN SMALL LETTER D WITH CIRCUMFLEX BELOW","char":"ḓ"},{"hex":"&#1E14;","name":"LATIN CAPITAL LETTER E WITH MACRON AND GRAVE","char":"Ḕ"},{"hex":"&#1E15;","name":"LATIN SMALL LETTER E WITH MACRON AND GRAVE","char":"ḕ"},{"hex":"&#1E16;","name":"LATIN CAPITAL LETTER E WITH MACRON AND ACUTE","char":"Ḗ"},{"hex":"&#1E17;","name":"LATIN SMALL LETTER E WITH MACRON AND ACUTE","char":"ḗ"},{"hex":"&#1E18;","name":"LATIN CAPITAL LETTER E WITH CIRCUMFLEX BELOW","char":"Ḙ"},{"hex":"&#1E19;","name":"LATIN SMALL LETTER E WITH CIRCUMFLEX BELOW","char":"ḙ"},{"hex":"&#1E1A;","name":"LATIN CAPITAL LETTER E WITH TILDE BELOW","char":"Ḛ"},{"hex":"&#1E1B;","name":"LATIN SMALL LETTER E WITH TILDE BELOW","char":"ḛ"},{"hex":"&#1E1C;","name":"LATIN CAPITAL LETTER E WITH CEDILLA AND BREVE","char":"Ḝ"},{"hex":"&#1E1D;","name":"LATIN SMALL LETTER E WITH CEDILLA AND BREVE","char":"ḝ"},{"hex":"&#1E1E;","name":"LATIN CAPITAL LETTER F WITH DOT ABOVE","char":"Ḟ"},{"hex":"&#1E1F;","name":"LATIN SMALL LETTER F WITH DOT ABOVE","char":"ḟ"},{"hex":"&#1E20;","name":"LATIN CAPITAL LETTER G WITH MACRON","char":"Ḡ"},{"hex":"&#1E21;","name":"LATIN SMALL LETTER G WITH MACRON","char":"ḡ"},{"hex":"&#1E22;","name":"LATIN CAPITAL LETTER H WITH DOT ABOVE","char":"Ḣ"},{"hex":"&#1E23;","name":"LATIN SMALL LETTER H WITH DOT ABOVE","char":"ḣ"},{"hex":"&#1E24;","name":"LATIN CAPITAL LETTER H WITH DOT BELOW","char":"Ḥ"},{"hex":"&#1E25;","name":"LATIN SMALL LETTER H WITH DOT BELOW","char":"ḥ"},{"hex":"&#1E26;","name":"LATIN CAPITAL LETTER H WITH DIAERESIS","char":"Ḧ"},{"hex":"&#1E27;","name":"LATIN SMALL LETTER H WITH DIAERESIS","char":"ḧ"},{"hex":"&#1E28;","name":"LATIN CAPITAL LETTER H WITH CEDILLA","char":"Ḩ"},{"hex":"&#1E29;","name":"LATIN SMALL LETTER H WITH CEDILLA","char":"ḩ"},{"hex":"&#1E2A;","name":"LATIN CAPITAL LETTER H WITH BREVE BELOW","char":"Ḫ"},{"hex":"&#1E2B;","name":"LATIN SMALL LETTER H WITH BREVE BELOW","char":"ḫ"},{"hex":"&#1E2C;","name":"LATIN CAPITAL LETTER I WITH TILDE BELOW","char":"Ḭ"},{"hex":"&#1E2D;","name":"LATIN SMALL LETTER I WITH TILDE BELOW","char":"ḭ"},{"hex":"&#1E2E;","name":"LATIN CAPITAL LETTER I WITH DIAERESIS AND ACUTE","char":"Ḯ"},{"hex":"&#1E2F;","name":"LATIN SMALL LETTER I WITH DIAERESIS AND ACUTE","char":"ḯ"},{"hex":"&#1E30;","name":"LATIN CAPITAL LETTER K WITH ACUTE","char":"Ḱ"},{"hex":"&#1E31;","name":"LATIN SMALL LETTER K WITH ACUTE","char":"ḱ"},{"hex":"&#1E32;","name":"LATIN CAPITAL LETTER K WITH DOT BELOW","char":"Ḳ"},{"hex":"&#1E33;","name":"LATIN SMALL LETTER K WITH DOT BELOW","char":"ḳ"},{"hex":"&#1E34;","name":"LATIN CAPITAL LETTER K WITH LINE BELOW","char":"Ḵ"},{"hex":"&#1E35;","name":"LATIN SMALL LETTER K WITH LINE BELOW","char":"ḵ"},{"hex":"&#1E36;","name":"LATIN CAPITAL LETTER L WITH DOT BELOW","char":"Ḷ"},{"hex":"&#1E37;","name":"LATIN SMALL LETTER L WITH DOT BELOW","char":"ḷ"},{"hex":"&#1E38;","name":"LATIN CAPITAL LETTER L WITH DOT BELOW AND MACRON","char":"Ḹ"},{"hex":"&#1E39;","name":"LATIN SMALL LETTER L WITH DOT BELOW AND MACRON","char":"ḹ"},{"hex":"&#1E3A;","name":"LATIN CAPITAL LETTER L WITH LINE BELOW","char":"Ḻ"},{"hex":"&#1E3B;","name":"LATIN SMALL LETTER L WITH LINE BELOW","char":"ḻ"},{"hex":"&#1E3C;","name":"LATIN CAPITAL LETTER L WITH CIRCUMFLEX BELOW","char":"Ḽ"},{"hex":"&#1E3D;","name":"LATIN SMALL LETTER L WITH CIRCUMFLEX BELOW","char":"ḽ"},{"hex":"&#1E3E;","name":"LATIN CAPITAL LETTER M WITH ACUTE","char":"Ḿ"},{"hex":"&#1E3F;","name":"LATIN SMALL LETTER M WITH ACUTE","char":"ḿ"},{"hex":"&#1E40;","name":"LATIN CAPITAL LETTER M WITH DOT ABOVE","char":"Ṁ"},{"hex":"&#1E41;","name":"LATIN SMALL LETTER M WITH DOT ABOVE","char":"ṁ"},{"hex":"&#1E42;","name":"LATIN CAPITAL LETTER M WITH DOT BELOW","char":"Ṃ"},{"hex":"&#1E43;","name":"LATIN SMALL LETTER M WITH DOT BELOW","char":"ṃ"},{"hex":"&#1E44;","name":"LATIN CAPITAL LETTER N WITH DOT ABOVE","char":"Ṅ"},{"hex":"&#1E45;","name":"LATIN SMALL LETTER N WITH DOT ABOVE","char":"ṅ"},{"hex":"&#1E46;","name":"LATIN CAPITAL LETTER N WITH DOT BELOW","char":"Ṇ"},{"hex":"&#1E47;","name":"LATIN SMALL LETTER N WITH DOT BELOW","char":"ṇ"},{"hex":"&#1E48;","name":"LATIN CAPITAL LETTER N WITH LINE BELOW","char":"Ṉ"},{"hex":"&#1E49;","name":"LATIN SMALL LETTER N WITH LINE BELOW","char":"ṉ"},{"hex":"&#1E4A;","name":"LATIN CAPITAL LETTER N WITH CIRCUMFLEX BELOW","char":"Ṋ"},{"hex":"&#1E4B;","name":"LATIN SMALL LETTER N WITH CIRCUMFLEX BELOW","char":"ṋ"},{"hex":"&#1E4C;","name":"LATIN CAPITAL LETTER O WITH TILDE AND ACUTE","char":"Ṍ"},{"hex":"&#1E4D;","name":"LATIN SMALL LETTER O WITH TILDE AND ACUTE","char":"ṍ"},{"hex":"&#1E4E;","name":"LATIN CAPITAL LETTER O WITH TILDE AND DIAERESIS","char":"Ṏ"},{"hex":"&#1E4F;","name":"LATIN SMALL LETTER O WITH TILDE AND DIAERESIS","char":"ṏ"},{"hex":"&#1E50;","name":"LATIN CAPITAL LETTER O WITH MACRON AND GRAVE","char":"Ṑ"},{"hex":"&#1E51;","name":"LATIN SMALL LETTER O WITH MACRON AND GRAVE","char":"ṑ"},{"hex":"&#1E52;","name":"LATIN CAPITAL LETTER O WITH MACRON AND ACUTE","char":"Ṓ"},{"hex":"&#1E53;","name":"LATIN SMALL LETTER O WITH MACRON AND ACUTE","char":"ṓ"},{"hex":"&#1E54;","name":"LATIN CAPITAL LETTER P WITH ACUTE","char":"Ṕ"},{"hex":"&#1E55;","name":"LATIN SMALL LETTER P WITH ACUTE","char":"ṕ"},{"hex":"&#1E56;","name":"LATIN CAPITAL LETTER P WITH DOT ABOVE","char":"Ṗ"},{"hex":"&#1E57;","name":"LATIN SMALL LETTER P WITH DOT ABOVE","char":"ṗ"},{"hex":"&#1E58;","name":"LATIN CAPITAL LETTER R WITH DOT ABOVE","char":"Ṙ"},{"hex":"&#1E59;","name":"LATIN SMALL LETTER R WITH DOT ABOVE","char":"ṙ"},{"hex":"&#1E5A;","name":"LATIN CAPITAL LETTER R WITH DOT BELOW","char":"Ṛ"},{"hex":"&#1E5B;","name":"LATIN SMALL LETTER R WITH DOT BELOW","char":"ṛ"},{"hex":"&#1E5C;","name":"LATIN CAPITAL LETTER R WITH DOT BELOW AND MACRON","char":"Ṝ"},{"hex":"&#1E5D;","name":"LATIN SMALL LETTER R WITH DOT BELOW AND MACRON","char":"ṝ"},{"hex":"&#1E5E;","name":"LATIN CAPITAL LETTER R WITH LINE BELOW","char":"Ṟ"},{"hex":"&#1E5F;","name":"LATIN SMALL LETTER R WITH LINE BELOW","char":"ṟ"},{"hex":"&#1E60;","name":"LATIN CAPITAL LETTER S WITH DOT ABOVE","char":"Ṡ"},{"hex":"&#1E61;","name":"LATIN SMALL LETTER S WITH DOT ABOVE","char":"ṡ"},{"hex":"&#1E62;","name":"LATIN CAPITAL LETTER S WITH DOT BELOW","char":"Ṣ"},{"hex":"&#1E63;","name":"LATIN SMALL LETTER S WITH DOT BELOW","char":"ṣ"},{"hex":"&#1E64;","name":"LATIN CAPITAL LETTER S WITH ACUTE AND DOT ABOVE","char":"Ṥ"},{"hex":"&#1E65;","name":"LATIN SMALL LETTER S WITH ACUTE AND DOT ABOVE","char":"ṥ"},{"hex":"&#1E66;","name":"LATIN CAPITAL LETTER S WITH CARON AND DOT ABOVE","char":"Ṧ"},{"hex":"&#1E67;","name":"LATIN SMALL LETTER S WITH CARON AND DOT ABOVE","char":"ṧ"},{"hex":"&#1E68;","name":"LATIN CAPITAL LETTER S WITH DOT BELOW AND DOT ABOVE","char":"Ṩ"},{"hex":"&#1E69;","name":"LATIN SMALL LETTER S WITH DOT BELOW AND DOT ABOVE","char":"ṩ"},{"hex":"&#1E6A;","name":"LATIN CAPITAL LETTER T WITH DOT ABOVE","char":"Ṫ"},{"hex":"&#1E6B;","name":"LATIN SMALL LETTER T WITH DOT ABOVE","char":"ṫ"},{"hex":"&#1E6C;","name":"LATIN CAPITAL LETTER T WITH DOT BELOW","char":"Ṭ"},{"hex":"&#1E6D;","name":"LATIN SMALL LETTER T WITH DOT BELOW","char":"ṭ"},{"hex":"&#1E6E;","name":"LATIN CAPITAL LETTER T WITH LINE BELOW","char":"Ṯ"},{"hex":"&#1E6F;","name":"LATIN SMALL LETTER T WITH LINE BELOW","char":"ṯ"},{"hex":"&#1E70;","name":"LATIN CAPITAL LETTER T WITH CIRCUMFLEX BELOW","char":"Ṱ"},{"hex":"&#1E71;","name":"LATIN SMALL LETTER T WITH CIRCUMFLEX BELOW","char":"ṱ"},{"hex":"&#1E72;","name":"LATIN CAPITAL LETTER U WITH DIAERESIS BELOW","char":"Ṳ"},{"hex":"&#1E73;","name":"LATIN SMALL LETTER U WITH DIAERESIS BELOW","char":"ṳ"},{"hex":"&#1E74;","name":"LATIN CAPITAL LETTER U WITH TILDE BELOW","char":"Ṵ"},{"hex":"&#1E75;","name":"LATIN SMALL LETTER U WITH TILDE BELOW","char":"ṵ"},{"hex":"&#1E76;","name":"LATIN CAPITAL LETTER U WITH CIRCUMFLEX BELOW","char":"Ṷ"},{"hex":"&#1E77;","name":"LATIN SMALL LETTER U WITH CIRCUMFLEX BELOW","char":"ṷ"},{"hex":"&#1E78;","name":"LATIN CAPITAL LETTER U WITH TILDE AND ACUTE","char":"Ṹ"},{"hex":"&#1E79;","name":"LATIN SMALL LETTER U WITH TILDE AND ACUTE","char":"ṹ"},{"hex":"&#1E7A;","name":"LATIN CAPITAL LETTER U WITH MACRON AND DIAERESIS","char":"Ṻ"},{"hex":"&#1E7B;","name":"LATIN SMALL LETTER U WITH MACRON AND DIAERESIS","char":"ṻ"},{"hex":"&#1E7C;","name":"LATIN CAPITAL LETTER V WITH TILDE","char":"Ṽ"},{"hex":"&#1E7D;","name":"LATIN SMALL LETTER V WITH TILDE","char":"ṽ"},{"hex":"&#1E7E;","name":"LATIN CAPITAL LETTER V WITH DOT BELOW","char":"Ṿ"},{"hex":"&#1E7F;","name":"LATIN SMALL LETTER V WITH DOT BELOW","char":"ṿ"},{"hex":"&#1E80;","name":"LATIN CAPITAL LETTER W WITH GRAVE (present in WGL4)","char":"Ẁ"},{"hex":"&#1E81;","name":"LATIN SMALL LETTER W WITH GRAVE (present in WGL4)","char":"ẁ"},{"hex":"&#1E82;","name":"LATIN CAPITAL LETTER W WITH ACUTE (present in WGL4)","char":"Ẃ"},{"hex":"&#1E83;","name":"LATIN SMALL LETTER W WITH ACUTE (present in WGL4)","char":"ẃ"},{"hex":"&#1E84;","name":"LATIN CAPITAL LETTER W WITH DIAERESIS (present in WGL4)","char":"Ẅ"},{"hex":"&#1E85;","name":"LATIN SMALL LETTER W WITH DIAERESIS (present in WGL4)","char":"ẅ"},{"hex":"&#1E86;","name":"LATIN CAPITAL LETTER W WITH DOT ABOVE","char":"Ẇ"},{"hex":"&#1E87;","name":"LATIN SMALL LETTER W WITH DOT ABOVE","char":"ẇ"},{"hex":"&#1E88;","name":"LATIN CAPITAL LETTER W WITH DOT BELOW","char":"Ẉ"},{"hex":"&#1E89;","name":"LATIN SMALL LETTER W WITH DOT BELOW","char":"ẉ"},{"hex":"&#1E8A;","name":"LATIN CAPITAL LETTER X WITH DOT ABOVE","char":"Ẋ"},{"hex":"&#1E8B;","name":"LATIN SMALL LETTER X WITH DOT ABOVE","char":"ẋ"},{"hex":"&#1E8C;","name":"LATIN CAPITAL LETTER X WITH DIAERESIS","char":"Ẍ"},{"hex":"&#1E8D;","name":"LATIN SMALL LETTER X WITH DIAERESIS","char":"ẍ"},{"hex":"&#1E8E;","name":"LATIN CAPITAL LETTER Y WITH DOT ABOVE","char":"Ẏ"},{"hex":"&#1E8F;","name":"LATIN SMALL LETTER Y WITH DOT ABOVE","char":"ẏ"},{"hex":"&#1E90;","name":"LATIN CAPITAL LETTER Z WITH CIRCUMFLEX","char":"Ẑ"},{"hex":"&#1E91;","name":"LATIN SMALL LETTER Z WITH CIRCUMFLEX","char":"ẑ"},{"hex":"&#1E92;","name":"LATIN CAPITAL LETTER Z WITH DOT BELOW","char":"Ẓ"},{"hex":"&#1E93;","name":"LATIN SMALL LETTER Z WITH DOT BELOW","char":"ẓ"},{"hex":"&#1E94;","name":"LATIN CAPITAL LETTER Z WITH LINE BELOW","char":"Ẕ"},{"hex":"&#1E95;","name":"LATIN SMALL LETTER Z WITH LINE BELOW","char":"ẕ"},{"hex":"&#1E96;","name":"LATIN SMALL LETTER H WITH LINE BELOW","char":"ẖ"},{"hex":"&#1E97;","name":"LATIN SMALL LETTER T WITH DIAERESIS","char":"ẗ"},{"hex":"&#1E98;","name":"LATIN SMALL LETTER W WITH RING ABOVE","char":"ẘ"},{"hex":"&#1E99;","name":"LATIN SMALL LETTER Y WITH RING ABOVE","char":"ẙ"},{"hex":"&#1E9A;","name":"LATIN SMALL LETTER A WITH RIGHT HALF RING","char":"ẚ"},{"hex":"&#1E9B;","name":"LATIN SMALL LETTER LONG S WITH DOT ABOVE","char":"ẛ"},{"hex":"&#1E9C;","name":"LATIN SMALL LETTER LONG S WITH DIAGONAL STROKE","char":"ẜ"},{"hex":"&#1E9D;","name":"LATIN SMALL LETTER LONG S WITH HIGH STROKE","char":"ẝ"},{"hex":"&#1E9E;","name":"LATIN CAPITAL LETTER SHARP S","char":"ẞ"},{"hex":"&#1E9F;","name":"LATIN SMALL LETTER DELTA","char":"ẟ"},{"hex":"&#1EA0;","name":"LATIN CAPITAL LETTER A WITH DOT BELOW","char":"Ạ"},{"hex":"&#1EA1;","name":"LATIN SMALL LETTER A WITH DOT BELOW","char":"ạ"},{"hex":"&#1EA2;","name":"LATIN CAPITAL LETTER A WITH HOOK ABOVE","char":"Ả"},{"hex":"&#1EA3;","name":"LATIN SMALL LETTER A WITH HOOK ABOVE","char":"ả"},{"hex":"&#1EA4;","name":"LATIN CAPITAL LETTER A WITH CIRCUMFLEX AND ACUTE","char":"Ấ"},{"hex":"&#1EA5;","name":"LATIN SMALL LETTER A WITH CIRCUMFLEX AND ACUTE","char":"ấ"},{"hex":"&#1EA6;","name":"LATIN CAPITAL LETTER A WITH CIRCUMFLEX AND GRAVE","char":"Ầ"},{"hex":"&#1EA7;","name":"LATIN SMALL LETTER A WITH CIRCUMFLEX AND GRAVE","char":"ầ"},{"hex":"&#1EA8;","name":"LATIN CAPITAL LETTER A WITH CIRCUMFLEX AND HOOK ABOVE","char":"Ẩ"},{"hex":"&#1EA9;","name":"LATIN SMALL LETTER A WITH CIRCUMFLEX AND HOOK ABOVE","char":"ẩ"},{"hex":"&#1EAA;","name":"LATIN CAPITAL LETTER A WITH CIRCUMFLEX AND TILDE","char":"Ẫ"},{"hex":"&#1EAB;","name":"LATIN SMALL LETTER A WITH CIRCUMFLEX AND TILDE","char":"ẫ"},{"hex":"&#1EAC;","name":"LATIN CAPITAL LETTER A WITH CIRCUMFLEX AND DOT BELOW","char":"Ậ"},{"hex":"&#1EAD;","name":"LATIN SMALL LETTER A WITH CIRCUMFLEX AND DOT BELOW","char":"ậ"},{"hex":"&#1EAE;","name":"LATIN CAPITAL LETTER A WITH BREVE AND ACUTE","char":"Ắ"},{"hex":"&#1EAF;","name":"LATIN SMALL LETTER A WITH BREVE AND ACUTE","char":"ắ"},{"hex":"&#1EB0;","name":"LATIN CAPITAL LETTER A WITH BREVE AND GRAVE","char":"Ằ"},{"hex":"&#1EB1;","name":"LATIN SMALL LETTER A WITH BREVE AND GRAVE","char":"ằ"},{"hex":"&#1EB2;","name":"LATIN CAPITAL LETTER A WITH BREVE AND HOOK ABOVE","char":"Ẳ"},{"hex":"&#1EB3;","name":"LATIN SMALL LETTER A WITH BREVE AND HOOK ABOVE","char":"ẳ"},{"hex":"&#1EB4;","name":"LATIN CAPITAL LETTER A WITH BREVE AND TILDE","char":"Ẵ"},{"hex":"&#1EB5;","name":"LATIN SMALL LETTER A WITH BREVE AND TILDE","char":"ẵ"},{"hex":"&#1EB6;","name":"LATIN CAPITAL LETTER A WITH BREVE AND DOT BELOW","char":"Ặ"},{"hex":"&#1EB7;","name":"LATIN SMALL LETTER A WITH BREVE AND DOT BELOW","char":"ặ"},{"hex":"&#1EB8;","name":"LATIN CAPITAL LETTER E WITH DOT BELOW","char":"Ẹ"},{"hex":"&#1EB9;","name":"LATIN SMALL LETTER E WITH DOT BELOW","char":"ẹ"},{"hex":"&#1EBA;","name":"LATIN CAPITAL LETTER E WITH HOOK ABOVE","char":"Ẻ"},{"hex":"&#1EBB;","name":"LATIN SMALL LETTER E WITH HOOK ABOVE","char":"ẻ"},{"hex":"&#1EBC;","name":"LATIN CAPITAL LETTER E WITH TILDE","char":"Ẽ"},{"hex":"&#1EBD;","name":"LATIN SMALL LETTER E WITH TILDE","char":"ẽ"},{"hex":"&#1EBE;","name":"LATIN CAPITAL LETTER E WITH CIRCUMFLEX AND ACUTE","char":"Ế"},{"hex":"&#1EBF;","name":"LATIN SMALL LETTER E WITH CIRCUMFLEX AND ACUTE","char":"ế"},{"hex":"&#1EC0;","name":"LATIN CAPITAL LETTER E WITH CIRCUMFLEX AND GRAVE","char":"Ề"},{"hex":"&#1EC1;","name":"LATIN SMALL LETTER E WITH CIRCUMFLEX AND GRAVE","char":"ề"},{"hex":"&#1EC2;","name":"LATIN CAPITAL LETTER E WITH CIRCUMFLEX AND HOOK ABOVE","char":"Ể"},{"hex":"&#1EC3;","name":"LATIN SMALL LETTER E WITH CIRCUMFLEX AND HOOK ABOVE","char":"ể"},{"hex":"&#1EC4;","name":"LATIN CAPITAL LETTER E WITH CIRCUMFLEX AND TILDE","char":"Ễ"},{"hex":"&#1EC5;","name":"LATIN SMALL LETTER E WITH CIRCUMFLEX AND TILDE","char":"ễ"},{"hex":"&#1EC6;","name":"LATIN CAPITAL LETTER E WITH CIRCUMFLEX AND DOT BELOW","char":"Ệ"},{"hex":"&#1EC7;","name":"LATIN SMALL LETTER E WITH CIRCUMFLEX AND DOT BELOW","char":"ệ"},{"hex":"&#1EC8;","name":"LATIN CAPITAL LETTER I WITH HOOK ABOVE","char":"Ỉ"},{"hex":"&#1EC9;","name":"LATIN SMALL LETTER I WITH HOOK ABOVE","char":"ỉ"},{"hex":"&#1ECA;","name":"LATIN CAPITAL LETTER I WITH DOT BELOW","char":"Ị"},{"hex":"&#1ECB;","name":"LATIN SMALL LETTER I WITH DOT BELOW","char":"ị"},{"hex":"&#1ECC;","name":"LATIN CAPITAL LETTER O WITH DOT BELOW","char":"Ọ"},{"hex":"&#1ECD;","name":"LATIN SMALL LETTER O WITH DOT BELOW","char":"ọ"},{"hex":"&#1ECE;","name":"LATIN CAPITAL LETTER O WITH HOOK ABOVE","char":"Ỏ"},{"hex":"&#1ECF;","name":"LATIN SMALL LETTER O WITH HOOK ABOVE","char":"ỏ"},{"hex":"&#1ED0;","name":"LATIN CAPITAL LETTER O WITH CIRCUMFLEX AND ACUTE","char":"Ố"},{"hex":"&#1ED1;","name":"LATIN SMALL LETTER O WITH CIRCUMFLEX AND ACUTE","char":"ố"},{"hex":"&#1ED2;","name":"LATIN CAPITAL LETTER O WITH CIRCUMFLEX AND GRAVE","char":"Ồ"},{"hex":"&#1ED3;","name":"LATIN SMALL LETTER O WITH CIRCUMFLEX AND GRAVE","char":"ồ"},{"hex":"&#1ED4;","name":"LATIN CAPITAL LETTER O WITH CIRCUMFLEX AND HOOK ABOVE","char":"Ổ"},{"hex":"&#1ED5;","name":"LATIN SMALL LETTER O WITH CIRCUMFLEX AND HOOK ABOVE","char":"ổ"},{"hex":"&#1ED6;","name":"LATIN CAPITAL LETTER O WITH CIRCUMFLEX AND TILDE","char":"Ỗ"},{"hex":"&#1ED7;","name":"LATIN SMALL LETTER O WITH CIRCUMFLEX AND TILDE","char":"ỗ"},{"hex":"&#1ED8;","name":"LATIN CAPITAL LETTER O WITH CIRCUMFLEX AND DOT BELOW","char":"Ộ"},{"hex":"&#1ED9;","name":"LATIN SMALL LETTER O WITH CIRCUMFLEX AND DOT BELOW","char":"ộ"},{"hex":"&#1EDA;","name":"LATIN CAPITAL LETTER O WITH HORN AND ACUTE","char":"Ớ"},{"hex":"&#1EDB;","name":"LATIN SMALL LETTER O WITH HORN AND ACUTE","char":"ớ"},{"hex":"&#1EDC;","name":"LATIN CAPITAL LETTER O WITH HORN AND GRAVE","char":"Ờ"},{"hex":"&#1EDD;","name":"LATIN SMALL LETTER O WITH HORN AND GRAVE","char":"ờ"},{"hex":"&#1EDE;","name":"LATIN CAPITAL LETTER O WITH HORN AND HOOK ABOVE","char":"Ở"},{"hex":"&#1EDF;","name":"LATIN SMALL LETTER O WITH HORN AND HOOK ABOVE","char":"ở"},{"hex":"&#1EE0;","name":"LATIN CAPITAL LETTER O WITH HORN AND TILDE","char":"Ỡ"},{"hex":"&#1EE1;","name":"LATIN SMALL LETTER O WITH HORN AND TILDE","char":"ỡ"},{"hex":"&#1EE2;","name":"LATIN CAPITAL LETTER O WITH HORN AND DOT BELOW","char":"Ợ"},{"hex":"&#1EE3;","name":"LATIN SMALL LETTER O WITH HORN AND DOT BELOW","char":"ợ"},{"hex":"&#1EE4;","name":"LATIN CAPITAL LETTER U WITH DOT BELOW","char":"Ụ"},{"hex":"&#1EE5;","name":"LATIN SMALL LETTER U WITH DOT BELOW","char":"ụ"},{"hex":"&#1EE6;","name":"LATIN CAPITAL LETTER U WITH HOOK ABOVE","char":"Ủ"},{"hex":"&#1EE7;","name":"LATIN SMALL LETTER U WITH HOOK ABOVE","char":"ủ"},{"hex":"&#1EE8;","name":"LATIN CAPITAL LETTER U WITH HORN AND ACUTE","char":"Ứ"},{"hex":"&#1EE9;","name":"LATIN SMALL LETTER U WITH HORN AND ACUTE","char":"ứ"},{"hex":"&#1EEA;","name":"LATIN CAPITAL LETTER U WITH HORN AND GRAVE","char":"Ừ"},{"hex":"&#1EEB;","name":"LATIN SMALL LETTER U WITH HORN AND GRAVE","char":"ừ"},{"hex":"&#1EEC;","name":"LATIN CAPITAL LETTER U WITH HORN AND HOOK ABOVE","char":"Ử"},{"hex":"&#1EED;","name":"LATIN SMALL LETTER U WITH HORN AND HOOK ABOVE","char":"ử"},{"hex":"&#1EEE;","name":"LATIN CAPITAL LETTER U WITH HORN AND TILDE","char":"Ữ"},{"hex":"&#1EEF;","name":"LATIN SMALL LETTER U WITH HORN AND TILDE","char":"ữ"},{"hex":"&#1EF0;","name":"LATIN CAPITAL LETTER U WITH HORN AND DOT BELOW","char":"Ự"},{"hex":"&#1EF1;","name":"LATIN SMALL LETTER U WITH HORN AND DOT BELOW","char":"ự"},{"hex":"&#1EF2;","name":"LATIN CAPITAL LETTER Y WITH GRAVE (present in WGL4)","char":"Ỳ"},{"hex":"&#1EF3;","name":"LATIN SMALL LETTER Y WITH GRAVE (present in WGL4)","char":"ỳ"},{"hex":"&#1EF4;","name":"LATIN CAPITAL LETTER Y WITH DOT BELOW","char":"Ỵ"},{"hex":"&#1EF5;","name":"LATIN SMALL LETTER Y WITH DOT BELOW","char":"ỵ"},{"hex":"&#1EF6;","name":"LATIN CAPITAL LETTER Y WITH HOOK ABOVE","char":"Ỷ"},{"hex":"&#1EF7;","name":"LATIN SMALL LETTER Y WITH HOOK ABOVE","char":"ỷ"},{"hex":"&#1EF8;","name":"LATIN CAPITAL LETTER Y WITH TILDE","char":"Ỹ"},{"hex":"&#1EF9;","name":"LATIN SMALL LETTER Y WITH TILDE","char":"ỹ"},{"hex":"&#1EFA;","name":"LATIN CAPITAL LETTER MIDDLE-WELSH LL","char":"Ỻ"},{"hex":"&#1EFB;","name":"LATIN SMALL LETTER MIDDLE-WELSH LL","char":"ỻ"},{"hex":"&#1EFC;","name":"LATIN CAPITAL LETTER MIDDLE-WELSH V","char":"Ỽ"},{"hex":"&#1EFD;","name":"LATIN SMALL LETTER MIDDLE-WELSH V","char":"ỽ"},{"hex":"&#1EFE;","name":"LATIN CAPITAL LETTER Y WITH LOOP","char":"Ỿ"},{"hex":"&#1EFF;","name":"LATIN SMALL LETTER Y WITH LOOP","char":"ỿ"}],"Arrows":[{"entity":"&larr;","hex":"&#2190;","name":"LEFTWARDS ARROW","char":"←"},{"entity":"&uarr;","hex":"&#2191;","name":"UPWARDS ARROW","char":"↑"},{"entity":"&rarr;","hex":"&#2192;","name":"RIGHTWARDS ARROW","char":"→"},{"entity":"&darr;","hex":"&#2193;","name":"DOWNWARDS ARROW","char":"↓"},{"entity":"&harr;","hex":"&#2194;","name":"LEFT RIGHT ARROW","char":"↔"},{"hex":"&#2195;","name":"UP DOWN ARROW","char":"↕"},{"hex":"&#2196;","name":"NORTH WEST ARROW","char":"↖"},{"hex":"&#2197;","name":"NORTH EAST ARROW","char":"↗"},{"hex":"&#2198;","name":"SOUTH EAST ARROW","char":"↘"},{"hex":"&#2199;","name":"SOUTH WEST ARROW","char":"↙"},{"hex":"&#219A;","name":"LEFTWARDS ARROW WITH STROKE","char":"↚"},{"hex":"&#219B;","name":"RIGHTWARDS ARROW WITH STROKE","char":"↛"},{"hex":"&#219C;","name":"LEFTWARDS WAVE ARROW","char":"↜"},{"hex":"&#219D;","name":"RIGHTWARDS WAVE ARROW","char":"↝"},{"hex":"&#219E;","name":"LEFTWARDS TWO HEADED ARROW","char":"↞"},{"hex":"&#219F;","name":"UPWARDS TWO HEADED ARROW","char":"↟"},{"hex":"&#21A0;","name":"RIGHTWARDS TWO HEADED ARROW","char":"↠"},{"hex":"&#21A1;","name":"DOWNWARDS TWO HEADED ARROW","char":"↡"},{"hex":"&#21A2;","name":"LEFTWARDS ARROW WITH TAIL","char":"↢"},{"hex":"&#21A3;","name":"RIGHTWARDS ARROW WITH TAIL","char":"↣"},{"hex":"&#21A4;","name":"LEFTWARDS ARROW FROM BAR","char":"↤"},{"hex":"&#21A5;","name":"UPWARDS ARROW FROM BAR","char":"↥"},{"hex":"&#21A6;","name":"RIGHTWARDS ARROW FROM BAR","char":"↦"},{"hex":"&#21A7;","name":"DOWNWARDS ARROW FROM BAR","char":"↧"},{"hex":"&#21A8;","name":"UP DOWN ARROW WITH BASE","char":"↨"},{"hex":"&#21A9;","name":"LEFTWARDS ARROW WITH HOOK","char":"↩"},{"hex":"&#21AA;","name":"RIGHTWARDS ARROW WITH HOOK","char":"↪"},{"hex":"&#21AB;","name":"LEFTWARDS ARROW WITH LOOP","char":"↫"},{"hex":"&#21AC;","name":"RIGHTWARDS ARROW WITH LOOP","char":"↬"},{"hex":"&#21AD;","name":"LEFT RIGHT WAVE ARROW","char":"↭"},{"hex":"&#21AE;","name":"LEFT RIGHT ARROW WITH STROKE","char":"↮"},{"hex":"&#21AF;","name":"DOWNWARDS ZIGZAG ARROW","char":"↯"},{"hex":"&#21B0;","name":"UPWARDS ARROW WITH TIP LEFTWARDS","char":"↰"},{"hex":"&#21B1;","name":"UPWARDS ARROW WITH TIP RIGHTWARDS","char":"↱"},{"hex":"&#21B2;","name":"DOWNWARDS ARROW WITH TIP LEFTWARDS","char":"↲"},{"hex":"&#21B3;","name":"DOWNWARDS ARROW WITH TIP RIGHTWARDS","char":"↳"},{"hex":"&#21B4;","name":"RIGHTWARDS ARROW WITH CORNER DOWNWARDS","char":"↴"},{"entity":"&crarr;","hex":"&#21B5;","name":"DOWNWARDS ARROW WITH CORNER LEFTWARDS","char":"↵"},{"hex":"&#21B6;","name":"ANTICLOCKWISE TOP SEMICIRCLE ARROW","char":"↶"},{"hex":"&#21B7;","name":"CLOCKWISE TOP SEMICIRCLE ARROW","char":"↷"},{"hex":"&#21B8;","name":"NORTH WEST ARROW TO LONG BAR","char":"↸"},{"hex":"&#21B9;","name":"LEFTWARDS ARROW TO BAR OVER RIGHTWARDS ARROW TO BAR","char":"↹"},{"hex":"&#21BA;","name":"ANTICLOCKWISE OPEN CIRCLE ARROW","char":"↺"},{"hex":"&#21BB;","name":"CLOCKWISE OPEN CIRCLE ARROW","char":"↻"},{"hex":"&#21BC;","name":"LEFTWARDS HARPOON WITH BARB UPWARDS","char":"↼"},{"hex":"&#21BD;","name":"LEFTWARDS HARPOON WITH BARB DOWNWARDS","char":"↽"},{"hex":"&#21BE;","name":"UPWARDS HARPOON WITH BARB RIGHTWARDS","char":"↾"},{"hex":"&#21BF;","name":"UPWARDS HARPOON WITH BARB LEFTWARDS","char":"↿"},{"hex":"&#21C0;","name":"RIGHTWARDS HARPOON WITH BARB UPWARDS","char":"⇀"},{"hex":"&#21C1;","name":"RIGHTWARDS HARPOON WITH BARB DOWNWARDS","char":"⇁"},{"hex":"&#21C2;","name":"DOWNWARDS HARPOON WITH BARB RIGHTWARDS","char":"⇂"},{"hex":"&#21C3;","name":"DOWNWARDS HARPOON WITH BARB LEFTWARDS","char":"⇃"},{"hex":"&#21C4;","name":"RIGHTWARDS ARROW OVER LEFTWARDS ARROW","char":"⇄"},{"hex":"&#21C5;","name":"UPWARDS ARROW LEFTWARDS OF DOWNWARDS ARROW","char":"⇅"},{"hex":"&#21C6;","name":"LEFTWARDS ARROW OVER RIGHTWARDS ARROW","char":"⇆"},{"hex":"&#21C7;","name":"LEFTWARDS PAIRED ARROWS","char":"⇇"},{"hex":"&#21C8;","name":"UPWARDS PAIRED ARROWS","char":"⇈"},{"hex":"&#21C9;","name":"RIGHTWARDS PAIRED ARROWS","char":"⇉"},{"hex":"&#21CA;","name":"DOWNWARDS PAIRED ARROWS","char":"⇊"},{"hex":"&#21CB;","name":"LEFTWARDS HARPOON OVER RIGHTWARDS HARPOON","char":"⇋"},{"hex":"&#21CC;","name":"RIGHTWARDS HARPOON OVER LEFTWARDS HARPOON","char":"⇌"},{"hex":"&#21CD;","name":"LEFTWARDS DOUBLE ARROW WITH STROKE","char":"⇍"},{"hex":"&#21CE;","name":"LEFT RIGHT DOUBLE ARROW WITH STROKE","char":"⇎"},{"hex":"&#21CF;","name":"RIGHTWARDS DOUBLE ARROW WITH STROKE","char":"⇏"},{"entity":"&lArr;","hex":"&#21D0;","name":"LEFTWARDS DOUBLE ARROW","char":"⇐"},{"entity":"&uArr;","hex":"&#21D1;","name":"UPWARDS DOUBLE ARROW","char":"⇑"},{"entity":"&rArr;","hex":"&#21D2;","name":"RIGHTWARDS DOUBLE ARROW","char":"⇒"},{"entity":"&dArr;","hex":"&#21D3;","name":"DOWNWARDS DOUBLE ARROW","char":"⇓"},{"entity":"&hArr;","hex":"&#21D4;","name":"LEFT RIGHT DOUBLE ARROW","char":"⇔"},{"hex":"&#21D5;","name":"UP DOWN DOUBLE ARROW","char":"⇕"},{"hex":"&#21D6;","name":"NORTH WEST DOUBLE ARROW","char":"⇖"},{"hex":"&#21D7;","name":"NORTH EAST DOUBLE ARROW","char":"⇗"},{"hex":"&#21D8;","name":"SOUTH EAST DOUBLE ARROW","char":"⇘"},{"hex":"&#21D9;","name":"SOUTH WEST DOUBLE ARROW","char":"⇙"},{"hex":"&#21DA;","name":"LEFTWARDS TRIPLE ARROW","char":"⇚"},{"hex":"&#21DB;","name":"RIGHTWARDS TRIPLE ARROW","char":"⇛"},{"hex":"&#21DC;","name":"LEFTWARDS SQUIGGLE ARROW","char":"⇜"},{"hex":"&#21DD;","name":"RIGHTWARDS SQUIGGLE ARROW","char":"⇝"},{"hex":"&#21DE;","name":"UPWARDS ARROW WITH DOUBLE STROKE","char":"⇞"},{"hex":"&#21DF;","name":"DOWNWARDS ARROW WITH DOUBLE STROKE","char":"⇟"},{"hex":"&#21E0;","name":"LEFTWARDS DASHED ARROW","char":"⇠"},{"hex":"&#21E1;","name":"UPWARDS DASHED ARROW","char":"⇡"},{"hex":"&#21E2;","name":"RIGHTWARDS DASHED ARROW","char":"⇢"},{"hex":"&#21E3;","name":"DOWNWARDS DASHED ARROW","char":"⇣"},{"hex":"&#21E4;","name":"LEFTWARDS ARROW TO BAR","char":"⇤"},{"hex":"&#21E5;","name":"RIGHTWARDS ARROW TO BAR","char":"⇥"},{"hex":"&#21E6;","name":"LEFTWARDS WHITE ARROW","char":"⇦"},{"hex":"&#21E7;","name":"UPWARDS WHITE ARROW","char":"⇧"},{"hex":"&#21E8;","name":"RIGHTWARDS WHITE ARROW","char":"⇨"},{"hex":"&#21E9;","name":"DOWNWARDS WHITE ARROW","char":"⇩"},{"hex":"&#21EA;","name":"UPWARDS WHITE ARROW FROM BAR","char":"⇪"},{"hex":"&#21EB;","name":"UPWARDS WHITE ARROW ON PEDESTAL","char":"⇫"},{"hex":"&#21EC;","name":"UPWARDS WHITE ARROW ON PEDESTAL WITH HORIZONTAL BAR","char":"⇬"},{"hex":"&#21ED;","name":"UPWARDS WHITE ARROW ON PEDESTAL WITH VERTICAL BAR","char":"⇭"},{"hex":"&#21EE;","name":"UPWARDS WHITE DOUBLE ARROW","char":"⇮"},{"hex":"&#21EF;","name":"UPWARDS WHITE DOUBLE ARROW ON PEDESTAL","char":"⇯"},{"hex":"&#21F0;","name":"RIGHTWARDS WHITE ARROW FROM WALL","char":"⇰"},{"hex":"&#21F1;","name":"NORTH WEST ARROW TO CORNER","char":"⇱"},{"hex":"&#21F2;","name":"SOUTH EAST ARROW TO CORNER","char":"⇲"},{"hex":"&#21F3;","name":"UP DOWN WHITE ARROW","char":"⇳"},{"hex":"&#21F4;","name":"RIGHT ARROW WITH SMALL CIRCLE","char":"⇴"},{"hex":"&#21F5;","name":"DOWNWARDS ARROW LEFTWARDS OF UPWARDS ARROW","char":"⇵"},{"hex":"&#21F6;","name":"THREE RIGHTWARDS ARROWS","char":"⇶"},{"hex":"&#21F7;","name":"LEFTWARDS ARROW WITH VERTICAL STROKE","char":"⇷"},{"hex":"&#21F8;","name":"RIGHTWARDS ARROW WITH VERTICAL STROKE","char":"⇸"},{"hex":"&#21F9;","name":"LEFT RIGHT ARROW WITH VERTICAL STROKE","char":"⇹"},{"hex":"&#21FA;","name":"LEFTWARDS ARROW WITH DOUBLE VERTICAL STROKE","char":"⇺"},{"hex":"&#21FB;","name":"RIGHTWARDS ARROW WITH DOUBLE VERTICAL STROKE","char":"⇻"},{"hex":"&#21FC;","name":"LEFT RIGHT ARROW WITH DOUBLE VERTICAL STROKE","char":"⇼"},{"hex":"&#21FD;","name":"LEFTWARDS OPEN-HEADED ARROW","char":"⇽"},{"hex":"&#21FE;","name":"RIGHTWARDS OPEN-HEADED ARROW","char":"⇾"},{"hex":"&#21FF;","name":"","char":"⇿"},{"hex":"&#2B00;","name":"NORTH EAST WHITE ARROW","char":"⬀"},{"hex":"&#2B01;","name":"NORTH WEST WHITE ARROW","char":"⬁"},{"hex":"&#2B02;","name":"SOUTH EAST WHITE ARROW","char":"⬂"},{"hex":"&#2B03;","name":"SOUTH WEST WHITE ARROW","char":"⬃"},{"hex":"&#2B04;","name":"LEFT RIGHT WHITE ARROW","char":"⬄"},{"hex":"&#2B05;","name":"LEFTWARDS BLACK ARROW","char":"⬅"},{"hex":"&#2B06;","name":"UPWARDS BLACK ARROW","char":"⬆"},{"hex":"&#2B07;","name":"DOWNWARDS BLACK ARROW","char":"⬇"},{"hex":"&#2B08;","name":"NORTH EAST BLACK ARROW","char":"⬈"},{"hex":"&#2B09;","name":"NORTH WEST BLACK ARROW","char":"⬉"},{"hex":"&#2B0A;","name":"SOUTH EAST BLACK ARROW","char":"⬊"},{"hex":"&#2B0B;","name":"SOUTH WEST BLACK ARROW","char":"⬋"},{"hex":"&#2B0C;","name":"LEFT RIGHT BLACK ARROW","char":"⬌"},{"hex":"&#2B0D;","name":"UP DOWN BLACK ARROW","char":"⬍"},{"hex":"&#2B0E;","name":"RIGHTWARDS ARROW WITH TIP DOWNWARDS","char":"⬎"},{"hex":"&#2B0F;","name":"RIGHTWARDS ARROW WITH TIP UPWARDS","char":"⬏"},{"hex":"&#2B10;","name":"LEFTWARDS ARROW WITH TIP DOWNWARDS","char":"⬐"},{"hex":"&#2B11;","name":"LEFTWARDS ARROW WITH TIP UPWARDS","char":"⬑"},{"hex":"&#2794;","name":"HEAVY WIDE-HEADED RIGHTWARDS ARROW","char":"➔"},{"hex":"&#2798;","name":"HEAVY SOUTH EAST ARROW","char":"➘"},{"hex":"&#2799;","name":"HEAVY RIGHTWARDS ARROW","char":"➙"},{"hex":"&#279A;","name":"HEAVY NORTH EAST ARROW","char":"➚"},{"hex":"&#279B;","name":"DRAFTING POINT RIGHTWARDS ARROW","char":"➛"},{"hex":"&#279C;","name":"HEAVY ROUND-TIPPED RIGHTWARDS ARROW","char":"➜"},{"hex":"&#279D;","name":"TRIANGLE-HEADED RIGHTWARDS ARROW","char":"➝"},{"hex":"&#279E;","name":"HEAVY TRIANGLE-HEADED RIGHTWARDS ARROW","char":"➞"},{"hex":"&#279F;","name":"DASHED TRIANGLE-HEADED RIGHTWARDS ARROW","char":"➟"},{"hex":"&#27A0;","name":"HEAVY DASHED TRIANGLE-HEADED RIGHTWARDS ARROW","char":"➠"},{"hex":"&#27A1;","name":"BLACK RIGHTWARDS ARROW","char":"➡"},{"hex":"&#27A2;","name":"THREE-D TOP-LIGHTED RIGHTWARDS ARROWHEAD","char":"➢"},{"hex":"&#27A3;","name":"THREE-D BOTTOM-LIGHTED RIGHTWARDS ARROWHEAD","char":"➣"},{"hex":"&#27A4;","name":"BLACK RIGHTWARDS ARROWHEAD","char":"➤"},{"hex":"&#27A5;","name":"HEAVY BLACK CURVED DOWNWARDS AND RIGHTWARDS ARROW","char":"➥"},{"hex":"&#27A6;","name":"HEAVY BLACK CURVED UPWARDS AND RIGHTWARDS ARROW","char":"➦"},{"hex":"&#27A7;","name":"SQUAT BLACK RIGHTWARDS ARROW","char":"➧"},{"hex":"&#27A8;","name":"HEAVY CONCAVE-POINTED BLACK RIGHTWARDS ARROW","char":"➨"},{"hex":"&#27A9;","name":"RIGHT-SHADED WHITE RIGHTWARDS ARROW","char":"➩"},{"hex":"&#27AA;","name":"LEFT-SHADED WHITE RIGHTWARDS ARROW","char":"➪"},{"hex":"&#27AB;","name":"BACK-TILTED SHADOWED WHITE RIGHTWARDS ARROW","char":"➫"},{"hex":"&#27AC;","name":"FRONT-TILTED SHADOWED WHITE RIGHTWARDS ARROW","char":"➬"},{"hex":"&#27AD;","name":"HEAVY LOWER RIGHT-SHADOWED WHITE RIGHTWARDS ARROW","char":"➭"},{"hex":"&#27AE;","name":"HEAVY UPPER RIGHT-SHADOWED WHITE RIGHTWARDS ARROW","char":"➮"},{"hex":"&#27AF;","name":"NOTCHED LOWER RIGHT-SHADOWED WHITE RIGHTWARDS ARROW","char":"➯"},{"hex":"&#27B1;","name":"NOTCHED UPPER RIGHT-SHADOWED WHITE RIGHTWARDS ARROW","char":"➱"},{"hex":"&#27B2;","name":"CIRCLED HEAVY WHITE RIGHTWARDS ARROW","char":"➲"},{"hex":"&#27B3;","name":"WHITE-FEATHERED RIGHTWARDS ARROW","char":"➳"},{"hex":"&#27B4;","name":"BLACK-FEATHERED SOUTH EAST ARROW","char":"➴"},{"hex":"&#27B5;","name":"BLACK-FEATHERED RIGHTWARDS ARROW","char":"➵"},{"hex":"&#27B6;","name":"BLACK-FEATHERED NORTH EAST ARROW","char":"➶"},{"hex":"&#27B7;","name":"HEAVY BLACK-FEATHERED SOUTH EAST ARROW","char":"➷"},{"hex":"&#27B8;","name":"HEAVY BLACK-FEATHERED RIGHTWARDS ARROW","char":"➸"},{"hex":"&#27B9;","name":"HEAVY BLACK-FEATHERED NORTH EAST ARROW","char":"➹"},{"hex":"&#27BA;","name":"TEARDROP-BARBED RIGHTWARDS ARROW","char":"➺"},{"hex":"&#27BB;","name":"HEAVY TEARDROP-SHANKED RIGHTWARDS ARROW","char":"➻"},{"hex":"&#27BC;","name":"WEDGE-TAILED RIGHTWARDS ARROW","char":"➼"},{"hex":"&#27BD;","name":"HEAVY WEDGE-TAILED RIGHTWARDS ARROW","char":"➽"},{"hex":"&#27BE;","name":"OPEN-OUTLINED RIGHTWARDS ARROW","char":"➾"},{"hex":"&#27F0;","name":"UPWARDS QUADRUPLE ARROW","char":"⟰"},{"hex":"&#27F1;","name":"DOWNWARDS QUADRUPLE ARROW","char":"⟱"},{"hex":"&#27F2;","name":"ANTICLOCKWISE GAPPED CIRCLE ARROW","char":"⟲"},{"hex":"&#27F3;","name":"CLOCKWISE GAPPED CIRCLE ARROW","char":"⟳"},{"hex":"&#27F4;","name":"RIGHT ARROW WITH CIRCLED PLUS","char":"⟴"},{"hex":"&#27F5;","name":"LONG LEFTWARDS ARROW","char":"⟵"},{"hex":"&#27F6;","name":"LONG RIGHTWARDS ARROW","char":"⟶"},{"hex":"&#27F7;","name":"LONG LEFT RIGHT ARROW","char":"⟷"},{"hex":"&#27F8;","name":"LONG LEFTWARDS DOUBLE ARROW","char":"⟸"},{"hex":"&#27F9;","name":"LONG RIGHTWARDS DOUBLE ARROW","char":"⟹"},{"hex":"&#27FA;","name":"LONG LEFT RIGHT DOUBLE ARROW","char":"⟺"},{"hex":"&#27FB;","name":"LONG LEFTWARDS ARROW FROM BAR","char":"⟻"},{"hex":"&#27FC;","name":"LONG RIGHTWARDS ARROW FROM BAR","char":"⟼"},{"hex":"&#27FD;","name":"LONG LEFTWARDS DOUBLE ARROW FROM BAR","char":"⟽"},{"hex":"&#27FE;","name":"LONG RIGHTWARDS DOUBLE ARROW FROM BAR","char":"⟾"},{"hex":"&#27FF;","name":"LONG RIGHTWARDS SQUIGGLE ARROW","char":"⟿"},{"hex":"&#2900;","name":"RIGHTWARDS TWO-HEADED ARROW WITH VERTICAL STROKE","char":"⤀"},{"hex":"&#2901;","name":"RIGHTWARDS TWO-HEADED ARROW WITH DOUBLE VERTICAL STROKE","char":"⤁"},{"hex":"&#2902;","name":"LEFTWARDS DOUBLE ARROW WITH VERTICAL STROKE","char":"⤂"},{"hex":"&#2903;","name":"RIGHTWARDS DOUBLE ARROW WITH VERTICAL STROKE","char":"⤃"},{"hex":"&#2904;","name":"LEFT RIGHT DOUBLE ARROW WITH VERTICAL STROKE","char":"⤄"},{"hex":"&#2905;","name":"RIGHTWARDS TWO-HEADED ARROW FROM BAR","char":"⤅"},{"hex":"&#2906;","name":"LEFTWARDS DOUBLE ARROW FROM BAR","char":"⤆"},{"hex":"&#2907;","name":"RIGHTWARDS DOUBLE ARROW FROM BAR","char":"⤇"},{"hex":"&#2908;","name":"DOWNWARDS ARROW WITH HORIZONTAL STROKE","char":"⤈"},{"hex":"&#2909;","name":"UPWARDS ARROW WITH HORIZONTAL STROKE","char":"⤉"},{"hex":"&#290A;","name":"UPWARDS TRIPLE ARROW","char":"⤊"},{"hex":"&#290B;","name":"DOWNWARDS TRIPLE ARROW","char":"⤋"},{"hex":"&#290C;","name":"LEFTWARDS DOUBLE DASH ARROW","char":"⤌"},{"hex":"&#290D;","name":"RIGHTWARDS DOUBLE DASH ARROW","char":"⤍"},{"hex":"&#290E;","name":"LEFTWARDS TRIPLE DASH ARROW","char":"⤎"},{"hex":"&#290F;","name":"RIGHTWARDS TRIPLE DASH ARROW","char":"⤏"},{"hex":"&#2910;","name":"RIGHTWARDS TWO-HEADED TRIPLE DASH ARROW","char":"⤐"},{"hex":"&#2911;","name":"RIGHTWARDS ARROW WITH DOTTED STEM","char":"⤑"},{"hex":"&#2912;","name":"UPWARDS ARROW TO BAR","char":"⤒"},{"hex":"&#2913;","name":"DOWNWARDS ARROW TO BAR","char":"⤓"},{"hex":"&#2914;","name":"RIGHTWARDS ARROW WITH TAIL WITH VERTICAL STROKE","char":"⤔"},{"hex":"&#2915;","name":"RIGHTWARDS ARROW WITH TAIL WITH DOUBLE VERTICAL STROKE","char":"⤕"},{"hex":"&#2916;","name":"RIGHTWARDS TWO-HEADED ARROW WITH TAIL","char":"⤖"},{"hex":"&#2917;","name":"RIGHTWARDS TWO-HEADED ARROW WITH TAIL WITH VERTICAL STROKE","char":"⤗"},{"hex":"&#2918;","name":"RIGHTWARDS TWO-HEADED ARROW WITH TAIL WITH DOUBLE VERTICAL STROKE","char":"⤘"},{"hex":"&#2919;","name":"LEFTWARDS ARROW-TAIL","char":"⤙"},{"hex":"&#291A;","name":"RIGHTWARDS ARROW-TAIL","char":"⤚"},{"hex":"&#291B;","name":"LEFTWARDS DOUBLE ARROW-TAIL","char":"⤛"},{"hex":"&#291C;","name":"RIGHTWARDS DOUBLE ARROW-TAIL","char":"⤜"},{"hex":"&#291D;","name":"LEFTWARDS ARROW TO BLACK DIAMOND","char":"⤝"},{"hex":"&#291E;","name":"RIGHTWARDS ARROW TO BLACK DIAMOND","char":"⤞"},{"hex":"&#291F;","name":"LEFTWARDS ARROW FROM BAR TO BLACK DIAMOND","char":"⤟"},{"hex":"&#2920;","name":"RIGHTWARDS ARROW FROM BAR TO BLACK DIAMOND","char":"⤠"},{"hex":"&#2921;","name":"NORTH WEST AND SOUTH EAST ARROW","char":"⤡"},{"hex":"&#2922;","name":"NORTH EAST AND SOUTH WEST ARROW","char":"⤢"},{"hex":"&#2923;","name":"NORTH WEST ARROW WITH HOOK","char":"⤣"},{"hex":"&#2924;","name":"NORTH EAST ARROW WITH HOOK","char":"⤤"},{"hex":"&#2925;","name":"SOUTH EAST ARROW WITH HOOK","char":"⤥"},{"hex":"&#2926;","name":"SOUTH WEST ARROW WITH HOOK","char":"⤦"},{"hex":"&#2927;","name":"NORTH WEST ARROW AND NORTH EAST ARROW","char":"⤧"},{"hex":"&#2928;","name":"NORTH EAST ARROW AND SOUTH EAST ARROW","char":"⤨"},{"hex":"&#2929;","name":"SOUTH EAST ARROW AND SOUTH WEST ARROW","char":"⤩"},{"hex":"&#292A;","name":"SOUTH WEST ARROW AND NORTH WEST ARROW","char":"⤪"},{"hex":"&#292B;","name":"RISING DIAGONAL CROSSING FALLING DIAGONAL","char":"⤫"},{"hex":"&#292C;","name":"FALLING DIAGONAL CROSSING RISING DIAGONAL","char":"⤬"},{"hex":"&#292D;","name":"SOUTH EAST ARROW CROSSING NORTH EAST ARROW","char":"⤭"},{"hex":"&#292E;","name":"NORTH EAST ARROW CROSSING SOUTH EAST ARROW","char":"⤮"},{"hex":"&#292F;","name":"FALLING DIAGONAL CROSSING NORTH EAST ARROW","char":"⤯"},{"hex":"&#2930;","name":"RISING DIAGONAL CROSSING SOUTH EAST ARROW","char":"⤰"},{"hex":"&#2931;","name":"NORTH EAST ARROW CROSSING NORTH WEST ARROW","char":"⤱"},{"hex":"&#2932;","name":"NORTH WEST ARROW CROSSING NORTH EAST ARROW","char":"⤲"},{"hex":"&#2933;","name":"WAVE ARROW POINTING DIRECTLY RIGHT","char":"⤳"},{"hex":"&#2934;","name":"ARROW POINTING RIGHTWARDS THEN CURVING UPWARDS","char":"⤴"},{"hex":"&#2935;","name":"ARROW POINTING RIGHTWARDS THEN CURVING DOWNWARDS","char":"⤵"},{"hex":"&#2936;","name":"ARROW POINTING DOWNWARDS THEN CURVING LEFTWARDS","char":"⤶"},{"hex":"&#2937;","name":"ARROW POINTING DOWNWARDS THEN CURVING RIGHTWARDS","char":"⤷"},{"hex":"&#2938;","name":"RIGHT-SIDE ARC CLOCKWISE ARROW","char":"⤸"},{"hex":"&#2939;","name":"LEFT-SIDE ARC ANTICLOCKWISE ARROW","char":"⤹"},{"hex":"&#293A;","name":"TOP ARC ANTICLOCKWISE ARROW","char":"⤺"},{"hex":"&#293B;","name":"BOTTOM ARC ANTICLOCKWISE ARROW","char":"⤻"},{"hex":"&#293C;","name":"TOP ARC CLOCKWISE ARROW WITH MINUS","char":"⤼"},{"hex":"&#293D;","name":"TOP ARC ANTICLOCKWISE ARROW WITH PLUS","char":"⤽"},{"hex":"&#293E;","name":"LOWER RIGHT SEMICIRCULAR CLOCKWISE ARROW","char":"⤾"},{"hex":"&#293F;","name":"LOWER LEFT SEMICIRCULAR ANTICLOCKWISE ARROW","char":"⤿"},{"hex":"&#2940;","name":"ANTICLOCKWISE CLOSED CIRCLE ARROW","char":"⥀"},{"hex":"&#2941;","name":"CLOCKWISE CLOSED CIRCLE ARROW","char":"⥁"},{"hex":"&#2942;","name":"RIGHTWARDS ARROW ABOVE SHORT LEFTWARDS ARROW","char":"⥂"},{"hex":"&#2943;","name":"LEFTWARDS ARROW ABOVE SHORT RIGHTWARDS ARROW","char":"⥃"},{"hex":"&#2944;","name":"SHORT RIGHTWARDS ARROW ABOVE LEFTWARDS ARROW","char":"⥄"},{"hex":"&#2945;","name":"RIGHTWARDS ARROW WITH PLUS BELOW","char":"⥅"},{"hex":"&#2946;","name":"LEFTWARDS ARROW WITH PLUS BELOW","char":"⥆"},{"hex":"&#2947;","name":"RIGHTWARDS ARROW THROUGH X","char":"⥇"},{"hex":"&#2948;","name":"LEFT RIGHT ARROW THROUGH SMALL CIRCLE","char":"⥈"},{"hex":"&#2949;","name":"UPWARDS TWO-HEADED ARROW FROM SMALL CIRCLE","char":"⥉"},{"hex":"&#294A;","name":"LEFT BARB UP RIGHT BARB DOWN HARPOON","char":"⥊"},{"hex":"&#294B;","name":"LEFT BARB DOWN RIGHT BARB UP HARPOON","char":"⥋"},{"hex":"&#294C;","name":"UP BARB RIGHT DOWN BARB LEFT HARPOON","char":"⥌"},{"hex":"&#294D;","name":"UP BARB LEFT DOWN BARB RIGHT HARPOON","char":"⥍"},{"hex":"&#294E;","name":"LEFT BARB UP RIGHT BARB UP HARPOON","char":"⥎"},{"hex":"&#294F;","name":"UP BARB RIGHT DOWN BARB RIGHT HARPOON","char":"⥏"},{"hex":"&#2950;","name":"LEFT BARB DOWN RIGHT BARB DOWN HARPOON","char":"⥐"},{"hex":"&#2951;","name":"UP BARB LEFT DOWN BARB LEFT HARPOON","char":"⥑"},{"hex":"&#2952;","name":"LEFTWARDS HARPOON WITH BARB UP TO BAR","char":"⥒"},{"hex":"&#2953;","name":"RIGHTWARDS HARPOON WITH BARB UP TO BAR","char":"⥓"},{"hex":"&#2954;","name":"UPWARDS HARPOON WITH BARB RIGHT TO BAR","char":"⥔"},{"hex":"&#2955;","name":"DOWNWARDS HARPOON WITH BARB RIGHT TO BAR","char":"⥕"},{"hex":"&#2956;","name":"LEFTWARDS HARPOON WITH BARB DOWN TO BAR","char":"⥖"},{"hex":"&#2957;","name":"RIGHTWARDS HARPOON WITH BARB DOWN TO BAR","char":"⥗"},{"hex":"&#2958;","name":"UPWARDS HARPOON WITH BARB LEFT TO BAR","char":"⥘"},{"hex":"&#2959;","name":"DOWNWARDS HARPOON WITH BARB LEFT TO BAR","char":"⥙"},{"hex":"&#295A;","name":"LEFTWARDS HARPOON WITH BARB UP FROM BAR","char":"⥚"},{"hex":"&#295B;","name":"RIGHTWARDS HARPOON WITH BARB UP FROM BAR","char":"⥛"},{"hex":"&#295C;","name":"UPWARDS HARPOON WITH BARB RIGHT FROM BAR","char":"⥜"},{"hex":"&#295D;","name":"DOWNWARDS HARPOON WITH BARB RIGHT FROM BAR","char":"⥝"},{"hex":"&#295E;","name":"LEFTWARDS HARPOON WITH BARB DOWN FROM BAR","char":"⥞"},{"hex":"&#295F;","name":"RIGHTWARDS HARPOON WITH BARB DOWN FROM BAR","char":"⥟"},{"hex":"&#2960;","name":"UPWARDS HARPOON WITH BARB LEFT FROM BAR","char":"⥠"},{"hex":"&#2961;","name":"DOWNWARDS HARPOON WITH BARB LEFT FROM BAR","char":"⥡"},{"hex":"&#2962;","name":"LEFTWARDS HARPOON WITH BARB UP ABOVE LEFTWARDS HARPOON WITH BARB DOWN","char":"⥢"},{"hex":"&#2963;","name":"UPWARDS HARPOON WITH BARB LEFT BESIDE UPWARDS HARPOON WITH BARB RIGHT","char":"⥣"},{"hex":"&#2964;","name":"RIGHTWARDS HARPOON WITH BARB UP ABOVE RIGHTWARDS HARPOON WITH BARB DOWN","char":"⥤"},{"hex":"&#2965;","name":"DOWNWARDS HARPOON WITH BARB LEFT BESIDE DOWNWARDS HARPOON WITH BARB RIGHT","char":"⥥"},{"hex":"&#2966;","name":"LEFTWARDS HARPOON WITH BARB UP ABOVE RIGHTWARDS HARPOON WITH BARB UP","char":"⥦"},{"hex":"&#2967;","name":"LEFTWARDS HARPOON WITH BARB DOWN ABOVE RIGHTWARDS HARPOON WITH BARB DOWN","char":"⥧"},{"hex":"&#2968;","name":"RIGHTWARDS HARPOON WITH BARB UP ABOVE LEFTWARDS HARPOON WITH BARB UP","char":"⥨"},{"hex":"&#2969;","name":"RIGHTWARDS HARPOON WITH BARB DOWN ABOVE LEFTWARDS HARPOON WITH BARB DOWN","char":"⥩"},{"hex":"&#296A;","name":"LEFTWARDS HARPOON WITH BARB UP ABOVE LONG DASH","char":"⥪"},{"hex":"&#296B;","name":"LEFTWARDS HARPOON WITH BARB DOWN BELOW LONG DASH","char":"⥫"},{"hex":"&#296C;","name":"RIGHTWARDS HARPOON WITH BARB UP ABOVE LONG DASH","char":"⥬"},{"hex":"&#296D;","name":"RIGHTWARDS HARPOON WITH BARB DOWN BELOW LONG DASH","char":"⥭"},{"hex":"&#296E;","name":"UPWARDS HARPOON WITH BARB LEFT BESIDE DOWNWARDS HARPOON WITH BARB RIGHT","char":"⥮"},{"hex":"&#296F;","name":"DOWNWARDS HARPOON WITH BARB LEFT BESIDE UPWARDS HARPOON WITH BARB RIGHT","char":"⥯"},{"hex":"&#2970;","name":"RIGHT DOUBLE ARROW WITH ROUNDED HEAD","char":"⥰"},{"hex":"&#2971;","name":"EQUALS SIGN ABOVE RIGHTWARDS ARROW","char":"⥱"},{"hex":"&#2972;","name":"TILDE OPERATOR ABOVE RIGHTWARDS ARROW","char":"⥲"},{"hex":"&#2973;","name":"LEFTWARDS ARROW ABOVE TILDE OPERATOR","char":"⥳"},{"hex":"&#2974;","name":"RIGHTWARDS ARROW ABOVE TILDE OPERATOR","char":"⥴"},{"hex":"&#2975;","name":"RIGHTWARDS ARROW ABOVE ALMOST EQUAL TO","char":"⥵"},{"hex":"&#2976;","name":"LESS-THAN ABOVE LEFTWARDS ARROW","char":"⥶"},{"hex":"&#2977;","name":"LEFTWARDS ARROW THROUGH LESS-THAN","char":"⥷"},{"hex":"&#2978;","name":"GREATER-THAN ABOVE RIGHTWARDS ARROW","char":"⥸"},{"hex":"&#2979;","name":"SUBSET ABOVE RIGHTWARDS ARROW","char":"⥹"},{"hex":"&#297A;","name":"LEFTWARDS ARROW THROUGH SUBSET","char":"⥺"},{"hex":"&#297B;","name":"SUPERSET ABOVE LEFTWARDS ARROW","char":"⥻"},{"hex":"&#297C;","name":"LEFT FISH TAIL","char":"⥼"},{"hex":"&#297D;","name":"RIGHT FISH TAIL","char":"⥽"},{"hex":"&#297E;","name":"UP FISH TAIL","char":"⥾"},{"hex":"&#297F;","name":"DOWN FISH TAIL","char":"⥿"}]}'
        );
    },
    function (e, t) {
        e.exports = function (e, t) {
            for (var n = -1, a = null == e ? 0 : e.length, r = Array(a); ++n < a; ) r[n] = t(e[n], n, e);
            return r;
        };
    },
    function (e, t, n) {
        var a = n(23),
            r = n(78),
            o = n(79),
            i = n(80),
            c = n(81),
            T = n(82);
        function E(e) {
            var t = (this.__data__ = new a(e));
            this.size = t.size;
        }
        (E.prototype.clear = r), (E.prototype.delete = o), (E.prototype.get = i), (E.prototype.has = c), (E.prototype.set = T), (e.exports = E);
    },
    function (e, t) {
        e.exports = function (e, t) {
            return e === t || (e != e && t != t);
        };
    },
    function (e, t, n) {
        var a = n(17),
            r = n(35),
            o = "[object AsyncFunction]",
            i = "[object Function]",
            c = "[object GeneratorFunction]",
            T = "[object Proxy]";
        e.exports = function (e) {
            if (!r(e)) return !1;
            var t = a(e);
            return t == i || t == c || t == o || t == T;
        };
    },
    function (e, t, n) {
        (function (t) {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e.exports = n;
        }.call(this, n(66)));
    },
    function (e, t) {
        var n = Function.prototype.toString;
        e.exports = function (e) {
            if (null != e) {
                try {
                    return n.call(e);
                } catch (e) {}
                try {
                    return e + "";
                } catch (e) {}
            }
            return "";
        };
    },
    function (e, t, n) {
        var a = n(101),
            r = n(18);
        e.exports = function e(t, n, o, i, c) {
            return t === n || (null == t || null == n || (!r(t) && !r(n)) ? t != t && n != n : a(t, n, o, i, e, c));
        };
    },
    function (e, t, n) {
        var a = n(102),
            r = n(105),
            o = n(106),
            i = 1,
            c = 2;
        e.exports = function (e, t, n, T, E, s) {
            var h = n & i,
                A = e.length,
                l = t.length;
            if (A != l && !(h && l > A)) return !1;
            var L = s.get(e);
            if (L && s.get(t)) return L == t;
            var I = -1,
                u = !0,
                m = n & c ? new a() : void 0;
            for (s.set(e, t), s.set(t, e); ++I < A; ) {
                var R = e[I],
                    p = t[I];
                if (T) var O = h ? T(p, R, I, t, e, s) : T(R, p, I, e, t, s);
                if (void 0 !== O) {
                    if (O) continue;
                    u = !1;
                    break;
                }
                if (m) {
                    if (
                        !r(t, function (e, t) {
                            if (!o(m, t) && (R === e || E(R, e, n, T, s))) return m.push(t);
                        })
                    ) {
                        u = !1;
                        break;
                    }
                } else if (R !== p && !E(R, p, n, T, s)) {
                    u = !1;
                    break;
                }
            }
            return s.delete(e), s.delete(t), u;
        };
    },
    function (e, t, n) {
        var a = n(120),
            r = n(18),
            o = Object.prototype,
            i = o.hasOwnProperty,
            c = o.propertyIsEnumerable,
            T = a(
                (function () {
                    return arguments;
                })()
            )
                ? a
                : function (e) {
                      return r(e) && i.call(e, "callee") && !c.call(e, "callee");
                  };
        e.exports = T;
    },
    function (e, t, n) {
        (function (e) {
            var a = n(13),
                r = n(121),
                o = t && !t.nodeType && t,
                i = o && "object" == typeof e && e && !e.nodeType && e,
                c = i && i.exports === o ? a.Buffer : void 0,
                T = (c ? c.isBuffer : void 0) || r;
            e.exports = T;
        }.call(this, n(54)(e)));
    },
    function (e, t) {
        e.exports = function (e) {
            return (
                e.webpackPolyfill ||
                    ((e.deprecate = function () {}),
                    (e.paths = []),
                    e.children || (e.children = []),
                    Object.defineProperty(e, "loaded", {
                        enumerable: !0,
                        get: function () {
                            return e.l;
                        },
                    }),
                    Object.defineProperty(e, "id", {
                        enumerable: !0,
                        get: function () {
                            return e.i;
                        },
                    }),
                    (e.webpackPolyfill = 1)),
                e
            );
        };
    },
    function (e, t) {
        var n = 9007199254740991,
            a = /^(?:0|[1-9]\d*)$/;
        e.exports = function (e, t) {
            var r = typeof e;
            return !!(t = null == t ? n : t) && ("number" == r || ("symbol" != r && a.test(e))) && e > -1 && e % 1 == 0 && e < t;
        };
    },
    function (e, t, n) {
        var a = n(122),
            r = n(123),
            o = n(124),
            i = o && o.isTypedArray,
            c = i ? r(i) : a;
        e.exports = c;
    },
    function (e, t, n) {
        var a = n(35);
        e.exports = function (e) {
            return e == e && !a(e);
        };
    },
    function (e, t) {
        e.exports = function (e, t) {
            return function (n) {
                return null != n && n[e] === t && (void 0 !== t || e in Object(n));
            };
        };
    },
    function (e, t, n) {
        var a = n(60),
            r = n(28);
        e.exports = function (e, t) {
            for (var n = 0, o = (t = a(t, e)).length; null != e && n < o; ) e = e[r(t[n++])];
            return n && n == o ? e : void 0;
        };
    },
    function (e, t, n) {
        var a = n(14),
            r = n(40),
            o = n(137),
            i = n(140);
        e.exports = function (e, t) {
            return a(e) ? e : r(e, t) ? [e] : o(i(e));
        };
    },
    function (e, t, n) {
        var a = n(30);
        e.exports = function (e) {
            if (Array.isArray(e)) return a(e);
        };
    },
    function (e, t) {
        e.exports = function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
        };
    },
    function (e, t) {
        e.exports = function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        };
    },
    function (e, t, n) {
        "use strict";
        var a = n(2),
            r = n.n(a),
            o = n(3),
            i = n.n(o),
            c = n(4),
            T = n.n(c),
            E = n(1),
            s = n.n(E),
            h = n(5),
            A = n.n(h),
            l = n(0),
            L = n(19),
            I = n.n(L),
            u = wp.data,
            m = u.withSelect,
            R = u.withDispatch,
            p = u.select,
            O = wp.compose.compose,
            d = wp.element,
            N = d.Fragment,
            S = d.Component,
            C = wp.components,
            f = C.withSpokenMessages,
            b = C.CheckboxControl,
            x = function (e) {
                return e.charAt(0).toUpperCase() + e.slice(1);
            },
            D = (function (e) {
                function t() {
                    var e;
                    return r()(this, t), ((e = T()(this, s()(t).apply(this, arguments))).state = { isOpen: !1 }), e;
                }
                return (
                    A()(t, e),
                    i()(t, [
                        {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    t = e.editorSettings,
                                    n = e.onToggle,
                                    a = t.editorskit;
                                return (
                                    void 0 === a && void 0 !== window.editorskitSettings && (a = window.editorskitSettings.editor_settings.editorskit),
                                    Object(l.createElement)(
                                        N,
                                        null,
                                        I()(a, function (e) {
                                            return Object(l.createElement)(
                                                "section",
                                                { className: "edit-post-options-modal__section" },
                                                Object(l.createElement)("h2", { className: "edit-post-options-modal__section-title" }, e.label),
                                                Object(l.createElement)(
                                                    "ul",
                                                    { className: "edit-post-editorskit-manager-modal__checklist" },
                                                    I()(e.items, function (t) {
                                                        return Object(l.createElement)(
                                                            "li",
                                                            { className: "edit-post-editorskit-manager-modal__checklist-item" },
                                                            Object(l.createElement)(b, {
                                                                className: "edit-post-options-modal__option",
                                                                label: t.label,
                                                                checked: !p("core/edit-post").isFeatureActive("disableEditorsKit" + x(t.name) + x(e.name)),
                                                                onChange: function () {
                                                                    return n(e.name, t.name);
                                                                },
                                                            })
                                                        );
                                                    })
                                                )
                                            );
                                        })
                                    )
                                );
                            },
                        },
                    ]),
                    t
                );
            })(S);
        t.a = O([
            m(function () {
                return { editorSettings: p("core/editor").getEditorSettings(), preferences: p("core/edit-post").getPreferences() };
            }),
            R(function (e) {
                return {
                    onToggle: function (t, n) {
                        e("core/edit-post").toggleFeature("disableEditorsKit" + x(n) + x(t));
                    },
                };
            }),
            f,
        ])(D);
    },
    ,
    function (e, t) {
        var n;
        n = (function () {
            return this;
        })();
        try {
            n = n || new Function("return this")();
        } catch (e) {
            "object" == typeof window && (n = window);
        }
        e.exports = n;
    },
    function (e) {
        e.exports = JSON.parse('{"name":"shareablock","category":"layout","attributes":{"hasApiKey":{"type":"boolean","default":false},"hasValidApiKey":{"type":"boolean","default":false}}}');
    },
    function (e, t) {
        function n(t) {
            return (
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? (e.exports = n = function (e) {
                          return typeof e;
                      })
                    : (e.exports = n = function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      }),
                n(t)
            );
        }
        e.exports = n;
    },
    function (e, t) {
        function n(t, a) {
            return (
                (e.exports = n =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    }),
                n(t, a)
            );
        }
        e.exports = n;
    },
    function (e, t, n) {
        var a = n(71),
            r = n(135),
            o = n(145),
            i = n(14),
            c = n(146);
        e.exports = function (e) {
            return "function" == typeof e ? e : null == e ? o : "object" == typeof e ? (i(e) ? r(e[0], e[1]) : a(e)) : c(e);
        };
    },
    function (e, t, n) {
        var a = n(72),
            r = n(134),
            o = n(58);
        e.exports = function (e) {
            var t = r(e);
            return 1 == t.length && t[0][2]
                ? o(t[0][0], t[0][1])
                : function (n) {
                      return n === e || a(n, e, t);
                  };
        };
    },
    function (e, t, n) {
        var a = n(45),
            r = n(50),
            o = 1,
            i = 2;
        e.exports = function (e, t, n, c) {
            var T = n.length,
                E = T,
                s = !c;
            if (null == e) return !E;
            for (e = Object(e); T--; ) {
                var h = n[T];
                if (s && h[2] ? h[1] !== e[h[0]] : !(h[0] in e)) return !1;
            }
            for (; ++T < E; ) {
                var A = (h = n[T])[0],
                    l = e[A],
                    L = h[1];
                if (s && h[2]) {
                    if (void 0 === l && !(A in e)) return !1;
                } else {
                    var I = new a();
                    if (c) var u = c(l, L, A, e, t, I);
                    if (!(void 0 === u ? r(L, l, o | i, c, I) : u)) return !1;
                }
            }
            return !0;
        };
    },
    function (e, t) {
        e.exports = function () {
            (this.__data__ = []), (this.size = 0);
        };
    },
    function (e, t, n) {
        var a = n(24),
            r = Array.prototype.splice;
        e.exports = function (e) {
            var t = this.__data__,
                n = a(t, e);
            return !(n < 0) && (n == t.length - 1 ? t.pop() : r.call(t, n, 1), --this.size, !0);
        };
    },
    function (e, t, n) {
        var a = n(24);
        e.exports = function (e) {
            var t = this.__data__,
                n = a(t, e);
            return n < 0 ? void 0 : t[n][1];
        };
    },
    function (e, t, n) {
        var a = n(24);
        e.exports = function (e) {
            return a(this.__data__, e) > -1;
        };
    },
    function (e, t, n) {
        var a = n(24);
        e.exports = function (e, t) {
            var n = this.__data__,
                r = a(n, e);
            return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
        };
    },
    function (e, t, n) {
        var a = n(23);
        e.exports = function () {
            (this.__data__ = new a()), (this.size = 0);
        };
    },
    function (e, t) {
        e.exports = function (e) {
            var t = this.__data__,
                n = t.delete(e);
            return (this.size = t.size), n;
        };
    },
    function (e, t) {
        e.exports = function (e) {
            return this.__data__.get(e);
        };
    },
    function (e, t) {
        e.exports = function (e) {
            return this.__data__.has(e);
        };
    },
    function (e, t, n) {
        var a = n(23),
            r = n(34),
            o = n(36),
            i = 200;
        e.exports = function (e, t) {
            var n = this.__data__;
            if (n instanceof a) {
                var c = n.__data__;
                if (!r || c.length < i - 1) return c.push([e, t]), (this.size = ++n.size), this;
                n = this.__data__ = new o(c);
            }
            return n.set(e, t), (this.size = n.size), this;
        };
    },
    function (e, t, n) {
        var a = n(47),
            r = n(86),
            o = n(35),
            i = n(49),
            c = /^\[object .+?Constructor\]$/,
            T = Function.prototype,
            E = Object.prototype,
            s = T.toString,
            h = E.hasOwnProperty,
            A = RegExp(
                "^" +
                    s
                        .call(h)
                        .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
                    "$"
            );
        e.exports = function (e) {
            return !(!o(e) || r(e)) && (a(e) ? A : c).test(i(e));
        };
    },
    function (e, t, n) {
        var a = n(25),
            r = Object.prototype,
            o = r.hasOwnProperty,
            i = r.toString,
            c = a ? a.toStringTag : void 0;
        e.exports = function (e) {
            var t = o.call(e, c),
                n = e[c];
            try {
                e[c] = void 0;
                var a = !0;
            } catch (e) {}
            var r = i.call(e);
            return a && (t ? (e[c] = n) : delete e[c]), r;
        };
    },
    function (e, t) {
        var n = Object.prototype.toString;
        e.exports = function (e) {
            return n.call(e);
        };
    },
    function (e, t, n) {
        var a,
            r = n(87),
            o = (a = /[^.]+$/.exec((r && r.keys && r.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + a : "";
        e.exports = function (e) {
            return !!o && o in e;
        };
    },
    function (e, t, n) {
        var a = n(13)["__core-js_shared__"];
        e.exports = a;
    },
    function (e, t) {
        e.exports = function (e, t) {
            return null == e ? void 0 : e[t];
        };
    },
    function (e, t, n) {
        var a = n(90),
            r = n(23),
            o = n(34);
        e.exports = function () {
            (this.size = 0), (this.__data__ = { hash: new a(), map: new (o || r)(), string: new a() });
        };
    },
    function (e, t, n) {
        var a = n(91),
            r = n(92),
            o = n(93),
            i = n(94),
            c = n(95);
        function T(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var a = e[t];
                this.set(a[0], a[1]);
            }
        }
        (T.prototype.clear = a), (T.prototype.delete = r), (T.prototype.get = o), (T.prototype.has = i), (T.prototype.set = c), (e.exports = T);
    },
    function (e, t, n) {
        var a = n(26);
        e.exports = function () {
            (this.__data__ = a ? a(null) : {}), (this.size = 0);
        };
    },
    function (e, t) {
        e.exports = function (e) {
            var t = this.has(e) && delete this.__data__[e];
            return (this.size -= t ? 1 : 0), t;
        };
    },
    function (e, t, n) {
        var a = n(26),
            r = "__lodash_hash_undefined__",
            o = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
            var t = this.__data__;
            if (a) {
                var n = t[e];
                return n === r ? void 0 : n;
            }
            return o.call(t, e) ? t[e] : void 0;
        };
    },
    function (e, t, n) {
        var a = n(26),
            r = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
            var t = this.__data__;
            return a ? void 0 !== t[e] : r.call(t, e);
        };
    },
    function (e, t, n) {
        var a = n(26),
            r = "__lodash_hash_undefined__";
        e.exports = function (e, t) {
            var n = this.__data__;
            return (this.size += this.has(e) ? 0 : 1), (n[e] = a && void 0 === t ? r : t), this;
        };
    },
    function (e, t, n) {
        var a = n(27);
        e.exports = function (e) {
            var t = a(this, e).delete(e);
            return (this.size -= t ? 1 : 0), t;
        };
    },
    function (e, t) {
        e.exports = function (e) {
            var t = typeof e;
            return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
        };
    },
    function (e, t, n) {
        var a = n(27);
        e.exports = function (e) {
            return a(this, e).get(e);
        };
    },
    function (e, t, n) {
        var a = n(27);
        e.exports = function (e) {
            return a(this, e).has(e);
        };
    },
    function (e, t, n) {
        var a = n(27);
        e.exports = function (e, t) {
            var n = a(this, e),
                r = n.size;
            return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
        };
    },
    function (e, t, n) {
        var a = n(45),
            r = n(51),
            o = n(107),
            i = n(111),
            c = n(129),
            T = n(14),
            E = n(53),
            s = n(56),
            h = 1,
            A = "[object Arguments]",
            l = "[object Array]",
            L = "[object Object]",
            I = Object.prototype.hasOwnProperty;
        e.exports = function (e, t, n, u, m, R) {
            var p = T(e),
                O = T(t),
                d = p ? l : c(e),
                N = O ? l : c(t),
                S = (d = d == A ? L : d) == L,
                C = (N = N == A ? L : N) == L,
                f = d == N;
            if (f && E(e)) {
                if (!E(t)) return !1;
                (p = !0), (S = !1);
            }
            if (f && !S) return R || (R = new a()), p || s(e) ? r(e, t, n, u, m, R) : o(e, t, d, n, u, m, R);
            if (!(n & h)) {
                var b = S && I.call(e, "__wrapped__"),
                    x = C && I.call(t, "__wrapped__");
                if (b || x) {
                    var D = b ? e.value() : e,
                        H = x ? t.value() : t;
                    return R || (R = new a()), m(D, H, n, u, R);
                }
            }
            return !!f && (R || (R = new a()), i(e, t, n, u, m, R));
        };
    },
    function (e, t, n) {
        var a = n(36),
            r = n(103),
            o = n(104);
        function i(e) {
            var t = -1,
                n = null == e ? 0 : e.length;
            for (this.__data__ = new a(); ++t < n; ) this.add(e[t]);
        }
        (i.prototype.add = i.prototype.push = r), (i.prototype.has = o), (e.exports = i);
    },
    function (e, t) {
        var n = "__lodash_hash_undefined__";
        e.exports = function (e) {
            return this.__data__.set(e, n), this;
        };
    },
    function (e, t) {
        e.exports = function (e) {
            return this.__data__.has(e);
        };
    },
    function (e, t) {
        e.exports = function (e, t) {
            for (var n = -1, a = null == e ? 0 : e.length; ++n < a; ) if (t(e[n], n, e)) return !0;
            return !1;
        };
    },
    function (e, t) {
        e.exports = function (e, t) {
            return e.has(t);
        };
    },
    function (e, t, n) {
        var a = n(25),
            r = n(108),
            o = n(46),
            i = n(51),
            c = n(109),
            T = n(110),
            E = 1,
            s = 2,
            h = "[object Boolean]",
            A = "[object Date]",
            l = "[object Error]",
            L = "[object Map]",
            I = "[object Number]",
            u = "[object RegExp]",
            m = "[object Set]",
            R = "[object String]",
            p = "[object Symbol]",
            O = "[object ArrayBuffer]",
            d = "[object DataView]",
            N = a ? a.prototype : void 0,
            S = N ? N.valueOf : void 0;
        e.exports = function (e, t, n, a, N, C, f) {
            switch (n) {
                case d:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    (e = e.buffer), (t = t.buffer);
                case O:
                    return !(e.byteLength != t.byteLength || !C(new r(e), new r(t)));
                case h:
                case A:
                case I:
                    return o(+e, +t);
                case l:
                    return e.name == t.name && e.message == t.message;
                case u:
                case R:
                    return e == t + "";
                case L:
                    var b = c;
                case m:
                    var x = a & E;
                    if ((b || (b = T), e.size != t.size && !x)) return !1;
                    var D = f.get(e);
                    if (D) return D == t;
                    (a |= s), f.set(e, t);
                    var H = i(b(e), b(t), a, N, C, f);
                    return f.delete(e), H;
                case p:
                    if (S) return S.call(e) == S.call(t);
            }
            return !1;
        };
    },
    function (e, t, n) {
        var a = n(13).Uint8Array;
        e.exports = a;
    },
    function (e, t) {
        e.exports = function (e) {
            var t = -1,
                n = Array(e.size);
            return (
                e.forEach(function (e, a) {
                    n[++t] = [a, e];
                }),
                n
            );
        };
    },
    function (e, t) {
        e.exports = function (e) {
            var t = -1,
                n = Array(e.size);
            return (
                e.forEach(function (e) {
                    n[++t] = e;
                }),
                n
            );
        };
    },
    function (e, t, n) {
        var a = n(112),
            r = 1,
            o = Object.prototype.hasOwnProperty;
        e.exports = function (e, t, n, i, c, T) {
            var E = n & r,
                s = a(e),
                h = s.length;
            if (h != a(t).length && !E) return !1;
            for (var A = h; A--; ) {
                var l = s[A];
                if (!(E ? l in t : o.call(t, l))) return !1;
            }
            var L = T.get(e);
            if (L && T.get(t)) return L == t;
            var I = !0;
            T.set(e, t), T.set(t, e);
            for (var u = E; ++A < h; ) {
                var m = e[(l = s[A])],
                    R = t[l];
                if (i) var p = E ? i(R, m, l, t, e, T) : i(m, R, l, e, t, T);
                if (!(void 0 === p ? m === R || c(m, R, n, i, T) : p)) {
                    I = !1;
                    break;
                }
                u || (u = "constructor" == l);
            }
            if (I && !u) {
                var O = e.constructor,
                    d = t.constructor;
                O != d && "constructor" in e && "constructor" in t && !("function" == typeof O && O instanceof O && "function" == typeof d && d instanceof d) && (I = !1);
            }
            return T.delete(e), T.delete(t), I;
        };
    },
    function (e, t, n) {
        var a = n(113),
            r = n(115),
            o = n(37);
        e.exports = function (e) {
            return a(e, o, r);
        };
    },
    function (e, t, n) {
        var a = n(114),
            r = n(14);
        e.exports = function (e, t, n) {
            var o = t(e);
            return r(e) ? o : a(o, n(e));
        };
    },
    function (e, t) {
        e.exports = function (e, t) {
            for (var n = -1, a = t.length, r = e.length; ++n < a; ) e[r + n] = t[n];
            return e;
        };
    },
    function (e, t, n) {
        var a = n(116),
            r = n(117),
            o = Object.prototype.propertyIsEnumerable,
            i = Object.getOwnPropertySymbols,
            c = i
                ? function (e) {
                      return null == e
                          ? []
                          : ((e = Object(e)),
                            a(i(e), function (t) {
                                return o.call(e, t);
                            }));
                  }
                : r;
        e.exports = c;
    },
    function (e, t) {
        e.exports = function (e, t) {
            for (var n = -1, a = null == e ? 0 : e.length, r = 0, o = []; ++n < a; ) {
                var i = e[n];
                t(i, n, e) && (o[r++] = i);
            }
            return o;
        };
    },
    function (e, t) {
        e.exports = function () {
            return [];
        };
    },
    function (e, t, n) {
        var a = n(119),
            r = n(52),
            o = n(14),
            i = n(53),
            c = n(55),
            T = n(56),
            E = Object.prototype.hasOwnProperty;
        e.exports = function (e, t) {
            var n = o(e),
                s = !n && r(e),
                h = !n && !s && i(e),
                A = !n && !s && !h && T(e),
                l = n || s || h || A,
                L = l ? a(e.length, String) : [],
                I = L.length;
            for (var u in e) (!t && !E.call(e, u)) || (l && ("length" == u || (h && ("offset" == u || "parent" == u)) || (A && ("buffer" == u || "byteLength" == u || "byteOffset" == u)) || c(u, I))) || L.push(u);
            return L;
        };
    },
    function (e, t) {
        e.exports = function (e, t) {
            for (var n = -1, a = Array(e); ++n < e; ) a[n] = t(n);
            return a;
        };
    },
    function (e, t, n) {
        var a = n(17),
            r = n(18),
            o = "[object Arguments]";
        e.exports = function (e) {
            return r(e) && a(e) == o;
        };
    },
    function (e, t) {
        e.exports = function () {
            return !1;
        };
    },
    function (e, t, n) {
        var a = n(17),
            r = n(38),
            o = n(18),
            i = {};
        (i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i[
            "[object Uint32Array]"
        ] = !0),
            (i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i[
                "[object Number]"
            ] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = !1),
            (e.exports = function (e) {
                return o(e) && r(e.length) && !!i[a(e)];
            });
    },
    function (e, t) {
        e.exports = function (e) {
            return function (t) {
                return e(t);
            };
        };
    },
    function (e, t, n) {
        (function (e) {
            var a = n(48),
                r = t && !t.nodeType && t,
                o = r && "object" == typeof e && e && !e.nodeType && e,
                i = o && o.exports === r && a.process,
                c = (function () {
                    try {
                        var e = o && o.require && o.require("util").types;
                        return e || (i && i.binding && i.binding("util"));
                    } catch (e) {}
                })();
            e.exports = c;
        }.call(this, n(54)(e)));
    },
    function (e, t, n) {
        var a = n(126),
            r = n(127),
            o = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
            if (!a(e)) return r(e);
            var t = [];
            for (var n in Object(e)) o.call(e, n) && "constructor" != n && t.push(n);
            return t;
        };
    },
    function (e, t) {
        var n = Object.prototype;
        e.exports = function (e) {
            var t = e && e.constructor;
            return e === (("function" == typeof t && t.prototype) || n);
        };
    },
    function (e, t, n) {
        var a = n(128)(Object.keys, Object);
        e.exports = a;
    },
    function (e, t) {
        e.exports = function (e, t) {
            return function (n) {
                return e(t(n));
            };
        };
    },
    function (e, t, n) {
        var a = n(130),
            r = n(34),
            o = n(131),
            i = n(132),
            c = n(133),
            T = n(17),
            E = n(49),
            s = E(a),
            h = E(r),
            A = E(o),
            l = E(i),
            L = E(c),
            I = T;
        ((a && "[object DataView]" != I(new a(new ArrayBuffer(1)))) || (r && "[object Map]" != I(new r())) || (o && "[object Promise]" != I(o.resolve())) || (i && "[object Set]" != I(new i())) || (c && "[object WeakMap]" != I(new c()))) &&
            (I = function (e) {
                var t = T(e),
                    n = "[object Object]" == t ? e.constructor : void 0,
                    a = n ? E(n) : "";
                if (a)
                    switch (a) {
                        case s:
                            return "[object DataView]";
                        case h:
                            return "[object Map]";
                        case A:
                            return "[object Promise]";
                        case l:
                            return "[object Set]";
                        case L:
                            return "[object WeakMap]";
                    }
                return t;
            }),
            (e.exports = I);
    },
    function (e, t, n) {
        var a = n(16)(n(13), "DataView");
        e.exports = a;
    },
    function (e, t, n) {
        var a = n(16)(n(13), "Promise");
        e.exports = a;
    },
    function (e, t, n) {
        var a = n(16)(n(13), "Set");
        e.exports = a;
    },
    function (e, t, n) {
        var a = n(16)(n(13), "WeakMap");
        e.exports = a;
    },
    function (e, t, n) {
        var a = n(57),
            r = n(37);
        e.exports = function (e) {
            for (var t = r(e), n = t.length; n--; ) {
                var o = t[n],
                    i = e[o];
                t[n] = [o, i, a(i)];
            }
            return t;
        };
    },
    function (e, t, n) {
        var a = n(50),
            r = n(136),
            o = n(142),
            i = n(40),
            c = n(57),
            T = n(58),
            E = n(28),
            s = 1,
            h = 2;
        e.exports = function (e, t) {
            return i(e) && c(t)
                ? T(E(e), t)
                : function (n) {
                      var i = r(n, e);
                      return void 0 === i && i === t ? o(n, e) : a(t, i, s | h);
                  };
        };
    },
    function (e, t, n) {
        var a = n(59);
        e.exports = function (e, t, n) {
            var r = null == e ? void 0 : a(e, t);
            return void 0 === r ? n : r;
        };
    },
    function (e, t, n) {
        var a = n(138),
            r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            o = /\\(\\)?/g,
            i = a(function (e) {
                var t = [];
                return (
                    46 === e.charCodeAt(0) && t.push(""),
                    e.replace(r, function (e, n, a, r) {
                        t.push(a ? r.replace(o, "$1") : n || e);
                    }),
                    t
                );
            });
        e.exports = i;
    },
    function (e, t, n) {
        var a = n(139),
            r = 500;
        e.exports = function (e) {
            var t = a(e, function (e) {
                    return n.size === r && n.clear(), e;
                }),
                n = t.cache;
            return t;
        };
    },
    function (e, t, n) {
        var a = n(36),
            r = "Expected a function";
        function o(e, t) {
            if ("function" != typeof e || (null != t && "function" != typeof t)) throw new TypeError(r);
            var n = function () {
                var a = arguments,
                    r = t ? t.apply(this, a) : a[0],
                    o = n.cache;
                if (o.has(r)) return o.get(r);
                var i = e.apply(this, a);
                return (n.cache = o.set(r, i) || o), i;
            };
            return (n.cache = new (o.Cache || a)()), n;
        }
        (o.Cache = a), (e.exports = o);
    },
    function (e, t, n) {
        var a = n(141);
        e.exports = function (e) {
            return null == e ? "" : a(e);
        };
    },
    function (e, t, n) {
        var a = n(25),
            r = n(44),
            o = n(14),
            i = n(41),
            c = 1 / 0,
            T = a ? a.prototype : void 0,
            E = T ? T.toString : void 0;
        e.exports = function e(t) {
            if ("string" == typeof t) return t;
            if (o(t)) return r(t, e) + "";
            if (i(t)) return E ? E.call(t) : "";
            var n = t + "";
            return "0" == n && 1 / t == -c ? "-0" : n;
        };
    },
    function (e, t, n) {
        var a = n(143),
            r = n(144);
        e.exports = function (e, t) {
            return null != e && r(e, t, a);
        };
    },
    function (e, t) {
        e.exports = function (e, t) {
            return null != e && t in Object(e);
        };
    },
    function (e, t, n) {
        var a = n(60),
            r = n(52),
            o = n(14),
            i = n(55),
            c = n(38),
            T = n(28);
        e.exports = function (e, t, n) {
            for (var E = -1, s = (t = a(t, e)).length, h = !1; ++E < s; ) {
                var A = T(t[E]);
                if (!(h = null != e && n(e, A))) break;
                e = e[A];
            }
            return h || ++E != s ? h : !!(s = null == e ? 0 : e.length) && c(s) && i(A, s) && (o(e) || r(e));
        };
    },
    function (e, t) {
        e.exports = function (e) {
            return e;
        };
    },
    function (e, t, n) {
        var a = n(147),
            r = n(148),
            o = n(40),
            i = n(28);
        e.exports = function (e) {
            return o(e) ? a(i(e)) : r(e);
        };
    },
    function (e, t) {
        e.exports = function (e) {
            return function (t) {
                return null == t ? void 0 : t[e];
            };
        };
    },
    function (e, t, n) {
        var a = n(59);
        e.exports = function (e) {
            return function (t) {
                return a(t, e);
            };
        };
    },
    function (e, t, n) {
        var a = n(150),
            r = n(39);
        e.exports = function (e, t) {
            var n = -1,
                o = r(e) ? Array(e.length) : [];
            return (
                a(e, function (e, a, r) {
                    o[++n] = t(e, a, r);
                }),
                o
            );
        };
    },
    function (e, t, n) {
        var a = n(151),
            r = n(154)(a);
        e.exports = r;
    },
    function (e, t, n) {
        var a = n(152),
            r = n(37);
        e.exports = function (e, t) {
            return e && a(e, t, r);
        };
    },
    function (e, t, n) {
        var a = n(153)();
        e.exports = a;
    },
    function (e, t) {
        e.exports = function (e) {
            return function (t, n, a) {
                for (var r = -1, o = Object(t), i = a(t), c = i.length; c--; ) {
                    var T = i[e ? c : ++r];
                    if (!1 === n(o[T], T, o)) break;
                }
                return t;
            };
        };
    },
    function (e, t, n) {
        var a = n(39);
        e.exports = function (e, t) {
            return function (n, r) {
                if (null == n) return n;
                if (!a(n)) return e(n, r);
                for (var o = n.length, i = t ? o : -1, c = Object(n); (t ? i-- : ++i < o) && !1 !== r(c[i], i, c); );
                return n;
            };
        };
    },
    function (e, t, n) {
        "use strict";
        var a = n(156);
        function r() {}
        function o() {}
        (o.resetWarningCache = r),
            (e.exports = function () {
                function e(e, t, n, r, o, i) {
                    if (i !== a) {
                        var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw ((c.name = "Invariant Violation"), c);
                    }
                }
                function t() {
                    return e;
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: o,
                    resetWarningCache: r,
                };
                return (n.PropTypes = n), n;
            });
    },
    function (e, t, n) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    ,
    function (e, t) {
        !(function () {
            e.exports = this.wp.wordcount;
        })();
    },
    ,
    function (e, t) {
        e.exports = function (e, t) {
            if (null == e) return {};
            var n,
                a,
                r = {},
                o = Object.keys(e);
            for (a = 0; a < o.length; a++) (n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
        };
    },
    function (e, t) {
        var n = wp.data.select;
        wp.domReady(function () {
            if (document.body.classList.contains("editorskit-body-class-on")) {
                var e = document.querySelector(".editor-page-attributes__template select"),
                    t = document.querySelectorAll(".genesis-layout-selector input"),
                    a = n("core/editor").getEditedPostAttribute("type"),
                    r = a + "-template-";
                e &&
                    e.addEventListener("change", function () {
                        var t = document.body.className.split(" ").filter(function (e) {
                                return !e.startsWith(r);
                            }),
                            n = e.options[e.selectedIndex].value;
                        n || (n = "default"), (n = n.split("/").join("-")), (document.body.className = t.join(" ").trim()), document.body.classList.add(r + n.split(".").join("-"));
                    }),
                    t &&
                        (function () {
                            for (var e = "default-layout", n = a + "-layout-", r = 0, o = t.length; r < o; r++)
                                t[r].addEventListener("change", function () {
                                    if (this.getAttribute("id") !== e) {
                                        var t = document.body.className.split(" ").filter(function (e) {
                                            return !e.startsWith(n);
                                        });
                                        if (e) {
                                            (e = this.getAttribute("id")), (document.body.className = t.join(" ").trim()), document.body.classList.add(n + e.split(".").join("-"));
                                        }
                                    }
                                });
                        })();
            }
        });
    },
    function (e, t) {
        e.exports = function (e) {
            if (Array.isArray(e)) return e;
        };
    },
    function (e, t) {
        e.exports = function (e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                var n = [],
                    a = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var i, c = e[Symbol.iterator](); !(a = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); a = !0);
                } catch (e) {
                    (r = !0), (o = e);
                } finally {
                    try {
                        a || null == c.return || c.return();
                    } finally {
                        if (r) throw o;
                    }
                }
                return n;
            }
        };
    },
    function (e, t) {
        e.exports = function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        };
    },
    function (e, t) {
        var n = wp.hooks.addFilter,
            a = wp.blocks.createBlock,
            r = ["core/cover"];
        n("blocks.registerBlockType", "editorskit/transform/group", function (e) {
            if ((void 0 !== e.transforms) !== "undefined" && r.includes(e.name)) {
                var t = e.transforms;
                void 0 === t.from && (t.from = []);
                var n = {
                    type: "block",
                    blocks: ["core/group"],
                    __experimentalConvert: function (e) {
                        void 0 !== e.attributes.backgroundColor && (e.attributes.overlayColor = e.attributes.backgroundColor),
                            void 0 !== e.attributes.customBackgroundColor && (e.attributes.customOverlayColor = e.attributes.customBackgroundColor);
                        var t = e.innerBlocks.map(function (e) {
                            return a(e.name, e.attributes, e.innerBlocks);
                        });
                        return a("core/cover", e.attributes, t);
                    },
                };
                t.from.push(n), (e.transforms = t);
            }
            return e;
        });
    },
    function (e, t) {
        var n = wp.hooks.addFilter,
            a = wp.blocks.hasBlockSupport,
            r = [
                "core/image",
                "core/gallery",
                "core/video",
                "core/audio",
                "core-embed",
                "core-embed/youtube",
                "core-embed/twitter",
                "core-embed/facebook",
                "core-embed/instagram",
                "core-embed/wordpress",
                "core-embed/soundcloud",
                "core-embed/spotify",
                "core-embed/flickr",
                "core-embed/vimeo",
                "core-embed/animoto",
                "core-embed/cloudup",
                "core-embed/collegehumor",
                "core-embed/crowdsignal",
                "core-embed/dailymotion",
                "core-embed/hulu",
                "core-embed/imgur",
                "core-embed/issuu",
                "core-embed/kickstarter",
                "core-embed/meetup-com",
                "core-embed/mixcloud",
                "core-embed/reddit",
                "core-embed/reverbnation",
                "core-embed/screencast",
                "core-embed/scribd",
                "core-embed/slideshare",
                "core-embed/smugmug",
                "core-embed/speaker-deck",
                "core-embed/ted",
                "core-embed/tumblr",
                "core-embed/videopress",
                "core-embed/wordpress-tv",
                "core-embed/amazon-kindle",
                "core/table",
            ];
        n("blocks.registerBlockType", "editorskit/alignment/attributes", function (e) {
            return void 0 !== e.attributes && (r.includes(e.name) || a(e.name, "editorsKitCaptionAlignment")) && (e.attributes = Object.assign(e.attributes, { captionAlignment: { type: "string" } })), e;
        });
    },
    function (e, t) {
        var n = wp.i18n.__,
            a = wp.blocks.registerBlockStyle;
        ["core/image", "core/cover"].forEach(function (e) {
            a(e, { name: "default", label: n("Default", "block-options"), isDefault: !0 }),
                a(e, { name: "editorskit-circular", label: n("Circular", "block-options"), isDefault: !1 }),
                a(e, { name: "editorskit-rounded", label: n("Rounded Corners", "block-options"), isDefault: !1 }),
                a(e, { name: "editorskit-diagonal", label: n("Diagonal", "block-options"), isDefault: !1 }),
                a(e, { name: "editorskit-inverted-diagonal", label: n("Inverted Diagonal", "block-options"), isDefault: !1 }),
                a(e, { name: "editorskit-shadow", label: n("Shadow", "block-options"), isDefault: !1 });
        });
    },
    function (e, t) {
        var n = wp.i18n.__,
            a = wp.blocks.registerBlockStyle;
        a("core/list", { name: "default", label: n("Default", "block-options"), isDefault: !0 }),
            a("core/list", { name: "none", label: n("None", "block-options"), isDefault: !1 }),
            a("core/list", { name: "arrow", label: n("Arrow", "block-options"), isDefault: !1 }),
            a("core/list", { name: "checked", label: n("Checked", "block-options"), isDefault: !1 }),
            a("core/list", { name: "crossed", label: n("Crossed", "block-options"), isDefault: !1 }),
            a("core/list", { name: "connected", label: n("Connected", "block-options"), isDefault: !1 }),
            a("core/list", { name: "dashed", label: n("Dashed", "block-options"), isDefault: !1 }),
            a("core/list", { name: "starred", label: n("Starred", "block-options"), isDefault: !1 });
    },
    function (e, t) {
        var n = wp.i18n.__,
            a = wp.blocks.registerBlockStyle;
        a("core/columns", { name: "default", label: n("Default", "block-options"), isDefault: !0 }), a("core/columns", { name: "gapless", label: n("Gapless", "block-options"), isDefault: !1 });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
        "use strict";
        n.r(t);
        var a = {};
        n.r(a),
            n.d(a, "name", function () {
                return up;
            }),
            n.d(a, "title", function () {
                return Rp;
            }),
            n.d(a, "category", function () {
                return mp;
            }),
            n.d(a, "icon", function () {
                return Ap;
            }),
            n.d(a, "settings", function () {
                return Op;
            });
        var r = {};
        n.r(r),
            n.d(r, "name", function () {
                return iO;
            }),
            n.d(r, "category", function () {
                return cO;
            }),
            n.d(r, "settings", function () {
                return EO;
            });
        var o = n(9),
            i = n.n(o),
            c = n(12),
            T = n.n(c),
            E = n(0),
            s = n(10),
            h = n.n(s),
            A = n(6),
            l = n.n(A);
        function L(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t &&
                    (a = a.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, a);
            }
            return n;
        }
        var I = wp.hooks.addFilter,
            u = wp.element.Fragment,
            m = wp.compose.createHigherOrderComponent,
            R = wp.blocks.hasBlockSupport,
            p = ["core/freeform", "core/shortcode", "core/nextpage"],
            O = ["core/image", "core/cover", "core/group", "core/columns", "core/media-text"],
            d = ["core/list"],
            N = ["core/list"],
            S = ["core/spacer", "core/separator"],
            C = ["core/columns", "core/column"],
            f = ["core/button"],
            b = ["core/group", "core/column", "core/cover"];
        var x = m(function (e) {
            return function (t) {
                var n = t.attributes;
                return void 0 === n.editorskit && (n.editorskit = []), Object(E.createElement)(u, null, Object(E.createElement)(e, t));
            };
        }, "withAttributes");
        var D = m(function (e) {
            return function (t) {
                var n = t.name,
                    a = t.attributes,
                    r = a.isHeightFullScreen,
                    o = a.isFullWidth,
                    c = t.wrapperProps,
                    s = {};
                return (
                    R(n, "hasHeightFullScreen") && r && (s = Object.assign(s, { "data-editorskit-h-screen": 1 })),
                    R(n, "hasFullWidthDisplay") && o && (s = Object.assign(s, { "data-editorskit-w-full": 1 })),
                    (c = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2
                                ? L(n, !0).forEach(function (t) {
                                      i()(e, t, n[t]);
                                  })
                                : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                : L(n).forEach(function (t) {
                                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                  });
                        }
                        return e;
                    })({}, c, {}, s)),
                    Object(E.createElement)(e, T()({}, t, { wrapperProps: c }))
                );
            };
        }, "addEditorBlockAttributes");
        I("blocks.registerBlockType", "editorskit/custom/attributes", function (e) {
            return (
                void 0 === e.attributes ||
                    p.includes(e.name) ||
                    ((e.attributes = Object.assign(e.attributes, {
                        editorskit: {
                            type: "object",
                            default: { devices: !1, desktop: !0, tablet: !0, mobile: !0, loggedin: !0, loggedout: !0, acf_visibility: "", acf_field: "", acf_condition: "", acf_value: "", migrated: !1, unit_test: !1 },
                        },
                    })),
                    (e.attributes = Object.assign(e.attributes, { blockOpts: { type: "object" } })),
                    O.includes(e.name) && (e.supports || (e.supports = {}), (e.supports = Object.assign(e.supports, { hasHeightFullScreen: !0 }))),
                    R(e, "hasHeightFullScreen") && void 0 !== e.attributes && (e.attributes.isHeightFullScreen || (e.attributes = Object.assign(e.attributes, { isHeightFullScreen: { type: "boolean", default: !1 } }))),
                    f.includes(e.name) && (e.supports || (e.supports = {}), (e.supports = Object.assign(e.supports, { hasFullWidthDisplay: !0 }))),
                    R(e, "hasFullWidthDisplay") && void 0 !== e.attributes && (e.attributes.isFullWidth || (e.attributes = Object.assign(e.attributes, { isFullWidth: { type: "boolean", default: !1 } }))),
                    d.includes(e.name) &&
                        (e.attributes || (e.attributes = {}),
                        (e.attributes = Object.assign(e.attributes, { textColor: { type: "string" }, customTextColor: { type: "string" }, fontSize: { type: "string" }, customFontSize: { type: "number" } }))),
                    N.includes(e.name) && (e.attributes || (e.attributes = {}), (e.attributes = Object.assign(e.attributes, { bulletColor: { type: "string" } }))),
                    C.includes(e.name) && (e.attributes || (e.attributes = {}), (e.attributes = Object.assign(e.attributes, { backgroundColor: { type: "string" }, customBackgroundColor: { type: "string" } }))),
                    S.includes(e.name) && (e.supports || (e.supports = {}), (e.supports = Object.assign(e.supports, { anchor: !0 }))),
                    (l()(e, "attributes.align") || l()(e, "attributes.textAlign")) && (e.attributes = Object.assign(e.attributes, { hasAlignmentOption: { type: "boolean", default: !0 } })),
                    (b.includes(e.name) || R(e, "editorsKitLinkToolbar")) &&
                        void 0 !== e.attributes &&
                        (e.attributes = Object.assign(e.attributes, {
                            href: { type: "string" },
                            linkDestination: { type: "string", default: "none" },
                            opensInNewTab: { type: "boolean", default: !1 },
                            linkNoFollow: { type: "boolean", default: !1 },
                            linkSponsored: { type: "boolean", default: !1 },
                            hasAnimation: { type: "boolean", default: !1 },
                        }))),
                e
            );
        }),
            I("editor.BlockEdit", "editorskit/attributes", x),
            I("blocks.getSaveContent.extraProps", "editorskit/applyExtraClass", function (e, t, n) {
                var a = n.editorskit,
                    r = n.isHeightFullScreen,
                    o = n.isFullWidth,
                    i = n.href,
                    c = n.hasAnimation;
                return (
                    void 0 === a ||
                        p.includes(t.name) ||
                        (void 0 !== a.id && (e.className = h()(e.className, a.id)),
                        void 0 === a.desktop || a.desktop || (e.className = h()(e.className, "editorskit-no-desktop")),
                        void 0 === a.tablet || a.tablet || (e.className = h()(e.className, "editorskit-no-tablet")),
                        void 0 === a.mobile || a.mobile || (e.className = h()(e.className, "editorskit-no-mobile")),
                        void 0 !== a.tabletAlignment && a.tabletAlignment && (e.className = h()(e.className, "has-tablet-text-align-" + a.tabletAlignment)),
                        void 0 !== a.mobileAlignment && a.mobileAlignment && (e.className = h()(e.className, "has-mobile-text-align-" + a.mobileAlignment))),
                    R(t.name, "hasHeightFullScreen") && r && (e.className = h()(e.className, "h-screen")),
                    R(t.name, "hasFullWidthDisplay") && o && (e.className = h()(e.className, "ek-w-full")),
                    (b.includes(t.name) || R(t.name, "editorsKitLinkToolbar")) && void 0 !== i && i && ((e.className = h()(e.className, "ek-linked-block")), void 0 !== c && c && (e.className = h()(e.className, "ek-linked-block-animate"))),
                    e
                );
            }),
            I("editor.BlockListBlock", "editorskit/addEditorBlockAttributes", D);
        var H = n(22),
            W = n.n(H),
            v = wp.i18n.__,
            g = wp.compose.compose,
            k = wp.data.withSelect,
            y = wp.element.Fragment,
            B = wp.blockEditor,
            P = B.InspectorControls,
            w = B.FontSizePicker,
            M = B.withFontSizes,
            U = B.withColors,
            F = B.PanelColorSettings,
            G = wp.components,
            j = G.PanelBody,
            K = (0, G.withFallbackStyles)(function (e, t) {
                var n = t.attributes,
                    a = n.fontSize,
                    r = n.customFontSize,
                    o = n.textColor,
                    i = e.querySelector('[contenteditable="true"]'),
                    c = i ? getComputedStyle(i) : null;
                return { fallbackTextColor: o || !c ? void 0 : c.color, fallbackFontSize: a || r || !c ? void 0 : parseInt(c.fontSize) || void 0 };
            }),
            V = g([
                k(function (e) {
                    return { isFontSizeDisabled: e("core/edit-post").isFeatureActive("disableEditorsKitListBlockFontSizeOptions"), isTextColorDisabled: e("core/edit-post").isFeatureActive("disableEditorsKitListBlockTextColorOptions") };
                }),
                U({ textColor: "color" }),
                M("fontSize"),
                K,
            ])(function (e) {
                var t = e.fallbackFontSize,
                    n = e.fontSize,
                    a = e.setFontSize,
                    r = e.textColor,
                    o = e.setTextColor,
                    i = e.bulletColor,
                    c = e.isFontSizeDisabled,
                    T = e.isTextColorDisabled,
                    s = e.setAttributes;
                return Object(E.createElement)(
                    y,
                    null,
                    Object(E.createElement)(
                        P,
                        null,
                        !c && Object(E.createElement)(j, { title: v("Text Settings", "block-options"), initialOpen: !1, className: "editorskit-panel" }, Object(E.createElement)(w, { fallbackFontSize: t, value: n.size, onChange: a })),
                        !T &&
                            Object(E.createElement)(F, {
                                title: v("Color Settings", "block-options"),
                                initialOpen: !1,
                                colorSettings: [
                                    { value: r.color, onChange: o, label: v("Text Color", "block-options") },
                                    {
                                        value: i,
                                        onChange: function (e) {
                                            return s({ bulletColor: e });
                                        },
                                        label: v("Bullet/Icon Color", "block-options"),
                                    },
                                ],
                            })
                    )
                );
            }),
            Q = wp.i18n.__,
            Y = wp.compose,
            X = Y.compose,
            z = Y.ifCondition,
            Z = wp.data.withSelect,
            q = wp.element.Fragment,
            J = wp.blockEditor,
            $ = J.InspectorControls,
            ee = J.withColors,
            te = J.PanelColorSettings,
            ne = (0, wp.components.withFallbackStyles)(function (e, t) {
                var n = t.attributes.backgroundColor,
                    a = e.querySelector('[contenteditable="true"]'),
                    r = a ? getComputedStyle(a) : null;
                return { fallbackBackgroundColor: n || !r ? void 0 : r.backgroundColor };
            }),
            ae = X([
                Z(function (e) {
                    return { isDisabled: e("core/edit-post").isFeatureActive("disableEditorsKitColumnsBackgroundOptions") };
                }),
                ee({ backgroundColor: "color" }),
                ne,
                z(function (e) {
                    var t = window.editorskitInfo.editor,
                        n = parseFloat(t.version);
                    return !e.isDisabled && n < 7.4;
                }),
            ])(function (e) {
                var t = e.backgroundColor,
                    n = e.setBackgroundColor,
                    a = e.isTextColorDisabled;
                return Object(E.createElement)(
                    q,
                    null,
                    Object(E.createElement)(
                        $,
                        null,
                        !a && Object(E.createElement)(te, { title: Q("Color Settings", "block-options"), initialOpen: !1, colorSettings: [{ value: t.color, onChange: n, label: Q("Background Color", "block-options") }] })
                    )
                );
            });
        var re = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = n.fontSizes,
                r = n.colors,
                o = e.editorskit,
                i = e.textColor,
                c = e.customTextColor,
                T = e.backgroundColor,
                E = e.customBackgroundColor,
                s = e.bulletColor,
                h = e.fontSize,
                l = e.customFontSize,
                L = e.start,
                I = {};
            if (void 0 !== h) {
                var u = Object(A.find)(a, { slug: h });
                void 0 !== u && void 0 !== u.size && (I.fontSize = u.size + "px");
            } else void 0 !== l && (I.fontSize = l + "px");
            if (void 0 !== i) {
                if (void 0 !== r) {
                    var m = Object(A.find)(r, { slug: i });
                    void 0 !== m && void 0 !== m.color && (I.color = m.color);
                }
            } else void 0 !== c && (I.color = c);
            if (void 0 !== T) {
                if (void 0 !== r) {
                    var R = Object(A.find)(r, { slug: T });
                    void 0 !== R && void 0 !== R.color && (I.backgroundColor = R.color);
                }
            } else void 0 !== E && (I.backgroundColor = E);
            return void 0 !== s && ((I["--ek-bullet-color"] = s), ["core/list"].includes(t) && void 0 !== L && (I["--li-start"] = L - 1 + "")), void 0 !== o.indent && (I["--ek-indent"] = o.indent + "px"), I;
        };
        function oe(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t &&
                    (a = a.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, a);
            }
            return n;
        }
        var ie = wp.hooks.addFilter,
            ce = wp.element.Fragment,
            Te = wp.data.withSelect,
            Ee = wp.compose,
            se = Ee.compose,
            he = Ee.createHigherOrderComponent,
            Ae = ["core/list"],
            le = ["core/columns", "core/column"],
            Le = se(
                Te(function (e) {
                    var t = e("core/block-editor").getSettings();
                    return { fontSizes: t.fontSizes, colors: t.colors, selected: e("core/block-editor").getSelectedBlock(), select: e, isDisabledListTextSettings: e("core/edit-post").isFeatureActive("disableEditorsKitDevicesVisibility") };
                })
            ),
            Ie = he(function (e) {
                return Le(function (t) {
                    var n = t.select,
                        a = W()(t, ["select"]),
                        r = a.wrapperProps,
                        o = {},
                        c = n("core/block-editor").getBlock(a.clientId).attributes,
                        s = n("core/block-editor").getBlockName(a.clientId);
                    if (Ae.includes(s) || le.includes(s) || (void 0 !== c.editorskit && void 0 !== c.editorskit.indent && c.editorskit.indent)) {
                        var h = c.customFontSize,
                            A = c.fontSize,
                            l = c.bulletColor,
                            L = c.editorskit;
                        (h || A) && (o = Object.assign(o, { "data-custom-fontsize": 1 })),
                            l && (o = Object.assign(o, { "data-custom-bulletcolor": 1 })),
                            void 0 !== L && void 0 !== L.indent && L.indent && (o = Object.assign(o, { "data-ek-indent": 1 })),
                            (r = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                        ? oe(n, !0).forEach(function (t) {
                                              i()(e, t, n[t]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                        : oe(n).forEach(function (t) {
                                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                          });
                                }
                                return e;
                            })({}, r, { style: re(c, s, a) }, o));
                    }
                    return Object(E.createElement)(e, T()({}, a, { wrapperProps: r }));
                });
            }, "withTextSettings");
        ie(
            "editor.BlockEdit",
            "editorskit/block-panel",
            he(function (e) {
                return Le(function (t) {
                    var n = T()({}, t),
                        a = n.name,
                        r = n.isSelected,
                        o = n.isDisabledListTextSettings;
                    return Object(E.createElement)(ce, null, Object(E.createElement)(e, n), r && !o && Ae.includes(a) && Object(E.createElement)(V, n), r && !o && le.includes(a) && Object(E.createElement)(ae, n));
                });
            }, "withBlockPanel")
        ),
            ie("editor.BlockListBlock", "editorskit/withTextSettings", Ie),
            ie("blocks.getSaveContent.extraProps", "editorskit/applyTextSettings", function (e, t, n) {
                if (Ae.includes(t.name) || le.includes(t.name) || (void 0 !== n.editorskit && void 0 !== n.editorskit.indent && n.editorskit.indent)) {
                    void 0 !== e.style ? (e.style = Object.assign(e.style, re(n, t.name))) : (e.style = re(n, t.name));
                    var a = n.customFontSize,
                        r = n.fontSize,
                        o = n.textColor,
                        i = n.backgroundColor,
                        c = n.bulletColor,
                        T = n.editorskit;
                    r ? (e.className = h()(e.className, "has-" + r + "-font-size")) : a && (e.className = h()(e.className, "has-custom-size")),
                        o && (e.className = h()(e.className, "has-" + o + "-color")),
                        i && (e.className = h()(e.className, "has-" + i + "-background-color")),
                        c && (e.className = h()(e.className, "has-list-bullet-color")),
                        void 0 !== T && void 0 !== T.indent && T.indent && (e.className = h()(e.className, "has-ek-indent"));
                }
                return e;
            });
        var ue = wp.i18n.__,
            me = wp.hooks,
            Re = me.addFilter,
            pe = me.removeFilter,
            Oe = wp.element.Fragment,
            de = wp.data,
            Ne = de.withSelect,
            Se = de.select,
            Ce = wp.compose,
            fe = Ce.compose,
            be = Ce.createHigherOrderComponent,
            xe = Ce.withState,
            De = wp.blocks.hasBlockSupport,
            He = wp.blockEditor.InspectorAdvancedControls,
            We = wp.components.FormTokenField,
            ve = fe(
                xe({ customClassNames: [] }),
                Ne(function (e, t) {
                    var n = e("core/block-editor").getSelectedBlock(),
                        a = Object(A.get)(n, "attributes.className");
                    return (
                        a && (a = Object(A.replace)(a, ",", " ")),
                        n && a && Object(A.join)(t.customClassNames, " ") !== a && t.clientId === n.clientId && t.setState({ customClassNames: Object(A.split)(a, " ") }),
                        { suggestions: e("core/editor").getEditorSettings().editorskitCustomClassNames }
                    );
                })
            ),
            ge = be(function (e) {
                return ve(function (t) {
                    var n = T()({}, t),
                        a = De(n.name, "customClassName", !0),
                        r = n.customClassNames,
                        o = n.suggestions,
                        i = n.setState;
                    return a && n.isSelected
                        ? Object(E.createElement)(
                              Oe,
                              null,
                              Object(E.createElement)(e, n),
                              Object(E.createElement)(
                                  He,
                                  null,
                                  Object(E.createElement)(We, {
                                      label: ue("Additional CSS Class(es)", "block-options"),
                                      value: r,
                                      suggestions: o,
                                      maxSuggestions: 20,
                                      onChange: function (e) {
                                          n.setAttributes({ className: "" !== e ? Object(A.join)(e, " ") : void 0 }), i({ customClassNames: "" !== e ? e : void 0 });
                                      },
                                  })
                              )
                          )
                        : Object(E.createElement)(e, n);
                });
            }, "withInspectorControl");
        function ke(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t &&
                    (a = a.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, a);
            }
            return n;
        }
        Se("core/edit-post").isFeatureActive("disableEditorsKitCustomClassNamesTools") ||
            (pe("editor.BlockEdit", "core/editor/custom-class-name/with-inspector-control"), Re("editor.BlockEdit", "editorskit/custom-class-name/with-inspector-control", ge));
        var ye = wp.i18n.__,
            Be = wp.components.Toolbar,
            Pe = [
                { icon: "editor-alignleft", title: ye("Align text left", "block-options"), align: "left" },
                { icon: "editor-aligncenter", title: ye("Align text center", "block-options"), align: "center" },
                { icon: "editor-alignright", title: ye("Align text right", "block-options"), align: "right" },
                { icon: "editor-justify", title: ye("Align text justify", "block-options"), align: "justify" },
            ];
        var we = function (e) {
                var t = e.value,
                    n = e.onChange,
                    a = e.alignmentControls,
                    r = void 0 === a ? Pe : a,
                    o = e.label,
                    c = void 0 === o ? ye("Change text alignment", "block-options") : o,
                    T = e.isCollapsed,
                    s = void 0 === T || T;
                function h(e) {
                    return function () {
                        return n(t === e ? void 0 : e);
                    };
                }
                var l = Object(A.find)(r, function (e) {
                    return e.align === t;
                });
                return Object(E.createElement)(Be, {
                    isCollapsed: s,
                    icon: l ? l.icon : "editor-alignleft",
                    label: c,
                    controls: r.map(function (e) {
                        var n = e.align;
                        return (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2
                                    ? ke(n, !0).forEach(function (t) {
                                          i()(e, t, n[t]);
                                      })
                                    : Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                    : ke(n).forEach(function (t) {
                                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                      });
                            }
                            return e;
                        })({}, e, { isActive: t === n, role: s ? "menuitemradio" : void 0, onClick: h(n) });
                    }),
                });
            },
            Me = wp.i18n.__,
            Ue = wp.data.dispatch,
            Fe = wp.element.Fragment,
            Ge = wp.components,
            je = Ge.ToggleControl,
            Ke = Ge.TabPanel,
            Ve = function (e) {
                var t = e.clientId,
                    n = e.attributes,
                    a = e.reloadModal,
                    r = n.editorskit,
                    o = n.hasAlignmentOption,
                    c = function (e, n) {
                        void 0 === n && (n = !r[e]), delete r[e];
                        var o = Object.assign(i()({}, e, n), r);
                        Ue("core/block-editor").updateBlockAttributes(t, { editorskit: o }), a && a();
                    };
                if (void 0 !== r)
                    return Object(E.createElement)(
                        Fe,
                        null,
                        Object(E.createElement)("h3", null, Me("Responsive Visibility", "block-options")),
                        Object(E.createElement)(je, {
                            label: Me("Hide on Desktop", "block-options"),
                            checked: void 0 !== r.desktop && !r.desktop,
                            onChange: function () {
                                return c("desktop");
                            },
                        }),
                        Object(E.createElement)(je, {
                            label: Me("Hide on Tablet", "block-options"),
                            checked: void 0 !== r.tablet && !r.tablet,
                            onChange: function () {
                                return c("tablet");
                            },
                        }),
                        Object(E.createElement)(je, {
                            label: Me("Hide on Mobile", "block-options"),
                            checked: void 0 !== r.mobile && !r.mobile,
                            onChange: function () {
                                return c("mobile");
                            },
                        }),
                        void 0 !== o &&
                            o &&
                            Object(E.createElement)(
                                Fe,
                                null,
                                Object(E.createElement)("h3", null, Me("Responsive Text Alignment", "block-options")),
                                Object(E.createElement)("small", null, Me("Assign different alignment for tablet and mobile devices aside from the option you already have for desktop on the block toolbar.", "block-options")),
                                Object(E.createElement)(
                                    Ke,
                                    {
                                        className: "ek-responsive-tabpanel",
                                        activeClass: "is-primary",
                                        tabs: [
                                            { name: "mobile", title: Me("Mobile", "block-options"), className: "is-button is-default is-small" },
                                            { name: "tablet", title: Me("Tablet", "block-options"), className: "is-button is-default is-small" },
                                        ],
                                    },
                                    function (e) {
                                        switch (e.name) {
                                            case "mobile":
                                                return Object(E.createElement)(
                                                    Fe,
                                                    null,
                                                    Object(E.createElement)("p", null, Me("Alignment for Mobile Devices", "block-options")),
                                                    Object(E.createElement)(we, {
                                                        isCollapsed: !1,
                                                        value: void 0 !== r.mobileAlignment ? r.mobileAlignment : "",
                                                        onChange: function (e) {
                                                            return c("mobileAlignment", e);
                                                        },
                                                    })
                                                );
                                            case "tablet":
                                                return Object(E.createElement)(
                                                    Fe,
                                                    null,
                                                    Object(E.createElement)("p", null, Me("Alignment for Tablet Devices", "block-options")),
                                                    Object(E.createElement)(we, {
                                                        isCollapsed: !1,
                                                        value: void 0 !== r.tabletAlignment ? r.tabletAlignment : "",
                                                        onChange: function (e) {
                                                            return c("tabletAlignment", e);
                                                        },
                                                    })
                                                );
                                        }
                                    }
                                )
                            )
                    );
            },
            _e = wp.i18n.__,
            Qe = wp.data.dispatch,
            Ye = wp.element.Fragment,
            Xe = wp.components.ToggleControl,
            ze = function (e) {
                var t = e.clientId,
                    n = e.attributes,
                    a = e.reloadModal,
                    r = n.editorskit,
                    o = function (e) {
                        var n = !r[e];
                        delete r[e];
                        var o = Object.assign(i()({}, e, n), r);
                        Qe("core/block-editor").updateBlockAttributes(t, { editorskit: o }), a && a();
                    };
                if (void 0 !== r)
                    return Object(E.createElement)(
                        Ye,
                        null,
                        Object(E.createElement)(
                            "div",
                            { className: "editorskit-user-state-controls" },
                            Object(E.createElement)("hr", { className: "editorskit-divider" }),
                            Object(E.createElement)(Xe, {
                                label: _e("Hide on Loggedin Users", "block-options"),
                                help: r.loggedin ? _e("Toggle to hide this block when users are not logged in.", "block-options") : _e("Hidden when users are logged in.", "block-options"),
                                checked: void 0 !== r.loggedin && !r.loggedin,
                                onChange: function () {
                                    return o("loggedin");
                                },
                            }),
                            Object(E.createElement)(Xe, {
                                label: _e("Hide on Loggedout Users", "block-options"),
                                help: r.loggedout ? _e("Toggle to hide this block when users are guests or logged out.", "block-options") : _e("Hidden on guests or logged out users.", "block-options"),
                                checked: void 0 !== r.loggedout && !r.loggedout,
                                onChange: function () {
                                    return o("loggedout");
                                },
                            })
                        )
                    );
            },
            Ze = wp.i18n.__,
            qe = wp.element.Fragment,
            Je = wp.components.ToggleControl,
            $e = function (e) {
                var t = e.attributes,
                    n = e.setAttributes,
                    a = t.isHeightFullScreen;
                return Object(E.createElement)(
                    qe,
                    null,
                    Object(E.createElement)(Je, {
                        label: Ze("Full Screen Height", "block-options"),
                        checked: !!a,
                        onChange: function () {
                            return n({ isHeightFullScreen: !a });
                        },
                        help: Ze(a ? "Full screen height is enabled." : "Toggle to display this block's height full screen of the browser viewport.", "block-options"),
                    })
                );
            },
            et = wp.i18n.__,
            tt = wp.element.Fragment,
            nt = wp.components.ToggleControl,
            at = function (e) {
                var t = e.attributes,
                    n = e.setAttributes,
                    a = t.isFullWidth;
                return Object(E.createElement)(
                    tt,
                    null,
                    Object(E.createElement)(nt, {
                        label: et("Full Width Display", "block-options"),
                        checked: !!a,
                        onChange: function () {
                            return n({ isFullWidth: !a });
                        },
                        help: et(a ? "Full width display is enabled." : "Toggle to display this block's as full width.", "block-options"),
                    })
                );
            },
            rt = wp.i18n.__,
            ot = wp.hooks.addFilter,
            it = wp.element.Fragment,
            ct = wp.data,
            Tt = ct.withSelect,
            Et = ct.select,
            st = wp.blockEditor,
            ht = st.InspectorAdvancedControls,
            At = st.InspectorControls,
            lt = wp.compose,
            Lt = lt.compose,
            It = lt.createHigherOrderComponent,
            ut = wp.components.PanelBody,
            mt = wp.blocks.hasBlockSupport,
            Rt = ["core/block", "core/freeform", "core/shortcode", "core/template", "core/nextpage", "editorskit/import", "editorskit/shareablock"],
            pt = Lt(
                Tt(function () {
                    return {
                        isDisabledButtonWidth: Et("core/edit-post").isFeatureActive("disableEditorsKitButtonFullwidthOptions"),
                        isDisabledDevices: Et("core/edit-post").isFeatureActive("disableEditorsKitDevicesVisibility"),
                        isDisabledUserState: Et("core/edit-post").isFeatureActive("disableEditorsKitUserStateVisibility"),
                    };
                })
            );
        ot(
            "editor.BlockEdit",
            "editorskit/advanced",
            It(function (e) {
                return pt(function (t) {
                    var n = T()({}, t),
                        a = n.name,
                        r = n.attributes,
                        o = n.setAttributes,
                        i = n.isSelected,
                        c = n.isDisabledDevices,
                        s = n.isDisabledUserState,
                        h = n.isDisabledButtonWidth,
                        A = r.editorskit,
                        l = r.blockOpts,
                        L = mt(a, "hasHeightFullScreen"),
                        I = mt(a, "hasFullWidthDisplay");
                    if (void 0 !== A && !A.migrated && l) {
                        (n.attributes.editorskit = Object.assign(n.attributes.editorskit, {
                            devices: !1,
                            desktop: !(("show" === l.devices && "on" !== l.desktop) || ("hide" === l.devices && "on" === l.desktop)),
                            tablet: !(("show" === l.devices && "on" !== l.tablet) || ("hide" === l.devices && "on" === l.tablet)),
                            mobile: !(("show" === l.devices && "on" !== l.mobile) || ("hide" === l.devices && "on" === l.mobile)),
                            loggedin: "out" !== l.state || "in" === l.state,
                            loggedout: "in" !== l.state || "out" === l.state,
                            acf_visibility: l.acf_visibility ? l.acf_visibility : "",
                            acf_field: l.acf_field ? l.acf_field : "",
                            acf_condition: l.acf_condition ? l.acf_condition : "",
                            acf_value: l.acf_value ? l.acf_value : "",
                            logic: l.logic ? l.logic : "",
                            migrated: !0,
                        })),
                            n.attributes.className || (n.attributes.className = "");
                        var u = n.attributes.className
                            .replace("b" + l.id, "")
                            .replace("blockopts-show", "")
                            .replace("blockopts-hide", "")
                            .replace("blockopts-desktop", "")
                            .replace("blockopts-tablet", "")
                            .replace("blockopts-mobile", "");
                        (u = u.trim()), (n.attributes.className = u), o({ editorskit: n.attributes.editorskit, className: u });
                    }
                    return Object(E.createElement)(
                        it,
                        null,
                        Object(E.createElement)(e, n),
                        L && Object(E.createElement)(ht, null, $e(n)),
                        !h && I && Object(E.createElement)(ht, null, at(n)),
                        i &&
                            !c &&
                            !Rt.includes(a) &&
                            Object(E.createElement)(
                                At,
                                null,
                                Object(E.createElement)(
                                    ut,
                                    { title: rt("Responsive", "block-options"), initialOpen: !1, className: "editorskit-panel" },
                                    Object(E.createElement)(
                                        "small",
                                        null,
                                        rt("Attention: The display settings (show/hide for mobile, tablet or desktop) will only take effect once you are on the live page, and not while you're editing in Gutenberg.", "block-options")
                                    ),
                                    Ve(n)
                                )
                            ),
                        i && !Rt.includes(a) && Object(E.createElement)(ht, null, !s && ze(n))
                    );
                });
            }, "withAdvancedControls")
        );
        n(161);
        var Ot = n(2),
            dt = n.n(Ot),
            Nt = n(3),
            St = n.n(Nt),
            Ct = n(4),
            ft = n.n(Ct),
            bt = n(1),
            xt = n.n(bt),
            Dt = n(7),
            Ht = n.n(Dt),
            Wt = n(5),
            vt = n.n(Wt),
            gt = wp.i18n.__,
            kt = wp.element.Component,
            yt = wp.compose,
            Bt = yt.compose,
            Pt = yt.ifCondition,
            wt = wp.editPost.PluginPostStatusInfo,
            Mt = wp.data,
            Ut = Mt.select,
            Ft = Mt.withSelect,
            Gt = Mt.withDispatch,
            jt = wp.components,
            Kt = jt.withSpokenMessages,
            Vt = jt.CheckboxControl,
            _t = (function (e) {
                function t() {
                    var e;
                    return dt()(this, t), ((e = ft()(this, xt()(t).apply(this, arguments))).initialize = e.initialize.bind(Ht()(e))), e;
                }
                return (
                    vt()(t, e),
                    St()(t, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                this.initialize();
                            },
                        },
                        {
                            key: "componentDidUpdate",
                            value: function () {
                                this.initialize();
                            },
                        },
                        {
                            key: "initialize",
                            value: function () {
                                var e = this.props,
                                    t = e.isDisabled,
                                    n = e.postmeta;
                                if (document.querySelector(".editor-post-title__block")) {
                                    var a = void 0 !== n && void 0 !== n._editorskit_title_hidden && n._editorskit_title_hidden,
                                        r = a ? "editorskit-title-hidden" : "editorskit-title-visible";
                                    a ? document.body.classList.remove("editorskit-title-visible") : document.body.classList.remove("editorskit-title-hidden"),
                                        document.body.classList.add(r),
                                        t ? document.body.classList.add("editorskit-title-visible-disabled") : document.body.classList.remove("editorskit-title-visible-disabled");
                                }
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    t = e.onToggle,
                                    n = e.postmeta,
                                    a = e.posttype;
                                if (["wp_block"].includes(a)) return !1;
                                var r = void 0 !== n && void 0 !== n._editorskit_title_hidden && n._editorskit_title_hidden;
                                return Object(E.createElement)(
                                    wt,
                                    null,
                                    Object(E.createElement)(Vt, {
                                        className: "editorskit-hide-title-label",
                                        label: gt("Hide " + a + " Title", "block-options"),
                                        checked: r,
                                        onChange: t,
                                        help: r ? gt("Title is hidden on your website.", "block-options") : null,
                                    })
                                );
                            },
                        },
                    ]),
                    t
                );
            })(kt),
            Qt = Bt(
                Ft(function () {
                    return { posttype: Ut("core/editor").getEditedPostAttribute("type"), postmeta: Ut("core/editor").getEditedPostAttribute("meta"), isDisabled: Ut("core/edit-post").isFeatureActive("disableEditorsKitToggleTitleTools") };
                }),
                Gt(function (e, t) {
                    var n;
                    return (
                        void 0 !== t.postmeta && void 0 !== t.postmeta._editorskit_title_hidden && (n = t.postmeta._editorskit_title_hidden),
                        {
                            onToggle: function () {
                                e("core/editor").editPost({ meta: { _editorskit_title_hidden: !n } });
                            },
                        }
                    );
                }),
                Pt(function (e) {
                    return !e.isDisabled;
                }),
                Kt
            )(_t);
        (0, wp.plugins.registerPlugin)("editorskit-disable-title", { icon: !1, render: Qt });
        var Yt = wp.i18n.__,
            Xt = wp.keycodes,
            zt = Xt.displayShortcut,
            Zt = Xt.rawShortcut,
            qt = Xt.ESCAPE,
            Jt = wp.data,
            $t = Jt.withSelect,
            en = Jt.withDispatch,
            tn = Jt.select,
            nn = wp.compose,
            an = nn.compose,
            rn = nn.ifCondition,
            on = wp.element,
            cn = on.Component,
            Tn = on.Fragment,
            En = wp.components,
            sn = En.withSpokenMessages,
            hn = En.Button,
            An = En.KeyboardShortcuts,
            ln = wp.editPost.PluginMoreMenuItem,
            Ln = (function (e) {
                vt()(n, e);
                var t = (function (e) {
                    function t() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }
                    return function () {
                        var n,
                            a = xt()(e);
                        if (t()) {
                            var r = xt()(this).constructor;
                            n = Reflect.construct(a, arguments, r);
                        } else n = a.apply(this, arguments);
                        return ft()(this, n);
                    };
                })(n);
                function n() {
                    var e;
                    return dt()(this, n), ((e = t.apply(this, arguments)).handleEscape = e.handleEscape.bind(Ht()(e))), (e.openPreview = e.openPreview.bind(Ht()(e))), (e.state = { isOpen: !1, deviceType: "desktop" }), e;
                }
                return (
                    St()(n, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                document.addEventListener("keydown", this.handleEscape);
                            },
                        },
                        {
                            key: "componentWillUnmount",
                            value: function () {
                                document.removeEventListener("keydown", this.handleEscape);
                            },
                        },
                        {
                            key: "handleEscape",
                            value: function (e) {
                                this.state.isOpen && e.keyCode === qt && this.setState({ isOpen: !1 });
                            },
                        },
                        {
                            key: "openPreview",
                            value: function () {
                                var e = this,
                                    t = this.props,
                                    n = t.isDraft,
                                    a = t.savePost,
                                    r = t.autosave;
                                n ? a({ isPreview: !0 }) : r({ isPreview: !0 }),
                                    setTimeout(function () {
                                        e.setState({ isOpen: !0 });
                                    }, 100);
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this,
                                    t = this.props.previewLink,
                                    n = this.state.isOpen;
                                return Object(E.createElement)(
                                    Tn,
                                    null,
                                    Object(E.createElement)(
                                        ln,
                                        {
                                            icon: n && "yes",
                                            role: "menuitemcheckbox",
                                            info: Yt("Show preview without opening new window.", "block-options"),
                                            onClick: function () {
                                                e.openPreview();
                                            },
                                            shortcut: zt.primaryShift("p"),
                                        },
                                        Yt("Preview", "block-options")
                                    ),
                                    Object(E.createElement)(An, {
                                        bindGlobal: !0,
                                        shortcuts: i()({}, Zt.primaryShift("p"), function () {
                                            e.openPreview();
                                        }),
                                    }),
                                    n
                                        ? Object(E.createElement)(
                                              "div",
                                              { className: "wp-full-overlay sites-preview editorskit-preview theme-install-overlay  preview-" + this.state.deviceType, style: { display: "block" } },
                                              Object(E.createElement)(
                                                  "div",
                                                  { className: "wp-full-overlay-sidebar" },
                                                  Object(E.createElement)(
                                                      "div",
                                                      { className: "wp-full-overlay-footer" },
                                                      Object(E.createElement)(
                                                          "div",
                                                          { className: "close-full-overlay-wrapper" },
                                                          Object(E.createElement)(
                                                              hn,
                                                              {
                                                                  className: "close-full-overlay",
                                                                  onClick: function () {
                                                                      e.setState({ isOpen: !1 });
                                                                  },
                                                              },
                                                              Object(E.createElement)("span", { className: "screen-reader-text" }, Yt("Close preview mode", "block-options"))
                                                          )
                                                      ),
                                                      Object(E.createElement)(
                                                          "div",
                                                          { className: "devices-wrapper" },
                                                          Object(E.createElement)("h3", null, Yt("Live Preview", "block-options")),
                                                          Object(E.createElement)(
                                                              "div",
                                                              { className: "devices" },
                                                              Object(E.createElement)(
                                                                  hn,
                                                                  {
                                                                      className: "preview-desktop",
                                                                      isActive: !0,
                                                                      onClick: function () {
                                                                          e.setState({ deviceType: "desktop" });
                                                                      },
                                                                  },
                                                                  Object(E.createElement)("span", { className: "screen-reader-text" }, Yt("Enter desktop preview mode", "block-options"))
                                                              ),
                                                              Object(E.createElement)(
                                                                  hn,
                                                                  {
                                                                      className: "preview-tablet",
                                                                      onClick: function () {
                                                                          e.setState({ deviceType: "tablet" });
                                                                      },
                                                                  },
                                                                  Object(E.createElement)("span", { className: "screen-reader-text" }, Yt("Enter tablet preview mode", "block-options"))
                                                              ),
                                                              Object(E.createElement)(
                                                                  hn,
                                                                  {
                                                                      className: "preview-mobile",
                                                                      onClick: function () {
                                                                          e.setState({ deviceType: "mobile" });
                                                                      },
                                                                  },
                                                                  Object(E.createElement)("span", { className: "screen-reader-text" }, Yt("Enter mobile preview mode", "block-options"))
                                                              )
                                                          )
                                                      )
                                                  )
                                              ),
                                              Object(E.createElement)(
                                                  "div",
                                                  { className: "wp-full-overlay-main" },
                                                  Object(E.createElement)("iframe", { src: t + "&editorskitPreview=true", title: Yt("Preview", "block-options"), target: "Preview" })
                                              )
                                          )
                                        : null
                                );
                            },
                        },
                    ]),
                    n
                );
            })(cn),
            In = an([
                $t(function (e) {
                    var t = e.forcePreviewLink,
                        n = tn("core/editor"),
                        a = n.getEditedPostPreviewLink,
                        r = n.getEditedPostAttribute,
                        o = tn("core/edit-post").isFeatureActive,
                        i = a();
                    return {
                        previewLink: void 0 !== t ? t : i,
                        isDraft: -1 !== ["draft", "auto-draft"].indexOf(r("status")),
                        isDisabled: tn("core/edit-post").isFeatureActive("disableEditorsKitReadingTimeWriting"),
                        isIceberg: o("icebergWritingMode"),
                    };
                }),
                en(function (e) {
                    return { autosave: e("core/editor").autosave, savePost: e("core/editor").savePost };
                }),
                rn(function (e) {
                    return !e.isDisabled && !e.isIceberg;
                }),
                sn,
            ])(Ln);
        (0, wp.plugins.registerPlugin)("editorskit-customizer-preview", { icon: !1, render: In });
        var un = wp.i18n.__,
            mn = wp.data,
            Rn = mn.withSelect,
            pn = mn.withDispatch,
            On = mn.dispatch,
            dn = mn.select,
            Nn = wp.compose.compose,
            Sn = wp.element,
            Cn = Sn.Fragment,
            fn = Sn.Component,
            bn = wp.editPost.PluginMoreMenuItem,
            xn = wp.components.withSpokenMessages,
            Dn = (function (e) {
                function t() {
                    return dt()(this, t), ft()(this, xt()(t).apply(this, arguments));
                }
                return (
                    vt()(t, e),
                    St()(t, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                var e = document.querySelector(".edit-post-header__settings"),
                                    t = '<span class="editorskit-auto-save-disabled--label">' + un("Auto Save Disabled", "block-options") + "</span>";
                                if (e) {
                                    e.insertAdjacentHTML("afterbegin", t), this.sync();
                                }
                            },
                        },
                        {
                            key: "componentDidUpdate",
                            value: function () {
                                this.sync();
                            },
                        },
                        {
                            key: "sync",
                            value: function () {
                                var e = this.props,
                                    t = e.isAvailable,
                                    n = e.isActive,
                                    a = e.isDisabled,
                                    r = e.editorSettings,
                                    o = 60,
                                    i = document.querySelector(".editorskit-auto-save-disabled--label");
                                if ((n || a || void 0 === t || (o = 259200), r.autosaveInterval !== o)) {
                                    var c = Object.assign(this.props.editorSettings, { autosaveInterval: o });
                                    On("core/editor").updateEditorSettings(c), On("core/editor").refreshPost();
                                }
                                i.className = "editorskit-auto-save-disabled--label editorskit-auto-save-disabled--" + o;
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    t = e.isDisabled,
                                    n = e.onToggle,
                                    a = e.editorSettings;
                                if (t) return null;
                                var r = this.props.isActive;
                                return (
                                    259200 !== a.autosaveInterval && (r = !0),
                                    Object(E.createElement)(
                                        Cn,
                                        null,
                                        Object(E.createElement)(
                                            bn,
                                            { icon: r && "yes", role: "menuitemcheckbox", info: un("Toggle to disable or enable editor autosaving feature.", "block-options"), onClick: n },
                                            un("Auto Save", "block-options")
                                        )
                                    )
                                );
                            },
                        },
                    ]),
                    t
                );
            })(fn),
            Hn = Nn([
                Rn(function () {
                    return {
                        isAvailable: dn("core/edit-post").getPreference("features").editorskitAutoSave,
                        isActive: dn("core/edit-post").isFeatureActive("editorskitAutoSave"),
                        isDisabled: dn("core/edit-post").isFeatureActive("disableEditorsKitAutosaveTools"),
                        editorSettings: dn("core/editor").getEditorSettings(),
                    };
                }),
                pn(function () {
                    return {
                        onToggle: function () {
                            On("core/edit-post").toggleFeature("editorskitAutoSave");
                        },
                    };
                }),
                xn,
            ])(Dn);
        (0, wp.plugins.registerPlugin)("editorskit-editor-autosave", { icon: !1, render: Hn });
        var Wn = wp.i18n.__,
            vn = wp.data,
            gn = vn.withSelect,
            kn = vn.withDispatch,
            yn = wp.compose.compose,
            Bn = wp.element,
            Pn = Bn.Fragment,
            wn = Bn.Component,
            Mn = wp.editPost.PluginMoreMenuItem,
            Un = wp.components.withSpokenMessages,
            Fn = (function (e) {
                function t() {
                    return dt()(this, t), ft()(this, xt()(t).apply(this, arguments));
                }
                return (
                    vt()(t, e),
                    St()(t, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                this.sync();
                            },
                        },
                        {
                            key: "componentDidUpdate",
                            value: function () {
                                this.sync();
                            },
                        },
                        {
                            key: "sync",
                            value: function () {
                                var e = this.props,
                                    t = e.isActive,
                                    n = e.isDisabled,
                                    a = window.editorskitInfo.editor;
                                if ((t && !n ? document.body.classList.add("is-guide-lines-on") : document.body.classList.remove("is-guide-lines-on"), void 0 !== a.version && !n)) {
                                    var r = parseFloat(a.version);
                                    r >= 7 && r < 7.7 ? document.body.classList.add("is-guide-lines-new") : r >= 7.7 && document.body.classList.add("is-guide-lines-new-ui");
                                }
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    t = e.isActive,
                                    n = e.onToggle;
                                return e.isDisabled
                                    ? null
                                    : Object(E.createElement)(
                                          Pn,
                                          null,
                                          Object(E.createElement)(
                                              Mn,
                                              { icon: t && "yes", role: "menuitemcheckbox", info: Wn("Show visible guide lines on title and blocks", "block-options"), onClick: n },
                                              Wn("Block Guide Lines", "block-options")
                                          )
                                      );
                            },
                        },
                    ]),
                    t
                );
            })(wn),
            Gn = yn([
                gn(function (e) {
                    return { isActive: e("core/edit-post").isFeatureActive("blockGuideLines"), isDisabled: e("core/edit-post").isFeatureActive("disableEditorsKitGuidelinesTools") };
                }),
                kn(function (e) {
                    return {
                        onToggle: function () {
                            e("core/edit-post").toggleFeature("blockGuideLines");
                        },
                    };
                }),
                Un,
            ])(Fn);
        (0, wp.plugins.registerPlugin)("editorskit-block-guidelines", { icon: !1, render: Gn });
        var jn = wp.i18n.__,
            Kn = wp.data,
            Vn = Kn.withSelect,
            _n = Kn.withDispatch,
            Qn = wp.compose.compose,
            Yn = wp.element,
            Xn = Yn.Fragment,
            zn = Yn.Component,
            Zn = wp.editPost.PluginMoreMenuItem,
            qn = wp.components.withSpokenMessages,
            Jn = (function (e) {
                function t() {
                    return dt()(this, t), ft()(this, xt()(t).apply(this, arguments));
                }
                return (
                    vt()(t, e),
                    St()(t, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                this.sync();
                            },
                        },
                        {
                            key: "componentDidUpdate",
                            value: function () {
                                this.sync();
                            },
                        },
                        {
                            key: "sync",
                            value: function () {
                                var e = this.props,
                                    t = e.isActive,
                                    n = e.isDisabled;
                                t && !n ? document.body.classList.add("is-editorkit-height-on") : document.body.classList.remove("is-editorkit-height-on");
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    t = e.isActive,
                                    n = e.onToggle;
                                return e.isDisabled
                                    ? null
                                    : Object(E.createElement)(
                                          Xn,
                                          null,
                                          Object(E.createElement)(
                                              Zn,
                                              { icon: t && "yes", role: "menuitemcheckbox", info: jn("Toggle to change editor min-height similar to browser viewport.", "block-options"), onClick: n },
                                              jn("Editor Height", "block-options")
                                          )
                                      );
                            },
                        },
                    ]),
                    t
                );
            })(zn),
            $n = Qn([
                Vn(function (e) {
                    return { isActive: e("core/edit-post").isFeatureActive("editorMinHeight"), isDisabled: e("core/edit-post").isFeatureActive("disableEditorsKitHeightTools") };
                }),
                _n(function (e) {
                    return {
                        onToggle: function () {
                            e("core/edit-post").toggleFeature("editorMinHeight");
                        },
                    };
                }),
                qn,
            ])(Jn);
        (0, wp.plugins.registerPlugin)("editorskit-editor-height", { icon: !1, render: $n });
        var ea = wp.i18n.__,
            ta = [
                {
                    title: ea("Markdown Formatting", "block-options"),
                    shortcuts: [
                        { keyCombination: ["##", "SPACE"], description: ea("Large header (h2)", "block-options") },
                        { keyCombination: ["###", "SPACE"], description: ea("Medium header (h3)", "block-options") },
                        { keyCombination: ["####", "SPACE"], description: ea("Small header (h4)", "block-options") },
                        { keyCombination: ["1.", "SPACE"], description: ea("Numbered list", "block-options") },
                        { keyCombination: ["*", "SPACE"], description: ea("Bulleted list", "block-options") },
                        { keyCombination: [">", "SPACE"], description: ea("Blockquote", "block-options") },
                        { keyCombination: ["_italic_"], description: ea("Italic", "block-options") },
                        { keyCombination: ["*bold*"], description: ea("Bold", "block-options") },
                        { keyCombination: ["~Strikethrough~"], description: ea("Strikethrough", "block-options") },
                        { keyCombination: ["`code`"], description: ea("Code", "block-options") },
                    ],
                },
            ],
            na = wp.i18n.__,
            aa = wp.element,
            ra = aa.Fragment,
            oa = aa.Component,
            ia = wp.editPost.PluginMoreMenuItem,
            ca = wp.compose,
            Ta = ca.compose,
            Ea = ca.ifCondition,
            sa = wp.data,
            ha = sa.select,
            Aa = sa.withSelect,
            la = wp.components,
            La = la.withSpokenMessages,
            Ia = la.Modal,
            ua = (function (e) {
                function t() {
                    var e;
                    return dt()(this, t), ((e = ft()(this, xt()(t).apply(this, arguments))).state = { isOpen: !1 }), e;
                }
                return (
                    vt()(t, e),
                    St()(t, [
                        {
                            key: "render",
                            value: function () {
                                var e = this,
                                    t = function (e) {
                                        var t = e.shortcuts;
                                        return Object(E.createElement)(
                                            "dl",
                                            { className: "edit-post-keyboard-shortcut-help__shortcut-list" },
                                            t.map(function (e, t) {
                                                var n = e.keyCombination,
                                                    a = e.description,
                                                    r = e.ariaLabel;
                                                return Object(E.createElement)(
                                                    "div",
                                                    { className: "edit-post-keyboard-shortcut-help__shortcut", key: t },
                                                    Object(E.createElement)("div", { className: "edit-post-keyboard-shortcut-help__shortcut-description" }, a),
                                                    Object(E.createElement)(
                                                        "div",
                                                        { className: "edit-post-keyboard-shortcut-help__shortcut-term" },
                                                        Object(E.createElement)(
                                                            "kbd",
                                                            { className: "edit-post-keyboard-shortcut-help__shortcut-key-combination", "aria-label": r },
                                                            (function (e) {
                                                                return e.map(function (e, t) {
                                                                    return "+" === e ? Object(E.createElement)(ra, { key: t }, e) : Object(E.createElement)("kbd", { key: t, className: "edit-post-keyboard-shortcut-help__shortcut-key" }, e);
                                                                });
                                                            })(Object(A.castArray)(n))
                                                        )
                                                    )
                                                );
                                            })
                                        );
                                    },
                                    n = function (e) {
                                        var n = e.title,
                                            a = e.shortcuts;
                                        return Object(E.createElement)(
                                            "section",
                                            { className: "edit-post-keyboard-shortcut-help__section" },
                                            Object(E.createElement)("h2", { className: "edit-post-keyboard-shortcut-help__section-title" }, n),
                                            Object(E.createElement)(t, { shortcuts: a })
                                        );
                                    };
                                return Object(E.createElement)(
                                    ra,
                                    null,
                                    Object(E.createElement)(
                                        ia,
                                        {
                                            icon: null,
                                            role: "menuitemcheckbox",
                                            onClick: function () {
                                                e.setState({ isOpen: !0 });
                                            },
                                        },
                                        na("Markdown Formatting", "block-options")
                                    ),
                                    this.state.isOpen
                                        ? Object(E.createElement)(
                                              Ia,
                                              {
                                                  title: na("Keyboard Shortcuts", "block-options"),
                                                  onRequestClose: function () {
                                                      return e.setState({ isOpen: !1 });
                                                  },
                                                  closeLabel: na("Close", "block-options"),
                                                  icon: null,
                                                  className: "editorskit-modal-component components-modal--editorskit-markdown",
                                              },
                                              ta.map(function (e, t) {
                                                  return Object(E.createElement)(n, T()({ key: t }, e));
                                              })
                                          )
                                        : null
                                );
                            },
                        },
                    ]),
                    t
                );
            })(oa),
            ma = Ta(
                Aa(function () {
                    return { isDisabled: ha("core/edit-post").isFeatureActive("disableEditorsKitMarkdownWriting") };
                }),
                Ea(function (e) {
                    return !e.isDisabled;
                }),
                La
            )(ua);
        (0, wp.plugins.registerPlugin)("editorskit-markdown-formatting", { icon: !1, render: ma });
        var Ra = wp.i18n.__,
            pa = wp.data.withSelect,
            Oa = wp.compose.compose,
            da = wp.element,
            Na = da.Fragment,
            Sa = da.Component,
            Ca = wp.editPost.PluginMoreMenuItem,
            fa = wp.components.withSpokenMessages,
            ba = (function (e) {
                function t() {
                    return dt()(this, t), ft()(this, xt()(t).apply(this, arguments));
                }
                return (
                    vt()(t, e),
                    St()(t, [
                        {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    t = e.isActive,
                                    n = e.isDisabled;
                                return !t || n
                                    ? null
                                    : Object(E.createElement)(
                                          Na,
                                          null,
                                          Object(E.createElement)(
                                              Ca,
                                              {
                                                  role: "menuitemcheckbox",
                                                  onClick: function () {
                                                      var e = document.querySelectorAll(".edit-post-layout__metaboxes");
                                                      e[0] && e[0].scrollIntoView();
                                                  },
                                              },
                                              Ra("View Custom Fields", "block-options")
                                          )
                                      );
                            },
                        },
                    ]),
                    t
                );
            })(Sa),
            xa = Oa([
                pa(function (e) {
                    return { isActive: e("core/editor").getEditorSettings().enableCustomFields, isDisabled: e("core/edit-post").isFeatureActive("disableEditorsKitScrollDownTools") };
                }),
                fa,
            ])(ba);
        (0, wp.plugins.registerPlugin)("editorskit-scrolldown", { icon: !1, render: xa });
        var Da = n(64),
            Ha = wp.i18n.__,
            Wa = wp.compose.compose,
            va = wp.element,
            ga = va.Fragment,
            ka = va.Component,
            ya = wp.editPost.PluginMoreMenuItem,
            Ba = wp.components,
            Pa = Ba.withSpokenMessages,
            wa = Ba.Modal,
            Ma = (function (e) {
                function t() {
                    var e;
                    return dt()(this, t), ((e = ft()(this, xt()(t).apply(this, arguments))).state = { isOpen: !1 }), e;
                }
                return (
                    vt()(t, e),
                    St()(t, [
                        {
                            key: "render",
                            value: function () {
                                var e = this;
                                return Object(E.createElement)(
                                    ga,
                                    null,
                                    Object(E.createElement)(
                                        ya,
                                        {
                                            icon: null,
                                            role: "menuitemcheckbox",
                                            onClick: function () {
                                                e.setState({ isOpen: !0 });
                                            },
                                        },
                                        Ha("EditorsKit Settings", "block-options")
                                    ),
                                    this.state.isOpen
                                        ? Object(E.createElement)(
                                              wa,
                                              {
                                                  title: Ha("EditorsKit Features Manager", "block-options"),
                                                  onRequestClose: function () {
                                                      return e.setState({ isOpen: !1 });
                                                  },
                                                  closeLabel: Ha("Close", "block-options"),
                                                  icon: null,
                                                  className: "editorskit-modal-component components-modal--editorskit-features-manager",
                                              },
                                              Object(E.createElement)(Da.a, null)
                                          )
                                        : null
                                );
                            },
                        },
                    ]),
                    t
                );
            })(ka),
            Ua = Wa([Pa])(Ma);
        (0, wp.plugins.registerPlugin)("editorskit-features-manager", { icon: !1, render: Ua });
        var Fa = wp.data,
            Ga = Fa.withSelect,
            ja = Fa.dispatch,
            Ka = wp.compose.compose,
            Va = wp.blocks.parse,
            _a = wp.element.Component,
            Qa = wp.components.withSpokenMessages,
            Ya = (function (e) {
                function t() {
                    var e;
                    return dt()(this, t), ((e = ft()(this, xt()(t).apply(this, arguments))).state = { isLoaded: !1 }), e;
                }
                return (
                    vt()(t, e),
                    St()(t, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                this.addCodeMirror();
                            },
                        },
                        {
                            key: "componentDidUpdate",
                            value: function () {
                                this.addCodeMirror();
                            },
                        },
                        {
                            key: "addCodeMirror",
                            value: function () {
                                var e = this.props,
                                    t = e.isDisabled,
                                    n = e.editorMode;
                                if (t) return null;
                                var a = document.querySelector(".editor-post-text-editor");
                                if ("text" === n && a && !this.state.isLoaded) {
                                    var r = wp.codeEditor.defaultSettings ? _.clone(wp.codeEditor.defaultSettings) : {};
                                    document.body.classList.add("editorskit-editor-loaded"),
                                        (r.codemirror = _.extend({}, r.codemirror, { mode: "text/html", lineNumbers: !0, indentUnit: 2, tabSize: 2, height: "auto", lineWrapping: !0, scrollbarStyle: "null" }));
                                    var o = wp.codeEditor.initialize(a, r);
                                    o.codemirror.on("change", function (e) {
                                        var t = e.getValue();
                                        (a.innerHTML = t), ja("core/editor").editPost({ content: t });
                                    }),
                                        o.codemirror.on("blur", function (e) {
                                            var t = e.getValue(),
                                                n = Va(t);
                                            ja("core/editor").resetEditorBlocks(n);
                                        }),
                                        this.setState({ isLoaded: !0 });
                                } else "visual" === n && this.state.isLoaded && this.setState({ isLoaded: !1 });
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                return null;
                            },
                        },
                    ]),
                    t
                );
            })(_a),
            Xa = Ka([
                Ga(function (e) {
                    return { readyState: document.readyState, isDisabled: e("core/edit-post").isFeatureActive("disableEditorsKitCodeHighlightTools"), editorMode: e("core/edit-post").getEditorMode() };
                }),
                Qa,
            ])(Ya);
        (0, wp.plugins.registerPlugin)("editorskit-code-editor", { icon: !1, render: Xa });
        var za = wp.data.withSelect,
            Za = wp.compose.compose,
            qa = wp.element.Component,
            Ja = wp.components.withSpokenMessages,
            $a = (function (e) {
                function t() {
                    return dt()(this, t), ft()(this, xt()(t).apply(this, arguments));
                }
                return (
                    vt()(t, e),
                    St()(t, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                this.sync();
                            },
                        },
                        {
                            key: "componentDidUpdate",
                            value: function () {
                                this.sync();
                            },
                        },
                        {
                            key: "sync",
                            value: function () {
                                this.props.isDisabled ? document.body.classList.remove("is-editorskit-heading-label-on") : document.body.classList.add("is-editorskit-heading-label-on");
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                return null;
                            },
                        },
                    ]),
                    t
                );
            })(qa),
            er = Za([
                za(function (e) {
                    return { isDisabled: e("core/edit-post").isFeatureActive("disableEditorsKitHeadingLabelWriting") };
                }),
                Ja,
            ])($a);
        (0, wp.plugins.registerPlugin)("editorskit-heading-label", { icon: !1, render: er });
        var tr = n(32),
            nr = n.n(tr),
            ar = wp.element,
            rr = ar.Component,
            or = ar.Fragment,
            ir = wp.editor.mediaUpload,
            cr = wp.compose.compose,
            Tr = wp.components,
            Er = Tr.DropZone,
            sr = Tr.withSpokenMessages,
            hr = wp.data,
            Ar = hr.withDispatch,
            lr = hr.select,
            Lr = ["image"],
            Ir = (function (e) {
                function t() {
                    var e;
                    return dt()(this, t), ((e = ft()(this, xt()(t).apply(this, arguments))).addFile = e.addFile.bind(Ht()(e))), (e.onSelectFile = e.onSelectFile.bind(Ht()(e))), e;
                }
                return (
                    vt()(t, e),
                    St()(t, [
                        {
                            key: "addFile",
                            value: function (e) {
                                var t = this;
                                document.body.classList.add("is-editorskit-uploading-featured"),
                                    ir({
                                        allowedTypes: Lr,
                                        filesList: e,
                                        onFileChange: function (e) {
                                            var n = nr()(e, 1)[0];
                                            return t.onSelectFile(n);
                                        },
                                    });
                            },
                        },
                        {
                            key: "onSelectFile",
                            value: function (e) {
                                e && e.url && this.props.onUpdateImage(e);
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                return Object(E.createElement)(or, null, Object(E.createElement)(Er, { onFilesDrop: this.addFile, label: this.props.label }));
                            },
                        },
                    ]),
                    t
                );
            })(rr),
            ur = cr(
                Ar(function (e) {
                    var t = e("core/editor").editPost;
                    return {
                        onUpdateImage: function (e) {
                            t({ featured_media: e.id }), lr("core/editor").getEditedPostAttribute("featured_media") === e.id && document.body.classList.remove("is-editorskit-uploading-featured");
                        },
                        onRemoveImage: function () {
                            t({ featured_media: 0 });
                        },
                    };
                }),
                sr
            )(Ir),
            mr = wp.i18n.__,
            Rr = wp.hooks.applyFilters,
            pr = wp.editor.PostFeaturedImageCheck,
            Or = wp.blockEditor,
            dr = Or.MediaUpload,
            Nr = Or.MediaUploadCheck,
            Sr = wp.components,
            Cr = Sr.Button,
            fr = Sr.Spinner,
            br = Sr.ResponsiveWrapper,
            xr = ["image"],
            Dr = mr("Featured Image", "block-options"),
            Hr = mr("Set Featured Image", "block-options"),
            Wr = mr("Remove Image", "block-options"),
            vr = function (e) {
                var t,
                    n,
                    a,
                    r = e.currentPostId,
                    o = e.featuredImageId,
                    i = e.onUpdateImage,
                    c = e.onRemoveImage,
                    T = e.media,
                    s = e.postType,
                    h = Object(A.get)(s, ["labels"], {}),
                    l = Object(E.createElement)("p", null, mr("To edit the featured image, you need permission to upload media.", "block-options"));
                if (T) {
                    var L = Rr("editor.PostFeaturedImage.imageSize", "post-thumbnail", T.id, r);
                    Object(A.has)(T, ["media_details", "sizes", L])
                        ? ((t = T.media_details.sizes[L].width), (n = T.media_details.sizes[L].height), (a = T.media_details.sizes[L].source_url))
                        : ((t = T.media_details.width), (n = T.media_details.height), (a = T.source_url));
                }
                var I = Object(E.createElement)(ur, { label: mr("Upload Featured Image", "block-options") });
                return Object(E.createElement)(
                    pr,
                    null,
                    Object(E.createElement)(
                        "div",
                        { className: "editor-post-featured-image editorskit-post-featured-image" },
                        Object(E.createElement)(
                            Nr,
                            { fallback: l },
                            I,
                            Object(E.createElement)("div", { className: "editorskit-post-featured-spinner" }, Object(E.createElement)(fr, null)),
                            Object(E.createElement)(dr, {
                                title: h.featured_image || Dr,
                                onSelect: i,
                                allowedTypes: xr,
                                modalClass: "editor-post-featured-image__media-modal",
                                render: function (e) {
                                    var r = e.open;
                                    return Object(E.createElement)(
                                        Cr,
                                        { className: o ? "editor-post-featured-image__preview" : "editor-post-featured-image__toggle", onClick: r, "aria-label": o ? mr("Edit or update the image", "block-options") : null },
                                        !!o && T && Object(E.createElement)(br, { naturalWidth: t, naturalHeight: n }, Object(E.createElement)("img", { src: a, alt: "" })),
                                        !!o && !T && Object(E.createElement)(fr, null),
                                        !o && (h.set_featured_image || Hr)
                                    );
                                },
                                value: o,
                            })
                        ),
                        !!o &&
                            T &&
                            !T.isLoading &&
                            Object(E.createElement)(
                                Nr,
                                null,
                                Object(E.createElement)(dr, {
                                    title: h.featured_image || Dr,
                                    onSelect: i,
                                    allowedTypes: xr,
                                    modalClass: "editor-post-featured-image__media-modal",
                                    render: function (e) {
                                        var t = e.open;
                                        return Object(E.createElement)(Cr, { onClick: t, isDefault: !0, isLarge: !0 }, mr("Replace Image", "block-options"));
                                    },
                                })
                            ),
                        !!o && Object(E.createElement)(Nr, null, Object(E.createElement)(Cr, { onClick: c, isLink: !0, isDestructive: !0 }, h.remove_featured_image || Wr))
                    )
                );
            },
            gr = wp.hooks.addFilter,
            kr = wp.compose,
            yr = kr.compose,
            Br = kr.createHigherOrderComponent,
            Pr = wp.element.Fragment,
            wr = wp.components.withSpokenMessages,
            Mr = wp.data,
            Ur = Mr.withSelect,
            Fr = Mr.withDispatch,
            Gr = yr(
                Ur(function (e) {
                    var t = e("core"),
                        n = t.getMedia,
                        a = t.getPostType,
                        r = e("core/editor"),
                        o = r.getCurrentPostId,
                        i = r.getEditedPostAttribute,
                        c = i("featured_media");
                    return { media: c ? n(c) : null, currentPostId: o(), postType: a(i("type")), featuredImageId: c, isDisabled: e("core/edit-post").isFeatureActive("disableEditorsKitDragAndDropFeaturedTools") };
                }),
                Fr(function (e) {
                    var t = e("core/editor").editPost;
                    return {
                        onUpdateImage: function (e) {
                            t({ featured_media: e.id });
                        },
                        onRemoveImage: function () {
                            t({ featured_media: 0 });
                        },
                    };
                }),
                wr
            );
        gr(
            "editor.PostFeaturedImage",
            "editorskit/post-featured-image",
            Br(function (e) {
                return Gr(function (t) {
                    var n = T()({}, t),
                        a = n.isDisabled;
                    return Object(E.createElement)(Pr, null, a ? Object(E.createElement)(e, n) : Object(E.createElement)(vr, n));
                });
            }, "withDragandDropFeaturedImage")
        );
        var jr = n(158);
        var Kr = wp.i18n.__,
            Vr = wp.data,
            _r = Vr.withSelect,
            Qr = Vr.withDispatch,
            Yr = Vr.select,
            Xr = Vr.subscribe,
            zr = wp.compose,
            Zr = zr.compose,
            qr = zr.ifCondition,
            Jr = wp.element.Component,
            $r = wp.blocks.hasBlockSupport,
            eo = wp.components.withSpokenMessages,
            to = ["core/image", "core/gallery", "core/cover"],
            no = (function (e) {
                vt()(n, e);
                var t = (function (e) {
                    function t() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }
                    return function () {
                        var n,
                            a = xt()(e);
                        if (t()) {
                            var r = xt()(this).constructor;
                            n = Reflect.construct(a, arguments, r);
                        } else n = a.apply(this, arguments);
                        return ft()(this, n);
                    };
                })(n);
                function n() {
                    var e;
                    return (
                        dt()(this, n),
                        ((e = t.apply(this, arguments)).updateMeta = e.updateMeta.bind(Ht()(e))),
                        (e.calculateReadingTime = e.calculateReadingTime.bind(Ht()(e))),
                        (e.handleButtonClick = e.handleButtonClick.bind(Ht()(e))),
                        (e.state = { readingTime: 0 }),
                        e
                    );
                }
                return (
                    St()(n, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                this.updateMeta(), document.addEventListener("mousedown", this.handleButtonClick);
                            },
                        },
                        {
                            key: "componentWillUnmount",
                            value: function () {
                                document.removeEventListener("mousedown", this.handleButtonClick);
                            },
                        },
                        {
                            key: "handleButtonClick",
                            value: function (e) {
                                if (document.querySelector(".table-of-contents button")) {
                                    var t = document.querySelector(".table-of-contents button").getAttribute("aria-expanded");
                                    if (document.querySelector(".table-of-contents").contains(e.target) && "false" === t)
                                    var n = this.calculateReadingTime(),
                                        a = setInterval(function () {
                                            document.querySelector(".table-of-contents__popover") &&
                                                (document
                                                    .querySelector(".table-of-contents__counts")
                                                    .insertAdjacentHTML(
                                                        "beforeend",
                                                        '<li class="table-of-contents__count table-of-contents__wordcount">'
                                                            .concat(Kr("Reading Time", "block-options"), '<span class="table-of-contents__number">')
                                                            .concat(n, " min</span></li>")
                                                    ),
                                                clearInterval(a));
                                        }, 100);
                                }
                                
                                
                            },
                        },
                        {
                            key: "calculateReadingTime",
                            value: function () {
                                var e = this.props,
                                    t = e.content,
                                    n = e.blocks,
                                    a = (Object(jr.count)(t, "words", {}) / 275) * 60;
                                if (n) {
                                    var r = 12;
                                    Object(A.map)(n, function (e) {
                                        (to.includes(e.name) || $r(e.name, "editorsKitWordCount")) && ((a += r), r > 3 && r--);
                                    });
                                }
                                return (a /= 60) < 1 && (a = 1), a.toFixed();
                            },
                        },
                        {
                            key: "updateMeta",
                            value: function () {
                                var e = this,
                                    t = this.props.updateReadingTime;
                                return Xr(function () {
                                    var n = Yr("core/editor").isSavingPost(),
                                        a = Yr("core/editor").isAutosavingPost();
                                    if (n && !a) {
                                        var r = e.calculateReadingTime();
                                        r !== e.state.readingTime && (e.setState({ readingTime: r }), t(parseInt(r)));
                                    }
                                });
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                return null;
                            },
                        },
                    ]),
                    n
                );
            })(Jr),
            ao = Zr([
                _r(function () {
                    var e = Yr("core/edit-post").isFeatureActive,
                        t = Yr("core/editor").getEditedPostAttribute;
                    return { content: t("content"), blocks: t("blocks"), isDisabled: e("disableEditorsKitReadingTimeWriting"), isIceberg: e("icebergWritingMode") };
                }),
                Qr(function (e) {
                    return {
                        updateReadingTime: function (t) {
                            e("core/editor").editPost({ meta: { _editorskit_reading_time: t } });
                        },
                    };
                }),
                qr(function (e) {
                    return !e.isDisabled && !e.isIceberg;
                }),
                eo,
            ])(no);
        function ro(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function oo(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                (a.enumerable = a.enumerable || !1), (a.configurable = !0), "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
            }
        }
        function io(e, t, n) {
            return t && oo(e.prototype, t), n && oo(e, n), e;
        }
        function co(e) {
            return (co =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function To(e, t) {
            return !t || ("object" !== co(t) && "function" != typeof t)
                ? (function (e) {
                      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return e;
                  })(e)
                : t;
        }
        function Eo(e) {
            return (Eo = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
        }
        function so(e, t) {
            return (so =
                Object.setPrototypeOf ||
                function (e, t) {
                    return (e.__proto__ = t), e;
                })(e, t);
        }
        function ho(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && so(e, t);
        }
        function Ao(e, t, n) {
            return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
        }
        (0, wp.plugins.registerPlugin)("editorskit-reading-time", { icon: !1, render: ao });
        var lo = n(11),
            Lo = n.n(lo),
            Io = n(8),
            uo = n.n(Io),
            mo = n(33),
            Ro = n.n(mo),
            po = n(20),
            Oo = n.n(po),
            No = "https://platform.twitter.com/widgets.js";
        Ao(
            (function (e) {
                function t() {
                    return ro(this, t), To(this, Eo(t).apply(this, arguments));
                }
                return (
                    ho(t, e),
                    io(t, [
                        {
                            key: "buildChromeOptions",
                            value: function (e) {
                                return (
                                    (e.chrome = ""),
                                    this.props.noHeader && (e.chrome = e.chrome + " noheader"),
                                    this.props.noFooter && (e.chrome = e.chrome + " nofooter"),
                                    this.props.noBorders && (e.chrome = e.chrome + " noborders"),
                                    this.props.noScrollbar && (e.chrome = e.chrome + " noscrollbar"),
                                    this.props.transparent && (e.chrome = e.chrome + " transparent"),
                                    e
                                );
                            },
                        },
                        {
                            key: "buildOptions",
                            value: function () {
                                var e = Object.assign({}, this.props.options);
                                return (
                                    this.props.autoHeight && (e.height = this.refs.embedContainer.parentNode.offsetHeight),
                                    (e = Object.assign({}, e, { theme: this.props.theme, linkColor: this.props.linkColor, borderColor: this.props.borderColor, lang: this.props.lang }))
                                );
                            },
                        },
                        {
                            key: "renderWidget",
                            value: function (e) {
                                this.isMountCanceled ||
                                    window.twttr.widgets.createTimeline(
                                        {
                                            sourceType: this.props.sourceType,
                                            screenName: this.props.screenName,
                                            userId: this.props.userId,
                                            ownerScreenName: this.props.ownerScreenName,
                                            slug: this.props.slug,
                                            id: this.props.id || this.props.widgetId,
                                            url: this.props.url,
                                        },
                                        this.refs.embedContainer,
                                        e
                                    );
                            },
                        },
                        {
                            key: "componentDidMount",
                            value: function () {
                                var e = this;
                                Oo.a.canUseDOM &&
                                    n(21)(No, "twitter-embed", function () {
                                        if (window.twttr) {
                                            var t = e.buildOptions();
                                            (t = e.buildChromeOptions(t)), e.renderWidget(t);
                                        } else console.error("Failure to load window.twttr in TwitterTimelineEmbed, aborting load.");
                                    });
                            },
                        },
                        {
                            key: "componentWillUnmount",
                            value: function () {
                                this.isMountCanceled = !0;
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                return Lo.a.createElement("div", { ref: "embedContainer" });
                            },
                        },
                    ]),
                    t
                );
            })(lo.Component),
            "propTypes",
            {
                sourceType: uo.a.oneOf(["profile", "likes", "list", "collection", "URL", "widget"]).isRequired,
                screenName: Ro()(uo.a.string, function (e) {
                    return !e.hasOwnProperty("userId") && ("profile" === e.sourceType || "likes" === e.sourceType);
                }),
                userId: Ro()(uo.a.number, function (e) {
                    return !e.hasOwnProperty("screenName") && ("profile" === e.sourceType || "likes" === e.sourceType);
                }),
                ownerScreenName: Ro()(uo.a.string, function (e) {
                    return "list" === e.sourceType && !e.hasOwnProperty("id");
                }),
                slug: Ro()(uo.a.string, function (e) {
                    return "list" === e.sourceType && !e.hasOwnProperty("id");
                }),
                id: Ro()(uo.a.oneOfType([uo.a.number, uo.a.string]), function (e) {
                    return ("list" === e.sourceType && !e.hasOwnProperty("ownerScreenName") && !e.hasOwnProperty("slug")) || "collection" === e.sourceType;
                }),
                url: Ro()(uo.a.string, function (e) {
                    return "url" === e.sourceType;
                }),
                widgetId: Ro()(uo.a.string, function (e) {
                    return "widget" === e.sourceType;
                }),
                options: uo.a.object,
                autoHeight: uo.a.bool,
                theme: uo.a.oneOf(["dark", "light"]),
                linkColor: uo.a.string,
                borderColor: uo.a.string,
                noHeader: uo.a.bool,
                noFooter: uo.a.bool,
                noBorders: uo.a.bool,
                noScrollbar: uo.a.bool,
                transparent: uo.a.bool,
                lang: uo.a.string,
            }
        ),
            Ao(
                (function (e) {
                    function t() {
                        return ro(this, t), To(this, Eo(t).apply(this, arguments));
                    }
                    return (
                        ho(t, e),
                        io(t, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    var e = this;
                                    Oo.a.canUseDOM &&
                                        n(21)(No, "twitter-embed", function () {
                                            window.twttr
                                                ? e.isMountCanceled || window.twttr.widgets.createShareButton(e.props.url, e.refs.embedContainer, e.props.options)
                                                : console.error("Failure to load window.twttr in TwitterShareButton, aborting load.");
                                        });
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    this.isMountCanceled = !0;
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    return Lo.a.createElement("div", { ref: "embedContainer" });
                                },
                            },
                        ]),
                        t
                    );
                })(lo.Component),
                "propTypes",
                { url: uo.a.string.isRequired, options: uo.a.object }
            ),
            Ao(
                (function (e) {
                    function t() {
                        return ro(this, t), To(this, Eo(t).apply(this, arguments));
                    }
                    return (
                        ho(t, e),
                        io(t, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    var e = this;
                                    Oo.a.canUseDOM &&
                                        n(21)(No, "twitter-embed", function () {
                                            window.twttr
                                                ? e.isMountCanceled || window.twttr.widgets.createFollowButton(e.props.screenName, e.refs.embedContainer, e.props.options)
                                                : console.error("Failure to load window.twttr in TwitterFollowButton, aborting load.");
                                        });
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    this.isMountCanceled = !0;
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    return Lo.a.createElement("div", { ref: "embedContainer" });
                                },
                            },
                        ]),
                        t
                    );
                })(lo.Component),
                "propTypes",
                { screenName: uo.a.string.isRequired, options: uo.a.object }
            ),
            Ao(
                (function (e) {
                    function t() {
                        return ro(this, t), To(this, Eo(t).apply(this, arguments));
                    }
                    return (
                        ho(t, e),
                        io(t, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    var e = this;
                                    Oo.a.canUseDOM &&
                                        n(21)(No, "twitter-embed", function () {
                                            window.twttr
                                                ? e.isMountCanceled || window.twttr.widgets.createHashtagButton(e.props.tag, e.refs.embedContainer, e.props.options)
                                                : console.error("Failure to load window.twttr in TwitterHashtagButton, aborting load.");
                                        });
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    this.isMountCanceled = !0;
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    return Lo.a.createElement("div", { ref: "embedContainer" });
                                },
                            },
                        ]),
                        t
                    );
                })(lo.Component),
                "propTypes",
                { tag: uo.a.string.isRequired, options: uo.a.object }
            ),
            Ao(
                (function (e) {
                    function t() {
                        return ro(this, t), To(this, Eo(t).apply(this, arguments));
                    }
                    return (
                        ho(t, e),
                        io(t, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    var e = this;
                                    Oo.a.canUseDOM &&
                                        n(21)(No, "twitter-embed", function () {
                                            window.twttr
                                                ? e.isMountCanceled || window.twttr.widgets.createMentionButton(e.props.screenName, e.refs.embedContainer, e.props.options)
                                                : console.error("Failure to load window.twttr in TwitterMentionButton, aborting load.");
                                        });
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    this.isMountCanceled = !0;
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    return Lo.a.createElement("div", { ref: "embedContainer" });
                                },
                            },
                        ]),
                        t
                    );
                })(lo.Component),
                "propTypes",
                { screenName: uo.a.string.isRequired, options: uo.a.object }
            );
        var So = (function (e) {
            function t() {
                return ro(this, t), To(this, Eo(t).apply(this, arguments));
            }
            return (
                ho(t, e),
                io(t, [
                    {
                        key: "renderWidget",
                        value: function () {
                            var e = this;
                            window.twttr
                                ? this.isMountCanceled ||
                                  window.twttr.widgets.createTweet(this.props.tweetId, this.refs.embedContainer, this.props.options).then(function (t) {
                                      e.props.onLoaded && e.props.onLoaded(t);
                                  })
                                : console.error("Failure to load window.twttr in TwitterTweetEmbed, aborting load.");
                        },
                    },
                    {
                        key: "componentDidMount",
                        value: function () {
                            var e = this;
                            Oo.a.canUseDOM &&
                                n(21)(No, "twitter-embed", function () {
                                    e.renderWidget();
                                });
                        },
                    },
                    {
                        key: "componentWillUnmount",
                        value: function () {
                            this.isMountCanceled = !0;
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            return Lo.a.createElement("div", { ref: "embedContainer" });
                        },
                    },
                ]),
                t
            );
        })(lo.Component);
        Ao(So, "propTypes", { tweetId: uo.a.string.isRequired, options: uo.a.object, onLoaded: uo.a.func }),
            Ao(
                (function (e) {
                    function t() {
                        return ro(this, t), To(this, Eo(t).apply(this, arguments));
                    }
                    return (
                        ho(t, e),
                        io(t, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    var e = this;
                                    Oo.a.canUseDOM &&
                                        n(21)(No, "twitter-embed", function () {
                                            window.twttr
                                                ? e.isMountCanceled || window.twttr.widgets.createMoment(e.props.momentId, e.refs.shareMoment, e.props.options)
                                                : console.error("Failure to load window.twttr in TwitterMomentShare, aborting load.");
                                        });
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    this.isMountCanceled = !0;
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    return Lo.a.createElement("div", { ref: "shareMoment" });
                                },
                            },
                        ]),
                        t
                    );
                })(lo.Component),
                "propTypes",
                { momentId: uo.a.string.isRequired, options: uo.a.object }
            ),
            Ao(
                (function (e) {
                    function t() {
                        return ro(this, t), To(this, Eo(t).apply(this, arguments));
                    }
                    return (
                        ho(t, e),
                        io(t, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    var e = this;
                                    Oo.a.canUseDOM &&
                                        n(21)(No, "twitter-embed", function () {
                                            window.twttr
                                                ? e.isMountCanceled || window.twttr.widgets.createDMButton(e.props.id, e.refs.embedContainer, e.props.options)
                                                : console.error("Failure to load window.twttr in TwitterDMButton, aborting load.");
                                        });
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    this.isMountCanceled = !0;
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    return Lo.a.createElement("div", { ref: "embedContainer" });
                                },
                            },
                        ]),
                        t
                    );
                })(lo.Component),
                "propTypes",
                { id: uo.a.number.isRequired, options: uo.a.object }
            ),
            Ao(
                (function (e) {
                    function t() {
                        return ro(this, t), To(this, Eo(t).apply(this, arguments));
                    }
                    return (
                        ho(t, e),
                        io(t, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    var e = this;
                                    Oo.a.canUseDOM &&
                                        n(21)(No, "twitter-embed", function () {
                                            window.twttr ? e.isMountCanceled || window.twttr.widgets.createVideo(e.props.id, e.refs.embedContainer) : console.error("Failure to load window.twttr in TwitterVideoEmbed, aborting load.");
                                        });
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    this.isMountCanceled = !0;
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    return Lo.a.createElement("div", { ref: "embedContainer" });
                                },
                            },
                        ]),
                        t
                    );
                })(lo.Component),
                "propTypes",
                { id: uo.a.string.isRequired }
            ),
            Ao(
                (function (e) {
                    function t() {
                        return ro(this, t), To(this, Eo(t).apply(this, arguments));
                    }
                    return (
                        ho(t, e),
                        io(t, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    var e = this;
                                    Oo.a.canUseDOM &&
                                        n(21)(No, "twitter-embed", function () {
                                            window.twttr
                                                ? e.isMountCanceled || window.twttr.widgets.createPeriscopeOnAirButton(e.props.username, e.refs.embedContainer, e.props.options)
                                                : console.error("Failure to load window.twttr in TwitterOnAirButton, aborting load.");
                                        });
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    this.isMountCanceled = !0;
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    return Lo.a.createElement("div", { ref: "embedContainer" });
                                },
                            },
                        ]),
                        t
                    );
                })(lo.Component),
                "propTypes",
                { username: uo.a.string.isRequired, options: uo.a.object }
            );
        var Co = wp.i18n,
            fo = Co.__,
            bo = Co.sprintf,
            xo = wp.element.RawHTML,
            Do = wp.components.Modal;
        function Ho(e) {
            var t = e.closeModal,
                n = window.editorskitInfo,
                a = n.core,
                r = n.editor,
                o = n.plugin;
            return Object(E.createElement)(
                Do,
                {
                    title: fo("About Gutenberg Block Editor", "block-options"),
                    shouldCloseOnClickOutside: !1,
                    onRequestClose: function () {
                        return t();
                    },
                    closeLabel: fo("Close", "block-options"),
                    icon: null,
                    className: "editorskit-modal-component components-modal--editorskit-overview",
                },
                Object(E.createElement)("p", null, fo("Editor Version is", "block-options"), " ", Object(E.createElement)("strong", null, r.version)),
                Object(E.createElement)("p", null, fo("WordPress Version is", "block-options"), " ", Object(E.createElement)("strong", null, a.version)),
                Object(E.createElement)(
                    "p",
                    null,
                    r.is_core
                        ? bo(fo("You are using the new block editor bundled on WordPress core %s", "block-options"), a.version)
                        : Object(E.createElement)(
                              xo,
                              null,
                              bo(
                                  fo("You are using the new block editor powered by the %sGutenberg Plugin%s.", "block-options"),
                                  '<a href="https://wordpress.org/plugins/gutenberg/" target="_blank" rel="noreferrer noopener nofollow">',
                                  "</a>"
                              )
                          )
                ),
                Object(E.createElement)(
                    "p",
                    null,
                    Object(E.createElement)(
                        xo,
                        null,
                        bo(fo(" Want to help? %sGet involved or report an issue%s.", "block-options"), '<a href="https://github.com/WordPress/gutenberg/issues" target="_blank" rel="noreferrer noopener nofollow">', "</a>")
                    )
                ),
                Object(E.createElement)("p", { className: "editorskit-version-small" }, bo(fo("EditorsKit %s", "block-options"), o.version))
            );
        }
        var Wo = wp.i18n.__,
            vo = wp.data,
            go = vo.withSelect,
            ko = vo.withDispatch,
            yo = vo.select,
            Bo = wp.compose,
            Po = Bo.compose,
            wo = Bo.ifCondition,
            Mo = wp.element,
            Uo = Mo.Fragment,
            Fo = Mo.Component,
            Go = wp.keycodes.DOWN,
            jo = wp.components,
            Ko = jo.withSpokenMessages,
            Vo = jo.Modal,
            _o = jo.Button,
            Qo = jo.IconButton,
            Yo = jo.Dropdown,
            Xo = jo.NavigableMenu,
            zo = [
                "1178226931277287425",
                "1177555440638382080",
                "1179365591553118227",
                "1177920047546650624",
                "1177461678004293637",
                "1178693225923497984",
                "1179727978353135616",
                "1180455552079425537",
                "1178929974247448576",
                "1176395801888604161",
                "1181217763844509696",
                "1177202169310658560",
            ],
            Zo = (function (e) {
                function t() {
                    var e;
                    return dt()(this, t), ((e = ft()(this, xt()(t).apply(this, arguments))).state = { isOpen: !1, isAboutOpen: !1, isLoaded: !1, tweetId: 0 }), e;
                }
                return (
                    vt()(t, e),
                    St()(t, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                var e = document.querySelector(".editorskit-component-help-tips");
                                e && (e.parentElement.style.display = "block");
                            },
                        },
                        {
                            key: "routeChange",
                            value: function (e) {
                                window.open(e, "_blank").focus();
                            },
                        },
                        {
                            key: "tweetLoaded",
                            value: function () {
                                this.setState({ isLoaded: !0 });
                            },
                        },
                        {
                            key: "nextTweet",
                            value: function () {
                                this.setState({ tweetId: this.state.tweetId + 1, isOpen: !1 });
                            },
                        },
                        {
                            key: "componentDidUpdate",
                            value: function () {
                                this.state.tweetId > 0 && !this.state.isOpen && this.setState({ isOpen: !0, isLoaded: !1 });
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this,
                                    t = this.props.onDisable,
                                    n = function () {
                                        return e.setState({ isOpen: !1, isAboutOpen: !1, tweetId: 0, isLoaded: !1 });
                                    };
                                return Object(E.createElement)(
                                    Uo,
                                    null,
                                    Object(E.createElement)(Yo, {
                                        className: "editorskit-component-help-tips",
                                        renderToggle: function (e) {
                                            var t = e.isOpen,
                                                n = e.onToggle;
                                            return Object(E.createElement)(Qo, {
                                                className: "components-dropdown-menu__toggle",
                                                icon: "editor-help",
                                                onClick: n,
                                                onKeyDown: function (e) {
                                                    t || e.keyCode !== Go || (e.preventDefault(), e.stopPropagation(), n());
                                                },
                                                "aria-haspopup": "true",
                                                "aria-expanded": t,
                                                label: Wo("Help, tips and tricks"),
                                                tooltip: Wo("Help, tips and tricks"),
                                            });
                                        },
                                        renderContent: function (n) {
                                            var a = n.onClose;
                                            return Object(E.createElement)(
                                                Xo,
                                                { className: "editorskit-menu-help-tips", role: "menu" },
                                                Object(E.createElement)(
                                                    Qo,
                                                    {
                                                        icon: "info",
                                                        onClick: function () {
                                                            a(), e.setState({ isAboutOpen: !0 });
                                                        },
                                                    },
                                                    Wo("About")
                                                ),
                                                Object(E.createElement)(
                                                    Qo,
                                                    {
                                                        icon: "sos",
                                                        onClick: function () {
                                                            a(), e.setState({ isOpen: !0 });
                                                        },
                                                    },
                                                    Wo("Tips and Tricks")
                                                ),
                                                Object(E.createElement)(
                                                    Qo,
                                                    {
                                                        icon: "admin-site-alt3",
                                                        onClick: function () {
                                                            e.routeChange("https://www.facebook.com/groups/editorskit/");
                                                        },
                                                    },
                                                    Wo("EditorsKit Community Help")
                                                ),
                                                Object(E.createElement)("div", { className: "editor-block-settings-menu__separator block-editor-block-settings-menu__separator" }),
                                                Object(E.createElement)(Qo, { icon: "dismiss", onClick: t }, Wo("Remove/Disable Help Button"))
                                            );
                                        },
                                    }),
                                    this.state.isOpen
                                        ? Object(E.createElement)(
                                              Vo,
                                              {
                                                  title: Wo("Tips and Tricks", "block-options"),
                                                  shouldCloseOnClickOutside: !1,
                                                  onRequestClose: function () {
                                                      return n();
                                                  },
                                                  closeLabel: Wo("Close", "block-options"),
                                                  icon: null,
                                                  className: "editorskit-modal-component components-modal--editorskit-help-tips",
                                              },
                                              Object(E.createElement)(So, {
                                                  tweetId: zo[this.state.tweetId],
                                                  options: { align: "center", theme: "dark", conversation: "none", dnt: !0 },
                                                  onLoaded: function () {
                                                      e.tweetLoaded();
                                                  },
                                              }),
                                              this.state.isLoaded
                                                  ? Object(E.createElement)(
                                                        "div",
                                                        { className: "components-modal--editorskit-help-tips-buttons" },
                                                        Object(E.createElement)(
                                                            Qo,
                                                            {
                                                                isPrimary: !0,
                                                                isLarge: !0,
                                                                icon: "twitter",
                                                                onClick: function () {
                                                                    e.routeChange("https://twitter.com/i/moments/1177466596219949057");
                                                                },
                                                            },
                                                            Wo("View All Tips and Tricks", "block-options")
                                                        ),
                                                        Object(E.createElement)(
                                                            _o,
                                                            {
                                                                isDefault: !0,
                                                                isLarge: !0,
                                                                onClick: function () {
                                                                    e.nextTweet();
                                                                },
                                                            },
                                                            Wo("Next", "block-options")
                                                        )
                                                    )
                                                  : Wo("Fetching...", "block-options")
                                          )
                                        : null,
                                    this.state.isAboutOpen ? Object(E.createElement)(Ho, { closeModal: n }) : null
                                );
                            },
                        },
                    ]),
                    t
                );
            })(Fo),
            qo = Po([
                go(function () {
                    return { isDisabled: yo("core/edit-post").isFeatureActive("disableEditorsKitHelpTools") };
                }),
                ko(function (e) {
                    return {
                        onDisable: function () {
                            e("core/edit-post").toggleFeature("disableEditorsKitHelpTools");
                        },
                    };
                }),
                wo(function (e) {
                    return !e.isDisabled;
                }),
                Ko,
            ])(Zo);
        (0, wp.plugins.registerPlugin)("editorskit-help-tips", { icon: !1, render: qo });
        var Jo = n(29),
            $o = n.n(Jo),
            ei = wp.element.Component,
            ti = wp.compose.compose,
            ni = wp.data,
            ai = ni.select,
            ri = ni.withSelect,
            oi = wp.components.withSpokenMessages,
            ii = (function (e) {
                function t() {
                    return dt()(this, t), ft()(this, xt()(t).apply(this, arguments));
                }
                return (
                    vt()(t, e),
                    St()(t, [
                        {
                            key: "componentDidUpdate",
                            value: function () {
                                var e,
                                    t = this.props.blockName;
                                if (!t) return null;
                                var n = new RegExp("\\beditorskit-selected--.*?\\b", "g"),
                                    a = document.body.classList.value.split(/\s+/).filter(function (e) {
                                        return n.test(e);
                                    });
                                (e = document.body.classList).remove.apply(e, $o()(a)), document.body.classList.add("editorskit-selected--" + t.replace("/", "-"));
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                return null;
                            },
                        },
                    ]),
                    t
                );
            })(ei),
            ci = ti(
                ri(function () {
                    var e = ai("core/block-editor").getSelectedBlock();
                    return e ? { blockName: e.name } : {};
                }),
                oi
            )(ii);
        (0, wp.plugins.registerPlugin)("editorskit-selected-block", { icon: !1, render: ci });
        var Ti = {};
        (Ti.copy = Object(E.createElement)(
            "svg",
            { xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24" },
            Object(E.createElement)("path", { d: "M0 0h24v24H0z", fill: "none" }),
            Object(E.createElement)("path", { d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z" })
        )),
            (Ti.paste = Object(E.createElement)(
                "svg",
                { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
                Object(E.createElement)("path", {
                    d: "M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z",
                })
            ));
        var Ei = Ti,
            si = wp.i18n.__,
            hi = wp.data,
            Ai = hi.withSelect,
            li = hi.withDispatch,
            Li = hi.select,
            Ii = wp.compose,
            ui = Ii.compose,
            mi = Ii.ifCondition,
            Ri = wp.element,
            pi = Ri.Component,
            Oi = Ri.Fragment,
            di = wp.components,
            Ni = di.withSpokenMessages,
            Si = di.Button,
            Ci = di.IconButton,
            fi = di.Tooltip,
            bi = di.ClipboardButton,
            xi = di.Popover,
            Di = di.TextControl,
            Hi = (function (e) {
                function t() {
                    var e;
                    return dt()(this, t), ((e = ft()(this, xt()(t).apply(this, arguments))).handleClickListener = e.handleClickListener.bind(Ht()(e))), (e.state = { isOpen: !1, anchorRect: {}, value: "", count: null }), e;
                }
                return (
                    vt()(t, e),
                    St()(t, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                document.addEventListener("mousedown", this.handleClickListener);
                            },
                        },
                        {
                            key: "componentWillUnmount",
                            value: function () {
                                document.removeEventListener("mousedown", this.handleClickListener);
                            },
                        },
                        {
                            key: "handleClickListener",
                            value: function () {
                                var e = this,
                                    t = this.props.onCopy,
                                    n = function (n) {
                                        var a = n.count,
                                            r = Li("core/block-editor").getSelectedBlock().attributes.customGradient;
                                        return Object(E.createElement)(
                                            Oi,
                                            null,
                                            Object(E.createElement)(
                                                fi,
                                                { text: si("Copy Gradient Value", "block-options") },
                                                Object(E.createElement)(bi, { text: r, icon: Ei.copy, isSecondary: !0, isSmall: !0, disabled: void 0 === r, onCopy: t })
                                            ),
                                            Object(E.createElement)(
                                                fi,
                                                { text: si("Paste Gradient", "block-options") },
                                                Object(E.createElement)(Ci, {
                                                    className: "ek-paste",
                                                    isSecondary: !0,
                                                    isSmall: !0,
                                                    icon: Ei.paste,
                                                    onClick: function (t) {
                                                        e.setState({ isOpen: !e.state.isOpen, anchorRect: t.target.getBoundingClientRect(), count: a });
                                                    },
                                                })
                                            )
                                        );
                                    };
                                setTimeout(function () {
                                    var e = document.querySelectorAll(".components-circular-option-picker__custom-clear-wrapper");
                                    Array.from(e).map(function (e, t) {
                                        return (
                                            e.parentNode.querySelector(".components-custom-gradient-picker") &&
                                                e &&
                                                !e.classList.contains("ek-gradient-controls") &&
                                                (e.classList.add("ek-gradient-controls"),
                                                e.insertAdjacentHTML("beforeend", '<div class="ek-gradient-controls-wrapper" id="ek-gradient-controls-wrapper' + t + '"></div>'),
                                                ReactDOM.render(Object(E.createElement)(n, { count: t }), document.getElementById("ek-gradient-controls-wrapper" + t))),
                                            !1
                                        );
                                    });
                                }, 100);
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this,
                                    t = this.props,
                                    n = t.updateBlockAttributes,
                                    a = t.onPaste,
                                    r = Li("core/block-editor").getSelectedBlock();
                                return this.state.isOpen
                                    ? Object(E.createElement)(
                                          xi,
                                          {
                                              className: "ek-gradient-control-popover",
                                              position: "bottom center",
                                              onClick: function () {},
                                              anchorRect: this.state.anchorRect,
                                              expandOnMobile: !0,
                                              headerTitle: si("Paste Gradient Value", "block-options"),
                                              onFocusOutside: function () {
                                                  e.setState({ isOpen: !1 });
                                              },
                                          },
                                          Object(E.createElement)(Di, {
                                              label: si("Paste Gradient Value", "block-options"),
                                              value: this.state.value,
                                              onChange: function (t) {
                                                  return e.setState({ value: t });
                                              },
                                          }),
                                          Object(E.createElement)(
                                              Si,
                                              {
                                                  isPrimary: !0,
                                                  onClick: function () {
                                                      n(r.clientId, { gradient: "", customGradient: e.state.value }), a(), e.setState({ value: "" });
                                                      var t = document.getElementById("ek-gradient-controls-wrapper" + e.state.count);
                                                      t.parentNode.classList.remove("ek-gradient-controls"), t.remove(), e.handleClickListener();
                                                  },
                                              },
                                              si("Apply", "block-options")
                                          )
                                      )
                                    : null;
                            },
                        },
                    ]),
                    t
                );
            })(pi),
            Wi = ui([
                Ai(function () {
                    return { isDisabled: Li("core/edit-post").isFeatureActive("disableEditorsKitGradientControlsTools") };
                }),
                li(function (e) {
                    var t = e("core/notices").createNotice;
                    return {
                        onCopy: function () {
                            t("info", si("Custom Gradient copied to your clipboard.", "block-options"), { isDismissible: !0, type: "snackbar" });
                        },
                        onPaste: function () {
                            t("info", si("Custom Gradient applied to selected block.", "block-options"), { isDismissible: !0, type: "snackbar" });
                        },
                        updateBlockAttributes: e("core/block-editor").updateBlockAttributes,
                    };
                }),
                mi(function (e) {
                    return !e.isDisabled;
                }),
                Ni,
            ])(Hi);
        (0, wp.plugins.registerPlugin)("editorskit-gradient-controls", { icon: !1, render: Wi });
        n(165);
        var vi = wp.i18n.__,
            gi = wp.data,
            ki = gi.select,
            yi = gi.withSelect,
            Bi = gi.withDispatch,
            Pi = wp.element,
            wi = Pi.Fragment,
            Mi = Pi.Component,
            Ui = wp.components.withSpokenMessages,
            Fi = wp.editPost.PluginBlockSettingsMenuItem,
            Gi = wp.compose,
            ji = Gi.compose,
            Ki = Gi.ifCondition,
            Vi = ["core/image"],
            _i = (function (e) {
                function t() {
                    return dt()(this, t), ft()(this, xt()(t).apply(this, arguments));
                }
                return (
                    vt()(t, e),
                    St()(t, [
                        {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    t = e.imageID,
                                    n = e.featuredImageID,
                                    a = e.onUpdateImage,
                                    r = e.onRemoveImage;
                                return Object(E.createElement)(
                                    wi,
                                    null,
                                    Object(E.createElement)(Fi, {
                                        icon: "format-image",
                                        label: vi(t === n ? "Remove as Featured Image" : "Set as Featured Image", "block-options"),
                                        onClick: function () {
                                            t === n ? r() : a(t);
                                        },
                                    })
                                );
                            },
                        },
                    ]),
                    t
                );
            })(Mi),
            Qi = ji(
                yi(function () {
                    var e = ki("core/block-editor").getSelectedBlock();
                    return e
                        ? {
                              featuredImageID: ki("core/editor").getEditedPostAttribute("featured_media"),
                              blockName: e.name,
                              imageID: Object(A.get)(e, "attributes.id"),
                              isDisabled: ki("core/edit-post").isFeatureActive("disableEditorsKitSetAsFeaturedOptions"),
                          }
                        : {};
                }),
                Bi(function (e) {
                    var t = e("core/editor").editPost,
                        n = e("core/notices").createNotice;
                    return {
                        onUpdateImage: function (e) {
                            t({ featured_media: e }), n("info", vi("Image Set as Featured.", "block-options"), { isDismissible: !0, type: "snackbar" });
                        },
                        onRemoveImage: function () {
                            t({ featured_media: 0 }), n("info", vi("Featured Image Removed.", "block-options"), { isDismissible: !0, type: "snackbar" });
                        },
                    };
                }),
                Ki(function (e) {
                    return !e.isDisabled && Vi.includes(e.blockName) && void 0 !== e.imageID;
                }),
                Ui
            )(_i);
        function Yi(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t &&
                    (a = a.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, a);
            }
            return n;
        }
        function Xi(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? Yi(n, !0).forEach(function (t) {
                          i()(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : Yi(n).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return e;
        }
        (0, wp.plugins.registerPlugin)("editorskit-set-as-featured-image", { icon: "format-image", render: Qi });
        var zi = wp.i18n.__,
            Zi = wp.data,
            qi = Zi.select,
            Ji = Zi.withSelect,
            $i = Zi.withDispatch,
            ec = wp.element,
            tc = ec.Fragment,
            nc = ec.Component,
            ac = wp.components.withSpokenMessages,
            rc = wp.editPost.PluginBlockSettingsMenuItem,
            oc = wp.compose,
            ic = oc.compose,
            cc = oc.ifCondition,
            Tc = wp.richText,
            Ec = Tc.create,
            sc = Tc.toHTMLString,
            hc = ["core/paragraph", "core/heading"],
            Ac = (function (e) {
                function t() {
                    return dt()(this, t), ft()(this, xt()(t).apply(this, arguments));
                }
                return (
                    vt()(t, e),
                    St()(t, [
                        {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    t = e.blockId,
                                    n = e.blockName,
                                    a = e.blockContent,
                                    r = e.clearBlockFormatting,
                                    o = Ec({ html: a });
                                return Object(E.createElement)(
                                    tc,
                                    null,
                                    Object(E.createElement)(rc, {
                                        icon: "editor-removeformatting",
                                        label: zi("Clear Block Formatting", "block-options"),
                                        onClick: function () {
                                            r(t, n, sc({ value: Xi({}, o, { formats: Array(o.formats.length) }) }));
                                        },
                                    })
                                );
                            },
                        },
                    ]),
                    t
                );
            })(nc),
            lc = ic(
                Ji(function () {
                    var e = qi("core/block-editor").getSelectedBlock();
                    return e ? { blockId: e.clientId, blockName: e.name, blockContent: Object(A.get)(e, "attributes.content"), isDisabled: qi("core/edit-post").isFeatureActive("disableEditorsKitClearFormattingFormats") } : {};
                }),
                $i(function (e) {
                    var t = e("core/block-editor").updateBlockAttributes;
                    return {
                        clearBlockFormatting: function (e, n, a) {
                            t(e, { content: a });
                        },
                    };
                }),
                cc(function (e) {
                    return !e.isDisabled && hc.includes(e.blockName);
                }),
                ac
            )(Ac);
        (0, wp.plugins.registerPlugin)("editorskit-block-clear-formatting", { icon: "editor-removeformatting", render: lc });
        var Lc = wp.i18n.__,
            Ic = wp.data.dispatch,
            uc = wp.element.Fragment,
            mc = wp.components.TextareaControl,
            Rc = function (e) {
                var t = e.clientId,
                    n = e.attributes,
                    a = e.reloadModal,
                    r = n.editorskit;
                return Object(E.createElement)(
                    uc,
                    null,
                    Object(E.createElement)(
                        "div",
                        { className: "editorskit-button-group-container editorskit-button-group-logic" },
                        Object(E.createElement)(mc, {
                            rows: "2",
                            label: Lc("Conditional Logic", "block-options"),
                            help: Lc("Add valid PHP conditional tags for custom & advanced visibility options.", "block-options"),
                            value: r.logic ? r.logic : null,
                            onChange: function (e) {
                                delete r.logic;
                                var n = Object.assign({ logic: e }, r);
                                Ic("core/block-editor").updateBlockAttributes(t, { editorskit: n }), a && a();
                            },
                        })
                    )
                );
            },
            pc = n(15),
            Oc = n.n(pc);
        function dc(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t &&
                    (a = a.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, a);
            }
            return n;
        }
        function Nc(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? dc(n, !0).forEach(function (t) {
                          i()(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : dc(n).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return e;
        }
        var Sc = wp.apiFetch,
            Cc = wp.data.registerStore,
            fc = {
                setACFields: function (e) {
                    return { type: "SET_ACF_FIELDS", ACFfields: e };
                },
                receiveACFields: function (e) {
                    return { type: "RECEIVE_ACF_FIELDS", path: e };
                },
                fetchFromAPI: function (e) {
                    return { type: "FETCH_FROM_API", path: e };
                },
            };
        Cc("editorskit/acf", {
            reducer: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { ACFfields: {} },
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case "SET_ACF_FIELDS":
                        return Nc({}, e, { ACFfields: t.ACFfields });
                    case "RECEIVE_ACF_FIELDS":
                        return t.ACFfields;
                }
                return e;
            },
            actions: fc,
            selectors: {
                receiveACFields: function (e) {
                    return e.ACFfields;
                },
            },
            controls: {
                FETCH_FROM_API: function (e) {
                    return Sc({ path: e.path });
                },
            },
            resolvers: {
                receiveACFields: Oc.a.mark(function e() {
                    var t;
                    return Oc.a.wrap(function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return "/editorskit/v1/acf", (e.next = 3), fc.fetchFromAPI("/editorskit/v1/acf");
                                case 3:
                                    return (t = e.sent), (e.next = 6), fc.setACFields(t);
                                case 6:
                                case "end":
                                    return e.stop();
                            }
                    }, e);
                }),
            },
        });
        var bc = wp.i18n.__,
            xc = wp.data,
            Dc = xc.dispatch,
            Hc = xc.withSelect,
            Wc = wp.element,
            vc = Wc.Fragment,
            gc = Wc.Component,
            kc = wp.components,
            yc = kc.SelectControl,
            Bc = kc.TextareaControl,
            Pc = (function (e) {
                function t() {
                    return dt()(this, t), ft()(this, xt()(t).apply(this, arguments));
                }
                return (
                    vt()(t, e),
                    St()(t, [
                        {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    t = e.acf,
                                    n = e.selectedBlock,
                                    a = n.clientId,
                                    r = n.attributes,
                                    o = n.reloadModal,
                                    c = r.editorskit,
                                    T = function (e, t) {
                                        delete c[e];
                                        var n = Object.assign(i()({}, e, t), c);
                                        Dc("core/block-editor").updateBlockAttributes(a, { editorskit: n }), o && o();
                                    },
                                    s = [{ label: bc("Select Field", "block-options"), value: "" }];
                                if (t) {
                                    if (void 0 !== t && !Object(A.isEmpty)(t)) {
                                        var h = t;
                                        for (var l in h) s.push({ label: h[l], value: l });
                                        return Object(E.createElement)(
                                            vc,
                                            null,
                                            Object(E.createElement)(
                                                "div",
                                                { className: "editorskit-button-group-container editorskit-button-group-acf" },
                                                Object(E.createElement)("label", { className: "components-base-control__label" }, bc("Advanced Custom Fields", "block-options")),
                                                " ",
                                                Object(E.createElement)(yc, {
                                                    value: void 0 !== c.acf_visibility && "" !== c.acf_visibility ? c.acf_visibility : "",
                                                    options: [
                                                        { label: bc("Select Visibility Option", "block-options"), value: "none" },
                                                        { label: bc("Hide when Condition's met", "block-options"), value: "hide" },
                                                        { label: bc("Show when Condition's met", "block-options"), value: "show" },
                                                    ],
                                                    onChange: function (e) {
                                                        return T("acf_visibility", e);
                                                    },
                                                }),
                                                Object(E.createElement)(yc, {
                                                    value: void 0 !== c.acf_field && "" !== c.acf_field ? c.acf_field : "",
                                                    options: s,
                                                    onChange: function (e) {
                                                        return T("acf_field", e);
                                                    },
                                                }),
                                                Object(E.createElement)(yc, {
                                                    value: void 0 !== c.acf_condition && "" !== c.acf_condition ? c.acf_condition : "",
                                                    options: [
                                                        { label: bc("Select Condition", "block-options"), value: "none" },
                                                        { label: bc("Is Equal to", "block-options"), value: "equal" },
                                                        { label: bc("Is Not Equal to", "block-options"), value: "not_equal" },
                                                        { label: bc("Contains", "block-options"), value: "contains" },
                                                        { label: bc("Does Not Contain", "block-options"), value: "not_contains" },
                                                        { label: bc("Is Empty", "block-options"), value: "empty" },
                                                        { label: bc("Is Not Empty", "block-options"), value: "not_empty" },
                                                    ],
                                                    onChange: function (e) {
                                                        return T("acf_condition", e);
                                                    },
                                                }),
                                                Object(E.createElement)(Bc, {
                                                    label: bc("Conditional Value", "block-options"),
                                                    rows: "3",
                                                    value: c.acf_value,
                                                    onChange: function (e) {
                                                        return T("acf_value", e);
                                                    },
                                                    help: bc("Additional support for Advanced Custom Fields plugin. Will automatically show when you have the plugin installed and activated.", "block-options"),
                                                })
                                            )
                                        );
                                    }
                                    return null;
                                }
                            },
                        },
                    ]),
                    t
                );
            })(gc),
            wc = Hc(function (e) {
                return { acf: e("editorskit/acf").receiveACFields() };
            })(Pc),
            Mc = wp.i18n.__,
            Uc = wp.data.withSelect,
            Fc = wp.element,
            Gc = Fc.Fragment,
            jc = Fc.Component,
            Kc = wp.components,
            Vc = Kc.Modal,
            _c = Kc.TabPanel,
            Qc = Kc.withSpokenMessages,
            Yc = wp.editPost.PluginBlockSettingsMenuItem,
            Xc = wp.compose.compose,
            zc = ["core/freeform", "core/shortcode", "core/block", "core/template", "editorskit/import"],
            Zc = (function (e) {
                function t() {
                    var e;
                    return dt()(this, t), ((e = ft()(this, xt()(t).apply(this, arguments))).reloadModal = e.reloadModal.bind(Ht()(e))), (e.state = { settings: "", isOpen: !1, reload: !1 }), e;
                }
                return (
                    vt()(t, e),
                    St()(t, [
                        {
                            key: "reloadModal",
                            value: function () {
                                this.setState({ reload: !this.state.reload });
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this,
                                    t = this.props,
                                    n = t.isDisabledDevices,
                                    a = t.isDisabledUserState,
                                    r = t.isDisabledLogic,
                                    o = t.isDisabledACF,
                                    i = this.props.selectedBlock;
                                i = Object.assign({ reloadModal: this.reloadModal }, i);
                                var c = [];
                                return (
                                    (n && a) || c.push({ name: "default", title: Mc("Default", "block-options"), className: "editorskit-default" }),
                                    (r && o) || c.push({ name: "advanced", title: Mc("Advanced", "block-options"), className: "editorskit-advanced" }),
                                    n && a && r && o
                                        ? null
                                        : void 0 !== i.name && zc.includes(i.name)
                                        ? null
                                        : Object(E.createElement)(
                                              Gc,
                                              null,
                                              Object(E.createElement)(Yc, {
                                                  icon: "visibility",
                                                  label: Mc("Visibility Settings", "block-options"),
                                                  onClick: function () {
                                                      e.setState({ isOpen: !0 });
                                                  },
                                              }),
                                              this.state.isOpen && void 0 !== i.name && !zc.includes(i.name)
                                                  ? Object(E.createElement)(
                                                        Vc,
                                                        {
                                                            title: Mc("Visibility Settings", "block-options"),
                                                            onRequestClose: function () {
                                                                return e.setState({ isOpen: !1 });
                                                            },
                                                            closeLabel: Mc("Close", "block-options"),
                                                            className: "editorskit-components-modal__content",
                                                        },
                                                        Object(E.createElement)(_c, { className: "editorskit-tab-panel", activeClass: "is-active", tabs: c }, function (e) {
                                                            switch (e.name) {
                                                                case "advanced":
                                                                    return [!r && Rc(i), !o && Object(E.createElement)(wc, { selectedBlock: i })];
                                                                default:
                                                                    return [
                                                                        Object(E.createElement)(
                                                                            "small",
                                                                            null,
                                                                            Mc(
                                                                                "Attention: The display settings (show/hide for mobile, tablet, desktop or users) will only take effect once you are on the live page, and not while you're editing in Gutenberg.",
                                                                                "block-options"
                                                                            )
                                                                        ),
                                                                        !n && Ve(i),
                                                                        !a && ze(i),
                                                                    ];
                                                            }
                                                        })
                                                    )
                                                  : null
                                          )
                                );
                            },
                        },
                    ]),
                    t
                );
            })(jc),
            qc = Xc(
                Uc(function (e) {
                    var t = e("core/block-editor").getSelectedBlock();
                    return t
                        ? {
                              selectedBlock: t,
                              isDisabledDevices: e("core/edit-post").isFeatureActive("disableEditorsKitDevicesVisibility"),
                              isDisabledUserState: e("core/edit-post").isFeatureActive("disableEditorsKitUserStateVisibility"),
                              isDisabledLogic: e("core/edit-post").isFeatureActive("disableEditorsKitLogicVisibility"),
                              isDisabledACF: e("core/edit-post").isFeatureActive("disableEditorsKitAcfVisibility"),
                          }
                        : {};
                }),
                Qc
            )(Zc);
        (0, wp.plugins.registerPlugin)("editorskit-block-settings", { icon: "visibility", render: qc });
        var Jc = n(31),
            $c = n.n(Jc);
        function eT(e, t, n) {
            var a = new window.Blob([t], { type: n });
            if (window.navigator.msSaveOrOpenBlob) window.navigator.msSaveOrOpenBlob(a, e);
            else {
                var r = document.createElement("a");
                (r.href = URL.createObjectURL(a)), (r.download = e), (r.style.display = "none"), document.body.appendChild(r), r.click(), document.body.removeChild(r);
            }
        }
        function tT() {
            return (tT = $c()(
                Oc.a.mark(function e(t) {
                    var n, a, r, o, i;
                    return Oc.a.wrap(function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (e.next = 2), wp.apiFetch({ path: "/wp/v2/types/wp_block" });
                                case 2:
                                    return (n = e.sent), (e.next = 5), wp.apiFetch({ path: "/wp/v2/".concat(n.rest_base, "/").concat(t, "?context=edit") });
                                case 5:
                                    (a = e.sent), (r = a.title.raw), (o = a.content.raw), (i = JSON.stringify({ __file: "wp_block", title: r, content: o }, null, 2)), eT(Object(A.kebabCase)(r) + ".json", i, "application/json");
                                case 11:
                                case "end":
                                    return e.stop();
                            }
                    }, e);
                })
            )).apply(this, arguments);
        }
        var nT = function (e) {
                return tT.apply(this, arguments);
            },
            aT = wp.i18n.__,
            rT = wp.data,
            oT = rT.withSelect,
            iT = rT.select,
            cT = wp.compose,
            TT = cT.compose,
            ET = cT.ifCondition,
            sT = wp.element,
            hT = sT.Fragment,
            AT = sT.Component,
            lT = wp.editPost.PluginBlockSettingsMenuItem,
            LT = wp.components.withSpokenMessages,
            IT = wp.blocks.serialize,
            uT = (function (e) {
                function t() {
                    var e;
                    return dt()(this, t), ((e = ft()(this, xt()(t).apply(this, arguments))).saveAsJSON = e.saveAsJSON.bind(Ht()(e))), e;
                }
                return (
                    vt()(t, e),
                    St()(t, [
                        {
                            key: "saveAsJSON",
                            value: function () {
                                var e = this.props,
                                    t = e.selectedBlockCount,
                                    n = e.selectedBlock,
                                    a = e.selectedBlocks;
                                if (!(t < 1)) {
                                    var r;
                                    if (1 === t) {
                                        if ("core/block" === n.name) return void nT(n.attributes.ref);
                                        r = IT(n);
                                    }
                                    t > 1 && (r = IT(a));
                                    var o = JSON.stringify({ __file: "core_block", content: r }, null, 2);
                                    eT(Object(A.kebabCase)("editorskit/export") + ".json", o, "application/json");
                                }
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                return Object(E.createElement)(hT, null, Object(E.createElement)(lT, { icon: "share-alt2", label: aT("Export as JSON", "block-options"), onClick: this.saveAsJSON }));
                            },
                        },
                    ]),
                    t
                );
            })(AT),
            mT = TT([
                oT(function () {
                    var e = iT("core/block-editor"),
                        t = e.getSelectedBlockCount,
                        n = e.getSelectedBlock,
                        a = e.getMultiSelectedBlocks,
                        r = iT("core/block-editor").getBlock;
                    return { selectedBlockCount: t(), selectedBlock: n(), selectedBlocks: a(), isDisabled: iT("core/edit-post").isFeatureActive("disableEditorsKitExportOptions"), getBlock: r };
                }),
                ET(function (e) {
                    return !e.isDisabled;
                }),
                LT,
            ])(uT);
        (0, wp.plugins.registerPlugin)("editorskit-features-import-export", { icon: !1, render: mT });
        var RT = {};
        RT.copy = Object(E.createElement)(
            "svg",
            { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
            Object(E.createElement)("path", { fill: "none", d: "M0 0h24v24H0z" }),
            Object(E.createElement)("path", { d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z" })
        );
        var pT = RT,
            OT = wp.i18n.__,
            dT = wp.data,
            NT = dT.select,
            ST = dT.withSelect,
            CT = dT.withDispatch,
            fT = wp.element,
            bT = fT.Fragment,
            xT = fT.Component,
            DT = wp.components,
            HT = DT.withSpokenMessages,
            WT = DT.ClipboardButton,
            vT = wp.editPost.PluginBlockSettingsMenuItem,
            gT = wp.compose,
            kT = gT.compose,
            yT = gT.ifCondition,
            BT = wp.blocks.serialize,
            PT = (function (e) {
                function t() {
                    var e;
                    return dt()(this, t), ((e = ft()(this, xt()(t).apply(this, arguments))).getSelection = e.getSelection.bind(Ht()(e))), e;
                }
                return (
                    vt()(t, e),
                    St()(t, [
                        {
                            key: "getSelection",
                            value: function () {
                                var e,
                                    t = this.props,
                                    n = t.selectedBlockCount,
                                    a = t.selectedBlock,
                                    r = NT("core/block-editor").getMultiSelectedBlocks();
                                return 1 === n && (e = BT(a)), Object(A.size)(r) > 0 && (e = BT(r)), e;
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    t = e.onCopy,
                                    n = e.selectedBlock,
                                    a = NT("core/block-editor").getMultiSelectedBlocks();
                                return (
                                    !(!n && Object(A.size)(a) < 1) &&
                                    Object(E.createElement)(
                                        bT,
                                        null,
                                        Object(E.createElement)(vT, { icon: null, label: Object(E.createElement)(WT, { text: this.getSelection(), icon: pT.copy, onCopy: t }, OT("Copy", "block-options")), onClick: function () {} })
                                    )
                                );
                            },
                        },
                    ]),
                    t
                );
            })(xT),
            wT = kT(
                ST(function () {
                    var e = NT("core/block-editor"),
                        t = e.getSelectedBlockCount,
                        n = e.getSelectedBlock,
                        a = e.getMultiSelectedBlocks;
                    return n() ? { selectedBlockCount: t(), selectedBlock: n(), selectedBlocks: a(), isDisabled: NT("core/edit-post").isFeatureActive("disableEditorsKitCopyOptions") } : {};
                }),
                CT(function (e) {
                    var t = e("core/notices").createNotice;
                    return {
                        onCopy: function () {
                            var e = NT("core/block-editor").getMultiSelectedBlocks(),
                                n = OT("Selected block copied.", "block-options");
                            Object(A.size)(e) > 0 && (n = OT("Selected blocks copied.", "block-options")), t("info", n, { isDismissible: !0, type: "snackbar" });
                        },
                    };
                }),
                yT(function (e) {
                    return !e.isDisabled;
                }),
                HT
            )(PT);
        (0, wp.plugins.registerPlugin)("editorskit-copy", { icon: pT.copy, render: wT });
        var MT = wp.i18n.__,
            UT = wp.element.Component,
            FT = wp.compose,
            GT = FT.compose,
            jT = FT.ifCondition,
            KT = wp.data,
            VT = KT.withSelect,
            _T = KT.withDispatch,
            QT = wp.blockEditor.RichTextToolbarButton,
            YT = (function (e) {
                vt()(n, e);
                var t = (function (e) {
                    function t() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }
                    return function () {
                        var n,
                            a = xt()(e);
                        if (t()) {
                            var r = xt()(this).constructor;
                            n = Reflect.construct(a, arguments, r);
                        } else n = a.apply(this, arguments);
                        return ft()(this, n);
                    };
                })(n);
                function n() {
                    return dt()(this, n), t.apply(this, arguments);
                }
                return (
                    St()(n, [
                        {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    t = e.blockId,
                                    n = e.isBlockJustified,
                                    a = e.updateBlockAttributes;
                                return Object(E.createElement)(QT, {
                                    icon: "editor-justify",
                                    title: MT("Justify", "block-options"),
                                    onClick: function () {
                                        a(t, { align: n ? null : "justify" });
                                    },
                                    isActive: n,
                                });
                            },
                        },
                    ]),
                    n
                );
            })(UT),
            XT = GT(
                VT(function (e) {
                    var t = e("core/edit-post").isFeatureActive("disableEditorsKitJustifyFormats"),
                        n = e("core/block-editor").getSelectedBlock();
                    return t || !n ? { isDisabled: t } : { isDisabled: t, blockId: n.clientId, blockName: n.name, isBlockJustified: "justify" === Object(A.get)(n, "attributes.align"), formatTypes: e("core/rich-text").getFormatTypes() };
                }),
                _T(function (e) {
                    return { updateBlockAttributes: e("core/block-editor").updateBlockAttributes };
                }),
                jT(function (e) {
                    if (e.isDisabled || !e.blockId) return !1;
                    var t = e.formatTypes.filter(function (e) {
                        return "wpcom/justify" === e.name;
                    });
                    return "core/paragraph" === e.blockName && 0 === t.length;
                })
            )(YT),
            zT = wp.i18n.__,
            ZT = wp.element.Fragment,
            qT = {
                name: "editorskit/justify",
                title: zT("Align text justify", "block-options"),
                tagName: "p",
                className: null,
                attributes: { style: "style" },
                edit: function (e) {
                    var t = e.isActive,
                        n = e.value,
                        a = e.onChange,
                        r = e.activeAttributes;
                    return Object(E.createElement)(ZT, null, Object(E.createElement)(XT, { name: "editorskit/justify", isActive: t, value: n, onChange: a, activeAttributes: r }));
                },
            },
            JT = {};
        JT.highlighter = Object(E.createElement)(
            "svg",
            { xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" },
            " ",
            Object(E.createElement)("path", {
                d:
                    "M240.2,369.1 C244.39999999999998,373.3 251.2,373 255.10000000000002,368.6 L465.7,125.4 C474.5,115.3 474,100.2 464.5,90.7 L426.3,52.5 C416.8,43 401.7,42.5 391.6,51.3 L148.4,262 C143.9,265.9 143.7,272.7 147.9,276.9 L240.2,369.1 z",
                id: "svg_2",
            }),
            " ",
            Object(E.createElement)("path", {
                d:
                    "M48.2,449.7 L86.5,462.5 L104.5,444.5 L172.1,444.5 C174.8,444.5 177.4,443.4 179.3,441.5 L205.1,415.7 C209.1,411.7 209.1,405.3 205.1,401.3 L111.6,308 C107.6,304 101.19999999999999,304 97.19999999999999,308 L71.4,333.8 C69.5,335.7 68.4,338.3 68.4,341 L68.4,404.4 C68.4,407.1 67.3,409.7 65.4,411.6 L44.099999999999994,432.9 C38.900000000000006,438.2 41.099999999999994,447.3 48.2,449.7 z",
                id: "svg_3",
            }),
            " "
        );
        var $T = JT;
        var eE = wp.i18n.__,
            tE = wp.element,
            nE = tE.Component,
            aE = tE.Fragment,
            rE = wp.data.withSelect,
            oE = wp.blockEditor,
            iE = oE.BlockControls,
            cE = oE.getColorClassName,
            TE = oE.getColorObjectByColorValue,
            EE = oE.getColorObjectByAttributeValues,
            sE = wp.richText,
            hE = sE.applyFormat,
            AE = sE.removeFormat,
            lE = sE.getActiveFormat,
            LE = wp.components,
            IE = LE.Toolbar,
            uE = LE.IconButton,
            mE = LE.Popover,
            RE = LE.ColorPalette,
            pE = wp.compose,
            OE = pE.compose,
            dE = pE.ifCondition,
            NE = "editorskit/background",
            SE = eE("Highlight Color", "block-options"),
            CE = [
                { name: eE("Orange Sunrise", "block-options"), slug: "orange-sunrise", color: "#f7cc62" },
                { name: eE("Pink Flamingo", "block-options"), slug: "pink-flamingo", color: "#ffbfb5" },
                { name: eE("Spring Green", "block-options"), slug: "spring-green", color: "#b5dcaf" },
                { name: eE("Blue Moon", "block-options"), slug: "blue-moon", color: "#d6e8fa" },
                { name: eE("Purple Mist", "block-options"), slug: "purple-mist", color: "#d8c3ff" },
            ],
            fE = (function (e) {
                vt()(n, e);
                var t = (function (e) {
                    function t() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }
                    return function () {
                        var n,
                            a = xt()(e);
                        if (t()) {
                            var r = xt()(this).constructor;
                            n = Reflect.construct(a, arguments, r);
                        } else n = a.apply(this, arguments);
                        return ft()(this, n);
                    };
                })(n);
                function n() {
                    var e;
                    return dt()(this, n), ((e = t.apply(this, arguments)).toggle = e.toggle.bind(Ht()(e))), (e.state = { isOpen: !1 }), e;
                }
                return (
                    St()(n, [
                        {
                            key: "toggle",
                            value: function () {
                                this.setState(function (e) {
                                    return { isOpen: !e.isOpen };
                                });
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e,
                                    t = this,
                                    n = this.state.isOpen,
                                    a = this.props,
                                    r = a.value,
                                    o = a.onChange,
                                    i = a.isActive,
                                    c = a.colors,
                                    T = lE(r, NE);
                                if (T) {
                                    var s = T.attributes.style;
                                    s && (e = s.replace(new RegExp("^background-color:\\s*"), ""));
                                    var A = T.attributes.class;
                                    if (A) {
                                        var l = A.replace(/.*has-(.*?)-background-color.*/, "$1");
                                        e = EE(c, l).color;
                                    }
                                }
                                return Object(E.createElement)(
                                    aE,
                                    null,
                                    Object(E.createElement)(
                                        iE,
                                        null,
                                        Object(E.createElement)(
                                            IE,
                                            { className: "editorskit-components-toolbar" },
                                            Object(E.createElement)(uE, {
                                                className: h()("components-button components-icon-button components-editorskit-toolbar__control components-toolbar__control components-editorskit-background-format", { "is-active": i }),
                                                icon: $T.highlighter,
                                                "aria-haspopup": "true",
                                                tooltip: SE,
                                                onClick: this.toggle,
                                            }),
                                            n &&
                                                Object(E.createElement)(
                                                    mE,
                                                    {
                                                        position: "bottom center",
                                                        className: "components-editorskit__inline-color-popover",
                                                        focusOnMount: "container",
                                                        onClickOutside: function (e) {
                                                            e.target.classList.contains("components-editorskit-background-format") ||
                                                                document.querySelector(".components-editorskit-background-format").contains(e.target) ||
                                                                (document.querySelector(".components-color-palette__picker") &&
                                                                    (!document.querySelector(".components-color-palette__picker") || document.querySelector(".components-color-palette__picker").contains(e.target))) ||
                                                                t.setState({ isOpen: !n });
                                                        },
                                                    },
                                                    Object(E.createElement)(RE, {
                                                        colors: c,
                                                        value: e,
                                                        onChange: function (e) {
                                                            if (e) {
                                                                var t = null;
                                                                void 0 !== window.editorskitInfo && window.editorskitInfo.supports.color_palette && (t = TE(c, e)),
                                                                    o(hE(r, { type: NE, attributes: t ? { class: cE("background-color", t.slug) } : { style: "background-color:".concat(e) } }));
                                                            } else o(AE(r, NE));
                                                        },
                                                    })
                                                )
                                        )
                                    )
                                );
                            },
                        },
                    ]),
                    n
                );
            })(nE),
            bE = OE(
                rE(function (e) {
                    var t = e("core/block-editor").getSettings().colors;
                    return { colors: t || CE, isDisabled: e("core/edit-post").isFeatureActive("disableEditorsKitHighlightFormats") };
                }),
                dE(function (e) {
                    return !e.isDisabled;
                })
            )(fE),
            xE = { name: "editorskit/background", title: (0, wp.i18n.__)("Background Color", "block-options"), tagName: "span", className: "has-inline-background", attributes: { style: "style", class: "class" }, edit: bE },
            DE = n(19),
            HE = n.n(DE);
        function WE(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t &&
                    (a = a.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, a);
            }
            return n;
        }
        function vE(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? WE(n, !0).forEach(function (t) {
                          i()(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : WE(n).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return e;
        }
        var gE = wp.element.Component,
            kE = wp.compose,
            yE = kE.compose,
            BE = kE.ifCondition,
            PE = wp.data,
            wE = PE.withSelect,
            ME = PE.withDispatch,
            UE = wp.richText,
            FE = UE.applyFormat,
            GE = UE.getTextContent,
            jE = UE.remove,
            KE = wp.components.withSpokenMessages,
            VE = (function (e) {
                vt()(n, e);
                var t = (function (e) {
                    function t() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }
                    return function () {
                        var n,
                            a = xt()(e);
                        if (t()) {
                            var r = xt()(this).constructor;
                            n = Reflect.construct(a, arguments, r);
                        } else n = a.apply(this, arguments);
                        return ft()(this, n);
                    };
                })(n);
                function n() {
                    var e;
                    return dt()(this, n), ((e = t.apply(this, arguments)).state = { start: null, end: null }), e;
                }
                return (
                    St()(n, [
                        {
                            key: "_experimentalMarkdown",
                            value: function (e, t, n, a) {
                                var r = e.start,
                                    o = GE(e);
                                if (o.slice(r - 1, r) !== n) return e;
                                var i = o.slice(0, r - 1).lastIndexOf(n);
                                if (-1 === i) return e;
                                var c = i,
                                    T = r - 2;
                                if (c === T) return e;
                                if (o.slice(c, T + 1).split("\n").length > 1) return e;
                                var E = (function (e) {
                                    var t = e.formats,
                                        n = e.start,
                                        a = e.end,
                                        r = e.activeFormats;
                                    if (void 0 === n) return [];
                                    if (n === a) {
                                        if (r) return r;
                                        var o = t[n - 1] || [],
                                            i = t[n] || [];
                                        return o.length < i.length ? o : i;
                                    }
                                    return t[n] || [];
                                })(e);
                                if (
                                    E.length > 0 &&
                                    E.filter(function (e) {
                                        return "core/code" === e.type;
                                    })
                                )
                                    return e;
                                var s = o.slice(c - 1, c);
                                return 1 === s.length && s.match(/[A-Z|a-z]/i)
                                    ? e
                                    : " " === o.slice(c + 1, c + 2)
                                    ? e
                                    : ((e = jE(e, c, c + 1)),
                                      (e = jE(e, T, T + 1)),
                                      (e = FE(e, { type: a }, c, T)),
                                      wp.data.dispatch("core/block-editor").stopTyping(),
                                      this.setState({ start: c, end: T }),
                                      (e.activeFormats = []),
                                      t(vE(vE({}, e), {}, { needsSelectionUpdate: !0 })),
                                      e);
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this,
                                    t = this.props,
                                    n = t.value,
                                    a = t.onChange;
                                return (
                                    HE()({ bold: { markdown: "*", format: "core/bold" }, italic: { markdown: "_", format: "core/italic" }, strikethrough: { markdown: "~", format: "core/strikethrough" } }, function (t) {
                                        e._experimentalMarkdown(n, a, t.markdown, t.format);
                                    }),
                                    null
                                );
                            },
                        },
                    ]),
                    n
                );
            })(gE),
            _E = yE(
                wE(function (e) {
                    var t = e("core/edit-post").isFeatureActive;
                    return { isDisabled: e("core/edit-post").isFeatureActive("disableEditorsKitMarkdownWriting"), isIceberg: t("icebergWritingMode") };
                }),
                ME(function (e, t) {
                    var n = t.clientId,
                        a = t.instanceId,
                        r = t.identifier,
                        o = void 0 === r ? a : r,
                        i = e("core/block-editor").selectionChange;
                    return {
                        onSelectionChange: function (e, t) {
                            i(n, o, e, t);
                        },
                    };
                }),
                BE(function (e) {
                    return !e.isDisabled && !e.isIceberg;
                }),
                KE
            )(VE),
            QE = wp.i18n.__,
            YE = wp.element.Fragment,
            XE = {
                name: "editorskit/markdown",
                title: QE("Underline", "block-options"),
                tagName: "p",
                className: "editorskit-markdown",
                attributes: { style: "style" },
                edit: function (e) {
                    var t = e.isActive,
                        n = e.value,
                        a = e.onChange,
                        r = e.activeAttributes;
                    return Object(E.createElement)(YE, null, Object(E.createElement)(_E, { name: "editorskit/markdown", isActive: t, value: n, onChange: a, activeAttributes: r }));
                },
            };
        function zE(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t &&
                    (a = a.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, a);
            }
            return n;
        }
        var ZE = wp.i18n.__,
            qE = wp.element.Component,
            JE = wp.compose,
            $E = JE.compose,
            es = JE.ifCondition,
            ts = wp.data.withSelect,
            ns = wp.blockEditor.RichTextToolbarButton,
            as = wp.richText.removeFormat,
            rs = (function (e) {
                vt()(n, e);
                var t = (function (e) {
                    function t() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }
                    return function () {
                        var n,
                            a = xt()(e);
                        if (t()) {
                            var r = xt()(this).constructor;
                            n = Reflect.construct(a, arguments, r);
                        } else n = a.apply(this, arguments);
                        return ft()(this, n);
                    };
                })(n);
                function n() {
                    return dt()(this, n), t.apply(this, arguments);
                }
                return (
                    St()(n, [
                        {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    t = e.value,
                                    n = e.isActive,
                                    a = e.onChange,
                                    r = e.formatTypes;
                                return Object(E.createElement)(ns, {
                                    icon: "editor-removeformatting",
                                    title: ZE("Clear Formatting", "block-options"),
                                    onClick: function () {
                                        if (r.length > 0) {
                                            var e = t;
                                            HE()(r, function (t) {
                                                e = as(e, t.name);
                                            }),
                                                a(
                                                    (function (e) {
                                                        for (var t = 1; t < arguments.length; t++) {
                                                            var n = null != arguments[t] ? arguments[t] : {};
                                                            t % 2
                                                                ? zE(n, !0).forEach(function (t) {
                                                                      i()(e, t, n[t]);
                                                                  })
                                                                : Object.getOwnPropertyDescriptors
                                                                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                                                : zE(n).forEach(function (t) {
                                                                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                                                  });
                                                        }
                                                        return e;
                                                    })({}, e)
                                                );
                                        }
                                    },
                                    isActive: n,
                                });
                            },
                        },
                    ]),
                    n
                );
            })(qE),
            os = $E(
                ts(function (e) {
                    return { isDisabled: e("core/edit-post").isFeatureActive("disableEditorsKitClearFormattingFormats"), formatTypes: e("core/rich-text").getFormatTypes() };
                }),
                es(function (e) {
                    return !e.isDisabled;
                })
            )(rs),
            is = wp.i18n.__,
            cs = wp.element.Fragment,
            Ts = {
                name: "editorskit/clear-formatting",
                title: is("Clear Formatting", "block-options"),
                tagName: "span",
                className: "editorskit-clear-formatting",
                edit: function (e) {
                    var t = e.isActive,
                        n = e.value,
                        a = e.onChange,
                        r = e.activeAttributes;
                    return Object(E.createElement)(cs, null, Object(E.createElement)(os, { name: "editorskit/clear-formatting", isActive: t, value: n, onChange: a, activeAttributes: r }));
                },
            },
            Es = {};
        Es.uppercase = Object(E.createElement)(
            "svg",
            { xmlns: "http://www.w3.org/2000/svg", height: "300", width: "300", version: "1", viewBox: "0 0 24 24" },
            " ",
            Object(E.createElement)("path", { d: "M22,7.7h-4V19h-2.1V7.7H13V6h9V7.7z" }),
            " ",
            Object(E.createElement)("path", { d: "M11,7.7H8V19H5.9V7.7H2V6h9V7.7z" }),
            " "
        );
        var ss = Es,
            hs = wp.i18n.__,
            As = wp.element.Component,
            ls = wp.compose,
            Ls = ls.compose,
            Is = ls.ifCondition,
            us = wp.data.withSelect,
            ms = wp.blockEditor.RichTextToolbarButton,
            Rs = wp.richText.toggleFormat,
            ps = (function (e) {
                function t() {
                    return dt()(this, t), ft()(this, xt()(t).apply(this, arguments));
                }
                return (
                    vt()(t, e),
                    St()(t, [
                        {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    t = e.onChange,
                                    n = e.isActive,
                                    a = e.value,
                                    r = e.name;
                                return Object(E.createElement)(ms, {
                                    icon: ss.uppercase,
                                    title: hs("Uppercase", "block-options"),
                                    onClick: function () {
                                        t(Rs(a, { type: r }));
                                    },
                                    isActive: n,
                                });
                            },
                        },
                    ]),
                    t
                );
            })(As),
            Os = Ls(
                us(function (e) {
                    return { isDisabled: e("core/edit-post").isFeatureActive("disableEditorsKitUppercaseFormats"), formatTypes: e("core/rich-text").getFormatTypes() };
                }),
                Is(function (e) {
                    var t = e.formatTypes.filter(function (e) {
                        return "coblocks/uppercase" === e.name;
                    });
                    return !e.isDisabled && 0 === t.length;
                })
            )(ps),
            ds = wp.i18n.__,
            Ns = wp.element.Fragment,
            Ss = {
                name: "editorskit/uppercase",
                title: ds("Uppercase", "block-options"),
                tagName: "span",
                className: "uppercase",
                edit: function (e) {
                    var t = e.isActive,
                        n = e.value,
                        a = e.onChange,
                        r = e.activeAttributes;
                    return Object(E.createElement)(Ns, null, Object(E.createElement)(Os, { name: "editorskit/uppercase", isActive: t, value: n, onChange: a, activeAttributes: r }));
                },
            },
            Cs = wp.url,
            fs = Cs.getProtocol,
            bs = Cs.isValidProtocol,
            xs = Cs.getAuthority,
            Ds = Cs.isValidAuthority,
            Hs = Cs.getPath,
            Ws = Cs.isValidPath,
            vs = Cs.getQueryString,
            gs = Cs.isValidQueryString,
            ks = Cs.getFragment,
            ys = Cs.isValidFragment,
            Bs = wp.i18n,
            Ps = Bs.__,
            ws = Bs.sprintf;
        function Ms(e) {
            if (!e) return !1;
            var t = e.trim();
            if (!t) return !1;
            if (/^\S+:/.test(t)) {
                var n = fs(t);
                if (!bs(n)) return !1;
                if (Object(A.startsWith)(n, "http") && !/^https?:\/\/[^\/\s]/i.test(t)) return !1;
                var a = xs(t);
                if (!Ds(a)) return !1;
                var r = Hs(t);
                if (r && !Ws(r)) return !1;
                var o = vs(t);
                if (o && !gs(o)) return !1;
                var i = ks(t);
                if (i && !ys(i)) return !1;
            }
            return !(Object(A.startsWith)(t, "#") && !ys(t));
        }
        function Us(e) {
            var t = e.url,
                n = e.opensInNewWindow,
                a = e.noFollow,
                r = e.sponsored,
                o = e.text,
                i = { type: "editorskit/link", attributes: { url: t } },
                c = [];
            if (n) {
                var T = ws(Ps("%s (opens in a new tab)", "block-options"), o);
                (i.attributes.target = "_blank"), (i.attributes["aria-label"] = T), c.push("noreferrer noopener");
            }
            return a && c.push("nofollow"), r && c.push("sponsored"), c.length > 0 && (i.attributes.rel = c.join(" ")), i;
        }
        var Fs = wp.element.Component,
            Gs = wp.dom,
            js = Gs.getOffsetParent,
            Ks = Gs.getRectangleFromRange;
        function Vs() {
            var e = window.getSelection();
            if (0 === e.rangeCount) return {};
            var t = Ks(e.getRangeAt(0)),
                n = t.top + t.height,
                a = t.left + t.width / 2,
                r = js(e.anchorNode);
            if (r) {
                var o = r.getBoundingClientRect();
                (n -= o.top), (a -= o.left);
            }
            return { top: n, left: a };
        }
        var _s = (function (e) {
            function t() {
                var e;
                return dt()(this, t), ((e = ft()(this, xt()(t).apply(this, arguments))).state = { style: Vs() }), e;
            }
            return (
                vt()(t, e),
                St()(t, [
                    {
                        key: "render",
                        value: function () {
                            var e = this.props.children,
                                t = this.state.style;
                            return Object(E.createElement)("div", { className: "editor-format-toolbar__selection-position", style: t }, e);
                        },
                    },
                ]),
                t
            );
        })(Fs);
        function Qs(e) {
            return (Qs =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function Ys(e, t, n) {
            return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
        }
        function Xs(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t &&
                    (a = a.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, a);
            }
            return n;
        }
        function zs(e, t) {
            var n = e["page".concat(t ? "Y" : "X", "Offset")],
                a = "scroll".concat(t ? "Top" : "Left");
            if ("number" != typeof n) {
                var r = e.document;
                "number" != typeof (n = r.documentElement[a]) && (n = r.body[a]);
            }
            return n;
        }
        function Zs(e) {
            return zs(e);
        }
        function qs(e) {
            return zs(e, !0);
        }
        function Js(e) {
            var t = (function (e) {
                    var t,
                        n,
                        a,
                        r = e.ownerDocument,
                        o = r.body,
                        i = r && r.documentElement;
                    return (n = (t = e.getBoundingClientRect()).left), (a = t.top), { left: (n -= i.clientLeft || o.clientLeft || 0), top: (a -= i.clientTop || o.clientTop || 0) };
                })(e),
                n = e.ownerDocument,
                a = n.defaultView || n.parentWindow;
            return (t.left += Zs(a)), (t.top += qs(a)), t;
        }
        var $s,
            eh = new RegExp("^(".concat(/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, ")(?!px)[a-z%]+$"), "i"),
            th = /^(top|right|bottom|left)$/,
            nh = "currentStyle",
            ah = "runtimeStyle",
            rh = "left",
            oh = "px";
        function ih(e, t) {
            for (var n = 0; n < e.length; n++) t(e[n]);
        }
        function ch(e) {
            return "border-box" === $s(e, "boxSizing");
        }
        "undefined" != typeof window &&
            ($s = window.getComputedStyle
                ? function (e, t, n) {
                      var a = "",
                          r = e.ownerDocument,
                          o = n || r.defaultView.getComputedStyle(e, null);
                      return o && (a = o.getPropertyValue(t) || o[t]), a;
                  }
                : function (e, t) {
                      var n = e[nh] && e[nh][t];
                      if (eh.test(n) && !th.test(t)) {
                          var a = e.style,
                              r = a[rh],
                              o = e[ah][rh];
                          (e[ah][rh] = e[nh][rh]), (a[rh] = "fontSize" === t ? "1em" : n || 0), (n = a.pixelLeft + oh), (a[rh] = r), (e[ah][rh] = o);
                      }
                      return "" === n ? "auto" : n;
                  });
        var Th = ["margin", "border", "padding"],
            Eh = -1,
            sh = 2,
            hh = 1;
        function Ah(e, t, n) {
            var a,
                r,
                o,
                i = 0;
            for (r = 0; r < t.length; r++)
                if ((a = t[r]))
                    for (o = 0; o < n.length; o++) {
                        var c = void 0;
                        (c = "border" === a ? "".concat(a + n[o], "Width") : a + n[o]), (i += parseFloat($s(e, c)) || 0);
                    }
            return i;
        }
        function lh(e) {
            return null != e && e == e.window;
        }
        var Lh = {};
        function Ih(e, t, n) {
            if (lh(e)) return "width" === t ? Lh.viewportWidth(e) : Lh.viewportHeight(e);
            if (9 === e.nodeType) return "width" === t ? Lh.docWidth(e) : Lh.docHeight(e);
            var a = "width" === t ? ["Left", "Right"] : ["Top", "Bottom"],
                r = "width" === t ? e.offsetWidth : e.offsetHeight,
                o = ($s(e), ch(e)),
                i = 0;
            (null == r || r <= 0) && ((r = void 0), (null == (i = $s(e, t)) || Number(i) < 0) && (i = e.style[t] || 0), (i = parseFloat(i) || 0)), void 0 === n && (n = o ? hh : Eh);
            var c = void 0 !== r || o,
                T = r || i;
            if (n === Eh) return c ? T - Ah(e, ["border", "padding"], a) : i;
            if (c) {
                var E = n === sh ? -Ah(e, ["border"], a) : Ah(e, ["margin"], a);
                return T + (n === hh ? 0 : E);
            }
            return i + Ah(e, Th.slice(n), a);
        }
        ih(["Width", "Height"], function (e) {
            (Lh["doc".concat(e)] = function (t) {
                var n = t.document;
                return Math.max(n.documentElement["scroll".concat(e)], n.body["scroll".concat(e)], Lh["viewport".concat(e)](n));
            }),
                (Lh["viewport".concat(e)] = function (t) {
                    var n = "client".concat(e),
                        a = t.document,
                        r = a.body,
                        o = a.documentElement[n];
                    return ("CSS1Compat" === a.compatMode && o) || (r && r[n]) || o;
                });
        });
        var uh = { position: "absolute", visibility: "hidden", display: "block" };
        function mh(e) {
            var t,
                n = arguments;
            return (
                0 !== e.offsetWidth
                    ? (t = Ih.apply(void 0, n))
                    : (function (e, t, n) {
                          var a,
                              r = {},
                              o = e.style;
                          for (a in t) t.hasOwnProperty(a) && ((r[a] = o[a]), (o[a] = t[a]));
                          for (a in (n.call(e), t)) t.hasOwnProperty(a) && (o[a] = r[a]);
                      })(e, uh, function () {
                          t = Ih.apply(void 0, n);
                      }),
                t
            );
        }
        function Rh(e, t, n) {
            var a = n;
            if ("object" !== Qs(t)) return void 0 !== a ? ("number" == typeof a && (a += "px"), void (e.style[t] = a)) : $s(e, t);
            for (var r in t) t.hasOwnProperty(r) && Rh(e, r, t[r]);
        }
        ih(["width", "height"], function (e) {
            var t = e.charAt(0).toUpperCase() + e.slice(1);
            Lh["outer".concat(t)] = function (t, n) {
                return t && mh(t, e, n ? 0 : hh);
            };
            var n = "width" === e ? ["Left", "Right"] : ["Top", "Bottom"];
            Lh[e] = function (t, a) {
                if (void 0 === a) return t && mh(t, e, Eh);
                if (t) {
                    $s(t);
                    return ch(t) && (a += Ah(t, ["padding", "border"], n)), Rh(t, e, a);
                }
            };
        });
        var ph = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? Xs(n, !0).forEach(function (t) {
                          Ys(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : Xs(n).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return e;
        })(
            {
                getWindow: function (e) {
                    var t = e.ownerDocument || e;
                    return t.defaultView || t.parentWindow;
                },
                offset: function (e, t) {
                    if (void 0 === t) return Js(e);
                    !(function (e, t) {
                        "static" === Rh(e, "position") && (e.style.position = "relative");
                        var n,
                            a,
                            r = Js(e),
                            o = {};
                        for (a in t) t.hasOwnProperty(a) && ((n = parseFloat(Rh(e, a)) || 0), (o[a] = n + t[a] - r[a]));
                        Rh(e, o);
                    })(e, t);
                },
                isWindow: lh,
                each: ih,
                css: Rh,
                clone: function (e) {
                    var t = {};
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                    if (e.overflow) for (var a in e) e.hasOwnProperty(a) && (t.overflow[a] = e.overflow[a]);
                    return t;
                },
                scrollLeft: function (e, t) {
                    if (lh(e)) {
                        if (void 0 === t) return Zs(e);
                        window.scrollTo(t, qs(e));
                    } else {
                        if (void 0 === t) return e.scrollLeft;
                        e.scrollLeft = t;
                    }
                },
                scrollTop: function (e, t) {
                    if (lh(e)) {
                        if (void 0 === t) return qs(e);
                        window.scrollTo(Zs(e), t);
                    } else {
                        if (void 0 === t) return e.scrollTop;
                        e.scrollTop = t;
                    }
                },
                viewportWidth: 0,
                viewportHeight: 0,
            },
            Lh
        );
        var Oh = function (e, t, n) {
                (n = n || {}), 9 === t.nodeType && (t = ph.getWindow(t));
                var a = n.allowHorizontalScroll,
                    r = n.onlyScrollIfNeeded,
                    o = n.alignWithTop,
                    i = n.alignWithLeft,
                    c = n.offsetTop || 0,
                    T = n.offsetLeft || 0,
                    E = n.offsetBottom || 0,
                    s = n.offsetRight || 0;
                a = void 0 === a || a;
                var h,
                    A,
                    l,
                    L,
                    I,
                    u,
                    m,
                    R,
                    p,
                    O,
                    d = ph.isWindow(t),
                    N = ph.offset(e),
                    S = ph.outerHeight(e),
                    C = ph.outerWidth(e);
                d
                    ? ((m = t),
                      (O = ph.height(m)),
                      (p = ph.width(m)),
                      (R = { left: ph.scrollLeft(m), top: ph.scrollTop(m) }),
                      (I = { left: N.left - R.left - T, top: N.top - R.top - c }),
                      (u = { left: N.left + C - (R.left + p) + s, top: N.top + S - (R.top + O) + E }),
                      (L = R))
                    : ((h = ph.offset(t)),
                      (A = t.clientHeight),
                      (l = t.clientWidth),
                      (L = { left: t.scrollLeft, top: t.scrollTop }),
                      (I = { left: N.left - (h.left + (parseFloat(ph.css(t, "borderLeftWidth")) || 0)) - T, top: N.top - (h.top + (parseFloat(ph.css(t, "borderTopWidth")) || 0)) - c }),
                      (u = { left: N.left + C - (h.left + l + (parseFloat(ph.css(t, "borderRightWidth")) || 0)) + s, top: N.top + S - (h.top + A + (parseFloat(ph.css(t, "borderBottomWidth")) || 0)) + E })),
                    I.top < 0 || u.top > 0
                        ? !0 === o
                            ? ph.scrollTop(t, L.top + I.top)
                            : !1 === o
                            ? ph.scrollTop(t, L.top + u.top)
                            : I.top < 0
                            ? ph.scrollTop(t, L.top + I.top)
                            : ph.scrollTop(t, L.top + u.top)
                        : r || ((o = void 0 === o || !!o) ? ph.scrollTop(t, L.top + I.top) : ph.scrollTop(t, L.top + u.top)),
                    a &&
                        (I.left < 0 || u.left > 0
                            ? !0 === i
                                ? ph.scrollLeft(t, L.left + I.left)
                                : !1 === i
                                ? ph.scrollLeft(t, L.left + u.left)
                                : I.left < 0
                                ? ph.scrollLeft(t, L.left + I.left)
                                : ph.scrollLeft(t, L.left + u.left)
                            : r || ((i = void 0 === i || !!i) ? ph.scrollLeft(t, L.left + I.left) : ph.scrollLeft(t, L.left + u.left)));
            },
            dh = wp.i18n,
            Nh = dh.__,
            Sh = dh.sprintf,
            Ch = dh._n,
            fh = wp.element,
            bh = fh.Component,
            xh = fh.createRef,
            Dh = wp.htmlEntities.decodeEntities,
            Hh = wp.keycodes,
            Wh = Hh.UP,
            vh = Hh.DOWN,
            gh = Hh.ENTER,
            kh = Hh.TAB,
            yh = wp.components,
            Bh = yh.Spinner,
            Ph = yh.withSpokenMessages,
            wh = yh.Popover,
            Mh = wp.compose.withInstanceId,
            Uh = wp.apiFetch,
            Fh = wp.url.addQueryArgs,
            Gh = function (e) {
                return e.stopPropagation();
            },
            jh = Ph(
                Mh(
                    (function (e) {
                        function t(e) {
                            var n,
                                a = e.autocompleteRef;
                            return (
                                dt()(this, t),
                                ((n = ft()(this, xt()(t).apply(this, arguments))).onChange = n.onChange.bind(Ht()(n))),
                                (n.onKeyDown = n.onKeyDown.bind(Ht()(n))),
                                (n.autocompleteRef = a || xh()),
                                (n.inputRef = xh()),
                                (n.updateSuggestions = Object(A.throttle)(n.updateSuggestions.bind(Ht()(n)), 200)),
                                (n.suggestionNodes = []),
                                (n.state = { posts: [], showSuggestions: !1, selectedSuggestion: null }),
                                n
                            );
                        }
                        return (
                            vt()(t, e),
                            St()(t, [
                                {
                                    key: "componentDidUpdate",
                                    value: function () {
                                        var e = this,
                                            t = this.state,
                                            n = t.showSuggestions,
                                            a = t.selectedSuggestion;
                                        n &&
                                            null !== a &&
                                            !this.scrollingIntoView &&
                                            ((this.scrollingIntoView = !0),
                                            Oh(this.suggestionNodes[a], this.autocompleteRef.current, { onlyScrollIfNeeded: !0 }),
                                            setTimeout(function () {
                                                e.scrollingIntoView = !1;
                                            }, 100));
                                    },
                                },
                                {
                                    key: "componentWillUnmount",
                                    value: function () {
                                        delete this.suggestionsRequest;
                                    },
                                },
                                {
                                    key: "bindSuggestionNode",
                                    value: function (e) {
                                        var t = this;
                                        return function (n) {
                                            t.suggestionNodes[e] = n;
                                        };
                                    },
                                },
                                {
                                    key: "updateSuggestions",
                                    value: function (e) {
                                        var t = this;
                                        if (e.length < 2 || /^https?:/.test(e)) this.setState({ showSuggestions: !1, selectedSuggestion: null, loading: !1 });
                                        else {
                                            this.setState({ showSuggestions: !0, selectedSuggestion: null, loading: !0 });
                                            var n = Uh({ path: Fh("/wp/v2/search", { search: e, per_page: 20, type: "post" }) });
                                            n
                                                .then(function (e) {
                                                    t.suggestionsRequest === n &&
                                                        (t.setState({ posts: e, loading: !1 }),
                                                        e.length
                                                            ? t.props.debouncedSpeak(
                                                                  Sh(Ch("%d result found, use up and down arrow keys to navigate.", "%d results found, use up and down arrow keys to navigate.", e.length), e.length),
                                                                  "assertive"
                                                              )
                                                            : t.props.debouncedSpeak(Nh("No results.", "block-options"), "assertive"));
                                                })
                                                .catch(function () {
                                                    t.suggestionsRequest === n && t.setState({ loading: !1 });
                                                }),
                                                (this.suggestionsRequest = n);
                                        }
                                    },
                                },
                                {
                                    key: "onChange",
                                    value: function (e) {
                                        var t = e.target.value;
                                        this.props.onChange(t), this.updateSuggestions(t);
                                    },
                                },
                                {
                                    key: "onKeyDown",
                                    value: function (e) {
                                        var t = this.state,
                                            n = t.showSuggestions,
                                            a = t.selectedSuggestion,
                                            r = t.posts,
                                            o = t.loading;
                                        if (n && r.length && !o) {
                                            var i = this.state.posts[this.state.selectedSuggestion];
                                            switch (e.keyCode) {
                                                case Wh:
                                                    e.stopPropagation(), e.preventDefault();
                                                    var c = a ? a - 1 : r.length - 1;
                                                    this.setState({ selectedSuggestion: c });
                                                    break;
                                                case vh:
                                                    e.stopPropagation(), e.preventDefault();
                                                    var T = null === a || a === r.length - 1 ? 0 : a + 1;
                                                    this.setState({ selectedSuggestion: T });
                                                    break;
                                                case kh:
                                                    null !== this.state.selectedSuggestion && (this.selectLink(i), this.props.speak(Nh("Link selected.", "block-options")));
                                                    break;
                                                case gh:
                                                    null !== this.state.selectedSuggestion && (e.stopPropagation(), this.selectLink(i));
                                            }
                                        } else
                                            switch (e.keyCode) {
                                                case Wh:
                                                    0 !== e.target.selectionStart && (e.stopPropagation(), e.preventDefault(), e.target.setSelectionRange(0, 0));
                                                    break;
                                                case vh:
                                                    this.props.value.length !== e.target.selectionStart && (e.stopPropagation(), e.preventDefault(), e.target.setSelectionRange(this.props.value.length, this.props.value.length));
                                            }
                                    },
                                },
                                {
                                    key: "selectLink",
                                    value: function (e) {
                                        this.props.onChange(e.url, e), this.setState({ selectedSuggestion: null, showSuggestions: !1 });
                                    },
                                },
                                {
                                    key: "handleOnClick",
                                    value: function (e) {
                                        this.selectLink(e), this.inputRef.current.focus();
                                    },
                                },
                                {
                                    key: "render",
                                    value: function () {
                                        var e = this,
                                            t = this.props,
                                            n = t.value,
                                            a = void 0 === n ? "" : n,
                                            r = t.autoFocus,
                                            o = void 0 === r || r,
                                            i = t.instanceId,
                                            c = t.className,
                                            T = this.state,
                                            s = T.showSuggestions,
                                            A = T.posts,
                                            l = T.selectedSuggestion,
                                            L = T.loading;
                                        return Object(E.createElement)(
                                            "div",
                                            { className: h()("editor-url-input block-editor-url-input", c) },
                                            Object(E.createElement)("input", {
                                                autoFocus: o,
                                                type: "text",
                                                "aria-label": Nh("URL", "block-options"),
                                                required: !0,
                                                value: a,
                                                onChange: this.onChange,
                                                onInput: Gh,
                                                placeholder: Nh("Paste URL or type to search", "block-options"),
                                                onKeyDown: this.onKeyDown,
                                                role: "combobox",
                                                "aria-expanded": s,
                                                "aria-autocomplete": "list",
                                                "aria-owns": "editor-url-input-suggestions-".concat(i),
                                                "aria-activedescendant": null !== l ? "editor-url-input-suggestion-".concat(i, "-").concat(l) : void 0,
                                                ref: this.inputRef,
                                            }),
                                            L && Object(E.createElement)(Bh, null),
                                            s &&
                                                !!A.length &&
                                                Object(E.createElement)(
                                                    wh,
                                                    { position: "bottom", noArrow: !0, focusOnMount: !1 },
                                                    Object(E.createElement)(
                                                        "div",
                                                        {
                                                            className: h()("editor-url-input__suggestions", "block-editor-url-input__suggestions", "".concat(c, "__suggestions")),
                                                            id: "editor-url-input-suggestions-".concat(i),
                                                            ref: this.autocompleteRef,
                                                            role: "listbox",
                                                        },
                                                        A.map(function (t, n) {
                                                            return Object(E.createElement)(
                                                                "button",
                                                                {
                                                                    key: t.id,
                                                                    role: "option",
                                                                    tabIndex: "-1",
                                                                    id: "editor-url-input-suggestion-".concat(i, "-").concat(n),
                                                                    ref: e.bindSuggestionNode(n),
                                                                    className: h()("editor-url-input__suggestion block-editor-url-input__suggestion", { "is-selected": n === l }),
                                                                    onClick: function () {
                                                                        return e.handleOnClick(t);
                                                                    },
                                                                    "aria-selected": n === l,
                                                                },
                                                                Dh(t.title) || Nh("(no title)", "block-options")
                                                            );
                                                        })
                                                    )
                                                )
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(bh)
                )
            ),
            Kh = wp.i18n.__,
            Vh = wp.components.IconButton;
        function _h(e) {
            var t = e.autocompleteRef,
                n = e.className,
                a = e.onChangeInputValue,
                r = e.value,
                o = W()(e, ["autocompleteRef", "className", "onChangeInputValue", "value"]);
            return Object(E.createElement)(
                "form",
                T()({ className: h()("block-editor-url-popover__link-editor", n) }, o),
                Object(E.createElement)(jh, { value: r, onChange: a, autocompleteRef: t }),
                Object(E.createElement)(Vh, { icon: "editor-break", label: Kh("Apply", "block-options"), type: "submit" })
            );
        }
        var Qh = wp.i18n.__,
            Yh = wp.components,
            Xh = Yh.ExternalLink,
            zh = Yh.IconButton,
            Zh = wp.url,
            qh = Zh.safeDecodeURI,
            Jh = Zh.filterURLForDisplay;
        function $h(e) {
            var t = e.url,
                n = e.urlLabel,
                a = e.className,
                r = h()(a, "block-editor-url-popover__link-viewer-url");
            return t ? Object(E.createElement)(Xh, { className: r, href: t }, n || Jh(qh(t))) : Object(E.createElement)("span", { className: r });
        }
        function eA(e) {
            var t = e.className,
                n = e.linkClassName,
                a = e.onEditLinkClick,
                r = e.url,
                o = e.urlLabel,
                i = W()(e, ["className", "linkClassName", "onEditLinkClick", "url", "urlLabel"]);
            return Object(E.createElement)(
                "div",
                T()({ className: h()("block-editor-url-popover__link-viewer", t) }, i),
                Object(E.createElement)($h, { url: r, urlLabel: o, className: n }),
                a && Object(E.createElement)(zh, { icon: "edit", label: Qh("Edit", "block-options"), onClick: a })
            );
        }
        var tA = wp.i18n.__,
            nA = wp.element,
            aA = nA.Component,
            rA = nA.createRef,
            oA = nA.useMemo,
            iA = nA.Fragment,
            cA = wp.components,
            TA = cA.ToggleControl,
            EA = cA.withSpokenMessages,
            sA = wp.keycodes,
            hA = sA.LEFT,
            AA = sA.RIGHT,
            lA = sA.UP,
            LA = sA.DOWN,
            IA = sA.BACKSPACE,
            uA = sA.ENTER,
            mA = sA.ESCAPE,
            RA = wp.dom.getRectangleFromRange,
            pA = wp.url.prependHTTP,
            OA = wp.richText,
            dA = OA.create,
            NA = OA.insert,
            SA = OA.isCollapsed,
            CA = OA.applyFormat,
            fA = OA.getTextContent,
            bA = OA.slice,
            xA = wp.blockEditor.URLPopover,
            DA = function (e) {
                return e.stopPropagation();
            };
        function HA(e, t) {
            return e.addingLink || t.editLink;
        }
        var WA = function (e) {
                var t = e.isActive,
                    n = e.addingLink,
                    a = e.value,
                    r = W()(e, ["isActive", "addingLink", "value"]),
                    o = oA(
                        function () {
                            var e = window.getSelection(),
                                t = e.rangeCount > 0 ? e.getRangeAt(0) : null;
                            if (t) {
                                if (n) return RA(t);
                                var a = t.startContainer;
                                for (a = a.nextElementSibling || a; a.nodeType !== window.Node.ELEMENT_NODE; ) a = a.parentNode;
                                var r = a.closest("a");
                                return r ? r.getBoundingClientRect() : void 0;
                            }
                        },
                        [t, n, a.start, a.end]
                    );
                return o ? Object(E.createElement)(xA, T()({ anchorRect: o }, r)) : null;
            },
            vA = EA(
                (function (e) {
                    function t() {
                        var e;
                        return (
                            dt()(this, t),
                            ((e = ft()(this, xt()(t).apply(this, arguments))).editLink = e.editLink.bind(Ht()(e))),
                            (e.submitLink = e.submitLink.bind(Ht()(e))),
                            (e.onKeyDown = e.onKeyDown.bind(Ht()(e))),
                            (e.onChangeInputValue = e.onChangeInputValue.bind(Ht()(e))),
                            (e.setLinkTarget = e.setLinkTarget.bind(Ht()(e))),
                            (e.setNoFollow = e.setNoFollow.bind(Ht()(e))),
                            (e.setSponsored = e.setSponsored.bind(Ht()(e))),
                            (e.onFocusOutside = e.onFocusOutside.bind(Ht()(e))),
                            (e.resetState = e.resetState.bind(Ht()(e))),
                            (e.autocompleteRef = rA()),
                            (e.state = { opensInNewWindow: !1, noFollow: !1, sponsored: !1, inputValue: "" }),
                            e
                        );
                    }
                    return (
                        vt()(t, e),
                        St()(
                            t,
                            [
                                {
                                    key: "onKeyDown",
                                    value: function (e) {
                                        [hA, LA, AA, lA, IA, uA].indexOf(e.keyCode) > -1 && e.stopPropagation(), [mA].indexOf(e.keyCode) > -1 && this.resetState();
                                    },
                                },
                                {
                                    key: "onChangeInputValue",
                                    value: function (e) {
                                        this.setState({ inputValue: e });
                                    },
                                },
                                {
                                    key: "setLinkTarget",
                                    value: function (e) {
                                        var t = this.props,
                                            n = t.activeAttributes.url,
                                            a = void 0 === n ? "" : n,
                                            r = t.value,
                                            o = t.onChange;
                                        if ((this.setState({ opensInNewWindow: e }), !HA(this.props, this.state))) {
                                            var i = fA(bA(r));
                                            o(CA(r, Us({ url: a, opensInNewWindow: e, noFollow: this.state.noFollow, sponsored: this.state.sponsored, text: i })));
                                        }
                                    },
                                },
                                {
                                    key: "setNoFollow",
                                    value: function (e) {
                                        var t = this.props,
                                            n = t.activeAttributes.url,
                                            a = void 0 === n ? "" : n,
                                            r = t.value,
                                            o = t.onChange;
                                        if ((this.setState({ noFollow: e }), !HA(this.props, this.state))) {
                                            var i = fA(bA(r));
                                            o(CA(r, Us({ url: a, opensInNewWindow: this.state.opensInNewWindow, noFollow: e, sponsored: this.state.sponsored, text: i })));
                                        }
                                    },
                                },
                                {
                                    key: "setSponsored",
                                    value: function (e) {
                                        var t = this.props,
                                            n = t.activeAttributes.url,
                                            a = void 0 === n ? "" : n,
                                            r = t.value,
                                            o = t.onChange;
                                        if ((this.setState({ sponsored: e }), !HA(this.props, this.state))) {
                                            var i = fA(bA(r));
                                            o(CA(r, Us({ url: a, opensInNewWindow: this.state.opensInNewWindow, noFollow: this.state.noFollow, sponsored: e, text: i })));
                                        }
                                    },
                                },
                                {
                                    key: "editLink",
                                    value: function (e) {
                                        this.setState({ editLink: !0 }), e.preventDefault();
                                    },
                                },
                                {
                                    key: "submitLink",
                                    value: function (e) {
                                        var t = this.props,
                                            n = t.isActive,
                                            a = t.value,
                                            r = t.onChange,
                                            o = t.speak,
                                            i = this.state,
                                            c = i.inputValue,
                                            T = i.opensInNewWindow,
                                            E = pA(c),
                                            s = Us({ url: E, opensInNewWindow: T, text: fA(bA(a)) });
                                        if ((e.preventDefault(), SA(a) && !n)) {
                                            var h = CA(dA({ text: E }), s, 0, E.length);
                                            r(NA(a, h));
                                        } else r(CA(a, s));
                                        this.resetState(),
                                            Ms(E)
                                                ? o(tA(n ? "Link edited." : "Link inserted.", "block-options"), "assertive")
                                                : o(tA("Warning: the link has been inserted but may have errors. Please test it.", "block-options"), "assertive");
                                    },
                                },
                                {
                                    key: "onFocusOutside",
                                    value: function () {
                                        var e = this.autocompleteRef.current;
                                        (e && e.contains(event.target)) || this.resetState();
                                    },
                                },
                                {
                                    key: "resetState",
                                    value: function () {
                                        this.props.stopAddingLink(), this.setState({ editLink: !1 });
                                    },
                                },
                                {
                                    key: "render",
                                    value: function () {
                                        var e = this,
                                            t = this.props,
                                            n = t.isActive,
                                            a = t.activeAttributes,
                                            r = a.url,
                                            o = a.target,
                                            i = a.rel,
                                            c = t.addingLink,
                                            T = t.value;
                                        if (!n && !c) return null;
                                        var s = this.state,
                                            h = s.inputValue,
                                            A = s.opensInNewWindow,
                                            l = s.noFollow,
                                            L = s.sponsored,
                                            I = HA(this.props, this.state);
                                        if ((A || "_blank" !== o || this.setState({ opensInNewWindow: !0 }), "string" == typeof i)) {
                                            var u = i.split(" ").includes("nofollow"),
                                                m = i.split(" ").includes("sponsored");
                                            u !== l && this.setState({ noFollow: u }), m !== L && this.setState({ sponsored: m });
                                        }
                                        return Object(E.createElement)(
                                            _s,
                                            { key: "".concat(T.start).concat(T.end) },
                                            Object(E.createElement)(
                                                WA,
                                                {
                                                    value: T,
                                                    isActive: n,
                                                    addingLink: c,
                                                    onFocusOutside: this.onFocusOutside,
                                                    onClose: function () {
                                                        h || e.resetState();
                                                    },
                                                    focusOnMount: !!I && "firstElement",
                                                    className: "editorskit-url-popover",
                                                    renderSettings: function () {
                                                        return Object(E.createElement)(
                                                            iA,
                                                            null,
                                                            Object(E.createElement)(TA, { label: tA("Open in New Tab", "block-options"), checked: A, onChange: e.setLinkTarget }),
                                                            Object(E.createElement)(TA, { label: tA("No Follow", "block-options"), checked: l, onChange: e.setNoFollow }),
                                                            Object(E.createElement)(TA, { label: tA("Sponsored", "block-options"), checked: L, onChange: e.setSponsored })
                                                        );
                                                    },
                                                },
                                                I
                                                    ? Object(E.createElement)(_h, {
                                                          className: "editor-format-toolbar__link-container-content block-editor-format-toolbar__link-container-content",
                                                          value: h,
                                                          onChangeInputValue: this.onChangeInputValue,
                                                          onKeyDown: this.onKeyDown,
                                                          onKeyPress: DA,
                                                          onSubmit: this.submitLink,
                                                          autocompleteRef: this.autocompleteRef,
                                                      })
                                                    : Object(E.createElement)(eA, {
                                                          className: "editor-format-toolbar__link-container-content block-editor-format-toolbar__link-container-content",
                                                          onKeyPress: DA,
                                                          url: r,
                                                          onEditLinkClick: this.editLink,
                                                          linkClassName: r && Ms(pA(r)) ? void 0 : "has-invalid-link",
                                                      })
                                            )
                                        );
                                    },
                                },
                            ],
                            [
                                {
                                    key: "getDerivedStateFromProps",
                                    value: function (e, t) {
                                        var n = e.activeAttributes,
                                            a = n.url,
                                            r = n.target,
                                            o = n.rel,
                                            i = "_blank" === r;
                                        if (!HA(e, t)) {
                                            if (a !== t.inputValue) return { inputValue: a };
                                            if (i !== t.opensInNewWindow) return { opensInNewWindow: i };
                                            if ("string" == typeof o) {
                                                var c = o.split(" ").includes("nofollow"),
                                                    T = o.split(" ").includes("sponsored");
                                                if (c !== t.noFollow) return { noFollow: c };
                                                if (T !== t.sponsored) return { sponsored: T };
                                            }
                                        }
                                        return null;
                                    },
                                },
                            ]
                        ),
                        t
                    );
                })(aA)
            );
        function gA(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t &&
                    (a = a.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, a);
            }
            return n;
        }
        function kA(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? gA(n, !0).forEach(function (t) {
                          i()(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : gA(n).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return e;
        }
        var yA = wp.i18n.__,
            BA = wp.element,
            PA = BA.Component,
            wA = BA.Fragment,
            MA = wp.data,
            UA = MA.withSelect,
            FA = MA.dispatch,
            GA = wp.blockEditor,
            jA = GA.BlockControls,
            KA = GA.RichTextToolbarButton,
            VA = GA.RichTextShortcut,
            _A = wp.richText,
            QA = _A.getTextContent,
            YA = _A.applyFormat,
            XA = _A.removeFormat,
            zA = _A.slice,
            ZA = _A.getActiveFormat,
            qA = wp.url.isURL,
            JA = wp.components,
            $A = JA.Toolbar,
            el = JA.withSpokenMessages,
            tl = wp.compose,
            nl = tl.compose,
            al = tl.ifCondition,
            rl = yA("Add Link", "block-options"),
            ol = /^(mailto:)?[a-z0-9._%+-]+@[a-z0-9][a-z0-9.-]*\.[a-z]{2,63}$/i,
            il = (function (e) {
                vt()(n, e);
                var t = (function (e) {
                    function t() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }
                    return function () {
                        var n,
                            a = xt()(e);
                        if (t()) {
                            var r = xt()(this).constructor;
                            n = Reflect.construct(a, arguments, r);
                        } else n = a.apply(this, arguments);
                        return ft()(this, n);
                    };
                })(n);
                function n() {
                    var e;
                    return (
                        dt()(this, n),
                        ((e = t.apply(this, arguments)).isEmail = e.isEmail.bind(Ht()(e))),
                        (e.addLink = e.addLink.bind(Ht()(e))),
                        (e.stopAddingLink = e.stopAddingLink.bind(Ht()(e))),
                        (e.onRemoveFormat = e.onRemoveFormat.bind(Ht()(e))),
                        (e.state = { addingLink: !1 }),
                        e
                    );
                }
                return (
                    St()(n, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                var e = this.props.oldFormat;
                                e && ((e.edit = null), FA("core/rich-text").addFormatTypes(e));
                            },
                        },
                        {
                            key: "isEmail",
                            value: function (e) {
                                return ol.test(e);
                            },
                        },
                        {
                            key: "addLink",
                            value: function () {
                                var e = this.props,
                                    t = e.value,
                                    n = e.onChange,
                                    a = QA(zA(t));
                                a && qA(a)
                                    ? n(YA(t, { type: "editorskit/link", attributes: { url: a } }))
                                    : a && this.isEmail(a)
                                    ? n(YA(t, { type: "editorskit/link", attributes: { url: "mailto:".concat(a) } }))
                                    : this.setState({ addingLink: !0 });
                            },
                        },
                        {
                            key: "stopAddingLink",
                            value: function () {
                                this.setState({ addingLink: !1 });
                            },
                        },
                        {
                            key: "onRemoveFormat",
                            value: function () {
                                var e = this.props,
                                    t = e.value,
                                    n = e.onChange,
                                    a = e.speak,
                                    r = t;
                                Object(A.map)(["core/link", "editorskit/link"], function (e) {
                                    r = XA(r, e);
                                }),
                                    n(kA({}, r)),
                                    a(yA("Link removed.", "block-options"), "assertive");
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    t = e.activeAttributes,
                                    n = e.onChange,
                                    a = this.props,
                                    r = a.isActive,
                                    o = a.value,
                                    i = ZA(o, "core/link");
                                if (i) {
                                    (i.type = "editorskit/link"), void 0 !== i.unregisteredAttributes && void 0 !== i.unregisteredAttributes.rel && (i.attributes = Object.assign(i.attributes, { rel: i.unregisteredAttributes.rel }));
                                    var c = o;
                                    (c = YA(c, i)), n(kA({}, (c = XA(c, "core/link")))), (o = c), (r = !0);
                                }
                                return Object(E.createElement)(
                                    wA,
                                    null,
                                    Object(E.createElement)(
                                        jA,
                                        null,
                                        Object(E.createElement)(
                                            $A,
                                            { className: "editorskit-components-toolbar" },
                                            Object(E.createElement)(VA, { type: "primary", character: "k", onUse: this.addLink }),
                                            Object(E.createElement)(VA, { type: "primaryShift", character: "k", onUse: this.onRemoveFormat }),
                                            r &&
                                                Object(E.createElement)(KA, {
                                                    name: "link",
                                                    icon: "editor-unlink",
                                                    title: yA("Unlink", "block-options"),
                                                    onClick: this.onRemoveFormat,
                                                    isActive: r,
                                                    shortcutType: "primaryShift",
                                                    shortcutCharacter: "k",
                                                }),
                                            !r && Object(E.createElement)(KA, { name: "link", icon: "admin-links", title: rl, onClick: this.addLink, isActive: r, shortcutType: "primary", shortcutCharacter: "k" }),
                                            Object(E.createElement)(vA, { addingLink: this.state.addingLink, stopAddingLink: this.stopAddingLink, isActive: r, activeAttributes: t, value: o, onChange: n })
                                        )
                                    )
                                );
                            },
                        },
                    ]),
                    n
                );
            })(PA),
            cl = nl(
                UA(function (e) {
                    return { isDisabled: e("core/edit-post").isFeatureActive("disableEditorsKitLinkFormats"), oldFormat: e("core/rich-text").getFormatType("core/link") };
                }),
                al(function (e) {
                    return !e.isDisabled;
                }),
                el
            )(il),
            Tl = wp.i18n.__,
            El = wp.richText,
            sl = El.applyFormat,
            hl = El.isCollapsed,
            Al = wp.htmlEntities.decodeEntities,
            ll = wp.url.isURL,
            Ll = {
                name: "editorskit/link",
                title: Tl("Link", "block-options"),
                tagName: "a",
                className: "ek-link",
                attributes: { url: "href", target: "target", rel: "rel" },
                __unstablePasteRule: function (e, t) {
                    var n = t.html,
                        a = t.plainText;
                    if (hl(e)) return e;
                    var r = (n || a).replace(/<[^>]+>/g, "").trim();
                    return ll(r) ? (window.console.log("Created link:\n\n", r), sl(e, { type: "editorskit/link", attributes: { url: Al(r) } })) : e;
                },
                edit: cl,
            };
        n(166);
        var Il = wp.i18n.__,
            ul = wp.element,
            ml = ul.Component,
            Rl = ul.Fragment,
            pl = wp.compose,
            Ol = pl.compose,
            dl = pl.ifCondition,
            Nl = wp.data,
            Sl = Nl.withSelect,
            Cl = Nl.withDispatch,
            fl = wp.blockEditor,
            bl = fl.BlockControls,
            xl = fl.AlignmentToolbar,
            Dl = wp.components.Toolbar,
            Hl = wp.blocks.hasBlockSupport,
            Wl = [
                "core/image",
                "core/gallery",
                "core/video",
                "core/audio",
                "core-embed",
                "core-embed/youtube",
                "core-embed/twitter",
                "core-embed/facebook",
                "core-embed/instagram",
                "core-embed/wordpress",
                "core-embed/soundcloud",
                "core-embed/spotify",
                "core-embed/flickr",
                "core-embed/vimeo",
                "core-embed/animoto",
                "core-embed/cloudup",
                "core-embed/collegehumor",
                "core-embed/crowdsignal",
                "core-embed/dailymotion",
                "core-embed/hulu",
                "core-embed/imgur",
                "core-embed/issuu",
                "core-embed/kickstarter",
                "core-embed/meetup-com",
                "core-embed/mixcloud",
                "core-embed/reddit",
                "core-embed/reverbnation",
                "core-embed/screencast",
                "core-embed/scribd",
                "core-embed/slideshare",
                "core-embed/smugmug",
                "core-embed/speaker-deck",
                "core-embed/ted",
                "core-embed/tumblr",
                "core-embed/videopress",
                "core-embed/wordpress-tv",
                "core-embed/amazon-kindle",
                "core/table",
            ],
            vl = [
                { icon: "editor-alignleft", title: Il("Align caption left", "block-options"), align: "left" },
                { icon: "editor-aligncenter", title: Il("Align caption center", "block-options"), align: "center" },
                { icon: "editor-alignright", title: Il("Align caption right", "block-options"), align: "right" },
            ],
            gl = (function (e) {
                vt()(n, e);
                var t = (function (e) {
                    function t() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }
                    return function () {
                        var n,
                            a = xt()(e);
                        if (t()) {
                            var r = xt()(this).constructor;
                            n = Reflect.construct(a, arguments, r);
                        } else n = a.apply(this, arguments);
                        return ft()(this, n);
                    };
                })(n);
                function n() {
                    return dt()(this, n), t.apply(this, arguments);
                }
                return (
                    St()(n, [
                        {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    t = e.blockId,
                                    n = e.blockName,
                                    a = e.blockClassName,
                                    r = e.blockCaptionAlignment,
                                    o = e.updateBlockAttributes,
                                    i = function (e) {
                                        var t = "";
                                        return (
                                            a && (t = a.replace("caption-align-default", "").replace("caption-align-center", "").replace("caption-align-right", "").replace("caption-align-left", "").trim()),
                                            e && (t = "caption-align-".concat(e, " ") + t),
                                            (t = t.replace(/\s+/g, " ").trim()) || (t = "caption-align-default"),
                                            t
                                        );
                                    };
                                return Wl.includes(n) || Hl(n, "editorsKitCaptionAlignment")
                                    ? Object(E.createElement)(
                                          Rl,
                                          null,
                                          Object(E.createElement)(
                                              bl,
                                              null,
                                              Object(E.createElement)(
                                                  Dl,
                                                  { className: "editorskit-components-alignment-toolbar" },
                                                  Object(E.createElement)(xl, {
                                                      value: r,
                                                      onChange: function (e) {
                                                          o(t, { captionAlignment: e, className: i(e) });
                                                      },
                                                      alignmentControls: vl,
                                                  })
                                              )
                                          )
                                      )
                                    : null;
                            },
                        },
                    ]),
                    n
                );
            })(ml),
            kl = Ol(
                Sl(function (e) {
                    var t = e("core/edit-post").isFeatureActive("disableEditorsKitCaptionAlignmentFormats"),
                        n = e("core/block-editor").getSelectedBlock();
                    return t || !n
                        ? { isDisabled: t }
                        : { isDisabled: t, blockId: n.clientId, blockName: n.name, blockClassName: Object(A.get)(n, "attributes.className"), blockCaptionAlignment: Object(A.get)(n, "attributes.captionAlignment") };
                }),
                Cl(function (e) {
                    return { updateBlockAttributes: e("core/block-editor").updateBlockAttributes };
                }),
                dl(function (e) {
                    return !e.isDisabled && e.blockId;
                })
            )(gl),
            yl = wp.i18n.__,
            Bl = wp.element.Fragment,
            Pl = {
                name: "editorskit/alignment",
                title: yl("Change Caption Alignment", "block-options"),
                tagName: "figcaption",
                className: null,
                attributes: { style: "style" },
                edit: function (e) {
                    var t = e.isActive,
                        n = e.value,
                        a = e.onChange,
                        r = e.activeAttributes;
                    return Object(E.createElement)(Bl, null, Object(E.createElement)(kl, { name: "editorskit/alignment", isActive: t, value: n, onChange: a, activeAttributes: r }));
                },
            },
            wl = {};
        wl.spacebar = Object(E.createElement)(
            "svg",
            { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
            Object(E.createElement)("path", { fill: "none", d: "M0 0h24v24H0V0z" }),
            Object(E.createElement)("path", { d: "M18 9v4H6V9H4v6h16V9z" })
        );
        var Ml = wl;
        function Ul(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t &&
                    (a = a.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, a);
            }
            return n;
        }
        function Fl(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? Ul(n, !0).forEach(function (t) {
                          i()(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : Ul(n).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return e;
        }
        var Gl = wp.i18n.__,
            jl = wp.element,
            Kl = jl.Fragment,
            Vl = jl.Component,
            _l = wp.compose,
            Ql = _l.compose,
            Yl = _l.ifCondition,
            Xl = wp.data.withSelect,
            zl = wp.richText,
            Zl = zl.insert,
            ql = zl.getTextContent,
            Jl = wp.blockEditor,
            $l = Jl.RichTextShortcut,
            eL = Jl.RichTextToolbarButton,
            tL = wp.components.withSpokenMessages,
            nL = (function (e) {
                vt()(n, e);
                var t = (function (e) {
                    function t() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }
                    return function () {
                        var n,
                            a = xt()(e);
                        if (t()) {
                            var r = xt()(this).constructor;
                            n = Reflect.construct(a, arguments, r);
                        } else n = a.apply(this, arguments);
                        return ft()(this, n);
                    };
                })(n);
                function n() {
                    return dt()(this, n), t.apply(this, arguments);
                }
                return (
                    St()(n, [
                        {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    t = e.value,
                                    n = e.onChange,
                                    a = function () {
                                        var e = ql(t).slice(0, t.start).lastIndexOf(" "),
                                            a = t.replacements[e],
                                            r = [,];
                                        a && (r = [a]);
                                        var o = Zl(t, { formats: [,], replacements: r, text: " " }, t.start, t.end);
                                        n(Fl(Fl({}, o), {}, { needsSelectionUpdate: !0 }));
                                    };
                                return Object(E.createElement)(
                                    Kl,
                                    null,
                                    Object(E.createElement)($l, { type: "primaryShift", character: "SPACE", onUse: a }),
                                    Object(E.createElement)(eL, { icon: Ml.spacebar, title: Gl("Nonbreaking space", "block-options"), onClick: a })
                                );
                            },
                        },
                    ]),
                    n
                );
            })(Vl),
            aL = Ql(
                Xl(function (e) {
                    return { isDisabled: e("core/edit-post").isFeatureActive("disableEditorsKitNonbreakingSpaceFormats") };
                }),
                Yl(function (e) {
                    return !e.isDisabled;
                }),
                tL
            )(nL),
            rL = wp.i18n.__,
            oL = wp.element.Fragment,
            iL = {
                name: "editorskit/nbsp",
                title: rL("Nonbreaking Space", "block-options"),
                tagName: "span",
                className: "nbsp",
                edit: function (e) {
                    var t = e.isActive,
                        n = e.value,
                        a = e.onChange,
                        r = e.activeAttributes;
                    return Object(E.createElement)(oL, null, Object(E.createElement)(aL, { name: "editorskit/nbsp", isActive: t, value: n, onChange: a, activeAttributes: r }));
                },
            },
            cL = wp.i18n.__,
            TL = wp.element,
            EL = TL.Component,
            sL = TL.Fragment,
            hL = wp.compose,
            AL = hL.compose,
            lL = hL.ifCondition,
            LL = wp.data.withSelect,
            IL = wp.blockEditor.RichTextToolbarButton,
            uL = wp.richText,
            mL = uL.applyFormat,
            RL = uL.removeFormat,
            pL = uL.getActiveFormat,
            OL = wp.components,
            dL = OL.Modal,
            NL = OL.Button,
            SL = OL.TextControl,
            CL = (function (e) {
                function t() {
                    var e;
                    return dt()(this, t), ((e = ft()(this, xt()(t).apply(this, arguments))).toggle = e.toggle.bind(Ht()(e))), (e.state = { isOpen: !1, title: "", lang: "" }), e;
                }
                return (
                    vt()(t, e),
                    St()(t, [
                        {
                            key: "toggle",
                            value: function () {
                                this.setState(function (e) {
                                    return { isOpen: !e.isOpen };
                                });
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this,
                                    t = this.state,
                                    n = t.title,
                                    a = t.lang,
                                    r = this.props,
                                    o = r.isActive,
                                    i = r.value,
                                    c = r.onChange,
                                    T = pL(i, "editorskit/abbreviation");
                                return Object(E.createElement)(
                                    sL,
                                    null,
                                    Object(E.createElement)(IL, { icon: "editor-code", title: cL("Abbreviation", "block-options"), onClick: this.toggle, isActive: o }),
                                    this.state.isOpen &&
                                        Object(E.createElement)(
                                            dL,
                                            { title: cL("Insert Abbreviation", "block-options"), onRequestClose: this.toggle },
                                            Object(E.createElement)(SL, {
                                                label: cL("Title", "block-options"),
                                                value: T && !n ? T.attributes.title : n,
                                                onChange: function (t) {
                                                    return e.setState({ title: t });
                                                },
                                            }),
                                            Object(E.createElement)(SL, {
                                                label: cL("Language (optional)", "block-options"),
                                                value: T && !a ? T.attributes.lang : a,
                                                help: cL("Example: fr, en, de, etc. Use it only if the abbreviation’s language is different from page main language.", "block-options"),
                                                onChange: function (t) {
                                                    return e.setState({ lang: t });
                                                },
                                            }),
                                            Object(E.createElement)(
                                                NL,
                                                {
                                                    isPrimary: !0,
                                                    isLarge: !0,
                                                    onClick: function () {
                                                        if (n) {
                                                            var t = { title: n };
                                                            a && (t.lang = a), c(mL(i, { type: "editorskit/abbreviation", attributes: t }));
                                                        } else c(RL(i, "editorskit/abbreviation"));
                                                        e.toggle();
                                                    },
                                                },
                                                cL("Apply", "block-options")
                                            )
                                        )
                                );
                            },
                        },
                    ]),
                    t
                );
            })(EL),
            fL = AL(
                LL(function (e) {
                    return { isDisabled: e("core/edit-post").isFeatureActive("disableEditorsKitAbbreviationFormats") };
                }),
                lL(function (e) {
                    return !e.isDisabled;
                })
            )(CL),
            bL = wp.i18n.__,
            xL = (wp.element.Fragment, { name: "editorskit/abbreviation", title: bL("Abbreviation", "block-options"), tagName: "abbr", className: null, attributes: { title: "title", lang: "lang" }, edit: fL }),
            DL = wp.i18n.__,
            HL = wp.element.Fragment,
            WL = wp.richText.toggleFormat,
            vL = wp.blockEditor,
            gL = vL.RichTextToolbarButton,
            kL = vL.RichTextShortcut,
            yL = wp.data.select,
            BL = {
                name: "editorskit/underline",
                title: DL("Underline", "block-options"),
                tagName: "span",
                className: "ek-underline",
                attributes: { style: "style" },
                edit: function (e) {
                    var t = e.isActive,
                        n = e.value,
                        a = e.onChange,
                        r = yL("core/edit-post").isFeatureActive("disableEditorsKitUnderlineFormats"),
                        o = yL("core/rich-text")
                            .getFormatTypes()
                            .filter(function (e) {
                                return "wpcom/underline" === e.name;
                            }),
                        i = function () {
                            a(WL(n, { type: "editorskit/underline", attributes: { style: "text-decoration: underline;" } }));
                        };
                    return Object(E.createElement)(
                        HL,
                        null,
                        Object(E.createElement)(kL, { type: "primary", character: "u", onUse: i }),
                        !r && 0 === o.length && Object(E.createElement)(gL, { icon: "editor-underline", title: DL("Underline", "block-options"), onClick: i, isActive: t, shortcutType: "primary", shortcutCharacter: "u" })
                    );
                },
            };
        var PL = wp.i18n.__,
            wL = wp.element.Component,
            ML = wp.compose,
            UL = ML.compose,
            FL = ML.ifCondition,
            GL = wp.data,
            jL = GL.withSelect,
            KL = GL.withDispatch,
            VL = wp.blockEditor.RichTextToolbarButton,
            _L = (function (e) {
                vt()(n, e);
                var t = (function (e) {
                    function t() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }
                    return function () {
                        var n,
                            a = xt()(e);
                        if (t()) {
                            var r = xt()(this).constructor;
                            n = Reflect.construct(a, arguments, r);
                        } else n = a.apply(this, arguments);
                        return ft()(this, n);
                    };
                })(n);
                function n() {
                    return dt()(this, n), t.apply(this, arguments);
                }
                return (
                    St()(n, [
                        {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    t = e.selectedBlock,
                                    n = e.isBlockJustified,
                                    a = e.updateBlockAttributes,
                                    r = t.clientId,
                                    o = t.attributes.editorskit;
                                return Object(E.createElement)(VL, {
                                    icon: "editor-indent",
                                    title: PL("Indent Increase", "block-options"),
                                    onClick: function () {
                                        var e = 0;
                                        void 0 !== o && void 0 !== o.indent && (e = o.indent), delete o.indent;
                                        var t = Object.assign({ indent: e + 20 }, o);
                                        a(r, { editorskit: t });
                                    },
                                    isActive: n,
                                });
                            },
                        },
                    ]),
                    n
                );
            })(wL),
            QL = UL(
                jL(function (e) {
                    return { isDisabled: e("core/edit-post").isFeatureActive("disableEditorsKitIndentFormats"), selectedBlock: e("core/block-editor").getSelectedBlock() };
                }),
                KL(function (e) {
                    return { updateBlockAttributes: e("core/block-editor").updateBlockAttributes };
                }),
                FL(function (e) {
                    return !e.isDisabled && e.selectedBlock;
                })
            )(_L),
            YL = wp.i18n.__,
            XL = wp.element.Fragment,
            zL = {
                name: "editorskit/indentincrease",
                title: YL("Indent Increase", "block-options"),
                tagName: "p",
                className: "ek-indent-increase",
                attributes: { style: "style" },
                edit: function (e) {
                    var t = e.isActive,
                        n = e.value,
                        a = e.onChange,
                        r = e.activeAttributes;
                    return Object(E.createElement)(XL, null, Object(E.createElement)(QL, { name: "editorskit/indentincrease", isActive: t, value: n, onChange: a, activeAttributes: r }));
                },
            };
        var ZL = wp.i18n.__,
            qL = wp.element.Component,
            JL = wp.compose,
            $L = JL.compose,
            eI = JL.ifCondition,
            tI = wp.data,
            nI = tI.withSelect,
            aI = tI.withDispatch,
            rI = wp.blockEditor.RichTextToolbarButton,
            oI = (function (e) {
                vt()(n, e);
                var t = (function (e) {
                    function t() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }
                    return function () {
                        var n,
                            a = xt()(e);
                        if (t()) {
                            var r = xt()(this).constructor;
                            n = Reflect.construct(a, arguments, r);
                        } else n = a.apply(this, arguments);
                        return ft()(this, n);
                    };
                })(n);
                function n() {
                    return dt()(this, n), t.apply(this, arguments);
                }
                return (
                    St()(n, [
                        {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    t = e.selectedBlock,
                                    n = e.isBlockJustified,
                                    a = e.updateBlockAttributes,
                                    r = t.clientId,
                                    o = t.attributes.editorskit;
                                return Object(E.createElement)(rI, {
                                    icon: "editor-outdent",
                                    title: ZL("Indent Decrease", "block-options"),
                                    onClick: function () {
                                        var e = 0;
                                        void 0 !== o && void 0 !== o.indent && (e = o.indent), delete o.indent;
                                        var t = Object.assign({ indent: e - 20 }, o);
                                        a(r, { editorskit: t });
                                    },
                                    isActive: n,
                                });
                            },
                        },
                    ]),
                    n
                );
            })(qL),
            iI = $L(
                nI(function (e) {
                    return { isDisabled: e("core/edit-post").isFeatureActive("disableEditorsKitIndentFormats"), selectedBlock: e("core/block-editor").getSelectedBlock() };
                }),
                aI(function (e) {
                    return { updateBlockAttributes: e("core/block-editor").updateBlockAttributes };
                }),
                eI(function (e) {
                    if (e.isDisabled || !e.selectedBlock) return !1;
                    var t = e.selectedBlock.attributes.editorskit;
                    return !(void 0 === t.indent || !t.indent);
                })
            )(oI),
            cI = wp.i18n.__,
            TI = wp.element.Fragment,
            EI = {
                name: "editorskit/indentdecrease",
                title: cI("Indent Decrease", "block-options"),
                tagName: "p",
                className: "ek-indent-decrease",
                attributes: { style: "style" },
                edit: function (e) {
                    var t = e.isActive,
                        n = e.value,
                        a = e.onChange,
                        r = e.activeAttributes;
                    return Object(E.createElement)(TI, null, Object(E.createElement)(iI, { name: "editorskit/indentdecrease", isActive: t, value: n, onChange: a, activeAttributes: r }));
                },
            },
            sI = n(43);
        var hI,
            AI = wp.i18n.__,
            lI = wp.element,
            LI = lI.Component,
            II = lI.Fragment,
            uI = wp.dom.getRectangleFromRange,
            mI = wp.compose,
            RI = mI.compose,
            pI = mI.ifCondition,
            OI = wp.data.withSelect,
            dI = wp.blockEditor.RichTextToolbarButton,
            NI = wp.richText,
            SI = NI.toggleFormat,
            CI = NI.insert,
            fI = wp.components,
            bI = fI.Popover,
            xI = fI.TabPanel,
            DI = fI.Button,
            HI = fI.TextControl,
            WI = fI.Tooltip,
            vI = (function (e) {
                vt()(n, e);
                var t = (function (e) {
                    function t() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                        } catch (e) {
                            return !1;
                        }
                    }
                    return function () {
                        var n,
                            a = xt()(e);
                        if (t()) {
                            var r = xt()(this).constructor;
                            n = Reflect.construct(a, arguments, r);
                        } else n = a.apply(this, arguments);
                        return ft()(this, n);
                    };
                })(n);
                function n() {
                    var e;
                    return dt()(this, n), ((e = t.apply(this, arguments)).state = { characters: sI.Misc, keyword: "" }), e;
                }
                return (
                    St()(n, [
                        {
                            key: "onSearch",
                            value: function (e) {
                                var t = {};
                                Object(A.map)(sI, function (n) {
                                    Object(A.map)(n, function (n, a) {
                                        -1 !== n.name.toLowerCase().search(e.toLowerCase()) && (t = Object.assign(i()({}, a, n), t));
                                    });
                                }),
                                    this.setState({ keyword: e, characters: t });
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this,
                                    t = this.props,
                                    n = t.name,
                                    a = t.value,
                                    r = t.isActive,
                                    o = t.onChange,
                                    i = this.state,
                                    c = i.characters,
                                    T = i.keyword,
                                    s = "editorskit-charmap-popover";
                                return (
                                    T && (s += " is-searching"),
                                    r
                                        ? Object(E.createElement)(
                                              bI,
                                              {
                                                  className: s,
                                                  position: "bottom center",
                                                  key: "charmap-popover",
                                                  onClick: function () {},
                                                  getAnchorRect: function () {
                                                      return uI(hI);
                                                  },
                                                  expandOnMobile: !0,
                                                  headerTitle: AI("Insert Special Character", "block-options"),
                                                  onClose: function () {
                                                      o(SI(a, { type: n }));
                                                  },
                                              },
                                              Object(E.createElement)(HI, {
                                                  value: T,
                                                  placeholder: AI("Search", "block-options"),
                                                  onChange: function (t) {
                                                      e.onSearch(t);
                                                  },
                                              }),
                                              Object(E.createElement)(
                                                  xI,
                                                  {
                                                      className: "editorskit-charmap-tabpanel",
                                                      activeClass: "is-active-tab",
                                                      onSelect: function (t) {
                                                          var n = void 0 !== sI[t] ? sI[t] : {};
                                                          e.setState({ characters: n, keyword: "" });
                                                      },
                                                      tabs: [
                                                          { name: "Misc", title: AI("Misc", "block-options"), className: "editorskit-charmap-misc" },
                                                          { name: "Math", title: AI("Math", "block-options"), className: "editorskit-charmap-math" },
                                                          { name: "Latin", title: AI("Latin", "block-options"), className: "editorskit-charmap-latin" },
                                                          { name: "Arrows", title: AI("Arrows", "block-options"), className: "editorskit-charmap-arrows" },
                                                      ],
                                                  },
                                                  function () {
                                                      return Object(E.createElement)(
                                                          II,
                                                          null,
                                                          Object.keys(c).length > 0
                                                              ? Object(E.createElement)(
                                                                    "ul",
                                                                    { className: "editorskit-charmap-list" },
                                                                    Object(A.map)(c, function (e, t) {
                                                                        return Object(E.createElement)(
                                                                            "li",
                                                                            { key: "editorskit-charmap-" + t },
                                                                            Object(E.createElement)(
                                                                                WI,
                                                                                { text: Object(A.upperFirst)(e.name.toLowerCase()) },
                                                                                Object(E.createElement)(
                                                                                    DI,
                                                                                    {
                                                                                        isTertiary: !0,
                                                                                        onClick: function () {
                                                                                            o(CI(a, e.char));
                                                                                        },
                                                                                    },
                                                                                    e.char
                                                                                )
                                                                            )
                                                                        );
                                                                    })
                                                                )
                                                              : Object(E.createElement)("p", null, AI("No characters found.", "block-options"))
                                                      );
                                                  }
                                              )
                                          )
                                        : Object(E.createElement)(dI, {
                                              icon: "editor-customchar",
                                              title: AI("Special Characters", "block-options"),
                                              onClick: function () {
                                                  var t = window.getSelection();
                                                  (hI = t.rangeCount > 0 ? t.getRangeAt(0) : null), e.setState({ keyword: "", characters: sI.Misc }), o(SI(a, { type: n }));
                                              },
                                              isActive: r,
                                          })
                                );
                            },
                        },
                    ]),
                    n
                );
            })(LI),
            gI = RI(
                OI(function (e) {
                    return { isDisabled: e("core/edit-post").isFeatureActive("disableEditorsKitCharmapFormats") };
                }),
                pI(function (e) {
                    return !e.isDisabled;
                })
            )(vI),
            kI = wp.i18n.__,
            yI = wp.element.Fragment,
            BI = {
                name: "editorskit/charmap",
                title: kI("Special Characters", "block-options"),
                tagName: "span",
                className: "editorskit-charmap",
                edit: function (e) {
                    var t = e.isActive,
                        n = e.value,
                        a = e.onChange,
                        r = e.activeAttributes;
                    return Object(E.createElement)(yI, null, Object(E.createElement)(gI, { name: "editorskit/charmap", isActive: t, value: n, onChange: a, activeAttributes: r }));
                },
            },
            PI = wp.richText.registerFormatType,
            wI = (0, wp.data.select)("core/edit-post").isFeatureActive("disableEditorsKitLinkFormats");
        wp.domReady(function () {
            [qT, xE, XE, Ts, Ss, Pl, iL, xL, BL, zL, EI, BI, wI ? [] : Ll].forEach(function (e) {
                var t = e.name,
                    n = W()(e, ["name"]);
                t && PI(t, n);
            });
        });
        var MI = wp.i18n.__,
            UI = wp.data.withSelect,
            FI = wp.compose.compose,
            GI = wp.element,
            jI = GI.Component,
            KI = GI.Fragment,
            VI = wp.blockEditor.BlockControls,
            _I = wp.components,
            QI = _I.Toolbar,
            YI = _I.withSpokenMessages,
            XI = (function (e) {
                function t() {
                    return dt()(this, t), ft()(this, xt()(t).apply(this, arguments));
                }
                return (
                    vt()(t, e),
                    St()(t, [
                        {
                            key: "componentDidUpdate",
                            value: function () {
                                var e = this.props,
                                    t = e.attributes,
                                    n = e.setAttributes,
                                    a = t.mediaPosition,
                                    r = t.className;
                                !["top", "bottom"].includes(a) && r && n({ className: this.removeTopBottom() });
                            },
                        },
                        {
                            key: "removeTopBottom",
                            value: function () {
                                var e = this.props.attributes.className,
                                    t = "";
                                return e && (t = (t = e.replace("has-media-on-the-bottom", "").replace("has-media-on-the-top", "").trim()).replace(/\s+/g, " ").trim()), t;
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this,
                                    t = this.props,
                                    n = t.attributes,
                                    a = t.setAttributes,
                                    r = t.isDisabled,
                                    o = n.mediaPosition;
                                if (r) return null;
                                var i = [
                                    {
                                        className: "align-pull-top",
                                        icon: "align-pull-left",
                                        title: MI("Show media on top", "block-options"),
                                        isActive: "top" === o,
                                        onClick: function () {
                                            a({ mediaPosition: "top", className: e.removeTopBottom() + " has-media-on-the-top", align: "" });
                                        },
                                    },
                                    {
                                        className: "align-pull-bottom",
                                        icon: "align-pull-right",
                                        title: MI("Show media on bottom", "block-options"),
                                        isActive: "bottom" === o,
                                        onClick: function () {
                                            a({ mediaPosition: "bottom", className: e.removeTopBottom() + " has-media-on-the-bottom", align: "" });
                                        },
                                    },
                                ];
                                return Object(E.createElement)(KI, null, Object(E.createElement)(VI, null, Object(E.createElement)(QI, { className: "editorskit-media-text-card-controls", controls: i })));
                            },
                        },
                    ]),
                    t
                );
            })(jI),
            zI = FI(
                UI(function (e) {
                    return { isDisabled: e("core/edit-post").isFeatureActive("disableEditorsKitMediaTextLayoutOptions") };
                }),
                YI
            )(XI);
        function ZI(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t &&
                    (a = a.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, a);
            }
            return n;
        }
        var qI = wp.hooks.addFilter,
            JI = wp.element.Fragment,
            $I = wp.compose.createHigherOrderComponent,
            eu = ["core/media-text"];
        qI(
            "editor.BlockEdit",
            "editorskit/media-text-link",
            $I(function (e) {
                return function (t) {
                    return Object(E.createElement)(
                        JI,
                        null,
                        t.isSelected &&
                            eu.includes(t.name) &&
                            Object(E.createElement)(
                                zI,
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {};
                                        t % 2
                                            ? ZI(n, !0).forEach(function (t) {
                                                  i()(e, t, n[t]);
                                              })
                                            : Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                            : ZI(n).forEach(function (t) {
                                                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                              });
                                    }
                                    return e;
                                })({}, t)
                            ),
                        Object(E.createElement)(e, t)
                    );
                };
            }, "withControls")
        );
        var tu = wp.components.Button,
            nu = wp.blocks.getBlockType,
            au = wp.i18n.__,
            ru = wp.blockEditor.BlockIcon;
        function ou(e) {
            var t = e.blocks,
                n = e.selectedBlockClientId,
                a = e.selectBlock,
                r = e.showNestedBlocks;
            return Object(E.createElement)(
                "ul",
                { className: "editor-block-navigation__list block-editor-block-navigation__list", role: "list" },
                Object(A.map)(t, function (e) {
                    var t = nu(e.name),
                        o = e.clientId === n;
                    return Object(E.createElement)(
                        "li",
                        { key: e.clientId },
                        Object(E.createElement)(
                            "div",
                            { className: "editor-block-navigation__item block-editor-block-navigation__item" },
                            Object(E.createElement)(
                                tu,
                                {
                                    className: h()("editor-block-navigation__item-button block-editor-block-navigation__item-button", { "is-selected": o }),
                                    onClick: function () {
                                        return a(e.clientId);
                                    },
                                },
                                Object(E.createElement)(ru, { icon: t.icon, showColors: !0 }),
                                t.title,
                                o && Object(E.createElement)("span", { className: "screen-reader-text" }, au("(selected block)"))
                            )
                        ),
                        r && !!e.innerBlocks && !!e.innerBlocks.length && Object(E.createElement)(ou, { blocks: e.innerBlocks, selectedBlockClientId: n, selectBlock: a, showNestedBlocks: !0 })
                    );
                })
            );
        }
        var iu = wp.i18n.__,
            cu = wp.element,
            Tu = cu.Component,
            Eu = cu.Fragment,
            su = wp.blockEditor.BlockControls,
            hu = wp.components,
            Au = hu.Toolbar,
            lu = hu.withSpokenMessages,
            Lu = hu.IconButton,
            Iu = hu.SVG,
            uu = hu.Path,
            mu = hu.Modal,
            Ru = wp.data,
            pu = Ru.withSelect,
            Ou = Ru.withDispatch,
            du = wp.compose,
            Nu = du.compose,
            Su = du.ifCondition,
            Cu = Object(E.createElement)(
                Iu,
                { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "20", height: "20" },
                Object(E.createElement)(uu, { d: "M5 5H3v2h2V5zm3 8h11v-2H8v2zm9-8H6v2h11V5zM7 11H5v2h2v-2zm0 8h2v-2H7v2zm3-2v2h11v-2H10z" })
            ),
            fu = (function (e) {
                function t() {
                    var e;
                    return dt()(this, t), ((e = ft()(this, xt()(t).apply(this, arguments))).state = { isNavigationListOpen: !1 }), e;
                }
                return (
                    vt()(t, e),
                    St()(t, [
                        {
                            key: "render",
                            value: function () {
                                var e = this,
                                    t = this.props,
                                    n = t.block,
                                    a = t.selectBlock,
                                    r = t.selectedBlockClientId,
                                    o = Object(E.createElement)(Lu, {
                                        className: "components-toolbar__control",
                                        label: iu("Open block navigator", "block-options"),
                                        onClick: function () {
                                            return e.setState({ isNavigationListOpen: !0 });
                                        },
                                        icon: Cu,
                                    }),
                                    i =
                                        this.state.isNavigationListOpen &&
                                        Object(E.createElement)(
                                            mu,
                                            {
                                                title: iu("Block Navigator", "block-options"),
                                                closeLabel: iu("Close", "block-options"),
                                                onRequestClose: function () {
                                                    e.setState({ isNavigationListOpen: !1 });
                                                },
                                            },
                                            Object(E.createElement)(ou, { blocks: [n], selectedBlockClientId: r, selectBlock: a, showNestedBlocks: !0 })
                                        );
                                return Object(E.createElement)(Eu, null, Object(E.createElement)(su, null, Object(E.createElement)(Au, null, o)), i);
                            },
                        },
                    ]),
                    t
                );
            })(Tu),
            bu = Nu(
                pu(function (e, t) {
                    var n = t.attributes,
                        a = t.setAttributes,
                        r = t.clientId,
                        o = e("core/block-editor"),
                        i = o.getSelectedBlockClientId;
                    return { attributes: n, setAttributes: a, clientId: r, block: (0, o.getBlock)(r), selectedBlockClientId: i(), isDisabled: e("core/edit-post").isFeatureActive("disableEditorsKitNavigatorOptions") };
                }),
                Ou(function (e) {
                    return { selectBlock: e("core/block-editor").selectBlock };
                }),
                Su(function (e) {
                    return !e.isDisabled;
                }),
                lu
            )(fu);
        function xu(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t &&
                    (a = a.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, a);
            }
            return n;
        }
        var Du = wp.hooks.addFilter,
            Hu = wp.element.Fragment,
            Wu = wp.compose.createHigherOrderComponent,
            vu = wp.blocks.hasBlockSupport,
            gu = ["core/columns", "core/column", "core/group"];
        Du(
            "editor.BlockEdit",
            "editorskit/media-text-link",
            Wu(function (e) {
                return function (t) {
                    return Object(E.createElement)(
                        Hu,
                        null,
                        Object(E.createElement)(e, t),
                        t.isSelected &&
                            (gu.includes(t.name) || vu(t.name, "editorsKitBlockNavigator")) &&
                            Object(E.createElement)(
                                bu,
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {};
                                        t % 2
                                            ? xu(n, !0).forEach(function (t) {
                                                  i()(e, t, n[t]);
                                              })
                                            : Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                            : xu(n).forEach(function (t) {
                                                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                              });
                                    }
                                    return e;
                                })({}, t)
                            )
                    );
                };
            }, "withNavigator")
        );
        var ku = wp.i18n.__,
            yu = wp.element,
            Bu = yu.useRef,
            Pu = yu.useState,
            wu = yu.useCallback,
            Mu = yu.Fragment,
            Uu = wp.components,
            Fu = Uu.IconButton,
            Gu = Uu.ToggleControl,
            ju = wp.blockEditor.URLPopover,
            Ku = wp.keycodes,
            Vu = Ku.LEFT,
            _u = Ku.RIGHT,
            Qu = Ku.UP,
            Yu = Ku.DOWN,
            Xu = Ku.BACKSPACE,
            zu = Ku.ENTER,
            Zu = function (e) {
                var t = e.onChangeUrl,
                    n = e.url,
                    a = e.opensInNewTab,
                    r = e.linkNoFollow,
                    o = e.linkSponsored,
                    i = e.hasAnimation,
                    c = Pu(!1),
                    T = nr()(c, 2),
                    s = T[0],
                    h = T[1],
                    A = wu(function () {
                        h(!0);
                    }),
                    l = Pu(!1),
                    L = nr()(l, 2),
                    I = L[0],
                    u = L[1],
                    m = Pu(null),
                    R = nr()(m, 2),
                    p = R[0],
                    O = R[1],
                    d = Bu(null),
                    N = function (e) {
                        e.stopPropagation();
                    },
                    S = wu(function () {
                        u(!0);
                    }),
                    C = wu(function () {
                        u(!1);
                    }),
                    f = wu(function () {
                        O(null), C(), h(!1);
                    }),
                    b = wu(function () {
                        return function (e) {
                            var t = d.current;
                            (t && t.contains(e.target)) || (h(!1), O(null), C());
                        };
                    }),
                    x = wu(function () {
                        return function (e) {
                            p && t({ href: p }), C(), O(null), e.preventDefault();
                        };
                    }),
                    D = wu(function () {
                        t({ href: "" });
                    }),
                    H = Object(E.createElement)(
                        Mu,
                        null,
                        Object(E.createElement)(Gu, {
                            label: ku("Open in New Tab", "block-options"),
                            onChange: function (e) {
                                t({ opensInNewTab: e });
                            },
                            checked: a,
                        }),
                        Object(E.createElement)(Gu, {
                            label: ku("No Follow", "block-options"),
                            onChange: function (e) {
                                t({ linkNoFollow: e });
                            },
                            checked: r,
                        }),
                        Object(E.createElement)(Gu, {
                            label: ku("Sponsored", "block-options"),
                            onChange: function (e) {
                                t({ linkSponsored: e });
                            },
                            checked: o,
                        }),
                        Object(E.createElement)(Gu, {
                            label: ku("Hover Animation", "block-options"),
                            onChange: function (e) {
                                t({ hasAnimation: e });
                            },
                            checked: i,
                        })
                    ),
                    W = null !== p ? p : n;
                return Object(E.createElement)(
                    Mu,
                    null,
                    Object(E.createElement)(Fu, { icon: "admin-links", className: "components-toolbar__control", label: ku(n ? "Edit link" : "Insert link", "block-options"), "aria-expanded": s, onClick: A }),
                    s &&
                        Object(E.createElement)(
                            ju,
                            {
                                onFocusOutside: b(),
                                onClose: f,
                                renderSettings: function () {
                                    return H;
                                },
                            },
                            (!n || I) &&
                                Object(E.createElement)(ju.LinkEditor, {
                                    className: "block-editor-format-toolbar__link-container-content",
                                    value: W,
                                    onChangeInputValue: O,
                                    onKeyDown: function (e) {
                                        [Vu, Yu, _u, Qu, Xu, zu].indexOf(e.keyCode) > -1 && e.stopPropagation();
                                    },
                                    onKeyPress: N,
                                    onSubmit: x(),
                                    autocompleteRef: d,
                                }),
                            n &&
                                !I &&
                                Object(E.createElement)(
                                    Mu,
                                    null,
                                    Object(E.createElement)(ju.LinkViewer, { className: "block-editor-format-toolbar__link-container-content", onKeyPress: N, url: n, onEditLinkClick: S }),
                                    Object(E.createElement)(Fu, { icon: "no", label: ku("Remove link", "block-options"), onClick: D })
                                )
                        )
                );
            },
            qu = wp.element,
            Ju = qu.Component,
            $u = qu.Fragment,
            em = wp.blockEditor.BlockControls,
            tm = wp.components,
            nm = tm.Toolbar,
            am = tm.withSpokenMessages,
            rm = wp.data.withSelect,
            om = wp.compose,
            im = om.compose,
            cm = om.ifCondition,
            Tm = (function (e) {
                function t() {
                    var e;
                    return dt()(this, t), ((e = ft()(this, xt()(t).apply(this, arguments))).onSetHref = e.onSetHref.bind(Ht()(e))), e;
                }
                return (
                    vt()(t, e),
                    St()(t, [
                        {
                            key: "onSetHref",
                            value: function (e) {
                                this.props.setAttributes(e);
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props.attributes,
                                    t = e.href,
                                    n = e.opensInNewTab,
                                    a = e.linkNoFollow,
                                    r = e.linkSponsored,
                                    o = e.hasAnimation;
                                return Object(E.createElement)(
                                    $u,
                                    null,
                                    Object(E.createElement)(
                                        em,
                                        null,
                                        Object(E.createElement)(
                                            nm,
                                            null,
                                            Object(E.createElement)(Zu, { url: t || "", opensInNewTab: n || !1, linkNoFollow: a || !1, linkSponsored: r || !1, hasAnimation: o || !1, onChangeUrl: this.onSetHref })
                                        )
                                    )
                                );
                            },
                        },
                    ]),
                    t
                );
            })(Ju),
            Em = im(
                rm(function (e, t) {
                    return { attributes: t.attributes, isDisabled: e("core/edit-post").isFeatureActive("disableEditorsKitLinkBlockToolbarOptions") };
                }),
                cm(function (e) {
                    return !e.isDisabled;
                }),
                am
            )(Tm);
        function sm(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t &&
                    (a = a.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, a);
            }
            return n;
        }
        var hm = wp.hooks.addFilter,
            Am = wp.element.Fragment,
            lm = wp.compose.createHigherOrderComponent,
            Lm = wp.blocks.hasBlockSupport,
            Im = ["core/group", "core/column", "core/cover"];
        hm(
            "editor.BlockEdit",
            "editorskit/block-link-toolbar",
            lm(function (e) {
                return function (t) {
                    return Object(E.createElement)(
                        Am,
                        null,
                        Object(E.createElement)(e, t),
                        t.isSelected &&
                            (Im.includes(t.name) || Lm(t.name, "editorsKitLinkToolbar")) &&
                            Object(E.createElement)(
                                Em,
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {};
                                        t % 2
                                            ? sm(n, !0).forEach(function (t) {
                                                  i()(e, t, n[t]);
                                              })
                                            : Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                            : sm(n).forEach(function (t) {
                                                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                              });
                                    }
                                    return e;
                                })({}, t)
                            )
                    );
                };
            }, "withLinkToolbar")
        );
        var um = wp.i18n.__,
            mm = wp.element,
            Rm = mm.Component,
            pm = mm.Fragment,
            Om = mm.createRef,
            dm = wp.dom.focus,
            Nm = wp.blocks.createBlock,
            Sm = wp.compose,
            Cm = Sm.compose,
            fm = Sm.ifCondition,
            bm = wp.data,
            xm = bm.select,
            Dm = bm.withSelect,
            Hm = bm.withDispatch,
            Wm = bm.dispatch,
            vm = wp.components,
            gm = vm.withSpokenMessages,
            km = vm.Modal,
            ym = vm.Button,
            Bm = (function (e) {
                function t() {
                    var e;
                    return dt()(this, t), ((e = ft()(this, xt()(t).apply(this, arguments))).nameInput = Om()), (e.focus = e.focus.bind(Ht()(e))), e;
                }
                return (
                    vt()(t, e),
                    St()(t, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                this.focus();
                            },
                        },
                        {
                            key: "focus",
                            value: function () {
                                if (null !== this.nameInput.current) {
                                    var e = dm.tabbable.find(document.querySelector(".components-modal--editorskit-transform-empty"));
                                    e.length && (document.activeElement.blur(), e[0].focus());
                                }
                            },
                        },
                        {
                            key: "componentDidUpdate",
                            value: function () {
                                this.focus();
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    t = e.getBlocks,
                                    n = e.getBlockIndex,
                                    a = e.createSpacer,
                                    r = e.onToggle,
                                    o = e.isPrompted,
                                    i = n - 2,
                                    c = function () {
                                        r(1);
                                    };
                                if (i < 0) return null;
                                var T = t[i],
                                    s = t[i + 1],
                                    h = t[i + 2];
                                return "core/paragraph" !== T.name || "core/paragraph" !== s.name || "core/paragraph" !== h.name
                                    ? null
                                    : Object(A.isEmpty)(T.attributes.content) && Object(A.isEmpty)(s.attributes.content) && Object(A.isEmpty)(h.attributes.content)
                                    ? o
                                        ? (a(T.clientId, s.clientId, h.clientId), null)
                                        : Object(E.createElement)(
                                              pm,
                                              null,
                                              Object(E.createElement)(
                                                  km,
                                                  {
                                                      title: um("Enable Shortcut", "block-options"),
                                                      onRequestClose: function () {
                                                          return c();
                                                      },
                                                      shouldCloseOnClickOutside: !1,
                                                      closeLabel: um("Close", "block-options"),
                                                      icon: null,
                                                      className: "editorskit-modal-component components-modal--editorskit-transform-empty",
                                                  },
                                                  Object(E.createElement)("p", null, um("Do you want to automatically transform three(3) consecutive empty paragraphs into Spacer Block?", "block-options")),
                                                  Object(E.createElement)(
                                                      ym,
                                                      {
                                                          isPrimary: !0,
                                                          isLarge: !0,
                                                          onClick: function () {
                                                              r(0), a(T.clientId, s.clientId, h.clientId);
                                                          },
                                                          ref: this.nameInput,
                                                      },
                                                      um("Yes Enable", "block-options")
                                                  ),
                                                  " ",
                                                  Object(E.createElement)(
                                                      ym,
                                                      {
                                                          isDefault: !0,
                                                          isLarge: !0,
                                                          onClick: function () {
                                                              return c();
                                                          },
                                                      },
                                                      um("No, Thanks", "block-options")
                                                  ),
                                                  Object(E.createElement)("p", null, Object(E.createElement)("small", null, um("This prompt will only be shown once and will remember your preference. Thanks!", "block-options")))
                                              )
                                          )
                                    : null;
                            },
                        },
                    ]),
                    t
                );
            })(Rm),
            Pm = Cm(
                Dm(function () {
                    var e = xm("core/block-editor"),
                        t = e.getSelectedBlockClientId,
                        n = e.getBlockRootClientId,
                        a = e.getBlocks,
                        r = e.getBlockIndex,
                        o = e.getBlocksByClientId,
                        i = t(),
                        c = n(i),
                        T = a(),
                        E = r(i);
                    return (
                        Object(A.isEmpty)(c) || ((T = o(c)[0].innerBlocks), (E = r(i, c))),
                        { getBlocks: T, getBlockIndex: E, isDisabled: xm("core/edit-post").isFeatureActive("disableEditorsKitTransformEmptyWriting"), isPrompted: xm("core/edit-post").isFeatureActive("editorsKitTransformEmptyWriting") }
                    );
                }),
                Hm(function () {
                    return {
                        createSpacer: function (e, t, n) {
                            var a = Wm("core/block-editor"),
                                r = a.selectBlock,
                                o = a.replaceBlock,
                                i = a.removeBlocks,
                                c = Nm("core/spacer", {});
                            i([e, t]), o(n, c), r(c.clientId);
                        },
                        onToggle: function (e) {
                            Wm("core/edit-post").toggleFeature("editorsKitTransformEmptyWriting"), e && Wm("core/edit-post").toggleFeature("disableEditorsKitTransformEmptyWriting");
                        },
                    };
                }),
                fm(function (e) {
                    return !e.isDisabled;
                }),
                gm
            )(Bm);
        (0, wp.plugins.registerPlugin)("editorskit-empty-to-spacer", { icon: !1, render: Pm });
        n(167), n(168), n(169);
        var wm = wp.data,
            Mm = wm.withSelect,
            Um = wm.withDispatch,
            Fm = wm.select,
            Gm = wp.compose,
            jm = Gm.compose,
            Km = Gm.ifCondition,
            Vm = wp.element,
            _m = Vm.Fragment,
            Qm = Vm.Component,
            Ym = wp.keycodes.rawShortcut,
            Xm = wp.components,
            zm = Xm.withSpokenMessages,
            Zm = Xm.KeyboardShortcuts,
            qm = (function (e) {
                function t() {
                    var e;
                    return dt()(this, t), ((e = ft()(this, xt()(t).apply(this, arguments))).triggerShortcut = e.triggerShortcut.bind(Ht()(e))), (e.state = { isOpen: !1 }), e;
                }
                return (
                    vt()(t, e),
                    St()(t, [
                        {
                            key: "triggerShortcut",
                            value: function (e) {
                                var t = this.props,
                                    n = t.parentBlockId;
                                (0, t.onSelect)(n), e.preventDefault();
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                return !!this.props.parentBlockId && Object(E.createElement)(_m, null, Object(E.createElement)(Zm, { bindGlobal: !0, shortcuts: i()({}, Ym.primaryShift("."), this.triggerShortcut) }));
                            },
                        },
                    ]),
                    t
                );
            })(Qm),
            Jm = jm([
                Mm(function () {
                    var e = Fm("core/block-editor"),
                        t = e.getSelectedBlockClientId,
                        n = e.getBlockRootClientId,
                        a = t();
                    return a ? { selectedBlockId: a, parentBlockId: n(a), isDisabled: Fm("core/edit-post").isFeatureActive("disableEditorsKitSelectParentShortcuts") } : {};
                }),
                Um(function (e) {
                    var t = e("core/block-editor").selectBlock;
                    return {
                        onSelect: function (e) {
                            t(e);
                        },
                    };
                }),
                Km(function (e) {
                    return !e.isDisabled;
                }),
                zm,
            ])(qm);
        (0, wp.plugins.registerPlugin)("editorskit-shortcuts-select-parent", { icon: !1, render: Jm });
        var $m = wp.data,
            eR = $m.withSelect,
            tR = $m.withDispatch,
            nR = $m.select,
            aR = wp.compose,
            rR = aR.compose,
            oR = aR.ifCondition,
            iR = wp.element,
            cR = iR.Fragment,
            TR = iR.Component,
            ER = wp.components,
            sR = ER.withSpokenMessages,
            hR = ER.KeyboardShortcuts,
            AR = (function (e) {
                function t() {
                    var e;
                    return dt()(this, t), ((e = ft()(this, xt()(t).apply(this, arguments))).triggerShortcut = e.triggerShortcut.bind(Ht()(e))), e;
                }
                return (
                    vt()(t, e),
                    St()(t, [
                        {
                            key: "triggerShortcut",
                            value: function (e) {
                                var t = this.props,
                                    n = t.selectedBlock,
                                    a = t.updateBlockAttributes,
                                    r = e.code.replace(/^\D+/g, "");
                                a(n.clientId, { level: parseInt(r) }), e.preventDefault();
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props.selectedBlock;
                                return (
                                    void 0 !== e &&
                                    !!["core/heading"].includes(e.name) &&
                                    Object(E.createElement)(
                                        cR,
                                        null,
                                        Object(E.createElement)(hR, {
                                            bindGlobal: !0,
                                            shortcuts: {
                                                "ctrl+alt+1": this.triggerShortcut,
                                                "ctrl+alt+2": this.triggerShortcut,
                                                "ctrl+alt+3": this.triggerShortcut,
                                                "ctrl+alt+4": this.triggerShortcut,
                                                "ctrl+alt+5": this.triggerShortcut,
                                                "ctrl+alt+6": this.triggerShortcut,
                                            },
                                        })
                                    )
                                );
                            },
                        },
                    ]),
                    t
                );
            })(TR),
            lR = rR([
                eR(function () {
                    var e = (0, nR("core/block-editor").getSelectedBlock)();
                    return e ? { selectedBlock: e, isDisabled: nR("core/edit-post").isFeatureActive("disableEditorsKitHeadingShortcuts") } : {};
                }),
                tR(function (e) {
                    return { updateBlockAttributes: e("core/block-editor").updateBlockAttributes };
                }),
                oR(function (e) {
                    return !e.isDisabled && "undefined" !== e.selectedBlock && "undefined" !== e.selectedBlock;
                }),
                sR,
            ])(AR);
        (0, wp.plugins.registerPlugin)("editorskit-shortcuts--heading", { icon: !1, render: lR });
        var LR = wp.data,
            IR = LR.withSelect,
            uR = LR.withDispatch,
            mR = LR.select,
            RR = wp.compose,
            pR = RR.compose,
            OR = RR.ifCondition,
            dR = wp.element,
            NR = dR.Fragment,
            SR = dR.Component,
            CR = wp.components,
            fR = CR.withSpokenMessages,
            bR = CR.KeyboardShortcuts,
            xR = (function (e) {
                function t() {
                    var e;
                    return dt()(this, t), ((e = ft()(this, xt()(t).apply(this, arguments))).triggerShortcut = e.triggerShortcut.bind(Ht()(e))), (e.state = { isOpen: !1 }), e;
                }
                return (
                    vt()(t, e),
                    St()(t, [
                        {
                            key: "triggerShortcut",
                            value: function (e) {
                                var t = e.keyCode,
                                    n = e.code,
                                    a = this.props,
                                    r = a.selectedBlock,
                                    o = a.updateBlockAttributes;
                                void 0 !== r.attributes.hasAlignmentOption &&
                                    r.attributes.hasAlignmentOption &&
                                    (67 === t || "KeyC" === n
                                        ? o(r.clientId, { textAlign: "center", align: "center" })
                                        : 76 === t || "KeyL" === n
                                        ? o(r.clientId, { textAlign: "left", align: "left" })
                                        : 82 === t || "KeyR" === n
                                        ? o(r.clientId, { textAlign: "right", align: "right" })
                                        : (74 !== t && "KeyJ" !== n) || "core/paragraph" !== r.name || o(r.clientId, { textAlign: "justify", align: "justify" })),
                                    e.preventDefault();
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props.selectedBlock;
                                return (
                                    void 0 !== e &&
                                    void 0 !== e.attributes.hasAlignmentOption &&
                                    Object(E.createElement)(
                                        NR,
                                        null,
                                        Object(E.createElement)(bR, {
                                            bindGlobal: !0,
                                            shortcuts: { "ctrl+alt+c": this.triggerShortcut, "ctrl+alt+r": this.triggerShortcut, "ctrl+alt+l": this.triggerShortcut, "ctrl+alt+j": this.triggerShortcut },
                                        })
                                    )
                                );
                            },
                        },
                    ]),
                    t
                );
            })(SR),
            DR = pR([
                IR(function () {
                    var e = (0, mR("core/block-editor").getSelectedBlock)();
                    return e ? { selectedBlock: e, isDisabled: mR("core/edit-post").isFeatureActive("disableEditorsKitSelectParentShortcuts") } : {};
                }),
                uR(function (e) {
                    return { updateBlockAttributes: e("core/block-editor").updateBlockAttributes };
                }),
                OR(function (e) {
                    return !e.isDisabled && "undefined" !== e.selectedBlock && "undefined" !== e.selectedBlock;
                }),
                fR,
            ])(xR);
        (0, wp.plugins.registerPlugin)("editorskit-shortcuts--alignment", { icon: !1, render: DR });
        var HR = wp.i18n.__,
            WR = wp.hooks.addFilter,
            vR = wp.element.Fragment,
            gR = wp.data.withDispatch,
            kR = wp.compose,
            yR = kR.compose,
            BR = kR.createHigherOrderComponent,
            PR = wp.blocks.getBlockType,
            wR = wp.blockEditor.InspectorAdvancedControls,
            MR = wp.components.Button,
            UR = yR(
                gR(function (e) {
                    var t = e("core/edit-post").hideBlockTypes,
                        n = e("core/notices").createNotice,
                        a = e("core/block-editor"),
                        r = a.removeBlock,
                        o = a.clearSelectedBlock;
                    return {
                        editorsKitDisableBlock: function (e, a) {
                            t(e), r(a), o();
                            var i = PR(e).title;
                            n("info", i + HR(" block has been disabled.", "block-options"), { isDismissible: !0, type: "snackbar" });
                        },
                    };
                })
            );
        function FR(e) {
            var t = new window.FileReader();
            return new Promise(function (n) {
                (t.onload = function () {
                    n(t.result);
                }),
                    t.readAsText(e);
            });
        }
        function GR() {
            return (GR = $c()(
                Oc.a.mark(function e(t) {
                    var n, a, r, o;
                    return Oc.a.wrap(
                        function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return (e.next = 2), FR(t);
                                    case 2:
                                        (n = e.sent), (e.prev = 3), (a = JSON.parse(n)), (e.next = 10);
                                        break;
                                    case 7:
                                        throw ((e.prev = 7), (e.t0 = e.catch(3)), new Error("Invalid JSON file"));
                                    case 10:
                                        if ("wp_block" === a.__file && a.title && a.content && Object(A.isString)(a.title) && Object(A.isString)(a.content)) {
                                            e.next = 12;
                                            break;
                                        }
                                        return e.abrupt("return", jR(a));
                                    case 12:
                                        return (e.next = 14), wp.apiFetch({ path: "/wp/v2/types/wp_block" });
                                    case 14:
                                        return (r = e.sent), (e.next = 17), wp.apiFetch({ path: "/wp/v2/".concat(r.rest_base), data: { title: a.title, content: a.content, status: "publish" }, method: "POST" });
                                    case 17:
                                        if (!(o = e.sent).id) {
                                            e.next = 20;
                                            break;
                                        }
                                        return e.abrupt("return", '\x3c!-- wp:block {"ref":' + o.id + "} /--\x3e");
                                    case 20:
                                        throw new Error("Invalid Reusable Block JSON file contents");
                                    case 21:
                                    case "end":
                                        return e.stop();
                                }
                        },
                        e,
                        null,
                        [[3, 7]]
                    );
                })
            )).apply(this, arguments);
        }
        function jR(e) {
            if ("core_block" !== e.__file || !e.content || !Object(A.isString)(e.content)) throw new Error("Invalid JSON file");
            return e.content;
        }
        WR(
            "editor.BlockEdit",
            "editorskit/advanced/disable-block",
            BR(function (e) {
                return UR(function (t) {
                    var n = T()({}, t),
                        a = n.name,
                        r = n.clientId,
                        o = n.attributes,
                        i = n.editorsKitDisableBlock,
                        c = o.editorskit;
                    return void 0 !== c && void 0 !== c.unit_test && c.unit_test && n.isSelected
                        ? Object(E.createElement)(
                              vR,
                              null,
                              Object(E.createElement)(e, n),
                              Object(E.createElement)(
                                  wR,
                                  null,
                                  Object(E.createElement)(
                                      "div",
                                      { className: "components-base-control components-button-control components-editorskit-disable-block" },
                                      Object(E.createElement)(
                                          "div",
                                          { className: "components-base-control__field" },
                                          Object(E.createElement)(
                                              MR,
                                              {
                                                  isPrimary: !0,
                                                  isLarge: !0,
                                                  isDestructive: !0,
                                                  onClick: function () {
                                                      i(a, r);
                                                  },
                                              },
                                              HR("Remove & Disable Block", "block-options")
                                          )
                                      ),
                                      Object(E.createElement)("p", { className: "components-base-control__help" }, HR("Click if you want this block to be disabled on Block Manager.", "block-options"))
                                  )
                              )
                          )
                        : Object(E.createElement)(e, n);
                });
            }, "withInspectorControl")
        );
        var KR = function (e) {
                return GR.apply(this, arguments);
            },
            VR = wp.data,
            _R = VR.select,
            QR = VR.dispatch,
            YR = wp.blocks,
            XR = YR.parse,
            zR = YR.createBlock;
        function ZR(e, t, n) {
            t = XR(t);
            var a = [],
                r = _R("core/block-editor").getBlockInsertionPoint();
            if (t.length > 0) {
                for (var o in t) {
                    var i = zR(t[o].name, t[o].attributes, t[o].innerBlocks);
                    QR("core/block-editor").insertBlocks(i, parseInt(r.index) + parseInt(o)), void 0 !== i && a.push(i.clientId);
                }
                QR("core/block-editor").removeBlock(e), a.length > 0 && QR("core/block-editor").multiSelect(a[0], a.reverse()[0]);
            }
            n();
        }
        var qR,
            JR = wp.i18n.__,
            $R = wp.compose.withInstanceId,
            ep = wp.element,
            tp = ep.Fragment,
            np = ep.Component,
            ap = wp.blockEditor.MediaUploadCheck,
            rp = wp.components,
            op = rp.DropZone,
            ip = rp.FormFileUpload,
            cp = rp.Placeholder,
            Tp = rp.Notice,
            Ep = ["json"],
            sp = $R(
                (function (e) {
                    function t() {
                        var e;
                        return dt()(this, t), ((e = ft()(this, xt()(t).apply(this, arguments))).state = { isLoading: !1, error: null }), (e.isStillMounted = !0), (e.addFile = e.addFile.bind(Ht()(e))), e;
                    }
                    return (
                        vt()(t, e),
                        St()(t, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    var e = this.props.attributes.file;
                                    e && (this.setState({ isLoading: !0 }), this.addFile(e));
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    this.isStillMounted = !1;
                                },
                            },
                            {
                                key: "addFile",
                                value: function (e) {
                                    var t = this,
                                        n = e[0];
                                    e.target && (n = event.target.files[0]),
                                        n &&
                                            (this.setState({ isLoading: !0 }),
                                            KR(n)
                                                .then(function (e) {
                                                    t.isStillMounted && (t.setState({ isLoading: !1 }), ZR(t.props.clientId, e, t.props.onClose));
                                                })
                                                .catch(function (e) {
                                                    if (t.isStillMounted) {
                                                        var n;
                                                        switch (e.message) {
                                                            case "Invalid JSON file":
                                                                n = JR("Invalid JSON file", "block-options");
                                                                break;
                                                            case "Invalid Reusable Block JSON file":
                                                                n = JR("Invalid Reusable Block JSON file", "block-options");
                                                                break;
                                                            default:
                                                                n = JR("Unknown error", "block-options");
                                                        }
                                                        t.setState({ isLoading: !1, error: n });
                                                    }
                                                }));
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.state,
                                        t = e.isLoading,
                                        n = e.error;
                                    return Object(E.createElement)(
                                        cp,
                                        {
                                            icon: "download",
                                            label: JR("Import from JSON", "block-options"),
                                            instructions: JR("Drag a file or upload a new one from your device.", "block-options"),
                                            className: "editor-media-placeholder",
                                            notices: n && Object(E.createElement)(Tp, { status: "error" }, n),
                                        },
                                        Object(E.createElement)(
                                            tp,
                                            null,
                                            Object(E.createElement)(
                                                ap,
                                                null,
                                                Object(E.createElement)(op, { onFilesDrop: this.addFile, label: JR("Import from JSON", "block-options") }),
                                                Object(E.createElement)(
                                                    ip,
                                                    { isLarge: !0, className: "editor-media-placeholder__button", onChange: this.addFile, accept: Ep, isBusy: t, disabled: t, multiple: !1 },
                                                    JR("Upload", "block-options")
                                                )
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(np)
            ),
            hp = wp.components.SVG,
            Ap = Object(E.createElement)(
                hp,
                { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
                Object(E.createElement)("path", { fill: "none", d: "M0 0h24v24H0V0z" }),
                Object(E.createElement)("path", { d: "M9.17 6l2 2H20v10H4V6h5.17M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" })
            ),
            lp = wp.blocks.createBlock,
            Lp = {
                from: [
                    {
                        type: "files",
                        isMatch: function (e) {
                            return "application/json" === e[0].type;
                        },
                        priority: 14,
                        transform: function (e) {
                            var t = [];
                            return t.push(lp("editorskit/import", { file: e })), t;
                        },
                    },
                ],
            },
            Ip = wp.i18n.__,
            up = "import",
            mp = "common",
            Rp = Ip("Import", "block-options"),
            pp = [Ip("import", "block-options"), Ip("download", "block-options"), Ip("migrate", "block-options")],
            Op = {
                title: Rp,
                description: Ip("Import blocks exported using EditorsKit plugin.", "block-options"),
                keywords: pp,
                attributes: { file: { type: "object" } },
                supports: { align: !0, alignWide: !1, alignFull: !1, customClassName: !1, className: !1, html: !1 },
                transforms: Lp,
                edit: sp,
                save: function () {
                    return null;
                },
            },
            dp = n(67),
            Np = wp.i18n.__,
            Sp = wp.components.Spinner,
            Cp = function () {
                return Object(E.createElement)("div", { className: "wp-block-embed is-loading" }, Object(E.createElement)(Sp, null), Object(E.createElement)("p", null, Np("Loading…", "block-options")));
            },
            fp = wp.i18n,
            bp = fp.__,
            xp = fp.sprintf,
            Dp = wp.element,
            Hp = Dp.Fragment,
            Wp = Dp.RawHTML,
            vp = wp.components,
            gp = vp.Modal,
            kp = vp.TabPanel,
            yp = vp.Button,
            Bp = function (e) {
                var t = e.clientId,
                    n = e.onClose,
                    a = e.downloads,
                    r = e.isInserting,
                    o = e.setIsInserting,
                    i = e.filterDownloads,
                    c = (function () {
                        var e = $c()(
                            Oc.a.mark(function e(a) {
                                var r, o;
                                return Oc.a.wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (e.next = 2), fetch(a);
                                            case 2:
                                                return (r = e.sent), (e.next = 5), r.json();
                                            case 5:
                                                (o = e.sent) && ZR(t, o.content, n);
                                            case 7:
                                            case "end":
                                                return e.stop();
                                        }
                                }, e);
                            })
                        );
                        return function (t) {
                            return e.apply(this, arguments);
                        };
                    })();
                return (
                    void 0 !== a.purchased_files &&
                    Object(E.createElement)(
                        Hp,
                        null,
                        Object(E.createElement)(
                            gp,
                            {
                                title: bp("ShareABlock Patterns and Templates", "block-options"),
                                className: "editorskit-fullscreen-modal",
                                onRequestClose: function () {
                                    n();
                                },
                            },
                            Object(E.createElement)(
                                kp,
                                {
                                    className: "shareablock-downloads-panel",
                                    activeClass: "is-active-tab",
                                    onSelect: function (e) {
                                        i(e);
                                    },
                                    tabs: [
                                        { name: "all", title: bp("All Downloads", "block-options"), className: "shareablock-all-downloads" },
                                        { name: "block-patterns", title: bp("Block Patterns", "block-options"), className: "shareablock-block-patterns" },
                                        { name: "templates", title: bp("Templates", "block-options"), className: "shareablock-templates" },
                                    ],
                                },
                                function (e) {
                                    return Object(E.createElement)(
                                        Hp,
                                        null,
                                        Object.keys(a.purchased_files).length < 1
                                            ? Object(E.createElement)(
                                                  "p",
                                                  { className: "shareablock-no-results" },
                                                  Object(E.createElement)(
                                                      Wp,
                                                      null,
                                                      xp(
                                                          bp("No %1$s Found. %2$sClick here to browse.%3$s", "block-options"),
                                                          "all" !== e.name ? e.title : bp("Downloads", "block-options"),
                                                          '<a href="https://shareablock.com/" target="_blank">',
                                                          "</a>"
                                                      )
                                                  )
                                              )
                                            : null,
                                        Object(E.createElement)(
                                            "ul",
                                            { className: "shareablock-downloads" },
                                            Object(A.map)(a.purchased_files, function (e, t) {
                                                return Object(E.createElement)(
                                                    "li",
                                                    { key: "shareablock-" + t },
                                                    Object(E.createElement)("div", null, void 0 !== e.thumbnail && Object(E.createElement)("img", { src: e.thumbnail, alt: e.name })),
                                                    Object(E.createElement)("h3", null, e.name),
                                                    Object(E.createElement)(
                                                        yp,
                                                        {
                                                            isPrimary: !0,
                                                            disabled: !(!r || t !== r),
                                                            onClick: function () {
                                                                o(t),
                                                                    Object(A.map)(e.files, function (e) {
                                                                        e.download_url && c(e.download_url);
                                                                    });
                                                            },
                                                        },
                                                        bp(r && t === r ? "Downloading...." : "Insert", "block-options")
                                                    ),
                                                    Object(E.createElement)(yp, { isTertiary: !0, href: "https://shareablock.com?p=" + t, target: "_blank" }, bp("Preview", "block-options"))
                                                );
                                            })
                                        )
                                    );
                                }
                            )
                        )
                    )
                );
            },
            Pp = wp.i18n.__,
            Mp = wp.keycodes.ENTER,
            Up = wp.element,
            Fp = Up.Component,
            Gp = Up.Fragment,
            jp = wp.blockEditor.InspectorControls,
            Kp = wp.components,
            Vp = Kp.PanelBody,
            _p = Kp.TextControl,
            Qp = Kp.Button,
            Yp = (function (e) {
                function t(e) {
                    var n;
                    return (
                        dt()(this, t),
                        ((n = ft()(this, xt()(t).apply(this, arguments))).state = {
                            apiKey: e.apiKey,
                            accessToken: e.accessToken,
                            hasValidApiKey: e.hasValidApiKey,
                            isSavedKey: !1,
                            isLoading: !0,
                            isSaving: !1,
                            keySaved: !1,
                            address: e.attributes.address,
                        }),
                        (n.updateApiKey = n.updateApiKey.bind(Ht()(n))),
                        (n.removeApiKey = n.removeApiKey.bind(Ht()(n))),
                        (n.handleKeyDown = n.handleKeyDown.bind(Ht()(n))),
                        n
                    );
                }
                return (
                    vt()(t, e),
                    St()(t, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                this.setState({ apiKey: this.props.apiKey, accessToken: this.props.accessToken, hasValidApiKey: this.props.hasValidApiKey });
                            },
                        },
                        {
                            key: "updateApiKey",
                            value: function () {
                                this.props.updateApiKeyCallBack(this.state.apiKey, this.state.accessToken, this.state.hasValidApiKey);
                            },
                        },
                        {
                            key: "removeApiKey",
                            value: function () {
                                this.setState({ apiKey: "", accessToken: "" }), this.props.updateApiKeyCallBack("", "");
                            },
                        },
                        {
                            key: "handleKeyDown",
                            value: function (e) {
                                e === Mp && this.updateApiKey();
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this,
                                    t = this.props,
                                    n = t.apiKey,
                                    a = t.accessToken;
                                return Object(E.createElement)(
                                    Gp,
                                    null,
                                    Object(E.createElement)(
                                        jp,
                                        null,
                                        Object(E.createElement)(
                                            Vp,
                                            { title: Pp("API Settings", "block-options"), initialOpen: !1, className: "components-shareablock-block-settings-sidebar" },
                                            Object(E.createElement)("p", null, Pp("Add API key and Access Token. Updating this API key will set all your downloads to use the new key.", "block-options")),
                                            Object(E.createElement)(_p, {
                                                value: this.state.apiKey,
                                                onChange: function (t) {
                                                    return e.setState({ apiKey: t });
                                                },
                                                placeholder: Pp("Enter API Key…", "block-options"),
                                                onKeyDown: function (t) {
                                                    var n = t.keyCode;
                                                    return e.handleKeyDown(n);
                                                },
                                            }),
                                            Object(E.createElement)(_p, {
                                                value: this.state.accessToken,
                                                onChange: function (t) {
                                                    return e.setState({ accessToken: t });
                                                },
                                                placeholder: Pp("Enter Access Token…", "block-options"),
                                                onKeyDown: function (t) {
                                                    var n = t.keyCode;
                                                    return e.handleKeyDown(n);
                                                },
                                            }),
                                            Object(E.createElement)(
                                                Qp,
                                                {
                                                    isPrimary: !0,
                                                    isLarge: !0,
                                                    onClick: this.updateApiKey,
                                                    disabled: ("" === this.state.apiKey && "" === this.state.accessToken) || (this.state.apiKey === this.props.apiKey && this.state.accessToken === this.props.accessToken),
                                                },
                                                this.state.apiKey === this.props.apiKey && "" !== this.props.apiKey && this.state.accessToken === this.props.accessToken && "" !== this.props.accessToken
                                                    ? Pp("Saved", "block-options")
                                                    : Pp("Save", "block-options")
                                            ),
                                            n &&
                                                a &&
                                                Object(E.createElement)(
                                                    Qp,
                                                    { isSecondary: !0, isLarge: !0, onClick: this.removeApiKey, disabled: this.state.apiKey !== this.props.apiKey || !this.state.apiKey },
                                                    Pp("Remove", "block-options")
                                                )
                                        )
                                    )
                                );
                            },
                        },
                    ]),
                    t
                );
            })(Fp),
            Xp = wp.i18n.__,
            zp = wp.compose.withInstanceId,
            Zp = wp.element,
            qp = Zp.Fragment,
            Jp = Zp.Component,
            $p = wp.components,
            eO = $p.Placeholder,
            tO = $p.TextControl,
            nO = $p.Button;
        wp.api.loadPromise.then(function () {
            qR = new wp.api.models.Settings();
        });
        var aO = "https://shareablock.com/edd-api/my-files",
            rO = zp(
                (function (e) {
                    function t() {
                        var e;
                        return (
                            dt()(this, t),
                            ((e = ft()(this, xt()(t).apply(this, arguments))).state = {
                                apiKey: "",
                                accessToken: "",
                                hasValidApiKey: !1,
                                isSaving: !1,
                                keySaved: !1,
                                isSavedKey: !1,
                                isLoading: !1,
                                isInserting: 0,
                                downloads: {},
                                filtered: {},
                                isOpen: !1,
                                error: null,
                            }),
                            qR.on("change:shareablock_api_key", function (t) {
                                var n = JSON.parse(t.get("shareablock_api_key"));
                                e.setState({ apiKey: n.apiKey, accessToken: n.accessToken, hasValidApiKey: n.hasValidApiKey, isSavedKey: "" !== n.apiKey });
                            }),
                            qR.fetch().then(function (t) {
                                if (void 0 !== t.shareablock_api_key && t.shareablock_api_key) {
                                    var n = JSON.parse(t.shareablock_api_key);
                                    e.setState({ apiKey: n.apiKey, accessToken: n.accessToken, hasValidApiKey: n.hasValidApiKey, isSavedKey: !0 });
                                }
                            }),
                            (e.saveApiKey = e.saveApiKey.bind(Ht()(e))),
                            (e.updateApiKey = e.updateApiKey.bind(Ht()(e))),
                            (e.fetchDownloads = e.fetchDownloads.bind(Ht()(e))),
                            e
                        );
                    }
                    return (
                        vt()(t, e),
                        St()(t, [
                            { key: "componentDidMount", value: function () {} },
                            { key: "componentWillUnmount", value: function () {} },
                            {
                                key: "updateApiKey",
                                value: function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.apiKey,
                                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state.accessToken,
                                        n = this.props.setAttributes;
                                    (e = e.trim()), (t = t.trim()), "" === e && "" === t ? (this.saveApiKey(e, t, !1, !1), this.setState({ apiKey: e, accessToken: t }), n({ hasApiKey: !1 })) : this.fetchDownloads(e, t);
                                },
                            },
                            {
                                key: "saveApiKey",
                                value: function () {
                                    var e = this,
                                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.apiKey,
                                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state.accessToken,
                                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state.hasValidApiKey,
                                        r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                                        o = this.props.setAttributes;
                                    this.setState({ apiKey: t, accessToken: n, isSaving: !0 });
                                    var i = new wp.api.models.Settings({ shareablock_api_key: JSON.stringify({ apiKey: t, accessToken: n, hasValidApiKey: a }) });
                                    i.save().then(function () {
                                        e.setState({ isSaving: !1, keySaved: !0 }), qR.fetch(), o({ hasApiKey: !0 }), r && e.onClose();
                                    });
                                },
                            },
                            {
                                key: "fetchDownloads",
                                value: function () {
                                    var e = this,
                                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.apiKey,
                                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state.accessToken;
                                    this.setState({ isLoading: !0 });
                                    var a = (function () {
                                        var a = $c()(
                                            Oc.a.mark(function a() {
                                                var r, o;
                                                return Oc.a.wrap(function (a) {
                                                    for (;;)
                                                        switch ((a.prev = a.next)) {
                                                            case 0:
                                                                return (a.next = 2), fetch("".concat(aO, "?key=").concat(t, "&token=").concat(n));
                                                            case 2:
                                                                return (r = a.sent), (a.next = 5), r.json();
                                                            case 5:
                                                                (o = a.sent) &&
                                                                    (void 0 !== o.error ? (e.setState({ error: o.error, isLoading: !1 }), e.saveApiKey(t, n, !1)) : (e.setState({ downloads: o, isLoading: !1 }), e.saveApiKey(t, n, !0)));
                                                            case 7:
                                                            case "end":
                                                                return a.stop();
                                                        }
                                                }, a);
                                            })
                                        );
                                        return function () {
                                            return a.apply(this, arguments);
                                        };
                                    })();
                                    a();
                                },
                            },
                            {
                                key: "filterDownloads",
                                value: function (e) {
                                    var t = this,
                                        n = {};
                                    "all" !== e
                                        ? (Object.entries(this.state.downloads.purchased_files)
                                              .filter(function (t) {
                                                  return -1 !== t[1].category.toLowerCase().search(e.toLowerCase());
                                              })
                                              .forEach(function (e) {
                                                  var a = nr()(e, 1)[0];
                                                  n[a] = t.state.downloads.purchased_files[a];
                                              }),
                                          this.setState({ filtered: { purchased_files: n } }))
                                        : this.setState({ filtered: {} });
                                },
                            },
                            {
                                key: "setIsInserting",
                                value: function (e) {
                                    this.setState({ isInserting: e });
                                },
                            },
                            {
                                key: "onClose",
                                value: function () {
                                    this.setState({ isOpen: !this.state.isOpen });
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this,
                                        t = this.props,
                                        n = t.attributes,
                                        a = t.isSelected,
                                        r = this.state,
                                        o = r.error,
                                        i = r.apiKey,
                                        c = r.accessToken,
                                        s = r.isLoading,
                                        h = r.isInserting,
                                        A = r.isOpen,
                                        l = r.downloads,
                                        L = r.filtered,
                                        I = r.hasValidApiKey,
                                        u = n.hasApiKey;
                                    return Object(E.createElement)(
                                        qp,
                                        null,
                                        a && Object(E.createElement)(Yp, T()({}, this.props, { apiKey: i, accessToken: c, hasValidApiKey: I, updateApiKeyCallBack: this.updateApiKey })),
                                        s
                                            ? Object(E.createElement)(Cp, null)
                                            : Object(E.createElement)(
                                                  eO,
                                                  { icon: "layout", label: Xp("ShareABlock from EditorsKit", "block-options"), instructions: Xp("Insert your downloads from shareablock.com at ease.", "block-options") },
                                                  Object(E.createElement)(
                                                      qp,
                                                      null,
                                                      o || (u && !I) ? Object(E.createElement)("div", { className: "editorskit-inline-error notice-error notice" }, Xp("Invalid API or Access Token.", "block-options")) : null,
                                                      A &&
                                                          Object(E.createElement)(Bp, {
                                                              clientId: this.props.clientId,
                                                              onClose: function () {
                                                                  e.onClose();
                                                              },
                                                              setIsInserting: function (t) {
                                                                  e.setIsInserting(t);
                                                              },
                                                              isInserting: h,
                                                              downloads: Object.keys(L).length > 0 ? L : l,
                                                              filterDownloads: function (t) {
                                                                  e.filterDownloads(t);
                                                              },
                                                          }),
                                                      i && c && I
                                                          ? Object(E.createElement)(
                                                                qp,
                                                                null,
                                                                Object(E.createElement)(
                                                                    nO,
                                                                    {
                                                                        isPrimary: !0,
                                                                        isLarge: !0,
                                                                        onClick: function () {
                                                                            e.updateApiKey();
                                                                        },
                                                                    },
                                                                    Xp("View Downloads", "block-options")
                                                                )
                                                            )
                                                          : Object(E.createElement)(
                                                                qp,
                                                                null,
                                                                Object(E.createElement)(tO, {
                                                                    value: i,
                                                                    label: Xp("API Settings", "block-options"),
                                                                    placeholder: Xp("Enter Public API Key…", "block-options"),
                                                                    onChange: function (t) {
                                                                        e.setState({ apiKey: t });
                                                                    },
                                                                }),
                                                                Object(E.createElement)(tO, {
                                                                    value: c,
                                                                    placeholder: Xp("Enter Access Token…", "block-options"),
                                                                    onChange: function (t) {
                                                                        e.setState({ accessToken: t });
                                                                    },
                                                                }),
                                                                Object(E.createElement)(
                                                                    nO,
                                                                    {
                                                                        isPrimary: !0,
                                                                        onClick: function () {
                                                                            e.updateApiKey();
                                                                        },
                                                                    },
                                                                    Xp("Apply & View Downloads", "block-options")
                                                                ),
                                                                Object(E.createElement)(nO, { isTertiary: !0, href: "https://shareablock.com/generate-api-key/", target: "_blank" }, Xp("Get API Key", "block-options"))
                                                            )
                                                  )
                                              )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(Jp)
            ),
            oO = wp.i18n.__,
            iO = dp.name,
            cO = dp.category,
            TO = dp.attributes,
            EO = {
                title: oO("ShareABlock", "block-options"),
                description: oO("Easily insert your downloads from shareablock.com", "block-options"),
                icon: "layout",
                keywords: [oO("template", "block-options"), oO("block patterns", "block-options"), oO("shareablock", "block-options")],
                attributes: TO,
                edit: rO,
                save: function () {
                    return null;
                },
            };
        function sO(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t &&
                    (a = a.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, a);
            }
            return n;
        }
        n.d(t, "registerBlocks", function () {
            return AO;
        });
        var hO = wp.blocks.registerBlockType;
        function AO() {
            [a, r].forEach(function (e) {
                if (e) {
                    var t = e.name,
                        n = e.settings,
                        a = e.category;
                    hO(
                        "editorskit/".concat(t),
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2
                                    ? sO(n, !0).forEach(function (t) {
                                          i()(e, t, n[t]);
                                      })
                                    : Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                    : sO(n).forEach(function (t) {
                                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                      });
                            }
                            return e;
                        })({ category: a }, n)
                    );
                }
            });
        }
        AO();
    },
]);
