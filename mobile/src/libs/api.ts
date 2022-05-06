import axios from 'axios'

import { SERVER_DEPLOY_URL } from '@env'

const api = axios.create({
    baseURL: SERVER_DEPLOY_URL
    //baseURL: process.env.NODE_ENV !== 'development' ? SERVER_DEPLOY_URL : SERVER_DEV_URL
})

export default api