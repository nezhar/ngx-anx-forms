import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocumentaryModule } from 'ngx-documentary';

import { NgxAnxFormsModule } from 'ngx-anx-forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ComponentsComponent } from './pages/components/components.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComponentsComponent,
  ],
  entryComponents: [
    HomeComponent,
    ComponentsComponent,
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
