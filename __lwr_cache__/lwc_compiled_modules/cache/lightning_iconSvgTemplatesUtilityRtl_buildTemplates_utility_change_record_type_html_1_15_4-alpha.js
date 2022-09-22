import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./change_record_type.css";

import _implicitScopedStylesheets from "./change_record_type.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M20 37.5c0-.8-.7-1.5-1.5-1.5h-15c-.8 0-1.5.7-1.5 1.5v11c0 .8.7 1.5 1.5 1.5h15c.8 0 1.5-.7 1.5-1.5v-11zM8.1 22H3.2c-1 0-1.5.9-.9 1.4l8 8.3c.4.3 1 .3 1.4 0l8-8.3c.6-.6.1-1.4-.9-1.4h-4.7c0-5 4.9-10 9.9-10V6C15 6 8.1 13 8.1 22zM41.8 20.3c-.4-.3-1-.3-1.4 0l-8 8.3c-.6.6-.1 1.4.9 1.4h4.8c0 6-4.1 10-10.1 10v6c9 0 16.1-7 16.1-16H49c1 0 1.5-.9.9-1.4l-8.1-8.3zM50 3.5c0-.8-.7-1.5-1.5-1.5h-15c-.8 0-1.5.7-1.5 1.5v11c0 .8.7 1.5 1.5 1.5h15c.8 0 1.5-.7 1.5-1.5v-11z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_change_record_type"
}
freezeTemplate(tmpl);
