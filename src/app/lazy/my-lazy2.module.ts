import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySharedModule } from './my-shared.module';

// my component
@Component({
  selector: 'lazy-comp',
  template: `
  <h2>Lazy loaded MyLazy2Component, a complex PDF writer!</h2>
  <button (click)="show = true; writePDF();">Write PDF</button>
<div *ngIf="show" [style.width.px]="content_width" [style.height.px]="content_height" id='dom-to-print'>
  <div id='header'>
    <div id='left' style='line-height: 40px;'>Company Summary</div>
    <div id='right'><img src='assets/logo.png'></div>
  </div>
  <div id='body'>
    <H1><img width='25px' src='assets/logo2.png'> Fake Company</H1>
    The quick fox jumped over the brown lazy dog.
    Jack quietly moved up front and seized the big ball of wax.
    Few black taxis drive up major roads on quiet hazy nights.
    Just poets wax boldly as kings and queens march over fuzz.
    Bored? Craving a pub quiz fix? Why, just come to the Royal Oak!
    Quincy Pondexter blocked five jams against the Wizards!
    Crazy Frederick bought many very exquisite opal jewels.
    A quivering Texas zombie fought republic linked jewelry. <a href="http://www.go.to/some/place">http://www.go.to/some/place</a>
    Grumpy wizards make toxic brew for the evil queen and jack.
    The job of waxing linoleum frequently peeves chintzy kids.
    Back in June we delivered oxygen equipment of the same size.
    Just keep examining every low bid quoted for zinc etchings.
    How razorback-jumping frogs can level six piqued gymnasts!
    A quick movement of the enemy will jeopardize six gunboats.
    All questions asked by five watched experts amaze the judge.
    Bobby Klun awarded Jayme sixth place for her very high quiz.
    The wizard quickly jinxed the gnomes before they vaporized.
    Zelda might fix the job growth plans very quickly on Monday.
    Zack Gappow saved the job requirement list for the six boys.
    Jackie will budget for the most expensive zoology equipment.
  </div>
  <div id='body' style='display: flex;'>
    <div id='left'>
      <H1><img width='25px' src='assets/logo2.png'> Things They Do</H1>
      The quick fox jumped over the brown lazy dog.
      Jack quietly moved up front and seized the big ball of wax.
      Few black taxis drive up major roads on quiet hazy nights.
      Just poets wax boldly as kings and queens march over fuzz.
      Bored? Craving a pub quiz fix? Why, just come to the Royal Oak!
      Quincy Pondexter blocked five jams against the Wizards!
      Crazy Frederick bought many very exquisite opal jewels.
      A quivering Texas zombie fought republic linked jewelry.
      Grumpy wizards make toxic brew for the evil queen and jack.
      The job of waxing linoleum frequently peeves chintzy kids.
      Back in June we delivered oxygen equipment of the same size.
      Just keep examining every low bid quoted for zinc etchings.
      How razorback-jumping frogs can level six piqued gymnasts!
      A quick movement of the enemy will jeopardize six gunboats.
      All questions asked by five watched experts amaze the judge.
      Bobby Klun awarded Jayme sixth place for her very high quiz.
      The wizard quickly jinxed the gnomes before they vaporized.
      Zelda might fix the job growth plans very quickly on Monday.
      Zack Gappow saved the job requirement list for the six boys.
      Jackie will budget for the most expensive zoology equipment.
    </div>
    <div id='right'>
      <H1><img width='25px' src='assets/logo2.png'> Things They Don't</H1>
      The quick fox jumped over the brown lazy dog.
      Jack quietly moved up front and seized the big ball of wax.
      Few black taxis drive up major roads on quiet hazy nights.
      Just poets wax boldly as kings and queens march over fuzz.
      Bored? Craving a pub quiz fix? Why, just come to the Royal Oak!
      Quincy Pondexter blocked five jams against the Wizards!
      Crazy Frederick bought many very exquisite opal jewels.
      A quivering Texas zombie fought republic linked jewelry.
      Grumpy wizards make toxic brew for the evil queen and jack.
      The job of waxing linoleum frequently peeves chintzy kids.
      Back in June we delivered oxygen equipment of the same size.
      Just keep examining every low bid quoted for zinc etchings.
      How razorback-jumping frogs can level six piqued gymnasts!
      A quick movement of the enemy will jeopardize six gunboats.
      All questions asked by five watched experts amaze the judge.
      Bobby Klun awarded Jayme sixth place for her very high quiz.
      The wizard quickly jinxed the gnomes before they vaporized.
      Zelda might fix the job growth plans very quickly on Monday.
      Zack Gappow saved the job requirement list for the six boys.
      Jackie will budget for the most expensive zoology equipment.
    </div>
  </div>
  <div id='footer'>
    <div id='left'>
      <div><strong>View this in the app</strong></div>
      <div><a href="http://www.go.to/some/place">http://www.go.to/some/place</a></div>
    </div>
    <div id='right'>
      <div><strong>Last Updated</strong></div>
      <div>03/13/2020</div>
    </div>
  </div>
</div>
  `,
  // html2canvas: supported CSS https://html2canvas.hertzen.com/features
  styles: [`
  button {background-color:#ff0000;color:#ffffff;}
  #dom-to-print {
    position: relative;
    background-color: #ffffff;
    color: #000000;
    font-family: Helvetica, Arial, Sans-Serif;
  }
  #header {
    background-color: #5577aa;
    color: #ffffff;
    font-size: 1.7rem;
    font-weight: 700;
    height: 4.7rem;
    margin: auto;
    display: flex;
  }
  #left {
    padding: 1rem;
    flex: 0 0 50%;
    vertical-align: middle;
  }
  #right {
    flex: 1;
    padding: 1rem;
    text-align: right;
    vertical-align: middle;
  }
  #header #right img {
    width: 100px;
  }
  #body {
    font-size: 0.8rem;
    font-weight: normal;
    padding: 3rem;
    line-height: 1.5rem;
  }
  h1 {
    border-bottom: 1px solid #333333;
    padding-bottom: 0.7rem;
    font-size: 1.4rem;
  }
  a, a:hover, a:active {
    font-weight: normal;
    color: #333333;
  }
  #footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    height: 64px;
    background-color: #dddddd;
    color: #000000;
    font-size: 0.7rem;
  }
  `]
})
export class MyLazy2Component {
  show = false;
  content_width = 100;
  content_height = 100;

