import { inject } from '@angular/core';
import { CanActivateFn,Router} from '@angular/router';

export const studentGuardGuard: CanActivateFn = (route, state) => {
  let routes=inject(Router)
  let user=JSON.parse(localStorage.getItem('current_user')!)
  if(!user){
    routes.navigate(['/login'])
  }
  return true;
};
