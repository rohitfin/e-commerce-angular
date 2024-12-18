import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { StorageService } from 'src/app/core/services/storage.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isSubmitted: boolean = false;
  isSubmitting: boolean = false;

  formData: any = { userName: '', password: '', remember: false }
  userName: any = '';
  isPasswordVisible: boolean = false;

  constructor(
    private title: Title,
    private meta: Meta,
    private toast: ToastService,
    private storageService: StorageService
  ){}

  ngOnInit(): void {
    
  }

  
  //#region onSubmit
  onSubmit(){
    this.isSubmitted = true;
    if (!this.formData.userName && !this.formData.password) {
      this.toast.error('Please enter user name and password.', '');
    } else if (!this.formData.userName) {
      this.toast.error('Please enter user name.', '');
    } else if (!this.formData.password) {
      this.toast.error('Please enter password.', '');
    } else {
      this.isSubmitting = true;
      setTimeout(() => {
        if(this.formData.remember == true){
          this.storageService.set('user', this.formData);
        }
        this.toast.success('User logged in Successfully!', '');
        this.onReset();
      }, 2000);
    }

  }

  onReset(){
    this.isSubmitted = this.isSubmitting = false;
    for(let key in this.formData){
      this.formData[key] = '';
    }
  }
  //#endregion

  //#region toggleEye
  toggleEye(){
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  //#endregion




}
