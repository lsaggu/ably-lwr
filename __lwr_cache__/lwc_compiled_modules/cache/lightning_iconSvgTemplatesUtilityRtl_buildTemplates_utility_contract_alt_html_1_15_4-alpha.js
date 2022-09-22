import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contract_alt.css";

import _implicitScopedStylesheets from "./contract_alt.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M29.6 23.9H45c1 0 1.3-1.1.5-1.9l-4.9-5 9-9.1c.5-.5.5-1.4 0-1.9l-3.7-3.7c-.5-.4-1.3-.4-1.9.1l-9 9-5.1-4.9C29.1 5.7 28 6 28 7v15.4c0 .7.9 1.5 1.6 1.5zM22.4 28H7c-1 0-1.3 1.1-.5 1.9l4.9 5-9 9.1c-.5.5-.5 1.4 0 1.9l3.7 3.7c.5.5 1.3.5 1.9 0l9.1-9.1 5.1 4.9c.7.9 1.8.6 1.8-.4V29.7c0-.7-.9-1.7-1.6-1.7z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_contract_alt"
}
freezeTemplate(tmpl);
