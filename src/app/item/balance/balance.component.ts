import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  constructor() { 
    const accToken = this.getToken();
        let headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Authorization", `Bearer ${accToken}`);
​
fetch("https://sandbox.safaricom.co.ke/mpesa/accountbalance/v1/query", {
  method: 'POST',
  headers,
  body: JSON.stringify({
    "Initiator": "testapi",
    "SecurityCredential": "lZ65+6ZfuFFGr3aCLmQy8xPkDOIWSz6qlk43DwYyP7WrqyO1pgzrCnxMl6dIVYhzs/poQm1qQRFzWuv3iWv/UJNLHKWrD//lQAti5fs0lGzwkVoptB+/Vpe47VK79VmFoTqrdDoKBKOrFRIZFquMow+oSucJnjIKYdLWrzSbbyFInfvaaM55Mh+G6ZUkFWs9qRxTBJhTP0R31wrsvkr9l0Cq/65LtjBGyTudpIc2OjEI0s8DH+8/JsmKQuT72CiRPb7srvMUnj2gDYYxakTXG6kQHwIdp3Atfg1Blqv31FE4WFLZXEq7Rya1i3MZs53Pvd1A38/x8TJrX9rQdke1pQ==",
    "CommandID": "AccountBalance",
    "PartyA": 600995,
    "IdentifierType": "4",
    "Remarks": "Your transaction was successful",
    "QueueTimeOutURL": "https://mydomain.com/AccountBalance/queue/",
    "ResultURL": "https://mydomain.com/AccountBalance/result/",
  })
})
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log(error));
   }

  ngOnInit(): void {
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
