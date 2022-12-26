import { createAction } from 'redux-actions'
import * as CONSTANTS from './constants'

export const getDiscussedTimes = createAction(CONSTANTS.GET_DISCUSSED_TIMES)
export const getOtherTopics = createAction(CONSTANTS.GET_OTHER_TOPICS)
export const getSpeakersList = createAction(CONSTANTS.GET_SPEAKERS_LIST)
export const getTopicResult = createAction(CONSTANTS.GET_TOPIC_RESULT)
