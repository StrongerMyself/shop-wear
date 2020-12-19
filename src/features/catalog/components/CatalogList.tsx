import React, { FunctionComponent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCatalog } from '../actions'
import { getCatalog } from '../selector'

interface Props { }

export const CatalogList: FunctionComponent<Props> = (props) => {
  const dispatch = useDispatch()
  const { isLoading, list } = useSelector(getCatalog)

  useEffect(() => {
    dispatch(fetchCatalog.request())
  }, [])

  return (
    <>
      <pre>
        {JSON.stringify({ isLoading, list}, null, 2)}
      </pre>
    </>
  )
}

CatalogList.displayName = 'CatalogList'
