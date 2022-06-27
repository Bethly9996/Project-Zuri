import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../authentication.service';

const credentials = {

}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): any {
    this.authenticationService.authorize().subscribe ((response:any) =>{
      localStorage.setItem('token',response.access_token);
      console.log(response);
    })
   
  }

  getToken() {
    return localStorage.getItem('token');
  }

 


}
