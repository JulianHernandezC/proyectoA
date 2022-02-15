import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string='Bootcamp Angular (semana 2)';

  constructor() { }

  ngOnInit(): void {
  }

}
