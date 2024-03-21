import axios from "axios"

export default class AuthService{
    constructor(){
        let service = axios.create({
            baseURL:"http://localhost:5005/auth"
        })

        this.service = service;
    }

    signUp(userData){
        return this.service.post("/signup", userData).then((resp) => resp.data);
    }

    logIn(credentials){
        return this.service.post("/login", credentials).then((resp) => resp.data);
    }

    verify(authToken){
        console.log(authToken)
        return this.service.post("/verify", {}, { headers: { Authorization: `Bearer ${authToken}` }}).then((resp) => {
            console.log({verifyResp: resp.data})
            return resp.data;
        });
    }

    getCurrentUser(){
        return this.service.get("/currentUser").then((resp) => {
            console.log({respCurrentUser: resp.data})
            return resp.data
        });
    }

    logOut(){
        return this.service.post("/logout");
    }
}

