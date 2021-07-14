import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quejas',
  templateUrl: './quejas.component.html',
  styleUrls: ['./quejas.component.scss']
})
export class QuejasComponent implements OnInit {
  form: FormGroup;
  nombre: any;
  pais: any;
  message: any;

  opcion = 1;

  constructor(public fb: FormBuilder){
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      pais: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.nombre = this.form.get("nombre") as FormGroup;
    this.pais = this.form.get("pais") as FormGroup;
    this.message = this.form.get("message") as FormGroup;
  }

  onSubmit(f:any) {
    console.log(f.value);
    if(this.form.valid){  //si el formulario esta lleno:
      this.opcion = 2;
    }
  }
}
