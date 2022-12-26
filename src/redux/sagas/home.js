import { takeLatest } from 'redux-saga/effects'
import * as CONSTANTS from '../modules/home/constants'
import apiCall from '../api/apiCall'

const doGetTopics =  apiCall(  {
  type: CONSTANTS.GET_TOPIC_LIST,
  method: 'get',
  path: `https://lejni7cljk.execute-api.us-west-1.amazonaws.com/test/LatestTopics`,
})


export default function* rootSaga() {
  // yield takeLatest(CONSTANTS.GET_TOPIC_LIST, calc)
  yield takeLatest(CONSTANTS.GET_TOPIC_LIST, doGetTopics)
}
