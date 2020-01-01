import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})

export class CustomerCreateComponent implements OnInit {  
  submitted = false;
  customerForm: FormGroup;
  CustomerProfile:any = ['Private', 'Corporate']
  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) { 
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.customerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      category: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  // Choose category with select dropdown
  updateProfile(e){
    this.customerForm.get('category').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm(){
    return this.customerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.customerForm.valid) {
      return false;
    } else {
      this.apiService.createCustomer(this.customerForm.value).subscribe(
        (res) => {
          console.log('Customer successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/customers-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
