import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./approval.css";

import _implicitScopedStylesheets from "./approval.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M45.2 29.2h-8.8c-2.6 0-4.8-2.2-4.8-4.8.4-7.1 3.7-7.5 4-12.1.3-4.8-2.7-9.1-7.4-10.1C22 .9 16.4 5.6 16.4 11.6c0 5.3 3.6 5.3 4 12.8 0 2.6-2.2 4.8-4.8 4.8H6.8C4.2 29.2 2 31.3 2 34v3.2c0 .9.7 1.6 1.6 1.6h44.8c.9 0 1.6-.7 1.6-1.6V34c0-2.7-2.2-4.8-4.8-4.8zm.1 14.4H6.7c-.9 0-1.5.7-1.5 1.5v.1c0 2.6 2.2 4.8 4.8 4.8h32.1c2.6 0 4.7-2.2 4.7-4.8v-.1c0-.8-.7-1.5-1.5-1.5z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_approval"
}
freezeTemplate(tmpl);
