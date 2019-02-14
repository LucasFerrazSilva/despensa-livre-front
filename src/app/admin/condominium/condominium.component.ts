import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Condominium } from './condominium';
import { CondominiumService } from './condominium.service';

@Component({
  selector: 'app-condominium',
  templateUrl: './condominium.component.html',
  styleUrls: ['./condominium.component.css']
})
export class CondominiumComponent implements OnInit {

  displayedColumns = ['name', 'address'];
  dataSource;

  private condominiums: Condominium[];

  constructor(private service: CondominiumService) { }

  ngOnInit() {
    this.service.list().subscribe(
      list => {
        this.condominiums = list;
        this.dataSource = this.condominiums;
      },
      err => {
        console.log(err);
      }
    );
  }

}
