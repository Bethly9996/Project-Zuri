import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { CakeListComponent } from './cake-list/cake-list.component';
import { TransactionComponent } from './item/transaction/transaction.component';
import { PayComponent } from './pay/pay.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { AppRoutingModule } from './app-routing.module';
import { BalanceComponent } from './item/balance/balance.component';


const routes: Routes = [
  { path: 'transaction', component: TransactionComponent },
  { path: '', redirectTo: 'pay', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    CakeListComponent,
    TransactionComponent,
    PayComponent,
    BalanceComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    ],
    
  
  providers: [AuthenticationService],
  bootstrap: [AppComponent],
 
  
})
export class AppModule {

  
 }
