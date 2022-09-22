import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./bucket.css";

import _implicitScopedStylesheets from "./bucket.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M49 11c0-6.2-9.8-9-19-9s-19 2.8-19 9v.4C2.4 14 1 19.5 1 22.6c0 3 1.5 6.1 4.1 8.3 2.3 1.9 5.1 3 7.9 3.1h.8c6.5-.2 12.9-2.3 14.7-5.9-.9-.7-1.5-1.9-1.5-3.1 0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.7-1 3.1-2.5 3.7-2 5.6-10 9.3-19.5 9.3v6c0 3.3 7.6 6 17 6s17-2.7 17-6V15.3c1.3-1.2 2-2.6 2-4.3zM30 8c6.6 0 10.8 1.5 12.4 2.6.3.2.3.6 0 .8C40.8 12.5 36.6 14 30 14s-10.8-1.5-12.4-2.6c-.3-.2-.3-.6 0-.8C19.2 9.5 23.4 8 30 8zM7.7 27.8C6 26.4 5 24.5 5 22.6c0-4.5 4.1-6.6 7.7-7.5l.3.3V30c-1.9-.1-3.8-.9-5.3-2.2z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_bucket"
}
freezeTemplate(tmpl);
