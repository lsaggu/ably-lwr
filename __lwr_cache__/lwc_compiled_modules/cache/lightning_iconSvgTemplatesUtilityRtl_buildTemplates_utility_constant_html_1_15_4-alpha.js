import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./constant.css";

import _implicitScopedStylesheets from "./constant.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M49.1 7.7c-.3-.3-.6-.4-1-.4-3.8-.2-7.7.1-11.5.2H23.1c-4.1 0-7.4.9-10.5 3.7-2 1.8-3.9 4.4-5.4 6.7-.1.3-.2.5-.2.9 0 .8.7 1.5 1.5 1.5.9 0 1.1-.6 1.5-1.2.4-.7.9-1.3 1.5-1.8 2.1-1.9 4.9-3 7.7-2.7-2.4 6.6-5.7 14.2-10.5 19.4-2 2.2-5.4 4.4-6.1 7.4-.8 3.1 2.4 3.9 4.7 3 3-1.2 4.9-4.3 6.4-7 1.9-3.3 3.6-6.8 5-10.3 1.5-3.5 2.9-6.9 4.4-10.4.9-2.1 1.1-2.1 3.3-2.1h5.9c-2.2 4.8-4.3 9.7-6.2 14.6-1.5 3.7-4.2 9.2-2.3 13.2 1.9 4 7.2 2.5 10.1.5 2.9-2.1 4.9-5.4 6.5-8.6.3-.6.6-1.2.4-1.9-.2-.6-.8-.9-1.4-.9-1.4 0-1.6 1.6-2.1 2.6-.8 1.7-2.6 3.2-4.5 2.9-4.4-.6-.5-8.6.3-10.7.8-2.2 1.7-4.4 2.7-6.5.5-1.2 1-2.5 1.7-3.7.8-1.5.8-1.5 2.6-1.6 1.5-.1 5.9.7 7.2-.1 1.1-.7 1.7-3.3 2.2-5.2.1-.6-.1-1.1-.4-1.5z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_constant"
}
freezeTemplate(tmpl);
