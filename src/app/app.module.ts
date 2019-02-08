import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SystemJsNgModuleLoader } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LazyLoaderService } from './lazy-loader.service';
import { provideRoutes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    LazyLoaderService,
    SystemJsNgModuleLoader,
    provideRoutes([
      // All lazy-load modules need to be listed so production build can generate separate X.xxx.chunk.js files
      // You could alternatively designate these in the lazyloaded NgModules
      //   themselves so that they "self describe" that they should be compiled
      //   to a separate chunk.js file.
      // It's unfortunate to need to specify the paths (and NgModule name as a
      //   string) here, however... Rather than just refer to the type.
      // TODO: someone help figure this out!
      { loadChildren: 'app/lazy/my-shared.module#MySharedModule', path: '-------ignore-not-a-valid-path-00001-------' },
      { loadChildren: 'app/lazy/my-lazy.module#MyLazyModule', path: '-------ignore-not-a-valid-path-00002-------' },
      { loadChildren: 'app/lazy/my-lazy2.module#MyLazy2Module', path: '-------ignore-not-a-valid-path-00003-------' },
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
