import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./gsheet.css";

import _implicitScopedStylesheets from "./gsheet.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill-rule="evenodd" clip-rule="evenodd" fill="#20A971" d="M5.1 0c-2.8 0-5 2.3-5 5.1v53.8c0 2.8 2.2 5.1 5 5.1h45.8c2.8 0 5.1-2.3 5.1-5.1V20.3L37.1 0h-32z"${3}><path fill="#FFF" d="M10.1 37.5v16.4h21.5V37.5H10.1zm15 11.5h5v3.5h-5V49zm0-5h5v3.5h-5V44zm0-5.1h5v3.6h-5v-3.6zM11.5 49h12.2v3.5H11.5V49zm0-5h12.2v3.5H11.5V44zm0-5.1h12.2v3.6H11.5v-3.6z"${3}><g fill-rule="evenodd" clip-rule="evenodd"${3}><path fill="#189355" d="M56 20.3v1H43.2s-6.3-1.2-6.1-6.7c0 0 .2 5.7 6 5.7H56z"${3}><path opacity=".5" fill="#FFF" d="M37.1 0v14.5c0 1.7 1.1 5.8 6.1 5.8H56L37.1 0z"${3}></g></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 56 64"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctypeRtl_gsheet"
}
freezeTemplate(tmpl);
