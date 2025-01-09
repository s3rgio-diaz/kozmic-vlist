import { jsx as vt, jsxs as We } from "react/jsx-runtime";
import Ge, { useRef as E, useCallback as Z, useEffect as At, forwardRef as ze, useImperativeHandle as $e, useState as Be } from "react";
import je from "react-dom/client";
import './main.css';function Ze(g) {
  return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
}
var $t = { exports: {} };
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
var ve;
function Je() {
  return ve || (ve = 1, function(g) {
    (function(u, v, P, f) {
      var C = ["", "webkit", "Moz", "MS", "ms", "o"], B = v.createElement("div"), R = "function", y = Math.round, I = Math.abs, et = Date.now;
      function G(t, e, r) {
        return setTimeout(w(t, r), e);
      }
      function b(t, e, r) {
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
      var d;
      typeof Object.assign != "function" ? d = function(e) {
        if (e === f || e === null)
          throw new TypeError("Cannot convert undefined or null to object");
        for (var r = Object(e), n = 1; n < arguments.length; n++) {
          var i = arguments[n];
          if (i !== f && i !== null)
            for (var s in i)
              i.hasOwnProperty(s) && (r[s] = i[s]);
        }
        return r;
      } : d = Object.assign;
      var N = o(function(e, r, n) {
        for (var i = Object.keys(r), s = 0; s < i.length; )
          (!n || n && e[i[s]] === f) && (e[i[s]] = r[i[s]]), s++;
        return e;
      }, "extend", "Use `assign`."), J = o(function(e, r) {
        return N(e, r, !0);
      }, "merge", "Use `assign`.");
      function O(t, e, r) {
        var n = e.prototype, i;
        i = t.prototype = Object.create(n), i.constructor = t, i._super = n, r && d(i, r);
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
      function p(t, e, r) {
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
      function k(t, e, r) {
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
          k(i, l) < 0 && n.push(t[s]), i[s] = l, s++;
        }
        return n = n.sort(function(X, W) {
          return X[e] > W[e];
        }), n;
      }
      function q(t, e) {
        for (var r, n, i = e[0].toUpperCase() + e.slice(1), s = 0; s < C.length; ) {
          if (r = C[s], n = r ? r + i : e, n in t)
            return n;
          s++;
        }
        return f;
      }
      var M = 1;
      function S() {
        return M++;
      }
      function j(t) {
        var e = t.ownerDocument || t;
        return e.defaultView || e.parentWindow || u;
      }
      var a = /mobile|tablet|ip(ad|hone|od)|android/i, T = "ontouchstart" in u, A = q(u, "PointerEvent") !== f, L = T && a.test(navigator.userAgent), U = "touch", it = "pen", rt = "mouse", x = "kinect", pt = 25, _ = 1, dt = 2, D = 4, $ = 8, Ct = 1, Et = 2, yt = 4, It = 8, _t = 16, st = Et | yt, mt = It | _t, Bt = st | mt, jt = ["x", "y"], St = ["clientX", "clientY"];
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
          this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(j(this.element), this.evWin, this.domHandler);
        }
      };
      function Te(t) {
        var e, r = t.options.inputClass;
        return r ? e = r : A ? e = Ht : L ? e = Dt : T ? e = Ft : e = Mt, new e(t, ge);
      }
      function ge(t, e, r) {
        var n = r.pointers.length, i = r.changedPointers.length, s = e & _ && n - i === 0, l = e & (D | $) && n - i === 0;
        r.isFirst = !!s, r.isFinal = !!l, s && (t.session = {}), r.eventType = e, Ee(t, r), t.emit("hammer.input", r), t.recognize(r), t.session.prevInput = r;
      }
      function Ee(t, e) {
        var r = t.session, n = e.pointers, i = n.length;
        r.firstInput || (r.firstInput = Zt(e)), i > 1 && !r.firstMultiple ? r.firstMultiple = Zt(e) : i === 1 && (r.firstMultiple = !1);
        var s = r.firstInput, l = r.firstMultiple, Y = l ? l.center : s.center, X = e.center = Jt(n);
        e.timeStamp = et(), e.deltaTime = e.timeStamp - s.timeStamp, e.angle = Yt(Y, X), e.distance = Rt(Y, X), ye(r, e), e.offsetDirection = Kt(e.deltaX, e.deltaY);
        var W = Qt(e.deltaTime, e.deltaX, e.deltaY);
        e.overallVelocityX = W.x, e.overallVelocityY = W.y, e.overallVelocity = I(W.x) > I(W.y) ? W.x : W.y, e.scale = l ? Pe(l.pointers, n) : 1, e.rotation = l ? _e(l.pointers, n) : 0, e.maxPointers = r.prevInput ? e.pointers.length > r.prevInput.maxPointers ? e.pointers.length : r.prevInput.maxPointers : e.pointers.length, Ie(r, e);
        var ot = t.element;
        F(e.srcEvent.target, ot) && (ot = e.srcEvent.target), e.target = ot;
      }
      function ye(t, e) {
        var r = e.center, n = t.offsetDelta || {}, i = t.prevDelta || {}, s = t.prevInput || {};
        (e.eventType === _ || s.eventType === D) && (i = t.prevDelta = {
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
          s = ot.x, l = ot.y, i = I(ot.x) > I(ot.y) ? ot.x : ot.y, Y = Kt(X, W), t.lastInterval = e;
        } else
          i = r.velocity, s = r.velocityX, l = r.velocityY, Y = r.direction;
        e.velocity = i, e.velocityX = s, e.velocityY = l, e.direction = Y;
      }
      function Zt(t) {
        for (var e = [], r = 0; r < t.pointers.length; )
          e[r] = {
            clientX: y(t.pointers[r].clientX),
            clientY: y(t.pointers[r].clientY)
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
            x: y(t[0].clientX),
            y: y(t[0].clientY)
          };
        for (var r = 0, n = 0, i = 0; i < e; )
          r += t[i].clientX, n += t[i].clientY, i++;
        return {
          x: y(r / e),
          y: y(n / e)
        };
      }
      function Qt(t, e, r) {
        return {
          x: e / t || 0,
          y: r / t || 0
        };
      }
      function Kt(t, e) {
        return t === e ? Ct : I(t) >= I(e) ? t < 0 ? Et : yt : e < 0 ? It : _t;
      }
      function Rt(t, e, r) {
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
        return Yt(e[1], e[0], St) + Yt(t[1], t[0], St);
      }
      function Pe(t, e) {
        return Rt(e[0], e[1], St) / Rt(t[0], t[1], St);
      }
      var Ne = {
        mousedown: _,
        mousemove: dt,
        mouseup: D
      }, Oe = "mousedown", Ae = "mousemove mouseup";
      function Mt() {
        this.evEl = Oe, this.evWin = Ae, this.pressed = !1, K.apply(this, arguments);
      }
      O(Mt, K, {
        /**
         * handle mouse events
         * @param {Object} ev
         */
        handler: function(e) {
          var r = Ne[e.type];
          r & _ && e.button === 0 && (this.pressed = !0), r & dt && e.which !== 1 && (r = D), this.pressed && (r & D && (this.pressed = !1), this.callback(this.manager, r, {
            pointers: [e],
            changedPointers: [e],
            pointerType: rt,
            srcEvent: e
          }));
        }
      });
      var Ce = {
        pointerdown: _,
        pointermove: dt,
        pointerup: D,
        pointercancel: $,
        pointerout: $
      }, Se = {
        2: U,
        3: it,
        4: rt,
        5: x
        // see https://twitter.com/jacobrossi/status/480596438489890816
      }, te = "pointerdown", ee = "pointermove pointerup pointercancel";
      u.MSPointerEvent && !u.PointerEvent && (te = "MSPointerDown", ee = "MSPointerMove MSPointerUp MSPointerCancel");
      function Ht() {
        this.evEl = te, this.evWin = ee, K.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
      }
      O(Ht, K, {
        /**
         * handle mouse events
         * @param {Object} ev
         */
        handler: function(e) {
          var r = this.store, n = !1, i = e.type.toLowerCase().replace("ms", ""), s = Ce[i], l = Se[e.pointerType] || e.pointerType, Y = l == U, X = k(r, e.pointerId, "pointerId");
          s & _ && (e.button === 0 || Y) ? X < 0 && (r.push(e), X = r.length - 1) : s & (D | $) && (n = !0), !(X < 0) && (r[X] = e, this.callback(this.manager, s, {
            pointers: r,
            changedPointers: [e],
            pointerType: l,
            srcEvent: e
          }), n && r.splice(X, 1));
        }
      });
      var Re = {
        touchstart: _,
        touchmove: dt,
        touchend: D,
        touchcancel: $
      }, Me = "touchstart", De = "touchstart touchmove touchend touchcancel";
      function re() {
        this.evTarget = Me, this.evWin = De, this.started = !1, K.apply(this, arguments);
      }
      O(re, K, {
        handler: function(e) {
          var r = Re[e.type];
          if (r === _ && (this.started = !0), !!this.started) {
            var n = be.call(this, e, r);
            r & (D | $) && n[0].length - n[1].length === 0 && (this.started = !1), this.callback(this.manager, r, {
              pointers: n[0],
              changedPointers: n[1],
              pointerType: U,
              srcEvent: e
            });
          }
        }
      });
      function be(t, e) {
        var r = z(t.touches), n = z(t.changedTouches);
        return e & (D | $) && (r = ct(r.concat(n), "identifier")), [r, n];
      }
      var xe = {
        touchstart: _,
        touchmove: dt,
        touchend: D,
        touchcancel: $
      }, we = "touchstart touchmove touchend touchcancel";
      function Dt() {
        this.evTarget = we, this.targetIds = {}, K.apply(this, arguments);
      }
      O(Dt, K, {
        handler: function(e) {
          var r = xe[e.type], n = Le.call(this, e, r);
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
        if (e & (_ | dt) && r.length === 1)
          return n[r[0].identifier] = !0, [r, r];
        var i, s, l = z(t.changedTouches), Y = [], X = this.target;
        if (s = r.filter(function(W) {
          return F(W.target, X);
        }), e === _)
          for (i = 0; i < s.length; )
            n[s[i].identifier] = !0, i++;
        for (i = 0; i < l.length; )
          n[l[i].identifier] && Y.push(l[i]), e & (D | $) && delete n[l[i].identifier], i++;
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
      O(Ft, K, {
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
        t & _ ? (this.primaryTouch = e.changedPointers[0].identifier, ie.call(this, e)) : t & (D | $) && ie.call(this, e);
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
      var se = q(B.style, "touchAction"), ae = se !== f, oe = "compute", ce = "auto", Xt = "manipulation", Tt = "none", Pt = "pan-x", Nt = "pan-y", bt = Xe();
      function Vt(t, e) {
        this.manager = t, this.set(e);
      }
      Vt.prototype = {
        /**
         * set the touchAction value on the element or enable the polyfill
         * @param {String} value
         */
        set: function(t) {
          t == oe && (t = this.compute()), ae && this.manager.element.style && bt[t] && (this.manager.element.style[se] = t), this.actions = t.toLowerCase().trim();
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
          var n = this.actions, i = m(n, Tt) && !bt[Tt], s = m(n, Nt) && !bt[Nt], l = m(n, Pt) && !bt[Pt];
          if (i) {
            var Y = t.pointers.length === 1, X = t.distance < 2, W = t.deltaTime < 250;
            if (Y && X && W)
              return;
          }
          if (!(l && s) && (i || s && r & st || l && r & mt))
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
        if (m(t, Tt))
          return Tt;
        var e = m(t, Pt), r = m(t, Nt);
        return e && r ? Tt : e || r ? e ? Pt : Nt : m(t, Xt) ? Xt : ce;
      }
      function Xe() {
        if (!ae)
          return !1;
        var t = {}, e = u.CSS && u.CSS.supports;
        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(r) {
          t[r] = e ? u.CSS.supports("touch-action", r) : !0;
        }), t;
      }
      var xt = 1, tt = 2, gt = 4, ht = 8, lt = ht, Ot = 16, at = 32;
      function ut(t) {
        this.options = d({}, this.defaults, t || {}), this.id = S(), this.manager = null, this.options.enable = Q(this.options.enable, !0), this.state = xt, this.simultaneous = {}, this.requireFail = [];
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
          return d(this.options, t), this.manager && this.manager.touchAction.update(), this;
        },
        /**
         * recognize simultaneous with an other recognizer.
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        recognizeWith: function(t) {
          if (b(t, "recognizeWith", this))
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
          return b(t, "dropRecognizeWith", this) ? this : (t = wt(t, this), delete this.simultaneous[t.id], this);
        },
        /**
         * recognizer can only run when an other is failing
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        requireFailure: function(t) {
          if (b(t, "requireFailure", this))
            return this;
          var e = this.requireFail;
          return t = wt(t, this), k(e, t) === -1 && (e.push(t), t.requireFailure(this)), this;
        },
        /**
         * drop the requireFailure link. it does not remove the link on the other recognizer.
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        dropRequireFailure: function(t) {
          if (b(t, "dropRequireFailure", this))
            return this;
          t = wt(t, this);
          var e = k(this.requireFail, t);
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
            if (!(this.requireFail[t].state & (at | xt)))
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
          var e = d({}, t);
          if (!H(this.options.enable, [this, e])) {
            this.reset(), this.state = at;
            return;
          }
          this.state & (lt | Ot | at) && (this.state = xt), this.state = this.process(e), this.state & (tt | gt | ht | Ot) && this.tryEmit(e);
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
      O(nt, ut, {
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
          return n && (r & $ || !i) ? e | Ot : n || i ? r & D ? e | ht : e & tt ? e | gt : tt : at;
        }
      });
      function Lt() {
        nt.apply(this, arguments), this.pX = null, this.pY = null;
      }
      O(Lt, nt, {
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
          return t & st && e.push(Nt), t & mt && e.push(Pt), e;
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
      function kt() {
        nt.apply(this, arguments);
      }
      O(kt, nt, {
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
      function qt() {
        ut.apply(this, arguments), this._timer = null, this._input = null;
      }
      O(qt, ut, {
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
          if (this._input = t, !n || !r || t.eventType & (D | $) && !i)
            this.reset();
          else if (t.eventType & _)
            this.reset(), this._timer = G(function() {
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
          this.state === lt && (t && t.eventType & D ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = et(), this.manager.emit(this.options.event, this._input)));
        }
      });
      function Wt() {
        nt.apply(this, arguments);
      }
      O(Wt, nt, {
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
          return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & tt);
        }
      });
      function Gt() {
        nt.apply(this, arguments);
      }
      O(Gt, nt, {
        /**
         * @namespace
         * @memberof SwipeRecognizer
         */
        defaults: {
          event: "swipe",
          threshold: 10,
          velocity: 0.3,
          direction: st | mt,
          pointers: 1
        },
        getTouchAction: function() {
          return Lt.prototype.getTouchAction.call(this);
        },
        attrTest: function(t) {
          var e = this.options.direction, r;
          return e & (st | mt) ? r = t.overallVelocity : e & st ? r = t.overallVelocityX : e & mt && (r = t.overallVelocityY), this._super.attrTest.call(this, t) && e & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && I(r) > this.options.velocity && t.eventType & D;
        },
        emit: function(t) {
          var e = ue(t.offsetDirection);
          e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t);
        }
      });
      function Ut() {
        ut.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
      }
      O(Ut, ut, {
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
          if (this.reset(), t.eventType & _ && this.count === 0)
            return this.failTimeout();
          if (n && i && r) {
            if (t.eventType != D)
              return this.failTimeout();
            var s = this.pTime ? t.timeStamp - this.pTime < e.interval : !0, l = !this.pCenter || Rt(this.pCenter, t.center) < e.posThreshold;
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
          [kt, { enable: !1 }, ["rotate"]],
          [Gt, { direction: st }],
          [Lt, { direction: st }, ["swipe"]],
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
      var Ve = 1, he = 2;
      function zt(t, e) {
        this.options = d({}, ft.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = Te(this), this.touchAction = new Vt(this, this.options.touchAction), fe(this, !0), c(this.options.recognizers, function(r) {
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
          return d(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this;
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
          if (b(t, "add", this))
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
          if (b(t, "remove", this))
            return this;
          if (t = this.get(t), t) {
            var e = this.recognizers, r = k(e, t);
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
              e ? r[n] && r[n].splice(k(r[n], e), 1) : delete r[n];
            }), this;
          }
        },
        /**
         * emit event to the listeners
         * @param {String} event
         * @param {Object} data
         */
        emit: function(t, e) {
          this.options.domEvents && ke(t, e);
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
            n = q(r.style, s), e ? (t.oldCssProps[n] = r.style[n], r.style[n] = i) : r.style[n] = t.oldCssProps[n] || "";
          }), e || (t.oldCssProps = {});
        }
      }
      function ke(t, e) {
        var r = v.createEvent("Event");
        r.initEvent(t, !0, !0), r.gesture = e, e.target.dispatchEvent(r);
      }
      d(ft, {
        INPUT_START: _,
        INPUT_MOVE: dt,
        INPUT_END: D,
        INPUT_CANCEL: $,
        STATE_POSSIBLE: xt,
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
        DIRECTION_VERTICAL: mt,
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
        Pinch: kt,
        Rotate: Wt,
        Press: qt,
        on: h,
        off: p,
        each: c,
        merge: J,
        extend: N,
        assign: d,
        inherit: O,
        bindFn: w,
        prefixed: q
      });
      var qe = typeof u < "u" ? u : typeof self < "u" ? self : {};
      qe.Hammer = ft, g.exports ? g.exports = ft : u[P] = ft;
    })(window, document, "Hammer");
  }($t)), $t.exports;
}
var Qe = Je();
const pe = /* @__PURE__ */ Ze(Qe), Ke = ({
  viewRef: g,
  indicatorRef: u,
  totalHeight: v,
  onScrollUpdate: P,
  onScrollStop: f,
  rowHeight: C,
  debug: B = !1
}) => {
  const R = E(0), y = E(!1), I = E(0), et = E(0), G = E(0), b = E(0), c = E(0), o = E(0), d = E(0), N = E(null), J = E(325), O = E(0.02), w = E(0.5), H = Z((...h) => {
    B && console.log(...h);
  }, [B]);
  At(() => {
    const h = g.current, p = u.current;
    if (h) {
      const F = h.parentElement, m = F ? F.getBoundingClientRect().height : window.innerHeight;
      G.current = v - m;
      const V = (M) => {
        const S = Math.max(et.current, Math.min(M, G.current));
        R.current = S, h.scrollTop = S, p == null || p.setPosition(S), P(S);
      }, k = () => {
        const M = Date.now(), S = M - d.current;
        d.current = M;
        const j = R.current - o.current;
        o.current = R.current;
        const a = 1e3 * j / (1 + S);
        b.current = 0.8 * a + 0.2 * b.current;
      }, z = () => {
        const M = Date.now() - d.current, S = -c.current * Math.exp(-M / J.current);
        if (Math.abs(b.current) > O.current && Math.abs(S) > w.current)
          V(o.current + S), requestAnimationFrame(z);
        else {
          const a = Math.round(o.current / C) * C;
          V(a), f(a);
        }
      }, ct = () => {
        if (y.current = !1, N.current && clearInterval(N.current), Math.abs(b.current) > O.current) {
          c.current = 0.8 * b.current, o.current = Math.round(R.current + c.current);
          const M = 50;
          o.current = Math.round(o.current / M) * M, o.current = Math.max(et.current, Math.min(o.current, G.current)), d.current = Date.now(), requestAnimationFrame(z);
        } else {
          H("No momentum scrolling as velocity is too low.");
          const M = C / 2;
          let S;
          R.current % C < M ? S = Math.floor(R.current / C) : S = Math.ceil(R.current / C);
          const j = S * C;
          V(j), f(j);
        }
      }, q = new pe(h);
      return q.get("pan").set({ direction: pe.DIRECTION_VERTICAL }), q.on("panstart", (M) => {
        y.current = !0, I.current = M.center.y, b.current = c.current = 0, o.current = R.current, d.current = Date.now(), N.current && clearInterval(N.current), N.current = setInterval(k, 50);
      }), q.on("panmove", (M) => {
        if (y.current) {
          const S = M.center.y, j = I.current - S;
          I.current = S, Math.abs(j) > 1 && V(R.current + j);
        }
      }), q.on("panend", ct), () => {
        q.off("panstart", ct), q.off("panmove", ct), q.off("panend", ct), q.destroy();
      };
    }
  }, [g, v, P, f, u, H, C]);
  const Q = Z((h) => {
    const p = h * C, F = g.current, m = u.current;
    m == null || m.setPosition(p), F && (F.scrollTo({ top: p, behavior: "smooth" }), R.current = p), P(p);
    const V = () => {
      var z;
      ((z = g.current) == null ? void 0 : z.scrollTop) === p ? f(p) : requestAnimationFrame(V);
    };
    requestAnimationFrame(V);
  }, [C, g, u, P, f]);
  return {
    offset: R.current,
    scrollToRow: Q
  };
}, tr = "_container_100u3_1", er = "_thumb_100u3_6", de = {
  container: tr,
  thumb: er
}, me = ze((g, u) => {
  const P = E(null), f = E(null), { "aria-label": C, containerHeight: B, totalHeight: R, show: y = !0 } = g;
  return $e(u, () => ({
    setPosition: (I) => {
      P.current && (P.current.style.top = `${I * (B - 25) / R}px`);
    }
  })), /* @__PURE__ */ vt(
    "div",
    {
      "aria-label": C,
      ref: f,
      className: de.container,
      style: { display: y ? "block" : "none" },
      children: /* @__PURE__ */ vt(
        "div",
        {
          className: de.thumb,
          style: { "--thumb-height": "25px" },
          ref: P
        }
      )
    }
  );
});
me.displayName = "ScrollBar";
const rr = "_wrapper_bq0cu_1", nr = {
  wrapper: rr
};
function ir({
  fetchPageData: g,
  onCellContentUpdated: u,
  rowsPerPage: v = 100
}) {
  const P = E({
    previousPage: { data: [], pageNumber: null },
    visiblePage: { data: [], pageNumber: null },
    nextPage: { data: [], pageNumber: null }
  }), f = E(null), C = E(!1), B = E(null), R = Z(
    async (c) => {
      if (c < 1 || C.current)
        return [];
      try {
        return C.current = !0, await g(c);
      } catch (o) {
        return console.error("Error fetching page data:", o), [];
      } finally {
        C.current = !1, u && u();
      }
    },
    [g, u]
  ), y = Z(
    (c) => {
      const o = Math.floor(c / v) + 1;
      f.current = o;
      const { nextPage: d, visiblePage: N, previousPage: J } = P.current;
      J.data.length === 0 && console.log("Prev page is Empty!"), d.data.length === 0 && console.log("Next page is Empty!"), N.data.length === 0 && console.log("Visible page is Empty!"), u && u();
    },
    [u, v]
  ), I = Z(
    async (c) => {
      const o = P.current, d = c - 1, N = c + 1, { previousPage: J, visiblePage: O, nextPage: w } = o, H = (h) => {
        const p = [J, O, w].find(
          (F) => F.pageNumber === h
        );
        return p ? { ...p, data: [...p.data] } : null;
      }, Q = async (h, p) => {
        const F = H(h);
        if (F)
          return p(F), !1;
        {
          const m = await R(h);
          return p({ data: m, pageNumber: h }), !0;
        }
      };
      try {
        let h = !1;
        o.visiblePage.pageNumber !== c && (h = await Q(
          c,
          (m) => o.visiblePage = m
        ));
        const p = [];
        o.previousPage.pageNumber !== d && c > 1 && p.push(
          Q(d, (m) => o.previousPage = m)
        ), o.nextPage.pageNumber !== N && p.push(
          Q(N, (m) => o.nextPage = m)
        ), (await Promise.all(p)).includes(!0) && (h = !0), h && u && u();
      } catch (h) {
        console.error("Error while fetching pages in parallel:", h);
      }
    },
    [R, u]
  ), et = Z(
    (c) => {
      B.current && clearTimeout(B.current), B.current = setTimeout(() => {
        y(c);
      }, 100);
    },
    [y]
  ), G = Z(
    async (c) => {
      if (C.current)
        return;
      const o = Math.floor(c / v) + 1;
      if (o === f.current) {
        et(c);
        return;
      }
      if (f.current === null) {
        f.current = o, await I(o), y(c);
        return;
      }
      await I(o), P.current.visiblePage.pageNumber === o && y(c);
    },
    [et, v, y, I]
  ), b = (c) => {
    const o = Math.floor(c / v) + 1, d = c % v, { previousPage: N, visiblePage: J, nextPage: O } = P.current, w = f.current;
    let H;
    switch (o) {
      case w - 1:
        H = N.data;
        break;
      case w:
        H = J.data;
        break;
      case w + 1:
        H = O.data;
        break;
      default:
        return { title: "Loading..." };
    }
    return (H == null ? void 0 : H[d]) ?? { title: "Loading..." };
  };
  return At(() => {
    f.current === null && G(1);
  }, [G]), { getRowData: b, updateAndSyncCache: G };
}
function sr({
  rowCount: g,
  fetchPageData: u,
  rowHeight: v = 50,
  onEndReached: P,
  loadMoreThreshold: f = 10,
  rowsPerPage: C,
  renderCell: B,
  onRowDoubleClick: R,
  onTopRowChanged: y,
  apiRef: I,
  hideVerticalScrollbar: et = !1,
  debug: G = !1
}) {
  const b = E(null), c = E(null), o = E(null), d = E([]), N = E(0), J = E(0), O = E(0), [w, H] = Be(800), Q = g * v, h = Z((...a) => {
    G && console.log(...a);
  }, [G]), p = Z((a, T, A) => {
    const L = document.createElement("div"), U = je.createRoot(L);
    L.style.width = "100%", L.style.height = "100%", U.render(B(T, A)), a.innerHTML = "", a.appendChild(L);
  }, [B]), F = () => {
    d.current.forEach(async (a) => {
      var T;
      if (a) {
        const A = parseInt(((T = a.dataset) == null ? void 0 : T.rowIndex) || "0", 10);
        if (!a.textContent || a.textContent.indexOf("Loading...") !== -1) {
          const U = await m(A);
          U && p(a, U, A);
        }
      }
    });
  }, { getRowData: m, updateAndSyncCache: V } = ir({
    fetchPageData: u,
    onCellContentUpdated: F,
    rowsPerPage: C
  }), k = Z((a) => {
    const T = Math.floor(w / v), L = Math.max(0, Math.floor((a + 5) / v)), U = Math.min(g - 1, L + T - 1);
    return h(`scrollTop: ${a}, firstRow: ${L}, lastRow: ${U}`), { firstRow: L, lastRow: U };
  }, [h, g, v, w]), z = Z(async (a, T) => {
    T.dataset.rowIndex = a.toString(), T.innerHTML = "Loading...";
    const A = await m(a);
    p(T, A, a), T.style.transform = `translateY(${a * v}px)`;
  }, [m, p, v]), ct = Z((a) => {
    h(`Handling scroll with scrollTop: ${a}`);
    const { firstRow: T, lastRow: A } = k(a);
    V(T), h(`Visible rows from ${T} to ${A}`), d.current.forEach((L) => {
      var U;
      if (L) {
        const it = parseInt(((U = L.dataset) == null ? void 0 : U.rowIndex) || "0", 10);
        if (it < T - N.current / 3) {
          const rt = J.current, x = it + N.current;
          J.current = Math.max(rt + 1, A), h(`Recycling row ${it} to new row ${x} (scrolling down).`), z(x, L);
        } else if (it > A + N.current / 3) {
          const rt = it - N.current;
          h(`Recycling row ${it} to new row ${rt} (scrolling up).`), z(rt, L);
        }
      }
    }), b.current && b.current.scrollHeight - a - w < f && (h("End of scroll reached, triggering onEndReached."), P && P());
  }, [k, z, f, h, P, V, w]), q = Z((a) => {
    O.current = a;
    const { firstRow: T } = k(a);
    if (y) {
      const A = m(T);
      y(A);
    }
  }, [k, m, y]), { scrollToRow: M } = Ke({
    viewRef: o,
    indicatorRef: c,
    totalHeight: Q,
    onScrollUpdate: ct,
    onScrollStop: q,
    rowHeight: v
  });
  At(() => {
    I && (I.current = { scrollToRow: M });
  }, [M, I]), At(() => {
    const a = () => {
      o.current && H(o.current.clientHeight);
    };
    return a(), window.addEventListener("resize", a), () => window.removeEventListener("resize", a);
  }, []), N.current = Math.ceil(w / v) * 3, At(() => {
    if (F(), y) {
      const a = m(0);
      y(a);
    }
  });
  const S = (a) => {
    const T = a.currentTarget, A = parseInt(T.dataset.rowIndex || "-1");
    A && R && R(A, I == null ? void 0 : I.current);
  }, j = () => {
    const a = O.current, { firstRow: T, lastRow: A } = k(a), L = Array.from({ length: N.current }).map((rt, x) => {
      const pt = Math.max(0, x * v - a);
      return /* @__PURE__ */ vt(
        "div",
        {
          "data-row-index": x,
          ref: (_) => {
            _ && (d.current[x] = _);
          },
          style: {
            height: v,
            position: "absolute",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            transform: `translateY(${pt}px)`
          },
          onDoubleClick: S
        },
        `prev-${x}`
      );
    }), U = Array.from({ length: A - T + 1 }).map((rt, x) => {
      const pt = (T + x) * v - a;
      return /* @__PURE__ */ vt(
        "div",
        {
          "data-row-index": T + x,
          ref: (_) => {
            _ && (d.current[T + x] = _);
          },
          style: {
            height: v,
            position: "absolute",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            transform: `translateY(${pt}px)`
          },
          onDoubleClick: S
        },
        `visible-${T + x}`
      );
    }), it = Array.from({ length: N.current }).map((rt, x) => {
      const pt = (x + (A + 1)) * v - a;
      return /* @__PURE__ */ vt(
        "div",
        {
          "data-row-index": x + (A + 1),
          ref: (_) => {
            _ && (d.current[x + (A + 1)] = _);
          },
          style: {
            height: v,
            position: "absolute",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            transform: `translateY(${pt}px)`
          },
          onDoubleClick: S
        },
        `next-${x}`
      );
    });
    return [...L, ...U, ...it];
  };
  return console.log("Kozmic VirtualList redering... (5)"), /* @__PURE__ */ We("div", { style: { display: "flex", width: "100%", height: "100%" }, children: [
    /* @__PURE__ */ vt(
      "div",
      {
        ref: o,
        className: `${nr.wrapper}`,
        children: /* @__PURE__ */ vt(
          "div",
          {
            ref: b,
            style: { height: `${Q}px`, flexDirection: "column", position: "relative" },
            children: j()
          }
        )
      }
    ),
    /* @__PURE__ */ vt(me, { show: !et, containerHeight: w, totalHeight: Q, ref: c })
  ] });
}
const ar = (g, u) => {
  const v = Object.keys(g);
  for (const P of v)
    if (g[P] !== u[P])
      return console.log(`Prop changed: ${P}`), !1;
  return !0;
}, ur = Ge.memo(sr, ar);
export {
  ur as VirtualList
};
