import Api from '@/services/Api'

export default {
  searchUser (params) {
    return Api().get('users/' + params.username);
  },
}