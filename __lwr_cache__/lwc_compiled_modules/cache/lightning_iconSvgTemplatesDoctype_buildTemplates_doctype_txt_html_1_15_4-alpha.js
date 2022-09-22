import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./txt.css";

import _implicitScopedStylesheets from "./txt.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M5.151-.036A5.074 5.074 0 00.077 5.038v53.841a5.073 5.073 0 005.074 5.074h45.774a5.074 5.074 0 005.074-5.074V20.274L37.097-.036H5.151z" fill-rule="evenodd" clip-rule="evenodd" fill="#F9CA06"${3}><path d="M18.763 43.045h-3.277v10.047a.734.734 0 01-.756.738.73.73 0 01-.738-.738V43.045h-3.259c-.36 0-.648-.288-.648-.684 0-.36.288-.648.648-.648h8.03c.36 0 .648.288.648.685a.645.645 0 01-.648.647zm11.7 10.803a.64.64 0 01-.541-.27l-3.727-4.97-3.745 4.97a.639.639 0 01-.54.27.71.71 0 01-.72-.72c0-.144.036-.306.144-.432l3.889-5.131-3.619-4.826a.721.721 0 01-.144-.414c0-.343.288-.721.72-.721.216 0 .432.108.576.288l3.439 4.627 3.439-4.646a.642.642 0 01.541-.27c.378 0 .738.306.738.721a.7.7 0 01-.126.414l-3.619 4.808 3.89 5.149c.09.126.126.27.126.415a.739.739 0 01-.721.738zm11.195-10.803h-3.277v10.047a.734.734 0 01-.756.738.73.73 0 01-.738-.738V43.045h-3.259c-.36 0-.648-.288-.648-.684 0-.36.288-.648.648-.648h8.03c.36 0 .648.288.648.685a.644.644 0 01-.648.647z" fill="#fff"${3}><g fill-rule="evenodd" clip-rule="evenodd"${3}><path d="M56.008 20.316v1H43.209s-6.312-1.26-6.129-6.708c0 0 .208 5.708 6.004 5.708h12.924z" fill="#F7BC04"${3}><path d="M37.106-.036v14.561c0 1.656 1.104 5.792 6.104 5.792h12.799L37.106-.036z" opacity=".5" fill="#fff"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctype_txt"
}
freezeTemplate(tmpl);
