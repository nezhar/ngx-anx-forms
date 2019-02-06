import { Component } from '@angular/core';

@Component({
  selector: 'app-error-mapper',
  templateUrl: './error-mapper.component.html',
})
export class ErrorMapperComponent {

  code = `import { mapFormErrors } from 'ngx-anx-forms';

this.userResource.update({}, this.userForm.value).$promise
  .then(data => {
    //success
  }).catch(reason => {
    mapFormErrors(this.userForm, reason.error);
    console.log(reason);
  });`;

}
