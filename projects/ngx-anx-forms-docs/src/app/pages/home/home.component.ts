import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  moduleImportMain = `import { NgxAnxFormsModule } from 'ngx-anx-forms';
@NgModule({
  ...
  imports: [
    NgxAnxFormsModule.forRoot(),
    NgSelectModule,
    ...
  ],
  ...
})
export class AppModule {
}`;

  moduleImport = `import { NgxAnxFormsModule } from 'ngx-anx-forms';
@NgModule({
  ...
  imports: [
    NgxAnxFormsModule,
    ...
  ],
  ...
})
export class YourAppModule {
}`;


}
