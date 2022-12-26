import { get } from 'lodash'

export const homeStateSelector = (state) =>
  get(state, 'home')

export const topicListSelector = (state) =>
  get(state, 'home.topics')
