import axios from '@/store/baseaxios'
import Config from '@/store/config'

export default {
  getUser: (data) => {
    return axios({
      method: 'post',
      url: Config.user.add,
      data
    })
  }
}
