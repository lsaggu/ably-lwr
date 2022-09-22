import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom43.css";

import _implicitScopedStylesheets from "./custom43.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M81.7 43.2s.1 0 0 0c.1-.3.2-.4.2-.6v-.2-.6-.4-.2c0-.1-.101-.2-.101-.3s0-.1-.1-.2c0-.1-.101-.2-.2-.3 0-.1-.1-.1-.1-.2l-12-17C68.9 22.5 68 22 67 22H31c-1 0-1.9.5-2.5 1.3l-12 17c0 .1-.1.1-.1.2-.1.1-.1.2-.2.3 0 .1 0 .1-.1.2 0 .1-.1.2-.1.3V42.7c0 .2.1.4.2.5v.1c.1.1.1.3.2.4 0 .1.1.1.1.2l.2.2 30 33 .1.101.1.1.1.099s.1 0 .1.1c.1 0 .1.1.2.1 0 0 .1 0 .1.101 0 0 .1 0 .1.1 0 0 .1 0 .1.101H49.7s.1 0 .1-.101c0 0 .1 0 .1-.1 0 0 .1 0 .1-.101 0 0 .1 0 .1-.1.1 0 .1-.1.2-.1 0 0 .1 0 .1-.101l.1-.1.1-.101.1-.098 30-33 .2-.2c0-.1.1-.1.1-.2.6-.1.7-.2.7-.4zM49 39h-4.8l4.8-8.1 4.8 8.1H49zm0 6h6l-6 19.7L43 45h6zm5.2-17h7.5l-2.8 8-4.7-8zm-15.1 8l-2.8-8h7.5l-4.7 8zm-2.3 9l5.5 18.1L25.8 45h11zm24.4 0h11L55.7 63.1 61.2 45zm12-6h-9l3-8.5 6 8.5zm-42.4-8.5l3 8.5h-9l6-8.5z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom43"
}
freezeTemplate(tmpl);
