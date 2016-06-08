'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

(function (factory) {
  if (typeof require === 'function' && (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
    // Define as CommonJS export:
    module.exports = factory(window.jQuery = window.$ = require('jquery'), require('underscore'), require('backbone'), require('marionette'), require('velocity'), require('velocity-ui'));
  } else if (typeof define === 'function' && define.amd) {
    // Define as AMD:
    define(['jquery', 'underscore', 'backbone', 'marionette', 'velocity', 'velocity-ui'], factory);
  } else {
    // Browser:
    window.AnimatedRegion = factory(window.jQuery = window.$, window._, window.Backbone, window.Marionette);
  }
})(function ($, _, Backbone, Marionette) {
  function iterateOverAnimations(animations, callback) {
    var _this = this;

    if (!animations.length) throw new Error('You must define showAnimation or hideAnimation objects. Ex: exRegion: { animation: { showAnimation: [{ //properties and options }, { ... }] } }');

    var _loop = function _loop(i, length) {
      var animation = animations[i];

      $.Velocity.animate(_this.$el, animation.properties, animation.options).then(function () {
        if (i === length) callback();
      });
    };

    for (var i = 0, length = animations.length - 1; i <= length; i++) {
      _loop(i, length);
    }
  }

  function emptyRegion(view, options) {
    var emptyOptions = options || {};
    var preventDestroy = !!emptyOptions.preventDestroy;

    view.off('destroy', this.empty, this);
    this.triggerMethod('before:empty', view);

    if (!preventDestroy) this._destroyView();

    this.triggerMethod('empty', view);
    delete this.currentView;

    if (preventDestroy) this.$el.contents().detach();
  }

  var AnimatedRegion = (function (_Marionette$Region) {
    _inherits(AnimatedRegion, _Marionette$Region);

    function AnimatedRegion() {
      _classCallCheck(this, AnimatedRegion);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(AnimatedRegion).apply(this, arguments));
    }

    _createClass(AnimatedRegion, [{
      key: 'initialize',
      value: function initialize(options) {
        this.animation = options.animation;
      }
    }, {
      key: 'attachHtml',
      value: function attachHtml(view) {
        var _this3 = this;

        this.$el.css({ display: 'none' }).html(view.el).velocity('stop');

        if (this.animation && this.animation.showAnimation) {
          iterateOverAnimations.call(this, this.animation.showAnimation, function () {
            AnimatedRegion.trigger('region:shown', _this3);
          });
        } else {
          this.$el.css({ display: 'block' });
        }
      }
    }, {
      key: 'empty',
      value: function empty(options) {
        var _this4 = this;

        var view = this.currentView;

        if (!view) return;

        this.$el.velocity('stop');

        if (this.animation && this.animation.hideAnimation) {
          iterateOverAnimations.call(this, this.animation.hideAnimation, function () {
            emptyRegion.call(_this4, view, options);
            _this4.$el.removeAttr('style');
            AnimatedRegion.trigger('region:removed', _this4);
          });
        } else {
          emptyRegion.call(this, view, options);
        }

        return this;
      }
    }]);

    return AnimatedRegion;
  })(Marionette.Region);

  _.extend(AnimatedRegion, Backbone.Events);

  return AnimatedRegion;
});