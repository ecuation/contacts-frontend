import Vue from 'vue'
import axios from 'axios'

const baseAxios = () => axios.create({ baseURL: 'http://scalesource.development/api', timeout: 100000 })
Vue.prototype.$axios = baseAxios
