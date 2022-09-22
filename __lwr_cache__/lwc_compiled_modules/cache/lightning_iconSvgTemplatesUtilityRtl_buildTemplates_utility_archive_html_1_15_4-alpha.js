import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./archive.css";

import _implicitScopedStylesheets from "./archive.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M45.2 2.3H6.8C4.2 2.3 2 4.5 2 7.1v4.8c0 .9.7 1.6 1.6 1.6h44.8c.9 0 1.6-.7 1.6-1.6V7.1c0-2.6-2.2-4.8-4.8-4.8zM46.6 17.5H5.5c-.9 0-1.6.7-1.6 1.6v26.4c0 2.6 2.2 4.8 4.8 4.8h34.8c2.6 0 4.8-2.2 4.8-4.8V19.1c-.1-.9-.8-1.6-1.7-1.6zm-13.8 8H19.2c-1.1 0-2-.9-2-2s.9-2 2-2h13.6c1.1 0 2 .9 2 2s-.9 2-2 2z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_archive"
}
freezeTemplate(tmpl);
