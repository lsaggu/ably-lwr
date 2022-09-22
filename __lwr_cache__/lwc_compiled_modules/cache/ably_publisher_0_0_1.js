import _tmpl from "./publisher.html";
import { registerComponent as _registerComponent, LightningElement } from "lwc";

class Publisher extends LightningElement {
  handleChannelChange(event) {
    console.log('changing channel');
  }

  handleClick() {
    console.log('publisher button clicked...');
  }
  /*LWC compiler v2.17.0*/


}

export default _registerComponent(Publisher, {
  tmpl: _tmpl
});