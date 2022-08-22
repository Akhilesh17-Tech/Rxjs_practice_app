import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss'],
})
export class PromiseComponent implements OnInit {
  constructor() {}

  dellAvailable() {
    return true;
  }
  hpAvailable() {
    return false;
  }

  ngOnInit(): void {
    // indefinite
    let buyLaptop = new Promise((resolve, reject) => {
      // resolve('promise resolved');
      // reject('promise rejected');
      if (this.dellAvailable()) {
        resolve('Dell is purchased');
      } else if (this.hpAvailable()) {
        resolve('hp is purchased');
      } else {
        reject('Laptop not available at the store');
      }
    });

    buyLaptop
      .then((res) => {
        console.log('then code => ', res);
      })
      .catch((res) => {
        console.log('cath code => ', res);
      });
  }

  //  definite
  //   myfunction() {
  //     console.log('Hello akhilesh');
  //   }
}
