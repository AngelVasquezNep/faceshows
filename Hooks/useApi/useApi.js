import useSWR from 'swr'
import axios from 'axios'

import { BASE_API } from './config'

const fetcher = (url, options = {}) =>
  axios.get(url, options).then((res) => res.data)

const useApi = (path, options={}) => {
  const { data, error } = useSWR(`${BASE_API}${path}`, fetcher, options)

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}

export default useApi
