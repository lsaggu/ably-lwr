import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./collection_alt.css";

import _implicitScopedStylesheets from "./collection_alt.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M13.75 2A2.87 2.87 0 0011 5a2.87 2.87 0 002.75 3h24.5A2.87 2.87 0 0041 5a2.87 2.87 0 00-2.75-3zM7 15a2.87 2.87 0 012.75-3h32.5A2.87 2.87 0 0145 15a2.87 2.87 0 01-2.75 3H9.75A2.87 2.87 0 017 15z" fill-rule="evenodd"${3}><rect x="2" y="22" width="48" height="28" rx="4"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_collection_alt"
}
freezeTemplate(tmpl);
