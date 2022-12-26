import { createAction } from 'redux-actions'
import * as CONSTANTS from './constants'
//0xba1b8fa654319b428ede5f252993d2742fe2a620b9114f12ba1089713af78cd9
export const getTopics = createAction(CONSTANTS.GET_TOPIC_LIST )
