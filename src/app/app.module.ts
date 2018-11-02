import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SystemJsNgModuleLoader } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DynamicLoaderService } from './dynamic-loader.service';
import { provideRoutes } from '@angular/router';

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
    DynamicLoaderService,
    SystemJsNgModuleLoader,
    provideRoutes([
        { loadChildren: 'app/lazy/lazy.module#LazyModule' }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
