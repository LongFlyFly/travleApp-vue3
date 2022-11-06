import axios from "axios"

let baseUrl = 'http://localhost:3000'

export function getHome(url){
    return axios.get(`${baseUrl}/${url}`)
}

export function getChose(url){
    return axios.get(`${baseUrl}/${url}`)
}

export function getHot(url,page,limit){
    return axios.get(`${baseUrl}/${url}?_page=${page}&_limit=${limit}`)
}

export function getAll(url){
    return axios.get(`${baseUrl}/${url}`)
}

export function getCity(url){
    return axios.get(`${baseUrl}/${url}`)
}

export function getFunction(url){
    return axios.get(`${baseUrl}/${url}`)
}

export function getSearch(url,canShu){
    return axios.get(`${baseUrl}/${url}?name_like=${canShu}`)
}

export default{
    getHome,
    getChose,
    getHot,
    getCity,
    getFunction,
    getAll,
    getSearch
}