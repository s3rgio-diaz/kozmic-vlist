import { jsx as vt, jsxs as We } from "react/jsx-runtime";
import Ge, { useRef as g, useCallback as G, useEffect as wt, forwardRef as $e, useImperativeHandle as ze } from "react";
import Be from "react-dom/client";
import './main.css';function je(I) {
  return I && I.__esModule && Object.prototype.hasOwnProperty.call(I, "default") ? I.default : I;
}
var $t = { exports: {} };
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
var fe;
function Ze() {
  return fe || (fe = 1, function(I) {
    (function(h, m, O, f) {
      var _ = ["", "webkit", "Moz", "MS", "ms", "o"], $ = m.createElement("div"), A = "function", P = Math.round, N = Math.abs, Z = Date.now;
      function H(t, e, r) {
        return setTimeout(S(t, r), e);
      }
      function U(t, e, r) {
        return Array.isArray(t) ? (c(t, r[e], r), !0) : !1;
      }
      function c(t, e, r) {
        var n;
        if (t)
          if (t.forEach)
            t.forEach(e, r);
          else if (t.length !== f)
            for (n = 0; n < t.length; )
              e.call(r, t[n], n, t), n++;
          else
            for (n in t)
              t.hasOwnProperty(n) && e.call(r, t[n], n, t);
      }
      function o(t, e, r) {
        var n = "DEPRECATED METHOD: " + e + `
` + r + ` AT 
`;
        return function() {
          var i = new Error("get-stack-trace"), s = i && i.stack ? i.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace", u = h.console && (h.console.warn || h.console.log);
          return u && u.call(h.console, n, s), t.apply(this, arguments);
        };
      }
      var v;
      typeof Object.assign != "function" ? v = function(e) {
        if (e === f || e === null)
          throw new TypeError("Cannot convert undefined or null to object");
        for (var r = Object(e), n = 1; n < arguments.length; n++) {
          var i = arguments[n];
          if (i !== f && i !== null)
            for (var s in i)
              i.hasOwnProperty(s) && (r[s] = i[s]);
        }
        return r;
      } : v = Object.assign;
      var w = o(function(e, r, n) {
        for (var i = Object.keys(r), s = 0; s < i.length; )
          (!n || n && e[i[s]] === f) && (e[i[s]] = r[i[s]]), s++;
        return e;
      }, "extend", "Use `assign`."), J = o(function(e, r) {
        return w(e, r, !0);
      }, "merge", "Use `assign`.");
      function y(t, e, r) {
        var n = e.prototype, i;
        i = t.prototype = Object.create(n), i.constructor = t, i._super = n, r && v(i, r);
      }
      function S(t, e) {
        return function() {
          return t.apply(e, arguments);
        };
      }
      function M(t, e) {
        return typeof t == A ? t.apply(e && e[0] || f, e) : t;
      }
      function tt(t, e) {
        return t === f ? e : t;
      }
      function p(t, e, r) {
        c(q(e), function(n) {
          t.addEventListener(n, r, !1);
        });
      }
      function d(t, e, r) {
        c(q(e), function(n) {
          t.removeEventListener(n, r, !1);
        });
      }
      function C(t, e) {
        for (; t; ) {
          if (t == e)
            return !0;
          t = t.parentNode;
        }
        return !1;
      }
      function E(t, e) {
        return t.indexOf(e) > -1;
      }
      function q(t) {
        return t.trim().split(/\s+/g);
      }
      function et(t, e, r) {
        if (t.indexOf && !r)
          return t.indexOf(e);
        for (var n = 0; n < t.length; ) {
          if (r && t[n][r] == e || !r && t[n] === e)
            return n;
          n++;
        }
        return -1;
      }
      function z(t) {
        return Array.prototype.slice.call(t, 0);
      }
      function B(t, e, r) {
        for (var n = [], i = [], s = 0; s < t.length; ) {
          var u = t[s][e];
          et(i, u) < 0 && n.push(t[s]), i[s] = u, s++;
        }
        return n = n.sort(function(F, V) {
          return F[e] > V[e];
        }), n;
      }
      function Y(t, e) {
        for (var r, n, i = e[0].toUpperCase() + e.slice(1), s = 0; s < _.length; ) {
          if (r = _[s], n = r ? r + i : e, n in t)
            return n;
          s++;
        }
        return f;
      }
      var x = 1;
      function a() {
        return x++;
      }
      function l(t) {
        var e = t.ownerDocument || t;
        return e.defaultView || e.parentWindow || h;
      }
      var T = /mobile|tablet|ip(ad|hone|od)|android/i, R = "ontouchstart" in h, k = Y(h, "PointerEvent") !== f, nt = R && T.test(navigator.userAgent), j = "touch", b = "pen", ct = "mouse", it = "kinect", Te = 25, X = 1, pt = 2, D = 4, W = 8, Ot = 1, gt = 2, Et = 4, yt = 8, It = 16, st = gt | Et, dt = yt | It, zt = st | dt, Bt = ["x", "y"], At = ["clientX", "clientY"];
      function Q(t, e) {
        var r = this;
        this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(n) {
          M(t.options.enable, [t]) && r.handler(n);
        }, this.init();
      }
      Q.prototype = {
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
          this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(l(this.element), this.evWin, this.domHandler);
        },
        /**
         * unbind the events
         */
        destroy: function() {
          this.evEl && d(this.element, this.evEl, this.domHandler), this.evTarget && d(this.target, this.evTarget, this.domHandler), this.evWin && d(l(this.element), this.evWin, this.domHandler);
        }
      };
      function me(t) {
        var e, r = t.options.inputClass;
        return r ? e = r : k ? e = Yt : nt ? e = St : R ? e = Ft : e = Rt, new e(t, ge);
      }
      function ge(t, e, r) {
        var n = r.pointers.length, i = r.changedPointers.length, s = e & X && n - i === 0, u = e & (D | W) && n - i === 0;
        r.isFirst = !!s, r.isFinal = !!u, s && (t.session = {}), r.eventType = e, Ee(t, r), t.emit("hammer.input", r), t.recognize(r), t.session.prevInput = r;
      }
      function Ee(t, e) {
        var r = t.session, n = e.pointers, i = n.length;
        r.firstInput || (r.firstInput = jt(e)), i > 1 && !r.firstMultiple ? r.firstMultiple = jt(e) : i === 1 && (r.firstMultiple = !1);
        var s = r.firstInput, u = r.firstMultiple, L = u ? u.center : s.center, F = e.center = Zt(n);
        e.timeStamp = Z(), e.deltaTime = e.timeStamp - s.timeStamp, e.angle = Lt(L, F), e.distance = Ct(L, F), ye(r, e), e.offsetDirection = Qt(e.deltaX, e.deltaY);
        var V = Jt(e.deltaTime, e.deltaX, e.deltaY);
        e.overallVelocityX = V.x, e.overallVelocityY = V.y, e.overallVelocity = N(V.x) > N(V.y) ? V.x : V.y, e.scale = u ? Pe(u.pointers, n) : 1, e.rotation = u ? _e(u.pointers, n) : 0, e.maxPointers = r.prevInput ? e.pointers.length > r.prevInput.maxPointers ? e.pointers.length : r.prevInput.maxPointers : e.pointers.length, Ie(r, e);
        var ot = t.element;
        C(e.srcEvent.target, ot) && (ot = e.srcEvent.target), e.target = ot;
      }
      function ye(t, e) {
        var r = e.center, n = t.offsetDelta || {}, i = t.prevDelta || {}, s = t.prevInput || {};
        (e.eventType === X || s.eventType === D) && (i = t.prevDelta = {
          x: s.deltaX || 0,
          y: s.deltaY || 0
        }, n = t.offsetDelta = {
          x: r.x,
          y: r.y
        }), e.deltaX = i.x + (r.x - n.x), e.deltaY = i.y + (r.y - n.y);
      }
      function Ie(t, e) {
        var r = t.lastInterval || e, n = e.timeStamp - r.timeStamp, i, s, u, L;
        if (e.eventType != W && (n > Te || r.velocity === f)) {
          var F = e.deltaX - r.deltaX, V = e.deltaY - r.deltaY, ot = Jt(n, F, V);
          s = ot.x, u = ot.y, i = N(ot.x) > N(ot.y) ? ot.x : ot.y, L = Qt(F, V), t.lastInterval = e;
        } else
          i = r.velocity, s = r.velocityX, u = r.velocityY, L = r.direction;
        e.velocity = i, e.velocityX = s, e.velocityY = u, e.direction = L;
      }
      function jt(t) {
        for (var e = [], r = 0; r < t.pointers.length; )
          e[r] = {
            clientX: P(t.pointers[r].clientX),
            clientY: P(t.pointers[r].clientY)
          }, r++;
        return {
          timeStamp: Z(),
          pointers: e,
          center: Zt(e),
          deltaX: t.deltaX,
          deltaY: t.deltaY
        };
      }
      function Zt(t) {
        var e = t.length;
        if (e === 1)
          return {
            x: P(t[0].clientX),
            y: P(t[0].clientY)
          };
        for (var r = 0, n = 0, i = 0; i < e; )
          r += t[i].clientX, n += t[i].clientY, i++;
        return {
          x: P(r / e),
          y: P(n / e)
        };
      }
      function Jt(t, e, r) {
        return {
          x: e / t || 0,
          y: r / t || 0
        };
      }
      function Qt(t, e) {
        return t === e ? Ot : N(t) >= N(e) ? t < 0 ? gt : Et : e < 0 ? yt : It;
      }
      function Ct(t, e, r) {
        r || (r = Bt);
        var n = e[r[0]] - t[r[0]], i = e[r[1]] - t[r[1]];
        return Math.sqrt(n * n + i * i);
      }
      function Lt(t, e, r) {
        r || (r = Bt);
        var n = e[r[0]] - t[r[0]], i = e[r[1]] - t[r[1]];
        return Math.atan2(i, n) * 180 / Math.PI;
      }
      function _e(t, e) {
        return Lt(e[1], e[0], At) + Lt(t[1], t[0], At);
      }
      function Pe(t, e) {
        return Ct(e[0], e[1], At) / Ct(t[0], t[1], At);
      }
      var Ne = {
        mousedown: X,
        mousemove: pt,
        mouseup: D
      }, Oe = "mousedown", Ae = "mousemove mouseup";
      function Rt() {
        this.evEl = Oe, this.evWin = Ae, this.pressed = !1, Q.apply(this, arguments);
      }
      y(Rt, Q, {
        /**
         * handle mouse events
         * @param {Object} ev
         */
        handler: function(e) {
          var r = Ne[e.type];
          r & X && e.button === 0 && (this.pressed = !0), r & pt && e.which !== 1 && (r = D), this.pressed && (r & D && (this.pressed = !1), this.callback(this.manager, r, {
            pointers: [e],
            changedPointers: [e],
            pointerType: ct,
            srcEvent: e
          }));
        }
      });
      var Ce = {
        pointerdown: X,
        pointermove: pt,
        pointerup: D,
        pointercancel: W,
        pointerout: W
      }, Re = {
        2: j,
        3: b,
        4: ct,
        5: it
        // see https://twitter.com/jacobrossi/status/480596438489890816
      }, Kt = "pointerdown", te = "pointermove pointerup pointercancel";
      h.MSPointerEvent && !h.PointerEvent && (Kt = "MSPointerDown", te = "MSPointerMove MSPointerUp MSPointerCancel");
      function Yt() {
        this.evEl = Kt, this.evWin = te, Q.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
      }
      y(Yt, Q, {
        /**
         * handle mouse events
         * @param {Object} ev
         */
        handler: function(e) {
          var r = this.store, n = !1, i = e.type.toLowerCase().replace("ms", ""), s = Ce[i], u = Re[e.pointerType] || e.pointerType, L = u == j, F = et(r, e.pointerId, "pointerId");
          s & X && (e.button === 0 || L) ? F < 0 && (r.push(e), F = r.length - 1) : s & (D | W) && (n = !0), !(F < 0) && (r[F] = e, this.callback(this.manager, s, {
            pointers: r,
            changedPointers: [e],
            pointerType: u,
            srcEvent: e
          }), n && r.splice(F, 1));
        }
      });
      var Se = {
        touchstart: X,
        touchmove: pt,
        touchend: D,
        touchcancel: W
      }, Me = "touchstart", De = "touchstart touchmove touchend touchcancel";
      function ee() {
        this.evTarget = Me, this.evWin = De, this.started = !1, Q.apply(this, arguments);
      }
      y(ee, Q, {
        handler: function(e) {
          var r = Se[e.type];
          if (r === X && (this.started = !0), !!this.started) {
            var n = xe.call(this, e, r);
            r & (D | W) && n[0].length - n[1].length === 0 && (this.started = !1), this.callback(this.manager, r, {
              pointers: n[0],
              changedPointers: n[1],
              pointerType: j,
              srcEvent: e
            });
          }
        }
      });
      function xe(t, e) {
        var r = z(t.touches), n = z(t.changedTouches);
        return e & (D | W) && (r = B(r.concat(n), "identifier")), [r, n];
      }
      var be = {
        touchstart: X,
        touchmove: pt,
        touchend: D,
        touchcancel: W
      }, Ue = "touchstart touchmove touchend touchcancel";
      function St() {
        this.evTarget = Ue, this.targetIds = {}, Q.apply(this, arguments);
      }
      y(St, Q, {
        handler: function(e) {
          var r = be[e.type], n = we.call(this, e, r);
          n && this.callback(this.manager, r, {
            pointers: n[0],
            changedPointers: n[1],
            pointerType: j,
            srcEvent: e
          });
        }
      });
      function we(t, e) {
        var r = z(t.touches), n = this.targetIds;
        if (e & (X | pt) && r.length === 1)
          return n[r[0].identifier] = !0, [r, r];
        var i, s, u = z(t.changedTouches), L = [], F = this.target;
        if (s = r.filter(function(V) {
          return C(V.target, F);
        }), e === X)
          for (i = 0; i < s.length; )
            n[s[i].identifier] = !0, i++;
        for (i = 0; i < u.length; )
          n[u[i].identifier] && L.push(u[i]), e & (D | W) && delete n[u[i].identifier], i++;
        if (L.length)
          return [
            // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
            B(s.concat(L), "identifier"),
            L
          ];
      }
      var Le = 2500, re = 25;
      function Ft() {
        Q.apply(this, arguments);
        var t = S(this.handler, this);
        this.touch = new St(this.manager, t), this.mouse = new Rt(this.manager, t), this.primaryTouch = null, this.lastTouches = [];
      }
      y(Ft, Q, {
        /**
         * handle mouse and touch events
         * @param {Hammer} manager
         * @param {String} inputEvent
         * @param {Object} inputData
         */
        handler: function(e, r, n) {
          var i = n.pointerType == j, s = n.pointerType == ct;
          if (!(s && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
            if (i)
              Ye.call(this, r, n);
            else if (s && Fe.call(this, n))
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
      function Ye(t, e) {
        t & X ? (this.primaryTouch = e.changedPointers[0].identifier, ne.call(this, e)) : t & (D | W) && ne.call(this, e);
      }
      function ne(t) {
        var e = t.changedPointers[0];
        if (e.identifier === this.primaryTouch) {
          var r = { x: e.clientX, y: e.clientY };
          this.lastTouches.push(r);
          var n = this.lastTouches, i = function() {
            var s = n.indexOf(r);
            s > -1 && n.splice(s, 1);
          };
          setTimeout(i, Le);
        }
      }
      function Fe(t) {
        for (var e = t.srcEvent.clientX, r = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
          var i = this.lastTouches[n], s = Math.abs(e - i.x), u = Math.abs(r - i.y);
          if (s <= re && u <= re)
            return !0;
        }
        return !1;
      }
      var ie = Y($.style, "touchAction"), se = ie !== f, ae = "compute", oe = "auto", Ht = "manipulation", Tt = "none", _t = "pan-x", Pt = "pan-y", Mt = Xe();
      function Xt(t, e) {
        this.manager = t, this.set(e);
      }
      Xt.prototype = {
        /**
         * set the touchAction value on the element or enable the polyfill
         * @param {String} value
         */
        set: function(t) {
          t == ae && (t = this.compute()), se && this.manager.element.style && Mt[t] && (this.manager.element.style[ie] = t), this.actions = t.toLowerCase().trim();
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
          return c(this.manager.recognizers, function(e) {
            M(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()));
          }), He(t.join(" "));
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
          var n = this.actions, i = E(n, Tt) && !Mt[Tt], s = E(n, Pt) && !Mt[Pt], u = E(n, _t) && !Mt[_t];
          if (i) {
            var L = t.pointers.length === 1, F = t.distance < 2, V = t.deltaTime < 250;
            if (L && F && V)
              return;
          }
          if (!(u && s) && (i || s && r & st || u && r & dt))
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
      function He(t) {
        if (E(t, Tt))
          return Tt;
        var e = E(t, _t), r = E(t, Pt);
        return e && r ? Tt : e || r ? e ? _t : Pt : E(t, Ht) ? Ht : oe;
      }
      function Xe() {
        if (!se)
          return !1;
        var t = {}, e = h.CSS && h.CSS.supports;
        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(r) {
          t[r] = e ? h.CSS.supports("touch-action", r) : !0;
        }), t;
      }
      var Dt = 1, K = 2, mt = 4, ht = 8, lt = ht, Nt = 16, at = 32;
      function ut(t) {
        this.options = v({}, this.defaults, t || {}), this.id = a(), this.manager = null, this.options.enable = tt(this.options.enable, !0), this.state = Dt, this.simultaneous = {}, this.requireFail = [];
      }
      ut.prototype = {
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
          return v(this.options, t), this.manager && this.manager.touchAction.update(), this;
        },
        /**
         * recognize simultaneous with an other recognizer.
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        recognizeWith: function(t) {
          if (U(t, "recognizeWith", this))
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
          return U(t, "dropRecognizeWith", this) ? this : (t = xt(t, this), delete this.simultaneous[t.id], this);
        },
        /**
         * recognizer can only run when an other is failing
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        requireFailure: function(t) {
          if (U(t, "requireFailure", this))
            return this;
          var e = this.requireFail;
          return t = xt(t, this), et(e, t) === -1 && (e.push(t), t.requireFailure(this)), this;
        },
        /**
         * drop the requireFailure link. it does not remove the link on the other recognizer.
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        dropRequireFailure: function(t) {
          if (U(t, "dropRequireFailure", this))
            return this;
          t = xt(t, this);
          var e = et(this.requireFail, t);
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
          r < ht && n(e.options.event + ce(r)), n(e.options.event), t.additionalEvent && n(t.additionalEvent), r >= ht && n(e.options.event + ce(r));
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
          this.state = at;
        },
        /**
         * can we emit?
         * @returns {boolean}
         */
        canEmit: function() {
          for (var t = 0; t < this.requireFail.length; ) {
            if (!(this.requireFail[t].state & (at | Dt)))
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
          var e = v({}, t);
          if (!M(this.options.enable, [this, e])) {
            this.reset(), this.state = at;
            return;
          }
          this.state & (lt | Nt | at) && (this.state = Dt), this.state = this.process(e), this.state & (K | mt | ht | Nt) && this.tryEmit(e);
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
      function ce(t) {
        return t & Nt ? "cancel" : t & ht ? "end" : t & mt ? "move" : t & K ? "start" : "";
      }
      function le(t) {
        return t == It ? "down" : t == yt ? "up" : t == gt ? "left" : t == Et ? "right" : "";
      }
      function xt(t, e) {
        var r = e.manager;
        return r ? r.get(t) : t;
      }
      function rt() {
        ut.apply(this, arguments);
      }
      y(rt, ut, {
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
          var e = this.state, r = t.eventType, n = e & (K | mt), i = this.attrTest(t);
          return n && (r & W || !i) ? e | Nt : n || i ? r & D ? e | ht : e & K ? e | mt : K : at;
        }
      });
      function bt() {
        rt.apply(this, arguments), this.pX = null, this.pY = null;
      }
      y(bt, rt, {
        /**
         * @namespace
         * @memberof PanRecognizer
         */
        defaults: {
          event: "pan",
          threshold: 10,
          pointers: 1,
          direction: zt
        },
        getTouchAction: function() {
          var t = this.options.direction, e = [];
          return t & st && e.push(Pt), t & dt && e.push(_t), e;
        },
        directionTest: function(t) {
          var e = this.options, r = !0, n = t.distance, i = t.direction, s = t.deltaX, u = t.deltaY;
          return i & e.direction || (e.direction & st ? (i = s === 0 ? Ot : s < 0 ? gt : Et, r = s != this.pX, n = Math.abs(t.deltaX)) : (i = u === 0 ? Ot : u < 0 ? yt : It, r = u != this.pY, n = Math.abs(t.deltaY))), t.direction = i, r && n > e.threshold && i & e.direction;
        },
        attrTest: function(t) {
          return rt.prototype.attrTest.call(this, t) && (this.state & K || !(this.state & K) && this.directionTest(t));
        },
        emit: function(t) {
          this.pX = t.deltaX, this.pY = t.deltaY;
          var e = le(t.direction);
          e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t);
        }
      });
      function Vt() {
        rt.apply(this, arguments);
      }
      y(Vt, rt, {
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
          return [Tt];
        },
        attrTest: function(t) {
          return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & K);
        },
        emit: function(t) {
          if (t.scale !== 1) {
            var e = t.scale < 1 ? "in" : "out";
            t.additionalEvent = this.options.event + e;
          }
          this._super.emit.call(this, t);
        }
      });
      function qt() {
        ut.apply(this, arguments), this._timer = null, this._input = null;
      }
      y(qt, ut, {
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
          return [oe];
        },
        process: function(t) {
          var e = this.options, r = t.pointers.length === e.pointers, n = t.distance < e.threshold, i = t.deltaTime > e.time;
          if (this._input = t, !n || !r || t.eventType & (D | W) && !i)
            this.reset();
          else if (t.eventType & X)
            this.reset(), this._timer = H(function() {
              this.state = lt, this.tryEmit();
            }, e.time, this);
          else if (t.eventType & D)
            return lt;
          return at;
        },
        reset: function() {
          clearTimeout(this._timer);
        },
        emit: function(t) {
          this.state === lt && (t && t.eventType & D ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = Z(), this.manager.emit(this.options.event, this._input)));
        }
      });
      function kt() {
        rt.apply(this, arguments);
      }
      y(kt, rt, {
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
          return [Tt];
        },
        attrTest: function(t) {
          return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & K);
        }
      });
      function Wt() {
        rt.apply(this, arguments);
      }
      y(Wt, rt, {
        /**
         * @namespace
         * @memberof SwipeRecognizer
         */
        defaults: {
          event: "swipe",
          threshold: 10,
          velocity: 0.3,
          direction: st | dt,
          pointers: 1
        },
        getTouchAction: function() {
          return bt.prototype.getTouchAction.call(this);
        },
        attrTest: function(t) {
          var e = this.options.direction, r;
          return e & (st | dt) ? r = t.overallVelocity : e & st ? r = t.overallVelocityX : e & dt && (r = t.overallVelocityY), this._super.attrTest.call(this, t) && e & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && N(r) > this.options.velocity && t.eventType & D;
        },
        emit: function(t) {
          var e = le(t.offsetDirection);
          e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t);
        }
      });
      function Ut() {
        ut.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
      }
      y(Ut, ut, {
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
          return [Ht];
        },
        process: function(t) {
          var e = this.options, r = t.pointers.length === e.pointers, n = t.distance < e.threshold, i = t.deltaTime < e.time;
          if (this.reset(), t.eventType & X && this.count === 0)
            return this.failTimeout();
          if (n && i && r) {
            if (t.eventType != D)
              return this.failTimeout();
            var s = this.pTime ? t.timeStamp - this.pTime < e.interval : !0, u = !this.pCenter || Ct(this.pCenter, t.center) < e.posThreshold;
            this.pTime = t.timeStamp, this.pCenter = t.center, !u || !s ? this.count = 1 : this.count += 1, this._input = t;
            var L = this.count % e.taps;
            if (L === 0)
              return this.hasRequireFailures() ? (this._timer = H(function() {
                this.state = lt, this.tryEmit();
              }, e.interval, this), K) : lt;
          }
          return at;
        },
        failTimeout: function() {
          return this._timer = H(function() {
            this.state = at;
          }, this.options.interval, this), at;
        },
        reset: function() {
          clearTimeout(this._timer);
        },
        emit: function() {
          this.state == lt && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
        }
      });
      function ft(t, e) {
        return e = e || {}, e.recognizers = tt(e.recognizers, ft.defaults.preset), new Gt(t, e);
      }
      ft.VERSION = "2.0.7", ft.defaults = {
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
        touchAction: ae,
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
          [kt, { enable: !1 }],
          [Vt, { enable: !1 }, ["rotate"]],
          [Wt, { direction: st }],
          [bt, { direction: st }, ["swipe"]],
          [Ut],
          [Ut, { event: "doubletap", taps: 2 }, ["tap"]],
          [qt]
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
      var Ve = 1, ue = 2;
      function Gt(t, e) {
        this.options = v({}, ft.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = me(this), this.touchAction = new Xt(this, this.options.touchAction), he(this, !0), c(this.options.recognizers, function(r) {
          var n = this.add(new r[0](r[1]));
          r[2] && n.recognizeWith(r[2]), r[3] && n.requireFailure(r[3]);
        }, this);
      }
      Gt.prototype = {
        /**
         * set options
         * @param {Object} options
         * @returns {Manager}
         */
        set: function(t) {
          return v(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this;
        },
        /**
         * stop recognizing for this session.
         * This session will be discarded, when a new [input]start event is fired.
         * When forced, the recognizer cycle is stopped immediately.
         * @param {Boolean} [force]
         */
        stop: function(t) {
          this.session.stopped = t ? ue : Ve;
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
            (!i || i && i.state & lt) && (i = e.curRecognizer = null);
            for (var s = 0; s < n.length; )
              r = n[s], e.stopped !== ue && // 1
              (!i || r == i || // 2
              r.canRecognizeWith(i)) ? r.recognize(t) : r.reset(), !i && r.state & (K | mt | ht) && (i = e.curRecognizer = r), s++;
          }
        },
        /**
         * get a recognizer by its event name.
         * @param {Recognizer|String} recognizer
         * @returns {Recognizer|Null}
         */
        get: function(t) {
          if (t instanceof ut)
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
          if (U(t, "add", this))
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
          if (U(t, "remove", this))
            return this;
          if (t = this.get(t), t) {
            var e = this.recognizers, r = et(e, t);
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
          if (t !== f && e !== f) {
            var r = this.handlers;
            return c(q(t), function(n) {
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
          if (t !== f) {
            var r = this.handlers;
            return c(q(t), function(n) {
              e ? r[n] && r[n].splice(et(r[n], e), 1) : delete r[n];
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
          this.element && he(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
        }
      };
      function he(t, e) {
        var r = t.element;
        if (r.style) {
          var n;
          c(t.options.cssProps, function(i, s) {
            n = Y(r.style, s), e ? (t.oldCssProps[n] = r.style[n], r.style[n] = i) : r.style[n] = t.oldCssProps[n] || "";
          }), e || (t.oldCssProps = {});
        }
      }
      function qe(t, e) {
        var r = m.createEvent("Event");
        r.initEvent(t, !0, !0), r.gesture = e, e.target.dispatchEvent(r);
      }
      v(ft, {
        INPUT_START: X,
        INPUT_MOVE: pt,
        INPUT_END: D,
        INPUT_CANCEL: W,
        STATE_POSSIBLE: Dt,
        STATE_BEGAN: K,
        STATE_CHANGED: mt,
        STATE_ENDED: ht,
        STATE_RECOGNIZED: lt,
        STATE_CANCELLED: Nt,
        STATE_FAILED: at,
        DIRECTION_NONE: Ot,
        DIRECTION_LEFT: gt,
        DIRECTION_RIGHT: Et,
        DIRECTION_UP: yt,
        DIRECTION_DOWN: It,
        DIRECTION_HORIZONTAL: st,
        DIRECTION_VERTICAL: dt,
        DIRECTION_ALL: zt,
        Manager: Gt,
        Input: Q,
        TouchAction: Xt,
        TouchInput: St,
        MouseInput: Rt,
        PointerEventInput: Yt,
        TouchMouseInput: Ft,
        SingleTouchInput: ee,
        Recognizer: ut,
        AttrRecognizer: rt,
        Tap: Ut,
        Pan: bt,
        Swipe: Wt,
        Pinch: Vt,
        Rotate: kt,
        Press: qt,
        on: p,
        off: d,
        each: c,
        merge: J,
        extend: w,
        assign: v,
        inherit: y,
        bindFn: S,
        prefixed: Y
      });
      var ke = typeof h < "u" ? h : typeof self < "u" ? self : {};
      ke.Hammer = ft, I.exports ? I.exports = ft : h[O] = ft;
    })(window, document, "Hammer");
  }($t)), $t.exports;
}
var Je = Ze();
const ve = /* @__PURE__ */ je(Je), Qe = ({
  viewRef: I,
  indicatorRef: h,
  totalHeight: m,
  onScrollUpdate: O,
  onScrollStop: f,
  rowHeight: _,
  debug: $ = !1
}) => {
  const A = g(0), P = g(!1), N = g(0), Z = g(0), H = g(0), U = g(0), c = g(0), o = g(0), v = g(0), w = g(null), J = g(325), y = g(0.02), S = g(0.5), M = G((...p) => {
    $ && console.log(...p);
  }, [$]);
  wt(() => {
    const p = I.current, d = h.current;
    if (p) {
      const C = p.parentElement, E = C ? C.getBoundingClientRect().height : window.innerHeight;
      H.current = m - E;
      const q = (x) => {
        const a = Math.max(Z.current, Math.min(x, H.current));
        A.current = a, p.scrollTop = a, d == null || d.setPosition(a), O(a);
      }, et = () => {
        const x = Date.now(), a = x - v.current;
        v.current = x;
        const l = A.current - o.current;
        o.current = A.current;
        const T = 1e3 * l / (1 + a);
        U.current = 0.8 * T + 0.2 * U.current;
      }, z = () => {
        const x = Date.now() - v.current, a = -c.current * Math.exp(-x / J.current);
        if (Math.abs(U.current) > y.current && Math.abs(a) > S.current)
          q(o.current + a), requestAnimationFrame(z);
        else {
          const T = Math.round(o.current / _) * _;
          q(T), f(T);
        }
      }, B = () => {
        if (P.current = !1, w.current && clearInterval(w.current), Math.abs(U.current) > y.current) {
          c.current = 0.8 * U.current, o.current = Math.round(A.current + c.current);
          const x = 50;
          o.current = Math.round(o.current / x) * x, o.current = Math.max(Z.current, Math.min(o.current, H.current)), v.current = Date.now(), requestAnimationFrame(z);
        } else {
          M("No momentum scrolling as velocity is too low.");
          const x = _ / 2;
          let a;
          A.current % _ < x ? a = Math.floor(A.current / _) : a = Math.ceil(A.current / _);
          const l = a * _;
          q(l), f(l);
        }
      }, Y = new ve(p);
      return Y.get("pan").set({ direction: ve.DIRECTION_VERTICAL }), Y.on("panstart", (x) => {
        P.current = !0, N.current = x.center.y, U.current = c.current = 0, o.current = A.current, v.current = Date.now(), w.current && clearInterval(w.current), w.current = setInterval(et, 50);
      }), Y.on("panmove", (x) => {
        if (P.current) {
          const a = x.center.y, l = N.current - a;
          N.current = a, Math.abs(l) > 1 && q(A.current + l);
        }
      }), Y.on("panend", B), () => {
        Y.off("panstart", B), Y.off("panmove", B), Y.off("panend", B), Y.destroy();
      };
    }
  }, [I, m, O, f, h, M, _]);
  const tt = G((p) => {
    const d = p * _, C = I.current, E = h.current;
    E == null || E.setPosition(d), C && (C.scrollTo({ top: d, behavior: "smooth" }), A.current = d), O(d);
    const q = () => {
      var z;
      ((z = I.current) == null ? void 0 : z.scrollTop) === d ? f(d) : requestAnimationFrame(q);
    };
    requestAnimationFrame(q);
  }, [_, I, h, O, f]);
  return {
    offset: A.current,
    scrollToRow: tt
  };
}, Ke = "_container_100u3_1", tr = "_thumb_100u3_6", pe = {
  container: Ke,
  thumb: tr
}, de = $e((I, h) => {
  const O = g(null), f = g(null), { "aria-label": _, containerHeight: $, totalHeight: A } = I;
  return ze(h, () => ({
    setPosition: (P) => {
      O.current && (O.current.style.top = `${P * ($ - 25) / A}px`);
    }
  })), /* @__PURE__ */ vt(
    "div",
    {
      "aria-label": _,
      ref: f,
      className: pe.container,
      style: { display: "none" },
      children: /* @__PURE__ */ vt(
        "div",
        {
          className: pe.thumb,
          style: { "--thumb-height": "25px" },
          ref: O
        }
      )
    }
  );
});
de.displayName = "ScrollBar";
const er = "_wrapper_ay5r4_1", rr = {
  wrapper: er
}, nr = ({
  fetchPageData: I,
  onCellContentUpdated: h,
  rowsPerPage: m = 100
}) => {
  const O = g({
    previousPage: { data: [], pageNumber: null },
    visiblePage: { data: [], pageNumber: null },
    nextPage: { data: [], pageNumber: null }
  }), f = g(null), _ = g(!1), $ = g(null), A = G(
    async (c) => {
      if (c < 1 || _.current)
        return [];
      try {
        return _.current = !0, await I(c);
      } catch (o) {
        return console.error("Error fetching page data:", o), [];
      } finally {
        _.current = !1, h && h();
      }
    },
    [I, h]
  ), P = G(
    (c) => {
      const o = Math.floor(c / m) + 1;
      f.current = o;
      const { nextPage: v, visiblePage: w, previousPage: J } = O.current;
      J.data.length === 0 && console.log("Prev page is Empty!"), v.data.length === 0 && console.log("Next page is Empty!"), w.data.length === 0 && console.log("Visible page is Empty!"), h && h();
    },
    [h, m]
  ), N = G(
    async (c) => {
      const o = O.current, v = c - 1, w = c + 1, { previousPage: J, visiblePage: y, nextPage: S } = o, M = (p) => {
        const d = [J, y, S].find(
          (C) => C.pageNumber === p
        );
        return d ? { ...d, data: [...d.data] } : null;
      }, tt = async (p, d) => {
        const C = M(p);
        if (C)
          return console.log(`Using cached data for ${d.name}:`, C.data), d(C), !1;
        {
          const E = await A(p);
          return d({ data: E, pageNumber: p }), !0;
        }
      };
      try {
        let p = !1;
        o.visiblePage.pageNumber !== c && (p = await tt(
          c,
          (E) => o.visiblePage = E
        ));
        const d = [];
        o.previousPage.pageNumber !== v && c > 1 && d.push(
          tt(v, (E) => o.previousPage = E)
        ), o.nextPage.pageNumber !== w && d.push(
          tt(w, (E) => o.nextPage = E)
        ), (await Promise.all(d)).includes(!0) && (p = !0), p && (console.log("Cache after update:", O.current), h && h());
      } catch (p) {
        console.error("Error while fetching pages in parallel:", p);
      }
    },
    [A, h]
  ), Z = G(
    (c) => {
      $.current && clearTimeout($.current), $.current = setTimeout(() => {
        P(c);
      }, 100);
    },
    [P]
  ), H = G(
    async (c) => {
      if (_.current)
        return;
      const o = Math.floor(c / m) + 1;
      if (o === f.current) {
        Z(c);
        return;
      }
      if (f.current === null) {
        f.current = o, await N(o), P(c);
        return;
      }
      await N(o), console.log("Cache update completed:", O.current), O.current.visiblePage.pageNumber === o && P(c);
    },
    [Z, m, P, N]
  ), U = (c) => {
    const o = Math.floor(c / m) + 1, v = c % m, { previousPage: w, visiblePage: J, nextPage: y } = O.current, S = f.current;
    let M;
    switch (o) {
      case S - 1:
        M = w.data;
        break;
      case S:
        M = J.data;
        break;
      case S + 1:
        M = y.data;
        break;
      default:
        return { title: "Loading..." };
    }
    return (M == null ? void 0 : M[v]) ?? { title: "Loading..." };
  };
  return wt(() => {
    f.current === null && H(1);
  }, [H]), { getRowData: U, updateAndSyncCache: H };
};
function ir({
  rowCount: I,
  fetchPageData: h,
  rowHeight: m = 50,
  onEndReached: O,
  loadMoreThreshold: f = 10,
  rowsPerPage: _,
  renderCell: $,
  onRowDoubleClick: A,
  onTopRowChanged: P,
  apiRef: N,
  debug: Z = !1
}) {
  const H = g(null), U = g(null), c = g(null), o = g([]), v = g(0), w = g(0), J = g(0), y = I * m, S = G((...a) => {
    Z && console.log(...a);
  }, [Z]), M = G((a, l, T) => {
    const R = document.createElement("div"), k = Be.createRoot(R);
    R.style.width = "100%", R.style.height = "100%", k.render($(l, T)), a.innerHTML = "", a.appendChild(R);
  }, [$]), tt = G(() => {
    console.log("handleCellContentUpdate"), o.current.forEach(async (a) => {
      var l;
      if (a) {
        const T = parseInt(((l = a.dataset) == null ? void 0 : l.rowIndex) || "0", 10);
        if (!a.textContent || a.textContent.indexOf("Loading...") !== -1) {
          const k = p(T);
          k && M(a, k, T);
        }
      }
    });
  }, [M]), { getRowData: p, updateAndSyncCache: d } = nr({
    fetchPageData: h,
    onCellContentUpdated: tt,
    rowsPerPage: _
  }), C = G((a) => {
    const l = Math.floor(B / m), R = Math.max(0, Math.floor((a + 5) / m)), k = Math.min(I - 1, R + l - 1);
    return S(`scrollTop: ${a}, firstRow: ${R}, lastRow: ${k}`), { firstRow: R, lastRow: k };
  }, [S, I, m]), E = G(async (a, l) => {
    l.dataset.rowIndex = a.toString(), l.innerHTML = "Loading...";
    const T = await p(a);
    M(l, T, a), l.style.transform = `translateY(${a * m}px)`;
  }, [p, M, m]), q = G((a) => {
    S(`Handling scroll with scrollTop: ${a}`);
    const { firstRow: l, lastRow: T } = C(a);
    d(l), S(`Visible rows from ${l} to ${T}`), o.current.forEach((R) => {
      var k;
      if (R) {
        const nt = parseInt(((k = R.dataset) == null ? void 0 : k.rowIndex) || "0", 10);
        if (nt < l - v.current / 3) {
          const j = w.current, b = nt + v.current;
          w.current = Math.max(j + 1, T), S(`Recycling row ${nt} to new row ${b} (scrolling down).`), E(b, R);
        } else if (nt > T + v.current / 3) {
          const j = nt - v.current;
          S(`Recycling row ${nt} to new row ${j} (scrolling up).`), E(j, R);
        }
      }
    }), H.current && H.current.scrollHeight - a - B < f && (S("End of scroll reached, triggering onEndReached."), O && O());
  }, [C, E, f, S, O, d]), et = G((a) => {
    J.current = a;
    const { firstRow: l, lastRow: T } = C(a);
    if (console.log(`handleOnScrollStop - offset: ${a} fistRow: ${l}, lastRow: ${T}`), P) {
      const R = p(l);
      P(R);
    }
  }, [C, p, P]), { scrollToRow: z } = Qe({
    viewRef: c,
    indicatorRef: U,
    totalHeight: y,
    onScrollUpdate: q,
    onScrollStop: et,
    rowHeight: m
  });
  wt(() => {
    N && (N.current = { scrollToRow: z });
  }, [z, N]);
  const B = 1e3;
  v.current = Math.ceil(B / m) * 3, wt(() => {
    tt();
  });
  const Y = (a) => {
    const l = a.currentTarget, T = parseInt(l.dataset.rowIndex || "-1");
    console.log(`Row ${T} clicked!`), T && A && A(T, N == null ? void 0 : N.current);
  }, x = () => {
    const a = J.current;
    console.log("currentScrollTop", a);
    const { firstRow: l, lastRow: T } = C(a), R = Array.from({ length: v.current }).map((j, b) => {
      const ct = Math.max(0, b * m - a);
      return /* @__PURE__ */ vt(
        "div",
        {
          "data-row-index": b,
          ref: (it) => {
            it && (o.current[b] = it);
          },
          style: {
            height: m,
            position: "absolute",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            transform: `translateY(${ct}px)`
          },
          onDoubleClick: Y
        },
        `prev-${b}`
      );
    }), k = Array.from({ length: T - l + 1 }).map((j, b) => {
      const ct = (l + b) * m - a;
      return /* @__PURE__ */ vt(
        "div",
        {
          "data-row-index": l + b,
          ref: (it) => {
            it && (o.current[l + b] = it);
          },
          style: {
            height: m,
            position: "absolute",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            transform: `translateY(${ct}px)`
          },
          onDoubleClick: Y
        },
        `visible-${l + b}`
      );
    }), nt = Array.from({ length: v.current }).map((j, b) => {
      const ct = (b + (T + 1)) * m - a;
      return /* @__PURE__ */ vt(
        "div",
        {
          "data-row-index": b + (T + 1),
          ref: (it) => {
            it && (o.current[b + (T + 1)] = it);
          },
          style: {
            height: m,
            position: "absolute",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            transform: `translateY(${ct}px)`
          },
          onDoubleClick: Y
        },
        `next-${b}`
      );
    });
    return [...R, ...k, ...nt];
  };
  return console.log("Rendering VirtualList..."), /* @__PURE__ */ We("div", { style: { display: "flex", width: "100%" }, children: [
    /* @__PURE__ */ vt(
      "div",
      {
        ref: c,
        className: `${rr.wrapper}`,
        style: { "--container-height": `${B}px` },
        children: /* @__PURE__ */ vt(
          "div",
          {
            ref: H,
            style: { height: `${y}px`, flexDirection: "column", position: "relative" },
            children: x()
          }
        )
      }
    ),
    /* @__PURE__ */ vt(de, { containerHeight: B, totalHeight: y, ref: U })
  ] });
}
const cr = Ge.memo(ir);
export {
  cr as VirtualList
};
