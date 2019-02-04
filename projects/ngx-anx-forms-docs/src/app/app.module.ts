import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DocumentaryModule } from 'ngx-documentary';
import { PrismModule } from '@ngx-prism/core';

import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/plugins/show-language/prism-show-language';

import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-json';

import { NgxAnxFormsModule } from 'ngx-anx-forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FormSwitchesComponent } from './utils/form-switches/form-switches.component';
import { SimpleComponent } from './pages/simple/simple.component';
import { ComposedComponent } from './pages/composed/composed.component';
import { InputComponent } from './pages/simple/input/input.component';
import { TextareaComponent } from './pages/simple/textarea/textarea.component';
import { RadioComponent } from './pages/simple/radio/radio.component';
import { CheckboxComponent } from './pages/simple/checkbox/checkbox.component';
import { InputErrorComponent } from './pages/simple/input-error/input-error.component';
import { PropTableComponent } from './utils/prop-table/prop-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormSwitchesComponent,
    SimpleComponent,
    ComposedComponent,
    InputComponent,
    TextareaComponent,
    RadioComponent,
    CheckboxComponent,
    InputErrorComponent,
    PropTableComponent,
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
    NgbModule,
    NgxAnxFormsModule.forRoot(),
    DocumentaryModule,
    PrismModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
