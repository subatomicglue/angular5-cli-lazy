Forked from https://github.com/alexzuza/angular-cli-lazy, refactored into dynamic-loader.service.ts

# AngularCliLazy - Demo (which includes reusable DynamicLoaderService)

This project shows how to manually lazy load an `NgModule` and associated `Component`s in an `angular-cli` application, without the Angular `Router`, by simply using a function call.

In angular, NgModules will be compiled out to separate .js files, which gives the opportunity to lazy-load them much later after the application has been running.

Here we provide a `DynamicLoaderService` which has methods to `load` the module, and `create` components from the module.

# Docs for the DynamicLoaderService

```
Dynamically load an NgModule's corresponding .js bundle
Refactored from demo: https://github.com/alexzuza/angular-cli-lazy

[How to create an NgModule]:

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

[How to Load an NgModule at runtime]

* Register DynamicLoader as a provider in your app.module.ts:
    import { DynamicLoader } from './dynamic-loader.service';
    providers: [DynamicLoader]

* Create a place in your DOM to load the new component onto:
    <div id='container'></div>

* Use DynamicLoader to load an NgModule and create a new LazyComponent, from inside one of your app components:
    import {DynamicLoader} from "./dynamic-loader.service";
    import {LazyComponent} from "./lazy/lazy.module"; // you can import the type, or omit this step and go typeless

    @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
    constructor( private loader: DynamicLoader, private root_container: ViewContainerRef ) {}
    async load() {
      this.lazymodule = await this.loader.load( 'LazyModule', app/lazy/lazy.module' );
      // do things
      this.lazycomp = this.lazymodule.create( "LazyComponent", container );      // add a new lazycomponent to the <div>
      this.lazycomp = this.lazymodule.create( "LazyComponent", root_container ); // add a new lazycomponent to the page root
      this.lazycomp = this.lazymodule.create( "LazyComponent" );                 // new component (dont add to DOM)
      this.lazycomp.instance.myMethod();                                         // how to access the methods of the component
    }
    ngOnDestroy() {
      this.lazycomp.destroy();   // remove the component from the DOM and delete
      this.lazymodule.destroy(); // destroys every load()'d instance of the module
    }
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
