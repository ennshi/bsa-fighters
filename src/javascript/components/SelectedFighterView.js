import View from './View';
import {ICONS, LABELS} from '../helpers/constants';

class SelectedFighterView extends View {
    constructor(fighter, side) {
        super();
        this.createSelectedFighter(fighter, side);
    }
    createSelectedFighter(fighter, side) {
        const container = this.createElement({tagName: 'div', className: 'selected-fighter__container'});
        const fighterImage = this.createImage(fighter, side);
        const fighterDetailsBlock = this.createFighterDetailsBlock(fighter);
        container.append(fighterImage, fighterDetailsBlock);
        this.element = container;
    }
    createImage(fighter, side) {
        return this.createElement({
            tagName: 'img',
            className: `selected-fighter__image-${side}`,
            attributes: { src: fighter.source, alt: fighter.name }
        });
    }
    createFighterDetailsBlock(fighter) {
        const detailsBlock = this.createElement({tagName: 'div', className: 'selected-fighter__details-block'});
        const detailsName = this.createElement({tagName: 'h2', className: 'selected-fighter__name'});
        detailsName.innerText = fighter.name;
        const details = Object.values(LABELS).map(label => {
            const detailsItem = this.createElement({tagName: 'div', className: 'selected-fighter__details-item'});
            detailsItem.append(this.createIcon(label), `${fighter[label]}`);
            return detailsItem;
        });
        detailsBlock.append(detailsName, ...details);
        return detailsBlock;
    }
    createIcon(label) {
        return this.createElement({
            tagName: 'img',
            className: 'selected-fighter__icon',
            attributes: { src: ICONS[label], alt: `${label} icon` }
        });
    }
}

export default SelectedFighterView;
