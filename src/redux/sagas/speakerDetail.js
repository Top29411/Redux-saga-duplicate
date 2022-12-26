import { takeLatest } from 'redux-saga/effects'
import * as CONSTANTS from '../modules/speakerDetail/constants'
import apiCall from '../api/apiCall'

const doGetSpeakerResult = apiCall({
  type: CONSTANTS.GET_SPEAKER_RESULT,
  method: 'get',
  path: 'https://cl9b751cd3.execute-api.us-west-1.amazonaws.com/test/speakervideoslist', // updated
         
  
})

export default function* rootSaga() {
  yield takeLatest(CONSTANTS.GET_SPEAKER_RESULT, doGetSpeakerResult)
}
