import axios from "axios"
import { HTTP, HTTPS } from "../constants/api";

/**
 * Изменяет URL с HTTP на HTTPS
 * @param {String} url - url для изменения 
 * @returns {String} - url с HTTPS
 */

export const changeHTTP = url => {
    const result = url? url.replace(HTTP,HTTPS) : url;
    return result;
}


/**
 * Отправляет запрос Axios
 * @param {String} url - url для запросов 
 * @returns {Promise} - Promise с результатом запроса
 */

export const getApiResource = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
        
    } catch (error) {
        console.error('Could not fetch.', error)
        return false
    }
    

    
}