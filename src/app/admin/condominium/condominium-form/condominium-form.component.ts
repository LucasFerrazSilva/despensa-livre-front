import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CondominiumService } from '../condominium.service';
import { Condominium } from '../condominium';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-condominium-form',
  templateUrl: './condominium-form.component.html',
  styleUrls: ['./condominium-form.component.css']
})
export class CondominiumFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private service: CondominiumService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      address: ['', Validators.required]
    });

    const id = this.route.snapshot.params.id;

    if(id) {
      this.service.get(id).subscribe(
        obj => {
          this.form = this.formBuilder.group({
            id: [obj.id],
            name: [obj.name, Validators.required],
            address: [obj.address, Validators.required]
          });
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  save() {
    this.service.save(this.form.value).subscribe(
      obj => this.router.navigateByUrl('condominium'),
      err => console.log(err)
    );
  }

}
