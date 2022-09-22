import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom107.css";

import _implicitScopedStylesheets from "./custom107.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M77.734 51.48h-5.968v26.188a1.221 1.221 0 01-1.295 1.27H58.545a1.189 1.189 0 01-1.04-1.295V57.447H42.987v20.221c.049.63-.405 1.19-1.033 1.27H30.029a1.221 1.221 0 01-1.295-1.295V51.48h-5.968c-.516 0-1.04-.263-1.04-.78-.263-.516-.263-1.04.262-1.294L49.47 21.922c.517-.516 1.295-.516 1.558 0L78.512 49.43c.517.263.517.779.263 1.295-.255.517-.517.78-1.041.78v-.025z" fill-rule="evenodd"${3}></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom107"
}
freezeTemplate(tmpl);
