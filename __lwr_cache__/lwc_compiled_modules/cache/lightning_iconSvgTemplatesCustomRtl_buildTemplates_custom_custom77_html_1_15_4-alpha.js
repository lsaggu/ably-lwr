import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom77.css";

import _implicitScopedStylesheets from "./custom77.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M32 42h4c.6 0 1-.4 1-1v-1.5C37 31.9 42.7 26 50 26s13 5.9 13 13.5V41c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-1.5C69 28.6 60.7 20 50 20s-19 8.6-19 19.5V41c0 .6.4 1 1 1zM70 48H31c-3.3 0-6 2.7-6 6v20c0 3.3 2.7 6 6 6h39c3.3 0 6-2.7 6-6V54c0-3.3-2.7-6-6-6zM55.3 64.1c-.899 1.4-1.399 3-1 4.601l.7 3c.2 1.1-.6 2.3-1.8 2.3h-6.4c-1.2 0-2-1.2-1.8-2.3l.7-3.101c.4-1.6-.1-3.199-1-4.5-.9-1.3-1.3-2.899-1-4.5.5-2.399 2.5-4.3 5-4.8 4.1-.8 7.6 2.2 7.6 5.9 0 1.3-.4 2.4-1 3.4z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom77"
}
freezeTemplate(tmpl);
