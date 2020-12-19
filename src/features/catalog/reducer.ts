import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'

import { fetchCatalog } from './actions'

const isLoading = createReducer(false as boolean)
  .handleAction([fetchCatalog.request], () => true)
  .handleAction(
    [fetchCatalog.success, fetchCatalog.failure],
    () => false
  );

const list = createReducer([])
  .handleAction(fetchCatalog.success, (state, action) => action.payload)

export default combineReducers({
  isLoading,
  list,
})
