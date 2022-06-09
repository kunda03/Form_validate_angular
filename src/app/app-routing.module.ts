import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './shared/auth.guard';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',
    canActivate:[AuthGuard ],
   component:DashboardComponent,
  },
  {path:'forget-password',component:ForgetPasswordComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
