
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

   constructor() { 
    const accToken= this.getToken();
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${accToken}`);
    
    ​
    fetch("https://sandbox.safaricom.co.ke/mpesa/c2b/v1/simulate", {
      method: 'POST',
      headers,
      body: JSON.stringify({
        "ShortCode": 600997,
        "CommandID": "CustomerBuyGoodsOnline",
        "Amount": "1",
        "Msisdn": "254708374149",
        "BillRefNumber": ""
      })

    })
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log(error));
      }
  


getToken() {
  return localStorage.getItem('token');
}
   
   
   ngOnInit(): void {
 

    }
  }
