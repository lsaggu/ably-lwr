import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./connected_apps.css";

import _implicitScopedStylesheets from "./connected_apps.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M23.8 31.2L20 48.8c-.2 1 1.1 1.7 1.7.9l21-26c.6-.7.1-1.7-.7-1.7H30.8c-.8 0-1.3-.9-.9-1.5l9.9-16.2c.6-1-.1-2.3-1.3-2.3H20.8c-1.1 0-2 .7-2.4 1.7L10.1 28c-.3 1 .4 2 1.4 2h11.4c.6 0 1.1.6.9 1.2z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_connected_apps"
}
freezeTemplate(tmpl);
