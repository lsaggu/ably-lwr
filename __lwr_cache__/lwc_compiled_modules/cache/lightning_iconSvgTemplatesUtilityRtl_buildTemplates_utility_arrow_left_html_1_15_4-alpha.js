import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./arrow_left.css";

import _implicitScopedStylesheets from "./arrow_left.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M10.17 42.34a2 2 0 01-2 2H4a2 2 0 01-2-2V9.66a2 2 0 012-2h4.13a2 2 0 012 2zM50 28a2.11 2.11 0 01-2 2.05H30.6a1.3 1.3 0 00-.92 2.24l4.69 4.8a2 2 0 010 2.86l-2.75 2.86a1.87 1.87 0 01-2.76 0l-15-15.42a2 2 0 010-2.86l15-15.32a1.87 1.87 0 012.76 0L34.37 12a2 2 0 010 2.86l-4.69 4.8a1.3 1.3 0 00.92 2.24H48a2.2 2.2 0 012 2.1z" fill-rule="evenodd"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_arrow_left"
}
freezeTemplate(tmpl);
