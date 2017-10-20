import axios from 'axios';
export class client {
  static getClient() {
    return axios.create({
      baseURL: "http://localHost:3030",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token"),
      }
    })
  }
}
