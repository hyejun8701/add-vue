import MUTATIONS from './mutation';

const state = {
    reservations: [],
};

const getters = {
    reservations: (_state) => {
        return _state.reservations;
    }
}

const actions = {

};

const mutations = {
    [MUTATIONS.SET_RESERVATIONS]: (_state, list) => {
        _state.reservations = list;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};