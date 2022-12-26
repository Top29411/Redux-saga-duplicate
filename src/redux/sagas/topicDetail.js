import { takeLatest } from 'redux-saga/effects'
import * as CONSTANTS from '../modules/topicDetail/constants'
import apiCall from '../api/apiCall'

const doGetDiscussedTimes = apiCall({
    type: CONSTANTS.GET_DISCUSSED_TIMES,
    method: 'get',
    // path: 'https://8ijxvwcygd.execute-api.us-west-1.amazonaws.com/test/populatedates'
    path: 'https://q1qagp4jx3.execute-api.us-west-1.amazonaws.com/test_dev/topicdiscussedduration'  // changed
    
})

const doGetOtherTopics = apiCall({
    type: CONSTANTS.GET_OTHER_TOPICS,
    method: 'get',
    path: 'https://jq1mpzic0d.execute-api.us-west-1.amazonaws.com/test/othertopics'  // changed
           
})

const doGetSpeakersList = apiCall({
    type: CONSTANTS.GET_SPEAKERS_LIST,
    method: 'get',
    // path: 'https://te7gmali8k.execute-api.us-west-1.amazonaws.com/test/speakerlist' 
    path: 'https://tvrke1cxr2.execute-api.us-west-1.amazonaws.com/test_dev/topicdiscussedspeakers' // changed
})

const doGetTopicResult = apiCall({
    type: CONSTANTS.GET_TOPIC_RESULT,
    method: 'get',
    path: 'https://0pyrhfjmx2.execute-api.us-west-1.amazonaws.com/test_env/homepagesearch' // changed
    // path: 'https://fyg1xw8mfj.execute-api.us-west-1.amazonaws.com/test_dev/videodetails' // changed
    
    // 
    // path: 'https://vk2ppvubhg.execute-api.us-west-1.amazonaws.com/test/VideoDetails'
})

export default function* rootSaga() {
    yield takeLatest(CONSTANTS.GET_DISCUSSED_TIMES, doGetDiscussedTimes)
    yield takeLatest(CONSTANTS.GET_OTHER_TOPICS, doGetOtherTopics)
    yield takeLatest(CONSTANTS.GET_SPEAKERS_LIST, doGetSpeakersList)
    yield takeLatest(CONSTANTS.GET_TOPIC_RESULT, doGetTopicResult)
}
