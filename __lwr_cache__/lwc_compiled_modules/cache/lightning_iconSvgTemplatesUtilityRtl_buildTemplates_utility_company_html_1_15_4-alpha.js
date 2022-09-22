import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./company.css";

import _implicitScopedStylesheets from "./company.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M21 4H7C5.3 4 4 5.3 4 7v40c0 .5.5 1 1 1h4c.6 0 1-.4 1-1v-6c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v6c0 .6.4 1 1 1h3c1.1 0 2-.9 2-2V7c0-1.7-1.3-3-3-3zm-9 31.5c0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5v-5c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v5zm0-10c0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5v-5c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v5zm0-10c0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5v-5c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v5zm8 20c0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5v-5c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v5zm0-10c0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5v-5c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v5zm0-10c0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5v-5c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v5zM45 14H31c-1.7 0-3 1.3-3 3v30c0 .5.5 1 1 1h4c.6 0 1-.4 1-1v-6c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v6c0 .6.4 1 1 1h3c1.1 0 2-.9 2-2V17c0-1.7-1.3-3-3-3zm-9 21.5c0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5v-5c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v5zm0-10c0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5v-5c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v5zm8 10c0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5v-5c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v5zm0-10c0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5v-5c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v5z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_company"
}
freezeTemplate(tmpl);
