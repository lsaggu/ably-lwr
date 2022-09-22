import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom65.css";

import _implicitScopedStylesheets from "./custom65.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M72.1 67H21.9c-1 0-1.9.9-1.9 1.9v.1c0 3.3 2.7 6 6 6h42c3.3 0 6-2.7 6-6v-.1c0-1-.9-1.9-1.9-1.9zM70 27H22.1c-1 0-1.8.9-1.9 2-.3 2.7-.3 7.5.1 10.4 1.3 9.3 6.3 17.2 13.2 21.4.3.2.7.3 1 .3h20.9c.399 0 .699-.1 1-.3 3.899-2.399 7.3-6 9.6-10.4 1.2.4 2.5.6 3.9.6 6.6 0 12-5.4 12-12S76.6 27 70 27zm0 18c-.5 0-1-.1-1.5-.2 1-3.2 1.5-6.6 1.5-10.2V33c3.3 0 6 2.7 6 6s-2.7 6-6 6z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom65"
}
freezeTemplate(tmpl);
