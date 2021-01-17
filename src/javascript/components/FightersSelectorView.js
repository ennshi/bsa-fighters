import View from './View';
import SelectedFighterView from './SelectedFighterView';

class FightersSelectorView extends View {
    constructor() {
        super();
        this.selector = new Map();
        this.nextFighter = 'left';
        this.setFighterCb = this.setFighter.bind(this);
    }

    setFighter(fighter) {
        this.selector.set(this.nextFighter, fighter);
        this.nextFighter = this.nextFighter === 'left' ? 'right' : 'left';
        this.displaySelectedFighters();
    }

    isFull() {
        return (this.selector.size === 1);
    }

    createFightersSelector() {
        this.element = this.createElement({tagName: 'div', className: 'fighters-selector__container', attributes: {id: 'arena'}});
        return this.element;
    }

    displaySelectedFighters() {
        if(this.selector.size) {
            const fighters = Array.from(this.selector.entries()).map(fighter => {
                const fighterElement = new SelectedFighterView(fighter[1], fighter[0]);
                return fighterElement.element;
            });
            this.element.innerHTML = '';
            this.element.append(...fighters);
            return this.element;
        }
    }
}

export const fightersSelectorView = new FightersSelectorView();
