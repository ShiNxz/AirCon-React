import axios from 'axios'
import { ax } from '../Config'

const useAxios = async (route, method = 'GET', data = {}) => {
    try {
        const fetch = await axios({
            method,
            url: `${ax.baseURI}/${route}`,
            withCredentials: true,
            headers: ax.headers,
            data
        })

        return { success: true, status: fetch.status, data: fetch.data }

    } catch (error) {
        return { success: false, error }
    }
}

export default useAxios