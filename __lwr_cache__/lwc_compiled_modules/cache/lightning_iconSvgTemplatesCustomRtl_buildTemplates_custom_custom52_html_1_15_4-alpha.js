import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom52.css";

import _implicitScopedStylesheets from "./custom52.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M79.9 35.1c.199-3.2 0-6.4-.5-9.5-.4-2.6-2.4-4.6-5-5-3.2-.5-6.301-.7-9.5-.5-.9 0-1.301 1.1-.7 1.7l14 14c.6.6 1.7.1 1.7-.7zM56.3 22.3c-.5-.5-1.3-.7-1.899-.5-7.5 2.1-14.7 6.1-20.601 12.1-5.8 5.8-9.7 12.7-11.9 20-.2.699 0 1.5.5 2l21.8 21.8c.5.5 1.3.7 2 .5 7.3-2.2 14.2-6.101 20-11.9 5.899-5.899 10-13 12.1-20.6.2-.7 0-1.4-.5-1.9L56.3 22.3zm-8.4 39.3c-1.2 1.2-3.1 1.2-4.2 0L38.1 56c-1.2-1.2-1.2-3.1 0-4.2 1.2-1.2 3.1-1.2 4.2 0l5.6 5.601c1.2 1.099 1.2 2.999 0 4.199zm7-7c-1.2 1.2-3.101 1.2-4.2 0L45.1 49c-1.2-1.2-1.2-3.1 0-4.2 1.2-1.2 3.1-1.2 4.2 0l5.601 5.6c1.199 1.1 1.199 3-.001 4.2zm7-7.1c-1.2 1.2-3.101 1.2-4.2 0l-5.6-5.6c-1.199-1.2-1.199-3.1 0-4.2 1.2-1.2 3.101-1.2 4.2 0l5.601 5.6c1.199 1.2 1.199 3.1-.001 4.2zM20.1 64.3c-.2 3.4-.1 6.8.5 10.2.4 2.6 2.4 4.6 5 5 3.4.5 6.8.7 10.2.5.9-.1 1.3-1.1.7-1.7L21.8 63.6c-.6-.6-1.7-.2-1.7.7z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom52"
}
freezeTemplate(tmpl);
