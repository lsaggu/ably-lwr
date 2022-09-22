import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom96.css";

import _implicitScopedStylesheets from "./custom96.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M79.4 28.7l-5.2-3.9c-.7-.5-1.5-.8-2.4-.8H54v-2c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H26c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h45.7c.899 0 1.7-.3 2.399-.8l5.2-3.9c.901-.7.901-1.9.101-2.6zM74 46H54v-3c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v3H28.3c-.9 0-1.7.3-2.4.8l-5.2 3.9c-.9.6-.9 1.899 0 2.6l5.2 3.9c.7.5 1.5.8 2.4.8H74c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zM54 71.6V65c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v6.6c-4 1.101-6.2 3.5-6.9 6.5-.2.9.5 1.9 1.5 1.9h18.9c1 0 1.7-.9 1.5-1.9-.8-3-3-5.4-7-6.5z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom96"
}
freezeTemplate(tmpl);
