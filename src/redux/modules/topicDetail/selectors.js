import { get } from 'lodash'

export const topicDetailStateSelector = (state) =>
  get(state, 'topicDetail')

export const topicDiscussedTimeSelector = (state) =>
  get(state, 'topicDetail.discussedTimes')

export const otherTopicsSelector = (state) => 
	get(state, 'topicDetail.otherTopics')

export const speakersListSelector = (state) => 
	get(state, 'topicDetail.speakersList')

export const topicResultSelector = (state) =>
  get(state, 'topicDetail.topicResult')
