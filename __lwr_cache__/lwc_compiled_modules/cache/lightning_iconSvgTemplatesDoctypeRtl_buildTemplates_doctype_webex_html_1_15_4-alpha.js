import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./webex.css";

import _implicitScopedStylesheets from "./webex.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g fill-rule="evenodd" clip-rule="evenodd"${3}><path d="M5.152.011A5.074 5.074 0 00.078 5.085v53.841A5.074 5.074 0 005.152 64h45.773A5.075 5.075 0 0056 58.926V20.32L37.098.011H5.152z" fill="#80BC4B"${3}><path d="M55.977 20.352v1H43.178s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z" fill="#60AB38"${3}><path d="M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799L37.074 0z" opacity=".5" fill="#fff"${3}></g><path d="M20.463 53.854c5.161-.271 9.261-4.538 9.261-9.767a9.78 9.78 0 00-9.26-9.767l-.001 19.534z" fill="#CFE8AF"${3}><path d="M19.338 53.852c-5.119-.316-9.174-4.565-9.174-9.764s4.056-9.447 9.174-9.763v19.527z" fill="#fff"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctypeRtl_webex"
}
freezeTemplate(tmpl);
