import * as actionTypes from './actionTypes';

/* GET EXECUTIVE SUMMARY
 *******************************************************************/
const getExecutiveSummaryStart = () => {
  return {
    type: actionTypes.GET_EXECUTIVE_SUMMARY_START,
  };
};

const getExecutiveSummarySuccess = (executiveSummary) => {
  return {
    type: actionTypes.GET_EXECUTIVE_SUMMARY_SUCCESS,
    executiveSummary: executiveSummary,
  };
};

const getExecutiveSummaryFail = (error) => {
  return {
    type: actionTypes.GET_EXECUTIVE_SUMMARY_FAIL,
    error: error,
  };
};

export const getExecutiveSummary = () => {
  return (dispatch) => {
    dispatch(getExecutiveSummaryStart());
    return fetch('https://api.chucknorris.io/jokes/random')
      .then(
        (response) => response.json(),
        (error) => {
          dispatch(getExecutiveSummaryFail(error));
        },
      )
      .then((data) => {
        dispatch(getExecutiveSummarySuccess(data));
      });
  };
};
