import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom95.css";

import _implicitScopedStylesheets from "./custom95.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M53 30.2V26h1c1.6 0 3-1.3 3-3 0-1.6-1.3-3-3-3h-8c-1.6 0-3 1.3-3 3 0 1.6 1.3 3 3 3h1v4.2c-12.4 1.5-22 12-22 24.8 0 13.8 11.2 25 25 25s25-11.2 25-25c0-12.8-9.6-23.3-22-24.8zM50 74c-10.5 0-19-8.5-19-19s8.5-19 19-19 19 8.5 19 19-8.5 19-19 19z"${3}><path d="M56.6 44.8L52 49.4c-.6-.2-1.3-.4-2-.4-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6c0-.7-.1-1.4-.4-2l4.601-4.6c1-1 1-2.6 0-3.6-1.001-1.1-2.601-1.1-3.601 0z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom95"
}
freezeTemplate(tmpl);
