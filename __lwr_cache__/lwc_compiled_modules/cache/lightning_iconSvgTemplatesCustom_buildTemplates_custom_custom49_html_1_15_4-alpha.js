import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom49.css";

import _implicitScopedStylesheets from "./custom49.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M50 41c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 14c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"${3}><path d="M50 20c-16.6 0-30 13.4-30 30s13.4 30 30 30 30-13.4 30-30-13.4-30-30-30zm0 52.9c0 1.199-1 2.1-2.2 2-12.1-1-21.7-10.7-22.8-22.8 0-1.1.9-2.1 2.1-2.1h2c1 0 1.9.8 2 1.8.9 9 8.1 16.2 17.1 17.1 1 .1 1.8 1 1.8 2v2zm0-7.9c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.7 15-15 15zm22.9-15h-2c-1 0-1.9-.8-2-1.8-.9-9-8.1-16.2-17.1-17.1-1-.1-1.8-1-1.8-2v-2c0-1.2 1-2.1 2.2-2 12.1 1 21.7 10.7 22.8 22.8 0 1.1-.9 2.1-2.1 2.1z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom49"
}
freezeTemplate(tmpl);
