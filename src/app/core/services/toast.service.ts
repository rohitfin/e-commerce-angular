import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastr: ToastrService
  ) { }

  success(msg: string, title: string) {
    this.toastr.success(msg, title);
  }
  error(msg: string, title: string) {
    this.toastr.error(msg, title);
  }
  warning(msg: string, title: string) {
    this.toastr.warning(msg, title);
  }

}
