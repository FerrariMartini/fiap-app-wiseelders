import {updateObject} from '../utility';

const initialState = {loading: false};

const loading = (state) => updateObject(state, {loading: true});

const notLoading = (state) => updateObject(state, {loading: false});

const reducer = (state = initialState, action) => {
    if (action.type.endsWith('_START')) {
        console.log("Loading");
        return loading(state);
    } else {
        console.log("Not loading");
        return notLoading(state);
    }
};

export default reducer;
