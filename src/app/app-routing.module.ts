import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'',component:LandingpageComponent},
  {path:'',redirectTo:'landingpage',pathMatch:'full'},
  {path:'admin', loadChildren:()=> import('./admin/admin.module').then((m)=>m.AdminModule)},{
    path:'**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
