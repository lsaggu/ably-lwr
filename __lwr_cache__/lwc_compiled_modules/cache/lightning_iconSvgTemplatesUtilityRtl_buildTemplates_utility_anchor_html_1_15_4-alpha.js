import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./anchor.css";

import _implicitScopedStylesheets from "./anchor.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M48 35.7l-2.4-10.2c-.3-1.1-1.7-1.5-2.5-.8l-7.7 7.1c-.9.8-.5 2.2.6 2.5l3.3 1c-.3.7-.6 1.4-1 2-1.8 3-4.7 4.9-9.3 5.5v-25c2.6-1.1 4.4-3.7 4.4-6.7 0-4-3.3-7.3-7.3-7.3-4.1 0-7.3 3.3-7.3 7.3 0 3 1.8 5.5 4.4 6.7v25c-4.6-.6-7.5-2.5-9.3-5.5-.4-.7-.7-1.3-1-2l3.3-1c1.1-.3 1.4-1.8.6-2.5l-7.8-7c-.9-.8-2.2-.4-2.5.8L4 35.7c-.3 1.1.8 2.1 1.9 1.8l2.6-.8c.4 1.1.8 2.1 1.4 3.1 2.9 4.9 8.2 7.8 16 7.8s13-2.9 16-7.8c.6-1 1.1-2.1 1.4-3.1l2.6.8c1.3.3 2.3-.7 2.1-1.8zM26 14.2c-1.6 0-2.9-1.3-2.9-2.9s1.3-2.9 2.9-2.9 2.9 1.3 2.9 2.9-1.3 2.9-2.9 2.9z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_anchor"
}
freezeTemplate(tmpl);
