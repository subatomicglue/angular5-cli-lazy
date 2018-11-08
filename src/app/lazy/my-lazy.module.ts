import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySharedModule } from './my-shared.module';

// my component
@Component({
  selector: 'lazy-comp',
  template: `
    <h2>Lazy loaded MyLazyComponent, a simple PDF writer</h2>
    <div>dynamic content -&gt; (counter {{ counter }})</div>
    <button (click)="increment()">Increment</button>
    <button (click)="writePDF()">Write a PDF File</button>
  `,
  styles: [`button {background-color:#ff0000;color:#ffffff;}`]
})
export class MyLazyComponent {
  counter = 1;
  increment() {
    this.counter++;
  }

  async writePDF() {
    // html2canvas + jsPDF:
    // let jsPDF = MySharedModule.jsPDF;
    // var doc = new jsPDF();
    // doc.text(20, 20, 'Hello World');
    // doc.text(20, 30, 'This is MyLazyComponent, pumping out a simple PDF.');
    // doc.text(20, 40, `BTW, My counter was ${this.counter}`);
    // doc.text(20, 60, 'Do you rather enjoy that?');
    // doc.addPage();
    // doc.text(20, 20, 'Do you rather enjoy this new page?');
    // doc.save('Test.pdf');

    // html2pdf:
    // https://github.com/eKoopmans/html2pdf
    let html2pdf = MySharedModule.html2pdf;
    html2pdf().set({
      margin:       1, // margin, [vert,horiz], [top, left, bottom, right]
      filename:     'Test.pdf',
      image:        { type: 'jpeg', quality: 0.96 },
      html2canvas:  { scale: 2.5 },
      jsPDF:        { orientation: 'portrait', unit: 'in', format: "letter" },
      enableLinks:  true,
    }).from( `<h1>Hello World</h1><div>This is MyLazyComponent, pumping out a simple PDF.<BR>BTW, My counter was ${this.counter}.<BR>Do you rather enjoy that?</div>` ).save();
  }
}

// the module, which will compile to a separate .js bundle, which contains my components
// learn about NgModule: https://angular.io/guide/ngmodule-faq
//
// to install, add to app.module.ts like this:
// providers: [
//   provideRoutes([
//     { loadChildren: 'app/lazy/my-shared.module#MySharedModule' }, // needed for production build to generate separate X.xxx.chunk.js file
//   ])
// ],
@NgModule({
  imports: [CommonModule, MySharedModule], // refer to the common my-shared module (which has it's own x.xxxx.chunk.js)
  declarations: [MyLazyComponent, ],

  // "if your app happens to ... dynamically load a component by type imperatively, you must add it to entryComponents explicitly"
  // https://angular.io/guide/entry-components
  entryComponents: [MyLazyComponent, ],
})
export class MyLazyModule {
  static creatableComponents = { MyLazyComponent, }; //  expose which components are creatable (we cant read entryComponents)
}
