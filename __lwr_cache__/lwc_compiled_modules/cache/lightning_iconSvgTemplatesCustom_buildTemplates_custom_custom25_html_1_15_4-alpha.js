import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom25.css";

import _implicitScopedStylesheets from "./custom25.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M79.8 27.3c-.7-3.7-3.8-6.7-7.6-7.2-2.7-.4-5.2.5-7.101 2-.6.5-.5 1.3.2 1.7 4.601 2.4 8.5 5.9 11.5 10.1.4.6 1.3.6 1.7 0C79.8 32 80.3 29.7 79.8 27.3zM34.6 23.8c.6-.3.7-1.2.2-1.7-1.9-1.6-4.4-2.4-7.1-2-3.8.5-6.9 3.5-7.6 7.2-.4 2.4.1 4.7 1.3 6.5.4.6 1.3.6 1.7 0 3-4.1 6.9-7.6 11.5-10zM50 26c-14.9 0-27 12.1-27 27 0 6 2 11.6 5.3 16l-4.1 4.1c-1.6 1.601-1.6 4.101 0 5.7.8.8 1.8 1.2 2.8 1.2s2-.4 2.8-1.2l4.1-4.1C38.4 78 44 80 50 80s11.6-2 16-5.3l4.1 4.1C71 79.6 72 80 73 80s2-.4 2.8-1.2c1.601-1.6 1.601-4.1 0-5.7L71.7 69C75 64.6 77 59 77 53c0-14.9-12.1-27-27-27zM31 53c0-10.5 8.5-19 19-19s19 8.5 19 19-8.5 19-19 19-19-8.5-19-19z"${3}><path d="M53 51.8V44c0-1.7-1.3-3-3-3s-3 1.3-3 3v9c0 .8.3 1.6.9 2.1l7 7c.6.6 1.4.9 2.1.9s1.5-.3 2.1-.9c1.2-1.199 1.2-3.1 0-4.199L53 51.8z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom25"
}
freezeTemplate(tmpl);
