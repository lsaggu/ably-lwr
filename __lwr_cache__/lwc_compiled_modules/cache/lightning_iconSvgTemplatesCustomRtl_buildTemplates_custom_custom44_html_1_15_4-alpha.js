import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom44.css";

import _implicitScopedStylesheets from "./custom44.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M69.7 28.9C64.4 22.3 60.1 20 51 20c-4.1 0-9 1.6-11 2 0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2h2.1c1.6 0 2.9 1.3 2.9 2.9v.1c0 1.7 1.3 3 3 3v16c-2.2 0-4 1.8-4 4v18c0 3.3 2.7 6 6 6h2c3.3 0 6-2.7 6-6V56c0-2.2-1.8-4-4-4V36c1.7 0 3-2.2 3-3.9V32c0-1.5 1.2-2.7 2.7-2.8 4-.2 6.2 1.4 7.3 2.3.6.5 1.6.6 2.2.1 1-.6 1.2-1.8.5-2.7z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom44"
}
freezeTemplate(tmpl);
