import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  {path:'',component:LandingpageComponent},
  // {path:'',redirectTo:'landingpage',pathMatch:'full'},
  {path:'dashboard', component: DashboardComponent},
  {path:'employees', component:EmployeesComponent},{path:'products',component:ProductsComponent},{path:'sales',component:SalesComponent},
  {
    path:'**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
