function cr(t, e) {
  const n = Object.create(null)
    , i = t.split(",");
  for (let s = 0; s < i.length; s++)
    n[i[s]] = !0;
  return e ? s => !!n[s.toLowerCase()] : s => !!n[s]
}
const Et = {}
  , Hn = []
  , ge = () => { }
  , Hd = () => !1
  , Ud = /^on[^a-z]/
  , zi = t => Ud.test(t)
  , ur = t => t.startsWith("onUpdate:")
  , Mt = Object.assign
  , dr = (t, e) => {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
  }
  , Bd = Object.prototype.hasOwnProperty
  , _t = (t, e) => Bd.call(t, e)
  , tt = Array.isArray
  , Un = t => ai(t) === "[object Map]"
  , ri = t => ai(t) === "[object Set]"
  , ta = t => ai(t) === "[object Date]"
  , qd = t => ai(t) === "[object RegExp]"
  , nt = t => typeof t == "function"
  , Ct = t => typeof t == "string"
  , Si = t => typeof t == "symbol"
  , ht = t => t !== null && typeof t == "object"
  , fr = t => ht(t) && nt(t.then) && nt(t.catch)
  , bc = Object.prototype.toString
  , ai = t => bc.call(t)
  , $d = t => ai(t).slice(8, -1)
  , mc = t => ai(t) === "[object Object]"
  , _r = t => Ct(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t
  , gi = cr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , Os = t => {
    const e = Object.create(null);
    return n => e[n] || (e[n] = t(n))
  }
  , Wd = /-(\w)/g
  , Re = Os(t => t.replace(Wd, (e, n) => n ? n.toUpperCase() : ""))
  , Kd = /\B([A-Z])/g
  , Nn = Os(t => t.replace(Kd, "-$1").toLowerCase())
  , Is = Os(t => t.charAt(0).toUpperCase() + t.slice(1))
  , so = Os(t => t ? `on${Is(t)}` : "")
  , Pi = (t, e) => !Object.is(t, e)
  , Bn = (t, e) => {
    for (let n = 0; n < t.length; n++)
      t[n](e)
  }
  , rs = (t, e, n) => {
    Object.defineProperty(t, e, {
      configurable: !0,
      enumerable: !1,
      value: n
    })
  }
  , as = t => {
    const e = parseFloat(t);
    return isNaN(e) ? t : e
  }
  , pc = t => {
    const e = Ct(t) ? Number(t) : NaN;
    return isNaN(e) ? t : e
  }
  ;
let ea;
const Ao = () => ea || (ea = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ns(t) {
  if (tt(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const i = t[n]
        , s = Ct(i) ? Xd(i) : Ns(i);
      if (s)
        for (const o in s)
          e[o] = s[o]
    }
    return e
  } else {
    if (Ct(t))
      return t;
    if (ht(t))
      return t
  }
}
const Gd = /;(?![^(]*\))/g
  , Yd = /:([^]+)/
  , Jd = /\/\*[^]*?\*\//g;
function Xd(t) {
  const e = {};
  return t.replace(Jd, "").split(Gd).forEach(n => {
    if (n) {
      const i = n.split(Yd);
      i.length > 1 && (e[i[0].trim()] = i[1].trim())
    }
  }
  ),
    e
}
function Ds(t) {
  let e = "";
  if (Ct(t))
    e = t;
  else if (tt(t))
    for (let n = 0; n < t.length; n++) {
      const i = Ds(t[n]);
      i && (e += i + " ")
    }
  else if (ht(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim()
}
function bv(t) {
  if (!t)
    return null;
  let { class: e, style: n } = t;
  return e && !Ct(e) && (t.class = Ds(e)),
    n && (t.style = Ns(n)),
    t
}
const Zd = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , Qd = cr(Zd);
function hc(t) {
  return !!t || t === ""
}
function tf(t, e) {
  if (t.length !== e.length)
    return !1;
  let n = !0;
  for (let i = 0; n && i < t.length; i++)
    n = Ln(t[i], e[i]);
  return n
}
function Ln(t, e) {
  if (t === e)
    return !0;
  let n = ta(t)
    , i = ta(e);
  if (n || i)
    return n && i ? t.getTime() === e.getTime() : !1;
  if (n = Si(t),
    i = Si(e),
    n || i)
    return t === e;
  if (n = tt(t),
    i = tt(e),
    n || i)
    return n && i ? tf(t, e) : !1;
  if (n = ht(t),
    i = ht(e),
    n || i) {
    if (!n || !i)
      return !1;
    const s = Object.keys(t).length
      , o = Object.keys(e).length;
    if (s !== o)
      return !1;
    for (const r in t) {
      const a = t.hasOwnProperty(r)
        , l = e.hasOwnProperty(r);
      if (a && !l || !a && l || !Ln(t[r], e[r]))
        return !1
    }
  }
  return String(t) === String(e)
}
function br(t, e) {
  return t.findIndex(n => Ln(n, e))
}
const na = t => Ct(t) ? t : t == null ? "" : tt(t) || ht(t) && (t.toString === bc || !nt(t.toString)) ? JSON.stringify(t, gc, 2) : String(t)
  , gc = (t, e) => e && e.__v_isRef ? gc(t, e.value) : Un(e) ? {
    [`Map(${e.size})`]: [...e.entries()].reduce((n, [i, s]) => (n[`${i} =>`] = s,
      n), {})
  } : ri(e) ? {
    [`Set(${e.size})`]: [...e.values()]
  } : ht(e) && !tt(e) && !mc(e) ? String(e) : e;
let ne;
class vc {
  constructor(e = !1) {
    this.detached = e,
      this._active = !0,
      this.effects = [],
      this.cleanups = [],
      this.parent = ne,
      !e && ne && (this.index = (ne.scopes || (ne.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(e) {
    if (this._active) {
      const n = ne;
      try {
        return ne = this,
          e()
      } finally {
        ne = n
      }
    }
  }
  on() {
    ne = this
  }
  off() {
    ne = this.parent
  }
  stop(e) {
    if (this._active) {
      let n, i;
      for (n = 0,
        i = this.effects.length; n < i; n++)
        this.effects[n].stop();
      for (n = 0,
        i = this.cleanups.length; n < i; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0,
          i = this.scopes.length; n < i; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !e) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s,
          s.index = this.index)
      }
      this.parent = void 0,
        this._active = !1
    }
  }
}
function yc(t) {
  return new vc(t)
}
function ef(t, e = ne) {
  e && e.active && e.effects.push(t)
}
function nf() {
  return ne
}
function mv(t) {
  ne && ne.cleanups.push(t)
}
const mr = t => {
  const e = new Set(t);
  return e.w = 0,
    e.n = 0,
    e
}
  , kc = t => (t.w & sn) > 0
  , Ec = t => (t.n & sn) > 0
  , sf = ({ deps: t }) => {
    if (t.length)
      for (let e = 0; e < t.length; e++)
        t[e].w |= sn
  }
  , of = t => {
    const { deps: e } = t;
    if (e.length) {
      let n = 0;
      for (let i = 0; i < e.length; i++) {
        const s = e[i];
        kc(s) && !Ec(s) ? s.delete(t) : e[n++] = s,
          s.w &= ~sn,
          s.n &= ~sn
      }
      e.length = n
    }
  }
  , ls = new WeakMap;
let mi = 0
  , sn = 1;
const Co = 30;
let me;
const An = Symbol("")
  , So = Symbol("");
class pr {
  constructor(e, n = null, i) {
    this.fn = e,
      this.scheduler = n,
      this.active = !0,
      this.deps = [],
      this.parent = void 0,
      ef(this, i)
  }
  run() {
    if (!this.active)
      return this.fn();
    let e = me
      , n = tn;
    for (; e;) {
      if (e === this)
        return;
      e = e.parent
    }
    try {
      return this.parent = me,
        me = this,
        tn = !0,
        sn = 1 << ++mi,
        mi <= Co ? sf(this) : ia(this),
        this.fn()
    } finally {
      mi <= Co && of(this),
        sn = 1 << --mi,
        me = this.parent,
        tn = n,
        this.parent = void 0,
        this.deferStop && this.stop()
    }
  }
  stop() {
    me === this ? this.deferStop = !0 : this.active && (ia(this),
      this.onStop && this.onStop(),
      this.active = !1)
  }
}
function ia(t) {
  const { deps: e } = t;
  if (e.length) {
    for (let n = 0; n < e.length; n++)
      e[n].delete(t);
    e.length = 0
  }
}
let tn = !0;
const wc = [];
function li() {
  wc.push(tn),
    tn = !1
}
function ci() {
  const t = wc.pop();
  tn = t === void 0 ? !0 : t
}
function Jt(t, e, n) {
  if (tn && me) {
    let i = ls.get(t);
    i || ls.set(t, i = new Map);
    let s = i.get(n);
    s || i.set(n, s = mr()),
      Tc(s)
  }
}
function Tc(t, e) {
  let n = !1;
  mi <= Co ? Ec(t) || (t.n |= sn,
    n = !kc(t)) : n = !t.has(me),
    n && (t.add(me),
      me.deps.push(t))
}
function Ue(t, e, n, i, s, o) {
  const r = ls.get(t);
  if (!r)
    return;
  let a = [];
  if (e === "clear")
    a = [...r.values()];
  else if (n === "length" && tt(t)) {
    const l = Number(i);
    r.forEach((c, u) => {
      (u === "length" || u >= l) && a.push(c)
    }
    )
  } else
    switch (n !== void 0 && a.push(r.get(n)),
    e) {
      case "add":
        tt(t) ? _r(n) && a.push(r.get("length")) : (a.push(r.get(An)),
          Un(t) && a.push(r.get(So)));
        break;
      case "delete":
        tt(t) || (a.push(r.get(An)),
          Un(t) && a.push(r.get(So)));
        break;
      case "set":
        Un(t) && a.push(r.get(An));
        break
    }
  if (a.length === 1)
    a[0] && Po(a[0]);
  else {
    const l = [];
    for (const c of a)
      c && l.push(...c);
    Po(mr(l))
  }
}
function Po(t, e) {
  const n = tt(t) ? t : [...t];
  for (const i of n)
    i.computed && sa(i);
  for (const i of n)
    i.computed || sa(i)
}
function sa(t, e) {
  (t !== me || t.allowRecurse) && (t.scheduler ? t.scheduler() : t.run())
}
function rf(t, e) {
  var n;
  return (n = ls.get(t)) == null ? void 0 : n.get(e)
}
const af = cr("__proto__,__v_isRef,__isVue")
  , Ac = new Set(Object.getOwnPropertyNames(Symbol).filter(t => t !== "arguments" && t !== "caller").map(t => Symbol[t]).filter(Si))
  , lf = hr()
  , cf = hr(!1, !0)
  , uf = hr(!0)
  , oa = df();
function df() {
  const t = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach(e => {
    t[e] = function (...n) {
      const i = ft(this);
      for (let o = 0, r = this.length; o < r; o++)
        Jt(i, "get", o + "");
      const s = i[e](...n);
      return s === -1 || s === !1 ? i[e](...n.map(ft)) : s
    }
  }
  ),
    ["push", "pop", "shift", "unshift", "splice"].forEach(e => {
      t[e] = function (...n) {
        li();
        const i = ft(this)[e].apply(this, n);
        return ci(),
          i
      }
    }
    ),
    t
}
function ff(t) {
  const e = ft(this);
  return Jt(e, "has", t),
    e.hasOwnProperty(t)
}
function hr(t = !1, e = !1) {
  return function (i, s, o) {
    if (s === "__v_isReactive")
      return !t;
    if (s === "__v_isReadonly")
      return t;
    if (s === "__v_isShallow")
      return e;
    if (s === "__v_raw" && o === (t ? e ? Pf : Rc : e ? Lc : Pc).get(i))
      return i;
    const r = tt(i);
    if (!t) {
      if (r && _t(oa, s))
        return Reflect.get(oa, s, o);
      if (s === "hasOwnProperty")
        return ff
    }
    const a = Reflect.get(i, s, o);
    return (Si(s) ? Ac.has(s) : af(s)) || (t || Jt(i, "get", s),
      e) ? a : St(a) ? r && _r(s) ? a : a.value : ht(a) ? t ? Oc(a) : on(a) : a
  }
}
const _f = Cc()
  , bf = Cc(!0);
function Cc(t = !1) {
  return function (n, i, s, o) {
    let r = n[i];
    if (Rn(r) && St(r) && !St(s))
      return !1;
    if (!t && (!cs(s) && !Rn(s) && (r = ft(r),
      s = ft(s)),
      !tt(n) && St(r) && !St(s)))
      return r.value = s,
        !0;
    const a = tt(n) && _r(i) ? Number(i) < n.length : _t(n, i)
      , l = Reflect.set(n, i, s, o);
    return n === ft(o) && (a ? Pi(s, r) && Ue(n, "set", i, s) : Ue(n, "add", i, s)),
      l
  }
}
function mf(t, e) {
  const n = _t(t, e);
  t[e];
  const i = Reflect.deleteProperty(t, e);
  return i && n && Ue(t, "delete", e, void 0),
    i
}
function pf(t, e) {
  const n = Reflect.has(t, e);
  return (!Si(e) || !Ac.has(e)) && Jt(t, "has", e),
    n
}
function hf(t) {
  return Jt(t, "iterate", tt(t) ? "length" : An),
    Reflect.ownKeys(t)
}
const Sc = {
  get: lf,
  set: _f,
  deleteProperty: mf,
  has: pf,
  ownKeys: hf
}
  , gf = {
    get: uf,
    set(t, e) {
      return !0
    },
    deleteProperty(t, e) {
      return !0
    }
  }
  , vf = Mt({}, Sc, {
    get: cf,
    set: bf
  })
  , gr = t => t
  , Ms = t => Reflect.getPrototypeOf(t);
function qi(t, e, n = !1, i = !1) {
  t = t.__v_raw;
  const s = ft(t)
    , o = ft(e);
  n || (e !== o && Jt(s, "get", e),
    Jt(s, "get", o));
  const { has: r } = Ms(s)
    , a = i ? gr : n ? kr : Li;
  if (r.call(s, e))
    return a(t.get(e));
  if (r.call(s, o))
    return a(t.get(o));
  t !== s && t.get(e)
}
function $i(t, e = !1) {
  const n = this.__v_raw
    , i = ft(n)
    , s = ft(t);
  return e || (t !== s && Jt(i, "has", t),
    Jt(i, "has", s)),
    t === s ? n.has(t) : n.has(t) || n.has(s)
}
function Wi(t, e = !1) {
  return t = t.__v_raw,
    !e && Jt(ft(t), "iterate", An),
    Reflect.get(t, "size", t)
}
function ra(t) {
  t = ft(t);
  const e = ft(this);
  return Ms(e).has.call(e, t) || (e.add(t),
    Ue(e, "add", t, t)),
    this
}
function aa(t, e) {
  e = ft(e);
  const n = ft(this)
    , { has: i, get: s } = Ms(n);
  let o = i.call(n, t);
  o || (t = ft(t),
    o = i.call(n, t));
  const r = s.call(n, t);
  return n.set(t, e),
    o ? Pi(e, r) && Ue(n, "set", t, e) : Ue(n, "add", t, e),
    this
}
function la(t) {
  const e = ft(this)
    , { has: n, get: i } = Ms(e);
  let s = n.call(e, t);
  s || (t = ft(t),
    s = n.call(e, t)),
    i && i.call(e, t);
  const o = e.delete(t);
  return s && Ue(e, "delete", t, void 0),
    o
}
function ca() {
  const t = ft(this)
    , e = t.size !== 0
    , n = t.clear();
  return e && Ue(t, "clear", void 0, void 0),
    n
}
function Ki(t, e) {
  return function (i, s) {
    const o = this
      , r = o.__v_raw
      , a = ft(r)
      , l = e ? gr : t ? kr : Li;
    return !t && Jt(a, "iterate", An),
      r.forEach((c, u) => i.call(s, l(c), l(u), o))
  }
}
function Gi(t, e, n) {
  return function (...i) {
    const s = this.__v_raw
      , o = ft(s)
      , r = Un(o)
      , a = t === "entries" || t === Symbol.iterator && r
      , l = t === "keys" && r
      , c = s[t](...i)
      , u = n ? gr : e ? kr : Li;
    return !e && Jt(o, "iterate", l ? So : An),
    {
      next() {
        const { value: d, done: f } = c.next();
        return f ? {
          value: d,
          done: f
        } : {
          value: a ? [u(d[0]), u(d[1])] : u(d),
          done: f
        }
      },
      [Symbol.iterator]() {
        return this
      }
    }
  }
}
function We(t) {
  return function (...e) {
    return t === "delete" ? !1 : this
  }
}
function yf() {
  const t = {
    get(o) {
      return qi(this, o)
    },
    get size() {
      return Wi(this)
    },
    has: $i,
    add: ra,
    set: aa,
    delete: la,
    clear: ca,
    forEach: Ki(!1, !1)
  }
    , e = {
      get(o) {
        return qi(this, o, !1, !0)
      },
      get size() {
        return Wi(this)
      },
      has: $i,
      add: ra,
      set: aa,
      delete: la,
      clear: ca,
      forEach: Ki(!1, !0)
    }
    , n = {
      get(o) {
        return qi(this, o, !0)
      },
      get size() {
        return Wi(this, !0)
      },
      has(o) {
        return $i.call(this, o, !0)
      },
      add: We("add"),
      set: We("set"),
      delete: We("delete"),
      clear: We("clear"),
      forEach: Ki(!0, !1)
    }
    , i = {
      get(o) {
        return qi(this, o, !0, !0)
      },
      get size() {
        return Wi(this, !0)
      },
      has(o) {
        return $i.call(this, o, !0)
      },
      add: We("add"),
      set: We("set"),
      delete: We("delete"),
      clear: We("clear"),
      forEach: Ki(!0, !0)
    };
  return ["keys", "values", "entries", Symbol.iterator].forEach(o => {
    t[o] = Gi(o, !1, !1),
      n[o] = Gi(o, !0, !1),
      e[o] = Gi(o, !1, !0),
      i[o] = Gi(o, !0, !0)
  }
  ),
    [t, n, e, i]
}
const [kf, Ef, wf, Tf] = yf();
function vr(t, e) {
  const n = e ? t ? Tf : wf : t ? Ef : kf;
  return (i, s, o) => s === "__v_isReactive" ? !t : s === "__v_isReadonly" ? t : s === "__v_raw" ? i : Reflect.get(_t(n, s) && s in i ? n : i, s, o)
}
const Af = {
  get: vr(!1, !1)
}
  , Cf = {
    get: vr(!1, !0)
  }
  , Sf = {
    get: vr(!0, !1)
  }
  , Pc = new WeakMap
  , Lc = new WeakMap
  , Rc = new WeakMap
  , Pf = new WeakMap;
function Lf(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0
  }
}
function Rf(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Lf($d(t))
}
function on(t) {
  return Rn(t) ? t : yr(t, !1, Sc, Af, Pc)
}
function Fi(t) {
  return yr(t, !1, vf, Cf, Lc)
}
function Oc(t) {
  return yr(t, !0, gf, Sf, Rc)
}
function yr(t, e, n, i, s) {
  if (!ht(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const o = s.get(t);
  if (o)
    return o;
  const r = Rf(t);
  if (r === 0)
    return t;
  const a = new Proxy(t, r === 2 ? i : n);
  return s.set(t, a),
    a
}
function qn(t) {
  return Rn(t) ? qn(t.__v_raw) : !!(t && t.__v_isReactive)
}
function Rn(t) {
  return !!(t && t.__v_isReadonly)
}
function cs(t) {
  return !!(t && t.__v_isShallow)
}
function Ic(t) {
  return qn(t) || Rn(t)
}
function ft(t) {
  const e = t && t.__v_raw;
  return e ? ft(e) : t
}
function Nc(t) {
  return rs(t, "__v_skip", !0),
    t
}
const Li = t => ht(t) ? on(t) : t
  , kr = t => ht(t) ? Oc(t) : t;
function Dc(t) {
  tn && me && (t = ft(t),
    Tc(t.dep || (t.dep = mr())))
}
function Mc(t, e) {
  t = ft(t);
  const n = t.dep;
  n && Po(n)
}
function St(t) {
  return !!(t && t.__v_isRef === !0)
}
function Ut(t) {
  return jc(t, !1)
}
function Gn(t) {
  return jc(t, !0)
}
function jc(t, e) {
  return St(t) ? t : new Of(t, e)
}
class Of {
  constructor(e, n) {
    this.__v_isShallow = n,
      this.dep = void 0,
      this.__v_isRef = !0,
      this._rawValue = n ? e : ft(e),
      this._value = n ? e : Li(e)
  }
  get value() {
    return Dc(this),
      this._value
  }
  set value(e) {
    const n = this.__v_isShallow || cs(e) || Rn(e);
    e = n ? e : ft(e),
      Pi(e, this._rawValue) && (this._rawValue = e,
        this._value = n ? e : Li(e),
        Mc(this))
  }
}
function ut(t) {
  return St(t) ? t.value : t
}
const If = {
  get: (t, e, n) => ut(Reflect.get(t, e, n)),
  set: (t, e, n, i) => {
    const s = t[e];
    return St(s) && !St(n) ? (s.value = n,
      !0) : Reflect.set(t, e, n, i)
  }
};
function xc(t) {
  return qn(t) ? t : new Proxy(t, If)
}
class Nf {
  constructor(e, n, i) {
    this._object = e,
      this._key = n,
      this._defaultValue = i,
      this.__v_isRef = !0
  }
  get value() {
    const e = this._object[this._key];
    return e === void 0 ? this._defaultValue : e
  }
  set value(e) {
    this._object[this._key] = e
  }
  get dep() {
    return rf(ft(this._object), this._key)
  }
}
class Df {
  constructor(e) {
    this._getter = e,
      this.__v_isRef = !0,
      this.__v_isReadonly = !0
  }
  get value() {
    return this._getter()
  }
}
function zc(t, e, n) {
  return St(t) ? t : nt(t) ? new Df(t) : ht(t) && arguments.length > 1 ? Mf(t, e, n) : Ut(t)
}
function Mf(t, e, n) {
  const i = t[e];
  return St(i) ? i : new Nf(t, e, n)
}
class jf {
  constructor(e, n, i, s) {
    this._setter = n,
      this.dep = void 0,
      this.__v_isRef = !0,
      this.__v_isReadonly = !1,
      this._dirty = !0,
      this.effect = new pr(e, () => {
        this._dirty || (this._dirty = !0,
          Mc(this))
      }
      ),
      this.effect.computed = this,
      this.effect.active = this._cacheable = !s,
      this.__v_isReadonly = i
  }
  get value() {
    const e = ft(this);
    return Dc(e),
      (e._dirty || !e._cacheable) && (e._dirty = !1,
        e._value = e.effect.run()),
      e._value
  }
  set value(e) {
    this._setter(e)
  }
}
function xf(t, e, n = !1) {
  let i, s;
  const o = nt(t);
  return o ? (i = t,
    s = ge) : (i = t.get,
      s = t.set),
    new jf(i, s, o || !s, n)
}
function en(t, e, n, i) {
  let s;
  try {
    s = i ? t(...i) : t()
  } catch (o) {
    ui(o, e, n)
  }
  return s
}
function ce(t, e, n, i) {
  if (nt(t)) {
    const o = en(t, e, n, i);
    return o && fr(o) && o.catch(r => {
      ui(r, e, n)
    }
    ),
      o
  }
  const s = [];
  for (let o = 0; o < t.length; o++)
    s.push(ce(t[o], e, n, i));
  return s
}
function ui(t, e, n, i = !0) {
  const s = e ? e.vnode : null;
  if (e) {
    let o = e.parent;
    const r = e.proxy
      , a = n;
    for (; o;) {
      const c = o.ec;
      if (c) {
        for (let u = 0; u < c.length; u++)
          if (c[u](t, r, a) === !1)
            return
      }
      o = o.parent
    }
    const l = e.appContext.config.errorHandler;
    if (l) {
      en(l, null, 10, [t, r, a]);
      return
    }
  }
  zf(t, n, s, i)
}
function zf(t, e, n, i = !0) {
  console.error(t)
}
let Ri = !1
  , Lo = !1;
const Ht = [];
let Pe = 0;
const $n = [];
let je = null
  , yn = 0;
const Fc = Promise.resolve();
let Er = null;
function ln(t) {
  const e = Er || Fc;
  return t ? e.then(this ? t.bind(this) : t) : e
}
function Ff(t) {
  let e = Pe + 1
    , n = Ht.length;
  for (; e < n;) {
    const i = e + n >>> 1;
    Oi(Ht[i]) < t ? e = i + 1 : n = i
  }
  return e
}
function js(t) {
  (!Ht.length || !Ht.includes(t, Ri && t.allowRecurse ? Pe + 1 : Pe)) && (t.id == null ? Ht.push(t) : Ht.splice(Ff(t.id), 0, t),
    Vc())
}
function Vc() {
  !Ri && !Lo && (Lo = !0,
    Er = Fc.then(Uc))
}
function Vf(t) {
  const e = Ht.indexOf(t);
  e > Pe && Ht.splice(e, 1)
}
function Hc(t) {
  tt(t) ? $n.push(...t) : (!je || !je.includes(t, t.allowRecurse ? yn + 1 : yn)) && $n.push(t),
    Vc()
}
function ua(t, e = Ri ? Pe + 1 : 0) {
  for (; e < Ht.length; e++) {
    const n = Ht[e];
    n && n.pre && (Ht.splice(e, 1),
      e--,
      n())
  }
}
function us(t) {
  if ($n.length) {
    const e = [...new Set($n)];
    if ($n.length = 0,
      je) {
      je.push(...e);
      return
    }
    for (je = e,
      je.sort((n, i) => Oi(n) - Oi(i)),
      yn = 0; yn < je.length; yn++)
      je[yn]();
    je = null,
      yn = 0
  }
}
const Oi = t => t.id == null ? 1 / 0 : t.id
  , Hf = (t, e) => {
    const n = Oi(t) - Oi(e);
    if (n === 0) {
      if (t.pre && !e.pre)
        return -1;
      if (e.pre && !t.pre)
        return 1
    }
    return n
  }
  ;
function Uc(t) {
  Lo = !1,
    Ri = !0,
    Ht.sort(Hf);
  const e = ge;
  try {
    for (Pe = 0; Pe < Ht.length; Pe++) {
      const n = Ht[Pe];
      n && n.active !== !1 && en(n, null, 14)
    }
  } finally {
    Pe = 0,
      Ht.length = 0,
      us(),
      Ri = !1,
      Er = null,
      (Ht.length || $n.length) && Uc()
  }
}
function Uf(t, e, ...n) {
  if (t.isUnmounted)
    return;
  const i = t.vnode.props || Et;
  let s = n;
  const o = e.startsWith("update:")
    , r = o && e.slice(7);
  if (r && r in i) {
    const u = `${r === "modelValue" ? "model" : r}Modifiers`
      , { number: d, trim: f } = i[u] || Et;
    f && (s = n.map(b => Ct(b) ? b.trim() : b)),
      d && (s = n.map(as))
  }
  let a, l = i[a = so(e)] || i[a = so(Re(e))];
  !l && o && (l = i[a = so(Nn(e))]),
    l && ce(l, t, 6, s);
  const c = i[a + "Once"];
  if (c) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[a])
      return;
    t.emitted[a] = !0,
      ce(c, t, 6, s)
  }
}
function Bc(t, e, n = !1) {
  const i = e.emitsCache
    , s = i.get(t);
  if (s !== void 0)
    return s;
  const o = t.emits;
  let r = {}
    , a = !1;
  if (!nt(t)) {
    const l = c => {
      const u = Bc(c, e, !0);
      u && (a = !0,
        Mt(r, u))
    }
      ;
    !n && e.mixins.length && e.mixins.forEach(l),
      t.extends && l(t.extends),
      t.mixins && t.mixins.forEach(l)
  }
  return !o && !a ? (ht(t) && i.set(t, null),
    null) : (tt(o) ? o.forEach(l => r[l] = null) : Mt(r, o),
      ht(t) && i.set(t, r),
      r)
}
function xs(t, e) {
  return !t || !zi(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""),
    _t(t, e[0].toLowerCase() + e.slice(1)) || _t(t, Nn(e)) || _t(t, e))
}
let xt = null
  , zs = null;
function ds(t) {
  const e = xt;
  return xt = t,
    zs = t && t.type.__scopeId || null,
    e
}
function pv(t) {
  zs = t
}
function hv() {
  zs = null
}
function wr(t, e = xt, n) {
  if (!e || t._n)
    return t;
  const i = (...s) => {
    i._d && wa(-1);
    const o = ds(e);
    let r;
    try {
      r = t(...s)
    } finally {
      ds(o),
        i._d && wa(1)
    }
    return r
  }
    ;
  return i._n = !0,
    i._c = !0,
    i._d = !0,
    i
}
function oo(t) {
  const { type: e, vnode: n, proxy: i, withProxy: s, props: o, propsOptions: [r], slots: a, attrs: l, emit: c, render: u, renderCache: d, data: f, setupState: b, ctx: w, inheritAttrs: E } = t;
  let S, v;
  const _ = ds(t);
  try {
    if (n.shapeFlag & 4) {
      const m = s || i;
      S = re(u.call(m, m, d, o, b, f, w)),
        v = l
    } else {
      const m = e;
      S = re(m.length > 1 ? m(o, {
        attrs: l,
        slots: a,
        emit: c
      }) : m(o, null)),
        v = e.props ? l : qf(l)
    }
  } catch (m) {
    ki.length = 0,
      ui(m, t, 1),
      S = Tt($t)
  }
  let g = S;
  if (v && E !== !1) {
    const m = Object.keys(v)
      , { shapeFlag: T } = g;
    m.length && T & 7 && (r && m.some(ur) && (v = $f(v, r)),
      g = Be(g, v))
  }
  return n.dirs && (g = Be(g),
    g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs),
    n.transition && (g.transition = n.transition),
    S = g,
    ds(_),
    S
}
function Bf(t) {
  let e;
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    if (Jn(i)) {
      if (i.type !== $t || i.children === "v-if") {
        if (e)
          return;
        e = i
      }
    } else
      return
  }
  return e
}
const qf = t => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || zi(n)) && ((e || (e = {}))[n] = t[n]);
  return e
}
  , $f = (t, e) => {
    const n = {};
    for (const i in t)
      (!ur(i) || !(i.slice(9) in e)) && (n[i] = t[i]);
    return n
  }
  ;
function Wf(t, e, n) {
  const { props: i, children: s, component: o } = t
    , { props: r, children: a, patchFlag: l } = e
    , c = o.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? da(i, r, c) : !!r;
    if (l & 8) {
      const u = e.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const f = u[d];
        if (r[f] !== i[f] && !xs(c, f))
          return !0
      }
    }
  } else
    return (s || a) && (!a || !a.$stable) ? !0 : i === r ? !1 : i ? r ? da(i, r, c) : !0 : !!r;
  return !1
}
function da(t, e, n) {
  const i = Object.keys(e);
  if (i.length !== Object.keys(t).length)
    return !0;
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    if (e[o] !== t[o] && !xs(n, o))
      return !0
  }
  return !1
}
function Tr({ vnode: t, parent: e }, n) {
  for (; e && e.subTree === t;)
    (t = e.vnode).el = n,
      e = e.parent
}
const qc = t => t.__isSuspense
  , Kf = {
    name: "Suspense",
    __isSuspense: !0,
    process(t, e, n, i, s, o, r, a, l, c) {
      t == null ? Gf(e, n, i, s, o, r, a, l, c) : Yf(t, e, n, i, s, r, a, l, c)
    },
    hydrate: Jf,
    create: Cr,
    normalize: Xf
  }
  , Ar = Kf;
function Ii(t, e) {
  const n = t.props && t.props[e];
  nt(n) && n()
}
function Gf(t, e, n, i, s, o, r, a, l) {
  const { p: c, o: { createElement: u } } = l
    , d = u("div")
    , f = t.suspense = Cr(t, s, i, e, d, n, o, r, a, l);
  c(null, f.pendingBranch = t.ssContent, d, null, i, f, o, r),
    f.deps > 0 ? (Ii(t, "onPending"),
      Ii(t, "onFallback"),
      c(null, t.ssFallback, e, n, i, null, o, r),
      Wn(f, t.ssFallback)) : f.resolve(!1, !0)
}
function Yf(t, e, n, i, s, o, r, a, { p: l, um: c, o: { createElement: u } }) {
  const d = e.suspense = t.suspense;
  d.vnode = e,
    e.el = t.el;
  const f = e.ssContent
    , b = e.ssFallback
    , { activeBranch: w, pendingBranch: E, isInFallback: S, isHydrating: v } = d;
  if (E)
    d.pendingBranch = f,
      he(f, E) ? (l(E, f, d.hiddenContainer, null, s, d, o, r, a),
        d.deps <= 0 ? d.resolve() : S && (l(w, b, n, i, s, null, o, r, a),
          Wn(d, b))) : (d.pendingId++,
            v ? (d.isHydrating = !1,
              d.activeBranch = E) : c(E, s, d),
            d.deps = 0,
            d.effects.length = 0,
            d.hiddenContainer = u("div"),
            S ? (l(null, f, d.hiddenContainer, null, s, d, o, r, a),
              d.deps <= 0 ? d.resolve() : (l(w, b, n, i, s, null, o, r, a),
                Wn(d, b))) : w && he(f, w) ? (l(w, f, n, i, s, d, o, r, a),
                  d.resolve(!0)) : (l(null, f, d.hiddenContainer, null, s, d, o, r, a),
                    d.deps <= 0 && d.resolve()));
  else if (w && he(f, w))
    l(w, f, n, i, s, d, o, r, a),
      Wn(d, f);
  else if (Ii(e, "onPending"),
    d.pendingBranch = f,
    d.pendingId++,
    l(null, f, d.hiddenContainer, null, s, d, o, r, a),
    d.deps <= 0)
    d.resolve();
  else {
    const { timeout: _, pendingId: g } = d;
    _ > 0 ? setTimeout(() => {
      d.pendingId === g && d.fallback(b)
    }
      , _) : _ === 0 && d.fallback(b)
  }
}
function Cr(t, e, n, i, s, o, r, a, l, c, u = !1) {
  const { p: d, m: f, um: b, n: w, o: { parentNode: E, remove: S } } = c;
  let v;
  const _ = Zf(t);
  _ && e != null && e.pendingBranch && (v = e.pendingId,
    e.deps++);
  const g = t.props ? pc(t.props.timeout) : void 0
    , m = {
      vnode: t,
      parent: e,
      parentComponent: n,
      isSVG: r,
      container: i,
      hiddenContainer: s,
      anchor: o,
      deps: 0,
      pendingId: 0,
      timeout: typeof g == "number" ? g : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !0,
      isHydrating: u,
      isUnmounted: !1,
      effects: [],
      resolve(T = !1, A = !1) {
        const { vnode: O, activeBranch: R, pendingBranch: N, pendingId: W, effects: Q, parentComponent: F, container: J } = m;
        if (m.isHydrating)
          m.isHydrating = !1;
        else if (!T) {
          const ot = R && N.transition && N.transition.mode === "out-in";
          ot && (R.transition.afterLeave = () => {
            W === m.pendingId && f(N, J, at, 0)
          }
          );
          let { anchor: at } = m;
          R && (at = w(R),
            b(R, F, m, !0)),
            ot || f(N, J, at, 0)
        }
        Wn(m, N),
          m.pendingBranch = null,
          m.isInFallback = !1;
        let Y = m.parent
          , wt = !1;
        for (; Y;) {
          if (Y.pendingBranch) {
            Y.effects.push(...Q),
              wt = !0;
            break
          }
          Y = Y.parent
        }
        wt || Hc(Q),
          m.effects = [],
          _ && e && e.pendingBranch && v === e.pendingId && (e.deps--,
            e.deps === 0 && !A && e.resolve()),
          Ii(O, "onResolve")
      },
      fallback(T) {
        if (!m.pendingBranch)
          return;
        const { vnode: A, activeBranch: O, parentComponent: R, container: N, isSVG: W } = m;
        Ii(A, "onFallback");
        const Q = w(O)
          , F = () => {
            m.isInFallback && (d(null, T, N, Q, R, null, W, a, l),
              Wn(m, T))
          }
          , J = T.transition && T.transition.mode === "out-in";
        J && (O.transition.afterLeave = F),
          m.isInFallback = !0,
          b(O, R, null, !0),
          J || F()
      },
      move(T, A, O) {
        m.activeBranch && f(m.activeBranch, T, A, O),
          m.container = T
      },
      next() {
        return m.activeBranch && w(m.activeBranch)
      },
      registerDep(T, A) {
        const O = !!m.pendingBranch;
        O && m.deps++;
        const R = T.vnode.el;
        T.asyncDep.catch(N => {
          ui(N, T, 0)
        }
        ).then(N => {
          if (T.isUnmounted || m.isUnmounted || m.pendingId !== T.suspenseId)
            return;
          T.asyncResolved = !0;
          const { vnode: W } = T;
          Mo(T, N, !1),
            R && (W.el = R);
          const Q = !R && T.subTree.el;
          A(T, W, E(R || T.subTree.el), R ? null : w(T.subTree), m, r, l),
            Q && S(Q),
            Tr(T, W.el),
            O && --m.deps === 0 && m.resolve()
        }
        )
      },
      unmount(T, A) {
        m.isUnmounted = !0,
          m.activeBranch && b(m.activeBranch, n, T, A),
          m.pendingBranch && b(m.pendingBranch, n, T, A)
      }
    };
  return m
}
function Jf(t, e, n, i, s, o, r, a, l) {
  const c = e.suspense = Cr(e, i, n, t.parentNode, document.createElement("div"), null, s, o, r, a, !0)
    , u = l(t, c.pendingBranch = e.ssContent, n, c, o, r);
  return c.deps === 0 && c.resolve(!1, !0),
    u
}
function Xf(t) {
  const { shapeFlag: e, children: n } = t
    , i = e & 32;
  t.ssContent = fa(i ? n.default : n),
    t.ssFallback = i ? fa(n.fallback) : Tt($t)
}
function fa(t) {
  let e;
  if (nt(t)) {
    const n = Yn && t._c;
    n && (t._d = !1,
      pe()),
      t = t(),
      n && (t._d = !0,
        e = le,
        _u())
  }
  return tt(t) && (t = Bf(t)),
    t = re(t),
    e && !t.dynamicChildren && (t.dynamicChildren = e.filter(n => n !== t)),
    t
}
function $c(t, e) {
  e && e.pendingBranch ? tt(t) ? e.effects.push(...t) : e.effects.push(t) : Hc(t)
}
function Wn(t, e) {
  t.activeBranch = e;
  const { vnode: n, parentComponent: i } = t
    , s = n.el = e.el;
  i && i.subTree === n && (i.vnode.el = s,
    Tr(i, s))
}
function Zf(t) {
  var e;
  return ((e = t.props) == null ? void 0 : e.suspensible) != null && t.props.suspensible !== !1
}
function Qf(t, e) {
  return Sr(t, null, e)
}
const Yi = {};
function ve(t, e, n) {
  return Sr(t, e, n)
}
function Sr(t, e, { immediate: n, deep: i, flush: s, onTrack: o, onTrigger: r } = Et) {
  var a;
  const l = nf() === ((a = Dt) == null ? void 0 : a.scope) ? Dt : null;
  let c, u = !1, d = !1;
  if (St(t) ? (c = () => t.value,
    u = cs(t)) : qn(t) ? (c = () => t,
      i = !0) : tt(t) ? (d = !0,
        u = t.some(m => qn(m) || cs(m)),
        c = () => t.map(m => {
          if (St(m))
            return m.value;
          if (qn(m))
            return En(m);
          if (nt(m))
            return en(m, l, 2)
        }
        )) : nt(t) ? e ? c = () => en(t, l, 2) : c = () => {
          if (!(l && l.isUnmounted))
            return f && f(),
              ce(t, l, 3, [b])
        }
    : c = ge,
    e && i) {
    const m = c;
    c = () => En(m())
  }
  let f, b = m => {
    f = _.onStop = () => {
      en(m, l, 4)
    }
  }
    , w;
  if (Xn)
    if (b = ge,
      e ? n && ce(e, l, 3, [c(), d ? [] : void 0, b]) : c(),
      s === "sync") {
      const m = $_();
      w = m.__watcherHandles || (m.__watcherHandles = [])
    } else
      return ge;
  let E = d ? new Array(t.length).fill(Yi) : Yi;
  const S = () => {
    if (_.active)
      if (e) {
        const m = _.run();
        (i || u || (d ? m.some((T, A) => Pi(T, E[A])) : Pi(m, E))) && (f && f(),
          ce(e, l, 3, [m, E === Yi ? void 0 : d && E[0] === Yi ? [] : E, b]),
          E = m)
      } else
        _.run()
  }
    ;
  S.allowRecurse = !!e;
  let v;
  s === "sync" ? v = S : s === "post" ? v = () => zt(S, l && l.suspense) : (S.pre = !0,
    l && (S.id = l.uid),
    v = () => js(S));
  const _ = new pr(c, v);
  e ? n ? S() : E = _.run() : s === "post" ? zt(_.run.bind(_), l && l.suspense) : _.run();
  const g = () => {
    _.stop(),
      l && l.scope && dr(l.scope.effects, _)
  }
    ;
  return w && w.push(g),
    g
}
function t_(t, e, n) {
  const i = this.proxy
    , s = Ct(t) ? t.includes(".") ? Wc(i, t) : () => i[t] : t.bind(i, i);
  let o;
  nt(e) ? o = e : (o = e.handler,
    n = e);
  const r = Dt;
  rn(this);
  const a = Sr(s, o.bind(i), n);
  return r ? rn(r) : nn(),
    a
}
function Wc(t, e) {
  const n = e.split(".");
  return () => {
    let i = t;
    for (let s = 0; s < n.length && i; s++)
      i = i[n[s]];
    return i
  }
}
function En(t, e) {
  if (!ht(t) || t.__v_skip || (e = e || new Set,
    e.has(t)))
    return t;
  if (e.add(t),
    St(t))
    En(t.value, e);
  else if (tt(t))
    for (let n = 0; n < t.length; n++)
      En(t[n], e);
  else if (ri(t) || Un(t))
    t.forEach(n => {
      En(n, e)
    }
    );
  else if (mc(t))
    for (const n in t)
      En(t[n], e);
  return t
}
function gv(t, e) {
  const n = xt;
  if (n === null)
    return t;
  const i = Bs(n) || n.proxy
    , s = t.dirs || (t.dirs = []);
  for (let o = 0; o < e.length; o++) {
    let [r, a, l, c = Et] = e[o];
    r && (nt(r) && (r = {
      mounted: r,
      updated: r
    }),
      r.deep && En(a),
      s.push({
        dir: r,
        instance: i,
        value: a,
        oldValue: void 0,
        arg: l,
        modifiers: c
      }))
  }
  return t
}
function Se(t, e, n, i) {
  const s = t.dirs
    , o = e && e.dirs;
  for (let r = 0; r < s.length; r++) {
    const a = s[r];
    o && (a.oldValue = o[r].value);
    let l = a.dir[i];
    l && (li(),
      ce(l, n, 8, [t.el, a, t, e]),
      ci())
  }
}
function e_() {
  const t = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map
  };
  return Hi(() => {
    t.isMounted = !0
  }
  ),
    Vs(() => {
      t.isUnmounting = !0
    }
    ),
    t
}
const oe = [Function, Array]
  , Kc = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: oe,
    onEnter: oe,
    onAfterEnter: oe,
    onEnterCancelled: oe,
    onBeforeLeave: oe,
    onLeave: oe,
    onAfterLeave: oe,
    onLeaveCancelled: oe,
    onBeforeAppear: oe,
    onAppear: oe,
    onAfterAppear: oe,
    onAppearCancelled: oe
  }
  , n_ = {
    name: "BaseTransition",
    props: Kc,
    setup(t, { slots: e }) {
      const n = Oe()
        , i = e_();
      let s;
      return () => {
        const o = e.default && Yc(e.default(), !0);
        if (!o || !o.length)
          return;
        let r = o[0];
        if (o.length > 1) {
          for (const E of o)
            if (E.type !== $t) {
              r = E;
              break
            }
        }
        const a = ft(t)
          , { mode: l } = a;
        if (i.isLeaving)
          return ro(r);
        const c = _a(r);
        if (!c)
          return ro(r);
        const u = Ro(c, a, i, n);
        fs(c, u);
        const d = n.subTree
          , f = d && _a(d);
        let b = !1;
        const { getTransitionKey: w } = c.type;
        if (w) {
          const E = w();
          s === void 0 ? s = E : E !== s && (s = E,
            b = !0)
        }
        if (f && f.type !== $t && (!he(c, f) || b)) {
          const E = Ro(f, a, i, n);
          if (fs(f, E),
            l === "out-in")
            return i.isLeaving = !0,
              E.afterLeave = () => {
                i.isLeaving = !1,
                  n.update.active !== !1 && n.update()
              }
              ,
              ro(r);
          l === "in-out" && c.type !== $t && (E.delayLeave = (S, v, _) => {
            const g = Gc(i, f);
            g[String(f.key)] = f,
              S._leaveCb = () => {
                v(),
                  S._leaveCb = void 0,
                  delete u.delayedLeave
              }
              ,
              u.delayedLeave = _
          }
          )
        }
        return r
      }
    }
  }
  , i_ = n_;
function Gc(t, e) {
  const { leavingVNodes: n } = t;
  let i = n.get(e.type);
  return i || (i = Object.create(null),
    n.set(e.type, i)),
    i
}
function Ro(t, e, n, i) {
  const { appear: s, mode: o, persisted: r = !1, onBeforeEnter: a, onEnter: l, onAfterEnter: c, onEnterCancelled: u, onBeforeLeave: d, onLeave: f, onAfterLeave: b, onLeaveCancelled: w, onBeforeAppear: E, onAppear: S, onAfterAppear: v, onAppearCancelled: _ } = e
    , g = String(t.key)
    , m = Gc(n, t)
    , T = (R, N) => {
      R && ce(R, i, 9, N)
    }
    , A = (R, N) => {
      const W = N[1];
      T(R, N),
        tt(R) ? R.every(Q => Q.length <= 1) && W() : R.length <= 1 && W()
    }
    , O = {
      mode: o,
      persisted: r,
      beforeEnter(R) {
        let N = a;
        if (!n.isMounted)
          if (s)
            N = E || a;
          else
            return;
        R._leaveCb && R._leaveCb(!0);
        const W = m[g];
        W && he(t, W) && W.el._leaveCb && W.el._leaveCb(),
          T(N, [R])
      },
      enter(R) {
        let N = l
          , W = c
          , Q = u;
        if (!n.isMounted)
          if (s)
            N = S || l,
              W = v || c,
              Q = _ || u;
          else
            return;
        let F = !1;
        const J = R._enterCb = Y => {
          F || (F = !0,
            Y ? T(Q, [R]) : T(W, [R]),
            O.delayedLeave && O.delayedLeave(),
            R._enterCb = void 0)
        }
          ;
        N ? A(N, [R, J]) : J()
      },
      leave(R, N) {
        const W = String(t.key);
        if (R._enterCb && R._enterCb(!0),
          n.isUnmounting)
          return N();
        T(d, [R]);
        let Q = !1;
        const F = R._leaveCb = J => {
          Q || (Q = !0,
            N(),
            J ? T(w, [R]) : T(b, [R]),
            R._leaveCb = void 0,
            m[W] === t && delete m[W])
        }
          ;
        m[W] = t,
          f ? A(f, [R, F]) : F()
      },
      clone(R) {
        return Ro(R, e, n, i)
      }
    };
  return O
}
function ro(t) {
  if (Vi(t))
    return t = Be(t),
      t.children = null,
      t
}
function _a(t) {
  return Vi(t) ? t.children ? t.children[0] : void 0 : t
}
function fs(t, e) {
  t.shapeFlag & 6 && t.component ? fs(t.component.subTree, e) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent),
    t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e
}
function Yc(t, e = !1, n) {
  let i = []
    , s = 0;
  for (let o = 0; o < t.length; o++) {
    let r = t[o];
    const a = n == null ? r.key : String(n) + String(r.key != null ? r.key : o);
    r.type === Vt ? (r.patchFlag & 128 && s++,
      i = i.concat(Yc(r.children, e, a))) : (e || r.type !== $t) && i.push(a != null ? Be(r, {
        key: a
      }) : r)
  }
  if (s > 1)
    for (let o = 0; o < i.length; o++)
      i[o].patchFlag = -2;
  return i
}
function de(t, e) {
  return nt(t) ? (() => Mt({
    name: t.name
  }, e, {
    setup: t
  }))() : t
}
const Cn = t => !!t.type.__asyncLoader;
function s_(t) {
  nt(t) && (t = {
    loader: t
  });
  const { loader: e, loadingComponent: n, errorComponent: i, delay: s = 200, timeout: o, suspensible: r = !0, onError: a } = t;
  let l = null, c, u = 0;
  const d = () => (u++,
    l = null,
    f())
    , f = () => {
      let b;
      return l || (b = l = e().catch(w => {
        if (w = w instanceof Error ? w : new Error(String(w)),
          a)
          return new Promise((E, S) => {
            a(w, () => E(d()), () => S(w), u + 1)
          }
          );
        throw w
      }
      ).then(w => b !== l && l ? l : (w && (w.__esModule || w[Symbol.toStringTag] === "Module") && (w = w.default),
        c = w,
        w)))
    }
    ;
  return de({
    name: "AsyncComponentWrapper",
    __asyncLoader: f,
    get __asyncResolved() {
      return c
    },
    setup() {
      const b = Dt;
      if (c)
        return () => ao(c, b);
      const w = _ => {
        l = null,
          ui(_, b, 13, !i)
      }
        ;
      if (r && b.suspense || Xn)
        return f().then(_ => () => ao(_, b)).catch(_ => (w(_),
          () => i ? Tt(i, {
            error: _
          }) : null));
      const E = Ut(!1)
        , S = Ut()
        , v = Ut(!!s);
      return s && setTimeout(() => {
        v.value = !1
      }
        , s),
        o != null && setTimeout(() => {
          if (!E.value && !S.value) {
            const _ = new Error(`Async component timed out after ${o}ms.`);
            w(_),
              S.value = _
          }
        }
          , o),
        f().then(() => {
          E.value = !0,
            b.parent && Vi(b.parent.vnode) && js(b.parent.update)
        }
        ).catch(_ => {
          w(_),
            S.value = _
        }
        ),
        () => {
          if (E.value && c)
            return ao(c, b);
          if (S.value && i)
            return Tt(i, {
              error: S.value
            });
          if (n && !v.value)
            return Tt(n)
        }
    }
  })
}
function ao(t, e) {
  const { ref: n, props: i, children: s, ce: o } = e.vnode
    , r = Tt(t, i, s);
  return r.ref = n,
    r.ce = o,
    delete e.vnode.ce,
    r
}
const Vi = t => t.type.__isKeepAlive
  , o_ = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number]
    },
    setup(t, { slots: e }) {
      const n = Oe()
        , i = n.ctx;
      if (!i.renderer)
        return () => {
          const _ = e.default && e.default();
          return _ && _.length === 1 ? _[0] : _
        }
          ;
      const s = new Map
        , o = new Set;
      let r = null;
      const a = n.suspense
        , { renderer: { p: l, m: c, um: u, o: { createElement: d } } } = i
        , f = d("div");
      i.activate = (_, g, m, T, A) => {
        const O = _.component;
        c(_, g, m, 0, a),
          l(O.vnode, _, g, m, O, a, T, _.slotScopeIds, A),
          zt(() => {
            O.isDeactivated = !1,
              O.a && Bn(O.a);
            const R = _.props && _.props.onVnodeMounted;
            R && Yt(R, O.parent, _)
          }
            , a)
      }
        ,
        i.deactivate = _ => {
          const g = _.component;
          c(_, f, null, 1, a),
            zt(() => {
              g.da && Bn(g.da);
              const m = _.props && _.props.onVnodeUnmounted;
              m && Yt(m, g.parent, _),
                g.isDeactivated = !0
            }
              , a)
        }
        ;
      function b(_) {
        lo(_),
          u(_, n, a, !0)
      }
      function w(_) {
        s.forEach((g, m) => {
          const T = jo(g.type);
          T && (!_ || !_(T)) && E(m)
        }
        )
      }
      function E(_) {
        const g = s.get(_);
        !r || !he(g, r) ? b(g) : r && lo(r),
          s.delete(_),
          o.delete(_)
      }
      ve(() => [t.include, t.exclude], ([_, g]) => {
        _ && w(m => pi(_, m)),
          g && w(m => !pi(g, m))
      }
        , {
          flush: "post",
          deep: !0
        });
      let S = null;
      const v = () => {
        S != null && s.set(S, co(n.subTree))
      }
        ;
      return Hi(v),
        Qc(v),
        Vs(() => {
          s.forEach(_ => {
            const { subTree: g, suspense: m } = n
              , T = co(g);
            if (_.type === T.type && _.key === T.key) {
              lo(T);
              const A = T.component.da;
              A && zt(A, m);
              return
            }
            b(_)
          }
          )
        }
        ),
        () => {
          if (S = null,
            !e.default)
            return null;
          const _ = e.default()
            , g = _[0];
          if (_.length > 1)
            return r = null,
              _;
          if (!Jn(g) || !(g.shapeFlag & 4) && !(g.shapeFlag & 128))
            return r = null,
              g;
          let m = co(g);
          const T = m.type
            , A = jo(Cn(m) ? m.type.__asyncResolved || {} : T)
            , { include: O, exclude: R, max: N } = t;
          if (O && (!A || !pi(O, A)) || R && A && pi(R, A))
            return r = m,
              g;
          const W = m.key == null ? T : m.key
            , Q = s.get(W);
          return m.el && (m = Be(m),
            g.shapeFlag & 128 && (g.ssContent = m)),
            S = W,
            Q ? (m.el = Q.el,
              m.component = Q.component,
              m.transition && fs(m, m.transition),
              m.shapeFlag |= 512,
              o.delete(W),
              o.add(W)) : (o.add(W),
                N && o.size > parseInt(N, 10) && E(o.values().next().value)),
            m.shapeFlag |= 256,
            r = m,
            qc(g.type) ? g : m
        }
    }
  }
  , r_ = o_;
function pi(t, e) {
  return tt(t) ? t.some(n => pi(n, e)) : Ct(t) ? t.split(",").includes(e) : qd(t) ? t.test(e) : !1
}
function Jc(t, e) {
  Zc(t, "a", e)
}
function Xc(t, e) {
  Zc(t, "da", e)
}
function Zc(t, e, n = Dt) {
  const i = t.__wdc || (t.__wdc = () => {
    let s = n;
    for (; s;) {
      if (s.isDeactivated)
        return;
      s = s.parent
    }
    return t()
  }
  );
  if (Fs(e, i, n),
    n) {
    let s = n.parent;
    for (; s && s.parent;)
      Vi(s.parent.vnode) && a_(i, e, n, s),
        s = s.parent
  }
}
function a_(t, e, n, i) {
  const s = Fs(e, t, i, !0);
  Hs(() => {
    dr(i[e], s)
  }
    , n)
}
function lo(t) {
  t.shapeFlag &= -257,
    t.shapeFlag &= -513
}
function co(t) {
  return t.shapeFlag & 128 ? t.ssContent : t
}
function Fs(t, e, n = Dt, i = !1) {
  if (n) {
    const s = n[t] || (n[t] = [])
      , o = e.__weh || (e.__weh = (...r) => {
        if (n.isUnmounted)
          return;
        li(),
          rn(n);
        const a = ce(e, n, t, r);
        return nn(),
          ci(),
          a
      }
      );
    return i ? s.unshift(o) : s.push(o),
      o
  }
}
const qe = t => (e, n = Dt) => (!Xn || t === "sp") && Fs(t, (...i) => e(...i), n)
  , l_ = qe("bm")
  , Hi = qe("m")
  , c_ = qe("bu")
  , Qc = qe("u")
  , Vs = qe("bum")
  , Hs = qe("um")
  , u_ = qe("sp")
  , d_ = qe("rtg")
  , f_ = qe("rtc");
function tu(t, e = Dt) {
  Fs("ec", t, e)
}
const Pr = "components"
  , __ = "directives";
function vv(t, e) {
  return Lr(Pr, t, !0, e) || t
}
const eu = Symbol.for("v-ndc");
function b_(t) {
  return Ct(t) ? Lr(Pr, t, !1) || t : t || eu
}
function yv(t) {
  return Lr(__, t)
}
function Lr(t, e, n = !0, i = !1) {
  const s = xt || Dt;
  if (s) {
    const o = s.type;
    if (t === Pr) {
      const a = jo(o, !1);
      if (a && (a === e || a === Re(e) || a === Is(Re(e))))
        return o
    }
    const r = ba(s[t] || o[t], e) || ba(s.appContext[t], e);
    return !r && i ? o : r
  }
}
function ba(t, e) {
  return t && (t[e] || t[Re(e)] || t[Is(Re(e))])
}
function kv(t, e, n, i) {
  let s;
  const o = n && n[i];
  if (tt(t) || Ct(t)) {
    s = new Array(t.length);
    for (let r = 0, a = t.length; r < a; r++)
      s[r] = e(t[r], r, void 0, o && o[r])
  } else if (typeof t == "number") {
    s = new Array(t);
    for (let r = 0; r < t; r++)
      s[r] = e(r + 1, r, void 0, o && o[r])
  } else if (ht(t))
    if (t[Symbol.iterator])
      s = Array.from(t, (r, a) => e(r, a, void 0, o && o[a]));
    else {
      const r = Object.keys(t);
      s = new Array(r.length);
      for (let a = 0, l = r.length; a < l; a++) {
        const c = r[a];
        s[a] = e(t[c], c, a, o && o[a])
      }
    }
  else
    s = [];
  return n && (n[i] = s),
    s
}
function Ev(t, e, n = {}, i, s) {
  if (xt.isCE || xt.parent && Cn(xt.parent) && xt.parent.isCE)
    return e !== "default" && (n.name = e),
      Tt("slot", n, i && i());
  let o = t[e];
  o && o._c && (o._d = !1),
    pe();
  const r = o && nu(o(n))
    , a = xe(Vt, {
      key: n.key || r && r.key || `_${e}`
    }, r || (i ? i() : []), r && t._ === 1 ? 64 : -2);
  return !s && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    o && o._c && (o._d = !0),
    a
}
function nu(t) {
  return t.some(e => Jn(e) ? !(e.type === $t || e.type === Vt && !nu(e.children)) : !0) ? t : null
}
const Oo = t => t ? gu(t) ? Bs(t) || t.proxy : Oo(t.parent) : null
  , vi = Mt(Object.create(null), {
    $: t => t,
    $el: t => t.vnode.el,
    $data: t => t.data,
    $props: t => t.props,
    $attrs: t => t.attrs,
    $slots: t => t.slots,
    $refs: t => t.refs,
    $parent: t => Oo(t.parent),
    $root: t => Oo(t.root),
    $emit: t => t.emit,
    $options: t => Rr(t),
    $forceUpdate: t => t.f || (t.f = () => js(t.update)),
    $nextTick: t => t.n || (t.n = ln.bind(t.proxy)),
    $watch: t => t_.bind(t)
  })
  , uo = (t, e) => t !== Et && !t.__isScriptSetup && _t(t, e)
  , m_ = {
    get({ _: t }, e) {
      const { ctx: n, setupState: i, data: s, props: o, accessCache: r, type: a, appContext: l } = t;
      let c;
      if (e[0] !== "$") {
        const b = r[e];
        if (b !== void 0)
          switch (b) {
            case 1:
              return i[e];
            case 2:
              return s[e];
            case 4:
              return n[e];
            case 3:
              return o[e]
          }
        else {
          if (uo(i, e))
            return r[e] = 1,
              i[e];
          if (s !== Et && _t(s, e))
            return r[e] = 2,
              s[e];
          if ((c = t.propsOptions[0]) && _t(c, e))
            return r[e] = 3,
              o[e];
          if (n !== Et && _t(n, e))
            return r[e] = 4,
              n[e];
          Io && (r[e] = 0)
        }
      }
      const u = vi[e];
      let d, f;
      if (u)
        return e === "$attrs" && Jt(t, "get", e),
          u(t);
      if ((d = a.__cssModules) && (d = d[e]))
        return d;
      if (n !== Et && _t(n, e))
        return r[e] = 4,
          n[e];
      if (f = l.config.globalProperties,
        _t(f, e))
        return f[e]
    },
    set({ _: t }, e, n) {
      const { data: i, setupState: s, ctx: o } = t;
      return uo(s, e) ? (s[e] = n,
        !0) : i !== Et && _t(i, e) ? (i[e] = n,
          !0) : _t(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (o[e] = n,
            !0)
    },
    has({ _: { data: t, setupState: e, accessCache: n, ctx: i, appContext: s, propsOptions: o } }, r) {
      let a;
      return !!n[r] || t !== Et && _t(t, r) || uo(e, r) || (a = o[0]) && _t(a, r) || _t(i, r) || _t(vi, r) || _t(s.config.globalProperties, r)
    },
    defineProperty(t, e, n) {
      return n.get != null ? t._.accessCache[e] = 0 : _t(n, "value") && this.set(t, e, n.value, null),
        Reflect.defineProperty(t, e, n)
    }
  };
function wv() {
  return p_().attrs
}
function p_() {
  const t = Oe();
  return t.setupContext || (t.setupContext = yu(t))
}
function ma(t) {
  return tt(t) ? t.reduce((e, n) => (e[n] = null,
    e), {}) : t
}
function Tv(t) {
  const e = Oe();
  let n = t();
  return nn(),
    fr(n) && (n = n.catch(i => {
      throw rn(e),
      i
    }
    )),
    [n, () => rn(e)]
}
let Io = !0;
function h_(t) {
  const e = Rr(t)
    , n = t.proxy
    , i = t.ctx;
  Io = !1,
    e.beforeCreate && pa(e.beforeCreate, t, "bc");
  const { data: s, computed: o, methods: r, watch: a, provide: l, inject: c, created: u, beforeMount: d, mounted: f, beforeUpdate: b, updated: w, activated: E, deactivated: S, beforeDestroy: v, beforeUnmount: _, destroyed: g, unmounted: m, render: T, renderTracked: A, renderTriggered: O, errorCaptured: R, serverPrefetch: N, expose: W, inheritAttrs: Q, components: F, directives: J, filters: Y } = e;
  if (c && g_(c, i, null),
    r)
    for (const at in r) {
      const lt = r[at];
      nt(lt) && (i[at] = lt.bind(n))
    }
  if (s) {
    const at = s.call(n, n);
    ht(at) && (t.data = on(at))
  }
  if (Io = !0,
    o)
    for (const at in o) {
      const lt = o[at]
        , Xt = nt(lt) ? lt.bind(n, n) : nt(lt.get) ? lt.get.bind(n, n) : ge
        , se = !nt(lt) && nt(lt.set) ? lt.set.bind(n) : ge
        , Rt = vt({
          get: Xt,
          set: se
        });
      Object.defineProperty(i, at, {
        enumerable: !0,
        configurable: !0,
        get: () => Rt.value,
        set: Ot => Rt.value = Ot
      })
    }
  if (a)
    for (const at in a)
      iu(a[at], i, n, at);
  if (l) {
    const at = nt(l) ? l.call(n) : l;
    Reflect.ownKeys(at).forEach(lt => {
      Sn(lt, at[lt])
    }
    )
  }
  u && pa(u, t, "c");
  function ot(at, lt) {
    tt(lt) ? lt.forEach(Xt => at(Xt.bind(n))) : lt && at(lt.bind(n))
  }
  if (ot(l_, d),
    ot(Hi, f),
    ot(c_, b),
    ot(Qc, w),
    ot(Jc, E),
    ot(Xc, S),
    ot(tu, R),
    ot(f_, A),
    ot(d_, O),
    ot(Vs, _),
    ot(Hs, m),
    ot(u_, N),
    tt(W))
    if (W.length) {
      const at = t.exposed || (t.exposed = {});
      W.forEach(lt => {
        Object.defineProperty(at, lt, {
          get: () => n[lt],
          set: Xt => n[lt] = Xt
        })
      }
      )
    } else
      t.exposed || (t.exposed = {});
  T && t.render === ge && (t.render = T),
    Q != null && (t.inheritAttrs = Q),
    F && (t.components = F),
    J && (t.directives = J)
}
function g_(t, e, n = ge) {
  tt(t) && (t = No(t));
  for (const i in t) {
    const s = t[i];
    let o;
    ht(s) ? "default" in s ? o = Ft(s.from || i, s.default, !0) : o = Ft(s.from || i) : o = Ft(s),
      St(o) ? Object.defineProperty(e, i, {
        enumerable: !0,
        configurable: !0,
        get: () => o.value,
        set: r => o.value = r
      }) : e[i] = o
  }
}
function pa(t, e, n) {
  ce(tt(t) ? t.map(i => i.bind(e.proxy)) : t.bind(e.proxy), e, n)
}
function iu(t, e, n, i) {
  const s = i.includes(".") ? Wc(n, i) : () => n[i];
  if (Ct(t)) {
    const o = e[t];
    nt(o) && ve(s, o)
  } else if (nt(t))
    ve(s, t.bind(n));
  else if (ht(t))
    if (tt(t))
      t.forEach(o => iu(o, e, n, i));
    else {
      const o = nt(t.handler) ? t.handler.bind(n) : e[t.handler];
      nt(o) && ve(s, o, t)
    }
}
function Rr(t) {
  const e = t.type
    , { mixins: n, extends: i } = e
    , { mixins: s, optionsCache: o, config: { optionMergeStrategies: r } } = t.appContext
    , a = o.get(e);
  let l;
  return a ? l = a : !s.length && !n && !i ? l = e : (l = {},
    s.length && s.forEach(c => _s(l, c, r, !0)),
    _s(l, e, r)),
    ht(e) && o.set(e, l),
    l
}
function _s(t, e, n, i = !1) {
  const { mixins: s, extends: o } = e;
  o && _s(t, o, n, !0),
    s && s.forEach(r => _s(t, r, n, !0));
  for (const r in e)
    if (!(i && r === "expose")) {
      const a = v_[r] || n && n[r];
      t[r] = a ? a(t[r], e[r]) : e[r]
    }
  return t
}
const v_ = {
  data: ha,
  props: ga,
  emits: ga,
  methods: hi,
  computed: hi,
  beforeCreate: Bt,
  created: Bt,
  beforeMount: Bt,
  mounted: Bt,
  beforeUpdate: Bt,
  updated: Bt,
  beforeDestroy: Bt,
  beforeUnmount: Bt,
  destroyed: Bt,
  unmounted: Bt,
  activated: Bt,
  deactivated: Bt,
  errorCaptured: Bt,
  serverPrefetch: Bt,
  components: hi,
  directives: hi,
  watch: k_,
  provide: ha,
  inject: y_
};
function ha(t, e) {
  return e ? t ? function () {
    return Mt(nt(t) ? t.call(this, this) : t, nt(e) ? e.call(this, this) : e)
  }
    : e : t
}
function y_(t, e) {
  return hi(No(t), No(e))
}
function No(t) {
  if (tt(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e
  }
  return t
}
function Bt(t, e) {
  return t ? [...new Set([].concat(t, e))] : e
}
function hi(t, e) {
  return t ? Mt(Object.create(null), t, e) : e
}
function ga(t, e) {
  return t ? tt(t) && tt(e) ? [...new Set([...t, ...e])] : Mt(Object.create(null), ma(t), ma(e ?? {})) : e
}
function k_(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  const n = Mt(Object.create(null), t);
  for (const i in e)
    n[i] = Bt(t[i], e[i]);
  return n
}
function su() {
  return {
    app: null,
    config: {
      isNativeTag: Hd,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap,
    propsCache: new WeakMap,
    emitsCache: new WeakMap
  }
}
let E_ = 0;
function w_(t, e) {
  return function (i, s = null) {
    nt(i) || (i = Mt({}, i)),
      s != null && !ht(s) && (s = null);
    const o = su()
      , r = new Set;
    let a = !1;
    const l = o.app = {
      _uid: E_++,
      _component: i,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: ku,
      get config() {
        return o.config
      },
      set config(c) { },
      use(c, ...u) {
        return r.has(c) || (c && nt(c.install) ? (r.add(c),
          c.install(l, ...u)) : nt(c) && (r.add(c),
            c(l, ...u))),
          l
      },
      mixin(c) {
        return o.mixins.includes(c) || o.mixins.push(c),
          l
      },
      component(c, u) {
        return u ? (o.components[c] = u,
          l) : o.components[c]
      },
      directive(c, u) {
        return u ? (o.directives[c] = u,
          l) : o.directives[c]
      },
      mount(c, u, d) {
        if (!a) {
          const f = Tt(i, s);
          return f.appContext = o,
            u && e ? e(f, c) : t(f, c, d),
            a = !0,
            l._container = c,
            c.__vue_app__ = l,
            Bs(f.component) || f.component.proxy
        }
      },
      unmount() {
        a && (t(null, l._container),
          delete l._container.__vue_app__)
      },
      provide(c, u) {
        return o.provides[c] = u,
          l
      },
      runWithContext(c) {
        Ni = l;
        try {
          return c()
        } finally {
          Ni = null
        }
      }
    };
    return l
  }
}
let Ni = null;
function Sn(t, e) {
  if (Dt) {
    let n = Dt.provides;
    const i = Dt.parent && Dt.parent.provides;
    i === n && (n = Dt.provides = Object.create(i)),
      n[t] = e
  }
}
function Ft(t, e, n = !1) {
  const i = Dt || xt;
  if (i || Ni) {
    const s = i ? i.parent == null ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : Ni._context.provides;
    if (s && t in s)
      return s[t];
    if (arguments.length > 1)
      return n && nt(e) ? e.call(i && i.proxy) : e
  }
}
function ou() {
  return !!(Dt || xt || Ni)
}
function T_(t, e, n, i = !1) {
  const s = {}
    , o = {};
  rs(o, Us, 1),
    t.propsDefaults = Object.create(null),
    ru(t, e, s, o);
  for (const r in t.propsOptions[0])
    r in s || (s[r] = void 0);
  n ? t.props = i ? s : Fi(s) : t.type.props ? t.props = s : t.props = o,
    t.attrs = o
}
function A_(t, e, n, i) {
  const { props: s, attrs: o, vnode: { patchFlag: r } } = t
    , a = ft(s)
    , [l] = t.propsOptions;
  let c = !1;
  if ((i || r > 0) && !(r & 16)) {
    if (r & 8) {
      const u = t.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let f = u[d];
        if (xs(t.emitsOptions, f))
          continue;
        const b = e[f];
        if (l)
          if (_t(o, f))
            b !== o[f] && (o[f] = b,
              c = !0);
          else {
            const w = Re(f);
            s[w] = Do(l, a, w, b, t, !1)
          }
        else
          b !== o[f] && (o[f] = b,
            c = !0)
      }
    }
  } else {
    ru(t, e, s, o) && (c = !0);
    let u;
    for (const d in a)
      (!e || !_t(e, d) && ((u = Nn(d)) === d || !_t(e, u))) && (l ? n && (n[d] !== void 0 || n[u] !== void 0) && (s[d] = Do(l, a, d, void 0, t, !0)) : delete s[d]);
    if (o !== a)
      for (const d in o)
        (!e || !_t(e, d)) && (delete o[d],
          c = !0)
  }
  c && Ue(t, "set", "$attrs")
}
function ru(t, e, n, i) {
  const [s, o] = t.propsOptions;
  let r = !1, a;
  if (e)
    for (let l in e) {
      if (gi(l))
        continue;
      const c = e[l];
      let u;
      s && _t(s, u = Re(l)) ? !o || !o.includes(u) ? n[u] = c : (a || (a = {}))[u] = c : xs(t.emitsOptions, l) || (!(l in i) || c !== i[l]) && (i[l] = c,
        r = !0)
    }
  if (o) {
    const l = ft(n)
      , c = a || Et;
    for (let u = 0; u < o.length; u++) {
      const d = o[u];
      n[d] = Do(s, l, d, c[d], t, !_t(c, d))
    }
  }
  return r
}
function Do(t, e, n, i, s, o) {
  const r = t[n];
  if (r != null) {
    const a = _t(r, "default");
    if (a && i === void 0) {
      const l = r.default;
      if (r.type !== Function && !r.skipFactory && nt(l)) {
        const { propsDefaults: c } = s;
        n in c ? i = c[n] : (rn(s),
          i = c[n] = l.call(null, e),
          nn())
      } else
        i = l
    }
    r[0] && (o && !a ? i = !1 : r[1] && (i === "" || i === Nn(n)) && (i = !0))
  }
  return i
}
function au(t, e, n = !1) {
  const i = e.propsCache
    , s = i.get(t);
  if (s)
    return s;
  const o = t.props
    , r = {}
    , a = [];
  let l = !1;
  if (!nt(t)) {
    const u = d => {
      l = !0;
      const [f, b] = au(d, e, !0);
      Mt(r, f),
        b && a.push(...b)
    }
      ;
    !n && e.mixins.length && e.mixins.forEach(u),
      t.extends && u(t.extends),
      t.mixins && t.mixins.forEach(u)
  }
  if (!o && !l)
    return ht(t) && i.set(t, Hn),
      Hn;
  if (tt(o))
    for (let u = 0; u < o.length; u++) {
      const d = Re(o[u]);
      va(d) && (r[d] = Et)
    }
  else if (o)
    for (const u in o) {
      const d = Re(u);
      if (va(d)) {
        const f = o[u]
          , b = r[d] = tt(f) || nt(f) ? {
            type: f
          } : Mt({}, f);
        if (b) {
          const w = Ea(Boolean, b.type)
            , E = Ea(String, b.type);
          b[0] = w > -1,
            b[1] = E < 0 || w < E,
            (w > -1 || _t(b, "default")) && a.push(d)
        }
      }
    }
  const c = [r, a];
  return ht(t) && i.set(t, c),
    c
}
function va(t) {
  return t[0] !== "$"
}
function ya(t) {
  const e = t && t.toString().match(/^\s*(function|class) (\w+)/);
  return e ? e[2] : t === null ? "null" : ""
}
function ka(t, e) {
  return ya(t) === ya(e)
}
function Ea(t, e) {
  return tt(e) ? e.findIndex(n => ka(n, t)) : nt(e) && ka(e, t) ? 0 : -1
}
const lu = t => t[0] === "_" || t === "$stable"
  , Or = t => tt(t) ? t.map(re) : [re(t)]
  , C_ = (t, e, n) => {
    if (e._n)
      return e;
    const i = wr((...s) => Or(e(...s)), n);
    return i._c = !1,
      i
  }
  , cu = (t, e, n) => {
    const i = t._ctx;
    for (const s in t) {
      if (lu(s))
        continue;
      const o = t[s];
      if (nt(o))
        e[s] = C_(s, o, i);
      else if (o != null) {
        const r = Or(o);
        e[s] = () => r
      }
    }
  }
  , uu = (t, e) => {
    const n = Or(e);
    t.slots.default = () => n
  }
  , S_ = (t, e) => {
    if (t.vnode.shapeFlag & 32) {
      const n = e._;
      n ? (t.slots = ft(e),
        rs(e, "_", n)) : cu(e, t.slots = {})
    } else
      t.slots = {},
        e && uu(t, e);
    rs(t.slots, Us, 1)
  }
  , P_ = (t, e, n) => {
    const { vnode: i, slots: s } = t;
    let o = !0
      , r = Et;
    if (i.shapeFlag & 32) {
      const a = e._;
      a ? n && a === 1 ? o = !1 : (Mt(s, e),
        !n && a === 1 && delete s._) : (o = !e.$stable,
          cu(e, s)),
        r = e
    } else
      e && (uu(t, e),
        r = {
          default: 1
        });
    if (o)
      for (const a in s)
        !lu(a) && !(a in r) && delete s[a]
  }
  ;
function bs(t, e, n, i, s = !1) {
  if (tt(t)) {
    t.forEach((f, b) => bs(f, e && (tt(e) ? e[b] : e), n, i, s));
    return
  }
  if (Cn(i) && !s)
    return;
  const o = i.shapeFlag & 4 ? Bs(i.component) || i.component.proxy : i.el
    , r = s ? null : o
    , { i: a, r: l } = t
    , c = e && e.r
    , u = a.refs === Et ? a.refs = {} : a.refs
    , d = a.setupState;
  if (c != null && c !== l && (Ct(c) ? (u[c] = null,
    _t(d, c) && (d[c] = null)) : St(c) && (c.value = null)),
    nt(l))
    en(l, a, 12, [r, u]);
  else {
    const f = Ct(l)
      , b = St(l);
    if (f || b) {
      const w = () => {
        if (t.f) {
          const E = f ? _t(d, l) ? d[l] : u[l] : l.value;
          s ? tt(E) && dr(E, o) : tt(E) ? E.includes(o) || E.push(o) : f ? (u[l] = [o],
            _t(d, l) && (d[l] = u[l])) : (l.value = [o],
              t.k && (u[t.k] = l.value))
        } else
          f ? (u[l] = r,
            _t(d, l) && (d[l] = r)) : b && (l.value = r,
              t.k && (u[t.k] = r))
      }
        ;
      r ? (w.id = -1,
        zt(w, n)) : w()
    }
  }
}
let Ke = !1;
const Ji = t => /svg/.test(t.namespaceURI) && t.tagName !== "foreignObject"
  , Xi = t => t.nodeType === 8;
function L_(t) {
  const { mt: e, p: n, o: { patchProp: i, createText: s, nextSibling: o, parentNode: r, remove: a, insert: l, createComment: c } } = t
    , u = (v, _) => {
      if (!_.hasChildNodes()) {
        n(null, v, _),
          us(),
          _._vnode = v;
        return
      }
      Ke = !1,
        d(_.firstChild, v, null, null, null),
        us(),
        _._vnode = v,
        Ke && console.error("Hydration completed but contains mismatches.")
    }
    , d = (v, _, g, m, T, A = !1) => {
      const O = Xi(v) && v.data === "["
        , R = () => E(v, _, g, m, T, O)
        , { type: N, ref: W, shapeFlag: Q, patchFlag: F } = _;
      let J = v.nodeType;
      _.el = v,
        F === -2 && (A = !1,
          _.dynamicChildren = null);
      let Y = null;
      switch (N) {
        case On:
          J !== 3 ? _.children === "" ? (l(_.el = s(""), r(v), v),
            Y = v) : Y = R() : (v.data !== _.children && (Ke = !0,
              v.data = _.children),
              Y = o(v));
          break;
        case $t:
          J !== 8 || O ? Y = R() : Y = o(v);
          break;
        case yi:
          if (O && (v = o(v),
            J = v.nodeType),
            J === 1 || J === 3) {
            Y = v;
            const wt = !_.children.length;
            for (let ot = 0; ot < _.staticCount; ot++)
              wt && (_.children += Y.nodeType === 1 ? Y.outerHTML : Y.data),
                ot === _.staticCount - 1 && (_.anchor = Y),
                Y = o(Y);
            return O ? o(Y) : Y
          } else
            R();
          break;
        case Vt:
          O ? Y = w(v, _, g, m, T, A) : Y = R();
          break;
        default:
          if (Q & 1)
            J !== 1 || _.type.toLowerCase() !== v.tagName.toLowerCase() ? Y = R() : Y = f(v, _, g, m, T, A);
          else if (Q & 6) {
            _.slotScopeIds = T;
            const wt = r(v);
            if (e(_, wt, null, g, m, Ji(wt), A),
              Y = O ? S(v) : o(v),
              Y && Xi(Y) && Y.data === "teleport end" && (Y = o(Y)),
              Cn(_)) {
              let ot;
              O ? (ot = Tt(Vt),
                ot.anchor = Y ? Y.previousSibling : wt.lastChild) : ot = v.nodeType === 3 ? pu("") : Tt("div"),
                ot.el = v,
                _.component.subTree = ot
            }
          } else
            Q & 64 ? J !== 8 ? Y = R() : Y = _.type.hydrate(v, _, g, m, T, A, t, b) : Q & 128 && (Y = _.type.hydrate(v, _, g, m, Ji(r(v)), T, A, t, d))
      }
      return W != null && bs(W, null, m, _),
        Y
    }
    , f = (v, _, g, m, T, A) => {
      A = A || !!_.dynamicChildren;
      const { type: O, props: R, patchFlag: N, shapeFlag: W, dirs: Q } = _
        , F = O === "input" && Q || O === "option";
      if (F || N !== -1) {
        if (Q && Se(_, null, g, "created"),
          R)
          if (F || !A || N & 48)
            for (const Y in R)
              (F && Y.endsWith("value") || zi(Y) && !gi(Y)) && i(v, Y, null, R[Y], !1, void 0, g);
          else
            R.onClick && i(v, "onClick", null, R.onClick, !1, void 0, g);
        let J;
        if ((J = R && R.onVnodeBeforeMount) && Yt(J, g, _),
          Q && Se(_, null, g, "beforeMount"),
          ((J = R && R.onVnodeMounted) || Q) && $c(() => {
            J && Yt(J, g, _),
              Q && Se(_, null, g, "mounted")
          }
            , m),
          W & 16 && !(R && (R.innerHTML || R.textContent))) {
          let Y = b(v.firstChild, _, v, g, m, T, A);
          for (; Y;) {
            Ke = !0;
            const wt = Y;
            Y = Y.nextSibling,
              a(wt)
          }
        } else
          W & 8 && v.textContent !== _.children && (Ke = !0,
            v.textContent = _.children)
      }
      return v.nextSibling
    }
    , b = (v, _, g, m, T, A, O) => {
      O = O || !!_.dynamicChildren;
      const R = _.children
        , N = R.length;
      for (let W = 0; W < N; W++) {
        const Q = O ? R[W] : R[W] = re(R[W]);
        if (v)
          v = d(v, Q, m, T, A, O);
        else {
          if (Q.type === On && !Q.children)
            continue;
          Ke = !0,
            n(null, Q, g, null, m, T, Ji(g), A)
        }
      }
      return v
    }
    , w = (v, _, g, m, T, A) => {
      const { slotScopeIds: O } = _;
      O && (T = T ? T.concat(O) : O);
      const R = r(v)
        , N = b(o(v), _, R, g, m, T, A);
      return N && Xi(N) && N.data === "]" ? o(_.anchor = N) : (Ke = !0,
        l(_.anchor = c("]"), R, N),
        N)
    }
    , E = (v, _, g, m, T, A) => {
      if (Ke = !0,
        _.el = null,
        A) {
        const N = S(v);
        for (; ;) {
          const W = o(v);
          if (W && W !== N)
            a(W);
          else
            break
        }
      }
      const O = o(v)
        , R = r(v);
      return a(v),
        n(null, _, R, O, g, m, Ji(R), T),
        O
    }
    , S = v => {
      let _ = 0;
      for (; v;)
        if (v = o(v),
          v && Xi(v) && (v.data === "[" && _++,
            v.data === "]")) {
          if (_ === 0)
            return o(v);
          _--
        }
      return v
    }
    ;
  return [u, d]
}
const zt = $c;
function R_(t) {
  return du(t)
}
function O_(t) {
  return du(t, L_)
}
function du(t, e) {
  const n = Ao();
  n.__VUE__ = !0;
  const { insert: i, remove: s, patchProp: o, createElement: r, createText: a, createComment: l, setText: c, setElementText: u, parentNode: d, nextSibling: f, setScopeId: b = ge, insertStaticContent: w } = t
    , E = (y, k, C, I = null, x = null, z = null, $ = !1, H = null, p = !!k.dynamicChildren) => {
      if (y === k)
        return;
      y && !he(y, k) && (I = j(y),
        Ot(y, x, z, !0),
        y = null),
        k.patchFlag === -2 && (p = !1,
          k.dynamicChildren = null);
      const { type: h, ref: L, shapeFlag: M } = k;
      switch (h) {
        case On:
          S(y, k, C, I);
          break;
        case $t:
          v(y, k, C, I);
          break;
        case yi:
          y == null && _(k, C, I, $);
          break;
        case Vt:
          F(y, k, C, I, x, z, $, H, p);
          break;
        default:
          M & 1 ? T(y, k, C, I, x, z, $, H, p) : M & 6 ? J(y, k, C, I, x, z, $, H, p) : (M & 64 || M & 128) && h.process(y, k, C, I, x, z, $, H, p, U)
      }
      L != null && x && bs(L, y && y.ref, z, k || y, !k)
    }
    , S = (y, k, C, I) => {
      if (y == null)
        i(k.el = a(k.children), C, I);
      else {
        const x = k.el = y.el;
        k.children !== y.children && c(x, k.children)
      }
    }
    , v = (y, k, C, I) => {
      y == null ? i(k.el = l(k.children || ""), C, I) : k.el = y.el
    }
    , _ = (y, k, C, I) => {
      [y.el, y.anchor] = w(y.children, k, C, I, y.el, y.anchor)
    }
    , g = ({ el: y, anchor: k }, C, I) => {
      let x;
      for (; y && y !== k;)
        x = f(y),
          i(y, C, I),
          y = x;
      i(k, C, I)
    }
    , m = ({ el: y, anchor: k }) => {
      let C;
      for (; y && y !== k;)
        C = f(y),
          s(y),
          y = C;
      s(k)
    }
    , T = (y, k, C, I, x, z, $, H, p) => {
      $ = $ || k.type === "svg",
        y == null ? A(k, C, I, x, z, $, H, p) : N(y, k, x, z, $, H, p)
    }
    , A = (y, k, C, I, x, z, $, H) => {
      let p, h;
      const { type: L, props: M, shapeFlag: B, transition: V, dirs: P } = y;
      if (p = y.el = r(y.type, z, M && M.is, M),
        B & 8 ? u(p, y.children) : B & 16 && R(y.children, p, null, I, x, z && L !== "foreignObject", $, H),
        P && Se(y, null, I, "created"),
        O(p, y, y.scopeId, $, I),
        M) {
        for (const et in M)
          et !== "value" && !gi(et) && o(p, et, null, M[et], z, y.children, I, x, It);
        "value" in M && o(p, "value", null, M.value),
          (h = M.onVnodeBeforeMount) && Yt(h, I, y)
      }
      P && Se(y, null, I, "beforeMount");
      const D = (!x || x && !x.pendingBranch) && V && !V.persisted;
      D && V.beforeEnter(p),
        i(p, k, C),
        ((h = M && M.onVnodeMounted) || D || P) && zt(() => {
          h && Yt(h, I, y),
            D && V.enter(p),
            P && Se(y, null, I, "mounted")
        }
          , x)
    }
    , O = (y, k, C, I, x) => {
      if (C && b(y, C),
        I)
        for (let z = 0; z < I.length; z++)
          b(y, I[z]);
      if (x) {
        let z = x.subTree;
        if (k === z) {
          const $ = x.vnode;
          O(y, $, $.scopeId, $.slotScopeIds, x.parent)
        }
      }
    }
    , R = (y, k, C, I, x, z, $, H, p = 0) => {
      for (let h = p; h < y.length; h++) {
        const L = y[h] = H ? Ze(y[h]) : re(y[h]);
        E(null, L, k, C, I, x, z, $, H)
      }
    }
    , N = (y, k, C, I, x, z, $) => {
      const H = k.el = y.el;
      let { patchFlag: p, dynamicChildren: h, dirs: L } = k;
      p |= y.patchFlag & 16;
      const M = y.props || Et
        , B = k.props || Et;
      let V;
      C && _n(C, !1),
        (V = B.onVnodeBeforeUpdate) && Yt(V, C, k, y),
        L && Se(k, y, C, "beforeUpdate"),
        C && _n(C, !0);
      const P = x && k.type !== "foreignObject";
      if (h ? W(y.dynamicChildren, h, H, C, I, P, z) : $ || lt(y, k, H, null, C, I, P, z, !1),
        p > 0) {
        if (p & 16)
          Q(H, k, M, B, C, I, x);
        else if (p & 2 && M.class !== B.class && o(H, "class", null, B.class, x),
          p & 4 && o(H, "style", M.style, B.style, x),
          p & 8) {
          const D = k.dynamicProps;
          for (let et = 0; et < D.length; et++) {
            const it = D[et]
              , Nt = M[it]
              , _e = B[it];
            (_e !== Nt || it === "value") && o(H, it, Nt, _e, x, y.children, C, I, It)
          }
        }
        p & 1 && y.children !== k.children && u(H, k.children)
      } else
        !$ && h == null && Q(H, k, M, B, C, I, x);
      ((V = B.onVnodeUpdated) || L) && zt(() => {
        V && Yt(V, C, k, y),
          L && Se(k, y, C, "updated")
      }
        , I)
    }
    , W = (y, k, C, I, x, z, $) => {
      for (let H = 0; H < k.length; H++) {
        const p = y[H]
          , h = k[H]
          , L = p.el && (p.type === Vt || !he(p, h) || p.shapeFlag & 70) ? d(p.el) : C;
        E(p, h, L, null, I, x, z, $, !0)
      }
    }
    , Q = (y, k, C, I, x, z, $) => {
      if (C !== I) {
        if (C !== Et)
          for (const H in C)
            !gi(H) && !(H in I) && o(y, H, C[H], null, $, k.children, x, z, It);
        for (const H in I) {
          if (gi(H))
            continue;
          const p = I[H]
            , h = C[H];
          p !== h && H !== "value" && o(y, H, h, p, $, k.children, x, z, It)
        }
        "value" in I && o(y, "value", C.value, I.value)
      }
    }
    , F = (y, k, C, I, x, z, $, H, p) => {
      const h = k.el = y ? y.el : a("")
        , L = k.anchor = y ? y.anchor : a("");
      let { patchFlag: M, dynamicChildren: B, slotScopeIds: V } = k;
      V && (H = H ? H.concat(V) : V),
        y == null ? (i(h, C, I),
          i(L, C, I),
          R(k.children, C, L, x, z, $, H, p)) : M > 0 && M & 64 && B && y.dynamicChildren ? (W(y.dynamicChildren, B, C, x, z, $, H),
            (k.key != null || x && k === x.subTree) && fu(y, k, !0)) : lt(y, k, C, L, x, z, $, H, p)
    }
    , J = (y, k, C, I, x, z, $, H, p) => {
      k.slotScopeIds = H,
        y == null ? k.shapeFlag & 512 ? x.ctx.activate(k, C, I, $, p) : Y(k, C, I, x, z, $, p) : wt(y, k, p)
    }
    , Y = (y, k, C, I, x, z, $) => {
      const H = y.component = F_(y, I, x);
      if (Vi(y) && (H.ctx.renderer = U),
        V_(H),
        H.asyncDep) {
        if (x && x.registerDep(H, ot),
          !y.el) {
          const p = H.subTree = Tt($t);
          v(null, p, k, C)
        }
        return
      }
      ot(H, y, k, C, x, z, $)
    }
    , wt = (y, k, C) => {
      const I = k.component = y.component;
      if (Wf(y, k, C))
        if (I.asyncDep && !I.asyncResolved) {
          at(I, k, C);
          return
        } else
          I.next = k,
            Vf(I.update),
            I.update();
      else
        k.el = y.el,
          I.vnode = k
    }
    , ot = (y, k, C, I, x, z, $) => {
      const H = () => {
        if (y.isMounted) {
          let { next: L, bu: M, u: B, parent: V, vnode: P } = y, D = L, et;
          _n(y, !1),
            L ? (L.el = P.el,
              at(y, L, $)) : L = P,
            M && Bn(M),
            (et = L.props && L.props.onVnodeBeforeUpdate) && Yt(et, V, L, P),
            _n(y, !0);
          const it = oo(y)
            , Nt = y.subTree;
          y.subTree = it,
            E(Nt, it, d(Nt.el), j(Nt), y, x, z),
            L.el = it.el,
            D === null && Tr(y, it.el),
            B && zt(B, x),
            (et = L.props && L.props.onVnodeUpdated) && zt(() => Yt(et, V, L, P), x)
        } else {
          let L;
          const { el: M, props: B } = k
            , { bm: V, m: P, parent: D } = y
            , et = Cn(k);
          if (_n(y, !1),
            V && Bn(V),
            !et && (L = B && B.onVnodeBeforeMount) && Yt(L, D, k),
            _n(y, !0),
            M && ct) {
            const it = () => {
              y.subTree = oo(y),
                ct(M, y.subTree, y, x, null)
            }
              ;
            et ? k.type.__asyncLoader().then(() => !y.isUnmounted && it()) : it()
          } else {
            const it = y.subTree = oo(y);
            E(null, it, C, I, y, x, z),
              k.el = it.el
          }
          if (P && zt(P, x),
            !et && (L = B && B.onVnodeMounted)) {
            const it = k;
            zt(() => Yt(L, D, it), x)
          }
          (k.shapeFlag & 256 || D && Cn(D.vnode) && D.vnode.shapeFlag & 256) && y.a && zt(y.a, x),
            y.isMounted = !0,
            k = C = I = null
        }
      }
        , p = y.effect = new pr(H, () => js(h), y.scope)
        , h = y.update = () => p.run();
      h.id = y.uid,
        _n(y, !0),
        h()
    }
    , at = (y, k, C) => {
      k.component = y;
      const I = y.vnode.props;
      y.vnode = k,
        y.next = null,
        A_(y, k.props, I, C),
        P_(y, k.children, C),
        li(),
        ua(),
        ci()
    }
    , lt = (y, k, C, I, x, z, $, H, p = !1) => {
      const h = y && y.children
        , L = y ? y.shapeFlag : 0
        , M = k.children
        , { patchFlag: B, shapeFlag: V } = k;
      if (B > 0) {
        if (B & 128) {
          se(h, M, C, I, x, z, $, H, p);
          return
        } else if (B & 256) {
          Xt(h, M, C, I, x, z, $, H, p);
          return
        }
      }
      V & 8 ? (L & 16 && It(h, x, z),
        M !== h && u(C, M)) : L & 16 ? V & 16 ? se(h, M, C, I, x, z, $, H, p) : It(h, x, z, !0) : (L & 8 && u(C, ""),
          V & 16 && R(M, C, I, x, z, $, H, p))
    }
    , Xt = (y, k, C, I, x, z, $, H, p) => {
      y = y || Hn,
        k = k || Hn;
      const h = y.length
        , L = k.length
        , M = Math.min(h, L);
      let B;
      for (B = 0; B < M; B++) {
        const V = k[B] = p ? Ze(k[B]) : re(k[B]);
        E(y[B], V, C, null, x, z, $, H, p)
      }
      h > L ? It(y, x, z, !0, !1, M) : R(k, C, I, x, z, $, H, p, M)
    }
    , se = (y, k, C, I, x, z, $, H, p) => {
      let h = 0;
      const L = k.length;
      let M = y.length - 1
        , B = L - 1;
      for (; h <= M && h <= B;) {
        const V = y[h]
          , P = k[h] = p ? Ze(k[h]) : re(k[h]);
        if (he(V, P))
          E(V, P, C, null, x, z, $, H, p);
        else
          break;
        h++
      }
      for (; h <= M && h <= B;) {
        const V = y[M]
          , P = k[B] = p ? Ze(k[B]) : re(k[B]);
        if (he(V, P))
          E(V, P, C, null, x, z, $, H, p);
        else
          break;
        M--,
          B--
      }
      if (h > M) {
        if (h <= B) {
          const V = B + 1
            , P = V < L ? k[V].el : I;
          for (; h <= B;)
            E(null, k[h] = p ? Ze(k[h]) : re(k[h]), C, P, x, z, $, H, p),
              h++
        }
      } else if (h > B)
        for (; h <= M;)
          Ot(y[h], x, z, !0),
            h++;
      else {
        const V = h
          , P = h
          , D = new Map;
        for (h = P; h <= B; h++) {
          const Zt = k[h] = p ? Ze(k[h]) : re(k[h]);
          Zt.key != null && D.set(Zt.key, h)
        }
        let et, it = 0;
        const Nt = B - P + 1;
        let _e = !1
          , Ie = 0;
        const fn = new Array(Nt);
        for (h = 0; h < Nt; h++)
          fn[h] = 0;
        for (h = V; h <= M; h++) {
          const Zt = y[h];
          if (it >= Nt) {
            Ot(Zt, x, z, !0);
            continue
          }
          let Ae;
          if (Zt.key != null)
            Ae = D.get(Zt.key);
          else
            for (et = P; et <= B; et++)
              if (fn[et - P] === 0 && he(Zt, k[et])) {
                Ae = et;
                break
              }
          Ae === void 0 ? Ot(Zt, x, z, !0) : (fn[Ae - P] = h + 1,
            Ae >= Ie ? Ie = Ae : _e = !0,
            E(Zt, k[Ae], C, null, x, z, $, H, p),
            it++)
        }
        const io = _e ? I_(fn) : Hn;
        for (et = io.length - 1,
          h = Nt - 1; h >= 0; h--) {
          const Zt = P + h
            , Ae = k[Zt]
            , Qr = Zt + 1 < L ? k[Zt + 1].el : I;
          fn[h] === 0 ? E(null, Ae, C, Qr, x, z, $, H, p) : _e && (et < 0 || h !== io[et] ? Rt(Ae, C, Qr, 2) : et--)
        }
      }
    }
    , Rt = (y, k, C, I, x = null) => {
      const { el: z, type: $, transition: H, children: p, shapeFlag: h } = y;
      if (h & 6) {
        Rt(y.component.subTree, k, C, I);
        return
      }
      if (h & 128) {
        y.suspense.move(k, C, I);
        return
      }
      if (h & 64) {
        $.move(y, k, C, U);
        return
      }
      if ($ === Vt) {
        i(z, k, C);
        for (let M = 0; M < p.length; M++)
          Rt(p[M], k, C, I);
        i(y.anchor, k, C);
        return
      }
      if ($ === yi) {
        g(y, k, C);
        return
      }
      if (I !== 2 && h & 1 && H)
        if (I === 0)
          H.beforeEnter(z),
            i(z, k, C),
            zt(() => H.enter(z), x);
        else {
          const { leave: M, delayLeave: B, afterLeave: V } = H
            , P = () => i(z, k, C)
            , D = () => {
              M(z, () => {
                P(),
                  V && V()
              }
              )
            }
            ;
          B ? B(z, P, D) : D()
        }
      else
        i(z, k, C)
    }
    , Ot = (y, k, C, I = !1, x = !1) => {
      const { type: z, props: $, ref: H, children: p, dynamicChildren: h, shapeFlag: L, patchFlag: M, dirs: B } = y;
      if (H != null && bs(H, null, C, y, !0),
        L & 256) {
        k.ctx.deactivate(y);
        return
      }
      const V = L & 1 && B
        , P = !Cn(y);
      let D;
      if (P && (D = $ && $.onVnodeBeforeUnmount) && Yt(D, k, y),
        L & 6)
        $e(y.component, C, I);
      else {
        if (L & 128) {
          y.suspense.unmount(C, I);
          return
        }
        V && Se(y, null, k, "beforeUnmount"),
          L & 64 ? y.type.remove(y, k, C, x, U, I) : h && (z !== Vt || M > 0 && M & 64) ? It(h, k, C, !1, !0) : (z === Vt && M & 384 || !x && L & 16) && It(p, k, C),
          I && Te(y)
      }
      (P && (D = $ && $.onVnodeUnmounted) || V) && zt(() => {
        D && Yt(D, k, y),
          V && Se(y, null, k, "unmounted")
      }
        , C)
    }
    , Te = y => {
      const { type: k, el: C, anchor: I, transition: x } = y;
      if (k === Vt) {
        fe(C, I);
        return
      }
      if (k === yi) {
        m(y);
        return
      }
      const z = () => {
        s(C),
          x && !x.persisted && x.afterLeave && x.afterLeave()
      }
        ;
      if (y.shapeFlag & 1 && x && !x.persisted) {
        const { leave: $, delayLeave: H } = x
          , p = () => $(C, z);
        H ? H(y.el, z, p) : p()
      } else
        z()
    }
    , fe = (y, k) => {
      let C;
      for (; y !== k;)
        C = f(y),
          s(y),
          y = C;
      s(k)
    }
    , $e = (y, k, C) => {
      const { bum: I, scope: x, update: z, subTree: $, um: H } = y;
      I && Bn(I),
        x.stop(),
        z && (z.active = !1,
          Ot($, y, k, C)),
        H && zt(H, k),
        zt(() => {
          y.isUnmounted = !0
        }
          , k),
        k && k.pendingBranch && !k.isUnmounted && y.asyncDep && !y.asyncResolved && y.suspenseId === k.pendingId && (k.deps--,
          k.deps === 0 && k.resolve())
    }
    , It = (y, k, C, I = !1, x = !1, z = 0) => {
      for (let $ = z; $ < y.length; $++)
        Ot(y[$], k, C, I, x)
    }
    , j = y => y.shapeFlag & 6 ? j(y.component.subTree) : y.shapeFlag & 128 ? y.suspense.next() : f(y.anchor || y.el)
    , G = (y, k, C) => {
      y == null ? k._vnode && Ot(k._vnode, null, null, !0) : E(k._vnode || null, y, k, null, null, null, C),
        ua(),
        us(),
        k._vnode = y
    }
    , U = {
      p: E,
      um: Ot,
      m: Rt,
      r: Te,
      mt: Y,
      mc: R,
      pc: lt,
      pbc: W,
      n: j,
      o: t
    };
  let X, ct;
  return e && ([X, ct] = e(U)),
  {
    render: G,
    hydrate: X,
    createApp: w_(G, X)
  }
}
function _n({ effect: t, update: e }, n) {
  t.allowRecurse = e.allowRecurse = n
}
function fu(t, e, n = !1) {
  const i = t.children
    , s = e.children;
  if (tt(i) && tt(s))
    for (let o = 0; o < i.length; o++) {
      const r = i[o];
      let a = s[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[o] = Ze(s[o]),
        a.el = r.el),
        n || fu(r, a)),
        a.type === On && (a.el = r.el)
    }
}
function I_(t) {
  const e = t.slice()
    , n = [0];
  let i, s, o, r, a;
  const l = t.length;
  for (i = 0; i < l; i++) {
    const c = t[i];
    if (c !== 0) {
      if (s = n[n.length - 1],
        t[s] < c) {
        e[i] = s,
          n.push(i);
        continue
      }
      for (o = 0,
        r = n.length - 1; o < r;)
        a = o + r >> 1,
          t[n[a]] < c ? o = a + 1 : r = a;
      c < t[n[o]] && (o > 0 && (e[i] = n[o - 1]),
        n[o] = i)
    }
  }
  for (o = n.length,
    r = n[o - 1]; o-- > 0;)
    n[o] = r,
      r = e[r];
  return n
}
const N_ = t => t.__isTeleport
  , Vt = Symbol.for("v-fgt")
  , On = Symbol.for("v-txt")
  , $t = Symbol.for("v-cmt")
  , yi = Symbol.for("v-stc")
  , ki = [];
let le = null;
function pe(t = !1) {
  ki.push(le = t ? null : [])
}
function _u() {
  ki.pop(),
    le = ki[ki.length - 1] || null
}
let Yn = 1;
function wa(t) {
  Yn += t
}
function bu(t) {
  return t.dynamicChildren = Yn > 0 ? le || Hn : null,
    _u(),
    Yn > 0 && le && le.push(t),
    t
}
function D_(t, e, n, i, s, o) {
  return bu(Kn(t, e, n, i, s, o, !0))
}
function xe(t, e, n, i, s) {
  return bu(Tt(t, e, n, i, s, !0))
}
function Jn(t) {
  return t ? t.__v_isVNode === !0 : !1
}
function he(t, e) {
  return t.type === e.type && t.key === e.key
}
const Us = "__vInternal"
  , mu = ({ key: t }) => t ?? null
  , ss = ({ ref: t, ref_key: e, ref_for: n }) => (typeof t == "number" && (t = "" + t),
    t != null ? Ct(t) || St(t) || nt(t) ? {
      i: xt,
      r: t,
      k: e,
      f: !!n
    } : t : null);
function Kn(t, e = null, n = null, i = 0, s = null, o = t === Vt ? 0 : 1, r = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && mu(e),
    ref: e && ss(e),
    scopeId: zs,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: i,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: xt
  };
  return a ? (Ir(l, n),
    o & 128 && t.normalize(l)) : n && (l.shapeFlag |= Ct(n) ? 8 : 16),
    Yn > 0 && !r && le && (l.patchFlag > 0 || o & 6) && l.patchFlag !== 32 && le.push(l),
    l
}
const Tt = M_;
function M_(t, e = null, n = null, i = 0, s = null, o = !1) {
  if ((!t || t === eu) && (t = $t),
    Jn(t)) {
    const a = Be(t, e, !0);
    return n && Ir(a, n),
      Yn > 0 && !o && le && (a.shapeFlag & 6 ? le[le.indexOf(t)] = a : le.push(a)),
      a.patchFlag |= -2,
      a
  }
  if (B_(t) && (t = t.__vccOpts),
    e) {
    e = j_(e);
    let { class: a, style: l } = e;
    a && !Ct(a) && (e.class = Ds(a)),
      ht(l) && (Ic(l) && !tt(l) && (l = Mt({}, l)),
        e.style = Ns(l))
  }
  const r = Ct(t) ? 1 : qc(t) ? 128 : N_(t) ? 64 : ht(t) ? 4 : nt(t) ? 2 : 0;
  return Kn(t, e, n, i, s, r, o, !0)
}
function j_(t) {
  return t ? Ic(t) || Us in t ? Mt({}, t) : t : null
}
function Be(t, e, n = !1) {
  const { props: i, ref: s, patchFlag: o, children: r } = t
    , a = e ? hu(i || {}, e) : i;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: a,
    key: a && mu(a),
    ref: e && e.ref ? n && s ? tt(s) ? s.concat(ss(e)) : [s, ss(e)] : ss(e) : s,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: r,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    patchFlag: e && t.type !== Vt ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && Be(t.ssContent),
    ssFallback: t.ssFallback && Be(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  }
}
function pu(t = " ", e = 0) {
  return Tt(On, null, t, e)
}
function Av(t, e) {
  const n = Tt(yi, null, t);
  return n.staticCount = e,
    n
}
function Cv(t = "", e = !1) {
  return e ? (pe(),
    xe($t, null, t)) : Tt($t, null, t)
}
function re(t) {
  return t == null || typeof t == "boolean" ? Tt($t) : tt(t) ? Tt(Vt, null, t.slice()) : typeof t == "object" ? Ze(t) : Tt(On, null, String(t))
}
function Ze(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Be(t)
}
function Ir(t, e) {
  let n = 0;
  const { shapeFlag: i } = t;
  if (e == null)
    e = null;
  else if (tt(e))
    n = 16;
  else if (typeof e == "object")
    if (i & 65) {
      const s = e.default;
      s && (s._c && (s._d = !1),
        Ir(t, s()),
        s._c && (s._d = !0));
      return
    } else {
      n = 32;
      const s = e._;
      !s && !(Us in e) ? e._ctx = xt : s === 3 && xt && (xt.slots._ === 1 ? e._ = 1 : (e._ = 2,
        t.patchFlag |= 1024))
    }
  else
    nt(e) ? (e = {
      default: e,
      _ctx: xt
    },
      n = 32) : (e = String(e),
        i & 64 ? (n = 16,
          e = [pu(e)]) : n = 8);
  t.children = e,
    t.shapeFlag |= n
}
function hu(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    for (const s in i)
      if (s === "class")
        e.class !== i.class && (e.class = Ds([e.class, i.class]));
      else if (s === "style")
        e.style = Ns([e.style, i.style]);
      else if (zi(s)) {
        const o = e[s]
          , r = i[s];
        r && o !== r && !(tt(o) && o.includes(r)) && (e[s] = o ? [].concat(o, r) : r)
      } else
        s !== "" && (e[s] = i[s])
  }
  return e
}
function Yt(t, e, n, i = null) {
  ce(t, e, 7, [n, i])
}
const x_ = su();
let z_ = 0;
function F_(t, e, n) {
  const i = t.type
    , s = (e ? e.appContext : t.appContext) || x_
    , o = {
      uid: z_++,
      vnode: t,
      type: i,
      parent: e,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new vc(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: e ? e.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: au(i, s),
      emitsOptions: Bc(i, s),
      emit: null,
      emitted: null,
      propsDefaults: Et,
      inheritAttrs: i.inheritAttrs,
      ctx: Et,
      data: Et,
      props: Et,
      attrs: Et,
      slots: Et,
      refs: Et,
      setupState: Et,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
  return o.ctx = {
    _: o
  },
    o.root = e ? e.root : o,
    o.emit = Uf.bind(null, o),
    t.ce && t.ce(o),
    o
}
let Dt = null;
const Oe = () => Dt || xt;
let Nr, xn, Ta = "__VUE_INSTANCE_SETTERS__";
(xn = Ao()[Ta]) || (xn = Ao()[Ta] = []),
  xn.push(t => Dt = t),
  Nr = t => {
    xn.length > 1 ? xn.forEach(e => e(t)) : xn[0](t)
  }
  ;
const rn = t => {
  Nr(t),
    t.scope.on()
}
  , nn = () => {
    Dt && Dt.scope.off(),
      Nr(null)
  }
  ;
function gu(t) {
  return t.vnode.shapeFlag & 4
}
let Xn = !1;
function V_(t, e = !1) {
  Xn = e;
  const { props: n, children: i } = t.vnode
    , s = gu(t);
  T_(t, n, s, e),
    S_(t, i);
  const o = s ? H_(t, e) : void 0;
  return Xn = !1,
    o
}
function H_(t, e) {
  const n = t.type;
  t.accessCache = Object.create(null),
    t.proxy = Nc(new Proxy(t.ctx, m_));
  const { setup: i } = n;
  if (i) {
    const s = t.setupContext = i.length > 1 ? yu(t) : null;
    rn(t),
      li();
    const o = en(i, t, 0, [t.props, s]);
    if (ci(),
      nn(),
      fr(o)) {
      if (o.then(nn, nn),
        e)
        return o.then(r => {
          Mo(t, r, e)
        }
        ).catch(r => {
          ui(r, t, 0)
        }
        );
      t.asyncDep = o
    } else
      Mo(t, o, e)
  } else
    vu(t, e)
}
function Mo(t, e, n) {
  nt(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : ht(e) && (t.setupState = xc(e)),
    vu(t, n)
}
let Aa;
function vu(t, e, n) {
  const i = t.type;
  if (!t.render) {
    if (!e && Aa && !i.render) {
      const s = i.template || Rr(t).template;
      if (s) {
        const { isCustomElement: o, compilerOptions: r } = t.appContext.config
          , { delimiters: a, compilerOptions: l } = i
          , c = Mt(Mt({
            isCustomElement: o,
            delimiters: a
          }, r), l);
        i.render = Aa(s, c)
      }
    }
    t.render = i.render || ge
  }
  rn(t),
    li(),
    h_(t),
    ci(),
    nn()
}
function U_(t) {
  return t.attrsProxy || (t.attrsProxy = new Proxy(t.attrs, {
    get(e, n) {
      return Jt(t, "get", "$attrs"),
        e[n]
    }
  }))
}
function yu(t) {
  const e = n => {
    t.exposed = n || {}
  }
    ;
  return {
    get attrs() {
      return U_(t)
    },
    slots: t.slots,
    emit: t.emit,
    expose: e
  }
}
function Bs(t) {
  if (t.exposed)
    return t.exposeProxy || (t.exposeProxy = new Proxy(xc(Nc(t.exposed)), {
      get(e, n) {
        if (n in e)
          return e[n];
        if (n in vi)
          return vi[n](t)
      },
      has(e, n) {
        return n in e || n in vi
      }
    }))
}
function jo(t, e = !0) {
  return nt(t) ? t.displayName || t.name : t.name || e && t.__name
}
function B_(t) {
  return nt(t) && "__vccOpts" in t
}
const vt = (t, e) => xf(t, e, Xn);
function Wt(t, e, n) {
  const i = arguments.length;
  return i === 2 ? ht(e) && !tt(e) ? Jn(e) ? Tt(t, null, [e]) : Tt(t, e) : Tt(t, null, e) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && Jn(n) && (n = [n]),
    Tt(t, e, n))
}
const q_ = Symbol.for("v-scx")
  , $_ = () => Ft(q_)
  , ku = "3.3.4"
  , W_ = "http://www.w3.org/2000/svg"
  , kn = typeof document < "u" ? document : null
  , Ca = kn && kn.createElement("template")
  , K_ = {
    insert: (t, e, n) => {
      e.insertBefore(t, n || null)
    }
    ,
    remove: t => {
      const e = t.parentNode;
      e && e.removeChild(t)
    }
    ,
    createElement: (t, e, n, i) => {
      const s = e ? kn.createElementNS(W_, t) : kn.createElement(t, n ? {
        is: n
      } : void 0);
      return t === "select" && i && i.multiple != null && s.setAttribute("multiple", i.multiple),
        s
    }
    ,
    createText: t => kn.createTextNode(t),
    createComment: t => kn.createComment(t),
    setText: (t, e) => {
      t.nodeValue = e
    }
    ,
    setElementText: (t, e) => {
      t.textContent = e
    }
    ,
    parentNode: t => t.parentNode,
    nextSibling: t => t.nextSibling,
    querySelector: t => kn.querySelector(t),
    setScopeId(t, e) {
      t.setAttribute(e, "")
    },
    insertStaticContent(t, e, n, i, s, o) {
      const r = n ? n.previousSibling : e.lastChild;
      if (s && (s === o || s.nextSibling))
        for (; e.insertBefore(s.cloneNode(!0), n),
          !(s === o || !(s = s.nextSibling));)
          ;
      else {
        Ca.innerHTML = i ? `<svg>${t}</svg>` : t;
        const a = Ca.content;
        if (i) {
          const l = a.firstChild;
          for (; l.firstChild;)
            a.appendChild(l.firstChild);
          a.removeChild(l)
        }
        e.insertBefore(a, n)
      }
      return [r ? r.nextSibling : e.firstChild, n ? n.previousSibling : e.lastChild]
    }
  };
function G_(t, e, n) {
  const i = t._vtc;
  i && (e = (e ? [e, ...i] : [...i]).join(" ")),
    e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e
}
function Y_(t, e, n) {
  const i = t.style
    , s = Ct(n);
  if (n && !s) {
    if (e && !Ct(e))
      for (const o in e)
        n[o] == null && xo(i, o, "");
    for (const o in n)
      xo(i, o, n[o])
  } else {
    const o = i.display;
    s ? e !== n && (i.cssText = n) : e && t.removeAttribute("style"),
      "_vod" in t && (i.display = o)
  }
}
const Sa = /\s*!important$/;
function xo(t, e, n) {
  if (tt(n))
    n.forEach(i => xo(t, e, i));
  else if (n == null && (n = ""),
    e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const i = J_(t, e);
    Sa.test(n) ? t.setProperty(Nn(i), n.replace(Sa, ""), "important") : t[i] = n
  }
}
const Pa = ["Webkit", "Moz", "ms"]
  , fo = {};
function J_(t, e) {
  const n = fo[e];
  if (n)
    return n;
  let i = Re(e);
  if (i !== "filter" && i in t)
    return fo[e] = i;
  i = Is(i);
  for (let s = 0; s < Pa.length; s++) {
    const o = Pa[s] + i;
    if (o in t)
      return fo[e] = o
  }
  return e
}
const La = "http://www.w3.org/1999/xlink";
function X_(t, e, n, i, s) {
  if (i && e.startsWith("xlink:"))
    n == null ? t.removeAttributeNS(La, e.slice(6, e.length)) : t.setAttributeNS(La, e, n);
  else {
    const o = Qd(e);
    n == null || o && !hc(n) ? t.removeAttribute(e) : t.setAttribute(e, o ? "" : n)
  }
}
function Z_(t, e, n, i, s, o, r) {
  if (e === "innerHTML" || e === "textContent") {
    i && r(i, s, o),
      t[e] = n ?? "";
    return
  }
  const a = t.tagName;
  if (e === "value" && a !== "PROGRESS" && !a.includes("-")) {
    t._value = n;
    const c = a === "OPTION" ? t.getAttribute("value") : t.value
      , u = n ?? "";
    c !== u && (t.value = u),
      n == null && t.removeAttribute(e);
    return
  }
  let l = !1;
  if (n === "" || n == null) {
    const c = typeof t[e];
    c === "boolean" ? n = hc(n) : n == null && c === "string" ? (n = "",
      l = !0) : c === "number" && (n = 0,
        l = !0)
  }
  try {
    t[e] = n
  } catch { }
  l && t.removeAttribute(e)
}
function ze(t, e, n, i) {
  t.addEventListener(e, n, i)
}
function Q_(t, e, n, i) {
  t.removeEventListener(e, n, i)
}
function tb(t, e, n, i, s = null) {
  const o = t._vei || (t._vei = {})
    , r = o[e];
  if (i && r)
    r.value = i;
  else {
    const [a, l] = eb(e);
    if (i) {
      const c = o[e] = sb(i, s);
      ze(t, a, c, l)
    } else
      r && (Q_(t, a, r, l),
        o[e] = void 0)
  }
}
const Ra = /(?:Once|Passive|Capture)$/;
function eb(t) {
  let e;
  if (Ra.test(t)) {
    e = {};
    let i;
    for (; i = t.match(Ra);)
      t = t.slice(0, t.length - i[0].length),
        e[i[0].toLowerCase()] = !0
  }
  return [t[2] === ":" ? t.slice(3) : Nn(t.slice(2)), e]
}
let _o = 0;
const nb = Promise.resolve()
  , ib = () => _o || (nb.then(() => _o = 0),
    _o = Date.now());
function sb(t, e) {
  const n = i => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    ce(ob(i, n.value), e, 5, [i])
  }
    ;
  return n.value = t,
    n.attached = ib(),
    n
}
function ob(t, e) {
  if (tt(e)) {
    const n = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      n.call(t),
        t._stopped = !0
    }
      ,
      e.map(i => s => !s._stopped && i && i(s))
  } else
    return e
}
const Oa = /^on[a-z]/
  , rb = (t, e, n, i, s = !1, o, r, a, l) => {
    e === "class" ? G_(t, i, s) : e === "style" ? Y_(t, n, i) : zi(e) ? ur(e) || tb(t, e, n, i, r) : (e[0] === "." ? (e = e.slice(1),
      !0) : e[0] === "^" ? (e = e.slice(1),
        !1) : ab(t, e, i, s)) ? Z_(t, e, i, o, r, a, l) : (e === "true-value" ? t._trueValue = i : e === "false-value" && (t._falseValue = i),
          X_(t, e, i, s))
  }
  ;
function ab(t, e, n, i) {
  return i ? !!(e === "innerHTML" || e === "textContent" || e in t && Oa.test(e) && nt(n)) : e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA" || Oa.test(e) && Ct(n) ? !1 : e in t
}
const Ge = "transition"
  , di = "animation"
  , qs = (t, { slots: e }) => Wt(i_, lb(t), e);
qs.displayName = "Transition";
const Eu = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
qs.props = Mt({}, Kc, Eu);
const bn = (t, e = []) => {
  tt(t) ? t.forEach(n => n(...e)) : t && t(...e)
}
  , Ia = t => t ? tt(t) ? t.some(e => e.length > 1) : t.length > 1 : !1;
function lb(t) {
  const e = {};
  for (const F in t)
    F in Eu || (e[F] = t[F]);
  if (t.css === !1)
    return e;
  const { name: n = "v", type: i, duration: s, enterFromClass: o = `${n}-enter-from`, enterActiveClass: r = `${n}-enter-active`, enterToClass: a = `${n}-enter-to`, appearFromClass: l = o, appearActiveClass: c = r, appearToClass: u = a, leaveFromClass: d = `${n}-leave-from`, leaveActiveClass: f = `${n}-leave-active`, leaveToClass: b = `${n}-leave-to` } = t
    , w = cb(s)
    , E = w && w[0]
    , S = w && w[1]
    , { onBeforeEnter: v, onEnter: _, onEnterCancelled: g, onLeave: m, onLeaveCancelled: T, onBeforeAppear: A = v, onAppear: O = _, onAppearCancelled: R = g } = e
    , N = (F, J, Y) => {
      mn(F, J ? u : a),
        mn(F, J ? c : r),
        Y && Y()
    }
    , W = (F, J) => {
      F._isLeaving = !1,
        mn(F, d),
        mn(F, b),
        mn(F, f),
        J && J()
    }
    , Q = F => (J, Y) => {
      const wt = F ? O : _
        , ot = () => N(J, F, Y);
      bn(wt, [J, ot]),
        Na(() => {
          mn(J, F ? l : o),
            Ye(J, F ? u : a),
            Ia(wt) || Da(J, i, E, ot)
        }
        )
    }
    ;
  return Mt(e, {
    onBeforeEnter(F) {
      bn(v, [F]),
        Ye(F, o),
        Ye(F, r)
    },
    onBeforeAppear(F) {
      bn(A, [F]),
        Ye(F, l),
        Ye(F, c)
    },
    onEnter: Q(!1),
    onAppear: Q(!0),
    onLeave(F, J) {
      F._isLeaving = !0;
      const Y = () => W(F, J);
      Ye(F, d),
        fb(),
        Ye(F, f),
        Na(() => {
          F._isLeaving && (mn(F, d),
            Ye(F, b),
            Ia(m) || Da(F, i, S, Y))
        }
        ),
        bn(m, [F, Y])
    },
    onEnterCancelled(F) {
      N(F, !1),
        bn(g, [F])
    },
    onAppearCancelled(F) {
      N(F, !0),
        bn(R, [F])
    },
    onLeaveCancelled(F) {
      W(F),
        bn(T, [F])
    }
  })
}
function cb(t) {
  if (t == null)
    return null;
  if (ht(t))
    return [bo(t.enter), bo(t.leave)];
  {
    const e = bo(t);
    return [e, e]
  }
}
function bo(t) {
  return pc(t)
}
function Ye(t, e) {
  e.split(/\s+/).forEach(n => n && t.classList.add(n)),
    (t._vtc || (t._vtc = new Set)).add(e)
}
function mn(t, e) {
  e.split(/\s+/).forEach(i => i && t.classList.remove(i));
  const { _vtc: n } = t;
  n && (n.delete(e),
    n.size || (t._vtc = void 0))
}
function Na(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t)
  }
  )
}
let ub = 0;
function Da(t, e, n, i) {
  const s = t._endId = ++ub
    , o = () => {
      s === t._endId && i()
    }
    ;
  if (n)
    return setTimeout(o, n);
  const { type: r, timeout: a, propCount: l } = db(t, e);
  if (!r)
    return i();
  const c = r + "end";
  let u = 0;
  const d = () => {
    t.removeEventListener(c, f),
      o()
  }
    , f = b => {
      b.target === t && ++u >= l && d()
    }
    ;
  setTimeout(() => {
    u < l && d()
  }
    , a + 1),
    t.addEventListener(c, f)
}
function db(t, e) {
  const n = window.getComputedStyle(t)
    , i = w => (n[w] || "").split(", ")
    , s = i(`${Ge}Delay`)
    , o = i(`${Ge}Duration`)
    , r = Ma(s, o)
    , a = i(`${di}Delay`)
    , l = i(`${di}Duration`)
    , c = Ma(a, l);
  let u = null
    , d = 0
    , f = 0;
  e === Ge ? r > 0 && (u = Ge,
    d = r,
    f = o.length) : e === di ? c > 0 && (u = di,
      d = c,
      f = l.length) : (d = Math.max(r, c),
        u = d > 0 ? r > c ? Ge : di : null,
        f = u ? u === Ge ? o.length : l.length : 0);
  const b = u === Ge && /\b(transform|all)(,|$)/.test(i(`${Ge}Property`).toString());
  return {
    type: u,
    timeout: d,
    propCount: f,
    hasTransform: b
  }
}
function Ma(t, e) {
  for (; t.length < e.length;)
    t = t.concat(t);
  return Math.max(...e.map((n, i) => ja(n) + ja(t[i])))
}
function ja(t) {
  return Number(t.slice(0, -1).replace(",", ".")) * 1e3
}
function fb() {
  return document.body.offsetHeight
}
const an = t => {
  const e = t.props["onUpdate:modelValue"] || !1;
  return tt(e) ? n => Bn(e, n) : e
}
  ;
function _b(t) {
  t.target.composing = !0
}
function xa(t) {
  const e = t.target;
  e.composing && (e.composing = !1,
    e.dispatchEvent(new Event("input")))
}
const za = {
  created(t, { modifiers: { lazy: e, trim: n, number: i } }, s) {
    t._assign = an(s);
    const o = i || s.props && s.props.type === "number";
    ze(t, e ? "change" : "input", r => {
      if (r.target.composing)
        return;
      let a = t.value;
      n && (a = a.trim()),
        o && (a = as(a)),
        t._assign(a)
    }
    ),
      n && ze(t, "change", () => {
        t.value = t.value.trim()
      }
      ),
      e || (ze(t, "compositionstart", _b),
        ze(t, "compositionend", xa),
        ze(t, "change", xa))
  },
  mounted(t, { value: e }) {
    t.value = e ?? ""
  },
  beforeUpdate(t, { value: e, modifiers: { lazy: n, trim: i, number: s } }, o) {
    if (t._assign = an(o),
      t.composing || document.activeElement === t && t.type !== "range" && (n || i && t.value.trim() === e || (s || t.type === "number") && as(t.value) === e))
      return;
    const r = e ?? "";
    t.value !== r && (t.value = r)
  }
}
  , bb = {
    deep: !0,
    created(t, e, n) {
      t._assign = an(n),
        ze(t, "change", () => {
          const i = t._modelValue
            , s = Zn(t)
            , o = t.checked
            , r = t._assign;
          if (tt(i)) {
            const a = br(i, s)
              , l = a !== -1;
            if (o && !l)
              r(i.concat(s));
            else if (!o && l) {
              const c = [...i];
              c.splice(a, 1),
                r(c)
            }
          } else if (ri(i)) {
            const a = new Set(i);
            o ? a.add(s) : a.delete(s),
              r(a)
          } else
            r(wu(t, o))
        }
        )
    },
    mounted: Fa,
    beforeUpdate(t, e, n) {
      t._assign = an(n),
        Fa(t, e, n)
    }
  };
function Fa(t, { value: e, oldValue: n }, i) {
  t._modelValue = e,
    tt(e) ? t.checked = br(e, i.props.value) > -1 : ri(e) ? t.checked = e.has(i.props.value) : e !== n && (t.checked = Ln(e, wu(t, !0)))
}
const mb = {
  created(t, { value: e }, n) {
    t.checked = Ln(e, n.props.value),
      t._assign = an(n),
      ze(t, "change", () => {
        t._assign(Zn(t))
      }
      )
  },
  beforeUpdate(t, { value: e, oldValue: n }, i) {
    t._assign = an(i),
      e !== n && (t.checked = Ln(e, i.props.value))
  }
}
  , pb = {
    deep: !0,
    created(t, { value: e, modifiers: { number: n } }, i) {
      const s = ri(e);
      ze(t, "change", () => {
        const o = Array.prototype.filter.call(t.options, r => r.selected).map(r => n ? as(Zn(r)) : Zn(r));
        t._assign(t.multiple ? s ? new Set(o) : o : o[0])
      }
      ),
        t._assign = an(i)
    },
    mounted(t, { value: e }) {
      Va(t, e)
    },
    beforeUpdate(t, e, n) {
      t._assign = an(n)
    },
    updated(t, { value: e }) {
      Va(t, e)
    }
  };
function Va(t, e) {
  const n = t.multiple;
  if (!(n && !tt(e) && !ri(e))) {
    for (let i = 0, s = t.options.length; i < s; i++) {
      const o = t.options[i]
        , r = Zn(o);
      if (n)
        tt(e) ? o.selected = br(e, r) > -1 : o.selected = e.has(r);
      else if (Ln(Zn(o), e)) {
        t.selectedIndex !== i && (t.selectedIndex = i);
        return
      }
    }
    !n && t.selectedIndex !== -1 && (t.selectedIndex = -1)
  }
}
function Zn(t) {
  return "_value" in t ? t._value : t.value
}
function wu(t, e) {
  const n = e ? "_trueValue" : "_falseValue";
  return n in t ? t[n] : e
}
const Sv = {
  created(t, e, n) {
    Zi(t, e, n, null, "created")
  },
  mounted(t, e, n) {
    Zi(t, e, n, null, "mounted")
  },
  beforeUpdate(t, e, n, i) {
    Zi(t, e, n, i, "beforeUpdate")
  },
  updated(t, e, n, i) {
    Zi(t, e, n, i, "updated")
  }
};
function hb(t, e) {
  switch (t) {
    case "SELECT":
      return pb;
    case "TEXTAREA":
      return za;
    default:
      switch (e) {
        case "checkbox":
          return bb;
        case "radio":
          return mb;
        default:
          return za
      }
  }
}
function Zi(t, e, n, i, s) {
  const r = hb(t.tagName, n.props && n.props.type)[s];
  r && r(t, e, n, i)
}
const gb = ["ctrl", "shift", "alt", "meta"]
  , vb = {
    stop: t => t.stopPropagation(),
    prevent: t => t.preventDefault(),
    self: t => t.target !== t.currentTarget,
    ctrl: t => !t.ctrlKey,
    shift: t => !t.shiftKey,
    alt: t => !t.altKey,
    meta: t => !t.metaKey,
    left: t => "button" in t && t.button !== 0,
    middle: t => "button" in t && t.button !== 1,
    right: t => "button" in t && t.button !== 2,
    exact: (t, e) => gb.some(n => t[`${n}Key`] && !e.includes(n))
  }
  , Pv = (t, e) => (n, ...i) => {
    for (let s = 0; s < e.length; s++) {
      const o = vb[e[s]];
      if (o && o(n, e))
        return
    }
    return t(n, ...i)
  }
  , yb = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  }
  , Lv = (t, e) => n => {
    if (!("key" in n))
      return;
    const i = Nn(n.key);
    if (e.some(s => s === i || yb[s] === i))
      return t(n)
  }
  , Rv = {
    beforeMount(t, { value: e }, { transition: n }) {
      t._vod = t.style.display === "none" ? "" : t.style.display,
        n && e ? n.beforeEnter(t) : fi(t, e)
    },
    mounted(t, { value: e }, { transition: n }) {
      n && e && n.enter(t)
    },
    updated(t, { value: e, oldValue: n }, { transition: i }) {
      !e != !n && (i ? e ? (i.beforeEnter(t),
        fi(t, !0),
        i.enter(t)) : i.leave(t, () => {
          fi(t, !1)
        }
        ) : fi(t, e))
    },
    beforeUnmount(t, { value: e }) {
      fi(t, e)
    }
  };
function fi(t, e) {
  t.style.display = e ? t._vod : "none"
}
const Tu = Mt({
  patchProp: rb
}, K_);
let Ei, Ha = !1;
function kb() {
  return Ei || (Ei = R_(Tu))
}
function Eb() {
  return Ei = Ha ? Ei : O_(Tu),
    Ha = !0,
    Ei
}
const wb = (...t) => {
  const e = kb().createApp(...t)
    , { mount: n } = e;
  return e.mount = i => {
    const s = Au(i);
    if (!s)
      return;
    const o = e._component;
    !nt(o) && !o.render && !o.template && (o.template = s.innerHTML),
      s.innerHTML = "";
    const r = n(s, !1, s instanceof SVGElement);
    return s instanceof Element && (s.removeAttribute("v-cloak"),
      s.setAttribute("data-v-app", "")),
      r
  }
    ,
    e
}
  , Tb = (...t) => {
    const e = Eb().createApp(...t)
      , { mount: n } = e;
    return e.mount = i => {
      const s = Au(i);
      if (s)
        return n(s, !0, s instanceof SVGElement)
    }
      ,
      e
  }
  ;
function Au(t) {
  return Ct(t) ? document.querySelector(t) : t
}
const Ab = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/
  , Cb = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/
  , Sb = /^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;
function Pb(t, e) {
  if (t === "__proto__" || t === "constructor" && e && typeof e == "object" && "prototype" in e) {
    Lb(t);
    return
  }
  return e
}
function Lb(t) {
  console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)
}
function Di(t, e = {}) {
  if (typeof t != "string")
    return t;
  const n = t.trim();
  if (t[0] === '"' && t[t.length - 1] === '"')
    return n.slice(1, -1);
  if (n.length <= 9) {
    const i = n.toLowerCase();
    if (i === "true")
      return !0;
    if (i === "false")
      return !1;
    if (i === "undefined")
      return;
    if (i === "null")
      return null;
    if (i === "nan")
      return Number.NaN;
    if (i === "infinity")
      return Number.POSITIVE_INFINITY;
    if (i === "-infinity")
      return Number.NEGATIVE_INFINITY
  }
  if (!Sb.test(t)) {
    if (e.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return t
  }
  try {
    if (Ab.test(t) || Cb.test(t)) {
      if (e.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(t, Pb)
    }
    return JSON.parse(t)
  } catch (i) {
    if (e.strict)
      throw i;
    return t
  }
}
const Rb = /#/g
  , Ob = /&/g
  , Ib = /=/g
  , Dr = /\+/g
  , Nb = /%5e/gi
  , Db = /%60/gi
  , Mb = /%7c/gi
  , jb = /%20/gi;
function xb(t) {
  return encodeURI("" + t).replace(Mb, "|")
}
function zo(t) {
  return xb(typeof t == "string" ? t : JSON.stringify(t)).replace(Dr, "%2B").replace(jb, "+").replace(Rb, "%23").replace(Ob, "%26").replace(Db, "`").replace(Nb, "^")
}
function mo(t) {
  return zo(t).replace(Ib, "%3D")
}
function ms(t = "") {
  try {
    return decodeURIComponent("" + t)
  } catch {
    return "" + t
  }
}
function zb(t) {
  return ms(t.replace(Dr, " "))
}
function Fb(t) {
  return ms(t.replace(Dr, " "))
}
function Cu(t = "") {
  const e = {};
  t[0] === "?" && (t = t.slice(1));
  for (const n of t.split("&")) {
    const i = n.match(/([^=]+)=?(.*)/) || [];
    if (i.length < 2)
      continue;
    const s = zb(i[1]);
    if (s === "__proto__" || s === "constructor")
      continue;
    const o = Fb(i[2] || "");
    e[s] === void 0 ? e[s] = o : Array.isArray(e[s]) ? e[s].push(o) : e[s] = [e[s], o]
  }
  return e
}
function Vb(t, e) {
  return (typeof e == "number" || typeof e == "boolean") && (e = String(e)),
    e ? Array.isArray(e) ? e.map(n => `${mo(t)}=${zo(n)}`).join("&") : `${mo(t)}=${zo(e)}` : mo(t)
}
function Hb(t) {
  return Object.keys(t).filter(e => t[e] !== void 0).map(e => Vb(e, t[e])).filter(Boolean).join("&")
}
const Ub = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/
  , Bb = /^[\s\w\0+.-]{2,}:([/\\]{2})?/
  , qb = /^([/\\]\s*){2,}[^/\\]/;
function Dn(t, e = {}) {
  return typeof e == "boolean" && (e = {
    acceptRelative: e
  }),
    e.strict ? Ub.test(t) : Bb.test(t) || (e.acceptRelative ? qb.test(t) : !1)
}
const $b = /^[\s\0]*(blob|data|javascript|vbscript):$/;
function Wb(t) {
  return !!t && $b.test(t)
}
const Kb = /\/$|\/\?/;
function Fo(t = "", e = !1) {
  return e ? Kb.test(t) : t.endsWith("/")
}
function Mr(t = "", e = !1) {
  if (!e)
    return (Fo(t) ? t.slice(0, -1) : t) || "/";
  if (!Fo(t, !0))
    return t || "/";
  const [n, ...i] = t.split("?");
  return (n.slice(0, -1) || "/") + (i.length > 0 ? `?${i.join("?")}` : "")
}
function ps(t = "", e = !1) {
  if (!e)
    return t.endsWith("/") ? t : t + "/";
  if (Fo(t, !0))
    return t || "/";
  const [n, ...i] = t.split("?");
  return n + "/" + (i.length > 0 ? `?${i.join("?")}` : "")
}
function Gb(t = "") {
  return t.startsWith("/")
}
function Ua(t = "") {
  return Gb(t) ? t : "/" + t
}
function Yb(t, e) {
  if (Pu(e) || Dn(t))
    return t;
  const n = Mr(e);
  return t.startsWith(n) ? t : Mn(n, t)
}
function Ba(t, e) {
  if (Pu(e))
    return t;
  const n = Mr(e);
  if (!t.startsWith(n))
    return t;
  const i = t.slice(n.length);
  return i[0] === "/" ? i : "/" + i
}
function Su(t, e) {
  const n = jr(t)
    , i = {
      ...Cu(n.search),
      ...e
    };
  return n.search = Hb(i),
    Zb(n)
}
function Pu(t) {
  return !t || t === "/"
}
function Jb(t) {
  return t && t !== "/"
}
const Xb = /^\.?\//;
function Mn(t, ...e) {
  let n = t || "";
  for (const i of e.filter(s => Jb(s)))
    if (n) {
      const s = i.replace(Xb, "");
      n = ps(n) + s
    } else
      n = i;
  return n
}
function Vo(t, e, n = {}) {
  return n.trailingSlash || (t = ps(t),
    e = ps(e)),
    n.leadingSlash || (t = Ua(t),
      e = Ua(e)),
    n.encoding || (t = ms(t),
      e = ms(e)),
    t === e
}
function jr(t = "", e) {
  const n = t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/);
  if (n) {
    const [, d, f = ""] = n;
    return {
      protocol: d,
      pathname: f,
      href: d + f,
      auth: "",
      host: "",
      search: "",
      hash: ""
    }
  }
  if (!Dn(t, {
    acceptRelative: !0
  }))
    return e ? jr(e + t) : Ho(t);
  const [, i = "", s, o = ""] = t.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || []
    , [, r = "", a = ""] = o.match(/([^#/?]*)(.*)?/) || []
    , { pathname: l, search: c, hash: u } = Ho(a.replace(/\/(?=[A-Za-z]:)/, ""));
  return {
    protocol: i,
    auth: s ? s.slice(0, Math.max(0, s.length - 1)) : "",
    host: r,
    pathname: l,
    search: c,
    hash: u
  }
}
function Ho(t = "") {
  const [e = "", n = "", i = ""] = (t.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname: e,
    search: n,
    hash: i
  }
}
function Zb(t) {
  const e = t.pathname || ""
    , n = t.search ? (t.search.startsWith("?") ? "" : "?") + t.search : ""
    , i = t.hash || ""
    , s = t.auth ? t.auth + "@" : ""
    , o = t.host || "";
  return (t.protocol ? t.protocol + "//" : "") + s + o + e + n + i
}
class Qb extends Error {
  constructor(e, n) {
    super(e, n),
      this.name = "FetchError",
      n != null && n.cause && !this.cause && (this.cause = n.cause)
  }
}
function tm(t) {
  var l, c, u, d, f;
  const e = ((l = t.error) == null ? void 0 : l.message) || ((c = t.error) == null ? void 0 : c.toString()) || ""
    , n = ((u = t.request) == null ? void 0 : u.method) || ((d = t.options) == null ? void 0 : d.method) || "GET"
    , i = ((f = t.request) == null ? void 0 : f.url) || String(t.request) || "/"
    , s = `[${n}] ${JSON.stringify(i)}`
    , o = t.response ? `${t.response.status} ${t.response.statusText}` : "<no response>"
    , r = `${s}: ${o}${e ? ` ${e}` : ""}`
    , a = new Qb(r, t.error ? {
      cause: t.error
    } : void 0);
  for (const b of ["request", "options", "response"])
    Object.defineProperty(a, b, {
      get() {
        return t[b]
      }
    });
  for (const [b, w] of [["data", "_data"], ["status", "status"], ["statusCode", "status"], ["statusText", "statusText"], ["statusMessage", "statusText"]])
    Object.defineProperty(a, b, {
      get() {
        return t.response && t.response[w]
      }
    });
  return a
}
const em = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function qa(t = "GET") {
  return em.has(t.toUpperCase())
}
function nm(t) {
  if (t === void 0)
    return !1;
  const e = typeof t;
  return e === "string" || e === "number" || e === "boolean" || e === null ? !0 : e !== "object" ? !1 : Array.isArray(t) ? !0 : t.buffer ? !1 : t.constructor && t.constructor.name === "Object" || typeof t.toJSON == "function"
}
const im = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"])
  , sm = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function om(t = "") {
  if (!t)
    return "json";
  const e = t.split(";").shift() || "";
  return sm.test(e) ? "json" : im.has(e) || e.startsWith("text/") ? "text" : "blob"
}
function rm(t, e, n = globalThis.Headers) {
  const i = {
    ...e,
    ...t
  };
  if (e != null && e.params && (t != null && t.params) && (i.params = {
    ...e == null ? void 0 : e.params,
    ...t == null ? void 0 : t.params
  }),
    e != null && e.query && (t != null && t.query) && (i.query = {
      ...e == null ? void 0 : e.query,
      ...t == null ? void 0 : t.query
    }),
    e != null && e.headers && (t != null && t.headers)) {
    i.headers = new n((e == null ? void 0 : e.headers) || {});
    for (const [s, o] of new n((t == null ? void 0 : t.headers) || {}))
      i.headers.set(s, o)
  }
  return i
}
const am = new Set([408, 409, 425, 429, 500, 502, 503, 504])
  , lm = new Set([101, 204, 205, 304]);
function Lu(t = {}) {
  const { fetch: e = globalThis.fetch, Headers: n = globalThis.Headers, AbortController: i = globalThis.AbortController } = t;
  async function s(a) {
    const l = a.error && a.error.name === "AbortError" && !a.options.timeout || !1;
    if (a.options.retry !== !1 && !l) {
      let u;
      typeof a.options.retry == "number" ? u = a.options.retry : u = qa(a.options.method) ? 0 : 1;
      const d = a.response && a.response.status || 500;
      if (u > 0 && (Array.isArray(a.options.retryStatusCodes) ? a.options.retryStatusCodes.includes(d) : am.has(d))) {
        const f = a.options.retryDelay || 0;
        return f > 0 && await new Promise(b => setTimeout(b, f)),
          o(a.request, {
            ...a.options,
            retry: u - 1,
            timeout: a.options.timeout
          })
      }
    }
    const c = tm(a);
    throw Error.captureStackTrace && Error.captureStackTrace(c, o),
    c
  }
  const o = async function (l, c = {}) {
    var f;
    const u = {
      request: l,
      options: rm(c, t.defaults, n),
      response: void 0,
      error: void 0
    };
    if (u.options.method = (f = u.options.method) == null ? void 0 : f.toUpperCase(),
      u.options.onRequest && await u.options.onRequest(u),
      typeof u.request == "string" && (u.options.baseURL && (u.request = Yb(u.request, u.options.baseURL)),
        (u.options.query || u.options.params) && (u.request = Su(u.request, {
          ...u.options.params,
          ...u.options.query
        }))),
      u.options.body && qa(u.options.method) && (nm(u.options.body) ? (u.options.body = typeof u.options.body == "string" ? u.options.body : JSON.stringify(u.options.body),
        u.options.headers = new n(u.options.headers || {}),
        u.options.headers.has("content-type") || u.options.headers.set("content-type", "application/json"),
        u.options.headers.has("accept") || u.options.headers.set("accept", "application/json")) : ("pipeTo" in u.options.body && typeof u.options.body.pipeTo == "function" || typeof u.options.body.pipe == "function") && ("duplex" in u.options || (u.options.duplex = "half"))),
      !u.options.signal && u.options.timeout) {
      const b = new i;
      setTimeout(() => b.abort(), u.options.timeout),
        u.options.signal = b.signal
    }
    try {
      u.response = await e(u.request, u.options)
    } catch (b) {
      return u.error = b,
        u.options.onRequestError && await u.options.onRequestError(u),
        await s(u)
    }
    if (u.response.body && !lm.has(u.response.status) && u.options.method !== "HEAD") {
      const b = (u.options.parseResponse ? "json" : u.options.responseType) || om(u.response.headers.get("content-type") || "");
      switch (b) {
        case "json":
          {
            const w = await u.response.text()
              , E = u.options.parseResponse || Di;
            u.response._data = E(w);
            break
          }
        case "stream":
          {
            u.response._data = u.response.body;
            break
          }
        default:
          u.response._data = await u.response[b]()
      }
    }
    return u.options.onResponse && await u.options.onResponse(u),
      !u.options.ignoreResponseError && u.response.status >= 400 && u.response.status < 600 ? (u.options.onResponseError && await u.options.onResponseError(u),
        await s(u)) : u.response
  }
    , r = async function (l, c) {
      return (await o(l, c))._data
    };
  return r.raw = o,
    r.native = (...a) => e(...a),
    r.create = (a = {}) => Lu({
      ...t,
      defaults: {
        ...t.defaults,
        ...a
      }
    }),
    r
}
const xr = function () {
  if (typeof globalThis < "u")
    return globalThis;
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("unable to locate global object")
}()
  , cm = xr.fetch || (() => Promise.reject(new Error("[ofetch] global.fetch is not supported!")))
  , um = xr.Headers
  , dm = xr.AbortController
  , fm = Lu({
    fetch: cm,
    Headers: um,
    AbortController: dm
  })
  , _m = fm
  , bm = () => {
    var t;
    return ((t = window == null ? void 0 : window.__NUXT__) == null ? void 0 : t.config) || {}
  }
  , hs = bm().app
  , mm = () => hs.baseURL
  , pm = () => hs.buildAssetsDir
  , hm = (...t) => Mn(Ru(), pm(), ...t)
  , Ru = (...t) => {
    const e = hs.cdnURL || hs.baseURL;
    return t.length ? Mn(e, ...t) : e
  }
  ;
globalThis.__buildAssetsURL = hm,
  globalThis.__publicAssetsURL = Ru;
function Uo(t, e = {}, n) {
  for (const i in t) {
    const s = t[i]
      , o = n ? `${n}:${i}` : i;
    typeof s == "object" && s !== null ? Uo(s, e, o) : typeof s == "function" && (e[o] = s)
  }
  return e
}
const gm = {
  run: t => t()
}
  , vm = () => gm
  , Ou = typeof console.createTask < "u" ? console.createTask : vm;
function ym(t, e) {
  const n = e.shift()
    , i = Ou(n);
  return t.reduce((s, o) => s.then(() => i.run(() => o(...e))), Promise.resolve())
}
function km(t, e) {
  const n = e.shift()
    , i = Ou(n);
  return Promise.all(t.map(s => i.run(() => s(...e))))
}
function po(t, e) {
  for (const n of [...t])
    n(e)
}
class Em {
  constructor() {
    this._hooks = {},
      this._before = void 0,
      this._after = void 0,
      this._deprecatedMessages = void 0,
      this._deprecatedHooks = {},
      this.hook = this.hook.bind(this),
      this.callHook = this.callHook.bind(this),
      this.callHookWith = this.callHookWith.bind(this)
  }
  hook(e, n, i = {}) {
    if (!e || typeof n != "function")
      return () => { }
        ;
    const s = e;
    let o;
    for (; this._deprecatedHooks[e];)
      o = this._deprecatedHooks[e],
        e = o.to;
    if (o && !i.allowDeprecated) {
      let r = o.message;
      r || (r = `${s} hook has been deprecated` + (o.to ? `, please use ${o.to}` : "")),
        this._deprecatedMessages || (this._deprecatedMessages = new Set),
        this._deprecatedMessages.has(r) || (console.warn(r),
          this._deprecatedMessages.add(r))
    }
    if (!n.name)
      try {
        Object.defineProperty(n, "name", {
          get: () => "_" + e.replace(/\W+/g, "_") + "_hook_cb",
          configurable: !0
        })
      } catch { }
    return this._hooks[e] = this._hooks[e] || [],
      this._hooks[e].push(n),
      () => {
        n && (this.removeHook(e, n),
          n = void 0)
      }
  }
  hookOnce(e, n) {
    let i, s = (...o) => (typeof i == "function" && i(),
      i = void 0,
      s = void 0,
      n(...o));
    return i = this.hook(e, s),
      i
  }
  removeHook(e, n) {
    if (this._hooks[e]) {
      const i = this._hooks[e].indexOf(n);
      i !== -1 && this._hooks[e].splice(i, 1),
        this._hooks[e].length === 0 && delete this._hooks[e]
    }
  }
  deprecateHook(e, n) {
    this._deprecatedHooks[e] = typeof n == "string" ? {
      to: n
    } : n;
    const i = this._hooks[e] || [];
    delete this._hooks[e];
    for (const s of i)
      this.hook(e, s)
  }
  deprecateHooks(e) {
    Object.assign(this._deprecatedHooks, e);
    for (const n in e)
      this.deprecateHook(n, e[n])
  }
  addHooks(e) {
    const n = Uo(e)
      , i = Object.keys(n).map(s => this.hook(s, n[s]));
    return () => {
      for (const s of i.splice(0, i.length))
        s()
    }
  }
  removeHooks(e) {
    const n = Uo(e);
    for (const i in n)
      this.removeHook(i, n[i])
  }
  removeAllHooks() {
    for (const e in this._hooks)
      delete this._hooks[e]
  }
  callHook(e, ...n) {
    return n.unshift(e),
      this.callHookWith(ym, e, ...n)
  }
  callHookParallel(e, ...n) {
    return n.unshift(e),
      this.callHookWith(km, e, ...n)
  }
  callHookWith(e, n, ...i) {
    const s = this._before || this._after ? {
      name: n,
      args: i,
      context: {}
    } : void 0;
    this._before && po(this._before, s);
    const o = e(n in this._hooks ? [...this._hooks[n]] : [], i);
    return o instanceof Promise ? o.finally(() => {
      this._after && s && po(this._after, s)
    }
    ) : (this._after && s && po(this._after, s),
      o)
  }
  beforeEach(e) {
    return this._before = this._before || [],
      this._before.push(e),
      () => {
        if (this._before !== void 0) {
          const n = this._before.indexOf(e);
          n !== -1 && this._before.splice(n, 1)
        }
      }
  }
  afterEach(e) {
    return this._after = this._after || [],
      this._after.push(e),
      () => {
        if (this._after !== void 0) {
          const n = this._after.indexOf(e);
          n !== -1 && this._after.splice(n, 1)
        }
      }
  }
}
function Iu() {
  return new Em
}
function wm(t = {}) {
  let e, n = !1;
  const i = r => {
    if (e && e !== r)
      throw new Error("Context conflict")
  }
    ;
  let s;
  if (t.asyncContext) {
    const r = t.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    r ? s = new r : console.warn("[unctx] `AsyncLocalStorage` is not provided.")
  }
  const o = () => {
    if (s && e === void 0) {
      const r = s.getStore();
      if (r !== void 0)
        return r
    }
    return e
  }
    ;
  return {
    use: () => {
      const r = o();
      if (r === void 0)
        throw new Error("Context is not available");
      return r
    }
    ,
    tryUse: () => o(),
    set: (r, a) => {
      a || i(r),
        e = r,
        n = !0
    }
    ,
    unset: () => {
      e = void 0,
        n = !1
    }
    ,
    call: (r, a) => {
      i(r),
        e = r;
      try {
        return s ? s.run(r, a) : a()
      } finally {
        n || (e = void 0)
      }
    }
    ,
    async callAsync(r, a) {
      e = r;
      const l = () => {
        e = r
      }
        , c = () => e === r ? l : void 0;
      Bo.add(c);
      try {
        const u = s ? s.run(r, a) : a();
        return n || (e = void 0),
          await u
      } finally {
        Bo.delete(c)
      }
    }
  }
}
function Tm(t = {}) {
  const e = {};
  return {
    get(n, i = {}) {
      return e[n] || (e[n] = wm({
        ...t,
        ...i
      })),
        e[n],
        e[n]
    }
  }
}
const gs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {}
  , $a = "__unctx__"
  , Am = gs[$a] || (gs[$a] = Tm())
  , Cm = (t, e = {}) => Am.get(t, e)
  , Wa = "__unctx_async_handlers__"
  , Bo = gs[Wa] || (gs[Wa] = new Set);
function Fe(t) {
  const e = [];
  for (const s of Bo) {
    const o = s();
    o && e.push(o)
  }
  const n = () => {
    for (const s of e)
      s()
  }
    ;
  let i = t();
  return i && typeof i == "object" && "catch" in i && (i = i.catch(s => {
    throw n(),
    s
  }
  )),
    [i, n]
}
const Nu = Cm("nuxt-app", {
  asyncContext: !1
})
  , Sm = "__nuxt_plugin";
function Pm(t) {
  let e = 0;
  const n = {
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.7.1"
      },
      get vue() {
        return n.vueApp.version
      }
    },
    payload: on({
      data: {},
      state: {},
      _errors: {},
      ...window.__NUXT__ ?? {}
    }),
    static: {
      data: {}
    },
    runWithContext: s => Om(n, s),
    isHydrating: !0,
    deferHydration() {
      if (!n.isHydrating)
        return () => { }
          ;
      e++;
      let s = !1;
      return () => {
        if (!s && (s = !0,
          e--,
          e === 0))
          return n.isHydrating = !1,
            n.callHook("app:suspense:resolve")
      }
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...t
  };
  n.hooks = Iu(),
    n.hook = n.hooks.hook,
    n.callHook = n.hooks.callHook,
    n.provide = (s, o) => {
      const r = "$" + s;
      Qi(n, r, o),
        Qi(n.vueApp.config.globalProperties, r, o)
    }
    ,
    Qi(n.vueApp, "$nuxt", n),
    Qi(n.vueApp.config.globalProperties, "$nuxt", n);
  {
    window.addEventListener("nuxt.preloadError", o => {
      n.callHook("app:chunkError", {
        error: o.payload
      })
    }
    ),
      window.useNuxtApp = window.useNuxtApp || gt;
    const s = n.hook("app:error", (...o) => {
      console.error("[nuxt] error caught during app initialization", ...o)
    }
    );
    n.hook("app:mounted", s)
  }
  const i = on(n.payload.config);
  return n.provide("config", i),
    n
}
async function Lm(t, e) {
  if (e.hooks && t.hooks.addHooks(e.hooks),
    typeof e == "function") {
    const { provide: n } = await t.runWithContext(() => e(t)) || {};
    if (n && typeof n == "object")
      for (const i in n)
        t.provide(i, n[i])
  }
}
async function Rm(t, e) {
  const n = []
    , i = [];
  for (const s of e) {
    const o = Lm(t, s);
    s.parallel ? n.push(o.catch(r => i.push(r))) : await o
  }
  if (await Promise.all(n),
    i.length)
    throw i[0]
}
/*! @__NO_SIDE_EFFECTS__ */
function Ee(t) {
  return typeof t == "function" ? t : (delete t.name,
    Object.assign(t.setup || (() => { }
    ), t, {
      [Sm]: !0
    }))
}
function Om(t, e, n) {
  const i = () => n ? e(...n) : e();
  return Nu.set(t),
    t.vueApp.runWithContext(i)
}
/*! @__NO_SIDE_EFFECTS__ */
function gt() {
  var e;
  let t;
  if (ou() && (t = (e = Oe()) == null ? void 0 : e.appContext.app.$nuxt),
    t = t || Nu.tryUse(),
    !t)
    throw new Error("[nuxt] instance unavailable");
  return t
}
/*! @__NO_SIDE_EFFECTS__ */
function we() {
  return gt().$config
}
function Qi(t, e, n) {
  Object.defineProperty(t, e, {
    get: () => n
  })
}
const Im = "modulepreload"
  , Nm = function (t, e) {
    return t[0] === "." ? new URL(t, e).href : t
  }
  , Ka = {}
  , Dm = function (e, n, i) {
    if (!n || n.length === 0)
      return e();
    const s = document.getElementsByTagName("link");
    return Promise.all(n.map(o => {
      if (o = Nm(o, i),
        o in Ka)
        return;
      Ka[o] = !0;
      const r = o.endsWith(".css")
        , a = r ? '[rel="stylesheet"]' : "";
      if (!!i)
        for (let u = s.length - 1; u >= 0; u--) {
          const d = s[u];
          if (d.href === o && (!r || d.rel === "stylesheet"))
            return
        }
      else if (document.querySelector(`link[href="${o}"]${a}`))
        return;
      const c = document.createElement("link");
      if (c.rel = r ? "stylesheet" : Im,
        r || (c.as = "script",
          c.crossOrigin = ""),
        c.href = o,
        document.head.appendChild(c),
        r)
        return new Promise((u, d) => {
          c.addEventListener("load", u),
            c.addEventListener("error", () => d(new Error(`Unable to preload CSS for ${o}`)))
        }
        )
    }
    )).then(() => e()).catch(o => {
      const r = new Event("vite:preloadError", {
        cancelable: !0
      });
      if (r.payload = o,
        window.dispatchEvent(r),
        !r.defaultPrevented)
        throw o
    }
    )
  }
  , Z = (...t) => Dm(...t).catch(e => {
    const n = new Event("nuxt.preloadError");
    throw n.payload = e,
    window.dispatchEvent(n),
    e
  }
  )
  , Mm = -1
  , jm = -2
  , xm = -3
  , zm = -4
  , Fm = -5
  , Vm = -6;
function Hm(t, e) {
  return Um(JSON.parse(t), e)
}
function Um(t, e) {
  if (typeof t == "number")
    return s(t, !0);
  if (!Array.isArray(t) || t.length === 0)
    throw new Error("Invalid input");
  const n = t
    , i = Array(n.length);
  function s(o, r = !1) {
    if (o === Mm)
      return;
    if (o === xm)
      return NaN;
    if (o === zm)
      return 1 / 0;
    if (o === Fm)
      return -1 / 0;
    if (o === Vm)
      return -0;
    if (r)
      throw new Error("Invalid input");
    if (o in i)
      return i[o];
    const a = n[o];
    if (!a || typeof a != "object")
      i[o] = a;
    else if (Array.isArray(a))
      if (typeof a[0] == "string") {
        const l = a[0]
          , c = e == null ? void 0 : e[l];
        if (c)
          return i[o] = c(s(a[1]));
        switch (l) {
          case "Date":
            i[o] = new Date(a[1]);
            break;
          case "Set":
            const u = new Set;
            i[o] = u;
            for (let b = 1; b < a.length; b += 1)
              u.add(s(a[b]));
            break;
          case "Map":
            const d = new Map;
            i[o] = d;
            for (let b = 1; b < a.length; b += 2)
              d.set(s(a[b]), s(a[b + 1]));
            break;
          case "RegExp":
            i[o] = new RegExp(a[1], a[2]);
            break;
          case "Object":
            i[o] = Object(a[1]);
            break;
          case "BigInt":
            i[o] = BigInt(a[1]);
            break;
          case "null":
            const f = Object.create(null);
            i[o] = f;
            for (let b = 1; b < a.length; b += 2)
              f[a[b]] = s(a[b + 1]);
            break;
          default:
            throw new Error(`Unknown type ${l}`)
        }
      } else {
        const l = new Array(a.length);
        i[o] = l;
        for (let c = 0; c < a.length; c += 1) {
          const u = a[c];
          u !== jm && (l[c] = s(u))
        }
      }
    else {
      const l = {};
      i[o] = l;
      for (const c in a) {
        const u = a[c];
        l[c] = s(u)
      }
    }
    return i[o]
  }
  return s(0)
}
function Bm(t) {
  return Array.isArray(t) ? t : [t]
}
const qm = ["title", "titleTemplate", "script", "style", "noscript"]
  , os = ["base", "meta", "link", "style", "script", "noscript"]
  , $m = ["title", "titleTemplate", "templateParams", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"]
  , Wm = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"]
  , Du = ["tagPosition", "tagPriority", "tagDuplicateStrategy", "innerHTML", "textContent", "processTemplateParams"]
  , Km = typeof window < "u";
function Mu(t) {
  let e = 9;
  for (let n = 0; n < t.length;)
    e = Math.imul(e ^ t.charCodeAt(n++), 9 ** 9);
  return ((e ^ e >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase()
}
function Ga(t) {
  return t._h || Mu(t._d ? t._d : `${t.tag}:${t.textContent || t.innerHTML || ""}:${Object.entries(t.props).map(([e, n]) => `${e}:${String(n)}`).join(",")}`)
}
function ju(t, e) {
  const { props: n, tag: i } = t;
  if (Wm.includes(i))
    return i;
  if (i === "link" && n.rel === "canonical")
    return "canonical";
  if (n.charset)
    return "charset";
  const s = ["id"];
  i === "meta" && s.push("name", "property", "http-equiv");
  for (const o of s)
    if (typeof n[o] < "u") {
      const r = String(n[o]);
      return e && !e(r) ? !1 : `${i}:${o}:${r}`
    }
  return !1
}
function Ya(t, e) {
  return t == null ? e || null : typeof t == "function" ? t(e) : t
}
async function Gm(t, e, n) {
  const i = {
    tag: t,
    props: await xu(typeof e == "object" && typeof e != "function" && !(e instanceof Promise) ? {
      ...e
    } : {
      [["script", "noscript", "style"].includes(t) ? "innerHTML" : "textContent"]: e
    }, ["templateParams", "titleTemplate"].includes(t))
  };
  return Du.forEach(s => {
    const o = typeof i.props[s] < "u" ? i.props[s] : n[s];
    typeof o < "u" && ((!["innerHTML", "textContent"].includes(s) || qm.includes(i.tag)) && (i[s] = o),
      delete i.props[s])
  }
  ),
    i.props.body && (i.tagPosition = "bodyClose",
      delete i.props.body),
    i.props.children && (i.innerHTML = i.props.children,
      delete i.props.children),
    i.tag === "script" && typeof i.innerHTML == "object" ? (i.innerHTML = JSON.stringify(i.innerHTML),
      i.props.type = i.props.type || "application/json") : i.tag === "script" && i.innerHTML && (/^(https?:)?\/\//.test(i.innerHTML) || i.innerHTML.startsWith("/")) && (i.props.src = i.innerHTML,
        delete i.innerHTML),
    Array.isArray(i.props.content) ? i.props.content.map(s => ({
      ...i,
      props: {
        ...i.props,
        content: s
      }
    })) : i
}
function Ym(t) {
  return typeof t == "object" && !Array.isArray(t) && (t = Object.keys(t).filter(e => t[e])),
    (Array.isArray(t) ? t.join(" ") : t).split(" ").filter(e => e.trim()).filter(Boolean).join(" ")
}
async function xu(t, e) {
  for (const n of Object.keys(t)) {
    if (n === "class") {
      t[n] = Ym(t[n]);
      continue
    }
    if (t[n] instanceof Promise && (t[n] = await t[n]),
      !e && !Du.includes(n)) {
      const i = String(t[n])
        , s = n.startsWith("data-");
      i === "true" || i === "" ? t[n] = s ? "true" : !0 : t[n] || (s && i === "false" ? t[n] = "false" : delete t[n])
    }
  }
  return t
}
const Jm = 10;
async function Xm(t) {
  const e = [];
  return Object.entries(t.resolvedInput).filter(([n, i]) => typeof i < "u" && $m.includes(n)).forEach(([n, i]) => {
    const s = Bm(i);
    e.push(...s.map(o => Gm(n, o, t)).flat())
  }
  ),
    (await Promise.all(e)).flat().filter(Boolean).map((n, i) => (n._e = t._i,
      t.mode && (n._m = t.mode),
      n._p = (t._i << Jm) + i,
      n))
}
const Ja = {
  base: -10,
  title: 10
}
  , Xa = {
    critical: -80,
    high: -10,
    low: 20
  };
function vs(t) {
  let e = 100;
  const n = t.tagPriority;
  return typeof n == "number" ? n : (t.tag === "meta" ? (t.props.charset && (e = -20),
    t.props["http-equiv"] === "content-security-policy" && (e = 0)) : t.tag === "link" && t.props.rel === "preconnect" ? e = 20 : t.tag in Ja && (e = Ja[t.tag]),
    typeof n == "string" && n in Xa ? e + Xa[n] : e)
}
const Zm = [{
  prefix: "before:",
  offset: -1
}, {
  prefix: "after:",
  offset: 1
}]
  , Je = "%separator";
function gn(t, e, n) {
  if (typeof t != "string" || !t.includes("%"))
    return t;
  function i(r) {
    let a;
    return ["s", "pageTitle"].includes(r) ? a = e.pageTitle : r.includes(".") ? a = r.split(".").reduce((l, c) => l && l[c] || void 0, e) : a = e[r],
      typeof a < "u" ? (a || "").replace(/"/g, '\\"') : !1
  }
  let s = t;
  try {
    s = decodeURI(t)
  } catch { }
  return (s.match(/%(\w+\.+\w+)|%(\w+)/g) || []).sort().reverse().forEach(r => {
    const a = i(r.slice(1));
    typeof a == "string" && (t = t.replace(new RegExp(`\\${r}(\\W|$)`, "g"), (l, c) => `${a}${c}`).trim())
  }
  ),
    t.includes(Je) && (t.endsWith(Je) && (t = t.slice(0, -Je.length).trim()),
      t.startsWith(Je) && (t = t.slice(Je.length).trim()),
      t = t.replace(new RegExp(`\\${Je}\\s*\\${Je}`, "g"), Je),
      t = gn(t, {
        separator: n
      }, n)),
    t
}
async function Qm(t) {
  const e = {
    tag: t.tagName.toLowerCase(),
    props: await xu(t.getAttributeNames().reduce((n, i) => ({
      ...n,
      [i]: t.getAttribute(i)
    }), {})),
    innerHTML: t.innerHTML
  };
  return e._d = ju(e),
    e
}
async function zu(t, e = {}) {
  var u;
  const n = e.document || t.resolvedOptions.document;
  if (!n)
    return;
  const i = {
    shouldRender: t.dirty,
    tags: []
  };
  if (await t.hooks.callHook("dom:beforeRender", i),
    !i.shouldRender)
    return;
  const s = (await t.resolveTags()).map(d => ({
    tag: d,
    id: os.includes(d.tag) ? Ga(d) : d.tag,
    shouldRender: !0
  }));
  let o = t._dom;
  if (!o) {
    o = {
      elMap: {
        htmlAttrs: n.documentElement,
        bodyAttrs: n.body
      }
    };
    for (const d of ["body", "head"]) {
      const f = (u = n == null ? void 0 : n[d]) == null ? void 0 : u.children;
      for (const b of [...f].filter(w => os.includes(w.tagName.toLowerCase())))
        o.elMap[b.getAttribute("data-hid") || Ga(await Qm(b))] = b
    }
  }
  o.pendingSideEffects = {
    ...o.sideEffects || {}
  },
    o.sideEffects = {};
  function r(d, f, b) {
    const w = `${d}:${f}`;
    o.sideEffects[w] = b,
      delete o.pendingSideEffects[w]
  }
  function a({ id: d, $el: f, tag: b }) {
    const w = b.tag.endsWith("Attrs");
    o.elMap[d] = f,
      w || (["textContent", "innerHTML"].forEach(E => {
        b[E] && b[E] !== f[E] && (f[E] = b[E])
      }
      ),
        r(d, "el", () => {
          o.elMap[d].remove(),
            delete o.elMap[d]
        }
        )),
      Object.entries(b.props).forEach(([E, S]) => {
        const v = `attr:${E}`;
        if (E === "class")
          for (const _ of (S || "").split(" ").filter(Boolean))
            w && r(d, `${v}:${_}`, () => f.classList.remove(_)),
              !f.classList.contains(_) && f.classList.add(_);
        else
          f.getAttribute(E) !== S && f.setAttribute(E, S === !0 ? "" : String(S)),
            w && r(d, v, () => f.removeAttribute(E))
      }
      )
  }
  const l = []
    , c = {
      bodyClose: void 0,
      bodyOpen: void 0,
      head: void 0
    };
  for (const d of s) {
    const { tag: f, shouldRender: b, id: w } = d;
    if (b) {
      if (f.tag === "title") {
        n.title = f.textContent;
        continue
      }
      d.$el = d.$el || o.elMap[w],
        d.$el ? a(d) : os.includes(f.tag) && l.push(d)
    }
  }
  for (const d of l) {
    const f = d.tag.tagPosition || "head";
    d.$el = n.createElement(d.tag.tag),
      a(d),
      c[f] = c[f] || n.createDocumentFragment(),
      c[f].appendChild(d.$el)
  }
  for (const d of s)
    await t.hooks.callHook("dom:renderTag", d, n, r);
  c.head && n.head.appendChild(c.head),
    c.bodyOpen && n.body.insertBefore(c.bodyOpen, n.body.firstChild),
    c.bodyClose && n.body.appendChild(c.bodyClose),
    Object.values(o.pendingSideEffects).forEach(d => d()),
    t._dom = o,
    t.dirty = !1,
    await t.hooks.callHook("dom:rendered", {
      renders: s
    })
}
async function tp(t, e = {}) {
  const n = e.delayFn || (i => setTimeout(i, 10));
  return t._domUpdatePromise = t._domUpdatePromise || new Promise(i => n(async () => {
    await zu(t, e),
      delete t._domUpdatePromise,
      i()
  }
  ))
}
function ep(t) {
  return e => {
    var i, s;
    const n = ((s = (i = e.resolvedOptions.document) == null ? void 0 : i.head.querySelector('script[id="unhead:payload"]')) == null ? void 0 : s.innerHTML) || !1;
    return n && e.push(JSON.parse(n)),
    {
      mode: "client",
      hooks: {
        "entries:updated": function (o) {
          tp(o, t)
        }
      }
    }
  }
}
const np = ["templateParams", "htmlAttrs", "bodyAttrs"]
  , ip = {
    hooks: {
      "tag:normalise": function ({ tag: t }) {
        ["hid", "vmid", "key"].forEach(i => {
          t.props[i] && (t.key = t.props[i],
            delete t.props[i])
        }
        );
        const n = ju(t) || (t.key ? `${t.tag}:${t.key}` : !1);
        n && (t._d = n)
      },
      "tags:resolve": function (t) {
        const e = {};
        t.tags.forEach(i => {
          const s = (i.key ? `${i.tag}:${i.key}` : i._d) || i._p
            , o = e[s];
          if (o) {
            let a = i == null ? void 0 : i.tagDuplicateStrategy;
            if (!a && np.includes(i.tag) && (a = "merge"),
              a === "merge") {
              const l = o.props;
              ["class", "style"].forEach(c => {
                i.props[c] && l[c] && (c === "style" && !l[c].endsWith(";") && (l[c] += ";"),
                  i.props[c] = `${l[c]} ${i.props[c]}`)
              }
              ),
                e[s].props = {
                  ...l,
                  ...i.props
                };
              return
            } else if (i._e === o._e) {
              o._duped = o._duped || [],
                i._d = `${o._d}:${o._duped.length + 1}`,
                o._duped.push(i);
              return
            } else if (vs(i) > vs(o))
              return
          }
          const r = Object.keys(i.props).length + (i.innerHTML ? 1 : 0) + (i.textContent ? 1 : 0);
          if (os.includes(i.tag) && r === 0) {
            delete e[s];
            return
          }
          e[s] = i
        }
        );
        const n = [];
        Object.values(e).forEach(i => {
          const s = i._duped;
          delete i._duped,
            n.push(i),
            s && n.push(...s)
        }
        ),
          t.tags = n
      }
    }
  }
  , sp = {
    mode: "server",
    hooks: {
      "tags:resolve": function (t) {
        const e = {};
        t.tags.filter(n => ["titleTemplate", "templateParams", "title"].includes(n.tag) && n._m === "server").forEach(n => {
          e[n.tag] = n.tag.startsWith("title") ? n.textContent : n.props
        }
        ),
          Object.keys(e).length && t.tags.push({
            tag: "script",
            innerHTML: JSON.stringify(e),
            props: {
              id: "unhead:payload",
              type: "application/json"
            }
          })
      }
    }
  }
  , Za = ["script", "link", "bodyAttrs"];
function Qa(t) {
  const e = {}
    , n = {};
  return Object.entries(t.props).forEach(([i, s]) => {
    i.startsWith("on") && typeof s == "function" ? n[i] = s : e[i] = s
  }
  ),
  {
    props: e,
    eventHandlers: n
  }
}
const op = {
  hooks: {
    "ssr:render": function (t) {
      t.tags = t.tags.map(e => (!Za.includes(e.tag) || !Object.entries(e.props).find(([n, i]) => n.startsWith("on") && typeof i == "function") || (e.props = Qa(e).props),
        e))
    },
    "tags:resolve": function (t) {
      t.tags = t.tags.map(e => {
        if (!Za.includes(e.tag))
          return e;
        const { props: n, eventHandlers: i } = Qa(e);
        return Object.keys(i).length && (e.props = n,
          e._eventHandlers = i),
          e
      }
      )
    },
    "dom:renderTag": function (t, e, n) {
      if (!t.tag._eventHandlers)
        return;
      const i = t.tag.tag === "bodyAttrs" ? e.defaultView : t.$el;
      Object.entries(t.tag._eventHandlers).forEach(([s, o]) => {
        const r = `${t.tag._d || t.tag._p}:${s}`
          , a = s.slice(2).toLowerCase()
          , l = `data-h-${a}`;
        if (n(t.id, r, () => { }
        ),
          t.$el.hasAttribute(l))
          return;
        const c = o;
        t.$el.setAttribute(l, ""),
          i.addEventListener(a, c),
          t.entry && n(t.id, r, () => {
            i.removeEventListener(a, c),
              t.$el.removeAttribute(l)
          }
          )
      }
      )
    }
  }
}
  , rp = ["link", "style", "script", "noscript"]
  , ap = {
    hooks: {
      "tag:normalise": ({ tag: t }) => {
        t.key && rp.includes(t.tag) && (t.props["data-hid"] = t._h = Mu(t.key))
      }
    }
  }
  , lp = {
    hooks: {
      "tags:resolve": t => {
        const e = n => {
          var i;
          return (i = t.tags.find(s => s._d === n)) == null ? void 0 : i._p
        }
          ;
        for (const { prefix: n, offset: i } of Zm)
          for (const s of t.tags.filter(o => typeof o.tagPriority == "string" && o.tagPriority.startsWith(n))) {
            const o = e(s.tagPriority.replace(n, ""));
            typeof o < "u" && (s._p = o + i)
          }
        t.tags.sort((n, i) => n._p - i._p).sort((n, i) => vs(n) - vs(i))
      }
    }
  }
  , cp = {
    hooks: {
      "tags:resolve": t => {
        var r;
        const { tags: e } = t
          , n = (r = e.find(a => a.tag === "title")) == null ? void 0 : r.textContent
          , i = e.findIndex(a => a.tag === "templateParams")
          , s = i !== -1 ? e[i].props : {}
          , o = s.separator || "|";
        delete s.separator,
          s.pageTitle = gn(s.pageTitle || n || "", s, o);
        for (const a of e)
          a.processTemplateParams !== !1 && (["titleTemplate", "title"].includes(a.tag) && typeof a.textContent == "string" ? a.textContent = gn(a.textContent, s, o) : a.tag === "meta" && typeof a.props.content == "string" ? a.props.content = gn(a.props.content, s, o) : a.tag === "link" && typeof a.props.href == "string" ? a.props.href = gn(a.props.href, s, o) : a.processTemplateParams === !0 && (a.innerHTML ? a.innerHTML = gn(a.innerHTML, s, o) : a.textContent && (a.textContent = gn(a.textContent, s, o))));
        t.tags = e.filter(a => a.tag !== "templateParams")
      }
    }
  }
  , up = {
    hooks: {
      "tags:resolve": t => {
        const { tags: e } = t;
        let n = e.findIndex(s => s.tag === "titleTemplate");
        const i = e.findIndex(s => s.tag === "title");
        if (i !== -1 && n !== -1) {
          const s = Ya(e[n].textContent, e[i].textContent);
          s !== null ? e[i].textContent = s || e[i].textContent : delete e[i]
        } else if (n !== -1) {
          const s = Ya(e[n].textContent);
          s !== null && (e[n].textContent = s,
            e[n].tag = "title",
            n = -1)
        }
        n !== -1 && delete e[n],
          t.tags = e.filter(Boolean)
      }
    }
  };
let Fu;
function dp(t = {}) {
  const e = fp(t);
  return e.use(ep()),
    Fu = e
}
function tl(t, e) {
  return !t || t === "server" && e || t === "client" && !e
}
function fp(t = {}) {
  const e = Iu();
  e.addHooks(t.hooks || {}),
    t.document = t.document || (Km ? document : void 0);
  const n = !t.document;
  t.plugins = [ip, sp, op, ap, lp, cp, up, ...(t == null ? void 0 : t.plugins) || []];
  const i = () => {
    r.dirty = !0,
      e.callHook("entries:updated", r)
  }
    ;
  let s = 0
    , o = [];
  const r = {
    dirty: !1,
    resolvedOptions: t,
    hooks: e,
    headEntries() {
      return o
    },
    use(a) {
      const l = typeof a == "function" ? a(r) : a;
      tl(l.mode, n) && e.addHooks(l.hooks || {})
    },
    push(a, l) {
      l == null || delete l.head;
      const c = {
        _i: s++,
        input: a,
        ...l
      };
      return tl(c.mode, n) && (o.push(c),
        i()),
      {
        dispose() {
          o = o.filter(u => u._i !== c._i),
            e.callHook("entries:updated", r),
            i()
        },
        patch(u) {
          o = o.map(d => (d._i === c._i && (d.input = c.input = u),
            d)),
            i()
        }
      }
    },
    async resolveTags() {
      const a = {
        tags: [],
        entries: [...o]
      };
      await e.callHook("entries:resolve", a);
      for (const l of a.entries) {
        const c = l.resolvedInput || l.input;
        if (l.resolvedInput = await (l.transform ? l.transform(c) : c),
          l.resolvedInput)
          for (const u of await Xm(l)) {
            const d = {
              tag: u,
              entry: l,
              resolvedOptions: r.resolvedOptions
            };
            await e.callHook("tag:normalise", d),
              a.tags.push(d.tag)
          }
      }
      return await e.callHook("tags:beforeResolve", a),
        await e.callHook("tags:resolve", a),
        a.tags
    },
    ssr: n
  };
  return t.plugins.forEach(a => r.use(a)),
    r.hooks.callHook("init", r),
    r
}
function _p() {
  return Fu
}
const bp = ku.startsWith("3");
function mp(t) {
  return typeof t == "function" ? t() : ut(t)
}
function ys(t, e = "") {
  if (t instanceof Promise)
    return t;
  const n = mp(t);
  return !t || !n ? n : Array.isArray(n) ? n.map(i => ys(i, e)) : typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([i, s]) => i === "titleTemplate" || i.startsWith("on") ? [i, ut(s)] : [i, ys(s, i)])) : n
}
const pp = {
  hooks: {
    "entries:resolve": function (t) {
      for (const e of t.entries)
        e.resolvedInput = ys(e.input)
    }
  }
}
  , Vu = "usehead";
function hp(t) {
  return {
    install(n) {
      bp && (n.config.globalProperties.$unhead = t,
        n.config.globalProperties.$head = t,
        n.provide(Vu, t))
    }
  }.install
}
function gp(t = {}) {
  t.domDelayFn = t.domDelayFn || (n => ln(() => setTimeout(() => n(), 0)));
  const e = dp(t);
  return e.use(pp),
    e.install = hp(e),
    e
}
const qo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , $o = "__unhead_injection_handler__";
function vp(t) {
  qo[$o] = t
}
function yp() {
  if ($o in qo)
    return qo[$o]();
  const t = Ft(Vu);
  return t || _p()
}
function Ov(t, e = {}) {
  const n = e.head || yp();
  if (n)
    return n.ssr ? n.push(t, e) : kp(n, t, e)
}
function kp(t, e, n = {}) {
  const i = Ut(!1)
    , s = Ut({});
  Qf(() => {
    s.value = i.value ? {} : ys(e)
  }
  );
  const o = t.push(s.value, n);
  return ve(s, a => {
    o.patch(a)
  }
  ),
    Oe() && (Vs(() => {
      o.dispose()
    }
    ),
      Xc(() => {
        i.value = !0
      }
      ),
      Jc(() => {
        i.value = !1
      }
      )),
    o
}
const Ep = !1
  , Wo = !1
  , wp = !1
  , Tp = "#__nuxt";
async function Ap(t) {
  const e = fetch(t).then(n => n.text().then(Hu));
  try {
    return await e
  } catch (n) {
    console.warn("[nuxt] Cannot load payload ", t, n)
  }
  return null
}
let ts = null;
async function Cp() {
  if (ts)
    return ts;
  const t = document.getElementById("__NUXT_DATA__");
  if (!t)
    return {};
  const e = Hu(t.textContent || "")
    , n = t.dataset.src ? await Ap(t.dataset.src) : void 0;
  return ts = {
    ...e,
    ...n,
    ...window.__NUXT__
  },
    ts
}
function Hu(t) {
  return Hm(t, gt()._payloadRevivers)
}
function Sp(t, e) {
  gt()._payloadRevivers[t] = e
}
const es = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
function Pp(t, e) {
  if (typeof t != "string")
    throw new TypeError("argument str must be a string");
  const n = {}
    , s = (e || {}).decode || Op;
  let o = 0;
  for (; o < t.length;) {
    const r = t.indexOf("=", o);
    if (r === -1)
      break;
    let a = t.indexOf(";", o);
    if (a === -1)
      a = t.length;
    else if (a < r) {
      o = t.lastIndexOf(";", r - 1) + 1;
      continue
    }
    const l = t.slice(o, r).trim();
    if (n[l] === void 0) {
      let c = t.slice(r + 1, a).trim();
      c.codePointAt(0) === 34 && (c = c.slice(1, -1)),
        n[l] = Rp(c, s)
    }
    o = a + 1
  }
  return n
}
function el(t, e, n) {
  const i = n || {}
    , s = i.encode || Ip;
  if (typeof s != "function")
    throw new TypeError("option encode is invalid");
  if (!es.test(t))
    throw new TypeError("argument name is invalid");
  const o = s(e);
  if (o && !es.test(o))
    throw new TypeError("argument val is invalid");
  let r = t + "=" + o;
  if (i.maxAge !== void 0 && i.maxAge !== null) {
    const a = i.maxAge - 0;
    if (Number.isNaN(a) || !Number.isFinite(a))
      throw new TypeError("option maxAge is invalid");
    r += "; Max-Age=" + Math.floor(a)
  }
  if (i.domain) {
    if (!es.test(i.domain))
      throw new TypeError("option domain is invalid");
    r += "; Domain=" + i.domain
  }
  if (i.path) {
    if (!es.test(i.path))
      throw new TypeError("option path is invalid");
    r += "; Path=" + i.path
  }
  if (i.expires) {
    if (!Lp(i.expires) || Number.isNaN(i.expires.valueOf()))
      throw new TypeError("option expires is invalid");
    r += "; Expires=" + i.expires.toUTCString()
  }
  if (i.httpOnly && (r += "; HttpOnly"),
    i.secure && (r += "; Secure"),
    i.priority)
    switch (typeof i.priority == "string" ? i.priority.toLowerCase() : i.priority) {
      case "low":
        r += "; Priority=Low";
        break;
      case "medium":
        r += "; Priority=Medium";
        break;
      case "high":
        r += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid")
    }
  if (i.sameSite)
    switch (typeof i.sameSite == "string" ? i.sameSite.toLowerCase() : i.sameSite) {
      case !0:
        r += "; SameSite=Strict";
        break;
      case "lax":
        r += "; SameSite=Lax";
        break;
      case "strict":
        r += "; SameSite=Strict";
        break;
      case "none":
        r += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid")
    }
  return r
}
function Lp(t) {
  return Object.prototype.toString.call(t) === "[object Date]" || t instanceof Date
}
function Rp(t, e) {
  try {
    return e(t)
  } catch {
    return t
  }
}
function Op(t) {
  return t.includes("%") ? decodeURIComponent(t) : t
}
function Ip(t) {
  return encodeURIComponent(t)
}
function ho(t) {
  return t !== null && typeof t == "object"
}
function Ko(t, e, n = ".", i) {
  if (!ho(e))
    return Ko(t, {}, n, i);
  const s = Object.assign({}, e);
  for (const o in t) {
    if (o === "__proto__" || o === "constructor")
      continue;
    const r = t[o];
    r != null && (i && i(s, o, r, n) || (Array.isArray(r) && Array.isArray(s[o]) ? s[o] = [...r, ...s[o]] : ho(r) && ho(s[o]) ? s[o] = Ko(r, s[o], (n ? `${n}.` : "") + o.toString(), i) : s[o] = r))
  }
  return s
}
function Np(t) {
  return (...e) => e.reduce((n, i) => Ko(n, i, "", t), {})
}
const Dp = Np();
function Mp(t, e) {
  try {
    return e in t
  } catch {
    return !1
  }
}
var jp = Object.defineProperty
  , xp = (t, e, n) => e in t ? jp(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
  }) : t[e] = n
  , vn = (t, e, n) => (xp(t, typeof e != "symbol" ? e + "" : e, n),
    n);
class Go extends Error {
  constructor(e, n = {}) {
    super(e, n),
      vn(this, "statusCode", 500),
      vn(this, "fatal", !1),
      vn(this, "unhandled", !1),
      vn(this, "statusMessage"),
      vn(this, "data"),
      vn(this, "cause"),
      n.cause && !this.cause && (this.cause = n.cause)
  }
  toJSON() {
    const e = {
      message: this.message,
      statusCode: ks(this.statusCode, 500)
    };
    return this.statusMessage && (e.statusMessage = Uu(this.statusMessage)),
      this.data !== void 0 && (e.data = this.data),
      e
  }
}
vn(Go, "__h3_error__", !0);
function Yo(t) {
  if (typeof t == "string")
    return new Go(t);
  if (zp(t))
    return t;
  const e = new Go(t.message ?? t.statusMessage ?? "", {
    cause: t.cause || t
  });
  if (Mp(t, "stack"))
    try {
      Object.defineProperty(e, "stack", {
        get() {
          return t.stack
        }
      })
    } catch {
      try {
        e.stack = t.stack
      } catch { }
    }
  if (t.data && (e.data = t.data),
    t.statusCode ? e.statusCode = ks(t.statusCode, e.statusCode) : t.status && (e.statusCode = ks(t.status, e.statusCode)),
    t.statusMessage ? e.statusMessage = t.statusMessage : t.statusText && (e.statusMessage = t.statusText),
    e.statusMessage) {
    const n = e.statusMessage;
    Uu(e.statusMessage) !== n && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")
  }
  return t.fatal !== void 0 && (e.fatal = t.fatal),
    t.unhandled !== void 0 && (e.unhandled = t.unhandled),
    e
}
function zp(t) {
  var e;
  return ((e = t == null ? void 0 : t.constructor) == null ? void 0 : e.__h3_error__) === !0
}
const Fp = {
  html: "text/html",
  json: "application/json"
}
  , Vp = /[^\u0009\u0020-\u007E]/g;
function Uu(t = "") {
  return t.replace(Vp, "")
}
function ks(t, e = 200) {
  return !t || (typeof t == "string" && (t = Number.parseInt(t, 10)),
    t < 100 || t > 999) ? e : t
}
const Hp = typeof setImmediate > "u" ? t => t() : setImmediate;
function Up(t, e, n) {
  return n && Bp(t, n),
    new Promise(i => {
      Hp(() => {
        t.handled || t.node.res.end(e),
          i()
      }
      )
    }
    )
}
function Bp(t, e) {
  e && !t.node.res.getHeader("content-type") && t.node.res.setHeader("content-type", e)
}
function Iv(t, e, n = 302) {
  t.node.res.statusCode = ks(n, t.node.res.statusCode),
    t.node.res.setHeader("location", e);
  const s = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${e.replace(/"/g, "%22")}"></head></html>`;
  return Up(t, s, Fp.html)
}
const Bu = Symbol("layout-meta")
  , Ui = Symbol("route")
  , jn = () => {
    var t;
    return (t = gt()) == null ? void 0 : t.$router
  }
  , zr = () => ou() ? Ft(Ui, gt()._route) : gt()._route;
/*! @__NO_SIDE_EFFECTS__ */
function Nv(t) {
  return t
}
const qp = (t, e, n = {}) => {
  const i = gt()
    , s = n.global || typeof t != "string"
    , o = typeof t != "string" ? t : e;
  if (!o) {
    console.warn("[nuxt] No route middleware passed to `addRouteMiddleware`.", t);
    return
  }
  s ? i._middleware.global.push(o) : i._middleware.named[t] = o
}
  , $p = () => {
    try {
      if (gt()._processingMiddleware)
        return !0
    } catch {
      return !0
    }
    return !1
  }
  , Wp = (t, e) => {
    t || (t = "/");
    const n = typeof t == "string" ? t : Su(t.path || "/", t.query || {}) + (t.hash || "");
    if (e != null && e.open) {
      {
        const { target: a = "_blank", windowFeatures: l = {} } = e.open
          , c = Object.entries(l).filter(([u, d]) => d !== void 0).map(([u, d]) => `${u.toLowerCase()}=${d}`).join(", ");
        open(n, a, c)
      }
      return Promise.resolve()
    }
    const i = (e == null ? void 0 : e.external) || Dn(n, {
      acceptRelative: !0
    });
    if (i) {
      if (!(e != null && e.external))
        throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
      const a = jr(n).protocol;
      if (a && Wb(a))
        throw new Error(`Cannot navigate to a URL with '${a}' protocol.`)
    }
    const s = $p();
    if (!i && s)
      return t;
    const o = jn()
      , r = gt();
    return i ? (e != null && e.replace ? location.replace(n) : location.href = n,
      s ? r.isHydrating ? new Promise(() => { }
      ) : !1 : Promise.resolve()) : e != null && e.replace ? o.replace(t) : o.push(t)
  }
  , Kp = t => {
    if (!t)
      return !1;
    throw t = Ws(t),
    t.fatal && gt().runWithContext(() => wn(t)),
    t
  }
  , $s = () => zc(gt().payload, "error")
  , wn = t => {
    const e = Ws(t);
    try {
      const n = gt()
        , i = $s();
      n.hooks.callHook("app:error", e),
        i.value = i.value || e
    } catch {
      throw e
    }
    return e
  }
  , Gp = async (t = {}) => {
    const e = gt()
      , n = $s();
    e.callHook("app:error:cleared", t),
      t.redirect && await jn().replace(t.redirect),
      n.value = null
  }
  , Yp = t => !!(t && typeof t == "object" && "__nuxt_error" in t)
  , Ws = t => {
    const e = Yo(t);
    return e.__nuxt_error = !0,
      e
  }
  , nl = {
    NuxtError: t => Ws(t),
    EmptyShallowRef: t => Gn(t === "_" ? void 0 : t === "0n" ? BigInt(0) : Di(t)),
    EmptyRef: t => Ut(t === "_" ? void 0 : t === "0n" ? BigInt(0) : Di(t)),
    ShallowRef: t => Gn(t),
    ShallowReactive: t => Fi(t),
    Ref: t => Ut(t),
    Reactive: t => on(t)
  }
  , Jp = Ee({
    name: "nuxt:revive-payload:client",
    order: -30,
    async setup(t) {
      let e, n;
      for (const i in nl)
        Sp(i, nl[i]);
      Object.assign(t.payload, ([e, n] = Fe(() => t.runWithContext(Cp)),
        e = await e,
        n(),
        e)),
        window.__NUXT__ = t.payload
    }
  })
  , Xp = "$s";
function Fr(...t) {
  const e = typeof t[t.length - 1] == "string" ? t.pop() : void 0;
  typeof t[0] != "string" && t.unshift(e);
  const [n, i] = t;
  if (!n || typeof n != "string")
    throw new TypeError("[nuxt] [useState] key must be a string: " + n);
  if (i !== void 0 && typeof i != "function")
    throw new Error("[nuxt] [useState] init must be a function: " + i);
  const s = Xp + n
    , o = gt()
    , r = zc(o.payload.state, s);
  if (r.value === void 0 && i) {
    const a = i();
    if (St(a))
      return o.payload.state[s] = a,
        a;
    r.value = a
  }
  return r
}
const Zp = {
  path: "/",
  watch: !0,
  decode: t => Di(decodeURIComponent(t)),
  encode: t => encodeURIComponent(typeof t == "string" ? t : JSON.stringify(t))
};
function Qp(t, e) {
  var o;
  const n = {
    ...Zp,
    ...e
  }
    , i = th(n) || {}
    , s = Ut(i[t] ?? ((o = n.default) == null ? void 0 : o.call(n)));
  {
    const r = typeof BroadcastChannel > "u" ? null : new BroadcastChannel(`nuxt:cookies:${t}`);
    Oe() && Hs(() => {
      r == null || r.close()
    }
    );
    const a = () => {
      nh(t, s.value, n),
        r == null || r.postMessage(ft(s.value))
    }
      ;
    let l = !1;
    r && (r.onmessage = c => {
      l = !0,
        s.value = c.data,
        ln(() => {
          l = !1
        }
        )
    }
    ),
      n.watch ? ve(s, () => {
        l || a()
      }
        , {
          deep: n.watch !== "shallow"
        }) : a()
  }
  return s
}
function th(t = {}) {
  return Pp(document.cookie, t)
}
function eh(t, e, n = {}) {
  return e == null ? el(t, e, {
    ...n,
    maxAge: -1
  }) : el(t, e, n)
}
function nh(t, e, n = {}) {
  document.cookie = eh(t, e, n)
}
function ih(t = {}) {
  const e = t.path || window.location.pathname;
  let n = {};
  try {
    n = Di(sessionStorage.getItem("nuxt:reload") || "{}")
  } catch { }
  if (t.force || (n == null ? void 0 : n.path) !== e || (n == null ? void 0 : n.expires) < Date.now()) {
    try {
      sessionStorage.setItem("nuxt:reload", JSON.stringify({
        path: e,
        expires: Date.now() + (t.ttl ?? 1e4)
      }))
    } catch { }
    if (t.persistState)
      try {
        sessionStorage.setItem("nuxt:reload:state", JSON.stringify({
          state: gt().payload.state
        }))
      } catch { }
    window.location.pathname !== e ? window.location.href = e : window.location.reload()
  }
}
const sh = []
  , oh = Ee({
    name: "nuxt:head",
    enforce: "pre",
    setup(t) {
      const e = gp({
        plugins: sh
      });
      vp(() => gt().vueApp._context.provides.usehead),
        t.vueApp.use(e);
      {
        let n = !0;
        const i = async () => {
          n = !1,
            await zu(e)
        }
          ;
        e.hooks.hook("dom:beforeRender", s => {
          s.shouldRender = !n
        }
        ),
          t.hooks.hook("page:start", () => {
            n = !0
          }
          ),
          t.hooks.hook("page:finish", () => {
            t.isHydrating || i()
          }
          ),
          t.hooks.hook("app:error", i),
          t.hooks.hook("app:suspense:resolve", i)
      }
    }
  });
/*!
* vue-router v4.2.4
* (c) 2023 Eduardo San Martin Morote
* @license MIT
*/
const Fn = typeof window < "u";
function rh(t) {
  return t.__esModule || t[Symbol.toStringTag] === "Module"
}
const mt = Object.assign;
function go(t, e) {
  const n = {};
  for (const i in e) {
    const s = e[i];
    n[i] = ye(s) ? s.map(t) : t(s)
  }
  return n
}
const wi = () => { }
  , ye = Array.isArray
  , ah = /\/$/
  , lh = t => t.replace(ah, "");
function vo(t, e, n = "/") {
  let i, s = {}, o = "", r = "";
  const a = e.indexOf("#");
  let l = e.indexOf("?");
  return a < l && a >= 0 && (l = -1),
    l > -1 && (i = e.slice(0, l),
      o = e.slice(l + 1, a > -1 ? a : e.length),
      s = t(o)),
    a > -1 && (i = i || e.slice(0, a),
      r = e.slice(a, e.length)),
    i = fh(i ?? e, n),
  {
    fullPath: i + (o && "?") + o + r,
    path: i,
    query: s,
    hash: r
  }
}
function ch(t, e) {
  const n = e.query ? t(e.query) : "";
  return e.path + (n && "?") + n + (e.hash || "")
}
function il(t, e) {
  return !e || !t.toLowerCase().startsWith(e.toLowerCase()) ? t : t.slice(e.length) || "/"
}
function uh(t, e, n) {
  const i = e.matched.length - 1
    , s = n.matched.length - 1;
  return i > -1 && i === s && Qn(e.matched[i], n.matched[s]) && qu(e.params, n.params) && t(e.query) === t(n.query) && e.hash === n.hash
}
function Qn(t, e) {
  return (t.aliasOf || t) === (e.aliasOf || e)
}
function qu(t, e) {
  if (Object.keys(t).length !== Object.keys(e).length)
    return !1;
  for (const n in t)
    if (!dh(t[n], e[n]))
      return !1;
  return !0
}
function dh(t, e) {
  return ye(t) ? sl(t, e) : ye(e) ? sl(e, t) : t === e
}
function sl(t, e) {
  return ye(e) ? t.length === e.length && t.every((n, i) => n === e[i]) : t.length === 1 && t[0] === e
}
function fh(t, e) {
  if (t.startsWith("/"))
    return t;
  if (!t)
    return e;
  const n = e.split("/")
    , i = t.split("/")
    , s = i[i.length - 1];
  (s === ".." || s === ".") && i.push("");
  let o = n.length - 1, r, a;
  for (r = 0; r < i.length; r++)
    if (a = i[r],
      a !== ".")
      if (a === "..")
        o > 1 && o--;
      else
        break;
  return n.slice(0, o).join("/") + "/" + i.slice(r - (r === i.length ? 1 : 0)).join("/")
}
var Mi;
(function (t) {
  t.pop = "pop",
    t.push = "push"
}
)(Mi || (Mi = {}));
var Ti;
(function (t) {
  t.back = "back",
    t.forward = "forward",
    t.unknown = ""
}
)(Ti || (Ti = {}));
function _h(t) {
  if (!t)
    if (Fn) {
      const e = document.querySelector("base");
      t = e && e.getAttribute("href") || "/",
        t = t.replace(/^\w+:\/\/[^\/]+/, "")
    } else
      t = "/";
  return t[0] !== "/" && t[0] !== "#" && (t = "/" + t),
    lh(t)
}
const bh = /^[^#]+#/;
function mh(t, e) {
  return t.replace(bh, "#") + e
}
function ph(t, e) {
  const n = document.documentElement.getBoundingClientRect()
    , i = t.getBoundingClientRect();
  return {
    behavior: e.behavior,
    left: i.left - n.left - (e.left || 0),
    top: i.top - n.top - (e.top || 0)
  }
}
const Ks = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function hh(t) {
  let e;
  if ("el" in t) {
    const n = t.el
      , i = typeof n == "string" && n.startsWith("#")
      , s = typeof n == "string" ? i ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s)
      return;
    e = ph(s, t)
  } else
    e = t;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(e) : window.scrollTo(e.left != null ? e.left : window.pageXOffset, e.top != null ? e.top : window.pageYOffset)
}
function ol(t, e) {
  return (history.state ? history.state.position - e : -1) + t
}
const Jo = new Map;
function gh(t, e) {
  Jo.set(t, e)
}
function vh(t) {
  const e = Jo.get(t);
  return Jo.delete(t),
    e
}
let yh = () => location.protocol + "//" + location.host;
function $u(t, e) {
  const { pathname: n, search: i, hash: s } = e
    , o = t.indexOf("#");
  if (o > -1) {
    let a = s.includes(t.slice(o)) ? t.slice(o).length : 1
      , l = s.slice(a);
    return l[0] !== "/" && (l = "/" + l),
      il(l, "")
  }
  return il(n, t) + i + s
}
function kh(t, e, n, i) {
  let s = []
    , o = []
    , r = null;
  const a = ({ state: f }) => {
    const b = $u(t, location)
      , w = n.value
      , E = e.value;
    let S = 0;
    if (f) {
      if (n.value = b,
        e.value = f,
        r && r === w) {
        r = null;
        return
      }
      S = E ? f.position - E.position : 0
    } else
      i(b);
    s.forEach(v => {
      v(n.value, w, {
        delta: S,
        type: Mi.pop,
        direction: S ? S > 0 ? Ti.forward : Ti.back : Ti.unknown
      })
    }
    )
  }
    ;
  function l() {
    r = n.value
  }
  function c(f) {
    s.push(f);
    const b = () => {
      const w = s.indexOf(f);
      w > -1 && s.splice(w, 1)
    }
      ;
    return o.push(b),
      b
  }
  function u() {
    const { history: f } = window;
    f.state && f.replaceState(mt({}, f.state, {
      scroll: Ks()
    }), "")
  }
  function d() {
    for (const f of o)
      f();
    o = [],
      window.removeEventListener("popstate", a),
      window.removeEventListener("beforeunload", u)
  }
  return window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", u, {
      passive: !0
    }),
  {
    pauseListeners: l,
    listen: c,
    destroy: d
  }
}
function rl(t, e, n, i = !1, s = !1) {
  return {
    back: t,
    current: e,
    forward: n,
    replaced: i,
    position: window.history.length,
    scroll: s ? Ks() : null
  }
}
function Eh(t) {
  const { history: e, location: n } = window
    , i = {
      value: $u(t, n)
    }
    , s = {
      value: e.state
    };
  s.value || o(i.value, {
    back: null,
    current: i.value,
    forward: null,
    position: e.length - 1,
    replaced: !0,
    scroll: null
  }, !0);
  function o(l, c, u) {
    const d = t.indexOf("#")
      , f = d > -1 ? (n.host && document.querySelector("base") ? t : t.slice(d)) + l : yh() + t + l;
    try {
      e[u ? "replaceState" : "pushState"](c, "", f),
        s.value = c
    } catch (b) {
      console.error(b),
        n[u ? "replace" : "assign"](f)
    }
  }
  function r(l, c) {
    const u = mt({}, e.state, rl(s.value.back, l, s.value.forward, !0), c, {
      position: s.value.position
    });
    o(l, u, !0),
      i.value = l
  }
  function a(l, c) {
    const u = mt({}, s.value, e.state, {
      forward: l,
      scroll: Ks()
    });
    o(u.current, u, !0);
    const d = mt({}, rl(i.value, l, null), {
      position: u.position + 1
    }, c);
    o(l, d, !1),
      i.value = l
  }
  return {
    location: i,
    state: s,
    push: a,
    replace: r
  }
}
function Wu(t) {
  t = _h(t);
  const e = Eh(t)
    , n = kh(t, e.state, e.location, e.replace);
  function i(o, r = !0) {
    r || n.pauseListeners(),
      history.go(o)
  }
  const s = mt({
    location: "",
    base: t,
    go: i,
    createHref: mh.bind(null, t)
  }, e, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => e.location.value
  }),
    Object.defineProperty(s, "state", {
      enumerable: !0,
      get: () => e.state.value
    }),
    s
}
function wh(t) {
  return t = location.host ? t || location.pathname + location.search : "",
    t.includes("#") || (t += "#"),
    Wu(t)
}
function Th(t) {
  return typeof t == "string" || t && typeof t == "object"
}
function Ku(t) {
  return typeof t == "string" || typeof t == "symbol"
}
const Ce = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}
  , Gu = Symbol("");
var al;
(function (t) {
  t[t.aborted = 4] = "aborted",
    t[t.cancelled = 8] = "cancelled",
    t[t.duplicated = 16] = "duplicated"
}
)(al || (al = {}));
function ti(t, e) {
  return mt(new Error, {
    type: t,
    [Gu]: !0
  }, e)
}
function Ne(t, e) {
  return t instanceof Error && Gu in t && (e == null || !!(t.type & e))
}
const ll = "[^/]+?"
  , Ah = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
  }
  , Ch = /[.+*?^${}()[\]/\\]/g;
function Sh(t, e) {
  const n = mt({}, Ah, e)
    , i = [];
  let s = n.start ? "^" : "";
  const o = [];
  for (const c of t) {
    const u = c.length ? [] : [90];
    n.strict && !c.length && (s += "/");
    for (let d = 0; d < c.length; d++) {
      const f = c[d];
      let b = 40 + (n.sensitive ? .25 : 0);
      if (f.type === 0)
        d || (s += "/"),
          s += f.value.replace(Ch, "\\$&"),
          b += 40;
      else if (f.type === 1) {
        const { value: w, repeatable: E, optional: S, regexp: v } = f;
        o.push({
          name: w,
          repeatable: E,
          optional: S
        });
        const _ = v || ll;
        if (_ !== ll) {
          b += 10;
          try {
            new RegExp(`(${_})`)
          } catch (m) {
            throw new Error(`Invalid custom RegExp for param "${w}" (${_}): ` + m.message)
          }
        }
        let g = E ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`;
        d || (g = S && c.length < 2 ? `(?:/${g})` : "/" + g),
          S && (g += "?"),
          s += g,
          b += 20,
          S && (b += -8),
          E && (b += -20),
          _ === ".*" && (b += -50)
      }
      u.push(b)
    }
    i.push(u)
  }
  if (n.strict && n.end) {
    const c = i.length - 1;
    i[c][i[c].length - 1] += .7000000000000001
  }
  n.strict || (s += "/?"),
    n.end ? s += "$" : n.strict && (s += "(?:/|$)");
  const r = new RegExp(s, n.sensitive ? "" : "i");
  function a(c) {
    const u = c.match(r)
      , d = {};
    if (!u)
      return null;
    for (let f = 1; f < u.length; f++) {
      const b = u[f] || ""
        , w = o[f - 1];
      d[w.name] = b && w.repeatable ? b.split("/") : b
    }
    return d
  }
  function l(c) {
    let u = ""
      , d = !1;
    for (const f of t) {
      (!d || !u.endsWith("/")) && (u += "/"),
        d = !1;
      for (const b of f)
        if (b.type === 0)
          u += b.value;
        else if (b.type === 1) {
          const { value: w, repeatable: E, optional: S } = b
            , v = w in c ? c[w] : "";
          if (ye(v) && !E)
            throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);
          const _ = ye(v) ? v.join("/") : v;
          if (!_)
            if (S)
              f.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : d = !0);
            else
              throw new Error(`Missing required param "${w}"`);
          u += _
        }
    }
    return u || "/"
  }
  return {
    re: r,
    score: i,
    keys: o,
    parse: a,
    stringify: l
  }
}
function Ph(t, e) {
  let n = 0;
  for (; n < t.length && n < e.length;) {
    const i = e[n] - t[n];
    if (i)
      return i;
    n++
  }
  return t.length < e.length ? t.length === 1 && t[0] === 40 + 40 ? -1 : 1 : t.length > e.length ? e.length === 1 && e[0] === 40 + 40 ? 1 : -1 : 0
}
function Lh(t, e) {
  let n = 0;
  const i = t.score
    , s = e.score;
  for (; n < i.length && n < s.length;) {
    const o = Ph(i[n], s[n]);
    if (o)
      return o;
    n++
  }
  if (Math.abs(s.length - i.length) === 1) {
    if (cl(i))
      return 1;
    if (cl(s))
      return -1
  }
  return s.length - i.length
}
function cl(t) {
  const e = t[t.length - 1];
  return t.length > 0 && e[e.length - 1] < 0
}
const Rh = {
  type: 0,
  value: ""
}
  , Oh = /[a-zA-Z0-9_]/;
function Ih(t) {
  if (!t)
    return [[]];
  if (t === "/")
    return [[Rh]];
  if (!t.startsWith("/"))
    throw new Error(`Invalid path "${t}"`);
  function e(b) {
    throw new Error(`ERR (${n})/"${c}": ${b}`)
  }
  let n = 0
    , i = n;
  const s = [];
  let o;
  function r() {
    o && s.push(o),
      o = []
  }
  let a = 0, l, c = "", u = "";
  function d() {
    c && (n === 0 ? o.push({
      type: 0,
      value: c
    }) : n === 1 || n === 2 || n === 3 ? (o.length > 1 && (l === "*" || l === "+") && e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),
      o.push({
        type: 1,
        value: c,
        regexp: u,
        repeatable: l === "*" || l === "+",
        optional: l === "*" || l === "?"
      })) : e("Invalid state to consume buffer"),
      c = "")
  }
  function f() {
    c += l
  }
  for (; a < t.length;) {
    if (l = t[a++],
      l === "\\" && n !== 2) {
      i = n,
        n = 4;
      continue
    }
    switch (n) {
      case 0:
        l === "/" ? (c && d(),
          r()) : l === ":" ? (d(),
            n = 1) : f();
        break;
      case 4:
        f(),
          n = i;
        break;
      case 1:
        l === "(" ? n = 2 : Oh.test(l) ? f() : (d(),
          n = 0,
          l !== "*" && l !== "?" && l !== "+" && a--);
        break;
      case 2:
        l === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + l : n = 3 : u += l;
        break;
      case 3:
        d(),
          n = 0,
          l !== "*" && l !== "?" && l !== "+" && a--,
          u = "";
        break;
      default:
        e("Unknown state");
        break
    }
  }
  return n === 2 && e(`Unfinished custom RegExp for param "${c}"`),
    d(),
    r(),
    s
}
function Nh(t, e, n) {
  const i = Sh(Ih(t.path), n)
    , s = mt(i, {
      record: t,
      parent: e,
      children: [],
      alias: []
    });
  return e && !s.record.aliasOf == !e.record.aliasOf && e.children.push(s),
    s
}
function Dh(t, e) {
  const n = []
    , i = new Map;
  e = fl({
    strict: !1,
    end: !0,
    sensitive: !1
  }, e);
  function s(u) {
    return i.get(u)
  }
  function o(u, d, f) {
    const b = !f
      , w = Mh(u);
    w.aliasOf = f && f.record;
    const E = fl(e, u)
      , S = [w];
    if ("alias" in u) {
      const g = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const m of g)
        S.push(mt({}, w, {
          components: f ? f.record.components : w.components,
          path: m,
          aliasOf: f ? f.record : w
        }))
    }
    let v, _;
    for (const g of S) {
      const { path: m } = g;
      if (d && m[0] !== "/") {
        const T = d.record.path
          , A = T[T.length - 1] === "/" ? "" : "/";
        g.path = d.record.path + (m && A + m)
      }
      if (v = Nh(g, d, E),
        f ? f.alias.push(v) : (_ = _ || v,
          _ !== v && _.alias.push(v),
          b && u.name && !dl(v) && r(u.name)),
        w.children) {
        const T = w.children;
        for (let A = 0; A < T.length; A++)
          o(T[A], v, f && f.children[A])
      }
      f = f || v,
        (v.record.components && Object.keys(v.record.components).length || v.record.name || v.record.redirect) && l(v)
    }
    return _ ? () => {
      r(_)
    }
      : wi
  }
  function r(u) {
    if (Ku(u)) {
      const d = i.get(u);
      d && (i.delete(u),
        n.splice(n.indexOf(d), 1),
        d.children.forEach(r),
        d.alias.forEach(r))
    } else {
      const d = n.indexOf(u);
      d > -1 && (n.splice(d, 1),
        u.record.name && i.delete(u.record.name),
        u.children.forEach(r),
        u.alias.forEach(r))
    }
  }
  function a() {
    return n
  }
  function l(u) {
    let d = 0;
    for (; d < n.length && Lh(u, n[d]) >= 0 && (u.record.path !== n[d].record.path || !Yu(u, n[d]));)
      d++;
    n.splice(d, 0, u),
      u.record.name && !dl(u) && i.set(u.record.name, u)
  }
  function c(u, d) {
    let f, b = {}, w, E;
    if ("name" in u && u.name) {
      if (f = i.get(u.name),
        !f)
        throw ti(1, {
          location: u
        });
      E = f.record.name,
        b = mt(ul(d.params, f.keys.filter(_ => !_.optional).map(_ => _.name)), u.params && ul(u.params, f.keys.map(_ => _.name))),
        w = f.stringify(b)
    } else if ("path" in u)
      w = u.path,
        f = n.find(_ => _.re.test(w)),
        f && (b = f.parse(w),
          E = f.record.name);
    else {
      if (f = d.name ? i.get(d.name) : n.find(_ => _.re.test(d.path)),
        !f)
        throw ti(1, {
          location: u,
          currentLocation: d
        });
      E = f.record.name,
        b = mt({}, d.params, u.params),
        w = f.stringify(b)
    }
    const S = [];
    let v = f;
    for (; v;)
      S.unshift(v.record),
        v = v.parent;
    return {
      name: E,
      path: w,
      params: b,
      matched: S,
      meta: xh(S)
    }
  }
  return t.forEach(u => o(u)),
  {
    addRoute: o,
    resolve: c,
    removeRoute: r,
    getRoutes: a,
    getRecordMatcher: s
  }
}
function ul(t, e) {
  const n = {};
  for (const i of e)
    i in t && (n[i] = t[i]);
  return n
}
function Mh(t) {
  return {
    path: t.path,
    redirect: t.redirect,
    name: t.name,
    meta: t.meta || {},
    aliasOf: void 0,
    beforeEnter: t.beforeEnter,
    props: jh(t),
    children: t.children || [],
    instances: {},
    leaveGuards: new Set,
    updateGuards: new Set,
    enterCallbacks: {},
    components: "components" in t ? t.components || null : t.component && {
      default: t.component
    }
  }
}
function jh(t) {
  const e = {}
    , n = t.props || !1;
  if ("component" in t)
    e.default = n;
  else
    for (const i in t.components)
      e[i] = typeof n == "object" ? n[i] : n;
  return e
}
function dl(t) {
  for (; t;) {
    if (t.record.aliasOf)
      return !0;
    t = t.parent
  }
  return !1
}
function xh(t) {
  return t.reduce((e, n) => mt(e, n.meta), {})
}
function fl(t, e) {
  const n = {};
  for (const i in t)
    n[i] = i in e ? e[i] : t[i];
  return n
}
function Yu(t, e) {
  return e.children.some(n => n === t || Yu(t, n))
}
const Ju = /#/g
  , zh = /&/g
  , Fh = /\//g
  , Vh = /=/g
  , Hh = /\?/g
  , Xu = /\+/g
  , Uh = /%5B/g
  , Bh = /%5D/g
  , Zu = /%5E/g
  , qh = /%60/g
  , Qu = /%7B/g
  , $h = /%7C/g
  , td = /%7D/g
  , Wh = /%20/g;
function Vr(t) {
  return encodeURI("" + t).replace($h, "|").replace(Uh, "[").replace(Bh, "]")
}
function Kh(t) {
  return Vr(t).replace(Qu, "{").replace(td, "}").replace(Zu, "^")
}
function Xo(t) {
  return Vr(t).replace(Xu, "%2B").replace(Wh, "+").replace(Ju, "%23").replace(zh, "%26").replace(qh, "`").replace(Qu, "{").replace(td, "}").replace(Zu, "^")
}
function Gh(t) {
  return Xo(t).replace(Vh, "%3D")
}
function Yh(t) {
  return Vr(t).replace(Ju, "%23").replace(Hh, "%3F")
}
function Jh(t) {
  return t == null ? "" : Yh(t).replace(Fh, "%2F")
}
function Es(t) {
  try {
    return decodeURIComponent("" + t)
  } catch { }
  return "" + t
}
function Xh(t) {
  const e = {};
  if (t === "" || t === "?")
    return e;
  const i = (t[0] === "?" ? t.slice(1) : t).split("&");
  for (let s = 0; s < i.length; ++s) {
    const o = i[s].replace(Xu, " ")
      , r = o.indexOf("=")
      , a = Es(r < 0 ? o : o.slice(0, r))
      , l = r < 0 ? null : Es(o.slice(r + 1));
    if (a in e) {
      let c = e[a];
      ye(c) || (c = e[a] = [c]),
        c.push(l)
    } else
      e[a] = l
  }
  return e
}
function _l(t) {
  let e = "";
  for (let n in t) {
    const i = t[n];
    if (n = Gh(n),
      i == null) {
      i !== void 0 && (e += (e.length ? "&" : "") + n);
      continue
    }
    (ye(i) ? i.map(o => o && Xo(o)) : [i && Xo(i)]).forEach(o => {
      o !== void 0 && (e += (e.length ? "&" : "") + n,
        o != null && (e += "=" + o))
    }
    )
  }
  return e
}
function Zh(t) {
  const e = {};
  for (const n in t) {
    const i = t[n];
    i !== void 0 && (e[n] = ye(i) ? i.map(s => s == null ? null : "" + s) : i == null ? i : "" + i)
  }
  return e
}
const Qh = Symbol("")
  , bl = Symbol("")
  , Gs = Symbol("")
  , Hr = Symbol("")
  , Zo = Symbol("");
function _i() {
  let t = [];
  function e(i) {
    return t.push(i),
      () => {
        const s = t.indexOf(i);
        s > -1 && t.splice(s, 1)
      }
  }
  function n() {
    t = []
  }
  return {
    add: e,
    list: () => t.slice(),
    reset: n
  }
}
function Qe(t, e, n, i, s) {
  const o = i && (i.enterCallbacks[s] = i.enterCallbacks[s] || []);
  return () => new Promise((r, a) => {
    const l = d => {
      d === !1 ? a(ti(4, {
        from: n,
        to: e
      })) : d instanceof Error ? a(d) : Th(d) ? a(ti(2, {
        from: e,
        to: d
      })) : (o && i.enterCallbacks[s] === o && typeof d == "function" && o.push(d),
        r())
    }
      , c = t.call(i && i.instances[s], e, n, l);
    let u = Promise.resolve(c);
    t.length < 3 && (u = u.then(l)),
      u.catch(d => a(d))
  }
  )
}
function yo(t, e, n, i) {
  const s = [];
  for (const o of t)
    for (const r in o.components) {
      let a = o.components[r];
      if (!(e !== "beforeRouteEnter" && !o.instances[r]))
        if (t0(a)) {
          const c = (a.__vccOpts || a)[e];
          c && s.push(Qe(c, n, i, o, r))
        } else {
          let l = a();
          s.push(() => l.then(c => {
            if (!c)
              return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${o.path}"`));
            const u = rh(c) ? c.default : c;
            o.components[r] = u;
            const f = (u.__vccOpts || u)[e];
            return f && Qe(f, n, i, o, r)()
          }
          ))
        }
    }
  return s
}
function t0(t) {
  return typeof t == "object" || "displayName" in t || "props" in t || "__vccOpts" in t
}
function ml(t) {
  const e = Ft(Gs)
    , n = Ft(Hr)
    , i = vt(() => e.resolve(ut(t.to)))
    , s = vt(() => {
      const { matched: l } = i.value
        , { length: c } = l
        , u = l[c - 1]
        , d = n.matched;
      if (!u || !d.length)
        return -1;
      const f = d.findIndex(Qn.bind(null, u));
      if (f > -1)
        return f;
      const b = pl(l[c - 2]);
      return c > 1 && pl(u) === b && d[d.length - 1].path !== b ? d.findIndex(Qn.bind(null, l[c - 2])) : f
    }
    )
    , o = vt(() => s.value > -1 && s0(n.params, i.value.params))
    , r = vt(() => s.value > -1 && s.value === n.matched.length - 1 && qu(n.params, i.value.params));
  function a(l = {}) {
    return i0(l) ? e[ut(t.replace) ? "replace" : "push"](ut(t.to)).catch(wi) : Promise.resolve()
  }
  return {
    route: i,
    href: vt(() => i.value.href),
    isActive: o,
    isExactActive: r,
    navigate: a
  }
}
const e0 = de({
  name: "RouterLink",
  compatConfig: {
    MODE: 3
  },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink: ml,
  setup(t, { slots: e }) {
    const n = on(ml(t))
      , { options: i } = Ft(Gs)
      , s = vt(() => ({
        [hl(t.activeClass, i.linkActiveClass, "router-link-active")]: n.isActive,
        [hl(t.exactActiveClass, i.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
      }));
    return () => {
      const o = e.default && e.default(n);
      return t.custom ? o : Wt("a", {
        "aria-current": n.isExactActive ? t.ariaCurrentValue : null,
        href: n.href,
        onClick: n.navigate,
        class: s.value
      }, o)
    }
  }
})
  , n0 = e0;
function i0(t) {
  if (!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) && !t.defaultPrevented && !(t.button !== void 0 && t.button !== 0)) {
    if (t.currentTarget && t.currentTarget.getAttribute) {
      const e = t.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(e))
        return
    }
    return t.preventDefault && t.preventDefault(),
      !0
  }
}
function s0(t, e) {
  for (const n in e) {
    const i = e[n]
      , s = t[n];
    if (typeof i == "string") {
      if (i !== s)
        return !1
    } else if (!ye(s) || s.length !== i.length || i.some((o, r) => o !== s[r]))
      return !1
  }
  return !0
}
function pl(t) {
  return t ? t.aliasOf ? t.aliasOf.path : t.path : ""
}
const hl = (t, e, n) => t ?? e ?? n
  , o0 = de({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
      name: {
        type: String,
        default: "default"
      },
      route: Object
    },
    compatConfig: {
      MODE: 3
    },
    setup(t, { attrs: e, slots: n }) {
      const i = Ft(Zo)
        , s = vt(() => t.route || i.value)
        , o = Ft(bl, 0)
        , r = vt(() => {
          let c = ut(o);
          const { matched: u } = s.value;
          let d;
          for (; (d = u[c]) && !d.components;)
            c++;
          return c
        }
        )
        , a = vt(() => s.value.matched[r.value]);
      Sn(bl, vt(() => r.value + 1)),
        Sn(Qh, a),
        Sn(Zo, s);
      const l = Ut();
      return ve(() => [l.value, a.value, t.name], ([c, u, d], [f, b, w]) => {
        u && (u.instances[d] = c,
          b && b !== u && c && c === f && (u.leaveGuards.size || (u.leaveGuards = b.leaveGuards),
            u.updateGuards.size || (u.updateGuards = b.updateGuards))),
          c && u && (!b || !Qn(u, b) || !f) && (u.enterCallbacks[d] || []).forEach(E => E(c))
      }
        , {
          flush: "post"
        }),
        () => {
          const c = s.value
            , u = t.name
            , d = a.value
            , f = d && d.components[u];
          if (!f)
            return gl(n.default, {
              Component: f,
              route: c
            });
          const b = d.props[u]
            , w = b ? b === !0 ? c.params : typeof b == "function" ? b(c) : b : null
            , S = Wt(f, mt({}, w, e, {
              onVnodeUnmounted: v => {
                v.component.isUnmounted && (d.instances[u] = null)
              }
              ,
              ref: l
            }));
          return gl(n.default, {
            Component: S,
            route: c
          }) || S
        }
    }
  });
function gl(t, e) {
  if (!t)
    return null;
  const n = t(e);
  return n.length === 1 ? n[0] : n
}
const ed = o0;
function r0(t) {
  const e = Dh(t.routes, t)
    , n = t.parseQuery || Xh
    , i = t.stringifyQuery || _l
    , s = t.history
    , o = _i()
    , r = _i()
    , a = _i()
    , l = Gn(Ce);
  let c = Ce;
  Fn && t.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = go.bind(null, j => "" + j)
    , d = go.bind(null, Jh)
    , f = go.bind(null, Es);
  function b(j, G) {
    let U, X;
    return Ku(j) ? (U = e.getRecordMatcher(j),
      X = G) : X = j,
      e.addRoute(X, U)
  }
  function w(j) {
    const G = e.getRecordMatcher(j);
    G && e.removeRoute(G)
  }
  function E() {
    return e.getRoutes().map(j => j.record)
  }
  function S(j) {
    return !!e.getRecordMatcher(j)
  }
  function v(j, G) {
    if (G = mt({}, G || l.value),
      typeof j == "string") {
      const C = vo(n, j, G.path)
        , I = e.resolve({
          path: C.path
        }, G)
        , x = s.createHref(C.fullPath);
      return mt(C, I, {
        params: f(I.params),
        hash: Es(C.hash),
        redirectedFrom: void 0,
        href: x
      })
    }
    let U;
    if ("path" in j)
      U = mt({}, j, {
        path: vo(n, j.path, G.path).path
      });
    else {
      const C = mt({}, j.params);
      for (const I in C)
        C[I] == null && delete C[I];
      U = mt({}, j, {
        params: d(C)
      }),
        G.params = d(G.params)
    }
    const X = e.resolve(U, G)
      , ct = j.hash || "";
    X.params = u(f(X.params));
    const y = ch(i, mt({}, j, {
      hash: Kh(ct),
      path: X.path
    }))
      , k = s.createHref(y);
    return mt({
      fullPath: y,
      hash: ct,
      query: i === _l ? Zh(j.query) : j.query || {}
    }, X, {
      redirectedFrom: void 0,
      href: k
    })
  }
  function _(j) {
    return typeof j == "string" ? vo(n, j, l.value.path) : mt({}, j)
  }
  function g(j, G) {
    if (c !== j)
      return ti(8, {
        from: G,
        to: j
      })
  }
  function m(j) {
    return O(j)
  }
  function T(j) {
    return m(mt(_(j), {
      replace: !0
    }))
  }
  function A(j) {
    const G = j.matched[j.matched.length - 1];
    if (G && G.redirect) {
      const { redirect: U } = G;
      let X = typeof U == "function" ? U(j) : U;
      return typeof X == "string" && (X = X.includes("?") || X.includes("#") ? X = _(X) : {
        path: X
      },
        X.params = {}),
        mt({
          query: j.query,
          hash: j.hash,
          params: "path" in X ? {} : j.params
        }, X)
    }
  }
  function O(j, G) {
    const U = c = v(j)
      , X = l.value
      , ct = j.state
      , y = j.force
      , k = j.replace === !0
      , C = A(U);
    if (C)
      return O(mt(_(C), {
        state: typeof C == "object" ? mt({}, ct, C.state) : ct,
        force: y,
        replace: k
      }), G || U);
    const I = U;
    I.redirectedFrom = G;
    let x;
    return !y && uh(i, X, U) && (x = ti(16, {
      to: I,
      from: X
    }),
      Rt(X, X, !0, !1)),
      (x ? Promise.resolve(x) : W(I, X)).catch(z => Ne(z) ? Ne(z, 2) ? z : se(z) : lt(z, I, X)).then(z => {
        if (z) {
          if (Ne(z, 2))
            return O(mt({
              replace: k
            }, _(z.to), {
              state: typeof z.to == "object" ? mt({}, ct, z.to.state) : ct,
              force: y
            }), G || I)
        } else
          z = F(I, X, !0, k, ct);
        return Q(I, X, z),
          z
      }
      )
  }
  function R(j, G) {
    const U = g(j, G);
    return U ? Promise.reject(U) : Promise.resolve()
  }
  function N(j) {
    const G = fe.values().next().value;
    return G && typeof G.runWithContext == "function" ? G.runWithContext(j) : j()
  }
  function W(j, G) {
    let U;
    const [X, ct, y] = a0(j, G);
    U = yo(X.reverse(), "beforeRouteLeave", j, G);
    for (const C of X)
      C.leaveGuards.forEach(I => {
        U.push(Qe(I, j, G))
      }
      );
    const k = R.bind(null, j, G);
    return U.push(k),
      It(U).then(() => {
        U = [];
        for (const C of o.list())
          U.push(Qe(C, j, G));
        return U.push(k),
          It(U)
      }
      ).then(() => {
        U = yo(ct, "beforeRouteUpdate", j, G);
        for (const C of ct)
          C.updateGuards.forEach(I => {
            U.push(Qe(I, j, G))
          }
          );
        return U.push(k),
          It(U)
      }
      ).then(() => {
        U = [];
        for (const C of y)
          if (C.beforeEnter)
            if (ye(C.beforeEnter))
              for (const I of C.beforeEnter)
                U.push(Qe(I, j, G));
            else
              U.push(Qe(C.beforeEnter, j, G));
        return U.push(k),
          It(U)
      }
      ).then(() => (j.matched.forEach(C => C.enterCallbacks = {}),
        U = yo(y, "beforeRouteEnter", j, G),
        U.push(k),
        It(U))).then(() => {
          U = [];
          for (const C of r.list())
            U.push(Qe(C, j, G));
          return U.push(k),
            It(U)
        }
        ).catch(C => Ne(C, 8) ? C : Promise.reject(C))
  }
  function Q(j, G, U) {
    a.list().forEach(X => N(() => X(j, G, U)))
  }
  function F(j, G, U, X, ct) {
    const y = g(j, G);
    if (y)
      return y;
    const k = G === Ce
      , C = Fn ? history.state : {};
    U && (X || k ? s.replace(j.fullPath, mt({
      scroll: k && C && C.scroll
    }, ct)) : s.push(j.fullPath, ct)),
      l.value = j,
      Rt(j, G, U, k),
      se()
  }
  let J;
  function Y() {
    J || (J = s.listen((j, G, U) => {
      if (!$e.listening)
        return;
      const X = v(j)
        , ct = A(X);
      if (ct) {
        O(mt(ct, {
          replace: !0
        }), X).catch(wi);
        return
      }
      c = X;
      const y = l.value;
      Fn && gh(ol(y.fullPath, U.delta), Ks()),
        W(X, y).catch(k => Ne(k, 12) ? k : Ne(k, 2) ? (O(k.to, X).then(C => {
          Ne(C, 20) && !U.delta && U.type === Mi.pop && s.go(-1, !1)
        }
        ).catch(wi),
          Promise.reject()) : (U.delta && s.go(-U.delta, !1),
            lt(k, X, y))).then(k => {
              k = k || F(X, y, !1),
                k && (U.delta && !Ne(k, 8) ? s.go(-U.delta, !1) : U.type === Mi.pop && Ne(k, 20) && s.go(-1, !1)),
                Q(X, y, k)
            }
            ).catch(wi)
    }
    ))
  }
  let wt = _i(), ot = _i(), at;
  function lt(j, G, U) {
    se(j);
    const X = ot.list();
    return X.length ? X.forEach(ct => ct(j, G, U)) : console.error(j),
      Promise.reject(j)
  }
  function Xt() {
    return at && l.value !== Ce ? Promise.resolve() : new Promise((j, G) => {
      wt.add([j, G])
    }
    )
  }
  function se(j) {
    return at || (at = !j,
      Y(),
      wt.list().forEach(([G, U]) => j ? U(j) : G()),
      wt.reset()),
      j
  }
  function Rt(j, G, U, X) {
    const { scrollBehavior: ct } = t;
    if (!Fn || !ct)
      return Promise.resolve();
    const y = !U && vh(ol(j.fullPath, 0)) || (X || !U) && history.state && history.state.scroll || null;
    return ln().then(() => ct(j, G, y)).then(k => k && hh(k)).catch(k => lt(k, j, G))
  }
  const Ot = j => s.go(j);
  let Te;
  const fe = new Set
    , $e = {
      currentRoute: l,
      listening: !0,
      addRoute: b,
      removeRoute: w,
      hasRoute: S,
      getRoutes: E,
      resolve: v,
      options: t,
      push: m,
      replace: T,
      go: Ot,
      back: () => Ot(-1),
      forward: () => Ot(1),
      beforeEach: o.add,
      beforeResolve: r.add,
      afterEach: a.add,
      onError: ot.add,
      isReady: Xt,
      install(j) {
        const G = this;
        j.component("RouterLink", n0),
          j.component("RouterView", ed),
          j.config.globalProperties.$router = G,
          Object.defineProperty(j.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => ut(l)
          }),
          Fn && !Te && l.value === Ce && (Te = !0,
            m(s.location).catch(ct => { }
            ));
        const U = {};
        for (const ct in Ce)
          Object.defineProperty(U, ct, {
            get: () => l.value[ct],
            enumerable: !0
          });
        j.provide(Gs, G),
          j.provide(Hr, Fi(U)),
          j.provide(Zo, l);
        const X = j.unmount;
        fe.add(j),
          j.unmount = function () {
            fe.delete(j),
              fe.size < 1 && (c = Ce,
                J && J(),
                J = null,
                l.value = Ce,
                Te = !1,
                at = !1),
              X()
          }
      }
    };
  function It(j) {
    return j.reduce((G, U) => G.then(() => N(U)), Promise.resolve())
  }
  return $e
}
function a0(t, e) {
  const n = []
    , i = []
    , s = []
    , o = Math.max(e.matched.length, t.matched.length);
  for (let r = 0; r < o; r++) {
    const a = e.matched[r];
    a && (t.matched.find(c => Qn(c, a)) ? i.push(a) : n.push(a));
    const l = t.matched[r];
    l && (e.matched.find(c => Qn(c, l)) || s.push(l))
  }
  return [n, i, s]
}
function Dv() {
  return Ft(Gs)
}
function l0() {
  return Ft(Hr)
}
const q = {
  layout: "calendar"
}
  , yt = {
    layout: "calendar"
  }
  , kt = {
    layout: "form"
  }
  , Qt = {
    layout: "form"
  }
  , te = {
    layout: "form"
  }
  , st = {
    layout: "calendar"
  }
  , ee = {
    layout: "form"
  }
  , vl = [{
    name: "index",
    path: "/",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./index.f6c12e94.js").then(t => t.i), [], import.meta.url).then(t => t.default || t)
  }, {
    name: "verifyPayment",
    path: "/verifyPayment",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./verifyPayment.0477074d.js"), [], import.meta.url).then(t => t.default || t)
  }, {
    name: (q == null ? void 0 : q.name) ?? "widget-appointment-provider-service",
    path: (q == null ? void 0 : q.path) ?? "/widget/appointment/:provider()/:service()",
    meta: q || {},
    alias: (q == null ? void 0 : q.alias) || [],
    redirect: (q == null ? void 0 : q.redirect) || void 0,
    component: () => Z(() => import("./_service_.52a9f49a.js"), ["./_calendarServices.cf9d17c3.css", "./app.5efdd9e1.css", "./_main.b05b4fee.css", "./TextElement.c058eeb1.css", "./TextBoxListElement.b602ad61.css", "./TextAreaElement.0c70ddc9.css", "./OptionElement.05aaf420.css", "./authorizeNet.a26050d5.css", "./FormComponent.beefc43b.css", "./vue-multiselect.eb3eab67.css", "./isSameOrAfter.3ef96c60.css", "./ghl-payment-element.7d9a1d68.css", "./RazorPayErrorPopup.3d6bd4be.css", "./CalendarPaymentPage.da0c5088.css", "./CalendarComponentv3.dd2a263b.css", "./_service_.4e5a1654.css"], import.meta.url).then(t => t.default || t)
  }, {
    name: "widget-booking-id",
    path: "/widget/booking/:id()",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./_id_.6ecca9bc.js"), ["./TextElement.c058eeb1.css", "./TextBoxListElement.b602ad61.css", "./TextAreaElement.0c70ddc9.css", "./OptionElement.05aaf420.css", "./authorizeNet.a26050d5.css", "./FormComponent.beefc43b.css", "./vue-multiselect.eb3eab67.css", "./app.5efdd9e1.css", "./isSameOrAfter.3ef96c60.css", "./RazorPayErrorPopup.3d6bd4be.css", "./DatePick.6beced99.css", "./CalendarComponent.c28d8de4.css", "./_main.b05b4fee.css", "./_calendarServices.cf9d17c3.css", "./ghl-payment-element.7d9a1d68.css", "./CalendarPaymentPage.da0c5088.css", "./CalendarComponentv3.dd2a263b.css"], import.meta.url).then(t => t.default || t)
  }, {
    name: (yt == null ? void 0 : yt.name) ?? "widget-booking-ids",
    path: (yt == null ? void 0 : yt.path) ?? "/widget/booking/:ids()",
    meta: yt || {},
    alias: (yt == null ? void 0 : yt.alias) || [],
    redirect: (yt == null ? void 0 : yt.redirect) || void 0,
    component: () => Z(() => import("./_ids_.73da48c4.js"), ["./TextElement.c058eeb1.css", "./TextBoxListElement.b602ad61.css", "./TextAreaElement.0c70ddc9.css", "./OptionElement.05aaf420.css", "./authorizeNet.a26050d5.css", "./FormComponent.beefc43b.css", "./vue-multiselect.eb3eab67.css", "./app.5efdd9e1.css", "./isSameOrAfter.3ef96c60.css", "./RazorPayErrorPopup.3d6bd4be.css", "./DatePick.6beced99.css", "./CalendarComponent.c28d8de4.css", "./_main.b05b4fee.css"], import.meta.url).then(t => t.default || t)
  }, {
    name: (kt == null ? void 0 : kt.name) ?? "widget-booking-cancel-booking",
    path: (kt == null ? void 0 : kt.path) ?? "/widget/booking/cancel-booking",
    meta: kt || {},
    alias: (kt == null ? void 0 : kt.alias) || [],
    redirect: (kt == null ? void 0 : kt.redirect) || void 0,
    component: () => Z(() => import("./cancel-booking.8e78af97.js"), ["./cancel-booking.579f2124.css", "./app.5efdd9e1.css", "./_main.b05b4fee.css"], import.meta.url).then(t => t.default || t)
  }, {
    name: "widget-bookings-slug",
    path: "/widget/bookings/:slug()",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./_slug_.0301b69d.js"), ["./TextElement.c058eeb1.css", "./TextBoxListElement.b602ad61.css", "./TextAreaElement.0c70ddc9.css", "./OptionElement.05aaf420.css", "./authorizeNet.a26050d5.css", "./FormComponent.beefc43b.css", "./vue-multiselect.eb3eab67.css", "./app.5efdd9e1.css", "./isSameOrAfter.3ef96c60.css", "./RazorPayErrorPopup.3d6bd4be.css", "./DatePick.6beced99.css", "./CalendarComponent.c28d8de4.css", "./_main.b05b4fee.css", "./_calendarServices.cf9d17c3.css", "./ghl-payment-element.7d9a1d68.css", "./CalendarPaymentPage.da0c5088.css", "./CalendarComponentv3.dd2a263b.css"], import.meta.url).then(t => t.default || t)
  }, {
    name: (Qt == null ? void 0 : Qt.name) ?? "widget-form-id",
    path: (Qt == null ? void 0 : Qt.path) ?? "/widget/form/:id()",
    meta: Qt || {},
    alias: (Qt == null ? void 0 : Qt.alias) || [],
    redirect: (Qt == null ? void 0 : Qt.redirect) || void 0,
    component: () => Z(() => import("./_id_.aba7f24a.js"), ["./TextElement.c058eeb1.css", "./TextBoxListElement.b602ad61.css", "./TextAreaElement.0c70ddc9.css", "./OptionElement.05aaf420.css", "./authorizeNet.a26050d5.css", "./FormComponent.beefc43b.css", "./vue-multiselect.eb3eab67.css", "./app.5efdd9e1.css", "./_id_.cf51b68e.css"], import.meta.url).then(t => t.default || t)
  }, {
    name: "widget-otl-oneTimeSlug",
    path: "/widget/otl/:oneTimeSlug()",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./_oneTimeSlug_.6f6f30de.js"), ["./TextElement.c058eeb1.css", "./TextBoxListElement.b602ad61.css", "./TextAreaElement.0c70ddc9.css", "./OptionElement.05aaf420.css", "./authorizeNet.a26050d5.css", "./FormComponent.beefc43b.css", "./vue-multiselect.eb3eab67.css", "./app.5efdd9e1.css", "./isSameOrAfter.3ef96c60.css", "./RazorPayErrorPopup.3d6bd4be.css", "./DatePick.6beced99.css", "./CalendarComponent.c28d8de4.css", "./_main.b05b4fee.css", "./_calendarServices.cf9d17c3.css", "./ghl-payment-element.7d9a1d68.css", "./CalendarPaymentPage.da0c5088.css", "./CalendarComponentv3.dd2a263b.css"], import.meta.url).then(t => t.default || t)
  }, {
    name: "widget-quiz-result-score",
    path: "/widget/quiz-result/:score()",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./_score_.059b1bfb.js"), ["./QuizResult.d63e2870.css"], import.meta.url).then(t => t.default || t)
  }, {
    name: (te == null ? void 0 : te.name) ?? "widget-quiz-id",
    path: (te == null ? void 0 : te.path) ?? "/widget/quiz/:id()",
    meta: te || {},
    alias: (te == null ? void 0 : te.alias) || [],
    redirect: (te == null ? void 0 : te.redirect) || void 0,
    component: () => Z(() => import("./_id_.acba2a09.js"), ["./_id_.68a9262c.css", "./app.5efdd9e1.css"], import.meta.url).then(t => t.default || t)
  }, {
    name: (st == null ? void 0 : st.name) ?? "widget-service-menus-servicemenu-service",
    path: (st == null ? void 0 : st.path) ?? "/widget/service-menus/:servicemenu()/:service()",
    meta: st || {},
    alias: (st == null ? void 0 : st.alias) || [],
    redirect: (st == null ? void 0 : st.redirect) || void 0,
    component: () => Z(() => import("./_service_.d8f30c88.js").then(t => t.j), ["./_calendarServices.cf9d17c3.css", "./app.5efdd9e1.css", "./_main.b05b4fee.css", "./DatePick.6beced99.css", "./_service_.16d69159.css", "./vue-multiselect.eb3eab67.css"], import.meta.url).then(t => t.default || t)
  }, {
    name: (ee == null ? void 0 : ee.name) ?? "widget-survey-id",
    path: (ee == null ? void 0 : ee.path) ?? "/widget/survey/:id()",
    meta: ee || {},
    alias: (ee == null ? void 0 : ee.alias) || [],
    redirect: (ee == null ? void 0 : ee.redirect) || void 0,
    component: () => Z(() => import("./_id_.9abdeccd.js"), ["./surveyComponent.07e28fbc.css", "./app.5efdd9e1.css"], import.meta.url).then(t => t.default || t)
  }, {
    name: (q == null ? void 0 : q.name) ?? "appointment-service",
    path: (q == null ? void 0 : q.path) ?? "/widget/appointment/service/:service",
    meta: q || {},
    alias: (q == null ? void 0 : q.alias) || [],
    redirect: (q == null ? void 0 : q.redirect) || void 0,
    component: () => Z(() => import("./_service_.52a9f49a.js"), ["./_calendarServices.cf9d17c3.css", "./app.5efdd9e1.css", "./_main.b05b4fee.css", "./TextElement.c058eeb1.css", "./TextBoxListElement.b602ad61.css", "./TextAreaElement.0c70ddc9.css", "./OptionElement.05aaf420.css", "./authorizeNet.a26050d5.css", "./FormComponent.beefc43b.css", "./vue-multiselect.eb3eab67.css", "./isSameOrAfter.3ef96c60.css", "./ghl-payment-element.7d9a1d68.css", "./RazorPayErrorPopup.3d6bd4be.css", "./CalendarPaymentPage.da0c5088.css", "./CalendarComponentv3.dd2a263b.css", "./_service_.4e5a1654.css"], import.meta.url).then(t => t.default || t)
  }, {
    name: (q == null ? void 0 : q.name) ?? "cancel-appointment",
    path: (q == null ? void 0 : q.path) ?? "/widget/appointment/service/:service/cancel",
    meta: q || {},
    alias: (q == null ? void 0 : q.alias) || [],
    redirect: (q == null ? void 0 : q.redirect) || void 0,
    component: () => Z(() => import("./_service_.52a9f49a.js"), ["./_calendarServices.cf9d17c3.css", "./app.5efdd9e1.css", "./_main.b05b4fee.css", "./TextElement.c058eeb1.css", "./TextBoxListElement.b602ad61.css", "./TextAreaElement.0c70ddc9.css", "./OptionElement.05aaf420.css", "./authorizeNet.a26050d5.css", "./FormComponent.beefc43b.css", "./vue-multiselect.eb3eab67.css", "./isSameOrAfter.3ef96c60.css", "./ghl-payment-element.7d9a1d68.css", "./RazorPayErrorPopup.3d6bd4be.css", "./CalendarPaymentPage.da0c5088.css", "./CalendarComponentv3.dd2a263b.css", "./_service_.4e5a1654.css"], import.meta.url).then(t => t.default || t)
  }, {
    name: (kt == null ? void 0 : kt.name) ?? "cancel-booking",
    path: (kt == null ? void 0 : kt.path) ?? "/widget/cancel-booking",
    meta: kt || {},
    alias: (kt == null ? void 0 : kt.alias) || [],
    redirect: (kt == null ? void 0 : kt.redirect) || void 0,
    component: () => Z(() => import("./cancel-booking.8e78af97.js"), ["./cancel-booking.579f2124.css", "./app.5efdd9e1.css", "./_main.b05b4fee.css"], import.meta.url).then(t => t.default || t)
  }, {
    name: (q == null ? void 0 : q.name) ?? "appointment-teams",
    path: (q == null ? void 0 : q.path) ?? "/widget/appointment/:provider",
    meta: q || {},
    alias: (q == null ? void 0 : q.alias) || [],
    redirect: (q == null ? void 0 : q.redirect) || void 0,
    component: () => Z(() => import("./_service_.52a9f49a.js"), ["./_calendarServices.cf9d17c3.css", "./app.5efdd9e1.css", "./_main.b05b4fee.css", "./TextElement.c058eeb1.css", "./TextBoxListElement.b602ad61.css", "./TextAreaElement.0c70ddc9.css", "./OptionElement.05aaf420.css", "./authorizeNet.a26050d5.css", "./FormComponent.beefc43b.css", "./vue-multiselect.eb3eab67.css", "./isSameOrAfter.3ef96c60.css", "./ghl-payment-element.7d9a1d68.css", "./RazorPayErrorPopup.3d6bd4be.css", "./CalendarPaymentPage.da0c5088.css", "./CalendarComponentv3.dd2a263b.css", "./_service_.4e5a1654.css"], import.meta.url).then(t => t.default || t)
  }, {
    name: (q == null ? void 0 : q.name) ?? "appointment-groups",
    path: (q == null ? void 0 : q.path) ?? "/widget/group/:groupId",
    meta: q || {},
    alias: (q == null ? void 0 : q.alias) || [],
    redirect: (q == null ? void 0 : q.redirect) || void 0,
    component: () => Z(() => import("./_service_.52a9f49a.js"), ["./_calendarServices.cf9d17c3.css", "./app.5efdd9e1.css", "./_main.b05b4fee.css", "./TextElement.c058eeb1.css", "./TextBoxListElement.b602ad61.css", "./TextAreaElement.0c70ddc9.css", "./OptionElement.05aaf420.css", "./authorizeNet.a26050d5.css", "./FormComponent.beefc43b.css", "./vue-multiselect.eb3eab67.css", "./isSameOrAfter.3ef96c60.css", "./ghl-payment-element.7d9a1d68.css", "./RazorPayErrorPopup.3d6bd4be.css", "./CalendarPaymentPage.da0c5088.css", "./CalendarComponentv3.dd2a263b.css", "./_service_.4e5a1654.css"], import.meta.url).then(t => t.default || t)
  }, {
    name: (q == null ? void 0 : q.name) ?? "appointment-groups-slug",
    path: (q == null ? void 0 : q.path) ?? "/widget/groups/:groupSlug",
    meta: q || {},
    alias: (q == null ? void 0 : q.alias) || [],
    redirect: (q == null ? void 0 : q.redirect) || void 0,
    component: () => Z(() => import("./_service_.52a9f49a.js"), ["./_calendarServices.cf9d17c3.css", "./app.5efdd9e1.css", "./_main.b05b4fee.css", "./TextElement.c058eeb1.css", "./TextBoxListElement.b602ad61.css", "./TextAreaElement.0c70ddc9.css", "./OptionElement.05aaf420.css", "./authorizeNet.a26050d5.css", "./FormComponent.beefc43b.css", "./vue-multiselect.eb3eab67.css", "./isSameOrAfter.3ef96c60.css", "./ghl-payment-element.7d9a1d68.css", "./RazorPayErrorPopup.3d6bd4be.css", "./CalendarPaymentPage.da0c5088.css", "./CalendarComponentv3.dd2a263b.css", "./_service_.4e5a1654.css"], import.meta.url).then(t => t.default || t)
  }, {
    name: (yt == null ? void 0 : yt.name) ?? "booking-v2-multiple",
    path: (yt == null ? void 0 : yt.path) ?? "/widget/booking/:ids(.*,.*)",
    meta: yt || {},
    alias: (yt == null ? void 0 : yt.alias) || [],
    redirect: (yt == null ? void 0 : yt.redirect) || void 0,
    component: () => Z(() => import("./_ids_.73da48c4.js"), ["./TextElement.c058eeb1.css", "./TextBoxListElement.b602ad61.css", "./TextAreaElement.0c70ddc9.css", "./OptionElement.05aaf420.css", "./authorizeNet.a26050d5.css", "./FormComponent.beefc43b.css", "./vue-multiselect.eb3eab67.css", "./app.5efdd9e1.css", "./isSameOrAfter.3ef96c60.css", "./RazorPayErrorPopup.3d6bd4be.css", "./DatePick.6beced99.css", "./CalendarComponent.c28d8de4.css", "./_main.b05b4fee.css"], import.meta.url).then(t => t.default || t)
  }, {
    name: "booking-v2",
    path: "/widget/booking",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./_id_.6ecca9bc.js"), ["./TextElement.c058eeb1.css", "./TextBoxListElement.b602ad61.css", "./TextAreaElement.0c70ddc9.css", "./OptionElement.05aaf420.css", "./authorizeNet.a26050d5.css", "./FormComponent.beefc43b.css", "./vue-multiselect.eb3eab67.css", "./app.5efdd9e1.css", "./isSameOrAfter.3ef96c60.css", "./RazorPayErrorPopup.3d6bd4be.css", "./DatePick.6beced99.css", "./CalendarComponent.c28d8de4.css", "./_main.b05b4fee.css", "./_calendarServices.cf9d17c3.css", "./ghl-payment-element.7d9a1d68.css", "./CalendarPaymentPage.da0c5088.css", "./CalendarComponentv3.dd2a263b.css"], import.meta.url).then(t => t.default || t)
  }, {
    name: "booking-v2-otl",
    path: "/widget/otl",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./_oneTimeSlug_.6f6f30de.js"), ["./TextElement.c058eeb1.css", "./TextBoxListElement.b602ad61.css", "./TextAreaElement.0c70ddc9.css", "./OptionElement.05aaf420.css", "./authorizeNet.a26050d5.css", "./FormComponent.beefc43b.css", "./vue-multiselect.eb3eab67.css", "./app.5efdd9e1.css", "./isSameOrAfter.3ef96c60.css", "./RazorPayErrorPopup.3d6bd4be.css", "./DatePick.6beced99.css", "./CalendarComponent.c28d8de4.css", "./_main.b05b4fee.css", "./_calendarServices.cf9d17c3.css", "./ghl-payment-element.7d9a1d68.css", "./CalendarPaymentPage.da0c5088.css", "./CalendarComponentv3.dd2a263b.css"], import.meta.url).then(t => t.default || t)
  }, {
    name: "booking-slug",
    path: "/widget/bookings:slug(.*)",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./_slug_.0301b69d.js"), ["./TextElement.c058eeb1.css", "./TextBoxListElement.b602ad61.css", "./TextAreaElement.0c70ddc9.css", "./OptionElement.05aaf420.css", "./authorizeNet.a26050d5.css", "./FormComponent.beefc43b.css", "./vue-multiselect.eb3eab67.css", "./app.5efdd9e1.css", "./isSameOrAfter.3ef96c60.css", "./RazorPayErrorPopup.3d6bd4be.css", "./DatePick.6beced99.css", "./CalendarComponent.c28d8de4.css", "./_main.b05b4fee.css", "./_calendarServices.cf9d17c3.css", "./ghl-payment-element.7d9a1d68.css", "./CalendarPaymentPage.da0c5088.css", "./CalendarComponentv3.dd2a263b.css"], import.meta.url).then(t => t.default || t)
  }, {
    name: "Page",
    path: "/:path",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./index.f6c12e94.js").then(t => t.i), [], import.meta.url).then(t => t.default || t)
  }, {
    name: "Page with blog",
    path: "/:path/b/:slug/",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./index.f6c12e94.js").then(t => t.i), [], import.meta.url).then(t => t.default || t)
  }, {
    name: "Home Page with blog",
    path: "/b/:slug/",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./index.f6c12e94.js").then(t => t.i), [], import.meta.url).then(t => t.default || t)
  }, {
    name: "Blog",
    path: "/v2/preview/:id/b/:slug",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./index.f6c12e94.js").then(t => t.i), [], import.meta.url).then(t => t.default || t)
  }, {
    name: "Page with Category and blog",
    path: "/:path/c/:categorySlug/b/:slug",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./index.f6c12e94.js").then(t => t.i), [], import.meta.url).then(t => t.default || t)
  }, {
    name: "Page with Category",
    path: "/:path/c/:categorySlug",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./index.f6c12e94.js").then(t => t.i), [], import.meta.url).then(t => t.default || t)
  }, {
    name: "Home with Category and blog",
    path: "/c/:categorySlug/b/:slug",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./index.f6c12e94.js").then(t => t.i), [], import.meta.url).then(t => t.default || t)
  }, {
    name: "Home Page with category",
    path: "/c/:categorySlug/",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./index.f6c12e94.js").then(t => t.i), [], import.meta.url).then(t => t.default || t)
  }, {
    name: "Preview with Category and blog",
    path: "/v2/preview/:id/c/:categorySlug/b/:slug",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./index.f6c12e94.js").then(t => t.i), [], import.meta.url).then(t => t.default || t)
  }, {
    name: "Category",
    path: "/v2/preview/:id/c/:categorySlug",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./index.f6c12e94.js").then(t => t.i), [], import.meta.url).then(t => t.default || t)
  }, {
    name: "Category with blog",
    path: "/v2/preview/:id/category/:categorySlug",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./index.f6c12e94.js").then(t => t.i), [], import.meta.url).then(t => t.default || t)
  }, {
    name: "Author",
    path: "/v2/preview/:id/author/:authorSlug",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./index.f6c12e94.js").then(t => t.i), [], import.meta.url).then(t => t.default || t)
  }, {
    name: "Tag",
    path: "/v2/preview/:id/tag/:tagSlug",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./index.f6c12e94.js").then(t => t.i), [], import.meta.url).then(t => t.default || t)
  }, {
    name: "Single blog",
    path: "/v2/preview/:id/post/:blogSlug",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./index.f6c12e94.js").then(t => t.i), [], import.meta.url).then(t => t.default || t)
  }, {
    name: "Page with single blog",
    path: "/post/:blogSlug/",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./index.f6c12e94.js").then(t => t.i), [], import.meta.url).then(t => t.default || t)
  }, {
    name: "Page with product",
    path: "/:path/product/:productId/",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./index.f6c12e94.js").then(t => t.i), [], import.meta.url).then(t => t.default || t)
  }, {
    name: "Home Page with product",
    path: "/product/:productId/",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./index.f6c12e94.js").then(t => t.i), [], import.meta.url).then(t => t.default || t)
  }, {
    name: "verify-payment-default",
    path: "/verify-payment-callback",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./verifyPayment.0477074d.js"), [], import.meta.url).then(t => t.default || t)
  }, {
    name: "Page with collection",
    path: "/:path/collections/:collectionSlug",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./index.f6c12e94.js").then(t => t.i), [], import.meta.url).then(t => t.default || t)
  }, {
    name: "Product List with Collection",
    path: "/collections/:collectionSlug",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./index.f6c12e94.js").then(t => t.i), [], import.meta.url).then(t => t.default || t)
  }, {
    name: "Product",
    path: "/v2/preview/:id/product/:productId",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./index.f6c12e94.js").then(t => t.i), [], import.meta.url).then(t => t.default || t)
  }, {
    name: "Product List with Collection",
    path: "/v2/preview/:id/collections/:collectionSlug",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./index.f6c12e94.js").then(t => t.i), [], import.meta.url).then(t => t.default || t)
  }, {
    name: "preview-verify-payment",
    path: "/v2/preview/:id/verify-payment-callback",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./verifyPayment.0477074d.js"), [], import.meta.url).then(t => t.default || t)
  }, {
    name: "Preview",
    path: "/v2/preview/:id",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./index.f6c12e94.js").then(t => t.i), [], import.meta.url).then(t => t.default || t)
  }, {
    name: (st == null ? void 0 : st.name) ?? "appointment-service-menus-slug",
    path: (st == null ? void 0 : st.path) ?? "/widget/service-menus/:serviceMenuSlug",
    meta: st || {},
    alias: (st == null ? void 0 : st.alias) || [],
    redirect: (st == null ? void 0 : st.redirect) || void 0,
    component: () => Z(() => import("./_service_.d8f30c88.js").then(t => t.j), ["./_calendarServices.cf9d17c3.css", "./app.5efdd9e1.css", "./_main.b05b4fee.css", "./DatePick.6beced99.css", "./_service_.16d69159.css", "./vue-multiselect.eb3eab67.css"], import.meta.url).then(t => t.default || t)
  }, {
    name: (st == null ? void 0 : st.name) ?? "appointment-service-menus",
    path: (st == null ? void 0 : st.path) ?? "/widget/service-menu/:serviceMenuId",
    meta: st || {},
    alias: (st == null ? void 0 : st.alias) || [],
    redirect: (st == null ? void 0 : st.redirect) || void 0,
    component: () => Z(() => import("./_service_.d8f30c88.js").then(t => t.j), ["./_calendarServices.cf9d17c3.css", "./app.5efdd9e1.css", "./_main.b05b4fee.css", "./DatePick.6beced99.css", "./_service_.16d69159.css", "./vue-multiselect.eb3eab67.css"], import.meta.url).then(t => t.default || t)
  }, {
    name: "quiz-result",
    path: "/widget/quiz-result/:score",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./_score_.059b1bfb.js"), ["./QuizResult.d63e2870.css"], import.meta.url).then(t => t.default || t)
  }, {
    name: "Home Page with category v2",
    path: "/:path/category/:categorySlug",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./index.f6c12e94.js").then(t => t.i), [], import.meta.url).then(t => t.default || t)
  }, {
    name: "Home Page with author",
    path: "/:path/author/:authorSlug",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./index.f6c12e94.js").then(t => t.i), [], import.meta.url).then(t => t.default || t)
  }, {
    name: "Home Page with tag",
    path: "/:path/tag/:tagSlug",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => Z(() => import("./index.f6c12e94.js").then(t => t.i), [], import.meta.url).then(t => t.default || t)
  }]
  , c0 = {
    scrollBehavior(t, e, n) {
      var c;
      const i = gt()
        , s = ((c = jn().options) == null ? void 0 : c.scrollBehaviorType) ?? "auto";
      let o = n || void 0;
      const r = typeof t.meta.scrollToTop == "function" ? t.meta.scrollToTop(t, e) : t.meta.scrollToTop;
      if (!o && e && t && r !== !1 && u0(e, t) && (o = {
        left: 0,
        top: 0
      }),
        t.path === e.path) {
        if (e.hash && !t.hash)
          return {
            left: 0,
            top: 0
          };
        if (t.hash)
          return {
            el: t.hash,
            top: yl(t.hash),
            behavior: s
          }
      }
      const a = u => !!(u.meta.pageTransition ?? Wo)
        , l = a(e) && a(t) ? "page:transition:finish" : "page:finish";
      return new Promise(u => {
        i.hooks.hookOnce(l, async () => {
          await ln(),
            t.hash && (o = {
              el: t.hash,
              top: yl(t.hash),
              behavior: s
            }),
            u(o)
        }
        )
      }
      )
    }
  };
function yl(t) {
  try {
    const e = document.querySelector(t);
    if (e)
      return parseFloat(getComputedStyle(e).scrollMarginTop)
  } catch { }
  return 0
}
function u0(t, e) {
  const n = e.matched.every((i, s) => {
    var o, r, a;
    return ((o = i.components) == null ? void 0 : o.default) === ((a = (r = t.matched[s]) == null ? void 0 : r.components) == null ? void 0 : a.default)
  }
  );
  return !!(!n || n && JSON.stringify(t.params) !== JSON.stringify(e.params))
}
const d0 = {}
  , Kt = {
    ...d0,
    ...c0
  }
  , f0 = async t => {
    var l;
    let e, n;
    if (!((l = t.meta) != null && l.validate))
      return;
    const i = gt()
      , s = jn();
    if (([e, n] = Fe(() => Promise.resolve(t.meta.validate(t))),
      e = await e,
      n(),
      e) === !0)
      return;
    const r = Ws({
      statusCode: 404,
      statusMessage: `Page Not Found: ${t.fullPath}`
    })
      , a = s.beforeResolve(c => {
        if (a(),
          c === t) {
          const u = s.afterEach(async () => {
            u(),
              await i.runWithContext(() => wn(r)),
              window.history.pushState({}, "", t.fullPath)
          }
          );
          return !1
        }
      }
      )
  }
  , _0 = (t, e) => {
    try {
      if (t.path === "/favicon.ico")
        return Kp("Not found")
    } catch { }
  }
  , b0 = [f0, _0]
  , Ai = {
    route: () => Z(() => import("./route.48f7e6a2.js"), [], import.meta.url)
  };
function m0(t, e, n) {
  const { pathname: i, search: s, hash: o } = e
    , r = t.indexOf("#");
  if (r > -1) {
    const c = o.includes(t.slice(r)) ? t.slice(r).length : 1;
    let u = o.slice(c);
    return u[0] !== "/" && (u = "/" + u),
      Ba(u, "")
  }
  const a = Ba(i, t)
    , l = !n || Vo(a, n, {
      trailingSlash: !0
    }) ? a : n;
  return l + (l.includes("?") ? "" : s) + o
}
const p0 = Ee({
  name: "nuxt:router",
  enforce: "pre",
  async setup(t) {
    var E, S;
    let e, n, i = we().app.baseURL;
    Kt.hashMode && !i.includes("#") && (i += "#");
    const s = ((E = Kt.history) == null ? void 0 : E.call(Kt, i)) ?? (Kt.hashMode ? wh(i) : Wu(i))
      , o = ((S = Kt.routes) == null ? void 0 : S.call(Kt, vl)) ?? vl;
    let r;
    const a = m0(i, window.location, t.payload.path)
      , l = r0({
        ...Kt,
        scrollBehavior: (v, _, g) => {
          var m;
          if (_ === Ce) {
            r = g;
            return
          }
          return l.options.scrollBehavior = Kt.scrollBehavior,
            (m = Kt.scrollBehavior) == null ? void 0 : m.call(Kt, v, Ce, r || g)
        }
        ,
        history: s,
        routes: o
      });
    t.vueApp.use(l);
    const c = Gn(l.currentRoute.value);
    l.afterEach((v, _) => {
      c.value = _
    }
    ),
      Object.defineProperty(t.vueApp.config.globalProperties, "previousRoute", {
        get: () => c.value
      });
    const u = Gn(l.resolve(a))
      , d = () => {
        u.value = l.currentRoute.value
      }
      ;
    t.hook("page:finish", d),
      l.afterEach((v, _) => {
        var g, m, T, A;
        ((m = (g = v.matched[0]) == null ? void 0 : g.components) == null ? void 0 : m.default) === ((A = (T = _.matched[0]) == null ? void 0 : T.components) == null ? void 0 : A.default) && d()
      }
      );
    const f = {};
    for (const v in u.value)
      Object.defineProperty(f, v, {
        get: () => u.value[v]
      });
    t._route = Fi(f),
      t._middleware = t._middleware || {
        global: [],
        named: {}
      };
    const b = $s();
    try {
      [e, n] = Fe(() => l.isReady()),
        await e,
        n()
    } catch (v) {
      [e, n] = Fe(() => t.runWithContext(() => wn(v))),
        await e,
        n()
    }
    const w = t.payload.state._layout;
    return l.beforeEach(async (v, _) => {
      var g;
      v.meta = on(v.meta),
        t.isHydrating && w && !Rn(v.meta.layout) && (v.meta.layout = w),
        t._processingMiddleware = !0;
      {
        const m = new Set([...b0, ...t._middleware.global]);
        for (const T of v.matched) {
          const A = T.meta.middleware;
          if (A)
            if (Array.isArray(A))
              for (const O of A)
                m.add(O);
            else
              m.add(A)
        }
        for (const T of m) {
          const A = typeof T == "string" ? t._middleware.named[T] || await ((g = Ai[T]) == null ? void 0 : g.call(Ai).then(R => R.default || R)) : T;
          if (!A)
            throw new Error(`Unknown route middleware: '${T}'.`);
          const O = await t.runWithContext(() => A(v, _));
          if (!t.payload.serverRendered && t.isHydrating && (O === !1 || O instanceof Error)) {
            const R = O || Yo({
              statusCode: 404,
              statusMessage: `Page Not Found: ${a}`
            });
            return await t.runWithContext(() => wn(R)),
              !1
          }
          if (O !== !0 && (O || O === !1))
            return O
        }
      }
    }
    ),
      l.onError(() => {
        delete t._processingMiddleware
      }
      ),
      l.afterEach(async (v, _, g) => {
        delete t._processingMiddleware,
          !t.isHydrating && b.value && await t.runWithContext(Gp),
          v.matched.length === 0 && await t.runWithContext(() => wn(Yo({
            statusCode: 404,
            fatal: !1,
            statusMessage: `Page not found: ${v.fullPath}`
          })))
      }
      ),
      t.hooks.hookOnce("app:created", async () => {
        try {
          await l.replace({
            ...l.resolve(a),
            name: void 0,
            force: !0
          }),
            l.options.scrollBehavior = Kt.scrollBehavior
        } catch (v) {
          await t.runWithContext(() => wn(v))
        }
      }
      ),
    {
      provide: {
        router: l
      }
    }
  }
})
  , h0 = Ee({
    name: "nuxt:global-components"
  })
  , Tn = {
    calendar: () => Z(() => import("./calendar.63465035.js"), ["./calendar.634dd608.css"], import.meta.url).then(t => t.default || t),
    error: () => Z(() => import("./error.683a7b1d.js"), ["./error.78a8a017.css"], import.meta.url).then(t => t.default || t),
    form: () => Z(() => import("./form.86ce567a.js"), [], import.meta.url).then(t => t.default || t),
    page: () => Z(() => import("./page.69f17afd.js"), [], import.meta.url).then(t => t.default || t)
  }
  , g0 = Ee({
    name: "nuxt:prefetch",
    setup(t) {
      const e = jn();
      t.hooks.hook("app:mounted", () => {
        e.beforeEach(async n => {
          var s;
          const i = (s = n == null ? void 0 : n.meta) == null ? void 0 : s.layout;
          i && typeof Tn[i] == "function" && await Tn[i]()
        }
        )
      }
      ),
        t.hooks.hook("link:prefetch", n => {
          var r, a, l, c;
          if (Dn(n))
            return;
          const i = e.resolve(n);
          if (!i)
            return;
          const s = (r = i == null ? void 0 : i.meta) == null ? void 0 : r.layout;
          let o = Array.isArray((a = i == null ? void 0 : i.meta) == null ? void 0 : a.middleware) ? (l = i == null ? void 0 : i.meta) == null ? void 0 : l.middleware : [(c = i == null ? void 0 : i.meta) == null ? void 0 : c.middleware];
          o = o.filter(u => typeof u == "string");
          for (const u of o)
            typeof Ai[u] == "function" && Ai[u]();
          s && typeof Tn[s] == "function" && Tn[s]()
        }
        )
    }
  })
  , v0 = "manual"
  , kl = []
  , El = ["/widget/**", "/v2/preview/**", "/verify-payment-callback", "/_nuxt/**", "/api/**"]
  , He = {
    NORMAL: 0,
    WILDCARD: 1,
    PLACEHOLDER: 2
  };
function y0(t = {}) {
  const e = {
    options: t,
    rootNode: nd(),
    staticRoutesMap: {}
  }
    , n = i => t.strictTrailingSlash ? i : i.replace(/\/$/, "") || "/";
  if (t.routes)
    for (const i in t.routes)
      wl(e, n(i), t.routes[i]);
  return {
    ctx: e,
    lookup: i => k0(e, n(i)),
    insert: (i, s) => wl(e, n(i), s),
    remove: i => E0(e, n(i))
  }
}
function k0(t, e) {
  const n = t.staticRoutesMap[e];
  if (n)
    return n.data;
  const i = e.split("/")
    , s = {};
  let o = !1
    , r = null
    , a = t.rootNode
    , l = null;
  for (let c = 0; c < i.length; c++) {
    const u = i[c];
    a.wildcardChildNode !== null && (r = a.wildcardChildNode,
      l = i.slice(c).join("/"));
    const d = a.children.get(u);
    if (d === void 0) {
      if (a && a.placeholderChildren.length > 1) {
        const f = i.length - c;
        a = a.placeholderChildren.find(b => b.maxDepth === f) || null
      } else
        a = a.placeholderChildren[0] || null;
      if (!a)
        break;
      a.paramName && (s[a.paramName] = u),
        o = !0
    } else
      a = d
  }
  return (a === null || a.data === null) && r !== null && (a = r,
    s[a.paramName || "_"] = l,
    o = !0),
    a ? o ? {
      ...a.data,
      params: o ? s : void 0
    } : a.data : null
}
function wl(t, e, n) {
  let i = !0;
  const s = e.split("/");
  let o = t.rootNode
    , r = 0;
  const a = [o];
  for (const l of s) {
    let c;
    if (c = o.children.get(l))
      o = c;
    else {
      const u = w0(l);
      c = nd({
        type: u,
        parent: o
      }),
        o.children.set(l, c),
        u === He.PLACEHOLDER ? (c.paramName = l === "*" ? `_${r++}` : l.slice(1),
          o.placeholderChildren.push(c),
          i = !1) : u === He.WILDCARD && (o.wildcardChildNode = c,
            c.paramName = l.slice(3) || "_",
            i = !1),
        a.push(c),
        o = c
    }
  }
  for (const [l, c] of a.entries())
    c.maxDepth = Math.max(a.length - l, c.maxDepth || 0);
  return o.data = n,
    i === !0 && (t.staticRoutesMap[e] = o),
    o
}
function E0(t, e) {
  let n = !1;
  const i = e.split("/");
  let s = t.rootNode;
  for (const o of i)
    if (s = s.children.get(o),
      !s)
      return n;
  if (s.data) {
    const o = i.at(-1) || "";
    s.data = null,
      Object.keys(s.children).length === 0 && s.parent && (s.parent.children.delete(o),
        s.parent.wildcardChildNode = null,
        s.parent.placeholderChildren = []),
      n = !0
  }
  return n
}
function nd(t = {}) {
  return {
    type: t.type || He.NORMAL,
    maxDepth: 0,
    parent: t.parent || null,
    children: new Map,
    data: t.data || null,
    paramName: t.paramName || null,
    wildcardChildNode: null,
    placeholderChildren: []
  }
}
function w0(t) {
  return t.startsWith("**") ? He.WILDCARD : t[0] === ":" || t === "*" ? He.PLACEHOLDER : He.NORMAL
}
function T0(t) {
  const e = sd("", t.ctx.rootNode);
  return A0(e, t.ctx.options.strictTrailingSlash)
}
function A0(t, e) {
  return {
    ctx: {
      table: t
    },
    matchAll: n => id(n, t, e)
  }
}
function C0() {
  return {
    static: new Map,
    wildcard: new Map,
    dynamic: new Map
  }
}
function id(t, e, n) {
  n !== !0 && t.endsWith("/") && (t = t.slice(0, -1) || "/");
  const i = [];
  for (const [o, r] of Tl(e.wildcard))
    (t === o || t.startsWith(o + "/")) && i.push(r);
  for (const [o, r] of Tl(e.dynamic))
    if (t.startsWith(o + "/")) {
      const a = "/" + t.slice(o.length).split("/").splice(2).join("/");
      i.push(...id(a, r))
    }
  const s = e.static.get(t);
  return s && i.push(s),
    i.filter(Boolean)
}
function Tl(t) {
  return [...t.entries()].sort((e, n) => e[0].length - n[0].length)
}
function sd(t, e) {
  const n = C0();
  function i(s, o) {
    if (s) {
      if (o.type === He.NORMAL && !(s.includes("*") || s.includes(":")))
        o.data && n.static.set(s, o.data);
      else if (o.type === He.WILDCARD)
        n.wildcard.set(s.replace("/**", ""), o.data);
      else if (o.type === He.PLACEHOLDER) {
        const r = sd("", o);
        o.data && r.static.set("/", o.data),
          n.dynamic.set(s.replace(/\/\*|\/:\w+/, ""), r);
        return
      }
    }
    for (const [r, a] of o.children.entries())
      i(`${s}/${r}`.replace("//", "/"), a)
  }
  return i(t, e),
    n
}
function S0(t = {}) {
  const e = t.include || []
    , n = t.exclude || [];
  return function (i) {
    for (const s of [{
      rules: n,
      result: !1
    }, {
      rules: e,
      result: !0
    }]) {
      if (s.rules.filter(a => a instanceof RegExp).some(a => a.test(i)))
        return s.result;
      const r = s.rules.filter(a => typeof a == "string");
      if (r.length > 0) {
        const a = {};
        for (const c of r) {
          if (c === i)
            return s.result;
          a[c] = !0
        }
        if (T0(y0({
          routes: a,
          ...t
        })).matchAll(i).length > 0)
          return !!s.result
      }
    }
    return e.length === 0
  }
}
const P0 = Ee(async t => {
  Fr("nuxt-delay-hydration-mode", () => v0).value === "mount" && t.hooks.hook("app:created", async () => {
    var n, i;
    (n = t.ssrContext) != null && n.noSSR || (i = t.ssrContext) != null && i.url && (kl.length || El.length) && !S0({
      include: kl,
      exclude: El
    })(t.ssrContext.url) || await window._$delayHydration
  }
  )
}
);
/*!
* shared v9.13.1
* (c) 2024 kazuya kawaguchi
* Released under the MIT License.
*/
const ws = typeof window < "u"
  , cn = (t, e = !1) => e ? Symbol.for(t) : Symbol(t)
  , L0 = (t, e, n) => R0({
    l: t,
    k: e,
    s: n
  })
  , R0 = t => JSON.stringify(t).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027")
  , jt = t => typeof t == "number" && isFinite(t)
  , O0 = t => rd(t) === "[object Date]"
  , Ts = t => rd(t) === "[object RegExp]"
  , Ys = t => dt(t) && Object.keys(t).length === 0
  , Lt = Object.assign;
let Al;
const Ur = () => Al || (Al = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Cl(t) {
  return t.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
}
const I0 = Object.prototype.hasOwnProperty;
function As(t, e) {
  return I0.call(t, e)
}
const Pt = Array.isArray
  , pt = t => typeof t == "function"
  , K = t => typeof t == "string"
  , At = t => typeof t == "boolean"
  , N0 = t => typeof t == "symbol"
  , rt = t => t !== null && typeof t == "object"
  , D0 = t => rt(t) && pt(t.then) && pt(t.catch)
  , od = Object.prototype.toString
  , rd = t => od.call(t)
  , dt = t => {
    if (!rt(t))
      return !1;
    const e = Object.getPrototypeOf(t);
    return e === null || e.constructor === Object
  }
  , M0 = t => t == null ? "" : Pt(t) || dt(t) && t.toString === od ? JSON.stringify(t, null, 2) : String(t);
function Br(t, e = "") {
  return t.reduce((n, i, s) => s === 0 ? n + i : n + e + i, "")
}
function Js(t) {
  let e = t;
  return () => ++e
}
function j0(t, e) {
  typeof console < "u" && (console.warn("[intlify] " + t),
    e && console.warn(e.stack))
}
const ns = t => !rt(t) || Pt(t);
function Pn(t, e) {
  if (ns(t) || ns(e))
    throw new Error("Invalid value");
  const n = [{
    src: t,
    des: e
  }];
  for (; n.length;) {
    const { src: i, des: s } = n.pop();
    Object.keys(i).forEach(o => {
      ns(i[o]) || ns(s[o]) ? s[o] = i[o] : n.push({
        src: i[o],
        des: s[o]
      })
    }
    )
  }
}
/*!
* message-compiler v9.13.1
* (c) 2024 kazuya kawaguchi
* Released under the MIT License.
*/
function x0(t, e, n) {
  return {
    line: t,
    column: e,
    offset: n
  }
}
function Cs(t, e, n) {
  const i = {
    start: t,
    end: e
  };
  return n != null && (i.source = n),
    i
}
const ad = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2
};
function z0(t, e, ...n) {
  const s = {
    message: String(t),
    code: t
  };
  return e && (s.location = e),
    s
}
const bt = {
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  UNHANDLED_CODEGEN_NODE_TYPE: 15,
  UNHANDLED_MINIFIER_NODE_TYPE: 16,
  __EXTEND_POINT__: 17
};
function Xs(t, e, n = {}) {
  const { domain: i, messages: s, args: o } = n
    , r = t
    , a = new SyntaxError(String(r));
  return a.code = t,
    e && (a.location = e),
    a.domain = i,
    a
}
function F0(t) {
  throw t
}
const De = " "
  , V0 = "\r"
  , qt = `
`
  , H0 = String.fromCharCode(8232)
  , U0 = String.fromCharCode(8233);
function B0(t) {
  const e = t;
  let n = 0
    , i = 1
    , s = 1
    , o = 0;
  const r = O => e[O] === V0 && e[O + 1] === qt
    , a = O => e[O] === qt
    , l = O => e[O] === U0
    , c = O => e[O] === H0
    , u = O => r(O) || a(O) || l(O) || c(O)
    , d = () => n
    , f = () => i
    , b = () => s
    , w = () => o
    , E = O => r(O) || l(O) || c(O) ? qt : e[O]
    , S = () => E(n)
    , v = () => E(n + o);
  function _() {
    return o = 0,
      u(n) && (i++,
        s = 0),
      r(n) && n++,
      n++,
      s++,
      e[n]
  }
  function g() {
    return r(n + o) && o++,
      o++,
      e[n + o]
  }
  function m() {
    n = 0,
      i = 1,
      s = 1,
      o = 0
  }
  function T(O = 0) {
    o = O
  }
  function A() {
    const O = n + o;
    for (; O !== n;)
      _();
    o = 0
  }
  return {
    index: d,
    line: f,
    column: b,
    peekOffset: w,
    charAt: E,
    currentChar: S,
    currentPeek: v,
    next: _,
    peek: g,
    reset: m,
    resetPeek: T,
    skipToPeek: A
  }
}
const Xe = void 0
  , q0 = "."
  , Sl = "'"
  , $0 = "tokenizer";
function W0(t, e = {}) {
  const n = e.location !== !1
    , i = B0(t)
    , s = () => i.index()
    , o = () => x0(i.line(), i.column(), i.index())
    , r = o()
    , a = s()
    , l = {
      currentType: 14,
      offset: a,
      startLoc: r,
      endLoc: r,
      lastType: 14,
      lastOffset: a,
      lastStartLoc: r,
      lastEndLoc: r,
      braceNest: 0,
      inLinked: !1,
      text: ""
    }
    , c = () => l
    , { onError: u } = e;
  function d(p, h, L, ...M) {
    const B = c();
    if (h.column += L,
      h.offset += L,
      u) {
      const V = n ? Cs(B.startLoc, h) : null
        , P = Xs(p, V, {
          domain: $0,
          args: M
        });
      u(P)
    }
  }
  function f(p, h, L) {
    p.endLoc = o(),
      p.currentType = h;
    const M = {
      type: h
    };
    return n && (M.loc = Cs(p.startLoc, p.endLoc)),
      L != null && (M.value = L),
      M
  }
  const b = p => f(p, 14);
  function w(p, h) {
    return p.currentChar() === h ? (p.next(),
      h) : (d(bt.EXPECTED_TOKEN, o(), 0, h),
        "")
  }
  function E(p) {
    let h = "";
    for (; p.currentPeek() === De || p.currentPeek() === qt;)
      h += p.currentPeek(),
        p.peek();
    return h
  }
  function S(p) {
    const h = E(p);
    return p.skipToPeek(),
      h
  }
  function v(p) {
    if (p === Xe)
      return !1;
    const h = p.charCodeAt(0);
    return h >= 97 && h <= 122 || h >= 65 && h <= 90 || h === 95
  }
  function _(p) {
    if (p === Xe)
      return !1;
    const h = p.charCodeAt(0);
    return h >= 48 && h <= 57
  }
  function g(p, h) {
    const { currentType: L } = h;
    if (L !== 2)
      return !1;
    E(p);
    const M = v(p.currentPeek());
    return p.resetPeek(),
      M
  }
  function m(p, h) {
    const { currentType: L } = h;
    if (L !== 2)
      return !1;
    E(p);
    const M = p.currentPeek() === "-" ? p.peek() : p.currentPeek()
      , B = _(M);
    return p.resetPeek(),
      B
  }
  function T(p, h) {
    const { currentType: L } = h;
    if (L !== 2)
      return !1;
    E(p);
    const M = p.currentPeek() === Sl;
    return p.resetPeek(),
      M
  }
  function A(p, h) {
    const { currentType: L } = h;
    if (L !== 8)
      return !1;
    E(p);
    const M = p.currentPeek() === ".";
    return p.resetPeek(),
      M
  }
  function O(p, h) {
    const { currentType: L } = h;
    if (L !== 9)
      return !1;
    E(p);
    const M = v(p.currentPeek());
    return p.resetPeek(),
      M
  }
  function R(p, h) {
    const { currentType: L } = h;
    if (!(L === 8 || L === 12))
      return !1;
    E(p);
    const M = p.currentPeek() === ":";
    return p.resetPeek(),
      M
  }
  function N(p, h) {
    const { currentType: L } = h;
    if (L !== 10)
      return !1;
    const M = () => {
      const V = p.currentPeek();
      return V === "{" ? v(p.peek()) : V === "@" || V === "%" || V === "|" || V === ":" || V === "." || V === De || !V ? !1 : V === qt ? (p.peek(),
        M()) : F(p, !1)
    }
      , B = M();
    return p.resetPeek(),
      B
  }
  function W(p) {
    E(p);
    const h = p.currentPeek() === "|";
    return p.resetPeek(),
      h
  }
  function Q(p) {
    const h = E(p)
      , L = p.currentPeek() === "%" && p.peek() === "{";
    return p.resetPeek(),
    {
      isModulo: L,
      hasSpace: h.length > 0
    }
  }
  function F(p, h = !0) {
    const L = (B = !1, V = "", P = !1) => {
      const D = p.currentPeek();
      return D === "{" ? V === "%" ? !1 : B : D === "@" || !D ? V === "%" ? !0 : B : D === "%" ? (p.peek(),
        L(B, "%", !0)) : D === "|" ? V === "%" || P ? !0 : !(V === De || V === qt) : D === De ? (p.peek(),
          L(!0, De, P)) : D === qt ? (p.peek(),
            L(!0, qt, P)) : !0
    }
      , M = L();
    return h && p.resetPeek(),
      M
  }
  function J(p, h) {
    const L = p.currentChar();
    return L === Xe ? Xe : h(L) ? (p.next(),
      L) : null
  }
  function Y(p) {
    const h = p.charCodeAt(0);
    return h >= 97 && h <= 122 || h >= 65 && h <= 90 || h >= 48 && h <= 57 || h === 95 || h === 36
  }
  function wt(p) {
    return J(p, Y)
  }
  function ot(p) {
    const h = p.charCodeAt(0);
    return h >= 97 && h <= 122 || h >= 65 && h <= 90 || h >= 48 && h <= 57 || h === 95 || h === 36 || h === 45
  }
  function at(p) {
    return J(p, ot)
  }
  function lt(p) {
    const h = p.charCodeAt(0);
    return h >= 48 && h <= 57
  }
  function Xt(p) {
    return J(p, lt)
  }
  function se(p) {
    const h = p.charCodeAt(0);
    return h >= 48 && h <= 57 || h >= 65 && h <= 70 || h >= 97 && h <= 102
  }
  function Rt(p) {
    return J(p, se)
  }
  function Ot(p) {
    let h = ""
      , L = "";
    for (; h = Xt(p);)
      L += h;
    return L
  }
  function Te(p) {
    S(p);
    const h = p.currentChar();
    return h !== "%" && d(bt.EXPECTED_TOKEN, o(), 0, h),
      p.next(),
      "%"
  }
  function fe(p) {
    let h = "";
    for (; ;) {
      const L = p.currentChar();
      if (L === "{" || L === "}" || L === "@" || L === "|" || !L)
        break;
      if (L === "%")
        if (F(p))
          h += L,
            p.next();
        else
          break;
      else if (L === De || L === qt)
        if (F(p))
          h += L,
            p.next();
        else {
          if (W(p))
            break;
          h += L,
            p.next()
        }
      else
        h += L,
          p.next()
    }
    return h
  }
  function $e(p) {
    S(p);
    let h = ""
      , L = "";
    for (; h = at(p);)
      L += h;
    return p.currentChar() === Xe && d(bt.UNTERMINATED_CLOSING_BRACE, o(), 0),
      L
  }
  function It(p) {
    S(p);
    let h = "";
    return p.currentChar() === "-" ? (p.next(),
      h += `-${Ot(p)}`) : h += Ot(p),
      p.currentChar() === Xe && d(bt.UNTERMINATED_CLOSING_BRACE, o(), 0),
      h
  }
  function j(p) {
    return p !== Sl && p !== qt
  }
  function G(p) {
    S(p),
      w(p, "'");
    let h = ""
      , L = "";
    for (; h = J(p, j);)
      h === "\\" ? L += U(p) : L += h;
    const M = p.currentChar();
    return M === qt || M === Xe ? (d(bt.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0),
      M === qt && (p.next(),
        w(p, "'")),
      L) : (w(p, "'"),
        L)
  }
  function U(p) {
    const h = p.currentChar();
    switch (h) {
      case "\\":
      case "'":
        return p.next(),
          `\\${h}`;
      case "u":
        return X(p, h, 4);
      case "U":
        return X(p, h, 6);
      default:
        return d(bt.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, h),
          ""
    }
  }
  function X(p, h, L) {
    w(p, h);
    let M = "";
    for (let B = 0; B < L; B++) {
      const V = Rt(p);
      if (!V) {
        d(bt.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${h}${M}${p.currentChar()}`);
        break
      }
      M += V
    }
    return `\\${h}${M}`
  }
  function ct(p) {
    return p !== "{" && p !== "}" && p !== De && p !== qt
  }
  function y(p) {
    S(p);
    let h = ""
      , L = "";
    for (; h = J(p, ct);)
      L += h;
    return L
  }
  function k(p) {
    let h = ""
      , L = "";
    for (; h = wt(p);)
      L += h;
    return L
  }
  function C(p) {
    const h = L => {
      const M = p.currentChar();
      return M === "{" || M === "%" || M === "@" || M === "|" || M === "(" || M === ")" || !M || M === De ? L : (L += M,
        p.next(),
        h(L))
    }
      ;
    return h("")
  }
  function I(p) {
    S(p);
    const h = w(p, "|");
    return S(p),
      h
  }
  function x(p, h) {
    let L = null;
    switch (p.currentChar()) {
      case "{":
        return h.braceNest >= 1 && d(bt.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0),
          p.next(),
          L = f(h, 2, "{"),
          S(p),
          h.braceNest++,
          L;
      case "}":
        return h.braceNest > 0 && h.currentType === 2 && d(bt.EMPTY_PLACEHOLDER, o(), 0),
          p.next(),
          L = f(h, 3, "}"),
          h.braceNest--,
          h.braceNest > 0 && S(p),
          h.inLinked && h.braceNest === 0 && (h.inLinked = !1),
          L;
      case "@":
        return h.braceNest > 0 && d(bt.UNTERMINATED_CLOSING_BRACE, o(), 0),
          L = z(p, h) || b(h),
          h.braceNest = 0,
          L;
      default:
        {
          let B = !0
            , V = !0
            , P = !0;
          if (W(p))
            return h.braceNest > 0 && d(bt.UNTERMINATED_CLOSING_BRACE, o(), 0),
              L = f(h, 1, I(p)),
              h.braceNest = 0,
              h.inLinked = !1,
              L;
          if (h.braceNest > 0 && (h.currentType === 5 || h.currentType === 6 || h.currentType === 7))
            return d(bt.UNTERMINATED_CLOSING_BRACE, o(), 0),
              h.braceNest = 0,
              $(p, h);
          if (B = g(p, h))
            return L = f(h, 5, $e(p)),
              S(p),
              L;
          if (V = m(p, h))
            return L = f(h, 6, It(p)),
              S(p),
              L;
          if (P = T(p, h))
            return L = f(h, 7, G(p)),
              S(p),
              L;
          if (!B && !V && !P)
            return L = f(h, 13, y(p)),
              d(bt.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, L.value),
              S(p),
              L;
          break
        }
    }
    return L
  }
  function z(p, h) {
    const { currentType: L } = h;
    let M = null;
    const B = p.currentChar();
    switch ((L === 8 || L === 9 || L === 12 || L === 10) && (B === qt || B === De) && d(bt.INVALID_LINKED_FORMAT, o(), 0),
    B) {
      case "@":
        return p.next(),
          M = f(h, 8, "@"),
          h.inLinked = !0,
          M;
      case ".":
        return S(p),
          p.next(),
          f(h, 9, ".");
      case ":":
        return S(p),
          p.next(),
          f(h, 10, ":");
      default:
        return W(p) ? (M = f(h, 1, I(p)),
          h.braceNest = 0,
          h.inLinked = !1,
          M) : A(p, h) || R(p, h) ? (S(p),
            z(p, h)) : O(p, h) ? (S(p),
              f(h, 12, k(p))) : N(p, h) ? (S(p),
                B === "{" ? x(p, h) || M : f(h, 11, C(p))) : (L === 8 && d(bt.INVALID_LINKED_FORMAT, o(), 0),
                  h.braceNest = 0,
                  h.inLinked = !1,
                  $(p, h))
    }
  }
  function $(p, h) {
    let L = {
      type: 14
    };
    if (h.braceNest > 0)
      return x(p, h) || b(h);
    if (h.inLinked)
      return z(p, h) || b(h);
    switch (p.currentChar()) {
      case "{":
        return x(p, h) || b(h);
      case "}":
        return d(bt.UNBALANCED_CLOSING_BRACE, o(), 0),
          p.next(),
          f(h, 3, "}");
      case "@":
        return z(p, h) || b(h);
      default:
        {
          if (W(p))
            return L = f(h, 1, I(p)),
              h.braceNest = 0,
              h.inLinked = !1,
              L;
          const { isModulo: B, hasSpace: V } = Q(p);
          if (B)
            return V ? f(h, 0, fe(p)) : f(h, 4, Te(p));
          if (F(p))
            return f(h, 0, fe(p));
          break
        }
    }
    return L
  }
  function H() {
    const { currentType: p, offset: h, startLoc: L, endLoc: M } = l;
    return l.lastType = p,
      l.lastOffset = h,
      l.lastStartLoc = L,
      l.lastEndLoc = M,
      l.offset = s(),
      l.startLoc = o(),
      i.currentChar() === Xe ? f(l, 14) : $(i, l)
  }
  return {
    nextToken: H,
    currentOffset: s,
    currentPosition: o,
    context: c
  }
}
const K0 = "parser"
  , G0 = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Y0(t, e, n) {
  switch (t) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default:
      {
        const i = parseInt(e || n, 16);
        return i <= 55295 || i >= 57344 ? String.fromCodePoint(i) : "ï¿½"
      }
  }
}
function J0(t = {}) {
  const e = t.location !== !1
    , { onError: n, onWarn: i } = t;
  function s(g, m, T, A, ...O) {
    const R = g.currentPosition();
    if (R.offset += A,
      R.column += A,
      n) {
      const N = e ? Cs(T, R) : null
        , W = Xs(m, N, {
          domain: K0,
          args: O
        });
      n(W)
    }
  }
  function o(g, m, T, A, ...O) {
    const R = g.currentPosition();
    if (R.offset += A,
      R.column += A,
      i) {
      const N = e ? Cs(T, R) : null;
      i(z0(m, N, O))
    }
  }
  function r(g, m, T) {
    const A = {
      type: g
    };
    return e && (A.start = m,
      A.end = m,
      A.loc = {
        start: T,
        end: T
      }),
      A
  }
  function a(g, m, T, A) {
    A && (g.type = A),
      e && (g.end = m,
        g.loc && (g.loc.end = T))
  }
  function l(g, m) {
    const T = g.context()
      , A = r(3, T.offset, T.startLoc);
    return A.value = m,
      a(A, g.currentOffset(), g.currentPosition()),
      A
  }
  function c(g, m) {
    const T = g.context()
      , { lastOffset: A, lastStartLoc: O } = T
      , R = r(5, A, O);
    return R.index = parseInt(m, 10),
      g.nextToken(),
      a(R, g.currentOffset(), g.currentPosition()),
      R
  }
  function u(g, m, T) {
    const A = g.context()
      , { lastOffset: O, lastStartLoc: R } = A
      , N = r(4, O, R);
    return N.key = m,
      T === !0 && (N.modulo = !0),
      g.nextToken(),
      a(N, g.currentOffset(), g.currentPosition()),
      N
  }
  function d(g, m) {
    const T = g.context()
      , { lastOffset: A, lastStartLoc: O } = T
      , R = r(9, A, O);
    return R.value = m.replace(G0, Y0),
      g.nextToken(),
      a(R, g.currentOffset(), g.currentPosition()),
      R
  }
  function f(g) {
    const m = g.nextToken()
      , T = g.context()
      , { lastOffset: A, lastStartLoc: O } = T
      , R = r(8, A, O);
    return m.type !== 12 ? (s(g, bt.UNEXPECTED_EMPTY_LINKED_MODIFIER, T.lastStartLoc, 0),
      R.value = "",
      a(R, A, O),
    {
      nextConsumeToken: m,
      node: R
    }) : (m.value == null && s(g, bt.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, be(m)),
      R.value = m.value || "",
      a(R, g.currentOffset(), g.currentPosition()),
    {
      node: R
    })
  }
  function b(g, m) {
    const T = g.context()
      , A = r(7, T.offset, T.startLoc);
    return A.value = m,
      a(A, g.currentOffset(), g.currentPosition()),
      A
  }
  function w(g) {
    const m = g.context()
      , T = r(6, m.offset, m.startLoc);
    let A = g.nextToken();
    if (A.type === 9) {
      const O = f(g);
      T.modifier = O.node,
        A = O.nextConsumeToken || g.nextToken()
    }
    switch (A.type !== 10 && s(g, bt.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, be(A)),
    A = g.nextToken(),
    A.type === 2 && (A = g.nextToken()),
    A.type) {
      case 11:
        A.value == null && s(g, bt.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, be(A)),
          T.key = b(g, A.value || "");
        break;
      case 5:
        A.value == null && s(g, bt.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, be(A)),
          T.key = u(g, A.value || "");
        break;
      case 6:
        A.value == null && s(g, bt.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, be(A)),
          T.key = c(g, A.value || "");
        break;
      case 7:
        A.value == null && s(g, bt.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, be(A)),
          T.key = d(g, A.value || "");
        break;
      default:
        {
          s(g, bt.UNEXPECTED_EMPTY_LINKED_KEY, m.lastStartLoc, 0);
          const O = g.context()
            , R = r(7, O.offset, O.startLoc);
          return R.value = "",
            a(R, O.offset, O.startLoc),
            T.key = R,
            a(T, O.offset, O.startLoc),
          {
            nextConsumeToken: A,
            node: T
          }
        }
    }
    return a(T, g.currentOffset(), g.currentPosition()),
    {
      node: T
    }
  }
  function E(g) {
    const m = g.context()
      , T = m.currentType === 1 ? g.currentOffset() : m.offset
      , A = m.currentType === 1 ? m.endLoc : m.startLoc
      , O = r(2, T, A);
    O.items = [];
    let R = null
      , N = null;
    do {
      const F = R || g.nextToken();
      switch (R = null,
      F.type) {
        case 0:
          F.value == null && s(g, bt.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, be(F)),
            O.items.push(l(g, F.value || ""));
          break;
        case 6:
          F.value == null && s(g, bt.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, be(F)),
            O.items.push(c(g, F.value || ""));
          break;
        case 4:
          N = !0;
          break;
        case 5:
          F.value == null && s(g, bt.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, be(F)),
            O.items.push(u(g, F.value || "", !!N)),
            N && (o(g, ad.USE_MODULO_SYNTAX, m.lastStartLoc, 0, be(F)),
              N = null);
          break;
        case 7:
          F.value == null && s(g, bt.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, be(F)),
            O.items.push(d(g, F.value || ""));
          break;
        case 8:
          {
            const J = w(g);
            O.items.push(J.node),
              R = J.nextConsumeToken || null;
            break
          }
      }
    } while (m.currentType !== 14 && m.currentType !== 1);
    const W = m.currentType === 1 ? m.lastOffset : g.currentOffset()
      , Q = m.currentType === 1 ? m.lastEndLoc : g.currentPosition();
    return a(O, W, Q),
      O
  }
  function S(g, m, T, A) {
    const O = g.context();
    let R = A.items.length === 0;
    const N = r(1, m, T);
    N.cases = [],
      N.cases.push(A);
    do {
      const W = E(g);
      R || (R = W.items.length === 0),
        N.cases.push(W)
    } while (O.currentType !== 14);
    return R && s(g, bt.MUST_HAVE_MESSAGES_IN_PLURAL, T, 0),
      a(N, g.currentOffset(), g.currentPosition()),
      N
  }
  function v(g) {
    const m = g.context()
      , { offset: T, startLoc: A } = m
      , O = E(g);
    return m.currentType === 14 ? O : S(g, T, A, O)
  }
  function _(g) {
    const m = W0(g, Lt({}, t))
      , T = m.context()
      , A = r(0, T.offset, T.startLoc);
    return e && A.loc && (A.loc.source = g),
      A.body = v(m),
      t.onCacheKey && (A.cacheKey = t.onCacheKey(g)),
      T.currentType !== 14 && s(m, bt.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, g[T.offset] || ""),
      a(A, m.currentOffset(), m.currentPosition()),
      A
  }
  return {
    parse: _
  }
}
function be(t) {
  if (t.type === 14)
    return "EOF";
  const e = (t.value || "").replace(/\r?\n/gu, "\\n");
  return e.length > 10 ? e.slice(0, 9) + "â€¦" : e
}
function X0(t, e = {}) {
  const n = {
    ast: t,
    helpers: new Set
  };
  return {
    context: () => n,
    helper: o => (n.helpers.add(o),
      o)
  }
}
function Pl(t, e) {
  for (let n = 0; n < t.length; n++)
    qr(t[n], e)
}
function qr(t, e) {
  switch (t.type) {
    case 1:
      Pl(t.cases, e),
        e.helper("plural");
      break;
    case 2:
      Pl(t.items, e);
      break;
    case 6:
      {
        qr(t.key, e),
          e.helper("linked"),
          e.helper("type");
        break
      }
    case 5:
      e.helper("interpolate"),
        e.helper("list");
      break;
    case 4:
      e.helper("interpolate"),
        e.helper("named");
      break
  }
}
function Z0(t, e = {}) {
  const n = X0(t);
  n.helper("normalize"),
    t.body && qr(t.body, n);
  const i = n.context();
  t.helpers = Array.from(i.helpers)
}
function Q0(t) {
  const e = t.body;
  return e.type === 2 ? Ll(e) : e.cases.forEach(n => Ll(n)),
    t
}
function Ll(t) {
  if (t.items.length === 1) {
    const e = t.items[0];
    (e.type === 3 || e.type === 9) && (t.static = e.value,
      delete e.value)
  } else {
    const e = [];
    for (let n = 0; n < t.items.length; n++) {
      const i = t.items[n];
      if (!(i.type === 3 || i.type === 9) || i.value == null)
        break;
      e.push(i.value)
    }
    if (e.length === t.items.length) {
      t.static = Br(e);
      for (let n = 0; n < t.items.length; n++) {
        const i = t.items[n];
        (i.type === 3 || i.type === 9) && delete i.value
      }
    }
  }
}
function Vn(t) {
  switch (t.t = t.type,
  t.type) {
    case 0:
      {
        const e = t;
        Vn(e.body),
          e.b = e.body,
          delete e.body;
        break
      }
    case 1:
      {
        const e = t
          , n = e.cases;
        for (let i = 0; i < n.length; i++)
          Vn(n[i]);
        e.c = n,
          delete e.cases;
        break
      }
    case 2:
      {
        const e = t
          , n = e.items;
        for (let i = 0; i < n.length; i++)
          Vn(n[i]);
        e.i = n,
          delete e.items,
          e.static && (e.s = e.static,
            delete e.static);
        break
      }
    case 3:
    case 9:
    case 8:
    case 7:
      {
        const e = t;
        e.value && (e.v = e.value,
          delete e.value);
        break
      }
    case 6:
      {
        const e = t;
        Vn(e.key),
          e.k = e.key,
          delete e.key,
          e.modifier && (Vn(e.modifier),
            e.m = e.modifier,
            delete e.modifier);
        break
      }
    case 5:
      {
        const e = t;
        e.i = e.index,
          delete e.index;
        break
      }
    case 4:
      {
        const e = t;
        e.k = e.key,
          delete e.key;
        break
      }
  }
  delete t.type
}
function tg(t, e) {
  const { sourceMap: n, filename: i, breakLineCode: s, needIndent: o } = e
    , r = e.location !== !1
    , a = {
      filename: i,
      code: "",
      column: 1,
      line: 1,
      offset: 0,
      map: void 0,
      breakLineCode: s,
      needIndent: o,
      indentLevel: 0
    };
  r && t.loc && (a.source = t.loc.source);
  const l = () => a;
  function c(S, v) {
    a.code += S
  }
  function u(S, v = !0) {
    const _ = v ? s : "";
    c(o ? _ + "  ".repeat(S) : _)
  }
  function d(S = !0) {
    const v = ++a.indentLevel;
    S && u(v)
  }
  function f(S = !0) {
    const v = --a.indentLevel;
    S && u(v)
  }
  function b() {
    u(a.indentLevel)
  }
  return {
    context: l,
    push: c,
    indent: d,
    deindent: f,
    newline: b,
    helper: S => `_${S}`,
    needIndent: () => a.needIndent
  }
}
function eg(t, e) {
  const { helper: n } = t;
  t.push(`${n("linked")}(`),
    ei(t, e.key),
    e.modifier ? (t.push(", "),
      ei(t, e.modifier),
      t.push(", _type")) : t.push(", undefined, _type"),
    t.push(")")
}
function ng(t, e) {
  const { helper: n, needIndent: i } = t;
  t.push(`${n("normalize")}([`),
    t.indent(i());
  const s = e.items.length;
  for (let o = 0; o < s && (ei(t, e.items[o]),
    o !== s - 1); o++)
    t.push(", ");
  t.deindent(i()),
    t.push("])")
}
function ig(t, e) {
  const { helper: n, needIndent: i } = t;
  if (e.cases.length > 1) {
    t.push(`${n("plural")}([`),
      t.indent(i());
    const s = e.cases.length;
    for (let o = 0; o < s && (ei(t, e.cases[o]),
      o !== s - 1); o++)
      t.push(", ");
    t.deindent(i()),
      t.push("])")
  }
}
function sg(t, e) {
  e.body ? ei(t, e.body) : t.push("null")
}
function ei(t, e) {
  const { helper: n } = t;
  switch (e.type) {
    case 0:
      sg(t, e);
      break;
    case 1:
      ig(t, e);
      break;
    case 2:
      ng(t, e);
      break;
    case 6:
      eg(t, e);
      break;
    case 8:
      t.push(JSON.stringify(e.value), e);
      break;
    case 7:
      t.push(JSON.stringify(e.value), e);
      break;
    case 5:
      t.push(`${n("interpolate")}(${n("list")}(${e.index}))`, e);
      break;
    case 4:
      t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`, e);
      break;
    case 9:
      t.push(JSON.stringify(e.value), e);
      break;
    case 3:
      t.push(JSON.stringify(e.value), e);
      break
  }
}
const og = (t, e = {}) => {
  const n = K(e.mode) ? e.mode : "normal"
    , i = K(e.filename) ? e.filename : "message.intl"
    , s = !!e.sourceMap
    , o = e.breakLineCode != null ? e.breakLineCode : n === "arrow" ? ";" : `
`
    , r = e.needIndent ? e.needIndent : n !== "arrow"
    , a = t.helpers || []
    , l = tg(t, {
      mode: n,
      filename: i,
      sourceMap: s,
      breakLineCode: o,
      needIndent: r
    });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"),
    l.indent(r),
    a.length > 0 && (l.push(`const { ${Br(a.map(d => `${d}: _${d}`), ", ")} } = ctx`),
      l.newline()),
    l.push("return "),
    ei(l, t),
    l.deindent(r),
    l.push("}"),
    delete t.helpers;
  const { code: c, map: u } = l.context();
  return {
    ast: t,
    code: c,
    map: u ? u.toJSON() : void 0
  }
}
  ;
function rg(t, e = {}) {
  const n = Lt({}, e)
    , i = !!n.jit
    , s = !!n.minify
    , o = n.optimize == null ? !0 : n.optimize
    , a = J0(n).parse(t);
  return i ? (o && Q0(a),
    s && Vn(a),
  {
    ast: a,
    code: ""
  }) : (Z0(a, n),
    og(a, n))
}
/*!
* core-base v9.13.1
* (c) 2024 kazuya kawaguchi
* Released under the MIT License.
*/
function ag() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Ur().__INTLIFY_PROD_DEVTOOLS__ = !1)
}
const un = [];
un[0] = {
  w: [0],
  i: [3, 0],
  "[": [4],
  o: [7]
};
un[1] = {
  w: [1],
  ".": [2],
  "[": [4],
  o: [7]
};
un[2] = {
  w: [2],
  i: [3, 0],
  0: [3, 0]
};
un[3] = {
  i: [3, 0],
  0: [3, 0],
  w: [1, 1],
  ".": [2, 1],
  "[": [4, 1],
  o: [7, 1]
};
un[4] = {
  "'": [5, 0],
  '"': [6, 0],
  "[": [4, 2],
  "]": [1, 3],
  o: 8,
  l: [4, 0]
};
un[5] = {
  "'": [4, 0],
  o: 8,
  l: [5, 0]
};
un[6] = {
  '"': [4, 0],
  o: 8,
  l: [6, 0]
};
const lg = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function cg(t) {
  return lg.test(t)
}
function ug(t) {
  const e = t.charCodeAt(0)
    , n = t.charCodeAt(t.length - 1);
  return e === n && (e === 34 || e === 39) ? t.slice(1, -1) : t
}
function dg(t) {
  if (t == null)
    return "o";
  switch (t.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return t;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w"
  }
  return "i"
}
function fg(t) {
  const e = t.trim();
  return t.charAt(0) === "0" && isNaN(parseInt(t)) ? !1 : cg(e) ? ug(e) : "*" + e
}
function _g(t) {
  const e = [];
  let n = -1, i = 0, s = 0, o, r, a, l, c, u, d;
  const f = [];
  f[0] = () => {
    r === void 0 ? r = a : r += a
  }
    ,
    f[1] = () => {
      r !== void 0 && (e.push(r),
        r = void 0)
    }
    ,
    f[2] = () => {
      f[0](),
        s++
    }
    ,
    f[3] = () => {
      if (s > 0)
        s--,
          i = 4,
          f[0]();
      else {
        if (s = 0,
          r === void 0 || (r = fg(r),
            r === !1))
          return !1;
        f[1]()
      }
    }
    ;
  function b() {
    const w = t[n + 1];
    if (i === 5 && w === "'" || i === 6 && w === '"')
      return n++,
        a = "\\" + w,
        f[0](),
        !0
  }
  for (; i !== null;)
    if (n++,
      o = t[n],
      !(o === "\\" && b())) {
      if (l = dg(o),
        d = un[i],
        c = d[l] || d.l || 8,
        c === 8 || (i = c[0],
          c[1] !== void 0 && (u = f[c[1]],
            u && (a = o,
              u() === !1))))
        return;
      if (i === 7)
        return e
    }
}
const Rl = new Map;
function bg(t, e) {
  return rt(t) ? t[e] : null
}
function mg(t, e) {
  if (!rt(t))
    return null;
  let n = Rl.get(e);
  if (n || (n = _g(e),
    n && Rl.set(e, n)),
    !n)
    return null;
  const i = n.length;
  let s = t
    , o = 0;
  for (; o < i;) {
    const r = s[n[o]];
    if (r === void 0 || pt(s))
      return null;
    s = r,
      o++
  }
  return s
}
const pg = t => t
  , hg = t => ""
  , gg = "text"
  , vg = t => t.length === 0 ? "" : Br(t)
  , yg = M0;
function Ol(t, e) {
  return t = Math.abs(t),
    e === 2 ? t ? t > 1 ? 1 : 0 : 1 : t ? Math.min(t, 2) : 0
}
function kg(t) {
  const e = jt(t.pluralIndex) ? t.pluralIndex : -1;
  return t.named && (jt(t.named.count) || jt(t.named.n)) ? jt(t.named.count) ? t.named.count : jt(t.named.n) ? t.named.n : e : e
}
function Eg(t, e) {
  e.count || (e.count = t),
    e.n || (e.n = t)
}
function wg(t = {}) {
  const e = t.locale
    , n = kg(t)
    , i = rt(t.pluralRules) && K(e) && pt(t.pluralRules[e]) ? t.pluralRules[e] : Ol
    , s = rt(t.pluralRules) && K(e) && pt(t.pluralRules[e]) ? Ol : void 0
    , o = v => v[i(n, v.length, s)]
    , r = t.list || []
    , a = v => r[v]
    , l = t.named || {};
  jt(t.pluralIndex) && Eg(n, l);
  const c = v => l[v];
  function u(v) {
    const _ = pt(t.messages) ? t.messages(v) : rt(t.messages) ? t.messages[v] : !1;
    return _ || (t.parent ? t.parent.message(v) : hg)
  }
  const d = v => t.modifiers ? t.modifiers[v] : pg
    , f = dt(t.processor) && pt(t.processor.normalize) ? t.processor.normalize : vg
    , b = dt(t.processor) && pt(t.processor.interpolate) ? t.processor.interpolate : yg
    , w = dt(t.processor) && K(t.processor.type) ? t.processor.type : gg
    , S = {
      list: a,
      named: c,
      plural: o,
      linked: (v, ..._) => {
        const [g, m] = _;
        let T = "text"
          , A = "";
        _.length === 1 ? rt(g) ? (A = g.modifier || A,
          T = g.type || T) : K(g) && (A = g || A) : _.length === 2 && (K(g) && (A = g || A),
            K(m) && (T = m || T));
        const O = u(v)(S)
          , R = T === "vnode" && Pt(O) && A ? O[0] : O;
        return A ? d(A)(R, T) : R
      }
      ,
      message: u,
      type: w,
      interpolate: b,
      normalize: f,
      values: Lt({}, r, l)
    };
  return S
}
let ji = null;
function Tg(t) {
  ji = t
}
function Ag(t, e, n) {
  ji && ji.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: t,
    version: e,
    meta: n
  })
}
const Cg = Sg("function:translate");
function Sg(t) {
  return e => ji && ji.emit(t, e)
}
const ld = ad.__EXTEND_POINT__
  , pn = Js(ld)
  , Pg = {
    NOT_FOUND_KEY: ld,
    FALLBACK_TO_TRANSLATE: pn(),
    CANNOT_FORMAT_NUMBER: pn(),
    FALLBACK_TO_NUMBER_FORMAT: pn(),
    CANNOT_FORMAT_DATE: pn(),
    FALLBACK_TO_DATE_FORMAT: pn(),
    EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: pn(),
    __EXTEND_POINT__: pn()
  }
  , cd = bt.__EXTEND_POINT__
  , hn = Js(cd)
  , Le = {
    INVALID_ARGUMENT: cd,
    INVALID_DATE_ARGUMENT: hn(),
    INVALID_ISO_DATE_ARGUMENT: hn(),
    NOT_SUPPORT_NON_STRING_MESSAGE: hn(),
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: hn(),
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: hn(),
    NOT_SUPPORT_LOCALE_TYPE: hn(),
    __EXTEND_POINT__: hn()
  };
function Ve(t) {
  return Xs(t, null, void 0)
}
function $r(t, e) {
  return e.locale != null ? Il(e.locale) : Il(t.locale)
}
let ko;
function Il(t) {
  if (K(t))
    return t;
  if (pt(t)) {
    if (t.resolvedOnce && ko != null)
      return ko;
    if (t.constructor.name === "Function") {
      const e = t();
      if (D0(e))
        throw Ve(Le.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return ko = e
    } else
      throw Ve(Le.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)
  } else
    throw Ve(Le.NOT_SUPPORT_LOCALE_TYPE)
}
function Lg(t, e, n) {
  return [...new Set([n, ...Pt(e) ? e : rt(e) ? Object.keys(e) : K(e) ? [e] : [n]])]
}
function ud(t, e, n) {
  const i = K(n) ? n : Ss
    , s = t;
  s.__localeChainCache || (s.__localeChainCache = new Map);
  let o = s.__localeChainCache.get(i);
  if (!o) {
    o = [];
    let r = [n];
    for (; Pt(r);)
      r = Nl(o, r, e);
    const a = Pt(e) || !dt(e) ? e : e.default ? e.default : null;
    r = K(a) ? [a] : a,
      Pt(r) && Nl(o, r, !1),
      s.__localeChainCache.set(i, o)
  }
  return o
}
function Nl(t, e, n) {
  let i = !0;
  for (let s = 0; s < e.length && At(i); s++) {
    const o = e[s];
    K(o) && (i = Rg(t, e[s], n))
  }
  return i
}
function Rg(t, e, n) {
  let i;
  const s = e.split("-");
  do {
    const o = s.join("-");
    i = Og(t, o, n),
      s.splice(-1, 1)
  } while (s.length && i === !0);
  return i
}
function Og(t, e, n) {
  let i = !1;
  if (!t.includes(e) && (i = !0,
    e)) {
    i = e[e.length - 1] !== "!";
    const s = e.replace(/!/g, "");
    t.push(s),
      (Pt(n) || dt(n)) && n[s] && (i = n[s])
  }
  return i
}
const Ig = "9.13.1"
  , Zs = -1
  , Ss = "en-US"
  , Dl = ""
  , Ml = t => `${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;
function Ng() {
  return {
    upper: (t, e) => e === "text" && K(t) ? t.toUpperCase() : e === "vnode" && rt(t) && "__v_isVNode" in t ? t.children.toUpperCase() : t,
    lower: (t, e) => e === "text" && K(t) ? t.toLowerCase() : e === "vnode" && rt(t) && "__v_isVNode" in t ? t.children.toLowerCase() : t,
    capitalize: (t, e) => e === "text" && K(t) ? Ml(t) : e === "vnode" && rt(t) && "__v_isVNode" in t ? Ml(t.children) : t
  }
}
let dd;
function Dg(t) {
  dd = t
}
let fd;
function Mg(t) {
  fd = t
}
let _d;
function jg(t) {
  _d = t
}
let bd = null;
const xg = t => {
  bd = t
}
  , zg = () => bd;
let md = null;
const jl = t => {
  md = t
}
  , Fg = () => md;
let xl = 0;
function Vg(t = {}) {
  const e = pt(t.onWarn) ? t.onWarn : j0
    , n = K(t.version) ? t.version : Ig
    , i = K(t.locale) || pt(t.locale) ? t.locale : Ss
    , s = pt(i) ? Ss : i
    , o = Pt(t.fallbackLocale) || dt(t.fallbackLocale) || K(t.fallbackLocale) || t.fallbackLocale === !1 ? t.fallbackLocale : s
    , r = dt(t.messages) ? t.messages : {
      [s]: {}
    }
    , a = dt(t.datetimeFormats) ? t.datetimeFormats : {
      [s]: {}
    }
    , l = dt(t.numberFormats) ? t.numberFormats : {
      [s]: {}
    }
    , c = Lt({}, t.modifiers || {}, Ng())
    , u = t.pluralRules || {}
    , d = pt(t.missing) ? t.missing : null
    , f = At(t.missingWarn) || Ts(t.missingWarn) ? t.missingWarn : !0
    , b = At(t.fallbackWarn) || Ts(t.fallbackWarn) ? t.fallbackWarn : !0
    , w = !!t.fallbackFormat
    , E = !!t.unresolving
    , S = pt(t.postTranslation) ? t.postTranslation : null
    , v = dt(t.processor) ? t.processor : null
    , _ = At(t.warnHtmlMessage) ? t.warnHtmlMessage : !0
    , g = !!t.escapeParameter
    , m = pt(t.messageCompiler) ? t.messageCompiler : dd
    , T = pt(t.messageResolver) ? t.messageResolver : fd || bg
    , A = pt(t.localeFallbacker) ? t.localeFallbacker : _d || Lg
    , O = rt(t.fallbackContext) ? t.fallbackContext : void 0
    , R = t
    , N = rt(R.__datetimeFormatters) ? R.__datetimeFormatters : new Map
    , W = rt(R.__numberFormatters) ? R.__numberFormatters : new Map
    , Q = rt(R.__meta) ? R.__meta : {};
  xl++;
  const F = {
    version: n,
    cid: xl,
    locale: i,
    fallbackLocale: o,
    messages: r,
    modifiers: c,
    pluralRules: u,
    missing: d,
    missingWarn: f,
    fallbackWarn: b,
    fallbackFormat: w,
    unresolving: E,
    postTranslation: S,
    processor: v,
    warnHtmlMessage: _,
    escapeParameter: g,
    messageCompiler: m,
    messageResolver: T,
    localeFallbacker: A,
    fallbackContext: O,
    onWarn: e,
    __meta: Q
  };
  return F.datetimeFormats = a,
    F.numberFormats = l,
    F.__datetimeFormatters = N,
    F.__numberFormatters = W,
    __INTLIFY_PROD_DEVTOOLS__ && Ag(F, n, Q),
    F
}
function Wr(t, e, n, i, s) {
  const { missing: o, onWarn: r } = t;
  if (o !== null) {
    const a = o(t, n, e, s);
    return K(a) ? a : e
  } else
    return e
}
function bi(t, e, n) {
  const i = t;
  i.__localeChainCache = new Map,
    t.localeFallbacker(t, n, e)
}
function Hg(t, e) {
  return t === e ? !1 : t.split("-")[0] === e.split("-")[0]
}
function Ug(t, e) {
  const n = e.indexOf(t);
  if (n === -1)
    return !1;
  for (let i = n + 1; i < e.length; i++)
    if (Hg(t, e[i]))
      return !0;
  return !1
}
function Eo(t) {
  return n => Bg(n, t)
}
function Bg(t, e) {
  const n = e.b || e.body;
  if ((n.t || n.type) === 1) {
    const i = n
      , s = i.c || i.cases;
    return t.plural(s.reduce((o, r) => [...o, zl(t, r)], []))
  } else
    return zl(t, n)
}
function zl(t, e) {
  const n = e.s || e.static;
  if (n)
    return t.type === "text" ? n : t.normalize([n]);
  {
    const i = (e.i || e.items).reduce((s, o) => [...s, Qo(t, o)], []);
    return t.normalize(i)
  }
}
function Qo(t, e) {
  const n = e.t || e.type;
  switch (n) {
    case 3:
      {
        const i = e;
        return i.v || i.value
      }
    case 9:
      {
        const i = e;
        return i.v || i.value
      }
    case 4:
      {
        const i = e;
        return t.interpolate(t.named(i.k || i.key))
      }
    case 5:
      {
        const i = e;
        return t.interpolate(t.list(i.i != null ? i.i : i.index))
      }
    case 6:
      {
        const i = e
          , s = i.m || i.modifier;
        return t.linked(Qo(t, i.k || i.key), s ? Qo(t, s) : void 0, t.type)
      }
    case 7:
      {
        const i = e;
        return i.v || i.value
      }
    case 8:
      {
        const i = e;
        return i.v || i.value
      }
    default:
      throw new Error(`unhandled node type on format message part: ${n}`)
  }
}
const qg = t => t;
let is = Object.create(null);
const ni = t => rt(t) && (t.t === 0 || t.type === 0) && ("b" in t || "body" in t);
function $g(t, e = {}) {
  let n = !1;
  const i = e.onError || F0;
  return e.onError = s => {
    n = !0,
      i(s)
  }
    ,
  {
    ...rg(t, e),
    detectError: n
  }
}
function Wg(t, e) {
  if (K(t)) {
    At(e.warnHtmlMessage) && e.warnHtmlMessage;
    const i = (e.onCacheKey || qg)(t)
      , s = is[i];
    if (s)
      return s;
    const { ast: o, detectError: r } = $g(t, {
      ...e,
      location: !1,
      jit: !0
    })
      , a = Eo(o);
    return r ? a : is[i] = a
  } else {
    const n = t.cacheKey;
    if (n) {
      const i = is[n];
      return i || (is[n] = Eo(t))
    } else
      return Eo(t)
  }
}
const Fl = () => ""
  , ae = t => pt(t);
function Vl(t, ...e) {
  const { fallbackFormat: n, postTranslation: i, unresolving: s, messageCompiler: o, fallbackLocale: r, messages: a } = t
    , [l, c] = tr(...e)
    , u = At(c.missingWarn) ? c.missingWarn : t.missingWarn
    , d = At(c.fallbackWarn) ? c.fallbackWarn : t.fallbackWarn
    , f = At(c.escapeParameter) ? c.escapeParameter : t.escapeParameter
    , b = !!c.resolvedMessage
    , w = K(c.default) || At(c.default) ? At(c.default) ? o ? l : () => l : c.default : n ? o ? l : () => l : ""
    , E = n || w !== ""
    , S = $r(t, c);
  f && Kg(c);
  let [v, _, g] = b ? [l, S, a[S] || {}] : pd(t, l, S, r, d, u)
    , m = v
    , T = l;
  if (!b && !(K(m) || ni(m) || ae(m)) && E && (m = w,
    T = m),
    !b && (!(K(m) || ni(m) || ae(m)) || !K(_)))
    return s ? Zs : l;
  let A = !1;
  const O = () => {
    A = !0
  }
    , R = ae(m) ? m : hd(t, l, _, m, T, O);
  if (A)
    return m;
  const N = Jg(t, _, g, c)
    , W = wg(N)
    , Q = Gg(t, R, W)
    , F = i ? i(Q, l) : Q;
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const J = {
      timestamp: Date.now(),
      key: K(l) ? l : ae(m) ? m.key : "",
      locale: _ || (ae(m) ? m.locale : ""),
      format: K(m) ? m : ae(m) ? m.source : "",
      message: F
    };
    J.meta = Lt({}, t.__meta, zg() || {}),
      Cg(J)
  }
  return F
}
function Kg(t) {
  Pt(t.list) ? t.list = t.list.map(e => K(e) ? Cl(e) : e) : rt(t.named) && Object.keys(t.named).forEach(e => {
    K(t.named[e]) && (t.named[e] = Cl(t.named[e]))
  }
  )
}
function pd(t, e, n, i, s, o) {
  const { messages: r, onWarn: a, messageResolver: l, localeFallbacker: c } = t
    , u = c(t, i, n);
  let d = {}, f, b = null;
  const w = "translate";
  for (let E = 0; E < u.length && (f = u[E],
    d = r[f] || {},
    (b = l(d, e)) === null && (b = d[e]),
    !(K(b) || ni(b) || ae(b))); E++)
    if (!Ug(f, u)) {
      const S = Wr(t, e, f, o, w);
      S !== e && (b = S)
    }
  return [b, f, d]
}
function hd(t, e, n, i, s, o) {
  const { messageCompiler: r, warnHtmlMessage: a } = t;
  if (ae(i)) {
    const c = i;
    return c.locale = c.locale || n,
      c.key = c.key || e,
      c
  }
  if (r == null) {
    const c = () => i;
    return c.locale = n,
      c.key = e,
      c
  }
  const l = r(i, Yg(t, n, s, i, a, o));
  return l.locale = n,
    l.key = e,
    l.source = i,
    l
}
function Gg(t, e, n) {
  return e(n)
}
function tr(...t) {
  const [e, n, i] = t
    , s = {};
  if (!K(e) && !jt(e) && !ae(e) && !ni(e))
    throw Ve(Le.INVALID_ARGUMENT);
  const o = jt(e) ? String(e) : (ae(e),
    e);
  return jt(n) ? s.plural = n : K(n) ? s.default = n : dt(n) && !Ys(n) ? s.named = n : Pt(n) && (s.list = n),
    jt(i) ? s.plural = i : K(i) ? s.default = i : dt(i) && Lt(s, i),
    [o, s]
}
function Yg(t, e, n, i, s, o) {
  return {
    locale: e,
    key: n,
    warnHtmlMessage: s,
    onError: r => {
      throw o && o(r),
      r
    }
    ,
    onCacheKey: r => L0(e, n, r)
  }
}
function Jg(t, e, n, i) {
  const { modifiers: s, pluralRules: o, messageResolver: r, fallbackLocale: a, fallbackWarn: l, missingWarn: c, fallbackContext: u } = t
    , f = {
      locale: e,
      modifiers: s,
      pluralRules: o,
      messages: b => {
        let w = r(n, b);
        if (w == null && u) {
          const [, , E] = pd(u, b, e, a, l, c);
          w = r(E, b)
        }
        if (K(w) || ni(w)) {
          let E = !1;
          const v = hd(t, b, e, w, b, () => {
            E = !0
          }
          );
          return E ? Fl : v
        } else
          return ae(w) ? w : Fl
      }
    };
  return t.processor && (f.processor = t.processor),
    i.list && (f.list = i.list),
    i.named && (f.named = i.named),
    jt(i.plural) && (f.pluralIndex = i.plural),
    f
}
function Hl(t, ...e) {
  const { datetimeFormats: n, unresolving: i, fallbackLocale: s, onWarn: o, localeFallbacker: r } = t
    , { __datetimeFormatters: a } = t
    , [l, c, u, d] = er(...e)
    , f = At(u.missingWarn) ? u.missingWarn : t.missingWarn;
  At(u.fallbackWarn) ? u.fallbackWarn : t.fallbackWarn;
  const b = !!u.part
    , w = $r(t, u)
    , E = r(t, s, w);
  if (!K(l) || l === "")
    return new Intl.DateTimeFormat(w, d).format(c);
  let S = {}, v, _ = null;
  const g = "datetime format";
  for (let A = 0; A < E.length && (v = E[A],
    S = n[v] || {},
    _ = S[l],
    !dt(_)); A++)
    Wr(t, l, v, f, g);
  if (!dt(_) || !K(v))
    return i ? Zs : l;
  let m = `${v}__${l}`;
  Ys(d) || (m = `${m}__${JSON.stringify(d)}`);
  let T = a.get(m);
  return T || (T = new Intl.DateTimeFormat(v, Lt({}, _, d)),
    a.set(m, T)),
    b ? T.formatToParts(c) : T.format(c)
}
const gd = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];
function er(...t) {
  const [e, n, i, s] = t
    , o = {};
  let r = {}, a;
  if (K(e)) {
    const l = e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw Ve(Le.INVALID_ISO_DATE_ARGUMENT);
    const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    a = new Date(c);
    try {
      a.toISOString()
    } catch {
      throw Ve(Le.INVALID_ISO_DATE_ARGUMENT)
    }
  } else if (O0(e)) {
    if (isNaN(e.getTime()))
      throw Ve(Le.INVALID_DATE_ARGUMENT);
    a = e
  } else if (jt(e))
    a = e;
  else
    throw Ve(Le.INVALID_ARGUMENT);
  return K(n) ? o.key = n : dt(n) && Object.keys(n).forEach(l => {
    gd.includes(l) ? r[l] = n[l] : o[l] = n[l]
  }
  ),
    K(i) ? o.locale = i : dt(i) && (r = i),
    dt(s) && (r = s),
    [o.key || "", a, o, r]
}
function Ul(t, e, n) {
  const i = t;
  for (const s in n) {
    const o = `${e}__${s}`;
    i.__datetimeFormatters.has(o) && i.__datetimeFormatters.delete(o)
  }
}
function Bl(t, ...e) {
  const { numberFormats: n, unresolving: i, fallbackLocale: s, onWarn: o, localeFallbacker: r } = t
    , { __numberFormatters: a } = t
    , [l, c, u, d] = nr(...e)
    , f = At(u.missingWarn) ? u.missingWarn : t.missingWarn;
  At(u.fallbackWarn) ? u.fallbackWarn : t.fallbackWarn;
  const b = !!u.part
    , w = $r(t, u)
    , E = r(t, s, w);
  if (!K(l) || l === "")
    return new Intl.NumberFormat(w, d).format(c);
  let S = {}, v, _ = null;
  const g = "number format";
  for (let A = 0; A < E.length && (v = E[A],
    S = n[v] || {},
    _ = S[l],
    !dt(_)); A++)
    Wr(t, l, v, f, g);
  if (!dt(_) || !K(v))
    return i ? Zs : l;
  let m = `${v}__${l}`;
  Ys(d) || (m = `${m}__${JSON.stringify(d)}`);
  let T = a.get(m);
  return T || (T = new Intl.NumberFormat(v, Lt({}, _, d)),
    a.set(m, T)),
    b ? T.formatToParts(c) : T.format(c)
}
const vd = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];
function nr(...t) {
  const [e, n, i, s] = t
    , o = {};
  let r = {};
  if (!jt(e))
    throw Ve(Le.INVALID_ARGUMENT);
  const a = e;
  return K(n) ? o.key = n : dt(n) && Object.keys(n).forEach(l => {
    vd.includes(l) ? r[l] = n[l] : o[l] = n[l]
  }
  ),
    K(i) ? o.locale = i : dt(i) && (r = i),
    dt(s) && (r = s),
    [o.key || "", a, o, r]
}
function ql(t, e, n) {
  const i = t;
  for (const s in n) {
    const o = `${e}__${s}`;
    i.__numberFormatters.has(o) && i.__numberFormatters.delete(o)
  }
}
ag();
/*!
* vue-i18n v9.13.1
* (c) 2024 kazuya kawaguchi
* Released under the MIT License.
*/
const Xg = "9.13.1";
function Zg() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Ur().__INTLIFY_PROD_DEVTOOLS__ = !1)
}
const yd = Pg.__EXTEND_POINT__
  , Me = Js(yd);
Me(),
  Me(),
  Me(),
  Me(),
  Me(),
  Me(),
  Me(),
  Me(),
  Me();
const kd = Le.__EXTEND_POINT__
  , Gt = Js(kd)
  , ue = {
    UNEXPECTED_RETURN_TYPE: kd,
    INVALID_ARGUMENT: Gt(),
    MUST_BE_CALL_SETUP_TOP: Gt(),
    NOT_INSTALLED: Gt(),
    NOT_AVAILABLE_IN_LEGACY_MODE: Gt(),
    REQUIRED_VALUE: Gt(),
    INVALID_VALUE: Gt(),
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Gt(),
    NOT_INSTALLED_WITH_PROVIDE: Gt(),
    UNEXPECTED_ERROR: Gt(),
    NOT_COMPATIBLE_LEGACY_VUE_I18N: Gt(),
    BRIDGE_SUPPORT_VUE_2_ONLY: Gt(),
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Gt(),
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Gt(),
    __EXTEND_POINT__: Gt()
  };
function ke(t, ...e) {
  return Xs(t, null, void 0)
}
const ir = cn("__translateVNode")
  , sr = cn("__datetimeParts")
  , or = cn("__numberParts")
  , Qg = cn("__setPluralRules")
  , t2 = cn("__injectWithOption")
  , rr = cn("__dispose");
function xi(t) {
  if (!rt(t))
    return t;
  for (const e in t)
    if (As(t, e))
      if (!e.includes("."))
        rt(t[e]) && xi(t[e]);
      else {
        const n = e.split(".")
          , i = n.length - 1;
        let s = t
          , o = !1;
        for (let r = 0; r < i; r++) {
          if (n[r] in s || (s[n[r]] = {}),
            !rt(s[n[r]])) {
            o = !0;
            break
          }
          s = s[n[r]]
        }
        o || (s[n[i]] = t[e],
          delete t[e]),
          rt(s[n[i]]) && xi(s[n[i]])
      }
  return t
}
function Ed(t, e) {
  const { messages: n, __i18n: i, messageResolver: s, flatJson: o } = e
    , r = dt(n) ? n : Pt(i) ? {} : {
      [t]: {}
    };
  if (Pt(i) && i.forEach(a => {
    if ("locale" in a && "resource" in a) {
      const { locale: l, resource: c } = a;
      l ? (r[l] = r[l] || {},
        Pn(c, r[l])) : Pn(c, r)
    } else
      K(a) && Pn(JSON.parse(a), r)
  }
  ),
    s == null && o)
    for (const a in r)
      As(r, a) && xi(r[a]);
  return r
}
function wd(t) {
  return t.type
}
function e2(t, e, n) {
  let i = rt(e.messages) ? e.messages : {};
  "__i18nGlobal" in n && (i = Ed(t.locale.value, {
    messages: i,
    __i18n: n.__i18nGlobal
  }));
  const s = Object.keys(i);
  s.length && s.forEach(o => {
    t.mergeLocaleMessage(o, i[o])
  }
  );
  {
    if (rt(e.datetimeFormats)) {
      const o = Object.keys(e.datetimeFormats);
      o.length && o.forEach(r => {
        t.mergeDateTimeFormat(r, e.datetimeFormats[r])
      }
      )
    }
    if (rt(e.numberFormats)) {
      const o = Object.keys(e.numberFormats);
      o.length && o.forEach(r => {
        t.mergeNumberFormat(r, e.numberFormats[r])
      }
      )
    }
  }
}
function $l(t) {
  return Tt(On, null, t, 0)
}
const Wl = "__INTLIFY_META__"
  , Kl = () => []
  , n2 = () => !1;
let Gl = 0;
function Yl(t) {
  return (e, n, i, s) => t(n, i, Oe() || void 0, s)
}
const i2 = () => {
  const t = Oe();
  let e = null;
  return t && (e = wd(t)[Wl]) ? {
    [Wl]: e
  } : null
}
  ;
function Td(t = {}, e) {
  const { __root: n, __injectWithOption: i } = t
    , s = n === void 0
    , o = t.flatJson
    , r = ws ? Ut : Gn
    , a = !!t.translateExistCompatible;
  let l = At(t.inheritLocale) ? t.inheritLocale : !0;
  const c = r(n && l ? n.locale.value : K(t.locale) ? t.locale : Ss)
    , u = r(n && l ? n.fallbackLocale.value : K(t.fallbackLocale) || Pt(t.fallbackLocale) || dt(t.fallbackLocale) || t.fallbackLocale === !1 ? t.fallbackLocale : c.value)
    , d = r(Ed(c.value, t))
    , f = r(dt(t.datetimeFormats) ? t.datetimeFormats : {
      [c.value]: {}
    })
    , b = r(dt(t.numberFormats) ? t.numberFormats : {
      [c.value]: {}
    });
  let w = n ? n.missingWarn : At(t.missingWarn) || Ts(t.missingWarn) ? t.missingWarn : !0
    , E = n ? n.fallbackWarn : At(t.fallbackWarn) || Ts(t.fallbackWarn) ? t.fallbackWarn : !0
    , S = n ? n.fallbackRoot : At(t.fallbackRoot) ? t.fallbackRoot : !0
    , v = !!t.fallbackFormat
    , _ = pt(t.missing) ? t.missing : null
    , g = pt(t.missing) ? Yl(t.missing) : null
    , m = pt(t.postTranslation) ? t.postTranslation : null
    , T = n ? n.warnHtmlMessage : At(t.warnHtmlMessage) ? t.warnHtmlMessage : !0
    , A = !!t.escapeParameter;
  const O = n ? n.modifiers : dt(t.modifiers) ? t.modifiers : {};
  let R = t.pluralRules || n && n.pluralRules, N;
  N = (() => {
    s && jl(null);
    const P = {
      version: Xg,
      locale: c.value,
      fallbackLocale: u.value,
      messages: d.value,
      modifiers: O,
      pluralRules: R,
      missing: g === null ? void 0 : g,
      missingWarn: w,
      fallbackWarn: E,
      fallbackFormat: v,
      unresolving: !0,
      postTranslation: m === null ? void 0 : m,
      warnHtmlMessage: T,
      escapeParameter: A,
      messageResolver: t.messageResolver,
      messageCompiler: t.messageCompiler,
      __meta: {
        framework: "vue"
      }
    };
    P.datetimeFormats = f.value,
      P.numberFormats = b.value,
      P.__datetimeFormatters = dt(N) ? N.__datetimeFormatters : void 0,
      P.__numberFormatters = dt(N) ? N.__numberFormatters : void 0;
    const D = Vg(P);
    return s && jl(D),
      D
  }
  )(),
    bi(N, c.value, u.value);
  function Q() {
    return [c.value, u.value, d.value, f.value, b.value]
  }
  const F = vt({
    get: () => c.value,
    set: P => {
      c.value = P,
        N.locale = c.value
    }
  })
    , J = vt({
      get: () => u.value,
      set: P => {
        u.value = P,
          N.fallbackLocale = u.value,
          bi(N, c.value, P)
      }
    })
    , Y = vt(() => d.value)
    , wt = vt(() => f.value)
    , ot = vt(() => b.value);
  function at() {
    return pt(m) ? m : null
  }
  function lt(P) {
    m = P,
      N.postTranslation = P
  }
  function Xt() {
    return _
  }
  function se(P) {
    P !== null && (g = Yl(P)),
      _ = P,
      N.missing = g
  }
  const Rt = (P, D, et, it, Nt, _e) => {
    Q();
    let Ie;
    try {
      __INTLIFY_PROD_DEVTOOLS__,
        s || (N.fallbackContext = n ? Fg() : void 0),
        Ie = P(N)
    } finally {
      __INTLIFY_PROD_DEVTOOLS__,
        s || (N.fallbackContext = void 0)
    }
    if (et !== "translate exists" && jt(Ie) && Ie === Zs || et === "translate exists" && !Ie) {
      const [fn, io] = D();
      return n && S ? it(n) : Nt(fn)
    } else {
      if (_e(Ie))
        return Ie;
      throw ke(ue.UNEXPECTED_RETURN_TYPE)
    }
  }
    ;
  function Ot(...P) {
    return Rt(D => Reflect.apply(Vl, null, [D, ...P]), () => tr(...P), "translate", D => Reflect.apply(D.t, D, [...P]), D => D, D => K(D))
  }
  function Te(...P) {
    const [D, et, it] = P;
    if (it && !rt(it))
      throw ke(ue.INVALID_ARGUMENT);
    return Ot(D, et, Lt({
      resolvedMessage: !0
    }, it || {}))
  }
  function fe(...P) {
    return Rt(D => Reflect.apply(Hl, null, [D, ...P]), () => er(...P), "datetime format", D => Reflect.apply(D.d, D, [...P]), () => Dl, D => K(D))
  }
  function $e(...P) {
    return Rt(D => Reflect.apply(Bl, null, [D, ...P]), () => nr(...P), "number format", D => Reflect.apply(D.n, D, [...P]), () => Dl, D => K(D))
  }
  function It(P) {
    return P.map(D => K(D) || jt(D) || At(D) ? $l(String(D)) : D)
  }
  const G = {
    normalize: It,
    interpolate: P => P,
    type: "vnode"
  };
  function U(...P) {
    return Rt(D => {
      let et;
      const it = D;
      try {
        it.processor = G,
          et = Reflect.apply(Vl, null, [it, ...P])
      } finally {
        it.processor = null
      }
      return et
    }
      , () => tr(...P), "translate", D => D[ir](...P), D => [$l(D)], D => Pt(D))
  }
  function X(...P) {
    return Rt(D => Reflect.apply(Bl, null, [D, ...P]), () => nr(...P), "number format", D => D[or](...P), Kl, D => K(D) || Pt(D))
  }
  function ct(...P) {
    return Rt(D => Reflect.apply(Hl, null, [D, ...P]), () => er(...P), "datetime format", D => D[sr](...P), Kl, D => K(D) || Pt(D))
  }
  function y(P) {
    R = P,
      N.pluralRules = R
  }
  function k(P, D) {
    return Rt(() => {
      if (!P)
        return !1;
      const et = K(D) ? D : c.value
        , it = x(et)
        , Nt = N.messageResolver(it, P);
      return a ? Nt != null : ni(Nt) || ae(Nt) || K(Nt)
    }
      , () => [P], "translate exists", et => Reflect.apply(et.te, et, [P, D]), n2, et => At(et))
  }
  function C(P) {
    let D = null;
    const et = ud(N, u.value, c.value);
    for (let it = 0; it < et.length; it++) {
      const Nt = d.value[et[it]] || {}
        , _e = N.messageResolver(Nt, P);
      if (_e != null) {
        D = _e;
        break
      }
    }
    return D
  }
  function I(P) {
    const D = C(P);
    return D ?? (n ? n.tm(P) || {} : {})
  }
  function x(P) {
    return d.value[P] || {}
  }
  function z(P, D) {
    if (o) {
      const et = {
        [P]: D
      };
      for (const it in et)
        As(et, it) && xi(et[it]);
      D = et[P]
    }
    d.value[P] = D,
      N.messages = d.value
  }
  function $(P, D) {
    d.value[P] = d.value[P] || {};
    const et = {
      [P]: D
    };
    if (o)
      for (const it in et)
        As(et, it) && xi(et[it]);
    D = et[P],
      Pn(D, d.value[P]),
      N.messages = d.value
  }
  function H(P) {
    return f.value[P] || {}
  }
  function p(P, D) {
    f.value[P] = D,
      N.datetimeFormats = f.value,
      Ul(N, P, D)
  }
  function h(P, D) {
    f.value[P] = Lt(f.value[P] || {}, D),
      N.datetimeFormats = f.value,
      Ul(N, P, D)
  }
  function L(P) {
    return b.value[P] || {}
  }
  function M(P, D) {
    b.value[P] = D,
      N.numberFormats = b.value,
      ql(N, P, D)
  }
  function B(P, D) {
    b.value[P] = Lt(b.value[P] || {}, D),
      N.numberFormats = b.value,
      ql(N, P, D)
  }
  Gl++,
    n && ws && (ve(n.locale, P => {
      l && (c.value = P,
        N.locale = P,
        bi(N, c.value, u.value))
    }
    ),
      ve(n.fallbackLocale, P => {
        l && (u.value = P,
          N.fallbackLocale = P,
          bi(N, c.value, u.value))
      }
      ));
  const V = {
    id: Gl,
    locale: F,
    fallbackLocale: J,
    get inheritLocale() {
      return l
    },
    set inheritLocale(P) {
      l = P,
        P && n && (c.value = n.locale.value,
          u.value = n.fallbackLocale.value,
          bi(N, c.value, u.value))
    },
    get availableLocales() {
      return Object.keys(d.value).sort()
    },
    messages: Y,
    get modifiers() {
      return O
    },
    get pluralRules() {
      return R || {}
    },
    get isGlobal() {
      return s
    },
    get missingWarn() {
      return w
    },
    set missingWarn(P) {
      w = P,
        N.missingWarn = w
    },
    get fallbackWarn() {
      return E
    },
    set fallbackWarn(P) {
      E = P,
        N.fallbackWarn = E
    },
    get fallbackRoot() {
      return S
    },
    set fallbackRoot(P) {
      S = P
    },
    get fallbackFormat() {
      return v
    },
    set fallbackFormat(P) {
      v = P,
        N.fallbackFormat = v
    },
    get warnHtmlMessage() {
      return T
    },
    set warnHtmlMessage(P) {
      T = P,
        N.warnHtmlMessage = P
    },
    get escapeParameter() {
      return A
    },
    set escapeParameter(P) {
      A = P,
        N.escapeParameter = P
    },
    t: Ot,
    getLocaleMessage: x,
    setLocaleMessage: z,
    mergeLocaleMessage: $,
    getPostTranslationHandler: at,
    setPostTranslationHandler: lt,
    getMissingHandler: Xt,
    setMissingHandler: se,
    [Qg]: y
  };
  return V.datetimeFormats = wt,
    V.numberFormats = ot,
    V.rt = Te,
    V.te = k,
    V.tm = I,
    V.d = fe,
    V.n = $e,
    V.getDateTimeFormat = H,
    V.setDateTimeFormat = p,
    V.mergeDateTimeFormat = h,
    V.getNumberFormat = L,
    V.setNumberFormat = M,
    V.mergeNumberFormat = B,
    V[t2] = i,
    V[ir] = U,
    V[sr] = ct,
    V[or] = X,
    V
}
const Kr = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    validator: t => t === "parent" || t === "global",
    default: "parent"
  },
  i18n: {
    type: Object
  }
};
function s2({ slots: t }, e) {
  return e.length === 1 && e[0] === "default" ? (t.default ? t.default() : []).reduce((i, s) => [...i, ...s.type === Vt ? s.children : [s]], []) : e.reduce((n, i) => {
    const s = t[i];
    return s && (n[i] = s()),
      n
  }
    , {})
}
function Ad(t) {
  return Vt
}
const o2 = de({
  name: "i18n-t",
  props: Lt({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      validator: t => jt(t) || !isNaN(t)
    }
  }, Kr),
  setup(t, e) {
    const { slots: n, attrs: i } = e
      , s = t.i18n || Gr({
        useScope: t.scope,
        __useComponent: !0
      });
    return () => {
      const o = Object.keys(n).filter(d => d !== "_")
        , r = {};
      t.locale && (r.locale = t.locale),
        t.plural !== void 0 && (r.plural = K(t.plural) ? +t.plural : t.plural);
      const a = s2(e, o)
        , l = s[ir](t.keypath, a, r)
        , c = Lt({}, i)
        , u = K(t.tag) || rt(t.tag) ? t.tag : Ad();
      return Wt(u, c, l)
    }
  }
})
  , Jl = o2;
function r2(t) {
  return Pt(t) && !K(t[0])
}
function Cd(t, e, n, i) {
  const { slots: s, attrs: o } = e;
  return () => {
    const r = {
      part: !0
    };
    let a = {};
    t.locale && (r.locale = t.locale),
      K(t.format) ? r.key = t.format : rt(t.format) && (K(t.format.key) && (r.key = t.format.key),
        a = Object.keys(t.format).reduce((f, b) => n.includes(b) ? Lt({}, f, {
          [b]: t.format[b]
        }) : f, {}));
    const l = i(t.value, r, a);
    let c = [r.key];
    Pt(l) ? c = l.map((f, b) => {
      const w = s[f.type]
        , E = w ? w({
          [f.type]: f.value,
          index: b,
          parts: l
        }) : [f.value];
      return r2(E) && (E[0].key = `${f.type}-${b}`),
        E
    }
    ) : K(l) && (c = [l]);
    const u = Lt({}, o)
      , d = K(t.tag) || rt(t.tag) ? t.tag : Ad();
    return Wt(d, u, c)
  }
}
const a2 = de({
  name: "i18n-n",
  props: Lt({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, Kr),
  setup(t, e) {
    const n = t.i18n || Gr({
      useScope: t.scope,
      __useComponent: !0
    });
    return Cd(t, e, vd, (...i) => n[or](...i))
  }
})
  , Xl = a2
  , l2 = de({
    name: "i18n-d",
    props: Lt({
      value: {
        type: [Number, Date],
        required: !0
      },
      format: {
        type: [String, Object]
      }
    }, Kr),
    setup(t, e) {
      const n = t.i18n || Gr({
        useScope: t.scope,
        __useComponent: !0
      });
      return Cd(t, e, gd, (...i) => n[sr](...i))
    }
  })
  , Zl = l2;
function c2(t, e) {
  const n = t;
  if (t.mode === "composition")
    return n.__getInstance(e) || t.global;
  {
    const i = n.__getInstance(e);
    return i != null ? i.__composer : t.global.__composer
  }
}
function u2(t) {
  const e = r => {
    const { instance: a, modifiers: l, value: c } = r;
    if (!a || !a.$)
      throw ke(ue.UNEXPECTED_ERROR);
    const u = c2(t, a.$)
      , d = Ql(c);
    return [Reflect.apply(u.t, u, [...tc(d)]), u]
  }
    ;
  return {
    created: (r, a) => {
      const [l, c] = e(a);
      ws && t.global === c && (r.__i18nWatcher = ve(c.locale, () => {
        a.instance && a.instance.$forceUpdate()
      }
      )),
        r.__composer = c,
        r.textContent = l
    }
    ,
    unmounted: r => {
      ws && r.__i18nWatcher && (r.__i18nWatcher(),
        r.__i18nWatcher = void 0,
        delete r.__i18nWatcher),
        r.__composer && (r.__composer = void 0,
          delete r.__composer)
    }
    ,
    beforeUpdate: (r, { value: a }) => {
      if (r.__composer) {
        const l = r.__composer
          , c = Ql(a);
        r.textContent = Reflect.apply(l.t, l, [...tc(c)])
      }
    }
    ,
    getSSRProps: r => {
      const [a] = e(r);
      return {
        textContent: a
      }
    }
  }
}
function Ql(t) {
  if (K(t))
    return {
      path: t
    };
  if (dt(t)) {
    if (!("path" in t))
      throw ke(ue.REQUIRED_VALUE, "path");
    return t
  } else
    throw ke(ue.INVALID_VALUE)
}
function tc(t) {
  const { path: e, locale: n, args: i, choice: s, plural: o } = t
    , r = {}
    , a = i || {};
  return K(n) && (r.locale = n),
    jt(s) && (r.plural = s),
    jt(o) && (r.plural = o),
    [e, a, r]
}
function d2(t, e, ...n) {
  const i = dt(n[0]) ? n[0] : {}
    , s = !!i.useI18nComponentName;
  (At(i.globalInstall) ? i.globalInstall : !0) && ([s ? "i18n" : Jl.name, "I18nT"].forEach(r => t.component(r, Jl)),
    [Xl.name, "I18nN"].forEach(r => t.component(r, Xl)),
    [Zl.name, "I18nD"].forEach(r => t.component(r, Zl))),
    t.directive("t", u2(e))
}
const f2 = cn("global-vue-i18n");
function _2(t = {}, e) {
  const n = At(t.globalInjection) ? t.globalInjection : !0
    , i = !0
    , s = new Map
    , [o, r] = b2(t)
    , a = cn("");
  function l(d) {
    return s.get(d) || null
  }
  function c(d, f) {
    s.set(d, f)
  }
  function u(d) {
    s.delete(d)
  }
  {
    const d = {
      get mode() {
        return "composition"
      },
      get allowComposition() {
        return i
      },
      async install(f, ...b) {
        if (f.__VUE_I18N_SYMBOL__ = a,
          f.provide(f.__VUE_I18N_SYMBOL__, d),
          dt(b[0])) {
          const S = b[0];
          d.__composerExtend = S.__composerExtend,
            d.__vueI18nExtend = S.__vueI18nExtend
        }
        let w = null;
        n && (w = E2(f, d.global)),
          d2(f, d, ...b);
        const E = f.unmount;
        f.unmount = () => {
          w && w(),
            d.dispose(),
            E()
        }
      },
      get global() {
        return r
      },
      dispose() {
        o.stop()
      },
      __instances: s,
      __getInstance: l,
      __setInstance: c,
      __deleteInstance: u
    };
    return d
  }
}
function Gr(t = {}) {
  const e = Oe();
  if (e == null)
    throw ke(ue.MUST_BE_CALL_SETUP_TOP);
  if (!e.isCE && e.appContext.app != null && !e.appContext.app.__VUE_I18N_SYMBOL__)
    throw ke(ue.NOT_INSTALLED);
  const n = m2(e)
    , i = h2(n)
    , s = wd(e)
    , o = p2(t, s);
  if (o === "global")
    return e2(i, t, s),
      i;
  if (o === "parent") {
    let l = g2(n, e, t.__useComponent);
    return l == null && (l = i),
      l
  }
  const r = n;
  let a = r.__getInstance(e);
  if (a == null) {
    const l = Lt({}, t);
    "__i18n" in s && (l.__i18n = s.__i18n),
      i && (l.__root = i),
      a = Td(l),
      r.__composerExtend && (a[rr] = r.__composerExtend(a)),
      y2(r, e, a),
      r.__setInstance(e, a)
  }
  return a
}
function b2(t, e, n) {
  const i = yc();
  {
    const s = i.run(() => Td(t));
    if (s == null)
      throw ke(ue.UNEXPECTED_ERROR);
    return [i, s]
  }
}
function m2(t) {
  {
    const e = Ft(t.isCE ? f2 : t.appContext.app.__VUE_I18N_SYMBOL__);
    if (!e)
      throw ke(t.isCE ? ue.NOT_INSTALLED_WITH_PROVIDE : ue.UNEXPECTED_ERROR);
    return e
  }
}
function p2(t, e) {
  return Ys(t) ? "__i18n" in e ? "local" : "global" : t.useScope ? t.useScope : "local"
}
function h2(t) {
  return t.mode === "composition" ? t.global : t.global.__composer
}
function g2(t, e, n = !1) {
  let i = null;
  const s = e.root;
  let o = v2(e, n);
  for (; o != null;) {
    const r = t;
    if (t.mode === "composition" && (i = r.__getInstance(o)),
      i != null || s === o)
      break;
    o = o.parent
  }
  return i
}
function v2(t, e = !1) {
  return t == null ? null : e && t.vnode.ctx || t.parent
}
function y2(t, e, n) {
  Hi(() => { }
    , e),
    Hs(() => {
      const i = n;
      t.__deleteInstance(e);
      const s = i[rr];
      s && (s(),
        delete i[rr])
    }
      , e)
}
const k2 = ["locale", "fallbackLocale", "availableLocales"]
  , ec = ["t", "rt", "d", "n", "tm", "te"];
function E2(t, e) {
  const n = Object.create(null);
  return k2.forEach(s => {
    const o = Object.getOwnPropertyDescriptor(e, s);
    if (!o)
      throw ke(ue.UNEXPECTED_ERROR);
    const r = St(o.value) ? {
      get() {
        return o.value.value
      },
      set(a) {
        o.value.value = a
      }
    } : {
      get() {
        return o.get && o.get()
      }
    };
    Object.defineProperty(n, s, r)
  }
  ),
    t.config.globalProperties.$i18n = n,
    ec.forEach(s => {
      const o = Object.getOwnPropertyDescriptor(e, s);
      if (!o || !o.value)
        throw ke(ue.UNEXPECTED_ERROR);
      Object.defineProperty(t.config.globalProperties, `$${s}`, o)
    }
    ),
    () => {
      delete t.config.globalProperties.$i18n,
        ec.forEach(s => {
          delete t.config.globalProperties[`$${s}`]
        }
        )
    }
}
Zg();
Dg(Wg);
Mg(mg);
jg(ud);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const t = Ur();
  t.__INTLIFY__ = !0,
    Tg(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
}
const w2 = {
  guest_label: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "GÃ¦ster"
    }
  },
  add_guest_button: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "TilfÃ¸j gÃ¦st"
    }
  },
  guest_name_label: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "GÃ¦stens navn"
    }
  },
  guest_name_placeholder: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Navn"
    }
  },
  guest_name_req_error: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Navn er pÃ¥krÃ¦vet"
    }
  },
  guest_name_invalid_error: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Navnet er ugyldigt"
    }
  },
  guest_email_label: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "GÃ¦stens e-mail"
    }
  },
  guest_email_placeholder: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "E-mail"
    }
  },
  guest_email_req_error: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "E-mail er pÃ¥krÃ¦vet"
    }
  },
  guest_email_invalid_error: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "E-mailen er ugyldig"
    }
  },
  guest_email_unique_error: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Email-ID skal vÃ¦re unikt for gÃ¦ster."
    }
  },
  guest_count_only_button: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "TilfÃ¸j antal gÃ¦ster"
    }
  },
  guest_count_error: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Antallet af gÃ¦ster skal vÃ¦re mellem 1 og 100"
    }
  },
  seat_not_available_error: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Det samlede antal ledige pladser til dette tidsrum er kun"
    }
  },
  default_consent_text: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Jeg bekrÃ¦fter, at jeg Ã¸nsker at modtage indhold fra denne virksomhed ved hjÃ¦lp af de kontaktoplysninger, jeg har angivet."
    }
  },
  add_to_google_calendar: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "TilfÃ¸j til Google Kalender"
    }
  },
  add_to_outlook_ical: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "TilfÃ¸j til Outlook/iCal"
    }
  },
  additional_information: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Yderligere oplysninger"
    }
  },
  anything_youd_like_to_know_before_appointment: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Er der noget, du Ã¸nsker, vi skal vide fÃ¸r din aftale?"
    }
  },
  appointment_request_form: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Formular til anmodning om aftale"
    }
  },
  appointment_requested: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Anmodning om aftale"
    }
  },
  available_starting_times_for: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "TilgÃ¦ngelige starttider for"
    }
  },
  book_appointment: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Book aftale"
    }
  },
  cancel: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Annuller"
    }
  },
  cannot_find_calendar: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Kan ikke finde kalender."
    }
  },
  contact_you_shortly_with_contact_method: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3,
        v: "Vi vil kontakte dig snarest for at bekrÃ¦fte din anmodning. Ring til vores kontor pÃ¥ "
      }, {
        t: 4,
        k: "contactMethod"
      }, {
        t: 3,
        v: ", hvis du har spÃ¸rgsmÃ¥l."
      }]
    }
  },
  date_of_birth: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "FÃ¸dselsdato"
    }
  },
  email: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "E-mail"
    }
  },
  first_name: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Fornavn"
    }
  },
  go_to_next_month: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Find det nÃ¦ste ledige tidsrum"
    }
  },
  last_name: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Efternavn"
    }
  },
  load_more: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "IndlÃ¦s mere"
    }
  },
  location: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Placering"
    }
  },
  location_is_required: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Placering er pÃ¥krÃ¦vet"
    }
  },
  please_enter_location: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Indtast en placering"
    }
  },
  payment_information: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Betaling Oplysninger"
    }
  },
  next_month: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "NÃ¦ste mÃ¥ned"
    }
  },
  no_calendar_event_found: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Der blev ikke fundet nogen kalenderbegivenhed"
    }
  },
  no_slot_available_this_month: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Ingen tilgÃ¦ngelige tidsrum denne mÃ¥ned."
    }
  },
  no_slots_available: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Ingen tilgÃ¦ngelige tidsrum"
    }
  },
  no_timezone_found: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Der blev ikke fundet nogen tidszone"
    }
  },
  select_staff_member: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "VÃ¦lg en medarbejder"
    }
  },
  choose_any_staff: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Alle tilgÃ¦ngelige"
    }
  },
  payment: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Betaling"
    }
  },
  phone: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Telefon"
    }
  },
  pick_a_date_and_time: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "VÃ¦lg en dato og klokkeslÃ¦t"
    }
  },
  please_choose_at_least_one_option: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "VÃ¦lg mindst Ã©n mulighed"
    }
  },
  previous_month: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Forrige mÃ¥ned"
    }
  },
  reschedule_current_time: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3,
        v: "Lav en ny aftale (Aktuel tid: "
      }, {
        t: 4,
        k: "time"
      }, {
        t: 3,
        v: ")"
      }]
    }
  },
  search: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "SÃ¸g"
    }
  },
  secure_payment: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Sikker betaling"
    }
  },
  select_date: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "VÃ¦lg dato"
    }
  },
  select_time: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "VÃ¦lg tidspunkt"
    }
  },
  skip: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Spring over"
    }
  },
  submit: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Indsend"
    }
  },
  thank_you: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Tak!"
    }
  },
  thank_you_for_your_appointment_request: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Tak for din anmodning om en aftale. "
    }
  },
  this_field_is_required: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Dette felt er pÃ¥krÃ¦vet."
    }
  },
  unable_to_fetch_calendar: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Kan ikke finde kalenderen"
    }
  },
  unable_to_schedule_appointment: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Vi kunne ikke planlÃ¦gge din aftale. PrÃ¸v igen."
    }
  },
  DURATION: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "VARIGHED"
    }
  },
  DATEANDTIME: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "DATO OG TID"
    }
  },
  REPEATS: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "GENTAGER"
    }
  },
  type_here_to_search_timezone: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Skriv her for at sÃ¸ge efter tidszone"
    }
  },
  OLD: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "GAMMEL"
    }
  },
  continue: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "FortsÃ¦t"
    }
  },
  fetching_slots: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Finder tidsrum ..."
    }
  },
  fetching_recurring_slots: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Finder tilbagevendende tidsrum ..."
    }
  },
  schedule_meeting: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "PlanlÃ¦g mÃ¸de"
    }
  },
  scheduling: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "PlanlÃ¦gger ..."
    }
  },
  reschedule: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Ã†ndr aftalen"
    }
  },
  rescheduling: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Ã†ndrer aftalen ..."
    }
  },
  cancel_appointment: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Annuller aftalen"
    }
  },
  cancelling: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Annullerer ..."
    }
  },
  back: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Tilbage"
    }
  },
  enter_your_information: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Indtast dine oplysninger"
    }
  },
  finding_open_available_slots: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Finder Ã¥bne tilgÃ¦ngelige tidsrum ..."
    }
  },
  no_slots_available_in: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Ingen ledige tidsrum i"
    }
  },
  select_a_date: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "VÃ¦lg en dato"
    }
  },
  choose_time_slot: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "VÃ¦lg tidsinterval"
    }
  },
  select_a_date_and_time: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "VÃ¦lg en dag og tid"
    }
  },
  cancellation_reason: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Ã…rsag til aflysning"
    }
  },
  your_appointment_has_been_cancelled: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Dit mÃ¸de er blevet aflyst."
    }
  },
  more: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "mere ..."
    }
  },
  less: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "mindre"
    }
  },
  your_meeting_has_been_rescheduled: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Dit mÃ¸de er blevet omlagt"
    }
  },
  your_meeting_has_been_scheduled: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Dit mÃ¸de er blevet planlagt"
    }
  },
  any_staff_header: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Er der noget personale til rÃ¥dighed?"
    }
  },
  any_staff_description: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "VÃ¦lg denne mulighed for at maksimere det samlede tilgÃ¦ngelige tidsrum"
    }
  },
  select_staff_for: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "VÃ¦lg personale til"
    }
  },
  select_service: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "VÃ¦lg serviceydelse"
    }
  },
  next: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "NÃ¦ste"
    }
  },
  slot: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Plads"
    }
  },
  slots: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Pladser"
    }
  },
  your_appointment_has_been_rescheduled: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Din aftale er flyttet"
    }
  },
  your_appointment_has_been_scheduled: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Din aftale er planlagt"
    }
  },
  your_appointment_cancelled: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Din aftale er blevet aflyst."
    }
  },
  am: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "AM"
    }
  },
  pm: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "PM"
    }
  },
  hr: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Time"
    }
  },
  minutes: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Minutter"
    }
  },
  january: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Januar"
    }
  },
  february: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Februar"
    }
  },
  march: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Marts"
    }
  },
  april: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "April"
    }
  },
  may: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Maj"
    }
  },
  june: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Juni"
    }
  },
  july: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Juli"
    }
  },
  august: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "August"
    }
  },
  september: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "September"
    }
  },
  october: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Oktober"
    }
  },
  november: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "November"
    }
  },
  december: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "December"
    }
  },
  sunday: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "SÃ¸ndag"
    }
  },
  monday: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Mandag"
    }
  },
  tuesday: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Tirsdag"
    }
  },
  wednesday: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Onsdag"
    }
  },
  thursday: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Torsdag"
    }
  },
  friday: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Fredag"
    }
  },
  saturday: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "LÃ¸rdag"
    }
  },
  timezone: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Tidszone"
    }
  },
  select: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "VÃ¦lg"
    }
  },
  select_date_time: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "VÃ¦lg dato og tid"
    }
  },
  time_zone: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Tidszone"
    }
  },
  duration: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Varighed"
    }
  },
  enter_details: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Indtast oplysninger"
    }
  },
  schedule_event: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "PlanlÃ¦g begivenhed"
    }
  },
  show_less: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Vis mindre"
    }
  },
  show_more: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Vis mere"
    }
  },
  mins: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Min."
    }
  },
  add_services: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "TilfÃ¸j serviceydelser"
    }
  },
  select_different_services: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "VÃ¦lg forskellige serviceydelser"
    }
  },
  confirm: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "BekrÃ¦ft"
    }
  },
  schedule_appointment: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "PlanlÃ¦g aftale"
    }
  },
  service_menu_guest_description: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3,
        v: "Du og "
      }, {
        t: 4,
        k: "guestCount"
      }, {
        t: 3,
        v: " gÃ¦st(er) mere"
      }]
    }
  },
  max_guest_error: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3,
        v: "Du kan reservere op til "
      }, {
        t: 4,
        k: "count"
      }, {
        t: 3,
        v: " pladser til denne tjeneste. Du skal vÃ¦lge en anden service for samme tidsrum for at booke ekstra gÃ¦ster."
      }]
    }
  },
  just_me: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Kun mig"
    }
  },
  people: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "mennesker"
    }
  },
  selected_services: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Valgte serviceydelser"
    }
  },
  choose_service: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "VÃ¦lg en tjeneste"
    }
  },
  guest_title: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3,
        v: "GÃ¦st "
      }, {
        t: 4,
        k: "count"
      }, {
        t: 3,
        v: " "
      }, {
        t: 4,
        k: "title"
      }]
    }
  },
  with_any_available_staff: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Med ethvert tilgÃ¦ngeligt personale"
    }
  },
  with: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "med"
    }
  },
  select_staff: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "VÃ¦lg personale"
    }
  },
  total: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "I alt"
    }
  },
  item: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "element"
    }
  },
  items: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "elementer"
    }
  },
  view_cart: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Vis indkÃ¸bskurv"
    }
  },
  change_time: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Rediger tid"
    }
  },
  staff_busy_error: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Ikke booket: Personalet er optaget"
    }
  },
  your_appointment: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Din aftale"
    }
  },
  book: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Book"
    }
  },
  add: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "TilfÃ¸j"
    }
  },
  scheduling_appointment: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "PlanlÃ¦gger aftale"
    }
  },
  select_all_services_error: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "SÃ¸rg for at vÃ¦lge serviceydelser for alle gÃ¦ster, fÃ¸r du fortsÃ¦tter."
    }
  },
  booking_unsuccessful: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Booking mislykkedes, ressourcen er ikke tilgÃ¦ngelig i Ã¸jeblikket."
    }
  },
  acceptEssentialCookies: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "AcceptÃ©r essentielle cookies"
    }
  },
  acceptAll: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "AcceptÃ©r alle"
    }
  },
  ok: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Ok"
    }
  },
  previous_time: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Tidligere tidspunkt"
    }
  },
  icloud_calendar: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "iCloud Calendar"
    }
  },
  meeting_has_been_rescheduled: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "MÃ¸det er blevet flyttet"
    }
  },
  google_calendar: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Google Kalender"
    }
  },
  outlook_calendar: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Outlook-kalender"
    }
  },
  deposit_paid: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "BelÃ¸b, der skal betales nu"
    }
  },
  pay_now: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Betal nu"
    }
  },
  total_amount: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "BelÃ¸b i alt"
    }
  },
  paid: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Betalt"
    }
  },
  terms_and_conditions: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "AcceptÃ©r vilkÃ¥rene og betingelserne"
    }
  },
  email_error: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "E-mail er pÃ¥krÃ¦vet"
    }
  },
  cancel_booking: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Annuller reservation"
    }
  },
  cancel_meeting: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Annuller mÃ¸det?"
    }
  },
  appointment_cancelled: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Din aftale er aflyst."
    }
  },
  first_name_error: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Fornavn er pÃ¥krÃ¦vet"
    }
  },
  last_name_error: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Efternavn er pÃ¥krÃ¦vet"
    }
  },
  phone_error: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Telefon er pÃ¥krÃ¦vet"
    }
  },
  invalid_phone_no: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Ugyldigt telefonnummer"
    }
  },
  enter_location_of_your_choice: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Indtast en hvilken som helst placering efter eget valg"
    }
  },
  select_preferred_location: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "VÃ¦lg den foretrukne placering"
    }
  },
  payment_error_unknown: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Der opstod en fejl med din betaling. PrÃ¸v igen."
    }
  },
  payment_process_error: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Der opstod en fejl under forsÃ¸g pÃ¥ at behandle din betaling. PrÃ¸v igen."
    }
  },
  payment_failed: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Betalingen mislykkedes"
    }
  },
  slot_no_longer_available: {
    t: 0,
    b: {
      t: 2,
      i: [{
        t: 3
      }],
      s: "Tidsrum Du have Valgt fÃ¥s ikke lÃ¦ngere"
    }
  }
}
  , T2 = {
    guest_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "GÃ¤ste"
      }
    },
    add_guest_button: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Gast hinzufÃ¼gen"
      }
    },
    guest_name_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Gastname"
      }
    },
    guest_name_placeholder: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Name"
      }
    },
    guest_name_req_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Name ist erforderlich"
      }
    },
    guest_name_invalid_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Der Name ist ungÃ¼ltig"
      }
    },
    guest_email_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "E-Mail des Gastes"
      }
    },
    guest_email_placeholder: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "E-Mail"
      }
    },
    guest_email_req_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "E-Mail ist erforderlich"
      }
    },
    guest_email_invalid_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Die E-Mail ist ungÃ¼ltig!"
      }
    },
    guest_email_unique_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Die Email-ID muss fÃ¼r GÃ¤ste eindeutig sein."
      }
    },
    guest_count_only_button: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Anzahl der GÃ¤ste hinzufÃ¼gen"
      }
    },
    guest_count_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Die Anzahl der GÃ¤ste sollte zwischen 1 und 100 liegen"
      }
    },
    seat_not_available_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Die Gesamtzahl der verfÃ¼gbaren PlÃ¤tze fÃ¼r dieses Zeitfenster betrÃ¤gt nur"
      }
    },
    default_consent_text: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ich bestÃ¤tige, dass ich Inhalte von diesem Unternehmen unter Verwendung der von mir angegebenen Kontaktinformationen erhalten mÃ¶chte."
      }
    },
    add_to_google_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Zum Google-Kalender hinzufÃ¼gen"
      }
    },
    add_to_outlook_ical: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Zu Outlook/iCal hinzufÃ¼gen"
      }
    },
    additional_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Zusatzinformation"
      }
    },
    anything_youd_like_to_know_before_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Gibt es etwas, das Sie uns vor Ihrem Termin mitteilen mÃ¶chten?"
      }
    },
    appointment_request_form: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Formular fÃ¼r Terminanfragen"
      }
    },
    appointment_requested: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Termin angefordert"
      }
    },
    available_starting_times_for: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VerfÃ¼gbare Startzeiten fÃ¼r"
      }
    },
    book_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Termin buchen"
      }
    },
    cancel: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Stornieren"
      }
    },
    cannot_find_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Der Kalender kann nicht gefunden werden."
      }
    },
    contact_you_shortly_with_contact_method: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Wir werden Sie in KÃ¼rze kontaktieren, um Ihre Anfrage zu bestÃ¤tigen. Bitte rufen Sie unser BÃ¼ro unter "
        }, {
          t: 4,
          k: "contactMethod"
        }, {
          t: 3,
          v: " an, wenn Sie Fragen haben."
        }]
      }
    },
    date_of_birth: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Geburtsdatum"
      }
    },
    email: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "E-Mail"
      }
    },
    first_name: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Vorname"
      }
    },
    go_to_next_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "NÃ¤chstes verfÃ¼gbares Zeitfenster finden"
      }
    },
    last_name: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nachname"
      }
    },
    load_more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mehr laden"
      }
    },
    location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Standort"
      }
    },
    location_is_required: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Standort ist erforderlich."
      }
    },
    please_enter_location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Bitte gib einen Standort ein"
      }
    },
    payment_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Bezahlung"
      }
    },
    next_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "NÃ¤chster Monat"
      }
    },
    no_calendar_event_found: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Kein Kalendereintrag gefunden"
      }
    },
    no_slot_available_this_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "In diesem Monat ist kein Zeitfenster verfÃ¼gbar."
      }
    },
    no_slots_available: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Keine Zeitfenster verfÃ¼gbar"
      }
    },
    no_timezone_found: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Keine Zeitzone gefunden!"
      }
    },
    select_staff_member: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "WÃ¤hlen Sie einen Mitarbeiter aus"
      }
    },
    choose_any_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Alle verfÃ¼gbaren"
      }
    },
    payment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Zahlung"
      }
    },
    phone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Telefon"
      }
    },
    pick_a_date_and_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "WÃ¤hlen Sie ein Datum und eine Uhrzeit"
      }
    },
    please_choose_at_least_one_option: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Bitte wÃ¤hlen Sie mindestens eine Option aus"
      }
    },
    previous_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Voriger Monat"
      }
    },
    reschedule_current_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Verschieben (Aktuelle Zeit: "
        }, {
          t: 4,
          k: "time"
        }, {
          t: 3,
          v: ")"
        }]
      }
    },
    search: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Suchen"
      }
    },
    secure_payment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Sichere Zahlung"
      }
    },
    select_date: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Datum auswÃ¤hlen"
      }
    },
    select_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Zeit auswÃ¤hlen"
      }
    },
    skip: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ãœberspringen"
      }
    },
    submit: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Absenden"
      }
    },
    thank_you: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Vielen Dank"
      }
    },
    thank_you_for_your_appointment_request: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Vielen Dank fÃ¼r Ihre Terminanfrage. "
      }
    },
    this_field_is_required: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Dieses Feld ist erforderlich."
      }
    },
    unable_to_fetch_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Kalender kann nicht gefunden werden"
      }
    },
    unable_to_schedule_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Wir konnten Ihren Termin nicht einplanen. Bitte versuchen Sie es erneut."
      }
    },
    DURATION: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "DAUER"
      }
    },
    DATEANDTIME: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "DATUM UND UHRZEIT"
      }
    },
    REPEATS: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "WIEDERHOLUNGEN"
      }
    },
    type_here_to_search_timezone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Tippen Sie hier, um nach der Zeitzone zu suchen"
      }
    },
    OLD: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "ALT"
      }
    },
    continue: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Weiter"
      }
    },
    fetching_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Zeitfenster findenÂ â€¦"
      }
    },
    fetching_recurring_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Suche nach wiederkehrenden ZeitfensternÂ â€¦"
      }
    },
    schedule_meeting: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Konferenz planen"
      }
    },
    scheduling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "PlanungÂ â€¦"
      }
    },
    reschedule: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Verschieben"
      }
    },
    rescheduling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Wird verschobenÂ â€¦"
      }
    },
    cancel_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Termin stornieren"
      }
    },
    cancelling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Wird storniertÂ â€¦"
      }
    },
    back: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "ZurÃ¼ck"
      }
    },
    enter_your_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Geben Sie Ihre Details ein"
      }
    },
    finding_open_available_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Offene verfÃ¼gbare Zeitfenster findenÂ â€¦"
      }
    },
    no_slots_available_in: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Keine Zeitfenster verfÃ¼gbar in"
      }
    },
    select_a_date: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Datum auswÃ¤hlen"
      }
    },
    choose_time_slot: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Zeitfenster auswÃ¤hlen"
      }
    },
    select_a_date_and_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Datum und Uhrzeit auswÃ¤hlen"
      }
    },
    cancellation_reason: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Grund fÃ¼r die Stornierung"
      }
    },
    your_appointment_has_been_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ihr Meeting wurde abgesagt."
      }
    },
    more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "mehrÂ â€¦"
      }
    },
    less: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "wenigerÂ â€¦"
      }
    },
    your_meeting_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ihr Meeting wurde neu terminiert"
      }
    },
    your_meeting_has_been_scheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ihre Konferenz wurde geplant"
      }
    },
    any_staff_header: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Jedes verfÃ¼gbare Personal"
      }
    },
    any_staff_description: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Um die Summe der verfÃ¼gbaren Zeitfenster zu maximieren, wÃ¤hlen Sie diese Option aus"
      }
    },
    select_staff_for: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mitarbeiter auswÃ¤hlen fÃ¼r"
      }
    },
    select_service: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Service auswÃ¤hlen"
      }
    },
    next: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "NÃ¤chste"
      }
    },
    slot: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Platz"
      }
    },
    slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "PlÃ¤tze"
      }
    },
    your_appointment_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ihr Termin wurde verschoben"
      }
    },
    your_appointment_has_been_scheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ihr Termin wurde geplant"
      }
    },
    your_appointment_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ihr Termin wurde storniert."
      }
    },
    am: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "AM"
      }
    },
    pm: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "PM"
      }
    },
    hr: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Std."
      }
    },
    minutes: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Minuten"
      }
    },
    january: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Januar"
      }
    },
    february: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Februar"
      }
    },
    march: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "MÃ¤rz"
      }
    },
    april: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "April"
      }
    },
    may: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mai"
      }
    },
    june: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Juni"
      }
    },
    july: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Juli"
      }
    },
    august: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "August"
      }
    },
    september: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "September"
      }
    },
    october: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Oktober"
      }
    },
    november: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "November"
      }
    },
    december: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Dezember"
      }
    },
    sunday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Sonntag"
      }
    },
    monday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Montag"
      }
    },
    tuesday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Dienstag"
      }
    },
    wednesday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mittwoch"
      }
    },
    thursday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Donnerstag"
      }
    },
    friday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Freitag"
      }
    },
    saturday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Samstag"
      }
    },
    timezone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Zeitzone"
      }
    },
    select: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "AuswÃ¤hlen"
      }
    },
    select_date_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Datum und Uhrzeit auswÃ¤hlen"
      }
    },
    time_zone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Zeitzone"
      }
    },
    duration: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Dauer"
      }
    },
    enter_details: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Details eingeben"
      }
    },
    schedule_event: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Veranstaltung planen"
      }
    },
    show_less: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Weniger anzeigen"
      }
    },
    show_more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mehr anzeigen"
      }
    },
    mins: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Minuten"
      }
    },
    add_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Dienste hinzufÃ¼gen"
      }
    },
    select_different_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Verschiedene Dienste auswÃ¤hlen"
      }
    },
    confirm: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "BestÃ¤tigen"
      }
    },
    schedule_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Termin vereinbaren"
      }
    },
    service_menu_guest_description: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Sie und "
        }, {
          t: 4,
          k: "guestCount"
        }, {
          t: 3,
          v: " weitere(r) Gast/GÃ¤ste"
        }]
      }
    },
    max_guest_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Sie kÃ¶nnen bis zu "
        }, {
          t: 4,
          k: "count"
        }, {
          t: 3,
          v: " Zeitfenster fÃ¼r diesen Service reservieren. Um fÃ¼r zusÃ¤tzliche GÃ¤ste zu buchen, wÃ¤hlen Sie bitte einen anderen Service fÃ¼r das gleiche Zeitfenster aus."
        }]
      }
    },
    just_me: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nur ich"
      }
    },
    people: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Volk"
      }
    },
    selected_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "AusgewÃ¤hlte Dienste"
      }
    },
    choose_service: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "WÃ¤hlen Sie einen Dienst aus"
      }
    },
    guest_title: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Gast "
        }, {
          t: 4,
          k: "count"
        }, {
          t: 3,
          v: " "
        }, {
          t: 4,
          k: "title"
        }]
      }
    },
    with_any_available_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mit allen verfÃ¼gbaren Mitarbeitern"
      }
    },
    with: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "mit"
      }
    },
    select_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mitarbeiter auswÃ¤hlen"
      }
    },
    total: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Gesamt"
      }
    },
    item: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Artikel"
      }
    },
    items: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Artikel"
      }
    },
    view_cart: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Warenkorb anzeigen"
      }
    },
    change_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Zeit Ã¤ndern"
      }
    },
    staff_busy_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nicht gebucht: Mitarbeiter beschÃ¤ftigt"
      }
    },
    your_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ihr Termin"
      }
    },
    book: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Buch"
      }
    },
    add: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "HinzufÃ¼gen"
      }
    },
    scheduling_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Terminvereinbarung"
      }
    },
    select_all_services_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Bitte stellen Sie sicher, dass Sie die Dienste fÃ¼r alle GÃ¤ste auswÃ¤hlen, bevor Sie fortfahren."
      }
    },
    booking_unsuccessful: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Buchung fehlgeschlagen, Ressource im Moment nicht verfÃ¼gbar."
      }
    },
    acceptEssentialCookies: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Notwendige Cookies akzeptieren"
      }
    },
    acceptAll: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Alle akzeptieren"
      }
    },
    ok: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ok"
      }
    },
    previous_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Vorherige Zeit"
      }
    },
    icloud_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "iCloud-Kalender"
      }
    },
    meeting_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Das Meeting wurde verschoben"
      }
    },
    google_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Google-Kalender"
      }
    },
    outlook_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Outlook-Kalender"
      }
    },
    deposit_paid: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Jetzt zu zahlender Betrag"
      }
    },
    pay_now: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Bezahlen Sie jetzt"
      }
    },
    total_amount: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Gesamtbetrag"
      }
    },
    paid: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Bezahlt"
      }
    },
    terms_and_conditions: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Bitte akzeptieren Sie die Allgemeinen GeschÃ¤ftsbedingungen"
      }
    },
    email_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "E-Mail ist erforderlich"
      }
    },
    cancel_booking: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Buchung stornieren"
      }
    },
    cancel_meeting: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Meeting absagen?"
      }
    },
    appointment_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ihr Termin ist abgesagt."
      }
    },
    first_name_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Vorname ist erforderlich"
      }
    },
    last_name_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nachname ist erforderlich"
      }
    },
    phone_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Die Telefonnummer ist erforderlich"
      }
    },
    invalid_phone_no: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "UngÃ¼ltige Telefonnummer"
      }
    },
    enter_location_of_your_choice: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Geben Sie einen beliebigen Ort Ihrer Wahl ein"
      }
    },
    select_preferred_location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "WÃ¤hlen Sie den bevorzugten Standort aus"
      }
    },
    payment_error_unknown: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Bei Ihrer Zahlung ist etwas schiefgelaufen. Bitte Erneut versuchen."
      }
    },
    payment_process_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Beim Versuch, Ihre Zahlung Ã¼ber die Pipeline zu senden, ist ein Fehler aufgetreten. Bitte Erneut versuchen."
      }
    },
    payment_failed: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Die Bezahlung ist fehlgeschlagen"
      }
    },
    slot_no_longer_available: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Das Zeitfenster, das Sie ausgewÃ¤hlt haben, ist nicht mehr verfÃ¼gbar"
      }
    }
  }
  , A2 = {
    guest_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Guests"
      }
    },
    add_guest_button: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Add Guest"
      }
    },
    guest_name_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Guest Name"
      }
    },
    guest_name_placeholder: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Name"
      }
    },
    guest_name_req_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Name is required"
      }
    },
    guest_name_invalid_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Name is invalid"
      }
    },
    guest_email_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Guest Email"
      }
    },
    guest_email_placeholder: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Email"
      }
    },
    guest_email_req_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Email is required"
      }
    },
    guest_email_invalid_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Email is invalid!"
      }
    },
    guest_email_unique_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Email ID must be unique for guests."
      }
    },
    guest_count_only_button: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Add Guest Count"
      }
    },
    guest_count_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Guest count should be between 1 and 100"
      }
    },
    seat_not_available_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Total available seats for this slot is only"
      }
    },
    default_consent_text: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "I confirm that I want to receive content from this company using any contact information I provide."
      }
    },
    add_to_google_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Add to Google Calendar"
      }
    },
    add_to_outlook_ical: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Add to Outlook / iCal"
      }
    },
    additional_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Additional Information"
      }
    },
    anything_youd_like_to_know_before_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Is there anything you would like us to know before your appointment?"
      }
    },
    appointment_request_form: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Appointment Request Form"
      }
    },
    appointment_requested: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Appointment Requested"
      }
    },
    available_starting_times_for: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Available Starting times for"
      }
    },
    book_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Book Appointment"
      }
    },
    cancel: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Cancel"
      }
    },
    cannot_find_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Cannot find calendar."
      }
    },
    contact_you_shortly_with_contact_method: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "We will contact you shortly to confirm your request. Please call our office at "
        }, {
          t: 4,
          k: "contactMethod"
        }, {
          t: 3,
          v: " if you have any questions."
        }]
      }
    },
    date_of_birth: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Date of birth"
      }
    },
    email: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Email"
      }
    },
    first_name: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "First Name"
      }
    },
    go_to_next_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Find next available slot"
      }
    },
    last_name: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Last Name"
      }
    },
    load_more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Load More"
      }
    },
    location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Location"
      }
    },
    location_is_required: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Location is required."
      }
    },
    please_enter_location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Please enter a location"
      }
    },
    payment_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Payment information"
      }
    },
    next_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Next month"
      }
    },
    no_calendar_event_found: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "No calendar event found"
      }
    },
    no_slot_available_this_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "No slot available this month."
      }
    },
    no_slots_available: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "No Slots available"
      }
    },
    no_timezone_found: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "No Timezone found!"
      }
    },
    select_staff_member: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Select a staff member"
      }
    },
    choose_any_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Any Available"
      }
    },
    payment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Payment"
      }
    },
    phone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Phone"
      }
    },
    pick_a_date_and_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Pick a Date and Time"
      }
    },
    please_choose_at_least_one_option: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Please choose at least one option"
      }
    },
    previous_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Previous month"
      }
    },
    reschedule_current_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Reschedule (Current time: "
        }, {
          t: 4,
          k: "time"
        }, {
          t: 3,
          v: ")"
        }]
      }
    },
    search: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Search"
      }
    },
    secure_payment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Secure Payment"
      }
    },
    select_date: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Select Date"
      }
    },
    select_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Select time"
      }
    },
    skip: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Skip"
      }
    },
    submit: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Submit"
      }
    },
    thank_you: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Thank You"
      }
    },
    thank_you_for_your_appointment_request: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Thank you for your appointment request. "
      }
    },
    this_field_is_required: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "This field is required."
      }
    },
    unable_to_fetch_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Unable to find calendar"
      }
    },
    unable_to_schedule_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "We were unable to schedule your appointment. Please try again."
      }
    },
    DURATION: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "DURATION"
      }
    },
    DATEANDTIME: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "DATE & TIME"
      }
    },
    REPEATS: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "REPEATS"
      }
    },
    type_here_to_search_timezone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Type here to search timezone"
      }
    },
    OLD: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "OLD"
      }
    },
    continue: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Continue"
      }
    },
    fetching_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Finding slots..."
      }
    },
    fetching_recurring_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Finding recurring slots..."
      }
    },
    schedule_meeting: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Schedule Meeting"
      }
    },
    scheduling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Scheduling..."
      }
    },
    reschedule: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Reschedule"
      }
    },
    rescheduling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Rescheduling..."
      }
    },
    cancel_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Cancel Appointment"
      }
    },
    cancelling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Cancelling..."
      }
    },
    back: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Back"
      }
    },
    enter_your_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Enter Your Information"
      }
    },
    finding_open_available_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Finding Open Available Slots..."
      }
    },
    no_slots_available_in: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "No slots available in"
      }
    },
    select_a_date: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Select a Date"
      }
    },
    choose_time_slot: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Choose Time Slot"
      }
    },
    select_a_date_and_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Select a Date & Time"
      }
    },
    cancellation_reason: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Cancellation Reason"
      }
    },
    your_appointment_has_been_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Your meeting has been cancelled."
      }
    },
    more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "more..."
      }
    },
    less: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "less"
      }
    },
    your_meeting_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Your Meeting has been Rescheduled"
      }
    },
    your_meeting_has_been_scheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Your Meeting has been Scheduled"
      }
    },
    any_staff_header: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Any staff available"
      }
    },
    any_staff_description: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "To maximize the total available slot select this option"
      }
    },
    select_staff_for: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Select Staff for"
      }
    },
    select_service: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Select Service"
      }
    },
    next: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Next"
      }
    },
    slot: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seat"
      }
    },
    slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seats"
      }
    },
    your_appointment_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Your appointment has been rescheduled"
      }
    },
    your_appointment_has_been_scheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Your appointment has been scheduled"
      }
    },
    your_appointment_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Your appointment has been cancelled."
      }
    },
    am: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "AM"
      }
    },
    pm: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "PM"
      }
    },
    hr: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Hr"
      }
    },
    minutes: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Minutes"
      }
    },
    january: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "January"
      }
    },
    february: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "February"
      }
    },
    march: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "March"
      }
    },
    april: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "April"
      }
    },
    may: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "May"
      }
    },
    june: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "June"
      }
    },
    july: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "July"
      }
    },
    august: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "August"
      }
    },
    september: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "September"
      }
    },
    october: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "October"
      }
    },
    november: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "November"
      }
    },
    december: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "December"
      }
    },
    sunday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Sunday"
      }
    },
    monday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Monday"
      }
    },
    tuesday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Tuesday"
      }
    },
    wednesday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Wednesday"
      }
    },
    thursday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Thursday"
      }
    },
    friday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Friday"
      }
    },
    saturday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Saturday"
      }
    },
    timezone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Timezone"
      }
    },
    select: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Select"
      }
    },
    select_date_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Select Date & Time"
      }
    },
    time_zone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Time zone"
      }
    },
    duration: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Duration"
      }
    },
    enter_details: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Enter Details"
      }
    },
    schedule_event: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Schedule Event"
      }
    },
    show_less: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Show Less"
      }
    },
    show_more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Show More"
      }
    },
    mins: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mins"
      }
    },
    add_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Add Services"
      }
    },
    select_different_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Select different services"
      }
    },
    confirm: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Confirm"
      }
    },
    schedule_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Schedule Appointment"
      }
    },
    service_menu_guest_description: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "You and "
        }, {
          t: 4,
          k: "guestCount"
        }, {
          t: 3,
          v: " more guest(s)"
        }]
      }
    },
    max_guest_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "You can reserve up to "
        }, {
          t: 4,
          k: "count"
        }, {
          t: 3,
          v: " slots for this service. To book for additional guests, kindly select a different service for the same time slot."
        }]
      }
    },
    just_me: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Just Me"
      }
    },
    people: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "people"
      }
    },
    selected_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selected Services"
      }
    },
    choose_service: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Choose a service"
      }
    },
    guest_title: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Guest "
        }, {
          t: 4,
          k: "count"
        }, {
          t: 3,
          v: " "
        }, {
          t: 4,
          k: "title"
        }]
      }
    },
    with_any_available_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "With any available staff"
      }
    },
    with: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "with"
      }
    },
    select_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Select Staff"
      }
    },
    total: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Total"
      }
    },
    item: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "item"
      }
    },
    items: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "items"
      }
    },
    view_cart: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "View Cart"
      }
    },
    change_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Change time"
      }
    },
    staff_busy_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Not booked: Staff busy"
      }
    },
    your_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Your Appointment"
      }
    },
    book: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Book"
      }
    },
    add: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Add"
      }
    },
    scheduling_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Scheduling appointment"
      }
    },
    select_all_services_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Please ensure you select services for all guests before proceeding"
      }
    },
    booking_unsuccessful: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Booking unsuccessful, resource unavailable at the moment."
      }
    },
    acceptEssentialCookies: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Accept essential cookies"
      }
    },
    acceptAll: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Accept all"
      }
    },
    ok: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ok"
      }
    },
    previous_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Previous time"
      }
    },
    icloud_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "iCloud Calendar"
      }
    },
    meeting_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Meeting has been Rescheduled"
      }
    },
    google_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Google Calendar"
      }
    },
    outlook_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Outlook Calendar"
      }
    },
    deposit_paid: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Amount to be paid now"
      }
    },
    pay_now: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Pay now"
      }
    },
    total_amount: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Total Amount"
      }
    },
    paid: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Paid"
      }
    },
    terms_and_conditions: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Please accept the terms and conditions"
      }
    },
    email_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Email is required"
      }
    },
    cancel_booking: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Cancel Booking"
      }
    },
    cancel_meeting: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Cancel Meeting ?"
      }
    },
    appointment_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Your appointment is cancelled."
      }
    },
    first_name_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "First Name is required"
      }
    },
    last_name_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Last Name is required"
      }
    },
    phone_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Phone is required"
      }
    },
    invalid_phone_no: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Invalid phone number"
      }
    },
    enter_location_of_your_choice: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Enter any location of your choice"
      }
    },
    select_preferred_location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Select preferred location"
      }
    },
    payment_error_unknown: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Something went wrong with your payment. Please try again."
      }
    },
    payment_process_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "An error occurred while trying to process your payment. Please try again."
      }
    },
    payment_failed: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Payment is failed"
      }
    },
    slot_no_longer_available: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "The slot you have selected is no longer available"
      }
    }
  }
  , C2 = {
    guest_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Invitados"
      }
    },
    add_guest_button: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "AÃ±adir invitado"
      }
    },
    guest_name_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nombre del invitado"
      }
    },
    guest_name_placeholder: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nombre"
      }
    },
    guest_name_req_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "El nombre es obligatorio"
      }
    },
    guest_name_invalid_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "El nombre no es vÃ¡lido"
      }
    },
    guest_email_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Correo electrÃ³nico del invitado"
      }
    },
    guest_email_placeholder: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Correo electrÃ³nico"
      }
    },
    guest_email_req_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "El correo electrÃ³nico es obligatorio"
      }
    },
    guest_email_invalid_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "El correo electrÃ³nico no es vÃ¡lido."
      }
    },
    guest_email_unique_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "El ID del correo electrÃ³nico debe ser Ãºnico para los invitados."
      }
    },
    guest_count_only_button: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "AÃ±adir recuento de invitados"
      }
    },
    guest_count_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "El recuento de invitados debe estar entre 1 y 100"
      }
    },
    seat_not_available_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "El nÃºmero total de franjas horarias disponibles para esta franja horaria es solo"
      }
    },
    default_consent_text: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Confirmo que deseo recibir contenido multimedia de esta empresa utilizando cualquier informaciÃ³n de contacto que proporcione."
      }
    },
    add_to_google_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "AÃ±adir al calendario de Google"
      }
    },
    add_to_outlook_ical: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "AÃ±adir a Outlook / iCal"
      }
    },
    additional_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "InformaciÃ³n adicional"
      }
    },
    anything_youd_like_to_know_before_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Â¿Hay algo que desee que sepamos antes de su cita?"
      }
    },
    appointment_request_form: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Formulario de solicitud de cita"
      }
    },
    appointment_requested: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Cita solicitada"
      }
    },
    available_starting_times_for: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Horas de inicio disponibles para"
      }
    },
    book_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Reservar cita"
      }
    },
    cancel: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Cancelar"
      }
    },
    cannot_find_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "No se puede encontrar el calendario."
      }
    },
    contact_you_shortly_with_contact_method: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Nos pondremos en contacto con usted en breve para confirmar su solicitud. Por favor, llame a nuestra oficina en el "
        }, {
          t: 4,
          k: "contactMethod"
        }, {
          t: 3,
          v: " si tiene alguna pregunta."
        }]
      }
    },
    date_of_birth: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Fecha de nacimiento"
      }
    },
    email: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Correo electrÃ³nico"
      }
    },
    first_name: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nombre"
      }
    },
    go_to_next_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Buscar la prÃ³xima franja horaria disponible"
      }
    },
    last_name: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Apellidos"
      }
    },
    load_more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Cargar mÃ¡s"
      }
    },
    location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "UbicaciÃ³n"
      }
    },
    location_is_required: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "La ubicaciÃ³n es obligatoria."
      }
    },
    please_enter_location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Introduce una UbicaciÃ³n"
      }
    },
    payment_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Pago Detalles"
      }
    },
    next_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "El mes siguiente"
      }
    },
    no_calendar_event_found: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "No se ha encontrado ningÃºn evento de calendario"
      }
    },
    no_slot_available_this_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "No hay franjas horarias disponibles este mes."
      }
    },
    no_slots_available: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "No hay franjas horarias disponibles"
      }
    },
    no_timezone_found: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Â¡No se ha encontrado ninguna zona horaria!"
      }
    },
    select_staff_member: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seleccione un miembro del personal"
      }
    },
    choose_any_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Cualquiera disponible"
      }
    },
    payment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Pago"
      }
    },
    phone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "TelÃ©fono"
      }
    },
    pick_a_date_and_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seleccione una fecha y hora"
      }
    },
    please_choose_at_least_one_option: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seleccione al menos una opciÃ³n"
      }
    },
    previous_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mes anterior"
      }
    },
    reschedule_current_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Reprogramar (hora actual: "
        }, {
          t: 4,
          k: "time"
        }, {
          t: 3,
          v: ")"
        }]
      }
    },
    search: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Buscar"
      }
    },
    secure_payment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Pago seguro"
      }
    },
    select_date: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seleccionar fecha"
      }
    },
    select_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seleccionar hora"
      }
    },
    skip: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Saltar"
      }
    },
    submit: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Enviar"
      }
    },
    thank_you: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Gracias"
      }
    },
    thank_you_for_your_appointment_request: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Gracias por su solicitud de cita. "
      }
    },
    this_field_is_required: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Este campo es obligatorio."
      }
    },
    unable_to_fetch_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "No se puede encontrar el calendario"
      }
    },
    unable_to_schedule_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "No hemos podido programar su cita. Vuelva a intentarlo."
      }
    },
    DURATION: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "DURACIÃ“N"
      }
    },
    DATEANDTIME: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "FECHA Y HORA"
      }
    },
    REPEATS: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "REPITE"
      }
    },
    type_here_to_search_timezone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Escriba aquÃ­ para buscar la zona horaria"
      }
    },
    OLD: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "ANTIGUO"
      }
    },
    continue: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Continuar"
      }
    },
    fetching_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Buscando franjas horarias..."
      }
    },
    fetching_recurring_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Buscando franjas horarias recurrentes..."
      }
    },
    schedule_meeting: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Programar conferencia"
      }
    },
    scheduling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Programando..."
      }
    },
    reschedule: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Reprogramar"
      }
    },
    rescheduling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Reprogramando..."
      }
    },
    cancel_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Cancelar cita"
      }
    },
    cancelling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Cancelando..."
      }
    },
    back: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "AtrÃ¡s"
      }
    },
    enter_your_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Introduzca sus detalles"
      }
    },
    finding_open_available_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Buscando franjas horarias disponibles..."
      }
    },
    no_slots_available_in: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "No hay franjas horarias disponibles en"
      }
    },
    select_a_date: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seleccionar una fecha"
      }
    },
    choose_time_slot: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seleccionar franja horaria"
      }
    },
    select_a_date_and_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seleccione una fecha y hora"
      }
    },
    cancellation_reason: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "RazÃ³n de cancelaciÃ³n"
      }
    },
    your_appointment_has_been_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Su conferencia ha sido cancelada."
      }
    },
    more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "mÃ¡s..."
      }
    },
    less: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "menos"
      }
    },
    your_meeting_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Su conferencia ha sido reprogramada"
      }
    },
    your_meeting_has_been_scheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Su conferencia ha sido programada"
      }
    },
    any_staff_header: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Cualquier miembro del personal disponible"
      }
    },
    any_staff_description: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Para maximizar el total de franjas horarias disponibles, seleccione esta opciÃ³n"
      }
    },
    select_staff_for: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seleccionar personal para"
      }
    },
    select_service: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seleccionar un servicio"
      }
    },
    next: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Siguiente"
      }
    },
    slot: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Plaza"
      }
    },
    slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Plazas"
      }
    },
    your_appointment_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Su cita ha sido reprogramada"
      }
    },
    your_appointment_has_been_scheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Su cita ha sido programada"
      }
    },
    your_appointment_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Su cita ha sido cancelada."
      }
    },
    am: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "a.Â m."
      }
    },
    pm: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "p.Â m."
      }
    },
    hr: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "H"
      }
    },
    minutes: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Minutos"
      }
    },
    january: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Enero"
      }
    },
    february: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Febrero"
      }
    },
    march: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Marzo"
      }
    },
    april: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Abril"
      }
    },
    may: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mayo"
      }
    },
    june: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Junio"
      }
    },
    july: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Julio"
      }
    },
    august: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Agosto"
      }
    },
    september: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Septiembre"
      }
    },
    october: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Octubre"
      }
    },
    november: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Noviembre"
      }
    },
    december: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Diciembre"
      }
    },
    sunday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Domingo"
      }
    },
    monday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Lunes"
      }
    },
    tuesday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Martes"
      }
    },
    wednesday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "MiÃ©rcoles"
      }
    },
    thursday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Jueves"
      }
    },
    friday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Viernes"
      }
    },
    saturday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ¡bado"
      }
    },
    timezone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Zona horaria"
      }
    },
    select: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seleccionar"
      }
    },
    select_date_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seleccionar fecha y hora"
      }
    },
    time_zone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Zona horaria"
      }
    },
    duration: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "DuraciÃ³n"
      }
    },
    enter_details: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Introducir informaciÃ³n"
      }
    },
    schedule_event: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Programar evento"
      }
    },
    show_less: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mostrar menos"
      }
    },
    show_more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mostrar mÃ¡s"
      }
    },
    mins: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Min"
      }
    },
    add_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "AÃ±adir servicios"
      }
    },
    select_different_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seleccione diferentes servicios"
      }
    },
    confirm: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Confirmar"
      }
    },
    schedule_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Programar cita"
      }
    },
    service_menu_guest_description: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Usted y "
        }, {
          t: 4,
          k: "guestCount"
        }, {
          t: 3,
          v: " invitado(s) mÃ¡s"
        }]
      }
    },
    max_guest_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Puede reservar hasta "
        }, {
          t: 4,
          k: "count"
        }, {
          t: 3,
          v: " franjas horarias para este servicio. Para reservar para invitados adicionales, seleccione un servicio diferente para la misma franja horaria."
        }]
      }
    },
    just_me: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Solo yo"
      }
    },
    people: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "personas"
      }
    },
    selected_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Servicios seleccionados"
      }
    },
    choose_service: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seleccionar un servicio"
      }
    },
    guest_title: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Invitado "
        }, {
          t: 4,
          k: "count"
        }, {
          t: 3,
          v: " "
        }, {
          t: 4,
          k: "title"
        }]
      }
    },
    with_any_available_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Con cualquier miembro del personal disponible"
      }
    },
    with: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "con"
      }
    },
    select_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seleccionar miembro del personal"
      }
    },
    total: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Total"
      }
    },
    item: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "artÃ­culo"
      }
    },
    items: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "artÃ­culos"
      }
    },
    view_cart: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ver el carrito"
      }
    },
    change_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Cambiar la hora"
      }
    },
    staff_busy_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "No reservado: El personal estÃ¡ ocupado"
      }
    },
    your_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Su cita"
      }
    },
    book: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Reservar"
      }
    },
    add: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "AÃ±adir"
      }
    },
    scheduling_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Programando cita"
      }
    },
    select_all_services_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Por favor, asegÃºrese de seleccionar los servicios para todos los invitados antes de continuar"
      }
    },
    booking_unsuccessful: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "No se ha podido realizar la reserva, recurso no disponible en este momento."
      }
    },
    acceptEssentialCookies: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Aceptar las cookies esenciales"
      }
    },
    acceptAll: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Aceptar todo"
      }
    },
    ok: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "De acuerdo"
      }
    },
    previous_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Hora anterior"
      }
    },
    icloud_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Calendario de iCloud"
      }
    },
    meeting_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "La reuniÃ³n ha sido reprogramada"
      }
    },
    google_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Calendario de Google"
      }
    },
    outlook_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Calendario de Outlook"
      }
    },
    deposit_paid: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Importe a pagar ahora"
      }
    },
    pay_now: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Pague ahora"
      }
    },
    total_amount: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Importe total"
      }
    },
    paid: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Pagado"
      }
    },
    terms_and_conditions: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Por favor, acepte los tÃ©rminos y condiciones"
      }
    },
    email_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "El correo electrÃ³nico es obligatorio"
      }
    },
    cancel_booking: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Cancelar reserva"
      }
    },
    cancel_meeting: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Â¿Cancelar la reuniÃ³n?"
      }
    },
    appointment_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Su cita se ha cancelado."
      }
    },
    first_name_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "El nombre es obligatorio"
      }
    },
    last_name_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Los apellidos son obligatorios"
      }
    },
    phone_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "El telÃ©fono es obligatorio"
      }
    },
    invalid_phone_no: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "NÃºmero de telÃ©fono no vÃ¡lido"
      }
    },
    enter_location_of_your_choice: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Introduzca cualquier ubicaciÃ³n de su elecciÃ³n"
      }
    },
    select_preferred_location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seleccione la ubicaciÃ³n preferida"
      }
    },
    payment_error_unknown: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Se ha producido un error con el pago. Por favor, Vuelve a intentarlo."
      }
    },
    payment_process_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Se ha producido un error al intentar Secuencia tu pago. Por favor, Vuelve a intentarlo."
      }
    },
    payment_failed: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Se ha producido un error en el Pago"
      }
    },
    slot_no_longer_available: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "La Franja horaria TÃº tienes Seleccionado ya no estÃ¡ disponible"
      }
    }
  }
  , S2 = {
    guest_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Vieraat"
      }
    },
    add_guest_button: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "LisÃ¤Ã¤ vieras"
      }
    },
    guest_name_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Vieraan nimi"
      }
    },
    guest_name_placeholder: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nimi"
      }
    },
    guest_name_req_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nimi on pakollinen"
      }
    },
    guest_name_invalid_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nimi on virheellinen"
      }
    },
    guest_email_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Vieraan sÃ¤hkÃ¶posti"
      }
    },
    guest_email_placeholder: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ¤hkÃ¶posti"
      }
    },
    guest_email_req_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ¤hkÃ¶postiosoite on pakollinen"
      }
    },
    guest_email_invalid_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ¤hkÃ¶postiosoite on virheellinen!"
      }
    },
    guest_email_unique_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Vieraiden sÃ¤hkÃ¶postitunnuksen on oltava yksilÃ¶llinen."
      }
    },
    guest_count_only_button: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "LisÃ¤Ã¤ vierasmÃ¤Ã¤rÃ¤"
      }
    },
    guest_count_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Vieraiden lukumÃ¤Ã¤rÃ¤ voi olla 1â€“100"
      }
    },
    seat_not_available_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "TÃ¤llÃ¤ aikavÃ¤lillÃ¤ on vapaita paikkoja vain"
      }
    },
    default_consent_text: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Vahvistan, ettÃ¤ haluan vastaanottaa sisÃ¤ltÃ¶Ã¤ tÃ¤ltÃ¤ yritykseltÃ¤ antamillani yhteystiedoilla."
      }
    },
    add_to_google_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "LisÃ¤Ã¤ Google Calendariin"
      }
    },
    add_to_outlook_ical: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "LisÃ¤Ã¤ Outlookiin/iCaliin"
      }
    },
    additional_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "LisÃ¤tietoja"
      }
    },
    anything_youd_like_to_know_before_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Onko jotain, mitÃ¤ haluaisit meidÃ¤n tietÃ¤vÃ¤n ennen tapaamistasi?"
      }
    },
    appointment_request_form: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "TapaamispyyntÃ¶lomake"
      }
    },
    appointment_requested: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Tapaamista pyydetty"
      }
    },
    available_starting_times_for: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Saatavilla olevat alkamisajat kohteelle"
      }
    },
    book_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Varaa tapaaminen"
      }
    },
    cancel: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Peruuta"
      }
    },
    cannot_find_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Kalenteria ei lÃ¶ydy."
      }
    },
    contact_you_shortly_with_contact_method: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Otamme sinuun pian yhteyttÃ¤ vahvistaaksemme pyyntÃ¶si. Soita toimistoomme numeroon "
        }, {
          t: 4,
          k: "contactMethod"
        }, {
          t: 3,
          v: ", jos sinulla on kysyttÃ¤vÃ¤Ã¤."
        }]
      }
    },
    date_of_birth: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SyntymÃ¤aika"
      }
    },
    email: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ¤hkÃ¶posti"
      }
    },
    first_name: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Etunimi"
      }
    },
    go_to_next_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Etsi seuraava vapaa aikavÃ¤li"
      }
    },
    last_name: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Sukunimi"
      }
    },
    load_more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Lataa lisÃ¤Ã¤"
      }
    },
    location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Sijainti"
      }
    },
    location_is_required: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Sijainti on pakollinen."
      }
    },
    please_enter_location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Anna sijainti"
      }
    },
    payment_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Maksun yksityiskohdat"
      }
    },
    next_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seuraava kuukausi"
      }
    },
    no_calendar_event_found: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Kalenteritapahtumia ei lÃ¶ytynyt"
      }
    },
    no_slot_available_this_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "TÃ¤ssÃ¤ kuussa ei ole vapaita aikavÃ¤lejÃ¤."
      }
    },
    no_slots_available: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Vapaita aikavÃ¤lejÃ¤ ei ole"
      }
    },
    no_timezone_found: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "AikavyÃ¶hykettÃ¤ ei lÃ¶ytynyt!"
      }
    },
    select_staff_member: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Valitse henkilÃ¶kunnan jÃ¤sen"
      }
    },
    choose_any_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "MikÃ¤ tahansa saatavilla oleva"
      }
    },
    payment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Maksu"
      }
    },
    phone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Puhelin"
      }
    },
    pick_a_date_and_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Valitse pÃ¤ivÃ¤mÃ¤Ã¤rÃ¤ ja kellonaika"
      }
    },
    please_choose_at_least_one_option: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Valitse vÃ¤hintÃ¤Ã¤n yksi vaihtoehto"
      }
    },
    previous_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Edellinen kuukausi"
      }
    },
    reschedule_current_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Aikatauluta uudelleen (nykyinen aika: "
        }, {
          t: 4,
          k: "time"
        }, {
          t: 3,
          v: ")"
        }]
      }
    },
    search: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Haku"
      }
    },
    secure_payment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Turvallinen maksu"
      }
    },
    select_date: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Valitse pÃ¤ivÃ¤mÃ¤Ã¤rÃ¤"
      }
    },
    select_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Valitse aika"
      }
    },
    skip: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ohita"
      }
    },
    submit: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "LÃ¤hetÃ¤"
      }
    },
    thank_you: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Kiitos"
      }
    },
    thank_you_for_your_appointment_request: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Kiitos tapaamispyynnÃ¶stÃ¤si. "
      }
    },
    this_field_is_required: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "TÃ¤mÃ¤ kenttÃ¤ on pakollinen."
      }
    },
    unable_to_fetch_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Kalenteria ei lÃ¶ydy"
      }
    },
    unable_to_schedule_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Emme pystyneet aikatauluttamaan tapaamistasi. YritÃ¤ uudelleen."
      }
    },
    DURATION: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "KESTO"
      }
    },
    DATEANDTIME: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "PÃ„IVÃ„MÃ„Ã„RÃ„ JA KELLONAIKA"
      }
    },
    REPEATS: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "TOISTOT"
      }
    },
    type_here_to_search_timezone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Hae aikavyÃ¶hykettÃ¤ kirjoittamalla tÃ¤hÃ¤n"
      }
    },
    OLD: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VANHA"
      }
    },
    continue: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Jatka"
      }
    },
    fetching_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "EtsitÃ¤Ã¤n aikavÃ¤lejÃ¤..."
      }
    },
    fetching_recurring_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "EtsitÃ¤Ã¤n toistuvia aikavÃ¤lejÃ¤..."
      }
    },
    schedule_meeting: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Aikatauluta kokous"
      }
    },
    scheduling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Aikataulutetaan..."
      }
    },
    reschedule: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SiirrÃ¤ ajankohtaa"
      }
    },
    rescheduling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SiirretÃ¤Ã¤n ajankohtaa..."
      }
    },
    cancel_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Peruuta tapaaminen"
      }
    },
    cancelling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Peruutetaan..."
      }
    },
    back: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Takaisin"
      }
    },
    enter_your_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Anna tietosi"
      }
    },
    finding_open_available_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "EtsitÃ¤Ã¤n avoimia kÃ¤ytettÃ¤vissÃ¤ olevia aikavÃ¤lejÃ¤..."
      }
    },
    no_slots_available_in: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Vapaita aikavÃ¤lejÃ¤ ei ole kohdassa"
      }
    },
    select_a_date: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Valitse pÃ¤ivÃ¤"
      }
    },
    choose_time_slot: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Valitse aikavÃ¤li"
      }
    },
    select_a_date_and_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Valitse pÃ¤ivÃ¤mÃ¤Ã¤rÃ¤ ja kellonaika"
      }
    },
    cancellation_reason: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Peruutuksen syy"
      }
    },
    your_appointment_has_been_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Kokouksesi on peruttu."
      }
    },
    more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "lisÃ¤Ã¤..."
      }
    },
    less: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "vÃ¤hemmÃ¤n"
      }
    },
    your_meeting_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Kokouksesi on siirretty"
      }
    },
    your_meeting_has_been_scheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Kokouksesi on ajoitettu"
      }
    },
    any_staff_header: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Kuka tahansa saatavilla oleva henkilÃ¶kunnan jÃ¤sen"
      }
    },
    any_staff_description: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Voit maksimoida kÃ¤ytettÃ¤vissÃ¤ olevien aikavÃ¤lien kokonaismÃ¤Ã¤rÃ¤n valitsemalla tÃ¤mÃ¤n vaihtoehdon"
      }
    },
    select_staff_for: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Valitse henkilÃ¶kunnan jÃ¤sen"
      }
    },
    select_service: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Valitse palvelu"
      }
    },
    next: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seuraava"
      }
    },
    slot: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Paikka"
      }
    },
    slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Paikat"
      }
    },
    your_appointment_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Tapaamisesi on ajoitettu uudelleen"
      }
    },
    your_appointment_has_been_scheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Tapaamisesi on ajoitettu"
      }
    },
    your_appointment_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Tapaamisesi on peruttu."
      }
    },
    am: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "ap."
      }
    },
    pm: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "ip."
      }
    },
    hr: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Tunnit"
      }
    },
    minutes: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Minuutit"
      }
    },
    january: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "tammikuu"
      }
    },
    february: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "helmikuu"
      }
    },
    march: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "maaliskuu"
      }
    },
    april: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "huhtikuu"
      }
    },
    may: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "toukokuu"
      }
    },
    june: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "kesÃ¤kuu"
      }
    },
    july: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "heinÃ¤kuu"
      }
    },
    august: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "elokuu"
      }
    },
    september: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "syyskuu"
      }
    },
    october: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "lokakuu"
      }
    },
    november: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "marraskuu"
      }
    },
    december: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "joulukuu"
      }
    },
    sunday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "sunnuntai"
      }
    },
    monday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "maanantai"
      }
    },
    tuesday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "tiistai"
      }
    },
    wednesday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "keskiviikko"
      }
    },
    thursday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "torstai"
      }
    },
    friday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "perjantai"
      }
    },
    saturday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "lauantai"
      }
    },
    timezone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "AikavyÃ¶hyke"
      }
    },
    select: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Valitse"
      }
    },
    select_date_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Valitse pÃ¤ivÃ¤mÃ¤Ã¤rÃ¤ ja kellonaika"
      }
    },
    time_zone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "AikavyÃ¶hyke"
      }
    },
    duration: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Kesto"
      }
    },
    enter_details: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Anna tiedot"
      }
    },
    schedule_event: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Aikatauluta tapahtuma"
      }
    },
    show_less: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "NÃ¤ytÃ¤ vÃ¤hemmÃ¤n"
      }
    },
    show_more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "NÃ¤ytÃ¤ lisÃ¤Ã¤"
      }
    },
    mins: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Minuutit"
      }
    },
    add_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "LisÃ¤Ã¤ palveluita"
      }
    },
    select_different_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Valitse eri palveluita"
      }
    },
    confirm: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Vahvista"
      }
    },
    schedule_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Aikatauluta tapaaminen"
      }
    },
    service_menu_guest_description: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "SinÃ¤ ja "
        }, {
          t: 4,
          k: "guestCount"
        }, {
          t: 3,
          v: " muuta vierasta"
        }]
      }
    },
    max_guest_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Voit varata enintÃ¤Ã¤n "
        }, {
          t: 4,
          k: "count"
        }, {
          t: 3,
          v: " aikavÃ¤liÃ¤ tÃ¤lle palvelulle. Jos haluat varata palvelun lisÃ¤vieraille, valitse eri palvelu samalle aikavÃ¤lille."
        }]
      }
    },
    just_me: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Vain minÃ¤"
      }
    },
    people: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "henkilÃ¶Ã¤"
      }
    },
    selected_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Valitut palvelut"
      }
    },
    choose_service: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Valitse palvelu"
      }
    },
    guest_title: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Vieras "
        }, {
          t: 4,
          k: "count"
        }, {
          t: 3,
          v: " "
        }, {
          t: 4,
          k: "title"
        }]
      }
    },
    with_any_available_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Kenen tahansa kÃ¤ytettÃ¤vissÃ¤ olevan henkilÃ¶kunnan jÃ¤senen kanssa"
      }
    },
    with: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "kanssa"
      }
    },
    select_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Valitse henkilÃ¶kunnan jÃ¤sen"
      }
    },
    total: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "YhteensÃ¤"
      }
    },
    item: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "kohde"
      }
    },
    items: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "kohdetta"
      }
    },
    view_cart: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Katso ostoskori"
      }
    },
    change_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Muuta aikaa"
      }
    },
    staff_busy_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ei varattu: henkilÃ¶kunta on kiireinen"
      }
    },
    your_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Oma tapaamisesi"
      }
    },
    book: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Varaa"
      }
    },
    add: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "LisÃ¤Ã¤"
      }
    },
    scheduling_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Tapaamisen ajoittaminen"
      }
    },
    select_all_services_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Varmista, ettÃ¤ valitset palvelut kaikille vieraille ennen kuin jatkat"
      }
    },
    booking_unsuccessful: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Varaus epÃ¤onnistui; resurssi ei ole tÃ¤llÃ¤ hetkellÃ¤ kÃ¤ytettÃ¤vissÃ¤."
      }
    },
    acceptEssentialCookies: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "HyvÃ¤ksy vÃ¤lttÃ¤mÃ¤ttÃ¶mÃ¤t evÃ¤steet"
      }
    },
    acceptAll: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "HyvÃ¤ksy kaikki"
      }
    },
    ok: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ok"
      }
    },
    previous_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Edellinen aika"
      }
    },
    icloud_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "iCloud Calendar"
      }
    },
    meeting_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Kokous on siirretty"
      }
    },
    google_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Google Calendar"
      }
    },
    outlook_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Outlookin kalenteri"
      }
    },
    deposit_paid: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nyt maksettava mÃ¤Ã¤rÃ¤"
      }
    },
    pay_now: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Maksa nyt"
      }
    },
    total_amount: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Loppusumma"
      }
    },
    paid: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Maksettu"
      }
    },
    terms_and_conditions: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "HyvÃ¤ksy kÃ¤yttÃ¶ehdot"
      }
    },
    email_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ¤hkÃ¶postiosoite on pakollinen"
      }
    },
    cancel_booking: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Peruuta varaus"
      }
    },
    cancel_meeting: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Peruutetaanko kokous?"
      }
    },
    appointment_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Tapaamisesi on peruttu."
      }
    },
    first_name_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Etunimi on pakollinen"
      }
    },
    last_name_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Sukunimi on pakollinen"
      }
    },
    phone_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Puhelinnumero on pakollinen"
      }
    },
    invalid_phone_no: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Virheellinen puhelinnumero"
      }
    },
    enter_location_of_your_choice: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Anna mikÃ¤ tahansa valitsemasi sijainti"
      }
    },
    select_preferred_location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Valitse haluamasi sijainti"
      }
    },
    payment_error_unknown: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Jokin meni pieleen maksussasi. Ole hyvÃ¤ ja YrittÃ¤Ã¤ uudelleen."
      }
    },
    payment_process_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Virhe yritettÃ¤essÃ¤ TyÃ¶nkulkua maksuasi. Ole hyvÃ¤ ja YrittÃ¤Ã¤ uudelleen."
      }
    },
    payment_failed: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Maksu epÃ¤onnistui"
      }
    },
    slot_no_longer_available: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "AikavÃ¤li SinÃ¤/Te have Valittu ei ole enÃ¤Ã¤ saatavilla"
      }
    }
  }
  , P2 = {
    guest_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "InvitÃ©s"
      }
    },
    add_guest_button: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ajouter un invitÃ©"
      }
    },
    guest_name_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nom des invitÃ©s"
      }
    },
    guest_name_placeholder: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nom"
      }
    },
    guest_name_req_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Le nom est obligatoire"
      }
    },
    guest_name_invalid_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Le nom n'est pas valide"
      }
    },
    guest_email_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Courriel des invitÃ©s"
      }
    },
    guest_email_placeholder: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Courriel"
      }
    },
    guest_email_req_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Le courriel est obligatoire"
      }
    },
    guest_email_invalid_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Le courriel est invalide!"
      }
    },
    guest_email_unique_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Lâ€™identifiant de courriel doit Ãªtre unique pour chaque invitÃ©."
      }
    },
    guest_count_only_button: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ajouter le nombre d'invitÃ©s"
      }
    },
    guest_count_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Le nombre d'invitÃ©s doit Ãªtre compris entre 1 et 100."
      }
    },
    seat_not_available_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Le nombre de siÃ¨ges disponibles pour ce crÃ©neau est limitÃ© Ã "
      }
    },
    default_consent_text: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Je confirme vouloir recevoir du contenu de cette entreprise en utilisant toutes les informations de contact que j'ai fournies."
      }
    },
    add_to_google_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ajouter Ã  Google Agenda"
      }
    },
    add_to_outlook_ical: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ajouter Ã  Outlook / iCal"
      }
    },
    additional_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Information complÃ©mentaire"
      }
    },
    anything_youd_like_to_know_before_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Y a-t-il des informations que vous aimeriez partager avec nous avant votre rendez-vous?"
      }
    },
    appointment_request_form: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Formulaire de demande de rendez-vous"
      }
    },
    appointment_requested: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Rendez-vous demandÃ©"
      }
    },
    available_starting_times_for: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Heures de dÃ©but disponibles pour"
      }
    },
    book_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Prendre rendez-vous"
      }
    },
    cancel: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Annuler"
      }
    },
    cannot_find_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Impossible de trouver le calendrier."
      }
    },
    contact_you_shortly_with_contact_method: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Nous vous contacterons bientÃ´t pour confirmer votre demande. Veuillez appeler notre bureau au "
        }, {
          t: 4,
          k: "contactMethod"
        }, {
          t: 3,
          v: " si vous avez des questions."
        }]
      }
    },
    date_of_birth: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Date de naissance"
      }
    },
    email: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Courriel"
      }
    },
    first_name: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "PrÃ©nom"
      }
    },
    go_to_next_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Recherchez le prochain crÃ©neau disponible."
      }
    },
    last_name: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nom de famille"
      }
    },
    load_more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "En savoir plus"
      }
    },
    location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Emplacement"
      }
    },
    location_is_required: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "L'emplacement est requis."
      }
    },
    please_enter_location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Veuillez saisir un emplacement"
      }
    },
    payment_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "DÃ©tails du Paiement"
      }
    },
    next_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Le mois prochain"
      }
    },
    no_calendar_event_found: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Aucun Ã©vÃ©nement de calendrier trouvÃ©"
      }
    },
    no_slot_available_this_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Aucun crÃ©neau disponible ce mois-ci."
      }
    },
    no_slots_available: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Aucun crÃ©neau disponible"
      }
    },
    no_timezone_found: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Aucun fuseau horaire n'a Ã©tÃ© trouvÃ©!"
      }
    },
    select_staff_member: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ©lectionnez un membre du personnel"
      }
    },
    choose_any_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Tout disponible"
      }
    },
    payment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Paiement"
      }
    },
    phone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "TÃ©lÃ©phone"
      }
    },
    pick_a_date_and_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Choisissez une date et une heure"
      }
    },
    please_choose_at_least_one_option: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Veuillez choisir au moins une option"
      }
    },
    previous_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mois prÃ©cÃ©dent"
      }
    },
    reschedule_current_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Replanifiez (heure actuelleÂ : "
        }, {
          t: 4,
          k: "time"
        }, {
          t: 3,
          v: ")"
        }]
      }
    },
    search: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Rechercher"
      }
    },
    secure_payment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Paiement sÃ©curisÃ©"
      }
    },
    select_date: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ©lectionner la date"
      }
    },
    select_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ©lectionner l'heure"
      }
    },
    skip: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ignorer"
      }
    },
    submit: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Soumettre"
      }
    },
    thank_you: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Merci beaucoup"
      }
    },
    thank_you_for_your_appointment_request: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Merci pour votre demande de rendez-vous. "
      }
    },
    this_field_is_required: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ce champ est obligatoire."
      }
    },
    unable_to_fetch_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Impossible de trouver le calendrier"
      }
    },
    unable_to_schedule_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nous n'avons pas pu planifier votre rendez-vous. Veuillez rÃ©essayer."
      }
    },
    DURATION: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "DURÃ‰E"
      }
    },
    DATEANDTIME: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "DATE ET HEURE"
      }
    },
    REPEATS: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "RÃ‰PÃ‰TITIONS"
      }
    },
    type_here_to_search_timezone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Tapez ici pour rechercher un fuseau horaire"
      }
    },
    OLD: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "ANCIEN"
      }
    },
    continue: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Continuer"
      }
    },
    fetching_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Recherche de crÃ©neaux..."
      }
    },
    fetching_recurring_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Trouver des crÃ©neaux rÃ©currents..."
      }
    },
    schedule_meeting: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Planifier une rÃ©union"
      }
    },
    scheduling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Planificationâ€¦"
      }
    },
    reschedule: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Replanifier"
      }
    },
    rescheduling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Replanification..."
      }
    },
    cancel_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Annuler le rendez-vous"
      }
    },
    cancelling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Annulation en cours..."
      }
    },
    back: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Retour"
      }
    },
    enter_your_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Saisissez vos dÃ©tails"
      }
    },
    finding_open_available_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Recherche de crÃ©neaux disponibles..."
      }
    },
    no_slots_available_in: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Aucun crÃ©neau disponible Ã "
      }
    },
    select_a_date: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ©lectionner une date"
      }
    },
    choose_time_slot: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Choisissez une fenÃªtre de temps"
      }
    },
    select_a_date_and_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ©lectionnez une date et une heure"
      }
    },
    cancellation_reason: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Raison de l'annulation"
      }
    },
    your_appointment_has_been_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Votre rÃ©union a Ã©tÃ© annulÃ©e."
      }
    },
    more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Plus..."
      }
    },
    less: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "moins"
      }
    },
    your_meeting_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Votre rÃ©union a Ã©tÃ© reprogrammÃ©e"
      }
    },
    your_meeting_has_been_scheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Votre rÃ©union a Ã©tÃ© programmÃ©e"
      }
    },
    any_staff_header: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Tout membre du personnel disponible"
      }
    },
    any_staff_description: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Pour maximiser le nombre total de crÃ©neaux disponibles, sÃ©lectionnez cette option."
      }
    },
    select_staff_for: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ©lectionnez le personnel pour"
      }
    },
    select_service: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ©lectionner un service"
      }
    },
    next: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Suivant"
      }
    },
    slot: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SiÃ¨ge"
      }
    },
    slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SiÃ¨ges"
      }
    },
    your_appointment_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Votre rendez-vous a Ã©tÃ© reprogrammÃ©."
      }
    },
    your_appointment_has_been_scheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Votre rendez-vous a Ã©tÃ© programmÃ©."
      }
    },
    your_appointment_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Votre rendez-vous a Ã©tÃ© annulÃ©."
      }
    },
    am: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "AM"
      }
    },
    pm: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "PM"
      }
    },
    hr: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ressources humaines"
      }
    },
    minutes: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Minutes"
      }
    },
    january: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Janvier"
      }
    },
    february: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "FÃ©vrier"
      }
    },
    march: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mars"
      }
    },
    april: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Avril"
      }
    },
    may: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mai"
      }
    },
    june: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Juin"
      }
    },
    july: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Juillet"
      }
    },
    august: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "AoÃ»t"
      }
    },
    september: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Septembre"
      }
    },
    october: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Octobre"
      }
    },
    november: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Novembre"
      }
    },
    december: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "DÃ©cembre"
      }
    },
    sunday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Dimanche"
      }
    },
    monday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Lundi"
      }
    },
    tuesday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mardi"
      }
    },
    wednesday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mercredi"
      }
    },
    thursday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Jeudi"
      }
    },
    friday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Vendredi"
      }
    },
    saturday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Samedi"
      }
    },
    timezone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Fuseau horaire"
      }
    },
    select: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ©lectionner"
      }
    },
    select_date_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ©lectionner la date et l'heure"
      }
    },
    time_zone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Fuseau horaire"
      }
    },
    duration: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "DurÃ©e"
      }
    },
    enter_details: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Saisissez les dÃ©tails"
      }
    },
    schedule_event: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Planifier un Ã©vÃ©nement"
      }
    },
    show_less: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Afficher moins"
      }
    },
    show_more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Afficher plus"
      }
    },
    mins: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Min"
      }
    },
    add_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ajouter des services"
      }
    },
    select_different_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ©lectionner diffÃ©rents services"
      }
    },
    confirm: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Confirmer"
      }
    },
    schedule_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Planifier un rendez-vous"
      }
    },
    service_menu_guest_description: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Vous et "
        }, {
          t: 4,
          k: "guestCount"
        }, {
          t: 3,
          v: " autre(s) invitÃ©(s)"
        }]
      }
    },
    max_guest_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Vous pouvez rÃ©server jusqu'Ã  "
        }, {
          t: 4,
          k: "count"
        }, {
          t: 3,
          v: " crÃ©neaux pour ce service. Pour ajouter des invitÃ©s supplÃ©mentaires, veuillez sÃ©lectionner un autre service pour le mÃªme crÃ©neau horaire."
        }]
      }
    },
    just_me: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Moi seul"
      }
    },
    people: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Les personnes"
      }
    },
    selected_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Services sÃ©lectionnÃ©s"
      }
    },
    choose_service: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ©lectionner un service"
      }
    },
    guest_title: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "InvitÃ© "
        }, {
          t: 4,
          k: "count"
        }, {
          t: 3,
          v: " "
        }, {
          t: 4,
          k: "title"
        }]
      }
    },
    with_any_available_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Avec n'importe quel personnel disponible"
      }
    },
    with: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "avec"
      }
    },
    select_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ©lectionnez le personnel"
      }
    },
    total: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Total"
      }
    },
    item: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "article"
      }
    },
    items: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "articles"
      }
    },
    view_cart: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Voir le panier"
      }
    },
    change_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Heure de changement"
      }
    },
    staff_busy_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Non rÃ©servÃ©Â : le personnel est occupÃ©"
      }
    },
    your_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Votre rendez-vous"
      }
    },
    book: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "RÃ©server"
      }
    },
    add: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ajouter"
      }
    },
    scheduling_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Planification de rendez-vous"
      }
    },
    select_all_services_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Veuillez vous assurer de sÃ©lectionner les services pour tous les invitÃ©s avant de procÃ©der."
      }
    },
    booking_unsuccessful: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ã‰chec de la rÃ©servation, ressource indisponible pour le moment."
      }
    },
    acceptEssentialCookies: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Acceptez les tÃ©moins essentiels"
      }
    },
    acceptAll: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Accepter tout"
      }
    },
    ok: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "OK"
      }
    },
    previous_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Heure prÃ©cÃ©dente"
      }
    },
    icloud_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Calendrier iCloud"
      }
    },
    meeting_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "La rÃ©union a Ã©tÃ© reprogrammÃ©e"
      }
    },
    google_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Google Agenda"
      }
    },
    outlook_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Calendrier Outlook"
      }
    },
    deposit_paid: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Montant Ã  payer maintenant"
      }
    },
    pay_now: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Payer maintenant"
      }
    },
    total_amount: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Montant total"
      }
    },
    paid: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "PayÃ©"
      }
    },
    terms_and_conditions: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Veuillez accepter les conditions gÃ©nÃ©rales."
      }
    },
    email_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Le courriel est obligatoire"
      }
    },
    cancel_booking: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Annuler la rÃ©servation"
      }
    },
    cancel_meeting: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Annuler la rÃ©union?"
      }
    },
    appointment_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Votre rendez-vous est annulÃ©."
      }
    },
    first_name_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Le prÃ©nom est obligatoire"
      }
    },
    last_name_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Le nom est obligatoire"
      }
    },
    phone_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Le tÃ©lÃ©phone est obligatoire"
      }
    },
    invalid_phone_no: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "NumÃ©ro de tÃ©lÃ©phone non valide"
      }
    },
    enter_location_of_your_choice: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Entrez un emplacement de votre choix"
      }
    },
    select_preferred_location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ©lectionnez l'emplacement prÃ©fÃ©rÃ©"
      }
    },
    payment_error_unknown: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Une erreur s'est produite avec votre paiement. Veuillez rÃ©essayer."
      }
    },
    payment_process_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Une erreur s'est produite lors de la tentative de flux votre paiement. Veuillez rÃ©essayer."
      }
    },
    payment_failed: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Le Paiement est Ã©chouÃ©"
      }
    },
    slot_no_longer_available: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Le Fente Vous avez sÃ©lectionnÃ© n'est plus disponible"
      }
    }
  }
  , L2 = {
    guest_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "InvitÃ©s"
      }
    },
    add_guest_button: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ajouter un invitÃ©"
      }
    },
    guest_name_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nom de l'invitÃ©"
      }
    },
    guest_name_placeholder: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nom"
      }
    },
    guest_name_req_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Le nom est obligatoire"
      }
    },
    guest_name_invalid_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Le nom n'est pas valide"
      }
    },
    guest_email_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Adresse e-mail de l'invitÃ©"
      }
    },
    guest_email_placeholder: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Adresse e-mail"
      }
    },
    guest_email_req_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "L'adresse e-mail est obligatoire"
      }
    },
    guest_email_invalid_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "L'adresse e-mail n'est pas valide"
      }
    },
    guest_email_unique_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "L'identifiant Adresse e-mail doit Ãªtre unique pour les invitÃ©s."
      }
    },
    guest_count_only_button: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ajouter le nombre d'invitÃ©s"
      }
    },
    guest_count_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Le nombre d'invitÃ©s doit Ãªtre compris entre 1 et 100"
      }
    },
    seat_not_available_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Le nombre total de places disponibles pour ce crÃ©neau est seulement de"
      }
    },
    default_consent_text: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Je confirme que j'autorise cette entreprise Ã  utiliser toutes les coordonnÃ©es que j'ai fournies pour m'envoyer du contenu."
      }
    },
    add_to_google_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ajouter Ã  Google Agenda"
      }
    },
    add_to_outlook_ical: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ajouter Ã  Outlook / iCal"
      }
    },
    additional_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Informations complÃ©mentaires"
      }
    },
    anything_youd_like_to_know_before_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Souhaitez-vous nous transmettre des informations avant votre rendez-vousÂ ?"
      }
    },
    appointment_request_form: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Formulaire de demande de rendez-vous"
      }
    },
    appointment_requested: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Demande de rendez-vous"
      }
    },
    available_starting_times_for: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Heures de dÃ©but disponibles pour"
      }
    },
    book_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Prendre rendez-vous"
      }
    },
    cancel: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Annuler"
      }
    },
    cannot_find_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Calendrier introuvable"
      }
    },
    contact_you_shortly_with_contact_method: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Nous vous contacterons bientÃ´t pour confirmer votre demande. Veuillez appeler notre bureau au "
        }, {
          t: 4,
          k: "contactMethod"
        }, {
          t: 3,
          v: " si vous avez des questions."
        }]
      }
    },
    date_of_birth: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Date de naissance"
      }
    },
    email: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "E-mail"
      }
    },
    first_name: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "PrÃ©nom"
      }
    },
    go_to_next_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Trouver le prochain crÃ©neau disponible"
      }
    },
    last_name: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nom"
      }
    },
    load_more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Charger plus"
      }
    },
    location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Lieu"
      }
    },
    location_is_required: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Le lieu est obligatoire."
      }
    },
    please_enter_location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Veuillez saisir un emplacement"
      }
    },
    payment_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Informations de paiement"
      }
    },
    next_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Le mois prochain"
      }
    },
    no_calendar_event_found: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Aucun Ã©vÃ©nement de calendrier trouvÃ©"
      }
    },
    no_slot_available_this_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Aucun crÃ©neau disponible ce mois-ci."
      }
    },
    no_slots_available: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Aucun crÃ©neau disponible"
      }
    },
    no_timezone_found: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Aucun fuseau horaire trouvÃ©Â !"
      }
    },
    select_staff_member: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ©lectionnez un membre du personnel"
      }
    },
    choose_any_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Toutes les options disponibles"
      }
    },
    payment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Paiement"
      }
    },
    phone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "TÃ©lÃ©phone"
      }
    },
    pick_a_date_and_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Choisissez une date et une heure"
      }
    },
    please_choose_at_least_one_option: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Veuillez choisir au moins une option"
      }
    },
    previous_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Le mois prÃ©cÃ©dent"
      }
    },
    reschedule_current_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Reporter (horaire actuelÂ : "
        }, {
          t: 4,
          k: "time"
        }, {
          t: 3,
          v: ")"
        }]
      }
    },
    search: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Rechercher"
      }
    },
    secure_payment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Paiement sÃ©curisÃ©"
      }
    },
    select_date: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ©lectionner la date"
      }
    },
    select_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ©lectionner l'heure"
      }
    },
    skip: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ignorer"
      }
    },
    submit: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Envoyer"
      }
    },
    thank_you: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Merci"
      }
    },
    thank_you_for_your_appointment_request: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Merci pour votre demande de rendez-vous. "
      }
    },
    this_field_is_required: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ce champ est obligatoire."
      }
    },
    unable_to_fetch_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Calendrier introuvable"
      }
    },
    unable_to_schedule_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nous n'avons pas pu planifier votre rendez-vous. Veuillez rÃ©essayer."
      }
    },
    DURATION: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "DURÃ‰E"
      }
    },
    DATEANDTIME: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "DATE ET HEURE"
      }
    },
    REPEATS: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "RÃ‰PÃ‰TITIONS"
      }
    },
    type_here_to_search_timezone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Recherchez votre fuseau horaire ici"
      }
    },
    OLD: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "ANCIEN"
      }
    },
    continue: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Continuer"
      }
    },
    fetching_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Recherche de crÃ©neauxâ€¦"
      }
    },
    fetching_recurring_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Recherche de crÃ©neaux rÃ©currentsâ€¦"
      }
    },
    schedule_meeting: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Planifier une rÃ©union"
      }
    },
    scheduling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Planificationâ€¦"
      }
    },
    reschedule: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Reporter"
      }
    },
    rescheduling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Replanificationâ€¦"
      }
    },
    cancel_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Annuler le rendez-vous"
      }
    },
    cancelling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Annulationâ€¦"
      }
    },
    back: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Retour"
      }
    },
    enter_your_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Saisissez vos informations"
      }
    },
    finding_open_available_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Recherche de crÃ©neaux disponiblesâ€¦"
      }
    },
    no_slots_available_in: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Aucun crÃ©neau disponible en"
      }
    },
    select_a_date: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ©lectionnez une date"
      }
    },
    choose_time_slot: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ©lectionner un crÃ©neau"
      }
    },
    select_a_date_and_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ©lectionnez une date et une heure"
      }
    },
    cancellation_reason: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Raison de l'annulation"
      }
    },
    your_appointment_has_been_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Votre rÃ©union a bien Ã©tÃ© annulÃ©e."
      }
    },
    more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "plusâ€¦"
      }
    },
    less: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "moins"
      }
    },
    your_meeting_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Votre rÃ©union a Ã©tÃ© reprogrammÃ©e"
      }
    },
    your_meeting_has_been_scheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Votre rÃ©union a Ã©tÃ© programmÃ©e"
      }
    },
    any_staff_header: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Du personnel disponible"
      }
    },
    any_staff_description: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Pour maximiser le nombre total de crÃ©neaux disponibles, sÃ©lectionnez cette option."
      }
    },
    select_staff_for: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ©lectionnez le personnel pour"
      }
    },
    select_service: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ©lectionner un service"
      }
    },
    next: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Suivant"
      }
    },
    slot: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Place"
      }
    },
    slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Places"
      }
    },
    your_appointment_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Votre rendez-vous a Ã©tÃ© reprogrammÃ©"
      }
    },
    your_appointment_has_been_scheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Votre rendez-vous a Ã©tÃ© programmÃ©"
      }
    },
    your_appointment_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Votre rendez-vous a Ã©tÃ© annulÃ©."
      }
    },
    am: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Matin"
      }
    },
    pm: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "AprÃ¨s-midi"
      }
    },
    hr: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "H"
      }
    },
    minutes: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Minutes"
      }
    },
    january: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Janvier"
      }
    },
    february: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "FÃ©vrier"
      }
    },
    march: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mars"
      }
    },
    april: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Avril"
      }
    },
    may: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mai"
      }
    },
    june: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Juin"
      }
    },
    july: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Juillet"
      }
    },
    august: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "AoÃ»t"
      }
    },
    september: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Septembre"
      }
    },
    october: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Octobre"
      }
    },
    november: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Novembre"
      }
    },
    december: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "DÃ©cembre"
      }
    },
    sunday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Dimanche"
      }
    },
    monday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Lundi"
      }
    },
    tuesday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mardi"
      }
    },
    wednesday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mercredi"
      }
    },
    thursday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Jeudi"
      }
    },
    friday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Vendredi"
      }
    },
    saturday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Samedi"
      }
    },
    timezone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Fuseau horaire"
      }
    },
    select: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ©lectionner"
      }
    },
    select_date_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ©lectionner la date et l'heure"
      }
    },
    time_zone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Fuseau horaire"
      }
    },
    duration: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "DurÃ©e"
      }
    },
    enter_details: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Saisissez les informations"
      }
    },
    schedule_event: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Programmer un Ã©vÃ©nement"
      }
    },
    show_less: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Afficher moins"
      }
    },
    show_more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Afficher plus"
      }
    },
    mins: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Min"
      }
    },
    add_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ajouter des services"
      }
    },
    select_different_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ©lectionner diffÃ©rents services"
      }
    },
    confirm: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Confirmer"
      }
    },
    schedule_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Programmer un rendez-vous"
      }
    },
    service_menu_guest_description: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Vous et "
        }, {
          t: 4,
          k: "guestCount"
        }, {
          t: 3,
          v: "Â autre(s) invitÃ©(s)"
        }]
      }
    },
    max_guest_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Vous pouvez rÃ©server jusqu'Ã  "
        }, {
          t: 4,
          k: "count"
        }, {
          t: 3,
          v: "Â crÃ©neaux pour ce service. Pour rÃ©server au nom d'autres personnes, veuillez sÃ©lectionner un service diffÃ©rent pour le mÃªme crÃ©neau."
        }]
      }
    },
    just_me: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Moi"
      }
    },
    people: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "personnes"
      }
    },
    selected_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Services sÃ©lectionnÃ©s"
      }
    },
    choose_service: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ©lectionnez un service"
      }
    },
    guest_title: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "InvitÃ© "
        }, {
          t: 4,
          k: "count"
        }, {
          t: 3,
          v: " "
        }, {
          t: 4,
          k: "title"
        }]
      }
    },
    with_any_available_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Avec n'importe quel membre du personnel disponible"
      }
    },
    with: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "avec"
      }
    },
    select_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ©lectionner un membre du personnel"
      }
    },
    total: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Total"
      }
    },
    item: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ã©lÃ©ment"
      }
    },
    items: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ã©lÃ©ments"
      }
    },
    view_cart: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Afficher le panier"
      }
    },
    change_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Modifier l'heure"
      }
    },
    staff_busy_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Non rÃ©servÃ©Â : personnel occupÃ©"
      }
    },
    your_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Votre rendez-vous"
      }
    },
    book: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "RÃ©server"
      }
    },
    add: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ajouter"
      }
    },
    scheduling_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Programmation de rendez-vous"
      }
    },
    select_all_services_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Veuillez sÃ©lectionner les services pour tout le monde avant de continuer"
      }
    },
    booking_unsuccessful: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ã‰chec de la rÃ©servation, ressource indisponible pour le moment."
      }
    },
    acceptEssentialCookies: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Accepter les cookies essentiels"
      }
    },
    acceptAll: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Tout accepter"
      }
    },
    ok: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "OK"
      }
    },
    previous_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Heure prÃ©cÃ©dente"
      }
    },
    icloud_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Calendrier iCloud"
      }
    },
    meeting_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "La rÃ©union a Ã©tÃ© reprogrammÃ©e"
      }
    },
    google_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Google Agenda"
      }
    },
    outlook_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Calendrier Outlook"
      }
    },
    deposit_paid: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Montant Ã  payer maintenant"
      }
    },
    pay_now: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Payer maintenant"
      }
    },
    total_amount: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Montant total"
      }
    },
    paid: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "PayÃ©"
      }
    },
    terms_and_conditions: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Veuillez accepter les conditions gÃ©nÃ©rales."
      }
    },
    email_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "L'adresse e-mail est obligatoire"
      }
    },
    cancel_booking: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Annuler la rÃ©servation"
      }
    },
    cancel_meeting: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Annuler la rÃ©unionÂ ?"
      }
    },
    appointment_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Votre rendez-vous est annulÃ©."
      }
    },
    first_name_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Le prÃ©nom est obligatoire"
      }
    },
    last_name_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Le nom est obligatoire"
      }
    },
    phone_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Le numÃ©ro de tÃ©lÃ©phone est obligatoire"
      }
    },
    invalid_phone_no: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "NumÃ©ro de tÃ©lÃ©phone non valide"
      }
    },
    enter_location_of_your_choice: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Saisissez un emplacement de votre choix"
      }
    },
    select_preferred_location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ©lectionnez votre adresse prÃ©fÃ©rÃ©e"
      }
    },
    payment_error_unknown: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Une erreur s'est produite lors de votre paiement. Veuillez rÃ©essayer."
      }
    },
    payment_process_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Une erreur s'est produite lors de la tentative de flux de travail sur votre paiement. Veuillez rÃ©essayer."
      }
    },
    payment_failed: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Le paiement a Ã©chouÃ©"
      }
    },
    slot_no_longer_available: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Le CrÃ©neau que vous avez sÃ©lectionnÃ© n'est plus disponible"
      }
    }
  }
  , R2 = {
    guest_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VendÃ©gek"
      }
    },
    add_guest_button: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VendÃ©g hozzÃ¡adÃ¡sa"
      }
    },
    guest_name_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VendÃ©g neve"
      }
    },
    guest_name_placeholder: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "NÃ©v"
      }
    },
    guest_name_req_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "A nÃ©v megadÃ¡sa kÃ¶telezÅ‘"
      }
    },
    guest_name_invalid_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "A nÃ©v Ã©rvÃ©nytelen"
      }
    },
    guest_email_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VendÃ©g e-mail"
      }
    },
    guest_email_placeholder: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Email"
      }
    },
    guest_email_req_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "E-mail megadÃ¡sa kÃ¶telezÅ‘"
      }
    },
    guest_email_invalid_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Az e-mail cÃ­m Ã©rvÃ©nytelen!"
      }
    },
    guest_email_unique_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Az e-mail azonosÃ­tÃ³nak egyedinek kell lennie a vendÃ©gek szÃ¡mÃ¡ra."
      }
    },
    guest_count_only_button: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VendÃ©gszÃ¡m hozzÃ¡adÃ¡sa"
      }
    },
    guest_count_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "A vendÃ©gek szÃ¡mÃ¡nak 1 Ã©s 100 kÃ¶zÃ¶tt kell lennie"
      }
    },
    seat_not_available_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Total available seats for this slot is only"
      }
    },
    default_consent_text: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Kijelentem, hogy tartalmat szeretnÃ©k kapni ettÅ‘l a cÃ©gtÅ‘l az Ã¡ltalam megadott elÃ©rhetÅ‘sÃ©geken."
      }
    },
    add_to_google_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "HozzÃ¡adas a Google NaptÃ¡rhoz"
      }
    },
    add_to_outlook_ical: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "HozzÃ¡adÃ¡s Outlook / iCal naptÃ¡rhoz"
      }
    },
    additional_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "TovÃ¡bbi informÃ¡ciÃ³k"
      }
    },
    anything_youd_like_to_know_before_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Van bÃ¡rmi egyÃ©bb amirÅ‘l tudnunk kellene a talÃ¡lkozÃ³nk elÃ¶tt?"
      }
    },
    appointment_request_form: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "IdÅ‘pont EgyeztetÃ©s"
      }
    },
    appointment_requested: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "IdÅ‘pont EgyeztetÃ©s ElkÃ¼ldve"
      }
    },
    available_starting_times_for: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "ElÃ©rhetÅ‘ IdÅ‘pontok"
      }
    },
    book_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "IdÅ‘pont egyeztetÃ©s"
      }
    },
    cancel: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "TÃ¶rlÃ©s"
      }
    },
    cannot_find_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "A naptÃ¡r nem talÃ¡lhatÃ³"
      }
    },
    contact_you_shortly_with_contact_method: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Hamarosan visszaigazoljuk kÃ©rÃ©sedet. Ha bÃ¡rmilyen kÃ©rdÃ©s merÃ¼lne fel, hÃ­vd a kÃ¶vetkezÅ‘ szÃ¡mot: "
        }, {
          t: 4,
          k: "contactMethod"
        }]
      }
    },
    date_of_birth: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SzÃ¼letÃ©si dÃ¡tum"
      }
    },
    email: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Email"
      }
    },
    first_name: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "KeresztnÃ©v"
      }
    },
    last_name: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VezetÃ©knÃ©v"
      }
    },
    load_more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "TovÃ¡bbi BetÃ¶ltÃ©s"
      }
    },
    location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Hely"
      }
    },
    location_is_required: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "A hely megadÃ¡sa kÃ¶telezÅ‘"
      }
    },
    no_calendar_event_found: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "NaptÃ¡r bejegyzÃ©s nem talÃ¡lhatÃ³"
      }
    },
    no_slot_available_this_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nincs elÃ©rhetÅ‘ idÅ‘pont erre a hÃ³napra."
      }
    },
    no_slots_available: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nincsenek elÃ©rhetÅ‘ idÅ‘pont"
      }
    },
    phone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Telefon"
      }
    },
    pick_a_date_and_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VÃ¡lassz egy DÃ¡tumot Ã©s IdÅ‘pontot"
      }
    },
    please_choose_at_least_one_option: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "KÃ©rlek, hogy vÃ¡lassz legalÃ¡bb egy lehetÅ‘sÃ©get"
      }
    },
    reschedule_current_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "ÃtÃ¼temezÃ©s (A pillanatnyi idÅ‘: "
        }, {
          t: 4,
          k: "time"
        }, {
          t: 3,
          v: ")"
        }]
      }
    },
    search: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "KeresÃ©s"
      }
    },
    secure_payment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "BiztonsÃ¡gos FizetÃ©s"
      }
    },
    select_date: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VÃ¡lassz DÃ¡tumot"
      }
    },
    select_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VÃ¡lassz IdÅ‘pontot"
      }
    },
    skip: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "KihagyÃ¡s"
      }
    },
    submit: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "ElkÃ¼ldÃ©s"
      }
    },
    thank_you: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "KÃ¶szÃ¶nÃ¶m"
      }
    },
    thank_you_for_your_appointment_request: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "KÃ¶szÃ¶nÃ¶m az idÅ‘pont egyeztetÃ©sed."
      }
    },
    this_field_is_required: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ez a mezÅ‘ kÃ¶telezÅ‘."
      }
    },
    go_to_next_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "KÃ¶vetkezÅ‘ hÃ³napra ugrÃ¡s"
      }
    },
    next_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "KÃ¶vetkezÅ‘ hÃ³nap"
      }
    },
    no_timezone_found: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Az IdÅ‘zÃ³na Nem TalÃ¡lhatÃ³!"
      }
    },
    select_staff_member: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VÃ¡lasszon ki egy munkatÃ¡rsat"
      }
    },
    choose_any_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Any Available"
      }
    },
    previous_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "ElÅ‘zÅ‘ hÃ³nap"
      }
    },
    payment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "FizetÃ©s"
      }
    },
    unable_to_fetch_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nincs elÃ©rhetÅ‘ naptÃ¡r"
      }
    },
    schedule_meeting: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "TalÃ¡lkozÃ³ Ã¼temezÃ©se"
      }
    },
    unable_to_schedule_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nem sikerÃ¼lt idÅ‘pontot foglalni. KÃ©rjÃ¼k, prÃ³bÃ¡lja Ãºjra."
      }
    },
    DURATION: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "IDÅTARTAM"
      }
    },
    DATEANDTIME: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "DÃTUM Ã‰S IDÅ"
      }
    },
    REPEATS: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "ISMÃ‰TLÅDÃ‰S"
      }
    },
    type_here_to_search_timezone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ide Ã­rja be a idÅ‘zÃ³na keresÃ©sÃ©hez"
      }
    },
    OLD: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "RÃ‰GI"
      }
    },
    continue: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "FolytatÃ¡s"
      }
    },
    fetching_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "IdÅ‘pontok keresÃ©se..."
      }
    },
    fetching_recurring_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "IsmÃ©tlÅ‘dÅ‘ idÅ‘pontok keresÃ©se..."
      }
    },
    scheduling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "IdÅ‘pont foglalÃ¡sa..."
      }
    },
    reschedule: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "ÃšjraÃ¼temezÃ©s"
      }
    },
    rescheduling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "IdÅ‘pont ÃºjraÃ¼temezÃ©se..."
      }
    },
    cancel_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "IdÅ‘pont lemondÃ¡sa"
      }
    },
    cancelling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "IdÅ‘pont lemondÃ¡sa folyamatban..."
      }
    },
    back: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Vissza"
      }
    },
    enter_your_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Adja meg az adatait"
      }
    },
    finding_open_available_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "ElÃ©rhetÅ‘ idÅ‘pontok keresÃ©se..."
      }
    },
    no_slots_available_in: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nincs elÃ©rhetÅ‘ idÅ‘pont a kÃ¶vetkezÅ‘ben:"
      }
    },
    select_a_date: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VÃ¡lasszon dÃ¡tumot"
      }
    },
    choose_time_slot: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VÃ¡lasszon idÅ‘pontot"
      }
    },
    select_a_date_and_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VÃ¡lasszon dÃ¡tumot Ã©s idÅ‘pontot"
      }
    },
    cancellation_reason: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "LemondÃ¡s indoka"
      }
    },
    your_appointment_has_been_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Az idÅ‘pontja le lett mondva."
      }
    },
    more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "tÃ¶bb..."
      }
    },
    less: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "kevesebb"
      }
    },
    your_meeting_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Az Ã©rtekezlete Ãºj idÅ‘pontra lett Ã¼temezve"
      }
    },
    your_meeting_has_been_scheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Az Ã©rtekezlete Ã¼temezve lett"
      }
    },
    slot: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Slot"
      }
    },
    slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Slots"
      }
    },
    am: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "DÃ©lelÃ¶tt"
      }
    },
    pm: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "DÃ©lutÃ¡n"
      }
    },
    hr: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ã³ra"
      }
    },
    minutes: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Perc"
      }
    },
    january: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "JanuÃ¡r"
      }
    },
    february: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "FebruÃ¡r"
      }
    },
    march: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "MÃ¡rcius"
      }
    },
    april: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ãprilis"
      }
    },
    may: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "MÃ¡jus"
      }
    },
    june: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "JÃºnius"
      }
    },
    july: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Julius"
      }
    },
    august: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Augusztus"
      }
    },
    september: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Szeptember"
      }
    },
    october: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "OktÃ³ber"
      }
    },
    november: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "November"
      }
    },
    december: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "December"
      }
    },
    sunday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VasÃ¡rnap"
      }
    },
    monday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "HÃ©tfÅ‘"
      }
    },
    tuesday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Kedd"
      }
    },
    wednesday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Szerda"
      }
    },
    thursday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "CsÃ¼tÃ¶rtÃ¶k"
      }
    },
    friday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "PÃ©ntek"
      }
    },
    saturday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Szombat"
      }
    },
    timezone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "IdÅ‘zÃ³na"
      }
    },
    select: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Select"
      }
    },
    your_appointment_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Your Appointment has been Rescheduled"
      }
    },
    your_appointment_has_been_scheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Your Appointment has been Scheduled"
      }
    },
    your_appointment_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Your appointment has been cancelled."
      }
    },
    select_date_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Select Date & Time"
      }
    },
    time_zone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Time zone"
      }
    },
    duration: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Duration"
      }
    },
    enter_details: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Enter Details"
      }
    },
    schedule_event: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Schedule Event"
      }
    },
    show_less: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SHOW LESS"
      }
    },
    show_more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SHOW MORE"
      }
    },
    mins: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mins"
      }
    },
    add_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Add Services"
      }
    },
    select_different_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Select different services"
      }
    },
    confirm: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Confirm"
      }
    },
    schedule_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Schedule Appointment"
      }
    },
    service_menu_guest_description: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "You and "
        }, {
          t: 4,
          k: "guestCount"
        }, {
          t: 3,
          v: " more guest(s)"
        }]
      }
    },
    max_guest_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "You can reserve up to "
        }, {
          t: 4,
          k: "count"
        }, {
          t: 3,
          v: " slots for this service. To book for additional guests, kindly select a different service for the same time slot."
        }]
      }
    },
    just_me: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Just Me"
      }
    },
    people: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "people"
      }
    },
    selected_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selected Services"
      }
    },
    choose_service: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Choose a service"
      }
    },
    guest_title: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Guest "
        }, {
          t: 4,
          k: "count"
        }, {
          t: 3,
          v: " "
        }, {
          t: 4,
          k: "title"
        }]
      }
    },
    with_any_available_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "With any available staff"
      }
    },
    with: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "with"
      }
    },
    select_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Select Staff"
      }
    },
    total: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Total"
      }
    },
    item: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "item"
      }
    },
    items: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "items"
      }
    },
    view_cart: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "View Cart"
      }
    },
    change_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Change time"
      }
    },
    staff_busy_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Not booked: Staff busy"
      }
    },
    your_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Your Appointment"
      }
    },
    book: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Book"
      }
    },
    add: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Add"
      }
    },
    scheduling_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Scheduling appointment"
      }
    },
    select_all_services_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Please ensure you select services for all guests before proceeding"
      }
    },
    booking_unsuccessful: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Booking unsuccessful, resource unavailable at the moment."
      }
    },
    any_staff_header: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Any staff available"
      }
    },
    any_staff_description: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "To maximise the total available slot select this option"
      }
    },
    select_staff_for: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Select Staff for"
      }
    },
    acceptEssentialCookies: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Elfogadja az alapvetÅ‘ sÃ¼tiket"
      }
    },
    ok: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Rendben"
      }
    },
    acceptAll: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mindent elfogad"
      }
    },
    previous_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Previous time"
      }
    },
    icloud_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "iCloud Calendar"
      }
    },
    meeting_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Meeting has been Rescheduled"
      }
    },
    google_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Google Calendar"
      }
    },
    outlook_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Outlook Calendar"
      }
    },
    deposit_paid: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Amount to be paid now"
      }
    },
    pay_now: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Pay now"
      }
    },
    total_amount: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Total Amount"
      }
    },
    paid: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Paid"
      }
    },
    terms_and_conditions: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Please accept the terms and conditions"
      }
    },
    email_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Email is required"
      }
    },
    cancel_booking: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Cancel Booking"
      }
    },
    cancel_meeting: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Cancel Meeting ?"
      }
    },
    appointment_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Your appointment is cancelled."
      }
    },
    first_name_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "First Name is required"
      }
    },
    last_name_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Last name is required"
      }
    },
    phone_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Phone is required"
      }
    },
    invalid_phone_no: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Invalid phone number"
      }
    },
    enter_location_of_your_choice: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Enter any location of your choice"
      }
    },
    select_preferred_location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Select preferred location"
      }
    }
  }
  , O2 = {
    guest_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ospiti"
      }
    },
    add_guest_button: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Aggiungi ospite"
      }
    },
    guest_name_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nome dell'ospite"
      }
    },
    guest_name_placeholder: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nome"
      }
    },
    guest_name_req_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Il nome Ã¨ obbligatorio"
      }
    },
    guest_name_invalid_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Il nome non Ã¨ valido"
      }
    },
    guest_email_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Email dell'ospite"
      }
    },
    guest_email_placeholder: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Email"
      }
    },
    guest_email_req_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "L'email Ã¨ obbligatoria"
      }
    },
    guest_email_invalid_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "L'email non Ã¨ valida!"
      }
    },
    guest_email_unique_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "L'ID email deve essere univoco per gli ospiti."
      }
    },
    guest_count_only_button: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Aggiungi il numero di ospiti"
      }
    },
    guest_count_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Il numero di ospiti deve essere compreso tra 1 e 100"
      }
    },
    seat_not_available_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "I posti disponibili per questa fascia oraria sono solo"
      }
    },
    default_consent_text: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Confermo di voler ricevere contenuti da questa azienda utilizzando tutte le informazioni di contatto che fornisco."
      }
    },
    add_to_google_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Aggiungi a Google Calendar"
      }
    },
    add_to_outlook_ical: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Aggiungi a Outlook/iCal"
      }
    },
    additional_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Informazioni aggiuntive"
      }
    },
    anything_youd_like_to_know_before_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "C'Ã¨ qualcosa che vorresti farci sapere prima del tuo appuntamento?"
      }
    },
    appointment_request_form: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Modulo di richiesta appuntamento"
      }
    },
    appointment_requested: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Appuntamento richiesto"
      }
    },
    available_starting_times_for: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Orari di inizio disponibili per"
      }
    },
    book_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Prenota appuntamento"
      }
    },
    cancel: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Annulla"
      }
    },
    cannot_find_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Impossibile trovare il calendario."
      }
    },
    contact_you_shortly_with_contact_method: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Ti contatteremo a breve per confermare la tua richiesta. Per qualsiasi domanda, chiama il nostro ufficio al "
        }, {
          t: 4,
          k: "contactMethod"
        }, {
          t: 3,
          v: " ."
        }]
      }
    },
    date_of_birth: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Data di nascita"
      }
    },
    email: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Email"
      }
    },
    first_name: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nome"
      }
    },
    go_to_next_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Trova la prossima fascia oraria disponibile"
      }
    },
    last_name: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Cognome"
      }
    },
    load_more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Carica di piÃ¹"
      }
    },
    location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Luogoo"
      }
    },
    location_is_required: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Il luogo Ã¨ obbligatorio"
      }
    },
    please_enter_location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Inserisci un Luogo"
      }
    },
    payment_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Dettagli Pagamento"
      }
    },
    next_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Il mese prossimo"
      }
    },
    no_calendar_event_found: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nessun evento del calendario trovato"
      }
    },
    no_slot_available_this_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nessuna fascia oraria disponibile questo mese."
      }
    },
    no_slots_available: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nessuna fascia oraria disponibile"
      }
    },
    no_timezone_found: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nessun fuso orario trovato!"
      }
    },
    select_staff_member: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seleziona un membro del personale"
      }
    },
    choose_any_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Qualsiasi disponibile"
      }
    },
    payment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Pagamento"
      }
    },
    phone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Telefono"
      }
    },
    pick_a_date_and_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Scegli data e ora"
      }
    },
    please_choose_at_least_one_option: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Scegli almeno un'opzione"
      }
    },
    previous_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mese precedente"
      }
    },
    reschedule_current_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Riprogramma (ora attuale: "
        }, {
          t: 4,
          k: "time"
        }, {
          t: 3,
          v: ")"
        }]
      }
    },
    search: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Cerca"
      }
    },
    secure_payment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Pagamento sicuro"
      }
    },
    select_date: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seleziona data"
      }
    },
    select_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seleziona ora"
      }
    },
    skip: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Salta"
      }
    },
    submit: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Invia"
      }
    },
    thank_you: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Grazie!"
      }
    },
    thank_you_for_your_appointment_request: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Grazie per la tua richiesta di appuntamento. "
      }
    },
    this_field_is_required: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Questo campo Ã¨ obbligatorio."
      }
    },
    unable_to_fetch_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Impossibile trovare il calendario"
      }
    },
    unable_to_schedule_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Non siamo riusciti a programmare il tuo appuntamento. Riprova."
      }
    },
    DURATION: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "DURATA"
      }
    },
    DATEANDTIME: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "DATA E ORA"
      }
    },
    REPEATS: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "RIPETIZIONI"
      }
    },
    type_here_to_search_timezone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Digita qui per cercare il fuso orario"
      }
    },
    OLD: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VECCHIO"
      }
    },
    continue: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Continua"
      }
    },
    fetching_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ricerca delle fasce orarie..."
      }
    },
    fetching_recurring_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Individuazione di fasce orarie ricorrenti..."
      }
    },
    schedule_meeting: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Programma incontro"
      }
    },
    scheduling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Programmazione..."
      }
    },
    reschedule: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Riprogramma"
      }
    },
    rescheduling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Riprogrammazione..."
      }
    },
    cancel_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Annulla appuntamento"
      }
    },
    cancelling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Annullamento..."
      }
    },
    back: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Indietro"
      }
    },
    enter_your_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Inserisci i tuoi dati"
      }
    },
    finding_open_available_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ricerca delle fasce orarie disponibili..."
      }
    },
    no_slots_available_in: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nessuna fascia oraria disponibile in"
      }
    },
    select_a_date: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seleziona una data"
      }
    },
    choose_time_slot: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Scegli la fascia oraria"
      }
    },
    select_a_date_and_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seleziona una data e un'ora"
      }
    },
    cancellation_reason: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Motivo dell'annullamento"
      }
    },
    your_appointment_has_been_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Il tuo incontro Ã¨ stato annullato."
      }
    },
    more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "piÃ¹..."
      }
    },
    less: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "meno"
      }
    },
    your_meeting_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Il tuo incontro Ã¨ stato riprogrammato"
      }
    },
    your_meeting_has_been_scheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Il tuo incontro Ã¨ stato programmato."
      }
    },
    any_staff_header: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Qualsiasi disponibile"
      }
    },
    any_staff_description: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Per massimizzare il totale della fasce orarie disponibili, seleziona questa opzione"
      }
    },
    select_staff_for: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seleziona personale per"
      }
    },
    select_service: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seleziona servizio"
      }
    },
    next: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Successivo"
      }
    },
    slot: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Posto"
      }
    },
    slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Posti"
      }
    },
    your_appointment_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Il Suo appuntamento Ã¨ stato riprogrammato"
      }
    },
    your_appointment_has_been_scheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Il tuo appuntamento Ã¨ stato programmato."
      }
    },
    your_appointment_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Il tuo appuntamento Ã¨ stato annullato."
      }
    },
    am: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "AM"
      }
    },
    pm: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "PM"
      }
    },
    hr: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ore"
      }
    },
    minutes: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Minuti"
      }
    },
    january: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Gennaio"
      }
    },
    february: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Febbraio"
      }
    },
    march: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Marzo"
      }
    },
    april: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Aprile"
      }
    },
    may: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Maggio"
      }
    },
    june: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Giugno"
      }
    },
    july: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Luglio"
      }
    },
    august: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Agosto"
      }
    },
    september: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Settembre"
      }
    },
    october: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ottobre"
      }
    },
    november: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Novembre"
      }
    },
    december: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Dicembre"
      }
    },
    sunday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Domenica"
      }
    },
    monday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "LunedÃ¬"
      }
    },
    tuesday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "MartedÃ¬"
      }
    },
    wednesday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "MercoledÃ¬"
      }
    },
    thursday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "GiovedÃ¬"
      }
    },
    friday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VenerdÃ¬"
      }
    },
    saturday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Sabato"
      }
    },
    timezone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Fuso orario"
      }
    },
    select: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seleziona"
      }
    },
    select_date_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seleziona data e ora"
      }
    },
    time_zone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Fuso orario"
      }
    },
    duration: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Durata"
      }
    },
    enter_details: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Inserisci le informazioni"
      }
    },
    schedule_event: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Programma evento"
      }
    },
    show_less: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mostra meno"
      }
    },
    show_more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mostra di piÃ¹"
      }
    },
    mins: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Minuti"
      }
    },
    add_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Aggiungi servizi"
      }
    },
    select_different_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seleziona servizi diversi"
      }
    },
    confirm: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Conferma"
      }
    },
    schedule_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Programma un appuntamento"
      }
    },
    service_menu_guest_description: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Tu e "
        }, {
          t: 4,
          k: "guestCount"
        }, {
          t: 3,
          v: " altro/i ospite/i"
        }]
      }
    },
    max_guest_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Ãˆ possibile prenotare fino a "
        }, {
          t: 4,
          k: "count"
        }, {
          t: 3,
          v: " fasce orarie per questo servizio. Per prenotare per ospiti aggiuntivi, seleziona un servizio diverso per la stessa fascia oraria."
        }]
      }
    },
    just_me: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Solo io"
      }
    },
    people: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "persone"
      }
    },
    selected_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Servizi selezionati"
      }
    },
    choose_service: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seleziona un servizio"
      }
    },
    guest_title: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Ospite "
        }, {
          t: 4,
          k: "count"
        }, {
          t: 3,
          v: " "
        }, {
          t: 4,
          k: "title"
        }]
      }
    },
    with_any_available_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Con qualsiasi membro del personale disponibile"
      }
    },
    with: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "con"
      }
    },
    select_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seleziona personale"
      }
    },
    total: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Totale"
      }
    },
    item: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "elemento"
      }
    },
    items: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "elementi"
      }
    },
    view_cart: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Visualizza il carrello"
      }
    },
    change_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Modifica orario"
      }
    },
    staff_busy_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Non prenotato: personale impegnato"
      }
    },
    your_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Il tuo appuntamento"
      }
    },
    book: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Prenota"
      }
    },
    add: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Aggiungi"
      }
    },
    scheduling_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Pianificazione dell'appuntamento"
      }
    },
    select_all_services_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Prima di procedere, assicurati di selezionare i servizi per tutti gli ospiti"
      }
    },
    booking_unsuccessful: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Prenotazione non riuscita, risorsa non disponibile al momento."
      }
    },
    acceptEssentialCookies: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Accetta i cookie essenziali"
      }
    },
    acceptAll: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Accetta tutto"
      }
    },
    ok: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ok"
      }
    },
    previous_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ora precedente"
      }
    },
    icloud_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Calendario iCloud"
      }
    },
    meeting_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "L'incontro Ã¨ stato riprogrammato"
      }
    },
    google_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Google Calendar"
      }
    },
    outlook_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Calendario di Outlook"
      }
    },
    deposit_paid: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Importo da pagare ora"
      }
    },
    pay_now: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Paga ora"
      }
    },
    total_amount: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Importo totale"
      }
    },
    paid: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Pagato"
      }
    },
    terms_and_conditions: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Si prega di accettare i Termini e condizioni"
      }
    },
    email_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "L'email Ã¨ obbligatoria"
      }
    },
    cancel_booking: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Annulla prenotazione"
      }
    },
    cancel_meeting: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Annullare l'incontro?"
      }
    },
    appointment_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Il tuo appuntamento Ã¨ annullato."
      }
    },
    first_name_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Il nome Ã¨ obbligatorio"
      }
    },
    last_name_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Il cognome Ã¨ obbligatorio"
      }
    },
    phone_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Il numero di telefono Ã¨ obbligatorio"
      }
    },
    invalid_phone_no: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Numero di telefono non valido"
      }
    },
    enter_location_of_your_choice: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Inserisci un luogo a tua scelta"
      }
    },
    select_preferred_location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seleziona il luogo preferito"
      }
    },
    payment_error_unknown: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Qualcosa Ã¨ andato storto con il tuo pagamento. Riprova."
      }
    },
    payment_process_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Si Ã¨ verificato un errore durante il tentativo di Flusso di lavoro il tuo pagamento. Riprova."
      }
    },
    payment_failed: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Il Pagamento Ã¨ fallito"
      }
    },
    slot_no_longer_available: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "La Fascia oraria Tu hanno selezionato non Ã¨ piÃ¹ disponibile"
      }
    }
  }
  , I2 = {
    guest_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Gasten"
      }
    },
    add_guest_button: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Gast toevoegen"
      }
    },
    guest_name_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Naam gast"
      }
    },
    guest_name_placeholder: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Naam"
      }
    },
    guest_name_req_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Naam is vereist"
      }
    },
    guest_name_invalid_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Naam is ongeldig"
      }
    },
    guest_email_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "E-mailadres gast"
      }
    },
    guest_email_placeholder: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "E-mail"
      }
    },
    guest_email_req_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "E-mailadres is vereist"
      }
    },
    guest_email_invalid_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Email is ongeldig!"
      }
    },
    guest_email_unique_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Email-id moet uniek zijn voor gasten."
      }
    },
    guest_count_only_button: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Aantal gasten toevoegen"
      }
    },
    guest_count_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Het aantal gasten moet tussen 1 en 100 liggen"
      }
    },
    seat_not_available_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Het totale aantal beschikbare zetels voor deze tijdsperiode bedraagt slechts"
      }
    },
    default_consent_text: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ik bevestig dat ik content van dit bedrijf wil ontvangen via de verstrekte contactinformatie."
      }
    },
    add_to_google_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Toevoegen aan Google Agenda"
      }
    },
    add_to_outlook_ical: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Toevoegen aan Outlook / iCal"
      }
    },
    additional_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Aanvullende informatie"
      }
    },
    anything_youd_like_to_know_before_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Is er iets dat u graag wilt meedelen vÃ³Ã³r uw afspraak?"
      }
    },
    appointment_request_form: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Aanvraagformulier afspraak"
      }
    },
    appointment_requested: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Afspraak aangevraagd"
      }
    },
    available_starting_times_for: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Beschikbare begintijden voor"
      }
    },
    book_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Afspraak maken"
      }
    },
    cancel: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Annuleren"
      }
    },
    cannot_find_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Kan de kalender niet vinden."
      }
    },
    contact_you_shortly_with_contact_method: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "We nemen weldra contact met u op om uw verzoek te bevestigen. Bel ons kantoor op "
        }, {
          t: 4,
          k: "contactMethod"
        }, {
          t: 3,
          v: " als u vragen heeft."
        }]
      }
    },
    date_of_birth: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Geboortedatum"
      }
    },
    email: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "E-mail"
      }
    },
    first_name: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Voornaam"
      }
    },
    go_to_next_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Vind de volgende beschikbare tijdsperiode"
      }
    },
    last_name: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Achternaam"
      }
    },
    load_more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Meer laden"
      }
    },
    location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Locatie"
      }
    },
    location_is_required: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Locatie is vereist"
      }
    },
    please_enter_location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Voer een Location in"
      }
    },
    payment_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Details"
      }
    },
    next_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Volgende maand"
      }
    },
    no_calendar_event_found: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Geen evenement in kalender gevonden"
      }
    },
    no_slot_available_this_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Geen tijdsperiode beschikbaar deze maand."
      }
    },
    no_slots_available: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Geen slots beschikbaar"
      }
    },
    no_timezone_found: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Geen tijdzone gevonden!"
      }
    },
    select_staff_member: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecteer een medewerker"
      }
    },
    choose_any_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Elke beschikbare"
      }
    },
    payment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Betaling"
      }
    },
    phone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Telefoon"
      }
    },
    pick_a_date_and_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Kies een datum en tijd"
      }
    },
    please_choose_at_least_one_option: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecteer minimaal Ã©Ã©n optie"
      }
    },
    previous_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Vorige maand"
      }
    },
    reschedule_current_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Opnieuw inplannen (huidige tijd: "
        }, {
          t: 4,
          k: "time"
        }, {
          t: 3,
          v: ")"
        }]
      }
    },
    search: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Zoeken"
      }
    },
    secure_payment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Beveiligde betaling"
      }
    },
    select_date: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Datum selecteren"
      }
    },
    select_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Tijd selecteren"
      }
    },
    skip: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Overslaan"
      }
    },
    submit: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Verzenden"
      }
    },
    thank_you: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Bedankt"
      }
    },
    thank_you_for_your_appointment_request: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Bedankt voor uw aanvraag voor een afspraak. "
      }
    },
    this_field_is_required: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Dit veld is verplicht."
      }
    },
    unable_to_fetch_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Kan de kalender niet vinden"
      }
    },
    unable_to_schedule_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "We konden uw afspraak niet inplannen. Probeer het opnieuw."
      }
    },
    DURATION: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "DUUR"
      }
    },
    DATEANDTIME: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "DATUM EN TIJD"
      }
    },
    REPEATS: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "HERHALINGEN"
      }
    },
    type_here_to_search_timezone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Type hier om naar de tijdzone te zoeken"
      }
    },
    OLD: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "OUD"
      }
    },
    continue: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Doorgaan"
      }
    },
    fetching_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Beschikbare tijdsperiode zoeken..."
      }
    },
    fetching_recurring_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Terugkerende tijdslots vinden..."
      }
    },
    schedule_meeting: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Vergadering inplannen"
      }
    },
    scheduling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Inplannen..."
      }
    },
    reschedule: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Opnieuw inplannen"
      }
    },
    rescheduling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Opnieuw inplannen..."
      }
    },
    cancel_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Afspraak annuleren"
      }
    },
    cancelling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Annuleren..."
      }
    },
    back: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Terug"
      }
    },
    enter_your_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Voer uw gegevens in"
      }
    },
    finding_open_available_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Beschikbare tijdperiodes zoeken..."
      }
    },
    no_slots_available_in: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Geen tijdsperioden beschikbaar in"
      }
    },
    select_a_date: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecteer een datum"
      }
    },
    choose_time_slot: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Tijdsperiode selecteren"
      }
    },
    select_a_date_and_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecteer een dag en tijdstip"
      }
    },
    cancellation_reason: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Reden voor annulering"
      }
    },
    your_appointment_has_been_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Uw vergadering is geannuleerd."
      }
    },
    more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "meer..."
      }
    },
    less: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "minder"
      }
    },
    your_meeting_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Uw vergadering is opnieuw ingepland"
      }
    },
    your_meeting_has_been_scheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Uw vergadering is ingepland"
      }
    },
    any_staff_header: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Alle beschikbare medewerkers"
      }
    },
    any_staff_description: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecteer deze optie om het totale aantal beschikbare tijdsperiodes uit te breiden"
      }
    },
    select_staff_for: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecteer medewerkers voor"
      }
    },
    select_service: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecteer service"
      }
    },
    next: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Volgende"
      }
    },
    slot: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Zetel"
      }
    },
    slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Zetels"
      }
    },
    your_appointment_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Uw afspraak is verplaatst"
      }
    },
    your_appointment_has_been_scheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Uw afspraak is ingepland"
      }
    },
    your_appointment_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Uw afspraak is geannuleerd."
      }
    },
    am: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "AM"
      }
    },
    pm: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "PM"
      }
    },
    hr: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Uur"
      }
    },
    minutes: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Minuten"
      }
    },
    january: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Januari"
      }
    },
    february: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Februari"
      }
    },
    march: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Maart"
      }
    },
    april: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "April"
      }
    },
    may: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mei"
      }
    },
    june: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Juni"
      }
    },
    july: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Juli"
      }
    },
    august: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Augustus"
      }
    },
    september: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "September"
      }
    },
    october: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Oktober"
      }
    },
    november: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "November"
      }
    },
    december: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "December"
      }
    },
    sunday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Zondag"
      }
    },
    monday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Maandag"
      }
    },
    tuesday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Dinsdag"
      }
    },
    wednesday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Woensdag"
      }
    },
    thursday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Donderdag"
      }
    },
    friday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Vrijdag"
      }
    },
    saturday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Zaterdag"
      }
    },
    timezone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Tijdzone"
      }
    },
    select: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecteren"
      }
    },
    select_date_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecteer datum en tijd"
      }
    },
    time_zone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Tijdzone"
      }
    },
    duration: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Duur"
      }
    },
    enter_details: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Details invoeren"
      }
    },
    schedule_event: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Gebeurtenis inplannen"
      }
    },
    show_less: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Minder tonen"
      }
    },
    show_more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Meer tonen"
      }
    },
    mins: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Min."
      }
    },
    add_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Services toevoegen"
      }
    },
    select_different_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecteer andere services"
      }
    },
    confirm: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Bevestigen"
      }
    },
    schedule_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Afspraak inplannen"
      }
    },
    service_menu_guest_description: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "U en "
        }, {
          t: 4,
          k: "guestCount"
        }, {
          t: 3,
          v: " gast(en)"
        }]
      }
    },
    max_guest_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "U kunt maximaal "
        }, {
          t: 4,
          k: "count"
        }, {
          t: 3,
          v: " tijdperiodes reserveren voor deze service. Selecteer andere service voor dezelfde tijdsperiode om te boeken voor extra gasten."
        }]
      }
    },
    just_me: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Alleen ik"
      }
    },
    people: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "mensen"
      }
    },
    selected_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Geselecteerde services"
      }
    },
    choose_service: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Een service selecteren"
      }
    },
    guest_title: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Gast "
        }, {
          t: 4,
          k: "count"
        }, {
          t: 3,
          v: " "
        }, {
          t: 4,
          k: "title"
        }]
      }
    },
    with_any_available_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Met eender welke beschikbare medewerker"
      }
    },
    with: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "met"
      }
    },
    select_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Medewerkers selecteren"
      }
    },
    total: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Totaal"
      }
    },
    item: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "item"
      }
    },
    items: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "items"
      }
    },
    view_cart: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Winkelwagentje bekijken"
      }
    },
    change_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Tijd wijzigen"
      }
    },
    staff_busy_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Niet geboekt: medewerker bezet."
      }
    },
    your_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Uw afspraak"
      }
    },
    book: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Boeken"
      }
    },
    add: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Toevoegen"
      }
    },
    scheduling_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Afspraak inplannen"
      }
    },
    select_all_services_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecteer services voor alle gasten voordat u verder gaat"
      }
    },
    booking_unsuccessful: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "De boeking is mislukt, de hulpbron is momenteel niet beschikbaar."
      }
    },
    acceptEssentialCookies: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "EssentiÃ«le cookies accepteren"
      }
    },
    acceptAll: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Alles accepteren"
      }
    },
    ok: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "OkÃ©"
      }
    },
    previous_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Vorige keer"
      }
    },
    icloud_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "iCloud Kalender"
      }
    },
    meeting_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "De vergadering is opnieuw gepland"
      }
    },
    google_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Google Agenda"
      }
    },
    outlook_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Outlook Agenda"
      }
    },
    deposit_paid: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Het nu te betalen bedrag"
      }
    },
    pay_now: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Betaal nu"
      }
    },
    total_amount: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Totaalbedrag"
      }
    },
    paid: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Betaald"
      }
    },
    terms_and_conditions: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Accepteer de algemene voorwaarden"
      }
    },
    email_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "E-mailadres is vereist"
      }
    },
    cancel_booking: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Boeking annuleren"
      }
    },
    cancel_meeting: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Vergadering annuleren?"
      }
    },
    appointment_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Uw afspraak is geannuleerd."
      }
    },
    first_name_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Voornaam is vereist"
      }
    },
    last_name_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Achternaam is vereist"
      }
    },
    phone_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Telefoon is vereist"
      }
    },
    invalid_phone_no: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ongeldig telefoonnummer"
      }
    },
    enter_location_of_your_choice: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Voer een locatie van uw keuze in"
      }
    },
    select_preferred_location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecteer de gewenste locatie"
      }
    },
    payment_error_unknown: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Er is iets misgegaan met je betaling. Try again."
      }
    },
    payment_process_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Er is een fout opgetreden bij het uitvoeren van een Workflow voor uw betaling. Try again."
      }
    },
    payment_failed: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Betaling is mislukt"
      }
    },
    slot_no_longer_available: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "De slot You have Selected is niet meer beschikbaar"
      }
    }
  }
  , N2 = {
    guest_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Gjester"
      }
    },
    add_guest_button: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Legg til gjest"
      }
    },
    guest_name_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Gjestens navn"
      }
    },
    guest_name_placeholder: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Navn"
      }
    },
    guest_name_req_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Navn er obligatorisk"
      }
    },
    guest_name_invalid_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Navnet er ugyldig"
      }
    },
    guest_email_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Gjestens e-post"
      }
    },
    guest_email_placeholder: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "E-post"
      }
    },
    guest_email_req_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "E-post er obligatorisk"
      }
    },
    guest_email_invalid_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "E-posten er ugyldig!"
      }
    },
    guest_email_unique_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "E-post-ID mÃ¥ vÃ¦re unik for gjester."
      }
    },
    guest_count_only_button: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Legg til antall gjester"
      }
    },
    guest_count_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Antall gjester skal vÃ¦re mellom 1 og 100"
      }
    },
    seat_not_available_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Totalt antall tilgjengelige seter for denne tidsluken er bare"
      }
    },
    default_consent_text: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Jeg bekrefter at jeg Ã¸nsker Ã¥ motta innhold fra denne bedriften ved Ã¥ bruke kontaktinformasjon jeg oppgir."
      }
    },
    add_to_google_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Legg til i Google Kalender"
      }
    },
    add_to_outlook_ical: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Legg til i Outlook/iCal"
      }
    },
    additional_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Tilleggsinformasjon"
      }
    },
    anything_youd_like_to_know_before_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Er det noe du Ã¸nsker at vi skal vite fÃ¸r avtalen din?"
      }
    },
    appointment_request_form: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Skjema for avtaleforespÃ¸rsel"
      }
    },
    appointment_requested: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Avtale er forespurt"
      }
    },
    available_starting_times_for: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Tilgjengelige starttider for"
      }
    },
    book_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Book avtale"
      }
    },
    cancel: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Kanseller"
      }
    },
    cannot_find_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Finner ikke kalenderen."
      }
    },
    contact_you_shortly_with_contact_method: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Vi kontakter deg snart for Ã¥ bekrefte forespÃ¸rselen din. Vennligst ring vÃ¥rt kontor pÃ¥ "
        }, {
          t: 4,
          k: "contactMethod"
        }, {
          t: 3,
          v: " hvis du har noen spÃ¸rsmÃ¥l."
        }]
      }
    },
    date_of_birth: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "FÃ¸dselsdato"
      }
    },
    email: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "E-post"
      }
    },
    first_name: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Fornavn"
      }
    },
    go_to_next_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Finn neste ledige tidsluke"
      }
    },
    last_name: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Etternavn"
      }
    },
    load_more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Last inn mer"
      }
    },
    location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Sted"
      }
    },
    location_is_required: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Sted er obligatorisk."
      }
    },
    please_enter_location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Vennligst skriv inn et sted"
      }
    },
    payment_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Betalingsdetaljer"
      }
    },
    next_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Neste mÃ¥ned"
      }
    },
    no_calendar_event_found: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ingen kalenderhendelse funnet"
      }
    },
    no_slot_available_this_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ingen tidsluke ledig denne mÃ¥neden."
      }
    },
    no_slots_available: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ingen tidsluker ledig"
      }
    },
    no_timezone_found: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ingen tidssone funnet!"
      }
    },
    select_staff_member: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Velg en medarbeider"
      }
    },
    choose_any_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Alle tilgjengelige"
      }
    },
    payment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Betaling"
      }
    },
    phone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Telefon"
      }
    },
    pick_a_date_and_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Velg en dato og et klokkeslett"
      }
    },
    please_choose_at_least_one_option: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Velg minst ett alternativ"
      }
    },
    previous_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Forrige mÃ¥ned"
      }
    },
    reschedule_current_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Planlegge pÃ¥ nytt (nÃ¥vÃ¦rende tid: "
        }, {
          t: 4,
          k: "time"
        }, {
          t: 3,
          v: ")"
        }]
      }
    },
    search: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ¸k"
      }
    },
    secure_payment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Sikker betaling"
      }
    },
    select_date: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Velg dato"
      }
    },
    select_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Velg tid"
      }
    },
    skip: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Hopp over"
      }
    },
    submit: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Send inn"
      }
    },
    thank_you: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Takk skal du ha"
      }
    },
    thank_you_for_your_appointment_request: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Takk for avtaleforespÃ¸rselen. "
      }
    },
    this_field_is_required: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Feltet er obligatorisk."
      }
    },
    unable_to_fetch_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Finner ikke kalenderen"
      }
    },
    unable_to_schedule_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Vi kunne ikke planlegge avtalen din. PrÃ¸v igjen."
      }
    },
    DURATION: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VARIGHET"
      }
    },
    DATEANDTIME: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "DATO OG TID"
      }
    },
    REPEATS: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "GJENTAKELSER"
      }
    },
    type_here_to_search_timezone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Skriv her for Ã¥ sÃ¸ke etter tidssone"
      }
    },
    OLD: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "GAMMEL"
      }
    },
    continue: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Fortsett"
      }
    },
    fetching_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Finner tidsluker ..."
      }
    },
    fetching_recurring_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Finner gjentakende tidsluker â€¦"
      }
    },
    schedule_meeting: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Planlegg mÃ¸te"
      }
    },
    scheduling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Planlegger â€¦"
      }
    },
    reschedule: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Planlegg pÃ¥ nytt"
      }
    },
    rescheduling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Planlegger pÃ¥ nytt â€¦"
      }
    },
    cancel_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Avbryt avtale"
      }
    },
    cancelling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Avbryter â€¦"
      }
    },
    back: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Tilbake"
      }
    },
    enter_your_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Skriv inn informasjonen din"
      }
    },
    finding_open_available_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Finner Ã¥pne tilgjengelige tidsluker â€¦"
      }
    },
    no_slots_available_in: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ingen ledige tidsluker i"
      }
    },
    select_a_date: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Velg en dato"
      }
    },
    choose_time_slot: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Velg tidsvindu"
      }
    },
    select_a_date_and_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Velg dato og klokkeslett"
      }
    },
    cancellation_reason: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Grunn til kansellering"
      }
    },
    your_appointment_has_been_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "MÃ¸tet ditt er avlyst."
      }
    },
    more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "mer â€¦"
      }
    },
    less: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "mindre"
      }
    },
    your_meeting_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "MÃ¸tet ditt har blitt omberammet"
      }
    },
    your_meeting_has_been_scheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "MÃ¸tet ditt har blitt planlagt"
      }
    },
    any_staff_header: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Eventuelt personale tilgjengelig"
      }
    },
    any_staff_description: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "For Ã¥ maksimere totalt antall tilgjengelige tidsluker, velg dette alternativet"
      }
    },
    select_staff_for: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Velg personale for"
      }
    },
    select_service: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Velg tjeneste"
      }
    },
    next: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Neste"
      }
    },
    slot: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Sete"
      }
    },
    slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seter"
      }
    },
    your_appointment_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Avtalen din har blitt omberammet"
      }
    },
    your_appointment_has_been_scheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Avtalen din har blitt planlagt"
      }
    },
    your_appointment_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Avtalen din har blitt kansellert."
      }
    },
    am: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "AM"
      }
    },
    pm: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "PM"
      }
    },
    hr: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Time"
      }
    },
    minutes: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Minutter"
      }
    },
    january: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Januar"
      }
    },
    february: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Februar"
      }
    },
    march: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mars"
      }
    },
    april: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "April"
      }
    },
    may: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mai"
      }
    },
    june: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Juni"
      }
    },
    july: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Juli"
      }
    },
    august: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "August"
      }
    },
    september: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "September"
      }
    },
    october: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Oktober"
      }
    },
    november: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "November"
      }
    },
    december: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Desember"
      }
    },
    sunday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ¸ndag"
      }
    },
    monday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mandag"
      }
    },
    tuesday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Tirsdag"
      }
    },
    wednesday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Onsdag"
      }
    },
    thursday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Torsdag"
      }
    },
    friday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Fredag"
      }
    },
    saturday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "LÃ¸rdag"
      }
    },
    timezone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Tidssone"
      }
    },
    select: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Velg"
      }
    },
    select_date_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Velg dato og tid"
      }
    },
    time_zone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Tidssone"
      }
    },
    duration: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Varighet"
      }
    },
    enter_details: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Skriv inn detaljer"
      }
    },
    schedule_event: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Planlegg hendelse"
      }
    },
    show_less: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Vis mindre"
      }
    },
    show_more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Vis mer"
      }
    },
    mins: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Min"
      }
    },
    add_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Legg til tjenester"
      }
    },
    select_different_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Vennligst velg forskjellige tjenester"
      }
    },
    confirm: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Bekreft"
      }
    },
    schedule_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Planlegg avtale"
      }
    },
    service_menu_guest_description: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Du og "
        }, {
          t: 4,
          k: "guestCount"
        }, {
          t: 3,
          v: " gjest(er)"
        }]
      }
    },
    max_guest_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Du kan reservere opptil "
        }, {
          t: 4,
          k: "count"
        }, {
          t: 3,
          v: " tidsluker for denne tjenesten. For Ã¥ booke for flere gjester, vennligst velg en annen tjeneste for samme tidsvindu."
        }]
      }
    },
    just_me: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Bare meg"
      }
    },
    people: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "personer"
      }
    },
    selected_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Valgte tjenester"
      }
    },
    choose_service: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Velg en tjeneste"
      }
    },
    guest_title: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Gjest "
        }, {
          t: 4,
          k: "count"
        }, {
          t: 3,
          v: " "
        }, {
          t: 4,
          k: "title"
        }]
      }
    },
    with_any_available_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Med alt tilgjengelige personale"
      }
    },
    with: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "med"
      }
    },
    select_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Velg personale"
      }
    },
    total: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Total"
      }
    },
    item: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "element"
      }
    },
    items: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "elementer"
      }
    },
    view_cart: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Se handlekurv"
      }
    },
    change_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Endre tidspunkt"
      }
    },
    staff_busy_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ikke booket: Personalet er opptatt"
      }
    },
    your_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Avtalen din"
      }
    },
    book: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Booke"
      }
    },
    add: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Legg til"
      }
    },
    scheduling_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Planlegger avtale"
      }
    },
    select_all_services_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ¸rg for at du velger tjenester for alle gjester fÃ¸r du fortsetter"
      }
    },
    booking_unsuccessful: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Bookingen mislyktes, ressursen er utilgjengelig for Ã¸yeblikket."
      }
    },
    acceptEssentialCookies: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Godta nÃ¸dvendige cookies"
      }
    },
    acceptAll: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Godta alle"
      }
    },
    ok: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ok"
      }
    },
    previous_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Forrige tid"
      }
    },
    icloud_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "iCloud Kalender"
      }
    },
    meeting_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "MÃ¸tet har blitt omberammet"
      }
    },
    google_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Google Kalender"
      }
    },
    outlook_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Outlook-kalender"
      }
    },
    deposit_paid: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "BelÃ¸p som skal betales nÃ¥"
      }
    },
    pay_now: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Betal nÃ¥"
      }
    },
    total_amount: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "TotalbelÃ¸p"
      }
    },
    paid: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Betalt"
      }
    },
    terms_and_conditions: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Vennligst godta vilkÃ¥r og betingelser"
      }
    },
    email_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "E-post er obligatorisk"
      }
    },
    cancel_booking: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Kanseller booking"
      }
    },
    cancel_meeting: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Kansellere mÃ¸tet?"
      }
    },
    appointment_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Avtalen din er kansellert."
      }
    },
    first_name_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Fornavn er obligatorisk"
      }
    },
    last_name_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Etternavn er obligatorisk"
      }
    },
    phone_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Telefon er obligatorisk"
      }
    },
    invalid_phone_no: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ugyldig telefonnummer"
      }
    },
    enter_location_of_your_choice: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Oppgi et hvilket som helst sted du Ã¸nsker"
      }
    },
    select_preferred_location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Velg foretrukket sted"
      }
    },
    payment_error_unknown: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Noe gikk galt med betalingen din. Vennligst prÃ¸v igjen."
      }
    },
    payment_process_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Det oppsto en feil under forsÃ¸k pÃ¥ Ã¥ Arbeidsflytte betalingen din. Vennligst prÃ¸v igjen."
      }
    },
    payment_failed: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Betaling mislyktes"
      }
    },
    slot_no_longer_available: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Tidsluken Du have Valgt er ikke lenger tilgjengelig"
      }
    }
  }
  , D2 = {
    guest_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "GoÅ›cie"
      }
    },
    add_guest_button: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Dodaj goÅ›cia"
      }
    },
    guest_name_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "ImiÄ™ goÅ›cia"
      }
    },
    guest_name_placeholder: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nazwa"
      }
    },
    guest_name_req_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "imie jest wymagane"
      }
    },
    guest_name_invalid_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nazwa jest nieprawidÅ‚owa"
      }
    },
    guest_email_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "E-mail goÅ›cia"
      }
    },
    guest_email_placeholder: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "E-mail"
      }
    },
    guest_email_req_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "email jest wymagany"
      }
    },
    guest_email_invalid_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "E-mail jest nie prawidÅ‚owy!"
      }
    },
    guest_email_unique_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Identyfikator e-mail musi byÄ‡ unikalny dla goÅ›ci."
      }
    },
    guest_count_only_button: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Dodaj liczbÄ™ goÅ›ci"
      }
    },
    guest_count_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Liczba goÅ›ci powinna mieÅ›ciÄ‡ siÄ™ w przedziale od 1 do 100"
      }
    },
    seat_not_available_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Total available seats for this slot is only"
      }
    },
    default_consent_text: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Potwierdzam, Å¼e chcÄ™ otrzymywaÄ‡ treÅ›ci od tej firmy, korzystajÄ…c z podanych przeze mnie informacji kontaktowych."
      }
    },
    add_to_google_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Dodaj do kalendarza Google"
      }
    },
    add_to_outlook_ical: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Dodaj do Outlooka / iCal"
      }
    },
    additional_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Dodatkowe informacje"
      }
    },
    anything_youd_like_to_know_before_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Czy jest coÅ›, co chciaÅ‚(a)by Pan(i), abyÅ›my wiedzieli przed wizytÄ…?"
      }
    },
    appointment_request_form: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Formularz umÃ³wienia siÄ™ na wizytÄ™"
      }
    },
    appointment_requested: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "UmÃ³wiono wizytÄ™"
      }
    },
    available_starting_times_for: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "DostÄ™pne godziny rozpoczÄ™cia dla"
      }
    },
    book_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "UmÃ³w siÄ™ na wizytÄ™"
      }
    },
    cancel: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Skasuj"
      }
    },
    cannot_find_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nie moÅ¼na odnaleÅºÄ‡ kalendarza"
      }
    },
    contact_you_shortly_with_contact_method: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Skontaktujemy siÄ™ z TobÄ… wkrÃ³tce, aby potwierdziÄ‡ TwojÄ… proÅ›bÄ™.  ZadzwoÅ„ do naszego biura na "
        }, {
          t: 4,
          k: "contactMethod"
        }, {
          t: 3,
          v: ", jeÅ›li masz jakiekolwiek pytania."
        }]
      }
    },
    date_of_birth: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Data urodzenia"
      }
    },
    email: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Email"
      }
    },
    first_name: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "ImiÄ™"
      }
    },
    go_to_next_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "PrzejdÅº do nastÄ™pnego miesiÄ…ca"
      }
    },
    last_name: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nazwisko"
      }
    },
    load_more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Zobacz wiÄ™cej"
      }
    },
    location_is_required: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Lokalizacja jest wymagana"
      }
    },
    location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Lokalizacja"
      }
    },
    next_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "NastÄ™pny miesiÄ…c"
      }
    },
    no_calendar_event_found: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nie znaleziono wydarzenia w kalendarzu"
      }
    },
    no_slot_available_this_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Brak miejsc w tym miesiÄ…cu"
      }
    },
    no_slots_available: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Brak miejsc"
      }
    },
    no_timezone_found: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nie znaleziono strefy czasowej"
      }
    },
    select_staff_member: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Wybierz pracownika"
      }
    },
    choose_any_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Any Available"
      }
    },
    payment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "PÅ‚atnoÅ›Ä‡"
      }
    },
    phone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Telefon"
      }
    },
    pick_a_date_and_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Wybierz datÄ™ i godzinÄ™"
      }
    },
    please_choose_at_least_one_option: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "ProszÄ™ wybraÄ‡ przynajmniej jednÄ… opcjÄ™"
      }
    },
    previous_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Poprzedni miesiÄ…c"
      }
    },
    reschedule_current_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "ZmieÅ„ termin (Current time: "
        }, {
          t: 4,
          k: "time"
        }, {
          t: 3,
          v: ")"
        }]
      }
    },
    search: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Szukaj"
      }
    },
    secure_payment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Bezpieczna pÅ‚atnoÅ›Ä‡"
      }
    },
    select_date: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Wybierz datÄ™"
      }
    },
    select_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Wybierz godzinÄ™"
      }
    },
    skip: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Dalej"
      }
    },
    submit: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "WyÅ›lij"
      }
    },
    thank_you_for_your_appointment_request: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "DziÄ™kujemy za umÃ³wienie siÄ™ na wizytÄ™."
      }
    },
    thank_you: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "DziÄ™kujemy"
      }
    },
    this_field_is_required: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "To pole jest wymagane"
      }
    },
    unable_to_fetch_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nie moÅ¼na odnaleÅºÄ‡ kalendarza"
      }
    },
    schedule_meeting: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Schedule Meeting"
      }
    },
    slot: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Slot"
      }
    },
    slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Slots"
      }
    },
    am: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "AM"
      }
    },
    april: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "KwiecieÅ„"
      }
    },
    august: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SierpieÅ„"
      }
    },
    december: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "GrudzieÅ„"
      }
    },
    february: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Luty"
      }
    },
    hr: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Godzina"
      }
    },
    friday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "PiÄ…tek"
      }
    },
    january: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "StyczeÅ„"
      }
    },
    july: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Lipiec"
      }
    },
    june: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Czerwiec"
      }
    },
    march: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Marzec"
      }
    },
    may: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Maj"
      }
    },
    minutes: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Minuty"
      }
    },
    monday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "PoniedziaÅ‚ek"
      }
    },
    november: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Listopad"
      }
    },
    october: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "PaÅºdziernik"
      }
    },
    saturday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Sobota"
      }
    },
    pm: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "PM"
      }
    },
    september: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "WrzesieÅ„"
      }
    },
    sunday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Niedziela"
      }
    },
    thursday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Czwartek"
      }
    },
    timezone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Strefa czasowa"
      }
    },
    tuesday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Wtorek"
      }
    },
    wednesday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Åšroda"
      }
    },
    select: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Select"
      }
    },
    your_appointment_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Your Appointment has been Rescheduled"
      }
    },
    your_appointment_has_been_scheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Your Appointment has been Scheduled"
      }
    },
    your_appointment_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Your appointment has been cancelled."
      }
    },
    select_date_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Select Date & Time"
      }
    },
    time_zone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Time zone"
      }
    },
    duration: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Duration"
      }
    },
    enter_details: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Enter Details"
      }
    },
    schedule_event: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Schedule Event"
      }
    },
    show_less: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SHOW LESS"
      }
    },
    show_more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SHOW MORE"
      }
    },
    mins: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mins"
      }
    },
    add_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Add Services"
      }
    },
    select_different_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Select different services"
      }
    },
    confirm: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Confirm"
      }
    },
    schedule_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Schedule Appointment"
      }
    },
    service_menu_guest_description: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "You and "
        }, {
          t: 4,
          k: "guestCount"
        }, {
          t: 3,
          v: " more guest(s)"
        }]
      }
    },
    max_guest_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "You can reserve up to "
        }, {
          t: 4,
          k: "count"
        }, {
          t: 3,
          v: " slots for this service. To book for additional guests, kindly select a different service for the same time slot."
        }]
      }
    },
    just_me: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Just Me"
      }
    },
    people: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "people"
      }
    },
    selected_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selected Services"
      }
    },
    choose_service: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Choose a service"
      }
    },
    guest_title: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Guest "
        }, {
          t: 4,
          k: "count"
        }, {
          t: 3,
          v: " "
        }, {
          t: 4,
          k: "title"
        }]
      }
    },
    with_any_available_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "With any available staff"
      }
    },
    with: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "with"
      }
    },
    select_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Select Staff"
      }
    },
    total: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Total"
      }
    },
    item: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "item"
      }
    },
    items: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "items"
      }
    },
    view_cart: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "View Cart"
      }
    },
    change_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Change time"
      }
    },
    staff_busy_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Not booked: Staff busy"
      }
    },
    your_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Your Appointment"
      }
    },
    book: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Book"
      }
    },
    add: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Add"
      }
    },
    scheduling_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Scheduling appointment"
      }
    },
    select_all_services_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Please ensure you select services for all guests before proceeding"
      }
    },
    booking_unsuccessful: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Booking unsuccessful, resource unavailable at the moment."
      }
    },
    any_staff_header: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Any staff available"
      }
    },
    any_staff_description: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "To maximise the total available slot select this option"
      }
    },
    select_staff_for: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Select Staff for"
      }
    },
    acceptEssentialCookies: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Zaakceptuj niezbÄ™dne pliki cookie"
      }
    },
    ok: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "OK"
      }
    },
    acceptAll: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Akceptuj wszystkie"
      }
    },
    previous_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Previous time"
      }
    },
    icloud_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "iCloud Calendar"
      }
    },
    meeting_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Meeting has been Rescheduled"
      }
    },
    google_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Google Calendar"
      }
    },
    outlook_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Outlook Calendar"
      }
    },
    deposit_paid: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Amount to be paid now"
      }
    },
    pay_now: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Pay now"
      }
    },
    total_amount: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Total Amount"
      }
    },
    paid: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Paid"
      }
    },
    terms_and_conditions: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Please accept the terms and conditions"
      }
    },
    email_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Email is required"
      }
    },
    cancel_booking: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Cancel Booking"
      }
    },
    cancel_meeting: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Cancel Meeting ?"
      }
    },
    appointment_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Your appointment is cancelled."
      }
    },
    first_name_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "First Name is required"
      }
    },
    last_name_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Last name is required"
      }
    },
    phone_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Phone is required"
      }
    },
    invalid_phone_no: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Invalid phone number"
      }
    },
    enter_location_of_your_choice: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Enter any location of your choice"
      }
    },
    select_preferred_location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Select preferred location"
      }
    }
  }
  , M2 = {
    guest_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Convidados"
      }
    },
    add_guest_button: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Adicionar convidado"
      }
    },
    guest_name_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nome do convidado"
      }
    },
    guest_name_placeholder: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nome"
      }
    },
    guest_name_req_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "O nome Ã© obrigatÃ³rio"
      }
    },
    guest_name_invalid_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "O nome Ã© invÃ¡lido"
      }
    },
    guest_email_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Email do convidado"
      }
    },
    guest_email_placeholder: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "E-mail"
      }
    },
    guest_email_req_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "O e-mail Ã© obrigatÃ³rio"
      }
    },
    guest_email_invalid_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "O e-mail Ã© invÃ¡lido!"
      }
    },
    guest_email_unique_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "O ID do e-mail deve ser Ãºnico para os convidados."
      }
    },
    guest_count_only_button: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Adicionar contagem de convidados"
      }
    },
    guest_count_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "A contagem de convidados deve estar entre 1 e 100"
      }
    },
    seat_not_available_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "O total de assentos disponÃ­veis para este intervalo Ã© de apenas"
      }
    },
    default_consent_text: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Confirmo que desejo receber conteÃºdo desta empresa por meio de qualquer informaÃ§Ã£o de contato que eu fornecer."
      }
    },
    add_to_google_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Adicionar ao Google Agenda"
      }
    },
    add_to_outlook_ical: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Adicionar ao Outlook / iCal"
      }
    },
    additional_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "InformaÃ§Ãµes adicionais"
      }
    },
    anything_youd_like_to_know_before_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "HÃ¡ algo que vocÃª gostaria que nÃ³s soubÃ©ssemos antes do seu compromisso?"
      }
    },
    appointment_request_form: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "FormulÃ¡rio de solicitaÃ§Ã£o de compromisso"
      }
    },
    appointment_requested: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Compromisso solicitado"
      }
    },
    available_starting_times_for: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "HorÃ¡rios de inÃ­cio disponÃ­veis"
      }
    },
    book_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Agendar compromisso"
      }
    },
    cancel: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Cancelar"
      }
    },
    cannot_find_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "NÃ£o Ã© possÃ­vel encontrar o calendÃ¡rio."
      }
    },
    contact_you_shortly_with_contact_method: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Entraremos em contato com vocÃª em breve para confirmar a sua solicitaÃ§Ã£o. Ligue para o nosso escritÃ³rio pelo nÃºmero "
        }, {
          t: 4,
          k: "contactMethod"
        }, {
          t: 3,
          v: " se tiver alguma dÃºvida."
        }]
      }
    },
    date_of_birth: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Data de nascimento"
      }
    },
    email: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "E-mail"
      }
    },
    first_name: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nome"
      }
    },
    go_to_next_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Descobrir o prÃ³ximo intervalo disponÃ­vel"
      }
    },
    last_name: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Sobrenome"
      }
    },
    load_more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Carregar mais"
      }
    },
    location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "LocalizaÃ§Ã£o"
      }
    },
    location_is_required: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "A localizaÃ§Ã£o Ã© obrigatÃ³ria."
      }
    },
    please_enter_location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Insira uma localizaÃ§Ã£o"
      }
    },
    payment_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Detalhes do pagamento"
      }
    },
    next_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "PrÃ³ximo mÃªs"
      }
    },
    no_calendar_event_found: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nenhum evento de calendÃ¡rio encontrado"
      }
    },
    no_slot_available_this_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nenhum intervalo disponÃ­vel este mÃªs."
      }
    },
    no_slots_available: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nenhum intervalo disponÃ­vel"
      }
    },
    no_timezone_found: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nenhum fuso horÃ¡rio encontrado!"
      }
    },
    select_staff_member: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecionar um membro da equipe"
      }
    },
    choose_any_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Qualquer um disponÃ­vel"
      }
    },
    payment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Pagamento"
      }
    },
    phone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Telefone"
      }
    },
    pick_a_date_and_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecione uma data e uma hora"
      }
    },
    please_choose_at_least_one_option: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Por favor, selecione pelo menos uma opÃ§Ã£o"
      }
    },
    previous_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "MÃªs anterior"
      }
    },
    reschedule_current_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Reagendar (Hora atual: "
        }, {
          t: 4,
          k: "time"
        }, {
          t: 3,
          v: ")"
        }]
      }
    },
    search: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Pesquisar"
      }
    },
    secure_payment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Pagamento seguro"
      }
    },
    select_date: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecione a data"
      }
    },
    select_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecione a hora"
      }
    },
    skip: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ignorar"
      }
    },
    submit: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Enviar"
      }
    },
    thank_you: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Obrigado"
      }
    },
    thank_you_for_your_appointment_request: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Obrigado pela sua solicitaÃ§Ã£o de compromisso. "
      }
    },
    this_field_is_required: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Este campo Ã© obrigatÃ³rio."
      }
    },
    unable_to_fetch_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "NÃ£o Ã© possÃ­vel encontrar o calendÃ¡rio"
      }
    },
    unable_to_schedule_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "NÃ£o foi possÃ­vel agendar o seu compromisso. Tente de novo."
      }
    },
    DURATION: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "DURAÃ‡ÃƒO"
      }
    },
    DATEANDTIME: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "DATA E HORA"
      }
    },
    REPEATS: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "REPETE"
      }
    },
    type_here_to_search_timezone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Digite aqui para pesquisar o fuso horÃ¡rio"
      }
    },
    OLD: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "ANTIGO"
      }
    },
    continue: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Continuar"
      }
    },
    fetching_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Procurando intervalos..."
      }
    },
    fetching_recurring_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Localizando intervalos recorrentes..."
      }
    },
    schedule_meeting: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Agendar conferÃªncia"
      }
    },
    scheduling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Agendando..."
      }
    },
    reschedule: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Reagendar"
      }
    },
    rescheduling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Reagendando..."
      }
    },
    cancel_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Cancelar compromisso"
      }
    },
    cancelling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Cancelando..."
      }
    },
    back: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Voltar"
      }
    },
    enter_your_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Insira suas informaÃ§Ãµes"
      }
    },
    finding_open_available_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Encontrando intervalos disponÃ­veis abertos..."
      }
    },
    no_slots_available_in: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nenhum intervalo disponÃ­vel em"
      }
    },
    select_a_date: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecione uma data"
      }
    },
    choose_time_slot: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecionar janela de tempo"
      }
    },
    select_a_date_and_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecione uma data e hora"
      }
    },
    cancellation_reason: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Motivo do cancelamento"
      }
    },
    your_appointment_has_been_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Sua conferÃªncia foi cancelada."
      }
    },
    more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "mais..."
      }
    },
    less: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "menos"
      }
    },
    your_meeting_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Sua conferÃªncia foi reagendada"
      }
    },
    your_meeting_has_been_scheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Sua conferÃªncia foi agendada"
      }
    },
    any_staff_header: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Algum funcionÃ¡rio disponÃ­vel?"
      }
    },
    any_staff_description: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Para maximizar o total de intervalos disponÃ­veis, selecione esta opÃ§Ã£o"
      }
    },
    select_staff_for: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecionar equipe para"
      }
    },
    select_service: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecione o ServiÃ§o"
      }
    },
    next: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seguinte"
      }
    },
    slot: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Assento"
      }
    },
    slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Assentos"
      }
    },
    your_appointment_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seu compromisso foi reagendado"
      }
    },
    your_appointment_has_been_scheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seu compromisso foi programado"
      }
    },
    your_appointment_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seu compromisso foi cancelado."
      }
    },
    am: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "AM"
      }
    },
    pm: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "PM"
      }
    },
    hr: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "H"
      }
    },
    minutes: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Minutos"
      }
    },
    january: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Janeiro"
      }
    },
    february: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Fevereiro"
      }
    },
    march: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "MarÃ§o"
      }
    },
    april: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Abril"
      }
    },
    may: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Maio"
      }
    },
    june: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Junho"
      }
    },
    july: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Julho"
      }
    },
    august: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Agosto"
      }
    },
    september: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Setembro"
      }
    },
    october: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Outubro"
      }
    },
    november: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Novembro"
      }
    },
    december: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Dezembro"
      }
    },
    sunday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Domingo"
      }
    },
    monday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Segunda-feira"
      }
    },
    tuesday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "TerÃ§a-feira"
      }
    },
    wednesday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Quarta-feira"
      }
    },
    thursday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Quinta-feira"
      }
    },
    friday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Sexta-feira"
      }
    },
    saturday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ¡bado"
      }
    },
    timezone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Fuso horÃ¡rio"
      }
    },
    select: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecionar"
      }
    },
    select_date_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecionar data e hora"
      }
    },
    time_zone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Fuso horÃ¡rio"
      }
    },
    duration: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "DuraÃ§Ã£o"
      }
    },
    enter_details: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Inserir informaÃ§Ãµes"
      }
    },
    schedule_event: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Agendar evento"
      }
    },
    show_less: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mostrar menos"
      }
    },
    show_more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mostrar mais"
      }
    },
    mins: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Min"
      }
    },
    add_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Adicionar serviÃ§os"
      }
    },
    select_different_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecionar serviÃ§os diferentes"
      }
    },
    confirm: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Confirmar"
      }
    },
    schedule_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Agendar Compromisso"
      }
    },
    service_menu_guest_description: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "VocÃª e mais "
        }, {
          t: 4,
          k: "guestCount"
        }, {
          t: 3,
          v: " convidado(s)"
        }]
      }
    },
    max_guest_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "VocÃª pode reservar atÃ© "
        }, {
          t: 4,
          k: "count"
        }, {
          t: 3,
          v: " intervalos para esse serviÃ§o. Para agendar para mais convidados, selecione um serviÃ§o diferente para a mesma janela de tempo."
        }]
      }
    },
    just_me: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Apenas eu"
      }
    },
    people: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "pessoas"
      }
    },
    selected_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "ServiÃ§os Selecionados"
      }
    },
    choose_service: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecione um serviÃ§o"
      }
    },
    guest_title: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Convidado "
        }, {
          t: 4,
          k: "count"
        }, {
          t: 3,
          v: " "
        }, {
          t: 4,
          k: "title"
        }]
      }
    },
    with_any_available_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Com qualquer funcionÃ¡rio disponÃ­vel"
      }
    },
    with: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "com"
      }
    },
    select_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecionar equipe"
      }
    },
    total: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Total"
      }
    },
    item: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "item"
      }
    },
    items: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "itens"
      }
    },
    view_cart: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Visualizar carrinho"
      }
    },
    change_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Alterar hora"
      }
    },
    staff_busy_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "NÃ£o agendado: equipe ocupada"
      }
    },
    your_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seu Compromisso"
      }
    },
    book: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Agendar"
      }
    },
    add: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Adicionar"
      }
    },
    scheduling_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Agendando compromisso"
      }
    },
    select_all_services_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Antes de prosseguir, confira se vocÃª selecionou serviÃ§os para todos os convidados"
      }
    },
    booking_unsuccessful: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "O agendamento falhou; o recurso estÃ¡ indisponÃ­vel no momento."
      }
    },
    acceptEssentialCookies: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Aceitar cookies essenciais"
      }
    },
    acceptAll: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Aceitar todos"
      }
    },
    ok: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "OK"
      }
    },
    previous_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Hora anterior"
      }
    },
    icloud_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "CalendÃ¡rio do iCloud"
      }
    },
    meeting_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "A conferÃªncia foi reagendada"
      }
    },
    google_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Google Agenda"
      }
    },
    outlook_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "CalendÃ¡rio do Outlook"
      }
    },
    deposit_paid: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Valor a ser pago agora"
      }
    },
    pay_now: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Pagar agora"
      }
    },
    total_amount: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Valor total"
      }
    },
    paid: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Pago"
      }
    },
    terms_and_conditions: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Aceite os termos e condiÃ§Ãµes"
      }
    },
    email_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "O e-mail Ã© obrigatÃ³rio"
      }
    },
    cancel_booking: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Cancelar Reserva"
      }
    },
    cancel_meeting: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Cancelar conferÃªncia?"
      }
    },
    appointment_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seu compromisso foi cancelado."
      }
    },
    first_name_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "O nome Ã© obrigatÃ³rio"
      }
    },
    last_name_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "O sobrenome Ã© obrigatÃ³rio"
      }
    },
    phone_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "O telefone Ã© obrigatÃ³rio"
      }
    },
    invalid_phone_no: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "NÃºmero de telefone invÃ¡lido"
      }
    },
    enter_location_of_your_choice: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Digite qualquer localizaÃ§Ã£o de sua escolha"
      }
    },
    select_preferred_location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecione a localizaÃ§Ã£o preferida"
      }
    },
    payment_error_unknown: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Algo deu errado com seu pagamento. Tente de novo."
      }
    },
    payment_process_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ocorreu um erro ao tentar do Pipeline seu pagamento. Tente de novo."
      }
    },
    payment_failed: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "O pagamento falhou"
      }
    },
    slot_no_longer_available: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "O intervalo VocÃª tem selecionado nÃ£o estÃ¡ mais disponÃ­vel"
      }
    }
  }
  , j2 = {
    guest_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Convidados"
      }
    },
    add_guest_button: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Adicionar Convidado"
      }
    },
    guest_name_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nome do convidado"
      }
    },
    guest_name_placeholder: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nome"
      }
    },
    guest_name_req_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "O nome Ã© necessÃ¡rio"
      }
    },
    guest_name_invalid_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "O nome Ã© invÃ¡lido"
      }
    },
    guest_email_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "E-mail do Convidado"
      }
    },
    guest_email_placeholder: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "E-mail"
      }
    },
    guest_email_req_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "O campo E-mail Ã© necessÃ¡rio"
      }
    },
    guest_email_invalid_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "O Email expirou!-"
      }
    },
    guest_email_unique_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "O ID de E-mail tem de ser Ãºnico para os convidados."
      }
    },
    guest_count_only_button: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Adicionar nÃºmero de Convidados"
      }
    },
    guest_count_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "A contagem de convidados deverÃ¡ situar-se entre 1 e 100"
      }
    },
    seat_not_available_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "O total de assentos disponÃ­veis para este perÃ­odo Ã© apenas de"
      }
    },
    default_consent_text: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Confirmo que desejo receber conteÃºdo desta empresa utilizando quaisquer informaÃ§Ãµes de contacto que eu fornecer."
      }
    },
    add_to_google_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Adicionar ao CalendÃ¡rio Google"
      }
    },
    add_to_outlook_ical: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Adicionar ao Outlook / iCal"
      }
    },
    additional_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "InformaÃ§Ãµes adicionais"
      }
    },
    anything_youd_like_to_know_before_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "HÃ¡ algo que gostaria que soubÃ©ssemos antes do seu compromisso?"
      }
    },
    appointment_request_form: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "FormulÃ¡rio de Pedido de Compromisso"
      }
    },
    appointment_requested: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Compromisso solicitado"
      }
    },
    available_starting_times_for: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "HorÃ¡rios de inÃ­cio disponÃ­veis para"
      }
    },
    book_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Marcar compromisso"
      }
    },
    cancel: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Cancelar"
      }
    },
    cannot_find_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "NÃ£o Ã© possÃ­vel encontrar o calendÃ¡rio."
      }
    },
    contact_you_shortly_with_contact_method: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Entraremos em contacto consigo em breve para confirmar o seu pedido. Por favor, ligue para o nosso escritÃ³rio em "
        }, {
          t: 4,
          k: "contactMethod"
        }, {
          t: 3,
          v: " se tiver alguma dÃºvida."
        }]
      }
    },
    date_of_birth: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Data de nascimento"
      }
    },
    email: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "E-mail"
      }
    },
    first_name: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nome prÃ³prio"
      }
    },
    go_to_next_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Descobrir o prÃ³ximo perÃ­odo disponÃ­vel"
      }
    },
    last_name: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Apelido"
      }
    },
    load_more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Carregar mais"
      }
    },
    location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "LocalizaÃ§Ã£o"
      }
    },
    location_is_required: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "A localizaÃ§Ã£o Ã© necessÃ¡ria."
      }
    },
    please_enter_location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Insira uma localizaÃ§Ã£o"
      }
    },
    payment_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Detalhes do pagamento"
      }
    },
    next_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seguinte mÃªs"
      }
    },
    no_calendar_event_found: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nenhum evento de calendÃ¡rio encontrado"
      }
    },
    no_slot_available_this_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "NÃ£o hÃ¡ perÃ­odos disponÃ­veis este mÃªs."
      }
    },
    no_slots_available: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nenhum perÃ­odo disponÃ­vel"
      }
    },
    no_timezone_found: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nenhum fuso horÃ¡rio encontrado!"
      }
    },
    select_staff_member: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecione um membro da equipa"
      }
    },
    choose_any_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Qualquer um disponÃ­vel"
      }
    },
    payment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Pagamento"
      }
    },
    phone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Telefone"
      }
    },
    pick_a_date_and_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecione uma data e hora"
      }
    },
    please_choose_at_least_one_option: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Por favor, selecione pelo menos uma opÃ§Ã£o"
      }
    },
    previous_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "MÃªs Anterior"
      }
    },
    reschedule_current_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Reagendar (Hora atual: "
        }, {
          t: 4,
          k: "time"
        }, {
          t: 3,
          v: ")"
        }]
      }
    },
    search: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Pesquisar"
      }
    },
    secure_payment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Pagamento Seguro"
      }
    },
    select_date: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecionar data"
      }
    },
    select_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecionar hora"
      }
    },
    skip: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Saltar"
      }
    },
    submit: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Enviar"
      }
    },
    thank_you: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Obrigado"
      }
    },
    thank_you_for_your_appointment_request: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Agradecemos o seu pedido de agendamento. "
      }
    },
    this_field_is_required: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Este campo Ã© obrigatÃ³rio."
      }
    },
    unable_to_fetch_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "NÃ£o Ã© possÃ­vel descobrir o calendÃ¡rio"
      }
    },
    unable_to_schedule_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "NÃ£o foi possÃ­vel agendar o seu compromisso. Tente novamente."
      }
    },
    DURATION: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "DURAÃ‡ÃƒO"
      }
    },
    DATEANDTIME: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "DATA E HORA"
      }
    },
    REPEATS: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "REPETIÃ‡Ã•ES"
      }
    },
    type_here_to_search_timezone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Escreva aqui para pesquisar o fuso horÃ¡rio"
      }
    },
    OLD: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "ANTIGO"
      }
    },
    continue: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Continuar"
      }
    },
    fetching_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Encontrar perÃ­odos..."
      }
    },
    fetching_recurring_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "A encontrar perÃ­odos recorrentes..."
      }
    },
    schedule_meeting: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Agendar ConferÃªncia"
      }
    },
    scheduling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "A agendar..."
      }
    },
    reschedule: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Reagendar"
      }
    },
    rescheduling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "A reagendar..."
      }
    },
    cancel_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Cancelar Compromisso"
      }
    },
    cancelling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "A cancelar..."
      }
    },
    back: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Voltar"
      }
    },
    enter_your_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Insira as suas informaÃ§Ãµes"
      }
    },
    finding_open_available_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "A encontrar perÃ­odos disponÃ­veis..."
      }
    },
    no_slots_available_in: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Nenhum perÃ­odo disponÃ­vel em"
      }
    },
    select_a_date: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecionar uma Data"
      }
    },
    choose_time_slot: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Escolher intervalo de tempo"
      }
    },
    select_a_date_and_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecione uma Data e Hora"
      }
    },
    cancellation_reason: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Motivo do cancelamento"
      }
    },
    your_appointment_has_been_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "A sua reuniÃ£o foi cancelada."
      }
    },
    more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "mais..."
      }
    },
    less: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "menos"
      }
    },
    your_meeting_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "A sua reuniÃ£o foi reagendada."
      }
    },
    your_meeting_has_been_scheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "A sua reuniÃ£o foi agendada."
      }
    },
    any_staff_header: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Algum funcionÃ¡rio disponÃ­vel"
      }
    },
    any_staff_description: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Para maximizar o total de slots disponÃ­veis, selecione esta opÃ§Ã£o"
      }
    },
    select_staff_for: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecione a equipa para"
      }
    },
    select_service: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecionar ServiÃ§o"
      }
    },
    next: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Seguinte"
      }
    },
    slot: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Assento"
      }
    },
    slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Assentos"
      }
    },
    your_appointment_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "O seu compromisso foi remarcado"
      }
    },
    your_appointment_has_been_scheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "O seu compromisso foi agendado."
      }
    },
    your_appointment_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "O seu compromisso foi cancelado."
      }
    },
    am: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "ManhÃ£"
      }
    },
    pm: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Tarde/noite"
      }
    },
    hr: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "H"
      }
    },
    minutes: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Minutos"
      }
    },
    january: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "janeiro"
      }
    },
    february: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "fevereiro"
      }
    },
    march: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "marÃ§o"
      }
    },
    april: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "abril"
      }
    },
    may: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "maio"
      }
    },
    june: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "junho"
      }
    },
    july: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "julho"
      }
    },
    august: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "agosto"
      }
    },
    september: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "setembro"
      }
    },
    october: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "outubro"
      }
    },
    november: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "novembro"
      }
    },
    december: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "dezembro"
      }
    },
    sunday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Domingo"
      }
    },
    monday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Segunda-feira"
      }
    },
    tuesday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "TerÃ§a-feira"
      }
    },
    wednesday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Quarta-feira"
      }
    },
    thursday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Quinta-feira"
      }
    },
    friday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Sexta-feira"
      }
    },
    saturday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ¡bado"
      }
    },
    timezone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Fuso horÃ¡rio"
      }
    },
    select: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecionar"
      }
    },
    select_date_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecionar Dia e Hora"
      }
    },
    time_zone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Fuso horÃ¡rio"
      }
    },
    duration: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "DuraÃ§Ã£o"
      }
    },
    enter_details: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Introduza as informaÃ§Ãµes"
      }
    },
    schedule_event: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Agendar Evento"
      }
    },
    show_less: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mostrar menos"
      }
    },
    show_more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mostrar mais"
      }
    },
    mins: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Minutos"
      }
    },
    add_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Adicionar ServiÃ§os"
      }
    },
    select_different_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecione serviÃ§os diferentes"
      }
    },
    confirm: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Confirmar"
      }
    },
    schedule_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Agendar Compromisso"
      }
    },
    service_menu_guest_description: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "O utilizador e mais "
        }, {
          t: 4,
          k: "guestCount"
        }, {
          t: 3,
          v: " convidado(s)"
        }]
      }
    },
    max_guest_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "O utilizador pode reservar atÃ© "
        }, {
          t: 4,
          k: "count"
        }, {
          t: 3,
          v: " perÃ­odos para este serviÃ§o. Para reservar para hÃ³spedes adicionais, por favor, selecione um serviÃ§o diferente para o mesmo time perÃ­odo."
        }]
      }
    },
    just_me: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ³ Eu"
      }
    },
    people: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "pessoas"
      }
    },
    selected_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "ServiÃ§os selecionados"
      }
    },
    choose_service: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Escolha um serviÃ§o"
      }
    },
    guest_title: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Convidado "
        }, {
          t: 4,
          k: "count"
        }, {
          t: 3,
          v: " "
        }, {
          t: 4,
          k: "title"
        }]
      }
    },
    with_any_available_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Com qualquer membro da equipa disponÃ­vel"
      }
    },
    with: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "com"
      }
    },
    select_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecione a Equipa"
      }
    },
    total: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Total"
      }
    },
    item: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "item"
      }
    },
    items: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "itens"
      }
    },
    view_cart: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ver o Carrinho"
      }
    },
    change_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Alterar o tempo"
      }
    },
    staff_busy_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "NÃ£o reservado: Equipa ocupada"
      }
    },
    your_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "O seu compromisso"
      }
    },
    book: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Reservar"
      }
    },
    add: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Adicionar"
      }
    },
    scheduling_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "A agendar compromisso"
      }
    },
    select_all_services_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Por favor, certifique-se de selecionar os serviÃ§os para todos os hÃ³spedes antes de prosseguir."
      }
    },
    booking_unsuccessful: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Reserva sem sucesso, recurso indisponÃ­vel no momento."
      }
    },
    acceptEssentialCookies: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Aceitar os Cookies essenciais"
      }
    },
    acceptAll: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Aceitar todos"
      }
    },
    ok: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ok"
      }
    },
    previous_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Hora anterior"
      }
    },
    icloud_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "iCloud Calendar"
      }
    },
    meeting_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "A ConferÃªncia foi reagendada"
      }
    },
    google_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "CalendÃ¡rio Google"
      }
    },
    outlook_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "CalendÃ¡rio do Outlook"
      }
    },
    deposit_paid: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Montante a pagar agora"
      }
    },
    pay_now: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Pague agora"
      }
    },
    total_amount: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Montante total"
      }
    },
    paid: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Pago"
      }
    },
    terms_and_conditions: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Por favor, aceite os Termos e CondiÃ§Ãµes"
      }
    },
    email_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "O campo E-mail Ã© necessÃ¡rio"
      }
    },
    cancel_booking: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Cancelar Reserva"
      }
    },
    cancel_meeting: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Cancelar ConferÃªncia?"
      }
    },
    appointment_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "O seu compromisso foi cancelado."
      }
    },
    first_name_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "O campo Nome prÃ³prio Ã© necessÃ¡rio"
      }
    },
    last_name_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "O campo Apelido Ã© necessÃ¡rio"
      }
    },
    phone_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Telefone obrigatÃ³rio"
      }
    },
    invalid_phone_no: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "NÃºmero de telefone invÃ¡lido"
      }
    },
    enter_location_of_your_choice: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Introduza qualquer localizaÃ§Ã£o da sua escolha"
      }
    },
    select_preferred_location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Selecione a localizaÃ§Ã£o preferida"
      }
    },
    payment_error_unknown: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Algo correu mal com o seu pagamento. Por favor, tentar novamente."
      }
    },
    payment_process_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ocorreu um erro ao tentar Fluxo de trabalho o seu pagamento. Por favor, tentar novamente."
      }
    },
    payment_failed: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "O pagamento falhou"
      }
    },
    slot_no_longer_available: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "A posiÃ§Ã£o, perÃ­odo utilizador tem Selecionado nÃ£o estÃ¡ mais disponÃ­vel"
      }
    }
  }
  , x2 = {
    guest_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "GÃ¤ster"
      }
    },
    add_guest_button: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "LÃ¤gg till gÃ¤st"
      }
    },
    guest_name_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "GÃ¤stnamn"
      }
    },
    guest_name_placeholder: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Namn"
      }
    },
    guest_name_req_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Namn krÃ¤vs"
      }
    },
    guest_name_invalid_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Namnet Ã¤r ogiltigt"
      }
    },
    guest_email_label: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "GÃ¤stens e-postadress"
      }
    },
    guest_email_placeholder: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "E-post"
      }
    },
    guest_email_req_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "E-post krÃ¤vs"
      }
    },
    guest_email_invalid_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "E-postadressen Ã¤r ogiltig!"
      }
    },
    guest_email_unique_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "E-post-ID mÃ¥ste vara unikt fÃ¶r gÃ¤ster."
      }
    },
    guest_count_only_button: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "LÃ¤gg till antal gÃ¤ster"
      }
    },
    guest_count_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Antal gÃ¤ster ska vara mellan 1 och 100"
      }
    },
    seat_not_available_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Det totala antalet tillgÃ¤ngliga platser fÃ¶r denna tidslucka Ã¤r endast"
      }
    },
    default_consent_text: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Jag bekrÃ¤ftar att jag vill ta emot innehÃ¥ll frÃ¥n det hÃ¤r fÃ¶retaget via all kontaktinformation som jag tillhandahÃ¥ller."
      }
    },
    add_to_google_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "LÃ¤gg till i Google Kalender"
      }
    },
    add_to_outlook_ical: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "LÃ¤gg till i Outlook/iCal"
      }
    },
    additional_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ytterligare information"
      }
    },
    anything_youd_like_to_know_before_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Finns det nÃ¥got du vill att vi kÃ¤nner till innan ditt mÃ¶te?"
      }
    },
    appointment_request_form: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "FormulÃ¤r fÃ¶r mÃ¶tesfÃ¶rfrÃ¥gan"
      }
    },
    appointment_requested: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "MÃ¶te begÃ¤rt"
      }
    },
    available_starting_times_for: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "TillgÃ¤ngliga starttider fÃ¶r"
      }
    },
    book_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Boka mÃ¶te"
      }
    },
    cancel: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Avbryt"
      }
    },
    cannot_find_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Kan inte hitta kalendern."
      }
    },
    contact_you_shortly_with_contact_method: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Vi kommer att kontakta dig inom kort fÃ¶r att bekrÃ¤fta din fÃ¶rfrÃ¥gan. Ring vÃ¥rt kontor pÃ¥ "
        }, {
          t: 4,
          k: "contactMethod"
        }, {
          t: 3,
          v: " om du har nÃ¥gra frÃ¥gor."
        }]
      }
    },
    date_of_birth: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "FÃ¶delsedatum"
      }
    },
    email: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "E-post"
      }
    },
    first_name: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "FÃ¶rnamn"
      }
    },
    go_to_next_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Hitta nÃ¤sta lediga tidslucka"
      }
    },
    last_name: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Efternamn"
      }
    },
    load_more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "LÃ¤s in mer"
      }
    },
    location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Plats"
      }
    },
    location_is_required: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Plats krÃ¤vs."
      }
    },
    please_enter_location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VÃ¤nligen ange en Plats"
      }
    },
    payment_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Betalning"
      }
    },
    next_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "NÃ¤sta mÃ¥nad"
      }
    },
    no_calendar_event_found: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ingen kalenderhÃ¤ndelse hittades"
      }
    },
    no_slot_available_this_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ingen tidslucka tillgÃ¤nglig den hÃ¤r mÃ¥naden."
      }
    },
    no_slots_available: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Inga tidsluckor Ã¤r tillgÃ¤ngliga"
      }
    },
    no_timezone_found: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ingen tidszon hittades!"
      }
    },
    select_staff_member: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VÃ¤lj en medarbetare"
      }
    },
    choose_any_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Alla tillgÃ¤ngliga"
      }
    },
    payment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Betalning"
      }
    },
    phone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Telefon"
      }
    },
    pick_a_date_and_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VÃ¤lj ett datum och en tid"
      }
    },
    please_choose_at_least_one_option: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VÃ¤lj minst ett alternativ"
      }
    },
    previous_month: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "FÃ¶regÃ¥ende mÃ¥nad"
      }
    },
    reschedule_current_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Omboka (aktuell tid: "
        }, {
          t: 4,
          k: "time"
        }, {
          t: 3,
          v: ")"
        }]
      }
    },
    search: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ¶k"
      }
    },
    secure_payment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ¤ker betalning"
      }
    },
    select_date: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VÃ¤lj datum"
      }
    },
    select_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VÃ¤lj tid"
      }
    },
    skip: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Hoppa Ã¶ver"
      }
    },
    submit: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Skicka"
      }
    },
    thank_you: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Tack"
      }
    },
    thank_you_for_your_appointment_request: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Tack fÃ¶r din mÃ¶tesfÃ¶rfrÃ¥gan. "
      }
    },
    this_field_is_required: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Det hÃ¤r fÃ¤ltet krÃ¤vs."
      }
    },
    unable_to_fetch_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Det gick inte att hitta kalendern"
      }
    },
    unable_to_schedule_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Vi kunde inte schemalÃ¤gga ditt mÃ¶te. FÃ¶rsÃ¶k igen."
      }
    },
    DURATION: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VARAKTIGHET"
      }
    },
    DATEANDTIME: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "DATUM OCH TID"
      }
    },
    REPEATS: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "UPPREPAS"
      }
    },
    type_here_to_search_timezone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Skriv hÃ¤r fÃ¶r att sÃ¶ka efter tidszon"
      }
    },
    OLD: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "GAMMAL"
      }
    },
    continue: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "FortsÃ¤tt"
      }
    },
    fetching_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Hittar tidsluckorÂ ..."
      }
    },
    fetching_recurring_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Hittar Ã¥terkommande tidsluckorÂ ..."
      }
    },
    schedule_meeting: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SchemalÃ¤gg mÃ¶te"
      }
    },
    scheduling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SchemalÃ¤ggerÂ ..."
      }
    },
    reschedule: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Omboka"
      }
    },
    rescheduling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "OmbokarÂ ..."
      }
    },
    cancel_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Avboka tid"
      }
    },
    cancelling: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "AvbokarÂ ..."
      }
    },
    back: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Tillbaka"
      }
    },
    enter_your_information: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ange din information"
      }
    },
    finding_open_available_slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Hittar Ã¶ppna tillgÃ¤ngliga tidsluckorÂ ..."
      }
    },
    no_slots_available_in: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Inga tidsluckor tillgÃ¤ngliga i"
      }
    },
    select_a_date: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VÃ¤lj ett datum"
      }
    },
    choose_time_slot: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VÃ¤lj tidslucka"
      }
    },
    select_a_date_and_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VÃ¤lj ett datum och tid"
      }
    },
    cancellation_reason: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "AvbokningsskÃ¤l"
      }
    },
    your_appointment_has_been_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ditt mÃ¶te har avbokats."
      }
    },
    more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "merÂ ..."
      }
    },
    less: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "mindre"
      }
    },
    your_meeting_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ditt mÃ¶te har ombokats"
      }
    },
    your_meeting_has_been_scheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ditt mÃ¶te har schemalagts"
      }
    },
    any_staff_header: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "All tillgÃ¤nglig personal"
      }
    },
    any_staff_description: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VÃ¤lj det hÃ¤r alternativet fÃ¶r att maximera det totala antalet tillgÃ¤ngliga tidsluckor."
      }
    },
    select_staff_for: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VÃ¤lj medarbetare fÃ¶r"
      }
    },
    select_service: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VÃ¤lj tjÃ¤nst"
      }
    },
    next: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "NÃ¤sta"
      }
    },
    slot: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Plats"
      }
    },
    slots: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Platser"
      }
    },
    your_appointment_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ditt mÃ¶te har ombokats"
      }
    },
    your_appointment_has_been_scheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ert mÃ¶te har schemalagts"
      }
    },
    your_appointment_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ditt mÃ¶te har avbokats."
      }
    },
    am: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "AM"
      }
    },
    pm: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "PM"
      }
    },
    hr: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "H"
      }
    },
    minutes: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Minuter"
      }
    },
    january: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Januari"
      }
    },
    february: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Februari"
      }
    },
    march: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Mars"
      }
    },
    april: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "April"
      }
    },
    may: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Maj"
      }
    },
    june: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Juni"
      }
    },
    july: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Juli"
      }
    },
    august: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Augusti"
      }
    },
    september: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "September"
      }
    },
    october: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Oktober"
      }
    },
    november: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "November"
      }
    },
    december: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "December"
      }
    },
    sunday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SÃ¶ndag"
      }
    },
    monday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "MÃ¥ndag"
      }
    },
    tuesday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Tisdag"
      }
    },
    wednesday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Onsdag"
      }
    },
    thursday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Torsdag"
      }
    },
    friday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Fredag"
      }
    },
    saturday: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "LÃ¶rdag"
      }
    },
    timezone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Tidszon"
      }
    },
    select: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VÃ¤lj"
      }
    },
    select_date_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VÃ¤lj datum och tid"
      }
    },
    time_zone: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Tidszon"
      }
    },
    duration: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Varaktighet"
      }
    },
    enter_details: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ange detaljer"
      }
    },
    schedule_event: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SchemalÃ¤gg hÃ¤ndelse"
      }
    },
    show_less: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Visa mindre"
      }
    },
    show_more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Visa mer"
      }
    },
    mins: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Min"
      }
    },
    add_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "LÃ¤gg till tjÃ¤nster"
      }
    },
    select_different_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VÃ¤lj olika tjÃ¤nster"
      }
    },
    confirm: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "BekrÃ¤fta"
      }
    },
    schedule_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SchemalÃ¤gg mÃ¶te"
      }
    },
    service_menu_guest_description: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Du och "
        }, {
          t: 4,
          k: "guestCount"
        }, {
          t: 3,
          v: " gÃ¤st(er) till"
        }]
      }
    },
    max_guest_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "Du kan reservera upp till "
        }, {
          t: 4,
          k: "count"
        }, {
          t: 3,
          v: " tidsluckor fÃ¶r den hÃ¤r tjÃ¤nsten. FÃ¶r att boka fÃ¶r ytterligare gÃ¤ster behÃ¶ver du vÃ¤lja en annan tjÃ¤nst fÃ¶r samma tidslucka."
        }]
      }
    },
    just_me: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Bara jag"
      }
    },
    people: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "personer"
      }
    },
    selected_services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Valda tjÃ¤nster"
      }
    },
    choose_service: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VÃ¤lj en tjÃ¤nst"
      }
    },
    guest_title: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3,
          v: "GÃ¤st "
        }, {
          t: 4,
          k: "count"
        }, {
          t: 3,
          v: " "
        }, {
          t: 4,
          k: "title"
        }]
      }
    },
    with_any_available_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Med tillgÃ¤nglig personal"
      }
    },
    with: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "med"
      }
    },
    select_staff: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VÃ¤lj medarbetare"
      }
    },
    total: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Totalt"
      }
    },
    item: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "artikel"
      }
    },
    items: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "artiklar"
      }
    },
    view_cart: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Visa kundvagn"
      }
    },
    change_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ã„ndra tid"
      }
    },
    staff_busy_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ej bokat: personalen Ã¤r upptagen"
      }
    },
    your_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ditt mÃ¶te"
      }
    },
    book: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Boka"
      }
    },
    add: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "LÃ¤gg till"
      }
    },
    scheduling_appointment: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "SchemalÃ¤gger mÃ¶te"
      }
    },
    select_all_services_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Se till att du vÃ¤ljer tjÃ¤nster fÃ¶r alla gÃ¤ster innan du fortsÃ¤tter."
      }
    },
    booking_unsuccessful: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Bokningen misslyckades. Resursen Ã¤r inte tillgÃ¤nglig just nu."
      }
    },
    acceptEssentialCookies: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Acceptera nÃ¶dvÃ¤ndiga cookies"
      }
    },
    acceptAll: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Acceptera alla"
      }
    },
    ok: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ok"
      }
    },
    previous_time: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "FÃ¶regÃ¥ende gÃ¥ng"
      }
    },
    icloud_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "iCloud-kalender"
      }
    },
    meeting_has_been_rescheduled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "MÃ¶tet har ombokats"
      }
    },
    google_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Google Kalender"
      }
    },
    outlook_calendar: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Outlook-kalender"
      }
    },
    deposit_paid: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Belopp som ska betalas nu"
      }
    },
    pay_now: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Betala nu"
      }
    },
    total_amount: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Totalt belopp"
      }
    },
    paid: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Betald"
      }
    },
    terms_and_conditions: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Acceptera reglerna och villkoren"
      }
    },
    email_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "E-post krÃ¤vs"
      }
    },
    cancel_booking: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Avboka"
      }
    },
    cancel_meeting: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Avboka mÃ¶te?"
      }
    },
    appointment_cancelled: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ditt mÃ¶te har avbokats."
      }
    },
    first_name_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "FÃ¶rnamn krÃ¤vs"
      }
    },
    last_name_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Efternamn krÃ¤vs"
      }
    },
    phone_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Telefonnummer krÃ¤vs"
      }
    },
    invalid_phone_no: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ogiltigt telefonnummer"
      }
    },
    enter_location_of_your_choice: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ange valfri plats"
      }
    },
    select_preferred_location: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "VÃ¤lj fÃ¶redragen plats"
      }
    },
    payment_error_unknown: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "NÃ¥got gick fel med din betalning. FÃ¶rsÃ¶k igen."
      }
    },
    payment_process_error: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ett fel intrÃ¤ffade nÃ¤r du fÃ¶rsÃ¶kte gÃ¶ra ArbetsflÃ¶de din betalning. FÃ¶rsÃ¶k igen."
      }
    },
    payment_failed: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Betalning misslyckades"
      }
    },
    slot_no_longer_available: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Tidslucka Du have Markerad finns inte lÃ¤ngre"
      }
    }
  }
  , In = ["da", "de", "en", "es", "fi", "fr-ca", "fr", "hu", "it", "nl", "no", "pl", "pt-br", "pt", "sv"]
  , Ps = {
    da: [{
      key: "../locales/da.json",
      load: () => Promise.resolve(w2),
      cache: !0
    }],
    de: [{
      key: "../locales/de.json",
      load: () => Promise.resolve(T2),
      cache: !0
    }],
    en: [{
      key: "../locales/en_US.json",
      load: () => Promise.resolve(A2),
      cache: !0
    }],
    es: [{
      key: "../locales/es.json",
      load: () => Promise.resolve(C2),
      cache: !0
    }],
    fi: [{
      key: "../locales/fi.json",
      load: () => Promise.resolve(S2),
      cache: !0
    }],
    "fr-ca": [{
      key: "../locales/fr_CA.json",
      load: () => Promise.resolve(P2),
      cache: !0
    }],
    fr: [{
      key: "../locales/fr.json",
      load: () => Promise.resolve(L2),
      cache: !0
    }],
    hu: [{
      key: "../locales/hu.json",
      load: () => Promise.resolve(R2),
      cache: !0
    }],
    it: [{
      key: "../locales/it.json",
      load: () => Promise.resolve(O2),
      cache: !0
    }],
    nl: [{
      key: "../locales/nl.json",
      load: () => Promise.resolve(I2),
      cache: !0
    }],
    no: [{
      key: "../locales/no.json",
      load: () => Promise.resolve(N2),
      cache: !0
    }],
    pl: [{
      key: "../locales/pl.json",
      load: () => Promise.resolve(D2),
      cache: !0
    }],
    "pt-br": [{
      key: "../locales/pt_BR.json",
      load: () => Promise.resolve(M2),
      cache: !0
    }],
    pt: [{
      key: "../locales/pt.json",
      load: () => Promise.resolve(j2),
      cache: !0
    }],
    sv: [{
      key: "../locales/sv.json",
      load: () => Promise.resolve(x2),
      cache: !0
    }]
  }
  , z2 = [() => Z(() => import("./i18n.config.45aa417d.js"), [], import.meta.url)]
  , Qs = [{
    code: "da",
    files: [{
      path: "locales/da.json"
    }]
  }, {
    code: "de",
    files: [{
      path: "locales/de.json"
    }]
  }, {
    code: "en",
    files: [{
      path: "locales/en_US.json"
    }]
  }, {
    code: "es",
    files: [{
      path: "locales/es.json"
    }]
  }, {
    code: "fi",
    files: [{
      path: "locales/fi.json"
    }]
  }, {
    code: "fr-ca",
    files: [{
      path: "locales/fr_CA.json"
    }]
  }, {
    code: "fr",
    files: [{
      path: "locales/fr.json"
    }]
  }, {
    code: "hu",
    files: [{
      path: "locales/hu.json"
    }]
  }, {
    code: "it",
    files: [{
      path: "locales/it.json"
    }]
  }, {
    code: "nl",
    files: [{
      path: "locales/nl.json"
    }]
  }, {
    code: "no",
    files: [{
      path: "locales/no.json"
    }]
  }, {
    code: "pl",
    files: [{
      path: "locales/pl.json"
    }]
  }, {
    code: "pt-br",
    files: [{
      path: "locales/pt_BR.json"
    }]
  }, {
    code: "pt",
    files: [{
      path: "locales/pt.json"
    }]
  }, {
    code: "sv",
    files: [{
      path: "locales/sv.json"
    }]
  }]
  , Sd = "@nuxtjs/i18n"
  , F2 = !1
  , V2 = !1
  , H2 = "nuxtI18n"
  , U2 = "i18n_redirected"
  , nc = "nuxt-i18n-slp"
  , Ci = new Map;
async function B2(t, e) {
  const n = {
    messages: {}
  };
  for (const i of t) {
    const { default: s } = await i()
      , o = typeof s == "function" ? await e.runWithContext(async () => await s()) : s;
    Pn(o, n)
  }
  return n
}
function Pd(t, e) {
  let n = [];
  if (Pt(t))
    n = t;
  else if (rt(t)) {
    const i = [...e, "default"];
    for (const s of i)
      t[s] && (n = [...n, ...t[s].filter(Boolean)])
  } else
    K(t) && e.every(i => i !== t) && n.push(t);
  return n
}
async function q2(t, e, n) {
  const { defaultLocale: i, initialLocale: s, localeCodes: o, fallbackLocale: r, lazy: a } = n;
  if (a && r) {
    const c = Pd(r, [i, s]);
    await Promise.all(c.map(u => ic(u, e, t)))
  }
  const l = a ? [...new Set().add(i).add(s)] : o;
  return await Promise.all(l.map(c => ic(c, e, t))),
    t
}
async function $2(t, { key: e, load: n }) {
  let i = null;
  try {
    const s = await n().then(o => o.default || o);
    pt(s) ? i = await s(t) : (i = s,
      i != null && Ci && Ci.set(e, i))
  } catch (s) {
    console.error("Failed locale loading: " + s.message)
  }
  return i
}
async function Ls(t, e, n) {
  const i = e[t];
  if (i == null) {
    console.warn("Could not find messages for locale code: " + t);
    return
  }
  const s = {};
  for (const o of i) {
    let r = null;
    Ci && Ci.has(o.key) && o.cache ? r = Ci.get(o.key) : r = await $2(t, o),
      r != null && Pn(r, s)
  }
  n(t, s)
}
async function ic(t, e, n) {
  await Ls(t, e, (s, o) => {
    const r = n[s] || {};
    Pn(o, r),
      n[s] = r
  }
  )
}
const W2 = typeof window < "u";
function K2(t) {
  t = t || [];
  const e = [];
  for (const n of t)
    K(n) ? e.push({
      code: n
    }) : e.push(n);
  return e
}
function G2(t) {
  return t != null && "global" in t && "mode" in t
}
function Y2(t) {
  return t != null && !("__composer" in t) && "locale" in t && St(t.locale)
}
function Ld(t) {
  return t != null && "__composer" in t
}
function dn(t) {
  return G2(t) ? t.global : t
}
function ii(t) {
  const e = dn(t);
  return Y2(e) ? e : Ld(e) ? e.__composer : e
}
function to(t) {
  return ut(dn(t).locale)
}
function J2(t) {
  return ut(dn(t).locales)
}
function X2(t) {
  return ut(dn(t).localeCodes)
}
function Rd(t, e) {
  const n = dn(t);
  St(n.locale) ? n.locale.value = e : n.locale = e
}
function Od(t) {
  return K(t) ? t : N0(t) ? t.toString() : "(null)"
}
function sc(t, e, { defaultLocale: n, strategy: i, routesNameSeparator: s, defaultLocaleRouteNameSuffix: o }) {
  let r = Od(t) + (i === "no_prefix" ? "" : s + e);
  return e === n && i === "prefix_and_default" && (r += s + o),
    r
}
function oc(t, e) {
  return pt(t) ? t(e) : t
}
function Z2(t, e) {
  const n = [];
  for (const [i, s] of e.entries()) {
    const o = t.find(r => r.iso.toLowerCase() === s.toLowerCase());
    if (o) {
      n.push({
        code: o.code,
        score: 1 - i / e.length
      });
      break
    }
  }
  for (const [i, s] of e.entries()) {
    const o = s.split("-")[0].toLowerCase()
      , r = t.find(a => a.iso.split("-")[0].toLowerCase() === o);
    if (r) {
      n.push({
        code: r.code,
        score: .999 - i / e.length
      });
      break
    }
  }
  return n
}
const Q2 = Z2;
function t3(t, e) {
  return t.score === e.score ? e.code.length - t.code.length : e.score - t.score
}
const e3 = t3;
function n3(t, e, { matcher: n = Q2, comparer: i = e3 } = {}) {
  const s = [];
  for (const r of t) {
    const { code: a } = r
      , l = r.iso || a;
    s.push({
      code: a,
      iso: l
    })
  }
  const o = n(s, e);
  return o.length > 1 && o.sort(i),
    o.length ? o[0].code : ""
}
function Rs(t) {
  return new RegExp(`^/(${t.join("|")})(?:/|$)`, "i")
}
function i3(t, e) {
  return [t.slice(0, e), t.slice(e)]
}
function s3(t) {
  const { fullPath: e, query: n, hash: i, name: s, path: o, params: r, meta: a, redirectedFrom: l, matched: c } = t;
  return {
    fullPath: e,
    params: r,
    query: n,
    hash: i,
    name: s,
    path: o,
    meta: a,
    matched: c,
    redirectedFrom: l
  }
}
function o3({ router: t }, e, n, i) {
  var c, u;
  if (n !== "prefix")
    return t.resolve(e);
  const [s, o] = i3(e.path, 1)
    , r = `${s}${i}${o === "" ? o : `/${o}`}`
    , a = (u = (c = t.options) == null ? void 0 : c.routes) == null ? void 0 : u.find(d => d.path === r);
  if (a == null)
    return e;
  const l = Lt({}, e, a);
  return l.path = r,
    t.resolve(l)
}
const r3 = new Set(["prefix_and_default", "prefix_except_default"]);
function a3(t) {
  const { currentLocale: e, defaultLocale: n, strategy: i } = t;
  return !(e === n && r3.has(i)) && i !== "no_prefix"
}
const l3 = a3;
function si(t, e) {
  const { routesNameSeparator: n } = t.runtimeConfig.public.i18n
    , i = ut(e);
  return i == null || !i.name ? void 0 : Od(i.name).split(n)[0]
}
function Yr(t, e, n) {
  var s;
  if (typeof e == "string" && Dn(e, {
    acceptRelative: !0
  }))
    return e;
  const i = eo(t, e, n);
  return i == null ? "" : ((s = i.redirectedFrom) == null ? void 0 : s.fullPath) || i.fullPath
}
function Jr(t, e, n) {
  return eo(t, e, n) ?? void 0
}
function c3(t, e, n) {
  return eo(t, e, n) ?? void 0
}
function eo(t, e, n) {
  const { router: i, i18n: s } = t
    , o = n || to(s)
    , { routesNameSeparator: r, defaultLocale: a, defaultLocaleRouteNameSuffix: l, strategy: c, trailingSlash: u } = t.runtimeConfig.public.i18n
    , d = w3(t.runtimeConfig);
  let f;
  if (K(e))
    if (e[0] === "/") {
      const { pathname: E, search: S, hash: v } = Ho(e)
        , _ = Cu(S);
      f = {
        path: E,
        query: _,
        hash: v
      }
    } else
      f = {
        name: e
      };
  else
    f = e;
  let b = Lt({}, f);
  if ((E => "path" in E && !!E.path && !("name" in E))(b)) {
    const E = o3(t, b, c, o)
      , S = si(t, E);
    K(S) ? (b = {
      name: sc(S, o, {
        defaultLocale: a,
        strategy: c,
        routesNameSeparator: r,
        defaultLocaleRouteNameSuffix: l
      }),
      params: E.params,
      query: E.query,
      hash: E.hash
    },
      b.state = E.state) : (d({
        currentLocale: o,
        defaultLocale: a,
        strategy: c
      }) && (b.path = `/${o}${b.path}`),
        b.path = u ? ps(b.path, !0) : Mr(b.path, !0))
  } else
    !b.name && !("path" in b) && (b.name = si(t, i.currentRoute.value)),
      b.name = sc(b.name, o, {
        defaultLocale: a,
        strategy: c,
        routesNameSeparator: r,
        defaultLocaleRouteNameSuffix: l
      });
  try {
    const E = i.resolve(b);
    return E.name ? E : i.resolve(e)
  } catch (E) {
    if (typeof E == "object" && "type" in E && E.type === 1)
      return null
  }
}
const u3 = t => t;
function d3(t, e) {
  var i;
  if (t.runtimeConfig.public.i18n.experimental.switchLocalePathLinkSSR)
    return ut(t.metaState.value);
  const n = e.meta || {};
  return ((i = ut(n)) == null ? void 0 : i[H2]) || {}
}
function oi(t, e, n) {
  const i = n ?? t.router.currentRoute.value
    , s = si(t, i);
  if (!s)
    return "";
  const o = T3(t.runtimeConfig)
    , r = s3(i)
    , a = d3(t, i)[e]
    , l = {
      ...r,
      name: s,
      params: {
        ...r.params,
        ...a
      }
    }
    , c = Yr(t, l, e);
  return o(c, e)
}
function Id(t, { addDirAttribute: e = !1, addSeoAttributes: n = !0, identifierAttribute: i = "hid" }) {
  const { defaultDirection: s } = we().public.i18n
    , o = ii(t.i18n)
    , r = {
      htmlAttrs: {},
      link: [],
      meta: []
    };
  if (ut(o.locales) == null || ut(o.baseUrl) == null)
    return r;
  const a = to(t.i18n)
    , l = J2(t.i18n)
    , c = K2(l).find(f => f.code === a) || {
      code: a
    }
    , u = c.iso
    , d = c.dir || s;
  return e && (r.htmlAttrs.dir = d),
    n && a && ut(o.locales) && (u && (r.htmlAttrs.lang = u),
      r.link.push(...f3(t, ut(l), i), ..._3(t, i, n)),
      r.meta.push(...b3(t, i, n), ...m3(c, u, i), ...p3(ut(l), u, i))),
    r
}
function Xr() {
  const t = gt()
    , e = ii(t.$i18n);
  return Mn(ut(e.baseUrl), t.$config.app.baseURL)
}
function f3(t, e, n) {
  const i = Xr()
    , { defaultLocale: s, strategy: o } = we().public.i18n
    , r = [];
  if (o === "no_prefix")
    return r;
  const a = new Map;
  for (const l of e) {
    const c = l.iso;
    if (!c) {
      console.warn("Locale ISO code is required to generate alternate link");
      continue
    }
    const [u, d] = c.split("-");
    u && d && (l.isCatchallLocale || !a.has(u)) && a.set(u, l),
      a.set(c, l)
  }
  for (const [l, c] of a.entries()) {
    const u = oi(t, c.code);
    u && r.push({
      [n]: `i18n-alt-${l}`,
      rel: "alternate",
      href: ar(u, i),
      hreflang: l
    })
  }
  if (s) {
    const l = oi(t, s);
    l && r.push({
      [n]: "i18n-xd",
      rel: "alternate",
      href: ar(l, i),
      hreflang: "x-default"
    })
  }
  return r
}
function Nd(t, e, n) {
  const i = t.router.currentRoute.value
    , s = Jr(t, {
      ...i,
      path: void 0,
      name: si(t, i)
    });
  if (!s)
    return "";
  let o = ar(s.path, e);
  const r = rt(n) && n.canonicalQueries || []
    , a = s.query
    , l = new URLSearchParams;
  for (const u of r)
    if (u in a) {
      const d = a[u];
      Pt(d) ? d.forEach(f => l.append(u, f || "")) : l.append(u, d || "")
    }
  const c = l.toString();
  return c && (o = `${o}?${c}`),
    o
}
function _3(t, e, n) {
  const i = Xr()
    , s = Nd(t, i, n);
  return s ? [{
    [e]: "i18n-can",
    rel: "canonical",
    href: s
  }] : []
}
function b3(t, e, n) {
  const i = Xr()
    , s = Nd(t, i, n);
  return s ? [{
    [e]: "i18n-og-url",
    property: "og:url",
    content: s
  }] : []
}
function m3(t, e, n) {
  return !t || !e ? [] : [{
    [n]: "i18n-og",
    property: "og:locale",
    content: Dd(e)
  }]
}
function p3(t, e, n) {
  return t.filter(s => s.iso && s.iso !== e).map(s => ({
    [n]: `i18n-og-alt-${s.iso}`,
    property: "og:locale:alternate",
    content: Dd(s.iso)
  }))
}
function Dd(t) {
  return (t || "").replace(/-/g, "_")
}
function ar(t, e) {
  return t.match(/^https?:\/\//) ? t : Mn(e, t)
}
function h3(t, e) {
  return no(t, "setLocaleCookie", e)
}
function Md(t, e, n) {
  return no(t, "mergeLocaleMessage", e, n)
}
function g3(t, e, n, i, s) {
  return no(t, "onBeforeLanguageSwitch", e, n, i, s)
}
function v3(t, e, n) {
  return no(t, "onLanguageSwitched", e, n)
}
function Zr(t) {
  return {
    i18n: t ?? gt().$i18n,
    router: jn(),
    runtimeConfig: we(),
    metaState: Fr("nuxt-i18n-meta", () => ({}))
  }
}
async function rc(t, e, n, i = !1) {
  const { differentDomains: s, skipSettingLocaleOnNavigate: o, lazy: r } = n
    , a = Bi(n)
    , l = gt()
    , c = to(e)
    , u = X2(e);
  function d(b = c) {
    a === !1 || !a.useCookie || o || h3(e, b)
  }
  if (!t || !i && s || c === t)
    return d(),
      !1;
  const f = await g3(e, c, t, i, l);
  if (f && u.includes(f)) {
    if (c === f)
      return d(),
        !1;
    t = f
  }
  if (r) {
    const b = C3(e, "fallbackLocale")
      , w = (E, S) => Md(e, E, S);
    if (b) {
      const E = Pd(b, [t]);
      await Promise.all(E.map(S => Ls(S, Ps, w)))
    }
    await Ls(t, Ps, w)
  }
  return o ? !1 : (d(t),
    Rd(e, t),
    await v3(e, c, t),
    !0)
}
function ac(t, e, n, i, s, o) {
  const { strategy: r, defaultLocale: a, differentDomains: l } = o
    , c = Bi(o)
    , u = pt(i) ? i() : i
    , { ssg: d, callType: f, firstAccess: b, localeCookie: w } = s
    , { locale: E, stat: S, reason: v, from: _ } = c ? R3(t, n, s, u) : L3;
  if (v === "detect_ignore_on_ssg")
    return u;
  if ((_ === "navigator_or_header" || _ === "cookie" || _ === "fallback") && E)
    return E;
  let g = E;
  return g || (l ? g = I3(Qs, r, t) : r !== "no_prefix" ? g = e(t) : c || (g = u)),
    !g && c && c.useCookie && (g = w || ""),
    g || (g = a || ""),
    g
}
function lc({ route: t, targetLocale: e, routeLocaleGetter: n, calledWithRouting: i = !1 }) {
  const s = gt()
    , o = Zr()
    , { strategy: r, differentDomains: a } = o.runtimeConfig.public.i18n;
  let l = "";
  const { fullPath: c } = t.to;
  if (!a && (i || r !== "no_prefix") && n(t.to) !== e) {
    const u = s.$switchLocalePath(e) || s.$localePath(c, e);
    K(u) && u && !Vo(u, c) && !u.startsWith("//") && (l = t.from && t.from.fullPath === u ? "" : u)
  }
  if ((a || V2) && n(t.to) !== e) {
    const u = oi(o, e, t.to);
    K(u) && u && !Vo(u, c) && !u.startsWith("//") && (l = u)
  }
  return l
}
function y3(t) {
  return rt(t) && "path" in t && "statusCode" in t
}
const k3 = () => Fr(Sd + ":redirect", () => "");
function cc(t, e) {
  return Wp(t, {
    redirectCode: e
  })
}
async function uc(t, { status: e = 302, enableNavigate: n = !1 } = {}) {
  const { nuxtApp: i, i18n: s, locale: o, route: r } = t
    , { rootRedirect: a, differentDomains: l, skipSettingLocaleOnNavigate: c } = i.$config.public.i18n;
  let { redirectPath: u } = t;
  if (r.path === "/" && a)
    return K(a) ? u = "/" + a : y3(a) && (u = "/" + a.path,
      e = a.statusCode),
      u = i.$localePath(u, o),
      cc(u, e);
  if (!(c && (s.__pendingLocale = o,
    s.__pendingLocalePromise = new Promise(d => {
      s.__resolvePendingLocalePromise = d
    }
    ),
    !n))) {
    if (l) {
      const d = k3();
      d.value && d.value !== u && (d.value = "",
        window.location.assign(u))
    } else if (u)
      return cc(u, e)
  }
}
function E3(t, e) {
  zn(t, "$i18n", dn(e)),
    zn(t, "$getRouteBaseName", ie(si)),
    zn(t, "$localePath", ie(Yr)),
    zn(t, "$localeRoute", ie(Jr)),
    zn(t, "$switchLocalePath", ie(oi)),
    zn(t, "$localeHead", ie(Id))
}
function w3(t = we()) {
  return e => l3(e) && !t.public.i18n.differentDomains
}
function T3(t = we()) {
  return (e, n) => {
    if (t.public.i18n.differentDomains) {
      const i = zd(n);
      return i ? Mn(i, e) : e
    } else
      return u3(e)
  }
}
function A3() {
  return () => {
    const t = gt()
      , { baseUrl: e, defaultLocale: n, differentDomains: i } = t.$config.public.i18n;
    if (pt(e))
      return e(t);
    const s = pt(n) ? n() : n;
    if (i && s) {
      const o = zd(s);
      if (o)
        return o
    }
    return e
  }
}
function jd(t) {
  return Sd + " " + t
}
function no(t, e, ...n) {
  const i = dn(t)
    , [s, o] = [i, i[e]];
  return Reflect.apply(o, s, [...n])
}
function C3(t, e) {
  const n = dn(t);
  return ut(n[e])
}
function zn(t, e, n) {
  Object.defineProperty(t, e, {
    get: () => n
  })
}
function ie(t, e = Zr()) {
  return (...n) => t(e, ...n)
}
function xd() {
  let t;
  return navigator.languages && (t = n3(Qs, navigator.languages)),
    t
}
function S3() {
  const t = Bi()
    , e = t && t.cookieKey || U2
    , n = new Date
    , i = {
      expires: new Date(n.setDate(n.getDate() + 365)),
      path: "/",
      sameSite: t && t.cookieCrossOrigin ? "none" : "lax",
      secure: t && t.cookieCrossOrigin || t && t.cookieSecure
    };
  return t && t.cookieDomain && (i.domain = t.cookieDomain),
    Qp(e, i)
}
function wo(t, e, n) {
  if (e === !1 || !e.useCookie)
    return;
  const i = t.value ?? void 0;
  if (i != null) {
    if (In.includes(i))
      return i;
    if (n)
      return t.value = n,
        n;
    t.value = void 0
  }
}
function P3(t, e, n) {
  n === !1 || !n.useCookie || (t.value = e)
}
const L3 = {
  locale: "",
  stat: !1,
  reason: "unknown",
  from: "unknown"
};
function R3(t, e, n, i = "") {
  const { strategy: s } = we().public.i18n
    , { ssg: o, callType: r, firstAccess: a, localeCookie: l } = n;
  if (!a)
    return {
      locale: s === "no_prefix" ? i : "",
      stat: !1,
      reason: "first_access_only"
    };
  const { redirectOn: c, alwaysRedirect: u, useCookie: d, fallbackLocale: f } = Bi()
    , b = K(t) ? t : t.path;
  if (s !== "no_prefix") {
    if (c === "root") {
      if (b !== "/")
        return {
          locale: "",
          stat: !1,
          reason: "not_redirect_on_root"
        }
    } else if (c === "no prefix" && !u && b.match(Rs(In)))
      return {
        locale: "",
        stat: !1,
        reason: "not_redirect_on_no_prefix"
      }
  }
  let w = "unknown", E, S;
  d && (S = E = l,
    w = "cookie"),
    S || (S = xd(),
      w = "navigator_or_header");
  const v = S || f;
  !S && f && (w = "fallback");
  const _ = i || e;
  if (v && (!d || u || !E)) {
    if (s === "no_prefix")
      return {
        locale: v,
        stat: !0,
        from: w
      };
    if (r === "setup" && v !== _)
      return {
        locale: v,
        stat: !0,
        from: w
      };
    if (u) {
      const g = b === "/"
        , m = c === "all"
        , T = c === "no prefix" && !b.match(Rs(In));
      if (g || m || T)
        return {
          locale: v,
          stat: !0,
          from: w
        }
    }
  }
  return o === "ssg_setup" && v ? {
    locale: v,
    stat: !0,
    from: w
  } : (w === "navigator_or_header" || w === "cookie") && v ? {
    locale: v,
    stat: !0,
    from: w
  } : {
    locale: "",
    stat: !1,
    reason: "not_found_match"
  }
}
function O3() {
  let t;
  return t = window.location.host,
    t
}
function I3(t, e, n) {
  let i = O3() || "";
  if (i) {
    let s;
    const o = t.filter(r => {
      if (r && r.domain) {
        let a = r.domain;
        return Dn(r.domain) && (a = r.domain.replace(/(http|https):\/\//, "")),
          a === i
      }
      return !1
    }
    );
    if (o.length === 1)
      s = o[0];
    else if (o.length > 1)
      if (e === "no_prefix")
        console.warn(jd("Multiple matching domains found! This is not supported for no_prefix strategy in combination with differentDomains!")),
          s = o[0];
      else {
        if (n) {
          const r = rt(n) ? n.path : K(n) ? n : "";
          if (r && r !== "") {
            const a = r.match(Rs(o.map(l => l.code)));
            a && a.length > 1 && (s = o.find(l => l.code === a[1]))
          }
        }
        s || (s = o.find(r => r.domainDefault))
      }
    if (s)
      return s.code;
    i = ""
  }
  return i
}
function zd(t) {
  var o, r;
  const n = we().public.i18n
    , i = Qs.find(a => a.code === t)
    , s = ((r = (o = n == null ? void 0 : n.locales) == null ? void 0 : o[t]) == null ? void 0 : r.domain) ?? (i == null ? void 0 : i.domain);
  if (s) {
    if (Dn(s, {
      strict: !0
    }))
      return s;
    let a;
    return a = new URL(window.location.origin).protocol,
      a + "//" + s
  }
  console.warn(jd("Could not find domain name for locale " + t))
}
const Bi = (t = we().public.i18n) => (t == null ? void 0 : t.detectBrowserLanguage) === !1 ? !1 : t == null ? void 0 : t.detectBrowserLanguage;
function N3() {
  return ie(oi)
}
function D3(t, { locales: e = [], localeCodes: n = [], baseUrl: i = "", hooks: s = {}, context: o = {} } = {}) {
  const r = yc()
    , a = t.install;
  return t.install = (l, ...c) => {
    const u = x3(c[0]) ? Lt({}, c[0]) : {
      inject: !0
    };
    u.inject == null && (u.inject = !0);
    const d = u.__composerExtend;
    if (u.__composerExtend = E => {
      const S = ii(t);
      E.locales = vt(() => S.locales.value),
        E.localeCodes = vt(() => S.localeCodes.value),
        E.baseUrl = vt(() => S.baseUrl.value);
      let v;
      return pt(d) && (v = Reflect.apply(d, u, [E])),
        () => {
          v && v()
        }
    }
      ,
      t.mode === "legacy") {
      const E = u.__vueI18nExtend;
      u.__vueI18nExtend = S => {
        dc(S, s.onExtendVueI18n);
        let v;
        return pt(E) && (v = Reflect.apply(E, u, [S])),
          () => {
            v && v()
          }
      }
    }
    c[0] = u,
      Reflect.apply(a, t, [l, ...c]);
    const f = ii(t);
    r.run(() => {
      M3(f, {
        locales: e,
        localeCodes: n,
        baseUrl: i,
        hooks: s,
        context: o
      }),
        t.mode === "legacy" && Ld(t.global) && dc(t.global, s.onExtendVueI18n)
    }
    );
    const b = l
      , w = t.mode === "composition" ? b.config.globalProperties.$i18n : null;
    if (w && j3(w, f, s.onExtendExportedGlobal),
      u.inject) {
      const E = Zr(t);
      l.mixin({
        methods: {
          getRouteBaseName: ie(si, E),
          resolveRoute: ie(eo, E),
          localePath: ie(Yr, E),
          localeRoute: ie(Jr, E),
          localeLocation: ie(c3, E),
          switchLocalePath: ie(oi, E),
          localeHead: ie(Id, E)
        }
      })
    }
    if (b.unmount) {
      const E = b.unmount;
      b.unmount = () => {
        r.stop(),
          E()
      }
    }
  }
    ,
    r
}
function M3(t, e) {
  const { locales: n, localeCodes: i, baseUrl: s, context: o } = e
    , r = Ut(n)
    , a = Ut(i)
    , l = Ut("");
  t.locales = vt(() => r.value),
    t.localeCodes = vt(() => a.value),
    t.baseUrl = vt(() => l.value),
    W2 ? ve(t.locale, () => {
      l.value = oc(s, o)
    }
      , {
        immediate: !0
      }) : l.value = oc(s, o),
    e.hooks && e.hooks.onExtendComposer && e.hooks.onExtendComposer(t)
}
function Fd(t, e, n) {
  const i = [{
    locales: {
      get() {
        return t.locales.value
      }
    },
    localeCodes: {
      get() {
        return t.localeCodes.value
      }
    },
    baseUrl: {
      get() {
        return t.baseUrl.value
      }
    }
  }];
  n && i.push(n(t));
  for (const s of i)
    for (const [o, r] of Object.entries(s))
      Object.defineProperty(e, o, r)
}
function j3(t, e, n) {
  Fd(e, t, n)
}
function dc(t, e) {
  const n = ii(t);
  Fd(n, t, e)
}
function x3(t) {
  return rt(t) && ("inject" in t || "__composerExtend" in t || "__vueI18nExtend" in t)
}
function z3() {
  const { routesNameSeparator: t, defaultLocaleRouteNameSuffix: e } = we().public.i18n
    , n = `(${In.join("|")})`
    , i = `(?:${t}${e})?`
    , s = new RegExp(`${t}${n}${i}$`, "i")
    , o = Rs(In);
  return a => {
    if (rt(a)) {
      if (a.name) {
        const c = (K(a.name) ? a.name : a.name.toString()).match(s);
        if (c && c.length > 1)
          return c[1]
      } else if (a.path) {
        const l = a.path.match(o);
        if (l && l.length > 1)
          return l[1]
      }
    } else if (K(a)) {
      const l = a.match(o);
      if (l && l.length > 1)
        return l[1]
    }
    return ""
  }
}
const F3 = Ee({
  name: "i18n:plugin",
  parallel: F2,
  async setup(t) {
    let e, n;
    const i = zr()
      , { vueApp: s } = t
      , o = t
      , r = {
        ...o.$config.public.i18n
      };
    r.baseUrl = A3();
    const a = Bi()
      , l = ([e, n] = Fe(() => B2(z2, gt())),
        e = await e,
        n(),
        e);
    l.messages = l.messages || {},
      l.fallbackLocale = l.fallbackLocale ?? !1;
    const c = z3()
      , u = _ => _ || l.locale || "en-US"
      , d = S3();
    let f = ac(i, c, l.locale, u(r.defaultLocale), {
      ssg: "normal",
      callType: "setup",
      firstAccess: !0,
      localeCookie: wo(d, a, r.defaultLocale)
    }, r);
    l.messages = ([e, n] = Fe(() => q2(l.messages, Ps, {
      localeCodes: In,
      initialLocale: f,
      lazy: r.lazy,
      defaultLocale: r.defaultLocale,
      fallbackLocale: l.fallbackLocale
    })),
      e = await e,
      n(),
      e),
      f = u(f);
    const b = _2({
      ...l,
      locale: f
    });
    let w = !0;
    const E = _ => f !== _ && w;
    D3(b, {
      locales: r.configLocales,
      localeCodes: In,
      baseUrl: r.baseUrl,
      context: o,
      hooks: {
        onExtendComposer(_) {
          _.strategy = r.strategy,
            _.localeProperties = vt(() => Qs.find(g => g.code === _.locale.value) || {
              code: _.locale.value
            }),
            _.setLocale = async g => {
              const m = E(g);
              await rc(g, b, r, m) && m && (w = !1);
              const A = await o.runWithContext(() => lc({
                route: {
                  to: i
                },
                targetLocale: g,
                routeLocaleGetter: c
              }));
              await o.runWithContext(async () => await uc({
                nuxtApp: o,
                i18n: b,
                redirectPath: A,
                locale: g,
                route: i
              }, {
                enableNavigate: !0
              }))
            }
            ,
            _.loadLocaleMessages = async g => {
              await Ls(g, Ps, (T, A) => Md(b, T, A))
            }
            ,
            _.differentDomains = r.differentDomains,
            _.defaultLocale = r.defaultLocale,
            _.getBrowserLocale = () => xd(),
            _.getLocaleCookie = () => wo(d, a, r.defaultLocale),
            _.setLocaleCookie = g => P3(d, g, a),
            _.onBeforeLanguageSwitch = (g, m, T, A) => t.callHook("i18n:beforeLocaleSwitch", {
              oldLocale: g,
              newLocale: m,
              initialSetup: T,
              context: A
            }),
            _.onLanguageSwitched = (g, m) => t.callHook("i18n:localeSwitched", {
              oldLocale: g,
              newLocale: m
            }),
            _.finalizePendingLocaleChange = async () => {
              b.__pendingLocale && (Rd(b, b.__pendingLocale),
                b.__resolvePendingLocalePromise && await b.__resolvePendingLocalePromise(),
                b.__pendingLocale = void 0)
            }
            ,
            _.waitForPendingLocaleChange = async () => {
              b.__pendingLocale && b.__pendingLocalePromise && await b.__pendingLocalePromise
            }
        },
        onExtendExportedGlobal(_) {
          return {
            strategy: {
              get() {
                return _.strategy
              }
            },
            localeProperties: {
              get() {
                return _.localeProperties.value
              }
            },
            setLocale: {
              get() {
                return async g => Reflect.apply(_.setLocale, _, [g])
              }
            },
            differentDomains: {
              get() {
                return _.differentDomains
              }
            },
            defaultLocale: {
              get() {
                return _.defaultLocale
              }
            },
            getBrowserLocale: {
              get() {
                return () => Reflect.apply(_.getBrowserLocale, _, [])
              }
            },
            getLocaleCookie: {
              get() {
                return () => Reflect.apply(_.getLocaleCookie, _, [])
              }
            },
            setLocaleCookie: {
              get() {
                return g => Reflect.apply(_.setLocaleCookie, _, [g])
              }
            },
            onBeforeLanguageSwitch: {
              get() {
                return (g, m, T, A) => Reflect.apply(_.onBeforeLanguageSwitch, _, [g, m, T, A])
              }
            },
            onLanguageSwitched: {
              get() {
                return (g, m) => Reflect.apply(_.onLanguageSwitched, _, [g, m])
              }
            },
            finalizePendingLocaleChange: {
              get() {
                return () => Reflect.apply(_.finalizePendingLocaleChange, _, [])
              }
            },
            waitForPendingLocaleChange: {
              get() {
                return () => Reflect.apply(_.waitForPendingLocaleChange, _, [])
              }
            }
          }
        },
        onExtendVueI18n(_) {
          return {
            strategy: {
              get() {
                return _.strategy
              }
            },
            localeProperties: {
              get() {
                return _.localeProperties.value
              }
            },
            setLocale: {
              get() {
                return async g => Reflect.apply(_.setLocale, _, [g])
              }
            },
            loadLocaleMessages: {
              get() {
                return async g => Reflect.apply(_.loadLocaleMessages, _, [g])
              }
            },
            differentDomains: {
              get() {
                return _.differentDomains
              }
            },
            defaultLocale: {
              get() {
                return _.defaultLocale
              }
            },
            getBrowserLocale: {
              get() {
                return () => Reflect.apply(_.getBrowserLocale, _, [])
              }
            },
            getLocaleCookie: {
              get() {
                return () => Reflect.apply(_.getLocaleCookie, _, [])
              }
            },
            setLocaleCookie: {
              get() {
                return g => Reflect.apply(_.setLocaleCookie, _, [g])
              }
            },
            onBeforeLanguageSwitch: {
              get() {
                return (g, m, T, A) => Reflect.apply(_.onBeforeLanguageSwitch, _, [g, m, T, A])
              }
            },
            onLanguageSwitched: {
              get() {
                return (g, m) => Reflect.apply(_.onLanguageSwitched, _, [g, m])
              }
            },
            finalizePendingLocaleChange: {
              get() {
                return () => Reflect.apply(_.finalizePendingLocaleChange, _, [])
              }
            },
            waitForPendingLocaleChange: {
              get() {
                return () => Reflect.apply(_.waitForPendingLocaleChange, _, [])
              }
            }
          }
        }
      }
    });
    const S = {
      __composerExtend: _ => {
        const g = ii(b);
        return _.strategy = g.strategy,
          _.localeProperties = vt(() => g.localeProperties.value),
          _.setLocale = g.setLocale,
          _.differentDomains = g.differentDomains,
          _.getBrowserLocale = g.getBrowserLocale,
          _.getLocaleCookie = g.getLocaleCookie,
          _.setLocaleCookie = g.setLocaleCookie,
          _.onBeforeLanguageSwitch = g.onBeforeLanguageSwitch,
          _.onLanguageSwitched = g.onLanguageSwitched,
          _.finalizePendingLocaleChange = g.finalizePendingLocaleChange,
          _.waitForPendingLocaleChange = g.waitForPendingLocaleChange,
          () => { }
      }
    };
    if (s.use(b, S),
      E3(o, b),
      r.experimental.switchLocalePathLinkSSR === !0) {
      const _ = N3()
        , g = new RegExp([`<!--${nc}-\\[(\\w+)\\]-->`, ".+?", `<!--/${nc}-->`].join(""), "g");
      t.hook("app:rendered", m => {
        var T;
        ((T = m.renderResult) == null ? void 0 : T.html) != null && (m.renderResult.html = m.renderResult.html.replaceAll(g, (A, O) => A.replace(/href="([^"]+)"/, `href="${_(O ?? "")}"`)))
      }
      )
    }
    let v = 0;
    qp("locale-changing", async (_, g) => {
      let m, T;
      const A = ac(_, c, l.locale, () => to(b) || u(r.defaultLocale), {
        ssg: "normal",
        callType: "routing",
        firstAccess: v === 0,
        localeCookie: wo(d, a, r.defaultLocale)
      }, r)
        , O = E(A);
      ([m, T] = Fe(() => rc(A, b, r, O)),
        m = await m,
        T(),
        m) && O && (w = !1);
      const N = ([m, T] = Fe(() => o.runWithContext(() => lc({
        route: {
          to: _,
          from: g
        },
        targetLocale: A,
        routeLocaleGetter: r.strategy === "no_prefix" ? () => A : c,
        calledWithRouting: !0
      }))),
        m = await m,
        T(),
        m);
      return v++,
        [m, T] = Fe(() => o.runWithContext(async () => uc({
          nuxtApp: o,
          i18n: b,
          redirectPath: N,
          locale: A,
          route: _
        }))),
        m = await m,
        T(),
        m
    }
      , {
        global: !0
      })
  }
})
  , V3 = Ee({
    name: "nuxt:chunk-reload",
    setup(t) {
      const e = jn()
        , n = we()
        , i = new Set;
      e.beforeEach(() => {
        i.clear()
      }
      ),
        t.hook("app:chunkError", ({ error: s }) => {
          i.add(s)
        }
        ),
        e.onError((s, o) => {
          if (i.has(s)) {
            const a = "href" in o && o.href.startsWith("#") ? n.app.baseURL + o.href : Mn(n.app.baseURL, o.fullPath);
            ih({
              path: a,
              persistState: !0
            })
          }
        }
        )
    }
  });
function H3(t) {
  return {
    all: t = t || new Map,
    on: function (e, n) {
      var i = t.get(e);
      i ? i.push(n) : t.set(e, [n])
    },
    off: function (e, n) {
      var i = t.get(e);
      i && (n ? i.splice(i.indexOf(n) >>> 0, 1) : t.set(e, []))
    },
    emit: function (e, n) {
      var i = t.get(e);
      i && i.slice().map(function (s) {
        s(n)
      }),
        (i = t.get("*")) && i.slice().map(function (s) {
          s(e, n)
        })
    }
  }
}
const To = H3()
  , U3 = Ee(t => t.provide("bus", {
    $on: To.on,
    $off: To.off,
    $emit: To.emit
  }))
  , B3 = Ee(t => {
    var e, n;
    {
      const i = document.querySelectorAll("[data-animation-class]")
        , s = (e = Array.from(i)) == null ? void 0 : e.filter(u => {
          var d;
          return ((d = u.getAttribute("data-animation-class")) == null ? void 0 : d.trim()) !== ""
        }
        )
        , o = document.querySelectorAll("[data-bg-src]")
        , r = (n = Array.from(o)) == null ? void 0 : n.filter(u => {
          var d;
          return ((d = u.getAttribute("data-bg-src")) == null ? void 0 : d.trim()) !== ""
        }
        )
        , a = {
          root: null,
          rootMargin: "0px",
          threshold: .1
        }
        , l = new IntersectionObserver((u, d) => {
          u.forEach(f => {
            var b, w;
            if (f.isIntersecting && ((b = f.target.dataset) != null && b.animationClass && ((((w = f.target.dataset) == null ? void 0 : w.animationClass) || "").split(" ").forEach(S => {
              f.target.classList.add(S)
            }
            ),
              setTimeout(() => {
                f.target.classList.remove("animate__animated")
              }
                , 1e3),
              d.unobserve(f.target)),
              f.target.dataset.bgSrc)) {
              const E = f.target.dataset.bgSrc;
              f.target.style.background = `url(${E}) center center / cover no-repeat`,
                d.unobserve(f.target)
            }
          }
          )
        }
          , a)
        , c = (u, d) => {
          u.forEach(f => {
            f.dataset[d] && l.observe(f)
          }
          )
        }
        ;
      c(s, "animationClass"),
        c(r, "bgSrc")
    }
  }
  )
  , q3 = Ee(t => {
    var e;
    return (e = t == null ? void 0 : t.payload) == null || delete e.path,
      t
  }
  )
  , $3 = [Jp, oh, p0, h0, g0, P0, F3, V3, U3, B3, q3]
  , W3 = (t, e) => e.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, n => {
    var i;
    return ((i = t.params[n.slice(1)]) == null ? void 0 : i.toString()) || ""
  }
  )
  , lr = (t, e) => {
    const n = t.route.matched.find(s => {
      var o;
      return ((o = s.components) == null ? void 0 : o.default) === t.Component.type
    }
    )
      , i = e ?? (n == null ? void 0 : n.meta.key) ?? (n && W3(t.route, n));
    return typeof i == "function" ? i(t.route) : i
  }
  , K3 = (t, e) => ({
    default: () => t ? Wt(r_, t === !0 ? {} : t, e) : e
  })
  , G3 = de({
    name: "RouteProvider",
    props: {
      vnode: {
        type: Object,
        required: !0
      },
      route: {
        type: Object,
        required: !0
      },
      vnodeRef: Object,
      renderKey: String,
      trackRootNodes: Boolean
    },
    setup(t) {
      const e = t.renderKey
        , n = t.route
        , i = {};
      for (const s in t.route)
        Object.defineProperty(i, s, {
          get: () => e === t.renderKey ? t.route[s] : n[s]
        });
      return Sn(Ui, Fi(i)),
        () => Wt(t.vnode, {
          ref: t.vnodeRef
        })
    }
  })
  , Vd = (t, e, n) => (e = e === !0 ? {} : e,
  {
    default: () => {
      var i;
      return e ? Wt(t, e, n) : (i = n.default) == null ? void 0 : i.call(n)
    }
  })
  , Y3 = de({
    name: "NuxtPage",
    inheritAttrs: !1,
    props: {
      name: {
        type: String
      },
      transition: {
        type: [Boolean, Object],
        default: void 0
      },
      keepalive: {
        type: [Boolean, Object],
        default: void 0
      },
      route: {
        type: Object
      },
      pageKey: {
        type: [Function, String],
        default: null
      }
    },
    setup(t, { attrs: e, expose: n }) {
      const i = gt()
        , s = Ut()
        , o = Ft(Ui, null);
      n({
        pageRef: s
      });
      const r = Ft(Bu, null);
      let a;
      const l = i.deferHydration();
      return () => Wt(ed, {
        name: t.name,
        route: t.route,
        ...e
      }, {
        default: c => {
          const u = Z3(o, c.route, c.Component)
            , d = o && o.matched.length === c.route.matched.length;
          if (!c.Component)
            return a && !d ? a : void 0;
          if (a && r && !r.isCurrent(c.route))
            return a;
          if (u && o && (!r || r != null && r.isCurrent(o)))
            return d ? a : null;
          const f = lr(c, t.pageKey)
            , b = !!(t.transition ?? c.route.meta.pageTransition ?? Wo)
            , w = b && X3([t.transition, c.route.meta.pageTransition, Wo, {
              onAfterLeave: () => {
                i.callHook("page:transition:finish", c.Component)
              }
            }].filter(Boolean));
          return a = Vd(qs, b && w, K3(t.keepalive ?? c.route.meta.keepalive ?? wp, Wt(Ar, {
            suspensible: !0,
            onPending: () => i.callHook("page:start", c.Component),
            onResolve: () => {
              ln(() => i.callHook("page:finish", c.Component).finally(l))
            }
          }, {
            default: () => Wt(G3, {
              key: f,
              vnode: c.Component,
              route: c.route,
              renderKey: f,
              trackRootNodes: b,
              vnodeRef: s
            })
          }))).default(),
            a
        }
      })
    }
  });
function J3(t) {
  return Array.isArray(t) ? t : t ? [t] : []
}
function X3(t) {
  const e = t.map(n => ({
    ...n,
    onAfterLeave: J3(n.onAfterLeave)
  }));
  return Dp(...e)
}
function Z3(t, e, n) {
  if (!t)
    return !1;
  const i = e.matched.findIndex(s => {
    var o;
    return ((o = s.components) == null ? void 0 : o.default) === (n == null ? void 0 : n.type)
  }
  );
  return !i || i === -1 ? !1 : e.matched.slice(0, i).some((s, o) => {
    var r, a, l;
    return ((r = s.components) == null ? void 0 : r.default) !== ((l = (a = t.matched[o]) == null ? void 0 : a.components) == null ? void 0 : l.default)
  }
  ) || n && lr({
    route: e,
    Component: n
  }) !== lr({
    route: t,
    Component: n
  })
}
const Q3 = de({
  name: "LayoutLoader",
  inheritAttrs: !1,
  props: {
    name: String,
    layoutProps: Object
  },
  async setup(t, e) {
    const n = await Tn[t.name]().then(i => i.default || i);
    return () => Wt(n, t.layoutProps, e.slots)
  }
})
  , tv = de({
    name: "NuxtLayout",
    inheritAttrs: !1,
    props: {
      name: {
        type: [String, Boolean, Object],
        default: null
      }
    },
    setup(t, e) {
      const n = gt()
        , i = Ft(Ui)
        , s = i === zr() ? l0() : i
        , o = vt(() => ut(t.name) ?? s.meta.layout ?? "default")
        , r = Ut();
      e.expose({
        layoutRef: r
      });
      const a = n.deferHydration();
      return () => {
        const l = o.value && o.value in Tn
          , c = s.meta.layoutTransition ?? Ep;
        return Vd(qs, l && c, {
          default: () => Wt(Ar, {
            suspensible: !0,
            onResolve: () => {
              ln(a)
            }
          }, {
            default: () => Wt(ev, {
              layoutProps: hu(e.attrs, {
                ref: r
              }),
              key: o.value,
              name: o.value,
              shouldProvide: !t.name,
              hasTransition: !!c
            }, e.slots)
          })
        }).default()
      }
    }
  })
  , ev = de({
    name: "NuxtLayoutProvider",
    inheritAttrs: !1,
    props: {
      name: {
        type: [String, Boolean]
      },
      layoutProps: {
        type: Object
      },
      hasTransition: {
        type: Boolean
      },
      shouldProvide: {
        type: Boolean
      }
    },
    setup(t, e) {
      const n = t.name;
      return t.shouldProvide && Sn(Bu, {
        isCurrent: i => n === (i.meta.layout ?? "default")
      }),
        () => {
          var i, s;
          return !n || typeof n == "string" && !(n in Tn) ? (s = (i = e.slots).default) == null ? void 0 : s.call(i) : Wt(Q3, {
            key: n,
            layoutProps: t.layoutProps,
            name: n
          }, e.slots)
        }
    }
  })
  , nv = (t, e) => {
    const n = t.__vccOpts || t;
    for (const [i, s] of e)
      n[i] = s;
    return n
  }
  , iv = {};
function sv(t, e) {
  const n = Y3
    , i = tv;
  return pe(),
    xe(i, null, {
      default: wr(() => [Tt(n)]),
      _: 1
    })
}
const ov = nv(iv, [["render", sv]])
  , rv = s_(() => Z(() => import("./SlugExpire.27e011b6.js"), ["./SlugExpire.51909bcc.css"], import.meta.url).then(t => t.default || t))
  , av = {
    key: 1,
    class: "font-sans antialiased dark text-white grid min-h-screen place-content-center overflow-hidden",
    "data-v-573335c0": ""
  }
  , lv = Kn("div", {
    class: "fixed left-0 right-0 spotlight z-10"
  }, null, -1)
  , cv = {
    class: "max-w-520px text-center z-20"
  }
  , uv = {
    class: "text-8xl sm-text-10xl font-medium mb-8"
  }
  , dv = {
    class: "text-xl px-8 sm-px-0 sm-text-4xl font-light mb-16 leading-tight"
  }
  , fv = de({
    __name: "error",
    props: {
      error: Object
    },
    setup(t) {
      const e = t
        , n = vt(() => {
          var o, r;
          const s = ((r = (o = e.error) == null ? void 0 : o.statusMessage) == null ? void 0 : r.toLowerCase()) || "";
          return s === "slug expired" || s.includes("reschedule") || s.includes("cancellation")
        }
        )
        , i = vt(() => {
          var s;
          return (s = e.error) == null ? void 0 : s.message
        }
        );
      return Hi(() => {
        console.log("Error", e.error)
      }
      ),
        (s, o) => {
          const r = rv;
          return ut(n) ? (pe(),
            xe(r, {
              key: 0,
              errorMessage: ut(i)
            }, null, 8, ["errorMessage"])) : (pe(),
              D_("div", av, [lv, Kn("div", cv, [Kn("h1", uv, na(t.error.statusCode), 1), Kn("p", dv, na(t.error.statusMessage), 1)])]))
        }
    }
  })
  , _v = {
    __name: "nuxt-root",
    setup(t) {
      const e = () => null
        , n = gt()
        , i = n.deferHydration()
        , s = !1;
      Sn(Ui, zr()),
        n.hooks.callHookWith(a => a.map(l => l()), "vue:setup");
      const o = $s();
      tu((a, l, c) => {
        if (n.hooks.callHook("vue:error", a, l, c).catch(u => console.error("[nuxt] Error in `vue:error` hook", u)),
          Yp(a) && (a.fatal || a.unhandled))
          return n.runWithContext(() => wn(a)),
            !1
      }
      );
      const r = !1;
      return (a, l) => (pe(),
        xe(Ar, {
          onResolve: ut(i)
        }, {
          default: wr(() => [ut(o) ? (pe(),
            xe(ut(fv), {
              key: 0,
              error: ut(o)
            }, null, 8, ["error"])) : ut(r) ? (pe(),
              xe(ut(e), {
                key: 1,
                context: ut(r)
              }, null, 8, ["context"])) : ut(s) ? (pe(),
                xe(b_(ut(s)), {
                  key: 2
                })) : (pe(),
                  xe(ut(ov), {
                    key: 3
                  }))]),
          _: 1
        }, 8, ["onResolve"]))
    }
  }
  , fc = _v;
globalThis.$fetch || (globalThis.$fetch = _m.create({
  baseURL: mm()
}));
let _c;
{
  let t;
  _c = async function () {
    var o, r;
    if (t)
      return t;
    const i = !!((o = window.__NUXT__) != null && o.serverRendered || ((r = document.getElementById("__NUXT_DATA__")) == null ? void 0 : r.dataset.ssr) === "true") ? Tb(fc) : wb(fc)
      , s = Pm({
        vueApp: i
      });
    try {
      await Rm(s, $3)
    } catch (a) {
      await s.callHook("app:error", a),
        s.payload.error = s.payload.error || a
    }
    try {
      await s.hooks.callHook("app:created", i),
        await s.hooks.callHook("app:beforeMount", i),
        i.mount(Tp),
        await s.hooks.callHook("app:mounted", i),
        await ln()
    } catch (a) {
      await s.callHook("app:error", a),
        s.payload.error = s.payload.error || a
    }
    return i
  }
    ,
    t = _c().catch(e => {
      console.error("Error while mounting app:", e)
    }
    )
}
export { l_ as $, Hs as A, Qp as B, Fr as C, ft as D, zr as E, Vt as F, Tv as G, Yo as H, Gr as I, ve as J, tv as K, Iv as L, on as M, l0 as N, Dv as O, we as P, pu as Q, za as R, Ui as S, St as T, pv as U, hv as V, qs as W, jn as X, Ws as Y, zc as Z, nv as _, pe as a, Oe as a0, Nv as a1, Ev as a2, Wt as a3, $t as a4, wv as a5, Av as a6, Ft as a7, pb as a8, Lv as a9, Gn as aa, On as ab, c_ as ac, Sv as ad, mb as ae, vv as af, nf as ag, mv as ah, bb as ai, Wp as aj, yv as ak, hu as al, bv as am, j_ as an, Qc as ao, D_ as b, vt as c, de as d, Kn as e, ut as f, Vs as g, xe as h, Cv as i, gt as j, kv as k, Tt as l, Ns as m, Ds as n, Hi as o, wr as p, s_ as q, Ut as r, Z as s, na as t, Ov as u, Rv as v, gv as w, ln as x, b_ as y, Pv as z };
