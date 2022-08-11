const SURVEY_INIT = 'survey/INIT';
const SURVEY_INSERT = 'survey/INSERT';

const initialState = {
  surveyResult: [],
};
export const surveyInit = () => ({
  type: SURVEY_INIT,
});
export const surveyInsert = (surveyResult) => ({
  type: SURVEY_INSERT,
  surveyResult,
});

const reducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case SURVEY_INIT:
      return {
        ...state,
        surveyResult: [],
      };
    case SURVEY_INSERT:
      return {
        ...state,
        surveyResult: state.surveyResult.concat(action.surveyResult),
      };
    default:
      return state;
  }
};

export default reducer;
