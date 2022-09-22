import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./chevronright.css";

import _implicitScopedStylesheets from "./chevronright.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M17.9 4.4l20.7 20.5c.6.6.6 1.6 0 2.2L17.9 47.6c-.6.6-1.6.6-2.2 0l-2.2-2.2c-.6-.6-.6-1.6 0-2.2l16.3-16.1c.6-.6.6-1.6 0-2.2L13.6 8.8c-.6-.6-.6-1.6 0-2.2l2.2-2.2c.6-.5 1.5-.5 2.1 0z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_chevronright"
}
freezeTemplate(tmpl);
