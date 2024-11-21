import axios from 'axios'

const Register = async (data) => {
    const response = await axios.post(`http://localhost:4000/api/franchise/register`,data)
    return response.data
}

const getAll = async (data) => {
    const response = await axios.post(`http://localhost:4000/api/franchise/register`,data)
    return response.data
}

const FranchiseService = {Register}

export default FranchiseService