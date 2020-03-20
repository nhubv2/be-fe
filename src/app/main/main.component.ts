import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'be-main',
  template: `
    <nav>
      <h1>Home</h1>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer>@ 2020</footer>
  `,
  styles: []
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
