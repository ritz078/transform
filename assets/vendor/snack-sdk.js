var e =
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : "undefined" != typeof self
    ? self
    : {};
function t(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function n(e, t) {
  return e((t = { exports: {} }), t.exports), t.exports;
}
var r = n(function(e, t) {
    var n;
    (t = e.exports = $),
      (n =
        "object" == typeof process &&
        process.env &&
        process.env.NODE_DEBUG &&
        /\bsemver\b/i.test(process.env.NODE_DEBUG)
          ? function() {
              var e = Array.prototype.slice.call(arguments, 0);
              e.unshift("SEMVER"), console.log.apply(console, e);
            }
          : function() {}),
      (t.SEMVER_SPEC_VERSION = "2.0.0");
    var r = 256,
      i = Number.MAX_SAFE_INTEGER || 9007199254740991,
      o = (t.re = []),
      s = (t.src = []),
      a = 0,
      u = a++;
    s[u] = "0|[1-9]\\d*";
    var c = a++;
    s[c] = "[0-9]+";
    var l = a++;
    s[l] = "\\d*[a-zA-Z-][a-zA-Z0-9-]*";
    var f = a++;
    s[f] = "(" + s[u] + ")\\.(" + s[u] + ")\\.(" + s[u] + ")";
    var p = a++;
    s[p] = "(" + s[c] + ")\\.(" + s[c] + ")\\.(" + s[c] + ")";
    var h = a++;
    s[h] = "(?:" + s[u] + "|" + s[l] + ")";
    var d = a++;
    s[d] = "(?:" + s[c] + "|" + s[l] + ")";
    var v = a++;
    s[v] = "(?:-(" + s[h] + "(?:\\." + s[h] + ")*))";
    var y = a++;
    s[y] = "(?:-?(" + s[d] + "(?:\\." + s[d] + ")*))";
    var g = a++;
    s[g] = "[0-9A-Za-z-]+";
    var b = a++;
    s[b] = "(?:\\+(" + s[g] + "(?:\\." + s[g] + ")*))";
    var m = a++,
      _ = "v?" + s[f] + s[v] + "?" + s[b] + "?";
    s[m] = "^" + _ + "$";
    var w = "[v=\\s]*" + s[p] + s[y] + "?" + s[b] + "?",
      k = a++;
    s[k] = "^" + w + "$";
    var S = a++;
    s[S] = "((?:<|>)?=?)";
    var O = a++;
    s[O] = s[c] + "|x|X|\\*";
    var x = a++;
    s[x] = s[u] + "|x|X|\\*";
    var P = a++;
    s[P] =
      "[v=\\s]*(" +
      s[x] +
      ")(?:\\.(" +
      s[x] +
      ")(?:\\.(" +
      s[x] +
      ")(?:" +
      s[v] +
      ")?" +
      s[b] +
      "?)?)?";
    var E = a++;
    s[E] =
      "[v=\\s]*(" +
      s[O] +
      ")(?:\\.(" +
      s[O] +
      ")(?:\\.(" +
      s[O] +
      ")(?:" +
      s[y] +
      ")?" +
      s[b] +
      "?)?)?";
    var T = a++;
    s[T] = "^" + s[S] + "\\s*" + s[P] + "$";
    var j = a++;
    s[j] = "^" + s[S] + "\\s*" + s[E] + "$";
    var C = a++;
    s[C] =
      "(?:^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])";
    var M = a++;
    s[M] = "(?:~>?)";
    var A = a++;
    (s[A] = "(\\s*)" + s[M] + "\\s+"), (o[A] = new RegExp(s[A], "g"));
    var R = a++;
    s[R] = "^" + s[M] + s[P] + "$";
    var N = a++;
    s[N] = "^" + s[M] + s[E] + "$";
    var I = a++;
    s[I] = "(?:\\^)";
    var D = a++;
    (s[D] = "(\\s*)" + s[I] + "\\s+"), (o[D] = new RegExp(s[D], "g"));
    var L = a++;
    s[L] = "^" + s[I] + s[P] + "$";
    var U = a++;
    s[U] = "^" + s[I] + s[E] + "$";
    var K = a++;
    s[K] = "^" + s[S] + "\\s*(" + w + ")$|^$";
    var F = a++;
    s[F] = "^" + s[S] + "\\s*(" + _ + ")$|^$";
    var B = a++;
    (s[B] = "(\\s*)" + s[S] + "\\s*(" + w + "|" + s[P] + ")"),
      (o[B] = new RegExp(s[B], "g"));
    var G = a++;
    s[G] = "^\\s*(" + s[P] + ")\\s+-\\s+(" + s[P] + ")\\s*$";
    var H = a++;
    s[H] = "^\\s*(" + s[E] + ")\\s+-\\s+(" + s[E] + ")\\s*$";
    var z = a++;
    s[z] = "(<|>)?=?\\s*\\*";
    for (var V = 0; V < 35; V++) n(V, s[V]), o[V] || (o[V] = new RegExp(s[V]));
    function q(e, t) {
      if (
        ((t && "object" == typeof t) ||
          (t = { loose: !!t, includePrerelease: !1 }),
        e instanceof $)
      )
        return e;
      if ("string" != typeof e) return null;
      if (e.length > r) return null;
      if (!(t.loose ? o[k] : o[m]).test(e)) return null;
      try {
        return new $(e, t);
      } catch (e) {
        return null;
      }
    }
    function $(e, t) {
      if (
        ((t && "object" == typeof t) ||
          (t = { loose: !!t, includePrerelease: !1 }),
        e instanceof $)
      ) {
        if (e.loose === t.loose) return e;
        e = e.version;
      } else if ("string" != typeof e) throw new TypeError("Invalid Version: " + e);
      if (e.length > r)
        throw new TypeError("version is longer than " + r + " characters");
      if (!(this instanceof $)) return new $(e, t);
      n("SemVer", e, t), (this.options = t), (this.loose = !!t.loose);
      var s = e.trim().match(t.loose ? o[k] : o[m]);
      if (!s) throw new TypeError("Invalid Version: " + e);
      if (
        ((this.raw = e),
        (this.major = +s[1]),
        (this.minor = +s[2]),
        (this.patch = +s[3]),
        this.major > i || this.major < 0)
      )
        throw new TypeError("Invalid major version");
      if (this.minor > i || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > i || this.patch < 0)
        throw new TypeError("Invalid patch version");
      s[4]
        ? (this.prerelease = s[4].split(".").map(function(e) {
            if (/^[0-9]+$/.test(e)) {
              var t = +e;
              if (t >= 0 && t < i) return t;
            }
            return e;
          }))
        : (this.prerelease = []),
        (this.build = s[5] ? s[5].split(".") : []),
        this.format();
    }
    (t.parse = q),
      (t.valid = function(e, t) {
        var n = q(e, t);
        return n ? n.version : null;
      }),
      (t.clean = function(e, t) {
        var n = q(e.trim().replace(/^[=v]+/, ""), t);
        return n ? n.version : null;
      }),
      (t.SemVer = $),
      ($.prototype.format = function() {
        return (
          (this.version = this.major + "." + this.minor + "." + this.patch),
          this.prerelease.length &&
            (this.version += "-" + this.prerelease.join(".")),
          this.version
        );
      }),
      ($.prototype.toString = function() {
        return this.version;
      }),
      ($.prototype.compare = function(e) {
        return (
          n("SemVer.compare", this.version, this.options, e),
          e instanceof $ || (e = new $(e, this.options)),
          this.compareMain(e) || this.comparePre(e)
        );
      }),
      ($.prototype.compareMain = function(e) {
        return (
          e instanceof $ || (e = new $(e, this.options)),
          J(this.major, e.major) ||
            J(this.minor, e.minor) ||
            J(this.patch, e.patch)
        );
      }),
      ($.prototype.comparePre = function(e) {
        if (
          (e instanceof $ || (e = new $(e, this.options)),
          this.prerelease.length && !e.prerelease.length)
        )
          return -1;
        if (!this.prerelease.length && e.prerelease.length) return 1;
        if (!this.prerelease.length && !e.prerelease.length) return 0;
        var t = 0;
        do {
          var r = this.prerelease[t],
            i = e.prerelease[t];
          if ((n("prerelease compare", t, r, i), void 0 === r && void 0 === i))
            return 0;
          if (void 0 === i) return 1;
          if (void 0 === r) return -1;
          if (r !== i) return J(r, i);
        } while (++t);
      }),
      ($.prototype.inc = function(e, t) {
        switch (e) {
          case "premajor":
            (this.prerelease.length = 0),
              (this.patch = 0),
              (this.minor = 0),
              this.major++,
              this.inc("pre", t);
            break;
          case "preminor":
            (this.prerelease.length = 0),
              (this.patch = 0),
              this.minor++,
              this.inc("pre", t);
            break;
          case "prepatch":
            (this.prerelease.length = 0),
              this.inc("patch", t),
              this.inc("pre", t);
            break;
          case "prerelease":
            0 === this.prerelease.length && this.inc("patch", t),
              this.inc("pre", t);
            break;
          case "major":
            (0 === this.minor &&
              0 === this.patch &&
              0 !== this.prerelease.length) ||
              this.major++,
              (this.minor = 0),
              (this.patch = 0),
              (this.prerelease = []);
            break;
          case "minor":
            (0 === this.patch && 0 !== this.prerelease.length) || this.minor++,
              (this.patch = 0),
              (this.prerelease = []);
            break;
          case "patch":
            0 === this.prerelease.length && this.patch++,
              (this.prerelease = []);
            break;
          case "pre":
            if (0 === this.prerelease.length) this.prerelease = [0];
            else {
              for (var n = this.prerelease.length; --n >= 0; )
                "number" == typeof this.prerelease[n] &&
                  (this.prerelease[n]++, (n = -2));
              -1 === n && this.prerelease.push(0);
            }
            t &&
              (this.prerelease[0] === t
                ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0])
                : (this.prerelease = [t, 0]));
            break;
          default:
            throw new Error("invalid increment argument: " + e);
        }
        return this.format(), (this.raw = this.version), this;
      }),
      (t.inc = function(e, t, n, r) {
        "string" == typeof n && ((r = n), (n = void 0));
        try {
          return new $(e, n).inc(t, r).version;
        } catch (e) {
          return null;
        }
      }),
      (t.diff = function(e, t) {
        if (Z(e, t)) return null;
        var n = q(e),
          r = q(t),
          i = "";
        if (n.prerelease.length || r.prerelease.length) {
          i = "pre";
          var o = "prerelease";
        }
        for (var s in n)
          if (
            ("major" === s || "minor" === s || "patch" === s) &&
            n[s] !== r[s]
          )
            return i + s;
        return o;
      }),
      (t.compareIdentifiers = J);
    var W = /^[0-9]+$/;
    function J(e, t) {
      var n = W.test(e),
        r = W.test(t);
      return (
        n && r && ((e = +e), (t = +t)),
        e === t ? 0 : n && !r ? -1 : r && !n ? 1 : e < t ? -1 : 1
      );
    }
    function X(e, t, n) {
      return new $(e, n).compare(new $(t, n));
    }
    function Q(e, t, n) {
      return X(e, t, n) > 0;
    }
    function Y(e, t, n) {
      return X(e, t, n) < 0;
    }
    function Z(e, t, n) {
      return 0 === X(e, t, n);
    }
    function ee(e, t, n) {
      return 0 !== X(e, t, n);
    }
    function te(e, t, n) {
      return X(e, t, n) >= 0;
    }
    function ne(e, t, n) {
      return X(e, t, n) <= 0;
    }
    function re(e, t, n, r) {
      switch (t) {
        case "===":
          return (
            "object" == typeof e && (e = e.version),
            "object" == typeof n && (n = n.version),
            e === n
          );
        case "!==":
          return (
            "object" == typeof e && (e = e.version),
            "object" == typeof n && (n = n.version),
            e !== n
          );
        case "":
        case "=":
        case "==":
          return Z(e, n, r);
        case "!=":
          return ee(e, n, r);
        case ">":
          return Q(e, n, r);
        case ">=":
          return te(e, n, r);
        case "<":
          return Y(e, n, r);
        case "<=":
          return ne(e, n, r);
        default:
          throw new TypeError("Invalid operator: " + t);
      }
    }
    function ie(e, t) {
      if (
        ((t && "object" == typeof t) ||
          (t = { loose: !!t, includePrerelease: !1 }),
        e instanceof ie)
      ) {
        if (e.loose === !!t.loose) return e;
        e = e.value;
      }
      if (!(this instanceof ie)) return new ie(e, t);
      n("comparator", e, t),
        (this.options = t),
        (this.loose = !!t.loose),
        this.parse(e),
        this.semver === oe
          ? (this.value = "")
          : (this.value = this.operator + this.semver.version),
        n("comp", this);
    }
    (t.rcompareIdentifiers = function(e, t) {
      return J(t, e);
    }),
      (t.major = function(e, t) {
        return new $(e, t).major;
      }),
      (t.minor = function(e, t) {
        return new $(e, t).minor;
      }),
      (t.patch = function(e, t) {
        return new $(e, t).patch;
      }),
      (t.compare = X),
      (t.compareLoose = function(e, t) {
        return X(e, t, !0);
      }),
      (t.rcompare = function(e, t, n) {
        return X(t, e, n);
      }),
      (t.sort = function(e, n) {
        return e.sort(function(e, r) {
          return t.compare(e, r, n);
        });
      }),
      (t.rsort = function(e, n) {
        return e.sort(function(e, r) {
          return t.rcompare(e, r, n);
        });
      }),
      (t.gt = Q),
      (t.lt = Y),
      (t.eq = Z),
      (t.neq = ee),
      (t.gte = te),
      (t.lte = ne),
      (t.cmp = re),
      (t.Comparator = ie);
    var oe = {};
    function se(e, t) {
      if (
        ((t && "object" == typeof t) ||
          (t = { loose: !!t, includePrerelease: !1 }),
        e instanceof se)
      )
        return e.loose === !!t.loose &&
          e.includePrerelease === !!t.includePrerelease
          ? e
          : new se(e.raw, t);
      if (e instanceof ie) return new se(e.value, t);
      if (!(this instanceof se)) return new se(e, t);
      if (
        ((this.options = t),
        (this.loose = !!t.loose),
        (this.includePrerelease = !!t.includePrerelease),
        (this.raw = e),
        (this.set = e
          .split(/\s*\|\|\s*/)
          .map(function(e) {
            return this.parseRange(e.trim());
          }, this)
          .filter(function(e) {
            return e.length;
          })),
        !this.set.length)
      )
        throw new TypeError("Invalid SemVer Range: " + e);
      this.format();
    }
    function ae(e) {
      return !e || "x" === e.toLowerCase() || "*" === e;
    }
    function ue(e, t, n, r, i, o, s, a, u, c, l, f, p) {
      return (
        (t = ae(n)
          ? ""
          : ae(r)
          ? ">=" + n + ".0.0"
          : ae(i)
          ? ">=" + n + "." + r + ".0"
          : ">=" + t) +
        " " +
        (a = ae(u)
          ? ""
          : ae(c)
          ? "<" + (+u + 1) + ".0.0"
          : ae(l)
          ? "<" + u + "." + (+c + 1) + ".0"
          : f
          ? "<=" + u + "." + c + "." + l + "-" + f
          : "<=" + a)
      ).trim();
    }
    function ce(e, t, r) {
      for (var i = 0; i < e.length; i++) if (!e[i].test(t)) return !1;
      if (t.prerelease.length && !r.includePrerelease) {
        for (i = 0; i < e.length; i++)
          if (
            (n(e[i].semver),
            e[i].semver !== oe && e[i].semver.prerelease.length > 0)
          ) {
            var o = e[i].semver;
            if (
              o.major === t.major &&
              o.minor === t.minor &&
              o.patch === t.patch
            )
              return !0;
          }
        return !1;
      }
      return !0;
    }
    function le(e, t, n) {
      try {
        t = new se(t, n);
      } catch (e) {
        return !1;
      }
      return t.test(e);
    }
    function fe(e, t, n, r) {
      var i, o, s, a, u;
      switch (((e = new $(e, r)), (t = new se(t, r)), n)) {
        case ">":
          (i = Q), (o = ne), (s = Y), (a = ">"), (u = ">=");
          break;
        case "<":
          (i = Y), (o = te), (s = Q), (a = "<"), (u = "<=");
          break;
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"');
      }
      if (le(e, t, r)) return !1;
      for (var c = 0; c < t.set.length; ++c) {
        var l = t.set[c],
          f = null,
          p = null;
        if (
          (l.forEach(function(e) {
            e.semver === oe && (e = new ie(">=0.0.0")),
              (f = f || e),
              (p = p || e),
              i(e.semver, f.semver, r)
                ? (f = e)
                : s(e.semver, p.semver, r) && (p = e);
          }),
          f.operator === a || f.operator === u)
        )
          return !1;
        if ((!p.operator || p.operator === a) && o(e, p.semver)) return !1;
        if (p.operator === u && s(e, p.semver)) return !1;
      }
      return !0;
    }
    (ie.prototype.parse = function(e) {
      var t = this.options.loose ? o[K] : o[F],
        n = e.match(t);
      if (!n) throw new TypeError("Invalid comparator: " + e);
      (this.operator = n[1]),
        "=" === this.operator && (this.operator = ""),
        n[2]
          ? (this.semver = new $(n[2], this.options.loose))
          : (this.semver = oe);
    }),
      (ie.prototype.toString = function() {
        return this.value;
      }),
      (ie.prototype.test = function(e) {
        return (
          n("Comparator.test", e, this.options.loose),
          this.semver === oe ||
            ("string" == typeof e && (e = new $(e, this.options)),
            re(e, this.operator, this.semver, this.options))
        );
      }),
      (ie.prototype.intersects = function(e, t) {
        if (!(e instanceof ie)) throw new TypeError("a Comparator is required");
        var n;
        if (
          ((t && "object" == typeof t) ||
            (t = { loose: !!t, includePrerelease: !1 }),
          "" === this.operator)
        )
          return (n = new se(e.value, t)), le(this.value, n, t);
        if ("" === e.operator)
          return (n = new se(this.value, t)), le(e.semver, n, t);
        var r = !(
            (">=" !== this.operator && ">" !== this.operator) ||
            (">=" !== e.operator && ">" !== e.operator)
          ),
          i = !(
            ("<=" !== this.operator && "<" !== this.operator) ||
            ("<=" !== e.operator && "<" !== e.operator)
          ),
          o = this.semver.version === e.semver.version,
          s = !(
            (">=" !== this.operator && "<=" !== this.operator) ||
            (">=" !== e.operator && "<=" !== e.operator)
          ),
          a =
            re(this.semver, "<", e.semver, t) &&
            (">=" === this.operator || ">" === this.operator) &&
            ("<=" === e.operator || "<" === e.operator),
          u =
            re(this.semver, ">", e.semver, t) &&
            ("<=" === this.operator || "<" === this.operator) &&
            (">=" === e.operator || ">" === e.operator);
        return r || i || (o && s) || a || u;
      }),
      (t.Range = se),
      (se.prototype.format = function() {
        return (
          (this.range = this.set
            .map(function(e) {
              return e.join(" ").trim();
            })
            .join("||")
            .trim()),
          this.range
        );
      }),
      (se.prototype.toString = function() {
        return this.range;
      }),
      (se.prototype.parseRange = function(e) {
        var t = this.options.loose;
        e = e.trim();
        var r = t ? o[H] : o[G];
        (e = e.replace(r, ue)),
          n("hyphen replace", e),
          (e = e.replace(o[B], "$1$2$3")),
          n("comparator trim", e, o[B]),
          (e = (e = (e = e.replace(o[A], "$1~")).replace(o[D], "$1^"))
            .split(/\s+/)
            .join(" "));
        var i = t ? o[K] : o[F],
          s = e
            .split(" ")
            .map(function(e) {
              return (function(e, t) {
                return (
                  n("comp", e, t),
                  (e = (function(e, t) {
                    return e
                      .trim()
                      .split(/\s+/)
                      .map(function(e) {
                        return (function(e, t) {
                          n("caret", e, t);
                          var r = t.loose ? o[U] : o[L];
                          return e.replace(r, function(t, r, i, o, s) {
                            var a;
                            return (
                              n("caret", e, t, r, i, o, s),
                              ae(r)
                                ? (a = "")
                                : ae(i)
                                ? (a = ">=" + r + ".0.0 <" + (+r + 1) + ".0.0")
                                : ae(o)
                                ? (a =
                                    "0" === r
                                      ? ">=" +
                                        r +
                                        "." +
                                        i +
                                        ".0 <" +
                                        r +
                                        "." +
                                        (+i + 1) +
                                        ".0"
                                      : ">=" +
                                        r +
                                        "." +
                                        i +
                                        ".0 <" +
                                        (+r + 1) +
                                        ".0.0")
                                : s
                                ? (n("replaceCaret pr", s),
                                  (a =
                                    "0" === r
                                      ? "0" === i
                                        ? ">=" +
                                          r +
                                          "." +
                                          i +
                                          "." +
                                          o +
                                          "-" +
                                          s +
                                          " <" +
                                          r +
                                          "." +
                                          i +
                                          "." +
                                          (+o + 1)
                                        : ">=" +
                                          r +
                                          "." +
                                          i +
                                          "." +
                                          o +
                                          "-" +
                                          s +
                                          " <" +
                                          r +
                                          "." +
                                          (+i + 1) +
                                          ".0"
                                      : ">=" +
                                        r +
                                        "." +
                                        i +
                                        "." +
                                        o +
                                        "-" +
                                        s +
                                        " <" +
                                        (+r + 1) +
                                        ".0.0"))
                                : (n("no pr"),
                                  (a =
                                    "0" === r
                                      ? "0" === i
                                        ? ">=" +
                                          r +
                                          "." +
                                          i +
                                          "." +
                                          o +
                                          " <" +
                                          r +
                                          "." +
                                          i +
                                          "." +
                                          (+o + 1)
                                        : ">=" +
                                          r +
                                          "." +
                                          i +
                                          "." +
                                          o +
                                          " <" +
                                          r +
                                          "." +
                                          (+i + 1) +
                                          ".0"
                                      : ">=" +
                                        r +
                                        "." +
                                        i +
                                        "." +
                                        o +
                                        " <" +
                                        (+r + 1) +
                                        ".0.0")),
                              n("caret return", a),
                              a
                            );
                          });
                        })(e, t);
                      })
                      .join(" ");
                  })(e, t)),
                  n("caret", e),
                  (e = (function(e, t) {
                    return e
                      .trim()
                      .split(/\s+/)
                      .map(function(e) {
                        return (function(e, t) {
                          var r = t.loose ? o[N] : o[R];
                          return e.replace(r, function(t, r, i, o, s) {
                            var a;
                            return (
                              n("tilde", e, t, r, i, o, s),
                              ae(r)
                                ? (a = "")
                                : ae(i)
                                ? (a = ">=" + r + ".0.0 <" + (+r + 1) + ".0.0")
                                : ae(o)
                                ? (a =
                                    ">=" +
                                    r +
                                    "." +
                                    i +
                                    ".0 <" +
                                    r +
                                    "." +
                                    (+i + 1) +
                                    ".0")
                                : s
                                ? (n("replaceTilde pr", s),
                                  (a =
                                    ">=" +
                                    r +
                                    "." +
                                    i +
                                    "." +
                                    o +
                                    "-" +
                                    s +
                                    " <" +
                                    r +
                                    "." +
                                    (+i + 1) +
                                    ".0"))
                                : (a =
                                    ">=" +
                                    r +
                                    "." +
                                    i +
                                    "." +
                                    o +
                                    " <" +
                                    r +
                                    "." +
                                    (+i + 1) +
                                    ".0"),
                              n("tilde return", a),
                              a
                            );
                          });
                        })(e, t);
                      })
                      .join(" ");
                  })(e, t)),
                  n("tildes", e),
                  (e = (function(e, t) {
                    return (
                      n("replaceXRanges", e, t),
                      e
                        .split(/\s+/)
                        .map(function(e) {
                          return (function(e, t) {
                            e = e.trim();
                            var r = t.loose ? o[j] : o[T];
                            return e.replace(r, function(t, r, i, o, s, a) {
                              n("xRange", e, t, r, i, o, s, a);
                              var u = ae(i),
                                c = u || ae(o),
                                l = c || ae(s),
                                f = l;
                              return (
                                "=" === r && f && (r = ""),
                                u
                                  ? (t =
                                      ">" === r || "<" === r ? "<0.0.0" : "*")
                                  : r && f
                                  ? (c && (o = 0),
                                    (s = 0),
                                    ">" === r
                                      ? ((r = ">="),
                                        c
                                          ? ((i = +i + 1), (o = 0), (s = 0))
                                          : ((o = +o + 1), (s = 0)))
                                      : "<=" === r &&
                                        ((r = "<"),
                                        c ? (i = +i + 1) : (o = +o + 1)),
                                    (t = r + i + "." + o + "." + s))
                                  : c
                                  ? (t =
                                      ">=" + i + ".0.0 <" + (+i + 1) + ".0.0")
                                  : l &&
                                    (t =
                                      ">=" +
                                      i +
                                      "." +
                                      o +
                                      ".0 <" +
                                      i +
                                      "." +
                                      (+o + 1) +
                                      ".0"),
                                n("xRange return", t),
                                t
                              );
                            });
                          })(e, t);
                        })
                        .join(" ")
                    );
                  })(e, t)),
                  n("xrange", e),
                  (e = (function(e, t) {
                    return n("replaceStars", e, t), e.trim().replace(o[z], "");
                  })(e, t)),
                  n("stars", e),
                  e
                );
              })(e, this.options);
            }, this)
            .join(" ")
            .split(/\s+/);
        return (
          this.options.loose &&
            (s = s.filter(function(e) {
              return !!e.match(i);
            })),
          (s = s.map(function(e) {
            return new ie(e, this.options);
          }, this))
        );
      }),
      (se.prototype.intersects = function(e, t) {
        if (!(e instanceof se)) throw new TypeError("a Range is required");
        return this.set.some(function(n) {
          return n.every(function(n) {
            return e.set.some(function(e) {
              return e.every(function(e) {
                return n.intersects(e, t);
              });
            });
          });
        });
      }),
      (t.toComparators = function(e, t) {
        return new se(e, t).set.map(function(e) {
          return e
            .map(function(e) {
              return e.value;
            })
            .join(" ")
            .trim()
            .split(" ");
        });
      }),
      (se.prototype.test = function(e) {
        if (!e) return !1;
        "string" == typeof e && (e = new $(e, this.options));
        for (var t = 0; t < this.set.length; t++)
          if (ce(this.set[t], e, this.options)) return !0;
        return !1;
      }),
      (t.satisfies = le),
      (t.maxSatisfying = function(e, t, n) {
        var r = null,
          i = null;
        try {
          var o = new se(t, n);
        } catch (e) {
          return null;
        }
        return (
          e.forEach(function(e) {
            o.test(e) &&
              ((r && -1 !== i.compare(e)) || (i = new $((r = e), n)));
          }),
          r
        );
      }),
      (t.minSatisfying = function(e, t, n) {
        var r = null,
          i = null;
        try {
          var o = new se(t, n);
        } catch (e) {
          return null;
        }
        return (
          e.forEach(function(e) {
            o.test(e) && ((r && 1 !== i.compare(e)) || (i = new $((r = e), n)));
          }),
          r
        );
      }),
      (t.minVersion = function(e, t) {
        e = new se(e, t);
        var n = new $("0.0.0");
        if (e.test(n)) return n;
        if (((n = new $("0.0.0-0")), e.test(n))) return n;
        n = null;
        for (var r = 0; r < e.set.length; ++r) {
          var i = e.set[r];
          i.forEach(function(e) {
            var t = new $(e.semver.version);
            switch (e.operator) {
              case ">":
                0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0),
                  (t.raw = t.format());
              case "":
              case ">=":
                (n && !Q(n, t)) || (n = t);
                break;
              case "<":
              case "<=":
                break;
              default:
                throw new Error("Unexpected operation: " + e.operator);
            }
          });
        }
        if (n && e.test(n)) return n;
        return null;
      }),
      (t.validRange = function(e, t) {
        try {
          return new se(e, t).range || "*";
        } catch (e) {
          return null;
        }
      }),
      (t.ltr = function(e, t, n) {
        return fe(e, t, "<", n);
      }),
      (t.gtr = function(e, t, n) {
        return fe(e, t, ">", n);
      }),
      (t.outside = fe),
      (t.prerelease = function(e, t) {
        var n = q(e, t);
        return n && n.prerelease.length ? n.prerelease : null;
      }),
      (t.intersects = function(e, t, n) {
        return (e = new se(e, n)), (t = new se(t, n)), e.intersects(t);
      }),
      (t.coerce = function(e) {
        if (e instanceof $) return e;
        if ("string" != typeof e) return null;
        var t = e.match(o[C]);
        if (null == t) return null;
        return q(t[1] + "." + (t[2] || "0") + "." + (t[3] || "0"));
      });
  }),
  i =
    (r.SEMVER_SPEC_VERSION,
    r.re,
    r.src,
    r.parse,
    r.valid,
    r.clean,
    r.SemVer,
    r.inc,
    r.diff,
    r.compareIdentifiers,
    r.rcompareIdentifiers,
    r.major,
    r.minor,
    r.patch,
    r.compare,
    r.compareLoose,
    r.rcompare,
    r.sort,
    r.rsort,
    r.gt,
    r.lt,
    r.eq,
    r.neq,
    r.gte,
    r.lte,
    r.cmp,
    r.Comparator,
    r.Range,
    r.toComparators,
    r.satisfies,
    r.maxSatisfying,
    r.minSatisfying,
    r.minVersion,
    r.validRange,
    r.ltr,
    r.gtr,
    r.outside,
    r.prerelease,
    r.intersects,
    r.coerce,
    {
      MULTIPLE_FILES: "21.0.0",
      PROJECT_DEPENDENCIES: "25.0.0",
      TYPESCRIPT: "31.0.0",
      UNIMODULE_IMPORTS: "33.0.0"
    }),
  o = { "31.0.0": [], "32.0.0": [], "33.0.0": [] },
  s = function(e, t) {
    return !!o.hasOwnProperty(e) && (r.gte(e, i[t]) || o[e].includes(t));
  },
  a = Object.freeze({
    versions: o,
    defaultSDKVersion: "33.0.0",
    sdkSupportsFeature: s
  }),
  u = n(function(e) {
    var t = (e.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = t);
  }),
  c = n(function(e) {
    var t = (e.exports = { version: "2.6.9" });
    "number" == typeof __e && (__e = t);
  }),
  l =
    (c.version,
    function(e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!");
      return e;
    }),
  f = function(e, t, n) {
    if ((l(e), void 0 === t)) return e;
    switch (n) {
      case 1:
        return function(n) {
          return e.call(t, n);
        };
      case 2:
        return function(n, r) {
          return e.call(t, n, r);
        };
      case 3:
        return function(n, r, i) {
          return e.call(t, n, r, i);
        };
    }
    return function() {
      return e.apply(t, arguments);
    };
  },
  p = function(e) {
    return "object" == typeof e ? null !== e : "function" == typeof e;
  },
  h = function(e) {
    if (!p(e)) throw TypeError(e + " is not an object!");
    return e;
  },
  d = function(e) {
    try {
      return !!e();
    } catch (e) {
      return !0;
    }
  },
  v = !d(function() {
    return (
      7 !=
      Object.defineProperty({}, "a", {
        get: function() {
          return 7;
        }
      }).a
    );
  }),
  y = u.document,
  g = p(y) && p(y.createElement),
  b = function(e) {
    return g ? y.createElement(e) : {};
  },
  m =
    !v &&
    !d(function() {
      return (
        7 !=
        Object.defineProperty(b("div"), "a", {
          get: function() {
            return 7;
          }
        }).a
      );
    }),
  _ = function(e, t) {
    if (!p(e)) return e;
    var n, r;
    if (t && "function" == typeof (n = e.toString) && !p((r = n.call(e))))
      return r;
    if ("function" == typeof (n = e.valueOf) && !p((r = n.call(e)))) return r;
    if (!t && "function" == typeof (n = e.toString) && !p((r = n.call(e))))
      return r;
    throw TypeError("Can't convert object to primitive value");
  },
  w = Object.defineProperty,
  k = {
    f: v
      ? Object.defineProperty
      : function(e, t, n) {
          if ((h(e), (t = _(t, !0)), h(n), m))
            try {
              return w(e, t, n);
            } catch (e) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported!");
          return "value" in n && (e[t] = n.value), e;
        }
  },
  S = function(e, t) {
    return {
      enumerable: !(1 & e),
      configurable: !(2 & e),
      writable: !(4 & e),
      value: t
    };
  },
  O = v
    ? function(e, t, n) {
        return k.f(e, t, S(1, n));
      }
    : function(e, t, n) {
        return (e[t] = n), e;
      },
  x = {}.hasOwnProperty,
  P = function(e, t) {
    return x.call(e, t);
  },
  E = function(e, t, n) {
    var r,
      i,
      o,
      s = e & E.F,
      a = e & E.G,
      l = e & E.S,
      p = e & E.P,
      h = e & E.B,
      d = e & E.W,
      v = a ? c : c[t] || (c[t] = {}),
      y = v.prototype,
      g = a ? u : l ? u[t] : (u[t] || {}).prototype;
    for (r in (a && (n = t), n))
      ((i = !s && g && void 0 !== g[r]) && P(v, r)) ||
        ((o = i ? g[r] : n[r]),
        (v[r] =
          a && "function" != typeof g[r]
            ? n[r]
            : h && i
            ? f(o, u)
            : d && g[r] == o
            ? (function(e) {
                var t = function(t, n, r) {
                  if (this instanceof e) {
                    switch (arguments.length) {
                      case 0:
                        return new e();
                      case 1:
                        return new e(t);
                      case 2:
                        return new e(t, n);
                    }
                    return new e(t, n, r);
                  }
                  return e.apply(this, arguments);
                };
                return (t.prototype = e.prototype), t;
              })(o)
            : p && "function" == typeof o
            ? f(Function.call, o)
            : o),
        p &&
          (((v.virtual || (v.virtual = {}))[r] = o),
          e & E.R && y && !y[r] && O(y, r, o)));
  };
(E.F = 1),
  (E.G = 2),
  (E.S = 4),
  (E.P = 8),
  (E.B = 16),
  (E.W = 32),
  (E.U = 64),
  (E.R = 128);
var T = E;
T(T.S + T.F * !v, "Object", { defineProperty: k.f });
var j = c.Object,
  C = function(e, t, n) {
    return j.defineProperty(e, t, n);
  },
  M = n(function(e) {
    e.exports = { default: C, __esModule: !0 };
  });
t(M);
var A,
  R,
  N,
  I,
  D,
  L,
  U = t(
    n(function(e, t) {
      t.__esModule = !0;
      var n,
        r = (n = M) && n.__esModule ? n : { default: n };
      t.default = function(e, t, n) {
        return (
          t in e
            ? (0, r.default)(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      };
    })
  ),
  K = [
    "ARTSerializablePath",
    "ActionSheetIOS",
    "ActivityIndicator",
    "Alert",
    "AlertIOS",
    "Animated",
    "AnimatedAddition",
    "AnimatedDiffClamp",
    "AnimatedDivision",
    "AnimatedEvent",
    "AnimatedImplementation",
    "AnimatedInterpolation",
    "AnimatedModulo",
    "AnimatedMultiplication",
    "AnimatedNode",
    "AnimatedProps",
    "AnimatedStyle",
    "AnimatedTracking",
    "AnimatedTransform",
    "AnimatedValue",
    "AnimatedValueXY",
    "AnimatedWeb",
    "AnimatedWithChildren",
    "Animation",
    "AppContainer",
    "AppRegistry",
    "AppState",
    "Array.es6",
    "Array.prototype.es6",
    "AssetRegistry",
    "AssetSourceResolver",
    "AsyncStorage",
    "BackAndroid",
    "BatchedBridge",
    "Batchinator",
    "Blob",
    "BlobTypes",
    "BorderBox",
    "BoundingDimensions",
    "BugReporting",
    "Button",
    "CameraRoll",
    "Clipboard",
    "ColorPropType",
    "DebugEnvironment",
    "DecayAnimation",
    "DeviceInfo",
    "Dimensions",
    "DocumentSelectionState",
    "Easing",
    "EdgeInsetsPropType",
    "ElementBox",
    "ElementProperties",
    "EmitterSubscription",
    "ErrorUtils",
    "EventEmitter",
    "EventEmitterWithHolding",
    "EventHolder",
    "EventSubscription",
    "EventSubscriptionVendor",
    "EventValidator",
    "ExceptionsManager",
    "FillRateHelper",
    "FlatList",
    "FormData",
    "FrameRateLogger",
    "Geolocation",
    "HMRClient",
    "HeapCapture",
    "I18nManager",
    "ImageBackground",
    "ImageEditor",
    "ImagePickerIOS",
    "ImageResizeMode",
    "ImageSource",
    "ImageSourcePropType",
    "ImageStore",
    "ImageStylePropTypes",
    "Incremental",
    "IncrementalGroup",
    "IncrementalPresenter",
    "InitializeCore",
    "InspectorAgent",
    "InspectorOverlay",
    "InspectorPanel",
    "InteractionManager",
    "InteractionMixin",
    "JSEventLoopWatchdog",
    "JSTimers",
    "Keyboard",
    "KeyboardAvoidingView",
    "LayoutAnimation",
    "LayoutPropTypes",
    "LazyRenderer",
    "Linking",
    "ListView",
    "ListViewDataSource",
    "Map",
    "MatrixMath",
    "MessageQueue",
    "MetroListView",
    "MissingNativeEventEmitterShim",
    "Modal",
    "NativeAnimatedHelper",
    "NativeEventEmitter",
    "NativeMethodsMixin",
    "NativeModules",
    "NetInfo",
    "NetworkAgent",
    "NetworkOverlay",
    "Number.es6",
    "Object.es6",
    "Object.es7",
    "PanResponder",
    "PerformanceLogger",
    "PerformanceOverlay",
    "PermissionsAndroid",
    "Picker",
    "PixelRatio",
    "PointPropType",
    "PooledClass",
    "Position",
    "Promise",
    "QuickPerformanceLogger",
    "RCTDeviceEventEmitter",
    "RCTEventEmitter",
    "RCTLog",
    "RCTNativeAppEventEmitter",
    "React",
    "ReactDebugTool",
    "ReactGlobalSharedState",
    "ReactNative",
    "ReactNativeART",
    "ReactNativeBridgeEventPlugin",
    "ReactNativeComponentTree",
    "ReactNativeFeatureFlags",
    "ReactNativePropRegistry",
    "ReactNativeStyleAttributes",
    "ReactNativeTypes",
    "ReactNativeVersion",
    "ReactNativeVersionCheck",
    "ReactNativeViewAttributes",
    "ReactPerf",
    "ReactTypes",
    "RefreshControl",
    "RelativeImageStub",
    "SamplingProfiler",
    "SceneTracker",
    "ScrollResponder",
    "ScrollView",
    "ScrollViewStickyHeader",
    "SectionList",
    "Set",
    "ShadowPropTypesIOS",
    "Share",
    "Slider",
    "SpringAnimation",
    "SpringConfig",
    "StaticContainer.react",
    "StaticRenderer",
    "StatusBar",
    "String.prototype.es6",
    "StyleSheet",
    "StyleSheetPropType",
    "StyleSheetTypes",
    "StyleSheetValidation",
    "Subscribable",
    "SwipeableFlatList",
    "SwipeableListView",
    "SwipeableListViewDataSource",
    "SwipeableQuickActionButton",
    "SwipeableQuickActions",
    "SwipeableRow",
    "Switch",
    "Systrace",
    "TVViewPropTypes",
    "TaskQueue",
    "Text",
    "TextInput",
    "TextInputState",
    "TextStylePropTypes",
    "TextUpdateTest",
    "TimingAnimation",
    "TouchHistoryMath",
    "Touchable",
    "TouchableBounce",
    "TouchableHighlight",
    "TouchableOpacity",
    "TouchableWithoutFeedback",
    "TransformPropTypes",
    "UIManager",
    "UIManagerStatTracker",
    "URL",
    "UnimplementedView",
    "Vibration",
    "View",
    "ViewAccessibility",
    "ViewPropTypes",
    "ViewStylePropTypes",
    "ViewabilityHelper",
    "VirtualizeUtils",
    "VirtualizedList",
    "VirtualizedSectionList",
    "WebSocket",
    "WebSocketEvent",
    "WebSocketInterceptor",
    "WindowedListView",
    "XHRInterceptor",
    "XMLHttpRequest",
    "YellowBox",
    "_shouldPolyfillES6Collection",
    "babelHelpers",
    "bezier",
    "binaryToBase64",
    "buildStyleInterpolator",
    "clamp",
    "console",
    "convertRequestBody",
    "createAnimatedComponent",
    "createReactNativeComponentClass",
    "createStrictShapeTypeChecker",
    "deepDiffer",
    "deepFreezeAndThrowOnMutationInDev",
    "defineLazyObjectProperty",
    "deprecatedPropType",
    "dismissKeyboard",
    "dumpReactTree",
    "ensureComponentIsNative",
    "ensurePositiveDelayProps",
    "error-guard",
    "fetch",
    "flattenStyle",
    "getDevServer",
    "getObjectValues",
    "getReactData",
    "groupByEveryN",
    "guid",
    "infoLog",
    "insetsDiffer",
    "isEmpty",
    "logError",
    "mapWithSeparator",
    "matricesDiffer",
    "merge",
    "mergeFast",
    "mergeHelpers",
    "mergeInto",
    "mergeIntoFast",
    "mixInEventEmitter",
    "nativeImageSource",
    "normalizeColor",
    "openFileInEditor",
    "parseErrorStack",
    "pointsDiffer",
    "processColor",
    "processDecelerationRate",
    "processTransform",
    "promiseRejectionIsError",
    "queryLayoutByID",
    "react-native-implementation",
    "react-native-interface",
    "renderApplication",
    "requireNativeComponent",
    "resolveAssetSource",
    "resolveBoxStyle",
    "setNormalizedColorAlpha",
    "setupDevtools",
    "sizesDiffer",
    "stringifySafe",
    "symbolicateStackTrace",
    "takeSnapshot",
    "toIterator",
    "truncate",
    "utf8",
    "verifyPropTypes",
    "AccessibilityInfo",
    "BackHandler",
    "CheckBox",
    "DatePickerAndroid",
    "DatePickerIOS",
    "DrawerLayoutAndroid",
    "HMRLoadingView",
    "Image",
    "MaskedViewIOS",
    "NavigatorIOS",
    "PickerAndroid",
    "PickerIOS",
    "Platform",
    "PlatformViewPropTypes",
    "ProgressBarAndroid",
    "ProgressViewIOS",
    "RCTAlertManager",
    "RCTNetworking",
    "SafeAreaView",
    "Sample",
    "SegmentedControlIOS",
    "Settings",
    "SnapshotViewIOS",
    "StatusBarIOS",
    "TVEventHandler",
    "TabBarIOS",
    "TabBarItemIOS",
    "TimePickerAndroid",
    "ToastAndroid",
    "ToolbarAndroid",
    "TouchableNativeFeedback",
    "VibrationIOS",
    "ViewPagerAndroid",
    "WebView",
    "react-native/Libraries/ART/ReactNativeART",
    "react-native/Libraries/Renderer/shims/ReactNativePropRegistry",
    "react-native/package"
  ],
  F = {
    "31.0.0": {
      "@expo/vector-icons": "8.0.0",
      expo: "31.0.0",
      "lottie-react-native": "2.5.0",
      "react-native-maps": "0.22.0",
      "react-native-screens": "1.0.0-alpha.15",
      "react-native-gesture-handler": "1.0.8",
      "react-native-reanimated": "1.0.0-alpha.10",
      "react-native-svg": "8.0.8",
      "react-native-vector-icons": "expo/vector-icons#8.0.0",
      "react-native": "0.57.1",
      react: "16.5.0"
    },
    "32.0.0": {
      "@expo/vector-icons": "8.1.0",
      expo: "32.0.0",
      "expo-font": "2.0.0",
      "lottie-react-native": "2.5.0",
      "react-native-maps": "0.22.1",
      "react-native-screens": "1.0.0-alpha.19",
      "react-native-gesture-handler": "1.0.12",
      "react-native-reanimated": "1.0.0-alpha.19",
      "react-native-svg": "8.0.10",
      "react-native-vector-icons": "expo/vector-icons#8.1.0",
      "react-native": "0.57.1",
      react: "16.5.0"
    },
    "33.0.0":
      ((A = {
        "@expo/vector-icons": "8.1.0",
        expo: "33.0.0",
        "expo-font": "2.0.0",
        "lottie-react-native": "2.5.0",
        "react-native-maps": "0.22.1",
        "react-native-screens": "1.0.0-alpha.19",
        "react-native-gesture-handler": "1.0.12",
        "react-native-reanimated": "1.0.0-alpha.19",
        "react-native-svg": "8.0.10",
        "react-native-vector-icons": "expo/vector-icons#8.1.0",
        "react-native": "0.59.8",
        react: "16.8.3",
        "expo-constants": "5.0.0",
        "@unimodules/core": "2.0.0",
        "expo-ads-admob": "5.0.0",
        "expo-ads-facebook": "5.0.0",
        "expo-app-auth": "5.0.0",
        "expo-asset": "5.0.0",
        "expo-av": "5.0.0",
        "expo-background-fetch": "5.0.0",
        "expo-barcode-scanner": "5.0.0",
        "expo-blur": "5.0.0",
        "expo-calendar": "5.0.0",
        "expo-camera": "5.0.0"
      }),
      U(A, "expo-constants", "5.0.0"),
      U(A, "expo-contacts", "5.0.0"),
      U(A, "expo-document-picker", "5.0.0"),
      U(A, "expo-face-detector", "5.0.0"),
      U(A, "expo-facebook", "5.0.0"),
      U(A, "expo-file-system", "5.0.0"),
      U(A, "expo-font", "5.0.0"),
      U(A, "expo-gl", "5.0.0"),
      U(A, "expo-google-sign-in", "5.0.0"),
      U(A, "expo-haptics", "5.0.0"),
      U(A, "expo-image-manipulator", "5.0.0"),
      U(A, "expo-image-picker", "5.0.0"),
      U(A, "expo-intent-launcher", "5.0.0"),
      U(A, "expo-keep-awake", "5.0.0"),
      U(A, "expo-linear-gradient", "5.0.0"),
      U(A, "expo-local-authentication", "5.0.0"),
      U(A, "expo-localization", "5.0.0"),
      U(A, "expo-location", "5.0.0"),
      U(A, "expo-mail-composer", "5.0.0"),
      U(A, "expo-media-library", "5.0.0"),
      U(A, "expo-permissions", "5.0.0"),
      U(A, "expo-print", "5.0.0"),
      U(A, "expo-processing", "~2.0.0"),
      U(A, "expo-secure-store", "5.0.0"),
      U(A, "expo-sharing", "^3.0.0"),
      U(A, "expo-sms", "5.0.0"),
      U(A, "expo-speech", "5.0.0"),
      U(A, "expo-task-manager", "5.0.0"),
      U(A, "expo-web-browser", "5.0.0"),
      A)
  },
  B = Object.freeze({ haste: K, dependencies: F }),
  G = function(e) {
    if (null == e) throw TypeError("Can't call method on  " + e);
    return e;
  },
  H = function(e) {
    return Object(G(e));
  },
  z = {}.toString,
  V = function(e) {
    return z.call(e).slice(8, -1);
  },
  q = Object("z").propertyIsEnumerable(0)
    ? Object
    : function(e) {
        return "String" == V(e) ? e.split("") : Object(e);
      },
  $ = function(e) {
    return q(G(e));
  },
  W = Math.ceil,
  J = Math.floor,
  X = function(e) {
    return isNaN((e = +e)) ? 0 : (e > 0 ? J : W)(e);
  },
  Q = Math.min,
  Y = function(e) {
    return e > 0 ? Q(X(e), 9007199254740991) : 0;
  },
  Z = Math.max,
  ee = Math.min,
  te = n(function(e) {
    var t = u["__core-js_shared__"] || (u["__core-js_shared__"] = {});
    (e.exports = function(e, n) {
      return t[e] || (t[e] = void 0 !== n ? n : {});
    })("versions", []).push({
      version: c.version,
      mode: "pure",
      copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)"
    });
  }),
  ne = 0,
  re = Math.random(),
  ie = function(e) {
    return "Symbol(".concat(
      void 0 === e ? "" : e,
      ")_",
      (++ne + re).toString(36)
    );
  },
  oe = te("keys"),
  se = function(e) {
    return oe[e] || (oe[e] = ie(e));
  },
  ae =
    ((R = !1),
    function(e, t, n) {
      var r,
        i = $(e),
        o = Y(i.length),
        s = (function(e, t) {
          return (e = X(e)) < 0 ? Z(e + t, 0) : ee(e, t);
        })(n, o);
      if (R && t != t) {
        for (; o > s; ) if ((r = i[s++]) != r) return !0;
      } else
        for (; o > s; s++) if ((R || s in i) && i[s] === t) return R || s || 0;
      return !R && -1;
    }),
  ue = se("IE_PROTO"),
  ce = function(e, t) {
    var n,
      r = $(e),
      i = 0,
      o = [];
    for (n in r) n != ue && P(r, n) && o.push(n);
    for (; t.length > i; ) P(r, (n = t[i++])) && (~ae(o, n) || o.push(n));
    return o;
  },
  le = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
    ","
  ),
  fe =
    Object.keys ||
    function(e) {
      return ce(e, le);
    };
(N = "keys"),
  (I = function() {
    return function(e) {
      return fe(H(e));
    };
  }),
  (D = (c.Object || {})[N] || Object[N]),
  ((L = {})[N] = I(D)),
  T(
    T.S +
      T.F *
        d(function() {
          D(1);
        }),
    "Object",
    L
  );
var pe = c.Object.keys,
  he = t(
    n(function(e) {
      e.exports = { default: pe, __esModule: !0 };
    })
  ),
  de = "object" == typeof e && e && e.Object === Object && e,
  ve = "object" == typeof self && self && self.Object === Object && self,
  ye = de || ve || Function("return this")(),
  ge = ye.Symbol,
  be = Object.prototype,
  me = be.hasOwnProperty,
  _e = be.toString,
  we = ge ? ge.toStringTag : void 0;
var ke = function(e) {
    var t = me.call(e, we),
      n = e[we];
    try {
      e[we] = void 0;
      var r = !0;
    } catch (e) {}
    var i = _e.call(e);
    return r && (t ? (e[we] = n) : delete e[we]), i;
  },
  Se = Object.prototype.toString;
var Oe = function(e) {
    return Se.call(e);
  },
  xe = "[object Null]",
  Pe = "[object Undefined]",
  Ee = ge ? ge.toStringTag : void 0;
var Te = function(e) {
  return null == e
    ? void 0 === e
      ? Pe
      : xe
    : Ee && Ee in Object(e)
    ? ke(e)
    : Oe(e);
};
var je = function(e) {
    var t = typeof e;
    return null != e && ("object" == t || "function" == t);
  },
  Ce = "[object AsyncFunction]",
  Me = "[object Function]",
  Ae = "[object GeneratorFunction]",
  Re = "[object Proxy]";
var Ne,
  Ie = function(e) {
    if (!je(e)) return !1;
    var t = Te(e);
    return t == Me || t == Ae || t == Ce || t == Re;
  },
  De = ye["__core-js_shared__"],
  Le = (Ne = /[^.]+$/.exec((De && De.keys && De.keys.IE_PROTO) || ""))
    ? "Symbol(src)_1." + Ne
    : "";
var Ue = function(e) {
    return !!Le && Le in e;
  },
  Ke = Function.prototype.toString;
var Fe = function(e) {
    if (null != e) {
      try {
        return Ke.call(e);
      } catch (e) {}
      try {
        return e + "";
      } catch (e) {}
    }
    return "";
  },
  Be = /^\[object .+?Constructor\]$/,
  Ge = Function.prototype,
  He = Object.prototype,
  ze = Ge.toString,
  Ve = He.hasOwnProperty,
  qe = RegExp(
    "^" +
      ze
        .call(Ve)
        .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  );
var $e = function(e) {
  return !(!je(e) || Ue(e)) && (Ie(e) ? qe : Be).test(Fe(e));
};
var We = function(e, t) {
  return null == e ? void 0 : e[t];
};
var Je = function(e, t) {
    var n = We(e, t);
    return $e(n) ? n : void 0;
  },
  Xe = (function() {
    try {
      var e = Je(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch (e) {}
  })();
var Qe = function(e, t, n) {
  "__proto__" == t && Xe
    ? Xe(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
    : (e[t] = n);
};
var Ye = (function(e) {
  return function(t, n, r) {
    for (var i = -1, o = Object(t), s = r(t), a = s.length; a--; ) {
      var u = s[e ? a : ++i];
      if (!1 === n(o[u], u, o)) break;
    }
    return t;
  };
})();
var Ze = function(e, t) {
  for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
  return r;
};
var et = function(e) {
    return null != e && "object" == typeof e;
  },
  tt = "[object Arguments]";
var nt = function(e) {
    return et(e) && Te(e) == tt;
  },
  rt = Object.prototype,
  it = rt.hasOwnProperty,
  ot = rt.propertyIsEnumerable,
  st = nt(
    (function() {
      return arguments;
    })()
  )
    ? nt
    : function(e) {
        return et(e) && it.call(e, "callee") && !ot.call(e, "callee");
      },
  at = Array.isArray;
var ut = function() {
    return !1;
  },
  ct = n(function(e, t) {
    var n = t && !t.nodeType && t,
      r = n && e && !e.nodeType && e,
      i = r && r.exports === n ? ye.Buffer : void 0,
      o = (i ? i.isBuffer : void 0) || ut;
    e.exports = o;
  }),
  lt = 9007199254740991,
  ft = /^(?:0|[1-9]\d*)$/;
var pt = function(e, t) {
    var n = typeof e;
    return (
      !!(t = null == t ? lt : t) &&
      ("number" == n || ("symbol" != n && ft.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < t
    );
  },
  ht = 9007199254740991;
var dt = function(e) {
    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= ht;
  },
  vt = {};
(vt["[object Float32Array]"] = vt["[object Float64Array]"] = vt[
  "[object Int8Array]"
] = vt["[object Int16Array]"] = vt["[object Int32Array]"] = vt[
  "[object Uint8Array]"
] = vt["[object Uint8ClampedArray]"] = vt["[object Uint16Array]"] = vt[
  "[object Uint32Array]"
] = !0),
  (vt["[object Arguments]"] = vt["[object Array]"] = vt[
    "[object ArrayBuffer]"
  ] = vt["[object Boolean]"] = vt["[object DataView]"] = vt[
    "[object Date]"
  ] = vt["[object Error]"] = vt["[object Function]"] = vt["[object Map]"] = vt[
    "[object Number]"
  ] = vt["[object Object]"] = vt["[object RegExp]"] = vt["[object Set]"] = vt[
    "[object String]"
  ] = vt["[object WeakMap]"] = !1);
var yt = function(e) {
  return et(e) && dt(e.length) && !!vt[Te(e)];
};
var gt = function(e) {
    return function(t) {
      return e(t);
    };
  },
  bt = n(function(e, t) {
    var n = t && !t.nodeType && t,
      r = n && e && !e.nodeType && e,
      i = r && r.exports === n && de.process,
      o = (function() {
        try {
          var e = r && r.require && r.require("util").types;
          return e || (i && i.binding && i.binding("util"));
        } catch (e) {}
      })();
    e.exports = o;
  }),
  mt = bt && bt.isTypedArray,
  _t = mt ? gt(mt) : yt,
  wt = Object.prototype.hasOwnProperty;
var kt = function(e, t) {
    var n = at(e),
      r = !n && st(e),
      i = !n && !r && ct(e),
      o = !n && !r && !i && _t(e),
      s = n || r || i || o,
      a = s ? Ze(e.length, String) : [],
      u = a.length;
    for (var c in e)
      (!t && !wt.call(e, c)) ||
        (s &&
          ("length" == c ||
            (i && ("offset" == c || "parent" == c)) ||
            (o && ("buffer" == c || "byteLength" == c || "byteOffset" == c)) ||
            pt(c, u))) ||
        a.push(c);
    return a;
  },
  St = Object.prototype;
var Ot = function(e) {
  var t = e && e.constructor;
  return e === (("function" == typeof t && t.prototype) || St);
};
var xt = function(e, t) {
    return function(n) {
      return e(t(n));
    };
  },
  Pt = xt(Object.keys, Object),
  Et = Object.prototype.hasOwnProperty;
var Tt = function(e) {
  if (!Ot(e)) return Pt(e);
  var t = [];
  for (var n in Object(e)) Et.call(e, n) && "constructor" != n && t.push(n);
  return t;
};
var jt = function(e) {
  return null != e && dt(e.length) && !Ie(e);
};
var Ct = function(e) {
  return jt(e) ? kt(e) : Tt(e);
};
var Mt = function(e, t) {
  return e && Ye(e, t, Ct);
};
var At = function() {
  (this.__data__ = []), (this.size = 0);
};
var Rt = function(e, t) {
  return e === t || (e != e && t != t);
};
var Nt = function(e, t) {
    for (var n = e.length; n--; ) if (Rt(e[n][0], t)) return n;
    return -1;
  },
  It = Array.prototype.splice;
var Dt = function(e) {
  var t = this.__data__,
    n = Nt(t, e);
  return !(
    n < 0 || (n == t.length - 1 ? t.pop() : It.call(t, n, 1), --this.size, 0)
  );
};
var Lt = function(e) {
  var t = this.__data__,
    n = Nt(t, e);
  return n < 0 ? void 0 : t[n][1];
};
var Ut = function(e) {
  return Nt(this.__data__, e) > -1;
};
var Kt = function(e, t) {
  var n = this.__data__,
    r = Nt(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
};
function Ft(e) {
  var t = -1,
    n = null == e ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
(Ft.prototype.clear = At),
  (Ft.prototype.delete = Dt),
  (Ft.prototype.get = Lt),
  (Ft.prototype.has = Ut),
  (Ft.prototype.set = Kt);
var Bt = Ft;
var Gt = function() {
  (this.__data__ = new Bt()), (this.size = 0);
};
var Ht = function(e) {
  var t = this.__data__,
    n = t.delete(e);
  return (this.size = t.size), n;
};
var zt = function(e) {
  return this.__data__.get(e);
};
var Vt = function(e) {
    return this.__data__.has(e);
  },
  qt = Je(ye, "Map"),
  $t = Je(Object, "create");
var Wt = function() {
  (this.__data__ = $t ? $t(null) : {}), (this.size = 0);
};
var Jt = function(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  },
  Xt = "__lodash_hash_undefined__",
  Qt = Object.prototype.hasOwnProperty;
var Yt = function(e) {
    var t = this.__data__;
    if ($t) {
      var n = t[e];
      return n === Xt ? void 0 : n;
    }
    return Qt.call(t, e) ? t[e] : void 0;
  },
  Zt = Object.prototype.hasOwnProperty;
var en = function(e) {
    var t = this.__data__;
    return $t ? void 0 !== t[e] : Zt.call(t, e);
  },
  tn = "__lodash_hash_undefined__";
var nn = function(e, t) {
  var n = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (n[e] = $t && void 0 === t ? tn : t),
    this
  );
};
function rn(e) {
  var t = -1,
    n = null == e ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
(rn.prototype.clear = Wt),
  (rn.prototype.delete = Jt),
  (rn.prototype.get = Yt),
  (rn.prototype.has = en),
  (rn.prototype.set = nn);
var on = rn;
var sn = function() {
  (this.size = 0),
    (this.__data__ = {
      hash: new on(),
      map: new (qt || Bt)(),
      string: new on()
    });
};
var an = function(e) {
  var t = typeof e;
  return "string" == t || "number" == t || "symbol" == t || "boolean" == t
    ? "__proto__" !== e
    : null === e;
};
var un = function(e, t) {
  var n = e.__data__;
  return an(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
};
var cn = function(e) {
  var t = un(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
};
var ln = function(e) {
  return un(this, e).get(e);
};
var fn = function(e) {
  return un(this, e).has(e);
};
var pn = function(e, t) {
  var n = un(this, e),
    r = n.size;
  return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
};
function hn(e) {
  var t = -1,
    n = null == e ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
(hn.prototype.clear = sn),
  (hn.prototype.delete = cn),
  (hn.prototype.get = ln),
  (hn.prototype.has = fn),
  (hn.prototype.set = pn);
var dn = hn,
  vn = 200;
var yn = function(e, t) {
  var n = this.__data__;
  if (n instanceof Bt) {
    var r = n.__data__;
    if (!qt || r.length < vn - 1)
      return r.push([e, t]), (this.size = ++n.size), this;
    n = this.__data__ = new dn(r);
  }
  return n.set(e, t), (this.size = n.size), this;
};
function gn(e) {
  var t = (this.__data__ = new Bt(e));
  this.size = t.size;
}
(gn.prototype.clear = Gt),
  (gn.prototype.delete = Ht),
  (gn.prototype.get = zt),
  (gn.prototype.has = Vt),
  (gn.prototype.set = yn);
var bn = gn,
  mn = "__lodash_hash_undefined__";
var _n = function(e) {
  return this.__data__.set(e, mn), this;
};
var wn = function(e) {
  return this.__data__.has(e);
};
function kn(e) {
  var t = -1,
    n = null == e ? 0 : e.length;
  for (this.__data__ = new dn(); ++t < n; ) this.add(e[t]);
}
(kn.prototype.add = kn.prototype.push = _n), (kn.prototype.has = wn);
var Sn = kn;
var On = function(e, t) {
  for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e)) return !0;
  return !1;
};
var xn = function(e, t) {
    return e.has(t);
  },
  Pn = 1,
  En = 2;
var Tn = function(e, t, n, r, i, o) {
    var s = n & Pn,
      a = e.length,
      u = t.length;
    if (a != u && !(s && u > a)) return !1;
    var c = o.get(e);
    if (c && o.get(t)) return c == t;
    var l = -1,
      f = !0,
      p = n & En ? new Sn() : void 0;
    for (o.set(e, t), o.set(t, e); ++l < a; ) {
      var h = e[l],
        d = t[l];
      if (r) var v = s ? r(d, h, l, t, e, o) : r(h, d, l, e, t, o);
      if (void 0 !== v) {
        if (v) continue;
        f = !1;
        break;
      }
      if (p) {
        if (
          !On(t, function(e, t) {
            if (!xn(p, t) && (h === e || i(h, e, n, r, o))) return p.push(t);
          })
        ) {
          f = !1;
          break;
        }
      } else if (h !== d && !i(h, d, n, r, o)) {
        f = !1;
        break;
      }
    }
    return o.delete(e), o.delete(t), f;
  },
  jn = ye.Uint8Array;
var Cn = function(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function(e, r) {
      n[++t] = [r, e];
    }),
    n
  );
};
var Mn = function(e) {
    var t = -1,
      n = Array(e.size);
    return (
      e.forEach(function(e) {
        n[++t] = e;
      }),
      n
    );
  },
  An = 1,
  Rn = 2,
  Nn = "[object Boolean]",
  In = "[object Date]",
  Dn = "[object Error]",
  Ln = "[object Map]",
  Un = "[object Number]",
  Kn = "[object RegExp]",
  Fn = "[object Set]",
  Bn = "[object String]",
  Gn = "[object Symbol]",
  Hn = "[object ArrayBuffer]",
  zn = "[object DataView]",
  Vn = ge ? ge.prototype : void 0,
  qn = Vn ? Vn.valueOf : void 0;
var $n = function(e, t, n, r, i, o, s) {
  switch (n) {
    case zn:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      (e = e.buffer), (t = t.buffer);
    case Hn:
      return !(e.byteLength != t.byteLength || !o(new jn(e), new jn(t)));
    case Nn:
    case In:
    case Un:
      return Rt(+e, +t);
    case Dn:
      return e.name == t.name && e.message == t.message;
    case Kn:
    case Bn:
      return e == t + "";
    case Ln:
      var a = Cn;
    case Fn:
      var u = r & An;
      if ((a || (a = Mn), e.size != t.size && !u)) return !1;
      var c = s.get(e);
      if (c) return c == t;
      (r |= Rn), s.set(e, t);
      var l = Tn(a(e), a(t), r, i, o, s);
      return s.delete(e), l;
    case Gn:
      if (qn) return qn.call(e) == qn.call(t);
  }
  return !1;
};
var Wn = function(e, t) {
  for (var n = -1, r = t.length, i = e.length; ++n < r; ) e[i + n] = t[n];
  return e;
};
var Jn = function(e, t, n) {
  var r = t(e);
  return at(e) ? r : Wn(r, n(e));
};
var Xn = function(e, t) {
  for (var n = -1, r = null == e ? 0 : e.length, i = 0, o = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (o[i++] = s);
  }
  return o;
};
var Qn = function() {
    return [];
  },
  Yn = Object.prototype.propertyIsEnumerable,
  Zn = Object.getOwnPropertySymbols,
  er = Zn
    ? function(e) {
        return null == e
          ? []
          : ((e = Object(e)),
            Xn(Zn(e), function(t) {
              return Yn.call(e, t);
            }));
      }
    : Qn;
var tr = function(e) {
    return Jn(e, Ct, er);
  },
  nr = 1,
  rr = Object.prototype.hasOwnProperty;
var ir = function(e, t, n, r, i, o) {
    var s = n & nr,
      a = tr(e),
      u = a.length;
    if (u != tr(t).length && !s) return !1;
    for (var c = u; c--; ) {
      var l = a[c];
      if (!(s ? l in t : rr.call(t, l))) return !1;
    }
    var f = o.get(e);
    if (f && o.get(t)) return f == t;
    var p = !0;
    o.set(e, t), o.set(t, e);
    for (var h = s; ++c < u; ) {
      var d = e[(l = a[c])],
        v = t[l];
      if (r) var y = s ? r(v, d, l, t, e, o) : r(d, v, l, e, t, o);
      if (!(void 0 === y ? d === v || i(d, v, n, r, o) : y)) {
        p = !1;
        break;
      }
      h || (h = "constructor" == l);
    }
    if (p && !h) {
      var g = e.constructor,
        b = t.constructor;
      g != b &&
        "constructor" in e &&
        "constructor" in t &&
        !(
          "function" == typeof g &&
          g instanceof g &&
          "function" == typeof b &&
          b instanceof b
        ) &&
        (p = !1);
    }
    return o.delete(e), o.delete(t), p;
  },
  or = Je(ye, "DataView"),
  sr = Je(ye, "Promise"),
  ar = Je(ye, "Set"),
  ur = Je(ye, "WeakMap"),
  cr = Fe(or),
  lr = Fe(qt),
  fr = Fe(sr),
  pr = Fe(ar),
  hr = Fe(ur),
  dr = Te;
((or && "[object DataView]" != dr(new or(new ArrayBuffer(1)))) ||
  (qt && "[object Map]" != dr(new qt())) ||
  (sr && "[object Promise]" != dr(sr.resolve())) ||
  (ar && "[object Set]" != dr(new ar())) ||
  (ur && "[object WeakMap]" != dr(new ur()))) &&
  (dr = function(e) {
    var t = Te(e),
      n = "[object Object]" == t ? e.constructor : void 0,
      r = n ? Fe(n) : "";
    if (r)
      switch (r) {
        case cr:
          return "[object DataView]";
        case lr:
          return "[object Map]";
        case fr:
          return "[object Promise]";
        case pr:
          return "[object Set]";
        case hr:
          return "[object WeakMap]";
      }
    return t;
  });
var vr = dr,
  yr = 1,
  gr = "[object Arguments]",
  br = "[object Array]",
  mr = "[object Object]",
  _r = Object.prototype.hasOwnProperty;
var wr = function(e, t, n, r, i, o) {
  var s = at(e),
    a = at(t),
    u = s ? br : vr(e),
    c = a ? br : vr(t),
    l = (u = u == gr ? mr : u) == mr,
    f = (c = c == gr ? mr : c) == mr,
    p = u == c;
  if (p && ct(e)) {
    if (!ct(t)) return !1;
    (s = !0), (l = !1);
  }
  if (p && !l)
    return (
      o || (o = new bn()),
      s || _t(e) ? Tn(e, t, n, r, i, o) : $n(e, t, u, n, r, i, o)
    );
  if (!(n & yr)) {
    var h = l && _r.call(e, "__wrapped__"),
      d = f && _r.call(t, "__wrapped__");
    if (h || d) {
      var v = h ? e.value() : e,
        y = d ? t.value() : t;
      return o || (o = new bn()), i(v, y, n, r, o);
    }
  }
  return !!p && (o || (o = new bn()), ir(e, t, n, r, i, o));
};
var kr = function e(t, n, r, i, o) {
    return (
      t === n ||
      (null == t || null == n || (!et(t) && !et(n))
        ? t != t && n != n
        : wr(t, n, r, i, e, o))
    );
  },
  Sr = 1,
  Or = 2;
var xr = function(e, t, n, r) {
  var i = n.length,
    o = i,
    s = !r;
  if (null == e) return !o;
  for (e = Object(e); i--; ) {
    var a = n[i];
    if (s && a[2] ? a[1] !== e[a[0]] : !(a[0] in e)) return !1;
  }
  for (; ++i < o; ) {
    var u = (a = n[i])[0],
      c = e[u],
      l = a[1];
    if (s && a[2]) {
      if (void 0 === c && !(u in e)) return !1;
    } else {
      var f = new bn();
      if (r) var p = r(c, l, u, e, t, f);
      if (!(void 0 === p ? kr(l, c, Sr | Or, r, f) : p)) return !1;
    }
  }
  return !0;
};
var Pr = function(e) {
  return e == e && !je(e);
};
var Er = function(e) {
  for (var t = Ct(e), n = t.length; n--; ) {
    var r = t[n],
      i = e[r];
    t[n] = [r, i, Pr(i)];
  }
  return t;
};
var Tr = function(e, t) {
  return function(n) {
    return null != n && n[e] === t && (void 0 !== t || e in Object(n));
  };
};
var jr = function(e) {
    var t = Er(e);
    return 1 == t.length && t[0][2]
      ? Tr(t[0][0], t[0][1])
      : function(n) {
          return n === e || xr(n, e, t);
        };
  },
  Cr = "[object Symbol]";
var Mr = function(e) {
    return "symbol" == typeof e || (et(e) && Te(e) == Cr);
  },
  Ar = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  Rr = /^\w*$/;
var Nr = function(e, t) {
    if (at(e)) return !1;
    var n = typeof e;
    return (
      !(
        "number" != n &&
        "symbol" != n &&
        "boolean" != n &&
        null != e &&
        !Mr(e)
      ) ||
      Rr.test(e) ||
      !Ar.test(e) ||
      (null != t && e in Object(t))
    );
  },
  Ir = "Expected a function";
function Dr(e, t) {
  if ("function" != typeof e || (null != t && "function" != typeof t))
    throw new TypeError(Ir);
  var n = function() {
    var r = arguments,
      i = t ? t.apply(this, r) : r[0],
      o = n.cache;
    if (o.has(i)) return o.get(i);
    var s = e.apply(this, r);
    return (n.cache = o.set(i, s) || o), s;
  };
  return (n.cache = new (Dr.Cache || dn)()), n;
}
Dr.Cache = dn;
var Lr = Dr,
  Ur = 500;
var Kr = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  Fr = /\\(\\)?/g,
  Br = (function(e) {
    var t = Lr(e, function(e) {
        return n.size === Ur && n.clear(), e;
      }),
      n = t.cache;
    return t;
  })(function(e) {
    var t = [];
    return (
      46 === e.charCodeAt(0) && t.push(""),
      e.replace(Kr, function(e, n, r, i) {
        t.push(r ? i.replace(Fr, "$1") : n || e);
      }),
      t
    );
  });
var Gr = function(e, t) {
    for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r; )
      i[n] = t(e[n], n, e);
    return i;
  },
  Hr = 1 / 0,
  zr = ge ? ge.prototype : void 0,
  Vr = zr ? zr.toString : void 0;
var qr = function e(t) {
  if ("string" == typeof t) return t;
  if (at(t)) return Gr(t, e) + "";
  if (Mr(t)) return Vr ? Vr.call(t) : "";
  var n = t + "";
  return "0" == n && 1 / t == -Hr ? "-0" : n;
};
var $r = function(e) {
  return null == e ? "" : qr(e);
};
var Wr = function(e, t) {
    return at(e) ? e : Nr(e, t) ? [e] : Br($r(e));
  },
  Jr = 1 / 0;
var Xr = function(e) {
  if ("string" == typeof e || Mr(e)) return e;
  var t = e + "";
  return "0" == t && 1 / e == -Jr ? "-0" : t;
};
var Qr = function(e, t) {
  for (var n = 0, r = (t = Wr(t, e)).length; null != e && n < r; )
    e = e[Xr(t[n++])];
  return n && n == r ? e : void 0;
};
var Yr = function(e, t, n) {
  var r = null == e ? void 0 : Qr(e, t);
  return void 0 === r ? n : r;
};
var Zr = function(e, t) {
  return null != e && t in Object(e);
};
var ei = function(e, t, n) {
  for (var r = -1, i = (t = Wr(t, e)).length, o = !1; ++r < i; ) {
    var s = Xr(t[r]);
    if (!(o = null != e && n(e, s))) break;
    e = e[s];
  }
  return o || ++r != i
    ? o
    : !!(i = null == e ? 0 : e.length) && dt(i) && pt(s, i) && (at(e) || st(e));
};
var ti = function(e, t) {
    return null != e && ei(e, t, Zr);
  },
  ni = 1,
  ri = 2;
var ii = function(e, t) {
  return Nr(e) && Pr(t)
    ? Tr(Xr(e), t)
    : function(n) {
        var r = Yr(n, e);
        return void 0 === r && r === t ? ti(n, e) : kr(t, r, ni | ri);
      };
};
var oi = function(e) {
  return e;
};
var si = function(e) {
  return function(t) {
    return null == t ? void 0 : t[e];
  };
};
var ai = function(e) {
  return function(t) {
    return Qr(t, e);
  };
};
var ui = function(e) {
  return Nr(e) ? si(Xr(e)) : ai(e);
};
var ci = function(e) {
  return "function" == typeof e
    ? e
    : null == e
    ? oi
    : "object" == typeof e
    ? at(e)
      ? ii(e[0], e[1])
      : jr(e)
    : ui(e);
};
var li = function(e, t) {
    var n = {};
    return (
      (t = ci(t, 3)),
      Mt(e, function(e, r, i) {
        Qe(n, r, t(e, r, i));
      }),
      n
    );
  },
  fi = function(e, t) {
    var n = pi(e);
    return t ? (n ? hi(e) : e) : n ? e : di(e);
  },
  pi = function(e) {
    return he(e).every(function(t) {
      return "string" == typeof e[t];
    });
  },
  hi = function(e) {
    return li(e, function(e) {
      var t = { version: e, isUserSpecified: !0 };
      return e.resolved && (t.resolved = e.resolved), t;
    });
  },
  di = function(e) {
    return li(e, function(e) {
      return e.version;
    });
  },
  vi = Object.freeze({
    standardizeDependencies: function(e, t) {
      return fi(e, s(t, "PROJECT_DEPENDENCIES"));
    },
    convertDependencyFormat: fi
  }),
  yi = function(e, t) {
    return { value: t, done: !!e };
  },
  gi = {},
  bi = O,
  mi = v
    ? Object.defineProperties
    : function(e, t) {
        h(e);
        for (var n, r = fe(t), i = r.length, o = 0; i > o; )
          k.f(e, (n = r[o++]), t[n]);
        return e;
      },
  _i = u.document,
  wi = _i && _i.documentElement,
  ki = se("IE_PROTO"),
  Si = function() {},
  Oi = function() {
    var e,
      t = b("iframe"),
      n = le.length;
    for (
      t.style.display = "none",
        wi.appendChild(t),
        t.src = "javascript:",
        (e = t.contentWindow.document).open(),
        e.write("<script>document.F=Object</script>"),
        e.close(),
        Oi = e.F;
      n--;

    )
      delete Oi.prototype[le[n]];
    return Oi();
  },
  xi =
    Object.create ||
    function(e, t) {
      var n;
      return (
        null !== e
          ? ((Si.prototype = h(e)),
            (n = new Si()),
            (Si.prototype = null),
            (n[ki] = e))
          : (n = Oi()),
        void 0 === t ? n : mi(n, t)
      );
    },
  Pi = n(function(e) {
    var t = te("wks"),
      n = u.Symbol,
      r = "function" == typeof n;
    (e.exports = function(e) {
      return t[e] || (t[e] = (r && n[e]) || (r ? n : ie)("Symbol." + e));
    }).store = t;
  }),
  Ei = k.f,
  Ti = Pi("toStringTag"),
  ji = function(e, t, n) {
    e &&
      !P((e = n ? e : e.prototype), Ti) &&
      Ei(e, Ti, { configurable: !0, value: t });
  },
  Ci = {};
O(Ci, Pi("iterator"), function() {
  return this;
});
var Mi = function(e, t, n) {
    (e.prototype = xi(Ci, { next: S(1, n) })), ji(e, t + " Iterator");
  },
  Ai = se("IE_PROTO"),
  Ri = Object.prototype,
  Ni =
    Object.getPrototypeOf ||
    function(e) {
      return (
        (e = H(e)),
        P(e, Ai)
          ? e[Ai]
          : "function" == typeof e.constructor && e instanceof e.constructor
          ? e.constructor.prototype
          : e instanceof Object
          ? Ri
          : null
      );
    },
  Ii = Pi("iterator"),
  Di = !([].keys && "next" in [].keys()),
  Li = function() {
    return this;
  },
  Ui = function(e, t, n, r, i, o, s) {
    Mi(n, t, r);
    var a,
      u,
      c,
      l = function(e) {
        if (!Di && e in d) return d[e];
        switch (e) {
          case "keys":
          case "values":
            return function() {
              return new n(this, e);
            };
        }
        return function() {
          return new n(this, e);
        };
      },
      f = t + " Iterator",
      p = "values" == i,
      h = !1,
      d = e.prototype,
      v = d[Ii] || d["@@iterator"] || (i && d[i]),
      y = v || l(i),
      g = i ? (p ? l("entries") : y) : void 0,
      b = ("Array" == t && d.entries) || v;
    if (
      (b &&
        (c = Ni(b.call(new e()))) !== Object.prototype &&
        c.next &&
        ji(c, f, !0),
      p &&
        v &&
        "values" !== v.name &&
        ((h = !0),
        (y = function() {
          return v.call(this);
        })),
      s && (Di || h || !d[Ii]) && O(d, Ii, y),
      (gi[t] = y),
      (gi[f] = Li),
      i)
    )
      if (
        ((a = {
          values: p ? y : l("values"),
          keys: o ? y : l("keys"),
          entries: g
        }),
        s)
      )
        for (u in a) u in d || bi(d, u, a[u]);
      else T(T.P + T.F * (Di || h), t, a);
    return a;
  };
Ui(
  Array,
  "Array",
  function(e, t) {
    (this._t = $(e)), (this._i = 0), (this._k = t);
  },
  function() {
    var e = this._t,
      t = this._k,
      n = this._i++;
    return !e || n >= e.length
      ? ((this._t = void 0), yi(1))
      : yi(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]);
  },
  "values"
);
gi.Arguments = gi.Array;
for (
  var Ki = Pi("toStringTag"),
    Fi = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
      ","
    ),
    Bi = 0;
  Bi < Fi.length;
  Bi++
) {
  var Gi = Fi[Bi],
    Hi = u[Gi],
    zi = Hi && Hi.prototype;
  zi && !zi[Ki] && O(zi, Ki, Gi), (gi[Gi] = gi.Array);
}
var Vi,
  qi =
    ((Vi = !0),
    function(e, t) {
      var n,
        r,
        i = String(G(e)),
        o = X(t),
        s = i.length;
      return o < 0 || o >= s
        ? Vi
          ? ""
          : void 0
        : (n = i.charCodeAt(o)) < 55296 ||
          n > 56319 ||
          o + 1 === s ||
          (r = i.charCodeAt(o + 1)) < 56320 ||
          r > 57343
        ? Vi
          ? i.charAt(o)
          : n
        : Vi
        ? i.slice(o, o + 2)
        : r - 56320 + ((n - 55296) << 10) + 65536;
    });
Ui(
  String,
  "String",
  function(e) {
    (this._t = String(e)), (this._i = 0);
  },
  function() {
    var e,
      t = this._t,
      n = this._i;
    return n >= t.length
      ? { value: void 0, done: !0 }
      : ((e = qi(t, n)), (this._i += e.length), { value: e, done: !1 });
  }
);
var $i = Pi("toStringTag"),
  Wi =
    "Arguments" ==
    V(
      (function() {
        return arguments;
      })()
    ),
  Ji = function(e) {
    var t, n, r;
    return void 0 === e
      ? "Undefined"
      : null === e
      ? "Null"
      : "string" ==
        typeof (n = (function(e, t) {
          try {
            return e[t];
          } catch (e) {}
        })((t = Object(e)), $i))
      ? n
      : Wi
      ? V(t)
      : "Object" == (r = V(t)) && "function" == typeof t.callee
      ? "Arguments"
      : r;
  },
  Xi = Pi("iterator"),
  Qi = (c.getIteratorMethod = function(e) {
    if (null != e) return e[Xi] || e["@@iterator"] || gi[Ji(e)];
  }),
  Yi = (c.getIterator = function(e) {
    var t = Qi(e);
    if ("function" != typeof t) throw TypeError(e + " is not iterable!");
    return h(t.call(e));
  }),
  Zi = t(
    n(function(e) {
      e.exports = { default: Yi, __esModule: !0 };
    })
  ),
  eo = c.JSON || (c.JSON = { stringify: JSON.stringify }),
  to = function(e) {
    return eo.stringify.apply(eo, arguments);
  },
  no = t(
    n(function(e) {
      e.exports = { default: to, __esModule: !0 };
    })
  ),
  ro = { f: Pi },
  io = ro.f("iterator"),
  oo = n(function(e) {
    e.exports = { default: io, __esModule: !0 };
  });
t(oo);
var so = n(function(e) {
    var t = ie("meta"),
      n = k.f,
      r = 0,
      i =
        Object.isExtensible ||
        function() {
          return !0;
        },
      o = !d(function() {
        return i(Object.preventExtensions({}));
      }),
      s = function(e) {
        n(e, t, { value: { i: "O" + ++r, w: {} } });
      },
      a = (e.exports = {
        KEY: t,
        NEED: !1,
        fastKey: function(e, n) {
          if (!p(e))
            return "symbol" == typeof e
              ? e
              : ("string" == typeof e ? "S" : "P") + e;
          if (!P(e, t)) {
            if (!i(e)) return "F";
            if (!n) return "E";
            s(e);
          }
          return e[t].i;
        },
        getWeak: function(e, n) {
          if (!P(e, t)) {
            if (!i(e)) return !0;
            if (!n) return !1;
            s(e);
          }
          return e[t].w;
        },
        onFreeze: function(e) {
          return o && a.NEED && i(e) && !P(e, t) && s(e), e;
        }
      });
  }),
  ao = (so.KEY, so.NEED, so.fastKey, so.getWeak, so.onFreeze, k.f),
  uo = function(e) {
    var t = c.Symbol || (c.Symbol = {});
    "_" == e.charAt(0) || e in t || ao(t, e, { value: ro.f(e) });
  },
  co = { f: Object.getOwnPropertySymbols },
  lo = { f: {}.propertyIsEnumerable },
  fo =
    Array.isArray ||
    function(e) {
      return "Array" == V(e);
    },
  po = le.concat("length", "prototype"),
  ho = {
    f:
      Object.getOwnPropertyNames ||
      function(e) {
        return ce(e, po);
      }
  },
  vo = ho.f,
  yo = {}.toString,
  go =
    "object" == typeof window && window && Object.getOwnPropertyNames
      ? Object.getOwnPropertyNames(window)
      : [],
  bo = {
    f: function(e) {
      return go && "[object Window]" == yo.call(e)
        ? (function(e) {
            try {
              return vo(e);
            } catch (e) {
              return go.slice();
            }
          })(e)
        : vo($(e));
    }
  },
  mo = Object.getOwnPropertyDescriptor,
  _o = {
    f: v
      ? mo
      : function(e, t) {
          if (((e = $(e)), (t = _(t, !0)), m))
            try {
              return mo(e, t);
            } catch (e) {}
          if (P(e, t)) return S(!lo.f.call(e, t), e[t]);
        }
  },
  wo = so.KEY,
  ko = _o.f,
  So = k.f,
  Oo = bo.f,
  xo = u.Symbol,
  Po = u.JSON,
  Eo = Po && Po.stringify,
  To = Pi("_hidden"),
  jo = Pi("toPrimitive"),
  Co = {}.propertyIsEnumerable,
  Mo = te("symbol-registry"),
  Ao = te("symbols"),
  Ro = te("op-symbols"),
  No = Object.prototype,
  Io = "function" == typeof xo && !!co.f,
  Do = u.QObject,
  Lo = !Do || !Do.prototype || !Do.prototype.findChild,
  Uo =
    v &&
    d(function() {
      return (
        7 !=
        xi(
          So({}, "a", {
            get: function() {
              return So(this, "a", { value: 7 }).a;
            }
          })
        ).a
      );
    })
      ? function(e, t, n) {
          var r = ko(No, t);
          r && delete No[t], So(e, t, n), r && e !== No && So(No, t, r);
        }
      : So,
  Ko = function(e) {
    var t = (Ao[e] = xi(xo.prototype));
    return (t._k = e), t;
  },
  Fo =
    Io && "symbol" == typeof xo.iterator
      ? function(e) {
          return "symbol" == typeof e;
        }
      : function(e) {
          return e instanceof xo;
        },
  Bo = function(e, t, n) {
    return (
      e === No && Bo(Ro, t, n),
      h(e),
      (t = _(t, !0)),
      h(n),
      P(Ao, t)
        ? (n.enumerable
            ? (P(e, To) && e[To][t] && (e[To][t] = !1),
              (n = xi(n, { enumerable: S(0, !1) })))
            : (P(e, To) || So(e, To, S(1, {})), (e[To][t] = !0)),
          Uo(e, t, n))
        : So(e, t, n)
    );
  },
  Go = function(e, t) {
    h(e);
    for (
      var n,
        r = (function(e) {
          var t = fe(e),
            n = co.f;
          if (n)
            for (var r, i = n(e), o = lo.f, s = 0; i.length > s; )
              o.call(e, (r = i[s++])) && t.push(r);
          return t;
        })((t = $(t))),
        i = 0,
        o = r.length;
      o > i;

    )
      Bo(e, (n = r[i++]), t[n]);
    return e;
  },
  Ho = function(e) {
    var t = Co.call(this, (e = _(e, !0)));
    return (
      !(this === No && P(Ao, e) && !P(Ro, e)) &&
      (!(t || !P(this, e) || !P(Ao, e) || (P(this, To) && this[To][e])) || t)
    );
  },
  zo = function(e, t) {
    if (((e = $(e)), (t = _(t, !0)), e !== No || !P(Ao, t) || P(Ro, t))) {
      var n = ko(e, t);
      return (
        !n || !P(Ao, t) || (P(e, To) && e[To][t]) || (n.enumerable = !0), n
      );
    }
  },
  Vo = function(e) {
    for (var t, n = Oo($(e)), r = [], i = 0; n.length > i; )
      P(Ao, (t = n[i++])) || t == To || t == wo || r.push(t);
    return r;
  },
  qo = function(e) {
    for (
      var t, n = e === No, r = Oo(n ? Ro : $(e)), i = [], o = 0;
      r.length > o;

    )
      !P(Ao, (t = r[o++])) || (n && !P(No, t)) || i.push(Ao[t]);
    return i;
  };
Io ||
  (bi(
    (xo = function() {
      if (this instanceof xo) throw TypeError("Symbol is not a constructor!");
      var e = ie(arguments.length > 0 ? arguments[0] : void 0),
        t = function(n) {
          this === No && t.call(Ro, n),
            P(this, To) && P(this[To], e) && (this[To][e] = !1),
            Uo(this, e, S(1, n));
        };
      return v && Lo && Uo(No, e, { configurable: !0, set: t }), Ko(e);
    }).prototype,
    "toString",
    function() {
      return this._k;
    }
  ),
  (_o.f = zo),
  (k.f = Bo),
  (ho.f = bo.f = Vo),
  (lo.f = Ho),
  (co.f = qo),
  (ro.f = function(e) {
    return Ko(Pi(e));
  })),
  T(T.G + T.W + T.F * !Io, { Symbol: xo });
for (
  var $o = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
      ","
    ),
    Wo = 0;
  $o.length > Wo;

)
  Pi($o[Wo++]);
for (var Jo = fe(Pi.store), Xo = 0; Jo.length > Xo; ) uo(Jo[Xo++]);
T(T.S + T.F * !Io, "Symbol", {
  for: function(e) {
    return P(Mo, (e += "")) ? Mo[e] : (Mo[e] = xo(e));
  },
  keyFor: function(e) {
    if (!Fo(e)) throw TypeError(e + " is not a symbol!");
    for (var t in Mo) if (Mo[t] === e) return t;
  },
  useSetter: function() {
    Lo = !0;
  },
  useSimple: function() {
    Lo = !1;
  }
}),
  T(T.S + T.F * !Io, "Object", {
    create: function(e, t) {
      return void 0 === t ? xi(e) : Go(xi(e), t);
    },
    defineProperty: Bo,
    defineProperties: Go,
    getOwnPropertyDescriptor: zo,
    getOwnPropertyNames: Vo,
    getOwnPropertySymbols: qo
  });
var Qo = d(function() {
  co.f(1);
});
T(T.S + T.F * Qo, "Object", {
  getOwnPropertySymbols: function(e) {
    return co.f(H(e));
  }
}),
  Po &&
    T(
      T.S +
        T.F *
          (!Io ||
            d(function() {
              var e = xo();
              return (
                "[null]" != Eo([e]) ||
                "{}" != Eo({ a: e }) ||
                "{}" != Eo(Object(e))
              );
            })),
      "JSON",
      {
        stringify: function(e) {
          for (var t, n, r = [e], i = 1; arguments.length > i; )
            r.push(arguments[i++]);
          if (((n = t = r[1]), (p(t) || void 0 !== e) && !Fo(e)))
            return (
              fo(t) ||
                (t = function(e, t) {
                  if (
                    ("function" == typeof n && (t = n.call(this, e, t)), !Fo(t))
                  )
                    return t;
                }),
              (r[1] = t),
              Eo.apply(Po, r)
            );
        }
      }
    ),
  xo.prototype[jo] || O(xo.prototype, jo, xo.prototype.valueOf),
  ji(xo, "Symbol"),
  ji(Math, "Math", !0),
  ji(u.JSON, "JSON", !0),
  uo("asyncIterator"),
  uo("observable");
var Yo = c.Symbol,
  Zo = n(function(e) {
    e.exports = { default: Yo, __esModule: !0 };
  });
t(Zo);
var es,
  ts,
  ns,
  rs = t(
    n(function(e, t) {
      t.__esModule = !0;
      var n = o(oo),
        r = o(Zo),
        i =
          "function" == typeof r.default && "symbol" == typeof n.default
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof r.default &&
                  e.constructor === r.default &&
                  e !== r.default.prototype
                  ? "symbol"
                  : typeof e;
              };
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.default =
        "function" == typeof r.default && "symbol" === i(n.default)
          ? function(e) {
              return void 0 === e ? "undefined" : i(e);
            }
          : function(e) {
              return e &&
                "function" == typeof r.default &&
                e.constructor === r.default &&
                e !== r.default.prototype
                ? "symbol"
                : void 0 === e
                ? "undefined"
                : i(e);
            };
    })
  ),
  is = function(e, t, n, r) {
    try {
      return r ? t(h(n)[0], n[1]) : t(n);
    } catch (t) {
      var i = e.return;
      throw (void 0 !== i && h(i.call(e)), t);
    }
  },
  os = Pi("iterator"),
  ss = Array.prototype,
  as = n(function(e) {
    var t = {},
      n = {},
      r = (e.exports = function(e, r, i, o, s) {
        var a,
          u,
          c,
          l,
          p,
          d = s
            ? function() {
                return e;
              }
            : Qi(e),
          v = f(i, o, r ? 2 : 1),
          y = 0;
        if ("function" != typeof d) throw TypeError(e + " is not iterable!");
        if (void 0 === (p = d) || (gi.Array !== p && ss[os] !== p)) {
          for (c = d.call(e); !(u = c.next()).done; )
            if ((l = is(c, v, u.value, r)) === t || l === n) return l;
        } else
          for (a = Y(e.length); a > y; y++)
            if ((l = r ? v(h((u = e[y]))[0], u[1]) : v(e[y])) === t || l === n)
              return l;
      });
    (r.BREAK = t), (r.RETURN = n);
  }),
  us = Pi("species"),
  cs = function(e, t) {
    var n,
      r = h(e).constructor;
    return void 0 === r || null == (n = h(r)[us]) ? t : l(n);
  },
  ls = u.process,
  fs = u.setImmediate,
  ps = u.clearImmediate,
  hs = u.MessageChannel,
  ds = u.Dispatch,
  vs = 0,
  ys = {},
  gs = function() {
    var e = +this;
    if (ys.hasOwnProperty(e)) {
      var t = ys[e];
      delete ys[e], t();
    }
  },
  bs = function(e) {
    gs.call(e.data);
  };
(fs && ps) ||
  ((fs = function(e) {
    for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++]);
    return (
      (ys[++vs] = function() {
        !(function(e, t, n) {
          var r = void 0 === n;
          switch (t.length) {
            case 0:
              return r ? e() : e.call(n);
            case 1:
              return r ? e(t[0]) : e.call(n, t[0]);
            case 2:
              return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
            case 3:
              return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
            case 4:
              return r
                ? e(t[0], t[1], t[2], t[3])
                : e.call(n, t[0], t[1], t[2], t[3]);
          }
          e.apply(n, t);
        })("function" == typeof e ? e : Function(e), t);
      }),
      es(vs),
      vs
    );
  }),
  (ps = function(e) {
    delete ys[e];
  }),
  "process" == V(ls)
    ? (es = function(e) {
        ls.nextTick(f(gs, e, 1));
      })
    : ds && ds.now
    ? (es = function(e) {
        ds.now(f(gs, e, 1));
      })
    : hs
    ? ((ns = (ts = new hs()).port2),
      (ts.port1.onmessage = bs),
      (es = f(ns.postMessage, ns, 1)))
    : u.addEventListener && "function" == typeof postMessage && !u.importScripts
    ? ((es = function(e) {
        u.postMessage(e + "", "*");
      }),
      u.addEventListener("message", bs, !1))
    : (es =
        "onreadystatechange" in b("script")
          ? function(e) {
              wi.appendChild(b("script")).onreadystatechange = function() {
                wi.removeChild(this), gs.call(e);
              };
            }
          : function(e) {
              setTimeout(f(gs, e, 1), 0);
            }));
var ms = { set: fs, clear: ps },
  _s = ms.set,
  ws = u.MutationObserver || u.WebKitMutationObserver,
  ks = u.process,
  Ss = u.Promise,
  Os = "process" == V(ks);
function xs(e) {
  var t, n;
  (this.promise = new e(function(e, r) {
    if (void 0 !== t || void 0 !== n)
      throw TypeError("Bad Promise constructor");
    (t = e), (n = r);
  })),
    (this.resolve = l(t)),
    (this.reject = l(n));
}
var Ps = {
    f: function(e) {
      return new xs(e);
    }
  },
  Es = function(e) {
    try {
      return { e: !1, v: e() };
    } catch (e) {
      return { e: !0, v: e };
    }
  },
  Ts = u.navigator,
  js = (Ts && Ts.userAgent) || "",
  Cs = function(e, t) {
    if ((h(e), p(t) && t.constructor === e)) return t;
    var n = Ps.f(e);
    return (0, n.resolve)(t), n.promise;
  },
  Ms = Pi("species"),
  As = Pi("iterator"),
  Rs = !1;
try {
  [7][As]().return = function() {
    Rs = !0;
  };
} catch (e) {}
var Ns,
  Is,
  Ds,
  Ls,
  Us = ms.set,
  Ks = (function() {
    var e,
      t,
      n,
      r = function() {
        var r, i;
        for (Os && (r = ks.domain) && r.exit(); e; ) {
          (i = e.fn), (e = e.next);
          try {
            i();
          } catch (r) {
            throw (e ? n() : (t = void 0), r);
          }
        }
        (t = void 0), r && r.enter();
      };
    if (Os)
      n = function() {
        ks.nextTick(r);
      };
    else if (!ws || (u.navigator && u.navigator.standalone))
      if (Ss && Ss.resolve) {
        var i = Ss.resolve(void 0);
        n = function() {
          i.then(r);
        };
      } else
        n = function() {
          _s.call(u, r);
        };
    else {
      var o = !0,
        s = document.createTextNode("");
      new ws(r).observe(s, { characterData: !0 }),
        (n = function() {
          s.data = o = !o;
        });
    }
    return function(r) {
      var i = { fn: r, next: void 0 };
      t && (t.next = i), e || ((e = i), n()), (t = i);
    };
  })(),
  Fs = u.TypeError,
  Bs = u.process,
  Gs = Bs && Bs.versions,
  Hs = (Gs && Gs.v8) || "",
  zs = u.Promise,
  Vs = "process" == Ji(Bs),
  qs = function() {},
  $s = (Is = Ps.f),
  Ws = !!(function() {
    try {
      var e = zs.resolve(1),
        t = ((e.constructor = {})[Pi("species")] = function(e) {
          e(qs, qs);
        });
      return (
        (Vs || "function" == typeof PromiseRejectionEvent) &&
        e.then(qs) instanceof t &&
        0 !== Hs.indexOf("6.6") &&
        -1 === js.indexOf("Chrome/66")
      );
    } catch (e) {}
  })(),
  Js = function(e) {
    var t;
    return !(!p(e) || "function" != typeof (t = e.then)) && t;
  },
  Xs = function(e, t) {
    if (!e._n) {
      e._n = !0;
      var n = e._c;
      Ks(function() {
        for (
          var r = e._v,
            i = 1 == e._s,
            o = 0,
            s = function(t) {
              var n,
                o,
                s,
                a = i ? t.ok : t.fail,
                u = t.resolve,
                c = t.reject,
                l = t.domain;
              try {
                a
                  ? (i || (2 == e._h && Zs(e), (e._h = 1)),
                    !0 === a
                      ? (n = r)
                      : (l && l.enter(), (n = a(r)), l && (l.exit(), (s = !0))),
                    n === t.promise
                      ? c(Fs("Promise-chain cycle"))
                      : (o = Js(n))
                      ? o.call(n, u, c)
                      : u(n))
                  : c(r);
              } catch (e) {
                l && !s && l.exit(), c(e);
              }
            };
          n.length > o;

        )
          s(n[o++]);
        (e._c = []), (e._n = !1), t && !e._h && Qs(e);
      });
    }
  },
  Qs = function(e) {
    Us.call(u, function() {
      var t,
        n,
        r,
        i = e._v,
        o = Ys(e);
      if (
        (o &&
          ((t = Es(function() {
            Vs
              ? Bs.emit("unhandledRejection", i, e)
              : (n = u.onunhandledrejection)
              ? n({ promise: e, reason: i })
              : (r = u.console) &&
                r.error &&
                r.error("Unhandled promise rejection", i);
          })),
          (e._h = Vs || Ys(e) ? 2 : 1)),
        (e._a = void 0),
        o && t.e)
      )
        throw t.v;
    });
  },
  Ys = function(e) {
    return 1 !== e._h && 0 === (e._a || e._c).length;
  },
  Zs = function(e) {
    Us.call(u, function() {
      var t;
      Vs
        ? Bs.emit("rejectionHandled", e)
        : (t = u.onrejectionhandled) && t({ promise: e, reason: e._v });
    });
  },
  ea = function(e) {
    var t = this;
    t._d ||
      ((t._d = !0),
      ((t = t._w || t)._v = e),
      (t._s = 2),
      t._a || (t._a = t._c.slice()),
      Xs(t, !0));
  },
  ta = function(e) {
    var t,
      n = this;
    if (!n._d) {
      (n._d = !0), (n = n._w || n);
      try {
        if (n === e) throw Fs("Promise can't be resolved itself");
        (t = Js(e))
          ? Ks(function() {
              var r = { _w: n, _d: !1 };
              try {
                t.call(e, f(ta, r, 1), f(ea, r, 1));
              } catch (e) {
                ea.call(r, e);
              }
            })
          : ((n._v = e), (n._s = 1), Xs(n, !1));
      } catch (e) {
        ea.call({ _w: n, _d: !1 }, e);
      }
    }
  };
Ws ||
  ((zs = function(e) {
    !(function(e, t, n, r) {
      if (!(e instanceof t) || (void 0 !== r && r in e))
        throw TypeError(n + ": incorrect invocation!");
    })(this, zs, "Promise", "_h"),
      l(e),
      Ns.call(this);
    try {
      e(f(ta, this, 1), f(ea, this, 1));
    } catch (e) {
      ea.call(this, e);
    }
  }),
  ((Ns = function(e) {
    (this._c = []),
      (this._a = void 0),
      (this._s = 0),
      (this._d = !1),
      (this._v = void 0),
      (this._h = 0),
      (this._n = !1);
  }).prototype = (function(e, t, n) {
    for (var r in t) n && e[r] ? (e[r] = t[r]) : O(e, r, t[r]);
    return e;
  })(zs.prototype, {
    then: function(e, t) {
      var n = $s(cs(this, zs));
      return (
        (n.ok = "function" != typeof e || e),
        (n.fail = "function" == typeof t && t),
        (n.domain = Vs ? Bs.domain : void 0),
        this._c.push(n),
        this._a && this._a.push(n),
        this._s && Xs(this, !1),
        n.promise
      );
    },
    catch: function(e) {
      return this.then(void 0, e);
    }
  })),
  (Ds = function() {
    var e = new Ns();
    (this.promise = e),
      (this.resolve = f(ta, e, 1)),
      (this.reject = f(ea, e, 1));
  }),
  (Ps.f = $s = function(e) {
    return e === zs || e === Ls ? new Ds(e) : Is(e);
  })),
  T(T.G + T.W + T.F * !Ws, { Promise: zs }),
  ji(zs, "Promise"),
  (function(e) {
    var t = "function" == typeof c[e] ? c[e] : u[e];
    v &&
      t &&
      !t[Ms] &&
      k.f(t, Ms, {
        configurable: !0,
        get: function() {
          return this;
        }
      });
  })("Promise"),
  (Ls = c.Promise),
  T(T.S + T.F * !Ws, "Promise", {
    reject: function(e) {
      var t = $s(this);
      return (0, t.reject)(e), t.promise;
    }
  }),
  T(T.S + !0 * T.F, "Promise", {
    resolve: function(e) {
      return Cs(this === Ls ? zs : this, e);
    }
  }),
  T(
    T.S +
      T.F *
        !(
          Ws &&
          (function(e, t) {
            if (!t && !Rs) return !1;
            var n = !1;
            try {
              var r = [7],
                i = r[As]();
              (i.next = function() {
                return { done: (n = !0) };
              }),
                (r[As] = function() {
                  return i;
                }),
                e(r);
            } catch (e) {}
            return n;
          })(function(e) {
            zs.all(e).catch(qs);
          })
        ),
    "Promise",
    {
      all: function(e) {
        var t = this,
          n = $s(t),
          r = n.resolve,
          i = n.reject,
          o = Es(function() {
            var n = [],
              o = 0,
              s = 1;
            as(e, !1, function(e) {
              var a = o++,
                u = !1;
              n.push(void 0),
                s++,
                t.resolve(e).then(function(e) {
                  u || ((u = !0), (n[a] = e), --s || r(n));
                }, i);
            }),
              --s || r(n);
          });
        return o.e && i(o.v), n.promise;
      },
      race: function(e) {
        var t = this,
          n = $s(t),
          r = n.reject,
          i = Es(function() {
            as(e, !1, function(e) {
              t.resolve(e).then(n.resolve, r);
            });
          });
        return i.e && r(i.v), n.promise;
      }
    }
  ),
  T(T.P + T.R, "Promise", {
    finally: function(e) {
      var t = cs(this, c.Promise || u.Promise),
        n = "function" == typeof e;
      return this.then(
        n
          ? function(n) {
              return Cs(t, e()).then(function() {
                return n;
              });
            }
          : e,
        n
          ? function(n) {
              return Cs(t, e()).then(function() {
                throw n;
              });
            }
          : e
      );
    }
  }),
  T(T.S, "Promise", {
    try: function(e) {
      var t = Ps.f(this),
        n = Es(e);
      return (n.e ? t.reject : t.resolve)(n.v), t.promise;
    }
  });
var na = c.Promise,
  ra = n(function(e) {
    e.exports = { default: na, __esModule: !0 };
  }),
  ia = t(ra),
  oa = n(function(e) {
    !(function(t) {
      var n,
        r = Object.prototype,
        i = r.hasOwnProperty,
        o = "function" == typeof Symbol ? Symbol : {},
        s = o.iterator || "@@iterator",
        a = o.asyncIterator || "@@asyncIterator",
        u = o.toStringTag || "@@toStringTag",
        c = t.regeneratorRuntime;
      if (c) e.exports = c;
      else {
        (c = t.regeneratorRuntime = e.exports).wrap = m;
        var l = "suspendedStart",
          f = "suspendedYield",
          p = "executing",
          h = "completed",
          d = {},
          v = {};
        v[s] = function() {
          return this;
        };
        var y = Object.getPrototypeOf,
          g = y && y(y(C([])));
        g && g !== r && i.call(g, s) && (v = g);
        var b = (S.prototype = w.prototype = Object.create(v));
        (k.prototype = b.constructor = S),
          (S.constructor = k),
          (S[u] = k.displayName = "GeneratorFunction"),
          (c.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === k || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (c.mark = function(e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, S)
                : ((e.__proto__ = S), u in e || (e[u] = "GeneratorFunction")),
              (e.prototype = Object.create(b)),
              e
            );
          }),
          (c.awrap = function(e) {
            return { __await: e };
          }),
          O(x.prototype),
          (x.prototype[a] = function() {
            return this;
          }),
          (c.AsyncIterator = x),
          (c.async = function(e, t, n, r) {
            var i = new x(m(e, t, n, r));
            return c.isGeneratorFunction(t)
              ? i
              : i.next().then(function(e) {
                  return e.done ? e.value : i.next();
                });
          }),
          O(b),
          (b[u] = "Generator"),
          (b[s] = function() {
            return this;
          }),
          (b.toString = function() {
            return "[object Generator]";
          }),
          (c.keys = function(e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var r = t.pop();
                  if (r in e) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (c.values = C),
          (j.prototype = {
            constructor: j,
            reset: function(e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = n),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = n),
                this.tryEntries.forEach(T),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    i.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = n);
            },
            stop: function() {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function(e) {
              if (this.done) throw e;
              var t = this;
              function r(r, i) {
                return (
                  (a.type = "throw"),
                  (a.arg = e),
                  (t.next = r),
                  i && ((t.method = "next"), (t.arg = n)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var s = this.tryEntries[o],
                  a = s.completion;
                if ("root" === s.tryLoc) return r("end");
                if (s.tryLoc <= this.prev) {
                  var u = i.call(s, "catchLoc"),
                    c = i.call(s, "finallyLoc");
                  if (u && c) {
                    if (this.prev < s.catchLoc) return r(s.catchLoc, !0);
                    if (this.prev < s.finallyLoc) return r(s.finallyLoc);
                  } else if (u) {
                    if (this.prev < s.catchLoc) return r(s.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < s.finallyLoc) return r(s.finallyLoc);
                  }
                }
              }
            },
            abrupt: function(e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  i.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var o = r;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var s = o ? o.completion : {};
              return (
                (s.type = e),
                (s.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), d)
                  : this.complete(s)
              );
            },
            complete: function(e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                d
              );
            },
            finish: function(e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), T(n), d;
              }
            },
            catch: function(e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var i = r.arg;
                    T(n);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function(e, t, r) {
              return (
                (this.delegate = { iterator: C(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = n),
                d
              );
            }
          });
      }
      function m(e, t, n, r) {
        var i = t && t.prototype instanceof w ? t : w,
          o = Object.create(i.prototype),
          s = new j(r || []);
        return (
          (o._invoke = (function(e, t, n) {
            var r = l;
            return function(i, o) {
              if (r === p) throw new Error("Generator is already running");
              if (r === h) {
                if ("throw" === i) throw o;
                return M();
              }
              for (n.method = i, n.arg = o; ; ) {
                var s = n.delegate;
                if (s) {
                  var a = P(s, n);
                  if (a) {
                    if (a === d) continue;
                    return a;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (r === l) throw ((r = h), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = p;
                var u = _(e, t, n);
                if ("normal" === u.type) {
                  if (((r = n.done ? h : f), u.arg === d)) continue;
                  return { value: u.arg, done: n.done };
                }
                "throw" === u.type &&
                  ((r = h), (n.method = "throw"), (n.arg = u.arg));
              }
            };
          })(e, n, s)),
          o
        );
      }
      function _(e, t, n) {
        try {
          return { type: "normal", arg: e.call(t, n) };
        } catch (e) {
          return { type: "throw", arg: e };
        }
      }
      function w() {}
      function k() {}
      function S() {}
      function O(e) {
        ["next", "throw", "return"].forEach(function(t) {
          e[t] = function(e) {
            return this._invoke(t, e);
          };
        });
      }
      function x(e) {
        var t;
        this._invoke = function(n, r) {
          function o() {
            return new Promise(function(t, o) {
              !(function t(n, r, o, s) {
                var a = _(e[n], e, r);
                if ("throw" !== a.type) {
                  var u = a.arg,
                    c = u.value;
                  return c && "object" == typeof c && i.call(c, "__await")
                    ? Promise.resolve(c.__await).then(
                        function(e) {
                          t("next", e, o, s);
                        },
                        function(e) {
                          t("throw", e, o, s);
                        }
                      )
                    : Promise.resolve(c).then(function(e) {
                        (u.value = e), o(u);
                      }, s);
                }
                s(a.arg);
              })(n, r, t, o);
            });
          }
          return (t = t ? t.then(o, o) : o());
        };
      }
      function P(e, t) {
        var r = e.iterator[t.method];
        if (r === n) {
          if (((t.delegate = null), "throw" === t.method)) {
            if (
              e.iterator.return &&
              ((t.method = "return"),
              (t.arg = n),
              P(e, t),
              "throw" === t.method)
            )
              return d;
            (t.method = "throw"),
              (t.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return d;
        }
        var i = _(r, e.iterator, t.arg);
        if ("throw" === i.type)
          return (t.method = "throw"), (t.arg = i.arg), (t.delegate = null), d;
        var o = i.arg;
        return o
          ? o.done
            ? ((t[e.resultName] = o.value),
              (t.next = e.nextLoc),
              "return" !== t.method && ((t.method = "next"), (t.arg = n)),
              (t.delegate = null),
              d)
            : o
          : ((t.method = "throw"),
            (t.arg = new TypeError("iterator result is not an object")),
            (t.delegate = null),
            d);
      }
      function E(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function T(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function j(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(E, this),
          this.reset(!0);
      }
      function C(e) {
        if (e) {
          var t = e[s];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var r = -1,
              o = function t() {
                for (; ++r < e.length; )
                  if (i.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                return (t.value = n), (t.done = !0), t;
              };
            return (o.next = o);
          }
        }
        return { next: M };
      }
      function M() {
        return { value: n, done: !0 };
      }
    })(
      (function() {
        return this;
      })() || Function("return this")()
    );
  }),
  sa =
    (function() {
      return this;
    })() || Function("return this")(),
  aa =
    sa.regeneratorRuntime &&
    Object.getOwnPropertyNames(sa).indexOf("regeneratorRuntime") >= 0,
  ua = aa && sa.regeneratorRuntime;
sa.regeneratorRuntime = void 0;
var ca = oa;
if (aa) sa.regeneratorRuntime = ua;
else
  try {
    delete sa.regeneratorRuntime;
  } catch (e) {
    sa.regeneratorRuntime = void 0;
  }
var la = ca,
  fa = t(
    n(function(e, t) {
      t.__esModule = !0;
      var n,
        r = (n = ra) && n.__esModule ? n : { default: n };
      t.default = function(e) {
        return function() {
          var t = e.apply(this, arguments);
          return new r.default(function(e, n) {
            return (function i(o, s) {
              try {
                var a = t[o](s),
                  u = a.value;
              } catch (e) {
                return void n(e);
              }
              if (!a.done)
                return r.default.resolve(u).then(
                  function(e) {
                    i("next", e);
                  },
                  function(e) {
                    i("throw", e);
                  }
                );
              e(u);
            })("next");
          });
        };
      };
    })
  ),
  pa = Object.assign,
  ha =
    !pa ||
    d(function() {
      var e = {},
        t = {},
        n = Symbol(),
        r = "abcdefghijklmnopqrst";
      return (
        (e[n] = 7),
        r.split("").forEach(function(e) {
          t[e] = e;
        }),
        7 != pa({}, e)[n] || Object.keys(pa({}, t)).join("") != r
      );
    })
      ? function(e, t) {
          for (
            var n = H(e), r = arguments.length, i = 1, o = co.f, s = lo.f;
            r > i;

          )
            for (
              var a,
                u = q(arguments[i++]),
                c = o ? fe(u).concat(o(u)) : fe(u),
                l = c.length,
                f = 0;
              l > f;

            )
              (a = c[f++]), (v && !s.call(u, a)) || (n[a] = u[a]);
          return n;
        }
      : pa;
T(T.S + T.F, "Object", { assign: ha });
var da = c.Object.assign,
  va = n(function(e) {
    e.exports = { default: da, __esModule: !0 };
  });
t(va);
var ya = t(
    n(function(e, t) {
      t.__esModule = !0;
      var n,
        r = (n = va) && n.__esModule ? n : { default: n };
      t.default =
        r.default ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        };
    })
  ),
  ga = t(
    n(function(e, t) {
      (t.__esModule = !0),
        (t.default = function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        });
    })
  ),
  ba = n(function(e, t) {
    e.exports = (function(e) {
      function t(r) {
        if (n[r]) return n[r].exports;
        var i = (n[r] = { exports: {}, id: r, loaded: !1 });
        return (
          e[r].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports
        );
      }
      var n = {};
      return (t.m = e), (t.c = n), (t.p = ""), t(0);
    })([
      function(e, t, n) {
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i(e) {
          if (!navigator || !navigator.sendBeacon) return !1;
          navigator.sendBeacon(e);
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = n(1),
          s = r(o),
          a = n(40),
          u = r(a),
          c = n(41),
          l = r(c),
          f = n(42),
          p =
            (n(5),
            (function(e) {
              function t(e) {
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t);
                var n = e.listenToBrowserNetworkEvents,
                  r = void 0 === n || n;
                (e.db = l.default),
                  (e.sdkFamily = "Web"),
                  (e.networking = new u.default({
                    del: f.del,
                    get: f.get,
                    post: f.post,
                    sendBeacon: i
                  }));
                var o = (function(e, t) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
                })(
                  this,
                  (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
                );
                return (
                  r &&
                    (window.addEventListener("offline", function() {
                      o.networkDownDetected();
                    }),
                    window.addEventListener("online", function() {
                      o.networkUpDetected();
                    })),
                  o
                );
              }
              return (
                (function(e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof t
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }
                  })),
                    t &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, t)
                        : (e.__proto__ = t));
                })(t, e),
                t
              );
            })(s.default));
        (t.default = p), (e.exports = t.default);
      },
      function(e, t, n) {
        function r(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        }
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = (function() {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function(t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          s = n(2),
          a = i(s),
          u = n(6),
          c = i(u),
          l = n(8),
          f = i(l),
          p = n(9),
          h = i(p),
          d = n(16),
          v = i(d),
          y = n(17),
          g = r(y),
          b = n(18),
          m = r(b),
          _ = n(19),
          w = r(_),
          k = n(20),
          S = r(k),
          O = n(21),
          x = r(O),
          P = n(22),
          E = r(P),
          T = n(23),
          j = r(T),
          C = n(24),
          M = r(C),
          A = n(25),
          R = r(A),
          N = n(26),
          I = r(N),
          D = n(27),
          L = r(D),
          U = n(28),
          K = r(U),
          F = n(29),
          B = r(F),
          G = n(30),
          H = r(G),
          z = n(31),
          V = r(z),
          q = n(32),
          $ = r(q),
          W = n(33),
          J = r(W),
          X = n(34),
          Q = r(X),
          Y = n(35),
          Z = r(Y),
          ee = n(36),
          te = r(ee),
          ne = n(37),
          re = r(ne),
          ie = n(38),
          oe = r(ie),
          se = n(12),
          ae = r(se),
          ue = n(39),
          ce = r(ue),
          le = n(13),
          fe = i(le),
          pe = n(10),
          he = i(pe),
          de = (n(5), n(3)),
          ve = i(de),
          ye = (function() {
            function e(t) {
              var n = this;
              !(function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e);
              var r = t.db,
                i = t.networking,
                o = (this._config = new a.default({ setup: t, db: r })),
                s = new c.default({ config: o });
              i.init(o);
              var u = { config: o, networking: i, crypto: s },
                l = v.default.bind(this, u, ae),
                p = v.default.bind(this, u, I),
                d = v.default.bind(this, u, K),
                y = v.default.bind(this, u, H),
                b = v.default.bind(this, u, ce),
                _ = (this._listenerManager = new h.default()),
                k = new f.default({
                  timeEndpoint: l,
                  leaveEndpoint: p,
                  heartbeatEndpoint: d,
                  setStateEndpoint: y,
                  subscribeEndpoint: b,
                  crypto: u.crypto,
                  config: u.config,
                  listenerManager: _
                });
              (this.addListener = _.addListener.bind(_)),
                (this.removeListener = _.removeListener.bind(_)),
                (this.removeAllListeners = _.removeAllListeners.bind(_)),
                (this.channelGroups = {
                  listGroups: v.default.bind(this, u, S),
                  listChannels: v.default.bind(this, u, x),
                  addChannels: v.default.bind(this, u, g),
                  removeChannels: v.default.bind(this, u, m),
                  deleteGroup: v.default.bind(this, u, w)
                }),
                (this.push = {
                  addChannels: v.default.bind(this, u, E),
                  removeChannels: v.default.bind(this, u, j),
                  deleteDevice: v.default.bind(this, u, R),
                  listChannels: v.default.bind(this, u, M)
                }),
                (this.hereNow = v.default.bind(this, u, V)),
                (this.whereNow = v.default.bind(this, u, L)),
                (this.getState = v.default.bind(this, u, B)),
                (this.setState = k.adaptStateChange.bind(k)),
                (this.grant = v.default.bind(this, u, J)),
                (this.audit = v.default.bind(this, u, $)),
                (this.publish = v.default.bind(this, u, Q)),
                (this.fire = function(e, t) {
                  return (
                    (e.replicate = !1), (e.storeInHistory = !1), n.publish(e, t)
                  );
                }),
                (this.history = v.default.bind(this, u, Z)),
                (this.deleteMessages = v.default.bind(this, u, te)),
                (this.messageCounts = v.default.bind(this, u, re)),
                (this.fetchMessages = v.default.bind(this, u, oe)),
                (this.time = l),
                (this.subscribe = k.adaptSubscribeChange.bind(k)),
                (this.presence = k.adaptPresenceChange.bind(k)),
                (this.unsubscribe = k.adaptUnsubscribeChange.bind(k)),
                (this.disconnect = k.disconnect.bind(k)),
                (this.reconnect = k.reconnect.bind(k)),
                (this.destroy = function(e) {
                  k.unsubscribeAll(e), k.disconnect();
                }),
                (this.stop = this.destroy),
                (this.unsubscribeAll = k.unsubscribeAll.bind(k)),
                (this.getSubscribedChannels = k.getSubscribedChannels.bind(k)),
                (this.getSubscribedChannelGroups = k.getSubscribedChannelGroups.bind(
                  k
                )),
                (this.encrypt = s.encrypt.bind(s)),
                (this.decrypt = s.decrypt.bind(s)),
                (this.getAuthKey = u.config.getAuthKey.bind(u.config)),
                (this.setAuthKey = u.config.setAuthKey.bind(u.config)),
                (this.setCipherKey = u.config.setCipherKey.bind(u.config)),
                (this.getUUID = u.config.getUUID.bind(u.config)),
                (this.setUUID = u.config.setUUID.bind(u.config)),
                (this.getFilterExpression = u.config.getFilterExpression.bind(
                  u.config
                )),
                (this.setFilterExpression = u.config.setFilterExpression.bind(
                  u.config
                )),
                (this.setHeartbeatInterval = u.config.setHeartbeatInterval.bind(
                  u.config
                )),
                i.hasModule("proxy") &&
                  (this.setProxy = function(e) {
                    u.config.setProxy(e), n.reconnect();
                  });
            }
            return (
              o(
                e,
                [
                  {
                    key: "getVersion",
                    value: function() {
                      return this._config.getVersion();
                    }
                  },
                  {
                    key: "networkDownDetected",
                    value: function() {
                      this._listenerManager.announceNetworkDown(),
                        this._config.restore
                          ? this.disconnect()
                          : this.destroy(!0);
                    }
                  },
                  {
                    key: "networkUpDetected",
                    value: function() {
                      this._listenerManager.announceNetworkUp(),
                        this.reconnect();
                    }
                  }
                ],
                [
                  {
                    key: "generateUUID",
                    value: function() {
                      return ve.default.createUUID();
                    }
                  }
                ]
              ),
              e
            );
          })();
        (ye.OPERATIONS = fe.default),
          (ye.CATEGORIES = he.default),
          (t.default = ye),
          (e.exports = t.default);
      },
      function(e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = (function() {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function(t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          i = n(3),
          o = (function(e) {
            return e && e.__esModule ? e : { default: e };
          })(i),
          s =
            (n(5),
            (function() {
              function e(t) {
                var n = t.setup,
                  r = t.db;
                (function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  (this._db = r),
                  (this.instanceId = "pn-" + o.default.createUUID()),
                  (this.secretKey = n.secretKey || n.secret_key),
                  (this.subscribeKey = n.subscribeKey || n.subscribe_key),
                  (this.publishKey = n.publishKey || n.publish_key),
                  (this.sdkName = n.sdkName),
                  (this.sdkFamily = n.sdkFamily),
                  (this.partnerId = n.partnerId),
                  this.setAuthKey(n.authKey),
                  this.setCipherKey(n.cipherKey),
                  this.setFilterExpression(n.filterExpression),
                  (this.origin = n.origin || "ps.pndsn.com"),
                  (this.secure = n.ssl || !1),
                  (this.restore = n.restore || !1),
                  (this.proxy = n.proxy),
                  (this.keepAlive = n.keepAlive),
                  (this.keepAliveSettings = n.keepAliveSettings),
                  (this.autoNetworkDetection = n.autoNetworkDetection || !1),
                  (this.dedupeOnSubscribe = n.dedupeOnSubscribe || !1),
                  (this.maximumCacheSize = n.maximumCacheSize || 100),
                  (this.customEncrypt = n.customEncrypt),
                  (this.customDecrypt = n.customDecrypt),
                  "undefined" != typeof location &&
                    "https:" === location.protocol &&
                    (this.secure = !0),
                  (this.logVerbosity = n.logVerbosity || !1),
                  (this.suppressLeaveEvents = n.suppressLeaveEvents || !1),
                  (this.announceFailedHeartbeats =
                    n.announceFailedHeartbeats || !0),
                  (this.announceSuccessfulHeartbeats =
                    n.announceSuccessfulHeartbeats || !1),
                  (this.useInstanceId = n.useInstanceId || !1),
                  (this.useRequestId = n.useRequestId || !1),
                  (this.requestMessageCountThreshold =
                    n.requestMessageCountThreshold),
                  this.setTransactionTimeout(
                    n.transactionalRequestTimeout || 15e3
                  ),
                  this.setSubscribeTimeout(n.subscribeRequestTimeout || 31e4),
                  this.setSendBeaconConfig(n.useSendBeacon || !0),
                  this.setPresenceTimeout(n.presenceTimeout || 300),
                  null != n.heartbeatInterval &&
                    this.setHeartbeatInterval(n.heartbeatInterval),
                  this.setUUID(this._decideUUID(n.uuid));
              }
              return (
                r(e, [
                  {
                    key: "getAuthKey",
                    value: function() {
                      return this.authKey;
                    }
                  },
                  {
                    key: "setAuthKey",
                    value: function(e) {
                      return (this.authKey = e), this;
                    }
                  },
                  {
                    key: "setCipherKey",
                    value: function(e) {
                      return (this.cipherKey = e), this;
                    }
                  },
                  {
                    key: "getUUID",
                    value: function() {
                      return this.UUID;
                    }
                  },
                  {
                    key: "setUUID",
                    value: function(e) {
                      return (
                        this._db &&
                          this._db.set &&
                          this._db.set(this.subscribeKey + "uuid", e),
                        (this.UUID = e),
                        this
                      );
                    }
                  },
                  {
                    key: "getFilterExpression",
                    value: function() {
                      return this.filterExpression;
                    }
                  },
                  {
                    key: "setFilterExpression",
                    value: function(e) {
                      return (this.filterExpression = e), this;
                    }
                  },
                  {
                    key: "getPresenceTimeout",
                    value: function() {
                      return this._presenceTimeout;
                    }
                  },
                  {
                    key: "setPresenceTimeout",
                    value: function(e) {
                      return (
                        (this._presenceTimeout = e),
                        this.setHeartbeatInterval(
                          this._presenceTimeout / 2 - 1
                        ),
                        this
                      );
                    }
                  },
                  {
                    key: "setProxy",
                    value: function(e) {
                      this.proxy = e;
                    }
                  },
                  {
                    key: "getHeartbeatInterval",
                    value: function() {
                      return this._heartbeatInterval;
                    }
                  },
                  {
                    key: "setHeartbeatInterval",
                    value: function(e) {
                      return (this._heartbeatInterval = e), this;
                    }
                  },
                  {
                    key: "getSubscribeTimeout",
                    value: function() {
                      return this._subscribeRequestTimeout;
                    }
                  },
                  {
                    key: "setSubscribeTimeout",
                    value: function(e) {
                      return (this._subscribeRequestTimeout = e), this;
                    }
                  },
                  {
                    key: "getTransactionTimeout",
                    value: function() {
                      return this._transactionalRequestTimeout;
                    }
                  },
                  {
                    key: "setTransactionTimeout",
                    value: function(e) {
                      return (this._transactionalRequestTimeout = e), this;
                    }
                  },
                  {
                    key: "isSendBeaconEnabled",
                    value: function() {
                      return this._useSendBeacon;
                    }
                  },
                  {
                    key: "setSendBeaconConfig",
                    value: function(e) {
                      return (this._useSendBeacon = e), this;
                    }
                  },
                  {
                    key: "getVersion",
                    value: function() {
                      return "4.24.3";
                    }
                  },
                  {
                    key: "_decideUUID",
                    value: function(e) {
                      return (
                        e ||
                        (this._db &&
                        this._db.get &&
                        this._db.get(this.subscribeKey + "uuid")
                          ? this._db.get(this.subscribeKey + "uuid")
                          : "pn-" + o.default.createUUID())
                      );
                    }
                  }
                ]),
                e
              );
            })());
        (t.default = s), (e.exports = t.default);
      },
      function(e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(4),
          i = (function(e) {
            return e && e.__esModule ? e : { default: e };
          })(r);
        (t.default = {
          createUUID: function() {
            return i.default.uuid ? i.default.uuid() : (0, i.default)();
          }
        }),
          (e.exports = t.default);
      },
      function(e, t, n) {
        var r, i, o;
        (i = [t]),
          void 0 !==
            (o =
              "function" ==
              typeof (r = function(e) {
                function t() {
                  var e,
                    t,
                    n = "";
                  for (e = 0; e < 32; e++)
                    (t = (16 * Math.random()) | 0),
                      (8 !== e && 12 !== e && 16 !== e && 20 !== e) ||
                        (n += "-"),
                      (n += (12 === e
                        ? 4
                        : 16 === e
                        ? (3 & t) | 8
                        : t
                      ).toString(16));
                  return n;
                }
                function n(e, t) {
                  var n = r[t || "all"];
                  return (n && n.test(e)) || !1;
                }
                var r = {
                  3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
                  4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                  5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                  all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
                };
                (t.isUUID = n),
                  (t.VERSION = "0.1.0"),
                  (e.uuid = t),
                  (e.isUUID = n);
              })
                ? r.apply(t, i)
                : r) && (e.exports = o);
      },
      function(e, t) {
        e.exports = {};
      },
      function(e, t, n) {
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = (function() {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function(t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          o = n(2),
          s = (r(o), n(7)),
          a = r(s),
          u = (function() {
            function e(t) {
              var n = t.config;
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this._config = n),
                (this._iv = "0123456789012345"),
                (this._allowedKeyEncodings = [
                  "hex",
                  "utf8",
                  "base64",
                  "binary"
                ]),
                (this._allowedKeyLengths = [128, 256]),
                (this._allowedModes = ["ecb", "cbc"]),
                (this._defaultOptions = {
                  encryptKey: !0,
                  keyEncoding: "utf8",
                  keyLength: 256,
                  mode: "cbc"
                });
            }
            return (
              i(e, [
                {
                  key: "HMACSHA256",
                  value: function(e) {
                    return a.default
                      .HmacSHA256(e, this._config.secretKey)
                      .toString(a.default.enc.Base64);
                  }
                },
                {
                  key: "SHA256",
                  value: function(e) {
                    return a.default.SHA256(e).toString(a.default.enc.Hex);
                  }
                },
                {
                  key: "_parseOptions",
                  value: function(e) {
                    var t = e || {};
                    return (
                      t.hasOwnProperty("encryptKey") ||
                        (t.encryptKey = this._defaultOptions.encryptKey),
                      t.hasOwnProperty("keyEncoding") ||
                        (t.keyEncoding = this._defaultOptions.keyEncoding),
                      t.hasOwnProperty("keyLength") ||
                        (t.keyLength = this._defaultOptions.keyLength),
                      t.hasOwnProperty("mode") ||
                        (t.mode = this._defaultOptions.mode),
                      -1 ===
                        this._allowedKeyEncodings.indexOf(
                          t.keyEncoding.toLowerCase()
                        ) && (t.keyEncoding = this._defaultOptions.keyEncoding),
                      -1 ===
                        this._allowedKeyLengths.indexOf(
                          parseInt(t.keyLength, 10)
                        ) && (t.keyLength = this._defaultOptions.keyLength),
                      -1 === this._allowedModes.indexOf(t.mode.toLowerCase()) &&
                        (t.mode = this._defaultOptions.mode),
                      t
                    );
                  }
                },
                {
                  key: "_decodeKey",
                  value: function(e, t) {
                    return "base64" === t.keyEncoding
                      ? a.default.enc.Base64.parse(e)
                      : "hex" === t.keyEncoding
                      ? a.default.enc.Hex.parse(e)
                      : e;
                  }
                },
                {
                  key: "_getPaddedKey",
                  value: function(e, t) {
                    return (
                      (e = this._decodeKey(e, t)),
                      t.encryptKey
                        ? a.default.enc.Utf8.parse(this.SHA256(e).slice(0, 32))
                        : e
                    );
                  }
                },
                {
                  key: "_getMode",
                  value: function(e) {
                    return "ecb" === e.mode
                      ? a.default.mode.ECB
                      : a.default.mode.CBC;
                  }
                },
                {
                  key: "_getIV",
                  value: function(e) {
                    return "cbc" === e.mode
                      ? a.default.enc.Utf8.parse(this._iv)
                      : null;
                  }
                },
                {
                  key: "encrypt",
                  value: function(e, t, n) {
                    return this._config.customEncrypt
                      ? this._config.customEncrypt(e)
                      : this.pnEncrypt(e, t, n);
                  }
                },
                {
                  key: "decrypt",
                  value: function(e, t, n) {
                    return this._config.customDecrypt
                      ? this._config.customDecrypt(e)
                      : this.pnDecrypt(e, t, n);
                  }
                },
                {
                  key: "pnEncrypt",
                  value: function(e, t, n) {
                    if (!t && !this._config.cipherKey) return e;
                    n = this._parseOptions(n);
                    var r = this._getIV(n),
                      i = this._getMode(n),
                      o = this._getPaddedKey(t || this._config.cipherKey, n);
                    return (
                      a.default.AES.encrypt(e, o, {
                        iv: r,
                        mode: i
                      }).ciphertext.toString(a.default.enc.Base64) || e
                    );
                  }
                },
                {
                  key: "pnDecrypt",
                  value: function(e, t, n) {
                    if (!t && !this._config.cipherKey) return e;
                    n = this._parseOptions(n);
                    var r = this._getIV(n),
                      i = this._getMode(n),
                      o = this._getPaddedKey(t || this._config.cipherKey, n);
                    try {
                      var s = a.default.enc.Base64.parse(e),
                        u = a.default.AES.decrypt({ ciphertext: s }, o, {
                          iv: r,
                          mode: i
                        }).toString(a.default.enc.Utf8);
                      return JSON.parse(u);
                    } catch (e) {
                      return null;
                    }
                  }
                }
              ]),
              e
            );
          })();
        (t.default = u), (e.exports = t.default);
      },
      function(e, t) {
        var n =
          n ||
          (function(e, t) {
            var n = {},
              r = (n.lib = {}),
              i = function() {},
              o = (r.Base = {
                extend: function(e) {
                  i.prototype = this;
                  var t = new i();
                  return (
                    e && t.mixIn(e),
                    t.hasOwnProperty("init") ||
                      (t.init = function() {
                        t.$super.init.apply(this, arguments);
                      }),
                    (t.init.prototype = t),
                    (t.$super = this),
                    t
                  );
                },
                create: function() {
                  var e = this.extend();
                  return e.init.apply(e, arguments), e;
                },
                init: function() {},
                mixIn: function(e) {
                  for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                  e.hasOwnProperty("toString") && (this.toString = e.toString);
                },
                clone: function() {
                  return this.init.prototype.extend(this);
                }
              }),
              s = (r.WordArray = o.extend({
                init: function(e, t) {
                  (e = this.words = e || []),
                    (this.sigBytes = null != t ? t : 4 * e.length);
                },
                toString: function(e) {
                  return (e || u).stringify(this);
                },
                concat: function(e) {
                  var t = this.words,
                    n = e.words,
                    r = this.sigBytes;
                  if (((e = e.sigBytes), this.clamp(), r % 4))
                    for (var i = 0; i < e; i++)
                      t[(r + i) >>> 2] |=
                        ((n[i >>> 2] >>> (24 - (i % 4) * 8)) & 255) <<
                        (24 - ((r + i) % 4) * 8);
                  else if (65535 < n.length)
                    for (i = 0; i < e; i += 4) t[(r + i) >>> 2] = n[i >>> 2];
                  else t.push.apply(t, n);
                  return (this.sigBytes += e), this;
                },
                clamp: function() {
                  var t = this.words,
                    n = this.sigBytes;
                  (t[n >>> 2] &= 4294967295 << (32 - (n % 4) * 8)),
                    (t.length = e.ceil(n / 4));
                },
                clone: function() {
                  var e = o.clone.call(this);
                  return (e.words = this.words.slice(0)), e;
                },
                random: function(t) {
                  for (var n = [], r = 0; r < t; r += 4)
                    n.push((4294967296 * e.random()) | 0);
                  return new s.init(n, t);
                }
              })),
              a = (n.enc = {}),
              u = (a.Hex = {
                stringify: function(e) {
                  var t = e.words;
                  e = e.sigBytes;
                  for (var n = [], r = 0; r < e; r++) {
                    var i = (t[r >>> 2] >>> (24 - (r % 4) * 8)) & 255;
                    n.push((i >>> 4).toString(16)),
                      n.push((15 & i).toString(16));
                  }
                  return n.join("");
                },
                parse: function(e) {
                  for (var t = e.length, n = [], r = 0; r < t; r += 2)
                    n[r >>> 3] |=
                      parseInt(e.substr(r, 2), 16) << (24 - (r % 8) * 4);
                  return new s.init(n, t / 2);
                }
              }),
              c = (a.Latin1 = {
                stringify: function(e) {
                  var t = e.words;
                  e = e.sigBytes;
                  for (var n = [], r = 0; r < e; r++)
                    n.push(
                      String.fromCharCode(
                        (t[r >>> 2] >>> (24 - (r % 4) * 8)) & 255
                      )
                    );
                  return n.join("");
                },
                parse: function(e) {
                  for (var t = e.length, n = [], r = 0; r < t; r++)
                    n[r >>> 2] |= (255 & e.charCodeAt(r)) << (24 - (r % 4) * 8);
                  return new s.init(n, t);
                }
              }),
              l = (a.Utf8 = {
                stringify: function(e) {
                  try {
                    return decodeURIComponent(escape(c.stringify(e)));
                  } catch (e) {
                    throw Error("Malformed UTF-8 data");
                  }
                },
                parse: function(e) {
                  return c.parse(unescape(encodeURIComponent(e)));
                }
              }),
              f = (r.BufferedBlockAlgorithm = o.extend({
                reset: function() {
                  (this._data = new s.init()), (this._nDataBytes = 0);
                },
                _append: function(e) {
                  "string" == typeof e && (e = l.parse(e)),
                    this._data.concat(e),
                    (this._nDataBytes += e.sigBytes);
                },
                _process: function(t) {
                  var n = this._data,
                    r = n.words,
                    i = n.sigBytes,
                    o = this.blockSize,
                    a = i / (4 * o),
                    a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0);
                  if (((t = a * o), (i = e.min(4 * t, i)), t)) {
                    for (var u = 0; u < t; u += o) this._doProcessBlock(r, u);
                    (u = r.splice(0, t)), (n.sigBytes -= i);
                  }
                  return new s.init(u, i);
                },
                clone: function() {
                  var e = o.clone.call(this);
                  return (e._data = this._data.clone()), e;
                },
                _minBufferSize: 0
              }));
            r.Hasher = f.extend({
              cfg: o.extend(),
              init: function(e) {
                (this.cfg = this.cfg.extend(e)), this.reset();
              },
              reset: function() {
                f.reset.call(this), this._doReset();
              },
              update: function(e) {
                return this._append(e), this._process(), this;
              },
              finalize: function(e) {
                return e && this._append(e), this._doFinalize();
              },
              blockSize: 16,
              _createHelper: function(e) {
                return function(t, n) {
                  return new e.init(n).finalize(t);
                };
              },
              _createHmacHelper: function(e) {
                return function(t, n) {
                  return new p.HMAC.init(e, n).finalize(t);
                };
              }
            });
            var p = (n.algo = {});
            return n;
          })(Math);
        !(function(e) {
          for (
            var t = n,
              r = t.lib,
              i = r.WordArray,
              o = r.Hasher,
              r = t.algo,
              s = [],
              a = [],
              u = function(e) {
                return (4294967296 * (e - (0 | e))) | 0;
              },
              c = 2,
              l = 0;
            64 > l;

          ) {
            var f;
            e: {
              f = c;
              for (var p = e.sqrt(f), h = 2; h <= p; h++)
                if (!(f % h)) {
                  f = !1;
                  break e;
                }
              f = !0;
            }
            f &&
              (8 > l && (s[l] = u(e.pow(c, 0.5))),
              (a[l] = u(e.pow(c, 1 / 3))),
              l++),
              c++;
          }
          var d = [],
            r = (r.SHA256 = o.extend({
              _doReset: function() {
                this._hash = new i.init(s.slice(0));
              },
              _doProcessBlock: function(e, t) {
                for (
                  var n = this._hash.words,
                    r = n[0],
                    i = n[1],
                    o = n[2],
                    s = n[3],
                    u = n[4],
                    c = n[5],
                    l = n[6],
                    f = n[7],
                    p = 0;
                  64 > p;
                  p++
                ) {
                  if (16 > p) d[p] = 0 | e[t + p];
                  else {
                    var h = d[p - 15],
                      v = d[p - 2];
                    d[p] =
                      (((h << 25) | (h >>> 7)) ^
                        ((h << 14) | (h >>> 18)) ^
                        (h >>> 3)) +
                      d[p - 7] +
                      (((v << 15) | (v >>> 17)) ^
                        ((v << 13) | (v >>> 19)) ^
                        (v >>> 10)) +
                      d[p - 16];
                  }
                  (h =
                    f +
                    (((u << 26) | (u >>> 6)) ^
                      ((u << 21) | (u >>> 11)) ^
                      ((u << 7) | (u >>> 25))) +
                    ((u & c) ^ (~u & l)) +
                    a[p] +
                    d[p]),
                    (v =
                      (((r << 30) | (r >>> 2)) ^
                        ((r << 19) | (r >>> 13)) ^
                        ((r << 10) | (r >>> 22))) +
                      ((r & i) ^ (r & o) ^ (i & o))),
                    (f = l),
                    (l = c),
                    (c = u),
                    (u = (s + h) | 0),
                    (s = o),
                    (o = i),
                    (i = r),
                    (r = (h + v) | 0);
                }
                (n[0] = (n[0] + r) | 0),
                  (n[1] = (n[1] + i) | 0),
                  (n[2] = (n[2] + o) | 0),
                  (n[3] = (n[3] + s) | 0),
                  (n[4] = (n[4] + u) | 0),
                  (n[5] = (n[5] + c) | 0),
                  (n[6] = (n[6] + l) | 0),
                  (n[7] = (n[7] + f) | 0);
              },
              _doFinalize: function() {
                var t = this._data,
                  n = t.words,
                  r = 8 * this._nDataBytes,
                  i = 8 * t.sigBytes;
                return (
                  (n[i >>> 5] |= 128 << (24 - (i % 32))),
                  (n[14 + (((i + 64) >>> 9) << 4)] = e.floor(r / 4294967296)),
                  (n[15 + (((i + 64) >>> 9) << 4)] = r),
                  (t.sigBytes = 4 * n.length),
                  this._process(),
                  this._hash
                );
              },
              clone: function() {
                var e = o.clone.call(this);
                return (e._hash = this._hash.clone()), e;
              }
            }));
          (t.SHA256 = o._createHelper(r)),
            (t.HmacSHA256 = o._createHmacHelper(r));
        })(Math),
          (function() {
            var e = n,
              t = e.enc.Utf8;
            e.algo.HMAC = e.lib.Base.extend({
              init: function(e, n) {
                (e = this._hasher = new e.init()),
                  "string" == typeof n && (n = t.parse(n));
                var r = e.blockSize,
                  i = 4 * r;
                n.sigBytes > i && (n = e.finalize(n)), n.clamp();
                for (
                  var o = (this._oKey = n.clone()),
                    s = (this._iKey = n.clone()),
                    a = o.words,
                    u = s.words,
                    c = 0;
                  c < r;
                  c++
                )
                  (a[c] ^= 1549556828), (u[c] ^= 909522486);
                (o.sigBytes = s.sigBytes = i), this.reset();
              },
              reset: function() {
                var e = this._hasher;
                e.reset(), e.update(this._iKey);
              },
              update: function(e) {
                return this._hasher.update(e), this;
              },
              finalize: function(e) {
                var t = this._hasher;
                return (
                  (e = t.finalize(e)),
                  t.reset(),
                  t.finalize(this._oKey.clone().concat(e))
                );
              }
            });
          })(),
          (function() {
            var e = n,
              t = e.lib.WordArray;
            e.enc.Base64 = {
              stringify: function(e) {
                var t = e.words,
                  n = e.sigBytes,
                  r = this._map;
                e.clamp(), (e = []);
                for (var i = 0; i < n; i += 3)
                  for (
                    var o =
                        (((t[i >>> 2] >>> (24 - (i % 4) * 8)) & 255) << 16) |
                        (((t[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) &
                          255) <<
                          8) |
                        ((t[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 255),
                      s = 0;
                    4 > s && i + 0.75 * s < n;
                    s++
                  )
                    e.push(r.charAt((o >>> (6 * (3 - s))) & 63));
                if ((t = r.charAt(64))) for (; e.length % 4; ) e.push(t);
                return e.join("");
              },
              parse: function(e) {
                var n = e.length,
                  r = this._map,
                  i = r.charAt(64);
                i && -1 != (i = e.indexOf(i)) && (n = i);
                for (var i = [], o = 0, s = 0; s < n; s++)
                  if (s % 4) {
                    var a = r.indexOf(e.charAt(s - 1)) << ((s % 4) * 2),
                      u = r.indexOf(e.charAt(s)) >>> (6 - (s % 4) * 2);
                    (i[o >>> 2] |= (a | u) << (24 - (o % 4) * 8)), o++;
                  }
                return t.create(i, o);
              },
              _map:
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            };
          })(),
          (function(e) {
            function t(e, t, n, r, i, o, s) {
              return (
                (((e = e + ((t & n) | (~t & r)) + i + s) << o) |
                  (e >>> (32 - o))) +
                t
              );
            }
            function r(e, t, n, r, i, o, s) {
              return (
                (((e = e + ((t & r) | (n & ~r)) + i + s) << o) |
                  (e >>> (32 - o))) +
                t
              );
            }
            function i(e, t, n, r, i, o, s) {
              return (
                (((e = e + (t ^ n ^ r) + i + s) << o) | (e >>> (32 - o))) + t
              );
            }
            function o(e, t, n, r, i, o, s) {
              return (
                (((e = e + (n ^ (t | ~r)) + i + s) << o) | (e >>> (32 - o))) + t
              );
            }
            for (
              var s = n,
                a = s.lib,
                u = a.WordArray,
                c = a.Hasher,
                a = s.algo,
                l = [],
                f = 0;
              64 > f;
              f++
            )
              l[f] = (4294967296 * e.abs(e.sin(f + 1))) | 0;
            (a = a.MD5 = c.extend({
              _doReset: function() {
                this._hash = new u.init([
                  1732584193,
                  4023233417,
                  2562383102,
                  271733878
                ]);
              },
              _doProcessBlock: function(e, n) {
                for (var s = 0; 16 > s; s++) {
                  var a = n + s,
                    u = e[a];
                  e[a] =
                    (16711935 & ((u << 8) | (u >>> 24))) |
                    (4278255360 & ((u << 24) | (u >>> 8)));
                }
                var s = this._hash.words,
                  a = e[n + 0],
                  u = e[n + 1],
                  c = e[n + 2],
                  f = e[n + 3],
                  p = e[n + 4],
                  h = e[n + 5],
                  d = e[n + 6],
                  v = e[n + 7],
                  y = e[n + 8],
                  g = e[n + 9],
                  b = e[n + 10],
                  m = e[n + 11],
                  _ = e[n + 12],
                  w = e[n + 13],
                  k = e[n + 14],
                  S = e[n + 15],
                  O = s[0],
                  x = s[1],
                  P = s[2],
                  E = s[3],
                  O = t(O, x, P, E, a, 7, l[0]),
                  E = t(E, O, x, P, u, 12, l[1]),
                  P = t(P, E, O, x, c, 17, l[2]),
                  x = t(x, P, E, O, f, 22, l[3]),
                  O = t(O, x, P, E, p, 7, l[4]),
                  E = t(E, O, x, P, h, 12, l[5]),
                  P = t(P, E, O, x, d, 17, l[6]),
                  x = t(x, P, E, O, v, 22, l[7]),
                  O = t(O, x, P, E, y, 7, l[8]),
                  E = t(E, O, x, P, g, 12, l[9]),
                  P = t(P, E, O, x, b, 17, l[10]),
                  x = t(x, P, E, O, m, 22, l[11]),
                  O = t(O, x, P, E, _, 7, l[12]),
                  E = t(E, O, x, P, w, 12, l[13]),
                  P = t(P, E, O, x, k, 17, l[14]),
                  x = t(x, P, E, O, S, 22, l[15]),
                  O = r(O, x, P, E, u, 5, l[16]),
                  E = r(E, O, x, P, d, 9, l[17]),
                  P = r(P, E, O, x, m, 14, l[18]),
                  x = r(x, P, E, O, a, 20, l[19]),
                  O = r(O, x, P, E, h, 5, l[20]),
                  E = r(E, O, x, P, b, 9, l[21]),
                  P = r(P, E, O, x, S, 14, l[22]),
                  x = r(x, P, E, O, p, 20, l[23]),
                  O = r(O, x, P, E, g, 5, l[24]),
                  E = r(E, O, x, P, k, 9, l[25]),
                  P = r(P, E, O, x, f, 14, l[26]),
                  x = r(x, P, E, O, y, 20, l[27]),
                  O = r(O, x, P, E, w, 5, l[28]),
                  E = r(E, O, x, P, c, 9, l[29]),
                  P = r(P, E, O, x, v, 14, l[30]),
                  x = r(x, P, E, O, _, 20, l[31]),
                  O = i(O, x, P, E, h, 4, l[32]),
                  E = i(E, O, x, P, y, 11, l[33]),
                  P = i(P, E, O, x, m, 16, l[34]),
                  x = i(x, P, E, O, k, 23, l[35]),
                  O = i(O, x, P, E, u, 4, l[36]),
                  E = i(E, O, x, P, p, 11, l[37]),
                  P = i(P, E, O, x, v, 16, l[38]),
                  x = i(x, P, E, O, b, 23, l[39]),
                  O = i(O, x, P, E, w, 4, l[40]),
                  E = i(E, O, x, P, a, 11, l[41]),
                  P = i(P, E, O, x, f, 16, l[42]),
                  x = i(x, P, E, O, d, 23, l[43]),
                  O = i(O, x, P, E, g, 4, l[44]),
                  E = i(E, O, x, P, _, 11, l[45]),
                  P = i(P, E, O, x, S, 16, l[46]),
                  x = i(x, P, E, O, c, 23, l[47]),
                  O = o(O, x, P, E, a, 6, l[48]),
                  E = o(E, O, x, P, v, 10, l[49]),
                  P = o(P, E, O, x, k, 15, l[50]),
                  x = o(x, P, E, O, h, 21, l[51]),
                  O = o(O, x, P, E, _, 6, l[52]),
                  E = o(E, O, x, P, f, 10, l[53]),
                  P = o(P, E, O, x, b, 15, l[54]),
                  x = o(x, P, E, O, u, 21, l[55]),
                  O = o(O, x, P, E, y, 6, l[56]),
                  E = o(E, O, x, P, S, 10, l[57]),
                  P = o(P, E, O, x, d, 15, l[58]),
                  x = o(x, P, E, O, w, 21, l[59]),
                  O = o(O, x, P, E, p, 6, l[60]),
                  E = o(E, O, x, P, m, 10, l[61]),
                  P = o(P, E, O, x, c, 15, l[62]),
                  x = o(x, P, E, O, g, 21, l[63]);
                (s[0] = (s[0] + O) | 0),
                  (s[1] = (s[1] + x) | 0),
                  (s[2] = (s[2] + P) | 0),
                  (s[3] = (s[3] + E) | 0);
              },
              _doFinalize: function() {
                var t = this._data,
                  n = t.words,
                  r = 8 * this._nDataBytes,
                  i = 8 * t.sigBytes;
                n[i >>> 5] |= 128 << (24 - (i % 32));
                var o = e.floor(r / 4294967296);
                for (
                  n[15 + (((i + 64) >>> 9) << 4)] =
                    (16711935 & ((o << 8) | (o >>> 24))) |
                    (4278255360 & ((o << 24) | (o >>> 8))),
                    n[14 + (((i + 64) >>> 9) << 4)] =
                      (16711935 & ((r << 8) | (r >>> 24))) |
                      (4278255360 & ((r << 24) | (r >>> 8))),
                    t.sigBytes = 4 * (n.length + 1),
                    this._process(),
                    t = this._hash,
                    n = t.words,
                    r = 0;
                  4 > r;
                  r++
                )
                  (i = n[r]),
                    (n[r] =
                      (16711935 & ((i << 8) | (i >>> 24))) |
                      (4278255360 & ((i << 24) | (i >>> 8))));
                return t;
              },
              clone: function() {
                var e = c.clone.call(this);
                return (e._hash = this._hash.clone()), e;
              }
            })),
              (s.MD5 = c._createHelper(a)),
              (s.HmacMD5 = c._createHmacHelper(a));
          })(Math),
          (function() {
            var e = n,
              t = e.lib,
              r = t.Base,
              i = t.WordArray,
              t = e.algo,
              o = (t.EvpKDF = r.extend({
                cfg: r.extend({ keySize: 4, hasher: t.MD5, iterations: 1 }),
                init: function(e) {
                  this.cfg = this.cfg.extend(e);
                },
                compute: function(e, t) {
                  for (
                    var n = this.cfg,
                      r = n.hasher.create(),
                      o = i.create(),
                      s = o.words,
                      a = n.keySize,
                      n = n.iterations;
                    s.length < a;

                  ) {
                    u && r.update(u);
                    var u = r.update(e).finalize(t);
                    r.reset();
                    for (var c = 1; c < n; c++) (u = r.finalize(u)), r.reset();
                    o.concat(u);
                  }
                  return (o.sigBytes = 4 * a), o;
                }
              }));
            e.EvpKDF = function(e, t, n) {
              return o.create(n).compute(e, t);
            };
          })(),
          n.lib.Cipher ||
            (function(e) {
              var t = n,
                r = t.lib,
                i = r.Base,
                o = r.WordArray,
                s = r.BufferedBlockAlgorithm,
                a = t.enc.Base64,
                u = t.algo.EvpKDF,
                c = (r.Cipher = s.extend({
                  cfg: i.extend(),
                  createEncryptor: function(e, t) {
                    return this.create(this._ENC_XFORM_MODE, e, t);
                  },
                  createDecryptor: function(e, t) {
                    return this.create(this._DEC_XFORM_MODE, e, t);
                  },
                  init: function(e, t, n) {
                    (this.cfg = this.cfg.extend(n)),
                      (this._xformMode = e),
                      (this._key = t),
                      this.reset();
                  },
                  reset: function() {
                    s.reset.call(this), this._doReset();
                  },
                  process: function(e) {
                    return this._append(e), this._process();
                  },
                  finalize: function(e) {
                    return e && this._append(e), this._doFinalize();
                  },
                  keySize: 4,
                  ivSize: 4,
                  _ENC_XFORM_MODE: 1,
                  _DEC_XFORM_MODE: 2,
                  _createHelper: function(e) {
                    return {
                      encrypt: function(t, n, r) {
                        return ("string" == typeof n ? v : d).encrypt(
                          e,
                          t,
                          n,
                          r
                        );
                      },
                      decrypt: function(t, n, r) {
                        return ("string" == typeof n ? v : d).decrypt(
                          e,
                          t,
                          n,
                          r
                        );
                      }
                    };
                  }
                }));
              r.StreamCipher = c.extend({
                _doFinalize: function() {
                  return this._process(!0);
                },
                blockSize: 1
              });
              var l = (t.mode = {}),
                f = function(e, t, n) {
                  var r = this._iv;
                  r ? (this._iv = void 0) : (r = this._prevBlock);
                  for (var i = 0; i < n; i++) e[t + i] ^= r[i];
                },
                p = (r.BlockCipherMode = i.extend({
                  createEncryptor: function(e, t) {
                    return this.Encryptor.create(e, t);
                  },
                  createDecryptor: function(e, t) {
                    return this.Decryptor.create(e, t);
                  },
                  init: function(e, t) {
                    (this._cipher = e), (this._iv = t);
                  }
                })).extend();
              (p.Encryptor = p.extend({
                processBlock: function(e, t) {
                  var n = this._cipher,
                    r = n.blockSize;
                  f.call(this, e, t, r),
                    n.encryptBlock(e, t),
                    (this._prevBlock = e.slice(t, t + r));
                }
              })),
                (p.Decryptor = p.extend({
                  processBlock: function(e, t) {
                    var n = this._cipher,
                      r = n.blockSize,
                      i = e.slice(t, t + r);
                    n.decryptBlock(e, t),
                      f.call(this, e, t, r),
                      (this._prevBlock = i);
                  }
                })),
                (l = l.CBC = p),
                (p = (t.pad = {}).Pkcs7 = {
                  pad: function(e, t) {
                    for (
                      var n = 4 * t,
                        n = n - (e.sigBytes % n),
                        r = (n << 24) | (n << 16) | (n << 8) | n,
                        i = [],
                        s = 0;
                      s < n;
                      s += 4
                    )
                      i.push(r);
                    (n = o.create(i, n)), e.concat(n);
                  },
                  unpad: function(e) {
                    e.sigBytes -= 255 & e.words[(e.sigBytes - 1) >>> 2];
                  }
                }),
                (r.BlockCipher = c.extend({
                  cfg: c.cfg.extend({ mode: l, padding: p }),
                  reset: function() {
                    c.reset.call(this);
                    var e = this.cfg,
                      t = e.iv,
                      e = e.mode;
                    if (this._xformMode == this._ENC_XFORM_MODE)
                      var n = e.createEncryptor;
                    else (n = e.createDecryptor), (this._minBufferSize = 1);
                    this._mode = n.call(e, this, t && t.words);
                  },
                  _doProcessBlock: function(e, t) {
                    this._mode.processBlock(e, t);
                  },
                  _doFinalize: function() {
                    var e = this.cfg.padding;
                    if (this._xformMode == this._ENC_XFORM_MODE) {
                      e.pad(this._data, this.blockSize);
                      var t = this._process(!0);
                    } else (t = this._process(!0)), e.unpad(t);
                    return t;
                  },
                  blockSize: 4
                }));
              var h = (r.CipherParams = i.extend({
                  init: function(e) {
                    this.mixIn(e);
                  },
                  toString: function(e) {
                    return (e || this.formatter).stringify(this);
                  }
                })),
                l = ((t.format = {}).OpenSSL = {
                  stringify: function(e) {
                    var t = e.ciphertext;
                    return ((e = e.salt)
                      ? o
                          .create([1398893684, 1701076831])
                          .concat(e)
                          .concat(t)
                      : t
                    ).toString(a);
                  },
                  parse: function(e) {
                    var t = (e = a.parse(e)).words;
                    if (1398893684 == t[0] && 1701076831 == t[1]) {
                      var n = o.create(t.slice(2, 4));
                      t.splice(0, 4), (e.sigBytes -= 16);
                    }
                    return h.create({ ciphertext: e, salt: n });
                  }
                }),
                d = (r.SerializableCipher = i.extend({
                  cfg: i.extend({ format: l }),
                  encrypt: function(e, t, n, r) {
                    r = this.cfg.extend(r);
                    var i = e.createEncryptor(n, r);
                    return (
                      (t = i.finalize(t)),
                      (i = i.cfg),
                      h.create({
                        ciphertext: t,
                        key: n,
                        iv: i.iv,
                        algorithm: e,
                        mode: i.mode,
                        padding: i.padding,
                        blockSize: e.blockSize,
                        formatter: r.format
                      })
                    );
                  },
                  decrypt: function(e, t, n, r) {
                    return (
                      (r = this.cfg.extend(r)),
                      (t = this._parse(t, r.format)),
                      e.createDecryptor(n, r).finalize(t.ciphertext)
                    );
                  },
                  _parse: function(e, t) {
                    return "string" == typeof e ? t.parse(e, this) : e;
                  }
                })),
                t = ((t.kdf = {}).OpenSSL = {
                  execute: function(e, t, n, r) {
                    return (
                      r || (r = o.random(8)),
                      (e = u.create({ keySize: t + n }).compute(e, r)),
                      (n = o.create(e.words.slice(t), 4 * n)),
                      (e.sigBytes = 4 * t),
                      h.create({ key: e, iv: n, salt: r })
                    );
                  }
                }),
                v = (r.PasswordBasedCipher = d.extend({
                  cfg: d.cfg.extend({ kdf: t }),
                  encrypt: function(e, t, n, r) {
                    return (
                      (r = this.cfg.extend(r)),
                      (n = r.kdf.execute(n, e.keySize, e.ivSize)),
                      (r.iv = n.iv),
                      (e = d.encrypt.call(this, e, t, n.key, r)).mixIn(n),
                      e
                    );
                  },
                  decrypt: function(e, t, n, r) {
                    return (
                      (r = this.cfg.extend(r)),
                      (t = this._parse(t, r.format)),
                      (n = r.kdf.execute(n, e.keySize, e.ivSize, t.salt)),
                      (r.iv = n.iv),
                      d.decrypt.call(this, e, t, n.key, r)
                    );
                  }
                }));
            })(),
          (function() {
            for (
              var e = n,
                t = e.lib.BlockCipher,
                r = e.algo,
                i = [],
                o = [],
                s = [],
                a = [],
                u = [],
                c = [],
                l = [],
                f = [],
                p = [],
                h = [],
                d = [],
                v = 0;
              256 > v;
              v++
            )
              d[v] = 128 > v ? v << 1 : (v << 1) ^ 283;
            for (var y = 0, g = 0, v = 0; 256 > v; v++) {
              var b = g ^ (g << 1) ^ (g << 2) ^ (g << 3) ^ (g << 4),
                b = (b >>> 8) ^ (255 & b) ^ 99;
              (i[y] = b), (o[b] = y);
              var m = d[y],
                _ = d[m],
                w = d[_],
                k = (257 * d[b]) ^ (16843008 * b);
              (s[y] = (k << 24) | (k >>> 8)),
                (a[y] = (k << 16) | (k >>> 16)),
                (u[y] = (k << 8) | (k >>> 24)),
                (c[y] = k),
                (k = (16843009 * w) ^ (65537 * _) ^ (257 * m) ^ (16843008 * y)),
                (l[b] = (k << 24) | (k >>> 8)),
                (f[b] = (k << 16) | (k >>> 16)),
                (p[b] = (k << 8) | (k >>> 24)),
                (h[b] = k),
                y ? ((y = m ^ d[d[d[w ^ m]]]), (g ^= d[d[g]])) : (y = g = 1);
            }
            var S = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
              r = (r.AES = t.extend({
                _doReset: function() {
                  for (
                    var e = this._key,
                      t = e.words,
                      n = e.sigBytes / 4,
                      e = 4 * ((this._nRounds = n + 6) + 1),
                      r = (this._keySchedule = []),
                      o = 0;
                    o < e;
                    o++
                  )
                    if (o < n) r[o] = t[o];
                    else {
                      var s = r[o - 1];
                      o % n
                        ? 6 < n &&
                          4 == o % n &&
                          (s =
                            (i[s >>> 24] << 24) |
                            (i[(s >>> 16) & 255] << 16) |
                            (i[(s >>> 8) & 255] << 8) |
                            i[255 & s])
                        : ((s =
                            (i[(s = (s << 8) | (s >>> 24)) >>> 24] << 24) |
                            (i[(s >>> 16) & 255] << 16) |
                            (i[(s >>> 8) & 255] << 8) |
                            i[255 & s]),
                          (s ^= S[(o / n) | 0] << 24)),
                        (r[o] = r[o - n] ^ s);
                    }
                  for (t = this._invKeySchedule = [], n = 0; n < e; n++)
                    (o = e - n),
                      (s = n % 4 ? r[o] : r[o - 4]),
                      (t[n] =
                        4 > n || 4 >= o
                          ? s
                          : l[i[s >>> 24]] ^
                            f[i[(s >>> 16) & 255]] ^
                            p[i[(s >>> 8) & 255]] ^
                            h[i[255 & s]]);
                },
                encryptBlock: function(e, t) {
                  this._doCryptBlock(e, t, this._keySchedule, s, a, u, c, i);
                },
                decryptBlock: function(e, t) {
                  var n = e[t + 1];
                  (e[t + 1] = e[t + 3]),
                    (e[t + 3] = n),
                    this._doCryptBlock(
                      e,
                      t,
                      this._invKeySchedule,
                      l,
                      f,
                      p,
                      h,
                      o
                    ),
                    (n = e[t + 1]),
                    (e[t + 1] = e[t + 3]),
                    (e[t + 3] = n);
                },
                _doCryptBlock: function(e, t, n, r, i, o, s, a) {
                  for (
                    var u = this._nRounds,
                      c = e[t] ^ n[0],
                      l = e[t + 1] ^ n[1],
                      f = e[t + 2] ^ n[2],
                      p = e[t + 3] ^ n[3],
                      h = 4,
                      d = 1;
                    d < u;
                    d++
                  )
                    var v =
                        r[c >>> 24] ^
                        i[(l >>> 16) & 255] ^
                        o[(f >>> 8) & 255] ^
                        s[255 & p] ^
                        n[h++],
                      y =
                        r[l >>> 24] ^
                        i[(f >>> 16) & 255] ^
                        o[(p >>> 8) & 255] ^
                        s[255 & c] ^
                        n[h++],
                      g =
                        r[f >>> 24] ^
                        i[(p >>> 16) & 255] ^
                        o[(c >>> 8) & 255] ^
                        s[255 & l] ^
                        n[h++],
                      p =
                        r[p >>> 24] ^
                        i[(c >>> 16) & 255] ^
                        o[(l >>> 8) & 255] ^
                        s[255 & f] ^
                        n[h++],
                      c = v,
                      l = y,
                      f = g;
                  (v =
                    ((a[c >>> 24] << 24) |
                      (a[(l >>> 16) & 255] << 16) |
                      (a[(f >>> 8) & 255] << 8) |
                      a[255 & p]) ^
                    n[h++]),
                    (y =
                      ((a[l >>> 24] << 24) |
                        (a[(f >>> 16) & 255] << 16) |
                        (a[(p >>> 8) & 255] << 8) |
                        a[255 & c]) ^
                      n[h++]),
                    (g =
                      ((a[f >>> 24] << 24) |
                        (a[(p >>> 16) & 255] << 16) |
                        (a[(c >>> 8) & 255] << 8) |
                        a[255 & l]) ^
                      n[h++]),
                    (p =
                      ((a[p >>> 24] << 24) |
                        (a[(c >>> 16) & 255] << 16) |
                        (a[(l >>> 8) & 255] << 8) |
                        a[255 & f]) ^
                      n[h++]),
                    (e[t] = v),
                    (e[t + 1] = y),
                    (e[t + 2] = g),
                    (e[t + 3] = p);
                },
                keySize: 8
              }));
            e.AES = t._createHelper(r);
          })(),
          (n.mode.ECB = (function() {
            var e = n.lib.BlockCipherMode.extend();
            return (
              (e.Encryptor = e.extend({
                processBlock: function(e, t) {
                  this._cipher.encryptBlock(e, t);
                }
              })),
              (e.Decryptor = e.extend({
                processBlock: function(e, t) {
                  this._cipher.decryptBlock(e, t);
                }
              })),
              e
            );
          })()),
          (e.exports = n);
      },
      function(e, t, n) {
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = (function() {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function(t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          o = n(6),
          s = (r(o), n(2)),
          a = (r(s), n(9)),
          u = (r(a), n(11)),
          c = r(u),
          l = n(14),
          f = r(l),
          p = n(15),
          h = r(p),
          d = (n(5), n(10)),
          v = r(d),
          y = (function() {
            function e(t) {
              var n = t.subscribeEndpoint,
                r = t.leaveEndpoint,
                i = t.heartbeatEndpoint,
                o = t.setStateEndpoint,
                s = t.timeEndpoint,
                a = t.config,
                u = t.crypto,
                l = t.listenerManager;
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this._listenerManager = l),
                (this._config = a),
                (this._leaveEndpoint = r),
                (this._heartbeatEndpoint = i),
                (this._setStateEndpoint = o),
                (this._subscribeEndpoint = n),
                (this._crypto = u),
                (this._channels = {}),
                (this._presenceChannels = {}),
                (this._heartbeatChannels = {}),
                (this._heartbeatChannelGroups = {}),
                (this._channelGroups = {}),
                (this._presenceChannelGroups = {}),
                (this._pendingChannelSubscriptions = []),
                (this._pendingChannelGroupSubscriptions = []),
                (this._currentTimetoken = 0),
                (this._lastTimetoken = 0),
                (this._storedTimetoken = null),
                (this._subscriptionStatusAnnounced = !1),
                (this._isOnline = !0),
                (this._reconnectionManager = new c.default({
                  timeEndpoint: s
                })),
                (this._dedupingManager = new f.default({ config: a }));
            }
            return (
              i(e, [
                {
                  key: "adaptStateChange",
                  value: function(e, t) {
                    var n = this,
                      r = e.state,
                      i = e.channels,
                      o = void 0 === i ? [] : i,
                      s = e.channelGroups,
                      a = void 0 === s ? [] : s;
                    return (
                      o.forEach(function(e) {
                        e in n._channels && (n._channels[e].state = r);
                      }),
                      a.forEach(function(e) {
                        e in n._channelGroups &&
                          (n._channelGroups[e].state = r);
                      }),
                      this._setStateEndpoint(
                        { state: r, channels: o, channelGroups: a },
                        t
                      )
                    );
                  }
                },
                {
                  key: "adaptPresenceChange",
                  value: function(e) {
                    var t = this,
                      n = e.connected,
                      r = e.channels,
                      i = void 0 === r ? [] : r,
                      o = e.channelGroups,
                      s = void 0 === o ? [] : o;
                    n
                      ? (i.forEach(function(e) {
                          t._heartbeatChannels[e] = { state: {} };
                        }),
                        s.forEach(function(e) {
                          t._heartbeatChannelGroups[e] = { state: {} };
                        }))
                      : (i.forEach(function(e) {
                          e in t._heartbeatChannels &&
                            delete t._heartbeatChannels[e];
                        }),
                        s.forEach(function(e) {
                          e in t._heartbeatChannelGroups &&
                            delete t._heartbeatChannelGroups[e];
                        }),
                        !1 === this._config.suppressLeaveEvents &&
                          this._leaveEndpoint(
                            { channels: i, channelGroups: s },
                            function(e) {
                              t._listenerManager.announceStatus(e);
                            }
                          )),
                      this.reconnect();
                  }
                },
                {
                  key: "adaptSubscribeChange",
                  value: function(e) {
                    var t = this,
                      n = e.timetoken,
                      r = e.channels,
                      i = void 0 === r ? [] : r,
                      o = e.channelGroups,
                      s = void 0 === o ? [] : o,
                      a = e.withPresence,
                      u = void 0 !== a && a,
                      c = e.withHeartbeats,
                      l = void 0 !== c && c;
                    this._config.subscribeKey &&
                    "" !== this._config.subscribeKey
                      ? (n &&
                          ((this._lastTimetoken = this._currentTimetoken),
                          (this._currentTimetoken = n)),
                        "0" !== this._currentTimetoken &&
                          0 !== this._currentTimetoken &&
                          ((this._storedTimetoken = this._currentTimetoken),
                          (this._currentTimetoken = 0)),
                        i.forEach(function(e) {
                          (t._channels[e] = { state: {} }),
                            u && (t._presenceChannels[e] = {}),
                            (l || t._config.getHeartbeatInterval()) &&
                              (t._heartbeatChannels[e] = {}),
                            t._pendingChannelSubscriptions.push(e);
                        }),
                        s.forEach(function(e) {
                          (t._channelGroups[e] = { state: {} }),
                            u && (t._presenceChannelGroups[e] = {}),
                            (l || t._config.getHeartbeatInterval()) &&
                              (t._heartbeatChannelGroups[e] = {}),
                            t._pendingChannelGroupSubscriptions.push(e);
                        }),
                        (this._subscriptionStatusAnnounced = !1),
                        this.reconnect())
                      : console &&
                        console.log &&
                        console.log(
                          "subscribe key missing; aborting subscribe"
                        );
                  }
                },
                {
                  key: "adaptUnsubscribeChange",
                  value: function(e, t) {
                    var n = this,
                      r = e.channels,
                      i = void 0 === r ? [] : r,
                      o = e.channelGroups,
                      s = void 0 === o ? [] : o,
                      a = [],
                      u = [];
                    i.forEach(function(e) {
                      e in n._channels &&
                        (delete n._channels[e],
                        a.push(e),
                        e in n._heartbeatChannels &&
                          delete n._heartbeatChannels[e]),
                        e in n._presenceChannels &&
                          (delete n._presenceChannels[e], a.push(e));
                    }),
                      s.forEach(function(e) {
                        e in n._channelGroups &&
                          (delete n._channelGroups[e],
                          u.push(e),
                          e in n._heartbeatChannelGroups &&
                            delete n._heartbeatChannelGroups[e]),
                          e in n._presenceChannelGroups &&
                            (delete n._channelGroups[e], u.push(e));
                      }),
                      (0 === a.length && 0 === u.length) ||
                        (!1 !== this._config.suppressLeaveEvents ||
                          t ||
                          this._leaveEndpoint(
                            { channels: a, channelGroups: u },
                            function(e) {
                              (e.affectedChannels = a),
                                (e.affectedChannelGroups = u),
                                (e.currentTimetoken = n._currentTimetoken),
                                (e.lastTimetoken = n._lastTimetoken),
                                n._listenerManager.announceStatus(e);
                            }
                          ),
                        0 === Object.keys(this._channels).length &&
                          0 === Object.keys(this._presenceChannels).length &&
                          0 === Object.keys(this._channelGroups).length &&
                          0 ===
                            Object.keys(this._presenceChannelGroups).length &&
                          ((this._lastTimetoken = 0),
                          (this._currentTimetoken = 0),
                          (this._storedTimetoken = null),
                          (this._region = null),
                          this._reconnectionManager.stopPolling()),
                        this.reconnect());
                  }
                },
                {
                  key: "unsubscribeAll",
                  value: function(e) {
                    this.adaptUnsubscribeChange(
                      {
                        channels: this.getSubscribedChannels(),
                        channelGroups: this.getSubscribedChannelGroups()
                      },
                      e
                    );
                  }
                },
                {
                  key: "getHeartbeatChannels",
                  value: function() {
                    return Object.keys(this._heartbeatChannels);
                  }
                },
                {
                  key: "getHeartbeatChannelGroups",
                  value: function() {
                    return Object.keys(this._heartbeatChannelGroups);
                  }
                },
                {
                  key: "getSubscribedChannels",
                  value: function() {
                    return Object.keys(this._channels);
                  }
                },
                {
                  key: "getSubscribedChannelGroups",
                  value: function() {
                    return Object.keys(this._channelGroups);
                  }
                },
                {
                  key: "reconnect",
                  value: function() {
                    this._startSubscribeLoop(), this._registerHeartbeatTimer();
                  }
                },
                {
                  key: "disconnect",
                  value: function() {
                    this._stopSubscribeLoop(),
                      this._stopHeartbeatTimer(),
                      this._reconnectionManager.stopPolling();
                  }
                },
                {
                  key: "_registerHeartbeatTimer",
                  value: function() {
                    this._stopHeartbeatTimer(),
                      0 !== this._config.getHeartbeatInterval() &&
                        (this._performHeartbeatLoop(),
                        (this._heartbeatTimer = setInterval(
                          this._performHeartbeatLoop.bind(this),
                          1e3 * this._config.getHeartbeatInterval()
                        )));
                  }
                },
                {
                  key: "_stopHeartbeatTimer",
                  value: function() {
                    this._heartbeatTimer &&
                      (clearInterval(this._heartbeatTimer),
                      (this._heartbeatTimer = null));
                  }
                },
                {
                  key: "_performHeartbeatLoop",
                  value: function() {
                    var e = this,
                      t = this.getHeartbeatChannels(),
                      n = this.getHeartbeatChannelGroups(),
                      r = {};
                    (0 === t.length && 0 === n.length) ||
                      (this.getSubscribedChannels().forEach(function(t) {
                        var n = e._channels[t].state;
                        Object.keys(n).length && (r[t] = n);
                      }),
                      this.getSubscribedChannelGroups().forEach(function(t) {
                        var n = e._channelGroups[t].state;
                        Object.keys(n).length && (r[t] = n);
                      }),
                      this._heartbeatEndpoint(
                        { channels: t, channelGroups: n, state: r },
                        function(t) {
                          t.error &&
                            e._config.announceFailedHeartbeats &&
                            e._listenerManager.announceStatus(t),
                            t.error &&
                              e._config.autoNetworkDetection &&
                              e._isOnline &&
                              ((e._isOnline = !1),
                              e.disconnect(),
                              e._listenerManager.announceNetworkDown(),
                              e.reconnect()),
                            !t.error &&
                              e._config.announceSuccessfulHeartbeats &&
                              e._listenerManager.announceStatus(t);
                        }.bind(this)
                      ));
                  }
                },
                {
                  key: "_startSubscribeLoop",
                  value: function() {
                    var e = this;
                    this._stopSubscribeLoop();
                    var t = {},
                      n = [],
                      r = [];
                    if (
                      (Object.keys(this._channels).forEach(function(r) {
                        var i = e._channels[r].state;
                        Object.keys(i).length && (t[r] = i), n.push(r);
                      }),
                      Object.keys(this._presenceChannels).forEach(function(e) {
                        n.push(e + "-pnpres");
                      }),
                      Object.keys(this._channelGroups).forEach(function(n) {
                        var i = e._channelGroups[n].state;
                        Object.keys(i).length && (t[n] = i), r.push(n);
                      }),
                      Object.keys(this._presenceChannelGroups).forEach(function(
                        e
                      ) {
                        r.push(e + "-pnpres");
                      }),
                      0 !== n.length || 0 !== r.length)
                    ) {
                      var i = {
                        channels: n,
                        channelGroups: r,
                        state: t,
                        timetoken: this._currentTimetoken,
                        filterExpression: this._config.filterExpression,
                        region: this._region
                      };
                      this._subscribeCall = this._subscribeEndpoint(
                        i,
                        this._processSubscribeResponse.bind(this)
                      );
                    }
                  }
                },
                {
                  key: "_processSubscribeResponse",
                  value: function(e, t) {
                    var n = this;
                    if (e.error)
                      e.category === v.default.PNTimeoutCategory
                        ? this._startSubscribeLoop()
                        : e.category === v.default.PNNetworkIssuesCategory
                        ? (this.disconnect(),
                          e.error &&
                            this._config.autoNetworkDetection &&
                            this._isOnline &&
                            ((this._isOnline = !1),
                            this._listenerManager.announceNetworkDown()),
                          this._reconnectionManager.onReconnection(function() {
                            n._config.autoNetworkDetection &&
                              !n._isOnline &&
                              ((n._isOnline = !0),
                              n._listenerManager.announceNetworkUp()),
                              n.reconnect(),
                              (n._subscriptionStatusAnnounced = !0);
                            var t = {
                              category: v.default.PNReconnectedCategory,
                              operation: e.operation,
                              lastTimetoken: n._lastTimetoken,
                              currentTimetoken: n._currentTimetoken
                            };
                            n._listenerManager.announceStatus(t);
                          }),
                          this._reconnectionManager.startPolling(),
                          this._listenerManager.announceStatus(e))
                        : e.category === v.default.PNBadRequestCategory
                        ? (this._stopHeartbeatTimer(),
                          this._listenerManager.announceStatus(e))
                        : this._listenerManager.announceStatus(e);
                    else {
                      if (
                        (this._storedTimetoken
                          ? ((this._currentTimetoken = this._storedTimetoken),
                            (this._storedTimetoken = null))
                          : ((this._lastTimetoken = this._currentTimetoken),
                            (this._currentTimetoken = t.metadata.timetoken)),
                        !this._subscriptionStatusAnnounced)
                      ) {
                        var r = {};
                        (r.category = v.default.PNConnectedCategory),
                          (r.operation = e.operation),
                          (r.affectedChannels = this._pendingChannelSubscriptions),
                          (r.subscribedChannels = this.getSubscribedChannels()),
                          (r.affectedChannelGroups = this._pendingChannelGroupSubscriptions),
                          (r.lastTimetoken = this._lastTimetoken),
                          (r.currentTimetoken = this._currentTimetoken),
                          (this._subscriptionStatusAnnounced = !0),
                          this._listenerManager.announceStatus(r),
                          (this._pendingChannelSubscriptions = []),
                          (this._pendingChannelGroupSubscriptions = []);
                      }
                      var i = t.messages || [],
                        o = this._config,
                        s = o.requestMessageCountThreshold,
                        a = o.dedupeOnSubscribe;
                      if (s && i.length >= s) {
                        var u = {};
                        (u.category =
                          v.default.PNRequestMessageCountExceededCategory),
                          (u.operation = e.operation),
                          this._listenerManager.announceStatus(u);
                      }
                      i.forEach(function(e) {
                        var t = e.channel,
                          r = e.subscriptionMatch,
                          i = e.publishMetaData;
                        if ((t === r && (r = null), a)) {
                          if (n._dedupingManager.isDuplicate(e)) return;
                          n._dedupingManager.addEntry(e);
                        }
                        if (h.default.endsWith(e.channel, "-pnpres")) {
                          var o = { channel: null, subscription: null };
                          (o.actualChannel = null != r ? t : null),
                            (o.subscribedChannel = null != r ? r : t),
                            t &&
                              (o.channel = t.substring(
                                0,
                                t.lastIndexOf("-pnpres")
                              )),
                            r &&
                              (o.subscription = r.substring(
                                0,
                                r.lastIndexOf("-pnpres")
                              )),
                            (o.action = e.payload.action),
                            (o.state = e.payload.data),
                            (o.timetoken = i.publishTimetoken),
                            (o.occupancy = e.payload.occupancy),
                            (o.uuid = e.payload.uuid),
                            (o.timestamp = e.payload.timestamp),
                            e.payload.join && (o.join = e.payload.join),
                            e.payload.leave && (o.leave = e.payload.leave),
                            e.payload.timeout &&
                              (o.timeout = e.payload.timeout),
                            n._listenerManager.announcePresence(o);
                        } else {
                          var s = { channel: null, subscription: null };
                          (s.actualChannel = null != r ? t : null),
                            (s.subscribedChannel = null != r ? r : t),
                            (s.channel = t),
                            (s.subscription = r),
                            (s.timetoken = i.publishTimetoken),
                            (s.publisher = e.issuingClientId),
                            e.userMetadata && (s.userMetadata = e.userMetadata),
                            n._config.cipherKey
                              ? (s.message = n._crypto.decrypt(e.payload))
                              : (s.message = e.payload),
                            n._listenerManager.announceMessage(s);
                        }
                      }),
                        (this._region = t.metadata.region),
                        this._startSubscribeLoop();
                    }
                  }
                },
                {
                  key: "_stopSubscribeLoop",
                  value: function() {
                    this._subscribeCall &&
                      ("function" == typeof this._subscribeCall.abort &&
                        this._subscribeCall.abort(),
                      (this._subscribeCall = null));
                  }
                }
              ]),
              e
            );
          })();
        (t.default = y), (e.exports = t.default);
      },
      function(e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = (function() {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function(t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          i = (n(5), n(10)),
          o = (function(e) {
            return e && e.__esModule ? e : { default: e };
          })(i),
          s = (function() {
            function e() {
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this._listeners = []);
            }
            return (
              r(e, [
                {
                  key: "addListener",
                  value: function(e) {
                    this._listeners.push(e);
                  }
                },
                {
                  key: "removeListener",
                  value: function(e) {
                    var t = [];
                    this._listeners.forEach(function(n) {
                      n !== e && t.push(n);
                    }),
                      (this._listeners = t);
                  }
                },
                {
                  key: "removeAllListeners",
                  value: function() {
                    this._listeners = [];
                  }
                },
                {
                  key: "announcePresence",
                  value: function(e) {
                    this._listeners.forEach(function(t) {
                      t.presence && t.presence(e);
                    });
                  }
                },
                {
                  key: "announceStatus",
                  value: function(e) {
                    this._listeners.forEach(function(t) {
                      t.status && t.status(e);
                    });
                  }
                },
                {
                  key: "announceMessage",
                  value: function(e) {
                    this._listeners.forEach(function(t) {
                      t.message && t.message(e);
                    });
                  }
                },
                {
                  key: "announceNetworkUp",
                  value: function() {
                    var e = {};
                    (e.category = o.default.PNNetworkUpCategory),
                      this.announceStatus(e);
                  }
                },
                {
                  key: "announceNetworkDown",
                  value: function() {
                    var e = {};
                    (e.category = o.default.PNNetworkDownCategory),
                      this.announceStatus(e);
                  }
                }
              ]),
              e
            );
          })();
        (t.default = s), (e.exports = t.default);
      },
      function(e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = {
            PNNetworkUpCategory: "PNNetworkUpCategory",
            PNNetworkDownCategory: "PNNetworkDownCategory",
            PNNetworkIssuesCategory: "PNNetworkIssuesCategory",
            PNTimeoutCategory: "PNTimeoutCategory",
            PNBadRequestCategory: "PNBadRequestCategory",
            PNAccessDeniedCategory: "PNAccessDeniedCategory",
            PNUnknownCategory: "PNUnknownCategory",
            PNReconnectedCategory: "PNReconnectedCategory",
            PNConnectedCategory: "PNConnectedCategory",
            PNRequestMessageCountExceededCategory:
              "PNRequestMessageCountExceededCategory"
          }),
          (e.exports = t.default);
      },
      function(e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = (function() {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function(t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          i =
            (n(12),
            n(5),
            (function() {
              function e(t) {
                var n = t.timeEndpoint;
                (function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  (this._timeEndpoint = n);
              }
              return (
                r(e, [
                  {
                    key: "onReconnection",
                    value: function(e) {
                      this._reconnectionCallback = e;
                    }
                  },
                  {
                    key: "startPolling",
                    value: function() {
                      this._timeTimer = setInterval(
                        this._performTimeLoop.bind(this),
                        3e3
                      );
                    }
                  },
                  {
                    key: "stopPolling",
                    value: function() {
                      clearInterval(this._timeTimer);
                    }
                  },
                  {
                    key: "_performTimeLoop",
                    value: function() {
                      var e = this;
                      this._timeEndpoint(function(t) {
                        t.error ||
                          (clearInterval(e._timeTimer),
                          e._reconnectionCallback());
                      });
                    }
                  }
                ]),
                e
              );
            })());
        (t.default = i), (e.exports = t.default);
      },
      function(e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getOperation = function() {
            return i.default.PNTimeOperation;
          }),
          (t.getURL = function() {
            return "/time/0";
          }),
          (t.getRequestTimeout = function(e) {
            return e.config.getTransactionTimeout();
          }),
          (t.prepareParams = function() {
            return {};
          }),
          (t.isAuthSupported = function() {
            return !1;
          }),
          (t.handleResponse = function(e, t) {
            return { timetoken: t[0] };
          }),
          (t.validateParams = function() {});
        var r = (n(5), n(13)),
          i = (function(e) {
            return e && e.__esModule ? e : { default: e };
          })(r);
      },
      function(e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = {
            PNTimeOperation: "PNTimeOperation",
            PNHistoryOperation: "PNHistoryOperation",
            PNDeleteMessagesOperation: "PNDeleteMessagesOperation",
            PNFetchMessagesOperation: "PNFetchMessagesOperation",
            PNMessageCounts: "PNMessageCountsOperation",
            PNSubscribeOperation: "PNSubscribeOperation",
            PNUnsubscribeOperation: "PNUnsubscribeOperation",
            PNPublishOperation: "PNPublishOperation",
            PNPushNotificationEnabledChannelsOperation:
              "PNPushNotificationEnabledChannelsOperation",
            PNRemoveAllPushNotificationsOperation:
              "PNRemoveAllPushNotificationsOperation",
            PNWhereNowOperation: "PNWhereNowOperation",
            PNSetStateOperation: "PNSetStateOperation",
            PNHereNowOperation: "PNHereNowOperation",
            PNGetStateOperation: "PNGetStateOperation",
            PNHeartbeatOperation: "PNHeartbeatOperation",
            PNChannelGroupsOperation: "PNChannelGroupsOperation",
            PNRemoveGroupOperation: "PNRemoveGroupOperation",
            PNChannelsForGroupOperation: "PNChannelsForGroupOperation",
            PNAddChannelsToGroupOperation: "PNAddChannelsToGroupOperation",
            PNRemoveChannelsFromGroupOperation:
              "PNRemoveChannelsFromGroupOperation",
            PNAccessManagerGrant: "PNAccessManagerGrant",
            PNAccessManagerAudit: "PNAccessManagerAudit"
          }),
          (e.exports = t.default);
      },
      function(e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = (function() {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function(t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          i =
            (n(2),
            n(5),
            function(e) {
              var t = 0;
              if (0 === e.length) return t;
              for (var n = 0; n < e.length; n += 1)
                (t = (t << 5) - t + e.charCodeAt(n)), (t &= t);
              return t;
            }),
          o = (function() {
            function e(t) {
              var n = t.config;
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.hashHistory = []),
                (this._config = n);
            }
            return (
              r(e, [
                {
                  key: "getKey",
                  value: function(e) {
                    var t = i(JSON.stringify(e.payload)).toString();
                    return e.publishMetaData.publishTimetoken + "-" + t;
                  }
                },
                {
                  key: "isDuplicate",
                  value: function(e) {
                    return this.hashHistory.includes(this.getKey(e));
                  }
                },
                {
                  key: "addEntry",
                  value: function(e) {
                    this.hashHistory.length >= this._config.maximumCacheSize &&
                      this.hashHistory.shift(),
                      this.hashHistory.push(this.getKey(e));
                  }
                },
                {
                  key: "clearHistory",
                  value: function() {
                    this.hashHistory = [];
                  }
                }
              ]),
              e
            );
          })();
        (t.default = o), (e.exports = t.default);
      },
      function(e, t) {
        function n(e) {
          return encodeURIComponent(e).replace(/[!~*'()]/g, function(e) {
            return (
              "%" +
              e
                .charCodeAt(0)
                .toString(16)
                .toUpperCase()
            );
          });
        }
        function r(e) {
          return (function(e) {
            var t = [];
            return (
              Object.keys(e).forEach(function(e) {
                return t.push(e);
              }),
              t
            );
          })(e).sort();
        }
        e.exports = {
          signPamFromParams: function(e) {
            return r(e)
              .map(function(t) {
                return t + "=" + n(e[t]);
              })
              .join("&");
          },
          endsWith: function(e, t) {
            return -1 !== e.indexOf(t, this.length - t.length);
          },
          createPromise: function() {
            var e = void 0,
              t = void 0;
            return {
              promise: new Promise(function(n, r) {
                (e = n), (t = r);
              }),
              reject: t,
              fulfill: e
            };
          },
          encodeString: n
        };
      },
      function(e, t, n) {
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i(e) {
          return (function(e, t) {
            return (e.type = t), (e.error = !0), e;
          })({ message: e }, "validationError");
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function(e, t) {
            var n = e.networking,
              r = e.config,
              o = null,
              a = null,
              c = {};
            t.getOperation() === f.default.PNTimeOperation ||
            t.getOperation() === f.default.PNChannelGroupsOperation
              ? (o = arguments.length <= 2 ? void 0 : arguments[2])
              : ((c = arguments.length <= 2 ? void 0 : arguments[2]),
                (o = arguments.length <= 3 ? void 0 : arguments[3])),
              "undefined" == typeof Promise ||
                o ||
                (a = u.default.createPromise());
            var l = t.validateParams(e, c);
            if (!l) {
              var h = t.prepareParams(e, c),
                d = (function(e, t, n) {
                  return e.usePost && e.usePost(t, n)
                    ? e.postURL(t, n)
                    : e.getURL(t, n);
                })(t, e, c),
                v = void 0,
                y = {
                  url: d,
                  operation: t.getOperation(),
                  timeout: t.getRequestTimeout(e)
                };
              (h.uuid = r.UUID),
                (h.pnsdk = (function(e) {
                  if (e.sdkName) return e.sdkName;
                  var t = "PubNub-JS-" + e.sdkFamily;
                  return (
                    e.partnerId && (t += "-" + e.partnerId),
                    (t += "/" + e.getVersion())
                  );
                })(r)),
                r.useInstanceId && (h.instanceid = r.instanceId),
                r.useRequestId && (h.requestid = s.default.createUUID()),
                t.isAuthSupported() &&
                  r.getAuthKey() &&
                  (h.auth = r.getAuthKey()),
                r.secretKey &&
                  (function(e, t, n) {
                    var r = e.config,
                      i = e.crypto;
                    n.timestamp = Math.floor(new Date().getTime() / 1e3);
                    var o =
                      r.subscribeKey + "\n" + r.publishKey + "\n" + t + "\n";
                    o += u.default.signPamFromParams(n);
                    var s = i.HMACSHA256(o);
                    (s = (s = s.replace(/\+/g, "-")).replace(/\//g, "_")),
                      (n.signature = s);
                  })(e, d, h);
              var g = function(n, r) {
                if (n.error)
                  o
                    ? o(n)
                    : a &&
                      a.reject(
                        new p("PubNub call failed, check status for details", n)
                      );
                else {
                  var i = t.handleResponse(e, r, c);
                  o ? o(n, i) : a && a.fulfill(i);
                }
              };
              if (t.usePost && t.usePost(e, c)) {
                var b = t.postPayload(e, c);
                v = n.POST(h, b, y, g);
              } else
                v =
                  t.useDelete && t.useDelete()
                    ? n.DELETE(h, y, g)
                    : n.GET(h, y, g);
              return t.getOperation() === f.default.PNSubscribeOperation
                ? v
                : a
                ? a.promise
                : void 0;
            }
            return o
              ? o(i(l))
              : a
              ? (a.reject(
                  new p("Validation failed, check status for details", i(l))
                ),
                a.promise)
              : void 0;
          });
        var o = n(3),
          s = r(o),
          a = (n(5), n(15)),
          u = r(a),
          c = n(2),
          l = (r(c), n(13)),
          f = r(l),
          p = (function(e) {
            function t(e, n) {
              !(function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t);
              var r = (function(e, t) {
                if (!e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !t || ("object" != typeof t && "function" != typeof t)
                  ? e
                  : t;
              })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
              return (
                (r.name = r.constructor.name),
                (r.status = n),
                (r.message = e),
                r
              );
            }
            return (
              (function(e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof t
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                  }
                })),
                  t &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, t)
                      : (e.__proto__ = t));
              })(t, e),
              t
            );
          })(Error);
        e.exports = t.default;
      },
      function(e, t, n) {
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getOperation = function() {
            return o.default.PNAddChannelsToGroupOperation;
          }),
          (t.validateParams = function(e, t) {
            var n = t.channels,
              r = t.channelGroup,
              i = e.config;
            return r
              ? n && 0 !== n.length
                ? i.subscribeKey
                  ? void 0
                  : "Missing Subscribe Key"
                : "Missing Channels"
              : "Missing Channel Group";
          }),
          (t.getURL = function(e, t) {
            var n = t.channelGroup;
            return (
              "/v1/channel-registration/sub-key/" +
              e.config.subscribeKey +
              "/channel-group/" +
              a.default.encodeString(n)
            );
          }),
          (t.getRequestTimeout = function(e) {
            return e.config.getTransactionTimeout();
          }),
          (t.isAuthSupported = function() {
            return !0;
          }),
          (t.prepareParams = function(e, t) {
            var n = t.channels;
            return { add: (void 0 === n ? [] : n).join(",") };
          }),
          (t.handleResponse = function() {
            return {};
          });
        var i = (n(5), n(13)),
          o = r(i),
          s = n(15),
          a = r(s);
      },
      function(e, t, n) {
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getOperation = function() {
            return o.default.PNRemoveChannelsFromGroupOperation;
          }),
          (t.validateParams = function(e, t) {
            var n = t.channels,
              r = t.channelGroup,
              i = e.config;
            return r
              ? n && 0 !== n.length
                ? i.subscribeKey
                  ? void 0
                  : "Missing Subscribe Key"
                : "Missing Channels"
              : "Missing Channel Group";
          }),
          (t.getURL = function(e, t) {
            var n = t.channelGroup;
            return (
              "/v1/channel-registration/sub-key/" +
              e.config.subscribeKey +
              "/channel-group/" +
              a.default.encodeString(n)
            );
          }),
          (t.getRequestTimeout = function(e) {
            return e.config.getTransactionTimeout();
          }),
          (t.isAuthSupported = function() {
            return !0;
          }),
          (t.prepareParams = function(e, t) {
            var n = t.channels;
            return { remove: (void 0 === n ? [] : n).join(",") };
          }),
          (t.handleResponse = function() {
            return {};
          });
        var i = (n(5), n(13)),
          o = r(i),
          s = n(15),
          a = r(s);
      },
      function(e, t, n) {
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getOperation = function() {
            return o.default.PNRemoveGroupOperation;
          }),
          (t.validateParams = function(e, t) {
            var n = t.channelGroup,
              r = e.config;
            return n
              ? r.subscribeKey
                ? void 0
                : "Missing Subscribe Key"
              : "Missing Channel Group";
          }),
          (t.getURL = function(e, t) {
            var n = t.channelGroup;
            return (
              "/v1/channel-registration/sub-key/" +
              e.config.subscribeKey +
              "/channel-group/" +
              a.default.encodeString(n) +
              "/remove"
            );
          }),
          (t.isAuthSupported = function() {
            return !0;
          }),
          (t.getRequestTimeout = function(e) {
            return e.config.getTransactionTimeout();
          }),
          (t.prepareParams = function() {
            return {};
          }),
          (t.handleResponse = function() {
            return {};
          });
        var i = (n(5), n(13)),
          o = r(i),
          s = n(15),
          a = r(s);
      },
      function(e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getOperation = function() {
            return i.default.PNChannelGroupsOperation;
          }),
          (t.validateParams = function(e) {
            if (!e.config.subscribeKey) return "Missing Subscribe Key";
          }),
          (t.getURL = function(e) {
            return (
              "/v1/channel-registration/sub-key/" +
              e.config.subscribeKey +
              "/channel-group"
            );
          }),
          (t.getRequestTimeout = function(e) {
            return e.config.getTransactionTimeout();
          }),
          (t.isAuthSupported = function() {
            return !0;
          }),
          (t.prepareParams = function() {
            return {};
          }),
          (t.handleResponse = function(e, t) {
            return { groups: t.payload.groups };
          });
        var r = (n(5), n(13)),
          i = (function(e) {
            return e && e.__esModule ? e : { default: e };
          })(r);
      },
      function(e, t, n) {
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getOperation = function() {
            return o.default.PNChannelsForGroupOperation;
          }),
          (t.validateParams = function(e, t) {
            var n = t.channelGroup,
              r = e.config;
            return n
              ? r.subscribeKey
                ? void 0
                : "Missing Subscribe Key"
              : "Missing Channel Group";
          }),
          (t.getURL = function(e, t) {
            var n = t.channelGroup;
            return (
              "/v1/channel-registration/sub-key/" +
              e.config.subscribeKey +
              "/channel-group/" +
              a.default.encodeString(n)
            );
          }),
          (t.getRequestTimeout = function(e) {
            return e.config.getTransactionTimeout();
          }),
          (t.isAuthSupported = function() {
            return !0;
          }),
          (t.prepareParams = function() {
            return {};
          }),
          (t.handleResponse = function(e, t) {
            return { channels: t.payload.channels };
          });
        var i = (n(5), n(13)),
          o = r(i),
          s = n(15),
          a = r(s);
      },
      function(e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getOperation = function() {
            return i.default.PNPushNotificationEnabledChannelsOperation;
          }),
          (t.validateParams = function(e, t) {
            var n = t.device,
              r = t.pushGateway,
              i = t.channels,
              o = e.config;
            return n
              ? r
                ? i && 0 !== i.length
                  ? o.subscribeKey
                    ? void 0
                    : "Missing Subscribe Key"
                  : "Missing Channels"
                : "Missing GW Type (pushGateway: gcm or apns)"
              : "Missing Device ID (device)";
          }),
          (t.getURL = function(e, t) {
            var n = t.device;
            return (
              "/v1/push/sub-key/" + e.config.subscribeKey + "/devices/" + n
            );
          }),
          (t.getRequestTimeout = function(e) {
            return e.config.getTransactionTimeout();
          }),
          (t.isAuthSupported = function() {
            return !0;
          }),
          (t.prepareParams = function(e, t) {
            var n = t.pushGateway,
              r = t.channels;
            return { type: n, add: (void 0 === r ? [] : r).join(",") };
          }),
          (t.handleResponse = function() {
            return {};
          });
        var r = (n(5), n(13)),
          i = (function(e) {
            return e && e.__esModule ? e : { default: e };
          })(r);
      },
      function(e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getOperation = function() {
            return i.default.PNPushNotificationEnabledChannelsOperation;
          }),
          (t.validateParams = function(e, t) {
            var n = t.device,
              r = t.pushGateway,
              i = t.channels,
              o = e.config;
            return n
              ? r
                ? i && 0 !== i.length
                  ? o.subscribeKey
                    ? void 0
                    : "Missing Subscribe Key"
                  : "Missing Channels"
                : "Missing GW Type (pushGateway: gcm or apns)"
              : "Missing Device ID (device)";
          }),
          (t.getURL = function(e, t) {
            var n = t.device;
            return (
              "/v1/push/sub-key/" + e.config.subscribeKey + "/devices/" + n
            );
          }),
          (t.getRequestTimeout = function(e) {
            return e.config.getTransactionTimeout();
          }),
          (t.isAuthSupported = function() {
            return !0;
          }),
          (t.prepareParams = function(e, t) {
            var n = t.pushGateway,
              r = t.channels;
            return { type: n, remove: (void 0 === r ? [] : r).join(",") };
          }),
          (t.handleResponse = function() {
            return {};
          });
        var r = (n(5), n(13)),
          i = (function(e) {
            return e && e.__esModule ? e : { default: e };
          })(r);
      },
      function(e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getOperation = function() {
            return i.default.PNPushNotificationEnabledChannelsOperation;
          }),
          (t.validateParams = function(e, t) {
            var n = t.device,
              r = t.pushGateway,
              i = e.config;
            return n
              ? r
                ? i.subscribeKey
                  ? void 0
                  : "Missing Subscribe Key"
                : "Missing GW Type (pushGateway: gcm or apns)"
              : "Missing Device ID (device)";
          }),
          (t.getURL = function(e, t) {
            var n = t.device;
            return (
              "/v1/push/sub-key/" + e.config.subscribeKey + "/devices/" + n
            );
          }),
          (t.getRequestTimeout = function(e) {
            return e.config.getTransactionTimeout();
          }),
          (t.isAuthSupported = function() {
            return !0;
          }),
          (t.prepareParams = function(e, t) {
            return { type: t.pushGateway };
          }),
          (t.handleResponse = function(e, t) {
            return { channels: t };
          });
        var r = (n(5), n(13)),
          i = (function(e) {
            return e && e.__esModule ? e : { default: e };
          })(r);
      },
      function(e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getOperation = function() {
            return i.default.PNRemoveAllPushNotificationsOperation;
          }),
          (t.validateParams = function(e, t) {
            var n = t.device,
              r = t.pushGateway,
              i = e.config;
            return n
              ? r
                ? i.subscribeKey
                  ? void 0
                  : "Missing Subscribe Key"
                : "Missing GW Type (pushGateway: gcm or apns)"
              : "Missing Device ID (device)";
          }),
          (t.getURL = function(e, t) {
            var n = t.device;
            return (
              "/v1/push/sub-key/" +
              e.config.subscribeKey +
              "/devices/" +
              n +
              "/remove"
            );
          }),
          (t.getRequestTimeout = function(e) {
            return e.config.getTransactionTimeout();
          }),
          (t.isAuthSupported = function() {
            return !0;
          }),
          (t.prepareParams = function(e, t) {
            return { type: t.pushGateway };
          }),
          (t.handleResponse = function() {
            return {};
          });
        var r = (n(5), n(13)),
          i = (function(e) {
            return e && e.__esModule ? e : { default: e };
          })(r);
      },
      function(e, t, n) {
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getOperation = function() {
            return o.default.PNUnsubscribeOperation;
          }),
          (t.validateParams = function(e) {
            if (!e.config.subscribeKey) return "Missing Subscribe Key";
          }),
          (t.getURL = function(e, t) {
            var n = e.config,
              r = t.channels,
              i = void 0 === r ? [] : r,
              o = i.length > 0 ? i.join(",") : ",";
            return (
              "/v2/presence/sub-key/" +
              n.subscribeKey +
              "/channel/" +
              a.default.encodeString(o) +
              "/leave"
            );
          }),
          (t.getRequestTimeout = function(e) {
            return e.config.getTransactionTimeout();
          }),
          (t.isAuthSupported = function() {
            return !0;
          }),
          (t.prepareParams = function(e, t) {
            var n = t.channelGroups,
              r = void 0 === n ? [] : n,
              i = {};
            return r.length > 0 && (i["channel-group"] = r.join(",")), i;
          }),
          (t.handleResponse = function() {
            return {};
          });
        var i = (n(5), n(13)),
          o = r(i),
          s = n(15),
          a = r(s);
      },
      function(e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getOperation = function() {
            return i.default.PNWhereNowOperation;
          }),
          (t.validateParams = function(e) {
            if (!e.config.subscribeKey) return "Missing Subscribe Key";
          }),
          (t.getURL = function(e, t) {
            var n = e.config,
              r = t.uuid,
              i = void 0 === r ? n.UUID : r;
            return "/v2/presence/sub-key/" + n.subscribeKey + "/uuid/" + i;
          }),
          (t.getRequestTimeout = function(e) {
            return e.config.getTransactionTimeout();
          }),
          (t.isAuthSupported = function() {
            return !0;
          }),
          (t.prepareParams = function() {
            return {};
          }),
          (t.handleResponse = function(e, t) {
            return t.payload
              ? { channels: t.payload.channels }
              : { channels: [] };
          });
        var r = (n(5), n(13)),
          i = (function(e) {
            return e && e.__esModule ? e : { default: e };
          })(r);
      },
      function(e, t, n) {
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getOperation = function() {
            return o.default.PNHeartbeatOperation;
          }),
          (t.validateParams = function(e) {
            if (!e.config.subscribeKey) return "Missing Subscribe Key";
          }),
          (t.getURL = function(e, t) {
            var n = e.config,
              r = t.channels,
              i = void 0 === r ? [] : r,
              o = i.length > 0 ? i.join(",") : ",";
            return (
              "/v2/presence/sub-key/" +
              n.subscribeKey +
              "/channel/" +
              a.default.encodeString(o) +
              "/heartbeat"
            );
          }),
          (t.isAuthSupported = function() {
            return !0;
          }),
          (t.getRequestTimeout = function(e) {
            return e.config.getTransactionTimeout();
          }),
          (t.prepareParams = function(e, t) {
            var n = t.channelGroups,
              r = void 0 === n ? [] : n,
              i = t.state,
              o = void 0 === i ? {} : i,
              s = e.config,
              a = {};
            return (
              r.length > 0 && (a["channel-group"] = r.join(",")),
              (a.state = JSON.stringify(o)),
              (a.heartbeat = s.getPresenceTimeout()),
              a
            );
          }),
          (t.handleResponse = function() {
            return {};
          });
        var i = (n(5), n(13)),
          o = r(i),
          s = n(15),
          a = r(s);
      },
      function(e, t, n) {
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getOperation = function() {
            return o.default.PNGetStateOperation;
          }),
          (t.validateParams = function(e) {
            if (!e.config.subscribeKey) return "Missing Subscribe Key";
          }),
          (t.getURL = function(e, t) {
            var n = e.config,
              r = t.uuid,
              i = void 0 === r ? n.UUID : r,
              o = t.channels,
              s = void 0 === o ? [] : o,
              u = s.length > 0 ? s.join(",") : ",";
            return (
              "/v2/presence/sub-key/" +
              n.subscribeKey +
              "/channel/" +
              a.default.encodeString(u) +
              "/uuid/" +
              i
            );
          }),
          (t.getRequestTimeout = function(e) {
            return e.config.getTransactionTimeout();
          }),
          (t.isAuthSupported = function() {
            return !0;
          }),
          (t.prepareParams = function(e, t) {
            var n = t.channelGroups,
              r = void 0 === n ? [] : n,
              i = {};
            return r.length > 0 && (i["channel-group"] = r.join(",")), i;
          }),
          (t.handleResponse = function(e, t, n) {
            var r = n.channels,
              i = void 0 === r ? [] : r,
              o = n.channelGroups,
              s = void 0 === o ? [] : o,
              a = {};
            return (
              1 === i.length && 0 === s.length
                ? (a[i[0]] = t.payload)
                : (a = t.payload),
              { channels: a }
            );
          });
        var i = (n(5), n(13)),
          o = r(i),
          s = n(15),
          a = r(s);
      },
      function(e, t, n) {
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getOperation = function() {
            return o.default.PNSetStateOperation;
          }),
          (t.validateParams = function(e, t) {
            var n = e.config,
              r = t.state,
              i = t.channels,
              o = void 0 === i ? [] : i,
              s = t.channelGroups,
              a = void 0 === s ? [] : s;
            return r
              ? n.subscribeKey
                ? 0 === o.length && 0 === a.length
                  ? "Please provide a list of channels and/or channel-groups"
                  : void 0
                : "Missing Subscribe Key"
              : "Missing State";
          }),
          (t.getURL = function(e, t) {
            var n = e.config,
              r = t.channels,
              i = void 0 === r ? [] : r,
              o = i.length > 0 ? i.join(",") : ",";
            return (
              "/v2/presence/sub-key/" +
              n.subscribeKey +
              "/channel/" +
              a.default.encodeString(o) +
              "/uuid/" +
              n.UUID +
              "/data"
            );
          }),
          (t.getRequestTimeout = function(e) {
            return e.config.getTransactionTimeout();
          }),
          (t.isAuthSupported = function() {
            return !0;
          }),
          (t.prepareParams = function(e, t) {
            var n = t.state,
              r = t.channelGroups,
              i = void 0 === r ? [] : r,
              o = {};
            return (
              (o.state = JSON.stringify(n)),
              i.length > 0 && (o["channel-group"] = i.join(",")),
              o
            );
          }),
          (t.handleResponse = function(e, t) {
            return { state: t.payload };
          });
        var i = (n(5), n(13)),
          o = r(i),
          s = n(15),
          a = r(s);
      },
      function(e, t, n) {
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getOperation = function() {
            return o.default.PNHereNowOperation;
          }),
          (t.validateParams = function(e) {
            if (!e.config.subscribeKey) return "Missing Subscribe Key";
          }),
          (t.getURL = function(e, t) {
            var n = e.config,
              r = t.channels,
              i = void 0 === r ? [] : r,
              o = t.channelGroups,
              s = void 0 === o ? [] : o,
              u = "/v2/presence/sub-key/" + n.subscribeKey;
            if (i.length > 0 || s.length > 0) {
              var c = i.length > 0 ? i.join(",") : ",";
              u += "/channel/" + a.default.encodeString(c);
            }
            return u;
          }),
          (t.getRequestTimeout = function(e) {
            return e.config.getTransactionTimeout();
          }),
          (t.isAuthSupported = function() {
            return !0;
          }),
          (t.prepareParams = function(e, t) {
            var n = t.channelGroups,
              r = void 0 === n ? [] : n,
              i = t.includeUUIDs,
              o = void 0 === i || i,
              s = t.includeState,
              a = void 0 !== s && s,
              u = {};
            return (
              o || (u.disable_uuids = 1),
              a && (u.state = 1),
              r.length > 0 && (u["channel-group"] = r.join(",")),
              u
            );
          }),
          (t.handleResponse = function(e, t, n) {
            var r = n.channels,
              i = void 0 === r ? [] : r,
              o = n.channelGroups,
              s = void 0 === o ? [] : o,
              a = n.includeUUIDs,
              u = void 0 === a || a,
              c = n.includeState,
              l = void 0 !== c && c;
            return i.length > 1 ||
              s.length > 0 ||
              (0 === s.length && 0 === i.length)
              ? (function() {
                  var e = {};
                  return (
                    (e.totalChannels = t.payload.total_channels),
                    (e.totalOccupancy = t.payload.total_occupancy),
                    (e.channels = {}),
                    Object.keys(t.payload.channels).forEach(function(n) {
                      var r = t.payload.channels[n],
                        i = [];
                      return (
                        (e.channels[n] = {
                          occupants: i,
                          name: n,
                          occupancy: r.occupancy
                        }),
                        u &&
                          r.uuids.forEach(function(e) {
                            l
                              ? i.push({ state: e.state, uuid: e.uuid })
                              : i.push({ state: null, uuid: e });
                          }),
                        e
                      );
                    }),
                    e
                  );
                })()
              : (function() {
                  var e = {},
                    n = [];
                  return (
                    (e.totalChannels = 1),
                    (e.totalOccupancy = t.occupancy),
                    (e.channels = {}),
                    (e.channels[i[0]] = {
                      occupants: n,
                      name: i[0],
                      occupancy: t.occupancy
                    }),
                    u &&
                      t.uuids &&
                      t.uuids.forEach(function(e) {
                        l
                          ? n.push({ state: e.state, uuid: e.uuid })
                          : n.push({ state: null, uuid: e });
                      }),
                    e
                  );
                })();
          });
        var i = (n(5), n(13)),
          o = r(i),
          s = n(15),
          a = r(s);
      },
      function(e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getOperation = function() {
            return i.default.PNAccessManagerAudit;
          }),
          (t.validateParams = function(e) {
            if (!e.config.subscribeKey) return "Missing Subscribe Key";
          }),
          (t.getURL = function(e) {
            return "/v2/auth/audit/sub-key/" + e.config.subscribeKey;
          }),
          (t.getRequestTimeout = function(e) {
            return e.config.getTransactionTimeout();
          }),
          (t.isAuthSupported = function() {
            return !1;
          }),
          (t.prepareParams = function(e, t) {
            var n = t.channel,
              r = t.channelGroup,
              i = t.authKeys,
              o = void 0 === i ? [] : i,
              s = {};
            return (
              n && (s.channel = n),
              r && (s["channel-group"] = r),
              o.length > 0 && (s.auth = o.join(",")),
              s
            );
          }),
          (t.handleResponse = function(e, t) {
            return t.payload;
          });
        var r = (n(5), n(13)),
          i = (function(e) {
            return e && e.__esModule ? e : { default: e };
          })(r);
      },
      function(e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getOperation = function() {
            return i.default.PNAccessManagerGrant;
          }),
          (t.validateParams = function(e) {
            var t = e.config;
            return t.subscribeKey
              ? t.publishKey
                ? t.secretKey
                  ? void 0
                  : "Missing Secret Key"
                : "Missing Publish Key"
              : "Missing Subscribe Key";
          }),
          (t.getURL = function(e) {
            return "/v2/auth/grant/sub-key/" + e.config.subscribeKey;
          }),
          (t.getRequestTimeout = function(e) {
            return e.config.getTransactionTimeout();
          }),
          (t.isAuthSupported = function() {
            return !1;
          }),
          (t.prepareParams = function(e, t) {
            var n = t.channels,
              r = void 0 === n ? [] : n,
              i = t.channelGroups,
              o = void 0 === i ? [] : i,
              s = t.ttl,
              a = t.read,
              u = void 0 !== a && a,
              c = t.write,
              l = void 0 !== c && c,
              f = t.manage,
              p = void 0 !== f && f,
              h = t.authKeys,
              d = void 0 === h ? [] : h,
              v = {};
            return (
              (v.r = u ? "1" : "0"),
              (v.w = l ? "1" : "0"),
              (v.m = p ? "1" : "0"),
              r.length > 0 && (v.channel = r.join(",")),
              o.length > 0 && (v["channel-group"] = o.join(",")),
              d.length > 0 && (v.auth = d.join(",")),
              (s || 0 === s) && (v.ttl = s),
              v
            );
          }),
          (t.handleResponse = function() {
            return {};
          });
        var r = (n(5), n(13)),
          i = (function(e) {
            return e && e.__esModule ? e : { default: e };
          })(r);
      },
      function(e, t, n) {
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i(e, t) {
          var n = e.crypto,
            r = e.config,
            i = JSON.stringify(t);
          return (
            r.cipherKey && ((i = n.encrypt(i)), (i = JSON.stringify(i))), i
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              };
        (t.getOperation = function() {
          return a.default.PNPublishOperation;
        }),
          (t.validateParams = function(e, t) {
            var n = e.config,
              r = t.message;
            return t.channel
              ? r
                ? n.subscribeKey
                  ? void 0
                  : "Missing Subscribe Key"
                : "Missing Message"
              : "Missing Channel";
          }),
          (t.usePost = function(e, t) {
            var n = t.sendByPost;
            return void 0 !== n && n;
          }),
          (t.getURL = function(e, t) {
            var n = e.config,
              r = t.channel,
              o = t.message,
              s = i(e, o);
            return (
              "/publish/" +
              n.publishKey +
              "/" +
              n.subscribeKey +
              "/0/" +
              c.default.encodeString(r) +
              "/0/" +
              c.default.encodeString(s)
            );
          }),
          (t.postURL = function(e, t) {
            var n = e.config,
              r = t.channel;
            return (
              "/publish/" +
              n.publishKey +
              "/" +
              n.subscribeKey +
              "/0/" +
              c.default.encodeString(r) +
              "/0"
            );
          }),
          (t.getRequestTimeout = function(e) {
            return e.config.getTransactionTimeout();
          }),
          (t.isAuthSupported = function() {
            return !0;
          }),
          (t.postPayload = function(e, t) {
            return i(e, t.message);
          }),
          (t.prepareParams = function(e, t) {
            var n = t.meta,
              r = t.replicate,
              i = void 0 === r || r,
              s = t.storeInHistory,
              a = t.ttl,
              u = {};
            return (
              null != s && (u.store = s ? "1" : "0"),
              a && (u.ttl = a),
              !1 === i && (u.norep = "true"),
              n &&
                "object" === (void 0 === n ? "undefined" : o(n)) &&
                (u.meta = JSON.stringify(n)),
              u
            );
          }),
          (t.handleResponse = function(e, t) {
            return { timetoken: t[2] };
          });
        var s = (n(5), n(13)),
          a = r(s),
          u = n(15),
          c = r(u);
      },
      function(e, t, n) {
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i(e, t) {
          var n = e.config,
            r = e.crypto;
          if (!n.cipherKey) return t;
          try {
            return r.decrypt(t);
          } catch (e) {
            return t;
          }
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getOperation = function() {
            return s.default.PNHistoryOperation;
          }),
          (t.validateParams = function(e, t) {
            var n = t.channel,
              r = e.config;
            return n
              ? r.subscribeKey
                ? void 0
                : "Missing Subscribe Key"
              : "Missing channel";
          }),
          (t.getURL = function(e, t) {
            var n = t.channel;
            return (
              "/v2/history/sub-key/" +
              e.config.subscribeKey +
              "/channel/" +
              u.default.encodeString(n)
            );
          }),
          (t.getRequestTimeout = function(e) {
            return e.config.getTransactionTimeout();
          }),
          (t.isAuthSupported = function() {
            return !0;
          }),
          (t.prepareParams = function(e, t) {
            var n = t.start,
              r = t.end,
              i = t.reverse,
              o = t.count,
              s = void 0 === o ? 100 : o,
              a = t.stringifiedTimeToken,
              u = void 0 !== a && a,
              c = { include_token: "true" };
            return (
              (c.count = s),
              n && (c.start = n),
              r && (c.end = r),
              u && (c.string_message_token = "true"),
              null != i && (c.reverse = i.toString()),
              c
            );
          }),
          (t.handleResponse = function(e, t) {
            var n = { messages: [], startTimeToken: t[1], endTimeToken: t[2] };
            return (
              t[0].forEach(function(t) {
                var r = { timetoken: t.timetoken, entry: i(e, t.message) };
                n.messages.push(r);
              }),
              n
            );
          });
        var o = (n(5), n(13)),
          s = r(o),
          a = n(15),
          u = r(a);
      },
      function(e, t, n) {
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getOperation = function() {
            return o.default.PNDeleteMessagesOperation;
          }),
          (t.validateParams = function(e, t) {
            var n = t.channel,
              r = e.config;
            return n
              ? r.subscribeKey
                ? void 0
                : "Missing Subscribe Key"
              : "Missing channel";
          }),
          (t.useDelete = function() {
            return !0;
          }),
          (t.getURL = function(e, t) {
            var n = t.channel;
            return (
              "/v3/history/sub-key/" +
              e.config.subscribeKey +
              "/channel/" +
              a.default.encodeString(n)
            );
          }),
          (t.getRequestTimeout = function(e) {
            return e.config.getTransactionTimeout();
          }),
          (t.isAuthSupported = function() {
            return !0;
          }),
          (t.prepareParams = function(e, t) {
            var n = t.start,
              r = t.end,
              i = {};
            return n && (i.start = n), r && (i.end = r), i;
          }),
          (t.handleResponse = function(e, t) {
            return t.payload;
          });
        var i = (n(5), n(13)),
          o = r(i),
          s = n(15),
          a = r(s);
      },
      function(e, t, n) {
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = function(e, t) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e))
            return (function(e, t) {
              var n = [],
                r = !0,
                i = !1,
                o = void 0;
              try {
                for (
                  var s, a = e[Symbol.iterator]();
                  !(r = (s = a.next()).done) &&
                  (n.push(s.value), !t || n.length !== t);
                  r = !0
                );
              } catch (e) {
                (i = !0), (o = e);
              } finally {
                try {
                  !r && a.return && a.return();
                } finally {
                  if (i) throw o;
                }
              }
              return n;
            })(e, t);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        };
        (t.getOperation = function() {
          return s.default.PNMessageCounts;
        }),
          (t.validateParams = function(e, t) {
            var n = t.channels,
              r = t.timetoken,
              i = t.channelTimetokens,
              o = e.config;
            return n
              ? r && i
                ? "timetoken and channelTimetokens are incompatible together"
                : r && i && i.length > 1 && n.length !== i.length
                ? "Length of channelTimetokens and channels do not match"
                : o.subscribeKey
                ? void 0
                : "Missing Subscribe Key"
              : "Missing channel";
          }),
          (t.getURL = function(e, t) {
            var n = t.channels,
              r = e.config,
              i = n.join(",");
            return (
              "/v3/history/sub-key/" +
              r.subscribeKey +
              "/message-counts/" +
              u.default.encodeString(i)
            );
          }),
          (t.getRequestTimeout = function(e) {
            return e.config.getTransactionTimeout();
          }),
          (t.isAuthSupported = function() {
            return !0;
          }),
          (t.prepareParams = function(e, t) {
            var n = t.timetoken,
              r = t.channelTimetokens,
              o = {};
            if (r && 1 === r.length) {
              var s = i(r, 1),
                a = s[0];
              o.timetoken = a;
            } else
              r ? (o.channelsTimetoken = r.join(",")) : n && (o.timetoken = n);
            return o;
          }),
          (t.handleResponse = function(e, t) {
            return { channels: t.channels };
          });
        var o = n(13),
          s = r(o),
          a = n(15),
          u = r(a);
      },
      function(e, t, n) {
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getOperation = function() {
            return o.default.PNFetchMessagesOperation;
          }),
          (t.validateParams = function(e, t) {
            var n = t.channels,
              r = e.config;
            return n && 0 !== n.length
              ? r.subscribeKey
                ? void 0
                : "Missing Subscribe Key"
              : "Missing channels";
          }),
          (t.getURL = function(e, t) {
            var n = t.channels,
              r = void 0 === n ? [] : n,
              i = e.config,
              o = r.length > 0 ? r.join(",") : ",";
            return (
              "/v3/history/sub-key/" +
              i.subscribeKey +
              "/channel/" +
              a.default.encodeString(o)
            );
          }),
          (t.getRequestTimeout = function(e) {
            return e.config.getTransactionTimeout();
          }),
          (t.isAuthSupported = function() {
            return !0;
          }),
          (t.prepareParams = function(e, t) {
            var n = t.start,
              r = t.end,
              i = t.count,
              o = t.stringifiedTimeToken,
              s = void 0 !== o && o,
              a = {};
            return (
              i && (a.max = i),
              n && (a.start = n),
              r && (a.end = r),
              s && (a.string_message_token = "true"),
              a
            );
          }),
          (t.handleResponse = function(e, t) {
            var n = { channels: {} };
            return (
              Object.keys(t.channels || {}).forEach(function(r) {
                (n.channels[r] = []),
                  (t.channels[r] || []).forEach(function(t) {
                    var i = {};
                    (i.channel = r),
                      (i.subscription = null),
                      (i.timetoken = t.timetoken),
                      (i.message = (function(e, t) {
                        var n = e.config,
                          r = e.crypto;
                        if (!n.cipherKey) return t;
                        try {
                          return r.decrypt(t);
                        } catch (e) {
                          return t;
                        }
                      })(e, t.message)),
                      n.channels[r].push(i);
                  });
              }),
              n
            );
          });
        var i = (n(5), n(13)),
          o = r(i),
          s = n(15),
          a = r(s);
      },
      function(e, t, n) {
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getOperation = function() {
            return o.default.PNSubscribeOperation;
          }),
          (t.validateParams = function(e) {
            if (!e.config.subscribeKey) return "Missing Subscribe Key";
          }),
          (t.getURL = function(e, t) {
            var n = e.config,
              r = t.channels,
              i = void 0 === r ? [] : r,
              o = i.length > 0 ? i.join(",") : ",";
            return (
              "/v2/subscribe/" +
              n.subscribeKey +
              "/" +
              a.default.encodeString(o) +
              "/0"
            );
          }),
          (t.getRequestTimeout = function(e) {
            return e.config.getSubscribeTimeout();
          }),
          (t.isAuthSupported = function() {
            return !0;
          }),
          (t.prepareParams = function(e, t) {
            var n = e.config,
              r = t.state,
              i = t.channelGroups,
              o = void 0 === i ? [] : i,
              s = t.timetoken,
              a = t.filterExpression,
              u = t.region,
              c = { heartbeat: n.getPresenceTimeout() };
            return (
              o.length > 0 && (c["channel-group"] = o.join(",")),
              a && a.length > 0 && (c["filter-expr"] = a),
              Object.keys(r).length && (c.state = JSON.stringify(r)),
              s && (c.tt = s),
              u && (c.tr = u),
              c
            );
          }),
          (t.handleResponse = function(e, t) {
            var n = [];
            t.m.forEach(function(e) {
              var t = { publishTimetoken: e.p.t, region: e.p.r },
                r = {
                  shard: parseInt(e.a, 10),
                  subscriptionMatch: e.b,
                  channel: e.c,
                  payload: e.d,
                  flags: e.f,
                  issuingClientId: e.i,
                  subscribeKey: e.k,
                  originationTimetoken: e.o,
                  userMetadata: e.u,
                  publishMetaData: t
                };
              n.push(r);
            });
            var r = { timetoken: t.t.t, region: t.t.r };
            return { messages: n, metadata: r };
          });
        var i = (n(5), n(13)),
          o = r(i),
          s = n(15),
          a = r(s);
      },
      function(e, t, n) {
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = (function() {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function(t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          o = n(2),
          s = (r(o), n(10)),
          a = r(s),
          u =
            (n(5),
            (function() {
              function e(t) {
                var n = this;
                (function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  (this._modules = {}),
                  Object.keys(t).forEach(function(e) {
                    n._modules[e] = t[e].bind(n);
                  });
              }
              return (
                i(e, [
                  {
                    key: "init",
                    value: function(e) {
                      (this._config = e),
                        (this._maxSubDomain = 20),
                        (this._currentSubDomain = Math.floor(
                          Math.random() * this._maxSubDomain
                        )),
                        (this._providedFQDN =
                          (this._config.secure ? "https://" : "http://") +
                          this._config.origin),
                        (this._coreParams = {}),
                        this.shiftStandardOrigin();
                    }
                  },
                  {
                    key: "nextOrigin",
                    value: function() {
                      if (-1 === this._providedFQDN.indexOf("ps."))
                        return this._providedFQDN;
                      var e = void 0;
                      return (
                        (this._currentSubDomain = this._currentSubDomain + 1),
                        this._currentSubDomain >= this._maxSubDomain &&
                          (this._currentSubDomain = 1),
                        (e = this._currentSubDomain.toString()),
                        this._providedFQDN.replace("ps.", "ps" + e + ".")
                      );
                    }
                  },
                  {
                    key: "hasModule",
                    value: function(e) {
                      return e in this._modules;
                    }
                  },
                  {
                    key: "shiftStandardOrigin",
                    value: function() {
                      var e =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0];
                      return (
                        (this._standardOrigin = this.nextOrigin(e)),
                        this._standardOrigin
                      );
                    }
                  },
                  {
                    key: "getStandardOrigin",
                    value: function() {
                      return this._standardOrigin;
                    }
                  },
                  {
                    key: "POST",
                    value: function(e, t, n, r) {
                      return this._modules.post(e, t, n, r);
                    }
                  },
                  {
                    key: "GET",
                    value: function(e, t, n) {
                      return this._modules.get(e, t, n);
                    }
                  },
                  {
                    key: "DELETE",
                    value: function(e, t, n) {
                      return this._modules.del(e, t, n);
                    }
                  },
                  {
                    key: "_detectErrorCategory",
                    value: function(e) {
                      if ("ENOTFOUND" === e.code)
                        return a.default.PNNetworkIssuesCategory;
                      if ("ECONNREFUSED" === e.code)
                        return a.default.PNNetworkIssuesCategory;
                      if ("ECONNRESET" === e.code)
                        return a.default.PNNetworkIssuesCategory;
                      if ("EAI_AGAIN" === e.code)
                        return a.default.PNNetworkIssuesCategory;
                      if (
                        0 === e.status ||
                        (e.hasOwnProperty("status") && void 0 === e.status)
                      )
                        return a.default.PNNetworkIssuesCategory;
                      if (e.timeout) return a.default.PNTimeoutCategory;
                      if ("ETIMEDOUT" === e.code)
                        return a.default.PNNetworkIssuesCategory;
                      if (e.response) {
                        if (e.response.badRequest)
                          return a.default.PNBadRequestCategory;
                        if (e.response.forbidden)
                          return a.default.PNAccessDeniedCategory;
                      }
                      return a.default.PNUnknownCategory;
                    }
                  }
                ]),
                e
              );
            })());
        (t.default = u), (e.exports = t.default);
      },
      function(e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = {
            get: function(e) {
              try {
                return localStorage.getItem(e);
              } catch (e) {
                return null;
              }
            },
            set: function(e, t) {
              try {
                return localStorage.setItem(e, t);
              } catch (e) {
                return null;
              }
            }
          }),
          (e.exports = t.default);
      },
      function(e, t, n) {
        function r(e) {
          var t = new Date().getTime(),
            n = new Date().toISOString(),
            r =
              console && console.log
                ? console
                : window && window.console && window.console.log
                ? window.console
                : console;
          r.log("<<<<<"),
            r.log("[" + n + "]", "\n", e.url, "\n", e.qs),
            r.log("-----"),
            e.on("response", function(n) {
              var i = new Date().getTime(),
                o = i - t,
                s = new Date().toISOString();
              r.log(">>>>>>"),
                r.log(
                  "[" + s + " / " + o + "]",
                  "\n",
                  e.url,
                  "\n",
                  e.qs,
                  "\n",
                  n.text
                ),
                r.log("-----");
            });
        }
        function i(e, t, n) {
          var i = this;
          return (
            this._config.logVerbosity && (e = e.use(r)),
            this._config.proxy &&
              this._modules.proxy &&
              (e = this._modules.proxy.call(this, e)),
            this._config.keepAlive &&
              this._modules.keepAlive &&
              (e = this._modules.keepAlive(e)),
            e.timeout(t.timeout).end(function(e, r) {
              var o = void 0,
                s = {};
              if (
                ((s.error = null !== e),
                (s.operation = t.operation),
                r && r.status && (s.statusCode = r.status),
                e)
              ) {
                if (e.response && e.response.text && !i._config.logVerbosity)
                  try {
                    s.errorData = JSON.parse(e.response.text);
                  } catch (t) {
                    s.errorData = e;
                  }
                else s.errorData = e;
                return (s.category = i._detectErrorCategory(e)), n(s, null);
              }
              try {
                o = JSON.parse(r.text);
              } catch (e) {
                return (s.errorData = r), (s.error = !0), n(s, null);
              }
              return o.error &&
                1 === o.error &&
                o.status &&
                o.message &&
                o.service
                ? ((s.errorData = o),
                  (s.statusCode = o.status),
                  (s.error = !0),
                  (s.category = i._detectErrorCategory(s)),
                  n(s, null))
                : n(s, o);
            })
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.get = function(e, t, n) {
            var r = s.default.get(this.getStandardOrigin() + t.url).query(e);
            return i.call(this, r, t, n);
          }),
          (t.post = function(e, t, n, r) {
            var o = s.default
              .post(this.getStandardOrigin() + n.url)
              .query(e)
              .send(t);
            return i.call(this, o, n, r);
          }),
          (t.del = function(e, t, n) {
            var r = s.default.delete(this.getStandardOrigin() + t.url).query(e);
            return i.call(this, r, t, n);
          });
        var o = n(43),
          s = (function(e) {
            return e && e.__esModule ? e : { default: e };
          })(o);
        n(5);
      },
      function(e, t, n) {
        function r() {}
        function i(e) {
          if (!d(e)) return e;
          var t = [];
          for (var n in e) o(t, n, e[n]);
          return t.join("&");
        }
        function o(e, t, n) {
          if (null != n)
            if (Array.isArray(n))
              n.forEach(function(n) {
                o(e, t, n);
              });
            else if (d(n)) for (var r in n) o(e, t + "[" + r + "]", n[r]);
            else e.push(encodeURIComponent(t) + "=" + encodeURIComponent(n));
          else null === n && e.push(encodeURIComponent(t));
        }
        function s(e) {
          for (
            var t, n, r = {}, i = e.split("&"), o = 0, s = i.length;
            o < s;
            ++o
          )
            (t = i[o]),
              -1 == (n = t.indexOf("="))
                ? (r[decodeURIComponent(t)] = "")
                : (r[decodeURIComponent(t.slice(0, n))] = decodeURIComponent(
                    t.slice(n + 1)
                  ));
          return r;
        }
        function a(e) {
          return /[\/+]json($|[^-\w])/.test(e);
        }
        function u(e) {
          (this.req = e),
            (this.xhr = this.req.xhr),
            (this.text =
              ("HEAD" != this.req.method &&
                ("" === this.xhr.responseType ||
                  "text" === this.xhr.responseType)) ||
              void 0 === this.xhr.responseType
                ? this.xhr.responseText
                : null),
            (this.statusText = this.req.xhr.statusText);
          var t = this.xhr.status;
          1223 === t && (t = 204),
            this._setStatusProperties(t),
            (this.header = this.headers = (function(e) {
              for (
                var t,
                  n,
                  r,
                  i,
                  o = e.split(/\r?\n/),
                  s = {},
                  a = 0,
                  u = o.length;
                a < u;
                ++a
              )
                (n = o[a]),
                  -1 !== (t = n.indexOf(":")) &&
                    ((r = n.slice(0, t).toLowerCase()),
                    (i = b(n.slice(t + 1))),
                    (s[r] = i));
              return s;
            })(this.xhr.getAllResponseHeaders())),
            (this.header["content-type"] = this.xhr.getResponseHeader(
              "content-type"
            )),
            this._setHeaderProperties(this.header),
            null === this.text && e._responseType
              ? (this.body = this.xhr.response)
              : (this.body =
                  "HEAD" != this.req.method
                    ? this._parseBody(this.text ? this.text : this.xhr.response)
                    : null);
        }
        function c(e, t) {
          var n = this;
          (this._query = this._query || []),
            (this.method = e),
            (this.url = t),
            (this.header = {}),
            (this._header = {}),
            this.on("end", function() {
              var e,
                t = null,
                r = null;
              try {
                r = new u(n);
              } catch (r) {
                return (
                  ((t = new Error(
                    "Parser is unable to parse the response"
                  )).parse = !0),
                  (t.original = r),
                  n.xhr
                    ? ((t.rawResponse =
                        void 0 === n.xhr.responseType
                          ? n.xhr.responseText
                          : n.xhr.response),
                      (t.status = n.xhr.status ? n.xhr.status : null),
                      (t.statusCode = t.status))
                    : ((t.rawResponse = null), (t.status = null)),
                  n.callback(t)
                );
              }
              n.emit("response", r);
              try {
                n._isResponseOK(r) ||
                  (e = new Error(r.statusText || "Unsuccessful HTTP response"));
              } catch (t) {
                e = t;
              }
              e
                ? ((e.original = t),
                  (e.response = r),
                  (e.status = r.status),
                  n.callback(e, r))
                : n.callback(null, r);
            });
        }
        function l(e, t, n) {
          var r = g("DELETE", e);
          return (
            "function" == typeof t && ((n = t), (t = null)),
            t && r.send(t),
            n && r.end(n),
            r
          );
        }
        var f;
        "undefined" != typeof window
          ? (f = window)
          : "undefined" != typeof self
          ? (f = self)
          : (console.warn(
              "Using browser-only version of superagent in non-browser environment"
            ),
            (f = this));
        var p = n(44),
          h = n(45),
          d = n(46),
          v = n(47),
          y = n(49),
          g = (t = e.exports = function(e, n) {
            return "function" == typeof n
              ? new t.Request("GET", e).end(n)
              : 1 == arguments.length
              ? new t.Request("GET", e)
              : new t.Request(e, n);
          });
        (t.Request = c),
          (g.getXHR = function() {
            if (
              !(
                !f.XMLHttpRequest ||
                (f.location &&
                  "file:" == f.location.protocol &&
                  f.ActiveXObject)
              )
            )
              return new XMLHttpRequest();
            try {
              return new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
            try {
              return new ActiveXObject("Msxml2.XMLHTTP.6.0");
            } catch (e) {}
            try {
              return new ActiveXObject("Msxml2.XMLHTTP.3.0");
            } catch (e) {}
            try {
              return new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {}
            throw Error(
              "Browser-only version of superagent could not find XHR"
            );
          });
        var b = "".trim
          ? function(e) {
              return e.trim();
            }
          : function(e) {
              return e.replace(/(^\s*|\s*$)/g, "");
            };
        (g.serializeObject = i),
          (g.parseString = s),
          (g.types = {
            html: "text/html",
            json: "application/json",
            xml: "text/xml",
            urlencoded: "application/x-www-form-urlencoded",
            form: "application/x-www-form-urlencoded",
            "form-data": "application/x-www-form-urlencoded"
          }),
          (g.serialize = {
            "application/x-www-form-urlencoded": i,
            "application/json": JSON.stringify
          }),
          (g.parse = {
            "application/x-www-form-urlencoded": s,
            "application/json": JSON.parse
          }),
          v(u.prototype),
          (u.prototype._parseBody = function(e) {
            var t = g.parse[this.type];
            return this.req._parser
              ? this.req._parser(this, e)
              : (!t && a(this.type) && (t = g.parse["application/json"]),
                t && e && (e.length || e instanceof Object) ? t(e) : null);
          }),
          (u.prototype.toError = function() {
            var e = this.req,
              t = e.method,
              n = e.url,
              r = "cannot " + t + " " + n + " (" + this.status + ")",
              i = new Error(r);
            return (i.status = this.status), (i.method = t), (i.url = n), i;
          }),
          (g.Response = u),
          p(c.prototype),
          h(c.prototype),
          (c.prototype.type = function(e) {
            return this.set("Content-Type", g.types[e] || e), this;
          }),
          (c.prototype.accept = function(e) {
            return this.set("Accept", g.types[e] || e), this;
          }),
          (c.prototype.auth = function(e, t, n) {
            return (
              1 === arguments.length && (t = ""),
              "object" == typeof t && null !== t && ((n = t), (t = "")),
              n || (n = { type: "function" == typeof btoa ? "basic" : "auto" }),
              this._auth(e, t, n, function(e) {
                if ("function" == typeof btoa) return btoa(e);
                throw new Error(
                  "Cannot use basic auth, btoa is not a function"
                );
              })
            );
          }),
          (c.prototype.query = function(e) {
            return (
              "string" != typeof e && (e = i(e)), e && this._query.push(e), this
            );
          }),
          (c.prototype.attach = function(e, t, n) {
            if (t) {
              if (this._data)
                throw Error("superagent can't mix .send() and .attach()");
              this._getFormData().append(e, t, n || t.name);
            }
            return this;
          }),
          (c.prototype._getFormData = function() {
            return (
              this._formData || (this._formData = new f.FormData()),
              this._formData
            );
          }),
          (c.prototype.callback = function(e, t) {
            if (this._shouldRetry(e, t)) return this._retry();
            var n = this._callback;
            this.clearTimeout(),
              e &&
                (this._maxRetries && (e.retries = this._retries - 1),
                this.emit("error", e)),
              n(e, t);
          }),
          (c.prototype.crossDomainError = function() {
            var e = new Error(
              "Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc."
            );
            (e.crossDomain = !0),
              (e.status = this.status),
              (e.method = this.method),
              (e.url = this.url),
              this.callback(e);
          }),
          (c.prototype.buffer = c.prototype.ca = c.prototype.agent = function() {
            return (
              console.warn(
                "This is not supported in browser version of superagent"
              ),
              this
            );
          }),
          (c.prototype.pipe = c.prototype.write = function() {
            throw Error(
              "Streaming is not supported in browser version of superagent"
            );
          }),
          (c.prototype._isHost = function(e) {
            return (
              e &&
              "object" == typeof e &&
              !Array.isArray(e) &&
              "[object Object]" !== Object.prototype.toString.call(e)
            );
          }),
          (c.prototype.end = function(e) {
            return (
              this._endCalled &&
                console.warn(
                  "Warning: .end() was called twice. This is not supported in superagent"
                ),
              (this._endCalled = !0),
              (this._callback = e || r),
              this._finalizeQueryString(),
              this._end()
            );
          }),
          (c.prototype._end = function() {
            var e = this,
              t = (this.xhr = g.getXHR()),
              n = this._formData || this._data;
            this._setTimeouts(),
              (t.onreadystatechange = function() {
                var n = t.readyState;
                if (
                  (n >= 2 &&
                    e._responseTimeoutTimer &&
                    clearTimeout(e._responseTimeoutTimer),
                  4 == n)
                ) {
                  var r;
                  try {
                    r = t.status;
                  } catch (e) {
                    r = 0;
                  }
                  if (!r) {
                    if (e.timedout || e._aborted) return;
                    return e.crossDomainError();
                  }
                  e.emit("end");
                }
              });
            var r = function(t, n) {
              n.total > 0 && (n.percent = (n.loaded / n.total) * 100),
                (n.direction = t),
                e.emit("progress", n);
            };
            if (this.hasListeners("progress"))
              try {
                (t.onprogress = r.bind(null, "download")),
                  t.upload && (t.upload.onprogress = r.bind(null, "upload"));
              } catch (e) {}
            try {
              this.username && this.password
                ? t.open(
                    this.method,
                    this.url,
                    !0,
                    this.username,
                    this.password
                  )
                : t.open(this.method, this.url, !0);
            } catch (e) {
              return this.callback(e);
            }
            if (
              (this._withCredentials && (t.withCredentials = !0),
              !this._formData &&
                "GET" != this.method &&
                "HEAD" != this.method &&
                "string" != typeof n &&
                !this._isHost(n))
            ) {
              var i = this._header["content-type"],
                o = this._serializer || g.serialize[i ? i.split(";")[0] : ""];
              !o && a(i) && (o = g.serialize["application/json"]),
                o && (n = o(n));
            }
            for (var s in this.header)
              null != this.header[s] &&
                this.header.hasOwnProperty(s) &&
                t.setRequestHeader(s, this.header[s]);
            return (
              this._responseType && (t.responseType = this._responseType),
              this.emit("request", this),
              t.send(void 0 !== n ? n : null),
              this
            );
          }),
          (g.agent = function() {
            return new y();
          }),
          ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function(
            e
          ) {
            y.prototype[e.toLowerCase()] = function(t, n) {
              var r = new g.Request(e, t);
              return this._setDefaults(r), n && r.end(n), r;
            };
          }),
          (y.prototype.del = y.prototype.delete),
          (g.get = function(e, t, n) {
            var r = g("GET", e);
            return (
              "function" == typeof t && ((n = t), (t = null)),
              t && r.query(t),
              n && r.end(n),
              r
            );
          }),
          (g.head = function(e, t, n) {
            var r = g("HEAD", e);
            return (
              "function" == typeof t && ((n = t), (t = null)),
              t && r.query(t),
              n && r.end(n),
              r
            );
          }),
          (g.options = function(e, t, n) {
            var r = g("OPTIONS", e);
            return (
              "function" == typeof t && ((n = t), (t = null)),
              t && r.send(t),
              n && r.end(n),
              r
            );
          }),
          (g.del = l),
          (g.delete = l),
          (g.patch = function(e, t, n) {
            var r = g("PATCH", e);
            return (
              "function" == typeof t && ((n = t), (t = null)),
              t && r.send(t),
              n && r.end(n),
              r
            );
          }),
          (g.post = function(e, t, n) {
            var r = g("POST", e);
            return (
              "function" == typeof t && ((n = t), (t = null)),
              t && r.send(t),
              n && r.end(n),
              r
            );
          }),
          (g.put = function(e, t, n) {
            var r = g("PUT", e);
            return (
              "function" == typeof t && ((n = t), (t = null)),
              t && r.send(t),
              n && r.end(n),
              r
            );
          });
      },
      function(e, t, n) {
        function r(e) {
          if (e)
            return (function(e) {
              for (var t in r.prototype) e[t] = r.prototype[t];
              return e;
            })(e);
        }
        (e.exports = r),
          (r.prototype.on = r.prototype.addEventListener = function(e, t) {
            return (
              (this._callbacks = this._callbacks || {}),
              (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(
                t
              ),
              this
            );
          }),
          (r.prototype.once = function(e, t) {
            function n() {
              this.off(e, n), t.apply(this, arguments);
            }
            return (n.fn = t), this.on(e, n), this;
          }),
          (r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(
            e,
            t
          ) {
            if (
              ((this._callbacks = this._callbacks || {}), 0 == arguments.length)
            )
              return (this._callbacks = {}), this;
            var n = this._callbacks["$" + e];
            if (!n) return this;
            if (1 == arguments.length)
              return delete this._callbacks["$" + e], this;
            for (var r, i = 0; i < n.length; i++)
              if ((r = n[i]) === t || r.fn === t) {
                n.splice(i, 1);
                break;
              }
            return this;
          }),
          (r.prototype.emit = function(e) {
            this._callbacks = this._callbacks || {};
            var t = [].slice.call(arguments, 1),
              n = this._callbacks["$" + e];
            if (n) {
              n = n.slice(0);
              for (var r = 0, i = n.length; r < i; ++r) n[r].apply(this, t);
            }
            return this;
          }),
          (r.prototype.listeners = function(e) {
            return (
              (this._callbacks = this._callbacks || {}),
              this._callbacks["$" + e] || []
            );
          }),
          (r.prototype.hasListeners = function(e) {
            return !!this.listeners(e).length;
          });
      },
      function(e, t, n) {
        function r(e) {
          if (e)
            return (function(e) {
              for (var t in r.prototype) e[t] = r.prototype[t];
              return e;
            })(e);
        }
        var i = n(46);
        (e.exports = r),
          (r.prototype.clearTimeout = function() {
            return (
              clearTimeout(this._timer),
              clearTimeout(this._responseTimeoutTimer),
              delete this._timer,
              delete this._responseTimeoutTimer,
              this
            );
          }),
          (r.prototype.parse = function(e) {
            return (this._parser = e), this;
          }),
          (r.prototype.responseType = function(e) {
            return (this._responseType = e), this;
          }),
          (r.prototype.serialize = function(e) {
            return (this._serializer = e), this;
          }),
          (r.prototype.timeout = function(e) {
            if (!e || "object" != typeof e)
              return (this._timeout = e), (this._responseTimeout = 0), this;
            for (var t in e)
              switch (t) {
                case "deadline":
                  this._timeout = e.deadline;
                  break;
                case "response":
                  this._responseTimeout = e.response;
                  break;
                default:
                  console.warn("Unknown timeout option", t);
              }
            return this;
          }),
          (r.prototype.retry = function(e, t) {
            return (
              (0 !== arguments.length && !0 !== e) || (e = 1),
              e <= 0 && (e = 0),
              (this._maxRetries = e),
              (this._retries = 0),
              (this._retryCallback = t),
              this
            );
          });
        var o = ["ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT"];
        (r.prototype._shouldRetry = function(e, t) {
          if (!this._maxRetries || this._retries++ >= this._maxRetries)
            return !1;
          if (this._retryCallback)
            try {
              var n = this._retryCallback(e, t);
              if (!0 === n) return !0;
              if (!1 === n) return !1;
            } catch (e) {
              console.error(e);
            }
          if (t && t.status && t.status >= 500 && 501 != t.status) return !0;
          if (e) {
            if (e.code && ~o.indexOf(e.code)) return !0;
            if (e.timeout && "ECONNABORTED" == e.code) return !0;
            if (e.crossDomain) return !0;
          }
          return !1;
        }),
          (r.prototype._retry = function() {
            return (
              this.clearTimeout(),
              this.req && ((this.req = null), (this.req = this.request())),
              (this._aborted = !1),
              (this.timedout = !1),
              this._end()
            );
          }),
          (r.prototype.then = function(e, t) {
            if (!this._fullfilledPromise) {
              var n = this;
              this._endCalled &&
                console.warn(
                  "Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"
                ),
                (this._fullfilledPromise = new Promise(function(e, t) {
                  n.end(function(n, r) {
                    n ? t(n) : e(r);
                  });
                }));
            }
            return this._fullfilledPromise.then(e, t);
          }),
          (r.prototype.catch = function(e) {
            return this.then(void 0, e);
          }),
          (r.prototype.use = function(e) {
            return e(this), this;
          }),
          (r.prototype.ok = function(e) {
            if ("function" != typeof e) throw Error("Callback required");
            return (this._okCallback = e), this;
          }),
          (r.prototype._isResponseOK = function(e) {
            return (
              !!e &&
              (this._okCallback
                ? this._okCallback(e)
                : e.status >= 200 && e.status < 300)
            );
          }),
          (r.prototype.get = function(e) {
            return this._header[e.toLowerCase()];
          }),
          (r.prototype.getHeader = r.prototype.get),
          (r.prototype.set = function(e, t) {
            if (i(e)) {
              for (var n in e) this.set(n, e[n]);
              return this;
            }
            return (
              (this._header[e.toLowerCase()] = t), (this.header[e] = t), this
            );
          }),
          (r.prototype.unset = function(e) {
            return (
              delete this._header[e.toLowerCase()], delete this.header[e], this
            );
          }),
          (r.prototype.field = function(e, t) {
            if (null == e)
              throw new Error(".field(name, val) name can not be empty");
            if (
              (this._data &&
                console.error(
                  ".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"
                ),
              i(e))
            ) {
              for (var n in e) this.field(n, e[n]);
              return this;
            }
            if (Array.isArray(t)) {
              for (var r in t) this.field(e, t[r]);
              return this;
            }
            if (null == t)
              throw new Error(".field(name, val) val can not be empty");
            return (
              "boolean" == typeof t && (t = "" + t),
              this._getFormData().append(e, t),
              this
            );
          }),
          (r.prototype.abort = function() {
            return this._aborted
              ? this
              : ((this._aborted = !0),
                this.xhr && this.xhr.abort(),
                this.req && this.req.abort(),
                this.clearTimeout(),
                this.emit("abort"),
                this);
          }),
          (r.prototype._auth = function(e, t, n, r) {
            switch (n.type) {
              case "basic":
                this.set("Authorization", "Basic " + r(e + ":" + t));
                break;
              case "auto":
                (this.username = e), (this.password = t);
                break;
              case "bearer":
                this.set("Authorization", "Bearer " + e);
            }
            return this;
          }),
          (r.prototype.withCredentials = function(e) {
            return null == e && (e = !0), (this._withCredentials = e), this;
          }),
          (r.prototype.redirects = function(e) {
            return (this._maxRedirects = e), this;
          }),
          (r.prototype.maxResponseSize = function(e) {
            if ("number" != typeof e) throw TypeError("Invalid argument");
            return (this._maxResponseSize = e), this;
          }),
          (r.prototype.toJSON = function() {
            return {
              method: this.method,
              url: this.url,
              data: this._data,
              headers: this._header
            };
          }),
          (r.prototype.send = function(e) {
            var t = i(e),
              n = this._header["content-type"];
            if (
              (this._formData &&
                console.error(
                  ".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"
                ),
              t && !this._data)
            )
              Array.isArray(e)
                ? (this._data = [])
                : this._isHost(e) || (this._data = {});
            else if (e && this._data && this._isHost(this._data))
              throw Error("Can't merge these send calls");
            if (t && i(this._data)) for (var r in e) this._data[r] = e[r];
            else
              "string" == typeof e
                ? (n || this.type("form"),
                  (n = this._header["content-type"]),
                  (this._data =
                    "application/x-www-form-urlencoded" == n
                      ? this._data
                        ? this._data + "&" + e
                        : e
                      : (this._data || "") + e))
                : (this._data = e);
            return !t || this._isHost(e)
              ? this
              : (n || this.type("json"), this);
          }),
          (r.prototype.sortQuery = function(e) {
            return (this._sort = void 0 === e || e), this;
          }),
          (r.prototype._finalizeQueryString = function() {
            var e = this._query.join("&");
            if (
              (e && (this.url += (this.url.indexOf("?") >= 0 ? "&" : "?") + e),
              (this._query.length = 0),
              this._sort)
            ) {
              var t = this.url.indexOf("?");
              if (t >= 0) {
                var n = this.url.substring(t + 1).split("&");
                "function" == typeof this._sort ? n.sort(this._sort) : n.sort(),
                  (this.url = this.url.substring(0, t) + "?" + n.join("&"));
              }
            }
          }),
          (r.prototype._appendQueryString = function() {
            console.trace("Unsupported");
          }),
          (r.prototype._timeoutError = function(e, t, n) {
            if (!this._aborted) {
              var r = new Error(e + t + "ms exceeded");
              (r.timeout = t),
                (r.code = "ECONNABORTED"),
                (r.errno = n),
                (this.timedout = !0),
                this.abort(),
                this.callback(r);
            }
          }),
          (r.prototype._setTimeouts = function() {
            var e = this;
            this._timeout &&
              !this._timer &&
              (this._timer = setTimeout(function() {
                e._timeoutError("Timeout of ", e._timeout, "ETIME");
              }, this._timeout)),
              this._responseTimeout &&
                !this._responseTimeoutTimer &&
                (this._responseTimeoutTimer = setTimeout(function() {
                  e._timeoutError(
                    "Response timeout of ",
                    e._responseTimeout,
                    "ETIMEDOUT"
                  );
                }, this._responseTimeout));
          });
      },
      function(e, t) {
        e.exports = function(e) {
          return null !== e && "object" == typeof e;
        };
      },
      function(e, t, n) {
        function r(e) {
          if (e)
            return (function(e) {
              for (var t in r.prototype) e[t] = r.prototype[t];
              return e;
            })(e);
        }
        var i = n(48);
        (e.exports = r),
          (r.prototype.get = function(e) {
            return this.header[e.toLowerCase()];
          }),
          (r.prototype._setHeaderProperties = function(e) {
            var t = e["content-type"] || "";
            this.type = i.type(t);
            var n = i.params(t);
            for (var r in n) this[r] = n[r];
            this.links = {};
            try {
              e.link && (this.links = i.parseLinks(e.link));
            } catch (e) {}
          }),
          (r.prototype._setStatusProperties = function(e) {
            var t = (e / 100) | 0;
            (this.status = this.statusCode = e),
              (this.statusType = t),
              (this.info = 1 == t),
              (this.ok = 2 == t),
              (this.redirect = 3 == t),
              (this.clientError = 4 == t),
              (this.serverError = 5 == t),
              (this.error = (4 == t || 5 == t) && this.toError()),
              (this.created = 201 == e),
              (this.accepted = 202 == e),
              (this.noContent = 204 == e),
              (this.badRequest = 400 == e),
              (this.unauthorized = 401 == e),
              (this.notAcceptable = 406 == e),
              (this.forbidden = 403 == e),
              (this.notFound = 404 == e),
              (this.unprocessableEntity = 422 == e);
          });
      },
      function(e, t) {
        (t.type = function(e) {
          return e.split(/ *; */).shift();
        }),
          (t.params = function(e) {
            return e.split(/ *; */).reduce(function(e, t) {
              var n = t.split(/ *= */),
                r = n.shift(),
                i = n.shift();
              return r && i && (e[r] = i), e;
            }, {});
          }),
          (t.parseLinks = function(e) {
            return e.split(/ *, */).reduce(function(e, t) {
              var n = t.split(/ *; */),
                r = n[0].slice(1, -1);
              return (e[n[1].split(/ *= */)[1].slice(1, -1)] = r), e;
            }, {});
          }),
          (t.cleanHeader = function(e, t) {
            return (
              delete e["content-type"],
              delete e["content-length"],
              delete e["transfer-encoding"],
              delete e.host,
              t && (delete e.authorization, delete e.cookie),
              e
            );
          });
      },
      function(e, t) {
        function n() {
          this._defaults = [];
        }
        [
          "use",
          "on",
          "once",
          "set",
          "query",
          "type",
          "accept",
          "auth",
          "withCredentials",
          "sortQuery",
          "retry",
          "ok",
          "redirects",
          "timeout",
          "buffer",
          "serialize",
          "parse",
          "ca",
          "key",
          "pfx",
          "cert"
        ].forEach(function(e) {
          n.prototype[e] = function() {
            return this._defaults.push({ fn: e, arguments: arguments }), this;
          };
        }),
          (n.prototype._setDefaults = function(e) {
            this._defaults.forEach(function(t) {
              e[t.fn].apply(e, t.arguments);
            });
          }),
          (e.exports = n);
      }
    ]);
  }),
  ma = t(ba),
  _a = (ba.PubNub, 1);
var wa,
  ka,
  Sa,
  Oa = {
    nextValue: function() {
      return (_a = (9301 * _a + 49297) % 233280) / 233280;
    },
    seed: function(e) {
      _a = e;
    }
  },
  xa = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
function Pa() {
  Sa = !1;
}
function Ea(e) {
  if (e) {
    if (e !== wa) {
      if (e.length !== xa.length)
        throw new Error(
          "Custom alphabet for shortid must be " +
            xa.length +
            " unique characters. You submitted " +
            e.length +
            " characters: " +
            e
        );
      var t = e.split("").filter(function(e, t, n) {
        return t !== n.lastIndexOf(e);
      });
      if (t.length)
        throw new Error(
          "Custom alphabet for shortid must be " +
            xa.length +
            " unique characters. These characters were not unique: " +
            t.join(", ")
        );
      (wa = e), Pa();
    }
  } else wa !== xa && ((wa = xa), Pa());
}
function Ta() {
  return (
    Sa ||
    (Sa = (function() {
      wa || Ea(xa);
      for (var e, t = wa.split(""), n = [], r = Oa.nextValue(); t.length > 0; )
        (r = Oa.nextValue()),
          (e = Math.floor(r * t.length)),
          n.push(t.splice(e, 1)[0]);
      return n.join("");
    })())
  );
}
var ja = {
    get: function() {
      return wa || xa;
    },
    characters: function(e) {
      return Ea(e), wa;
    },
    seed: function(e) {
      Oa.seed(e), ka !== e && (Pa(), (ka = e));
    },
    lookup: function(e) {
      return Ta()[e];
    },
    shuffled: Ta
  },
  Ca = "object" == typeof window && (window.crypto || window.msCrypto),
  Ma =
    Ca && Ca.getRandomValues
      ? function(e) {
          return Ca.getRandomValues(new Uint8Array(e));
        }
      : function(e) {
          for (var t = [], n = 0; n < e; n++)
            t.push(Math.floor(256 * Math.random()));
          return t;
        },
  Aa = function(e, t, n) {
    var r = (2 << (Math.log(t.length - 1) / Math.LN2)) - 1,
      i = Math.ceil((1.6 * r * n) / t.length);
    n = +n;
    for (var o = ""; ; )
      for (var s = e(i), a = 0; a < i; a++) {
        var u = s[a] & r;
        if (t[u] && (o += t[u]).length === n) return o;
      }
  };
var Ra,
  Na,
  Ia = function(e) {
    for (var t, n = 0, r = ""; !t; )
      (r += Aa(Ma, ja.get(), 1)), (t = e < Math.pow(16, n + 1)), n++;
    return r;
  },
  Da = 1459707606518,
  La = 6;
var Ua = function(e) {
  var t = "",
    n = Math.floor(0.001 * (Date.now() - Da));
  return (
    n === Na ? Ra++ : ((Ra = 0), (Na = n)),
    (t += Ia(La)),
    (t += Ia(e)),
    Ra > 0 && (t += Ia(Ra)),
    (t += Ia(n))
  );
};
var Ka = function(e) {
    return !(
      !e ||
      "string" != typeof e ||
      e.length < 6 ||
      new RegExp(
        "[^" + ja.get().replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&") + "]"
      ).test(e)
    );
  },
  Fa = n(function(e) {
    var t = 0;
    function n() {
      return Ua(t);
    }
    (e.exports = n),
      (e.exports.generate = n),
      (e.exports.seed = function(t) {
        return ja.seed(t), e.exports;
      }),
      (e.exports.worker = function(n) {
        return (t = n), e.exports;
      }),
      (e.exports.characters = function(e) {
        return void 0 !== e && ja.characters(e), ja.shuffled();
      }),
      (e.exports.isValid = Ka);
  }),
  Ba = (Fa.generate, Fa.seed, Fa.worker, Fa.characters, Fa.isValid, Fa),
  Ga = function() {
    return ye.Date.now();
  },
  Ha = NaN,
  za = /^\s+|\s+$/g,
  Va = /^[-+]0x[0-9a-f]+$/i,
  qa = /^0b[01]+$/i,
  $a = /^0o[0-7]+$/i,
  Wa = parseInt;
var Ja = function(e) {
    if ("number" == typeof e) return e;
    if (Mr(e)) return Ha;
    if (je(e)) {
      var t = "function" == typeof e.valueOf ? e.valueOf() : e;
      e = je(t) ? t + "" : t;
    }
    if ("string" != typeof e) return 0 === e ? e : +e;
    e = e.replace(za, "");
    var n = qa.test(e);
    return n || $a.test(e) ? Wa(e.slice(2), n ? 2 : 8) : Va.test(e) ? Ha : +e;
  },
  Xa = "Expected a function",
  Qa = Math.max,
  Ya = Math.min;
var Za = function(e, t, n) {
  var r,
    i,
    o,
    s,
    a,
    u,
    c = 0,
    l = !1,
    f = !1,
    p = !0;
  if ("function" != typeof e) throw new TypeError(Xa);
  function h(t) {
    var n = r,
      o = i;
    return (r = i = void 0), (c = t), (s = e.apply(o, n));
  }
  function d(e) {
    var n = e - u;
    return void 0 === u || n >= t || n < 0 || (f && e - c >= o);
  }
  function v() {
    var e = Ga();
    if (d(e)) return y(e);
    a = setTimeout(
      v,
      (function(e) {
        var n = t - (e - u);
        return f ? Ya(n, o - (e - c)) : n;
      })(e)
    );
  }
  function y(e) {
    return (a = void 0), p && r ? h(e) : ((r = i = void 0), s);
  }
  function g() {
    var e = Ga(),
      n = d(e);
    if (((r = arguments), (i = this), (u = e), n)) {
      if (void 0 === a)
        return (function(e) {
          return (c = e), (a = setTimeout(v, t)), l ? h(e) : s;
        })(u);
      if (f) return clearTimeout(a), (a = setTimeout(v, t)), h(u);
    }
    return void 0 === a && (a = setTimeout(v, t)), s;
  }
  return (
    (t = Ja(t) || 0),
    je(n) &&
      ((l = !!n.leading),
      (o = (f = "maxWait" in n) ? Qa(Ja(n.maxWait) || 0, t) : o),
      (p = "trailing" in n ? !!n.trailing : p)),
    (g.cancel = function() {
      void 0 !== a && clearTimeout(a), (c = 0), (r = u = i = a = void 0);
    }),
    (g.flush = function() {
      return void 0 === a ? s : y(Ga());
    }),
    g
  );
};
var eu = function(e, t, n) {
    switch (n.length) {
      case 0:
        return e.call(t);
      case 1:
        return e.call(t, n[0]);
      case 2:
        return e.call(t, n[0], n[1]);
      case 3:
        return e.call(t, n[0], n[1], n[2]);
    }
    return e.apply(t, n);
  },
  tu = Math.max;
var nu = function(e, t, n) {
  return (
    (t = tu(void 0 === t ? e.length - 1 : t, 0)),
    function() {
      for (
        var r = arguments, i = -1, o = tu(r.length - t, 0), s = Array(o);
        ++i < o;

      )
        s[i] = r[t + i];
      i = -1;
      for (var a = Array(t + 1); ++i < t; ) a[i] = r[i];
      return (a[t] = n(s)), eu(e, this, a);
    }
  );
};
var ru = function(e) {
    return function() {
      return e;
    };
  },
  iu = Xe
    ? function(e, t) {
        return Xe(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: ru(t),
          writable: !0
        });
      }
    : oi,
  ou = 800,
  su = 16,
  au = Date.now;
var uu = (function(e) {
  var t = 0,
    n = 0;
  return function() {
    var r = au(),
      i = su - (r - n);
    if (((n = r), i > 0)) {
      if (++t >= ou) return arguments[0];
    } else t = 0;
    return e.apply(void 0, arguments);
  };
})(iu);
var cu = function(e, t) {
  return uu(nu(e, t, oi), e + "");
};
var lu = function(e, t, n, r) {
  for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
    if (t(e[o], o, e)) return o;
  return -1;
};
var fu = function(e) {
  return e != e;
};
var pu = function(e, t, n) {
  for (var r = n - 1, i = e.length; ++r < i; ) if (e[r] === t) return r;
  return -1;
};
var hu = function(e, t, n) {
  return t == t ? pu(e, t, n) : lu(e, fu, n);
};
var du = function(e, t, n, r) {
  for (var i = n - 1, o = e.length; ++i < o; ) if (r(e[i], t)) return i;
  return -1;
};
var vu = function(e, t) {
    var n = -1,
      r = e.length;
    for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
    return t;
  },
  yu = Array.prototype.splice;
var gu = function(e, t, n, r) {
  var i = r ? du : hu,
    o = -1,
    s = t.length,
    a = e;
  for (e === t && (t = vu(t)), n && (a = Gr(e, gt(n))); ++o < s; )
    for (var u = 0, c = t[o], l = n ? n(c) : c; (u = i(a, l, u, r)) > -1; )
      a !== e && yu.call(a, u, 1), yu.call(e, u, 1);
  return e;
};
var bu = cu(function(e, t) {
  return e && e.length && t && t.length ? gu(e, t) : e;
});
var mu = function(e, t) {
    return kr(e, t);
  },
  _u = Object.prototype.hasOwnProperty;
var wu = function(e, t, n) {
  var r = e[t];
  (_u.call(e, t) && Rt(r, n) && (void 0 !== n || t in e)) || Qe(e, t, n);
};
var ku = function(e, t, n, r) {
  if (!je(e)) return e;
  for (
    var i = -1, o = (t = Wr(t, e)).length, s = o - 1, a = e;
    null != a && ++i < o;

  ) {
    var u = Xr(t[i]),
      c = n;
    if (i != s) {
      var l = a[u];
      void 0 === (c = r ? r(l, u, a) : void 0) &&
        (c = je(l) ? l : pt(t[i + 1]) ? [] : {});
    }
    wu(a, u, c), (a = a[u]);
  }
  return e;
};
var Su = function(e, t, n) {
    for (var r = -1, i = t.length, o = {}; ++r < i; ) {
      var s = t[r],
        a = Qr(e, s);
      n(a, s) && ku(o, Wr(s, e), a);
    }
    return o;
  },
  Ou = xt(Object.getPrototypeOf, Object),
  xu = Object.getOwnPropertySymbols
    ? function(e) {
        for (var t = []; e; ) Wn(t, er(e)), (e = Ou(e));
        return t;
      }
    : Qn;
var Pu = function(e) {
    var t = [];
    if (null != e) for (var n in Object(e)) t.push(n);
    return t;
  },
  Eu = Object.prototype.hasOwnProperty;
var Tu = function(e) {
  if (!je(e)) return Pu(e);
  var t = Ot(e),
    n = [];
  for (var r in e) ("constructor" != r || (!t && Eu.call(e, r))) && n.push(r);
  return n;
};
var ju = function(e) {
  return jt(e) ? kt(e, !0) : Tu(e);
};
var Cu = function(e) {
  return Jn(e, ju, xu);
};
var Mu = function(e, t) {
  if (null == e) return {};
  var n = Gr(Cu(e), function(e) {
    return [e];
  });
  return (
    (t = ci(t)),
    Su(e, n, function(e, n) {
      return t(e, n[0]);
    })
  );
};
var Au = function(e, t) {
  for (
    var n = -1, r = null == e ? 0 : e.length;
    ++n < r && !1 !== t(e[n], n, e);

  );
  return e;
};
var Ru = function(e, t, n, r) {
  var i = !n;
  n || (n = {});
  for (var o = -1, s = t.length; ++o < s; ) {
    var a = t[o],
      u = r ? r(n[a], e[a], a, n, e) : void 0;
    void 0 === u && (u = e[a]), i ? Qe(n, a, u) : wu(n, a, u);
  }
  return n;
};
var Nu = function(e, t) {
  return e && Ru(t, Ct(t), e);
};
var Iu = function(e, t) {
    return e && Ru(t, ju(t), e);
  },
  Du = n(function(e, t) {
    var n = t && !t.nodeType && t,
      r = n && e && !e.nodeType && e,
      i = r && r.exports === n ? ye.Buffer : void 0,
      o = i ? i.allocUnsafe : void 0;
    e.exports = function(e, t) {
      if (t) return e.slice();
      var n = e.length,
        r = o ? o(n) : new e.constructor(n);
      return e.copy(r), r;
    };
  });
var Lu = function(e, t) {
  return Ru(e, er(e), t);
};
var Uu = function(e, t) {
    return Ru(e, xu(e), t);
  },
  Ku = Object.prototype.hasOwnProperty;
var Fu = function(e) {
  var t = e.length,
    n = new e.constructor(t);
  return (
    t &&
      "string" == typeof e[0] &&
      Ku.call(e, "index") &&
      ((n.index = e.index), (n.input = e.input)),
    n
  );
};
var Bu = function(e) {
  var t = new e.constructor(e.byteLength);
  return new jn(t).set(new jn(e)), t;
};
var Gu = function(e, t) {
    var n = t ? Bu(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.byteLength);
  },
  Hu = /\w*$/;
var zu = function(e) {
    var t = new e.constructor(e.source, Hu.exec(e));
    return (t.lastIndex = e.lastIndex), t;
  },
  Vu = ge ? ge.prototype : void 0,
  qu = Vu ? Vu.valueOf : void 0;
var $u = function(e) {
  return qu ? Object(qu.call(e)) : {};
};
var Wu = function(e, t) {
    var n = t ? Bu(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length);
  },
  Ju = "[object Boolean]",
  Xu = "[object Date]",
  Qu = "[object Map]",
  Yu = "[object Number]",
  Zu = "[object RegExp]",
  ec = "[object Set]",
  tc = "[object String]",
  nc = "[object Symbol]",
  rc = "[object ArrayBuffer]",
  ic = "[object DataView]",
  oc = "[object Float32Array]",
  sc = "[object Float64Array]",
  ac = "[object Int8Array]",
  uc = "[object Int16Array]",
  cc = "[object Int32Array]",
  lc = "[object Uint8Array]",
  fc = "[object Uint8ClampedArray]",
  pc = "[object Uint16Array]",
  hc = "[object Uint32Array]";
var dc = function(e, t, n) {
    var r = e.constructor;
    switch (t) {
      case rc:
        return Bu(e);
      case Ju:
      case Xu:
        return new r(+e);
      case ic:
        return Gu(e, n);
      case oc:
      case sc:
      case ac:
      case uc:
      case cc:
      case lc:
      case fc:
      case pc:
      case hc:
        return Wu(e, n);
      case Qu:
        return new r();
      case Yu:
      case tc:
        return new r(e);
      case Zu:
        return zu(e);
      case ec:
        return new r();
      case nc:
        return $u(e);
    }
  },
  vc = Object.create,
  yc = (function() {
    function e() {}
    return function(t) {
      if (!je(t)) return {};
      if (vc) return vc(t);
      e.prototype = t;
      var n = new e();
      return (e.prototype = void 0), n;
    };
  })();
var gc = function(e) {
    return "function" != typeof e.constructor || Ot(e) ? {} : yc(Ou(e));
  },
  bc = "[object Map]";
var mc = function(e) {
    return et(e) && vr(e) == bc;
  },
  _c = bt && bt.isMap,
  wc = _c ? gt(_c) : mc,
  kc = "[object Set]";
var Sc = function(e) {
    return et(e) && vr(e) == kc;
  },
  Oc = bt && bt.isSet,
  xc = Oc ? gt(Oc) : Sc,
  Pc = 1,
  Ec = 2,
  Tc = 4,
  jc = "[object Arguments]",
  Cc = "[object Function]",
  Mc = "[object GeneratorFunction]",
  Ac = "[object Object]",
  Rc = {};
(Rc[jc] = Rc["[object Array]"] = Rc["[object ArrayBuffer]"] = Rc[
  "[object DataView]"
] = Rc["[object Boolean]"] = Rc["[object Date]"] = Rc[
  "[object Float32Array]"
] = Rc["[object Float64Array]"] = Rc["[object Int8Array]"] = Rc[
  "[object Int16Array]"
] = Rc["[object Int32Array]"] = Rc["[object Map]"] = Rc["[object Number]"] = Rc[
  Ac
] = Rc["[object RegExp]"] = Rc["[object Set]"] = Rc["[object String]"] = Rc[
  "[object Symbol]"
] = Rc["[object Uint8Array]"] = Rc["[object Uint8ClampedArray]"] = Rc[
  "[object Uint16Array]"
] = Rc["[object Uint32Array]"] = !0),
  (Rc["[object Error]"] = Rc[Cc] = Rc["[object WeakMap]"] = !1);
var Nc = function e(t, n, r, i, o, s) {
    var a,
      u = n & Pc,
      c = n & Ec,
      l = n & Tc;
    if ((r && (a = o ? r(t, i, o, s) : r(t)), void 0 !== a)) return a;
    if (!je(t)) return t;
    var f = at(t);
    if (f) {
      if (((a = Fu(t)), !u)) return vu(t, a);
    } else {
      var p = vr(t),
        h = p == Cc || p == Mc;
      if (ct(t)) return Du(t, u);
      if (p == Ac || p == jc || (h && !o)) {
        if (((a = c || h ? {} : gc(t)), !u))
          return c ? Uu(t, Iu(a, t)) : Lu(t, Nu(a, t));
      } else {
        if (!Rc[p]) return o ? t : {};
        a = dc(t, p, u);
      }
    }
    s || (s = new bn());
    var d = s.get(t);
    if (d) return d;
    s.set(t, a),
      xc(t)
        ? t.forEach(function(i) {
            a.add(e(i, n, r, i, t, s));
          })
        : wc(t) &&
          t.forEach(function(i, o) {
            a.set(o, e(i, n, r, o, t, s));
          });
    var v = l ? (c ? Cu : tr) : c ? keysIn : Ct,
      y = f ? void 0 : v(t);
    return (
      Au(y || t, function(i, o) {
        y && (i = t[(o = i)]), wu(a, o, e(i, n, r, o, t, s));
      }),
      a
    );
  },
  Ic = 1,
  Dc = 4;
var Lc = function(e) {
  return Nc(e, Ic | Dc);
};
var Uc = function(e, t) {
  return !(null == e || !e.length) && hu(e, t, 0) > -1;
};
var Kc = function(e, t, n) {
    for (var r = -1, i = null == e ? 0 : e.length; ++r < i; )
      if (n(t, e[r])) return !0;
    return !1;
  },
  Fc = 200;
var Bc = function(e, t, n, r) {
    var i = -1,
      o = Uc,
      s = !0,
      a = e.length,
      u = [],
      c = t.length;
    if (!a) return u;
    n && (t = Gr(t, gt(n))),
      r
        ? ((o = Kc), (s = !1))
        : t.length >= Fc && ((o = xn), (s = !1), (t = new Sn(t)));
    e: for (; ++i < a; ) {
      var l = e[i],
        f = null == n ? l : n(l);
      if (((l = r || 0 !== l ? l : 0), s && f == f)) {
        for (var p = c; p--; ) if (t[p] === f) continue e;
        u.push(l);
      } else o(t, f, r) || u.push(l);
    }
    return u;
  },
  Gc = ge ? ge.isConcatSpreadable : void 0;
var Hc = function(e) {
  return at(e) || st(e) || !!(Gc && e && e[Gc]);
};
var zc = function e(t, n, r, i, o) {
  var s = -1,
    a = t.length;
  for (r || (r = Hc), o || (o = []); ++s < a; ) {
    var u = t[s];
    n > 0 && r(u)
      ? n > 1
        ? e(u, n - 1, r, i, o)
        : Wn(o, u)
      : i || (o[o.length] = u);
  }
  return o;
};
var Vc,
  qc = function(e) {
    return et(e) && jt(e);
  },
  $c =
    (cu(function(e, t) {
      return qc(e) ? Bc(e, zc(t, 1, qc, !0)) : [];
    }),
    ((Vc = Object.freeze({
      default: [
        "assert",
        "buffer",
        "child_process",
        "cluster",
        "console",
        "constants",
        "crypto",
        "dgram",
        "dns",
        "domain",
        "events",
        "fs",
        "http",
        "https",
        "module",
        "net",
        "os",
        "path",
        "process",
        "punycode",
        "querystring",
        "readline",
        "repl",
        "stream",
        "string_decoder",
        "timers",
        "tls",
        "tty",
        "url",
        "util",
        "v8",
        "vm",
        "zlib"
      ]
    })) &&
      Vc.default) ||
      Vc),
  Wc = n(function(e) {
    var t = new RegExp("^(?:@([^/]+?)[/])?([^/]+?)$"),
      n = ["node_modules", "favicon.ico"];
    (e.exports = function(e) {
      var i = [],
        o = [];
      if (null === e) return o.push("name cannot be null"), r(i, o);
      if (void 0 === e) return o.push("name cannot be undefined"), r(i, o);
      if ("string" != typeof e) return o.push("name must be a string"), r(i, o);
      if (
        (e.length || o.push("name length must be greater than zero"),
        e.match(/^\./) && o.push("name cannot start with a period"),
        e.match(/^_/) && o.push("name cannot start with an underscore"),
        e.trim() !== e &&
          o.push("name cannot contain leading or trailing spaces"),
        n.forEach(function(t) {
          e.toLowerCase() === t && o.push(t + " is a blacklisted name");
        }),
        $c.forEach(function(t) {
          e.toLowerCase() === t && i.push(t + " is a core module name");
        }),
        e.length > 214 &&
          i.push("name can no longer contain more than 214 characters"),
        e.toLowerCase() !== e &&
          i.push("name can no longer contain capital letters"),
        /[~'!()*]/.test(e.split("/").slice(-1)[0]) &&
          i.push('name can no longer contain special characters ("~\'!()*")'),
        encodeURIComponent(e) !== e)
      ) {
        var s = e.match(t);
        if (s) {
          var a = s[1],
            u = s[2];
          if (encodeURIComponent(a) === a && encodeURIComponent(u) === u)
            return r(i, o);
        }
        o.push("name can only contain URL-friendly characters");
      }
      return r(i, o);
    }).scopedPackagePattern = t;
    var r = function(e, t) {
      var n = {
        validForNewPackages: 0 === t.length && 0 === e.length,
        validForOldPackages: 0 === t.length,
        warnings: e,
        errors: t
      };
      return (
        n.warnings.length || delete n.warnings,
        n.errors.length || delete n.errors,
        n
      );
    };
  });
function Jc(e) {
  var t = e.sdkVersion,
    n = e.snackId,
    r = e.channel,
    i = e.host,
    o = void 0;
  return (
    (o = i.includes("snack.expo.io")
      ? i.replace("snack.expo.io", "expo.io")
      : i.includes("next-snack.expo.io")
      ? i.replace("next-snack.expo.io", "expo.io")
      : i),
    n
      ? n.startsWith("@")
        ? "exp://" + o + "/" + n + "+" + r
        : "exp://" + o + "/@snack/" + n + "+" + r
      : "exp://" + o + "/@snack/sdk." + t + "-" + r
  );
}
var Xc,
  Qc = null,
  Yc =
    ((Xc = fa(
      la.mark(function e(t) {
        return la.wrap(
          function(e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (t.deviceId || t.user.idToken || t.user.sessionSecret) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return", new ia(function() {}));
                case 2:
                  return (
                    Zc(),
                    (Qc = setInterval(function() {
                      nl(t);
                    }, 4e4)),
                    e.abrupt("return", nl(t))
                  );
                case 5:
                case "end":
                  return e.stop();
              }
          },
          e,
          this
        );
      })
    )),
    function(e) {
      return Xc.apply(this, arguments);
    });
function Zc() {
  clearInterval(Qc), (Qc = null);
}
var el,
  tl,
  nl =
    ((el = fa(
      la.mark(function e(t) {
        var n,
          r,
          i,
          o = t.name,
          s = t.snackId,
          a = t.sdkVersion,
          u = t.channel,
          c = t.host,
          l = t.apiUrl,
          f = t.user,
          p = t.deviceId;
        return la.wrap(
          function(e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (f || p) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return");
                case 2:
                  return (
                    (n = Jc({
                      snackId: s,
                      sdkVersion: a,
                      channel: u,
                      host: c
                    })),
                    (r = l + "/--/api/v2/development-sessions/notify-alive"),
                    (i = o || "Unnamed Snack"),
                    (e.next = 7),
                    rl(f, p)(r, {
                      data: {
                        session: {
                          description: s ? i + " (" + s + ")" : i,
                          hostname: "snack",
                          config: {},
                          url: n,
                          source: "snack"
                        }
                      }
                    })
                  );
                case 7:
                case "end":
                  return e.stop();
              }
          },
          e,
          this
        );
      })
    )),
    function(e) {
      return el.apply(this, arguments);
    }),
  rl = function(e, t) {
    return (
      (n = fa(
        la.mark(function n(r, i) {
          var o, s, a, u, c, l;
          return la.wrap(
            function(n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (
                      (o = e.idToken),
                      (s = e.sessionSecret),
                      (a = ya(
                        {},
                        o ? { Authorization: "Bearer " + o } : {},
                        s ? { "Expo-Session": s } : {},
                        { "Content-Type": "application/json" }
                      )),
                      (u = { method: "post", body: no(i), headers: a }),
                      (c = r),
                      t && (c = r + "?deviceId=" + t),
                      (n.next = 7),
                      fetch(c, u)
                    );
                  case 7:
                    if ((l = n.sent).ok) {
                      n.next = 10;
                      break;
                    }
                    throw Error(l.statusText);
                  case 10:
                    return n.abrupt("return", l);
                  case 11:
                  case "end":
                    return n.stop();
                }
            },
            n,
            void 0
          );
        })
      )),
      function(e, t) {
        return n.apply(this, arguments);
      }
    );
    var n;
  },
  il = require("diff"),
  ol = {
    getFileDiff: function(e, t) {
      var n = il.createPatch("code", e, t, "", "", { context: 0 });
      if (n) return n;
      throw new Error("Error creating a file diff");
    },
    calcPayloadSize: function(e, t) {
      return encodeURIComponent(e + no(t)).length + 5e3;
    },
    uploadCodeToS3: (function() {
      var e = fa(
        la.mark(function e(t, n) {
          var r, i, o;
          return la.wrap(
            function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = n + "/--/api/v2/snack/uploadCode"),
                      (e.prev = 1),
                      (e.next = 4),
                      fetch(r, {
                        method: "POST",
                        body: no({ code: t }),
                        headers: { "Content-Type": "application/json" }
                      })
                    );
                  case 4:
                    return (i = e.sent), (e.next = 7), i.json();
                  case 7:
                    return (o = e.sent), e.abrupt("return", o.url);
                  case 11:
                    throw ((e.prev = 11),
                    (e.t0 = e.catch(1)),
                    new Error("Unable to upload code to S3: " + e.t0.message));
                  case 14:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0,
            [[1, 11]]
          );
        })
      );
      return function(t, n) {
        return e.apply(this, arguments);
      };
    })(),
    uploadAssetToS3:
      ((tl = fa(
        la.mark(function e(t, n) {
          var r, i, o, s;
          return la.wrap(
            function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = n + "/--/api/v2/snack/uploadAsset"),
                      (i = new FormData()).append("asset", t, t.name),
                      (e.prev = 3),
                      (e.next = 6),
                      fetch(r, { method: "POST", body: i })
                    );
                  case 6:
                    return (o = e.sent), (e.next = 9), o.json();
                  case 9:
                    return (s = e.sent), e.abrupt("return", s.url);
                  case 13:
                    throw ((e.prev = 13),
                    (e.t0 = e.catch(3)),
                    new Error("Unable to upload asset to S3: " + e.t0.message));
                  case 16:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0,
            [[3, 13]]
          );
        })
      )),
      function(e, t) {
        return tl.apply(this, arguments);
      })
  };
function sl(e, t) {
  return !!K.includes(e) || (!!F[t] && e in F[t]);
}
var al = null;
Ba.characters(
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!_"
);
var ul = function e(t) {
    var n = this;
    if (
      (ga(this, e),
      cl.call(this),
      (this.disableDevSession = t.disableDevSession || !1),
      (this.isResolving = !1),
      (this.files = t.files),
      (this.diff = {}),
      (this.s3url = {}),
      (this.s3code = {}),
      (this.sdkVersion = t.sdkVersion || "33.0.0"),
      (this.isVerbose = !!t.verbose),
      (this.channel = t.sessionId || Ba.generate()),
      (this.host = t.host || "expo.io"),
      (this.expoApiUrl = "https://expo.io"),
      (this.snackagerUrl = "https://snackager.expo.io"),
      (this.snackagerCloudfrontUrl = "https://d37p21p3n8r8ug.cloudfront.net"),
      t.authorizationToken &&
        console.warn(
          "authorizationToken has been deprecrated. see options.user"
        ),
      t.sessionSecret &&
        console.warn("sessionSecret has been deprecrated. see options.user"),
      (this.user = t.user || {}),
      (this.user = ya(
        { idToken: t.authorizationToken, sessionSecret: t.sessionSecret },
        this.user
      )),
      (this.deviceId = t.deviceId),
      (this.snackId = t.snackId),
      (this.name = t.name),
      (this.description = t.description),
      (this.dependencies = t.dependencies || {}),
      (this.initialState = Lc({
        files: t.files,
        name: this.name,
        description: this.description,
        dependencies: this.dependencies,
        sdkVersion: this.sdkVersion
      })),
      this.channel.length < 6)
    )
      throw new Error("Please use a channel id with more entropy");
    (this.pubnub = new ma({
      publishKey: "pub-c-2a7fd67b-333d-40db-ad2d-3255f8835f70",
      subscribeKey: "sub-c-0b655000-d784-11e6-b950-02ee2ddab7fe",
      ssl: !0,
      presenceTimeout: 600,
      heartbeatInterval: 60
    })),
      this.pubnub.addListener({
        message: function(e) {
          var t = e.message;
          switch (t.type) {
            case "CONSOLE":
              n._handleLogMessage(t);
              break;
            case "ERROR":
              n._handleErrorMessage(t);
              break;
            case "RESEND_CODE":
              n._handleResendCodeMessage();
              break;
            case "STATUS_REPORT":
              n._handleStatusReport(t);
          }
        },
        presence: function(e) {
          var t = e.action,
            r = e.uuid,
            i = void 0;
          try {
            i = JSON.parse(r);
          } catch (e) {
            return;
          }
          switch (t) {
            case "join":
              n._handleJoinMessage(i);
              break;
            case "timeout":
            case "leave":
              n._handleLeaveMessage(i);
          }
        },
        status: function(e) {
          switch (e.category) {
            case "PNConnectedCategory":
              break;
            case "PNNetworkDownCategory":
            case "PNNetworkIssuesCategory":
              n._log("Lost network connection.");
              break;
            case "PNReconnectedCategory":
              n._log("Reconnected to PubNub server.");
              break;
            case "PNNetworkUpCategory":
              n._log("Detected network connection. Subscribing to channel."),
                n._subscribe();
          }
        }
      });
  },
  cl = function() {
    var e,
      t,
      n,
      i,
      o,
      a,
      u,
      c,
      l,
      f,
      p,
      h = this;
    (this.errorListeners = []),
      (this.logListeners = []),
      (this.presenceListeners = []),
      (this.stateListeners = []),
      (this.startAsync = fa(
        la.mark(function e() {
          return la.wrap(
            function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (h.isStarted = !0),
                      h._subscribe(),
                      h._startDevSessionAsync();
                  case 3:
                  case "end":
                    return e.stop();
                }
            },
            e,
            h
          );
        })
      )),
      (this.stopAsync = fa(
        la.mark(function e() {
          return la.wrap(
            function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (h.s3url = {}), h._unsubscribe(), h._stopDevSession();
                  case 3:
                  case "end":
                    return e.stop();
                }
            },
            e,
            h
          );
        })
      )),
      (this._startDevSessionAsync = function() {
        return h.disableDevSession
          ? new ia(function() {})
          : Yc({
              name: h.name,
              snackId: h.snackId,
              sdkVersion: h.sdkVersion,
              channel: h.channel,
              host: h.host,
              apiUrl: h.expoApiUrl,
              user: h.user,
              deviceId: h.deviceId
            });
      }),
      (this._updateDevSession = function() {
        return h._startDevSessionAsync();
      }),
      (this._stopDevSession = function() {
        Zc();
      }),
      (this.getUrlAsync = fa(
        la.mark(function e() {
          var t;
          return la.wrap(
            function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = Jc({
                        sdkVersion: h.sdkVersion,
                        snackId: h.snackId,
                        channel: h.channel,
                        host: h.host
                      })),
                      e.abrupt("return", t)
                    );
                  case 2:
                  case "end":
                    return e.stop();
                }
            },
            e,
            h
          );
        })
      )),
      (this.uploadAssetAsync =
        ((e = fa(
          la.mark(function e(t) {
            return la.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        ol.uploadAssetToS3(t, h.expoApiUrl)
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              h
            );
          })
        )),
        function(t) {
          return e.apply(this, arguments);
        })),
      (this.sendCodeAsync =
        ((t = fa(
          la.mark(function e(t) {
            var n, r;
            return la.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      for (n in h.files)
                        t.hasOwnProperty(n) ||
                          (delete h.diff[n], delete h.files[n]);
                      e.t0 = la.keys(t);
                    case 2:
                      if ((e.t1 = e.t0()).done) {
                        e.next = 12;
                        break;
                      }
                      if (
                        ((r = e.t1.value), h.files[r] && h.files[r] === t[r])
                      ) {
                        e.next = 10;
                        break;
                      }
                      if (
                        ((h.files[r] = t[r]),
                        "ASSET" !== h.files[r].type ||
                          "object" !== rs(h.files[r].contents))
                      ) {
                        e.next = 10;
                        break;
                      }
                      return (
                        (e.next = 9),
                        ol.uploadAssetToS3(h.files[r].contents, h.expoApiUrl)
                      );
                    case 9:
                      h.files[r].contents = e.sent;
                    case 10:
                      e.next = 2;
                      break;
                    case 12:
                      h._publish(), h._sendStateEvent();
                    case 14:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              h
            );
          })
        )),
        function(e) {
          return t.apply(this, arguments);
        })),
      (this.downloadAsync = fa(
        la.mark(function e() {
          var t, n, r;
          return la.wrap(
            function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = h.expoApiUrl + "/--/api/v2/snack/download"),
                      (e.next = 3),
                      h.saveAsync()
                    );
                  case 3:
                    return (
                      (n = e.sent),
                      (r = n.id),
                      e.abrupt("return", { url: t + "/" + r })
                    );
                  case 6:
                  case "end":
                    return e.stop();
                }
            },
            e,
            h
          );
        })
      )),
      (this.reloadSnack = function() {
        h.pubnub.publish(
          { channel: h.channel, message: { type: "RELOAD_SNACK" } },
          function(e, t) {
            e.error
              ? h._error("Error reloading app")
              : h._log("Reloaded successfully!");
          }
        );
      }),
      (this.setSdkVersion = function(e) {
        h.sdkVersion !== e &&
          ((h.sdkVersion = e), h._sendStateEvent(), h._updateDevSession());
      }),
      (this.setName = function(e) {
        h.name !== e &&
          ((h.name = e), h._updateDevSession(), h._sendStateEvent());
      }),
      (this.setUser = function(e) {
        h.user !== e &&
          ((h.user = e), h._updateDevSession(), h._sendStateEvent());
      }),
      (this.setDescription = function(e) {
        h.description !== e && ((h.description = e), h._sendStateEvent());
      }),
      (this.setSessionSecret = function(e) {
        console.warn("sessionSecret has been deprecrated. see options.user"),
          h.setUser({ sessionSecret: e }),
          h._updateDevSession(),
          h._sendStateEvent();
      }),
      (this.setAuthorizationToken = function(e) {
        console.warn(
          "authorizationToken has been deprecrated. see options.user"
        ),
          h.setUser({ idToken: e }),
          h._updateDevSession(),
          h._sendStateEvent();
      }),
      (this.setDeviceId = function(e) {
        return (h.deviceId = e), h._updateDevSession();
      }),
      (this.addErrorListener = function(e) {
        return (
          h.errorListeners.push(e),
          {
            remove: function() {
              bu(h.errorListeners, e);
            }
          }
        );
      }),
      (this.addLogListener = function(e) {
        return (
          h.logListeners.push(e),
          {
            remove: function() {
              bu(h.logListeners, e);
            }
          }
        );
      }),
      (this.addPresenceListener = function(e) {
        return (
          h.presenceListeners.push(e),
          {
            remove: function() {
              bu(h.presenceListeners, e);
            }
          }
        );
      }),
      (this.addStateListener = function(e) {
        return (
          h.stateListeners.push(e),
          {
            remove: function() {
              bu(h.stateListeners, e);
            }
          }
        );
      }),
      (this.saveAsync = fa(
        la.mark(function e() {
          var t,
            n,
            r,
            i,
            o,
            s,
            a =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { isDraft: !1 };
          return la.wrap(
            function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = h.expoApiUrl + "/--/api/v2/snack/save"),
                      ((n = {
                        sdkVersion: h.sdkVersion,
                        name: h.name,
                        description: h.description
                      }).dependencies = fi(h.dependencies, !1)),
                      (r = {
                        manifest: n,
                        code: h.files,
                        dependencies: h.dependencies,
                        isDraft: a.isDraft
                      }),
                      (e.prev = 4),
                      (e.next = 7),
                      fetch(t, {
                        method: "POST",
                        body: no(r),
                        headers: ya(
                          { "Content-Type": "application/json" },
                          h.user.idToken
                            ? { Authorization: "Bearer " + h.user.idToken }
                            : {},
                          h.user.sessionSecret
                            ? { "Expo-Session": h.user.sessionSecret }
                            : {}
                        )
                      })
                    );
                  case 7:
                    return (i = e.sent), (e.next = 10), i.json();
                  case 10:
                    if (!(o = e.sent).id) {
                      e.next = 21;
                      break;
                    }
                    return (
                      (h.initialState = Lc({
                        sdkVersion: h.sdkVersion,
                        files: h.files,
                        name: h.name,
                        description: h.description,
                        dependencies: h.dependencies
                      })),
                      h._sendStateEvent(),
                      (s = void 0),
                      (s = o.id.match(/.*\/.*/) ? o.id : "@snack/" + o.id),
                      h._requestStatus(),
                      (h.snackId = o.id),
                      e.abrupt("return", {
                        id: o.id,
                        url: "https://expo.io/" + s
                      })
                    );
                  case 21:
                    throw new Error(
                      (o.errors && o.errors[0] && o.errors[0].message) ||
                        "Failed to save code"
                    );
                  case 22:
                    e.next = 28;
                    break;
                  case 24:
                    throw ((e.prev = 24),
                    (e.t0 = e.catch(4)),
                    console.error(e.t0),
                    e.t0);
                  case 28:
                  case "end":
                    return e.stop();
                }
            },
            e,
            h,
            [[4, 24]]
          );
        })
      )),
      (this._requestStatus = function() {
        if (h.pubnub) {
          h.pubnub.publish(
            { channel: h.channel, message: { type: "REQUEST_STATUS" } },
            function(e, t) {
              e.error
                ? h._error("Error requesting status: " + e.error)
                : h._log("Requested Status");
            }
          );
        }
      }),
      (this.getState = function() {
        return {
          files: h.files,
          sdkVersion: h.sdkVersion,
          name: h.name,
          description: h.description,
          dependencies: h.dependencies,
          isSaved: h._isSaved(),
          isResolving: h.isResolving,
          loadingMessage: h.loadingMessage
        };
      }),
      (this.getChannel = function() {
        return h.channel;
      }),
      (this.supportsFeature = function(e) {
        return s(h.sdkVersion, e);
      }),
      (this.addModuleAsync =
        ((n = fa(
          la.mark(function e(t, n) {
            var r;
            return la.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = (function() {
                          var e = fa(
                            la.mark(function e() {
                              return la.wrap(
                                function(e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (e.next = 3),
                                          h._addModuleAsync(
                                            t,
                                            n,
                                            h.dependencies
                                          )
                                        );
                                      case 3:
                                        h.dependencies = e.sent;
                                      case 4:
                                        return (
                                          (e.prev = 4),
                                          h._sendStateEvent(),
                                          h._publish(),
                                          e.finish(4)
                                        );
                                      case 8:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                h,
                                [[0, , 4, 8]]
                              );
                            })
                          );
                          return function() {
                            return e.apply(this, arguments);
                          };
                        })()),
                        e.abrupt(
                          "return",
                          (h._lastInstall = h._lastInstall.then(r, r))
                        )
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              h
            );
          })
        )),
        function(e, t) {
          return n.apply(this, arguments);
        })),
      (this.removeModuleAsync =
        ((i = fa(
          la.mark(function e(t) {
            return la.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (h.dependencies = Mu(h.dependencies, function(e, n) {
                        return n !== t;
                      })),
                        h._sendStateEvent(),
                        h._publish();
                    case 3:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              h
            );
          })
        )),
        function(e) {
          return i.apply(this, arguments);
        })),
      (this.syncDependenciesAsync =
        ((o = fa(
          la.mark(function e(t, n) {
            var r;
            return la.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = (function() {
                          var e = fa(
                            la.mark(function e() {
                              var r, i, o, s, a, u, c;
                              return la.wrap(
                                function(e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        (r = Mu(h.dependencies, function(e, n) {
                                          return t.hasOwnProperty(n);
                                        })),
                                          (i = !0),
                                          (o = !1),
                                          (s = void 0),
                                          (e.prev = 4),
                                          (a = Zi(he(t)));
                                      case 6:
                                        if ((i = (u = a.next()).done)) {
                                          e.next = 20;
                                          break;
                                        }
                                        return (
                                          (c = u.value),
                                          (e.prev = 8),
                                          (e.next = 11),
                                          h._addModuleAsync(c, t[c], r)
                                        );
                                      case 11:
                                        (r = e.sent), (e.next = 17);
                                        break;
                                      case 14:
                                        (e.prev = 14),
                                          (e.t0 = e.catch(8)),
                                          n(c, e.t0);
                                      case 17:
                                        (i = !0), (e.next = 6);
                                        break;
                                      case 20:
                                        e.next = 26;
                                        break;
                                      case 22:
                                        (e.prev = 22),
                                          (e.t1 = e.catch(4)),
                                          (o = !0),
                                          (s = e.t1);
                                      case 26:
                                        (e.prev = 26),
                                          (e.prev = 27),
                                          !i && a.return && a.return();
                                      case 29:
                                        if (((e.prev = 29), !o)) {
                                          e.next = 32;
                                          break;
                                        }
                                        throw s;
                                      case 32:
                                        return e.finish(29);
                                      case 33:
                                        return e.finish(26);
                                      case 34:
                                        mu(r, h.dependencies) ||
                                          ((h.dependencies = r),
                                          h._sendStateEvent(),
                                          h._publish());
                                      case 35:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                h,
                                [[4, 22, 26, 34], [8, 14], [27, , 29, 33]]
                              );
                            })
                          );
                          return function() {
                            return e.apply(this, arguments);
                          };
                        })()),
                        e.abrupt(
                          "return",
                          (h._lastModuleSync = h._lastModuleSync.then(r, r))
                        )
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              h
            );
          })
        )),
        function(e, t) {
          return o.apply(this, arguments);
        })),
      (this._lastInstall = ia.resolve()),
      (this._lastModuleSync = ia.resolve()),
      (this._sendErrorEvent = function(e) {
        h.errorListeners.forEach(function(t) {
          return t(e);
        });
      }),
      (this._sendLogEvent = function(e) {
        h.logListeners.forEach(function(t) {
          return t(e);
        });
      }),
      (this._sendPresenceEvent = function(e, t) {
        h.presenceListeners.forEach(function(n) {
          return n({ device: e, status: t });
        });
      }),
      (this._isSaved = function() {
        var e = h.files,
          t = h.name,
          n = h.description,
          r = h.dependencies,
          i = h.sdkVersion,
          o = h.initialState;
        return mu(o, {
          files: e,
          name: t,
          description: n,
          dependencies: r,
          sdkVersion: i
        });
      }),
      (this._sendStateEvent = function() {
        h.stateListeners.forEach(function(e) {
          return e(h.getState());
        });
      }),
      (this._subscribe = function() {
        h.pubnub.subscribe({ channels: [h.channel], withPresence: !0 });
      }),
      (this._unsubscribe = function() {
        h.pubnub.unsubscribe({ channels: [h.channel] });
      }),
      (this._handleUploadCodeAsync = fa(
        la.mark(function e() {
          var t, n, r;
          return la.wrap(
            function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (t = []), (e.next = 3), h._uploadHelper(t);
                  case 3:
                    if (
                      !(
                        (n = ol.calcPayloadSize(h.channel, {
                          diff: h.diff,
                          s3url: h.s3url
                        })) > 31500
                      )
                    ) {
                      e.next = 16;
                      break;
                    }
                    t.sort(function(e, t) {
                      return e.size - t.size;
                    });
                  case 6:
                    if (!(n > 31500 && t.length)) {
                      e.next = 16;
                      break;
                    }
                    return (
                      (r = t.pop().name),
                      (h.s3code[r] = h.files[r].contents),
                      (h.diff[r] = ""),
                      (e.next = 12),
                      ol.uploadCodeToS3(h.files[r].contents, h.expoApiUrl)
                    );
                  case 12:
                    (h.s3url[r] = e.sent),
                      (n = ol.calcPayloadSize(h.channel, {
                        diff: h.diff,
                        s3url: h.s3url
                      })),
                      (e.next = 6);
                    break;
                  case 16:
                  case "end":
                    return e.stop();
                }
            },
            e,
            h
          );
        })
      )),
      (this._uploadHelper =
        ((a = fa(
          la.mark(function e(t) {
            return la.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        ia.all(
                          he(h.files).map(
                            (function() {
                              var e = fa(
                                la.mark(function e(n) {
                                  return la.wrap(
                                    function(e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            if (h.files[n]) {
                                              e.next = 4;
                                              break;
                                            }
                                            return e.abrupt("return");
                                          case 4:
                                            if (
                                              "object" !==
                                              rs(h.files[n].contents)
                                            ) {
                                              e.next = 12;
                                              break;
                                            }
                                            return (
                                              (h.s3code[n] =
                                                h.files[n].contents),
                                              (h.diff[n] = ""),
                                              (e.next = 9),
                                              ol.uploadAssetToS3(
                                                h.files[n].contents,
                                                h.expoApiUrl
                                              )
                                            );
                                          case 9:
                                            (h.s3url[n] = e.sent),
                                              (e.next = 13);
                                            break;
                                          case 12:
                                            h.files[n].contents.startsWith(
                                              "https://snack-code-uploads"
                                            )
                                              ? ((h.diff[n] = ""),
                                                (h.s3code[n] =
                                                  h.files[n].contents),
                                                (h.s3url[n] =
                                                  h.files[n].contents))
                                              : h.s3url[n]
                                              ? (h.diff[n] = ol.getFileDiff(
                                                  h.s3code[n],
                                                  h.files[n].contents
                                                ))
                                              : (h.diff[n] = ol.getFileDiff(
                                                  "",
                                                  h.files[n].contents
                                                ));
                                          case 13:
                                            t.push({
                                              name: n,
                                              size: h.diff[n].length
                                            });
                                          case 14:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e,
                                    h
                                  );
                                })
                              );
                              return function(t) {
                                return e.apply(this, arguments);
                              };
                            })()
                          )
                        )
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              h
            );
          })
        )),
        function(e) {
          return a.apply(this, arguments);
        })),
      (this._handleLogMessage = function(e) {
        var t = e.payload || [],
          n = {
            device: e.device,
            method: e.method,
            message: t.join(" "),
            arguments: t
          };
        h._sendLogEvent(n);
      }),
      (this._handleErrorMessage = function(e) {
        var t = e.error,
          n = e.device;
        if (t) {
          var r = JSON.parse(t),
            i = { message: r.message || "", device: n, stack: r.stack };
          r.line && (i.startLine = i.endLine = r.line),
            r.column && (i.startColumn = i.endColumn = r.column),
            r.loc &&
              ((i.startLine = i.endLine = r.loc.line),
              (i.startColumn = i.endColumn = r.loc.column)),
            h._sendErrorEvent([i]);
        } else h._sendErrorEvent([]);
      }),
      (this._handleResendCodeMessage = function() {
        h._publishNotDebouncedAsync();
      }),
      (this._handleStatusReport =
        ((u = fa(
          la.mark(function e(t) {
            var n, r, i, o, s, a;
            return la.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = h.expoApiUrl + "/--/api/v2/snack/updateMetadata"),
                        (r = t.previewLocation),
                        (i = t.status),
                        (o = { id: h.snackId, previewLocation: r, status: i }),
                        (e.prev = 3),
                        (e.next = 6),
                        fetch(n, {
                          method: "POST",
                          body: no(o),
                          headers: { "Content-Type": "application/json" }
                        })
                      );
                    case 6:
                      return (s = e.sent), (e.next = 9), s.json();
                    case 9:
                      if (!(a = e.sent).id) {
                        e.next = 14;
                        break;
                      }
                      return e.abrupt("return", { id: a.id });
                    case 14:
                      throw new Error(
                        (a.errors && a.errors[0] && a.errors[0].message) ||
                          "Failed to save code"
                      );
                    case 15:
                      e.next = 21;
                      break;
                    case 17:
                      throw ((e.prev = 17),
                      (e.t0 = e.catch(3)),
                      console.error(e.t0),
                      e.t0);
                    case 21:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              h,
              [[3, 17]]
            );
          })
        )),
        function(e) {
          return u.apply(this, arguments);
        })),
      (this._handleJoinMessage = function(e) {
        h._publishNotDebouncedAsync(), h._sendPresenceEvent(e, "join");
      }),
      (this._handleLeaveMessage = function(e) {
        h._sendPresenceEvent(e, "leave");
      }),
      (this._publishNotDebouncedAsync = fa(
        la.mark(function e() {
          var t, n;
          return la.wrap(
            function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!h.loadingMessage) {
                      e.next = 4;
                      break;
                    }
                    h._sendLoadingEvent(), (e.next = 12);
                    break;
                  case 4:
                    if (!h.isResolving) {
                      e.next = 6;
                      break;
                    }
                    return e.abrupt("return");
                  case 6:
                    return (
                      (t = h._getAnalyticsMetadata()),
                      (n = void 0),
                      (e.next = 10),
                      h._handleUploadCodeAsync()
                    );
                  case 10:
                    (n = {
                      type: "CODE",
                      diff: Lc(h.diff),
                      s3url: Lc(h.s3url),
                      dependencies: h.dependencies,
                      metadata: t
                    }),
                      h.pubnub.publish(
                        { channel: h.channel, message: n },
                        function(e, t) {
                          e.error
                            ? h._error("Error publishing code: " + e.error)
                            : h._log("Published successfully!");
                        }
                      );
                  case 12:
                  case "end":
                    return e.stop();
                }
            },
            e,
            h
          );
        })
      )),
      (this._sendLoadingEvent = function() {
        if (h.loadingMessage) {
          var e = { type: "LOADING_MESSAGE", message: h.loadingMessage };
          h.pubnub &&
            h.pubnub.publish({ channel: h.channel, message: e }, function(
              e,
              t
            ) {
              e.error
                ? h._error("Error publishing loading event: " + e.error)
                : h._log(
                    "Sent loading event with message: " +
                      (h.loadingMessage || "")
                  );
            });
        }
      }),
      (this._getAnalyticsMetadata = function() {
        var e = { expoSdkVersion: h.sdkVersion };
        try {
          e = ya({}, e, {
            webSnackSdkVersion: "2.2.1"
          });
        } catch (e) {}
        if (
          ("undefined" != typeof window &&
            (e = ya({}, e, { webHostname: window.location.hostname })),
          "undefined" != typeof navigator)
        ) {
          if (!al)
            try {
              al = require("platform");
            } catch (e) {}
          if (al) {
            var t = al.parse(navigator.userAgent),
              n = t.os || {};
            e = ya({}, e, {
              webOSArchitecture: n.architecture,
              webOSFamily: n.family,
              webOSVersion: n.version,
              webLayoutEngine: t.layout,
              webDeviceType: t.product,
              webBrowser: t.name,
              webBrowserVersion: t.version,
              webDescription: t.description
            });
          }
        }
        return e;
      }),
      (this._publish = Za(this._publishNotDebouncedAsync, 1e3)),
      (this._error = function(e) {
        h.isVerbose && console.error(e);
      }),
      (this._log = function(e) {
        h.isVerbose && console.log(e);
      }),
      (this._tryFetchDependencyAsync =
        ((c = fa(
          la.mark(function e(t, n) {
            var r, i, o, s;
            return la.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (r = 0), (i = void 0);
                    case 2:
                      if (i && !i.pending) {
                        e.next = 25;
                        break;
                      }
                      if (!(r > 30)) {
                        e.next = 5;
                        break;
                      }
                      throw new Error("Request timed out");
                    case 5:
                      return (
                        r++,
                        h._log(
                          "Requesting dependency: " +
                            h.snackagerUrl +
                            "/bundle/" +
                            t +
                            (n ? "@" + n : "") +
                            "?platforms=ios,android,web"
                        ),
                        (e.next = 9),
                        fetch(
                          h.snackagerUrl +
                            "/bundle/" +
                            t +
                            (n ? "@" + n : "") +
                            "?platforms=ios,android,web"
                        )
                      );
                    case 9:
                      if (200 !== (o = e.sent).status) {
                        e.next = 19;
                        break;
                      }
                      return (e.next = 13), o.json();
                    case 13:
                      if (!(i = e.sent).pending) {
                        e.next = 17;
                        break;
                      }
                      return (
                        (e.next = 17),
                        new ia(function(e) {
                          return setTimeout(e, 5e3);
                        })
                      );
                    case 17:
                      e.next = 23;
                      break;
                    case 19:
                      return (e.next = 21), o.text();
                    case 21:
                      throw ((s = e.sent), new Error(s));
                    case 23:
                      e.next = 2;
                      break;
                    case 25:
                      return e.abrupt("return", i);
                    case 26:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              h
            );
          })
        )),
        function(e, t) {
          return c.apply(this, arguments);
        })),
      (this._dependencyPromises = {}),
      (this._maybeFetchDependencyAsync =
        ((l = fa(
          la.mark(function e(t, n) {
            var i, o, s, a, u, c, l;
            return la.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((i = t + "-" + n),
                        (o = /^(?:@([^\/?]+)\/)?([^@\/?]+)(?:\/([^@]+))?/.exec(
                          t
                        )))
                      ) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        ia.reject(
                          new Error(
                            "Failed to parse the package name: '" + t + "'"
                          )
                        )
                      );
                    case 4:
                      if (
                        ((s = (o[1] ? "@" + o[1] + "/" : "") + o[2]),
                        (a = Wc(s).validForOldPackages),
                        (u = !n || "latest" === n || r.validRange(n)),
                        a && u)
                      ) {
                        e.next = 10;
                        break;
                      }
                      return (
                        (c = a
                          ? new Error("Invalid version for " + s + "@" + n)
                          : new Error(s + " is not a valid package")),
                        e.abrupt("return", ia.reject(c))
                      );
                    case 10:
                      return (
                        (l =
                          h._dependencyPromises[i] ||
                          h._tryFetchDependencyAsync(t, n)),
                        (h._dependencyPromises[i] = l),
                        l.catch(function() {
                          return (h._dependencyPromises[i] = null);
                        }),
                        e.abrupt("return", l)
                      );
                    case 14:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              h
            );
          })
        )),
        function(e, t) {
          return l.apply(this, arguments);
        })),
      (this._checkS3ForDepencencyAsync =
        ((f = fa(
          la.mark(function e(t, n) {
            var r, i, o;
            return la.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = (t + "@" + n).replace(/\//g, "~")),
                        (i = ["ios", "android"].map(
                          (function() {
                            var e = fa(
                              la.mark(function e(t) {
                                var n, i;
                                return la.wrap(
                                  function(e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (e.prev = 0),
                                            (n =
                                              h.snackagerCloudfrontUrl +
                                              "/" +
                                              encodeURIComponent(r) +
                                              "-" +
                                              t +
                                              "/.done"),
                                            (e.next = 4),
                                            fetch(n)
                                          );
                                        case 4:
                                          return (
                                            (i = e.sent),
                                            e.abrupt("return", i.status < 400)
                                          );
                                        case 8:
                                          return (
                                            (e.prev = 8),
                                            (e.t0 = e.catch(0)),
                                            e.abrupt("return", !1)
                                          );
                                        case 11:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  h,
                                  [[0, 8]]
                                );
                              })
                            );
                            return function(t) {
                              return e.apply(this, arguments);
                            };
                          })()
                        )),
                        (e.next = 4),
                        ia.all(i)
                      );
                    case 4:
                      return (
                        (o = e.sent),
                        e.abrupt(
                          "return",
                          o.every(function(e) {
                            return e;
                          })
                        )
                      );
                    case 6:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              h
            );
          })
        )),
        function(e, t) {
          return f.apply(this, arguments);
        })),
      (this._addModuleAsync =
        ((p = fa(
          la.mark(function e(t, n, r) {
            var i, o, s, a, u, c, l, f, p, d, v;
            return la.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!sl(t, h.sdkVersion)) {
                        e.next = 2;
                        break;
                      }
                      throw new Error("Module is already preloaded: " + t);
                    case 2:
                      if (
                        !(i = r[t]) ||
                        (i.version !== n && i.resolved !== n)
                      ) {
                        e.next = 5;
                        break;
                      }
                      return e.abrupt("return", r);
                    case 5:
                      return (
                        (o = "Resolving module: " + (n ? t + "@" + n : t)),
                        (h.isResolving = !0),
                        (h.loadingMessage = o),
                        h._sendLoadingEvent(),
                        h._sendStateEvent(),
                        h._log(o),
                        (e.prev = 11),
                        (e.next = 14),
                        h._maybeFetchDependencyAsync(t, n || "latest")
                      );
                    case 14:
                      if (
                        ((s = e.sent),
                        (a = s.dependencies),
                        (u = ya(
                          {},
                          r,
                          U({}, s.name, {
                            version: n || s.version,
                            resolved: s.version,
                            peerDependencies: a
                              ? he(a).reduce(function(e, t) {
                                  return (e[t] = { version: a[t] }), e;
                                }, {})
                              : {}
                          })
                        )),
                        !a)
                      ) {
                        e.next = 48;
                        break;
                      }
                      h._log("Resolving peer dependencies: " + no(a)),
                        (c = !0),
                        (l = !1),
                        (f = void 0),
                        (e.prev = 22),
                        (p = Zi(he(a)));
                    case 24:
                      if ((c = (d = p.next()).done)) {
                        e.next = 34;
                        break;
                      }
                      if (!sl((v = d.value), h.sdkVersion) && !u[v]) {
                        e.next = 28;
                        break;
                      }
                      return e.abrupt("continue", 31);
                    case 28:
                      return (
                        (e.next = 30), h._addModuleAsync(v, a[v] || "latest", u)
                      );
                    case 30:
                      u = e.sent;
                    case 31:
                      (c = !0), (e.next = 24);
                      break;
                    case 34:
                      e.next = 40;
                      break;
                    case 36:
                      (e.prev = 36), (e.t0 = e.catch(22)), (l = !0), (f = e.t0);
                    case 40:
                      (e.prev = 40),
                        (e.prev = 41),
                        !c && p.return && p.return();
                    case 43:
                      if (((e.prev = 43), !l)) {
                        e.next = 46;
                        break;
                      }
                      throw f;
                    case 46:
                      return e.finish(43);
                    case 47:
                      return e.finish(40);
                    case 48:
                      return e.abrupt("return", u);
                    case 51:
                      throw ((e.prev = 51),
                      (e.t1 = e.catch(11)),
                      h._error("Error resolving module: " + e.t1.message),
                      h.dependencyErrorListener &&
                        h.dependencyErrorListener(
                          "Error fetching " +
                            t +
                            "@" +
                            (n || "latest") +
                            ": " +
                            e.t1.message
                        ),
                      e.t1);
                    case 56:
                      return (
                        (e.prev = 56),
                        (h.isResolving = !1),
                        (h.loadingMessage = ""),
                        h._sendLoadingEvent(),
                        h._sendStateEvent(),
                        e.finish(56)
                      );
                    case 62:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              h,
              [[11, 51, 56, 62], [22, 36, 40, 48], [41, , 43, 47]]
            );
          })
        )),
        function(e, t, n) {
          return p.apply(this, arguments);
        }));
  };
export {
  a as SDKVersions,
  ul as SnackSession,
  vi as dependencyUtils,
  sl as isModulePreloaded,
  B as preloadedModules
};
