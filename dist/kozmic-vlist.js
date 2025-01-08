import { jsx as vt, jsxs as We } from "react/jsx-runtime";
import Ge, { useRef as g, useCallback as Z, useEffect as At, forwardRef as ze, useImperativeHandle as $e, useState as Be } from "react";
import je from "react-dom/client";
import './main.css';function Ze(I) {
  return I && I.__esModule && Object.prototype.hasOwnProperty.call(I, "default") ? I.default : I;
}
var $t = { exports: {} };
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
var ve;
function Je() {
  return ve || (ve = 1, function(I) {
    (function(u, d, D, f) {
      var O = ["", "webkit", "Moz", "MS", "ms", "o"], B = d.createElement("div"), R = "function", A = Math.round, E = Math.abs, et = Date.now;
      function G(t, e, r) {
        return setTimeout(w(t, r), e);
      }
      function x(t, e, r) {
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
          var i = new Error("get-stack-trace"), s = i && i.stack ? i.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace", l = u.console && (u.console.warn || u.console.log);
          return l && l.call(u.console, n, s), t.apply(this, arguments);
        };
      }
      var p;
      typeof Object.assign != "function" ? p = function(e) {
        if (e === f || e === null)
          throw new TypeError("Cannot convert undefined or null to object");
        for (var r = Object(e), n = 1; n < arguments.length; n++) {
          var i = arguments[n];
          if (i !== f && i !== null)
            for (var s in i)
              i.hasOwnProperty(s) && (r[s] = i[s]);
        }
        return r;
      } : p = Object.assign;
      var _ = o(function(e, r, n) {
        for (var i = Object.keys(r), s = 0; s < i.length; )
          (!n || n && e[i[s]] === f) && (e[i[s]] = r[i[s]]), s++;
        return e;
      }, "extend", "Use `assign`."), J = o(function(e, r) {
        return _(e, r, !0);
      }, "merge", "Use `assign`.");
      function P(t, e, r) {
        var n = e.prototype, i;
        i = t.prototype = Object.create(n), i.constructor = t, i._super = n, r && p(i, r);
      }
      function w(t, e) {
        return function() {
          return t.apply(e, arguments);
        };
      }
      function H(t, e) {
        return typeof t == R ? t.apply(e && e[0] || f, e) : t;
      }
      function Q(t, e) {
        return t === f ? e : t;
      }
      function h(t, e, r) {
        c(V(e), function(n) {
          t.addEventListener(n, r, !1);
        });
      }
      function v(t, e, r) {
        c(V(e), function(n) {
          t.removeEventListener(n, r, !1);
        });
      }
      function F(t, e) {
        for (; t; ) {
          if (t == e)
            return !0;
          t = t.parentNode;
        }
        return !1;
      }
      function m(t, e) {
        return t.indexOf(e) > -1;
      }
      function V(t) {
        return t.trim().split(/\s+/g);
      }
      function q(t, e, r) {
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
      function ct(t, e, r) {
        for (var n = [], i = [], s = 0; s < t.length; ) {
          var l = t[s][e];
          q(i, l) < 0 && n.push(t[s]), i[s] = l, s++;
        }
        return n = n.sort(function(X, W) {
          return X[e] > W[e];
        }), n;
      }
      function k(t, e) {
        for (var r, n, i = e[0].toUpperCase() + e.slice(1), s = 0; s < O.length; ) {
          if (r = O[s], n = r ? r + i : e, n in t)
            return n;
          s++;
        }
        return f;
      }
      var S = 1;
      function C() {
        return S++;
      }
      function j(t) {
        var e = t.ownerDocument || t;
        return e.defaultView || e.parentWindow || u;
      }
      var a = /mobile|tablet|ip(ad|hone|od)|android/i, T = "ontouchstart" in u, N = k(u, "PointerEvent") !== f, L = T && a.test(navigator.userAgent), U = "touch", it = "pen", rt = "mouse", b = "kinect", pt = 25, y = 1, dt = 2, M = 4, $ = 8, Ct = 1, Et = 2, yt = 4, It = 8, _t = 16, st = Et | yt, Tt = It | _t, Bt = st | Tt, jt = ["x", "y"], Rt = ["clientX", "clientY"];
      function K(t, e) {
        var r = this;
        this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(n) {
          H(t.options.enable, [t]) && r.handler(n);
        }, this.init();
      }
      K.prototype = {
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
          this.evEl && h(this.element, this.evEl, this.domHandler), this.evTarget && h(this.target, this.evTarget, this.domHandler), this.evWin && h(j(this.element), this.evWin, this.domHandler);
        },
        /**
         * unbind the events
         */
        destroy: function() {
          this.evEl && v(this.element, this.evEl, this.domHandler), this.evTarget && v(this.target, this.evTarget, this.domHandler), this.evWin && v(j(this.element), this.evWin, this.domHandler);
        }
      };
      function me(t) {
        var e, r = t.options.inputClass;
        return r ? e = r : N ? e = Ht : L ? e = Dt : T ? e = Ft : e = Mt, new e(t, ge);
      }
      function ge(t, e, r) {
        var n = r.pointers.length, i = r.changedPointers.length, s = e & y && n - i === 0, l = e & (M | $) && n - i === 0;
        r.isFirst = !!s, r.isFinal = !!l, s && (t.session = {}), r.eventType = e, Ee(t, r), t.emit("hammer.input", r), t.recognize(r), t.session.prevInput = r;
      }
      function Ee(t, e) {
        var r = t.session, n = e.pointers, i = n.length;
        r.firstInput || (r.firstInput = Zt(e)), i > 1 && !r.firstMultiple ? r.firstMultiple = Zt(e) : i === 1 && (r.firstMultiple = !1);
        var s = r.firstInput, l = r.firstMultiple, Y = l ? l.center : s.center, X = e.center = Jt(n);
        e.timeStamp = et(), e.deltaTime = e.timeStamp - s.timeStamp, e.angle = Yt(Y, X), e.distance = St(Y, X), ye(r, e), e.offsetDirection = Kt(e.deltaX, e.deltaY);
        var W = Qt(e.deltaTime, e.deltaX, e.deltaY);
        e.overallVelocityX = W.x, e.overallVelocityY = W.y, e.overallVelocity = E(W.x) > E(W.y) ? W.x : W.y, e.scale = l ? Pe(l.pointers, n) : 1, e.rotation = l ? _e(l.pointers, n) : 0, e.maxPointers = r.prevInput ? e.pointers.length > r.prevInput.maxPointers ? e.pointers.length : r.prevInput.maxPointers : e.pointers.length, Ie(r, e);
        var ot = t.element;
        F(e.srcEvent.target, ot) && (ot = e.srcEvent.target), e.target = ot;
      }
      function ye(t, e) {
        var r = e.center, n = t.offsetDelta || {}, i = t.prevDelta || {}, s = t.prevInput || {};
        (e.eventType === y || s.eventType === M) && (i = t.prevDelta = {
          x: s.deltaX || 0,
          y: s.deltaY || 0
        }, n = t.offsetDelta = {
          x: r.x,
          y: r.y
        }), e.deltaX = i.x + (r.x - n.x), e.deltaY = i.y + (r.y - n.y);
      }
      function Ie(t, e) {
        var r = t.lastInterval || e, n = e.timeStamp - r.timeStamp, i, s, l, Y;
        if (e.eventType != $ && (n > pt || r.velocity === f)) {
          var X = e.deltaX - r.deltaX, W = e.deltaY - r.deltaY, ot = Qt(n, X, W);
          s = ot.x, l = ot.y, i = E(ot.x) > E(ot.y) ? ot.x : ot.y, Y = Kt(X, W), t.lastInterval = e;
        } else
          i = r.velocity, s = r.velocityX, l = r.velocityY, Y = r.direction;
        e.velocity = i, e.velocityX = s, e.velocityY = l, e.direction = Y;
      }
      function Zt(t) {
        for (var e = [], r = 0; r < t.pointers.length; )
          e[r] = {
            clientX: A(t.pointers[r].clientX),
            clientY: A(t.pointers[r].clientY)
          }, r++;
        return {
          timeStamp: et(),
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
            x: A(t[0].clientX),
            y: A(t[0].clientY)
          };
        for (var r = 0, n = 0, i = 0; i < e; )
          r += t[i].clientX, n += t[i].clientY, i++;
        return {
          x: A(r / e),
          y: A(n / e)
        };
      }
      function Qt(t, e, r) {
        return {
          x: e / t || 0,
          y: r / t || 0
        };
      }
      function Kt(t, e) {
        return t === e ? Ct : E(t) >= E(e) ? t < 0 ? Et : yt : e < 0 ? It : _t;
      }
      function St(t, e, r) {
        r || (r = jt);
        var n = e[r[0]] - t[r[0]], i = e[r[1]] - t[r[1]];
        return Math.sqrt(n * n + i * i);
      }
      function Yt(t, e, r) {
        r || (r = jt);
        var n = e[r[0]] - t[r[0]], i = e[r[1]] - t[r[1]];
        return Math.atan2(i, n) * 180 / Math.PI;
      }
      function _e(t, e) {
        return Yt(e[1], e[0], Rt) + Yt(t[1], t[0], Rt);
      }
      function Pe(t, e) {
        return St(e[0], e[1], Rt) / St(t[0], t[1], Rt);
      }
      var Ne = {
        mousedown: y,
        mousemove: dt,
        mouseup: M
      }, Oe = "mousedown", Ae = "mousemove mouseup";
      function Mt() {
        this.evEl = Oe, this.evWin = Ae, this.pressed = !1, K.apply(this, arguments);
      }
      P(Mt, K, {
        /**
         * handle mouse events
         * @param {Object} ev
         */
        handler: function(e) {
          var r = Ne[e.type];
          r & y && e.button === 0 && (this.pressed = !0), r & dt && e.which !== 1 && (r = M), this.pressed && (r & M && (this.pressed = !1), this.callback(this.manager, r, {
            pointers: [e],
            changedPointers: [e],
            pointerType: rt,
            srcEvent: e
          }));
        }
      });
      var Ce = {
        pointerdown: y,
        pointermove: dt,
        pointerup: M,
        pointercancel: $,
        pointerout: $
      }, Re = {
        2: U,
        3: it,
        4: rt,
        5: b
        // see https://twitter.com/jacobrossi/status/480596438489890816
      }, te = "pointerdown", ee = "pointermove pointerup pointercancel";
      u.MSPointerEvent && !u.PointerEvent && (te = "MSPointerDown", ee = "MSPointerMove MSPointerUp MSPointerCancel");
      function Ht() {
        this.evEl = te, this.evWin = ee, K.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
      }
      P(Ht, K, {
        /**
         * handle mouse events
         * @param {Object} ev
         */
        handler: function(e) {
          var r = this.store, n = !1, i = e.type.toLowerCase().replace("ms", ""), s = Ce[i], l = Re[e.pointerType] || e.pointerType, Y = l == U, X = q(r, e.pointerId, "pointerId");
          s & y && (e.button === 0 || Y) ? X < 0 && (r.push(e), X = r.length - 1) : s & (M | $) && (n = !0), !(X < 0) && (r[X] = e, this.callback(this.manager, s, {
            pointers: r,
            changedPointers: [e],
            pointerType: l,
            srcEvent: e
          }), n && r.splice(X, 1));
        }
      });
      var Se = {
        touchstart: y,
        touchmove: dt,
        touchend: M,
        touchcancel: $
      }, Me = "touchstart", De = "touchstart touchmove touchend touchcancel";
      function re() {
        this.evTarget = Me, this.evWin = De, this.started = !1, K.apply(this, arguments);
      }
      P(re, K, {
        handler: function(e) {
          var r = Se[e.type];
          if (r === y && (this.started = !0), !!this.started) {
            var n = xe.call(this, e, r);
            r & (M | $) && n[0].length - n[1].length === 0 && (this.started = !1), this.callback(this.manager, r, {
              pointers: n[0],
              changedPointers: n[1],
              pointerType: U,
              srcEvent: e
            });
          }
        }
      });
      function xe(t, e) {
        var r = z(t.touches), n = z(t.changedTouches);
        return e & (M | $) && (r = ct(r.concat(n), "identifier")), [r, n];
      }
      var be = {
        touchstart: y,
        touchmove: dt,
        touchend: M,
        touchcancel: $
      }, we = "touchstart touchmove touchend touchcancel";
      function Dt() {
        this.evTarget = we, this.targetIds = {}, K.apply(this, arguments);
      }
      P(Dt, K, {
        handler: function(e) {
          var r = be[e.type], n = Le.call(this, e, r);
          n && this.callback(this.manager, r, {
            pointers: n[0],
            changedPointers: n[1],
            pointerType: U,
            srcEvent: e
          });
        }
      });
      function Le(t, e) {
        var r = z(t.touches), n = this.targetIds;
        if (e & (y | dt) && r.length === 1)
          return n[r[0].identifier] = !0, [r, r];
        var i, s, l = z(t.changedTouches), Y = [], X = this.target;
        if (s = r.filter(function(W) {
          return F(W.target, X);
        }), e === y)
          for (i = 0; i < s.length; )
            n[s[i].identifier] = !0, i++;
        for (i = 0; i < l.length; )
          n[l[i].identifier] && Y.push(l[i]), e & (M | $) && delete n[l[i].identifier], i++;
        if (Y.length)
          return [
            // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
            ct(s.concat(Y), "identifier"),
            Y
          ];
      }
      var Ue = 2500, ne = 25;
      function Ft() {
        K.apply(this, arguments);
        var t = w(this.handler, this);
        this.touch = new Dt(this.manager, t), this.mouse = new Mt(this.manager, t), this.primaryTouch = null, this.lastTouches = [];
      }
      P(Ft, K, {
        /**
         * handle mouse and touch events
         * @param {Hammer} manager
         * @param {String} inputEvent
         * @param {Object} inputData
         */
        handler: function(e, r, n) {
          var i = n.pointerType == U, s = n.pointerType == rt;
          if (!(s && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
            if (i)
              Ye.call(this, r, n);
            else if (s && He.call(this, n))
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
        t & y ? (this.primaryTouch = e.changedPointers[0].identifier, ie.call(this, e)) : t & (M | $) && ie.call(this, e);
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
      function He(t) {
        for (var e = t.srcEvent.clientX, r = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
          var i = this.lastTouches[n], s = Math.abs(e - i.x), l = Math.abs(r - i.y);
          if (s <= ne && l <= ne)
            return !0;
        }
        return !1;
      }
      var se = k(B.style, "touchAction"), ae = se !== f, oe = "compute", ce = "auto", Xt = "manipulation", mt = "none", Pt = "pan-x", Nt = "pan-y", xt = Xe();
      function Vt(t, e) {
        this.manager = t, this.set(e);
      }
      Vt.prototype = {
        /**
         * set the touchAction value on the element or enable the polyfill
         * @param {String} value
         */
        set: function(t) {
          t == oe && (t = this.compute()), ae && this.manager.element.style && xt[t] && (this.manager.element.style[se] = t), this.actions = t.toLowerCase().trim();
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
            H(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()));
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
          var n = this.actions, i = m(n, mt) && !xt[mt], s = m(n, Nt) && !xt[Nt], l = m(n, Pt) && !xt[Pt];
          if (i) {
            var Y = t.pointers.length === 1, X = t.distance < 2, W = t.deltaTime < 250;
            if (Y && X && W)
              return;
          }
          if (!(l && s) && (i || s && r & st || l && r & Tt))
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
        if (m(t, mt))
          return mt;
        var e = m(t, Pt), r = m(t, Nt);
        return e && r ? mt : e || r ? e ? Pt : Nt : m(t, Xt) ? Xt : ce;
      }
      function Xe() {
        if (!ae)
          return !1;
        var t = {}, e = u.CSS && u.CSS.supports;
        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(r) {
          t[r] = e ? u.CSS.supports("touch-action", r) : !0;
        }), t;
      }
      var bt = 1, tt = 2, gt = 4, ht = 8, lt = ht, Ot = 16, at = 32;
      function ut(t) {
        this.options = p({}, this.defaults, t || {}), this.id = C(), this.manager = null, this.options.enable = Q(this.options.enable, !0), this.state = bt, this.simultaneous = {}, this.requireFail = [];
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
          return p(this.options, t), this.manager && this.manager.touchAction.update(), this;
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
          return t = wt(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this;
        },
        /**
         * drop the simultaneous link. it doesnt remove the link on the other recognizer.
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        dropRecognizeWith: function(t) {
          return x(t, "dropRecognizeWith", this) ? this : (t = wt(t, this), delete this.simultaneous[t.id], this);
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
          return t = wt(t, this), q(e, t) === -1 && (e.push(t), t.requireFailure(this)), this;
        },
        /**
         * drop the requireFailure link. it does not remove the link on the other recognizer.
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        dropRequireFailure: function(t) {
          if (x(t, "dropRequireFailure", this))
            return this;
          t = wt(t, this);
          var e = q(this.requireFail, t);
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
          r < ht && n(e.options.event + le(r)), n(e.options.event), t.additionalEvent && n(t.additionalEvent), r >= ht && n(e.options.event + le(r));
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
            if (!(this.requireFail[t].state & (at | bt)))
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
          var e = p({}, t);
          if (!H(this.options.enable, [this, e])) {
            this.reset(), this.state = at;
            return;
          }
          this.state & (lt | Ot | at) && (this.state = bt), this.state = this.process(e), this.state & (tt | gt | ht | Ot) && this.tryEmit(e);
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
        return t & Ot ? "cancel" : t & ht ? "end" : t & gt ? "move" : t & tt ? "start" : "";
      }
      function ue(t) {
        return t == _t ? "down" : t == It ? "up" : t == Et ? "left" : t == yt ? "right" : "";
      }
      function wt(t, e) {
        var r = e.manager;
        return r ? r.get(t) : t;
      }
      function nt() {
        ut.apply(this, arguments);
      }
      P(nt, ut, {
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
          var e = this.state, r = t.eventType, n = e & (tt | gt), i = this.attrTest(t);
          return n && (r & $ || !i) ? e | Ot : n || i ? r & M ? e | ht : e & tt ? e | gt : tt : at;
        }
      });
      function Lt() {
        nt.apply(this, arguments), this.pX = null, this.pY = null;
      }
      P(Lt, nt, {
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
          return t & st && e.push(Nt), t & Tt && e.push(Pt), e;
        },
        directionTest: function(t) {
          var e = this.options, r = !0, n = t.distance, i = t.direction, s = t.deltaX, l = t.deltaY;
          return i & e.direction || (e.direction & st ? (i = s === 0 ? Ct : s < 0 ? Et : yt, r = s != this.pX, n = Math.abs(t.deltaX)) : (i = l === 0 ? Ct : l < 0 ? It : _t, r = l != this.pY, n = Math.abs(t.deltaY))), t.direction = i, r && n > e.threshold && i & e.direction;
        },
        attrTest: function(t) {
          return nt.prototype.attrTest.call(this, t) && (this.state & tt || !(this.state & tt) && this.directionTest(t));
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
      P(qt, nt, {
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
          return [mt];
        },
        attrTest: function(t) {
          return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & tt);
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
        ut.apply(this, arguments), this._timer = null, this._input = null;
      }
      P(kt, ut, {
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
          if (this._input = t, !n || !r || t.eventType & (M | $) && !i)
            this.reset();
          else if (t.eventType & y)
            this.reset(), this._timer = G(function() {
              this.state = lt, this.tryEmit();
            }, e.time, this);
          else if (t.eventType & M)
            return lt;
          return at;
        },
        reset: function() {
          clearTimeout(this._timer);
        },
        emit: function(t) {
          this.state === lt && (t && t.eventType & M ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = et(), this.manager.emit(this.options.event, this._input)));
        }
      });
      function Wt() {
        nt.apply(this, arguments);
      }
      P(Wt, nt, {
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
          return [mt];
        },
        attrTest: function(t) {
          return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & tt);
        }
      });
      function Gt() {
        nt.apply(this, arguments);
      }
      P(Gt, nt, {
        /**
         * @namespace
         * @memberof SwipeRecognizer
         */
        defaults: {
          event: "swipe",
          threshold: 10,
          velocity: 0.3,
          direction: st | Tt,
          pointers: 1
        },
        getTouchAction: function() {
          return Lt.prototype.getTouchAction.call(this);
        },
        attrTest: function(t) {
          var e = this.options.direction, r;
          return e & (st | Tt) ? r = t.overallVelocity : e & st ? r = t.overallVelocityX : e & Tt && (r = t.overallVelocityY), this._super.attrTest.call(this, t) && e & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && E(r) > this.options.velocity && t.eventType & M;
        },
        emit: function(t) {
          var e = ue(t.offsetDirection);
          e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t);
        }
      });
      function Ut() {
        ut.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
      }
      P(Ut, ut, {
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
          if (this.reset(), t.eventType & y && this.count === 0)
            return this.failTimeout();
          if (n && i && r) {
            if (t.eventType != M)
              return this.failTimeout();
            var s = this.pTime ? t.timeStamp - this.pTime < e.interval : !0, l = !this.pCenter || St(this.pCenter, t.center) < e.posThreshold;
            this.pTime = t.timeStamp, this.pCenter = t.center, !l || !s ? this.count = 1 : this.count += 1, this._input = t;
            var Y = this.count % e.taps;
            if (Y === 0)
              return this.hasRequireFailures() ? (this._timer = G(function() {
                this.state = lt, this.tryEmit();
              }, e.interval, this), tt) : lt;
          }
          return at;
        },
        failTimeout: function() {
          return this._timer = G(function() {
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
        return e = e || {}, e.recognizers = Q(e.recognizers, ft.defaults.preset), new zt(t, e);
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
          [Gt, { direction: st }],
          [Lt, { direction: st }, ["swipe"]],
          [Ut],
          [Ut, { event: "doubletap", taps: 2 }, ["tap"]],
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
        this.options = p({}, ft.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = me(this), this.touchAction = new Vt(this, this.options.touchAction), fe(this, !0), c(this.options.recognizers, function(r) {
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
          return p(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this;
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
            (!i || i && i.state & lt) && (i = e.curRecognizer = null);
            for (var s = 0; s < n.length; )
              r = n[s], e.stopped !== he && // 1
              (!i || r == i || // 2
              r.canRecognizeWith(i)) ? r.recognize(t) : r.reset(), !i && r.state & (tt | gt | ht) && (i = e.curRecognizer = r), s++;
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
            var e = this.recognizers, r = q(e, t);
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
            return c(V(t), function(n) {
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
            return c(V(t), function(n) {
              e ? r[n] && r[n].splice(q(r[n], e), 1) : delete r[n];
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
          c(t.options.cssProps, function(i, s) {
            n = k(r.style, s), e ? (t.oldCssProps[n] = r.style[n], r.style[n] = i) : r.style[n] = t.oldCssProps[n] || "";
          }), e || (t.oldCssProps = {});
        }
      }
      function qe(t, e) {
        var r = d.createEvent("Event");
        r.initEvent(t, !0, !0), r.gesture = e, e.target.dispatchEvent(r);
      }
      p(ft, {
        INPUT_START: y,
        INPUT_MOVE: dt,
        INPUT_END: M,
        INPUT_CANCEL: $,
        STATE_POSSIBLE: bt,
        STATE_BEGAN: tt,
        STATE_CHANGED: gt,
        STATE_ENDED: ht,
        STATE_RECOGNIZED: lt,
        STATE_CANCELLED: Ot,
        STATE_FAILED: at,
        DIRECTION_NONE: Ct,
        DIRECTION_LEFT: Et,
        DIRECTION_RIGHT: yt,
        DIRECTION_UP: It,
        DIRECTION_DOWN: _t,
        DIRECTION_HORIZONTAL: st,
        DIRECTION_VERTICAL: Tt,
        DIRECTION_ALL: Bt,
        Manager: zt,
        Input: K,
        TouchAction: Vt,
        TouchInput: Dt,
        MouseInput: Mt,
        PointerEventInput: Ht,
        TouchMouseInput: Ft,
        SingleTouchInput: re,
        Recognizer: ut,
        AttrRecognizer: nt,
        Tap: Ut,
        Pan: Lt,
        Swipe: Gt,
        Pinch: qt,
        Rotate: Wt,
        Press: kt,
        on: h,
        off: v,
        each: c,
        merge: J,
        extend: _,
        assign: p,
        inherit: P,
        bindFn: w,
        prefixed: k
      });
      var ke = typeof u < "u" ? u : typeof self < "u" ? self : {};
      ke.Hammer = ft, I.exports ? I.exports = ft : u[D] = ft;
    })(window, document, "Hammer");
  }($t)), $t.exports;
}
var Qe = Je();
const pe = /* @__PURE__ */ Ze(Qe), Ke = ({
  viewRef: I,
  indicatorRef: u,
  totalHeight: d,
  onScrollUpdate: D,
  onScrollStop: f,
  rowHeight: O,
  debug: B = !1
}) => {
  const R = g(0), A = g(!1), E = g(0), et = g(0), G = g(0), x = g(0), c = g(0), o = g(0), p = g(0), _ = g(null), J = g(325), P = g(0.02), w = g(0.5), H = Z((...h) => {
    B && console.log(...h);
  }, [B]);
  At(() => {
    const h = I.current, v = u.current;
    if (h) {
      const F = h.parentElement, m = F ? F.getBoundingClientRect().height : window.innerHeight;
      G.current = d - m;
      const V = (S) => {
        const C = Math.max(et.current, Math.min(S, G.current));
        R.current = C, h.scrollTop = C, v == null || v.setPosition(C), D(C);
      }, q = () => {
        const S = Date.now(), C = S - p.current;
        p.current = S;
        const j = R.current - o.current;
        o.current = R.current;
        const a = 1e3 * j / (1 + C);
        x.current = 0.8 * a + 0.2 * x.current;
      }, z = () => {
        const S = Date.now() - p.current, C = -c.current * Math.exp(-S / J.current);
        if (Math.abs(x.current) > P.current && Math.abs(C) > w.current)
          V(o.current + C), requestAnimationFrame(z);
        else {
          const a = Math.round(o.current / O) * O;
          V(a), f(a);
        }
      }, ct = () => {
        if (A.current = !1, _.current && clearInterval(_.current), Math.abs(x.current) > P.current) {
          c.current = 0.8 * x.current, o.current = Math.round(R.current + c.current);
          const S = 50;
          o.current = Math.round(o.current / S) * S, o.current = Math.max(et.current, Math.min(o.current, G.current)), p.current = Date.now(), requestAnimationFrame(z);
        } else {
          H("No momentum scrolling as velocity is too low.");
          const S = O / 2;
          let C;
          R.current % O < S ? C = Math.floor(R.current / O) : C = Math.ceil(R.current / O);
          const j = C * O;
          V(j), f(j);
        }
      }, k = new pe(h);
      return k.get("pan").set({ direction: pe.DIRECTION_VERTICAL }), k.on("panstart", (S) => {
        A.current = !0, E.current = S.center.y, x.current = c.current = 0, o.current = R.current, p.current = Date.now(), _.current && clearInterval(_.current), _.current = setInterval(q, 50);
      }), k.on("panmove", (S) => {
        if (A.current) {
          const C = S.center.y, j = E.current - C;
          E.current = C, Math.abs(j) > 1 && V(R.current + j);
        }
      }), k.on("panend", ct), () => {
        k.off("panstart", ct), k.off("panmove", ct), k.off("panend", ct), k.destroy();
      };
    }
  }, [I, d, D, f, u, H, O]);
  const Q = Z((h) => {
    const v = h * O, F = I.current, m = u.current;
    m == null || m.setPosition(v), F && (F.scrollTo({ top: v, behavior: "smooth" }), R.current = v), D(v);
    const V = () => {
      var z;
      ((z = I.current) == null ? void 0 : z.scrollTop) === v ? f(v) : requestAnimationFrame(V);
    };
    requestAnimationFrame(V);
  }, [O, I, u, D, f]);
  return {
    offset: R.current,
    scrollToRow: Q
  };
}, tr = "_container_100u3_1", er = "_thumb_100u3_6", de = {
  container: tr,
  thumb: er
}, Te = ze((I, u) => {
  const D = g(null), f = g(null), { "aria-label": O, containerHeight: B, totalHeight: R, show: A = !0 } = I;
  return $e(u, () => ({
    setPosition: (E) => {
      D.current && (D.current.style.top = `${E * (B - 25) / R}px`);
    }
  })), /* @__PURE__ */ vt(
    "div",
    {
      "aria-label": O,
      ref: f,
      className: de.container,
      style: { display: A ? "block" : "none" },
      children: /* @__PURE__ */ vt(
        "div",
        {
          className: de.thumb,
          style: { "--thumb-height": "25px" },
          ref: D
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
  fetchPageData: I,
  onCellContentUpdated: u,
  rowsPerPage: d = 100
}) {
  const D = g({
    previousPage: { data: [], pageNumber: null },
    visiblePage: { data: [], pageNumber: null },
    nextPage: { data: [], pageNumber: null }
  }), f = g(null), O = g(!1), B = g(null), R = Z(
    async (c) => {
      if (c < 1 || O.current)
        return [];
      try {
        return O.current = !0, await I(c);
      } catch (o) {
        return console.error("Error fetching page data:", o), [];
      } finally {
        O.current = !1, u && u();
      }
    },
    [I, u]
  ), A = Z(
    (c) => {
      const o = Math.floor(c / d) + 1;
      f.current = o;
      const { nextPage: p, visiblePage: _, previousPage: J } = D.current;
      J.data.length === 0 && console.log("Prev page is Empty!"), p.data.length === 0 && console.log("Next page is Empty!"), _.data.length === 0 && console.log("Visible page is Empty!"), u && u();
    },
    [u, d]
  ), E = Z(
    async (c) => {
      const o = D.current, p = c - 1, _ = c + 1, { previousPage: J, visiblePage: P, nextPage: w } = o, H = (h) => {
        const v = [J, P, w].find(
          (F) => F.pageNumber === h
        );
        return v ? { ...v, data: [...v.data] } : null;
      }, Q = async (h, v) => {
        const F = H(h);
        if (F)
          return v(F), !1;
        {
          const m = await R(h);
          return v({ data: m, pageNumber: h }), !0;
        }
      };
      try {
        let h = !1;
        o.visiblePage.pageNumber !== c && (h = await Q(
          c,
          (m) => o.visiblePage = m
        ));
        const v = [];
        o.previousPage.pageNumber !== p && c > 1 && v.push(
          Q(p, (m) => o.previousPage = m)
        ), o.nextPage.pageNumber !== _ && v.push(
          Q(_, (m) => o.nextPage = m)
        ), (await Promise.all(v)).includes(!0) && (h = !0), h && u && u();
      } catch (h) {
        console.error("Error while fetching pages in parallel:", h);
      }
    },
    [R, u]
  ), et = Z(
    (c) => {
      B.current && clearTimeout(B.current), B.current = setTimeout(() => {
        A(c);
      }, 100);
    },
    [A]
  ), G = Z(
    async (c) => {
      if (O.current)
        return;
      const o = Math.floor(c / d) + 1;
      if (o === f.current) {
        et(c);
        return;
      }
      if (f.current === null) {
        f.current = o, await E(o), A(c);
        return;
      }
      await E(o), D.current.visiblePage.pageNumber === o && A(c);
    },
    [et, d, A, E]
  ), x = (c) => {
    const o = Math.floor(c / d) + 1, p = c % d, { previousPage: _, visiblePage: J, nextPage: P } = D.current, w = f.current;
    let H;
    switch (o) {
      case w - 1:
        H = _.data;
        break;
      case w:
        H = J.data;
        break;
      case w + 1:
        H = P.data;
        break;
      default:
        return { title: "Loading..." };
    }
    return (H == null ? void 0 : H[p]) ?? { title: "Loading..." };
  };
  return At(() => {
    f.current === null && G(1);
  }, [G]), { getRowData: x, updateAndSyncCache: G };
}
function sr({
  rowCount: I,
  fetchPageData: u,
  rowHeight: d = 50,
  onEndReached: D,
  loadMoreThreshold: f = 10,
  rowsPerPage: O,
  renderCell: B,
  onRowDoubleClick: R,
  onTopRowChanged: A,
  apiRef: E,
  hideVerticalScrollbar: et = !1,
  debug: G = !1
}) {
  const x = g(null), c = g(null), o = g(null), p = g([]), _ = g(0), J = g(0), P = g(0), [w, H] = Be(800), Q = I * d, h = Z((...a) => {
    G && console.log(...a);
  }, [G]), v = Z((a, T, N) => {
    const L = document.createElement("div"), U = je.createRoot(L);
    L.style.width = "100%", L.style.height = "100%", U.render(B(T, N)), a.innerHTML = "", a.appendChild(L);
  }, [B]), F = () => {
    p.current.forEach(async (a) => {
      var T;
      if (a) {
        const N = parseInt(((T = a.dataset) == null ? void 0 : T.rowIndex) || "0", 10);
        if (!a.textContent || a.textContent.indexOf("Loading...") !== -1) {
          const U = await m(N);
          U && v(a, U, N);
        }
      }
    });
  }, { getRowData: m, updateAndSyncCache: V } = ir({
    fetchPageData: u,
    onCellContentUpdated: F,
    rowsPerPage: O
  }), q = Z((a) => {
    const T = Math.floor(w / d), L = Math.max(0, Math.floor((a + 5) / d)), U = Math.min(I - 1, L + T - 1);
    return h(`scrollTop: ${a}, firstRow: ${L}, lastRow: ${U}`), { firstRow: L, lastRow: U };
  }, [h, I, d, w]), z = Z(async (a, T) => {
    T.dataset.rowIndex = a.toString(), T.innerHTML = "Loading...";
    const N = await m(a);
    v(T, N, a), T.style.transform = `translateY(${a * d}px)`;
  }, [m, v, d]), ct = Z((a) => {
    h(`Handling scroll with scrollTop: ${a}`);
    const { firstRow: T, lastRow: N } = q(a);
    V(T), h(`Visible rows from ${T} to ${N}`), p.current.forEach((L) => {
      var U;
      if (L) {
        const it = parseInt(((U = L.dataset) == null ? void 0 : U.rowIndex) || "0", 10);
        if (it < T - _.current / 3) {
          const rt = J.current, b = it + _.current;
          J.current = Math.max(rt + 1, N), h(`Recycling row ${it} to new row ${b} (scrolling down).`), z(b, L);
        } else if (it > N + _.current / 3) {
          const rt = it - _.current;
          h(`Recycling row ${it} to new row ${rt} (scrolling up).`), z(rt, L);
        }
      }
    }), x.current && x.current.scrollHeight - a - w < f && (h("End of scroll reached, triggering onEndReached."), D && D());
  }, [q, z, f, h, D, V, w]), k = Z((a) => {
    P.current = a;
    const { firstRow: T } = q(a);
    if (A) {
      const N = m(T);
      A(N);
    }
  }, [q, m, A]), { scrollToRow: S } = Ke({
    viewRef: o,
    indicatorRef: c,
    totalHeight: Q,
    onScrollUpdate: ct,
    onScrollStop: k,
    rowHeight: d
  });
  At(() => {
    E && (E.current = { scrollToRow: S });
  }, [S, E]), At(() => {
    const a = () => {
      o.current && H(o.current.clientHeight);
    };
    return a(), window.addEventListener("resize", a), () => window.removeEventListener("resize", a);
  }, []), _.current = Math.ceil(w / d) * 3, At(() => {
    F();
  });
  const C = (a) => {
    const T = a.currentTarget, N = parseInt(T.dataset.rowIndex || "-1");
    N && R && R(N, E == null ? void 0 : E.current);
  }, j = () => {
    const a = P.current, { firstRow: T, lastRow: N } = q(a), L = Array.from({ length: _.current }).map((rt, b) => {
      const pt = Math.max(0, b * d - a);
      return /* @__PURE__ */ vt(
        "div",
        {
          "data-row-index": b,
          ref: (y) => {
            y && (p.current[b] = y);
          },
          style: {
            height: d,
            position: "absolute",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            transform: `translateY(${pt}px)`
          },
          onDoubleClick: C
        },
        `prev-${b}`
      );
    }), U = Array.from({ length: N - T + 1 }).map((rt, b) => {
      const pt = (T + b) * d - a;
      return /* @__PURE__ */ vt(
        "div",
        {
          "data-row-index": T + b,
          ref: (y) => {
            y && (p.current[T + b] = y);
          },
          style: {
            height: d,
            position: "absolute",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            transform: `translateY(${pt}px)`
          },
          onDoubleClick: C
        },
        `visible-${T + b}`
      );
    }), it = Array.from({ length: _.current }).map((rt, b) => {
      const pt = (b + (N + 1)) * d - a;
      return /* @__PURE__ */ vt(
        "div",
        {
          "data-row-index": b + (N + 1),
          ref: (y) => {
            y && (p.current[b + (N + 1)] = y);
          },
          style: {
            height: d,
            position: "absolute",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            transform: `translateY(${pt}px)`
          },
          onDoubleClick: C
        },
        `next-${b}`
      );
    });
    return [...L, ...U, ...it];
  };
  return /* @__PURE__ */ We("div", { style: { display: "flex", width: "100%", height: "100%" }, children: [
    /* @__PURE__ */ vt(
      "div",
      {
        ref: o,
        className: `${nr.wrapper}`,
        children: /* @__PURE__ */ vt(
          "div",
          {
            ref: x,
            style: { height: `${Q}px`, flexDirection: "column", position: "relative" },
            children: j()
          }
        )
      }
    ),
    /* @__PURE__ */ vt(Te, { show: !et, containerHeight: w, totalHeight: Q, ref: c })
  ] });
}
const lr = Ge.memo(sr);
export {
  lr as VirtualList
};
