import { Component } from '@angular/core';
import provincias from 'src/assets/data/provincias';
import { IDataTableColumn } from './components/data-table/data-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tableData = provincias
  public tableColumns: IDataTableColumn[] = [
    {
      name: 'Nombre',
      source: 'nombre'
    }
  ]
}
