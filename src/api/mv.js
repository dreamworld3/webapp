import axios from 'axios'
import {HOST} from 'common/js/config'
export function getMv (id) {
  const url = HOST + `/personalized/mv`

  return axios.get(url)
}