import axios from 'axios'

const url = 'https://mysterious-inlet-91956.herokuapp.com/api/v1/contact/'

export const get = async () => await axios.get(url)

export const getOne = async (id) => await axios.get(`${url}${id}/`)

export const create = async (data) => await axios.post(`${url}`, data)

export const edit = async (data) => await axios.patch(`${url}${data.id}/`, data)

export const remove = async (id) => await axios.delete(`${url}${id}/`)
