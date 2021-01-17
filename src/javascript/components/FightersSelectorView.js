import View from './View';
import SelectedFighterView from './SelectedFighterView';

class FightersSelectorView extends View {
    constructor() {
        super();
        this.createFightersSelector();
        this.updateFightersSelectorView = this.displaySelectedFighters.bind(this);
    }

    createFightersSelector() {
        this.element = this.createElement({tagName: 'div', className: 'fighters-selector__container', attributes: {id: 'arena'}});
        return this.element;
    }

    displaySelectedFighters(fighters) {
        if(fighters) {
            const fighterElements = fighters.map(fighter => {
                const fighterElement = new SelectedFighterView(fighter[1], fighter[0]);
                return fighterElement.element;
            });
            this.element.innerHTML = '';
            this.element.append(...fighterElements);
            return this.element;
        }
    }
}

export default FightersSelectorView;
