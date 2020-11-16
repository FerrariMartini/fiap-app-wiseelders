import * as actionTypes from './actionTypes';
import api from '../../api/api';

/* GET REPORTS
 *******************************************************************/
const getReportsStart = () => {
  return {
    type: actionTypes.GET_REPORTS_START,
  };
};

const getReportsSuccess = (entries) => {
  return {
    type: actionTypes.GET_REPORTS_SUCCESS,
    entries: entries,
  };
};

const getReportsFail = (error) => {
  return {
    type: actionTypes.GET_REPORTS_FAIL,
    error: error,
  };
};

export const getReports = () => {
  return (dispatch) => {
    dispatch(getReportsStart());
    return api
      .get('/reports')
      .then((response) => {
        const reports = response.data;
        console.log(['>> data', reports]);
        dispatch(getReportsSuccess(reports));
      })
      .catch((error) => {
        console.log('>> ERROR', error);
        dispatch(getReportsFail(error));
      });
  };
};
