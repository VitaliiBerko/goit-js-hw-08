function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire4c75;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire4c75=o),o("amrNH");var i,u=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,m=s||d||Function("return this")(),p=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return m.Date.now()};function y(e,t,n){var r,o,i,u,a,f,c=0,l=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function p(e){return c=e,a=setTimeout(h,t),l?m(e):u}function y(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function h(){var e=b();if(y(e))return j(e);a=setTimeout(h,function(e){var n=t-(e-f);return s?g(n,i-(e-c)):n}(e))}function j(e){return a=void 0,d&&r?m(e):(r=o=void 0,u)}function w(){var e=b(),n=y(e);if(r=arguments,o=this,f=e,n){if(void 0===a)return p(f);if(s)return a=setTimeout(h,t),m(f)}return void 0===a&&(a=setTimeout(h,t)),u}return t=x(t)||0,O(n)&&(l=!!n.leading,i=(s="maxWait"in n)?v(x(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=f=o=a=void 0},w.flush=function(){return void 0===a?u:j(b())},w}function O(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function x(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(O(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=O(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var n=f.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):a.test(e)?NaN:+e}i=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return O(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};const h={form:document.querySelector(".feedback-form"),email:document.querySelector('[type="email"]'),message:document.querySelector('[name="message"]'),btn:document.querySelector("button")};let j={};h.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),console.log(j),j={}})),h.form.addEventListener("input",e(i)((function(e){j[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),function(){let e=localStorage.getItem("feedback-form-state");e&&(e=JSON.parse(e),Object.entries(e).forEach((([e,t])=>{j[e]=t,h.form.elements[e].value=t})))}();
//# sourceMappingURL=03-feedback.5bfd4782.js.map