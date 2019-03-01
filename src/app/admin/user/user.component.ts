import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayedColumns = ['name', 'email', 'condominium', 'edit', 'remove'];
  dataSource;

  constructor(private service: UserService) { }

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
