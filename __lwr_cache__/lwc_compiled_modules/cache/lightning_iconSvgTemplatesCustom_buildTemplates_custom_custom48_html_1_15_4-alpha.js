import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom48.css";

import _implicitScopedStylesheets from "./custom48.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M78 24H68v-2c0-1.1-.9-2-2-2H34c-1.1 0-2 .9-2 2v2H22c-1.1 0-2 .9-2 2v13c0 5 4 9 9 9h4.6c2.8 6.4 8.9 10.9 16.3 11 7.6.1 14-4.5 16.7-11H71c5 0 9-4 9-9V26c0-1.1-.9-2-2-2zM29 42c-1.7 0-3-1.3-3-3v-9h6v10.6c0 .5 0 .9.1 1.4H29zm45-3c0 1.7-1.3 3-3 3h-3.1c0-.4.1-.9.1-1.3V30h6v9zM60 74h-1c-3.3 0-6-2.7-6-6v-2c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1v2c0 3.3-2.7 6-6 6h-1c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom48"
}
freezeTemplate(tmpl);
