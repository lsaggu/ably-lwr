import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom14.css";

import _implicitScopedStylesheets from "./custom14.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M78 33h-6c-1.3 0-2.6-.6-3.6-1.5l-4.8-4.1c-1-.8-2.3-1.4-3.6-1.4H48.3c-1.5 0-2.9.6-4 1.7l-6.2 5.1c-.5.4-.5 1.2-.1 1.7l1.9 1.8c1.3 1 3 1.2 4.3.3l5.5-3.3c.7-.5 1.7-.3 2.3.3l17.3 16.8c.4.4.7 1 .7 1.6v4.5c0 1.2.9 2.5 2 2.5h6c1.1 0 2-.9 2-2.1V35c0-1.2-.9-2-2-2z"${3}><path d="M61 51L50.2 40.5l-3 1.8c-1.5.9-3.2 1.4-4.9 1.4-2.1 0-4.3-.8-6-2.2l-3.9-3.2c-.9-.7-1.4-1.5-1.5-2.6-.2-1.1-1-1.7-2-1.7H22c-1.1 0-2 .6-2 1.8V54c0 1.2.9 2 2 2h4c.3 0 .7-1.1 1.1-1.6 1.5-2 3.7-3.101 6.1-3.4 2.4-.2 4.7.6 6.6 2.3l12.5 11.4c1.101 1 1.9 2.1 2.4 3.5.3.7 1.1.899 1.6.399L61 63.9c2.4-2.4 4.2-8 2-10.601L61 51z"${3}><path d="M35.9 58.4c-1.3-1.2-3.2-1-4.2.399-1.1 1.4-.9 3.4.4 4.601l12.5 11.3c.6.6 1.4.8 2.2.7.8-.101 1.5-.5 2-1.2 1.1-1.4.9-3.4-.4-4.601L35.9 58.4z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom14"
}
freezeTemplate(tmpl);
