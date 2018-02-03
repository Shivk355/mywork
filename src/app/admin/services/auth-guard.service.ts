import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(): boolean{
    if( localStorage.getItem('currentUser') == null){
      alert('Not Logged in');
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

}
