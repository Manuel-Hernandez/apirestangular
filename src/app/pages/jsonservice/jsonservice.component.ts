import { Component, OnInit } from '@angular/core';
import {RestService} from '../../services/rest.service';
@Component({
  selector: 'app-jsonservice',
  templateUrl: './jsonservice.component.html',
  styleUrls: ['./jsonservice.component.css']
})
export class JsonserviceComponent implements OnInit {
  respuesta: any;

  constructor(private service:RestService) { }
  
  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    this.service.getAllTasks()
    .subscribe(tasks => {
      this.respuesta=tasks;
      console.log(this.respuesta);
    });
  }

}
