import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom79.css";

import _implicitScopedStylesheets from "./custom79.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M39 41c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z"${3}><path d="M79 63H60v-8h2c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2h-2.3c-1.601-10-10-17.8-20.4-18-11.8-.2-21.5 9.5-21.3 21.3.2 11.6 9.9 20.7 21.5 20.7H76v2c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-5c0-1.7-1.3-3-3-3zm-40-2c-7.2 0-13-5.8-13-13s5.8-13 13-13 13 5.8 13 13-5.8 13-13 13z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom79"
}
freezeTemplate(tmpl);
