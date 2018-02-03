import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from 'app/services/authentication.service';
import { Router } from '@angular/router';
import { ModalDirective } from 'app/typescripts/free';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('autoShownModal')
  loginMessage: string = '';
  credentials: any = {};

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    public autoShownModal: ModalDirective,
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.credentials.username,
      password: this.credentials.password
    }

    this.authService.login(user).subscribe(data => {
      if (user.username === undefined) {
        this.loginMessage = 'Enter User Name';
        return false;
      }

      if (user.password === undefined) {
        this.loginMessage = 'Enter Password';
        return false;
      }

      if (data.status == '0') {
        this.loginMessage = data.error;
      } else {
        this.loginMessage = '';
        this.authService.storeUserData(data.access_token, user.username);
        this.autoShownModal.hide();
        this.router.navigate(['/admin']);
      }
    });
  }
}
