import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom106.css";

import _implicitScopedStylesheets from "./custom106.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M49.643 20.543c-11.905.079-21.496 9.787-21.429 21.693 0 17.585 21.429 37.221 21.429 37.221S71.07 59.05 71.07 42.236c.056-11.9-9.528-21.603-21.428-21.693zm0 31.021a9.286 9.286 0 119.193-9.328 9.286 9.286 0 01-9.193 9.321v.007z" fill-rule="evenodd"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom106"
}
freezeTemplate(tmpl);
