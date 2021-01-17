import FightersView from './FightersView';
import FightersSelectorView from './FightersSelectorView';
import {Fighters as fighters} from '../../resources/fighters';
import FightersSelectorController from './FightersSelectorController';

class App {
    constructor() {
        this.startApp();
    }

    static rootElement = document.getElementById('root');
    static loadingElement = document.getElementById('loading-overlay');

    async startApp() {
        try {
            App.loadingElement.style.visibility = 'visible';

            const fightersSelectorView = new FightersSelectorView();
            const fightersSelectorController = new FightersSelectorController(fightersSelectorView.updateFightersSelectorView);
            const fightersSelectorElement = fightersSelectorView.element;
            //const fighters = await fighterService.getFighters();
            const fightersView = new FightersView(fighters, fightersSelectorController.selectFighter);
            const fightersElement = fightersView.element;

            App.rootElement.appendChild(fightersSelectorElement);
            App.rootElement.appendChild(fightersElement);
        } catch (error) {
            console.warn(error);
            App.rootElement.innerText = 'Failed to load data';
        } finally {
            App.loadingElement.style.visibility = 'hidden';
        }
    }
}

export default App;
