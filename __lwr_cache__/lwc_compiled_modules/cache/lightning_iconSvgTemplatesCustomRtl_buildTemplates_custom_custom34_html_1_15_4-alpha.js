import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom34.css";

import _implicitScopedStylesheets from "./custom34.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M42 30h16c1.1 0 2-1.1 1.8-2.2-1-4.5-5-7.8-9.8-7.8s-8.8 3.4-9.8 7.8c-.2 1.1.7 2.2 1.8 2.2z"${3}><path d="M77 56c1.7 0 3.1-1.4 3-3.2-.1-1.6-1.5-2.8-3.2-2.8H68v-5c5.8-2.3 9.9-8.5 10-15.9 0-1.5-1-2.8-2.5-3.1-1.9-.3-3.5 1.1-3.5 3 0 4.3-2 8-4.9 9.8-1.1-1.7-3-2.8-5.1-2.8H38c-2.1 0-4 1.1-5.1 2.8C30 37 28 33.4 28 29.2c0-1.6-1.2-3.1-2.8-3.2-1.8-.1-3.2 1.3-3.2 3 0 7.4 4.2 13.7 10 16v5h-8.8c-1.6 0-3.1 1.2-3.2 2.8-.1 1.7 1.3 3.2 3 3.2h9v5c-5.8 2.3-9.9 8.5-10 15.9 0 1.5 1 2.8 2.5 3.1 1.9.3 3.5-1.1 3.5-3 0-4.2 1.9-7.9 4.8-9.7 1.7 5.601 6.1 10 11.6 11.8 1.3.4 2.6-.6 2.6-1.899v-24c0-1.601 1.2-3.1 2.8-3.2 1.7-.1 3.2 1.3 3.2 3v24.2c0 1.399 1.3 2.3 2.6 1.899 5.5-1.8 9.9-6.199 11.601-11.8 2.8 1.8 4.7 5.4 4.8 9.5 0 1.601 1.2 3.101 2.8 3.2 1.8.1 3.2-1.3 3.2-3 0-7.4-4.2-13.7-10-16v-5H77z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom34"
}
freezeTemplate(tmpl);
