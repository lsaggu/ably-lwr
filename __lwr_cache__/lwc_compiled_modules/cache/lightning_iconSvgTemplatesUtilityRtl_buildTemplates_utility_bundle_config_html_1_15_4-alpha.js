import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./bundle_config.css";

import _implicitScopedStylesheets from "./bundle_config.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M14.4 2H8a6 6 0 00-6 6v6a6 6 0 006 6h6.4a6 6 0 006-6V8a6 6 0 00-6-6zm-2.87 13.1h-.66a4.1 4.1 0 010-8.19h.66a4.1 4.1 0 010 8.19zM31.2 20h6.4a6 6 0 006-6V8a6 6 0 00-6-6h-6.4a6 6 0 00-6 6v6a6 6 0 006 6zm2.87-13.09h.66a4.1 4.1 0 010 8.19h-.66a4.1 4.1 0 010-8.19zM14.4 24.93L8 25a6 6 0 00-6 6v5.87a6 6 0 006 6h6.4a6 6 0 006-6v-5.94a6 6 0 00-6-6zM11.53 38h-.66a4.1 4.1 0 010-8.19h.66a4.1 4.1 0 010 8.19zM49.27 35.07a14.83 14.83 0 01-1.88-.22.22.22 0 01-.2-.21 18.39 18.39 0 00-.84-2v-.32c.32-.53.84-1.06 1.15-1.6a.82.82 0 00-.11-1.06l-2.08-2.14a.78.78 0 00-.52-.21 2.36 2.36 0 00-.52.21c-.52.32-1 .86-1.56 1.18a.1.1 0 00-.11.09h-.1c-.73-.21-1.25-.64-2-.85a.23.23 0 01-.21-.21c-.1-.64-.1-1.18-.21-1.82a.89.89 0 00-.52-.85.33.33 0 00-.21-.11h-3a.86.86 0 00-.52.11c-.21.21-.52.53-.52.85a11.15 11.15 0 01-.21 1.82.23.23 0 01-.21.21c-.73.21-1.25.64-2 .85h-.1c-.11 0-.11 0-.21-.1-.52-.32-.94-.86-1.56-1.18a.62.62 0 00-.53-.21c-.31 0-.31.11-.62.21l-2.08 2.14a.82.82 0 00-.11 1.06c.31.54.83 1 1.15 1.6a.21.21 0 010 .3c-.21.75-.63 1.28-.84 2a.22.22 0 01-.2.21c-.63.11-1.15.11-1.78.22a.87.87 0 00-.83.64v3.62a1.59 1.59 0 00.82.7 9.73 9.73 0 011.78.22.22.22 0 01.2.21c.21.75.63 1.28.84 2 0 .1.1.21 0 .32-.32.53-.84 1.06-1.15 1.6a.82.82 0 00.11 1.06l2.08 2.14c.21.21.31.21.62.21a1.63 1.63 0 00.53-.21c.5-.42 1-.81 1.56-1.18.1 0 .1-.1.21-.1h.1c.73.21 1.25.64 2 .85a.23.23 0 01.21.21c.1.64.1 1.28.21 1.92s.31.75.83.75h3c.52 0 .73-.21.84-.75s.1-1.28.21-1.92a.22.22 0 01.2-.21 18.46 18.46 0 002-.85h.11a.09.09 0 01.1.1c.52.32 1 .86 1.56 1.18a.86.86 0 00.53.21c.2 0 .31-.11.62-.21l2.08-2.14a.82.82 0 00.11-1.06c-.31-.54-.83-1-1.15-1.6a.21.21 0 010-.3c.21-.75.63-1.28.84-2a.22.22 0 01.2-.21c.63-.11 1.26-.11 1.88-.22s.73-.32.73-.85v-3c.01-.78-.2-1-.72-1.1zm-6.9 2.45a4.93 4.93 0 01-4.67 4.8 4.65 4.65 0 01-4.7-4.6v-.2a4.69 4.69 0 019.37-.43 3.09 3.09 0 010 .43z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_bundle_config"
}
freezeTemplate(tmpl);
