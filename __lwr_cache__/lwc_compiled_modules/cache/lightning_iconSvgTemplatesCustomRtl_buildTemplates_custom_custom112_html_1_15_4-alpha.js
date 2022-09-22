import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom112.css";

import _implicitScopedStylesheets from "./custom112.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M51.121 50.166a56.676 56.676 0 00-25.737 0 7.271 7.271 0 00-4.973 6.513v5.25a7.192 7.192 0 004.973 6.513c.79.197 1.58.316 2.369.474l6.67 9.552c1.224 1.737 2.211 1.421 2.211-.71v-7.895c4.87.16 9.74-.318 14.487-1.42a7.271 7.271 0 004.974-6.514v-5.25a7.16 7.16 0 00-4.974-6.513zm23.526-27.632a72.15 72.15 0 00-35.052 0 7.279 7.279 0 00-4.974 6.553v9.316a7.279 7.279 0 004.974 6.552 71.424 71.424 0 0019.579 2.092v10.974c0 2.092.987 2.447 2.17.71l8.961-12.789a75.61 75.61 0 004.303-.947 7.279 7.279 0 004.974-6.553v-9.316a7.184 7.184 0 00-4.935-6.552v-.04z" fill-rule="evenodd"${3}></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100"
    },
    key: 0,
    svg: true
  }, [api_static_fragment($fragment1(), 2)])];
  /*LWC compiler v2.17.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
if (_implicitStylesheets || _implicitScopedStylesheets) {
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom112"
}
freezeTemplate(tmpl);
