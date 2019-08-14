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
  }
}

