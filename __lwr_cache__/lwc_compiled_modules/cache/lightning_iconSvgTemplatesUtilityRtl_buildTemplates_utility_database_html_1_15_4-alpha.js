import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./database.css";

import _implicitScopedStylesheets from "./database.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M45.4 9c0-3.8-8.7-6.9-19.4-6.9S6.6 5.2 6.6 9v2.4c0 3.8 8.7 6.9 19.4 6.9s19.4-3.1 19.4-6.9V9z"${3}><path d="M6.6 17c0 3 8.7 5.4 19.4 5.4S45.4 20 45.4 17v4.9c0 3.8-8.7 6.9-19.4 6.9S6.6 25.7 6.6 21.9V17z"${3}><path d="M6.6 17c0 3 8.7 5.4 19.4 5.4S45.4 20 45.4 17v4.9c0 3.8-8.7 6.9-19.4 6.9S6.6 25.7 6.6 21.9V17z"${3}><path d="M6.6 27.5c0 3 8.7 5.4 19.4 5.4s19.4-2.4 19.4-5.4v4.9c0 3.8-8.7 6.9-19.4 6.9s-19.4-3-19.4-6.8v-5z"${3}><path d="M6.6 38.1c0 3 8.7 5.4 19.4 5.4s19.4-2.4 19.4-5.4V43c0 3.8-8.7 6.9-19.4 6.9S6.6 46.8 6.6 43v-4.9z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_database"
}
freezeTemplate(tmpl);
