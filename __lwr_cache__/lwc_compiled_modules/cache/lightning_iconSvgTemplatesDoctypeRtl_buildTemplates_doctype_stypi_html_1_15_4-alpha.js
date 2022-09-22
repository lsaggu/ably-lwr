import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./stypi.css";

import _implicitScopedStylesheets from "./stypi.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill-rule="evenodd" clip-rule="evenodd" fill="#DDD965" d="M5.1 0C2.3 0 0 2.3 0 5.1v53.8C0 61.7 2.3 64 5.1 64h45.7c2.8 0 5.1-2.3 5.1-5.1V20.3L37 0H5.1z"${3}><path fill-rule="evenodd" clip-rule="evenodd" fill="#C1BC45" d="M56 20.4v1H43.2s-6.3-1.3-6.2-6.8c0 0 .3 5.8 6.1 5.8H56z"${3}><path opacity=".5" fill-rule="evenodd" clip-rule="evenodd" fill="#FFF" d="M37.1 0v14.6c0 1.6 1.1 5.8 6.1 5.8H56L37.1 0z"${3}><path fill-rule="evenodd" clip-rule="evenodd" fill="#FFF" d="M10.2 36.4v11.5l6.1 6h13.1c.9 0 1.6-.7 1.6-1.5v-16c0-.9-.7-1.6-1.6-1.6H11.8c-.9 0-1.6.7-1.6 1.6z"${3}><path fill-rule="evenodd" clip-rule="evenodd" fill="#DBD75D" d="M27.5 45.2H13.8v-1.6h13.7v1.6zm0-3.6H13.8V40h13.7v1.6zm0 7.2h-8.9v-1.7h8.9v1.7z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctypeRtl_stypi"
}
freezeTemplate(tmpl);
