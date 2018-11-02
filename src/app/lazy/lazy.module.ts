import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lazy-comp',
  template: `
    <h2>Lazy loaded counter {{ counter }}</h2>
    <button (click)="increment()">Increment</button>
  `
})
export class LazyComponent {
  counter = 1;
  increment() {
    this.counter++;
  }
}

// interesting: https://angular.io/guide/ngmodule-faq
@NgModule({
  imports: [CommonModule],
  declarations: [LazyComponent, ],

  // if your app happens to ... dynamically load a component by type imperatively, you must add it to entryComponents explicitly
  // https://angular.io/guide/entry-components
  entryComponents: [LazyComponent, ],
})
export class LazyModule {
  static creatableComponents = { LazyComponent, }; //  expose which components are creatable (we cant read entryComponents)
}
