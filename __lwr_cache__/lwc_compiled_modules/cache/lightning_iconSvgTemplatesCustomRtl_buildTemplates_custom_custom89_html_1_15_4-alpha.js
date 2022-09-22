import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom89.css";

import _implicitScopedStylesheets from "./custom89.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M57.9 43.4c-.4-.5-1.2-.4-1.5.2-1.2 1.7-2.4 4.3-2.4 7.4v11c0 1.6-1.3 3-3 3-1.6 0-3-1.3-3-3v-3.1-31.101c0-7.7-6.7-8.9-11.6-7C35.1 21.2 33.9 22 33 23c-.6.7-1.3 1.3-2.2 1.6-1.8.6-4.9-1.1-6.5-2.1-.9-.5-2.1-.3-2.7.5l-1.2 1.7c-.7.9-.4 2.3.5 2.9 1.9 1.2 4.9 3.1 7.2 3.5 3.5.6 6.7-.5 9.3-2.9l-.1.1c.7-.6 1.9-1.6 2.7-.5 2 3-6 16.1-6 35.2v1.6c0 8.1 8.2 15.1 16.3 15.5 8.6.4 15.7-6.5 15.7-15 0-4.3 1.6-7.1 3.2-8.8a.967.967 0 000-1.399L57.9 43.4zM77 53c-.8 0-1.5-.3-2.1-.9l-16-16c-1.2-1.2-1.2-3.1 0-4.2 1.199-1.2 3.1-1.2 4.199 0l16 16c1.2 1.2 1.2 3.1 0 4.2-.599.6-1.299.9-2.099.9z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom89"
}
freezeTemplate(tmpl);
