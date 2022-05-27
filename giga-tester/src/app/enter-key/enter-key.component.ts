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
    console.log(this.keyString);
    var tmp = Keys.keyRecord[this.keyString];
    console.log(tmp);
    if (tmp != "" && tmp != undefined) {
      this.addToLocalStorage(this.keyString, tmp);
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
