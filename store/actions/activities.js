import * as actionTypes from './actionTypes';
import wiseEldersClient from '../../api/WiseEldersAPI';

/* GET ACTIVITIES
*******************************************************************/
const getActivitiesStart = () => {
    return {
        type: actionTypes.GET_ACTIVITIES_START,
    };
};

const getActivitiesSuccess = entries => {
    return {
        type: actionTypes.GET_ACTIVITIES_SUCCESS,
        entries: entries,
    };
};

const getActivitiesFail = error => {
    return {
        type: actionTypes.GET_ACTIVITIES_FAIL,
        error: error,
    };
};

export const getActivities = () => {
    return dispatch => {
        dispatch(getActivitiesStart());
        return wiseEldersClient.getActivities()
            .then(data => {
                console.log(['data', data]);
                dispatch(getActivitiesSuccess(data));
            }, error => {
                console.log(error);
                dispatch(getActivitiesFail(error));
            });
    };
};

