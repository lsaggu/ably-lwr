import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./date_time.css";

import _implicitScopedStylesheets from "./date_time.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M43.6 6.8h-4V5.2c0-1.8-1.4-3.2-3.2-3.2-1.8 0-3.2 1.4-3.2 3.2v1.6H18.8V5.2c0-1.8-1.4-3.2-3.2-3.2s-3.2 1.4-3.2 3.2v1.6h-4c-2.6 0-4.8 2.2-4.8 4.8v1.6c0 .9.7 1.6 1.6 1.6h41.6c.9 0 1.6-.7 1.6-1.6v-1.6c0-2.6-2.2-4.8-4.8-4.8zM46.8 19.6H5.2c-.9 0-1.6.7-1.6 1.6v24c0 2.6 2.2 4.8 4.8 4.8h35.2c2.6 0 4.8-2.2 4.8-4.8v-24c0-.9-.7-1.6-1.6-1.6zM26 46.7c-6.6 0-11.9-5.4-11.9-11.9 0-6.6 5.4-11.9 11.9-11.9s11.9 5.4 11.9 11.9c0 6.6-5.3 11.9-11.9 11.9z"${3}><path d="M27.2 34.3v-5.1c0-.4-.4-.8-.8-.8h-.8c-.4 0-.8.4-.8.8v5.6c0 .3.1.6.4.8l3.8 3.8c.3.3.8.3 1.1 0l.6-.6c.3-.3.3-.8 0-1.1l-3.5-3.4z"${3}></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 52 52"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_date_time"
}
freezeTemplate(tmpl);
