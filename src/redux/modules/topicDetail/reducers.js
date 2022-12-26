import { handleActions } from 'redux-actions'
import { requestSuccess } from 'redux/api/request'
import * as CONSTANTS from './constants'

const getInitialState = () => {
  return {
    discussedTimes: {},
    otherTopics: {},
    speakersList: {},
    topicResult: {}
  }
}

export default handleActions({
  [requestSuccess(CONSTANTS.GET_DISCUSSED_TIMES)]: (state, { payload }) => ({
    ...state,
    discussedTimes: payload
  }),
  [requestSuccess(CONSTANTS.GET_OTHER_TOPICS)]: (state, { payload }) => ({
    ...state,
    otherTopics: payload
  }),
  [requestSuccess(CONSTANTS.GET_SPEAKERS_LIST)]: (state, { payload }) => ({
    ...state,
    speakersList: payload
  }),
  [requestSuccess(CONSTANTS.GET_TOPIC_RESULT)]: (state, { payload }) => ({
    ...state,
    topicResult: payload
  })
}, getInitialState())
