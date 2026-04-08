var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype.hasOwnProperty,
  o = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  s = (e, n) => {
    let r = {};
    for (var i in e) t(r, i, { get: e[i], enumerable: !0 });
    return (n || t(r, Symbol.toStringTag, { value: `Module` }), r);
  },
  c = (e, i, o, s) => {
    if ((i && typeof i == `object`) || typeof i == `function`)
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        ((d = c[l]),
          !a.call(e, d) &&
            d !== o &&
            t(e, d, {
              get: ((e) => i[e]).bind(null, d),
              enumerable: !(s = n(i, d)) || s.enumerable,
            }));
    return e;
  },
  l = (n, r, a) => (
    (a = n == null ? {} : e(i(n))),
    c(
      r || !n || !n.__esModule
        ? t(a, `default`, { value: n, enumerable: !0 })
        : a,
      n,
    )
  ),
  u = `modulepreload`,
  d = function (e) {
    return `/preview/a0b7eea1-17f5-4d3c-86a3-af989521ee2b/8085521/` + e;
  },
  f = {},
  p = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let e = document.getElementsByTagName(`link`),
        i = document.querySelector(`meta[property=csp-nonce]`),
        a = i?.nonce || i?.getAttribute(`nonce`);
      function o(e) {
        return Promise.all(
          e.map((e) =>
            Promise.resolve(e).then(
              (e) => ({ status: `fulfilled`, value: e }),
              (e) => ({ status: `rejected`, reason: e }),
            ),
          ),
        );
      }
      r = o(
        t.map((t) => {
          if (((t = d(t, n)), t in f)) return;
          f[t] = !0;
          let r = t.endsWith(`.css`),
            i = r ? `[rel="stylesheet"]` : ``;
          if (n)
            for (let n = e.length - 1; n >= 0; n--) {
              let i = e[n];
              if (i.href === t && (!r || i.rel === `stylesheet`)) return;
            }
          else if (document.querySelector(`link[href="${t}"]${i}`)) return;
          let o = document.createElement(`link`);
          if (
            ((o.rel = r ? `stylesheet` : u),
            r || (o.as = `script`),
            (o.crossOrigin = ``),
            (o.href = t),
            a && o.setAttribute(`nonce`, a),
            document.head.appendChild(o),
            r)
          )
            return new Promise((e, n) => {
              (o.addEventListener(`load`, e),
                o.addEventListener(`error`, () =>
                  n(Error(`Unable to preload CSS for ${t}`)),
                ));
            });
        }),
      );
    }
    function i(e) {
      let t = new Event(`vite:preloadError`, { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
        throw e;
    }
    return r.then((t) => {
      for (let e of t || []) e.status === `rejected` && i(e.reason);
      return e().catch(i);
    });
  },
  m = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.portal`),
      r = Symbol.for(`react.fragment`),
      i = Symbol.for(`react.strict_mode`),
      a = Symbol.for(`react.profiler`),
      o = Symbol.for(`react.consumer`),
      s = Symbol.for(`react.context`),
      c = Symbol.for(`react.forward_ref`),
      l = Symbol.for(`react.suspense`),
      u = Symbol.for(`react.memo`),
      d = Symbol.for(`react.lazy`),
      f = Symbol.for(`react.activity`),
      p = Symbol.iterator;
    function m(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (p && e[p]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var h = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      g = Object.assign,
      _ = {};
    function v(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || h));
    }
    ((v.prototype.isReactComponent = {}),
      (v.prototype.setState = function (e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
          throw Error(
            `takes an object of state variables to update or a function which returns an object of state variables.`,
          );
        this.updater.enqueueSetState(this, e, t, `setState`);
      }),
      (v.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`);
      }));
    function y() {}
    y.prototype = v.prototype;
    function b(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || h));
    }
    var x = (b.prototype = new y());
    ((x.constructor = b), g(x, v.prototype), (x.isPureReactComponent = !0));
    var S = Array.isArray;
    function C() {}
    var w = { H: null, A: null, T: null, S: null },
      T = Object.prototype.hasOwnProperty;
    function E(e, n, r) {
      var i = r.ref;
      return {
        $$typeof: t,
        type: e,
        key: n,
        ref: i === void 0 ? null : i,
        props: r,
      };
    }
    function D(e, t) {
      return E(e.type, t, e.props);
    }
    function O(e) {
      return typeof e == `object` && !!e && e.$$typeof === t;
    }
    function k(e) {
      var t = { "=": `=0`, ":": `=2` };
      return (
        `$` +
        e.replace(/[=:]/g, function (e) {
          return t[e];
        })
      );
    }
    var A = /\/+/g;
    function j(e, t) {
      return typeof e == `object` && e && e.key != null
        ? k(`` + e.key)
        : t.toString(36);
    }
    function ee(e) {
      switch (e.status) {
        case `fulfilled`:
          return e.value;
        case `rejected`:
          throw e.reason;
        default:
          switch (
            (typeof e.status == `string`
              ? e.then(C, C)
              : ((e.status = `pending`),
                e.then(
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `fulfilled`), (e.value = t));
                  },
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `rejected`), (e.reason = t));
                  },
                )),
            e.status)
          ) {
            case `fulfilled`:
              return e.value;
            case `rejected`:
              throw e.reason;
          }
      }
      throw e;
    }
    function M(e, r, i, a, o) {
      var s = typeof e;
      (s === `undefined` || s === `boolean`) && (e = null);
      var c = !1;
      if (e === null) c = !0;
      else
        switch (s) {
          case `bigint`:
          case `string`:
          case `number`:
            c = !0;
            break;
          case `object`:
            switch (e.$$typeof) {
              case t:
              case n:
                c = !0;
                break;
              case d:
                return ((c = e._init), M(c(e._payload), r, i, a, o));
            }
        }
      if (c)
        return (
          (o = o(e)),
          (c = a === `` ? `.` + j(e, 0) : a),
          S(o)
            ? ((i = ``),
              c != null && (i = c.replace(A, `$&/`) + `/`),
              M(o, r, i, ``, function (e) {
                return e;
              }))
            : o != null &&
              (O(o) &&
                (o = D(
                  o,
                  i +
                    (o.key == null || (e && e.key === o.key)
                      ? ``
                      : (`` + o.key).replace(A, `$&/`) + `/`) +
                    c,
                )),
              r.push(o)),
          1
        );
      c = 0;
      var l = a === `` ? `.` : a + `:`;
      if (S(e))
        for (var u = 0; u < e.length; u++)
          ((a = e[u]), (s = l + j(a, u)), (c += M(a, r, i, s, o)));
      else if (((u = m(e)), typeof u == `function`))
        for (e = u.call(e), u = 0; !(a = e.next()).done; )
          ((a = a.value), (s = l + j(a, u++)), (c += M(a, r, i, s, o)));
      else if (s === `object`) {
        if (typeof e.then == `function`) return M(ee(e), r, i, a, o);
        throw (
          (r = String(e)),
          Error(
            `Objects are not valid as a React child (found: ` +
              (r === `[object Object]`
                ? `object with keys {` + Object.keys(e).join(`, `) + `}`
                : r) +
              `). If you meant to render a collection of children, use an array instead.`,
          )
        );
      }
      return c;
    }
    function N(e, t, n) {
      if (e == null) return e;
      var r = [],
        i = 0;
      return (
        M(e, r, ``, ``, function (e) {
          return t.call(n, e, i++);
        }),
        r
      );
    }
    function te(e) {
      if (e._status === -1) {
        var t = e._result;
        ((t = t()),
          t.then(
            function (t) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 1), (e._result = t));
            },
            function (t) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 2), (e._result = t));
            },
          ),
          e._status === -1 && ((e._status = 0), (e._result = t)));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var ne =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      re = {
        map: N,
        forEach: function (e, t, n) {
          N(
            e,
            function () {
              t.apply(this, arguments);
            },
            n,
          );
        },
        count: function (e) {
          var t = 0;
          return (
            N(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            N(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!O(e))
            throw Error(
              `React.Children.only expected to receive a single React element child.`,
            );
          return e;
        },
      };
    ((e.Activity = f),
      (e.Children = re),
      (e.Component = v),
      (e.Fragment = r),
      (e.Profiler = a),
      (e.PureComponent = b),
      (e.StrictMode = i),
      (e.Suspense = l),
      (e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w),
      (e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return w.H.useMemoCache(e);
        },
      }),
      (e.cache = function (e) {
        return function () {
          return e.apply(null, arguments);
        };
      }),
      (e.cacheSignal = function () {
        return null;
      }),
      (e.cloneElement = function (e, t, n) {
        if (e == null)
          throw Error(
            `The argument must be a React element, but you passed ` + e + `.`,
          );
        var r = g({}, e.props),
          i = e.key;
        if (t != null)
          for (a in (t.key !== void 0 && (i = `` + t.key), t))
            !T.call(t, a) ||
              a === `key` ||
              a === `__self` ||
              a === `__source` ||
              (a === `ref` && t.ref === void 0) ||
              (r[a] = t[a]);
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
          for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
          r.children = o;
        }
        return E(e.type, i, r);
      }),
      (e.createContext = function (e) {
        return (
          (e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (e.Provider = e),
          (e.Consumer = { $$typeof: o, _context: e }),
          e
        );
      }),
      (e.createElement = function (e, t, n) {
        var r,
          i = {},
          a = null;
        if (t != null)
          for (r in (t.key !== void 0 && (a = `` + t.key), t))
            T.call(t, r) &&
              r !== `key` &&
              r !== `__self` &&
              r !== `__source` &&
              (i[r] = t[r]);
        var o = arguments.length - 2;
        if (o === 1) i.children = n;
        else if (1 < o) {
          for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
          i.children = s;
        }
        if (e && e.defaultProps)
          for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
        return E(e, a, i);
      }),
      (e.createRef = function () {
        return { current: null };
      }),
      (e.forwardRef = function (e) {
        return { $$typeof: c, render: e };
      }),
      (e.isValidElement = O),
      (e.lazy = function (e) {
        return {
          $$typeof: d,
          _payload: { _status: -1, _result: e },
          _init: te,
        };
      }),
      (e.memo = function (e, t) {
        return { $$typeof: u, type: e, compare: t === void 0 ? null : t };
      }),
      (e.startTransition = function (e) {
        var t = w.T,
          n = {};
        w.T = n;
        try {
          var r = e(),
            i = w.S;
          (i !== null && i(n, r),
            typeof r == `object` &&
              r &&
              typeof r.then == `function` &&
              r.then(C, ne));
        } catch (e) {
          ne(e);
        } finally {
          (t !== null && n.types !== null && (t.types = n.types), (w.T = t));
        }
      }),
      (e.unstable_useCacheRefresh = function () {
        return w.H.useCacheRefresh();
      }),
      (e.use = function (e) {
        return w.H.use(e);
      }),
      (e.useActionState = function (e, t, n) {
        return w.H.useActionState(e, t, n);
      }),
      (e.useCallback = function (e, t) {
        return w.H.useCallback(e, t);
      }),
      (e.useContext = function (e) {
        return w.H.useContext(e);
      }),
      (e.useDebugValue = function () {}),
      (e.useDeferredValue = function (e, t) {
        return w.H.useDeferredValue(e, t);
      }),
      (e.useEffect = function (e, t) {
        return w.H.useEffect(e, t);
      }),
      (e.useEffectEvent = function (e) {
        return w.H.useEffectEvent(e);
      }),
      (e.useId = function () {
        return w.H.useId();
      }),
      (e.useImperativeHandle = function (e, t, n) {
        return w.H.useImperativeHandle(e, t, n);
      }),
      (e.useInsertionEffect = function (e, t) {
        return w.H.useInsertionEffect(e, t);
      }),
      (e.useLayoutEffect = function (e, t) {
        return w.H.useLayoutEffect(e, t);
      }),
      (e.useMemo = function (e, t) {
        return w.H.useMemo(e, t);
      }),
      (e.useOptimistic = function (e, t) {
        return w.H.useOptimistic(e, t);
      }),
      (e.useReducer = function (e, t, n) {
        return w.H.useReducer(e, t, n);
      }),
      (e.useRef = function (e) {
        return w.H.useRef(e);
      }),
      (e.useState = function (e) {
        return w.H.useState(e);
      }),
      (e.useSyncExternalStore = function (e, t, n) {
        return w.H.useSyncExternalStore(e, t, n);
      }),
      (e.useTransition = function () {
        return w.H.useTransition();
      }),
      (e.version = `19.2.4`));
  }),
  h = o((e, t) => {
    t.exports = m();
  }),
  g = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.fragment`);
    function r(e, n, r) {
      var i = null;
      if (
        (r !== void 0 && (i = `` + r),
        n.key !== void 0 && (i = `` + n.key),
        `key` in n)
      )
        for (var a in ((r = {}), n)) a !== `key` && (r[a] = n[a]);
      else r = n;
      return (
        (n = r.ref),
        { $$typeof: t, type: e, key: i, ref: n === void 0 ? null : n, props: r }
      );
    }
    ((e.Fragment = n), (e.jsx = r), (e.jsxs = r));
  }),
  _ = o((e, t) => {
    t.exports = g();
  }),
  v = l(h(), 1),
  y = `popstate`;
function b(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `pathname` in e &&
    `search` in e &&
    `hash` in e &&
    `state` in e &&
    `key` in e
  );
}
function x(e = {}) {
  function t(e, t) {
    let n = t.state?.masked,
      { pathname: r, search: i, hash: a } = n || e.location;
    return E(
      ``,
      { pathname: r, search: i, hash: a },
      (t.state && t.state.usr) || null,
      (t.state && t.state.key) || `default`,
      n
        ? {
            pathname: e.location.pathname,
            search: e.location.search,
            hash: e.location.hash,
          }
        : void 0,
    );
  }
  function n(e, t) {
    return typeof t == `string` ? t : D(t);
  }
  return k(t, n, null, e);
}
function S(e, t) {
  if (e === !1 || e == null) throw Error(t);
}
function C(e, t) {
  if (!e) {
    typeof console < `u` && console.warn(t);
    try {
      throw Error(t);
    } catch {}
  }
}
function w() {
  return Math.random().toString(36).substring(2, 10);
}
function T(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t,
    masked: e.unstable_mask
      ? { pathname: e.pathname, search: e.search, hash: e.hash }
      : void 0,
  };
}
function E(e, t, n = null, r, i) {
  return {
    pathname: typeof e == `string` ? e : e.pathname,
    search: ``,
    hash: ``,
    ...(typeof t == `string` ? O(t) : t),
    state: n,
    key: (t && t.key) || r || w(),
    unstable_mask: i,
  };
}
function D({ pathname: e = `/`, search: t = ``, hash: n = `` }) {
  return (
    t && t !== `?` && (e += t.charAt(0) === `?` ? t : `?` + t),
    n && n !== `#` && (e += n.charAt(0) === `#` ? n : `#` + n),
    e
  );
}
function O(e) {
  let t = {};
  if (e) {
    let n = e.indexOf(`#`);
    n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
    let r = e.indexOf(`?`);
    (r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function k(e, t, n, r = {}) {
  let { window: i = document.defaultView, v5Compat: a = !1 } = r,
    o = i.history,
    s = `POP`,
    c = null,
    l = u();
  l ?? ((l = 0), o.replaceState({ ...o.state, idx: l }, ``));
  function u() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    s = `POP`;
    let e = u(),
      t = e == null ? null : e - l;
    ((l = e), c && c({ action: s, location: h.location, delta: t }));
  }
  function f(e, t) {
    s = `PUSH`;
    let r = b(e) ? e : E(h.location, e, t);
    (n && n(r, e), (l = u() + 1));
    let d = T(r, l),
      f = h.createHref(r.unstable_mask || r);
    try {
      o.pushState(d, ``, f);
    } catch (e) {
      if (e instanceof DOMException && e.name === `DataCloneError`) throw e;
      i.location.assign(f);
    }
    a && c && c({ action: s, location: h.location, delta: 1 });
  }
  function p(e, t) {
    s = `REPLACE`;
    let r = b(e) ? e : E(h.location, e, t);
    (n && n(r, e), (l = u()));
    let i = T(r, l),
      d = h.createHref(r.unstable_mask || r);
    (o.replaceState(i, ``, d),
      a && c && c({ action: s, location: h.location, delta: 0 }));
  }
  function m(e) {
    return A(e);
  }
  let h = {
    get action() {
      return s;
    },
    get location() {
      return e(i, o);
    },
    listen(e) {
      if (c) throw Error(`A history only accepts one active listener`);
      return (
        i.addEventListener(y, d),
        (c = e),
        () => {
          (i.removeEventListener(y, d), (c = null));
        }
      );
    },
    createHref(e) {
      return t(i, e);
    },
    createURL: m,
    encodeLocation(e) {
      let t = m(e);
      return { pathname: t.pathname, search: t.search, hash: t.hash };
    },
    push: f,
    replace: p,
    go(e) {
      return o.go(e);
    },
  };
  return h;
}
function A(e, t = !1) {
  let n = `http://localhost`;
  (typeof window < `u` &&
    (n =
      window.location.origin === `null`
        ? window.location.href
        : window.location.origin),
    S(n, `No window.location.(origin|href) available to create URL`));
  let r = typeof e == `string` ? e : D(e);
  return (
    (r = r.replace(/ $/, `%20`)),
    !t && r.startsWith(`//`) && (r = n + r),
    new URL(r, n)
  );
}
function j(e, t, n = `/`) {
  return ee(e, t, n, !1);
}
function ee(e, t, n, r) {
  let i = F((typeof t == `string` ? O(t) : t).pathname || `/`, n);
  if (i == null) return null;
  let a = N(e);
  ne(a);
  let o = null;
  for (let e = 0; o == null && e < a.length; ++e) {
    let t = me(i);
    o = fe(a[e], t, r);
  }
  return o;
}
function M(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return {
    id: n.id,
    pathname: r,
    params: i,
    data: t[n.id],
    loaderData: t[n.id],
    handle: n.handle,
  };
}
function N(e, t = [], n = [], r = ``, i = !1) {
  let a = (e, a, o = i, s) => {
    let c = {
      relativePath: s === void 0 ? e.path || `` : s,
      caseSensitive: e.caseSensitive === !0,
      childrenIndex: a,
      route: e,
    };
    if (c.relativePath.startsWith(`/`)) {
      if (!c.relativePath.startsWith(r) && o) return;
      (S(
        c.relativePath.startsWith(r),
        `Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (c.relativePath = c.relativePath.slice(r.length)));
    }
    let l = I([r, c.relativePath]),
      u = n.concat(c);
    (e.children &&
      e.children.length > 0 &&
      (S(
        e.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${l}".`,
      ),
      N(e.children, t, u, l, o)),
      !(e.path == null && !e.index) &&
        t.push({ path: l, score: ue(l, e.index), routesMeta: u }));
  };
  return (
    e.forEach((e, t) => {
      if (e.path === `` || !e.path?.includes(`?`)) a(e, t);
      else for (let n of te(e.path)) a(e, t, !0, n);
    }),
    t
  );
}
function te(e) {
  let t = e.split(`/`);
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith(`?`),
    a = n.replace(/\?$/, ``);
  if (r.length === 0) return i ? [a, ``] : [a];
  let o = te(r.join(`/`)),
    s = [];
  return (
    s.push(...o.map((e) => (e === `` ? a : [a, e].join(`/`)))),
    i && s.push(...o),
    s.map((t) => (e.startsWith(`/`) && t === `` ? `/` : t))
  );
}
function ne(e) {
  e.sort((e, t) =>
    e.score === t.score
      ? de(
          e.routesMeta.map((e) => e.childrenIndex),
          t.routesMeta.map((e) => e.childrenIndex),
        )
      : t.score - e.score,
  );
}
var re = /^:[\w-]+$/,
  ie = 3,
  ae = 2,
  oe = 1,
  se = 10,
  ce = -2,
  le = (e) => e === `*`;
function ue(e, t) {
  let n = e.split(`/`),
    r = n.length;
  return (
    n.some(le) && (r += ce),
    t && (r += ae),
    n
      .filter((e) => !le(e))
      .reduce((e, t) => e + (re.test(t) ? ie : t === `` ? oe : se), r)
  );
}
function de(e, t) {
  return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function fe(e, t, n = !1) {
  let { routesMeta: r } = e,
    i = {},
    a = `/`,
    o = [];
  for (let e = 0; e < r.length; ++e) {
    let s = r[e],
      c = e === r.length - 1,
      l = a === `/` ? t : t.slice(a.length) || `/`,
      u = P(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: c },
        l,
      ),
      d = s.route;
    if (
      (!u &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (u = P(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          l,
        )),
      !u)
    )
      return null;
    (Object.assign(i, u.params),
      o.push({
        params: i,
        pathname: I([a, u.pathname]),
        pathnameBase: Se(I([a, u.pathnameBase])),
        route: d,
      }),
      u.pathnameBase !== `/` && (a = I([a, u.pathnameBase])));
  }
  return o;
}
function P(e, t) {
  typeof e == `string` && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = pe(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let a = i[0],
    o = a.replace(/(.)\/+$/, `$1`),
    s = i.slice(1);
  return {
    params: r.reduce((e, { paramName: t, isOptional: n }, r) => {
      if (t === `*`) {
        let e = s[r] || ``;
        o = a.slice(0, a.length - e.length).replace(/(.)\/+$/, `$1`);
      }
      let i = s[r];
      return (
        n && !i ? (e[t] = void 0) : (e[t] = (i || ``).replace(/%2F/g, `/`)),
        e
      );
    }, {}),
    pathname: a,
    pathnameBase: o,
    pattern: e,
  };
}
function pe(e, t = !1, n = !0) {
  C(
    e === `*` || !e.endsWith(`*`) || e.endsWith(`/*`),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, `/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, `/*`)}".`,
  );
  let r = [],
    i =
      `^` +
      e
        .replace(/\/*\*?$/, ``)
        .replace(/^\/*/, `/`)
        .replace(/[\\.*+^${}|()[\]]/g, `\\$&`)
        .replace(/\/:([\w-]+)(\?)?/g, (e, t, n, i, a) => {
          if ((r.push({ paramName: t, isOptional: n != null }), n)) {
            let t = a.charAt(i + e.length);
            return t && t !== `/` ? `/([^\\/]*)` : `(?:/([^\\/]*))?`;
          }
          return `/([^\\/]+)`;
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, `(/$1)?$2`);
  return (
    e.endsWith(`*`)
      ? (r.push({ paramName: `*` }),
        (i += e === `*` || e === `/*` ? `(.*)$` : `(?:\\/(.+)|\\/*)$`))
      : n
        ? (i += `\\/*$`)
        : e !== `` && e !== `/` && (i += `(?:(?=\\/|$))`),
    [new RegExp(i, t ? void 0 : `i`), r]
  );
}
function me(e) {
  try {
    return e
      .split(`/`)
      .map((e) => decodeURIComponent(e).replace(/\//g, `%2F`))
      .join(`/`);
  } catch (t) {
    return (
      C(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`,
      ),
      e
    );
  }
}
function F(e, t) {
  if (t === `/`) return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith(`/`) ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== `/` ? null : e.slice(n) || `/`;
}
var he = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function ge(e, t = `/`) {
  let {
      pathname: n,
      search: r = ``,
      hash: i = ``,
    } = typeof e == `string` ? O(e) : e,
    a;
  return (
    n
      ? ((n = n.replace(/\/\/+/g, `/`)),
        (a = n.startsWith(`/`) ? _e(n.substring(1), `/`) : _e(n, t)))
      : (a = t),
    { pathname: a, search: Ce(r), hash: we(i) }
  );
}
function _e(e, t) {
  let n = t.replace(/\/+$/, ``).split(`/`);
  return (
    e.split(`/`).forEach((e) => {
      e === `..` ? n.length > 1 && n.pop() : e !== `.` && n.push(e);
    }),
    n.length > 1 ? n.join(`/`) : `/`
  );
}
function ve(e, t, n, r) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function ye(e) {
  return e.filter(
    (e, t) => t === 0 || (e.route.path && e.route.path.length > 0),
  );
}
function be(e) {
  let t = ye(e);
  return t.map((e, n) => (n === t.length - 1 ? e.pathname : e.pathnameBase));
}
function xe(e, t, n, r = !1) {
  let i;
  typeof e == `string`
    ? (i = O(e))
    : ((i = { ...e }),
      S(
        !i.pathname || !i.pathname.includes(`?`),
        ve(`?`, `pathname`, `search`, i),
      ),
      S(
        !i.pathname || !i.pathname.includes(`#`),
        ve(`#`, `pathname`, `hash`, i),
      ),
      S(!i.search || !i.search.includes(`#`), ve(`#`, `search`, `hash`, i)));
  let a = e === `` || i.pathname === ``,
    o = a ? `/` : i.pathname,
    s;
  if (o == null) s = n;
  else {
    let e = t.length - 1;
    if (!r && o.startsWith(`..`)) {
      let t = o.split(`/`);
      for (; t[0] === `..`; ) (t.shift(), --e);
      i.pathname = t.join(`/`);
    }
    s = e >= 0 ? t[e] : `/`;
  }
  let c = ge(i, s),
    l = o && o !== `/` && o.endsWith(`/`),
    u = (a || o === `.`) && n.endsWith(`/`);
  return (!c.pathname.endsWith(`/`) && (l || u) && (c.pathname += `/`), c);
}
var I = (e) => e.join(`/`).replace(/\/\/+/g, `/`),
  Se = (e) => e.replace(/\/+$/, ``).replace(/^\/*/, `/`),
  Ce = (e) => (!e || e === `?` ? `` : e.startsWith(`?`) ? e : `?` + e),
  we = (e) => (!e || e === `#` ? `` : e.startsWith(`#`) ? e : `#` + e),
  Te = class {
    constructor(e, t, n, r = !1) {
      ((this.status = e),
        (this.statusText = t || ``),
        (this.internal = r),
        n instanceof Error
          ? ((this.data = n.toString()), (this.error = n))
          : (this.data = n));
    }
  };
function Ee(e) {
  return (
    e != null &&
    typeof e.status == `number` &&
    typeof e.statusText == `string` &&
    typeof e.internal == `boolean` &&
    `data` in e
  );
}
function De(e) {
  return (
    e
      .map((e) => e.route.path)
      .filter(Boolean)
      .join(`/`)
      .replace(/\/\/*/g, `/`) || `/`
  );
}
var Oe =
  typeof window < `u` &&
  window.document !== void 0 &&
  window.document.createElement !== void 0;
function ke(e, t) {
  let n = e;
  if (typeof n != `string` || !he.test(n))
    return { absoluteURL: void 0, isExternal: !1, to: n };
  let r = n,
    i = !1;
  if (Oe)
    try {
      let e = new URL(window.location.href),
        r = n.startsWith(`//`) ? new URL(e.protocol + n) : new URL(n),
        a = F(r.pathname, t);
      r.origin === e.origin && a != null
        ? (n = a + r.search + r.hash)
        : (i = !0);
    } catch {
      C(
        !1,
        `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return { absoluteURL: r, isExternal: i, to: n };
}
Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);
var Ae = [`POST`, `PUT`, `PATCH`, `DELETE`];
new Set(Ae);
var je = [`GET`, ...Ae];
new Set(je);
var L = v.createContext(null);
L.displayName = `DataRouter`;
var R = v.createContext(null);
R.displayName = `DataRouterState`;
var Me = v.createContext(!1),
  Ne = v.createContext({ isTransitioning: !1 });
Ne.displayName = `ViewTransition`;
var Pe = v.createContext(new Map());
Pe.displayName = `Fetchers`;
var Fe = v.createContext(null);
Fe.displayName = `Await`;
var z = v.createContext(null);
z.displayName = `Navigation`;
var B = v.createContext(null);
B.displayName = `Location`;
var V = v.createContext({ outlet: null, matches: [], isDataRoute: !1 });
V.displayName = `Route`;
var Ie = v.createContext(null);
Ie.displayName = `RouteError`;
var Le = `REACT_ROUTER_ERROR`,
  Re = `REDIRECT`,
  ze = `ROUTE_ERROR_RESPONSE`;
function Be(e) {
  if (e.startsWith(`${Le}:${Re}:{`))
    try {
      let t = JSON.parse(e.slice(28));
      if (
        typeof t == `object` &&
        t &&
        typeof t.status == `number` &&
        typeof t.statusText == `string` &&
        typeof t.location == `string` &&
        typeof t.reloadDocument == `boolean` &&
        typeof t.replace == `boolean`
      )
        return t;
    } catch {}
}
function Ve(e) {
  if (e.startsWith(`${Le}:${ze}:{`))
    try {
      let t = JSON.parse(e.slice(40));
      if (
        typeof t == `object` &&
        t &&
        typeof t.status == `number` &&
        typeof t.statusText == `string`
      )
        return new Te(t.status, t.statusText, t.data);
    } catch {}
}
function He(e, { relative: t } = {}) {
  S(H(), `useHref() may be used only in the context of a <Router> component.`);
  let { basename: n, navigator: r } = v.useContext(z),
    { hash: i, pathname: a, search: o } = W(e, { relative: t }),
    s = a;
  return (
    n !== `/` && (s = a === `/` ? n : I([n, a])),
    r.createHref({ pathname: s, search: o, hash: i })
  );
}
function H() {
  return v.useContext(B) != null;
}
function U() {
  return (
    S(
      H(),
      `useLocation() may be used only in the context of a <Router> component.`,
    ),
    v.useContext(B).location
  );
}
var Ue = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
function We(e) {
  v.useContext(z).static || v.useLayoutEffect(e);
}
function Ge() {
  let { isDataRoute: e } = v.useContext(V);
  return e ? dt() : Ke();
}
function Ke() {
  S(
    H(),
    `useNavigate() may be used only in the context of a <Router> component.`,
  );
  let e = v.useContext(L),
    { basename: t, navigator: n } = v.useContext(z),
    { matches: r } = v.useContext(V),
    { pathname: i } = U(),
    a = JSON.stringify(be(r)),
    o = v.useRef(!1);
  return (
    We(() => {
      o.current = !0;
    }),
    v.useCallback(
      (r, s = {}) => {
        if ((C(o.current, Ue), !o.current)) return;
        if (typeof r == `number`) {
          n.go(r);
          return;
        }
        let c = xe(r, JSON.parse(a), i, s.relative === `path`);
        (e == null &&
          t !== `/` &&
          (c.pathname = c.pathname === `/` ? t : I([t, c.pathname])),
          (s.replace ? n.replace : n.push)(c, s.state, s));
      },
      [t, n, a, i, e],
    )
  );
}
v.createContext(null);
function W(e, { relative: t } = {}) {
  let { matches: n } = v.useContext(V),
    { pathname: r } = U(),
    i = JSON.stringify(be(n));
  return v.useMemo(() => xe(e, JSON.parse(i), r, t === `path`), [e, i, r, t]);
}
function qe(e, t) {
  return Je(e, t);
}
function Je(e, t, n) {
  S(
    H(),
    `useRoutes() may be used only in the context of a <Router> component.`,
  );
  let { navigator: r } = v.useContext(z),
    { matches: i } = v.useContext(V),
    a = i[i.length - 1],
    o = a ? a.params : {},
    s = a ? a.pathname : `/`,
    c = a ? a.pathnameBase : `/`,
    l = a && a.route;
  {
    let e = (l && l.path) || ``;
    pt(
      s,
      !l || e.endsWith(`*`) || e.endsWith(`*?`),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e === `/` ? `*` : `${e}/*`}">.`,
    );
  }
  let u = U(),
    d;
  if (t) {
    let e = typeof t == `string` ? O(t) : t;
    (S(
      c === `/` || e.pathname?.startsWith(c),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`,
    ),
      (d = e));
  } else d = u;
  let f = d.pathname || `/`,
    p = f;
  if (c !== `/`) {
    let e = c.replace(/^\//, ``).split(`/`);
    p = `/` + f.replace(/^\//, ``).split(`/`).slice(e.length).join(`/`);
  }
  let m = j(e, { pathname: p });
  (C(
    l || m != null,
    `No routes matched location "${d.pathname}${d.search}${d.hash}" `,
  ),
    C(
      m == null ||
        m[m.length - 1].route.element !== void 0 ||
        m[m.length - 1].route.Component !== void 0 ||
        m[m.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let h = tt(
    m &&
      m.map((e) =>
        Object.assign({}, e, {
          params: Object.assign({}, o, e.params),
          pathname: I([
            c,
            r.encodeLocation
              ? r.encodeLocation(
                  e.pathname
                    .replace(/%/g, `%25`)
                    .replace(/\?/g, `%3F`)
                    .replace(/#/g, `%23`),
                ).pathname
              : e.pathname,
          ]),
          pathnameBase:
            e.pathnameBase === `/`
              ? c
              : I([
                  c,
                  r.encodeLocation
                    ? r.encodeLocation(
                        e.pathnameBase
                          .replace(/%/g, `%25`)
                          .replace(/\?/g, `%3F`)
                          .replace(/#/g, `%23`),
                      ).pathname
                    : e.pathnameBase,
                ]),
        }),
      ),
    i,
    n,
  );
  return t && h
    ? v.createElement(
        B.Provider,
        {
          value: {
            location: {
              pathname: `/`,
              search: ``,
              hash: ``,
              state: null,
              key: `default`,
              unstable_mask: void 0,
              ...d,
            },
            navigationType: `POP`,
          },
        },
        h,
      )
    : h;
}
function Ye() {
  let e = ut(),
    t = Ee(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = `rgba(200,200,200, 0.5)`,
    i = { padding: `0.5rem`, backgroundColor: r },
    a = { padding: `2px 4px`, backgroundColor: r },
    o = null;
  return (
    console.error(`Error handled by React Router default ErrorBoundary:`, e),
    (o = v.createElement(
      v.Fragment,
      null,
      v.createElement(`p`, null, `💿 Hey developer 👋`),
      v.createElement(
        `p`,
        null,
        `You can provide a way better UX than this when your app throws errors by providing your own `,
        v.createElement(`code`, { style: a }, `ErrorBoundary`),
        ` or`,
        ` `,
        v.createElement(`code`, { style: a }, `errorElement`),
        ` prop on your route.`,
      ),
    )),
    v.createElement(
      v.Fragment,
      null,
      v.createElement(`h2`, null, `Unexpected Application Error!`),
      v.createElement(`h3`, { style: { fontStyle: `italic` } }, t),
      n ? v.createElement(`pre`, { style: i }, n) : null,
      o,
    )
  );
}
var Xe = v.createElement(Ye, null),
  Ze = class extends v.Component {
    constructor(e) {
      (super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        }));
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== `idle` && e.revalidation === `idle`)
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error === void 0 ? t.error : e.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      this.props.onError
        ? this.props.onError(e, t)
        : console.error(
            `React Router caught the following error during render`,
            e,
          );
    }
    render() {
      let e = this.state.error;
      if (
        this.context &&
        typeof e == `object` &&
        e &&
        `digest` in e &&
        typeof e.digest == `string`
      ) {
        let t = Ve(e.digest);
        t && (e = t);
      }
      let t =
        e === void 0
          ? this.props.children
          : v.createElement(
              V.Provider,
              { value: this.props.routeContext },
              v.createElement(Ie.Provider, {
                value: e,
                children: this.props.component,
              }),
            );
      return this.context ? v.createElement($e, { error: e }, t) : t;
    }
  };
Ze.contextType = Me;
var Qe = new WeakMap();
function $e({ children: e, error: t }) {
  let { basename: n } = v.useContext(z);
  if (
    typeof t == `object` &&
    t &&
    `digest` in t &&
    typeof t.digest == `string`
  ) {
    let e = Be(t.digest);
    if (e) {
      let r = Qe.get(t);
      if (r) throw r;
      let i = ke(e.location, n);
      if (Oe && !Qe.get(t))
        if (i.isExternal || e.reloadDocument)
          window.location.href = i.absoluteURL || i.to;
        else {
          let n = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(i.to, {
              replace: e.replace,
            }),
          );
          throw (Qe.set(t, n), n);
        }
      return v.createElement(`meta`, {
        httpEquiv: `refresh`,
        content: `0;url=${i.absoluteURL || i.to}`,
      });
    }
  }
  return e;
}
function et({ routeContext: e, match: t, children: n }) {
  let r = v.useContext(L);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = t.route.id),
    v.createElement(V.Provider, { value: e }, n)
  );
}
function tt(e, t = [], n) {
  let r = n?.state;
  if (e == null) {
    if (!r) return null;
    if (r.errors) e = r.matches;
    else if (t.length === 0 && !r.initialized && r.matches.length > 0)
      e = r.matches;
    else return null;
  }
  let i = e,
    a = r?.errors;
  if (a != null) {
    let e = i.findIndex((e) => e.route.id && a?.[e.route.id] !== void 0);
    (S(
      e >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`,
    ),
      (i = i.slice(0, Math.min(i.length, e + 1))));
  }
  let o = !1,
    s = -1;
  if (n && r) {
    o = r.renderFallback;
    for (let e = 0; e < i.length; e++) {
      let t = i[e];
      if (
        ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (s = e),
        t.route.id)
      ) {
        let { loaderData: e, errors: a } = r,
          c =
            t.route.loader &&
            !e.hasOwnProperty(t.route.id) &&
            (!a || a[t.route.id] === void 0);
        if (t.route.lazy || c) {
          (n.isStatic && (o = !0), (i = s >= 0 ? i.slice(0, s + 1) : [i[0]]));
          break;
        }
      }
    }
  }
  let c = n?.onError,
    l =
      r && c
        ? (e, t) => {
            c(e, {
              location: r.location,
              params: r.matches?.[0]?.params ?? {},
              unstable_pattern: De(r.matches),
              errorInfo: t,
            });
          }
        : void 0;
  return i.reduceRight((e, n, c) => {
    let u,
      d = !1,
      f = null,
      p = null;
    r &&
      ((u = a && n.route.id ? a[n.route.id] : void 0),
      (f = n.route.errorElement || Xe),
      o &&
        (s < 0 && c === 0
          ? (pt(
              `route-fallback`,
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (d = !0),
            (p = null))
          : s === c &&
            ((d = !0), (p = n.route.hydrateFallbackElement || null))));
    let m = t.concat(i.slice(0, c + 1)),
      h = () => {
        let t;
        return (
          (t = u
            ? f
            : d
              ? p
              : n.route.Component
                ? v.createElement(n.route.Component, null)
                : n.route.element
                  ? n.route.element
                  : e),
          v.createElement(et, {
            match: n,
            routeContext: { outlet: e, matches: m, isDataRoute: r != null },
            children: t,
          })
        );
      };
    return r && (n.route.ErrorBoundary || n.route.errorElement || c === 0)
      ? v.createElement(Ze, {
          location: r.location,
          revalidation: r.revalidation,
          component: f,
          error: u,
          children: h(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
          onError: l,
        })
      : h();
  }, null);
}
function nt(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function rt(e) {
  let t = v.useContext(L);
  return (S(t, nt(e)), t);
}
function it(e) {
  let t = v.useContext(R);
  return (S(t, nt(e)), t);
}
function at(e) {
  let t = v.useContext(V);
  return (S(t, nt(e)), t);
}
function ot(e) {
  let t = at(e),
    n = t.matches[t.matches.length - 1];
  return (
    S(n.route.id, `${e} can only be used on routes that contain a unique "id"`),
    n.route.id
  );
}
function st() {
  return ot(`useRouteId`);
}
function ct() {
  return it(`useNavigation`).navigation;
}
function lt() {
  let { matches: e, loaderData: t } = it(`useMatches`);
  return v.useMemo(() => e.map((e) => M(e, t)), [e, t]);
}
function ut() {
  let e = v.useContext(Ie),
    t = it(`useRouteError`),
    n = ot(`useRouteError`);
  return e === void 0 ? t.errors?.[n] : e;
}
function dt() {
  let { router: e } = rt(`useNavigate`),
    t = ot(`useNavigate`),
    n = v.useRef(!1);
  return (
    We(() => {
      n.current = !0;
    }),
    v.useCallback(
      async (r, i = {}) => {
        (C(n.current, Ue),
          n.current &&
            (typeof r == `number`
              ? await e.navigate(r)
              : await e.navigate(r, { fromRouteId: t, ...i })));
      },
      [e, t],
    )
  );
}
var ft = {};
function pt(e, t, n) {
  !t && !ft[e] && ((ft[e] = !0), C(!1, n));
}
(v.useOptimistic, v.memo(mt));
function mt({ routes: e, future: t, state: n, isStatic: r, onError: i }) {
  return Je(e, void 0, { state: n, isStatic: r, onError: i, future: t });
}
function ht({
  basename: e = `/`,
  children: t = null,
  location: n,
  navigationType: r = `POP`,
  navigator: i,
  static: a = !1,
  unstable_useTransitions: o,
}) {
  S(
    !H(),
    `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`,
  );
  let s = e.replace(/^\/*/, `/`),
    c = v.useMemo(
      () => ({
        basename: s,
        navigator: i,
        static: a,
        unstable_useTransitions: o,
        future: {},
      }),
      [s, i, a, o],
    );
  typeof n == `string` && (n = O(n));
  let {
      pathname: l = `/`,
      search: u = ``,
      hash: d = ``,
      state: f = null,
      key: p = `default`,
      unstable_mask: m,
    } = n,
    h = v.useMemo(() => {
      let e = F(l, s);
      return e == null
        ? null
        : {
            location: {
              pathname: e,
              search: u,
              hash: d,
              state: f,
              key: p,
              unstable_mask: m,
            },
            navigationType: r,
          };
    }, [s, l, u, d, f, p, r, m]);
  return (
    C(
      h != null,
      `<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    h == null
      ? null
      : v.createElement(
          z.Provider,
          { value: c },
          v.createElement(B.Provider, { children: t, value: h }),
        )
  );
}
var G = `get`,
  K = `application/x-www-form-urlencoded`;
function q(e) {
  return typeof HTMLElement < `u` && e instanceof HTMLElement;
}
function gt(e) {
  return q(e) && e.tagName.toLowerCase() === `button`;
}
function _t(e) {
  return q(e) && e.tagName.toLowerCase() === `form`;
}
function vt(e) {
  return q(e) && e.tagName.toLowerCase() === `input`;
}
function yt(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function bt(e, t) {
  return e.button === 0 && (!t || t === `_self`) && !yt(e);
}
var J = null;
function xt() {
  if (J === null)
    try {
      (new FormData(document.createElement(`form`), 0), (J = !1));
    } catch {
      J = !0;
    }
  return J;
}
var St = new Set([
  `application/x-www-form-urlencoded`,
  `multipart/form-data`,
  `text/plain`,
]);
function Ct(e) {
  return e != null && !St.has(e)
    ? (C(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${K}"`,
      ),
      null)
    : e;
}
function wt(e, t) {
  let n, r, i, a, o;
  if (_t(e)) {
    let o = e.getAttribute(`action`);
    ((r = o ? F(o, t) : null),
      (n = e.getAttribute(`method`) || G),
      (i = Ct(e.getAttribute(`enctype`)) || K),
      (a = new FormData(e)));
  } else if (gt(e) || (vt(e) && (e.type === `submit` || e.type === `image`))) {
    let o = e.form;
    if (o == null)
      throw Error(
        `Cannot submit a <button> or <input type="submit"> without a <form>`,
      );
    let s = e.getAttribute(`formaction`) || o.getAttribute(`action`);
    if (
      ((r = s ? F(s, t) : null),
      (n = e.getAttribute(`formmethod`) || o.getAttribute(`method`) || G),
      (i =
        Ct(e.getAttribute(`formenctype`)) ||
        Ct(o.getAttribute(`enctype`)) ||
        K),
      (a = new FormData(o, e)),
      !xt())
    ) {
      let { name: t, type: n, value: r } = e;
      if (n === `image`) {
        let e = t ? `${t}.` : ``;
        (a.append(`${e}x`, `0`), a.append(`${e}y`, `0`));
      } else t && a.append(t, r);
    }
  } else if (q(e))
    throw Error(
      `Cannot submit element that is not <form>, <button>, or <input type="submit|image">`,
    );
  else ((n = G), (r = null), (i = K), (o = e));
  return (
    a && i === `text/plain` && ((o = a), (a = void 0)),
    { action: r, method: n.toLowerCase(), encType: i, formData: a, body: o }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);
var Tt = {
    "&": `\\u0026`,
    ">": `\\u003e`,
    "<": `\\u003c`,
    "\u2028": `\\u2028`,
    "\u2029": `\\u2029`,
  },
  Et = /[&><\u2028\u2029]/g;
function Dt(e) {
  return e.replace(Et, (e) => Tt[e]);
}
function Ot(e, t) {
  if (e === !1 || e == null) throw Error(t);
}
function kt(e, t, n, r) {
  let i =
    typeof e == `string`
      ? new URL(
          e,
          typeof window > `u`
            ? `server://singlefetch/`
            : window.location.origin,
        )
      : e;
  return (
    n
      ? i.pathname.endsWith(`/`)
        ? (i.pathname = `${i.pathname}_.${r}`)
        : (i.pathname = `${i.pathname}.${r}`)
      : i.pathname === `/`
        ? (i.pathname = `_root.${r}`)
        : t && F(i.pathname, t) === `/`
          ? (i.pathname = `${t.replace(/\/$/, ``)}/_root.${r}`)
          : (i.pathname = `${i.pathname.replace(/\/$/, ``)}.${r}`),
    i
  );
}
async function At(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let n = await p(() => import(e.module), []);
    return ((t[e.id] = n), n);
  } catch (t) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`,
      ),
      console.error(t),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function jt(e) {
  return e != null && typeof e.page == `string`;
}
function Mt(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === `preload` &&
        typeof e.imageSrcSet == `string` &&
        typeof e.imageSizes == `string`
      : typeof e.rel == `string` && typeof e.href == `string`;
}
async function Nt(e, t, n) {
  return Rt(
    (
      await Promise.all(
        e.map(async (e) => {
          let r = t.routes[e.route.id];
          if (r) {
            let e = await At(r, n);
            return e.links ? e.links() : [];
          }
          return [];
        }),
      )
    )
      .flat(1)
      .filter(Mt)
      .filter((e) => e.rel === `stylesheet` || e.rel === `preload`)
      .map((e) =>
        e.rel === `stylesheet`
          ? { ...e, rel: `prefetch`, as: `style` }
          : { ...e, rel: `prefetch` },
      ),
  );
}
function Pt(e, t, n, r, i, a) {
  let o = (e, t) => (n[t] ? e.route.id !== n[t].route.id : !0),
    s = (e, t) =>
      n[t].pathname !== e.pathname ||
      (n[t].route.path?.endsWith(`*`) && n[t].params[`*`] !== e.params[`*`]);
  return a === `assets`
    ? t.filter((e, t) => o(e, t) || s(e, t))
    : a === `data`
      ? t.filter((t, a) => {
          let c = r.routes[t.route.id];
          if (!c || !c.hasLoader) return !1;
          if (o(t, a) || s(t, a)) return !0;
          if (t.route.shouldRevalidate) {
            let r = t.route.shouldRevalidate({
              currentUrl: new URL(
                i.pathname + i.search + i.hash,
                window.origin,
              ),
              currentParams: n[0]?.params || {},
              nextUrl: new URL(e, window.origin),
              nextParams: t.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof r == `boolean`) return r;
          }
          return !0;
        })
      : [];
}
function Ft(e, t, { includeHydrateFallback: n } = {}) {
  return It(
    e
      .map((e) => {
        let r = t.routes[e.route.id];
        if (!r) return [];
        let i = [r.module];
        return (
          r.clientActionModule && (i = i.concat(r.clientActionModule)),
          r.clientLoaderModule && (i = i.concat(r.clientLoaderModule)),
          n &&
            r.hydrateFallbackModule &&
            (i = i.concat(r.hydrateFallbackModule)),
          r.imports && (i = i.concat(r.imports)),
          i
        );
      })
      .flat(1),
  );
}
function It(e) {
  return [...new Set(e)];
}
function Lt(e) {
  let t = {},
    n = Object.keys(e).sort();
  for (let r of n) t[r] = e[r];
  return t;
}
function Rt(e, t) {
  let n = new Set(),
    r = new Set(t);
  return e.reduce((e, i) => {
    if (t && !jt(i) && i.as === `script` && i.href && r.has(i.href)) return e;
    let a = JSON.stringify(Lt(i));
    return (n.has(a) || (n.add(a), e.push({ key: a, link: i })), e);
  }, []);
}
function zt() {
  let e = v.useContext(L);
  return (
    Ot(
      e,
      `You must render this element inside a <DataRouterContext.Provider> element`,
    ),
    e
  );
}
function Bt() {
  let e = v.useContext(R);
  return (
    Ot(
      e,
      `You must render this element inside a <DataRouterStateContext.Provider> element`,
    ),
    e
  );
}
var Y = v.createContext(void 0);
Y.displayName = `FrameworkContext`;
function Vt() {
  let e = v.useContext(Y);
  return (
    Ot(e, `You must render this element inside a <HydratedRouter> element`),
    e
  );
}
function Ht(e, t) {
  let n = v.useContext(Y),
    [r, i] = v.useState(!1),
    [a, o] = v.useState(!1),
    {
      onFocus: s,
      onBlur: c,
      onMouseEnter: l,
      onMouseLeave: u,
      onTouchStart: d,
    } = t,
    f = v.useRef(null);
  (v.useEffect(() => {
    if ((e === `render` && o(!0), e === `viewport`)) {
      let e = new IntersectionObserver(
        (e) => {
          e.forEach((e) => {
            o(e.isIntersecting);
          });
        },
        { threshold: 0.5 },
      );
      return (
        f.current && e.observe(f.current),
        () => {
          e.disconnect();
        }
      );
    }
  }, [e]),
    v.useEffect(() => {
      if (r) {
        let e = setTimeout(() => {
          o(!0);
        }, 100);
        return () => {
          clearTimeout(e);
        };
      }
    }, [r]));
  let p = () => {
      i(!0);
    },
    m = () => {
      (i(!1), o(!1));
    };
  return n
    ? e === `intent`
      ? [
          a,
          f,
          {
            onFocus: X(s, p),
            onBlur: X(c, m),
            onMouseEnter: X(l, p),
            onMouseLeave: X(u, m),
            onTouchStart: X(d, p),
          },
        ]
      : [a, f, {}]
    : [!1, f, {}];
}
function X(e, t) {
  return (n) => {
    (e && e(n), n.defaultPrevented || t(n));
  };
}
function Ut({ page: e, ...t }) {
  let { router: n } = zt(),
    r = v.useMemo(() => j(n.routes, e, n.basename), [n.routes, e, n.basename]);
  return r ? v.createElement(Gt, { page: e, matches: r, ...t }) : null;
}
function Wt(e) {
  let { manifest: t, routeModules: n } = Vt(),
    [r, i] = v.useState([]);
  return (
    v.useEffect(() => {
      let r = !1;
      return (
        Nt(e, t, n).then((e) => {
          r || i(e);
        }),
        () => {
          r = !0;
        }
      );
    }, [e, t, n]),
    r
  );
}
function Gt({ page: e, matches: t, ...n }) {
  let r = U(),
    { future: i, manifest: a, routeModules: o } = Vt(),
    { basename: s } = zt(),
    { loaderData: c, matches: l } = Bt(),
    u = v.useMemo(() => Pt(e, t, l, a, r, `data`), [e, t, l, a, r]),
    d = v.useMemo(() => Pt(e, t, l, a, r, `assets`), [e, t, l, a, r]),
    f = v.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let n = new Set(),
        l = !1;
      if (
        (t.forEach((e) => {
          let t = a.routes[e.route.id];
          !t ||
            !t.hasLoader ||
            ((!u.some((t) => t.route.id === e.route.id) &&
              e.route.id in c &&
              o[e.route.id]?.shouldRevalidate) ||
            t.hasClientLoader
              ? (l = !0)
              : n.add(e.route.id));
        }),
        n.size === 0)
      )
        return [];
      let d = kt(e, s, i.unstable_trailingSlashAwareDataRequests, `data`);
      return (
        l &&
          n.size > 0 &&
          d.searchParams.set(
            `_routes`,
            t
              .filter((e) => n.has(e.route.id))
              .map((e) => e.route.id)
              .join(`,`),
          ),
        [d.pathname + d.search]
      );
    }, [s, i.unstable_trailingSlashAwareDataRequests, c, r, a, u, t, e, o]),
    p = v.useMemo(() => Ft(d, a), [d, a]),
    m = Wt(d);
  return v.createElement(
    v.Fragment,
    null,
    f.map((e) =>
      v.createElement(`link`, {
        key: e,
        rel: `prefetch`,
        as: `fetch`,
        href: e,
        ...n,
      }),
    ),
    p.map((e) =>
      v.createElement(`link`, { key: e, rel: `modulepreload`, href: e, ...n }),
    ),
    m.map(({ key: e, link: t }) =>
      v.createElement(`link`, {
        key: e,
        nonce: n.nonce,
        ...t,
        crossOrigin: t.crossOrigin ?? n.crossOrigin,
      }),
    ),
  );
}
function Kt(...e) {
  return (t) => {
    e.forEach((e) => {
      typeof e == `function` ? e(t) : e != null && (e.current = t);
    });
  };
}
var qt =
  typeof window < `u` &&
  window.document !== void 0 &&
  window.document.createElement !== void 0;
try {
  qt && (window.__reactRouterVersion = `7.13.2`);
} catch {}
function Jt({
  basename: e,
  children: t,
  unstable_useTransitions: n,
  window: r,
}) {
  let i = v.useRef();
  i.current ??= x({ window: r, v5Compat: !0 });
  let a = i.current,
    [o, s] = v.useState({ action: a.action, location: a.location }),
    c = v.useCallback(
      (e) => {
        n === !1 ? s(e) : v.startTransition(() => s(e));
      },
      [n],
    );
  return (
    v.useLayoutEffect(() => a.listen(c), [a, c]),
    v.createElement(ht, {
      basename: e,
      children: t,
      location: o.location,
      navigationType: o.action,
      navigator: a,
      unstable_useTransitions: n,
    })
  );
}
function Yt({
  basename: e,
  children: t,
  history: n,
  unstable_useTransitions: r,
}) {
  let [i, a] = v.useState({ action: n.action, location: n.location }),
    o = v.useCallback(
      (e) => {
        r === !1 ? a(e) : v.startTransition(() => a(e));
      },
      [r],
    );
  return (
    v.useLayoutEffect(() => n.listen(o), [n, o]),
    v.createElement(ht, {
      basename: e,
      children: t,
      location: i.location,
      navigationType: i.action,
      navigator: n,
      unstable_useTransitions: r,
    })
  );
}
Yt.displayName = `unstable_HistoryRouter`;
var Xt = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Zt = v.forwardRef(function (
    {
      onClick: e,
      discover: t = `render`,
      prefetch: n = `none`,
      relative: r,
      reloadDocument: i,
      replace: a,
      unstable_mask: o,
      state: s,
      target: c,
      to: l,
      preventScrollReset: u,
      viewTransition: d,
      unstable_defaultShouldRevalidate: f,
      ...p
    },
    m,
  ) {
    let {
        basename: h,
        navigator: g,
        unstable_useTransitions: _,
      } = v.useContext(z),
      y = typeof l == `string` && Xt.test(l),
      b = ke(l, h);
    l = b.to;
    let x = He(l, { relative: r }),
      S = U(),
      C = null;
    if (o) {
      let e = xe(o, [], S.unstable_mask ? S.unstable_mask.pathname : `/`, !0);
      (h !== `/` && (e.pathname = e.pathname === `/` ? h : I([h, e.pathname])),
        (C = g.createHref(e)));
    }
    let [w, T, E] = Ht(n, p),
      D = an(l, {
        replace: a,
        unstable_mask: o,
        state: s,
        target: c,
        preventScrollReset: u,
        relative: r,
        viewTransition: d,
        unstable_defaultShouldRevalidate: f,
        unstable_useTransitions: _,
      });
    function O(t) {
      (e && e(t), t.defaultPrevented || D(t));
    }
    let k = !(b.isExternal || i),
      A = v.createElement(`a`, {
        ...p,
        ...E,
        href: (k ? C : void 0) || b.absoluteURL || x,
        onClick: k ? O : e,
        ref: Kt(m, T),
        target: c,
        "data-discover": !y && t === `render` ? `true` : void 0,
      });
    return w && !y
      ? v.createElement(v.Fragment, null, A, v.createElement(Ut, { page: x }))
      : A;
  });
Zt.displayName = `Link`;
var Qt = v.forwardRef(function (
  {
    "aria-current": e = `page`,
    caseSensitive: t = !1,
    className: n = ``,
    end: r = !1,
    style: i,
    to: a,
    viewTransition: o,
    children: s,
    ...c
  },
  l,
) {
  let u = W(a, { relative: c.relative }),
    d = U(),
    f = v.useContext(R),
    { navigator: p, basename: m } = v.useContext(z),
    h = f != null && mn(u) && o === !0,
    g = p.encodeLocation ? p.encodeLocation(u).pathname : u.pathname,
    _ = d.pathname,
    y =
      f && f.navigation && f.navigation.location
        ? f.navigation.location.pathname
        : null;
  (t ||
    ((_ = _.toLowerCase()),
    (y = y ? y.toLowerCase() : null),
    (g = g.toLowerCase())),
    y && m && (y = F(y, m) || y));
  let b = g !== `/` && g.endsWith(`/`) ? g.length - 1 : g.length,
    x = _ === g || (!r && _.startsWith(g) && _.charAt(b) === `/`),
    S =
      y != null &&
      (y === g || (!r && y.startsWith(g) && y.charAt(g.length) === `/`)),
    C = { isActive: x, isPending: S, isTransitioning: h },
    w = x ? e : void 0,
    T;
  T =
    typeof n == `function`
      ? n(C)
      : [
          n,
          x ? `active` : null,
          S ? `pending` : null,
          h ? `transitioning` : null,
        ]
          .filter(Boolean)
          .join(` `);
  let E = typeof i == `function` ? i(C) : i;
  return v.createElement(
    Zt,
    {
      ...c,
      "aria-current": w,
      className: T,
      ref: l,
      style: E,
      to: a,
      viewTransition: o,
    },
    typeof s == `function` ? s(C) : s,
  );
});
Qt.displayName = `NavLink`;
var $t = v.forwardRef(
  (
    {
      discover: e = `render`,
      fetcherKey: t,
      navigate: n,
      reloadDocument: r,
      replace: i,
      state: a,
      method: o = G,
      action: s,
      onSubmit: c,
      relative: l,
      preventScrollReset: u,
      viewTransition: d,
      unstable_defaultShouldRevalidate: f,
      ...p
    },
    m,
  ) => {
    let { unstable_useTransitions: h } = v.useContext(z),
      g = cn(),
      _ = ln(s, { relative: l }),
      y = o.toLowerCase() === `get` ? `get` : `post`,
      b = typeof s == `string` && Xt.test(s);
    return v.createElement(`form`, {
      ref: m,
      method: y,
      action: _,
      onSubmit: r
        ? c
        : (e) => {
            if ((c && c(e), e.defaultPrevented)) return;
            e.preventDefault();
            let r = e.nativeEvent.submitter,
              s = r?.getAttribute(`formmethod`) || o,
              p = () =>
                g(r || e.currentTarget, {
                  fetcherKey: t,
                  method: s,
                  navigate: n,
                  replace: i,
                  state: a,
                  relative: l,
                  preventScrollReset: u,
                  viewTransition: d,
                  unstable_defaultShouldRevalidate: f,
                });
            h && n !== !1 ? v.startTransition(() => p()) : p();
          },
      ...p,
      "data-discover": !b && e === `render` ? `true` : void 0,
    });
  },
);
$t.displayName = `Form`;
function en({ getKey: e, storageKey: t, ...n }) {
  let r = v.useContext(Y),
    { basename: i } = v.useContext(z),
    a = U(),
    o = lt();
  fn({ getKey: e, storageKey: t });
  let s = v.useMemo(() => {
    if (!r || !e) return null;
    let t = dn(a, o, i, e);
    return t === a.key ? null : t;
  }, []);
  if (!r || r.isSpaMode) return null;
  let c = ((e, t) => {
    if (!window.history.state || !window.history.state.key) {
      let e = Math.random().toString(32).slice(2);
      window.history.replaceState({ key: e }, ``);
    }
    try {
      let n = JSON.parse(sessionStorage.getItem(e) || `{}`)[
        t || window.history.state.key
      ];
      typeof n == `number` && window.scrollTo(0, n);
    } catch (t) {
      (console.error(t), sessionStorage.removeItem(e));
    }
  }).toString();
  return v.createElement(`script`, {
    ...n,
    suppressHydrationWarning: !0,
    dangerouslySetInnerHTML: {
      __html: `(${c})(${Dt(JSON.stringify(t || un))}, ${Dt(JSON.stringify(s))})`,
    },
  });
}
en.displayName = `ScrollRestoration`;
function tn(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function nn(e) {
  let t = v.useContext(L);
  return (S(t, tn(e)), t);
}
function rn(e) {
  let t = v.useContext(R);
  return (S(t, tn(e)), t);
}
function an(
  e,
  {
    target: t,
    replace: n,
    unstable_mask: r,
    state: i,
    preventScrollReset: a,
    relative: o,
    viewTransition: s,
    unstable_defaultShouldRevalidate: c,
    unstable_useTransitions: l,
  } = {},
) {
  let u = Ge(),
    d = U(),
    f = W(e, { relative: o });
  return v.useCallback(
    (p) => {
      if (bt(p, t)) {
        p.preventDefault();
        let t = n === void 0 ? D(d) === D(f) : n,
          m = () =>
            u(e, {
              replace: t,
              unstable_mask: r,
              state: i,
              preventScrollReset: a,
              relative: o,
              viewTransition: s,
              unstable_defaultShouldRevalidate: c,
            });
        l ? v.startTransition(() => m()) : m();
      }
    },
    [d, u, f, n, r, i, t, e, a, o, s, c, l],
  );
}
var on = 0,
  sn = () => `__${String(++on)}__`;
function cn() {
  let { router: e } = nn(`useSubmit`),
    { basename: t } = v.useContext(z),
    n = st(),
    r = e.fetch,
    i = e.navigate;
  return v.useCallback(
    async (e, a = {}) => {
      let { action: o, method: s, encType: c, formData: l, body: u } = wt(e, t);
      a.navigate === !1
        ? await r(a.fetcherKey || sn(), n, a.action || o, {
            unstable_defaultShouldRevalidate:
              a.unstable_defaultShouldRevalidate,
            preventScrollReset: a.preventScrollReset,
            formData: l,
            body: u,
            formMethod: a.method || s,
            formEncType: a.encType || c,
            flushSync: a.flushSync,
          })
        : await i(a.action || o, {
            unstable_defaultShouldRevalidate:
              a.unstable_defaultShouldRevalidate,
            preventScrollReset: a.preventScrollReset,
            formData: l,
            body: u,
            formMethod: a.method || s,
            formEncType: a.encType || c,
            replace: a.replace,
            state: a.state,
            fromRouteId: n,
            flushSync: a.flushSync,
            viewTransition: a.viewTransition,
          });
    },
    [r, i, t, n],
  );
}
function ln(e, { relative: t } = {}) {
  let { basename: n } = v.useContext(z),
    r = v.useContext(V);
  S(r, `useFormAction must be used inside a RouteContext`);
  let [i] = r.matches.slice(-1),
    a = { ...W(e || `.`, { relative: t }) },
    o = U();
  if (e == null) {
    a.search = o.search;
    let e = new URLSearchParams(a.search),
      t = e.getAll(`index`);
    if (t.some((e) => e === ``)) {
      (e.delete(`index`),
        t.filter((e) => e).forEach((t) => e.append(`index`, t)));
      let n = e.toString();
      a.search = n ? `?${n}` : ``;
    }
  }
  return (
    (!e || e === `.`) &&
      i.route.index &&
      (a.search = a.search ? a.search.replace(/^\?/, `?index&`) : `?index`),
    n !== `/` && (a.pathname = a.pathname === `/` ? n : I([n, a.pathname])),
    D(a)
  );
}
var un = `react-router-scroll-positions`,
  Z = {};
function dn(e, t, n, r) {
  let i = null;
  return (
    r &&
      (i = r(
        n === `/` ? e : { ...e, pathname: F(e.pathname, n) || e.pathname },
        t,
      )),
    (i ??= e.key),
    i
  );
}
function fn({ getKey: e, storageKey: t } = {}) {
  let { router: n } = nn(`useScrollRestoration`),
    { restoreScrollPosition: r, preventScrollReset: i } =
      rn(`useScrollRestoration`),
    { basename: a } = v.useContext(z),
    o = U(),
    s = lt(),
    c = ct();
  (v.useEffect(
    () => (
      (window.history.scrollRestoration = `manual`),
      () => {
        window.history.scrollRestoration = `auto`;
      }
    ),
    [],
  ),
    pn(
      v.useCallback(() => {
        if (c.state === `idle`) {
          let t = dn(o, s, a, e);
          Z[t] = window.scrollY;
        }
        try {
          sessionStorage.setItem(t || un, JSON.stringify(Z));
        } catch (e) {
          C(
            !1,
            `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`,
          );
        }
        window.history.scrollRestoration = `auto`;
      }, [c.state, e, a, o, s, t]),
    ),
    typeof document < `u` &&
      (v.useLayoutEffect(() => {
        try {
          let e = sessionStorage.getItem(t || un);
          e && (Z = JSON.parse(e));
        } catch {}
      }, [t]),
      v.useLayoutEffect(() => {
        let t = n?.enableScrollRestoration(
          Z,
          () => window.scrollY,
          e ? (t, n) => dn(t, n, a, e) : void 0,
        );
        return () => t && t();
      }, [n, a, e]),
      v.useLayoutEffect(() => {
        if (r !== !1) {
          if (typeof r == `number`) {
            window.scrollTo(0, r);
            return;
          }
          try {
            if (o.hash) {
              let e = document.getElementById(
                decodeURIComponent(o.hash.slice(1)),
              );
              if (e) {
                e.scrollIntoView();
                return;
              }
            }
          } catch {
            C(
              !1,
              `"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`,
            );
          }
          i !== !0 && window.scrollTo(0, 0);
        }
      }, [o, r, i])));
}
function pn(e, t) {
  let { capture: n } = t || {};
  v.useEffect(() => {
    let t = n == null ? void 0 : { capture: n };
    return (
      window.addEventListener(`pagehide`, e, t),
      () => {
        window.removeEventListener(`pagehide`, e, t);
      }
    );
  }, [e, n]);
}
function mn(e, { relative: t } = {}) {
  let n = v.useContext(Ne);
  S(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: r } = nn(`useViewTransitionState`),
    i = W(e, { relative: t });
  if (!n.isTransitioning) return !1;
  let a = F(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = F(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return P(i.pathname, o) != null || P(i.pathname, a) != null;
}
var Q = l(_(), 1);
function hn() {
  let e = U();
  return (0, Q.jsxs)(`div`, {
    className: `relative flex flex-col items-center justify-center h-screen text-center px-4`,
    children: [
      (0, Q.jsx)(`h1`, {
        className: `absolute bottom-0 text-9xl md:text-[12rem] font-black text-gray-50 select-none pointer-events-none z-0`,
        children: `404`,
      }),
      (0, Q.jsxs)(`div`, {
        className: `relative z-10`,
        children: [
          (0, Q.jsx)(`h1`, {
            className: `text-xl md:text-2xl font-semibold mt-6`,
            children: `This page has not been generated`,
          }),
          (0, Q.jsx)(`p`, {
            className: `mt-2 text-base text-gray-400 font-mono`,
            children: e.pathname,
          }),
          (0, Q.jsx)(`p`, {
            className: `mt-4 text-lg md:text-xl text-gray-500`,
            children: `Tell me more about this page, so I can generate it`,
          }),
        ],
      }),
    ],
  });
}
var gn = [
  { href: `#calculator`, label: `Калькулятор` },
  { href: `#community`, label: `Сообщество` },
  { href: `#courses`, label: `Курсы` },
  { href: `#calendar`, label: `События` },
  { href: `#map`, label: `Карта` },
  { href: `#articles`, label: `Статьи` },
  { href: `#psych-support`, label: `Поддержка` },
];
function _n() {
  let [e, t] = (0, v.useState)(!1),
    [n, r] = (0, v.useState)(!1),
    [i, a] = (0, v.useState)(!1);
  return (
    (0, v.useEffect)(() => {
      let e = () => t(window.scrollY > 40);
      return (
        window.addEventListener(`scroll`, e, { passive: !0 }),
        () => window.removeEventListener(`scroll`, e)
      );
    }, []),
    (0, Q.jsxs)(Q.Fragment, {
      children: [
        (0, Q.jsxs)(`header`, {
          className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300`,
          style: {
            background: e ? `rgba(255,255,255,0.95)` : `transparent`,
            backdropFilter: e ? `blur(12px)` : `none`,
            borderBottom: e ? `1px solid rgba(184,230,213,0.3)` : `none`,
          },
          children: [
            (0, Q.jsxs)(`div`, {
              className: `max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between`,
              children: [
                (0, Q.jsxs)(`a`, {
                  href: `#`,
                  className: `flex items-center gap-2 cursor-pointer`,
                  children: [
                    (0, Q.jsx)(`div`, {
                      className: `w-8 h-8 rounded-xl flex items-center justify-center`,
                      style: {
                        background: `linear-gradient(135deg, #3D8B6E, #2C5F4F)`,
                      },
                      children: (0, Q.jsx)(`i`, {
                        className: `ri-compass-3-line text-white text-sm`,
                      }),
                    }),
                    (0, Q.jsx)(`span`, {
                      className: `font-bold text-lg display`,
                      style: {
                        color: `#1A3A2E`,
                      },
                      children: `Семейный навигатор`,
                    }),
                  ],
                }),
                (0, Q.jsx)(`nav`, {
                  className: `hidden lg:flex items-center gap-6`,
                  children: gn.map((t) =>
                    (0, Q.jsx)(
                      `a`,
                      {
                        href: t.href,
                        className: `text-sm font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap`,
                        style: { color: e ? `#4A6B5E` : `#2C5F4F` },
                        children: t.label,
                      },
                      t.href,
                    ),
                  ),
                }),
                (0, Q.jsxs)(`div`, {
                  className: `hidden md:flex items-center gap-3`,
                  children: [
                    (0, Q.jsxs)(`button`, {
                      onClick: () => a(!0),
                      className: `h-9 px-4 rounded-full text-sm font-semibold flex items-center gap-2 transition-all duration-200 hover:scale-105 cursor-pointer whitespace-nowrap`,
                      style: {
                        background: `rgba(184,230,213,0.3)`,
                        color: `#2C5F4F`,
                        border: `1px solid rgba(61,139,110,0.3)`,
                      },
                      children: [
                        (0, Q.jsx)(`i`, { className: `ri-user-heart-line` }),
                        `Моя семья`,
                      ],
                    }),
                    (0, Q.jsxs)(`a`, {
                      href: `#calculator`,
                      className: `h-9 px-5 rounded-full text-sm font-semibold flex items-center gap-2 transition-all duration-200 hover:scale-105 cursor-pointer whitespace-nowrap`,
                      style: {
                        background: `linear-gradient(135deg, #3D8B6E, #2C5F4F)`,
                        color: `white`,
                      },
                      children: [
                        (0, Q.jsx)(`i`, { className: `ri-calculator-line` }),
                        `Рассчитать`,
                      ],
                    }),
                  ],
                }),
                (0, Q.jsx)(`button`, {
                  className: `md:hidden w-9 h-9 flex items-center justify-center rounded-lg cursor-pointer`,
                  style: { color: `#2C5F4F` },
                  onClick: () => r((e) => !e),
                  children: (0, Q.jsx)(`i`, {
                    className: `text-xl ${n ? `ri-close-line` : `ri-menu-line`}`,
                  }),
                }),
              ],
            }),
            n &&
              (0, Q.jsxs)(`div`, {
                className: `md:hidden px-4 pb-4 pt-2`,
                style: {
                  background: `rgba(255,255,255,0.97)`,
                  borderBottom: `1px solid rgba(184,230,213,0.4)`,
                },
                children: [
                  gn.map((e) =>
                    (0, Q.jsx)(
                      `a`,
                      {
                        href: e.href,
                        onClick: () => r(!1),
                        className: `block py-3 text-sm font-medium cursor-pointer`,
                        style: {
                          color: `#2C5F4F`,
                          borderBottom: `1px solid rgba(184,230,213,0.3)`,
                        },
                        children: e.label,
                      },
                      e.href,
                    ),
                  ),
                  (0, Q.jsxs)(`div`, {
                    className: `flex gap-2 mt-4`,
                    children: [
                      (0, Q.jsxs)(`button`, {
                        onClick: () => {
                          (r(!1), a(!0));
                        },
                        className: `flex-1 h-11 rounded-full text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap`,
                        style: {
                          background: `rgba(184,230,213,0.3)`,
                          color: `#2C5F4F`,
                          border: `1px solid rgba(61,139,110,0.3)`,
                        },
                        children: [
                          (0, Q.jsx)(`i`, { className: `ri-user-heart-line` }),
                          `Моя семья`,
                        ],
                      }),
                      (0, Q.jsx)(`a`, {
                        href: `#calculator`,
                        onClick: () => r(!1),
                        className: `flex-1 h-11 rounded-full text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap`,
                        style: {
                          background: `linear-gradient(135deg, #3D8B6E, #2C5F4F)`,
                          color: `white`,
                        },
                        children: `Рассчитать`,
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),
        i &&
          (0, Q.jsx)(`div`, {
            className: `fixed inset-0 z-[100] flex items-center justify-center p-4`,
            style: {
              background: `rgba(26,58,46,0.4)`,
              backdropFilter: `blur(6px)`,
            },
            onClick: (e) => {
              e.target === e.currentTarget && a(!1);
            },
            children: (0, Q.jsxs)(`div`, {
              className: `w-full max-w-md rounded-3xl overflow-hidden`,
              style: { background: `white` },
              children: [
                (0, Q.jsxs)(`div`, {
                  className: `px-8 pt-8 pb-6 text-center relative`,
                  style: {
                    background: `linear-gradient(135deg, #F0FAF7, #FFF8F0)`,
                  },
                  children: [
                    (0, Q.jsx)(`button`, {
                      onClick: () => a(!1),
                      className: `absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer`,
                      style: {
                        background: `rgba(184,230,213,0.3)`,
                        color: `#2C5F4F`,
                      },
                      children: (0, Q.jsx)(`i`, { className: `ri-close-line` }),
                    }),
                    (0, Q.jsx)(`div`, {
                      className: `w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`,
                      style: {
                        background: `linear-gradient(135deg, #3D8B6E, #2C5F4F)`,
                      },
                      children: (0, Q.jsx)(`i`, {
                        className: `ri-user-heart-line text-2xl text-white`,
                      }),
                    }),
                    (0, Q.jsx)(`h3`, {
                      className: `text-2xl font-bold mb-2`,
                      style: {
                        fontFamily: `'Playfair Display', serif`,
                        color: `#1A3A2E`,
                      },
                      children: `Моя семья`,
                    }),
                    (0, Q.jsx)(`p`, {
                      className: `text-sm`,
                      style: { color: `#6B7A74` },
                      children: `Войдите, чтобы отслеживать пособия, сохранять маршруты и получать персональные рекомендации`,
                    }),
                  ],
                }),
                (0, Q.jsxs)(`div`, {
                  className: `px-8 py-6`,
                  children: [
                    (0, Q.jsx)(`div`, {
                      className: `space-y-3 mb-6`,
                      children: [
                        {
                          icon: `ri-shield-check-line`,
                          text: `Личный кабинет с историей пособий`,
                        },
                        {
                          icon: `ri-notification-3-line`,
                          text: `Уведомления об изменениях в льготах`,
                        },
                        {
                          icon: `ri-bookmark-line`,
                          text: `Сохранённые маршруты и курсы`,
                        },
                        {
                          icon: `ri-calendar-check-line`,
                          text: `Напоминания о событиях`,
                        },
                      ].map((e) =>
                        (0, Q.jsxs)(
                          `div`,
                          {
                            className: `flex items-center gap-3`,
                            children: [
                              (0, Q.jsx)(`div`, {
                                className: `w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0`,
                                style: { background: `rgba(184,230,213,0.3)` },
                                children: (0, Q.jsx)(`i`, {
                                  className: `${e.icon} text-sm`,
                                  style: { color: `#3D8B6E` },
                                }),
                              }),
                              (0, Q.jsx)(`span`, {
                                className: `text-sm`,
                                style: { color: `#374151` },
                                children: e.text,
                              }),
                            ],
                          },
                          e.text,
                        ),
                      ),
                    }),
                    (0, Q.jsxs)(`div`, {
                      className: `space-y-3 mb-4`,
                      children: [
                        (0, Q.jsx)(`input`, {
                          type: `email`,
                          placeholder: `Email`,
                          className: `w-full h-11 px-4 rounded-xl text-sm focus:outline-none`,
                          style: {
                            background: `#F7FBF9`,
                            border: `1px solid rgba(184,230,213,0.5)`,
                            color: `#374151`,
                          },
                        }),
                        (0, Q.jsx)(`input`, {
                          type: `password`,
                          placeholder: `Пароль`,
                          className: `w-full h-11 px-4 rounded-xl text-sm focus:outline-none`,
                          style: {
                            background: `#F7FBF9`,
                            border: `1px solid rgba(184,230,213,0.5)`,
                            color: `#374151`,
                          },
                        }),
                      ],
                    }),
                    (0, Q.jsx)(`button`, {
                      className: `w-full h-12 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:scale-[1.02] cursor-pointer whitespace-nowrap`,
                      style: {
                        background: `linear-gradient(135deg, #3D8B6E, #2C5F4F)`,
                      },
                      children: `Войти в личный кабинет`,
                    }),
                    (0, Q.jsxs)(`div`, {
                      className: `flex items-center gap-3 my-4`,
                      children: [
                        (0, Q.jsx)(`div`, {
                          className: `flex-1 h-px`,
                          style: { background: `rgba(184,230,213,0.4)` },
                        }),
                        (0, Q.jsx)(`span`, {
                          className: `text-xs`,
                          style: { color: `#9CA3AF` },
                          children: `или`,
                        }),
                        (0, Q.jsx)(`div`, {
                          className: `flex-1 h-px`,
                          style: { background: `rgba(184,230,213,0.4)` },
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(`button`, {
                      className: `w-full h-11 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02] cursor-pointer whitespace-nowrap`,
                      style: {
                        background: `rgba(184,230,213,0.2)`,
                        color: `#2C5F4F`,
                        border: `1px solid rgba(61,139,110,0.3)`,
                      },
                      children: [
                        (0, Q.jsx)(`i`, { className: `ri-user-add-line mr-2` }),
                        `Создать аккаунт`,
                      ],
                    }),
                    (0, Q.jsxs)(`p`, {
                      className: `text-center text-xs mt-4`,
                      style: { color: `#9CA3AF` },
                      children: [
                        `Нажимая «Войти», вы соглашаетесь с`,
                        ` `,
                        (0, Q.jsx)(`a`, {
                          href: `#`,
                          className: `cursor-pointer`,
                          style: { color: `#3D8B6E` },
                          children: `условиями использования`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
      ],
    })
  );
}
function vn() {
  let e = (0, v.useRef)(null);
  return (
    (0, v.useEffect)(() => {
      let t = () => {
        if (e.current) {
          let t = window.scrollY,
            n = e.current.querySelector(`.hero-img`);
          n && (n.style.transform = `translateY(${t * 0.3}px)`);
        }
      };
      return (
        window.addEventListener(`scroll`, t, { passive: !0 }),
        () => window.removeEventListener(`scroll`, t)
      );
    }, []),
    (0, Q.jsxs)(`section`, {
      ref: e,
      className: `relative min-h-screen flex items-center overflow-hidden`,
      style: {
        background: `linear-gradient(135deg, #FFF8F0 0%, #F0FAF7 50%, #E8F7F2 100%)`,
      },
      children: [
        (0, Q.jsx)(`div`, {
          className: `absolute top-[-80px] right-[-80px] w-[500px] h-[500px] rounded-full opacity-30 pointer-events-none`,
          style: {
            background: `radial-gradient(circle, #B8E6D5 0%, transparent 70%)`,
          },
        }),
        (0, Q.jsx)(`div`, {
          className: `absolute bottom-[-60px] left-[-60px] w-[400px] h-[400px] rounded-full opacity-20 pointer-events-none`,
          style: {
            background: `radial-gradient(circle, #FFD6B0 0%, transparent 70%)`,
          },
        }),
        (0, Q.jsx)(`div`, {
          className: `absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full opacity-15 pointer-events-none`,
          style: {
            background: `radial-gradient(circle, #B8E6D5 0%, transparent 70%)`,
          },
        }),
        (0, Q.jsx)(`div`, {
          className: `relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32`,
          children: (0, Q.jsxs)(`div`, {
            className: `flex flex-col lg:flex-row items-center gap-12 lg:gap-16`,
            children: [
              (0, Q.jsxs)(`div`, {
                className: `flex-1 text-center lg:text-left`,
                children: [
                  (0, Q.jsxs)(`div`, {
                    className: `inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium`,
                    style: {
                      background: `rgba(184,230,213,0.3)`,
                      color: `#2C5F4F`,
                    },
                    children: [
                      (0, Q.jsx)(`span`, {
                        className: `w-2 h-2 rounded-full inline-block`,
                        style: { background: `#2C5F4F` },
                      }),
                      `Государственная поддержка семей 2026`,
                    ],
                  }),
                  (0, Q.jsxs)(`h1`, {
                    className: `text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6`,
                    style: {
                      fontFamily: `'Playfair Display', serif`,
                      color: `#1A3A2E`,
                    },
                    children: [
                      `Всё для вашей`,
                      (0, Q.jsx)(`span`, {
                        className: `block`,
                        style: { color: `#3D8B6E` },
                        children: `молодой семьи`,
                      }),
                      (0, Q.jsx)(`span`, {
                        className: `block text-3xl md:text-4xl lg:text-5xl font-normal mt-1`,
                        style: { color: `#5A7A6E` },
                        children: `в одном месте`,
                      }),
                    ],
                  }),
                  (0, Q.jsx)(`p`, {
                    className: `text-base md:text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed`,
                    style: { color: `#6B7A74` },
                    children: `Навигатор помогает молодым семьям разобраться в льготах, пособиях и государственных программах. Рассчитайте поддержку, найдите нужные учреждения и пройдите свой маршрут шаг за шагом.`,
                  }),
                  (0, Q.jsxs)(`div`, {
                    className: `flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10`,
                    children: [
                      (0, Q.jsxs)(`a`, {
                        href: `#calculator`,
                        className: `inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 whitespace-nowrap`,
                        style: {
                          background: `linear-gradient(135deg, #3D8B6E, #2C5F4F)`,
                          boxShadow: `0 8px 24px rgba(61,139,110,0.3)`,
                        },
                        children: [
                          (0, Q.jsx)(`i`, { className: `ri-calculator-line` }),
                          `Рассчитать пособия`,
                        ],
                      }),
                      (0, Q.jsxs)(`a`, {
                        href: `#routes`,
                        className: `inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap`,
                        style: {
                          border: `2px solid #3D8B6E`,
                          color: `#3D8B6E`,
                          background: `transparent`,
                        },
                        children: [
                          (0, Q.jsx)(`i`, { className: `ri-map-2-line` }),
                          `Мои маршруты`,
                        ],
                      }),
                    ],
                  }),
                  (0, Q.jsxs)(`div`, {
                    className: `flex items-center gap-4 justify-center lg:justify-start`,
                    children: [
                      (0, Q.jsx)(`div`, {
                        className: `flex -space-x-3`,
                        children: [`👩`, `👨`, `👩‍🦱`, `👨‍🦰`, `👩‍🦳`].map((e, t) =>
                          (0, Q.jsx)(
                            `div`,
                            {
                              className: `w-9 h-9 rounded-full flex items-center justify-center text-sm border-2 border-white`,
                              style: {
                                background: t % 2 == 0 ? `#B8E6D5` : `#FFE4CC`,
                                zIndex: 5 - t,
                              },
                              children: e,
                            },
                            t,
                          ),
                        ),
                      }),
                      (0, Q.jsxs)(`div`, {
                        children: [
                          (0, Q.jsx)(`p`, {
                            className: `text-sm font-semibold`,
                            style: { color: `#1A3A2E` },
                            children: `50 000+ семей`,
                          }),
                          (0, Q.jsx)(`p`, {
                            className: `text-xs`,
                            style: { color: `#6B7A74` },
                            children: `уже используют навигатор`,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, Q.jsx)(`div`, {
                className: `flex-1 relative flex justify-center lg:justify-end`,
                children: (0, Q.jsxs)(`div`, {
                  className: `relative w-full max-w-lg`,
                  children: [
                    (0, Q.jsx)(`div`, {
                      className: `absolute inset-[-16px] rounded-3xl opacity-40`,
                      style: { border: `2px dashed #B8E6D5` },
                    }),
                    (0, Q.jsxs)(`div`, {
                      className: `relative overflow-hidden rounded-3xl w-full h-[420px] md:h-[520px]`,
                      children: [
                        (0, Q.jsx)(`img`, {
                          src: `https://readdy.ai/api/search-image?query=happy%20young%20family%20with%20baby%20sitting%20together%20in%20bright%20cozy%20living%20room%2C%20soft%20natural%20light%2C%20cream%20and%20mint%20green%20interior%2C%20warm%20smiles%2C%20modern%20Scandinavian%20style%20home%2C%20lifestyle%20photography%2C%20professional%20quality&width=600&height=520&seq=hero1&orientation=portrait`,
                          alt: `Счастливая молодая семья`,
                          className: `hero-img w-full h-full object-cover object-top`,
                        }),
                        (0, Q.jsx)(`div`, {
                          className: `absolute inset-0`,
                          style: {
                            background: `linear-gradient(to top, rgba(255,248,240,0.2) 0%, transparent 60%)`,
                          },
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(`div`, {
                      className: `absolute -left-6 top-12 px-4 py-3 rounded-2xl shadow-lg`,
                      style: {
                        background: `white`,
                        border: `1px solid rgba(184,230,213,0.4)`,
                      },
                      children: [
                        (0, Q.jsx)(`p`, {
                          className: `text-xs font-medium mb-1`,
                          style: { color: `#6B7A74` },
                          children: `Среднее пособие`,
                        }),
                        (0, Q.jsx)(`p`, {
                          className: `text-xl font-bold`,
                          style: { color: `#2C5F4F` },
                          children: `47 500 ₽`,
                        }),
                        (0, Q.jsx)(`p`, {
                          className: `text-xs`,
                          style: { color: `#3D8B6E` },
                          children: `в месяц`,
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(`div`, {
                      className: `absolute -right-4 bottom-16 px-4 py-3 rounded-2xl shadow-lg`,
                      style: {
                        background: `white`,
                        border: `1px solid rgba(184,230,213,0.4)`,
                      },
                      children: [
                        (0, Q.jsx)(`p`, {
                          className: `text-xs font-medium mb-1`,
                          style: { color: `#6B7A74` },
                          children: `Программ поддержки`,
                        }),
                        (0, Q.jsx)(`p`, {
                          className: `text-xl font-bold`,
                          style: { color: `#2C5F4F` },
                          children: `24+`,
                        }),
                        (0, Q.jsx)(`p`, {
                          className: `text-xs`,
                          style: { color: `#3D8B6E` },
                          children: `доступно вам`,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        (0, Q.jsxs)(`div`, {
          className: `absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce`,
          children: [
            (0, Q.jsx)(`p`, {
              className: `text-xs`,
              style: { color: `#6B7A74` },
              children: `Прокрутите вниз`,
            }),
            (0, Q.jsx)(`i`, {
              className: `ri-arrow-down-line text-lg`,
              style: { color: `#3D8B6E` },
            }),
          ],
        }),
      ],
    })
  );
}
var yn = [
    { value: `moscow`, label: `Москва`, baseSupport: 25e3 },
    { value: `spb`, label: `Санкт-Петербург`, baseSupport: 22e3 },
    { value: `novosibirsk`, label: `Новосибирск`, baseSupport: 18e3 },
    { value: `ekaterinburg`, label: `Екатеринбург`, baseSupport: 17e3 },
    { value: `kazan`, label: `Казань`, baseSupport: 16e3 },
    { value: `krasnodar`, label: `Краснодар`, baseSupport: 15e3 },
    { value: `samara`, label: `Самара`, baseSupport: 14e3 },
    { value: `ufa`, label: `Уфа`, baseSupport: 14500 },
  ],
  bn = [
    {
      key: `maternity`,
      label: `Пособие по беременности и родам`,
      perChild: 12e3,
      base: 8e3,
    },
    {
      key: `childcare`,
      label: `Ежемесячное пособие по уходу за ребёнком`,
      perChild: 7500,
      base: 5e3,
    },
    {
      key: `birth`,
      label: `Единовременное пособие при рождении`,
      perChild: 2e4,
      base: 2e4,
    },
    {
      key: `housing`,
      label: `Субсидия на жильё`,
      perChild: 0,
      base: 5e4,
      housingOnly: !0,
    },
    {
      key: `regional`,
      label: `Региональная доплата`,
      perChild: 3e3,
      base: 2e3,
    },
  ],
  xn = [
    {
      id: 1,
      type: `clinic`,
      name: `Детская поликлиника №1`,
      address: `ул. Садовая, 12`,
      lat: 55.755,
      lng: 37.617,
    },
    {
      id: 2,
      type: `clinic`,
      name: `Женская консультация №3`,
      address: `пр. Мира, 45`,
      lat: 55.762,
      lng: 37.632,
    },
    {
      id: 3,
      type: `clinic`,
      name: `Перинатальный центр`,
      address: `ул. Ленина, 78`,
      lat: 55.748,
      lng: 37.605,
    },
    {
      id: 4,
      type: `park`,
      name: `Парк Семейного отдыха`,
      address: `ул. Парковая, 3`,
      lat: 55.77,
      lng: 37.625,
    },
    {
      id: 5,
      type: `park`,
      name: `Детский парк «Радуга»`,
      address: `ул. Зелёная, 19`,
      lat: 55.758,
      lng: 37.598,
    },
    {
      id: 6,
      type: `park`,
      name: `Сквер «Солнечный»`,
      address: `пер. Тихий, 7`,
      lat: 55.744,
      lng: 37.64,
    },
    {
      id: 7,
      type: `kindergarten`,
      name: `Детский сад №42 «Ромашка»`,
      address: `ул. Цветочная, 5`,
      lat: 55.765,
      lng: 37.61,
    },
    {
      id: 8,
      type: `kindergarten`,
      name: `Детский сад №17 «Солнышко»`,
      address: `ул. Берёзовая, 22`,
      lat: 55.752,
      lng: 37.628,
    },
    {
      id: 9,
      type: `kindergarten`,
      name: `Частный сад «Умка»`,
      address: `ул. Дружбы, 11`,
      lat: 55.76,
      lng: 37.645,
    },
    {
      id: 10,
      type: `clinic`,
      name: `Стоматология для детей`,
      address: `ул. Весенняя, 33`,
      lat: 55.756,
      lng: 37.655,
    },
  ],
  Sn = [
    {
      id: 1,
      category: `Беременность`,
      date: `15 марта 2026`,
      title: `Как подготовиться к рождению первого ребёнка: полный гид для молодых родителей`,
      excerpt: `Рождение первого ребёнка — это волнующее и немного пугающее событие. Мы собрали всё самое важное: от выбора роддома до первых дней дома.`,
      image: `https://readdy.ai/api/search-image?query=happy%20pregnant%20woman%20sitting%20in%20cozy%20nursery%20room%20with%20soft%20pastel%20mint%20and%20cream%20decor%2C%20warm%20natural%20light%20streaming%20through%20window%2C%20modern%20minimalist%20interior%2C%20lifestyle%20photography&width=600&height=400&seq=art1&orientation=landscape`,
      readTime: `8 мин`,
    },
    {
      id: 2,
      category: `Новорождённый`,
      date: `28 февраля 2026`,
      title: `Первый месяц с новорождённым: режим, кормление и сон`,
      excerpt: `Первые недели с малышом могут быть непростыми. Узнайте, как наладить режим, правильно кормить и помочь ребёнку спать дольше.`,
      image: `https://readdy.ai/api/search-image?query=newborn%20baby%20sleeping%20peacefully%20in%20soft%20cream%20colored%20blanket%2C%20gentle%20warm%20light%2C%20close%20up%20tender%20moment%2C%20pastel%20nursery%20background%2C%20professional%20lifestyle%20photography&width=600&height=400&seq=art2&orientation=landscape`,
      readTime: `6 мин`,
    },
    {
      id: 3,
      category: `Жильё`,
      date: `10 февраля 2026`,
      title: `Семейная ипотека 2026: условия, документы и как получить субсидию`,
      excerpt: `Государство активно поддерживает молодые семьи в улучшении жилищных условий. Разбираемся в актуальных программах и льготных ставках.`,
      image: `https://readdy.ai/api/search-image?query=modern%20cozy%20family%20apartment%20living%20room%20with%20soft%20mint%20green%20accents%2C%20cream%20walls%2C%20warm%20lighting%2C%20plants%2C%20comfortable%20furniture%2C%20real%20estate%20lifestyle%20photography&width=600&height=400&seq=art3&orientation=landscape`,
      readTime: `10 мин`,
    },
  ],
  $ = [
    {
      id: `young-parents`,
      icon: `ri-parent-line`,
      color: `#B8E6D5`,
      bgColor: `#F0FAF7`,
      title: `Молодые родители`,
      description: `Для тех, кто только начинает путь родительства. Делимся опытом, поддерживаем друг друга.`,
      members: 1284,
      online: 47,
      lastMessage: `Кто знает хорошего педиатра в Москве?`,
      lastTime: `2 мин назад`,
    },
    {
      id: `many-children`,
      icon: `ri-group-line`,
      color: `#FFD6B0`,
      bgColor: `#FFF8F0`,
      title: `Многодетные семьи`,
      description: `Сообщество для семей с тремя и более детьми. Льготы, советы, взаимопомощь.`,
      members: 876,
      online: 31,
      lastMessage: `Новые льготы для многодетных в 2026 году!`,
      lastTime: `15 мин назад`,
    },
    {
      id: `special-children`,
      icon: `ri-heart-2-line`,
      color: `#F9C6D0`,
      bgColor: `#FFF5F7`,
      title: `Особые дети`,
      description: `Поддержка семей с детьми с особыми потребностями. Реабилитация, права, ресурсы.`,
      members: 542,
      online: 18,
      lastMessage: `Поделитесь опытом получения ИПР`,
      lastTime: `1 час назад`,
    },
  ],
  Cn = [
    {
      id: 1,
      author: `Анна К.`,
      avatar: `👩`,
      avatarBg: `#B8E6D5`,
      time: `Сегодня, 10:32`,
      tag: `Вопрос`,
      tagColor: `#3D8B6E`,
      title: `Как оформить пособие на третьего ребёнка?`,
      text: `Подскажите, какие документы нужны для оформления ежемесячного пособия на третьего ребёнка. Уже собрала часть, но не уверена в полноте списка.`,
      replies: 12,
      likes: 8,
    },
    {
      id: 2,
      author: `Михаил Д.`,
      avatar: `👨`,
      avatarBg: `#FFD6B0`,
      time: `Вчера, 18:15`,
      tag: `Совет`,
      tagColor: `#D4820A`,
      title: `Семейная ипотека — личный опыт получения`,
      text: `Прошли весь путь от подачи заявки до получения ключей. Делюсь пошаговым опытом, чтобы вы не наступали на те же грабли.`,
      replies: 24,
      likes: 41,
    },
    {
      id: 3,
      author: `Елена С.`,
      avatar: `👩‍🦱`,
      avatarBg: `#F9C6D0`,
      time: `2 дня назад`,
      tag: `Новость`,
      tagColor: `#C0392B`,
      title: `Новые выплаты с 1 апреля 2026 — что изменилось`,
      text: `Правительство утвердило новые размеры пособий. Разбираю, кому и сколько теперь положено, и как пересчитать свои выплаты.`,
      replies: 37,
      likes: 89,
    },
    {
      id: 4,
      author: `Ольга Т.`,
      avatar: `👩‍🦳`,
      avatarBg: `#D4F0E8`,
      time: `3 дня назад`,
      tag: `Помощь`,
      tagColor: `#2C5F4F`,
      title: `Ищу логопеда для ребёнка 3 лет в Санкт-Петербурге`,
      text: `Нам поставили задержку речевого развития. Ищем хорошего логопеда, желательно по ОМС. Буду благодарна за рекомендации.`,
      replies: 9,
      likes: 5,
    },
  ],
  wn = [
    {
      id: 1,
      category: `Для беременных`,
      categoryColor: `#3D8B6E`,
      categoryBg: `#E8F7F2`,
      title: `Подготовка к родам: тело и психология`,
      description: `Практический курс для будущих мам. Дыхательные техники, позиции для родов, управление болью и эмоциональная подготовка.`,
      lessons: 8,
      duration: `4 часа`,
      level: `Начинающий`,
      rating: 4.9,
      students: 2341,
      image: `https://readdy.ai/api/search-image?query=pregnant%20woman%20doing%20yoga%20breathing%20exercises%20in%20bright%20airy%20studio%20with%20soft%20mint%20green%20and%20cream%20decor%2C%20calm%20peaceful%20atmosphere%2C%20professional%20wellness%20photography&width=500&height=320&seq=course1&orientation=landscape`,
      instructor: `Наталья Воронова`,
      instructorRole: `Акушер-гинеколог`,
      free: !0,
    },
    {
      id: 2,
      category: `Новорождённый`,
      categoryColor: `#D4820A`,
      categoryBg: `#FFF3E0`,
      title: `Уход за новорождённым: первые 3 месяца`,
      description: `Всё о купании, кормлении, сне и развитии малыша. Как понять плач ребёнка и что делать в нестандартных ситуациях.`,
      lessons: 12,
      duration: `6 часов`,
      level: `Начинающий`,
      rating: 4.8,
      students: 3102,
      image: `https://readdy.ai/api/search-image?query=mother%20gently%20bathing%20newborn%20baby%20in%20soft%20warm%20light%2C%20cream%20colored%20bathroom%2C%20tender%20caring%20moment%2C%20professional%20lifestyle%20photography%20with%20pastel%20tones&width=500&height=320&seq=course2&orientation=landscape`,
      instructor: `Ирина Смирнова`,
      instructorRole: `Педиатр, неонатолог`,
      free: !0,
    },
    {
      id: 3,
      category: `Финансы семьи`,
      categoryColor: `#2C5F4F`,
      categoryBg: `#E8F7F2`,
      title: `Семейный бюджет с ребёнком: как не потерять голову`,
      description: `Планирование расходов, оптимизация трат, накопления на образование. Реальные инструменты для молодых семей.`,
      lessons: 6,
      duration: `3 часа`,
      level: `Средний`,
      rating: 4.7,
      students: 1876,
      image: `https://readdy.ai/api/search-image?query=young%20couple%20sitting%20at%20table%20with%20laptop%20and%20documents%20planning%20family%20budget%2C%20cozy%20home%20office%20with%20plants%20and%20warm%20lighting%2C%20modern%20minimalist%20interior%2C%20lifestyle%20photography&width=500&height=320&seq=course3&orientation=landscape`,
      instructor: `Дмитрий Козлов`,
      instructorRole: `Финансовый консультант`,
      free: !1,
      price: `990 ₽`,
    },
    {
      id: 4,
      category: `Психология`,
      categoryColor: `#8B5E8B`,
      categoryBg: `#F5EEF8`,
      title: `Партнёрство в родительстве: как не потерять себя`,
      description: `Как сохранить отношения после рождения ребёнка, распределить обязанности и поддерживать друг друга в трудные моменты.`,
      lessons: 10,
      duration: `5 часов`,
      level: `Для пар`,
      rating: 4.9,
      students: 1543,
      image: `https://readdy.ai/api/search-image?query=happy%20couple%20with%20baby%20laughing%20together%20in%20bright%20cozy%20living%20room%2C%20warm%20natural%20light%2C%20cream%20and%20sage%20green%20interior%2C%20genuine%20joyful%20family%20moment%2C%20lifestyle%20photography&width=500&height=320&seq=course4&orientation=landscape`,
      instructor: `Светлана Орлова`,
      instructorRole: `Семейный психолог`,
      free: !1,
      price: `1 490 ₽`,
    },
  ],
  Tn = [
    {
      id: 1,
      date: `10`,
      month: `апр`,
      day: `Четверг`,
      time: `10:00 – 12:00`,
      title: `Вебинар: Льготы для многодетных семей в 2026`,
      type: `online`,
      typeLabel: `Онлайн`,
      typeColor: `#3D8B6E`,
      typeBg: `#E8F7F2`,
      location: `Zoom`,
      participants: 234,
      icon: `ri-video-line`,
    },
    {
      id: 2,
      date: `12`,
      month: `апр`,
      day: `Суббота`,
      time: `11:00 – 14:00`,
      title: `Семейный пикник в парке «Сокольники»`,
      type: `offline`,
      typeLabel: `Офлайн`,
      typeColor: `#D4820A`,
      typeBg: `#FFF3E0`,
      location: `Парк Сокольники, Москва`,
      participants: 87,
      icon: `ri-sun-line`,
    },
    {
      id: 3,
      date: `15`,
      month: `апр`,
      day: `Вторник`,
      time: `19:00 – 20:30`,
      title: `Мастер-класс: Первый прикорм — когда и как начинать`,
      type: `online`,
      typeLabel: `Онлайн`,
      typeColor: `#3D8B6E`,
      typeBg: `#E8F7F2`,
      location: `YouTube Live`,
      participants: 512,
      icon: `ri-live-line`,
    },
    {
      id: 4,
      date: `19`,
      month: `апр`,
      day: `Суббота`,
      time: `10:00 – 13:00`,
      title: `Ярмарка детских товаров и обмен вещами`,
      type: `offline`,
      typeLabel: `Офлайн`,
      typeColor: `#D4820A`,
      typeBg: `#FFF3E0`,
      location: `ТЦ «Семейный», зал 2`,
      participants: 156,
      icon: `ri-store-2-line`,
    },
    {
      id: 5,
      date: `22`,
      month: `апр`,
      day: `Вторник`,
      time: `18:00 – 19:30`,
      title: `Консультация юриста: жилищные права семей`,
      type: `online`,
      typeLabel: `Онлайн`,
      typeColor: `#3D8B6E`,
      typeBg: `#E8F7F2`,
      location: `Zoom`,
      participants: 98,
      icon: `ri-scales-line`,
    },
    {
      id: 6,
      date: `26`,
      month: `апр`,
      day: `Суббота`,
      time: `12:00 – 15:00`,
      title: `Встреча клуба «Молодые родители» — апрель`,
      type: `offline`,
      typeLabel: `Офлайн`,
      typeColor: `#D4820A`,
      typeBg: `#FFF3E0`,
      location: `Библиотека №14, Москва`,
      participants: 43,
      icon: `ri-team-line`,
    },
  ],
  En = [
    {
      id: 1,
      category: `Пособия при рождении`,
      question: `Какие выплаты положены при рождении первого ребёнка?`,
      answer: `При рождении первого ребёнка семья имеет право на несколько выплат: единовременное пособие при рождении (в 2026 году — 24 604 ₽), ежемесячное пособие по уходу за ребёнком до 1,5 лет (40% от среднего заработка, но не менее 9 227 ₽), а также пособие по беременности и родам (100% среднего заработка за 140 дней). Дополнительно в большинстве регионов предусмотрены региональные выплаты.`,
      hasApplication: !0,
      applicationUrl: `https://www.gosuslugi.ru/600426`,
      applicationLabel: `Подать заявление на Госуслугах`,
    },
    {
      id: 2,
      category: `Пособия при рождении`,
      question: `Что такое материнский капитал и как его получить в 2026 году?`,
      answer: `Материнский капитал — это государственная субсидия, которая выдаётся при рождении или усыновлении детей. В 2026 году размер составляет 676 398 ₽ на первого ребёнка и 893 571 ₽ на второго (если на первого не получали). Средства можно направить на улучшение жилищных условий, образование детей, накопительную пенсию матери или ежемесячные выплаты. Сертификат оформляется автоматически через ЗАГС при регистрации рождения, но заявление на использование нужно подавать отдельно.`,
      hasApplication: !0,
      applicationUrl: `https://www.gosuslugi.ru/10055`,
      applicationLabel: `Распорядиться маткапиталом на Госуслугах`,
    },
    {
      id: 3,
      category: `Многодетные семьи`,
      question: `Какие льготы предусмотрены для многодетных семей?`,
      answer: `Многодетные семьи (3 и более детей) имеют право на: ежемесячное пособие на каждого ребёнка до 18 лет (при доходе ниже 2 прожиточных минимумов), налоговый вычет в увеличенном размере, льготы на оплату ЖКХ (не менее 30% скидки), бесплатное питание в школе, первоочерёдное зачисление в детский сад, а также земельный участок или денежную компенсацию вместо него. Конкретные размеры зависят от региона.`,
      hasApplication: !0,
      applicationUrl: `https://www.gosuslugi.ru/600426/1`,
      applicationLabel: `Оформить статус многодетной семьи`,
    },
    {
      id: 4,
      category: `Жильё`,
      question: `Как получить семейную ипотеку под льготную ставку?`,
      answer: `Семейная ипотека в 2026 году доступна семьям с детьми, рождёнными с 2018 года. Ставка — от 6% годовых (в ряде регионов — от 2%). Максимальная сумма: 12 млн ₽ для Москвы, Санкт-Петербурга и их областей, 6 млн ₽ для остальных регионов. Первоначальный взнос — от 20%. Для оформления нужны: паспорт, свидетельства о рождении детей, справка о доходах, документы на недвижимость. Заявку можно подать в любом банке-участнике программы или через Госуслуги.`,
      hasApplication: !0,
      applicationUrl: `https://www.gosuslugi.ru/420`,
      applicationLabel: `Узнать об ипотечных программах`,
    },
    {
      id: 5,
      category: `Жильё`,
      question: `Можно ли использовать материнский капитал на погашение ипотеки?`,
      answer: `Да, это один из самых популярных способов использования маткапитала. Средства можно направить на: первоначальный взнос по ипотеке, погашение основного долга и процентов по уже действующему кредиту. Важно: жильё должно быть оформлено в общую собственность всех членов семьи, включая детей, в течение 6 месяцев после погашения кредита. Заявление подаётся в Социальный фонд России (СФР) лично или через Госуслуги.`,
      hasApplication: !0,
      applicationUrl: `https://www.gosuslugi.ru/10055/1`,
      applicationLabel: `Подать заявление в СФР`,
    },
    {
      id: 6,
      category: `Декрет и работа`,
      question: `Как рассчитывается пособие по беременности и родам?`,
      answer: `Пособие по беременности и родам (БиР) рассчитывается исходя из среднего заработка за 2 предшествующих года. Формула: (сумма заработка за 2 года) ÷ 730 дней × количество дней отпуска. Стандартный отпуск — 140 дней (70 до и 70 после родов). При многоплодной беременности — 194 дня, при осложнённых родах — 156 дней. Максимальный размер в 2026 году — около 794 000 ₽. Пособие выплачивается единовременно через работодателя или СФР.`,
      hasApplication: !1,
      applicationUrl: ``,
      applicationLabel: ``,
    },
    {
      id: 7,
      category: `Декрет и работа`,
      question: `Может ли отец уйти в декретный отпуск вместо матери?`,
      answer: `Да, отпуск по уходу за ребёнком до 3 лет может оформить любой из родителей, а также бабушка, дедушка или другой родственник, фактически ухаживающий за ребёнком. Ежемесячное пособие (40% от среднего заработка) выплачивается тому, кто оформил отпуск. Для оформления нужно подать заявление работодателю и предоставить свидетельство о рождении ребёнка и справку с места работы второго родителя о том, что он не использует отпуск.`,
      hasApplication: !1,
      applicationUrl: ``,
      applicationLabel: ``,
    },
    {
      id: 8,
      category: `Детский сад и образование`,
      question: `Как встать в очередь в детский сад и какие льготы есть при зачислении?`,
      answer: `Встать в очередь в детский сад можно с рождения ребёнка через Госуслуги или МФЦ. Приоритетное право на зачисление имеют: дети из многодетных семей, дети-инвалиды и дети с ОВЗ, дети военнослужащих, дети сотрудников полиции и прокуратуры, дети из неполных семей. Бесплатное место в муниципальном саду гарантировано с 3 лет. Часть родительской платы компенсируется государством: 20% на первого ребёнка, 50% на второго, 70% на третьего и последующих.`,
      hasApplication: !0,
      applicationUrl: `https://www.gosuslugi.ru/600297`,
      applicationLabel: `Встать в очередь в детский сад`,
    },
    {
      id: 9,
      category: `Особые дети`,
      question: `Какие выплаты и льготы положены семьям с детьми-инвалидами?`,
      answer: `Семьи с детьми-инвалидами получают: ежемесячную выплату по уходу (10 000 ₽ для родителей, 1 200 ₽ для других лиц), пенсию по инвалидности ребёнку (от 15 000 ₽), налоговый вычет 12 000 ₽ в месяц на каждого родителя, бесплатные лекарства и медицинские изделия, льготный проезд, путёвки в санатории. Один из родителей имеет право на досрочную пенсию. Для оформления льгот необходимо установить инвалидность через МСЭ.`,
      hasApplication: !0,
      applicationUrl: `https://www.gosuslugi.ru/18810`,
      applicationLabel: `Оформить льготы для ребёнка-инвалида`,
    },
  ],
  Dn = [
    {
      id: 1,
      icon: `ri-heart-pulse-line`,
      color: `#B8E6D5`,
      title: `Маршрут беременности`,
      description: `Пошаговый план от постановки на учёт до выписки из роддома. Все нужные анализы, врачи и документы в одном месте.`,
      steps: [
        `Встать на учёт до 12 недель`,
        `Пройти скрининги`,
        `Оформить декретный отпуск`,
        `Выбрать роддом`,
      ],
      cta: `Начать маршрут`,
    },
    {
      id: 2,
      icon: `ri-bear-smile-line`,
      color: `#FFE4CC`,
      title: `Маршрут новорождённого`,
      description: `Всё, что нужно сделать после рождения малыша: оформление документов, первые прививки, патронаж и пособия.`,
      steps: [
        `Зарегистрировать рождение`,
        `Оформить СНИЛС и полис`,
        `Встать на учёт в поликлинику`,
        `Получить пособия`,
      ],
      cta: `Начать маршрут`,
    },
    {
      id: 3,
      icon: `ri-home-heart-line`,
      color: `#D4F0E8`,
      title: `Маршрут жилья`,
      description: `Семейная ипотека, субсидии и льготы на улучшение жилищных условий. Помогаем разобраться в программах поддержки.`,
      steps: [
        `Проверить право на льготы`,
        `Собрать документы`,
        `Подать заявку на ипотеку`,
        `Получить субсидию`,
      ],
      cta: `Начать маршрут`,
    },
  ];
function On() {
  let [e, t] = (0, v.useState)(`moscow`),
    [n, r] = (0, v.useState)(1),
    [i, a] = (0, v.useState)(!1),
    [o, s] = (0, v.useState)(!1),
    c = (0, v.useMemo)(() => yn.find((t) => t.value === e) || yn[0], [e]),
    l = (0, v.useMemo)(() => {
      let e = c.baseSupport / 15e3;
      return bn
        .map((t) => {
          if (t.housingOnly && !i) return { ...t, amount: 0 };
          let r = Math.round((t.base + t.perChild * n) * e);
          return { ...t, amount: r };
        })
        .filter((e) => e.amount > 0);
    }, [c, n, i]),
    u = (0, v.useMemo)(() => l.reduce((e, t) => e + t.amount, 0), [l]),
    d = (e) =>
      e.toLocaleString(`ru-RU`, {
        style: `currency`,
        currency: `RUB`,
        maximumFractionDigits: 0,
      });
  return (0, Q.jsx)(`section`, {
    id: `calculator`,
    className: `py-20 md:py-28`,
    style: { background: `linear-gradient(180deg, #F0FAF7 0%, #FFF8F0 100%)` },
    children: (0, Q.jsxs)(`div`, {
      className: `max-w-4xl mx-auto px-4 md:px-8`,
      children: [
        (0, Q.jsxs)(`div`, {
          className: `text-center mb-12`,
          children: [
            (0, Q.jsxs)(`span`, {
              className: `inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4`,
              style: { background: `rgba(184,230,213,0.3)`, color: `#2C5F4F` },
              children: [
                (0, Q.jsx)(`i`, { className: `ri-calculator-line mr-2` }),
                `Калькулятор пособий`,
              ],
            }),
            (0, Q.jsx)(`h2`, {
              className: `text-3xl md:text-4xl font-bold mb-4`,
              style: {
                fontFamily: `'Playfair Display', serif`,
                color: `#1A3A2E`,
              },
              children: `Узнайте, сколько вам положено`,
            }),
            (0, Q.jsx)(`p`, {
              className: `text-base md:text-lg max-w-xl mx-auto`,
              style: { color: `#6B7A74` },
              children: `Введите данные о вашей семье и регионе — мы рассчитаем все доступные выплаты и льготы`,
            }),
          ],
        }),
        (0, Q.jsxs)(`div`, {
          className: `rounded-3xl p-6 md:p-10`,
          style: {
            background: `white`,
            border: `1px solid rgba(184,230,213,0.4)`,
          },
          children: [
            (0, Q.jsxs)(`div`, {
              className: `grid grid-cols-1 md:grid-cols-3 gap-6 mb-8`,
              children: [
                (0, Q.jsxs)(`div`, {
                  children: [
                    (0, Q.jsx)(`label`, {
                      className: `block text-xs font-semibold uppercase tracking-widest mb-2`,
                      style: { color: `#3D8B6E` },
                      children: `Регион`,
                    }),
                    (0, Q.jsxs)(`div`, {
                      className: `relative`,
                      children: [
                        (0, Q.jsx)(`select`, {
                          value: e,
                          onChange: (e) => t(e.target.value),
                          className: `w-full h-12 px-4 pr-10 rounded-xl text-sm appearance-none cursor-pointer transition-all duration-200 focus:outline-none`,
                          style: {
                            background: `#F8FDFB`,
                            border: `1.5px solid #B8E6D5`,
                            color: `#1A3A2E`,
                          },
                          children: yn.map((e) =>
                            (0, Q.jsx)(
                              `option`,
                              { value: e.value, children: e.label },
                              e.value,
                            ),
                          ),
                        }),
                        (0, Q.jsx)(`div`, {
                          className: `absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none w-5 h-5 flex items-center justify-center`,
                          children: (0, Q.jsx)(`i`, {
                            className: `ri-arrow-down-s-line`,
                            style: { color: `#3D8B6E` },
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Q.jsxs)(`div`, {
                  children: [
                    (0, Q.jsx)(`label`, {
                      className: `block text-xs font-semibold uppercase tracking-widest mb-2`,
                      style: { color: `#3D8B6E` },
                      children: `Количество детей`,
                    }),
                    (0, Q.jsxs)(`div`, {
                      className: `flex items-center h-12 rounded-xl overflow-hidden`,
                      style: {
                        border: `1.5px solid #B8E6D5`,
                        background: `#F8FDFB`,
                      },
                      children: [
                        (0, Q.jsx)(`button`, {
                          onClick: () => r((e) => Math.max(1, e - 1)),
                          className: `w-12 h-full flex items-center justify-center text-lg font-bold transition-colors duration-200 hover:bg-green-50 cursor-pointer`,
                          style: { color: `#3D8B6E` },
                          children: `−`,
                        }),
                        (0, Q.jsx)(`span`, {
                          className: `flex-1 text-center text-lg font-bold`,
                          style: { color: `#1A3A2E` },
                          children: n,
                        }),
                        (0, Q.jsx)(`button`, {
                          onClick: () => r((e) => Math.min(6, e + 1)),
                          className: `w-12 h-full flex items-center justify-center text-lg font-bold transition-colors duration-200 hover:bg-green-50 cursor-pointer`,
                          style: { color: `#3D8B6E` },
                          children: `+`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Q.jsxs)(`div`, {
                  children: [
                    (0, Q.jsx)(`label`, {
                      className: `block text-xs font-semibold uppercase tracking-widest mb-2`,
                      style: { color: `#3D8B6E` },
                      children: `Нужна субсидия на жильё?`,
                    }),
                    (0, Q.jsx)(`div`, {
                      className: `flex gap-3 h-12 items-center`,
                      children: [
                        { val: !0, label: `Да` },
                        { val: !1, label: `Нет` },
                      ].map(({ val: e, label: t }) =>
                        (0, Q.jsx)(
                          `button`,
                          {
                            onClick: () => a(e),
                            className: `flex-1 h-12 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap`,
                            style: {
                              background: i === e ? `#3D8B6E` : `#F8FDFB`,
                              color: i === e ? `white` : `#3D8B6E`,
                              border: `1.5px solid ${i === e ? `#3D8B6E` : `#B8E6D5`}`,
                            },
                            children: t,
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
            (0, Q.jsxs)(`div`, {
              className: `rounded-2xl p-6 md:p-8 mb-6`,
              style: {
                background: `linear-gradient(135deg, #F0FAF7, #E8F7F2)`,
                borderLeft: `5px solid #3D8B6E`,
              },
              children: [
                (0, Q.jsxs)(`div`, {
                  className: `flex flex-col md:flex-row md:items-center md:justify-between gap-4`,
                  children: [
                    (0, Q.jsxs)(`div`, {
                      children: [
                        (0, Q.jsx)(`p`, {
                          className: `text-sm font-medium mb-1`,
                          style: { color: `#6B7A74` },
                          children: `Ориентировочная поддержка для вашей семьи`,
                        }),
                        (0, Q.jsx)(`p`, {
                          className: `text-5xl md:text-6xl font-bold`,
                          style: {
                            color: `#1A3A2E`,
                            fontFamily: `'Playfair Display', serif`,
                          },
                          children: d(u),
                        }),
                        (0, Q.jsxs)(`p`, {
                          className: `text-sm mt-1`,
                          style: { color: `#3D8B6E` },
                          children: [
                            `в месяц · `,
                            c.label,
                            ` · `,
                            n,
                            ` `,
                            n === 1 ? `ребёнок` : n < 5 ? `ребёнка` : `детей`,
                          ],
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(`button`, {
                      onClick: () => s((e) => !e),
                      className: `inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap`,
                      style: {
                        background: `white`,
                        color: `#3D8B6E`,
                        border: `1.5px solid #B8E6D5`,
                      },
                      children: [
                        (0, Q.jsx)(`i`, {
                          className: `ri-${o ? `eye-off` : `eye`}-line`,
                        }),
                        o ? `Скрыть` : `Подробнее`,
                      ],
                    }),
                  ],
                }),
                o &&
                  (0, Q.jsx)(`div`, {
                    className: `mt-6 pt-6`,
                    style: { borderTop: `1px solid rgba(184,230,213,0.5)` },
                    children: (0, Q.jsx)(`div`, {
                      className: `space-y-3`,
                      children: l.map((e) =>
                        (0, Q.jsxs)(
                          `div`,
                          {
                            className: `flex items-center justify-between gap-4`,
                            children: [
                              (0, Q.jsxs)(`div`, {
                                className: `flex items-center gap-3`,
                                children: [
                                  (0, Q.jsx)(`div`, {
                                    className: `w-5 h-5 flex items-center justify-center`,
                                    children: (0, Q.jsx)(`i`, {
                                      className: `ri-check-line text-sm`,
                                      style: { color: `#3D8B6E` },
                                    }),
                                  }),
                                  (0, Q.jsx)(`span`, {
                                    className: `text-sm`,
                                    style: { color: `#4A6B5E` },
                                    children: e.label,
                                  }),
                                ],
                              }),
                              (0, Q.jsx)(`span`, {
                                className: `text-sm font-semibold whitespace-nowrap`,
                                style: { color: `#1A3A2E` },
                                children: d(e.amount),
                              }),
                            ],
                          },
                          e.key,
                        ),
                      ),
                    }),
                  }),
              ],
            }),
            (0, Q.jsxs)(`button`, {
              className: `w-full h-14 rounded-xl font-semibold text-white flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] cursor-pointer whitespace-nowrap`,
              style: {
                background: `linear-gradient(135deg, #3D8B6E, #2C5F4F)`,
                boxShadow: `0 8px 24px rgba(61,139,110,0.25)`,
              },
              children: [
                (0, Q.jsx)(`i`, { className: `ri-file-list-3-line text-lg` }),
                `Получить персональный план выплат`,
                (0, Q.jsx)(`i`, { className: `ri-arrow-right-line text-lg` }),
              ],
            }),
            (0, Q.jsx)(`p`, {
              className: `text-center text-xs mt-4`,
              style: { color: `#9CA3AF` },
              children: `* Расчёт является ориентировочным. Точные суммы зависят от индивидуальных условий.`,
            }),
          ],
        }),
      ],
    }),
  });
}
function kn() {
  let [e, t] = (0, v.useState)(null);
  return (0, Q.jsx)(`section`, {
    id: `routes`,
    className: `py-20 md:py-28`,
    style: { background: `#FFF8F0` },
    children: (0, Q.jsxs)(`div`, {
      className: `max-w-7xl mx-auto px-4 md:px-8`,
      children: [
        (0, Q.jsxs)(`div`, {
          className: `text-center mb-14`,
          children: [
            (0, Q.jsxs)(`span`, {
              className: `inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4`,
              style: { background: `rgba(184,230,213,0.3)`, color: `#2C5F4F` },
              children: [
                (0, Q.jsx)(`i`, { className: `ri-route-line mr-2` }),
                `Маршруты поддержки`,
              ],
            }),
            (0, Q.jsx)(`h2`, {
              className: `text-3xl md:text-4xl font-bold mb-4`,
              style: {
                fontFamily: `'Playfair Display', serif`,
                color: `#1A3A2E`,
              },
              children: `Ваш путь шаг за шагом`,
            }),
            (0, Q.jsx)(`p`, {
              className: `text-base md:text-lg max-w-xl mx-auto`,
              style: { color: `#6B7A74` },
              children: `Выберите свой маршрут и следуйте понятным инструкциям — мы проведём вас через все этапы`,
            }),
          ],
        }),
        (0, Q.jsx)(`div`, {
          className: `grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8`,
          children: Dn.map((n) =>
            (0, Q.jsxs)(
              `div`,
              {
                className: `relative rounded-3xl p-8 cursor-pointer transition-all duration-400 group`,
                style: {
                  background: `white`,
                  border: `1.5px solid ${e === n.id ? n.color : `rgba(184,230,213,0.3)`}`,
                  transform: e === n.id ? `translateY(-8px)` : `translateY(0)`,
                },
                onMouseEnter: () => t(n.id),
                onMouseLeave: () => t(null),
                children: [
                  (0, Q.jsx)(`div`, {
                    className: `w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`,
                    style: { background: n.color },
                    children: (0, Q.jsx)(`i`, {
                      className: `${n.icon} text-2xl`,
                      style: { color: `#1A3A2E` },
                    }),
                  }),
                  (0, Q.jsx)(`h3`, {
                    className: `text-xl font-bold mb-3`,
                    style: {
                      fontFamily: `'Playfair Display', serif`,
                      color: `#1A3A2E`,
                    },
                    children: n.title,
                  }),
                  (0, Q.jsx)(`p`, {
                    className: `text-sm leading-relaxed mb-6`,
                    style: { color: `#6B7A74` },
                    children: n.description,
                  }),
                  (0, Q.jsx)(`div`, {
                    className: `space-y-2 mb-8`,
                    children: n.steps.map((e, t) =>
                      (0, Q.jsxs)(
                        `div`,
                        {
                          className: `flex items-center gap-3`,
                          children: [
                            (0, Q.jsx)(`div`, {
                              className: `w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0`,
                              style: { background: n.color, color: `#1A3A2E` },
                              children: t + 1,
                            }),
                            (0, Q.jsx)(`span`, {
                              className: `text-sm`,
                              style: { color: `#4A6B5E` },
                              children: e,
                            }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
                  (0, Q.jsxs)(`button`, {
                    className: `w-full h-11 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer whitespace-nowrap`,
                    style: {
                      background: e === n.id ? `#3D8B6E` : `transparent`,
                      color: e === n.id ? `white` : `#3D8B6E`,
                      border: `1.5px solid ${e === n.id ? `#3D8B6E` : `#B8E6D5`}`,
                    },
                    children: [
                      n.cta,
                      (0, Q.jsx)(`i`, { className: `ri-arrow-right-line` }),
                    ],
                  }),
                  (0, Q.jsx)(`div`, {
                    className: `absolute top-0 right-0 w-20 h-20 rounded-bl-3xl rounded-tr-3xl opacity-30`,
                    style: { background: n.color },
                  }),
                ],
              },
              n.id,
            ),
          ),
        }),
        (0, Q.jsx)(`div`, {
          className: `mt-16 rounded-3xl p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6`,
          style: {
            background: `linear-gradient(135deg, #F0FAF7, #E8F7F2)`,
            border: `1px solid rgba(184,230,213,0.4)`,
          },
          children: [
            { icon: `ri-team-line`, value: `50 000+`, label: `Семей помогли` },
            {
              icon: `ri-file-check-line`,
              value: `24`,
              label: `Программы поддержки`,
            },
            { icon: `ri-map-pin-line`, value: `85`, label: `Регионов России` },
            {
              icon: `ri-time-line`,
              value: `15 мин`,
              label: `Среднее время оформления`,
            },
          ].map((e, t) =>
            (0, Q.jsxs)(
              `div`,
              {
                className: `text-center`,
                children: [
                  (0, Q.jsx)(`div`, {
                    className: `w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3`,
                    style: { background: `rgba(184,230,213,0.4)` },
                    children: (0, Q.jsx)(`i`, {
                      className: `${e.icon} text-xl`,
                      style: { color: `#3D8B6E` },
                    }),
                  }),
                  (0, Q.jsx)(`p`, {
                    className: `text-2xl md:text-3xl font-bold mb-1`,
                    style: {
                      color: `#1A3A2E`,
                      fontFamily: `'Playfair Display', serif`,
                    },
                    children: e.value,
                  }),
                  (0, Q.jsx)(`p`, {
                    className: `text-sm`,
                    style: { color: `#6B7A74` },
                    children: e.label,
                  }),
                ],
              },
              t,
            ),
          ),
        }),
      ],
    }),
  });
}
function An() {
  let [e, t] = (0, v.useState)(`groups`),
    [n, r] = (0, v.useState)(null),
    [i, a] = (0, v.useState)(new Set()),
    [o, s] = (0, v.useState)(``),
    c = (e) => {
      a((t) => {
        let n = new Set(t);
        return (n.has(e) ? n.delete(e) : n.add(e), n);
      });
    };
  return (0, Q.jsx)(`section`, {
    id: `community`,
    className: `py-20 md:py-28`,
    style: { background: `#F7FBF9` },
    children: (0, Q.jsxs)(`div`, {
      className: `max-w-7xl mx-auto px-4 md:px-8`,
      children: [
        (0, Q.jsxs)(`div`, {
          className: `text-center mb-12`,
          children: [
            (0, Q.jsxs)(`div`, {
              className: `inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-sm font-medium`,
              style: { background: `rgba(184,230,213,0.3)`, color: `#2C5F4F` },
              children: [
                (0, Q.jsx)(`i`, { className: `ri-community-line` }),
                `Сообщество`,
              ],
            }),
            (0, Q.jsx)(`h2`, {
              className: `text-3xl md:text-4xl font-bold mb-4`,
              style: {
                fontFamily: `'Playfair Display', serif`,
                color: `#1A3A2E`,
              },
              children: `Вы не одни`,
            }),
            (0, Q.jsx)(`p`, {
              className: `text-base max-w-xl mx-auto`,
              style: { color: `#6B7A74` },
              children: `Общайтесь с семьями в похожих ситуациях, задавайте вопросы и делитесь опытом`,
            }),
          ],
        }),
        (0, Q.jsx)(`div`, {
          className: `flex justify-center mb-10`,
          children: (0, Q.jsx)(`div`, {
            className: `inline-flex p-1 rounded-full`,
            style: {
              background: `rgba(184,230,213,0.2)`,
              border: `1px solid rgba(184,230,213,0.4)`,
            },
            children: [`groups`, `board`].map((n) =>
              (0, Q.jsx)(
                `button`,
                {
                  onClick: () => t(n),
                  className: `px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap`,
                  style:
                    e === n
                      ? { background: `#3D8B6E`, color: `white` }
                      : { color: `#4A6B5E` },
                  children:
                    n === `groups`
                      ? (0, Q.jsxs)(Q.Fragment, {
                          children: [
                            (0, Q.jsx)(`i`, {
                              className: `ri-chat-3-line mr-2`,
                            }),
                            `Группы чатов`,
                          ],
                        })
                      : (0, Q.jsxs)(Q.Fragment, {
                          children: [
                            (0, Q.jsx)(`i`, {
                              className: `ri-sticky-note-line mr-2`,
                            }),
                            `Доска объявлений`,
                          ],
                        }),
                },
                n,
              ),
            ),
          }),
        }),
        e === `groups` &&
          (0, Q.jsxs)(`div`, {
            children: [
              (0, Q.jsx)(`div`, {
                className: `grid grid-cols-1 md:grid-cols-3 gap-6 mb-8`,
                children: $.map((e) =>
                  (0, Q.jsxs)(
                    `div`,
                    {
                      onClick: () => r(n === e.id ? null : e.id),
                      className: `rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1`,
                      style: {
                        background: n === e.id ? e.bgColor : `white`,
                        border: `2px solid ${n === e.id ? e.color : `rgba(184,230,213,0.3)`}`,
                      },
                      children: [
                        (0, Q.jsxs)(`div`, {
                          className: `flex items-start justify-between mb-4`,
                          children: [
                            (0, Q.jsx)(`div`, {
                              className: `w-12 h-12 rounded-2xl flex items-center justify-center`,
                              style: { background: e.color },
                              children: (0, Q.jsx)(`i`, {
                                className: `${e.icon} text-xl`,
                                style: { color: `#1A3A2E` },
                              }),
                            }),
                            (0, Q.jsxs)(`div`, {
                              className: `flex items-center gap-1.5`,
                              children: [
                                (0, Q.jsx)(`span`, {
                                  className: `w-2 h-2 rounded-full inline-block`,
                                  style: { background: `#4CAF50` },
                                }),
                                (0, Q.jsxs)(`span`, {
                                  className: `text-xs font-medium`,
                                  style: { color: `#4CAF50` },
                                  children: [e.online, ` онлайн`],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, Q.jsx)(`h3`, {
                          className: `font-bold text-base mb-2`,
                          style: { color: `#1A3A2E` },
                          children: e.title,
                        }),
                        (0, Q.jsx)(`p`, {
                          className: `text-sm mb-4 leading-relaxed`,
                          style: { color: `#6B7A74` },
                          children: e.description,
                        }),
                        (0, Q.jsxs)(`div`, {
                          className: `rounded-xl p-3 mb-4`,
                          style: { background: `rgba(184,230,213,0.15)` },
                          children: [
                            (0, Q.jsx)(`p`, {
                              className: `text-xs mb-1`,
                              style: { color: `#9CA3AF` },
                              children: `Последнее сообщение`,
                            }),
                            (0, Q.jsxs)(`p`, {
                              className: `text-sm font-medium`,
                              style: { color: `#2C5F4F` },
                              children: [`“`, e.lastMessage, `”`],
                            }),
                            (0, Q.jsx)(`p`, {
                              className: `text-xs mt-1`,
                              style: { color: `#9CA3AF` },
                              children: e.lastTime,
                            }),
                          ],
                        }),
                        (0, Q.jsxs)(`div`, {
                          className: `flex items-center justify-between`,
                          children: [
                            (0, Q.jsxs)(`span`, {
                              className: `text-xs`,
                              style: { color: `#9CA3AF` },
                              children: [
                                (0, Q.jsx)(`i`, {
                                  className: `ri-user-line mr-1`,
                                }),
                                e.members.toLocaleString(`ru-RU`),
                                ` участников`,
                              ],
                            }),
                            (0, Q.jsx)(`button`, {
                              className: `px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap`,
                              style:
                                n === e.id
                                  ? { background: `#3D8B6E`, color: `white` }
                                  : { background: e.color, color: `#1A3A2E` },
                              children: n === e.id ? `Открыто` : `Войти`,
                            }),
                          ],
                        }),
                      ],
                    },
                    e.id,
                  ),
                ),
              }),
              n &&
                (0, Q.jsxs)(`div`, {
                  className: `rounded-2xl overflow-hidden transition-all duration-300`,
                  style: {
                    border: `1px solid rgba(184,230,213,0.4)`,
                    background: `white`,
                  },
                  children: [
                    (0, Q.jsxs)(`div`, {
                      className: `px-6 py-4 flex items-center justify-between`,
                      style: {
                        background: `#F0FAF7`,
                        borderBottom: `1px solid rgba(184,230,213,0.3)`,
                      },
                      children: [
                        (0, Q.jsxs)(`div`, {
                          className: `flex items-center gap-3`,
                          children: [
                            (0, Q.jsx)(`div`, {
                              className: `w-9 h-9 rounded-xl flex items-center justify-center`,
                              style: {
                                background: $.find((e) => e.id === n)?.color,
                              },
                              children: (0, Q.jsx)(`i`, {
                                className: `${$.find((e) => e.id === n)?.icon} text-sm`,
                                style: { color: `#1A3A2E` },
                              }),
                            }),
                            (0, Q.jsxs)(`div`, {
                              children: [
                                (0, Q.jsx)(`p`, {
                                  className: `font-semibold text-sm`,
                                  style: { color: `#1A3A2E` },
                                  children: $.find((e) => e.id === n)?.title,
                                }),
                                (0, Q.jsxs)(`p`, {
                                  className: `text-xs`,
                                  style: { color: `#6B7A74` },
                                  children: [
                                    $.find((e) => e.id === n)?.online,
                                    ` онлайн`,
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, Q.jsx)(`button`, {
                          onClick: () => r(null),
                          className: `w-8 h-8 flex items-center justify-center rounded-lg cursor-pointer`,
                          style: { color: `#6B7A74` },
                          children: (0, Q.jsx)(`i`, {
                            className: `ri-close-line`,
                          }),
                        }),
                      ],
                    }),
                    (0, Q.jsx)(`div`, {
                      className: `px-6 py-5 space-y-4 max-h-64 overflow-y-auto`,
                      children: [
                        {
                          name: `Анна К.`,
                          emoji: `👩`,
                          bg: `#B8E6D5`,
                          text: `Всем привет! Кто уже оформил пособие на второго ребёнка в этом году?`,
                          time: `10:15`,
                        },
                        {
                          name: `Михаил Д.`,
                          emoji: `👨`,
                          bg: `#FFD6B0`,
                          text: `Мы оформили в январе, всё прошло через Госуслуги за 2 недели!`,
                          time: `10:18`,
                        },
                        {
                          name: `Елена С.`,
                          emoji: `👩‍🦱`,
                          bg: `#F9C6D0`,
                          text: `Подтверждаю, Госуслуги работают отлично. Главное — правильно заполнить заявление.`,
                          time: `10:22`,
                        },
                        {
                          name: `Ольга Т.`,
                          emoji: `👩‍🦳`,
                          bg: `#D4F0E8`,
                          text: `А у нас отказали из-за ошибки в документах. Пришлось переподавать 😅`,
                          time: `10:31`,
                        },
                      ].map((e, t) =>
                        (0, Q.jsxs)(
                          `div`,
                          {
                            className: `flex items-start gap-3`,
                            children: [
                              (0, Q.jsx)(`div`, {
                                className: `w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0`,
                                style: { background: e.bg },
                                children: e.emoji,
                              }),
                              (0, Q.jsxs)(`div`, {
                                className: `flex-1`,
                                children: [
                                  (0, Q.jsxs)(`div`, {
                                    className: `flex items-baseline gap-2 mb-1`,
                                    children: [
                                      (0, Q.jsx)(`span`, {
                                        className: `text-xs font-semibold`,
                                        style: { color: `#1A3A2E` },
                                        children: e.name,
                                      }),
                                      (0, Q.jsx)(`span`, {
                                        className: `text-xs`,
                                        style: { color: `#9CA3AF` },
                                        children: e.time,
                                      }),
                                    ],
                                  }),
                                  (0, Q.jsx)(`div`, {
                                    className: `rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm inline-block max-w-md`,
                                    style: {
                                      background: `#F7FBF9`,
                                      color: `#374151`,
                                    },
                                    children: e.text,
                                  }),
                                ],
                              }),
                            ],
                          },
                          t,
                        ),
                      ),
                    }),
                    (0, Q.jsxs)(`div`, {
                      className: `px-6 py-4 flex gap-3`,
                      style: { borderTop: `1px solid rgba(184,230,213,0.3)` },
                      children: [
                        (0, Q.jsx)(`input`, {
                          type: `text`,
                          value: o,
                          onChange: (e) => s(e.target.value),
                          placeholder: `Написать сообщение...`,
                          className: `flex-1 h-10 px-4 rounded-full text-sm focus:outline-none`,
                          style: {
                            background: `#F7FBF9`,
                            border: `1px solid rgba(184,230,213,0.4)`,
                            color: `#374151`,
                          },
                        }),
                        (0, Q.jsx)(`button`, {
                          onClick: () => s(``),
                          className: `w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 cursor-pointer transition-all duration-200 hover:scale-105`,
                          style: { background: `#3D8B6E`, color: `white` },
                          children: (0, Q.jsx)(`i`, {
                            className: `ri-send-plane-fill text-sm`,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
        e === `board` &&
          (0, Q.jsxs)(`div`, {
            className: `grid grid-cols-1 md:grid-cols-2 gap-5`,
            children: [
              Cn.map((e) =>
                (0, Q.jsxs)(
                  `div`,
                  {
                    className: `rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-0.5`,
                    style: {
                      background: `white`,
                      border: `1px solid rgba(184,230,213,0.3)`,
                    },
                    children: [
                      (0, Q.jsxs)(`div`, {
                        className: `flex items-start gap-3 mb-4`,
                        children: [
                          (0, Q.jsx)(`div`, {
                            className: `w-10 h-10 rounded-full flex items-center justify-center text-base flex-shrink-0`,
                            style: { background: e.avatarBg },
                            children: e.avatar,
                          }),
                          (0, Q.jsxs)(`div`, {
                            className: `flex-1 min-w-0`,
                            children: [
                              (0, Q.jsxs)(`div`, {
                                className: `flex items-center gap-2 flex-wrap`,
                                children: [
                                  (0, Q.jsx)(`span`, {
                                    className: `text-sm font-semibold`,
                                    style: { color: `#1A3A2E` },
                                    children: e.author,
                                  }),
                                  (0, Q.jsx)(`span`, {
                                    className: `px-2 py-0.5 rounded-full text-xs font-medium`,
                                    style: {
                                      background: `${e.tagColor}18`,
                                      color: e.tagColor,
                                    },
                                    children: e.tag,
                                  }),
                                ],
                              }),
                              (0, Q.jsx)(`p`, {
                                className: `text-xs mt-0.5`,
                                style: { color: `#9CA3AF` },
                                children: e.time,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, Q.jsx)(`h4`, {
                        className: `font-bold text-sm mb-2`,
                        style: { color: `#1A3A2E` },
                        children: e.title,
                      }),
                      (0, Q.jsx)(`p`, {
                        className: `text-sm leading-relaxed mb-4`,
                        style: { color: `#6B7A74` },
                        children: e.text,
                      }),
                      (0, Q.jsxs)(`div`, {
                        className: `flex items-center gap-4`,
                        children: [
                          (0, Q.jsxs)(`button`, {
                            onClick: () => c(e.id),
                            className: `flex items-center gap-1.5 text-xs cursor-pointer transition-colors duration-200`,
                            style: {
                              color: i.has(e.id) ? `#E05C6A` : `#9CA3AF`,
                            },
                            children: [
                              (0, Q.jsx)(`i`, {
                                className: i.has(e.id)
                                  ? `ri-heart-fill`
                                  : `ri-heart-line`,
                              }),
                              e.likes + (i.has(e.id) ? 1 : 0),
                            ],
                          }),
                          (0, Q.jsxs)(`button`, {
                            className: `flex items-center gap-1.5 text-xs cursor-pointer`,
                            style: { color: `#9CA3AF` },
                            children: [
                              (0, Q.jsx)(`i`, { className: `ri-chat-1-line` }),
                              e.replies,
                              ` ответов`,
                            ],
                          }),
                          (0, Q.jsxs)(`button`, {
                            className: `flex items-center gap-1.5 text-xs cursor-pointer ml-auto`,
                            style: { color: `#3D8B6E` },
                            children: [
                              `Читать далее `,
                              (0, Q.jsx)(`i`, {
                                className: `ri-arrow-right-line`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
              (0, Q.jsxs)(`div`, {
                className: `rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:-translate-y-0.5 md:col-span-2`,
                style: {
                  background: `rgba(184,230,213,0.15)`,
                  border: `2px dashed rgba(61,139,110,0.3)`,
                },
                children: [
                  (0, Q.jsx)(`div`, {
                    className: `w-12 h-12 rounded-2xl flex items-center justify-center mb-3`,
                    style: { background: `rgba(184,230,213,0.4)` },
                    children: (0, Q.jsx)(`i`, {
                      className: `ri-edit-line text-xl`,
                      style: { color: `#3D8B6E` },
                    }),
                  }),
                  (0, Q.jsx)(`p`, {
                    className: `font-semibold text-sm mb-1`,
                    style: { color: `#1A3A2E` },
                    children: `Задайте свой вопрос`,
                  }),
                  (0, Q.jsx)(`p`, {
                    className: `text-xs`,
                    style: { color: `#6B7A74` },
                    children: `Сообщество поможет найти ответ`,
                  }),
                ],
              }),
            ],
          }),
      ],
    }),
  });
}
var jn = [
  `Все`,
  `Для беременных`,
  `Новорождённый`,
  `Финансы семьи`,
  `Психология`,
];
function Mn() {
  let [e, t] = (0, v.useState)(`Все`),
    [n, r] = (0, v.useState)(new Set()),
    i = e === `Все` ? wn : wn.filter((t) => t.category === e),
    a = (e) => {
      r((t) => {
        let n = new Set(t);
        return (n.has(e) ? n.delete(e) : n.add(e), n);
      });
    };
  return (0, Q.jsx)(`section`, {
    id: `courses`,
    className: `py-20 md:py-28`,
    style: { background: `white` },
    children: (0, Q.jsxs)(`div`, {
      className: `max-w-7xl mx-auto px-4 md:px-8`,
      children: [
        (0, Q.jsxs)(`div`, {
          className: `flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10`,
          children: [
            (0, Q.jsxs)(`div`, {
              children: [
                (0, Q.jsxs)(`div`, {
                  className: `inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-sm font-medium`,
                  style: {
                    background: `rgba(255,228,204,0.5)`,
                    color: `#D4820A`,
                  },
                  children: [
                    (0, Q.jsx)(`i`, { className: `ri-graduation-cap-line` }),
                    `Обучение`,
                  ],
                }),
                (0, Q.jsx)(`h2`, {
                  className: `text-3xl md:text-4xl font-bold mb-3`,
                  style: {
                    fontFamily: `'Playfair Display', serif`,
                    color: `#1A3A2E`,
                  },
                  children: `Курсы для новых семей`,
                }),
                (0, Q.jsx)(`p`, {
                  className: `text-base max-w-lg`,
                  style: { color: `#6B7A74` },
                  children: `Практические знания от экспертов — педиатров, психологов и финансовых консультантов`,
                }),
              ],
            }),
            (0, Q.jsxs)(`div`, {
              className: `flex items-center gap-2 text-sm`,
              style: { color: `#6B7A74` },
              children: [
                (0, Q.jsx)(`i`, {
                  className: `ri-award-line`,
                  style: { color: `#3D8B6E` },
                }),
                (0, Q.jsx)(`span`, { children: `Сертификат по окончании` }),
              ],
            }),
          ],
        }),
        (0, Q.jsx)(`div`, {
          className: `flex flex-wrap gap-2 mb-8`,
          children: jn.map((n) =>
            (0, Q.jsx)(
              `button`,
              {
                onClick: () => t(n),
                className: `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap`,
                style:
                  e === n
                    ? { background: `#3D8B6E`, color: `white` }
                    : {
                        background: `rgba(184,230,213,0.2)`,
                        color: `#4A6B5E`,
                        border: `1px solid rgba(184,230,213,0.4)`,
                      },
                children: n,
              },
              n,
            ),
          ),
        }),
        (0, Q.jsx)(`div`, {
          className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`,
          children: i.map((e) =>
            (0, Q.jsxs)(
              `div`,
              {
                className: `rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col`,
                style: {
                  background: `white`,
                  border: `1px solid rgba(184,230,213,0.3)`,
                },
                children: [
                  (0, Q.jsxs)(`div`, {
                    className: `relative h-44 overflow-hidden`,
                    children: [
                      (0, Q.jsx)(`img`, {
                        src: e.image,
                        alt: e.title,
                        className: `w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105`,
                      }),
                      (0, Q.jsx)(`div`, {
                        className: `absolute inset-0`,
                        style: {
                          background: `linear-gradient(to top, rgba(26,58,46,0.3) 0%, transparent 60%)`,
                        },
                      }),
                      (0, Q.jsx)(`div`, {
                        className: `absolute top-3 left-3`,
                        children: (0, Q.jsx)(`span`, {
                          className: `px-2.5 py-1 rounded-full text-xs font-semibold`,
                          style: {
                            background: e.categoryBg,
                            color: e.categoryColor,
                          },
                          children: e.category,
                        }),
                      }),
                      e.free &&
                        (0, Q.jsx)(`div`, {
                          className: `absolute top-3 right-3`,
                          children: (0, Q.jsx)(`span`, {
                            className: `px-2.5 py-1 rounded-full text-xs font-bold`,
                            style: { background: `#3D8B6E`, color: `white` },
                            children: `Бесплатно`,
                          }),
                        }),
                    ],
                  }),
                  (0, Q.jsxs)(`div`, {
                    className: `p-5 flex flex-col flex-1`,
                    children: [
                      (0, Q.jsx)(`h3`, {
                        className: `font-bold text-sm mb-2 leading-snug`,
                        style: { color: `#1A3A2E` },
                        children: e.title,
                      }),
                      (0, Q.jsx)(`p`, {
                        className: `text-xs leading-relaxed mb-4 flex-1`,
                        style: { color: `#6B7A74` },
                        children: e.description,
                      }),
                      (0, Q.jsxs)(`div`, {
                        className: `flex flex-wrap gap-3 mb-4`,
                        children: [
                          (0, Q.jsxs)(`span`, {
                            className: `flex items-center gap-1 text-xs`,
                            style: { color: `#9CA3AF` },
                            children: [
                              (0, Q.jsx)(`i`, {
                                className: `ri-book-open-line`,
                              }),
                              e.lessons,
                              ` уроков`,
                            ],
                          }),
                          (0, Q.jsxs)(`span`, {
                            className: `flex items-center gap-1 text-xs`,
                            style: { color: `#9CA3AF` },
                            children: [
                              (0, Q.jsx)(`i`, { className: `ri-time-line` }),
                              e.duration,
                            ],
                          }),
                          (0, Q.jsxs)(`span`, {
                            className: `flex items-center gap-1 text-xs`,
                            style: { color: `#9CA3AF` },
                            children: [
                              (0, Q.jsx)(`i`, {
                                className: `ri-bar-chart-line`,
                              }),
                              e.level,
                            ],
                          }),
                        ],
                      }),
                      (0, Q.jsxs)(`div`, {
                        className: `flex items-center gap-2 mb-4`,
                        children: [
                          (0, Q.jsx)(`div`, {
                            className: `flex gap-0.5`,
                            children: [1, 2, 3, 4, 5].map((t) =>
                              (0, Q.jsx)(
                                `i`,
                                {
                                  className: `ri-star-fill text-xs`,
                                  style: {
                                    color:
                                      t <= Math.round(e.rating)
                                        ? `#F59E0B`
                                        : `#E5E7EB`,
                                  },
                                },
                                t,
                              ),
                            ),
                          }),
                          (0, Q.jsx)(`span`, {
                            className: `text-xs font-semibold`,
                            style: { color: `#1A3A2E` },
                            children: e.rating,
                          }),
                          (0, Q.jsxs)(`span`, {
                            className: `text-xs`,
                            style: { color: `#9CA3AF` },
                            children: [
                              `(`,
                              e.students.toLocaleString(`ru-RU`),
                              `)`,
                            ],
                          }),
                        ],
                      }),
                      (0, Q.jsxs)(`div`, {
                        className: `flex items-center gap-2 p-2.5 rounded-xl mb-4`,
                        style: { background: `#F7FBF9` },
                        children: [
                          (0, Q.jsx)(`div`, {
                            className: `w-7 h-7 rounded-full flex items-center justify-center text-xs flex-shrink-0`,
                            style: { background: `rgba(184,230,213,0.5)` },
                            children: (0, Q.jsx)(`i`, {
                              className: `ri-user-line`,
                              style: { color: `#3D8B6E` },
                            }),
                          }),
                          (0, Q.jsxs)(`div`, {
                            children: [
                              (0, Q.jsx)(`p`, {
                                className: `text-xs font-semibold`,
                                style: { color: `#1A3A2E` },
                                children: e.instructor,
                              }),
                              (0, Q.jsx)(`p`, {
                                className: `text-xs`,
                                style: { color: `#9CA3AF` },
                                children: e.instructorRole,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, Q.jsx)(`button`, {
                        onClick: () => a(e.id),
                        className: `w-full h-10 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap`,
                        style: n.has(e.id)
                          ? {
                              background: `#E8F7F2`,
                              color: `#3D8B6E`,
                              border: `1px solid #3D8B6E`,
                            }
                          : {
                              background: `linear-gradient(135deg, #3D8B6E, #2C5F4F)`,
                              color: `white`,
                            },
                        children: n.has(e.id)
                          ? (0, Q.jsxs)(Q.Fragment, {
                              children: [
                                (0, Q.jsx)(`i`, {
                                  className: `ri-check-line mr-1.5`,
                                }),
                                `Записан`,
                              ],
                            })
                          : e.free
                            ? `Начать бесплатно`
                            : `Записаться · ${e.price}`,
                      }),
                    ],
                  }),
                ],
              },
              e.id,
            ),
          ),
        }),
        (0, Q.jsxs)(`div`, {
          className: `mt-10 text-center`,
          children: [
            (0, Q.jsx)(`p`, {
              className: `text-sm mb-4`,
              style: { color: `#6B7A74` },
              children: `Хотите получить доступ ко всем курсам?`,
            }),
            (0, Q.jsxs)(`button`, {
              className: `inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105 cursor-pointer whitespace-nowrap`,
              style: { border: `2px solid #3D8B6E`, color: `#3D8B6E` },
              children: [
                (0, Q.jsx)(`i`, { className: `ri-apps-line` }),
                `Все курсы`,
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Nn() {
  let [e, t] = (0, v.useState)(`all`),
    [n, r] = (0, v.useState)(new Set()),
    i = e === `all` ? Tn : Tn.filter((t) => t.type === e),
    a = (e) => {
      r((t) => {
        let n = new Set(t);
        return (n.has(e) ? n.delete(e) : n.add(e), n);
      });
    };
  return (0, Q.jsx)(`section`, {
    id: `calendar`,
    className: `py-20 md:py-28`,
    style: { background: `#F7FBF9` },
    children: (0, Q.jsxs)(`div`, {
      className: `max-w-7xl mx-auto px-4 md:px-8`,
      children: [
        (0, Q.jsxs)(`div`, {
          className: `flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10`,
          children: [
            (0, Q.jsxs)(`div`, {
              children: [
                (0, Q.jsxs)(`div`, {
                  className: `inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-sm font-medium`,
                  style: {
                    background: `rgba(184,230,213,0.3)`,
                    color: `#2C5F4F`,
                  },
                  children: [
                    (0, Q.jsx)(`i`, { className: `ri-calendar-event-line` }),
                    `Мероприятия`,
                  ],
                }),
                (0, Q.jsx)(`h2`, {
                  className: `text-3xl md:text-4xl font-bold mb-3`,
                  style: {
                    fontFamily: `'Playfair Display', serif`,
                    color: `#1A3A2E`,
                  },
                  children: `Календарь событий`,
                }),
                (0, Q.jsx)(`p`, {
                  className: `text-base max-w-lg`,
                  style: { color: `#6B7A74` },
                  children: `Вебинары, встречи и мероприятия для семей в апреле 2026`,
                }),
              ],
            }),
            (0, Q.jsx)(`div`, {
              className: `inline-flex p-1 rounded-full self-start md:self-auto`,
              style: {
                background: `rgba(184,230,213,0.2)`,
                border: `1px solid rgba(184,230,213,0.4)`,
              },
              children: [`all`, `online`, `offline`].map((n) =>
                (0, Q.jsx)(
                  `button`,
                  {
                    onClick: () => t(n),
                    className: `px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap`,
                    style:
                      e === n
                        ? { background: `#3D8B6E`, color: `white` }
                        : { color: `#4A6B5E` },
                    children:
                      n === `all`
                        ? `Все`
                        : n === `online`
                          ? `Онлайн`
                          : `Офлайн`,
                  },
                  n,
                ),
              ),
            }),
          ],
        }),
        (0, Q.jsxs)(`div`, {
          className: `flex items-center gap-3 mb-8 px-5 py-3 rounded-2xl overflow-x-auto`,
          style: {
            background: `white`,
            border: `1px solid rgba(184,230,213,0.3)`,
          },
          children: [
            (0, Q.jsx)(`span`, {
              className: `text-sm font-semibold whitespace-nowrap`,
              style: { color: `#1A3A2E` },
              children: `Апрель 2026`,
            }),
            (0, Q.jsx)(`div`, {
              className: `flex gap-1.5 ml-2`,
              children: Array.from({ length: 30 }, (e, t) => t + 1).map((e) => {
                let t = Tn.some((t) => parseInt(t.date) === e);
                return (0, Q.jsxs)(
                  `div`,
                  {
                    className: `w-7 h-7 rounded-lg flex items-center justify-center text-xs flex-shrink-0 relative`,
                    style: {
                      background: t ? `rgba(61,139,110,0.15)` : `transparent`,
                      color: t ? `#2C5F4F` : `#9CA3AF`,
                      fontWeight: t ? 700 : 400,
                    },
                    children: [
                      e,
                      t &&
                        (0, Q.jsx)(`span`, {
                          className: `absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full`,
                          style: { background: `#3D8B6E` },
                        }),
                    ],
                  },
                  e,
                );
              }),
            }),
          ],
        }),
        (0, Q.jsx)(`div`, {
          className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5`,
          children: i.map((e) =>
            (0, Q.jsxs)(
              `div`,
              {
                className: `rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5`,
                style: {
                  background: `white`,
                  border: `1px solid rgba(184,230,213,0.3)`,
                },
                children: [
                  (0, Q.jsxs)(`div`, {
                    className: `flex items-start justify-between mb-4`,
                    children: [
                      (0, Q.jsxs)(`div`, {
                        className: `flex flex-col items-center justify-center w-14 h-14 rounded-2xl flex-shrink-0`,
                        style: { background: `rgba(184,230,213,0.2)` },
                        children: [
                          (0, Q.jsx)(`span`, {
                            className: `text-xl font-bold leading-none`,
                            style: { color: `#1A3A2E` },
                            children: e.date,
                          }),
                          (0, Q.jsx)(`span`, {
                            className: `text-xs font-medium mt-0.5`,
                            style: { color: `#3D8B6E` },
                            children: e.month,
                          }),
                        ],
                      }),
                      (0, Q.jsx)(`span`, {
                        className: `px-3 py-1 rounded-full text-xs font-semibold`,
                        style: { background: e.typeBg, color: e.typeColor },
                        children: e.typeLabel,
                      }),
                    ],
                  }),
                  (0, Q.jsxs)(`div`, {
                    className: `flex items-start gap-3 mb-3`,
                    children: [
                      (0, Q.jsx)(`div`, {
                        className: `w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5`,
                        style: { background: e.typeBg },
                        children: (0, Q.jsx)(`i`, {
                          className: `${e.icon} text-sm`,
                          style: { color: e.typeColor },
                        }),
                      }),
                      (0, Q.jsx)(`h3`, {
                        className: `font-bold text-sm leading-snug`,
                        style: { color: `#1A3A2E` },
                        children: e.title,
                      }),
                    ],
                  }),
                  (0, Q.jsxs)(`div`, {
                    className: `space-y-1.5 mb-4`,
                    children: [
                      (0, Q.jsxs)(`div`, {
                        className: `flex items-center gap-2 text-xs`,
                        style: { color: `#6B7A74` },
                        children: [
                          (0, Q.jsx)(`i`, {
                            className: `ri-time-line`,
                            style: { color: `#3D8B6E` },
                          }),
                          e.day,
                          `, `,
                          e.time,
                        ],
                      }),
                      (0, Q.jsxs)(`div`, {
                        className: `flex items-center gap-2 text-xs`,
                        style: { color: `#6B7A74` },
                        children: [
                          (0, Q.jsx)(`i`, {
                            className: `ri-map-pin-line`,
                            style: { color: `#3D8B6E` },
                          }),
                          e.location,
                        ],
                      }),
                      (0, Q.jsxs)(`div`, {
                        className: `flex items-center gap-2 text-xs`,
                        style: { color: `#6B7A74` },
                        children: [
                          (0, Q.jsx)(`i`, {
                            className: `ri-user-line`,
                            style: { color: `#3D8B6E` },
                          }),
                          e.participants,
                          ` участников`,
                        ],
                      }),
                    ],
                  }),
                  (0, Q.jsx)(`button`, {
                    onClick: () => a(e.id),
                    className: `w-full h-9 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap`,
                    style: n.has(e.id)
                      ? {
                          background: `#E8F7F2`,
                          color: `#3D8B6E`,
                          border: `1px solid #3D8B6E`,
                        }
                      : {
                          background: `linear-gradient(135deg, #3D8B6E, #2C5F4F)`,
                          color: `white`,
                        },
                    children: n.has(e.id)
                      ? (0, Q.jsxs)(Q.Fragment, {
                          children: [
                            (0, Q.jsx)(`i`, {
                              className: `ri-check-line mr-1.5`,
                            }),
                            `Вы записаны`,
                          ],
                        })
                      : `Зарегистрироваться`,
                  }),
                ],
              },
              e.id,
            ),
          ),
        }),
        (0, Q.jsxs)(`div`, {
          className: `mt-10 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center gap-4`,
          style: {
            background: `rgba(184,230,213,0.2)`,
            border: `1px solid rgba(184,230,213,0.4)`,
          },
          children: [
            (0, Q.jsx)(`div`, {
              className: `w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0`,
              style: { background: `rgba(184,230,213,0.5)` },
              children: (0, Q.jsx)(`i`, {
                className: `ri-notification-3-line`,
                style: { color: `#3D8B6E` },
              }),
            }),
            (0, Q.jsxs)(`div`, {
              className: `flex-1 text-center sm:text-left`,
              children: [
                (0, Q.jsx)(`p`, {
                  className: `text-sm font-semibold`,
                  style: { color: `#1A3A2E` },
                  children: `Не пропустите важные события`,
                }),
                (0, Q.jsx)(`p`, {
                  className: `text-xs mt-0.5`,
                  style: { color: `#6B7A74` },
                  children: `Подпишитесь на уведомления и получайте напоминания о мероприятиях`,
                }),
              ],
            }),
            (0, Q.jsx)(`button`, {
              className: `px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 cursor-pointer whitespace-nowrap flex-shrink-0`,
              style: { background: `#3D8B6E`, color: `white` },
              children: `Подписаться`,
            }),
          ],
        }),
      ],
    }),
  });
}
var Pn = [
    { value: `all`, label: `Все`, icon: `ri-map-pin-line`, color: `#3D8B6E` },
    {
      value: `clinic`,
      label: `Клиники`,
      icon: `ri-hospital-line`,
      color: `#E07070`,
    },
    { value: `park`, label: `Парки`, icon: `ri-plant-line`, color: `#5A9E6F` },
    {
      value: `kindergarten`,
      label: `Детские сады`,
      icon: `ri-building-line`,
      color: `#E09A40`,
    },
  ],
  Fn = { clinic: `#E07070`, park: `#5A9E6F`, kindergarten: `#E09A40` },
  In = { clinic: `🏥`, park: `🌳`, kindergarten: `🏫` };
function Ln() {
  let e = (0, v.useRef)(null),
    t = (0, v.useRef)(null),
    n = (0, v.useRef)([]),
    [r, i] = (0, v.useState)(`all`),
    [a, o] = (0, v.useState)(null),
    [s, c] = (0, v.useState)(!1);
  ((0, v.useEffect)(() => {
    let r = async () => {
        if (typeof window > `u`) return;
        if (window.L) {
          i();
          return;
        }
        let e = document.createElement(`link`);
        ((e.rel = `stylesheet`),
          (e.href = `https://unpkg.com/leaflet@1.9.4/dist/leaflet.css`),
          document.head.appendChild(e));
        let t = document.createElement(`script`);
        ((t.src = `https://unpkg.com/leaflet@1.9.4/dist/leaflet.js`),
          (t.onload = () => {
            (i(), c(!0));
          }),
          document.head.appendChild(t));
      },
      i = () => {
        if (!e.current || t.current) return;
        let r = window.L,
          i = r.map(e.current, {
            center: [55.758, 37.625],
            zoom: 13,
            zoomControl: !0,
          });
        (r
          .tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
            attribution: `&copy; OpenStreetMap contributors`,
          })
          .addTo(i),
          (t.current = i),
          xn.forEach((e) => {
            let t = Fn[e.type],
              a = In[e.type],
              s = r.divIcon({
                html: `<div style="background:${t};width:36px;height:36px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);display:flex;align-items:center;justify-content:center;border:2px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.2)"><span style="transform:rotate(45deg);font-size:16px">${a}</span></div>`,
                className: ``,
                iconSize: [36, 36],
                iconAnchor: [18, 36],
              }),
              c = r.marker([e.lat, e.lng], { icon: s }).addTo(i).bindPopup(`
            <div style="font-family:'Inter',sans-serif;padding:4px">
              <p style="font-weight:700;font-size:14px;color:#1A3A2E;margin:0 0 4px">${e.name}</p>
              <p style="font-size:12px;color:#6B7A74;margin:0 0 8px">${e.address}</p>
              <a href="#" style="font-size:12px;color:#3D8B6E;font-weight:600;text-decoration:none">Проложить маршрут →</a>
            </div>
          `);
            (c.on(`click`, () => o(e)),
              n.current.push({ leafletMarker: c, data: e }));
          }),
          c(!0));
      };
    return (
      r(),
      () => {
        t.current &&= (t.current.remove(), null);
      }
    );
  }, []),
    (0, v.useEffect)(() => {
      s &&
        n.current.forEach(({ leafletMarker: e, data: n }) => {
          r === `all` || n.type === r ? e.addTo(t.current) : e.remove();
        });
    }, [r, s]));
  let l = xn.filter((e) => r === `all` || e.type === r);
  return (0, Q.jsx)(`section`, {
    id: `map`,
    className: `py-20 md:py-28`,
    style: { background: `#F0FAF7` },
    children: (0, Q.jsxs)(`div`, {
      className: `max-w-7xl mx-auto px-4 md:px-8`,
      children: [
        (0, Q.jsxs)(`div`, {
          className: `flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10`,
          children: [
            (0, Q.jsxs)(`div`, {
              children: [
                (0, Q.jsxs)(`span`, {
                  className: `inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4`,
                  style: {
                    background: `rgba(184,230,213,0.4)`,
                    color: `#2C5F4F`,
                  },
                  children: [
                    (0, Q.jsx)(`i`, { className: `ri-map-2-line mr-2` }),
                    `Карта учреждений`,
                  ],
                }),
                (0, Q.jsx)(`h2`, {
                  className: `text-3xl md:text-4xl font-bold`,
                  style: {
                    fontFamily: `'Playfair Display', serif`,
                    color: `#1A3A2E`,
                  },
                  children: `Найдите всё рядом с домом`,
                }),
              ],
            }),
            (0, Q.jsx)(`div`, {
              className: `flex flex-wrap gap-2`,
              children: Pn.map((e) =>
                (0, Q.jsxs)(
                  `button`,
                  {
                    onClick: () => i(e.value),
                    className: `inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap`,
                    style: {
                      background: r === e.value ? e.color : `white`,
                      color: r === e.value ? `white` : `#4A6B5E`,
                      border: `1.5px solid ${r === e.value ? e.color : `#B8E6D5`}`,
                    },
                    children: [
                      (0, Q.jsx)(`i`, { className: e.icon }),
                      e.label,
                      (0, Q.jsx)(`span`, {
                        className: `text-xs px-1.5 py-0.5 rounded-full`,
                        style: {
                          background:
                            r === e.value
                              ? `rgba(255,255,255,0.25)`
                              : `rgba(184,230,213,0.4)`,
                          color: r === e.value ? `white` : `#3D8B6E`,
                        },
                        children:
                          e.value === `all`
                            ? xn.length
                            : xn.filter((t) => t.type === e.value).length,
                      }),
                    ],
                  },
                  e.value,
                ),
              ),
            }),
          ],
        }),
        (0, Q.jsxs)(`div`, {
          className: `flex flex-col lg:flex-row gap-6`,
          children: [
            (0, Q.jsxs)(`div`, {
              className: `flex-1 relative`,
              children: [
                (0, Q.jsx)(`div`, {
                  ref: e,
                  className: `w-full rounded-2xl overflow-hidden`,
                  style: {
                    height: `500px`,
                    border: `1.5px solid rgba(184,230,213,0.5)`,
                  },
                }),
                !s &&
                  (0, Q.jsx)(`div`, {
                    className: `absolute inset-0 rounded-2xl flex items-center justify-center`,
                    style: { background: `#F0FAF7` },
                    children: (0, Q.jsxs)(`div`, {
                      className: `text-center`,
                      children: [
                        (0, Q.jsx)(`div`, {
                          className: `w-12 h-12 rounded-full border-4 border-t-transparent animate-spin mx-auto mb-3`,
                          style: {
                            borderColor: `#B8E6D5`,
                            borderTopColor: `transparent`,
                          },
                        }),
                        (0, Q.jsx)(`p`, {
                          className: `text-sm`,
                          style: { color: `#6B7A74` },
                          children: `Загружаем карту...`,
                        }),
                      ],
                    }),
                  }),
              ],
            }),
            (0, Q.jsxs)(`div`, {
              className: `w-full lg:w-72 rounded-2xl overflow-hidden flex flex-col`,
              style: {
                background: `white`,
                border: `1.5px solid rgba(184,230,213,0.4)`,
                maxHeight: `500px`,
              },
              children: [
                (0, Q.jsx)(`div`, {
                  className: `p-4`,
                  style: { borderBottom: `1px solid rgba(184,230,213,0.4)` },
                  children: (0, Q.jsxs)(`p`, {
                    className: `text-sm font-semibold`,
                    style: { color: `#1A3A2E` },
                    children: [`Найдено: `, l.length, ` объектов`],
                  }),
                }),
                (0, Q.jsx)(`div`, {
                  className: `overflow-y-auto flex-1`,
                  children: l.map((e) =>
                    (0, Q.jsx)(
                      `button`,
                      {
                        onClick: () => o(e),
                        className: `w-full text-left p-4 transition-colors duration-150 cursor-pointer`,
                        style: {
                          borderBottom: `1px solid rgba(184,230,213,0.3)`,
                          background:
                            a?.id === e.id ? `#F0FAF7` : `transparent`,
                        },
                        children: (0, Q.jsxs)(`div`, {
                          className: `flex items-start gap-3`,
                          children: [
                            (0, Q.jsx)(`div`, {
                              className: `w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm`,
                              style: { background: `${Fn[e.type]}20` },
                              children: In[e.type],
                            }),
                            (0, Q.jsxs)(`div`, {
                              children: [
                                (0, Q.jsx)(`p`, {
                                  className: `text-sm font-semibold leading-tight mb-1`,
                                  style: { color: `#1A3A2E` },
                                  children: e.name,
                                }),
                                (0, Q.jsx)(`p`, {
                                  className: `text-xs`,
                                  style: { color: `#6B7A74` },
                                  children: e.address,
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      e.id,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
var Rn = {
  Беременность: `#E07070`,
  Новорождённый: `#3D8B6E`,
  Жильё: `#E09A40`,
};
function zn() {
  let [e, t] = (0, v.useState)(null);
  return (0, Q.jsx)(`section`, {
    id: `articles`,
    className: `py-20 md:py-28`,
    style: { background: `#FFF8F0` },
    children: (0, Q.jsxs)(`div`, {
      className: `max-w-7xl mx-auto px-4 md:px-8`,
      children: [
        (0, Q.jsxs)(`div`, {
          className: `flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12`,
          children: [
            (0, Q.jsxs)(`div`, {
              children: [
                (0, Q.jsxs)(`span`, {
                  className: `inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4`,
                  style: {
                    background: `rgba(184,230,213,0.3)`,
                    color: `#2C5F4F`,
                  },
                  children: [
                    (0, Q.jsx)(`i`, { className: `ri-article-line mr-2` }),
                    `Полезные статьи`,
                  ],
                }),
                (0, Q.jsx)(`h2`, {
                  className: `text-3xl md:text-4xl font-bold`,
                  style: {
                    fontFamily: `'Playfair Display', serif`,
                    color: `#1A3A2E`,
                  },
                  children: `Знания для молодых родителей`,
                }),
              ],
            }),
            (0, Q.jsxs)(`a`, {
              href: `#`,
              className: `inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 whitespace-nowrap`,
              style: { color: `#3D8B6E` },
              children: [
                `Все статьи`,
                (0, Q.jsx)(`i`, { className: `ri-arrow-right-line` }),
              ],
            }),
          ],
        }),
        (0, Q.jsx)(`div`, {
          className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8`,
          children: Sn.map((n) =>
            (0, Q.jsxs)(
              `article`,
              {
                className: `rounded-3xl overflow-hidden cursor-pointer transition-all duration-300`,
                style: {
                  background: `white`,
                  border: `1.5px solid rgba(184,230,213,0.3)`,
                  transform: e === n.id ? `translateY(-6px)` : `translateY(0)`,
                },
                onMouseEnter: () => t(n.id),
                onMouseLeave: () => t(null),
                children: [
                  (0, Q.jsxs)(`div`, {
                    className: `relative overflow-hidden w-full h-52`,
                    children: [
                      (0, Q.jsx)(`img`, {
                        src: n.image,
                        alt: n.title,
                        className: `w-full h-full object-cover object-top transition-transform duration-500`,
                        style: {
                          transform: e === n.id ? `scale(1.05)` : `scale(1)`,
                        },
                      }),
                      (0, Q.jsx)(`div`, {
                        className: `absolute inset-0`,
                        style: {
                          background: `linear-gradient(to top, rgba(255,248,240,0.4) 0%, transparent 60%)`,
                        },
                      }),
                      (0, Q.jsx)(`div`, {
                        className: `absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white`,
                        style: { background: Rn[n.category] || `#3D8B6E` },
                        children: n.category,
                      }),
                      (0, Q.jsxs)(`div`, {
                        className: `absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1`,
                        style: {
                          background: `rgba(255,255,255,0.9)`,
                          color: `#4A6B5E`,
                        },
                        children: [
                          (0, Q.jsx)(`i`, { className: `ri-time-line` }),
                          n.readTime,
                        ],
                      }),
                    ],
                  }),
                  (0, Q.jsxs)(`div`, {
                    className: `p-6`,
                    children: [
                      (0, Q.jsx)(`p`, {
                        className: `text-xs uppercase tracking-widest mb-3 font-medium`,
                        style: { color: `#9CA3AF` },
                        children: n.date,
                      }),
                      (0, Q.jsx)(`h3`, {
                        className: `text-lg font-bold mb-3 leading-snug line-clamp-2`,
                        style: {
                          fontFamily: `'Playfair Display', serif`,
                          color: `#1A3A2E`,
                        },
                        children: n.title,
                      }),
                      (0, Q.jsx)(`p`, {
                        className: `text-sm leading-relaxed mb-5 line-clamp-3`,
                        style: { color: `#6B7A74` },
                        children: n.excerpt,
                      }),
                      (0, Q.jsxs)(`a`, {
                        href: `#`,
                        className: `inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200`,
                        style: { color: `#3D8B6E` },
                        children: [
                          `Читать статью`,
                          (0, Q.jsx)(`i`, { className: `ri-arrow-right-line` }),
                        ],
                      }),
                    ],
                  }),
                ],
              },
              n.id,
            ),
          ),
        }),
        (0, Q.jsxs)(`div`, {
          className: `mt-16 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8`,
          style: { background: `linear-gradient(135deg, #2C5F4F, #3D8B6E)` },
          children: [
            (0, Q.jsxs)(`div`, {
              className: `flex-1 text-center md:text-left`,
              children: [
                (0, Q.jsx)(`h3`, {
                  className: `text-2xl md:text-3xl font-bold text-white mb-3`,
                  style: { fontFamily: `'Playfair Display', serif` },
                  children: `Получайте советы первыми`,
                }),
                (0, Q.jsx)(`p`, {
                  className: `text-sm md:text-base`,
                  style: { color: `rgba(255,255,255,0.75)` },
                  children: `Подпишитесь на рассылку и узнавайте о новых льготах, статьях и событиях для семей`,
                }),
              ],
            }),
            (0, Q.jsxs)(`div`, {
              className: `flex flex-col sm:flex-row gap-3 w-full md:w-auto`,
              children: [
                (0, Q.jsx)(`input`, {
                  type: `email`,
                  placeholder: `Ваш email`,
                  className: `h-12 px-5 rounded-xl text-sm focus:outline-none w-full sm:w-64`,
                  style: {
                    background: `rgba(255,255,255,0.15)`,
                    color: `white`,
                    border: `1.5px solid rgba(255,255,255,0.3)`,
                  },
                }),
                (0, Q.jsx)(`button`, {
                  className: `h-12 px-6 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200 hover:scale-105 cursor-pointer`,
                  style: { background: `#B8E6D5`, color: `#1A3A2E` },
                  children: `Подписаться`,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
var Bn = [
  `Все`,
  `Пособия при рождении`,
  `Многодетные семьи`,
  `Жильё`,
  `Декрет и работа`,
  `Детский сад и образование`,
  `Особые дети`,
];
function Vn() {
  let [e, t] = (0, v.useState)(`Все`),
    [n, r] = (0, v.useState)(1),
    i = e === `Все` ? En : En.filter((t) => t.category === e),
    a = (e) => {
      r((t) => (t === e ? null : e));
    };
  return (0, Q.jsx)(`section`, {
    id: `faq`,
    style: { background: `#FDFAF6` },
    className: `py-20 px-4 md:px-8`,
    children: (0, Q.jsxs)(`div`, {
      className: `max-w-4xl mx-auto`,
      children: [
        (0, Q.jsxs)(`div`, {
          className: `text-center mb-12`,
          children: [
            (0, Q.jsx)(`span`, {
              className: `inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4`,
              style: { background: `#E8F7F2`, color: `#3D8B6E` },
              children: `Частые вопросы`,
            }),
            (0, Q.jsx)(`h2`, {
              className: `text-3xl md:text-4xl font-bold mb-4`,
              style: {
                fontFamily: `'Playfair Display', serif`,
                color: `#1A3A2E`,
              },
              children: `Всё о льготах и господдержке`,
            }),
            (0, Q.jsx)(`p`, {
              className: `text-base max-w-xl mx-auto`,
              style: { color: `#6B7280` },
              children: `Ответы на самые популярные вопросы молодых семей — с прямыми ссылками на подачу заявлений там, где это возможно.`,
            }),
          ],
        }),
        (0, Q.jsx)(`div`, {
          className: `flex flex-wrap gap-2 justify-center mb-10`,
          children: Bn.map((n) =>
            (0, Q.jsx)(
              `button`,
              {
                onClick: () => {
                  (t(n), r(null));
                },
                className: `whitespace-nowrap text-sm px-4 py-2 rounded-full font-medium transition-all duration-200 cursor-pointer`,
                style:
                  e === n
                    ? { background: `#3D8B6E`, color: `#fff` }
                    : { background: `#EEF7F3`, color: `#3D8B6E` },
                children: n,
              },
              n,
            ),
          ),
        }),
        (0, Q.jsx)(`div`, {
          className: `space-y-3`,
          children: i.map((e) => {
            let t = n === e.id;
            return (0, Q.jsxs)(
              `div`,
              {
                className: `rounded-2xl overflow-hidden transition-all duration-300`,
                style: {
                  background: t ? `#fff` : `#F7F4EF`,
                  border: t ? `1.5px solid #B8E6D5` : `1.5px solid transparent`,
                },
                children: [
                  (0, Q.jsxs)(`button`, {
                    onClick: () => a(e.id),
                    className: `w-full flex items-start gap-4 px-6 py-5 text-left cursor-pointer group`,
                    children: [
                      (0, Q.jsx)(`span`, {
                        className: `mt-1 w-2 h-2 rounded-full flex-shrink-0`,
                        style: { background: `#3D8B6E`, opacity: t ? 1 : 0.4 },
                      }),
                      (0, Q.jsxs)(`div`, {
                        className: `flex-1 min-w-0`,
                        children: [
                          (0, Q.jsx)(`span`, {
                            className: `text-xs font-semibold uppercase tracking-wider block mb-1`,
                            style: { color: `#3D8B6E`, opacity: t ? 1 : 0.7 },
                            children: e.category,
                          }),
                          (0, Q.jsx)(`span`, {
                            className: `text-base font-semibold leading-snug`,
                            style: { color: `#1A3A2E` },
                            children: e.question,
                          }),
                        ],
                      }),
                      (0, Q.jsx)(`div`, {
                        className: `w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0 transition-all duration-300`,
                        style: {
                          background: t ? `#3D8B6E` : `#E8F7F2`,
                          transform: t ? `rotate(180deg)` : `rotate(0deg)`,
                        },
                        children: (0, Q.jsx)(`i`, {
                          className: `ri-arrow-down-s-line text-base`,
                          style: { color: t ? `#fff` : `#3D8B6E` },
                        }),
                      }),
                    ],
                  }),
                  (0, Q.jsx)(`div`, {
                    className: `overflow-hidden transition-all duration-300`,
                    style: { maxHeight: t ? `600px` : `0px` },
                    children: (0, Q.jsxs)(`div`, {
                      className: `px-6 pb-6 pl-12`,
                      children: [
                        (0, Q.jsx)(`p`, {
                          className: `text-sm leading-relaxed mb-4`,
                          style: { color: `#4B5563` },
                          children: e.answer,
                        }),
                        e.hasApplication &&
                          (0, Q.jsxs)(`a`, {
                            href: e.applicationUrl,
                            target: `_blank`,
                            rel: `noopener noreferrer`,
                            className: `inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap`,
                            style: { background: `#E8F7F2`, color: `#2C5F4F` },
                            children: [
                              (0, Q.jsx)(`div`, {
                                className: `w-5 h-5 flex items-center justify-center`,
                                children: (0, Q.jsx)(`i`, {
                                  className: `ri-government-line text-base`,
                                }),
                              }),
                              e.applicationLabel,
                              (0, Q.jsx)(`div`, {
                                className: `w-4 h-4 flex items-center justify-center`,
                                children: (0, Q.jsx)(`i`, {
                                  className: `ri-external-link-line text-xs`,
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  }),
                ],
              },
              e.id,
            );
          }),
        }),
        (0, Q.jsxs)(`div`, {
          className: `mt-12 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left`,
          style: {
            background: `linear-gradient(135deg, #E8F7F2 0%, #FFF8F0 100%)`,
          },
          children: [
            (0, Q.jsx)(`div`, {
              className: `w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0`,
              style: { background: `#3D8B6E` },
              children: (0, Q.jsx)(`i`, {
                className: `ri-customer-service-2-line text-2xl`,
                style: { color: `#fff` },
              }),
            }),
            (0, Q.jsxs)(`div`, {
              className: `flex-1`,
              children: [
                (0, Q.jsx)(`p`, {
                  className: `font-semibold text-base mb-1`,
                  style: { color: `#1A3A2E` },
                  children: `Не нашли ответ на свой вопрос?`,
                }),
                (0, Q.jsx)(`p`, {
                  className: `text-sm`,
                  style: { color: `#6B7280` },
                  children: `Задайте вопрос в нашем сообществе или обратитесь на горячую линию поддержки семей`,
                }),
              ],
            }),
            (0, Q.jsxs)(`div`, {
              className: `flex flex-col sm:flex-row gap-3 flex-shrink-0`,
              children: [
                (0, Q.jsx)(`a`, {
                  href: `#community`,
                  className: `whitespace-nowrap text-sm font-semibold px-5 py-2.5 rounded-xl cursor-pointer transition-all duration-200`,
                  style: { background: `#3D8B6E`, color: `#fff` },
                  children: `Спросить в сообществе`,
                }),
                (0, Q.jsx)(`a`, {
                  href: `https://www.gosuslugi.ru/feedback`,
                  target: `_blank`,
                  rel: `noopener noreferrer`,
                  className: `whitespace-nowrap text-sm font-semibold px-5 py-2.5 rounded-xl cursor-pointer transition-all duration-200`,
                  style: {
                    background: `#fff`,
                    color: `#3D8B6E`,
                    border: `1.5px solid #B8E6D5`,
                  },
                  children: `Горячая линия`,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
var Hn = [
    { id: `parents`, label: `Для родителей`, icon: `ri-parent-line` },
    { id: `children`, label: `Для детей`, icon: `ri-bear-smile-line` },
    { id: `family`, label: `Для семьи`, icon: `ri-home-heart-line` },
  ],
  Un = {
    parents: {
      headline: `Вы не одни — поддержка рядом`,
      description: `Родительство — это радость и вызов одновременно. Наши специалисты помогут справиться с тревогой, выгоранием, послеродовой депрессией и трудностями адаптации.`,
      services: [
        {
          icon: `ri-mental-health-line`,
          title: `Послеродовая депрессия`,
          desc: `Индивидуальные сессии с психологом, специализирующимся на перинатальном периоде. Онлайн и офлайн.`,
          tag: `Бесплатно`,
          tagColor: `#3D8B6E`,
        },
        {
          icon: `ri-heart-pulse-line`,
          title: `Родительское выгорание`,
          desc: `Групповые встречи и практики восстановления ресурса. Помогаем найти баланс между заботой о детях и собой.`,
          tag: `Группа`,
          tagColor: `#E09A40`,
        },
        {
          icon: `ri-emotion-sad-line`,
          title: `Тревога и стресс`,
          desc: `Техники саморегуляции, дыхательные практики и работа с когнитивными искажениями.`,
          tag: `Онлайн`,
          tagColor: `#7B9E87`,
        },
        {
          icon: `ri-hearts-line`,
          title: `Кризис в паре`,
          desc: `Парная терапия для восстановления близости и выстраивания новых ролей после рождения ребёнка.`,
          tag: `Пара`,
          tagColor: `#C97B84`,
        },
      ],
      specialists: [
        {
          name: `Анна Соколова`,
          role: `Перинатальный психолог`,
          exp: `8 лет опыта`,
          avatar: `https://readdy.ai/api/search-image?query=professional%20female%20psychologist%20warm%20smile%20soft%20natural%20light%20portrait%20pastel%20background%20calm%20approachable%20woman%2030s%20professional%20attire%20mint%20tones&width=80&height=80&seq=ps1&orientation=squarish`,
          rating: 4.9,
        },
        {
          name: `Михаил Орлов`,
          role: `Семейный терапевт`,
          exp: `12 лет опыта`,
          avatar: `https://readdy.ai/api/search-image?query=professional%20male%20therapist%20friendly%20confident%20portrait%20soft%20background%20warm%20tones%20man%2040s%20professional%20calm%20trustworthy%20pastel%20cream&width=80&height=80&seq=ps2&orientation=squarish`,
          rating: 4.8,
        },
        {
          name: `Елена Громова`,
          role: `Психолог-консультант`,
          exp: `6 лет опыта`,
          avatar: `https://readdy.ai/api/search-image?query=professional%20female%20counselor%20gentle%20smile%20portrait%20soft%20light%20pastel%20background%20woman%2030s%20warm%20approachable%20mint%20green%20tones%20professional&width=80&height=80&seq=ps3&orientation=squarish`,
          rating: 4.7,
        },
      ],
    },
    children: {
      headline: `Каждый ребёнок заслуживает понимания`,
      description: `Детские психологи помогают малышам и подросткам справляться с тревогой, адаптацией в садике и школе, страхами и трудностями в общении.`,
      services: [
        {
          icon: `ri-seedling-line`,
          title: `Адаптация в детском саду`,
          desc: `Мягкое сопровождение ребёнка в период привыкания. Работа с тревогой разлучения и новой средой.`,
          tag: `Бесплатно`,
          tagColor: `#3D8B6E`,
        },
        {
          icon: `ri-ghost-smile-line`,
          title: `Детские страхи`,
          desc: `Игровая терапия и арт-терапия для проработки страхов темноты, одиночества, новых ситуаций.`,
          tag: `Игровая`,
          tagColor: `#E09A40`,
        },
        {
          icon: `ri-speak-line`,
          title: `Задержка речи и развития`,
          desc: `Комплексная оценка и сопровождение детей с особенностями развития. Работа с логопедом и дефектологом.`,
          tag: `Комплекс`,
          tagColor: `#7B9E87`,
        },
        {
          icon: `ri-group-line`,
          title: `Трудности в общении`,
          desc: `Социальные группы и тренинги для детей 4–10 лет. Учимся дружить, договариваться и выражать эмоции.`,
          tag: `Группа`,
          tagColor: `#C97B84`,
        },
      ],
      specialists: [
        {
          name: `Ольга Белова`,
          role: `Детский психолог`,
          exp: `10 лет опыта`,
          avatar: `https://readdy.ai/api/search-image?query=professional%20female%20child%20psychologist%20warm%20kind%20smile%20portrait%20soft%20pastel%20background%20woman%2035s%20gentle%20approachable%20cream%20tones%20professional&width=80&height=80&seq=ps4&orientation=squarish`,
          rating: 5,
        },
        {
          name: `Дмитрий Лебедев`,
          role: `Игровой терапевт`,
          exp: `7 лет опыта`,
          avatar: `https://readdy.ai/api/search-image?query=professional%20male%20play%20therapist%20friendly%20warm%20portrait%20soft%20background%20man%2030s%20calm%20trustworthy%20pastel%20mint%20tones%20professional%20approachable&width=80&height=80&seq=ps5&orientation=squarish`,
          rating: 4.9,
        },
        {
          name: `Наталья Козлова`,
          role: `Дефектолог`,
          exp: `9 лет опыта`,
          avatar: `https://readdy.ai/api/search-image?query=professional%20female%20specialist%20defectologist%20kind%20portrait%20soft%20light%20pastel%20background%20woman%2040s%20warm%20professional%20cream%20green%20tones&width=80&height=80&seq=ps6&orientation=squarish`,
          rating: 4.8,
        },
      ],
    },
    family: {
      headline: `Семья — это команда`,
      description: `Семейная терапия помогает выстроить здоровые отношения, наладить общение между поколениями и пройти через кризисы вместе, а не порознь.`,
      services: [
        {
          icon: `ri-discuss-line`,
          title: `Семейная терапия`,
          desc: `Совместные сессии для всей семьи. Работаем с конфликтами, ролями и коммуникацией в безопасном пространстве.`,
          tag: `Офлайн`,
          tagColor: `#3D8B6E`,
        },
        {
          icon: `ri-parent-line`,
          title: `Школа родительства`,
          desc: `8-недельная программа для пар, ожидающих первого ребёнка. Практические навыки и психологическая подготовка.`,
          tag: `Курс`,
          tagColor: `#E09A40`,
        },
        {
          icon: `ri-heart-3-line`,
          title: `Поддержка при разводе`,
          desc: `Помогаем сохранить здоровые отношения с детьми и минимизировать стресс для всей семьи в период перемен.`,
          tag: `Конфиденц.`,
          tagColor: `#7B9E87`,
        },
        {
          icon: `ri-ancient-gate-line`,
          title: `Межпоколенческие конфликты`,
          desc: `Медиация между бабушками, дедушками и молодыми родителями. Находим общий язык и уважение к границам.`,
          tag: `Медиация`,
          tagColor: `#C97B84`,
        },
      ],
      specialists: [
        {
          name: `Ирина Волкова`,
          role: `Семейный психолог`,
          exp: `15 лет опыта`,
          avatar: `https://readdy.ai/api/search-image?query=professional%20female%20family%20psychologist%20wise%20warm%20smile%20portrait%20soft%20pastel%20background%20woman%2045s%20experienced%20calm%20cream%20mint%20tones%20professional&width=80&height=80&seq=ps7&orientation=squarish`,
          rating: 5,
        },
        {
          name: `Сергей Новиков`,
          role: `Медиатор`,
          exp: `11 лет опыта`,
          avatar: `https://readdy.ai/api/search-image?query=professional%20male%20mediator%20confident%20calm%20portrait%20soft%20background%20man%2045s%20trustworthy%20professional%20pastel%20warm%20tones%20approachable&width=80&height=80&seq=ps8&orientation=squarish`,
          rating: 4.9,
        },
        {
          name: `Татьяна Морозова`,
          role: `Арт-терапевт`,
          exp: `8 лет опыта`,
          avatar: `https://readdy.ai/api/search-image?query=professional%20female%20art%20therapist%20creative%20warm%20smile%20portrait%20soft%20pastel%20background%20woman%2035s%20gentle%20artistic%20mint%20cream%20tones%20professional&width=80&height=80&seq=ps9&orientation=squarish`,
          rating: 4.8,
        },
      ],
    },
  },
  Wn = [
    {
      icon: `ri-phone-line`,
      label: `Телефон доверия`,
      value: `8-800-2000-122`,
      note: `Бесплатно, круглосуточно`,
    },
    {
      icon: `ri-message-3-line`,
      label: `Онлайн-чат`,
      value: `Написать сейчас`,
      note: `Ответ в течение 15 минут`,
      link: `#community`,
    },
    {
      icon: `ri-calendar-check-line`,
      label: `Запись к специалисту`,
      value: `Выбрать время`,
      note: `Первая консультация бесплатно`,
      link: `#calendar`,
    },
  ];
function Gn({ rating: e }) {
  return (0, Q.jsxs)(`div`, {
    className: `flex items-center gap-0.5`,
    children: [
      [1, 2, 3, 4, 5].map((t) =>
        (0, Q.jsx)(
          `i`,
          {
            className: t <= Math.round(e) ? `ri-star-fill` : `ri-star-line`,
            style: { color: `#E09A40`, fontSize: `11px` },
          },
          t,
        ),
      ),
      (0, Q.jsx)(`span`, {
        className: `text-xs ml-1 font-semibold`,
        style: { color: `#6B7A74` },
        children: e.toFixed(1),
      }),
    ],
  });
}
function Kn() {
  let [e, t] = (0, v.useState)(`parents`),
    [n, r] = (0, v.useState)(null),
    i = Un[e];
  return (0, Q.jsx)(`section`, {
    id: `psych-support`,
    className: `py-20 md:py-28`,
    style: { background: `linear-gradient(180deg, #F0FAF7 0%, #FFF8F0 100%)` },
    children: (0, Q.jsxs)(`div`, {
      className: `max-w-7xl mx-auto px-4 md:px-8`,
      children: [
        (0, Q.jsxs)(`div`, {
          className: `text-center mb-12`,
          children: [
            (0, Q.jsxs)(`span`, {
              className: `inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4`,
              style: { background: `rgba(184,230,213,0.35)`, color: `#2C5F4F` },
              children: [
                (0, Q.jsx)(`i`, { className: `ri-mental-health-line mr-2` }),
                `Психологическая поддержка`,
              ],
            }),
            (0, Q.jsx)(`h2`, {
              className: `text-3xl md:text-4xl font-bold mb-4`,
              style: {
                fontFamily: `'Playfair Display', serif`,
                color: `#1A3A2E`,
              },
              children: `Забота о душевном здоровье семьи`,
            }),
            (0, Q.jsx)(`p`, {
              className: `text-base md:text-lg max-w-2xl mx-auto`,
              style: { color: `#6B7A74` },
              children: `Профессиональная психологическая помощь для каждого члена семьи — в удобном формате, без очередей и стигмы`,
            }),
          ],
        }),
        (0, Q.jsx)(`div`, {
          className: `flex justify-center mb-10`,
          children: (0, Q.jsx)(`div`, {
            className: `inline-flex rounded-2xl p-1 gap-1`,
            style: {
              background: `rgba(184,230,213,0.25)`,
              border: `1.5px solid rgba(184,230,213,0.4)`,
            },
            children: Hn.map((n) =>
              (0, Q.jsxs)(
                `button`,
                {
                  onClick: () => t(n.id),
                  className: `flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap`,
                  style:
                    e === n.id
                      ? {
                          background: `white`,
                          color: `#2C5F4F`,
                          boxShadow: `0 2px 8px rgba(61,139,110,0.12)`,
                        }
                      : { color: `#6B7A74` },
                  children: [(0, Q.jsx)(`i`, { className: n.icon }), n.label],
                },
                n.id,
              ),
            ),
          }),
        }),
        (0, Q.jsxs)(
          `div`,
          {
            className: `transition-all duration-300`,
            children: [
              (0, Q.jsxs)(`div`, {
                className: `text-center mb-10`,
                children: [
                  (0, Q.jsx)(`h3`, {
                    className: `text-2xl md:text-3xl font-bold mb-3`,
                    style: {
                      fontFamily: `'Playfair Display', serif`,
                      color: `#1A3A2E`,
                    },
                    children: i.headline,
                  }),
                  (0, Q.jsx)(`p`, {
                    className: `text-sm md:text-base max-w-xl mx-auto`,
                    style: { color: `#6B7A74` },
                    children: i.description,
                  }),
                ],
              }),
              (0, Q.jsx)(`div`, {
                className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12`,
                children: i.services.map((e) =>
                  (0, Q.jsxs)(
                    `div`,
                    {
                      className: `rounded-2xl p-6 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1 cursor-default`,
                      style: {
                        background: `white`,
                        border: `1.5px solid rgba(184,230,213,0.3)`,
                      },
                      children: [
                        (0, Q.jsx)(`div`, {
                          className: `w-11 h-11 rounded-xl flex items-center justify-center`,
                          style: { background: `rgba(184,230,213,0.25)` },
                          children: (0, Q.jsx)(`i`, {
                            className: `${e.icon} text-xl`,
                            style: { color: `#3D8B6E` },
                          }),
                        }),
                        (0, Q.jsxs)(`div`, {
                          children: [
                            (0, Q.jsxs)(`div`, {
                              className: `flex items-start justify-between gap-2 mb-2`,
                              children: [
                                (0, Q.jsx)(`h4`, {
                                  className: `text-sm font-bold leading-snug`,
                                  style: { color: `#1A3A2E` },
                                  children: e.title,
                                }),
                                (0, Q.jsx)(`span`, {
                                  className: `text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0`,
                                  style: {
                                    background: `${e.tagColor}18`,
                                    color: e.tagColor,
                                  },
                                  children: e.tag,
                                }),
                              ],
                            }),
                            (0, Q.jsx)(`p`, {
                              className: `text-xs leading-relaxed`,
                              style: { color: `#6B7A74` },
                              children: e.desc,
                            }),
                          ],
                        }),
                      ],
                    },
                    e.title,
                  ),
                ),
              }),
              (0, Q.jsxs)(`div`, {
                className: `rounded-3xl p-8 md:p-10 mb-12`,
                style: {
                  background: `white`,
                  border: `1.5px solid rgba(184,230,213,0.3)`,
                },
                children: [
                  (0, Q.jsxs)(`div`, {
                    className: `flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8`,
                    children: [
                      (0, Q.jsx)(`h4`, {
                        className: `text-xl font-bold`,
                        style: {
                          fontFamily: `'Playfair Display', serif`,
                          color: `#1A3A2E`,
                        },
                        children: `Наши специалисты`,
                      }),
                      (0, Q.jsx)(`span`, {
                        className: `text-sm`,
                        style: { color: `#6B7A74` },
                        children: `Все специалисты имеют профильное образование и супервизию`,
                      }),
                    ],
                  }),
                  (0, Q.jsx)(`div`, {
                    className: `grid grid-cols-1 sm:grid-cols-3 gap-6`,
                    children: i.specialists.map((e, t) =>
                      (0, Q.jsxs)(
                        `div`,
                        {
                          className: `flex flex-col items-center text-center gap-3 p-6 rounded-2xl transition-all duration-200`,
                          style: { background: `#F7FBF9` },
                          children: [
                            (0, Q.jsxs)(`div`, {
                              className: `relative`,
                              children: [
                                (0, Q.jsx)(`img`, {
                                  src: e.avatar,
                                  alt: e.name,
                                  className: `w-20 h-20 rounded-2xl object-cover object-top`,
                                }),
                                (0, Q.jsx)(`div`, {
                                  className: `absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center`,
                                  style: { background: `#3D8B6E` },
                                  children: (0, Q.jsx)(`i`, {
                                    className: `ri-check-line text-white`,
                                    style: { fontSize: `10px` },
                                  }),
                                }),
                              ],
                            }),
                            (0, Q.jsxs)(`div`, {
                              children: [
                                (0, Q.jsx)(`p`, {
                                  className: `font-bold text-sm mb-0.5`,
                                  style: { color: `#1A3A2E` },
                                  children: e.name,
                                }),
                                (0, Q.jsx)(`p`, {
                                  className: `text-xs mb-1`,
                                  style: { color: `#6B7A74` },
                                  children: e.role,
                                }),
                                (0, Q.jsx)(`p`, {
                                  className: `text-xs mb-2`,
                                  style: { color: `#9CA3AF` },
                                  children: e.exp,
                                }),
                                (0, Q.jsx)(Gn, { rating: e.rating }),
                              ],
                            }),
                            (0, Q.jsx)(`button`, {
                              onClick: () => r(n === t ? null : t),
                              className: `w-full h-9 rounded-xl text-xs font-semibold transition-all duration-200 hover:scale-105 cursor-pointer whitespace-nowrap`,
                              style:
                                n === t
                                  ? { background: `#3D8B6E`, color: `white` }
                                  : {
                                      background: `rgba(184,230,213,0.3)`,
                                      color: `#2C5F4F`,
                                      border: `1px solid rgba(61,139,110,0.25)`,
                                    },
                              children:
                                n === t
                                  ? (0, Q.jsxs)(Q.Fragment, {
                                      children: [
                                        (0, Q.jsx)(`i`, {
                                          className: `ri-check-line mr-1`,
                                        }),
                                        `Записано!`,
                                      ],
                                    })
                                  : (0, Q.jsxs)(Q.Fragment, {
                                      children: [
                                        (0, Q.jsx)(`i`, {
                                          className: `ri-calendar-line mr-1`,
                                        }),
                                        `Записаться`,
                                      ],
                                    }),
                            }),
                          ],
                        },
                        e.name,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          },
          e,
        ),
        (0, Q.jsxs)(`div`, {
          className: `rounded-3xl p-8 md:p-10`,
          style: {
            background: `linear-gradient(135deg, #2C5F4F 0%, #3D8B6E 100%)`,
          },
          children: [
            (0, Q.jsxs)(`div`, {
              className: `text-center mb-8`,
              children: [
                (0, Q.jsx)(`h4`, {
                  className: `text-2xl md:text-3xl font-bold text-white mb-2`,
                  style: { fontFamily: `'Playfair Display', serif` },
                  children: `Нужна помощь прямо сейчас?`,
                }),
                (0, Q.jsx)(`p`, {
                  className: `text-sm`,
                  style: { color: `rgba(255,255,255,0.75)` },
                  children: `Мы рядом — выберите удобный способ связи`,
                }),
              ],
            }),
            (0, Q.jsx)(`div`, {
              className: `grid grid-cols-1 sm:grid-cols-3 gap-4`,
              children: Wn.map((e) =>
                (0, Q.jsxs)(
                  `div`,
                  {
                    className: `rounded-2xl p-6 text-center flex flex-col items-center gap-3`,
                    style: {
                      background: `rgba(255,255,255,0.1)`,
                      border: `1.5px solid rgba(255,255,255,0.15)`,
                    },
                    children: [
                      (0, Q.jsx)(`div`, {
                        className: `w-12 h-12 rounded-xl flex items-center justify-center`,
                        style: { background: `rgba(255,255,255,0.15)` },
                        children: (0, Q.jsx)(`i`, {
                          className: `${e.icon} text-xl text-white`,
                        }),
                      }),
                      (0, Q.jsxs)(`div`, {
                        children: [
                          (0, Q.jsx)(`p`, {
                            className: `text-xs font-medium mb-1`,
                            style: { color: `rgba(255,255,255,0.65)` },
                            children: e.label,
                          }),
                          e.link
                            ? (0, Q.jsx)(`a`, {
                                href: e.link,
                                className: `text-base font-bold text-white cursor-pointer hover:underline`,
                                children: e.value,
                              })
                            : (0, Q.jsx)(`p`, {
                                className: `text-base font-bold text-white`,
                                children: e.value,
                              }),
                          (0, Q.jsx)(`p`, {
                            className: `text-xs mt-1`,
                            style: { color: `rgba(255,255,255,0.55)` },
                            children: e.note,
                          }),
                        ],
                      }),
                    ],
                  },
                  e.label,
                ),
              ),
            }),
            (0, Q.jsx)(`div`, {
              className: `flex flex-wrap justify-center gap-6 mt-8`,
              children: [
                {
                  icon: `ri-shield-check-line`,
                  text: `Полная конфиденциальность`,
                },
                { icon: `ri-award-line`, text: `Лицензированные специалисты` },
                { icon: `ri-heart-line`, text: `Без осуждения и стигмы` },
                { icon: `ri-global-line`, text: `Онлайн и офлайн форматы` },
              ].map((e) =>
                (0, Q.jsxs)(
                  `div`,
                  {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, Q.jsx)(`i`, {
                        className: `${e.icon} text-sm`,
                        style: { color: `rgba(184,230,213,0.9)` },
                      }),
                      (0, Q.jsx)(`span`, {
                        className: `text-xs font-medium`,
                        style: { color: `rgba(255,255,255,0.75)` },
                        children: e.text,
                      }),
                    ],
                  },
                  e.text,
                ),
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
function qn() {
  return (0, Q.jsxs)(`footer`, {
    style: { background: `#1A3A2E` },
    children: [
      (0, Q.jsx)(`div`, {
        className: `max-w-7xl mx-auto px-4 md:px-8 py-14`,
        children: (0, Q.jsxs)(`div`, {
          className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10`,
          children: [
            (0, Q.jsxs)(`div`, {
              children: [
                (0, Q.jsxs)(`div`, {
                  className: `flex items-center gap-2 mb-4`,
                  children: [
                    (0, Q.jsx)(`div`, {
                      className: `w-8 h-8 rounded-xl flex items-center justify-center`,
                      style: { background: `rgba(184,230,213,0.2)` },
                      children: (0, Q.jsx)(`i`, {
                        className: `ri-compass-3-line text-sm`,
                        style: { color: `#B8E6D5` },
                      }),
                    }),
                    (0, Q.jsx)(`span`, {
                      className: `font-bold text-lg`,
                      style: {
                        fontFamily: `'Playfair Display', serif`,
                        color: `#F5F0E8`,
                      },
                      children: `Семейный навигатор`,
                    }),
                  ],
                }),
                (0, Q.jsx)(`p`, {
                  className: `text-sm leading-relaxed`,
                  style: { color: `#9CA3AF` },
                  children: `Помогаем молодым семьям разобраться в государственной поддержке, льготах и пособиях. Всё в одном месте.`,
                }),
                (0, Q.jsx)(`div`, {
                  className: `flex gap-3 mt-5`,
                  children: [
                    `ri-telegram-line`,
                    `ri-vk-line`,
                    `ri-instagram-line`,
                  ].map((e) =>
                    (0, Q.jsx)(
                      `a`,
                      {
                        href: `#`,
                        className: `w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-200 cursor-pointer`,
                        style: {
                          background: `rgba(184,230,213,0.1)`,
                          color: `#B8E6D5`,
                        },
                        children: (0, Q.jsx)(`i`, { className: e }),
                      },
                      e,
                    ),
                  ),
                }),
              ],
            }),
            (0, Q.jsxs)(`div`, {
              children: [
                (0, Q.jsx)(`p`, {
                  className: `text-xs font-semibold uppercase tracking-widest mb-5`,
                  style: { color: `#B8E6D5` },
                  children: `Услуги`,
                }),
                (0, Q.jsx)(`ul`, {
                  className: `space-y-3`,
                  children: [
                    `Калькулятор пособий`,
                    `Маршрут беременности`,
                    `Маршрут новорождённого`,
                    `Жилищные программы`,
                    `Карта учреждений`,
                  ].map((e) =>
                    (0, Q.jsx)(
                      `li`,
                      {
                        children: (0, Q.jsx)(`a`, {
                          href: `#`,
                          className: `text-sm transition-colors duration-200 cursor-pointer`,
                          style: { color: `#9CA3AF` },
                          children: e,
                        }),
                      },
                      e,
                    ),
                  ),
                }),
              ],
            }),
            (0, Q.jsxs)(`div`, {
              children: [
                (0, Q.jsx)(`p`, {
                  className: `text-xs font-semibold uppercase tracking-widest mb-5`,
                  style: { color: `#B8E6D5` },
                  children: `Ресурсы`,
                }),
                (0, Q.jsx)(`ul`, {
                  className: `space-y-3`,
                  children: [
                    `Статьи и советы`,
                    `Часто задаваемые вопросы`,
                    `Глоссарий льгот`,
                    `Новости законодательства`,
                    `Контакты`,
                  ].map((e) =>
                    (0, Q.jsx)(
                      `li`,
                      {
                        children: (0, Q.jsx)(`a`, {
                          href: `#`,
                          className: `text-sm transition-colors duration-200 cursor-pointer`,
                          style: { color: `#9CA3AF` },
                          children: e,
                        }),
                      },
                      e,
                    ),
                  ),
                }),
              ],
            }),
            (0, Q.jsxs)(`div`, {
              children: [
                (0, Q.jsx)(`p`, {
                  className: `text-xs font-semibold uppercase tracking-widest mb-5`,
                  style: { color: `#B8E6D5` },
                  children: `Рассылка`,
                }),
                (0, Q.jsx)(`p`, {
                  className: `text-sm mb-4`,
                  style: { color: `#9CA3AF` },
                  children: `Получайте актуальные новости о льготах и пособиях`,
                }),
                (0, Q.jsxs)(`div`, {
                  className: `flex gap-2`,
                  children: [
                    (0, Q.jsx)(`input`, {
                      type: `email`,
                      placeholder: `Email`,
                      className: `flex-1 h-10 px-3 rounded-lg text-sm focus:outline-none`,
                      style: {
                        background: `rgba(255,255,255,0.08)`,
                        color: `white`,
                        border: `1px solid rgba(184,230,213,0.2)`,
                      },
                    }),
                    (0, Q.jsx)(`button`, {
                      className: `w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 cursor-pointer transition-colors duration-200`,
                      style: { background: `#3D8B6E`, color: `white` },
                      children: (0, Q.jsx)(`i`, {
                        className: `ri-send-plane-line text-sm`,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      (0, Q.jsx)(`div`, {
        style: { borderTop: `1px solid rgba(255,255,255,0.08)` },
      }),
      (0, Q.jsx)(`div`, {
        className: `max-w-7xl mx-auto px-4 md:px-8 py-8`,
        children: (0, Q.jsx)(`p`, {
          className: `text-4xl md:text-6xl lg:text-8xl font-bold text-center tracking-tight opacity-10 select-none`,
          style: { color: `#B8E6D5`, fontFamily: `'Playfair Display', serif` },
          children: `FAMILY NAVIGATOR`,
        }),
      }),
      (0, Q.jsx)(`div`, {
        style: { borderTop: `1px solid rgba(255,255,255,0.08)` },
        children: (0, Q.jsxs)(`div`, {
          className: `max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3`,
          children: [
            (0, Q.jsx)(`p`, {
              className: `text-xs`,
              style: { color: `#6B7280` },
              children: `© 2026 Семейный навигатор. Все права защищены.`,
            }),
            (0, Q.jsx)(`div`, {
              className: `flex gap-5`,
              children: [
                `Политика конфиденциальности`,
                `Условия использования`,
              ].map((e) =>
                (0, Q.jsx)(
                  `a`,
                  {
                    href: `#`,
                    className: `text-xs cursor-pointer`,
                    style: { color: `#6B7280` },
                    children: e,
                  },
                  e,
                ),
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
function Jn() {
  return (
    (0, v.useEffect)(() => {
      document.documentElement.style.scrollBehavior = `smooth`;
      let e = new IntersectionObserver(
        (e) => {
          e.forEach((e) => {
            e.isIntersecting &&
              (e.target.classList.add(`opacity-100`, `translate-y-0`),
              e.target.classList.remove(`opacity-0`, `translate-y-8`));
          });
        },
        { threshold: 0.1, rootMargin: `0px 0px -60px 0px` },
      );
      return (
        document
          .querySelectorAll(`.fade-in-section`)
          .forEach((t) => e.observe(t)),
        () => e.disconnect()
      );
    }, []),
    (0, Q.jsxs)(`div`, {
      className: `min-h-screen`,
      style: { fontFamily: `'Inter', sans-serif` },
      children: [
        (0, Q.jsx)(_n, {}),
        (0, Q.jsxs)(`main`, {
          children: [
            (0, Q.jsx)(`section`, { children: (0, Q.jsx)(vn, {}) }),
            (0, Q.jsx)(`section`, {
              className: `fade-in-section opacity-0 translate-y-8 transition-all duration-700`,
              children: (0, Q.jsx)(On, {}),
            }),
            (0, Q.jsx)(`section`, {
              className: `fade-in-section opacity-0 translate-y-8 transition-all duration-700 delay-100`,
              children: (0, Q.jsx)(kn, {}),
            }),
            (0, Q.jsx)(`section`, {
              className: `fade-in-section opacity-0 translate-y-8 transition-all duration-700 delay-100`,
              children: (0, Q.jsx)(An, {}),
            }),
            (0, Q.jsx)(`section`, {
              className: `fade-in-section opacity-0 translate-y-8 transition-all duration-700 delay-150`,
              children: (0, Q.jsx)(Mn, {}),
            }),
            (0, Q.jsx)(`section`, {
              className: `fade-in-section opacity-0 translate-y-8 transition-all duration-700 delay-150`,
              children: (0, Q.jsx)(Nn, {}),
            }),
            (0, Q.jsx)(`section`, {
              className: `fade-in-section opacity-0 translate-y-8 transition-all duration-700 delay-150`,
              children: (0, Q.jsx)(Ln, {}),
            }),
            (0, Q.jsx)(`section`, {
              className: `fade-in-section opacity-0 translate-y-8 transition-all duration-700 delay-200`,
              children: (0, Q.jsx)(zn, {}),
            }),
            (0, Q.jsx)(`section`, {
              className: `fade-in-section opacity-0 translate-y-8 transition-all duration-700 delay-200`,
              children: (0, Q.jsx)(Vn, {}),
            }),
            (0, Q.jsx)(`section`, {
              className: `fade-in-section opacity-0 translate-y-8 transition-all duration-700 delay-200`,
              children: (0, Q.jsx)(Kn, {}),
            }),
          ],
        }),
        (0, Q.jsx)(qn, {}),
      ],
    })
  );
}
var Yn = s({ default: () => Xn }),
  Xn = [
    { path: `/`, element: (0, Q.jsx)(Jn, {}) },
    { path: `*`, element: (0, Q.jsx)(hn, {}) },
  ];
export {
  qe as a,
  p as c,
  l as d,
  Ge as i,
  o as l,
  Xn as n,
  _ as o,
  Jt as r,
  h as s,
  Yn as t,
  s as u,
};
//# sourceMappingURL=config-C689Kx7R.js.map
