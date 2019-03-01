import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CondominiumService } from '../../condominium/condominium.service';
import { Condominium } from '../../condominium/condominium';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  form: FormGroup;
  condominiums: Condominium[];

  constructor(
    private service: UserService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private condominiumService: CondominiumService
  ) { }

  ngOnInit() {
    this.loadForm();
    this.loadCondominiums();
  }

  save() {
    let obj = this.form.value;

    obj.condominium = this.condominiums.filter(cond => cond.id == obj.condominium)[0];

    this.service.save(obj).subscribe(
      resp => this.router.navigateByUrl('user'),
      err => console.log(err)
    );
  }

  loadCondominiums() {
    this.condominiumService.list().subscribe(
      list => this.condominiums = list,
      err => console.log(err)
    );
  }

  loadForm() {
    this.form = this.formBuilder.group({
      id: [],
      condominium: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    const id = this.route.snapshot.params.id;

    if(id) {
      this.service.get(id).subscribe(
        obj => {
          this.form = this.formBuilder.group({
            id: [obj.id],
            condominium: [obj.condominium.id, Validators.required],
            name: [obj.name, Validators.required],
            email: [obj.email, Validators.required],
            password: [obj.password, Validators.required]
          });
        }
      );
    }
  }

}
