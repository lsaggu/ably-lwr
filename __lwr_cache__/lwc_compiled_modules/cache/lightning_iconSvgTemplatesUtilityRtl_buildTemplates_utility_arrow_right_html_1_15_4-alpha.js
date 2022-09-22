import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./arrow_right.css";

import _implicitScopedStylesheets from "./arrow_right.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M41.83 9.66a2 2 0 012-2H48a2 2 0 012 2v32.68a2 2 0 01-2 2h-4.13a2 2 0 01-2-2zM2 24a2.11 2.11 0 012-2h17.4a1.3 1.3 0 00.92-2.24l-4.69-4.8a2 2 0 010-2.86l2.75-2.9a1.87 1.87 0 012.76 0l15 15.42a2 2 0 010 2.86l-15 15.32a1.87 1.87 0 01-2.76 0L17.63 40a2 2 0 010-2.86l4.69-4.8a1.3 1.3 0 00-.92-2.24H4A2.2 2.2 0 012 28z" fill-rule="evenodd"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_arrow_right"
}
freezeTemplate(tmpl);
