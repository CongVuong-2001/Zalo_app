import axios from "axios";
import { useParams } from "react-router-dom";

const {id} = useParams
const API_URL = "http://localhost:8080" 

export const getUser = () => axios.get(`${API_URL}/users`)
export const getUserById = () => axios.get(`${API_URL}/users/` + id)

export const getGroup = () => axios.get(`${API_URL}/groups`)
export const getGroupById = () => axios.get(`${API_URL}/groups/`+id )

export const postGroup = (data) =>
    axios.post(`${API_URL}/groups`, data)

export const postUser = (data) =>
    axios.post(`${API_URL}/users`, data)

export const putGroup = (data) =>
    axios.put(`${API_URL}/groups/` + id, data)

export const deleteGroupById = () =>
    axios.delete(`${API_URL}/groups/` + id)


