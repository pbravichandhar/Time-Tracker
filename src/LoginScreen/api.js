const axios = require('axios')
const { ipcRenderer } = require('electron');
const axiosInstance = axios.create({
  baseURL: 'http://ec2-18-212-206-46.compute-1.amazonaws.com:7077/api'
})

const login = () => {
  var price = document.getElementById('message')
  var email = document.getElementById('email')
  var password = document.getElementById('password')
  console.log(email.value)
  console.log(price)
  axiosInstance
    .post('/login', { email: email.value, password: password.value })
    .then(function (response) {
      price.innerHTML = 'login successful'
      ipcRenderer.send('request-update-label-in-second-window', response.data);
      console.log(response)
    })
    .catch(function (error) {
      price.innerHTML = 'login failure'
      console.log(error)
    })
}

// const axios = require('axios')
// const axiosInstance = axios.create({
//   baseURL: 'http://ec2-18-212-206-46.compute-1.amazonaws.com:7077/api'
// })

// const login = (email, password) => {
//   axiosInstance
//     .post('/login', { email: email, password: password })
//     .then(function (response) {
//       price.innerHTML = 'login successful'
//       console.log(response)
//     })
//     .catch(function (error) {
//       price.innerHTML = 'login failure'
//       console.log(error)
//     })
// }
