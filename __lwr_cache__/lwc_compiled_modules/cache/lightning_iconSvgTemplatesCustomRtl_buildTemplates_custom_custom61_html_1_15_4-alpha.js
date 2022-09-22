import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom61.css";

import _implicitScopedStylesheets from "./custom61.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M73 20h-4c-1.1 0-2 .9-2 2v4c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-4c0-1.1-.8-2-2-2h-4c-1.1 0-2 .9-2 2v4c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v4c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v10c0 3.3 2.7 6 6 6h38c3.3 0 6-2.7 6-6V22c0-1.1-.9-2-2-2zM68.5 45.7c-.1-1-1-1.7-2-1.7h-33c-1 0-1.9.7-2 1.7l-4.5 32c-.2 1.2.8 2.3 2 2.3h12.9c1.1 0 2.1-.9 2.1-2v-9.7c0-3.3 2.5-6.2 5.8-6.2 3.4-.1 6.2 2.601 6.2 6v10c0 1.101 1 2 2.1 2H71c1.2 0 2.2-1.1 2-2.3l-4.5-32.1z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom61"
}
freezeTemplate(tmpl);
