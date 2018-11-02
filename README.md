Forked from https://github.com/alexzuza/angular-cli-lazy, refactored into dynamic-loader.service.ts

# AngularCliLazy

This project shows how to manually lazy load an NgModule in angular-cli application.

In angular, NgModules will be compiled out to separate .js files, which gives the opportunity to lazy-load them much later after the application has been running.

Here we provide a `DynamicLoaderService` which has methods to `load` the module, and `create` components from the module.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
