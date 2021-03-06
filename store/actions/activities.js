import * as actionTypes from './actionTypes';
import api from '../../api/api';

/* GET ACTIVITIES
 *******************************************************************/
const getActivitiesStart = () => {
  return {
    type: actionTypes.GET_ACTIVITIES_START,
  };
};

const getActivitiesSuccess = (entries) => {
  return {
    type: actionTypes.GET_ACTIVITIES_SUCCESS,
    entries: entries,
  };
};

const getActivitiesFail = (error) => {
  return {
    type: actionTypes.GET_ACTIVITIES_FAIL,
    error: error,
  };
};

export const getActivities = () => {
  return (dispatch) => {
    dispatch(getActivitiesStart());
    return api
      .get('/activities')
      .then((response) => {
        const reports = response.data;
        console.log(['>> data', reports]);
        dispatch(getActivitiesSuccess(reports));
      })
      .catch((error) => {
        console.log('>> ERROR', error);
        dispatch(getActivitiesFail(error));
      });
  };
};
