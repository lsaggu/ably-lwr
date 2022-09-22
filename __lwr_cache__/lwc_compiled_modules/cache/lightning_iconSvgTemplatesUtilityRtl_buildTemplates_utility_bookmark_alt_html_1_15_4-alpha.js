import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./bookmark_alt.css";

import _implicitScopedStylesheets from "./bookmark_alt.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M46 2H6a3.2 3.2 0 00-3.18 3.18v41.64a3.19 3.19 0 004.87 2.7L26 38.11l18.31 11.41a3.19 3.19 0 004.87-2.7V5.18A3.2 3.2 0 0046 2zm-7 15.49L31.53 23l2.85 8.81a.57.57 0 01-.35.72.54.54 0 01-.52-.07L26 27l-7.51 5.46a.58.58 0 01-.8-.13.6.6 0 01-.07-.52L20.47 23 13 17.49a.58.58 0 010-.82.55.55 0 01.38-.18h9.25l2.87-8.82a.56.56 0 01.69-.39.55.55 0 01.39.39l2.89 8.82h9.25a.58.58 0 01.46.68.57.57 0 01-.18.32z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_bookmark_alt"
}
freezeTemplate(tmpl);
