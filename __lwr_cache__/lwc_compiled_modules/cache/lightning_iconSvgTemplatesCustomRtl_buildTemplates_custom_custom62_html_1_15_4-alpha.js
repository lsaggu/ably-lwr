import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom62.css";

import _implicitScopedStylesheets from "./custom62.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M77 70H23c-1.6 0-3 1.3-3 3 0 1.6 1.3 3 3 3h54c1.6 0 3-1.3 3-3s-1.3-3-3-3zM24 64h34v-4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v4h4c1.1 0 2-.9 2-2V28c0-1.1-.9-2-2-2H24c-1.1 0-2 .9-2 2v34c0 1.1.9 2 2 2zm9-26c0-1.1.9-2 2-2h29c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H35c-1.1 0-2-.9-2-2v-2zm0 12c0-1.1.9-2 2-2h19c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H35c-1.1 0-2-.9-2-2v-2z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom62"
}
freezeTemplate(tmpl);
