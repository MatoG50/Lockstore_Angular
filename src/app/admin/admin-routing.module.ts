import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { EmployeesComponent } from '../employees/employees.component';
import { HomeComponent } from '../home/home.component';
import { ProductsComponent } from '../products/products.component';
import { SalesComponent } from '../sales/sales.component';

const routes: Routes = [
  {path:'', component:DashboardComponent , children:[
    {path:'home', component:HomeComponent},
    {path:'employees', component:EmployeesComponent},
    {path:'products', component:ProductsComponent},{
      path:'sales', component:SalesComponent
    },
    {path:'', redirectTo:'./admin/home',pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
