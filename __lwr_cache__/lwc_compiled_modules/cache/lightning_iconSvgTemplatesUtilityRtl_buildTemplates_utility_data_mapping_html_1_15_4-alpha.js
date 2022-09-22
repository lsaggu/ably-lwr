import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./data_mapping.css";

import _implicitScopedStylesheets from "./data_mapping.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M44.5 21a5.5 5.5 0 11-4.9 8h-.91c-5.39.06-7.29 1.7-10.31 7.34l-.17.33-.2.38c-1.8 3.37-2.82 4.9-4.66 6.52C20.76 45.84 17.42 47 13 47h-.6a5.5 5.5 0 110-5h.91c5.49-.06 7.36-1.76 10.48-7.67L24 34a27.18 27.18 0 013.11-5H12.4a5.5 5.5 0 110-5h27.2a5.53 5.53 0 014.68-3zm0-19a5.5 5.5 0 11-4.9 8H12.4a5.5 5.5 0 110-5h27.2a5.5 5.5 0 014.9-3z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_data_mapping"
}
freezeTemplate(tmpl);
