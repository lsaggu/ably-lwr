import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./gdocs.css";

import _implicitScopedStylesheets from "./gdocs.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#3C8CEA" d="M5.1 0C2.3 0 0 2.3 0 5.1v53.8C0 61.7 2.3 64 5.1 64h45.8c2.8 0 5.1-2.3 5.1-5.1V20.3L37.1 0h-32z"${3}><path fill="#2D6FE4" d="M56 20.4v1H43.2s-6.4-1.3-6.2-6.7c0 0 .2 5.7 6 5.7h13z"${3}><path opacity=".5" fill="#FFF" d="M37.1 0v14.6c0 1.6 1.1 5.8 6.1 5.8H56L37.1 0z"${3}><path fill="#FFF" d="M25.9 45.1h-7.6v2.2h5.4c-.3 3.2-2.9 4.5-5.4 4.5-3.2 0-5.9-2.5-5.9-6 0-3.4 2.6-6 5.9-6 2.5 0 4.1 1.6 4.1 1.6l1.6-1.6s-2-2.2-5.7-2.2c-4.7 0-8.3 4-8.3 8.2 0 4.2 3.4 8.3 8.4 8.3 4.4 0 7.7-3 7.7-7.5-.1-.9-.2-1.5-.2-1.5z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctypeRtl_gdocs"
}
freezeTemplate(tmpl);
