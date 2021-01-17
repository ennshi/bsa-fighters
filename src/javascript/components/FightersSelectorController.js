class FightersSelectorController {
    constructor(updateFightersSelectorView) {
        this.updateFighterSelectorView = (fighters) => (updateFightersSelectorView(fighters));
        this.selector = new Map();
        this.nextFighter = 'left';
        this.selectFighter = this.setFighter.bind(this);
    }
    setFighter(fighter) {
        this.selector.set(this.nextFighter, fighter);
        this.nextFighter = this.nextFighter === 'left' ? 'right' : 'left';
        this.updateFighterSelectorView(this.getSelectedFighters());
    }

    isComplete() {
        return (this.selector.size === 1);
    }

    getSelectedFighters() {
        if(this.selector.size) {
            return Array.from(this.selector.entries());
        }
        return null;
    }

}

export default FightersSelectorController;
