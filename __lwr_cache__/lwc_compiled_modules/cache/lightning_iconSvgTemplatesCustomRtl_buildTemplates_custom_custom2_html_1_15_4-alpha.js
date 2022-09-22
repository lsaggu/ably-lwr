import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom2.css";

import _implicitScopedStylesheets from "./custom2.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M59 22c-3-2-13.8-3.9-18 3-2 3.3.4 9.1 2.2 12.8.5.9 1.5 1.4 2.5 1 1.3-.5 2.8-.8 4.3-.8 1 0 2 .1 3 .4.9.2 1.8-.2 2.2-1 .7-1.3 1.899-2.8 3.8-4.4 5-4 3-9 0-11zM53.8 61.4c-1.2.4-2.5.6-3.8.6-1.2 0-2.4-.2-3.5-.5-.9-.3-1.9.2-2.3 1-.7 1.3-1.9 2.9-3.9 4.5-5 4-3 9.1 0 11.1s13.9 3.9 18-3c1.9-3.199-.3-9-2.1-12.699-.5-.901-1.5-1.301-2.4-1.001zM75 41c-3.3-2-9.1.4-12.8 2.2-.9.5-1.4 1.5-1 2.5.5 1.3.8 2.8.8 4.3 0 1-.1 2-.4 3-.199.9.2 1.8 1 2.2 1.3.7 2.8 1.9 4.4 3.8 4 5 9 3 11 0s3.9-13.9-3-18zM38.6 53.8c-.4-1.2-.6-2.5-.6-3.8 0-1.2.2-2.4.5-3.5.3-.9-.2-1.9-1-2.3-1.3-.7-2.9-1.9-4.5-3.9-4-5-9.1-3-11.1 0s-3.9 13.8 3 18c3.2 1.9 9-.3 12.7-2.1.9-.5 1.3-1.5 1-2.4z"${3}><circle cx="50" cy="50" r="6"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom2"
}
freezeTemplate(tmpl);
