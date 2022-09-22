import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contact_request.css";

import _implicitScopedStylesheets from "./contact_request.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M26 4C12.8 4 2.2 13.8 2.2 25.8c0 3.8 1.1 7.4 2.9 10.6.3.5.4 1.1.2 1.7l-3.1 8.5c-.3.8.5 1.5 1.3 1.3l8.7-3.3c.5-.2 1.1-.1 1.7.2 3.6 2 7.9 3.2 12.5 3.2 5.9-.1 11.4-2.1 15.5-5.5 1.9-1.4 3.9-4 3.9-4C48.4 34.9 50 30.6 50 26 49.9 13.7 39.2 4 26 4zm13 21.6L28.1 36.3c-.5.5-1.2.4-1.7 0l-1.7-1.7c-.5-.5-.4-1.2 0-1.7l4.4-4.4c.4-.4.1-1.3-.6-1.3h-1.2c-4.9-.1-9.2 3-11 7.3-.2.3-.7.6-1.1.1L13 32.4c-.4-.4-.5-1-.3-1.1 2.7-5.2 8.2-8.9 13.9-8.9 0 0 2.2-.1 2.1-.1.7 0 1-.9.6-1.3l-4.4-4.5c-.4-.4-.3-1.2.1-1.7l1.7-1.7c.5-.5 1.2-.4 1.7 0L39 24c.5.5.5 1.2 0 1.6z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_contact_request"
}
freezeTemplate(tmpl);
