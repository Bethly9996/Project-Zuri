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

  ngOnInit(): void {
    this.authenticationService.authorize().subscribe(response => console.log(response))
  }


}
