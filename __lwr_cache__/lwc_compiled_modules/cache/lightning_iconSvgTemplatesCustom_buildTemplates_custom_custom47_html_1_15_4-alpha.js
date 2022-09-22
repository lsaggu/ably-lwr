import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom47.css";

import _implicitScopedStylesheets from "./custom47.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M64 72H30c-3.3 0-6 2.7-6 6v.1c0 1 .9 1.9 1.9 1.9h42.2c1 0 1.9-.9 1.9-1.9V78c0-3.3-2.7-6-6-6zM77.4 40.4L61.5 25.6l2.6-3.9c.4-.6.101-1.4-.6-1.5-4.9-1-7.9 2.4-7.9 2.4-30.8 0-25.8 33.9-24.3 41.8.2.899 1 1.6 2 1.6h27.1c.8 0 1.3-1 .8-1.6-5.5-6.7-8.4-14.2-10.2-19-.3-.8.5-1.7 1.3-1.3 7.3 3.7 10.3-.3 15.2 2.8 2.4 1.5 5.4 1.1 7.4-.9l2.699-2.7c.601-.8.601-2.1-.199-2.9zM57 37c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom47"
}
freezeTemplate(tmpl);
