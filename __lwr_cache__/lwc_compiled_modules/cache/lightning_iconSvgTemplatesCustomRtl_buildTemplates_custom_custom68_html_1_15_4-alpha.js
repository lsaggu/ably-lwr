import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom68.css";

import _implicitScopedStylesheets from "./custom68.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M50 20c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30zm23.8 27h-7.9c-.3-7.1-1.9-13.3-4.3-18 6.6 3.7 11.2 10.3 12.2 18zM47 27.3V47h-6.9c.5-9.4 3.5-16.8 6.9-19.7zM47 53v19.7c-3.4-2.9-6.4-10.3-6.9-19.7H47zm6 19.7V53h6.9c-.5 9.4-3.5 16.8-6.9 19.7zM53 47V27.3c3.4 2.9 6.4 10.3 6.9 19.7H53zM38.4 29c-2.4 4.7-3.9 10.9-4.3 18h-7.9c1-7.7 5.6-14.3 12.2-18zM26.2 53h7.9c.3 7.1 1.9 13.3 4.3 18-6.6-3.7-11.2-10.3-12.2-18zm35.4 18c2.4-4.7 3.9-10.9 4.301-18H73.8c-1 7.7-5.6 14.3-12.2 18z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom68"
}
freezeTemplate(tmpl);
