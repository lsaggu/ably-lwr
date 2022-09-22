import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./case.css";

import _implicitScopedStylesheets from "./case.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M17.2 11.3h2.9c.4 0 .7-.3.7-.7V8.4h10.3v2.2c0 .4.3.7.7.7h2.9c.4 0 .7-.3.7-.7V8.4C35.4 6 33.4 4 31 4H20.9c-2.4 0-4.4 2-4.4 4.4v2.2c0 .4.2.7.7.7zm26.4 4.4H8.4c-2.4 0-4.4 2-4.4 4.4v23.5C4 46 6 48 8.4 48h35.2c2.4 0 4.4-2 4.4-4.4V20.1c0-2.4-2-4.4-4.4-4.4z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_case"
}
freezeTemplate(tmpl);
