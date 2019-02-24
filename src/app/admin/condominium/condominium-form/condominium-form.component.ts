import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CondominiumService } from '../condominium.service';
import { Condominium } from '../condominium';

@Component({
  selector: 'app-condominium-form',
  templateUrl: './condominium-form.component.html',
  styleUrls: ['./condominium-form.component.css']
})
export class CondominiumFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: CondominiumService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  save() {
    const obj: Condominium = this.form.value;

    console.log(obj);

    this.service.save(obj).subscribe(
      obj => {
        console.log(obj);
      },
      err => {
        console.log(err);
      }
    );
  }

}
