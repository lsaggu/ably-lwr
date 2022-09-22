import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contract_line_outcome_data.css";

import _implicitScopedStylesheets from "./contract_line_outcome_data.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M41.3 19.1H30.42c-2.56 0-4.66-2.1-4.66-4.66V3.55c0-.85-.7-1.55-1.55-1.55H8.66C6.1 2 4 4.1 4 6.66v37.31c0 2.56 2.1 4.66 4.66 4.66h16.85c-2.1-2.54-3.38-5.79-3.45-9.33h-2.75c-.85 0-1.55-.7-1.55-1.55V36.2c0-.85.7-1.55 1.55-1.55h3.4c.52-1.7 1.33-3.27 2.37-4.66h-5.76c-.85 0-1.55-.7-1.55-1.55v-1.55c0-.85.7-1.55 1.55-1.55h11.54c1.92-.88 4.05-1.37 6.29-1.37 2.02 0 3.95.4 5.71 1.12v-4.41c0-.85-.7-1.55-1.55-1.55zM11.46 39.38c-1.32 0-2.41-1.09-2.41-2.41s1.09-2.41 2.41-2.41 2.41 1.09 2.41 2.41-1.09 2.41-2.41 2.41zm30.31-24.95h-8.24a3.12 3.12 0 01-3.11-3.11V3.09c0-.62.47-1.09 1.09-1.09.31 0 .54.08.78.31l10.26 10.26c.23.23.31.47.31.78 0 .62-.47 1.09-1.09 1.09zM11.46 30.05c-1.32 0-2.41-1.09-2.41-2.41s1.09-2.41 2.41-2.41 2.41 1.09 2.41 2.41c0 1.4-1.09 2.41-2.41 2.41zm.39-10.57l3.42-1.79a.23.23 0 01.31 0L19 19.48c.23.16.54-.08.47-.31l-.62-3.81c0-.16 0-.23.08-.31l2.8-2.72c.23-.16.08-.47-.16-.54l-3.81-.54c-.08 0-.16-.08-.23-.16l-1.71-3.5c-.16-.23-.47-.23-.62 0l-1.71 3.5c0 .08-.16.16-.23.16l-3.81.54c-.23.08-.39.39-.31.54l2.8 2.72c.08.08.08.23.08.31l-.62 3.81c-.08.23.23.47.47.31zm36.27 19.54c0 6.06-4.91 10.97-10.97 10.97s-10.97-4.91-10.97-10.97 4.91-10.97 10.97-10.97 10.97 4.91 10.97 10.97zm-4.55-3.74c.55.52.58 1.39.06 1.94l-4.11 4.39c-.26.28-.63.44-1.01.43-.38 0-.75-.17-1-.45l-1.78-1.95-3.1 3.1c-.54.54-1.4.54-1.94 0s-.54-1.4 0-1.94l4.11-4.11c.27-.27.63-.41 1-.4.37 0 .73.17.98.45l1.74 1.92 3.1-3.3c.52-.55 1.39-.58 1.94-.06z" fill-rule="evenodd"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_contract_line_outcome_data"
}
freezeTemplate(tmpl);
