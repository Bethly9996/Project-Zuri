import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private safaricomUrl = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
  private consumerKey = "HHxr8jEMf0NIMpkG0tSGcPpCK6ecHw2B";
  private consumerSecret = "ZEiVYukRwYBFyiXv";

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
    }),
  }


  public authorize(): Observable<any> {
    const authCode = this.generateBasicAuthCode();
    const headers = new HttpHeaders({ "Authorization": `Basic ${authCode}` });
    return this.http.get(this.safaricomUrl, { headers });

  }

  public generateBasicAuthCode(): string {
    return btoa(this.consumerKey + ":" + this.consumerSecret);
  }

  
  


}













