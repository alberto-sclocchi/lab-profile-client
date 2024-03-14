import axios from "axios"

export default class AuthService{
    construct(){
        let service = axios.create({
            baseURL:"http://localhost5005"
        })

        this.service = service;
    }
}

