import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom92.css";

import _implicitScopedStylesheets from "./custom92.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M73.7 56.4L50.9 46c-.601-.3-1.2-.3-1.8 0L26.3 56.4c-1.3.6-1.7 2.1-.9 3.3 2.4 3.399 3.9 7.8 4.5 9.8.2.8.9 1.3 1.6 1.5 7.9 1.9 14.4 6.4 17.1 8.5.8.6 1.9.6 2.7 0 2.7-2.1 9.3-6.6 17.1-8.5.8-.2 1.399-.7 1.6-1.5.6-2.1 2.1-6.5 4.5-9.8.9-1.1.5-2.7-.8-3.3zM44 62c-1.7 0-3-1.8-3-4s1.3-4 3-4 3 1.8 3 4-1.3 4-3 4zm12 0c-1.7 0-3-1.8-3-4s1.3-4 3-4 3 1.8 3 4-1.3 4-3 4z"${3}><path d="M34.4 46.1l12.2-5.6c1.5-.7 3.1-.9 4.8-.6.699.1 1.399.4 2.1.7l12.1 5.6c.7.3 1.4-.2 1.4-.9v-4.5c0-.5-.2-1-.6-1.4-.8-.9-2.4-2.4-5.4-2.4v-5.9c0-.7-.4-1.4-1-1.7-1.1-.6-3-1.5-6-2V22c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v5.4c-3 .5-4.9 1.4-6 2-.6.3-1 1-1 1.7V37c-3 0-4.6 1.5-5.4 2.3-.4.4-.6.9-.6 1.4v4.5c0 .7.7 1.2 1.4.9z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom92"
}
freezeTemplate(tmpl);
