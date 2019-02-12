import { DocumentaryConfig } from 'ngx-documentary';

import { HomeComponent } from './pages/home/home.component';
import { SimpleComponent } from './pages/simple/simple.component';
import { ComposedComponent } from './pages/composed/composed.component';
import { ErrorMessagesComponent } from './pages/error-messages/error-messages.component';
import { ErrorMapperComponent } from './pages/error-mapper/error-mapper.component';


export const config: DocumentaryConfig = {
  title: 'ngx-anx-forms',
  links: [
    {
      'href': 'https://github.com/anx-hnezbeda/ngx-anx-forms',
      'name': 'Github',
    },
    {
      'href': 'https://www.npmjs.com/package/ngx-anx-forms',
      'name': 'NPM',
    },
  ],
  routes: [
    {
      path: 'home',
      component: HomeComponent,
      data: {
        name: 'Home'
      }
    },
    {
      path: 'simple',
      component: SimpleComponent,
      data: {
        name: 'Simple components',
        fragments: [
          {
            name: 'Input',
            href: 'input',
          },
          {
            name: 'Textarea',
            href: 'textarea',
          },
          {
            name: 'Radio',
            href: 'radio',
          },
          {
            name: 'Checkbox',
            href: 'checkbox',
          },
          {
            name: 'Input Error',
            href: 'input-error',
          },
        ]
      }
    },
    {
      path: 'composed',
      component: ComposedComponent,
      data: {
        name: 'Composed components',
        fragments: [
          {
            name: 'Icon input',
            href: 'icon-input',
          },
          {
            name: 'Select',
            href: 'select',
          },
          {
            name: 'Select radio',
            href: 'select-radio',
          },
          {
            name: 'Select checkbox',
            href: 'select-checkbox',
          },
          {
            name: 'Likert scale',
            href: 'likert-scale',
          },
          {
            name: 'Distributed multiple choice',
            href: 'distributed-multiple-choice',
          },
        ]
      }
    },
    {
      path: 'error-messages',
      component: ErrorMessagesComponent,
      data: {
        name: 'Error messages'
      }
    },
    {
      path: 'error-mapper',
      component: ErrorMapperComponent,
      data: {
        name: 'Error mapper'
      }
    }
  ],
  currentVersion: '0.2.0',
  versions: []
};
