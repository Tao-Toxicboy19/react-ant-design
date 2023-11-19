import { useSelector } from 'react-redux'
import { stocksAsync, stocksSelector } from '../../../store/slices/stockSlice'
import { useEffect } from 'react';
import { useAppDispatch } from '../../../store/store';
import { useQuery } from 'react-query';

type Props = {}

export default function HomePage({ }: Props) {
  const dispatch = useAppDispatch()
  const stocksReducer = useSelector(stocksSelector)
  const { data } = useQuery({
    queryKey: ['stocks'],
    queryFn: () =>
      dispatch(stocksAsync())
  })

  return (
    <>
      {stocksReducer.loading ? (
        <p>loading....</p>
      ) : (
        <div>{JSON.stringify(stocksReducer.result)}</div>
      )}
    </>
  )
}