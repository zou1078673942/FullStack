import axios from 'axios'

// 全局的后端 api 前缀
export const baseUrl = 'http://neteasecloudmusicapi.zhaoboy.com'

const axiosInstance = axios.create({
    baseURL: baseUrl
})

export { axiosInstance }