import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./capacity_plan.css";

import _implicitScopedStylesheets from "./capacity_plan.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M43.3 6h-1.73a.74.74 0 00-.67.8V10a6.37 6.37 0 01-6.3 6.4H17.4a6.37 6.37 0 01-6.3-6.4V6.67a.74.74 0 00-.8-.67H8.7A4.77 4.77 0 004 10.8v34.4A4.77 4.77 0 008.7 50h34.6a4.77 4.77 0 004.7-4.8V10.8A4.77 4.77 0 0043.3 6zM25.92 45a12 12 0 01.16-24 12 12 0 01-.16 24z"${3}><path d="M16.91 11.6h17.86a1.59 1.59 0 001.63-1.55V6.8A4.81 4.81 0 0031.6 2H20.4a4.82 4.82 0 00-4.8 4.8V10a1.47 1.47 0 001.31 1.6zM32.23 27.2A9.09 9.09 0 0026 24.4v8.8h8.77a7.32 7.32 0 00-2.54-6z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_capacity_plan"
}
freezeTemplate(tmpl);
