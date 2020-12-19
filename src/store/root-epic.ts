import { combineEpics } from 'redux-observable'
import * as catalogEpics from '../features/catalog/epics'

export default combineEpics(
  ...Object.values(catalogEpics)
)
