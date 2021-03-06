import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/shared/interfaces/user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User>(null);

  constructor(private router:Router) { }

  login(formData: any) {
    const userData = {
      id: 1,
      role: formData.role,
      token: 'todo token',
    };
    this.user.next(userData);
    console.log(userData)
    this.router.navigate(['/']);
  }

  logout() {
    console.log('logout')
    this.user.next(null);
    this.router.navigate(['/']);
  }
}
