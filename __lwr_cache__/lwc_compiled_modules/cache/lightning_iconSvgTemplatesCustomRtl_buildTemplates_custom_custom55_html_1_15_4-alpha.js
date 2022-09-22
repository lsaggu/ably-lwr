import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom55.css";

import _implicitScopedStylesheets from "./custom55.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M32 61h13c1.1 0 2-.9 2-2V29c0-2.2-2-4-4-4H32.3C31 25 30 26 30 27.3V59c0 1.1.9 2 2 2z"${3}><path d="M76 31v32c0 2.2-1.8 4-4 4H28c-2.2 0-4-1.8-4-4V31c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h19c1.1 0 2 .9 2 2s.9 2 2 2h6c1.1 0 2-.9 2-2s.9-2 2-2h19c3.3 0 6-2.7 6-6V37c0-3.3-2.7-6-6-6z"${3}><path d="M55 61h12.7c1.3 0 2.3-1 2.3-2.3V27c0-1.1-.9-2-2-2H57c-2 0-4 1.8-4 4v30c0 1.1.9 2 2 2z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom55"
}
freezeTemplate(tmpl);
