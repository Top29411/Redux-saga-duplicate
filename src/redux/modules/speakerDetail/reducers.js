import { handleActions } from 'redux-actions'
import { requestSuccess } from 'redux/api/request'
import * as CONSTANTS from './constants'

const getInitialState = () => {
    return {
      speakerResult: {},
    }
  }
  
  export default handleActions({
    [requestSuccess(CONSTANTS.GET_SPEAKER_RESULT)]: (state, { payload }) => ({
      ...state,
      speakerResult: payload,
    }),
  
  }, getInitialState())
  