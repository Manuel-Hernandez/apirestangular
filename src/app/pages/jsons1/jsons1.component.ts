import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Jsons1Service } from '../../services/jsons1.service'

@Component({
  selector: 'app-jsons1',
  templateUrl: './jsons1.component.html',
  styleUrls: ['./jsons1.component.css']
})
export class Jsons1Component implements OnInit {
  restItems: any;
  url = 'https://public-api.wordpress.com/rest/v1.1/sites/vocon-it.com/posts';

  constructor(private service:Jsons1Service) {}

  ngOnInit() {
    this.getRestItems();
  }

  // Read all REST Items
  getRestItems(): void {
    this.service.getAll()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          console.log(this.restItems);
        }
      )
  }
}
