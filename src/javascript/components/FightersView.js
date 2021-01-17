import View from './View';
import FighterView from './FighterView';
import DetailsModal from './DetailsModal';
import {fighterService} from '../services/fighterService';

class FightersView extends View {
    constructor(fighters) {
        super();

        this.handleClick = this.handleFighterClick.bind(this);
        this.createFighters(fighters);
        this.updateFighterDetails = this.updateFightersDetailsMap.bind(this);
    }

    fightersDetailsMap = new Map();

    createFighters(fighters) {
        const fighterElements = fighters.map(fighter => {
            const fighterView = new FighterView(fighter, this.handleClick);
            return fighterView.element;
        });

        this.element = this.createElement({ tagName: 'div', className: 'fighters' });
        this.element.append(...fighterElements);
    }

    async handleFighterClick(event, fighter) {
        const fighterDetails = await this.getFighterDetails(fighter._id);
        // console.log('clicked', this.fightersDetailsMap.entries());
        // get from map or load info and add to fightersMap
        // show modal with fighter info
        // allow to edit health and power in this modal
        const modal = new DetailsModal(fighterDetails, this.updateFighterDetails);
    }
    async getFighterDetails(id) {
        if(!this.isInDetailsMap(id)) {
           return await this.loadFighterDetails(id);
        }
        return this.fightersDetailsMap.get(id);
    }
    async loadFighterDetails(id) {
        const fighterDetails = await fighterService.getFighterDetails(id);
        this.fightersDetailsMap.set(id, fighterDetails);
        return fighterDetails;
    }
    isInDetailsMap(id) {
        return this.fightersDetailsMap.has(id);
    }
    updateFightersDetailsMap(id, label, value) {
        if(this.isInDetailsMap(id)) {
            const initialData = this.fightersDetailsMap.get(id);
            const newData = {...initialData, [label]: value};
            this.fightersDetailsMap.set(id, newData);
        }
    }
}

export default FightersView;
