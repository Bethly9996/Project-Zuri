import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
;


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent  {

//   constructor(private http: HttpClient) { 
    
// let headers = new Headers();
// headers.append("Content-Type", "application/json");
// headers.append("Authorization", "Bearer XPaYQPUlSWefVYp2rqDuwnz48FcM");
// this.getToken()
// ​
// fetch("https://sandbox.safaricom.co.ke/mpesa/c2b/v1/simulate", {
//   method: 'POST',
//   headers,
//   body: JSON.stringify({
//     "ShortCode": 600426,
//     "CommandID": "CustomerBuyGoodsOnline",
//     "amount": "1",
//     "MSISDN": "254705912645",
//     "BillRefNumber": "",
//   })
// })
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log(error));
//   }

//   ngOnInit(): void {


//   }

// getToken() {
//   localStorage.getItem('token');
}




