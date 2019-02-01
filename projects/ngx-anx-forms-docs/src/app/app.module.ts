import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocumentaryModule } from 'ngx-documentary';

import { NgxAnxFormsModule } from 'ngx-anx-forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FormSwitchesComponent } from './utils/form-switches/form-switches.component';
import { SimpleComponent } from './pages/simple/simple.component';
import { ComposedComponent } from './pages/composed/composed.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormSwitchesComponent,
    SimpleComponent,
    ComposedComponent,
  ],
  entryComponents: [
    HomeComponent,
    SimpleComponent,
    ComposedComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxAnxFormsModule.forRoot(),
    DocumentaryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
