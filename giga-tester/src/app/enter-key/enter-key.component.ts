import {Component, OnInit} from '@angular/core';
import {Keys} from "../data/keys";

@Component({
  selector: 'app-enter-key',
  templateUrl: './enter-key.component.html',
  styleUrls: ['./enter-key.component.css']
})
export class EnterKeyComponent implements OnInit {

  easterEgg: string = "https://www.youtube.com/watch?v=1vZ28SAgzKc&ab_channel=ChrisGarrett";
  easterEggEnabled: boolean = false;

  state: string;
  keyString: string;

  constructor() {
    this.keyString = "";
    this.state = "clear";
  }

  ngOnInit(): void {
  }

  onClickClearKeys() {
    localStorage.removeItem("GIGAtester-keys");
  }

  onClickAddKey() {
    if (this.keyString == '2137') {
      this.easterEggEnabled = true;
      return;
    }
    if (this.keyString == 'hurtownie wiedzy') {
      this.addToLocalStorage("1e83ad9f-459b-4587-baf6-ff801b7dd6a4", "zbs");
      this.addToLocalStorage("46190c5c-3a50-4b41-92c1-609f54d738d3", "zbs-entry");
      this.addToLocalStorage("74ad80ab-ef93-444d-99bb-3b285356deed", "rpi");
      this.addToLocalStorage("de6eb720-a6a8-44a7-92db-d8b675d3fe6e", "zfi");
      this.addToLocalStorage("031f5088-b155-4ddd-b900-ceeac4cd6f30", "bsk");
      this.addToLocalStorage("33caaee6-9d99-4ce4-aed9-0085988e1be9", "wzr");
      this.addToLocalStorage("a9ee3187-5e4b-4cb6-82b1-e544a4a9f8bd", "jo");
      window.location.reload();
      return;
    }
    console.log(this.keyString);
    var tmp = Keys.keyRecord[this.keyString];
    console.log(tmp);
    if (tmp != "" && tmp != undefined) {
      this.addToLocalStorage(this.keyString, tmp);
      window.location.reload();
    } else {
      this.state = "ERROR";
    }
  }

  private addToLocalStorage(key: string, value: string) {
    console.log(localStorage.getItem("GIGAtester-keys"));
    var tmp: Record<string, string> = JSON.parse(localStorage.getItem("GIGAtester-keys"));
    console.log(tmp);
    if (tmp == undefined) {
      tmp = {};
    }
    tmp[key] = value;
    this.state = "OK";
    localStorage.setItem("GIGAtester-keys", JSON.stringify(tmp));
  }

}
