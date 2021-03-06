import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
// Service layer for the sign-up feature
export class UserService{
    private baseUrl:string = "https://identitytoolkit.googleapis.com/v1/accounts";
    private signUpEndpoint:string = "signUp";

    public constructor(private http:HttpClient){

    }

    // signup method that takes 2 strings as paramaters (email/password)
    public signup(email:string, password:string){

        const requestPayload = {
            'email':email,
            'password':password,
            'returnSecureToken': true
        }

        return this.http.post(this.baseUrl + ':' + this.signUpEndpoint + '?' + 'key=' + environment.firebase.apiKey, requestPayload);

    }

   
}