import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading = false;

  constructor(private fb:FormBuilder, private _snackBar: MatSnackBar, private router:Router) {
    this.form = fb.group({
      usuario: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  
  ingresar(){
    console.log(this.form)

    let user = this.form.value.usuario;
    let pass = this.form.value.password;

      if(user == 'jmojica' && pass == 'joel'){
        this.loadingFalso();
      }else{
        this.errorMsg();
        this.form.reset();
      }
  }


  errorMsg(){
    this._snackBar.open('Usuario incorrecto','', {
      duration: 3000,
      horizontalPosition: 'center'
    });
  }

  loadingFalso(){
    this.loading = true;
    setTimeout(() => {
      this.form.reset(); 
      this.router.navigate(['dashboard']);
      this.loading = false
    }, 2000); 
  }

}
