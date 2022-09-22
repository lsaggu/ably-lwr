import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./gpres.css";

import _implicitScopedStylesheets from "./gpres.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M5.111.009A5.073 5.073 0 00.039 5.083v53.841a5.073 5.073 0 005.072 5.074h45.775a5.074 5.074 0 005.074-5.074V20.318L37.057.009H5.111z" fill-rule="evenodd" clip-rule="evenodd" fill="#F8BE46"${3}><path d="M10.123 37.465v11.9H22.54v-11.9H10.123zm11.289 9.642h-10.16v-7.386h10.16v7.386zm.674-5.128v2.259h8.386v7.385h-10.16v-2.846h-1.129v5.104h12.419V41.979h-9.516z" fill="#fff"${3}><g fill-rule="evenodd" clip-rule="evenodd"${3}><path d="M55.96 20.377v1H43.161s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707H55.96z" fill="#F6AD34"${3}><path d="M37.058.025v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799L37.058.025z" opacity=".5" fill="#fff"${3}></g></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 56 64"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctype_gpres"
}
freezeTemplate(tmpl);
