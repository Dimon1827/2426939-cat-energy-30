// source/scripts/simplebar.js
!function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).SimpleBar = e();
}(void 0, function() {
  "use strict";
  var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
  function e(t2, e2) {
    return t2(e2 = { exports: {} }, e2.exports), e2.exports;
  }
  var r, n, i, o = "object", s = function(t2) {
    return t2 && t2.Math == Math && t2;
  }, a = s(typeof globalThis == o && globalThis) || s(typeof window == o && window) || s(typeof self == o && self) || s(typeof t == o && t) || Function("return this")(), c = function(t2) {
    try {
      return !!t2();
    } catch (t3) {
      return true;
    }
  }, l = !c(function() {
    return 7 != Object.defineProperty({}, "a", { get: function() {
      return 7;
    } }).a;
  }), u = {}.propertyIsEnumerable, f = Object.getOwnPropertyDescriptor, h = { f: f && !u.call({ 1: 2 }, 1) ? function(t2) {
    var e2 = f(this, t2);
    return !!e2 && e2.enumerable;
  } : u }, d = function(t2, e2) {
    return { enumerable: !(1 & t2), configurable: !(2 & t2), writable: !(4 & t2), value: e2 };
  }, p = {}.toString, v = function(t2) {
    return p.call(t2).slice(8, -1);
  }, g = "".split, y = c(function() {
    return !Object("z").propertyIsEnumerable(0);
  }) ? function(t2) {
    return "String" == v(t2) ? g.call(t2, "") : Object(t2);
  } : Object, b = function(t2) {
    if (null == t2)
      throw TypeError("Can't call method on " + t2);
    return t2;
  }, m = function(t2) {
    return y(b(t2));
  }, x = function(t2) {
    return "object" == typeof t2 ? null !== t2 : "function" == typeof t2;
  }, E = function(t2, e2) {
    if (!x(t2))
      return t2;
    var r2, n2;
    if (e2 && "function" == typeof (r2 = t2.toString) && !x(n2 = r2.call(t2)))
      return n2;
    if ("function" == typeof (r2 = t2.valueOf) && !x(n2 = r2.call(t2)))
      return n2;
    if (!e2 && "function" == typeof (r2 = t2.toString) && !x(n2 = r2.call(t2)))
      return n2;
    throw TypeError("Can't convert object to primitive value");
  }, w = {}.hasOwnProperty, O = function(t2, e2) {
    return w.call(t2, e2);
  }, _ = a.document, S = x(_) && x(_.createElement), A = function(t2) {
    return S ? _.createElement(t2) : {};
  }, k = !l && !c(function() {
    return 7 != Object.defineProperty(A("div"), "a", { get: function() {
      return 7;
    } }).a;
  }), L = Object.getOwnPropertyDescriptor, M = { f: l ? L : function(t2, e2) {
    if (t2 = m(t2), e2 = E(e2, true), k)
      try {
        return L(t2, e2);
      } catch (t3) {
      }
    if (O(t2, e2))
      return d(!h.f.call(t2, e2), t2[e2]);
  } }, T = function(t2) {
    if (!x(t2))
      throw TypeError(String(t2) + " is not an object");
    return t2;
  }, j = Object.defineProperty, R = { f: l ? j : function(t2, e2, r2) {
    if (T(t2), e2 = E(e2, true), T(r2), k)
      try {
        return j(t2, e2, r2);
      } catch (t3) {
      }
    if ("get" in r2 || "set" in r2)
      throw TypeError("Accessors not supported");
    return "value" in r2 && (t2[e2] = r2.value), t2;
  } }, W = l ? function(t2, e2, r2) {
    return R.f(t2, e2, d(1, r2));
  } : function(t2, e2, r2) {
    return t2[e2] = r2, t2;
  }, z = function(t2, e2) {
    try {
      W(a, t2, e2);
    } catch (r2) {
      a[t2] = e2;
    }
    return e2;
  }, C = e(function(t2) {
    var e2 = a["__core-js_shared__"] || z("__core-js_shared__", {});
    (t2.exports = function(t3, r2) {
      return e2[t3] || (e2[t3] = void 0 !== r2 ? r2 : {});
    })("versions", []).push({ version: "3.2.1", mode: "global", copyright: "\xA9 2019 Denis Pushkarev (zloirock.ru)" });
  }), N = C("native-function-to-string", Function.toString), I = a.WeakMap, D = "function" == typeof I && /native code/.test(N.call(I)), P = 0, V = Math.random(), F = function(t2) {
    return "Symbol(" + String(void 0 === t2 ? "" : t2) + ")_" + (++P + V).toString(36);
  }, B = C("keys"), H = function(t2) {
    return B[t2] || (B[t2] = F(t2));
  }, q = {}, $ = a.WeakMap;
  if (D) {
    var X = new $(), Y = X.get, G = X.has, U = X.set;
    r = function(t2, e2) {
      return U.call(X, t2, e2), e2;
    }, n = function(t2) {
      return Y.call(X, t2) || {};
    }, i = function(t2) {
      return G.call(X, t2);
    };
  } else {
    var Q = H("state");
    q[Q] = true, r = function(t2, e2) {
      return W(t2, Q, e2), e2;
    }, n = function(t2) {
      return O(t2, Q) ? t2[Q] : {};
    }, i = function(t2) {
      return O(t2, Q);
    };
  }
  var K = { set: r, get: n, has: i, enforce: function(t2) {
    return i(t2) ? n(t2) : r(t2, {});
  }, getterFor: function(t2) {
    return function(e2) {
      var r2;
      if (!x(e2) || (r2 = n(e2)).type !== t2)
        throw TypeError("Incompatible receiver, " + t2 + " required");
      return r2;
    };
  } }, J = e(function(t2) {
    var e2 = K.get, r2 = K.enforce, n2 = String(N).split("toString");
    C("inspectSource", function(t3) {
      return N.call(t3);
    }), (t2.exports = function(t3, e3, i2, o2) {
      var s2 = !!o2 && !!o2.unsafe, c2 = !!o2 && !!o2.enumerable, l2 = !!o2 && !!o2.noTargetGet;
      "function" == typeof i2 && ("string" != typeof e3 || O(i2, "name") || W(i2, "name", e3), r2(i2).source = n2.join("string" == typeof e3 ? e3 : "")), t3 !== a ? (s2 ? !l2 && t3[e3] && (c2 = true) : delete t3[e3], c2 ? t3[e3] = i2 : W(t3, e3, i2)) : c2 ? t3[e3] = i2 : z(e3, i2);
    })(Function.prototype, "toString", function() {
      return "function" == typeof this && e2(this).source || N.call(this);
    });
  }), Z = a, tt = function(t2) {
    return "function" == typeof t2 ? t2 : void 0;
  }, et = function(t2, e2) {
    return arguments.length < 2 ? tt(Z[t2]) || tt(a[t2]) : Z[t2] && Z[t2][e2] || a[t2] && a[t2][e2];
  }, rt = Math.ceil, nt = Math.floor, it = function(t2) {
    return isNaN(t2 = +t2) ? 0 : (t2 > 0 ? nt : rt)(t2);
  }, ot = Math.min, st = function(t2) {
    return t2 > 0 ? ot(it(t2), 9007199254740991) : 0;
  }, at = Math.max, ct = Math.min, lt = function(t2) {
    return function(e2, r2, n2) {
      var i2, o2 = m(e2), s2 = st(o2.length), a2 = function(t3, e3) {
        var r3 = it(t3);
        return r3 < 0 ? at(r3 + e3, 0) : ct(r3, e3);
      }(n2, s2);
      if (t2 && r2 != r2) {
        for (; s2 > a2; )
          if ((i2 = o2[a2++]) != i2)
            return true;
      } else
        for (; s2 > a2; a2++)
          if ((t2 || a2 in o2) && o2[a2] === r2)
            return t2 || a2 || 0;
      return !t2 && -1;
    };
  }, ut = { includes: lt(true), indexOf: lt(false) }.indexOf, ft = function(t2, e2) {
    var r2, n2 = m(t2), i2 = 0, o2 = [];
    for (r2 in n2)
      !O(q, r2) && O(n2, r2) && o2.push(r2);
    for (; e2.length > i2; )
      O(n2, r2 = e2[i2++]) && (~ut(o2, r2) || o2.push(r2));
    return o2;
  }, ht = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], dt = ht.concat("length", "prototype"), pt = { f: Object.getOwnPropertyNames || function(t2) {
    return ft(t2, dt);
  } }, vt = { f: Object.getOwnPropertySymbols }, gt = et("Reflect", "ownKeys") || function(t2) {
    var e2 = pt.f(T(t2)), r2 = vt.f;
    return r2 ? e2.concat(r2(t2)) : e2;
  }, yt = function(t2, e2) {
    for (var r2 = gt(e2), n2 = R.f, i2 = M.f, o2 = 0; o2 < r2.length; o2++) {
      var s2 = r2[o2];
      O(t2, s2) || n2(t2, s2, i2(e2, s2));
    }
  }, bt = /#|\.prototype\./, mt = function(t2, e2) {
    var r2 = Et[xt(t2)];
    return r2 == Ot || r2 != wt && ("function" == typeof e2 ? c(e2) : !!e2);
  }, xt = mt.normalize = function(t2) {
    return String(t2).replace(bt, ".").toLowerCase();
  }, Et = mt.data = {}, wt = mt.NATIVE = "N", Ot = mt.POLYFILL = "P", _t = mt, St = M.f, At = function(t2, e2) {
    var r2, n2, i2, o2, s2, c2 = t2.target, l2 = t2.global, u2 = t2.stat;
    if (r2 = l2 ? a : u2 ? a[c2] || z(c2, {}) : (a[c2] || {}).prototype)
      for (n2 in e2) {
        if (o2 = e2[n2], i2 = t2.noTargetGet ? (s2 = St(r2, n2)) && s2.value : r2[n2], !_t(l2 ? n2 : c2 + (u2 ? "." : "#") + n2, t2.forced) && void 0 !== i2) {
          if (typeof o2 == typeof i2)
            continue;
          yt(o2, i2);
        }
        (t2.sham || i2 && i2.sham) && W(o2, "sham", true), J(r2, n2, o2, t2);
      }
  }, kt = function(t2) {
    if ("function" != typeof t2)
      throw TypeError(String(t2) + " is not a function");
    return t2;
  }, Lt = function(t2, e2, r2) {
    if (kt(t2), void 0 === e2)
      return t2;
    switch (r2) {
      case 0:
        return function() {
          return t2.call(e2);
        };
      case 1:
        return function(r3) {
          return t2.call(e2, r3);
        };
      case 2:
        return function(r3, n2) {
          return t2.call(e2, r3, n2);
        };
      case 3:
        return function(r3, n2, i2) {
          return t2.call(e2, r3, n2, i2);
        };
    }
    return function() {
      return t2.apply(e2, arguments);
    };
  }, Mt = function(t2) {
    return Object(b(t2));
  }, Tt = Array.isArray || function(t2) {
    return "Array" == v(t2);
  }, jt = !!Object.getOwnPropertySymbols && !c(function() {
    return !String(Symbol());
  }), Rt = a.Symbol, Wt = C("wks"), zt = function(t2) {
    return Wt[t2] || (Wt[t2] = jt && Rt[t2] || (jt ? Rt : F)("Symbol." + t2));
  }, Ct = zt("species"), Nt = function(t2, e2) {
    var r2;
    return Tt(t2) && ("function" != typeof (r2 = t2.constructor) || r2 !== Array && !Tt(r2.prototype) ? x(r2) && null === (r2 = r2[Ct]) && (r2 = void 0) : r2 = void 0), new (void 0 === r2 ? Array : r2)(0 === e2 ? 0 : e2);
  }, It = [].push, Dt = function(t2) {
    var e2 = 1 == t2, r2 = 2 == t2, n2 = 3 == t2, i2 = 4 == t2, o2 = 6 == t2, s2 = 5 == t2 || o2;
    return function(a2, c2, l2, u2) {
      for (var f2, h2, d2 = Mt(a2), p2 = y(d2), v2 = Lt(c2, l2, 3), g2 = st(p2.length), b2 = 0, m2 = u2 || Nt, x2 = e2 ? m2(a2, g2) : r2 ? m2(a2, 0) : void 0; g2 > b2; b2++)
        if ((s2 || b2 in p2) && (h2 = v2(f2 = p2[b2], b2, d2), t2)) {
          if (e2)
            x2[b2] = h2;
          else if (h2)
            switch (t2) {
              case 3:
                return true;
              case 5:
                return f2;
              case 6:
                return b2;
              case 2:
                It.call(x2, f2);
            }
          else if (i2)
            return false;
        }
      return o2 ? -1 : n2 || i2 ? i2 : x2;
    };
  }, Pt = { forEach: Dt(0), map: Dt(1), filter: Dt(2), some: Dt(3), every: Dt(4), find: Dt(5), findIndex: Dt(6) }, Vt = function(t2, e2) {
    var r2 = [][t2];
    return !r2 || !c(function() {
      r2.call(null, e2 || function() {
        throw 1;
      }, 1);
    });
  }, Ft = Pt.forEach, Bt = Vt("forEach") ? function(t2) {
    return Ft(this, t2, arguments.length > 1 ? arguments[1] : void 0);
  } : [].forEach;
  At({ target: "Array", proto: true, forced: [].forEach != Bt }, { forEach: Bt });
  var Ht = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 };
  for (var qt in Ht) {
    var $t = a[qt], Xt = $t && $t.prototype;
    if (Xt && Xt.forEach !== Bt)
      try {
        W(Xt, "forEach", Bt);
      } catch (t2) {
        Xt.forEach = Bt;
      }
  }
  var Yt = !("undefined" == typeof window || !window.document || !window.document.createElement), Gt = zt("species"), Ut = Pt.filter;
  At({ target: "Array", proto: true, forced: !function(t2) {
    return !c(function() {
      var e2 = [];
      return (e2.constructor = {})[Gt] = function() {
        return { foo: 1 };
      }, 1 !== e2[t2](Boolean).foo;
    });
  }("filter") }, { filter: function(t2) {
    return Ut(this, t2, arguments.length > 1 ? arguments[1] : void 0);
  } });
  var Qt = Object.keys || function(t2) {
    return ft(t2, ht);
  }, Kt = l ? Object.defineProperties : function(t2, e2) {
    T(t2);
    for (var r2, n2 = Qt(e2), i2 = n2.length, o2 = 0; i2 > o2; )
      R.f(t2, r2 = n2[o2++], e2[r2]);
    return t2;
  }, Jt = et("document", "documentElement"), Zt = H("IE_PROTO"), te = function() {
  }, ee = function() {
    var t2, e2 = A("iframe"), r2 = ht.length;
    for (e2.style.display = "none", Jt.appendChild(e2), e2.src = String("javascript:"), (t2 = e2.contentWindow.document).open(), t2.write("<script>document.F=Object<\/script>"), t2.close(), ee = t2.F; r2--; )
      delete ee.prototype[ht[r2]];
    return ee();
  }, re = Object.create || function(t2, e2) {
    var r2;
    return null !== t2 ? (te.prototype = T(t2), r2 = new te(), te.prototype = null, r2[Zt] = t2) : r2 = ee(), void 0 === e2 ? r2 : Kt(r2, e2);
  };
  q[Zt] = true;
  var ne = zt("unscopables"), ie = Array.prototype;
  null == ie[ne] && W(ie, ne, re(null));
  var oe, se, ae, ce = function(t2) {
    ie[ne][t2] = true;
  }, le = {}, ue = !c(function() {
    function t2() {
    }
    return t2.prototype.constructor = null, Object.getPrototypeOf(new t2()) !== t2.prototype;
  }), fe = H("IE_PROTO"), he = Object.prototype, de = ue ? Object.getPrototypeOf : function(t2) {
    return t2 = Mt(t2), O(t2, fe) ? t2[fe] : "function" == typeof t2.constructor && t2 instanceof t2.constructor ? t2.constructor.prototype : t2 instanceof Object ? he : null;
  }, pe = zt("iterator"), ve = false;
  [].keys && ("next" in (ae = [].keys()) ? (se = de(de(ae))) !== Object.prototype && (oe = se) : ve = true), null == oe && (oe = {}), O(oe, pe) || W(oe, pe, function() {
    return this;
  });
  var ge = { IteratorPrototype: oe, BUGGY_SAFARI_ITERATORS: ve }, ye = R.f, be = zt("toStringTag"), me = function(t2, e2, r2) {
    t2 && !O(t2 = r2 ? t2 : t2.prototype, be) && ye(t2, be, { configurable: true, value: e2 });
  }, xe = ge.IteratorPrototype, Ee = function() {
    return this;
  }, we = Object.setPrototypeOf || ("__proto__" in {} ? function() {
    var t2, e2 = false, r2 = {};
    try {
      (t2 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r2, []), e2 = r2 instanceof Array;
    } catch (t3) {
    }
    return function(r3, n2) {
      return T(r3), function(t3) {
        if (!x(t3) && null !== t3)
          throw TypeError("Can't set " + String(t3) + " as a prototype");
      }(n2), e2 ? t2.call(r3, n2) : r3.__proto__ = n2, r3;
    };
  }() : void 0), Oe = ge.IteratorPrototype, _e = ge.BUGGY_SAFARI_ITERATORS, Se = zt("iterator"), Ae = function() {
    return this;
  }, ke = function(t2, e2, r2, n2, i2, o2, s2) {
    !function(t3, e3, r3) {
      var n3 = e3 + " Iterator";
      t3.prototype = re(xe, { next: d(1, r3) }), me(t3, n3, false), le[n3] = Ee;
    }(r2, e2, n2);
    var a2, c2, l2, u2 = function(t3) {
      if (t3 === i2 && g2)
        return g2;
      if (!_e && t3 in p2)
        return p2[t3];
      switch (t3) {
        case "keys":
        case "values":
        case "entries":
          return function() {
            return new r2(this, t3);
          };
      }
      return function() {
        return new r2(this);
      };
    }, f2 = e2 + " Iterator", h2 = false, p2 = t2.prototype, v2 = p2[Se] || p2["@@iterator"] || i2 && p2[i2], g2 = !_e && v2 || u2(i2), y2 = "Array" == e2 && p2.entries || v2;
    if (y2 && (a2 = de(y2.call(new t2())), Oe !== Object.prototype && a2.next && (de(a2) !== Oe && (we ? we(a2, Oe) : "function" != typeof a2[Se] && W(a2, Se, Ae)), me(a2, f2, true))), "values" == i2 && v2 && "values" !== v2.name && (h2 = true, g2 = function() {
      return v2.call(this);
    }), p2[Se] !== g2 && W(p2, Se, g2), le[e2] = g2, i2)
      if (c2 = { values: u2("values"), keys: o2 ? g2 : u2("keys"), entries: u2("entries") }, s2)
        for (l2 in c2)
          !_e && !h2 && l2 in p2 || J(p2, l2, c2[l2]);
      else
        At({ target: e2, proto: true, forced: _e || h2 }, c2);
    return c2;
  }, Le = K.set, Me = K.getterFor("Array Iterator"), Te = ke(Array, "Array", function(t2, e2) {
    Le(this, { type: "Array Iterator", target: m(t2), index: 0, kind: e2 });
  }, function() {
    var t2 = Me(this), e2 = t2.target, r2 = t2.kind, n2 = t2.index++;
    return !e2 || n2 >= e2.length ? (t2.target = void 0, { value: void 0, done: true }) : "keys" == r2 ? { value: n2, done: false } : "values" == r2 ? { value: e2[n2], done: false } : { value: [n2, e2[n2]], done: false };
  }, "values");
  le.Arguments = le.Array, ce("keys"), ce("values"), ce("entries");
  var je = Object.assign, Re = !je || c(function() {
    var t2 = {}, e2 = {}, r2 = Symbol();
    return t2[r2] = 7, "abcdefghijklmnopqrst".split("").forEach(function(t3) {
      e2[t3] = t3;
    }), 7 != je({}, t2)[r2] || "abcdefghijklmnopqrst" != Qt(je({}, e2)).join("");
  }) ? function(t2, e2) {
    for (var r2 = Mt(t2), n2 = arguments.length, i2 = 1, o2 = vt.f, s2 = h.f; n2 > i2; )
      for (var a2, c2 = y(arguments[i2++]), u2 = o2 ? Qt(c2).concat(o2(c2)) : Qt(c2), f2 = u2.length, d2 = 0; f2 > d2; )
        a2 = u2[d2++], l && !s2.call(c2, a2) || (r2[a2] = c2[a2]);
    return r2;
  } : je;
  At({ target: "Object", stat: true, forced: Object.assign !== Re }, { assign: Re });
  var We = zt("toStringTag"), ze = "Arguments" == v(/* @__PURE__ */ function() {
    return arguments;
  }()), Ce = function(t2) {
    var e2, r2, n2;
    return void 0 === t2 ? "Undefined" : null === t2 ? "Null" : "string" == typeof (r2 = function(t3, e3) {
      try {
        return t3[e3];
      } catch (t4) {
      }
    }(e2 = Object(t2), We)) ? r2 : ze ? v(e2) : "Object" == (n2 = v(e2)) && "function" == typeof e2.callee ? "Arguments" : n2;
  }, Ne = {};
  Ne[zt("toStringTag")] = "z";
  var Ie = "[object z]" !== String(Ne) ? function() {
    return "[object " + Ce(this) + "]";
  } : Ne.toString, De = Object.prototype;
  Ie !== De.toString && J(De, "toString", Ie, { unsafe: true });
  var Pe = "	\n\v\f\r  \u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF", Ve = "[" + Pe + "]", Fe = RegExp("^" + Ve + Ve + "*"), Be = RegExp(Ve + Ve + "*$"), He = function(t2) {
    return function(e2) {
      var r2 = String(b(e2));
      return 1 & t2 && (r2 = r2.replace(Fe, "")), 2 & t2 && (r2 = r2.replace(Be, "")), r2;
    };
  }, qe = { start: He(1), end: He(2), trim: He(3) }.trim, $e = a.parseInt, Xe = /^[+-]?0[Xx]/, Ye = 8 !== $e(Pe + "08") || 22 !== $e(Pe + "0x16") ? function(t2, e2) {
    var r2 = qe(String(t2));
    return $e(r2, e2 >>> 0 || (Xe.test(r2) ? 16 : 10));
  } : $e;
  At({ global: true, forced: parseInt != Ye }, { parseInt: Ye });
  var Ge = function(t2) {
    return function(e2, r2) {
      var n2, i2, o2 = String(b(e2)), s2 = it(r2), a2 = o2.length;
      return s2 < 0 || s2 >= a2 ? t2 ? "" : void 0 : (n2 = o2.charCodeAt(s2)) < 55296 || n2 > 56319 || s2 + 1 === a2 || (i2 = o2.charCodeAt(s2 + 1)) < 56320 || i2 > 57343 ? t2 ? o2.charAt(s2) : n2 : t2 ? o2.slice(s2, s2 + 2) : i2 - 56320 + (n2 - 55296 << 10) + 65536;
    };
  }, Ue = { codeAt: Ge(false), charAt: Ge(true) }, Qe = Ue.charAt, Ke = K.set, Je = K.getterFor("String Iterator");
  ke(String, "String", function(t2) {
    Ke(this, { type: "String Iterator", string: String(t2), index: 0 });
  }, function() {
    var t2, e2 = Je(this), r2 = e2.string, n2 = e2.index;
    return n2 >= r2.length ? { value: void 0, done: true } : (t2 = Qe(r2, n2), e2.index += t2.length, { value: t2, done: false });
  });
  var Ze = function(t2, e2, r2) {
    for (var n2 in e2)
      J(t2, n2, e2[n2], r2);
    return t2;
  }, tr = !c(function() {
    return Object.isExtensible(Object.preventExtensions({}));
  }), er = e(function(t2) {
    var e2 = R.f, r2 = F("meta"), n2 = 0, i2 = Object.isExtensible || function() {
      return true;
    }, o2 = function(t3) {
      e2(t3, r2, { value: { objectID: "O" + ++n2, weakData: {} } });
    }, s2 = t2.exports = { REQUIRED: false, fastKey: function(t3, e3) {
      if (!x(t3))
        return "symbol" == typeof t3 ? t3 : ("string" == typeof t3 ? "S" : "P") + t3;
      if (!O(t3, r2)) {
        if (!i2(t3))
          return "F";
        if (!e3)
          return "E";
        o2(t3);
      }
      return t3[r2].objectID;
    }, getWeakData: function(t3, e3) {
      if (!O(t3, r2)) {
        if (!i2(t3))
          return true;
        if (!e3)
          return false;
        o2(t3);
      }
      return t3[r2].weakData;
    }, onFreeze: function(t3) {
      return tr && s2.REQUIRED && i2(t3) && !O(t3, r2) && o2(t3), t3;
    } };
    q[r2] = true;
  }), rr = (er.REQUIRED, er.fastKey, er.getWeakData, er.onFreeze, zt("iterator")), nr = Array.prototype, ir = zt("iterator"), or = function(t2, e2, r2, n2) {
    try {
      return n2 ? e2(T(r2)[0], r2[1]) : e2(r2);
    } catch (e3) {
      var i2 = t2.return;
      throw void 0 !== i2 && T(i2.call(t2)), e3;
    }
  }, sr = e(function(t2) {
    var e2 = function(t3, e3) {
      this.stopped = t3, this.result = e3;
    };
    (t2.exports = function(t3, r2, n2, i2, o2) {
      var s2, a2, c2, l2, u2, f2, h2, d2 = Lt(r2, n2, i2 ? 2 : 1);
      if (o2)
        s2 = t3;
      else {
        if ("function" != typeof (a2 = function(t4) {
          if (null != t4)
            return t4[ir] || t4["@@iterator"] || le[Ce(t4)];
        }(t3)))
          throw TypeError("Target is not iterable");
        if (void 0 !== (h2 = a2) && (le.Array === h2 || nr[rr] === h2)) {
          for (c2 = 0, l2 = st(t3.length); l2 > c2; c2++)
            if ((u2 = i2 ? d2(T(f2 = t3[c2])[0], f2[1]) : d2(t3[c2])) && u2 instanceof e2)
              return u2;
          return new e2(false);
        }
        s2 = a2.call(t3);
      }
      for (; !(f2 = s2.next()).done; )
        if ((u2 = or(s2, d2, f2.value, i2)) && u2 instanceof e2)
          return u2;
      return new e2(false);
    }).stop = function(t3) {
      return new e2(true, t3);
    };
  }), ar = function(t2, e2, r2) {
    if (!(t2 instanceof e2))
      throw TypeError("Incorrect " + (r2 ? r2 + " " : "") + "invocation");
    return t2;
  }, cr = zt("iterator"), lr = false;
  try {
    var ur = 0, fr = { next: function() {
      return { done: !!ur++ };
    }, return: function() {
      lr = true;
    } };
    fr[cr] = function() {
      return this;
    }, Array.from(fr, function() {
      throw 2;
    });
  } catch (t2) {
  }
  var hr = function(t2, e2, r2, n2, i2) {
    var o2 = a[t2], s2 = o2 && o2.prototype, l2 = o2, u2 = n2 ? "set" : "add", f2 = {}, h2 = function(t3) {
      var e3 = s2[t3];
      J(s2, t3, "add" == t3 ? function(t4) {
        return e3.call(this, 0 === t4 ? 0 : t4), this;
      } : "delete" == t3 ? function(t4) {
        return !(i2 && !x(t4)) && e3.call(this, 0 === t4 ? 0 : t4);
      } : "get" == t3 ? function(t4) {
        return i2 && !x(t4) ? void 0 : e3.call(this, 0 === t4 ? 0 : t4);
      } : "has" == t3 ? function(t4) {
        return !(i2 && !x(t4)) && e3.call(this, 0 === t4 ? 0 : t4);
      } : function(t4, r3) {
        return e3.call(this, 0 === t4 ? 0 : t4, r3), this;
      });
    };
    if (_t(t2, "function" != typeof o2 || !(i2 || s2.forEach && !c(function() {
      new o2().entries().next();
    }))))
      l2 = r2.getConstructor(e2, t2, n2, u2), er.REQUIRED = true;
    else if (_t(t2, true)) {
      var d2 = new l2(), p2 = d2[u2](i2 ? {} : -0, 1) != d2, v2 = c(function() {
        d2.has(1);
      }), g2 = function(t3, e3) {
        if (!e3 && !lr)
          return false;
        var r3 = false;
        try {
          var n3 = {};
          n3[cr] = function() {
            return { next: function() {
              return { done: r3 = true };
            } };
          }, t3(n3);
        } catch (t4) {
        }
        return r3;
      }(function(t3) {
        new o2(t3);
      }), y2 = !i2 && c(function() {
        for (var t3 = new o2(), e3 = 5; e3--; )
          t3[u2](e3, e3);
        return !t3.has(-0);
      });
      g2 || ((l2 = e2(function(e3, r3) {
        ar(e3, l2, t2);
        var i3 = function(t3, e4, r4) {
          var n3, i4;
          return we && "function" == typeof (n3 = e4.constructor) && n3 !== r4 && x(i4 = n3.prototype) && i4 !== r4.prototype && we(t3, i4), t3;
        }(new o2(), e3, l2);
        return null != r3 && sr(r3, i3[u2], i3, n2), i3;
      })).prototype = s2, s2.constructor = l2), (v2 || y2) && (h2("delete"), h2("has"), n2 && h2("get")), (y2 || p2) && h2(u2), i2 && s2.clear && delete s2.clear;
    }
    return f2[t2] = l2, At({ global: true, forced: l2 != o2 }, f2), me(l2, t2), i2 || r2.setStrong(l2, t2, n2), l2;
  }, dr = er.getWeakData, pr = K.set, vr = K.getterFor, gr = Pt.find, yr = Pt.findIndex, br = 0, mr = function(t2) {
    return t2.frozen || (t2.frozen = new xr());
  }, xr = function() {
    this.entries = [];
  }, Er = function(t2, e2) {
    return gr(t2.entries, function(t3) {
      return t3[0] === e2;
    });
  };
  xr.prototype = { get: function(t2) {
    var e2 = Er(this, t2);
    if (e2)
      return e2[1];
  }, has: function(t2) {
    return !!Er(this, t2);
  }, set: function(t2, e2) {
    var r2 = Er(this, t2);
    r2 ? r2[1] = e2 : this.entries.push([t2, e2]);
  }, delete: function(t2) {
    var e2 = yr(this.entries, function(e3) {
      return e3[0] === t2;
    });
    return ~e2 && this.entries.splice(e2, 1), !!~e2;
  } };
  var wr = { getConstructor: function(t2, e2, r2, n2) {
    var i2 = t2(function(t3, o3) {
      ar(t3, i2, e2), pr(t3, { type: e2, id: br++, frozen: void 0 }), null != o3 && sr(o3, t3[n2], t3, r2);
    }), o2 = vr(e2), s2 = function(t3, e3, r3) {
      var n3 = o2(t3), i3 = dr(T(e3), true);
      return true === i3 ? mr(n3).set(e3, r3) : i3[n3.id] = r3, t3;
    };
    return Ze(i2.prototype, { delete: function(t3) {
      var e3 = o2(this);
      if (!x(t3))
        return false;
      var r3 = dr(t3);
      return true === r3 ? mr(e3).delete(t3) : r3 && O(r3, e3.id) && delete r3[e3.id];
    }, has: function(t3) {
      var e3 = o2(this);
      if (!x(t3))
        return false;
      var r3 = dr(t3);
      return true === r3 ? mr(e3).has(t3) : r3 && O(r3, e3.id);
    } }), Ze(i2.prototype, r2 ? { get: function(t3) {
      var e3 = o2(this);
      if (x(t3)) {
        var r3 = dr(t3);
        return true === r3 ? mr(e3).get(t3) : r3 ? r3[e3.id] : void 0;
      }
    }, set: function(t3, e3) {
      return s2(this, t3, e3);
    } } : { add: function(t3) {
      return s2(this, t3, true);
    } }), i2;
  } }, Or = (e(function(t2) {
    var e2, r2 = K.enforce, n2 = !a.ActiveXObject && "ActiveXObject" in a, i2 = Object.isExtensible, o2 = function(t3) {
      return function() {
        return t3(this, arguments.length ? arguments[0] : void 0);
      };
    }, s2 = t2.exports = hr("WeakMap", o2, wr, true, true);
    if (D && n2) {
      e2 = wr.getConstructor(o2, "WeakMap", true), er.REQUIRED = true;
      var c2 = s2.prototype, l2 = c2.delete, u2 = c2.has, f2 = c2.get, h2 = c2.set;
      Ze(c2, { delete: function(t3) {
        if (x(t3) && !i2(t3)) {
          var n3 = r2(this);
          return n3.frozen || (n3.frozen = new e2()), l2.call(this, t3) || n3.frozen.delete(t3);
        }
        return l2.call(this, t3);
      }, has: function(t3) {
        if (x(t3) && !i2(t3)) {
          var n3 = r2(this);
          return n3.frozen || (n3.frozen = new e2()), u2.call(this, t3) || n3.frozen.has(t3);
        }
        return u2.call(this, t3);
      }, get: function(t3) {
        if (x(t3) && !i2(t3)) {
          var n3 = r2(this);
          return n3.frozen || (n3.frozen = new e2()), u2.call(this, t3) ? f2.call(this, t3) : n3.frozen.get(t3);
        }
        return f2.call(this, t3);
      }, set: function(t3, n3) {
        if (x(t3) && !i2(t3)) {
          var o3 = r2(this);
          o3.frozen || (o3.frozen = new e2()), u2.call(this, t3) ? h2.call(this, t3, n3) : o3.frozen.set(t3, n3);
        } else
          h2.call(this, t3, n3);
        return this;
      } });
    }
  }), zt("iterator")), _r = zt("toStringTag"), Sr = Te.values;
  for (var Ar in Ht) {
    var kr = a[Ar], Lr = kr && kr.prototype;
    if (Lr) {
      if (Lr[Or] !== Sr)
        try {
          W(Lr, Or, Sr);
        } catch (t2) {
          Lr[Or] = Sr;
        }
      if (Lr[_r] || W(Lr, _r, Ar), Ht[Ar]) {
        for (var Mr in Te)
          if (Lr[Mr] !== Te[Mr])
            try {
              W(Lr, Mr, Te[Mr]);
            } catch (t2) {
              Lr[Mr] = Te[Mr];
            }
      }
    }
  }
  var Tr = "Expected a function", jr = NaN, Rr = "[object Symbol]", Wr = /^\s+|\s+$/g, zr = /^[-+]0x[0-9a-f]+$/i, Cr = /^0b[01]+$/i, Nr = /^0o[0-7]+$/i, Ir = parseInt, Dr = "object" == typeof t && t && t.Object === Object && t, Pr = "object" == typeof self && self && self.Object === Object && self, Vr = Dr || Pr || Function("return this")(), Fr = Object.prototype.toString, Br = Math.max, Hr = Math.min, qr = function() {
    return Vr.Date.now();
  };
  function $r(t2, e2, r2) {
    var n2, i2, o2, s2, a2, c2, l2 = 0, u2 = false, f2 = false, h2 = true;
    if ("function" != typeof t2)
      throw new TypeError(Tr);
    function d2(e3) {
      var r3 = n2, o3 = i2;
      return n2 = i2 = void 0, l2 = e3, s2 = t2.apply(o3, r3);
    }
    function p2(t3) {
      var r3 = t3 - c2;
      return void 0 === c2 || r3 >= e2 || r3 < 0 || f2 && t3 - l2 >= o2;
    }
    function v2() {
      var t3 = qr();
      if (p2(t3))
        return g2(t3);
      a2 = setTimeout(v2, function(t4) {
        var r3 = e2 - (t4 - c2);
        return f2 ? Hr(r3, o2 - (t4 - l2)) : r3;
      }(t3));
    }
    function g2(t3) {
      return a2 = void 0, h2 && n2 ? d2(t3) : (n2 = i2 = void 0, s2);
    }
    function y2() {
      var t3 = qr(), r3 = p2(t3);
      if (n2 = arguments, i2 = this, c2 = t3, r3) {
        if (void 0 === a2)
          return function(t4) {
            return l2 = t4, a2 = setTimeout(v2, e2), u2 ? d2(t4) : s2;
          }(c2);
        if (f2)
          return a2 = setTimeout(v2, e2), d2(c2);
      }
      return void 0 === a2 && (a2 = setTimeout(v2, e2)), s2;
    }
    return e2 = Yr(e2) || 0, Xr(r2) && (u2 = !!r2.leading, o2 = (f2 = "maxWait" in r2) ? Br(Yr(r2.maxWait) || 0, e2) : o2, h2 = "trailing" in r2 ? !!r2.trailing : h2), y2.cancel = function() {
      void 0 !== a2 && clearTimeout(a2), l2 = 0, n2 = c2 = i2 = a2 = void 0;
    }, y2.flush = function() {
      return void 0 === a2 ? s2 : g2(qr());
    }, y2;
  }
  function Xr(t2) {
    var e2 = typeof t2;
    return !!t2 && ("object" == e2 || "function" == e2);
  }
  function Yr(t2) {
    if ("number" == typeof t2)
      return t2;
    if (function(t3) {
      return "symbol" == typeof t3 || /* @__PURE__ */ function(t4) {
        return !!t4 && "object" == typeof t4;
      }(t3) && Fr.call(t3) == Rr;
    }(t2))
      return jr;
    if (Xr(t2)) {
      var e2 = "function" == typeof t2.valueOf ? t2.valueOf() : t2;
      t2 = Xr(e2) ? e2 + "" : e2;
    }
    if ("string" != typeof t2)
      return 0 === t2 ? t2 : +t2;
    t2 = t2.replace(Wr, "");
    var r2 = Cr.test(t2);
    return r2 || Nr.test(t2) ? Ir(t2.slice(2), r2 ? 2 : 8) : zr.test(t2) ? jr : +t2;
  }
  var Gr = function(t2, e2, r2) {
    var n2 = true, i2 = true;
    if ("function" != typeof t2)
      throw new TypeError(Tr);
    return Xr(r2) && (n2 = "leading" in r2 ? !!r2.leading : n2, i2 = "trailing" in r2 ? !!r2.trailing : i2), $r(t2, e2, { leading: n2, maxWait: e2, trailing: i2 });
  }, Ur = "Expected a function", Qr = NaN, Kr = "[object Symbol]", Jr = /^\s+|\s+$/g, Zr = /^[-+]0x[0-9a-f]+$/i, tn = /^0b[01]+$/i, en = /^0o[0-7]+$/i, rn = parseInt, nn = "object" == typeof t && t && t.Object === Object && t, on = "object" == typeof self && self && self.Object === Object && self, sn = nn || on || Function("return this")(), an = Object.prototype.toString, cn = Math.max, ln = Math.min, un = function() {
    return sn.Date.now();
  };
  function fn(t2) {
    var e2 = typeof t2;
    return !!t2 && ("object" == e2 || "function" == e2);
  }
  function hn(t2) {
    if ("number" == typeof t2)
      return t2;
    if (function(t3) {
      return "symbol" == typeof t3 || /* @__PURE__ */ function(t4) {
        return !!t4 && "object" == typeof t4;
      }(t3) && an.call(t3) == Kr;
    }(t2))
      return Qr;
    if (fn(t2)) {
      var e2 = "function" == typeof t2.valueOf ? t2.valueOf() : t2;
      t2 = fn(e2) ? e2 + "" : e2;
    }
    if ("string" != typeof t2)
      return 0 === t2 ? t2 : +t2;
    t2 = t2.replace(Jr, "");
    var r2 = tn.test(t2);
    return r2 || en.test(t2) ? rn(t2.slice(2), r2 ? 2 : 8) : Zr.test(t2) ? Qr : +t2;
  }
  var dn = function(t2, e2, r2) {
    var n2, i2, o2, s2, a2, c2, l2 = 0, u2 = false, f2 = false, h2 = true;
    if ("function" != typeof t2)
      throw new TypeError(Ur);
    function d2(e3) {
      var r3 = n2, o3 = i2;
      return n2 = i2 = void 0, l2 = e3, s2 = t2.apply(o3, r3);
    }
    function p2(t3) {
      var r3 = t3 - c2;
      return void 0 === c2 || r3 >= e2 || r3 < 0 || f2 && t3 - l2 >= o2;
    }
    function v2() {
      var t3 = un();
      if (p2(t3))
        return g2(t3);
      a2 = setTimeout(v2, function(t4) {
        var r3 = e2 - (t4 - c2);
        return f2 ? ln(r3, o2 - (t4 - l2)) : r3;
      }(t3));
    }
    function g2(t3) {
      return a2 = void 0, h2 && n2 ? d2(t3) : (n2 = i2 = void 0, s2);
    }
    function y2() {
      var t3 = un(), r3 = p2(t3);
      if (n2 = arguments, i2 = this, c2 = t3, r3) {
        if (void 0 === a2)
          return function(t4) {
            return l2 = t4, a2 = setTimeout(v2, e2), u2 ? d2(t4) : s2;
          }(c2);
        if (f2)
          return a2 = setTimeout(v2, e2), d2(c2);
      }
      return void 0 === a2 && (a2 = setTimeout(v2, e2)), s2;
    }
    return e2 = hn(e2) || 0, fn(r2) && (u2 = !!r2.leading, o2 = (f2 = "maxWait" in r2) ? cn(hn(r2.maxWait) || 0, e2) : o2, h2 = "trailing" in r2 ? !!r2.trailing : h2), y2.cancel = function() {
      void 0 !== a2 && clearTimeout(a2), l2 = 0, n2 = c2 = i2 = a2 = void 0;
    }, y2.flush = function() {
      return void 0 === a2 ? s2 : g2(un());
    }, y2;
  }, pn = "Expected a function", vn = "__lodash_hash_undefined__", gn = "[object Function]", yn = "[object GeneratorFunction]", bn = /^\[object .+?Constructor\]$/, mn = "object" == typeof t && t && t.Object === Object && t, xn = "object" == typeof self && self && self.Object === Object && self, En = mn || xn || Function("return this")();
  var wn = Array.prototype, On = Function.prototype, _n = Object.prototype, Sn = En["__core-js_shared__"], An = function() {
    var t2 = /[^.]+$/.exec(Sn && Sn.keys && Sn.keys.IE_PROTO || "");
    return t2 ? "Symbol(src)_1." + t2 : "";
  }(), kn = On.toString, Ln = _n.hasOwnProperty, Mn = _n.toString, Tn = RegExp("^" + kn.call(Ln).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), jn = wn.splice, Rn = Vn(En, "Map"), Wn = Vn(Object, "create");
  function zn(t2) {
    var e2 = -1, r2 = t2 ? t2.length : 0;
    for (this.clear(); ++e2 < r2; ) {
      var n2 = t2[e2];
      this.set(n2[0], n2[1]);
    }
  }
  function Cn(t2) {
    var e2 = -1, r2 = t2 ? t2.length : 0;
    for (this.clear(); ++e2 < r2; ) {
      var n2 = t2[e2];
      this.set(n2[0], n2[1]);
    }
  }
  function Nn(t2) {
    var e2 = -1, r2 = t2 ? t2.length : 0;
    for (this.clear(); ++e2 < r2; ) {
      var n2 = t2[e2];
      this.set(n2[0], n2[1]);
    }
  }
  function In(t2, e2) {
    for (var r2, n2, i2 = t2.length; i2--; )
      if ((r2 = t2[i2][0]) === (n2 = e2) || r2 != r2 && n2 != n2)
        return i2;
    return -1;
  }
  function Dn(t2) {
    return !(!Bn(t2) || (e2 = t2, An && An in e2)) && (function(t3) {
      var e3 = Bn(t3) ? Mn.call(t3) : "";
      return e3 == gn || e3 == yn;
    }(t2) || function(t3) {
      var e3 = false;
      if (null != t3 && "function" != typeof t3.toString)
        try {
          e3 = !!(t3 + "");
        } catch (t4) {
        }
      return e3;
    }(t2) ? Tn : bn).test(function(t3) {
      if (null != t3) {
        try {
          return kn.call(t3);
        } catch (t4) {
        }
        try {
          return t3 + "";
        } catch (t4) {
        }
      }
      return "";
    }(t2));
    var e2;
  }
  function Pn(t2, e2) {
    var r2, n2, i2 = t2.__data__;
    return ("string" == (n2 = typeof (r2 = e2)) || "number" == n2 || "symbol" == n2 || "boolean" == n2 ? "__proto__" !== r2 : null === r2) ? i2["string" == typeof e2 ? "string" : "hash"] : i2.map;
  }
  function Vn(t2, e2) {
    var r2 = function(t3, e3) {
      return null == t3 ? void 0 : t3[e3];
    }(t2, e2);
    return Dn(r2) ? r2 : void 0;
  }
  function Fn(t2, e2) {
    if ("function" != typeof t2 || e2 && "function" != typeof e2)
      throw new TypeError(pn);
    var r2 = function() {
      var n2 = arguments, i2 = e2 ? e2.apply(this, n2) : n2[0], o2 = r2.cache;
      if (o2.has(i2))
        return o2.get(i2);
      var s2 = t2.apply(this, n2);
      return r2.cache = o2.set(i2, s2), s2;
    };
    return r2.cache = new (Fn.Cache || Nn)(), r2;
  }
  function Bn(t2) {
    var e2 = typeof t2;
    return !!t2 && ("object" == e2 || "function" == e2);
  }
  zn.prototype.clear = function() {
    this.__data__ = Wn ? Wn(null) : {};
  }, zn.prototype.delete = function(t2) {
    return this.has(t2) && delete this.__data__[t2];
  }, zn.prototype.get = function(t2) {
    var e2 = this.__data__;
    if (Wn) {
      var r2 = e2[t2];
      return r2 === vn ? void 0 : r2;
    }
    return Ln.call(e2, t2) ? e2[t2] : void 0;
  }, zn.prototype.has = function(t2) {
    var e2 = this.__data__;
    return Wn ? void 0 !== e2[t2] : Ln.call(e2, t2);
  }, zn.prototype.set = function(t2, e2) {
    return this.__data__[t2] = Wn && void 0 === e2 ? vn : e2, this;
  }, Cn.prototype.clear = function() {
    this.__data__ = [];
  }, Cn.prototype.delete = function(t2) {
    var e2 = this.__data__, r2 = In(e2, t2);
    return !(r2 < 0) && (r2 == e2.length - 1 ? e2.pop() : jn.call(e2, r2, 1), true);
  }, Cn.prototype.get = function(t2) {
    var e2 = this.__data__, r2 = In(e2, t2);
    return r2 < 0 ? void 0 : e2[r2][1];
  }, Cn.prototype.has = function(t2) {
    return In(this.__data__, t2) > -1;
  }, Cn.prototype.set = function(t2, e2) {
    var r2 = this.__data__, n2 = In(r2, t2);
    return n2 < 0 ? r2.push([t2, e2]) : r2[n2][1] = e2, this;
  }, Nn.prototype.clear = function() {
    this.__data__ = { hash: new zn(), map: new (Rn || Cn)(), string: new zn() };
  }, Nn.prototype.delete = function(t2) {
    return Pn(this, t2).delete(t2);
  }, Nn.prototype.get = function(t2) {
    return Pn(this, t2).get(t2);
  }, Nn.prototype.has = function(t2) {
    return Pn(this, t2).has(t2);
  }, Nn.prototype.set = function(t2, e2) {
    return Pn(this, t2).set(t2, e2), this;
  }, Fn.Cache = Nn;
  var Hn = Fn, qn = function() {
    if ("undefined" != typeof Map)
      return Map;
    function t2(t3, e2) {
      var r2 = -1;
      return t3.some(function(t4, n2) {
        return t4[0] === e2 && (r2 = n2, true);
      }), r2;
    }
    return function() {
      function e2() {
        this.__entries__ = [];
      }
      return Object.defineProperty(e2.prototype, "size", { get: function() {
        return this.__entries__.length;
      }, enumerable: true, configurable: true }), e2.prototype.get = function(e3) {
        var r2 = t2(this.__entries__, e3), n2 = this.__entries__[r2];
        return n2 && n2[1];
      }, e2.prototype.set = function(e3, r2) {
        var n2 = t2(this.__entries__, e3);
        ~n2 ? this.__entries__[n2][1] = r2 : this.__entries__.push([e3, r2]);
      }, e2.prototype.delete = function(e3) {
        var r2 = this.__entries__, n2 = t2(r2, e3);
        ~n2 && r2.splice(n2, 1);
      }, e2.prototype.has = function(e3) {
        return !!~t2(this.__entries__, e3);
      }, e2.prototype.clear = function() {
        this.__entries__.splice(0);
      }, e2.prototype.forEach = function(t3, e3) {
        void 0 === e3 && (e3 = null);
        for (var r2 = 0, n2 = this.__entries__; r2 < n2.length; r2++) {
          var i2 = n2[r2];
          t3.call(e3, i2[1], i2[0]);
        }
      }, e2;
    }();
  }(), $n = "undefined" != typeof window && "undefined" != typeof document && window.document === document, Xn = "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(), Yn = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(Xn) : function(t2) {
    return setTimeout(function() {
      return t2(Date.now());
    }, 1e3 / 60);
  }, Gn = 2;
  var Un = 20, Qn = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Kn = "undefined" != typeof MutationObserver, Jn = function() {
    function t2() {
      this.connected_ = false, this.mutationEventsAdded_ = false, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = /* @__PURE__ */ function(t3, e2) {
        var r2 = false, n2 = false, i2 = 0;
        function o2() {
          r2 && (r2 = false, t3()), n2 && a2();
        }
        function s2() {
          Yn(o2);
        }
        function a2() {
          var t4 = Date.now();
          if (r2) {
            if (t4 - i2 < Gn)
              return;
            n2 = true;
          } else
            r2 = true, n2 = false, setTimeout(s2, e2);
          i2 = t4;
        }
        return a2;
      }(this.refresh.bind(this), Un);
    }
    return t2.prototype.addObserver = function(t3) {
      ~this.observers_.indexOf(t3) || this.observers_.push(t3), this.connected_ || this.connect_();
    }, t2.prototype.removeObserver = function(t3) {
      var e2 = this.observers_, r2 = e2.indexOf(t3);
      ~r2 && e2.splice(r2, 1), !e2.length && this.connected_ && this.disconnect_();
    }, t2.prototype.refresh = function() {
      this.updateObservers_() && this.refresh();
    }, t2.prototype.updateObservers_ = function() {
      var t3 = this.observers_.filter(function(t4) {
        return t4.gatherActive(), t4.hasActive();
      });
      return t3.forEach(function(t4) {
        return t4.broadcastActive();
      }), t3.length > 0;
    }, t2.prototype.connect_ = function() {
      $n && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Kn ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, { attributes: true, childList: true, characterData: true, subtree: true })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = true), this.connected_ = true);
    }, t2.prototype.disconnect_ = function() {
      $n && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = false, this.connected_ = false);
    }, t2.prototype.onTransitionEnd_ = function(t3) {
      var e2 = t3.propertyName, r2 = void 0 === e2 ? "" : e2;
      Qn.some(function(t4) {
        return !!~r2.indexOf(t4);
      }) && this.refresh();
    }, t2.getInstance = function() {
      return this.instance_ || (this.instance_ = new t2()), this.instance_;
    }, t2.instance_ = null, t2;
  }(), Zn = function(t2, e2) {
    for (var r2 = 0, n2 = Object.keys(e2); r2 < n2.length; r2++) {
      var i2 = n2[r2];
      Object.defineProperty(t2, i2, { value: e2[i2], enumerable: false, writable: false, configurable: true });
    }
    return t2;
  }, ti = function(t2) {
    return t2 && t2.ownerDocument && t2.ownerDocument.defaultView || Xn;
  }, ei = ai(0, 0, 0, 0);
  function ri(t2) {
    return parseFloat(t2) || 0;
  }
  function ni(t2) {
    for (var e2 = [], r2 = 1; r2 < arguments.length; r2++)
      e2[r2 - 1] = arguments[r2];
    return e2.reduce(function(e3, r3) {
      return e3 + ri(t2["border-" + r3 + "-width"]);
    }, 0);
  }
  function ii(t2) {
    var e2 = t2.clientWidth, r2 = t2.clientHeight;
    if (!e2 && !r2)
      return ei;
    var n2 = ti(t2).getComputedStyle(t2), i2 = function(t3) {
      for (var e3 = {}, r3 = 0, n3 = ["top", "right", "bottom", "left"]; r3 < n3.length; r3++) {
        var i3 = n3[r3], o3 = t3["padding-" + i3];
        e3[i3] = ri(o3);
      }
      return e3;
    }(n2), o2 = i2.left + i2.right, s2 = i2.top + i2.bottom, a2 = ri(n2.width), c2 = ri(n2.height);
    if ("border-box" === n2.boxSizing && (Math.round(a2 + o2) !== e2 && (a2 -= ni(n2, "left", "right") + o2), Math.round(c2 + s2) !== r2 && (c2 -= ni(n2, "top", "bottom") + s2)), !function(t3) {
      return t3 === ti(t3).document.documentElement;
    }(t2)) {
      var l2 = Math.round(a2 + o2) - e2, u2 = Math.round(c2 + s2) - r2;
      1 !== Math.abs(l2) && (a2 -= l2), 1 !== Math.abs(u2) && (c2 -= u2);
    }
    return ai(i2.left, i2.top, a2, c2);
  }
  var oi = "undefined" != typeof SVGGraphicsElement ? function(t2) {
    return t2 instanceof ti(t2).SVGGraphicsElement;
  } : function(t2) {
    return t2 instanceof ti(t2).SVGElement && "function" == typeof t2.getBBox;
  };
  function si(t2) {
    return $n ? oi(t2) ? function(t3) {
      var e2 = t3.getBBox();
      return ai(0, 0, e2.width, e2.height);
    }(t2) : ii(t2) : ei;
  }
  function ai(t2, e2, r2, n2) {
    return { x: t2, y: e2, width: r2, height: n2 };
  }
  var ci = function() {
    function t2(t3) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = ai(0, 0, 0, 0), this.target = t3;
    }
    return t2.prototype.isActive = function() {
      var t3 = si(this.target);
      return this.contentRect_ = t3, t3.width !== this.broadcastWidth || t3.height !== this.broadcastHeight;
    }, t2.prototype.broadcastRect = function() {
      var t3 = this.contentRect_;
      return this.broadcastWidth = t3.width, this.broadcastHeight = t3.height, t3;
    }, t2;
  }(), li = function(t2, e2) {
    var r2, n2, i2, o2, s2, a2, c2, l2 = (n2 = (r2 = e2).x, i2 = r2.y, o2 = r2.width, s2 = r2.height, a2 = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, c2 = Object.create(a2.prototype), Zn(c2, { x: n2, y: i2, width: o2, height: s2, top: i2, right: n2 + o2, bottom: s2 + i2, left: n2 }), c2);
    Zn(this, { target: t2, contentRect: l2 });
  }, ui = function() {
    function t2(t3, e2, r2) {
      if (this.activeObservations_ = [], this.observations_ = new qn(), "function" != typeof t3)
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t3, this.controller_ = e2, this.callbackCtx_ = r2;
    }
    return t2.prototype.observe = function(t3) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if ("undefined" != typeof Element && Element instanceof Object) {
        if (!(t3 instanceof ti(t3).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var e2 = this.observations_;
        e2.has(t3) || (e2.set(t3, new ci(t3)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, t2.prototype.unobserve = function(t3) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if ("undefined" != typeof Element && Element instanceof Object) {
        if (!(t3 instanceof ti(t3).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var e2 = this.observations_;
        e2.has(t3) && (e2.delete(t3), e2.size || this.controller_.removeObserver(this));
      }
    }, t2.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, t2.prototype.gatherActive = function() {
      var t3 = this;
      this.clearActive(), this.observations_.forEach(function(e2) {
        e2.isActive() && t3.activeObservations_.push(e2);
      });
    }, t2.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t3 = this.callbackCtx_, e2 = this.activeObservations_.map(function(t4) {
          return new li(t4.target, t4.broadcastRect());
        });
        this.callback_.call(t3, e2, t3), this.clearActive();
      }
    }, t2.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, t2.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, t2;
  }(), fi = "undefined" != typeof WeakMap ? /* @__PURE__ */ new WeakMap() : new qn(), hi = function t2(e2) {
    if (!(this instanceof t2))
      throw new TypeError("Cannot call a class as a function.");
    if (!arguments.length)
      throw new TypeError("1 argument required, but only 0 present.");
    var r2 = Jn.getInstance(), n2 = new ui(e2, r2, this);
    fi.set(this, n2);
  };
  ["observe", "unobserve", "disconnect"].forEach(function(t2) {
    hi.prototype[t2] = function() {
      var e2;
      return (e2 = fi.get(this))[t2].apply(e2, arguments);
    };
  });
  var di = void 0 !== Xn.ResizeObserver ? Xn.ResizeObserver : hi, pi = null, vi = null;
  function gi() {
    if (null === pi) {
      if ("undefined" == typeof document)
        return pi = 0;
      var t2 = document.body, e2 = document.createElement("div");
      e2.classList.add("simplebar-hide-scrollbar"), t2.appendChild(e2);
      var r2 = e2.getBoundingClientRect().right;
      t2.removeChild(e2), pi = r2;
    }
    return pi;
  }
  Yt && window.addEventListener("resize", function() {
    vi !== window.devicePixelRatio && (vi = window.devicePixelRatio, pi = null);
  });
  var yi = function(t2) {
    return function(e2, r2, n2, i2) {
      kt(r2);
      var o2 = Mt(e2), s2 = y(o2), a2 = st(o2.length), c2 = t2 ? a2 - 1 : 0, l2 = t2 ? -1 : 1;
      if (n2 < 2)
        for (; ; ) {
          if (c2 in s2) {
            i2 = s2[c2], c2 += l2;
            break;
          }
          if (c2 += l2, t2 ? c2 < 0 : a2 <= c2)
            throw TypeError("Reduce of empty array with no initial value");
        }
      for (; t2 ? c2 >= 0 : a2 > c2; c2 += l2)
        c2 in s2 && (i2 = r2(i2, s2[c2], c2, o2));
      return i2;
    };
  }, bi = { left: yi(false), right: yi(true) }.left;
  At({ target: "Array", proto: true, forced: Vt("reduce") }, { reduce: function(t2) {
    return bi(this, t2, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
  } });
  var mi = R.f, xi = Function.prototype, Ei = xi.toString, wi = /^\s*function ([^ (]*)/;
  !l || "name" in xi || mi(xi, "name", { configurable: true, get: function() {
    try {
      return Ei.call(this).match(wi)[1];
    } catch (t2) {
      return "";
    }
  } });
  var Oi, _i, Si = function() {
    var t2 = T(this), e2 = "";
    return t2.global && (e2 += "g"), t2.ignoreCase && (e2 += "i"), t2.multiline && (e2 += "m"), t2.dotAll && (e2 += "s"), t2.unicode && (e2 += "u"), t2.sticky && (e2 += "y"), e2;
  }, Ai = RegExp.prototype.exec, ki = String.prototype.replace, Li = Ai, Mi = (Oi = /a/, _i = /b*/g, Ai.call(Oi, "a"), Ai.call(_i, "a"), 0 !== Oi.lastIndex || 0 !== _i.lastIndex), Ti = void 0 !== /()??/.exec("")[1];
  (Mi || Ti) && (Li = function(t2) {
    var e2, r2, n2, i2, o2 = this;
    return Ti && (r2 = new RegExp("^" + o2.source + "$(?!\\s)", Si.call(o2))), Mi && (e2 = o2.lastIndex), n2 = Ai.call(o2, t2), Mi && n2 && (o2.lastIndex = o2.global ? n2.index + n2[0].length : e2), Ti && n2 && n2.length > 1 && ki.call(n2[0], r2, function() {
      for (i2 = 1; i2 < arguments.length - 2; i2++)
        void 0 === arguments[i2] && (n2[i2] = void 0);
    }), n2;
  });
  var ji = Li;
  At({ target: "RegExp", proto: true, forced: /./.exec !== ji }, { exec: ji });
  var Ri = zt("species"), Wi = !c(function() {
    var t2 = /./;
    return t2.exec = function() {
      var t3 = [];
      return t3.groups = { a: "7" }, t3;
    }, "7" !== "".replace(t2, "$<a>");
  }), zi = !c(function() {
    var t2 = /(?:)/, e2 = t2.exec;
    t2.exec = function() {
      return e2.apply(this, arguments);
    };
    var r2 = "ab".split(t2);
    return 2 !== r2.length || "a" !== r2[0] || "b" !== r2[1];
  }), Ci = function(t2, e2, r2, n2) {
    var i2 = zt(t2), o2 = !c(function() {
      var e3 = {};
      return e3[i2] = function() {
        return 7;
      }, 7 != ""[t2](e3);
    }), s2 = o2 && !c(function() {
      var e3 = false, r3 = /a/;
      return r3.exec = function() {
        return e3 = true, null;
      }, "split" === t2 && (r3.constructor = {}, r3.constructor[Ri] = function() {
        return r3;
      }), r3[i2](""), !e3;
    });
    if (!o2 || !s2 || "replace" === t2 && !Wi || "split" === t2 && !zi) {
      var a2 = /./[i2], l2 = r2(i2, ""[t2], function(t3, e3, r3, n3, i3) {
        return e3.exec === ji ? o2 && !i3 ? { done: true, value: a2.call(e3, r3, n3) } : { done: true, value: t3.call(r3, e3, n3) } : { done: false };
      }), u2 = l2[0], f2 = l2[1];
      J(String.prototype, t2, u2), J(RegExp.prototype, i2, 2 == e2 ? function(t3, e3) {
        return f2.call(t3, this, e3);
      } : function(t3) {
        return f2.call(t3, this);
      }), n2 && W(RegExp.prototype[i2], "sham", true);
    }
  }, Ni = Ue.charAt, Ii = function(t2, e2, r2) {
    return e2 + (r2 ? Ni(t2, e2).length : 1);
  }, Di = function(t2, e2) {
    var r2 = t2.exec;
    if ("function" == typeof r2) {
      var n2 = r2.call(t2, e2);
      if ("object" != typeof n2)
        throw TypeError("RegExp exec method returned something other than an Object or null");
      return n2;
    }
    if ("RegExp" !== v(t2))
      throw TypeError("RegExp#exec called on incompatible receiver");
    return ji.call(t2, e2);
  };
  Ci("match", 1, function(t2, e2, r2) {
    return [function(e3) {
      var r3 = b(this), n2 = null == e3 ? void 0 : e3[t2];
      return void 0 !== n2 ? n2.call(e3, r3) : new RegExp(e3)[t2](String(r3));
    }, function(t3) {
      var n2 = r2(e2, t3, this);
      if (n2.done)
        return n2.value;
      var i2 = T(t3), o2 = String(this);
      if (!i2.global)
        return Di(i2, o2);
      var s2 = i2.unicode;
      i2.lastIndex = 0;
      for (var a2, c2 = [], l2 = 0; null !== (a2 = Di(i2, o2)); ) {
        var u2 = String(a2[0]);
        c2[l2] = u2, "" === u2 && (i2.lastIndex = Ii(o2, st(i2.lastIndex), s2)), l2++;
      }
      return 0 === l2 ? null : c2;
    }];
  });
  var Pi = Math.max, Vi = Math.min, Fi = Math.floor, Bi = /\$([$&'`]|\d\d?|<[^>]*>)/g, Hi = /\$([$&'`]|\d\d?)/g;
  Ci("replace", 2, function(t2, e2, r2) {
    return [function(r3, n3) {
      var i2 = b(this), o2 = null == r3 ? void 0 : r3[t2];
      return void 0 !== o2 ? o2.call(r3, i2, n3) : e2.call(String(i2), r3, n3);
    }, function(t3, i2) {
      var o2 = r2(e2, t3, this, i2);
      if (o2.done)
        return o2.value;
      var s2 = T(t3), a2 = String(this), c2 = "function" == typeof i2;
      c2 || (i2 = String(i2));
      var l2 = s2.global;
      if (l2) {
        var u2 = s2.unicode;
        s2.lastIndex = 0;
      }
      for (var f2 = []; ; ) {
        var h2 = Di(s2, a2);
        if (null === h2)
          break;
        if (f2.push(h2), !l2)
          break;
        "" === String(h2[0]) && (s2.lastIndex = Ii(a2, st(s2.lastIndex), u2));
      }
      for (var d2, p2 = "", v2 = 0, g2 = 0; g2 < f2.length; g2++) {
        h2 = f2[g2];
        for (var y2 = String(h2[0]), b2 = Pi(Vi(it(h2.index), a2.length), 0), m2 = [], x2 = 1; x2 < h2.length; x2++)
          m2.push(void 0 === (d2 = h2[x2]) ? d2 : String(d2));
        var E2 = h2.groups;
        if (c2) {
          var w2 = [y2].concat(m2, b2, a2);
          void 0 !== E2 && w2.push(E2);
          var O2 = String(i2.apply(void 0, w2));
        } else
          O2 = n2(y2, a2, b2, m2, E2, i2);
        b2 >= v2 && (p2 += a2.slice(v2, b2) + O2, v2 = b2 + y2.length);
      }
      return p2 + a2.slice(v2);
    }];
    function n2(t3, r3, n3, i2, o2, s2) {
      var a2 = n3 + t3.length, c2 = i2.length, l2 = Hi;
      return void 0 !== o2 && (o2 = Mt(o2), l2 = Bi), e2.call(s2, l2, function(e3, s3) {
        var l3;
        switch (s3.charAt(0)) {
          case "$":
            return "$";
          case "&":
            return t3;
          case "`":
            return r3.slice(0, n3);
          case "'":
            return r3.slice(a2);
          case "<":
            l3 = o2[s3.slice(1, -1)];
            break;
          default:
            var u2 = +s3;
            if (0 === u2)
              return e3;
            if (u2 > c2) {
              var f2 = Fi(u2 / 10);
              return 0 === f2 ? e3 : f2 <= c2 ? void 0 === i2[f2 - 1] ? s3.charAt(1) : i2[f2 - 1] + s3.charAt(1) : e3;
            }
            l3 = i2[u2 - 1];
        }
        return void 0 === l3 ? "" : l3;
      });
    }
  });
  var qi = function(t2) {
    return Array.prototype.reduce.call(t2, function(t3, e2) {
      var r2 = e2.name.match(/data-simplebar-(.+)/);
      if (r2) {
        var n2 = r2[1].replace(/\W+(.)/g, function(t4, e3) {
          return e3.toUpperCase();
        });
        switch (e2.value) {
          case "true":
            t3[n2] = true;
            break;
          case "false":
            t3[n2] = false;
            break;
          case void 0:
            t3[n2] = true;
            break;
          default:
            t3[n2] = e2.value;
        }
      }
      return t3;
    }, {});
  };
  function $i(t2) {
    return t2 && t2.ownerDocument && t2.ownerDocument.defaultView ? t2.ownerDocument.defaultView : window;
  }
  function Xi(t2) {
    return t2 && t2.ownerDocument ? t2.ownerDocument : document;
  }
  var Yi = function() {
    function t2(e3, r2) {
      var n2 = this;
      this.onScroll = function() {
        var t3 = $i(n2.el);
        n2.scrollXTicking || (t3.requestAnimationFrame(n2.scrollX), n2.scrollXTicking = true), n2.scrollYTicking || (t3.requestAnimationFrame(n2.scrollY), n2.scrollYTicking = true);
      }, this.scrollX = function() {
        n2.axis.x.isOverflowing && (n2.showScrollbar("x"), n2.positionScrollbar("x")), n2.scrollXTicking = false;
      }, this.scrollY = function() {
        n2.axis.y.isOverflowing && (n2.showScrollbar("y"), n2.positionScrollbar("y")), n2.scrollYTicking = false;
      }, this.onMouseEnter = function() {
        n2.showScrollbar("x"), n2.showScrollbar("y");
      }, this.onMouseMove = function(t3) {
        n2.mouseX = t3.clientX, n2.mouseY = t3.clientY, (n2.axis.x.isOverflowing || n2.axis.x.forceVisible) && n2.onMouseMoveForAxis("x"), (n2.axis.y.isOverflowing || n2.axis.y.forceVisible) && n2.onMouseMoveForAxis("y");
      }, this.onMouseLeave = function() {
        n2.onMouseMove.cancel(), (n2.axis.x.isOverflowing || n2.axis.x.forceVisible) && n2.onMouseLeaveForAxis("x"), (n2.axis.y.isOverflowing || n2.axis.y.forceVisible) && n2.onMouseLeaveForAxis("y"), n2.mouseX = -1, n2.mouseY = -1;
      }, this.onWindowResize = function() {
        n2.scrollbarWidth = n2.getScrollbarWidth(), n2.hideNativeScrollbar();
      }, this.hideScrollbars = function() {
        n2.axis.x.track.rect = n2.axis.x.track.el.getBoundingClientRect(), n2.axis.y.track.rect = n2.axis.y.track.el.getBoundingClientRect(), n2.isWithinBounds(n2.axis.y.track.rect) || (n2.axis.y.scrollbar.el.classList.remove(n2.classNames.visible), n2.axis.y.isVisible = false), n2.isWithinBounds(n2.axis.x.track.rect) || (n2.axis.x.scrollbar.el.classList.remove(n2.classNames.visible), n2.axis.x.isVisible = false);
      }, this.onPointerEvent = function(t3) {
        var e4, r3;
        n2.axis.x.track.rect = n2.axis.x.track.el.getBoundingClientRect(), n2.axis.y.track.rect = n2.axis.y.track.el.getBoundingClientRect(), (n2.axis.x.isOverflowing || n2.axis.x.forceVisible) && (e4 = n2.isWithinBounds(n2.axis.x.track.rect)), (n2.axis.y.isOverflowing || n2.axis.y.forceVisible) && (r3 = n2.isWithinBounds(n2.axis.y.track.rect)), (e4 || r3) && (t3.preventDefault(), t3.stopPropagation(), "mousedown" === t3.type && (e4 && (n2.axis.x.scrollbar.rect = n2.axis.x.scrollbar.el.getBoundingClientRect(), n2.isWithinBounds(n2.axis.x.scrollbar.rect) ? n2.onDragStart(t3, "x") : n2.onTrackClick(t3, "x")), r3 && (n2.axis.y.scrollbar.rect = n2.axis.y.scrollbar.el.getBoundingClientRect(), n2.isWithinBounds(n2.axis.y.scrollbar.rect) ? n2.onDragStart(t3, "y") : n2.onTrackClick(t3, "y"))));
      }, this.drag = function(e4) {
        var r3 = n2.axis[n2.draggedAxis].track, i2 = r3.rect[n2.axis[n2.draggedAxis].sizeAttr], o2 = n2.axis[n2.draggedAxis].scrollbar, s2 = n2.contentWrapperEl[n2.axis[n2.draggedAxis].scrollSizeAttr], a2 = parseInt(n2.elStyles[n2.axis[n2.draggedAxis].sizeAttr], 10);
        e4.preventDefault(), e4.stopPropagation();
        var c2 = (("y" === n2.draggedAxis ? e4.pageY : e4.pageX) - r3.rect[n2.axis[n2.draggedAxis].offsetAttr] - n2.axis[n2.draggedAxis].dragOffset) / (i2 - o2.size) * (s2 - a2);
        "x" === n2.draggedAxis && (c2 = n2.isRtl && t2.getRtlHelpers().isRtlScrollbarInverted ? c2 - (i2 + o2.size) : c2, c2 = n2.isRtl && t2.getRtlHelpers().isRtlScrollingInverted ? -c2 : c2), n2.contentWrapperEl[n2.axis[n2.draggedAxis].scrollOffsetAttr] = c2;
      }, this.onEndDrag = function(t3) {
        var e4 = Xi(n2.el), r3 = $i(n2.el);
        t3.preventDefault(), t3.stopPropagation(), n2.el.classList.remove(n2.classNames.dragging), e4.removeEventListener("mousemove", n2.drag, true), e4.removeEventListener("mouseup", n2.onEndDrag, true), n2.removePreventClickId = r3.setTimeout(function() {
          e4.removeEventListener("click", n2.preventClick, true), e4.removeEventListener("dblclick", n2.preventClick, true), n2.removePreventClickId = null;
        });
      }, this.preventClick = function(t3) {
        t3.preventDefault(), t3.stopPropagation();
      }, this.el = e3, this.minScrollbarWidth = 20, this.options = Object.assign({}, t2.defaultOptions, {}, r2), this.classNames = Object.assign({}, t2.defaultOptions.classNames, {}, this.options.classNames), this.axis = { x: { scrollOffsetAttr: "scrollLeft", sizeAttr: "width", scrollSizeAttr: "scrollWidth", offsetSizeAttr: "offsetWidth", offsetAttr: "left", overflowAttr: "overflowX", dragOffset: 0, isOverflowing: true, isVisible: false, forceVisible: false, track: {}, scrollbar: {} }, y: { scrollOffsetAttr: "scrollTop", sizeAttr: "height", scrollSizeAttr: "scrollHeight", offsetSizeAttr: "offsetHeight", offsetAttr: "top", overflowAttr: "overflowY", dragOffset: 0, isOverflowing: true, isVisible: false, forceVisible: false, track: {}, scrollbar: {} } }, this.removePreventClickId = null, t2.instances.has(this.el) || (this.recalculate = Gr(this.recalculate.bind(this), 64), this.onMouseMove = Gr(this.onMouseMove.bind(this), 64), this.hideScrollbars = dn(this.hideScrollbars.bind(this), this.options.timeout), this.onWindowResize = dn(this.onWindowResize.bind(this), 64, { leading: true }), t2.getRtlHelpers = Hn(t2.getRtlHelpers), this.init());
    }
    t2.getRtlHelpers = function() {
      var e3 = document.createElement("div");
      e3.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
      var r2 = e3.firstElementChild;
      document.body.appendChild(r2);
      var n2 = r2.firstElementChild;
      r2.scrollLeft = 0;
      var i2 = t2.getOffset(r2), o2 = t2.getOffset(n2);
      r2.scrollLeft = 999;
      var s2 = t2.getOffset(n2);
      return { isRtlScrollingInverted: i2.left !== o2.left && o2.left - s2.left != 0, isRtlScrollbarInverted: i2.left !== o2.left };
    }, t2.getOffset = function(t3) {
      var e3 = t3.getBoundingClientRect(), r2 = Xi(t3), n2 = $i(t3);
      return { top: e3.top + (n2.pageYOffset || r2.documentElement.scrollTop), left: e3.left + (n2.pageXOffset || r2.documentElement.scrollLeft) };
    };
    var e2 = t2.prototype;
    return e2.init = function() {
      t2.instances.set(this.el, this), Yt && (this.initDOM(), this.scrollbarWidth = this.getScrollbarWidth(), this.recalculate(), this.initListeners());
    }, e2.initDOM = function() {
      var t3 = this;
      if (Array.prototype.filter.call(this.el.children, function(e4) {
        return e4.classList.contains(t3.classNames.wrapper);
      }).length)
        this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper), this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper), this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl), this.offsetEl = this.el.querySelector("." + this.classNames.offset), this.maskEl = this.el.querySelector("." + this.classNames.mask), this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder), this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl), this.axis.x.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.horizontal), this.axis.y.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.vertical);
      else {
        for (this.wrapperEl = document.createElement("div"), this.contentWrapperEl = document.createElement("div"), this.offsetEl = document.createElement("div"), this.maskEl = document.createElement("div"), this.contentEl = document.createElement("div"), this.placeholderEl = document.createElement("div"), this.heightAutoObserverWrapperEl = document.createElement("div"), this.heightAutoObserverEl = document.createElement("div"), this.wrapperEl.classList.add(this.classNames.wrapper), this.contentWrapperEl.classList.add(this.classNames.contentWrapper), this.offsetEl.classList.add(this.classNames.offset), this.maskEl.classList.add(this.classNames.mask), this.contentEl.classList.add(this.classNames.contentEl), this.placeholderEl.classList.add(this.classNames.placeholder), this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl); this.el.firstChild; )
          this.contentEl.appendChild(this.el.firstChild);
        this.contentWrapperEl.appendChild(this.contentEl), this.offsetEl.appendChild(this.contentWrapperEl), this.maskEl.appendChild(this.offsetEl), this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl), this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl), this.wrapperEl.appendChild(this.maskEl), this.wrapperEl.appendChild(this.placeholderEl), this.el.appendChild(this.wrapperEl);
      }
      if (!this.axis.x.track.el || !this.axis.y.track.el) {
        var e3 = document.createElement("div"), r2 = document.createElement("div");
        e3.classList.add(this.classNames.track), r2.classList.add(this.classNames.scrollbar), e3.appendChild(r2), this.axis.x.track.el = e3.cloneNode(true), this.axis.x.track.el.classList.add(this.classNames.horizontal), this.axis.y.track.el = e3.cloneNode(true), this.axis.y.track.el.classList.add(this.classNames.vertical), this.el.appendChild(this.axis.x.track.el), this.el.appendChild(this.axis.y.track.el);
      }
      this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar), this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar), this.options.autoHide || (this.axis.x.scrollbar.el.classList.add(this.classNames.visible), this.axis.y.scrollbar.el.classList.add(this.classNames.visible)), this.el.setAttribute("data-simplebar", "init");
    }, e2.initListeners = function() {
      var t3 = this, e3 = $i(this.el);
      this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach(function(e4) {
        t3.el.addEventListener(e4, t3.onPointerEvent, true);
      }), ["touchstart", "touchend", "touchmove"].forEach(function(e4) {
        t3.el.addEventListener(e4, t3.onPointerEvent, { capture: true, passive: true });
      }), this.el.addEventListener("mousemove", this.onMouseMove), this.el.addEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl.addEventListener("scroll", this.onScroll), e3.addEventListener("resize", this.onWindowResize);
      var r2 = false, n2 = e3.ResizeObserver || di;
      this.resizeObserver = new n2(function() {
        r2 && t3.recalculate();
      }), this.resizeObserver.observe(this.el), this.resizeObserver.observe(this.contentEl), e3.requestAnimationFrame(function() {
        r2 = true;
      }), this.mutationObserver = new e3.MutationObserver(this.recalculate), this.mutationObserver.observe(this.contentEl, { childList: true, subtree: true, characterData: true });
    }, e2.recalculate = function() {
      var t3 = $i(this.el);
      this.elStyles = t3.getComputedStyle(this.el), this.isRtl = "rtl" === this.elStyles.direction;
      var e3 = this.heightAutoObserverEl.offsetHeight <= 1, r2 = this.heightAutoObserverEl.offsetWidth <= 1, n2 = this.contentEl.offsetWidth, i2 = this.contentWrapperEl.offsetWidth, o2 = this.elStyles.overflowX, s2 = this.elStyles.overflowY;
      this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft, this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft;
      var a2 = this.contentEl.scrollHeight, c2 = this.contentEl.scrollWidth;
      this.contentWrapperEl.style.height = e3 ? "auto" : "100%", this.placeholderEl.style.width = r2 ? n2 + "px" : "auto", this.placeholderEl.style.height = a2 + "px";
      var l2 = this.contentWrapperEl.offsetHeight;
      this.axis.x.isOverflowing = c2 > n2, this.axis.y.isOverflowing = a2 > l2, this.axis.x.isOverflowing = "hidden" !== o2 && this.axis.x.isOverflowing, this.axis.y.isOverflowing = "hidden" !== s2 && this.axis.y.isOverflowing, this.axis.x.forceVisible = "x" === this.options.forceVisible || true === this.options.forceVisible, this.axis.y.forceVisible = "y" === this.options.forceVisible || true === this.options.forceVisible, this.hideNativeScrollbar();
      var u2 = this.axis.x.isOverflowing ? this.scrollbarWidth : 0, f2 = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
      this.axis.x.isOverflowing = this.axis.x.isOverflowing && c2 > i2 - f2, this.axis.y.isOverflowing = this.axis.y.isOverflowing && a2 > l2 - u2, this.axis.x.scrollbar.size = this.getScrollbarSize("x"), this.axis.y.scrollbar.size = this.getScrollbarSize("y"), this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px", this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px", this.positionScrollbar("x"), this.positionScrollbar("y"), this.toggleTrackVisibility("x"), this.toggleTrackVisibility("y");
    }, e2.getScrollbarSize = function(t3) {
      if (void 0 === t3 && (t3 = "y"), !this.axis[t3].isOverflowing)
        return 0;
      var e3, r2 = this.contentEl[this.axis[t3].scrollSizeAttr], n2 = this.axis[t3].track.el[this.axis[t3].offsetSizeAttr], i2 = n2 / r2;
      return e3 = Math.max(~~(i2 * n2), this.options.scrollbarMinSize), this.options.scrollbarMaxSize && (e3 = Math.min(e3, this.options.scrollbarMaxSize)), e3;
    }, e2.positionScrollbar = function(e3) {
      if (void 0 === e3 && (e3 = "y"), this.axis[e3].isOverflowing) {
        var r2 = this.contentWrapperEl[this.axis[e3].scrollSizeAttr], n2 = this.axis[e3].track.el[this.axis[e3].offsetSizeAttr], i2 = parseInt(this.elStyles[this.axis[e3].sizeAttr], 10), o2 = this.axis[e3].scrollbar, s2 = this.contentWrapperEl[this.axis[e3].scrollOffsetAttr], a2 = (s2 = "x" === e3 && this.isRtl && t2.getRtlHelpers().isRtlScrollingInverted ? -s2 : s2) / (r2 - i2), c2 = ~~((n2 - o2.size) * a2);
        c2 = "x" === e3 && this.isRtl && t2.getRtlHelpers().isRtlScrollbarInverted ? c2 + (n2 - o2.size) : c2, o2.el.style.transform = "x" === e3 ? "translate3d(" + c2 + "px, 0, 0)" : "translate3d(0, " + c2 + "px, 0)";
      }
    }, e2.toggleTrackVisibility = function(t3) {
      void 0 === t3 && (t3 = "y");
      var e3 = this.axis[t3].track.el, r2 = this.axis[t3].scrollbar.el;
      this.axis[t3].isOverflowing || this.axis[t3].forceVisible ? (e3.style.visibility = "visible", this.contentWrapperEl.style[this.axis[t3].overflowAttr] = "scroll") : (e3.style.visibility = "hidden", this.contentWrapperEl.style[this.axis[t3].overflowAttr] = "hidden"), this.axis[t3].isOverflowing ? r2.style.display = "block" : r2.style.display = "none";
    }, e2.hideNativeScrollbar = function() {
      this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + this.scrollbarWidth + "px" : 0, this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0;
    }, e2.onMouseMoveForAxis = function(t3) {
      void 0 === t3 && (t3 = "y"), this.axis[t3].track.rect = this.axis[t3].track.el.getBoundingClientRect(), this.axis[t3].scrollbar.rect = this.axis[t3].scrollbar.el.getBoundingClientRect(), this.isWithinBounds(this.axis[t3].scrollbar.rect) ? this.axis[t3].scrollbar.el.classList.add(this.classNames.hover) : this.axis[t3].scrollbar.el.classList.remove(this.classNames.hover), this.isWithinBounds(this.axis[t3].track.rect) ? (this.showScrollbar(t3), this.axis[t3].track.el.classList.add(this.classNames.hover)) : this.axis[t3].track.el.classList.remove(this.classNames.hover);
    }, e2.onMouseLeaveForAxis = function(t3) {
      void 0 === t3 && (t3 = "y"), this.axis[t3].track.el.classList.remove(this.classNames.hover), this.axis[t3].scrollbar.el.classList.remove(this.classNames.hover);
    }, e2.showScrollbar = function(t3) {
      void 0 === t3 && (t3 = "y");
      var e3 = this.axis[t3].scrollbar.el;
      this.axis[t3].isVisible || (e3.classList.add(this.classNames.visible), this.axis[t3].isVisible = true), this.options.autoHide && this.hideScrollbars();
    }, e2.onDragStart = function(t3, e3) {
      void 0 === e3 && (e3 = "y");
      var r2 = Xi(this.el), n2 = $i(this.el), i2 = this.axis[e3].scrollbar, o2 = "y" === e3 ? t3.pageY : t3.pageX;
      this.axis[e3].dragOffset = o2 - i2.rect[this.axis[e3].offsetAttr], this.draggedAxis = e3, this.el.classList.add(this.classNames.dragging), r2.addEventListener("mousemove", this.drag, true), r2.addEventListener("mouseup", this.onEndDrag, true), null === this.removePreventClickId ? (r2.addEventListener("click", this.preventClick, true), r2.addEventListener("dblclick", this.preventClick, true)) : (n2.clearTimeout(this.removePreventClickId), this.removePreventClickId = null);
    }, e2.onTrackClick = function(t3, e3) {
      var r2 = this;
      if (void 0 === e3 && (e3 = "y"), this.options.clickOnTrack) {
        var n2 = $i(this.el);
        this.axis[e3].scrollbar.rect = this.axis[e3].scrollbar.el.getBoundingClientRect();
        var i2 = this.axis[e3].scrollbar.rect[this.axis[e3].offsetAttr], o2 = parseInt(this.elStyles[this.axis[e3].sizeAttr], 10), s2 = this.contentWrapperEl[this.axis[e3].scrollOffsetAttr], a2 = ("y" === e3 ? this.mouseY - i2 : this.mouseX - i2) < 0 ? -1 : 1, c2 = -1 === a2 ? s2 - o2 : s2 + o2;
        !function t4() {
          var i3, o3;
          -1 === a2 ? s2 > c2 && (s2 -= r2.options.clickOnTrackSpeed, r2.contentWrapperEl.scrollTo(((i3 = {})[r2.axis[e3].offsetAttr] = s2, i3)), n2.requestAnimationFrame(t4)) : s2 < c2 && (s2 += r2.options.clickOnTrackSpeed, r2.contentWrapperEl.scrollTo(((o3 = {})[r2.axis[e3].offsetAttr] = s2, o3)), n2.requestAnimationFrame(t4));
        }();
      }
    }, e2.getContentElement = function() {
      return this.contentEl;
    }, e2.getScrollElement = function() {
      return this.contentWrapperEl;
    }, e2.getScrollbarWidth = function() {
      try {
        return "none" === getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style ? 0 : gi();
      } catch (t3) {
        return gi();
      }
    }, e2.removeListeners = function() {
      var t3 = this, e3 = $i(this.el);
      this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach(function(e4) {
        t3.el.removeEventListener(e4, t3.onPointerEvent, true);
      }), ["touchstart", "touchend", "touchmove"].forEach(function(e4) {
        t3.el.removeEventListener(e4, t3.onPointerEvent, { capture: true, passive: true });
      }), this.el.removeEventListener("mousemove", this.onMouseMove), this.el.removeEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl && this.contentWrapperEl.removeEventListener("scroll", this.onScroll), e3.removeEventListener("resize", this.onWindowResize), this.mutationObserver && this.mutationObserver.disconnect(), this.resizeObserver && this.resizeObserver.disconnect(), this.recalculate.cancel(), this.onMouseMove.cancel(), this.hideScrollbars.cancel(), this.onWindowResize.cancel();
    }, e2.unMount = function() {
      this.removeListeners(), t2.instances.delete(this.el);
    }, e2.isWithinBounds = function(t3) {
      return this.mouseX >= t3.left && this.mouseX <= t3.left + t3.width && this.mouseY >= t3.top && this.mouseY <= t3.top + t3.height;
    }, e2.findChild = function(t3, e3) {
      var r2 = t3.matches || t3.webkitMatchesSelector || t3.mozMatchesSelector || t3.msMatchesSelector;
      return Array.prototype.filter.call(t3.children, function(t4) {
        return r2.call(t4, e3);
      })[0];
    }, t2;
  }();
  return Yi.defaultOptions = { autoHide: true, forceVisible: false, clickOnTrack: true, clickOnTrackSpeed: 40, classNames: { contentEl: "simplebar-content", contentWrapper: "simplebar-content-wrapper", offset: "simplebar-offset", mask: "simplebar-mask", wrapper: "simplebar-wrapper", placeholder: "simplebar-placeholder", scrollbar: "simplebar-scrollbar", track: "simplebar-track", heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper", heightAutoObserverEl: "simplebar-height-auto-observer", visible: "simplebar-visible", horizontal: "simplebar-horizontal", vertical: "simplebar-vertical", hover: "simplebar-hover", dragging: "simplebar-dragging" }, scrollbarMinSize: 25, scrollbarMaxSize: 0, timeout: 1e3 }, Yi.instances = /* @__PURE__ */ new WeakMap(), Yi.initDOMLoadedElements = function() {
    document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.removeEventListener("load", this.initDOMLoadedElements), Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"), function(t2) {
      "init" === t2.getAttribute("data-simplebar") || Yi.instances.has(t2) || new Yi(t2, qi(t2.attributes));
    });
  }, Yi.removeObserver = function() {
    this.globalObserver.disconnect();
  }, Yi.initHtmlApi = function() {
    this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this), "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver(Yi.handleMutations), this.globalObserver.observe(document, { childList: true, subtree: true })), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements));
  }, Yi.handleMutations = function(t2) {
    t2.forEach(function(t3) {
      Array.prototype.forEach.call(t3.addedNodes, function(t4) {
        1 === t4.nodeType && (t4.hasAttribute("data-simplebar") ? !Yi.instances.has(t4) && new Yi(t4, qi(t4.attributes)) : Array.prototype.forEach.call(t4.querySelectorAll("[data-simplebar]"), function(t5) {
          "init" === t5.getAttribute("data-simplebar") || Yi.instances.has(t5) || new Yi(t5, qi(t5.attributes));
        }));
      }), Array.prototype.forEach.call(t3.removedNodes, function(t4) {
        1 === t4.nodeType && (t4.hasAttribute('[data-simplebar="init"]') ? Yi.instances.has(t4) && Yi.instances.get(t4).unMount() : Array.prototype.forEach.call(t4.querySelectorAll('[data-simplebar="init"]'), function(t5) {
          Yi.instances.has(t5) && Yi.instances.get(t5).unMount();
        }));
      });
    });
  }, Yi.getOptions = qi, Yt && Yi.initHtmlApi(), Yi;
});
//# sourceMappingURL=simplebar.js.map
