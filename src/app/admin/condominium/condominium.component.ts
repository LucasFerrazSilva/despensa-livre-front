import { Component, OnInit } from '@angular/core';
import { Condominium } from './condominium';
import { CondominiumService } from './condominium.service';

@Component({
  selector: 'app-condominium',
  templateUrl: './condominium.component.html',
  styleUrls: ['./condominium.component.css']
})
export class CondominiumComponent implements OnInit {

  displayedColumns = ['name', 'address', 'edit', 'remove'];
  dataSource;

  constructor(private service: CondominiumService) { }

  ngOnInit() {
    this.loadDataSource();
  }

  remove(id: string) {
    this.service.remove(id).subscribe(
      resp => this.loadDataSource(),
      err => console.log(err)
    );
  }

  loadDataSource() {
    this.service.list().subscribe(
      list => this.dataSource = list,
      err => console.log(err)
    );
  }

}
