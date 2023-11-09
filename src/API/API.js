import axios from "axios";

export const fetchData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return await response.data
    }catch (error){
        console.log(error.response)
    }
}

export const fetchUsers = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return await response.data
    }catch (error){
        console.log(error.response)
    }
}