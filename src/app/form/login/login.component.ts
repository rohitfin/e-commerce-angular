import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formData: any = { username:'', password: '' };

  constructor(){}

  ngOnInit(): void {
    
  }




}
