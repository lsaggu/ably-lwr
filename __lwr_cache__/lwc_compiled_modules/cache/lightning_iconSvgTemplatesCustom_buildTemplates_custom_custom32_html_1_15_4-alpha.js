import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom32.css";

import _implicitScopedStylesheets from "./custom32.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M78.5 35.3L55.1 48.6c-.5.3-1 .4-1.5.4-1.1 0-2.199-.6-2.699-1.7-.7-1.4 0-3.2 1.399-4l7.8-4.4v-7.7c0-.8-.8-1.2-1.5-.9L30.1 46.6c-.5.3-1 .4-1.5.4-1 0-2.1-.5-2.6-1.5-.8-1.4-.3-3.3 1.1-4.1l4.9-2.8V22c0-1.1-.9-2-2-2h-8c-1.1 0-2 .9-2 2v52c0 3.3 2.7 6 6 6h17c1.1 0 2-.9 2-2v-7c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v7c0 1.1.9 2 2 2h17c3.3 0 6-2.7 6-6V36.2c0-.8-.8-1.3-1.5-.9zM35 63c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v6zm12 0c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v6zm12 0c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v6zm12 0c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v6z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom32"
}
freezeTemplate(tmpl);
