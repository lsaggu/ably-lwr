import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./center_align_text.css";

import _implicitScopedStylesheets from "./center_align_text.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M48 6.5c0-.8-.7-1.5-1.5-1.5h-41C4.7 5 4 5.7 4 6.5v3c0 .8.7 1.5 1.5 1.5h41c.8 0 1.5-.7 1.5-1.5v-3zM42 18.5c0-.8-.7-1.5-1.5-1.5h-29c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h29c.8 0 1.5-.7 1.5-1.5v-3zM40 42.5c0-.8-.7-1.5-1.5-1.5h-25c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h25c.8 0 1.5-.7 1.5-1.5v-3zM48 30.5c0-.8-.7-1.5-1.5-1.5h-41c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h41c.8 0 1.5-.7 1.5-1.5v-3z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_center_align_text"
}
freezeTemplate(tmpl);
