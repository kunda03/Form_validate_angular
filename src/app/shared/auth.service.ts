import { Observable,of,throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private router:Router) { }

  setToken(token:string):void{
    localStorage.setItem('token',token);
  }

  getToken():string{
    return localStorage.getItem('token');
  }
  isLoggedIn(){
    return this.getToken() != null;
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }

  login({email,password}:any):Observable<any>{
    if(email=='patil@gmail.com' && password=='aniket@123'){
      this.setToken('abcdefghijk');
      return of ({name:'Aniket Patil',email:'patil@gmail.com'});
    }
    return throwError(new Error('failed to login'));


  }
}
