import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom56.css";

import _implicitScopedStylesheets from "./custom56.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M62.7 30.3c-6.3 6.3-13.9-1.4-20.9 5.6L21.7 56c-2.3 2.3-2.3 6 0 8.3l7 7 7 7c2.3 2.3 6 2.3 8.3 0l20.2-20.2c7-7-.7-14.6 5.6-20.899l1.601-1.6c.399-.4.399-1 0-1.4l-5.5-5.5c-.4-.4-1-.4-1.4 0L62.7 30.3zM57.9 56l-7 7c-.8.8-2 .8-2.8 0l-5.6-5.6-5.6-5.6c-.8-.8-.8-2 0-2.8l7-7c.8-.8 2-.8 2.8 0l5.6 5.6 5.601 5.6c.799.8.799 2-.001 2.8zM79.4 24.7l-2.1-2.1-2.1-2.1c-.8-.8-2-.8-2.8 0l-2.6 2.6c-.399.4-.399 1 0 1.4l5.5 5.5c.4.4 1 .4 1.4 0l2.6-2.6c.9-.6.9-1.9.1-2.7z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom56"
}
freezeTemplate(tmpl);
