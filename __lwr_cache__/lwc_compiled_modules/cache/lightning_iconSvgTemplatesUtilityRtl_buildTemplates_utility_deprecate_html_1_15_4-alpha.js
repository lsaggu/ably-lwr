import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./deprecate.css";

import _implicitScopedStylesheets from "./deprecate.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M48 7H4c-1.1 0-2 .9-2 2v26c0 1.1.9 2 2 2h16.2c1 5.7 5.9 10 11.8 10s10.9-4.3 11.8-10H48c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-8.6 32.6l-2.8 2.8-4.6-4.6-4.6 4.6-2.8-2.8 4.6-4.6-4.6-4.6 2.8-2.8 4.6 4.6 4.6-4.6 2.8 2.8-4.6 4.6 4.6 4.6zM46 33h-2.2c-1-5.7-5.9-10-11.8-10s-10.9 4.3-11.8 10H6V11h40v22z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_deprecate"
}
freezeTemplate(tmpl);
