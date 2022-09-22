import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom69.css";

import _implicitScopedStylesheets from "./custom69.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M52.6 45.1c-5.7-4.3-11.5-2.2-15.3 1.4-1.4 1.3-3.6 2.1-6 2.8-2.8.9-5.7 1.8-7.8 3.9-5.6 5.5-4.5 12.1 3.3 19.8l.1.1.1.1c4.6 4.5 8.8 6.7 12.6 6.7 2.8 0 5.3-1.101 7.7-3.4 2.1-2 3.1-4.9 4-7.6.8-2.3 1.6-4.6 2.9-5.9 2.3-2.2 3.6-4.8 3.899-7.4.201-1.9-.199-4.6-2.399-7.4 0 0-1.2-1.6-3.1-3.1zM40.2 69.2c-.5.5-1.2.8-2 .8s-1.4-.3-1.9-.8l-5.5-5.5c-1.1-1.101-1.1-2.8 0-3.9s2.8-1.1 3.9 0l5.5 5.5c1.1 1.1 1.1 2.8 0 3.9zM45 61c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zM79.4 25.2l-4.6-4.6c-.8-.8-2.2-.8-3.1 0l-5.1 5.1c-.8.8-.8 2.2 0 3.1l.2.2-10.3 10.3c-.4.4-.4 1.1 0 1.5.8.7 2.1 1.9 2.9 2.7.399.4 1 .4 1.399 0L71 33.3l.2.2c.8.8 2.2.8 3.1 0l5.101-5.1c.799-.9.799-2.3-.001-3.2z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom69"
}
freezeTemplate(tmpl);
