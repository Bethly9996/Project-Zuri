import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Mpesa } from 'mpesa-api';
@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  btnClick(){
    this.router.navigate(['/transaction']);
}

}
