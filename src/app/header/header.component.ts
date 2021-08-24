import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  display: boolean = false;

  
  constructor() { }

  ngOnInit(): void {
    const localizeBtn = document.getElementsByClassName('pi-globe');
    const selectLang = fromEvent(localizeBtn, 'click').subscribe(() => this.display = true);

  }

}
