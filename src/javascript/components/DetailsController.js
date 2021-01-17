import View from './View';
import {ICONS, LIMIT_VALUES} from '../helpers/constants';

class DetailsController extends View {
    constructor({label, id, initValue, updateFighterDetails}) {
        super();
        this.value = initValue;
        this.decreaseOnClick = this.decreaseValue.bind(this, label, id, updateFighterDetails);
        this.increaseOnClick = this.increaseValue.bind(this, label, id, updateFighterDetails);
        this.createController({label, id});
    }
    createController({label, id}) {
        const container = this.createElement({tagName: 'div', className: 'details-controller__container'});
        const icon = this.createIcon(label);
        const decrBtn = this.createDecreasingBtn();
        const displayedValue = this.createDisplayedValue(label, id);
        const incrBtn = this.createIncreasingBtn();
        container.append(icon, decrBtn, displayedValue, incrBtn);
        this.element = container;
    }
    createIcon(label) {
        return this.createElement(
            {
                tagName: 'img',
                className: 'details-controller__icon',
                attributes: {
                    src: ICONS[label],
                    alt: label
                }
            });
    }
    createDecreasingBtn() {
        const decrBtn = this.createElement({tagName: 'button', className: 'btn-controller'});
        decrBtn.innerText = '-';
        decrBtn.addEventListener('click', this.decreaseOnClick);
        return decrBtn;
    }
    decreaseValue(label, id, updateFighterDetails) {
        this.value = (this.value > LIMIT_VALUES[label].min) ? (this.value - 1) : LIMIT_VALUES[label].max;
        updateFighterDetails(id, label, this.value);
        this.updateDisplayedValue(label, id);
    }
    createIncreasingBtn() {
        const incrBtn = this.createElement({tagName: 'button', className: 'btn-controller'});
        incrBtn.innerText = '+';
        incrBtn.addEventListener('click', this.increaseOnClick);
        return incrBtn;
    }
    increaseValue(label, id, updateFighterDetails) {
        this.value = this.value < LIMIT_VALUES[label].max ? (this.value + 1) : LIMIT_VALUES[label].min;
        updateFighterDetails(id, label, this.value);
        this.updateDisplayedValue(label, id);
    }
    createDisplayedValue(label, id) {
        const displayedValue = this.createElement(
            {
                tagName: 'div',
                className: 'details-controller__value',
                attributes: {
                    id: `${label}-${id}`
                }
            });
        displayedValue.innerText = this.value;
        return displayedValue;
    }
    updateDisplayedValue(label, id) {
        const displayedValue = document.getElementById(`${label}-${id}`);
        displayedValue.innerText = this.value;
        return displayedValue;
    }
}

export default DetailsController;
