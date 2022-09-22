import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom45.css";

import _implicitScopedStylesheets from "./custom45.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M33 43h34v14H33z"${3}><path d="M82 41.3V36c0-3.3-2.7-6-6-6H24c-3.3 0-6 2.7-6 6v5.3c0 .7.4 1.4 1 1.7 2.4 1.4 4 4 4 6.9 0 3-1.6 5.5-4 6.9-.6.4-1 1-1 1.7V64c0 3.3 2.7 6 6 6h52c3.3 0 6-2.7 6-6v-5.3c0-.7-.4-1.4-1-1.7-2.4-1.4-4-4-4-6.9 0-3 1.6-5.5 4-6.9.6-.5 1-1.1 1-1.9zM71 63H29c-1.1 0-2-.9-2-2V39c0-1.1.9-2 2-2h42c1.1 0 2 .9 2 2v22c0 1.1-.9 2-2 2z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom45"
}
freezeTemplate(tmpl);
