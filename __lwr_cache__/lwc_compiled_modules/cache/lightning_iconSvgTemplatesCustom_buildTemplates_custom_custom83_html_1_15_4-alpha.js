import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom83.css";

import _implicitScopedStylesheets from "./custom83.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M74.6 39.3c.4.4 1 .4 1.4 0l1.4-1.4c3.4-3.4 3.5-8.6.2-11.9 0 0-4.3-4.4-4.399-4.4-3.4-2.8-8.101-1.5-10.8 1.2L61 24.2c-.4.4-.4 1 0 1.4l13.6 13.7zM56.6 29.8c-.399-.4-1-.4-1.399 0L27.7 57.1c-1.5 1.5-2.6 3.301-3.3 5.4L20.2 76c-.3.8-.2 1.8.2 2.5.6 1 1.6 1.5 2.6 1.5.3 0 .6 0 .9-.1 0 0 9.2-2.9 13.7-4.301 2-.6 3.8-1.699 5.3-3.199L70.3 45c.4-.4.4-1 0-1.4L56.6 29.8zM35.8 69.9c-2.1.699-5.4 1.699-8.2 2.6l2.6-8.2c.3-1.1.9-2 1.7-2.8l6.7 6.7c-.8.8-1.8 1.4-2.8 1.7z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom83"
}
freezeTemplate(tmpl);
