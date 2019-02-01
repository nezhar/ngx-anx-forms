import { HomeComponent } from './pages/home/home.component';
import { ComponentsComponent } from './pages/components/components.component';
import { DocumentaryConfig } from 'ngx-documentary';


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
      path: 'component',
      component: ComponentsComponent,
      data: {
        name: 'Components',
        fragments: [
          {
            name: 'Component 1',
            href: 'component1',
          },
          {
            name: 'Component 2',
            href: 'component2',
          },
        ]
      }
    }
  ],
  currentVersion: '0.1.1',
  versions: []
};
