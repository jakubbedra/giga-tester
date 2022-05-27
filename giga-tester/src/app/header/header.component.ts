import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  subjects: Record<string, string>;

  constructor() {
  }

  ngOnInit(): void {
    this.initSubjectListFromLocalStorage();
  }

  initSubjectListFromLocalStorage() {
    var tmp: Record<string, string> = JSON.parse(localStorage.getItem("GIGAtester-keys"));
    if (tmp == undefined) {
      tmp = {};
    }
    this.subjects = tmp;
  }

}
