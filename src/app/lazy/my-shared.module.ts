import { NgModule, /*ModuleWithProviders*/  } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { provideRoutes } from '@angular/router';

// to install, add to app.module.ts like this:
// providers: [
//   provideRoutes([
//     { loadChildren: 'app/lazy/my-shared.module#MySharedModule' }, // needed for production build to generate separate X.xxx.chunk.js file
//   ])
// ],
@NgModule({
  imports: [CommonModule],
  declarations: [],
  entryComponents: [],
})
export class MySharedModule {
  static creatableComponents = {};

  // this will suck in javascript libs like 'html2pdf' to my x.xxxxxxx.chunk.js file.
  static html2pdf = require("html2pdf.js");
  // static jsPDF = require("jspdf");
  // static html2canvas = (<any>global).html2canvas = require("html2canvas");

  // For those importing MySharedModule into another module, but want to specify different rules, we use a function like forRoot() below:
  // e.g.
  //  imports: [ MySharedModule.forRoot() ]
 /*
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MySharedModule,
      providers: [
        provideRoutes([
            { loadChildren: 'app/lazy/my-shared.module#MySharedModule' } // causes "MySharedModule" .js bundle to be required by this module (if you used imports, then it would include JsPDFModule into this .js bundle)
        ])
      ]
    }
  }
  */
}
