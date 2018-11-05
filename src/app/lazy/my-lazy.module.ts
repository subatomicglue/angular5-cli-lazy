import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// my component
@Component({
  selector: 'lazy-comp',
  template: `
    <h2>Lazy loaded counter {{ counter }}</h2>
    <button (click)="increment()">Increment</button>
  `
})
export class MyLazyComponent {
  counter = 1;
  increment() {
    this.counter++;
  }
}

// the module, which will compile to a separate .js bundle, which contains my components
// learn about NgModule: https://angular.io/guide/ngmodule-faq
@NgModule({
  imports: [CommonModule],
  declarations: [MyLazyComponent, ],

  // "if your app happens to ... dynamically load a component by type imperatively, you must add it to entryComponents explicitly"
  // https://angular.io/guide/entry-components
  entryComponents: [MyLazyComponent, ],
})
export class MyLazyModule {
  static creatableComponents = { MyLazyComponent, }; //  expose which components are creatable (we cant read entryComponents)
}
