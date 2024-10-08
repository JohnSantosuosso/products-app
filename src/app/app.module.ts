import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ProductsModule } from './products/products.module';
import { AppComponent } from './app.component';
import { CopyrightDirective } from './copyright.directive';
import { NumericDirective } from './numeric.directive';
import { PermissionDirective } from './permission.directive';
import { AutofocusDirective } from './autofocus.directive';

@NgModule({
  declarations: [
    AppComponent,
    CopyrightDirective,
    NumericDirective,
    PermissionDirective,
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    AutofocusDirective
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
