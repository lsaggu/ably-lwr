import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom54.css";

import _implicitScopedStylesheets from "./custom54.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M27.2 49.1c6.5-1.2 12.2-3.8 18.4-6.7 2-.9 5.7-2.7 7.5-3.5.601-.3 1-.9.801-1.6C53.4 34.4 51 32 48 32h-2v-3.8c0-1.1-1-2.1-2-2.1V22c0-1.1-.9-2.1-2-2.1h-4c-1.1 0-2 .9-2 2.1v4.1c-1 0-2 .9-2 2.1V32h-2c-3.3 0-6 3.1-6 6.5v9.6c0 .6.6 1.1 1.2 1zM72 69.2s7.3-11.4 8-27.5c0-1.2-.9-2.2-2.1-2.2-23.8.9-34.9 15.5-56 16.4-1.1 0-1.9 1-1.9 2v7.6c0 3.3 2.5 5.9 5.6 6.1 10.5.7 33 2.2 45.9 4.301 1.3.199 2.5-1 2.3-2.301-.3-1.5-.8-3.3-1.8-4.4zM71 51c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom54"
}
freezeTemplate(tmpl);
