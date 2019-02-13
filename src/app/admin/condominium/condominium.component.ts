import { Component, OnInit } from '@angular/core';
import { CondominiumService } from './condominium.service';
import { Condominium } from './condominium';

@Component({
  selector: 'app-condominium',
  templateUrl: './condominium.component.html',
  styleUrls: ['./condominium.component.css']
})
export class CondominiumComponent implements OnInit {

  private condominiums: Condominium[];

  constructor(private service: CondominiumService) { }

  ngOnInit() {
    this.service.list().subscribe(
      list => {
        this.condominiums = list;
      },
      err => {
        console.log(err);
      }
    );
  }

}
