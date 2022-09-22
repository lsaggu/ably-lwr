import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./adjust_value.css";

import _implicitScopedStylesheets from "./adjust_value.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M23 14.91a6.55 6.55 0 11-6.52 6.55A6.53 6.53 0 0123 14.91zm20.7 15.72a.58.58 0 000-.84l-4.12-4.12a.59.59 0 00-.42-.18.61.61 0 00-.43.18L27.39 37.05l-1.7 5.69a.8.8 0 00.79 1 .55.55 0 00.18 0L32.35 42zm-1.45-7.75L46.4 27a.63.63 0 00.43.18.59.59 0 00.42-.18c.73-.73 2.06-1.94 2.06-1.94a2 2 0 000-2.91L47.13 20a2 2 0 00-1.41-.54 2.34 2.34 0 00-1.5.54s-1.33 1.31-1.93 2a.58.58 0 000 .88zM40.1 8.27H6a4 4 0 00-3.93 4v19.07A4 4 0 006 35.28h18.84l3.95-3.94H10.54A4.53 4.53 0 006 26.76v-9.88a4.53 4.53 0 004.56-4.57h25a4.53 4.53 0 004.56 4.57v3L44 15.91v-3.6a4 4 0 00-3.9-4.04z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_adjust_value"
}
freezeTemplate(tmpl);
