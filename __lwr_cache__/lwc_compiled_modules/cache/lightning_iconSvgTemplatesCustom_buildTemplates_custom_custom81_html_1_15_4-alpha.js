import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom81.css";

import _implicitScopedStylesheets from "./custom81.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M76.9 20c-1 0-3.9.1-4.9.1-15.4.8-33.1 4.6-34 4.9-1.2.4-2 1.6-2 2.8v32.6c-1-.4-2.6-.6-4-.6-6.6 0-12 4.5-12 10s5.4 10 12 10 12-4.5 12-10V49.4c0-.9.6-1.7 1.5-1.9 4.9-1.2 11.7-2.5 24.4-3.3 1.199-.1 2.1.8 2.1 2v10.3c-1-.4-2.6-.6-4-.6-6.6 0-12 4.5-12 10s5.4 10 12 10 12-4.5 12-10V23c0-1.7-1.4-3.1-3.1-3zm-6.8 15.8c-12.2.7-18.4 1.9-23.7 3.1-1.3.3-2.4-.7-2.4-2v-3.1c0-.9.6-1.7 1.6-2 5.2-1.2 11.5-2.5 24.3-3.3 1.199-.1 2.1.8 2.1 2v3.2c0 1.2-.8 2.1-1.9 2.1z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom81"
}
freezeTemplate(tmpl);
