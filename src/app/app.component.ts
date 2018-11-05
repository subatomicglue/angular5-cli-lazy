import {
    Component, Injector, NgModuleFactory, OnInit, SystemJsNgModuleLoader, ViewChild,
    ViewContainerRef
} from '@angular/core';

import {MyLazyComponent} from "./lazy/my-lazy.module"; // you can import the def, for type safety, or skip this, and use as an <any>
import {LazyLoaderService} from "./lazy-loader.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
  title = 'Angular cli Example SystemJsNgModuleLoader.load';
  lazymodule;
  lazycomp;

  constructor( private loader: LazyLoaderService, private root_container: ViewContainerRef ) {}

  ngOnInit() {
  }

  async load() {
    this.lazymodule = await this.loader.load( 'MyLazyModule', 'app/lazy/my-lazy.module' );
    this.lazycomp = this.lazymodule.create( "MyLazyComponent", this.container );
    //this.lazycomp = this.lazymodule.create( "MyLazyComponent", this.root_container );
    //this.lazycomp = this.lazymodule.create( "MyLazyComponent" );

    // how to access the methods of the component
    this.lazycomp.instance.increment();
  }

  unload() {
    this.lazycomp.destroy();
  }
}
