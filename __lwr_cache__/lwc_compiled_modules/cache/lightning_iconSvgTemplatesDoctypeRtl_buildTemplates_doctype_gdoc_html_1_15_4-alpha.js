import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./gdoc.css";

import _implicitScopedStylesheets from "./gdoc.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill-rule="evenodd" clip-rule="evenodd" fill="#3C8CEA" d="M5.1 0C2.3 0 0 2.3 0 5.1v53.8C0 61.7 2.3 64 5.1 64h45.8c2.8 0 5.1-2.3 5.1-5.1V20.3L37.1 0h-32z"${3}><path fill="#FFF" d="M31.7 39.5H10.1v-2.1h21.6v2.1zm0 4.8H10.1v-2.1h21.6v2.1zm0 4.8H10.1V47h21.6v2.1zm0 4.8H19.4v-2.1h12.3v2.1z"${3}><g fill-rule="evenodd" clip-rule="evenodd"${3}><path fill="#2D6FE4" d="M56 20.4v1H43.2s-6.4-1.3-6.2-6.7c0 0 .2 5.7 6 5.7h13z"${3}><path opacity=".5" fill="#FFF" d="M37.1 0v14.6c0 1.6 1.1 5.8 6.1 5.8H56L37.1 0z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctypeRtl_gdoc"
}
freezeTemplate(tmpl);
