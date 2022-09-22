import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom24.css";

import _implicitScopedStylesheets from "./custom24.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M68.1 20H31.9c-3.3 0-5.9 2.7-5.9 5.9v.1c0 1.1.9 2 2 2h44c1.1 0 2-.9 2-2v-.1c0-3.2-2.7-5.9-5.9-5.9zM68 34H32c-1.1 0-2 .9-2 2v42c0 1.1.9 2 2 2h11.1c1.1 0 1.9-.9 1.9-2v-8c0-1.1 1-2 2.1-2h5.8c1.1 0 2.1.9 2.1 2v8c0 1.1.8 2 1.9 2H68c1.1 0 2-.9 2-2V36c0-1.1-.9-2-2-2zM47 61c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4zm0-14c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4zm14 14c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4zm0-14c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom24"
}
freezeTemplate(tmpl);
