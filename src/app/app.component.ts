import {
    Component, Injector, NgModuleFactory, OnInit, SystemJsNgModuleLoader, ViewChild,
    ViewContainerRef
} from '@angular/core';

//import {MyLazyModule, MyLazyComponent} from "./lazy/my-lazy.module";  // you can import the types or use as an <any>
//import {MyLazy2Module} from "./lazy/my-lazy.module";                  // you can import the types or use as an <any>
import {LazyLoaderService} from "./lazy-loader.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
  lazymodule;
  lazycomp;
  lazymodule2;
  lazycomp2;

  constructor( private loader: LazyLoaderService, private root_container: ViewContainerRef ) {}

  ngOnInit() {
  }

  async load() {
    if (this.lazymodule) {
      this.unload();
    }
    this.lazymodule = await this.loader.load( 'MyLazyModule', 'app/lazy/my-lazy.module' );
    this.lazycomp = this.lazymodule.create( "MyLazyComponent", this.container );
    //this.lazycomp = this.lazymodule.create( "MyLazyComponent", this.root_container );
    //this.lazycomp = this.lazymodule.create( "MyLazyComponent" );

    // how to access the methods of the component
    this.lazycomp.instance.increment();
  }

  async load2() {
    if (this.lazymodule2) {
      this.unload();
    }
    this.lazymodule2 = await this.loader.load( 'MyLazy2Module', 'app/lazy/my-lazy2.module' );
    this.lazycomp2 = this.lazymodule2.create( "MyLazy2Component", this.container );
    //this.lazycomp2 = this.lazymodule2.create( "MyLazy2Component", this.root_container );
    //this.lazycomp2 = this.lazymodule2.create( "MyLazy2Component" );

    // how to access the methods of the component
    //this.lazycomp2.instance.writePDF();
  }

  // kill 'em all
  unload() {
    if (this.lazycomp) this.lazycomp.destroy();
    if (this.lazycomp2)  this.lazycomp2.destroy();
    if (this.lazymodule)  this.lazymodule.destroy();
    if (this.lazymodule2)  this.lazymodule2.destroy();
    this.lazycomp = this.lazycomp2 = this.lazymodule = this.lazymodule2 = undefined;
  }
}
