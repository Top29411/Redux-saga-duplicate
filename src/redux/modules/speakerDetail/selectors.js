import { get } from 'lodash'

export const speakerDetailStateSelector = (state) =>
  get(state, 'speakerDetail')

export const speakerResultSelector = (state) =>
  get(state, 'speakerDetail.speakerResult')
