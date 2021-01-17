import Modal from './Modal';
import DetailsController from './DetailsController';
import {LABELS} from '../helpers/constants';

class DetailsModal extends Modal{
    constructor(fighter, updateFighterDetails, selectFighter) {
        super();
        this.fighter = fighter;
        this.updateFighterDetails = (id, label, value) => {
            fighter[label] = value;
            updateFighterDetails(id, label, value);
        };
        this.selectFighter = (fighter) => (selectFighter(fighter));
        this.setupDetailsModal(fighter);
    }
    setupDetailsModal(fighter) {
        const header = this.createHeader(fighter.name);
        const body = this.createBody(fighter);
        const actions = this.createActions(fighter);
        this.addChildrenToModal([header, body, actions]);
    }
    createBody(fighter) {
        const bodyContainer = this.createBodyContainer();
        const image = this.createImage(fighter);
        const details = this.createDetailsBlock(fighter);
        bodyContainer.append(image, details);
        return bodyContainer;
    }
    createActions(fighter) {
        const actionBlock = this.createActionBlock();
        const btnSelect = this.createElement({tagName: 'button', className: 'btn-action'});
        btnSelect.innerText = 'Select';
        btnSelect.addEventListener('click', () => (this.selectFighter(this.fighter)));
        actionBlock.append(btnSelect);
        return actionBlock;
    }
    createImage(fighter) {
        return this.createElement({tagName: 'img', className: 'details-modal__img', attributes: {alt: fighter.name, src: fighter.source}});
    }
    createDetailsBlock(fighter) {
        const container = this.createElement({tagName: 'div', className: 'details-modal__details-block'});
        const controllers = Object.values(LABELS).map(label => {
            const controller =  new DetailsController({
                label,
                id: fighter._id,
                initValue: fighter[label],
                updateFighterDetails: this.updateFighterDetails
            });
            return controller.element;
        });
        container.append(...controllers);
        return container;
    }
}

export default DetailsModal;
