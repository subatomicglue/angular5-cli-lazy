import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SystemJsNgModuleLoader } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LazyLoaderService } from './lazy-loader.service';
//import { provideRoutes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    LazyLoaderService,
    SystemJsNgModuleLoader,
    /*provideRoutes([
        { loadChildren: 'app/lazy/my-lazy.module#MyLazyModule' }
    ])
    */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
