import { createStore } from 'vuex';
import reservation from './modules/reservation';

export const store = createStore ({
    modules: { reservation },
});