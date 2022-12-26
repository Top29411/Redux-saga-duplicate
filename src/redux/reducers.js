import { combineReducers } from 'redux'
import home from './modules/home/reducers'
import topicDetail from './modules/topicDetail/reducers'
import speakerDetail from './modules/speakerDetail/reducers'

export default combineReducers({
  home,
  topicDetail,
  speakerDetail
})
