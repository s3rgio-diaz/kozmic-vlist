import { jsx as dt, jsxs as We } from "react/jsx-runtime";
import Ge, { useRef as p, useCallback as J, useEffect as Pt, forwardRef as ze, useImperativeHandle as $e, useState as Be } from "react";
import Ze from "react-dom/client";
import './main.css';function je(m) {
  return m && m.__esModule && Object.prototype.hasOwnProperty.call(m, "default") ? m.default : m;
}
var $t = { exports: {} };
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
var ve;
function Je() {
  return ve || (ve = 1, function(m) {
    (function(l, g, L, u) {
      var d = ["", "webkit", "Moz", "MS", "ms", "o"], k = g.createElement("div"), O = "function", D = Math.round, N = Math.abs, rt = Date.now;
      function z(t, e, r) {
        return setTimeout(f(t, r), e);
      }
      function x(t, e, r) {
        return Array.isArray(t) ? (A(t, r[e], r), !0) : !1;
      }
      function A(t, e, r) {
        var n;
        if (t)
          if (t.forEach)
            t.forEach(e, r);
          else if (t.length !== u)
            for (n = 0; n < t.length; )
              e.call(r, t[n], n, t), n++;
          else
            for (n in t)
              t.hasOwnProperty(n) && e.call(r, t[n], n, t);
      }
      function R(t, e, r) {
        var n = "DEPRECATED METHOD: " + e + `
` + r + ` AT 
`;
        return function() {
          var i = new Error("get-stack-trace"), s = i && i.stack ? i.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace", c = l.console && (l.console.warn || l.console.log);
          return c && c.call(l.console, n, s), t.apply(this, arguments);
        };
      }
      var E;
      typeof Object.assign != "function" ? E = function(e) {
        if (e === u || e === null)
          throw new TypeError("Cannot convert undefined or null to object");
        for (var r = Object(e), n = 1; n < arguments.length; n++) {
          var i = arguments[n];
          if (i !== u && i !== null)
            for (var s in i)
              i.hasOwnProperty(s) && (r[s] = i[s]);
        }
        return r;
      } : E = Object.assign;
      var U = R(function(e, r, n) {
        for (var i = Object.keys(r), s = 0; s < i.length; )
          (!n || n && e[i[s]] === u) && (e[i[s]] = r[i[s]]), s++;
        return e;
      }, "extend", "Use `assign`."), K = R(function(e, r) {
        return U(e, r, !0);
      }, "merge", "Use `assign`.");
      function o(t, e, r) {
        var n = e.prototype, i;
        i = t.prototype = Object.create(n), i.constructor = t, i._super = n, r && E(i, r);
      }
      function f(t, e) {
        return function() {
          return t.apply(e, arguments);
        };
      }
      function $(t, e) {
        return typeof t == O ? t.apply(e && e[0] || u, e) : t;
      }
      function F(t, e) {
        return t === u ? e : t;
      }
      function w(t, e, r) {
        A(Y(e), function(n) {
          t.addEventListener(n, r, !1);
        });
      }
      function C(t, e, r) {
        A(Y(e), function(n) {
          t.removeEventListener(n, r, !1);
        });
      }
      function S(t, e) {
        for (; t; ) {
          if (t == e)
            return !0;
          t = t.parentNode;
        }
        return !1;
      }
      function y(t, e) {
        return t.indexOf(e) > -1;
      }
      function Y(t) {
        return t.trim().split(/\s+/g);
      }
      function M(t, e, r) {
        if (t.indexOf && !r)
          return t.indexOf(e);
        for (var n = 0; n < t.length; ) {
          if (r && t[n][r] == e || !r && t[n] === e)
            return n;
          n++;
        }
        return -1;
      }
      function v(t) {
        return Array.prototype.slice.call(t, 0);
      }
      function G(t, e, r) {
        for (var n = [], i = [], s = 0; s < t.length; ) {
          var c = t[s][e];
          M(i, c) < 0 && n.push(t[s]), i[s] = c, s++;
        }
        return n = n.sort(function(W, B) {
          return W[e] > B[e];
        }), n;
      }
      function T(t, e) {
        for (var r, n, i = e[0].toUpperCase() + e.slice(1), s = 0; s < d.length; ) {
          if (r = d[s], n = r ? r + i : e, n in t)
            return n;
          s++;
        }
        return u;
      }
      var X = 1;
      function H() {
        return X++;
      }
      function Q(t) {
        var e = t.ownerDocument || t;
        return e.defaultView || e.parentWindow || l;
      }
      var ot = /mobile|tablet|ip(ad|hone|od)|android/i, Nt = "ontouchstart" in l, Lt = T(l, "PointerEvent") !== u, Ut = Nt && ot.test(navigator.userAgent), a = "touch", h = "pen", _ = "mouse", b = "kinect", V = 25, P = 1, Z = 2, I = 4, j = 8, Ot = 1, Tt = 2, mt = 4, gt = 8, Et = 16, it = Tt | mt, ft = gt | Et, Bt = it | ft, Zt = ["x", "y"], At = ["clientX", "clientY"];
      function tt(t, e) {
        var r = this;
        this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(n) {
          $(t.options.enable, [t]) && r.handler(n);
        }, this.init();
      }
      tt.prototype = {
        /**
         * should handle the inputEvent data and trigger the callback
         * @virtual
         */
        handler: function() {
        },
        /**
         * bind the events
         */
        init: function() {
          this.evEl && w(this.element, this.evEl, this.domHandler), this.evTarget && w(this.target, this.evTarget, this.domHandler), this.evWin && w(Q(this.element), this.evWin, this.domHandler);
        },
        /**
         * unbind the events
         */
        destroy: function() {
          this.evEl && C(this.element, this.evEl, this.domHandler), this.evTarget && C(this.target, this.evTarget, this.domHandler), this.evWin && C(Q(this.element), this.evWin, this.domHandler);
        }
      };
      function me(t) {
        var e, r = t.options.inputClass;
        return r ? e = r : Lt ? e = Yt : Ut ? e = St : Nt ? e = Ft : e = Ct, new e(t, ge);
      }
      function ge(t, e, r) {
        var n = r.pointers.length, i = r.changedPointers.length, s = e & P && n - i === 0, c = e & (I | j) && n - i === 0;
        r.isFirst = !!s, r.isFinal = !!c, s && (t.session = {}), r.eventType = e, Ee(t, r), t.emit("hammer.input", r), t.recognize(r), t.session.prevInput = r;
      }
      function Ee(t, e) {
        var r = t.session, n = e.pointers, i = n.length;
        r.firstInput || (r.firstInput = jt(e)), i > 1 && !r.firstMultiple ? r.firstMultiple = jt(e) : i === 1 && (r.firstMultiple = !1);
        var s = r.firstInput, c = r.firstMultiple, q = c ? c.center : s.center, W = e.center = Jt(n);
        e.timeStamp = rt(), e.deltaTime = e.timeStamp - s.timeStamp, e.angle = Ht(q, W), e.distance = Rt(q, W), ye(r, e), e.offsetDirection = Kt(e.deltaX, e.deltaY);
        var B = Qt(e.deltaTime, e.deltaX, e.deltaY);
        e.overallVelocityX = B.x, e.overallVelocityY = B.y, e.overallVelocity = N(B.x) > N(B.y) ? B.x : B.y, e.scale = c ? Pe(c.pointers, n) : 1, e.rotation = c ? _e(c.pointers, n) : 0, e.maxPointers = r.prevInput ? e.pointers.length > r.prevInput.maxPointers ? e.pointers.length : r.prevInput.maxPointers : e.pointers.length, Ie(r, e);
        var at = t.element;
        S(e.srcEvent.target, at) && (at = e.srcEvent.target), e.target = at;
      }
      function ye(t, e) {
        var r = e.center, n = t.offsetDelta || {}, i = t.prevDelta || {}, s = t.prevInput || {};
        (e.eventType === P || s.eventType === I) && (i = t.prevDelta = {
          x: s.deltaX || 0,
          y: s.deltaY || 0
        }, n = t.offsetDelta = {
          x: r.x,
          y: r.y
        }), e.deltaX = i.x + (r.x - n.x), e.deltaY = i.y + (r.y - n.y);
      }
      function Ie(t, e) {
        var r = t.lastInterval || e, n = e.timeStamp - r.timeStamp, i, s, c, q;
        if (e.eventType != j && (n > V || r.velocity === u)) {
          var W = e.deltaX - r.deltaX, B = e.deltaY - r.deltaY, at = Qt(n, W, B);
          s = at.x, c = at.y, i = N(at.x) > N(at.y) ? at.x : at.y, q = Kt(W, B), t.lastInterval = e;
        } else
          i = r.velocity, s = r.velocityX, c = r.velocityY, q = r.direction;
        e.velocity = i, e.velocityX = s, e.velocityY = c, e.direction = q;
      }
      function jt(t) {
        for (var e = [], r = 0; r < t.pointers.length; )
          e[r] = {
            clientX: D(t.pointers[r].clientX),
            clientY: D(t.pointers[r].clientY)
          }, r++;
        return {
          timeStamp: rt(),
          pointers: e,
          center: Jt(e),
          deltaX: t.deltaX,
          deltaY: t.deltaY
        };
      }
      function Jt(t) {
        var e = t.length;
        if (e === 1)
          return {
            x: D(t[0].clientX),
            y: D(t[0].clientY)
          };
        for (var r = 0, n = 0, i = 0; i < e; )
          r += t[i].clientX, n += t[i].clientY, i++;
        return {
          x: D(r / e),
          y: D(n / e)
        };
      }
      function Qt(t, e, r) {
        return {
          x: e / t || 0,
          y: r / t || 0
        };
      }
      function Kt(t, e) {
        return t === e ? Ot : N(t) >= N(e) ? t < 0 ? Tt : mt : e < 0 ? gt : Et;
      }
      function Rt(t, e, r) {
        r || (r = Zt);
        var n = e[r[0]] - t[r[0]], i = e[r[1]] - t[r[1]];
        return Math.sqrt(n * n + i * i);
      }
      function Ht(t, e, r) {
        r || (r = Zt);
        var n = e[r[0]] - t[r[0]], i = e[r[1]] - t[r[1]];
        return Math.atan2(i, n) * 180 / Math.PI;
      }
      function _e(t, e) {
        return Ht(e[1], e[0], At) + Ht(t[1], t[0], At);
      }
      function Pe(t, e) {
        return Rt(e[0], e[1], At) / Rt(t[0], t[1], At);
      }
      var Ne = {
        mousedown: P,
        mousemove: Z,
        mouseup: I
      }, Oe = "mousedown", Ae = "mousemove mouseup";
      function Ct() {
        this.evEl = Oe, this.evWin = Ae, this.pressed = !1, tt.apply(this, arguments);
      }
      o(Ct, tt, {
        /**
         * handle mouse events
         * @param {Object} ev
         */
        handler: function(e) {
          var r = Ne[e.type];
          r & P && e.button === 0 && (this.pressed = !0), r & Z && e.which !== 1 && (r = I), this.pressed && (r & I && (this.pressed = !1), this.callback(this.manager, r, {
            pointers: [e],
            changedPointers: [e],
            pointerType: _,
            srcEvent: e
          }));
        }
      });
      var Re = {
        pointerdown: P,
        pointermove: Z,
        pointerup: I,
        pointercancel: j,
        pointerout: j
      }, Ce = {
        2: a,
        3: h,
        4: _,
        5: b
        // see https://twitter.com/jacobrossi/status/480596438489890816
      }, te = "pointerdown", ee = "pointermove pointerup pointercancel";
      l.MSPointerEvent && !l.PointerEvent && (te = "MSPointerDown", ee = "MSPointerMove MSPointerUp MSPointerCancel");
      function Yt() {
        this.evEl = te, this.evWin = ee, tt.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
      }
      o(Yt, tt, {
        /**
         * handle mouse events
         * @param {Object} ev
         */
        handler: function(e) {
          var r = this.store, n = !1, i = e.type.toLowerCase().replace("ms", ""), s = Re[i], c = Ce[e.pointerType] || e.pointerType, q = c == a, W = M(r, e.pointerId, "pointerId");
          s & P && (e.button === 0 || q) ? W < 0 && (r.push(e), W = r.length - 1) : s & (I | j) && (n = !0), !(W < 0) && (r[W] = e, this.callback(this.manager, s, {
            pointers: r,
            changedPointers: [e],
            pointerType: c,
            srcEvent: e
          }), n && r.splice(W, 1));
        }
      });
      var Se = {
        touchstart: P,
        touchmove: Z,
        touchend: I,
        touchcancel: j
      }, Me = "touchstart", De = "touchstart touchmove touchend touchcancel";
      function re() {
        this.evTarget = Me, this.evWin = De, this.started = !1, tt.apply(this, arguments);
      }
      o(re, tt, {
        handler: function(e) {
          var r = Se[e.type];
          if (r === P && (this.started = !0), !!this.started) {
            var n = xe.call(this, e, r);
            r & (I | j) && n[0].length - n[1].length === 0 && (this.started = !1), this.callback(this.manager, r, {
              pointers: n[0],
              changedPointers: n[1],
              pointerType: a,
              srcEvent: e
            });
          }
        }
      });
      function xe(t, e) {
        var r = v(t.touches), n = v(t.changedTouches);
        return e & (I | j) && (r = G(r.concat(n), "identifier")), [r, n];
      }
      var be = {
        touchstart: P,
        touchmove: Z,
        touchend: I,
        touchcancel: j
      }, we = "touchstart touchmove touchend touchcancel";
      function St() {
        this.evTarget = we, this.targetIds = {}, tt.apply(this, arguments);
      }
      o(St, tt, {
        handler: function(e) {
          var r = be[e.type], n = Le.call(this, e, r);
          n && this.callback(this.manager, r, {
            pointers: n[0],
            changedPointers: n[1],
            pointerType: a,
            srcEvent: e
          });
        }
      });
      function Le(t, e) {
        var r = v(t.touches), n = this.targetIds;
        if (e & (P | Z) && r.length === 1)
          return n[r[0].identifier] = !0, [r, r];
        var i, s, c = v(t.changedTouches), q = [], W = this.target;
        if (s = r.filter(function(B) {
          return S(B.target, W);
        }), e === P)
          for (i = 0; i < s.length; )
            n[s[i].identifier] = !0, i++;
        for (i = 0; i < c.length; )
          n[c[i].identifier] && q.push(c[i]), e & (I | j) && delete n[c[i].identifier], i++;
        if (q.length)
          return [
            // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
            G(s.concat(q), "identifier"),
            q
          ];
      }
      var Ue = 2500, ne = 25;
      function Ft() {
        tt.apply(this, arguments);
        var t = f(this.handler, this);
        this.touch = new St(this.manager, t), this.mouse = new Ct(this.manager, t), this.primaryTouch = null, this.lastTouches = [];
      }
      o(Ft, tt, {
        /**
         * handle mouse and touch events
         * @param {Hammer} manager
         * @param {String} inputEvent
         * @param {Object} inputData
         */
        handler: function(e, r, n) {
          var i = n.pointerType == a, s = n.pointerType == _;
          if (!(s && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
            if (i)
              He.call(this, r, n);
            else if (s && Ye.call(this, n))
              return;
            this.callback(e, r, n);
          }
        },
        /**
         * remove the event listeners
         */
        destroy: function() {
          this.touch.destroy(), this.mouse.destroy();
        }
      });
      function He(t, e) {
        t & P ? (this.primaryTouch = e.changedPointers[0].identifier, ie.call(this, e)) : t & (I | j) && ie.call(this, e);
      }
      function ie(t) {
        var e = t.changedPointers[0];
        if (e.identifier === this.primaryTouch) {
          var r = { x: e.clientX, y: e.clientY };
          this.lastTouches.push(r);
          var n = this.lastTouches, i = function() {
            var s = n.indexOf(r);
            s > -1 && n.splice(s, 1);
          };
          setTimeout(i, Ue);
        }
      }
      function Ye(t) {
        for (var e = t.srcEvent.clientX, r = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
          var i = this.lastTouches[n], s = Math.abs(e - i.x), c = Math.abs(r - i.y);
          if (s <= ne && c <= ne)
            return !0;
        }
        return !1;
      }
      var se = T(k.style, "touchAction"), ae = se !== u, oe = "compute", ce = "auto", Xt = "manipulation", vt = "none", yt = "pan-x", It = "pan-y", Mt = Xe();
      function Vt(t, e) {
        this.manager = t, this.set(e);
      }
      Vt.prototype = {
        /**
         * set the touchAction value on the element or enable the polyfill
         * @param {String} value
         */
        set: function(t) {
          t == oe && (t = this.compute()), ae && this.manager.element.style && Mt[t] && (this.manager.element.style[se] = t), this.actions = t.toLowerCase().trim();
        },
        /**
         * just re-set the touchAction value
         */
        update: function() {
          this.set(this.manager.options.touchAction);
        },
        /**
         * compute the value for the touchAction property based on the recognizer's settings
         * @returns {String} value
         */
        compute: function() {
          var t = [];
          return A(this.manager.recognizers, function(e) {
            $(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()));
          }), Fe(t.join(" "));
        },
        /**
         * this method is called on each input cycle and provides the preventing of the browser behavior
         * @param {Object} input
         */
        preventDefaults: function(t) {
          var e = t.srcEvent, r = t.offsetDirection;
          if (this.manager.session.prevented) {
            e.preventDefault();
            return;
          }
          var n = this.actions, i = y(n, vt) && !Mt[vt], s = y(n, It) && !Mt[It], c = y(n, yt) && !Mt[yt];
          if (i) {
            var q = t.pointers.length === 1, W = t.distance < 2, B = t.deltaTime < 250;
            if (q && W && B)
              return;
          }
          if (!(c && s) && (i || s && r & it || c && r & ft))
            return this.preventSrc(e);
        },
        /**
         * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
         * @param {Object} srcEvent
         */
        preventSrc: function(t) {
          this.manager.session.prevented = !0, t.preventDefault();
        }
      };
      function Fe(t) {
        if (y(t, vt))
          return vt;
        var e = y(t, yt), r = y(t, It);
        return e && r ? vt : e || r ? e ? yt : It : y(t, Xt) ? Xt : ce;
      }
      function Xe() {
        if (!ae)
          return !1;
        var t = {}, e = l.CSS && l.CSS.supports;
        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(r) {
          t[r] = e ? l.CSS.supports("touch-action", r) : !0;
        }), t;
      }
      var Dt = 1, et = 2, pt = 4, ut = 8, ct = ut, _t = 16, st = 32;
      function lt(t) {
        this.options = E({}, this.defaults, t || {}), this.id = H(), this.manager = null, this.options.enable = F(this.options.enable, !0), this.state = Dt, this.simultaneous = {}, this.requireFail = [];
      }
      lt.prototype = {
        /**
         * @virtual
         * @type {Object}
         */
        defaults: {},
        /**
         * set options
         * @param {Object} options
         * @return {Recognizer}
         */
        set: function(t) {
          return E(this.options, t), this.manager && this.manager.touchAction.update(), this;
        },
        /**
         * recognize simultaneous with an other recognizer.
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        recognizeWith: function(t) {
          if (x(t, "recognizeWith", this))
            return this;
          var e = this.simultaneous;
          return t = xt(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this;
        },
        /**
         * drop the simultaneous link. it doesnt remove the link on the other recognizer.
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        dropRecognizeWith: function(t) {
          return x(t, "dropRecognizeWith", this) ? this : (t = xt(t, this), delete this.simultaneous[t.id], this);
        },
        /**
         * recognizer can only run when an other is failing
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        requireFailure: function(t) {
          if (x(t, "requireFailure", this))
            return this;
          var e = this.requireFail;
          return t = xt(t, this), M(e, t) === -1 && (e.push(t), t.requireFailure(this)), this;
        },
        /**
         * drop the requireFailure link. it does not remove the link on the other recognizer.
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        dropRequireFailure: function(t) {
          if (x(t, "dropRequireFailure", this))
            return this;
          t = xt(t, this);
          var e = M(this.requireFail, t);
          return e > -1 && this.requireFail.splice(e, 1), this;
        },
        /**
         * has require failures boolean
         * @returns {boolean}
         */
        hasRequireFailures: function() {
          return this.requireFail.length > 0;
        },
        /**
         * if the recognizer can recognize simultaneous with an other recognizer
         * @param {Recognizer} otherRecognizer
         * @returns {Boolean}
         */
        canRecognizeWith: function(t) {
          return !!this.simultaneous[t.id];
        },
        /**
         * You should use `tryEmit` instead of `emit` directly to check
         * that all the needed recognizers has failed before emitting.
         * @param {Object} input
         */
        emit: function(t) {
          var e = this, r = this.state;
          function n(i) {
            e.manager.emit(i, t);
          }
          r < ut && n(e.options.event + le(r)), n(e.options.event), t.additionalEvent && n(t.additionalEvent), r >= ut && n(e.options.event + le(r));
        },
        /**
         * Check that all the require failure recognizers has failed,
         * if true, it emits a gesture event,
         * otherwise, setup the state to FAILED.
         * @param {Object} input
         */
        tryEmit: function(t) {
          if (this.canEmit())
            return this.emit(t);
          this.state = st;
        },
        /**
         * can we emit?
         * @returns {boolean}
         */
        canEmit: function() {
          for (var t = 0; t < this.requireFail.length; ) {
            if (!(this.requireFail[t].state & (st | Dt)))
              return !1;
            t++;
          }
          return !0;
        },
        /**
         * update the recognizer
         * @param {Object} inputData
         */
        recognize: function(t) {
          var e = E({}, t);
          if (!$(this.options.enable, [this, e])) {
            this.reset(), this.state = st;
            return;
          }
          this.state & (ct | _t | st) && (this.state = Dt), this.state = this.process(e), this.state & (et | pt | ut | _t) && this.tryEmit(e);
        },
        /**
         * return the state of the recognizer
         * the actual recognizing happens in this method
         * @virtual
         * @param {Object} inputData
         * @returns {Const} STATE
         */
        process: function(t) {
        },
        // jshint ignore:line
        /**
         * return the preferred touch-action
         * @virtual
         * @returns {Array}
         */
        getTouchAction: function() {
        },
        /**
         * called when the gesture isn't allowed to recognize
         * like when another is being recognized or it is disabled
         * @virtual
         */
        reset: function() {
        }
      };
      function le(t) {
        return t & _t ? "cancel" : t & ut ? "end" : t & pt ? "move" : t & et ? "start" : "";
      }
      function ue(t) {
        return t == Et ? "down" : t == gt ? "up" : t == Tt ? "left" : t == mt ? "right" : "";
      }
      function xt(t, e) {
        var r = e.manager;
        return r ? r.get(t) : t;
      }
      function nt() {
        lt.apply(this, arguments);
      }
      o(nt, lt, {
        /**
         * @namespace
         * @memberof AttrRecognizer
         */
        defaults: {
          /**
           * @type {Number}
           * @default 1
           */
          pointers: 1
        },
        /**
         * Used to check if it the recognizer receives valid input, like input.distance > 10.
         * @memberof AttrRecognizer
         * @param {Object} input
         * @returns {Boolean} recognized
         */
        attrTest: function(t) {
          var e = this.options.pointers;
          return e === 0 || t.pointers.length === e;
        },
        /**
         * Process the input and return the state for the recognizer
         * @memberof AttrRecognizer
         * @param {Object} input
         * @returns {*} State
         */
        process: function(t) {
          var e = this.state, r = t.eventType, n = e & (et | pt), i = this.attrTest(t);
          return n && (r & j || !i) ? e | _t : n || i ? r & I ? e | ut : e & et ? e | pt : et : st;
        }
      });
      function bt() {
        nt.apply(this, arguments), this.pX = null, this.pY = null;
      }
      o(bt, nt, {
        /**
         * @namespace
         * @memberof PanRecognizer
         */
        defaults: {
          event: "pan",
          threshold: 10,
          pointers: 1,
          direction: Bt
        },
        getTouchAction: function() {
          var t = this.options.direction, e = [];
          return t & it && e.push(It), t & ft && e.push(yt), e;
        },
        directionTest: function(t) {
          var e = this.options, r = !0, n = t.distance, i = t.direction, s = t.deltaX, c = t.deltaY;
          return i & e.direction || (e.direction & it ? (i = s === 0 ? Ot : s < 0 ? Tt : mt, r = s != this.pX, n = Math.abs(t.deltaX)) : (i = c === 0 ? Ot : c < 0 ? gt : Et, r = c != this.pY, n = Math.abs(t.deltaY))), t.direction = i, r && n > e.threshold && i & e.direction;
        },
        attrTest: function(t) {
          return nt.prototype.attrTest.call(this, t) && (this.state & et || !(this.state & et) && this.directionTest(t));
        },
        emit: function(t) {
          this.pX = t.deltaX, this.pY = t.deltaY;
          var e = ue(t.direction);
          e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t);
        }
      });
      function qt() {
        nt.apply(this, arguments);
      }
      o(qt, nt, {
        /**
         * @namespace
         * @memberof PinchRecognizer
         */
        defaults: {
          event: "pinch",
          threshold: 0,
          pointers: 2
        },
        getTouchAction: function() {
          return [vt];
        },
        attrTest: function(t) {
          return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & et);
        },
        emit: function(t) {
          if (t.scale !== 1) {
            var e = t.scale < 1 ? "in" : "out";
            t.additionalEvent = this.options.event + e;
          }
          this._super.emit.call(this, t);
        }
      });
      function kt() {
        lt.apply(this, arguments), this._timer = null, this._input = null;
      }
      o(kt, lt, {
        /**
         * @namespace
         * @memberof PressRecognizer
         */
        defaults: {
          event: "press",
          pointers: 1,
          time: 251,
          // minimal time of the pointer to be pressed
          threshold: 9
          // a minimal movement is ok, but keep it low
        },
        getTouchAction: function() {
          return [ce];
        },
        process: function(t) {
          var e = this.options, r = t.pointers.length === e.pointers, n = t.distance < e.threshold, i = t.deltaTime > e.time;
          if (this._input = t, !n || !r || t.eventType & (I | j) && !i)
            this.reset();
          else if (t.eventType & P)
            this.reset(), this._timer = z(function() {
              this.state = ct, this.tryEmit();
            }, e.time, this);
          else if (t.eventType & I)
            return ct;
          return st;
        },
        reset: function() {
          clearTimeout(this._timer);
        },
        emit: function(t) {
          this.state === ct && (t && t.eventType & I ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = rt(), this.manager.emit(this.options.event, this._input)));
        }
      });
      function Wt() {
        nt.apply(this, arguments);
      }
      o(Wt, nt, {
        /**
         * @namespace
         * @memberof RotateRecognizer
         */
        defaults: {
          event: "rotate",
          threshold: 0,
          pointers: 2
        },
        getTouchAction: function() {
          return [vt];
        },
        attrTest: function(t) {
          return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & et);
        }
      });
      function Gt() {
        nt.apply(this, arguments);
      }
      o(Gt, nt, {
        /**
         * @namespace
         * @memberof SwipeRecognizer
         */
        defaults: {
          event: "swipe",
          threshold: 10,
          velocity: 0.3,
          direction: it | ft,
          pointers: 1
        },
        getTouchAction: function() {
          return bt.prototype.getTouchAction.call(this);
        },
        attrTest: function(t) {
          var e = this.options.direction, r;
          return e & (it | ft) ? r = t.overallVelocity : e & it ? r = t.overallVelocityX : e & ft && (r = t.overallVelocityY), this._super.attrTest.call(this, t) && e & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && N(r) > this.options.velocity && t.eventType & I;
        },
        emit: function(t) {
          var e = ue(t.offsetDirection);
          e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t);
        }
      });
      function wt() {
        lt.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
      }
      o(wt, lt, {
        /**
         * @namespace
         * @memberof PinchRecognizer
         */
        defaults: {
          event: "tap",
          pointers: 1,
          taps: 1,
          interval: 300,
          // max time between the multi-tap taps
          time: 250,
          // max time of the pointer to be down (like finger on the screen)
          threshold: 9,
          // a minimal movement is ok, but keep it low
          posThreshold: 10
          // a multi-tap can be a bit off the initial position
        },
        getTouchAction: function() {
          return [Xt];
        },
        process: function(t) {
          var e = this.options, r = t.pointers.length === e.pointers, n = t.distance < e.threshold, i = t.deltaTime < e.time;
          if (this.reset(), t.eventType & P && this.count === 0)
            return this.failTimeout();
          if (n && i && r) {
            if (t.eventType != I)
              return this.failTimeout();
            var s = this.pTime ? t.timeStamp - this.pTime < e.interval : !0, c = !this.pCenter || Rt(this.pCenter, t.center) < e.posThreshold;
            this.pTime = t.timeStamp, this.pCenter = t.center, !c || !s ? this.count = 1 : this.count += 1, this._input = t;
            var q = this.count % e.taps;
            if (q === 0)
              return this.hasRequireFailures() ? (this._timer = z(function() {
                this.state = ct, this.tryEmit();
              }, e.interval, this), et) : ct;
          }
          return st;
        },
        failTimeout: function() {
          return this._timer = z(function() {
            this.state = st;
          }, this.options.interval, this), st;
        },
        reset: function() {
          clearTimeout(this._timer);
        },
        emit: function() {
          this.state == ct && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
        }
      });
      function ht(t, e) {
        return e = e || {}, e.recognizers = F(e.recognizers, ht.defaults.preset), new zt(t, e);
      }
      ht.VERSION = "2.0.7", ht.defaults = {
        /**
         * set if DOM events are being triggered.
         * But this is slower and unused by simple implementations, so disabled by default.
         * @type {Boolean}
         * @default false
         */
        domEvents: !1,
        /**
         * The value for the touchAction property/fallback.
         * When set to `compute` it will magically set the correct value based on the added recognizers.
         * @type {String}
         * @default compute
         */
        touchAction: oe,
        /**
         * @type {Boolean}
         * @default true
         */
        enable: !0,
        /**
         * EXPERIMENTAL FEATURE -- can be removed/changed
         * Change the parent input target element.
         * If Null, then it is being set the to main element.
         * @type {Null|EventTarget}
         * @default null
         */
        inputTarget: null,
        /**
         * force an input class
         * @type {Null|Function}
         * @default null
         */
        inputClass: null,
        /**
         * Default recognizer setup when calling `Hammer()`
         * When creating a new Manager these will be skipped.
         * @type {Array}
         */
        preset: [
          // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
          [Wt, { enable: !1 }],
          [qt, { enable: !1 }, ["rotate"]],
          [Gt, { direction: it }],
          [bt, { direction: it }, ["swipe"]],
          [wt],
          [wt, { event: "doubletap", taps: 2 }, ["tap"]],
          [kt]
        ],
        /**
         * Some CSS properties can be used to improve the working of Hammer.
         * Add them to this method and they will be set when creating a new Manager.
         * @namespace
         */
        cssProps: {
          /**
           * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
           * @type {String}
           * @default 'none'
           */
          userSelect: "none",
          /**
           * Disable the Windows Phone grippers when pressing an element.
           * @type {String}
           * @default 'none'
           */
          touchSelect: "none",
          /**
           * Disables the default callout shown when you touch and hold a touch target.
           * On iOS, when you touch and hold a touch target such as a link, Safari displays
           * a callout containing information about the link. This property allows you to disable that callout.
           * @type {String}
           * @default 'none'
           */
          touchCallout: "none",
          /**
           * Specifies whether zooming is enabled. Used by IE10>
           * @type {String}
           * @default 'none'
           */
          contentZooming: "none",
          /**
           * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
           * @type {String}
           * @default 'none'
           */
          userDrag: "none",
          /**
           * Overrides the highlight color shown when the user taps a link or a JavaScript
           * clickable element in iOS. This property obeys the alpha value, if specified.
           * @type {String}
           * @default 'rgba(0,0,0,0)'
           */
          tapHighlightColor: "rgba(0,0,0,0)"
        }
      };
      var Ve = 1, he = 2;
      function zt(t, e) {
        this.options = E({}, ht.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = me(this), this.touchAction = new Vt(this, this.options.touchAction), fe(this, !0), A(this.options.recognizers, function(r) {
          var n = this.add(new r[0](r[1]));
          r[2] && n.recognizeWith(r[2]), r[3] && n.requireFailure(r[3]);
        }, this);
      }
      zt.prototype = {
        /**
         * set options
         * @param {Object} options
         * @returns {Manager}
         */
        set: function(t) {
          return E(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this;
        },
        /**
         * stop recognizing for this session.
         * This session will be discarded, when a new [input]start event is fired.
         * When forced, the recognizer cycle is stopped immediately.
         * @param {Boolean} [force]
         */
        stop: function(t) {
          this.session.stopped = t ? he : Ve;
        },
        /**
         * run the recognizers!
         * called by the inputHandler function on every movement of the pointers (touches)
         * it walks through all the recognizers and tries to detect the gesture that is being made
         * @param {Object} inputData
         */
        recognize: function(t) {
          var e = this.session;
          if (!e.stopped) {
            this.touchAction.preventDefaults(t);
            var r, n = this.recognizers, i = e.curRecognizer;
            (!i || i && i.state & ct) && (i = e.curRecognizer = null);
            for (var s = 0; s < n.length; )
              r = n[s], e.stopped !== he && // 1
              (!i || r == i || // 2
              r.canRecognizeWith(i)) ? r.recognize(t) : r.reset(), !i && r.state & (et | pt | ut) && (i = e.curRecognizer = r), s++;
          }
        },
        /**
         * get a recognizer by its event name.
         * @param {Recognizer|String} recognizer
         * @returns {Recognizer|Null}
         */
        get: function(t) {
          if (t instanceof lt)
            return t;
          for (var e = this.recognizers, r = 0; r < e.length; r++)
            if (e[r].options.event == t)
              return e[r];
          return null;
        },
        /**
         * add a recognizer to the manager
         * existing recognizers with the same event name will be removed
         * @param {Recognizer} recognizer
         * @returns {Recognizer|Manager}
         */
        add: function(t) {
          if (x(t, "add", this))
            return this;
          var e = this.get(t.options.event);
          return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t;
        },
        /**
         * remove a recognizer by name or instance
         * @param {Recognizer|String} recognizer
         * @returns {Manager}
         */
        remove: function(t) {
          if (x(t, "remove", this))
            return this;
          if (t = this.get(t), t) {
            var e = this.recognizers, r = M(e, t);
            r !== -1 && (e.splice(r, 1), this.touchAction.update());
          }
          return this;
        },
        /**
         * bind event
         * @param {String} events
         * @param {Function} handler
         * @returns {EventEmitter} this
         */
        on: function(t, e) {
          if (t !== u && e !== u) {
            var r = this.handlers;
            return A(Y(t), function(n) {
              r[n] = r[n] || [], r[n].push(e);
            }), this;
          }
        },
        /**
         * unbind event, leave emit blank to remove all handlers
         * @param {String} events
         * @param {Function} [handler]
         * @returns {EventEmitter} this
         */
        off: function(t, e) {
          if (t !== u) {
            var r = this.handlers;
            return A(Y(t), function(n) {
              e ? r[n] && r[n].splice(M(r[n], e), 1) : delete r[n];
            }), this;
          }
        },
        /**
         * emit event to the listeners
         * @param {String} event
         * @param {Object} data
         */
        emit: function(t, e) {
          this.options.domEvents && qe(t, e);
          var r = this.handlers[t] && this.handlers[t].slice();
          if (!(!r || !r.length)) {
            e.type = t, e.preventDefault = function() {
              e.srcEvent.preventDefault();
            };
            for (var n = 0; n < r.length; )
              r[n](e), n++;
          }
        },
        /**
         * destroy the manager and unbinds all events
         * it doesn't unbind dom events, that is the user own responsibility
         */
        destroy: function() {
          this.element && fe(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
        }
      };
      function fe(t, e) {
        var r = t.element;
        if (r.style) {
          var n;
          A(t.options.cssProps, function(i, s) {
            n = T(r.style, s), e ? (t.oldCssProps[n] = r.style[n], r.style[n] = i) : r.style[n] = t.oldCssProps[n] || "";
          }), e || (t.oldCssProps = {});
        }
      }
      function qe(t, e) {
        var r = g.createEvent("Event");
        r.initEvent(t, !0, !0), r.gesture = e, e.target.dispatchEvent(r);
      }
      E(ht, {
        INPUT_START: P,
        INPUT_MOVE: Z,
        INPUT_END: I,
        INPUT_CANCEL: j,
        STATE_POSSIBLE: Dt,
        STATE_BEGAN: et,
        STATE_CHANGED: pt,
        STATE_ENDED: ut,
        STATE_RECOGNIZED: ct,
        STATE_CANCELLED: _t,
        STATE_FAILED: st,
        DIRECTION_NONE: Ot,
        DIRECTION_LEFT: Tt,
        DIRECTION_RIGHT: mt,
        DIRECTION_UP: gt,
        DIRECTION_DOWN: Et,
        DIRECTION_HORIZONTAL: it,
        DIRECTION_VERTICAL: ft,
        DIRECTION_ALL: Bt,
        Manager: zt,
        Input: tt,
        TouchAction: Vt,
        TouchInput: St,
        MouseInput: Ct,
        PointerEventInput: Yt,
        TouchMouseInput: Ft,
        SingleTouchInput: re,
        Recognizer: lt,
        AttrRecognizer: nt,
        Tap: wt,
        Pan: bt,
        Swipe: Gt,
        Pinch: qt,
        Rotate: Wt,
        Press: kt,
        on: w,
        off: C,
        each: A,
        merge: K,
        extend: U,
        assign: E,
        inherit: o,
        bindFn: f,
        prefixed: T
      });
      var ke = typeof l < "u" ? l : typeof self < "u" ? self : {};
      ke.Hammer = ht, m.exports ? m.exports = ht : l[L] = ht;
    })(window, document, "Hammer");
  }($t)), $t.exports;
}
var Qe = Je();
const pe = /* @__PURE__ */ je(Qe), Ke = ({
  viewRef: m,
  indicatorRef: l,
  totalHeight: g,
  onScrollUpdate: L,
  onScrollStop: u,
  rowHeight: d,
  debug: k = !1
}) => {
  const O = p(0), D = p(!1), N = p(0), rt = p(0), z = p(0), x = p(0), A = p(0), R = p(0), E = p(0), U = p(null), K = p(325), o = p(0.02), f = p(0.5), $ = J((...w) => {
    k && console.log(...w);
  }, [k]);
  Pt(() => {
    const w = m.current, C = l.current;
    if (w) {
      const S = w.parentElement, y = S ? S.getBoundingClientRect().height : window.innerHeight;
      z.current = g - y;
      const Y = (X) => {
        const H = Math.max(rt.current, Math.min(X, z.current));
        O.current = H, w.scrollTop = H, C == null || C.setPosition(H), L(H);
      }, M = () => {
        const X = Date.now(), H = X - E.current;
        E.current = X;
        const Q = O.current - R.current;
        R.current = O.current;
        const ot = 1e3 * Q / (1 + H);
        x.current = 0.8 * ot + 0.2 * x.current;
      }, v = () => {
        const X = Date.now() - E.current, H = -A.current * Math.exp(-X / K.current);
        if (Math.abs(x.current) > o.current && Math.abs(H) > f.current)
          Y(R.current + H), requestAnimationFrame(v);
        else {
          const ot = Math.round(R.current / d) * d;
          Y(ot), u(ot);
        }
      }, G = () => {
        if (D.current = !1, U.current && clearInterval(U.current), Math.abs(x.current) > o.current)
          A.current = 0.8 * x.current, R.current = Math.round(O.current + A.current), R.current = Math.round(R.current / d) * d, R.current = Math.max(rt.current, Math.min(R.current, z.current)), E.current = Date.now(), requestAnimationFrame(v);
        else {
          $("No momentum scrolling as velocity is too low.");
          const X = d / 2;
          let H;
          O.current % d < X ? H = Math.floor(O.current / d) : H = Math.ceil(O.current / d);
          const Q = H * d;
          Y(Q), u(Q);
        }
      }, T = new pe(w);
      return T.get("pan").set({ direction: pe.DIRECTION_VERTICAL }), T.on("panstart", (X) => {
        D.current = !0, N.current = X.center.y, x.current = A.current = 0, R.current = O.current, E.current = Date.now(), U.current && clearInterval(U.current), U.current = setInterval(M, 50);
      }), T.on("panmove", (X) => {
        if (D.current) {
          const H = X.center.y, Q = N.current - H;
          N.current = H, Math.abs(Q) > 1 && Y(O.current + Q);
        }
      }), T.on("panend", G), () => {
        T.off("panstart", G), T.off("panmove", G), T.off("panend", G), T.destroy();
      };
    }
  }, [m, g, L, u, l, $, d]);
  const F = J((w) => {
    const C = w * d, S = m.current, y = l.current;
    y == null || y.setPosition(C), S && (S.scrollTo({ top: C, behavior: "smooth" }), O.current = C), L(C);
    const Y = () => {
      var v;
      ((v = m.current) == null ? void 0 : v.scrollTop) === C ? u(C) : requestAnimationFrame(Y);
    };
    requestAnimationFrame(Y);
  }, [d, m, l, L, u]);
  return {
    offset: O.current,
    scrollToRow: F
  };
}, tr = "_container_100u3_1", er = "_thumb_100u3_6", de = {
  container: tr,
  thumb: er
}, Te = ze((m, l) => {
  const L = p(null), u = p(null), { "aria-label": d, containerHeight: k, totalHeight: O, show: D = !0 } = m;
  return $e(l, () => ({
    setPosition: (N) => {
      L.current && (L.current.style.top = `${N * (k - 25) / O}px`);
    }
  })), /* @__PURE__ */ dt(
    "div",
    {
      "aria-label": d,
      ref: u,
      className: de.container,
      style: { display: D ? "block" : "none" },
      children: /* @__PURE__ */ dt(
        "div",
        {
          className: de.thumb,
          style: { "--thumb-height": "25px" },
          ref: L
        }
      )
    }
  );
});
Te.displayName = "ScrollBar";
const rr = "_wrapper_bq0cu_1", nr = {
  wrapper: rr
};
function ir({
  fetchPageData: m,
  onCellContentUpdated: l,
  rowsPerPage: g = 100,
  onFirstPageLoaded: L,
  dataSourceKey: u
}) {
  const d = p({
    previousPage: { data: [], pageNumber: null },
    visiblePage: { data: [], pageNumber: null },
    nextPage: { data: [], pageNumber: null }
  }), k = p(null), O = p(!1), D = p(null), N = p(!1), rt = J(
    async (o) => {
      if (o < 1 || O.current)
        return [];
      try {
        return O.current = !0, await m(o);
      } catch (f) {
        return console.error("Error fetching page data:", f), [];
      } finally {
        O.current = !1, l && l();
      }
    },
    [m, l]
  ), z = J(
    (o) => {
      const f = Math.floor(o / g) + 1;
      k.current = f;
      const { nextPage: $, visiblePage: F, previousPage: w } = d.current;
      w.data.length, $.data.length === 0 && console.log("Next page is Empty!"), F.data.length === 0 && console.log("Visible page is Empty!"), l && l();
    },
    [l, g]
  ), x = J(
    async (o) => {
      const f = d.current, $ = o - 1, F = o + 1, { previousPage: w, visiblePage: C, nextPage: S } = f, y = (M) => {
        const v = [w, C, S].find(
          (G) => G.pageNumber === M
        );
        return v ? { ...v, data: [...v.data] } : null;
      }, Y = async (M, v) => {
        const G = y(M);
        if (G)
          return v(G), !1;
        {
          const T = await rt(M);
          return v({ data: T, pageNumber: M }), !0;
        }
      };
      try {
        let M = !1;
        f.visiblePage.pageNumber !== o && (M = await Y(
          o,
          (T) => f.visiblePage = T
        ));
        const v = [];
        f.previousPage.pageNumber !== $ && o > 1 && v.push(
          Y($, (T) => f.previousPage = T)
        ), f.nextPage.pageNumber !== F && v.push(
          Y(F, (T) => f.nextPage = T)
        ), (await Promise.all(v)).includes(!0) && (M = !0), M && l && l();
      } catch (M) {
        console.error("Error while fetching pages in parallel:", M);
      }
    },
    [rt, l]
  ), A = J(
    (o) => {
      D.current && clearTimeout(D.current), D.current = setTimeout(() => {
        z(o);
      }, 100);
    },
    [z]
  ), R = J(
    async (o) => {
      if (O.current)
        return;
      const f = Math.floor(o / g) + 1;
      if (f === k.current) {
        A(o);
        return;
      }
      if (k.current === null) {
        k.current = f, await x(f), z(o), !N.current && d.current.visiblePage.data.length > 0 && (N.current = !0, L && L(d.current.visiblePage.data));
        return;
      }
      await x(f), d.current.visiblePage.pageNumber === f && z(o);
    },
    [A, g, z, x]
  ), E = p(u), U = J(() => {
    d.current = {
      previousPage: { data: [], pageNumber: null },
      visiblePage: { data: [], pageNumber: null },
      nextPage: { data: [], pageNumber: null }
    }, k.current = null, N.current = !1;
  }, []);
  Pt(() => {
    (E.current !== u || E.current === void 0) && (U(), R(1), E.current = u);
  }, [u, U, R]);
  const K = (o) => {
    const f = Math.floor(o / g) + 1, $ = o % g, { previousPage: F, visiblePage: w, nextPage: C } = d.current, S = k.current;
    let y;
    switch (f) {
      case S - 1:
        y = F.data;
        break;
      case S:
        y = w.data;
        break;
      case S + 1:
        y = C.data;
        break;
      default:
        return { title: "Loading..." };
    }
    return (y == null ? void 0 : y[$]) ?? { title: "Loading..." };
  };
  return Pt(() => {
    k.current === null && R(1);
  }, [R]), { getRowData: K, updateAndSyncCache: R };
}
function sr({
  rowCount: m,
  fetchPageData: l,
  rowHeight: g = 50,
  onEndReached: L,
  loadMoreThreshold: u = 10,
  rowsPerPage: d,
  renderCell: k,
  onRowDoubleClick: O,
  onTopRowChanged: D,
  apiRef: N,
  hideVerticalScrollbar: rt = !1,
  dataSourceKey: z,
  debug: x = !1
}) {
  const A = p(null), R = p(null), E = p(null), U = p([]), K = p(0), o = p(0), f = p(0), $ = (a, h) => {
    console.log(`total rows in pool: ${U.current.length}`), console.log(`first visible row: ${a} last visible row: ${h}`), U.current.forEach((_) => {
      var b;
      if (_) {
        const V = parseInt(((b = _.dataset) == null ? void 0 : b.rowIndex) || "0", 10);
        console.log(`data-row-index: ${V}`), console.log(`style.transform ${_.style.transform}`);
      }
    });
  }, [F, w] = Be(800), C = m * g, S = J((...a) => {
    x && console.log(...a);
  }, [x]), y = J((a, h, _) => {
    for (; a.firstChild; )
      a.removeChild(a.firstChild);
    const b = document.createElement("div"), V = Ze.createRoot(b);
    b.style.width = "100%", b.style.height = "100%", V.render(k(h, _)), a.appendChild(b);
  }, [k]), Y = () => {
    U.current.length > 0 && U.current.forEach(async (a) => {
      var h;
      if (a) {
        const _ = parseInt(((h = a.dataset) == null ? void 0 : h.rowIndex) || "0", 10);
        if (!a.textContent || a.textContent.indexOf("Loading...") !== -1) {
          const V = await v(_);
          V && y(a, V, _);
        }
      }
    });
  }, M = () => {
    (async () => {
      if (D) {
        const h = await v(0);
        h && D(0, h);
      }
    })();
  }, { getRowData: v, updateAndSyncCache: G } = ir({
    fetchPageData: l,
    onCellContentUpdated: Y,
    rowsPerPage: d,
    onFirstPageLoaded: M,
    dataSourceKey: z || ""
  }), T = J((a) => {
    const h = Math.floor(F / g), b = Math.max(0, Math.floor((a + 5) / g)), V = Math.min(m - 1, b + h - 1);
    return S(`scrollTop: ${a}, firstRow: ${b}, lastRow: ${V}`), { firstRow: b, lastRow: V };
  }, [S, m, g, F]), X = J(async (a, h) => {
    h.dataset.rowIndex = a.toString(), h.innerHTML = "Loading...";
    const _ = await v(a);
    y(h, _, a), h.style.transform = `translateY(${a * g}px)`;
  }, [v, y, g]), H = J((a) => {
    S(`Handling scroll with scrollTop: ${a}`);
    const { firstRow: h, lastRow: _ } = T(a);
    G(h), S(`Visible rows from ${h} to ${_}`), U.current.forEach((b) => {
      var V;
      if (b) {
        const P = parseInt(((V = b.dataset) == null ? void 0 : V.rowIndex) || "0", 10);
        if (P < h - K.current / 3) {
          const Z = o.current, I = P + K.current;
          o.current = Math.max(Z + 1, _), S(`Recycling row ${P} to new row ${I} (scrolling down).`), X(I, b);
        } else if (P > _ + K.current / 3) {
          const Z = P - K.current;
          S(`Recycling row ${P} to new row ${Z} (scrolling up).`), X(Z, b);
        }
      }
    }), A.current && A.current.scrollHeight - a - F < u && (S("End of scroll reached, triggering onEndReached."), L && L());
  }, [T, X, u, S, L, G, F]), Q = J(async (a) => {
    f.current = a;
    const { firstRow: h, lastRow: _ } = T(a);
    if (D) {
      const b = await v(h);
      D(h, b);
    }
    x && (console.log("handleOnScrollStop"), $(h, _));
  }, [T, x, v, D]), { scrollToRow: ot } = Ke({
    viewRef: E,
    indicatorRef: R,
    totalHeight: C,
    onScrollUpdate: H,
    onScrollStop: Q,
    rowHeight: g
  });
  Pt(() => {
    N && (N.current = { scrollToRow: ot });
  }, [ot, N]), Pt(() => {
    const a = () => {
      E.current && w(E.current.clientHeight);
    };
    return a(), window.addEventListener("resize", a), () => window.removeEventListener("resize", a);
  }, []);
  const Nt = Math.ceil(Math.ceil(F / g) / 10) * 10;
  K.current = Nt * 3;
  const Lt = (a) => {
    const h = a.currentTarget, _ = parseInt(h.dataset.rowIndex || "-1");
    _ && O && O(_, N == null ? void 0 : N.current);
  }, Ut = () => {
    U.current = [];
    const a = A.current ? A.current.scrollTop : f.current, { firstRow: h } = T(a);
    return Array.from({ length: K.current }).map((b, V) => {
      const P = h + V, Z = P * g - a;
      return /* @__PURE__ */ dt(
        "div",
        {
          "data-row-index": P,
          ref: (I) => {
            I && (U.current[V] = I);
          },
          style: {
            height: g,
            position: "absolute",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            transform: `translateY(${Z}px)`
          },
          onDoubleClick: Lt
        },
        `row-${h}-${V}`
      );
    });
  };
  return /* @__PURE__ */ We("div", { style: { display: "flex", flex: 1, width: "100%", height: "100%", overflow: "hidden" }, children: [
    /* @__PURE__ */ dt(
      "div",
      {
        ref: E,
        className: `${nr.wrapper}`,
        children: /* @__PURE__ */ dt(
          "div",
          {
            ref: A,
            style: { height: `${C}px`, flexDirection: "column", position: "relative" },
            children: Ut()
          }
        )
      }
    ),
    /* @__PURE__ */ dt(Te, { show: !rt, containerHeight: F, totalHeight: C, ref: R })
  ] });
}
const ar = (m, l) => {
  const g = Object.keys(m);
  for (const L of g)
    if (m[L] !== l[L])
      return !1;
  return !0;
}, ur = Ge.memo(sr, ar);
export {
  ur as VirtualList
};
