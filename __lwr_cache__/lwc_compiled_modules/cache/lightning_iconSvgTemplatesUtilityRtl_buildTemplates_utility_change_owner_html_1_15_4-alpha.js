import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./change_owner.css";

import _implicitScopedStylesheets from "./change_owner.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M27.3 37.6c-3-1.2-3.5-2.3-3.5-3.5 0-1.2.8-2.3 1.8-3.2 1.8-1.5 2.6-3.9 2.6-6.4 0-4.7-2.9-8.5-8.3-8.5s-8.3 3.8-8.3 8.5c0 2.5.8 4.9 2.6 6.4 1 .9 1.8 2 1.8 3.2 0 1.2-.5 2.3-3.5 3.5-4.4 1.8-8.6 3.8-8.7 7.6C4 47.8 6 50 8.5 50h23c2.5 0 4.5-2.2 4.5-4.7-.1-3.8-4.3-5.9-8.7-7.7zM44.5 19c0-7.4-6.1-13.5-13.5-13.5V2l-6.8 5.5c-.3.3-.2.8.1 1.1L31 14v-3.5c4.7 0 8.5 3.8 8.5 8.5H36l5.5 6.8c.3.3.8.3 1.1 0L48 19h-3.5z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_change_owner"
}
freezeTemplate(tmpl);
