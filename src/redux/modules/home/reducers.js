import { handleActions } from 'redux-actions'
import { requestSuccess } from 'redux/api/request'
import * as CONSTANTS from './constants'

const getInitialState = () => {
  return {
    topics: {},
  }
}

export default handleActions({
  [requestSuccess(CONSTANTS.GET_TOPIC_LIST)]: (state, { payload }) => ({
    ...state,
    topics: payload,
  }),

}, getInitialState())
