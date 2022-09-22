import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./answered_twice.css";

import _implicitScopedStylesheets from "./answered_twice.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M17.6 11.4c-8.9 0-16 6.5-16 14.7 0 2.6.7 5 2 7.2.1.3.2.6.1.9l-1.5 4.6c-.3.9.5 1.6 1.4 1.3l4.7-1.6c.3-.1.7-.1.9.1 2.5 1.4 5.3 2.2 8.4 2.2 8.9 0 16-6.5 16-14.7s-7.2-14.7-16-14.7zm7.7 11.4l-8.1 8c-.3.3-.7.5-1.1.5-.4 0-.8-.1-1.1-.5l-4-3.9c-.3-.3-.3-.8 0-1.1l1.1-1.1c.3-.3.8-.3 1.1 0l2.8 2.8 7-6.9c.3-.3.8-.3 1.1 0l1.1 1.1c.4.3.4.8.1 1.1z"${3}><path d="M34.3 11.4h-4.2c4.7 3.4 8.2 8.8 8.2 14.7 0 5.9-3.7 11.5-8.2 14.7h4.2c8.9 0 16-6.5 16-14.7-.1-8.2-7.2-14.7-16-14.7z"${3}></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 52 52"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_answered_twice"
}
freezeTemplate(tmpl);
