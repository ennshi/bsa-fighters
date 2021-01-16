import Modal from './Modal';

class DetailsModal extends Modal{
    constructor(fighter) {
        super();
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
        bodyContainer.append(image);
        return bodyContainer;
    }
    createActions(fighter) {
        const actionBlock = this.createActionBlock();
        const btnSelect = this.createElement({tagName: 'button', className: 'btn-action'});
        btnSelect.innerText = 'Select';
        btnSelect.addEventListener('click', () => (console.log(fighter.name)));
        actionBlock.append(btnSelect);
        return actionBlock;
    }
    createImage(fighter) {
        return this.createElement({tagName: 'img', className: 'details-modal__img', attributes: {alt: fighter.name, src: fighter.source}});
    }
}

export default DetailsModal;
