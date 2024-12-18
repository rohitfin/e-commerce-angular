import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  //#region form
  formData !: FormGroup;
  isSubmitted: boolean = false;
  isSubmitting: boolean = false;

  isCurrentlyWorking: boolean = true;

  fileToUpload: any = null;
  fileName: string = "";
  filePreview: string = "";

  //#endregion
  
  arrSkills = [
    { name: 'HTML', value: 'Html' },
    { name: 'CSS 3', value: 'CSS3' },
    { name: 'Jquery', value: 'Jquery' },
    { name: 'JavaScript', value: 'Javascript' },
    { name: 'Bootstrap', value: 'Bootstrap' },
    { name: 'Angular', value: 'Angular' },
    { name: 'NodeJs', value: 'NodeJs' },
    { name: 'MongoDB', value: 'MongoDB' },
    { name: 'Git Hub', value: 'GitHub' },
  ];


  constructor(
    private title: Title,
    private toast: ToastService,
    private fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.initForm();
  }

  //#region init form
  initForm(){
    this.formData = this.fb.group({
      profile: [null],
      fullName: new FormControl('', [Validators.required]),
      emailId: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      mobile: new FormControl('', [Validators.required, Validators.pattern("^[7-9][0-9]{9}$")]),
      country: new FormControl(null),
      state: new FormControl(null),
      district: new FormControl(null),
      pinCode: new FormControl(''),
      address: new FormControl(''),
      skills: new FormControl(null),
      currentOrgName: new FormControl(''),
      currentlyWorking: new FormControl(''),
      joiningDate: new FormControl(''),
      joiningEndDate: new FormControl(''),
      experiences: this.fb.array([this.newFieldArray()])
    })
  }
  get formValidators(): { [key: string]: AbstractControl } {
    return this.formData.controls;
  }
  //#endregion

  //#region Form Array
  get fieldArray(): FormArray {
    return this.formData.get("experiences") as FormArray;
  }
  newFieldArray(): FormGroup {
    return this.fb.group({
      orgName: new FormControl(''),
      experience: new FormControl(''),
      formDate: new FormControl(''),
      toDate: new FormControl(''),
    })
  }
  fieldArrayValidator(index: number) {
    return this.fieldArray.controls[index] as FormGroup;
  }
  addField() {
    this.fieldArray.push(this.newFieldArray());
  }
  removeField(index: number) {
    this.fieldArray.removeAt(index);
  }
  onResetFormArray(){
    for(var i = 0; i < this.fieldArray.length; i++){
      this.fieldArray.removeAt(i);
    }
  }
  //#endregion
  
  //#region onSubmit
  onSubmit(){
    this.isSubmitted = true;
    if (this.formData.invalid) {
      return;
    } else {
      this.isSubmitting = true;
      var data = this.formData.value;
      setTimeout(() => {
        console.log( data);
        this.toast.success('Data added Successfully!', '');
        this.onResetFormArray();
        this.onReset();
      }, 2000);
    }
  }
  onReset(){
    this.isSubmitted = this.isSubmitting = false;
    this.formData.reset();
  }
  //#endregion

  //#region form Events

  uploadFile(event: any){
    this.fileToUpload = event ? event?.target.files[0] : null;
    if (this.fileToUpload.size > (2 * 1024 * 1024)) { // 2MB
      this.toast.warning("File size exceeds 2MB. Please select a smaller file.", "");
    } else if (this.fileToUpload.type.indexOf('image') == -1) {
      this.toast.warning("File should not be more than 2MB.", "");
    } else {
      this.fileName = this.fileToUpload.name;
      console.log( this.fileToUpload);
      console.log( event);

      //Show image preview
      let reader = new FileReader();
      reader.onload = (event: any) => {
        this.filePreview = event.target.result;
      }
      reader.readAsDataURL(this.fileToUpload);
    }
  }

  onChanageCurrectlyWorking(val: any){
    this.isCurrentlyWorking = val.target.value == 1 ? true : false;
    console.log(this.isCurrentlyWorking);
  }
  //#endregion






}
