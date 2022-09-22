import { LightningElement } from 'lwc';

export default class Publisher extends LightningElement {

    handleChannelChange(event) {
        console.log('changing channel');
    }
    
    handleClick() {
        console.log('publisher button clicked...');
    }
}
