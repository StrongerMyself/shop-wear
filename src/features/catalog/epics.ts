import { RootEpic } from 'root-types'
import { isActionOf } from 'typesafe-actions'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'

import { fetchCatalog } from './actions'

export const fetchCatalogEpic: RootEpic = (action$, state$, { api }) => 
  action$.pipe(
    filter(isActionOf(fetchCatalog.request)),
    switchMap(() => 
      from(api.products.fetchList())
        .pipe(
          map(fetchCatalog.success),
          catchError((message: string) => of(fetchCatalog.failure(message)))
        )
    )
  )
