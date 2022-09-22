import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom88.css";

import _implicitScopedStylesheets from "./custom88.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M78.1 70H21.9c-1 0-1.9.8-1.9 1.8v.1c0 4.5 5.6 8.1 10 8.1h40c4.4 0 10-3.6 10-8.1v-.1c0-1-.9-1.8-1.9-1.8zM23 64h18c1.1 0 2-1.1 2-2.2V27.4c0-.5-.7-.7-.9-.2l-20 35.2c-.3.7.1 1.6.9 1.6zM51 64h25c1.2 0 2.1-1.1 2-2.3-.9-7.2-2.1-29.6-27.6-41.6-.6-.3-1.4.1-1.4.9v40.8c0 1.1.9 2.2 2 2.2z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom88"
}
freezeTemplate(tmpl);
