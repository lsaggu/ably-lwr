import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./broadcast.css";

import _implicitScopedStylesheets from "./broadcast.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M2 18.992c0 5.832 2.28 11.292 6.362 15.374.902.899 2.28.899 3.181 0 .902-.9.902-2.279 0-3.183-3.233-3.231-5.036-7.58-5.088-12.19.053-4.612 1.855-8.959 5.088-12.193.902-.901.902-2.279 0-3.181-.901-.9-2.28-.901-3.181 0A21.61 21.61 0 002 18.992z"${3}><path d="M14.723 28.004c.902.902 2.28.902 3.182 0 .9-.9.9-2.278 0-3.181-1.538-1.537-2.438-3.605-2.438-5.831-.001-2.227.847-4.241 2.438-5.832.9-.901.9-2.279 0-3.181-.902-.9-2.28-.901-3.182 0a12.715 12.715 0 00-3.71 9.012c0 3.394 1.325 6.628 3.71 9.013z"${3}></g><g${3}><path d="M43.499 3.618c-.901-.901-2.28-.9-3.181 0-.901.902-.901 2.28 0 3.181 3.232 3.234 5.035 7.581 5.089 12.193-.054 4.611-1.855 8.959-5.089 12.191-.901.901-.901 2.28 0 3.182.899.9 2.277.9 3.181 0a21.614 21.614 0 006.36-15.374c0-5.83-2.277-11.29-6.36-15.373z"${3}><path d="M40.85 18.992c-.002-3.392-1.326-6.627-3.713-9.012-.9-.901-2.279-.9-3.181 0-.901.902-.899 2.28 0 3.181 1.591 1.59 2.438 3.604 2.438 5.832 0 2.226-.9 4.294-2.438 5.831-.901.902-.899 2.279 0 3.181.901.902 2.28.902 3.181 0a12.724 12.724 0 003.713-9.013z"${3}></g><path d="M23.662 24.349a5.858 5.858 0 012.247-11.268 5.856 5.856 0 012.28 11.253l-.03 2.759v20.844c0 .601-.524 1.125-1.125 1.052h-2.249c-.599 0-1.125-.525-1.125-1.125V27.02l.002-2.671z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_broadcast"
}
freezeTemplate(tmpl);
