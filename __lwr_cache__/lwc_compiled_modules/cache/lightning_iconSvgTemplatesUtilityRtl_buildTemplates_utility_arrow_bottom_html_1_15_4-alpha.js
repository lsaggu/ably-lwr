import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./arrow_bottom.css";

import _implicitScopedStylesheets from "./arrow_bottom.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M42.34 41.83a2 2 0 012 2V48a2 2 0 01-2 2H9.66a2 2 0 01-2-2v-4.13a2 2 0 012-2zM28 2a2.12 2.12 0 012.05 2v17.4a1.3 1.3 0 002.24.92l4.8-4.69a2 2 0 012.86 0l2.86 2.75a1.86 1.86 0 010 2.76l-15.42 15a2 2 0 01-2.86 0l-15.32-15a1.86 1.86 0 010-2.76L12 17.63a2 2 0 012.86 0l4.8 4.69a1.3 1.3 0 002.24-.92V4A2.19 2.19 0 0124 2h4z"${3}></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 52 52"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_arrow_bottom"
}
freezeTemplate(tmpl);
