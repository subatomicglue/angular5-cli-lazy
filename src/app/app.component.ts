import {
    Component, Injector, NgModuleFactory, OnInit, SystemJsNgModuleLoader, ViewChild,
    ViewContainerRef
} from '@angular/core';

import {LazyComponent} from "./lazy/lazy.module"; // you can import the def, for type safety, or skip this, and use as an <any>
import {DynamicLoaderService} from "./dynamic-loader.service";

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

  constructor( private loader: DynamicLoaderService, private root_container: ViewContainerRef ) {}

  ngOnInit() {
  }

  async load() {
    this.lazymodule = await this.loader.load( 'LazyModule', 'app/lazy/lazy.module' );
    this.lazycomp = this.lazymodule.create( "LazyComponent", this.container );
    //this.lazycomp = this.lazymodule.create( "LazyComponent", this.root_container );
    //this.lazycomp = this.lazymodule.create( "LazyComponent" );

    // how to access the methods of the component
    this.lazycomp.instance.increment();
  }

  unload() {
    this.lazycomp.destroy();
  }
}
