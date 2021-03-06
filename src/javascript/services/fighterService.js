import { callApi } from '../helpers/apiHelper';

class FighterService {
    async getFighters() {
        try {
            const endpoint = 'repos/sahanr/street-fighter/contents/fighters.json';
            const apiResult = await callApi(endpoint, 'GET');

            return JSON.parse(atob(apiResult.content));
        } catch (error) {
            throw error;
        }
    }
    async getFighterDetails(id) {
        try {
            const endpoint = `repos/ennshi/fighter-details-api/contents/fighter/${id}.json`;
            const apiResult = await callApi(endpoint, 'GET');

            return JSON.parse(atob(apiResult.content));
        } catch (error) {
            throw error;
        }
    }
}

export const fighterService = new FighterService();
