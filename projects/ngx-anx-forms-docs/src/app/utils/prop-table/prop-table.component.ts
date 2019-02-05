import { Component, Input } from '@angular/core';

export interface TableProp {
  name: string;
  type: string;
  description: string;
  example: string;
  default: string;
}

@Component({
  selector: 'app-prop-table',
  templateUrl: './prop-table.component.html',
  styleUrls: ['./prop-table.component.css']
})
export class PropTableComponent {
  @Input() props: TableProp[] = [];
}
