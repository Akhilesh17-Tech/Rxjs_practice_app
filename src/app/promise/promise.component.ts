import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss'],
})
export class PromiseComponent implements OnInit {
  constructor() {}

  dellAvailable() {
    return false;
  }
  hpAvailable() {
    return true;
  }

  promiseVal: unknown;

  dell = {
    brand: 'Dell',
    price: '99900',
    color: 'black',
    Ram: '16 GB',
    Hardisk: '1 TB',
    success: 'Dell laptop is purchased',
  };

  hp = {
    brand: 'Dell',
    price: '99900',
    color: 'black',
    Ram: '16 GB',
    Hardisk: '1 TB',
    success: 'Hp laptop is purchased',
  };

  notAvail = {
    brand: 'Not found',
    status: 'Laptop not availabel',
  };

  ngOnInit(): void {
    // indefinite
    let buyLaptop = new Promise((resolve, reject) => {
      // resolve('promise resolved');
      // reject('promise rejected');
      if (this.dellAvailable()) {
        return setTimeout(() => {
          // resolve('Dell is purchased');
          resolve(this.dell);
        }, 3000);
      } else if (this.hpAvailable()) {
        return setTimeout(() => {
          // resolve('hp is purchased');
          resolve(this.hp);
        }, 3000);
      } else {
        return setTimeout(() => {
          // reject('Laptop not available at the store');
          reject(this.notAvail);
        }, 3000);
      }
    });

    buyLaptop
      .then((res) => {
        console.log('then code => ', res);
        this.promiseVal = JSON.stringify(res);
      })
      .catch((res) => {
        console.log('cath code => ', res);
        this.promiseVal = res;
      });
  }

  //  definite
  //   myfunction() {
  //     console.log('Hello akhilesh');
  //   }
}
