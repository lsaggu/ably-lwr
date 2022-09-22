import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom90.css";

import _implicitScopedStylesheets from "./custom90.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M77.4 26L53 29.6V64c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1V30.5L23.4 34H23c-1.5 0-2.8-1.1-3-2.6-.2-1.6.9-3.2 2.5-3.4l18.6-2.8c1.7-3.1 5-5.3 8.8-5.3 2.8 0 5.2 1.1 7 2.9L76.6 20c1.601-.2 3.2.9 3.4 2.5.2 1.7-.9 3.2-2.6 3.5z"${3}><path d="M41.3 62.9c.7-.9.9-2 .4-3.101l-8-19C33.3 39.7 32.2 39 31 39s-2.3.7-2.8 1.8l-8 19c-.4.9-.3 1.9.2 2.8.2.3 4.1 6.3 10.4 6.3 3.7 0 7.3-2 10.5-6zM31 49.7L35.3 60h-8.6L31 49.7zM71.8 34.8a3.077 3.077 0 00-5.6 0l-8 19c-.4.9-.3 1.9.2 2.8.2.3 4.1 6.3 10.4 6.3 3.7 0 7.2-2 10.5-6 .7-.9.9-2 .4-3.101L71.8 34.8zM69 43.7L73.3 54h-8.6L69 43.7zM50 71c-5.6 0-11.3 2-15.3 5.4-.4.4-.7.9-.7 1.5v.1c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2v-.1c0-.601-.2-1.101-.7-1.5C61.3 73 55.6 71 50 71z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom90"
}
freezeTemplate(tmpl);
