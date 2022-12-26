import { all } from 'redux-saga/effects'
import home from './home'
import topicDetail from './topicDetail'
import speakerDetail from './speakerDetail'

export default function* rootSaga() {
  yield all([
    home(),
    topicDetail(),
    speakerDetail()
  ])
}
