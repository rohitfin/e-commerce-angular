import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  isSubmitted: boolean = false;
  isSubmitting: boolean = false;

  formData: any = { userName: '', password: '', remember: false }
  userName: any = ''
  constructor(){}

  ngOnInit(): void {
    
  }

  
  //#region onSubmit
  onSubmit(){
    this.isSubmitted = true;

    if(this.formData.userName && this.formData.password){
      this.isSubmitting = true;
      setTimeout(() => {
        this.onReset();
        console.log( this.formData);
      }, 2000);
    }

    if (!this.formData.userName && !this.formData.password) {
      console.log('Please enter user name and password ?.');
    } else if (!this.formData.userName) {
      console.log('Please enter user name ?.');
    } else if (!this.formData.password) {
      console.log('Please enter user name ?.');
    } else {

    }

  }

  onReset(){
    this.isSubmitted = this.isSubmitting = false;
    for(let key in this.formData){
      this.formData[key] = '';
    }
  }
  //#endregion




}
