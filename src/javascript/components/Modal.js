import View from './View';

class Modal extends View {
    constructor() {
        super();
        this.modalBackdrop = document.getElementById('modal');
        this.modal = this.createModal();
        this.closeOnClick = this.closeModal.bind(this);
        this.showModal();
    }
    showModal() {
        this.modalBackdrop.classList.remove('hidden');
        this.modalBackdrop.innerHTML = '';
        document.getElementsByTagName('body')[0].style.position = 'fixed';
        this.modalBackdrop.appendChild(this.modal);
        return this.modalBackdrop;
    }
    createModal() {
        this.modal = this.createElement({tagName: 'div', className: 'modal__container'});
        return this.modal;
    }
    createHeader(headerText = '') {
        const modalHeader = this.createElement({tagName: 'header', className: 'modal__header'});
        const header = this.createElement({tagName: 'h1', className: 'modal__header-text'});
        header.innerText = headerText;
        const closeBtn = this.createElement({tagName: 'button', className: 'btn-close'});
        closeBtn.innerText = 'X';
        closeBtn.addEventListener('click', this.closeOnClick);
        modalHeader.append(header, closeBtn);
        return modalHeader;
    }
    createBodyContainer() {
        return this.createElement({tagName: 'div', className: 'modal__body'});
    }
    createActionBlock() {
        return this.createElement({tagName: 'div', className: 'modal__action-block'});
    }
    closeModal() {
        document.getElementsByTagName('body')[0].style.position = '';
        this.modalBackdrop.classList.add('hidden');
        this.modalBackdrop.innerHTML = '';
    }
    addChildrenToModal(nodeList) {
        this.modal.append(...nodeList);
    }
}

export default Modal;
