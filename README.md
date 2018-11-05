Forked from https://github.com/alexzuza/angular-cli-lazy, refactored into lazy-loader.service.ts

# AngularCliLazy - Demo (which includes reusable LazyLoaderService)

This project shows how to manually lazy-load an `NgModule` and associated `Component`s in an `angular-cli` application, by using a function call without any need for the Angular `Router`.

In angular, NgModules will be compiled out to separate .js files, which gives the opportunity to lazy-load them much later after the application has been running.

Here we provide a `LazyLoaderService` which has methods to `load` the module, and `create` components from the module.

# Docs for the LazyLoaderService

```
Lazy load an NgModule's .js bundle, instantiate a component
Refactored from demo: https://github.com/alexzuza/angular-cli-lazy

[Load an NgModule at runtime]

* Register LazyLoaderService as a provider in your app.module.ts:
    import { LazyLoaderService } from './lazy-loader.service';
    import { NgModule, SystemJsNgModuleLoader } from '@angular/core';
    providers: [
      LazyLoaderService,
      SystemJsNgModuleLoader,
    ]

* Create a place in your DOM to load the new component onto:
    <div id='container'></div>

* Use LazyLoaderService to load an NgModule and create a new LazyComponent, from inside one of your app components:
    import {LazyLoaderService} from "./lazy-loader.service";
    import {LazyComponent} from "./lazy/lazy.module"; // you can import the type, or omit this step and go typeless

    @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
    constructor( private loader: LazyLoaderService, private root_container: ViewContainerRef ) {}
    async load() {
      this.lazymodule = await this.loader.load( 'MyLazyModule', app/lazy/my-lazy.module' );
      // do things
      this.lazycomp = this.lazymodule.create( "MyLazyComponent", container );      // add a new lazycomponent to the <div>
      this.lazycomp = this.lazymodule.create( "MyLazyComponent", root_container ); // add a new lazycomponent to the page root
      this.lazycomp = this.lazymodule.create( "MyLazyComponent" );                 // new component (dont add to DOM)
      this.lazycomp.instance.myMethod();                                         // how to access the methods of the component
    }
    ngOnDestroy() {
      this.lazycomp.destroy();   // remove the component from the DOM and delete
      this.lazymodule.destroy(); // destroys every load()'d instance of the module
    }


[Create a Component and NgModule to lazy-load]:

  import { Component, NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  @Component({
    selector: 'lazy-comp',
    template: ``
  })
  export class LazyComponent {
    myMethod() {}
  }
  @NgModule({
    imports: [CommonModule],
    declarations: [LazyComponent],    // refer to your lazyload component
    entryComponents: [LazyComponent]
  })
  export class LazyModule {
    static creatableComponents = { LazyComponent, }; //  we use this convention to add components that can be created
  }
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
