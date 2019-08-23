import Axios from "axios";

const instansAxios = Axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "0794f75a-9048-48f2-a851-598440e411fc"
  } 
})

export const usersAPI = {
  getUsers(pageSize, currentPage) {
    return instansAxios.get(`users?count=${pageSize}&page=${currentPage}`)
    .then(response => response.data)
  },

  follow(userId){
    return instansAxios.post(`follow/${userId}`)
    .then(response => response.data)
  },

  unfollow(userId){
    return instansAxios.delete(`follow/${userId}`)
    .then(response => response.data)
  }
}

export const profileAPI = {
  getProfile(userId){
    return instansAxios.get(`profile/${userId}`)
    .then(response => response.data)
  },
  getStatus(userId){
    return instansAxios.get(`profile/status/${userId}`)
    .then(response => response.data)
  },
  updateStatus(status){
    return instansAxios.put(`profile/status`, {status: status})
    .then(response => response.data)
  }
}

export const authAPI = {
  getAuthData(){
    return instansAxios.get(`auth/me`)
    .then(response => response.data)
  }
}