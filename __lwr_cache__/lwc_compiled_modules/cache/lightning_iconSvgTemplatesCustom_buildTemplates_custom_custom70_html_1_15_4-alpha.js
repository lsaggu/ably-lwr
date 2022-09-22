import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom70.css";

import _implicitScopedStylesheets from "./custom70.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M47.9 63.8L36.4 52.5c-2.4-2.3-6.2-2.3-8.6 0l-7.2 7.1c-.8.801-.8 2.101 0 2.801L22 63.8l1.4 1.4L35 76.6l.7.7 2.2 2.101c.8.8 2.1.8 2.9 0L48 72.3c2.3-2.3 2.3-6.1-.1-8.5zm-18.7-4.2l1.5-1.399c.8-.8 2-.8 2.8 0l8.7 8.5c.8.8.8 2.1 0 2.8l-1.5 1.4c-.8.8-2 .8-2.8 0l-8.7-8.5c-.8-.801-.8-2.101 0-2.801zM41.7 49.2l9.3 9.1c.2.2.4.3.7.3l4.3-.1c.5 0 .9-.4.9-.9l.1-3.7c0-.5.4-.9.9-.9l3.8-.1c.5 0 .899-.4.899-.9l.101-3.7c0-.5.399-.9.899-.9l3.801-.1c.5 0 .899-.4.899-.9l.101-3.7c0-.5.399-.9.899-.9l3.8-.1c.5 0 .9-.4.9-.9l.1-3.8c0-.5.4-.8.801-.9l4.1-.6c.7-.1 1.1-.9.7-1.5l-8.8-13c-.7-1-2.101-1.1-3-.3l-26.3 26c-.6.6-.6 1.8.1 2.5z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom70"
}
freezeTemplate(tmpl);
