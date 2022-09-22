import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./all.css";

import _implicitScopedStylesheets from "./all.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M31.6 21.6c-1.2 0-2.2-1-2.2-2.2V5.5c0-1.2 1-2.2 2.2-2.2h14.2c1.2 0 2.2 1 2.2 2.2v13.9c0 1.2-1 2.2-2.2 2.2H31.6zM37.7 29.8l-8.2 8.9c-.5.5-.5 1.3 0 1.9l8.2 8.9c.5.6 1.5.6 2 0l8.2-8.9c.5-.5.5-1.3 0-1.9l-8.2-8.9c-.5-.6-1.4-.6-2 0z"${3}><path d="M4.8 6.5L12 2.4c.7-.4 1.5-.4 2.1 0l7.1 4.1c.7.4 1.1 1.1 1.1 1.9v8.2c0 .8-.4 1.5-1.1 1.9l-7.1 4.1c-.7.4-1.5.4-2.1 0l-7.2-4.1c-.7-.4-1.1-1.1-1.1-1.9V8.4c0-.8.4-1.5 1.1-1.9z"${3}><circle cx="13" cy="39.4" r="9.3"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_all"
}
freezeTemplate(tmpl);
