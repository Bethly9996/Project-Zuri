import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ItemComponent } from "./item/item.component";
import { PayComponent } from "./pay/pay.component";
import { TransactionComponent } from "./item/transaction/transaction.component";

const appRoutes: Routes = [

    {path: 'pay', component: PayComponent },
    {path: '', redirectTo: '/item', pathMatch: 'full'},
    {path: 'transaction', component: TransactionComponent },
];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})
export class AppRoutingModule {

}