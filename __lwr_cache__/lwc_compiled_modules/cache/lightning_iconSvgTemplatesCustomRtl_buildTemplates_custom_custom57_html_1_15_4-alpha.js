import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom57.css";

import _implicitScopedStylesheets from "./custom57.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M53 52.6V77c0 .8.8 1.2 1.5.9 4.8-2.7 19.4-11 19.4-11 1.9-1.1 3.1-3.1 3.1-5.3V39.7c0-.8-.8-1.2-1.5-.9L54 50.9c-.6.4-1 1-1 1.7zM51 45.8l21.6-12.1c.7-.4.7-1.3 0-1.7-4.8-2.7-19.5-11.1-19.5-11.1a6.237 6.237 0 00-6.2 0S32.2 29.2 27.4 32c-.7.4-.7 1.3 0 1.7L49 45.8c.6.3 1.4.3 2 0zM46 50.9L24.5 38.8c-.7-.4-1.5.1-1.5.9v21.8c0 2.2 1.2 4.2 3.1 5.3 0 0 14.6 8.3 19.4 11 .7.4 1.5-.1 1.5-.899V52.6c0-.7-.4-1.3-1-1.7z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom57"
}
freezeTemplate(tmpl);
