import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom98.css";

import _implicitScopedStylesheets from "./custom98.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M81.4 46.4l-7.8-7.8c-.4-.4-.9-.6-1.4-.6H64c-1.1 0-2 .9-2 2v16c0 .7.7 1.2 1.4.9 1.4-.6 3-.9 4.6-.9 4.5 0 8.4 2.5 10.5 6.2.3.5 1 .7 1.5.3 1.2-1.1 2-2.7 2-4.5V47.8c0-.5-.2-1-.6-1.4z"${3}><path d="M54 29H20c-1.1 0-2 .9-2 2v27c0 1.8.8 3.4 2 4.5.5.4 1.2.3 1.5-.3 2-3.7 6-6.2 10.5-6.2 5 0 9.2 3 11.1 7.4.2.4.5.6.9.6h6c3.3 0 6-2.7 6-6V31c0-1.1-.9-2-2-2z"${3}><circle cx="68" cy="68" r="6"${3}><circle cx="32" cy="68" r="6"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom98"
}
freezeTemplate(tmpl);