  async writePDF() {
    this.show = true;

    let doc_width = 8.27;  // A4 measures 210 × 297 millimeters or 8.27 × 11.69 inches
    let doc_height = 11.69;
    let aspect = doc_height / doc_width;
    let dpi = 96; // HTML assumes that the screen is 96 DPI, or that 1 pixel is 1/96 of an inch.
    let img_width = doc_width * dpi;
    let img_height = doc_height * dpi;
    let win_width = img_width;
    let win_height = img_height;
    this.content_width = win_width;
    this.content_height = win_height-2; // avoid creating page2

    // give the DOM a chance to update.
    setTimeout( async () => {
      // render the page to an image
      // https://html2canvas.hertzen.com/configuration
      let html2canvasOpts = {
        scale: 300/dpi, // 96 is the default HTML DPI which html2canvas uses.  dpi = scale * 96
        //scale: 120/dpi
      };

      // draw the image into a PDF doc and save
      // https://rawgit.com/MrRio/jsPDF/master/docs/jsPDF.html
      //let jsPDFOpts = {
      //  orientation: 'portrait',
      //  unit: 'in',
      //  format: [doc_width, doc_height]
      //};
      let jsPDFOpts = { unit: 'mm', format: 'a4', orientation: 'portrait', pagesplit: true}


      // html2canvas + jsPDF:
      // let jsPDF = MySharedModule.jsPDF;
      // let html2canvas = MySharedModule.html2canvas;
      // let canvas = await html2canvas( document.getElementById('dom-to-print'), html2canvasOpts );
      // var img = canvas.toDataURL("image/jpeg"); // in this test case, jpeg vs png makes a 300k vs 5MB difference
      // var pdf = new jsPDF(jsPDFOpts);
      // pdf.addImage(img, 'JPG', 0, 0, doc_width+.16, doc_height); // no idea why the extra .16 is needed...
      // pdf.save('jsPDF.pdf');

      // html2pdf:
      // https://github.com/eKoopmans/html2pdf
      let html2pdf = MySharedModule.html2pdf;
      html2pdf().set({
        margin:       [0.00, 0.00, 0.00, 0.00], // [top, left, bottom, right]
        filename:     'html2pdf.pdf',
        image:        { type: 'jpeg', quality: 0.96 },
        html2canvas:  html2canvasOpts,
        jsPDF:        jsPDFOpts,
        enableLinks:  true,
      }).from( document.getElementById('dom-to-print') ).save();

      this.show = false;
    }, 100 );
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
  declarations: [MyLazy2Component, ],

  // "if your app happens to ... dynamically load a component by type imperatively, you must add it to entryComponents explicitly"
  // https://angular.io/guide/entry-components
  entryComponents: [MyLazy2Component, ],
})
export class MyLazy2Module {
  static creatableComponents = { MyLazy2Component, }; //  expose which components are creatable (we cant read entryComponents)
}
