import {
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() columns: IDataTableColumn[] = [];

  @ViewChild('tableContainer') tableContainer: HTMLElement;
  public style = {
    primaryColor: '#00324a',
    primaryFontColor: '#fff'
  };

  public _color: string = '#00324a';
  public get color(): string {
    return this._color;
  }

  @Input() set color(value: string) {
    console.log(this.isLightColor(value))
    const font = this.isLightColor(value) ? '#000' : '#fff';
    this.style = {
      primaryColor: value,
      primaryFontColor: this.fontColor ? this.fontColor : font
    };
  }
  
  public _fontColor: string = '';
  public get fontColor(): string {
    return this._fontColor;
  }

  @Input() set fontColor(value: string) {
    this.style = {
      ...this.style,
      primaryFontColor: value,
    };
  }

  constructor() {}

  ngOnInit(): void {
    if (this.columns.length === 0) {
      this.createColumnsFromData();
    }
  }

  createColumnsFromData(): void {
    let obj = this.data[0];
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        this.columns.push({
          name: key,
          source: key,
        });
      }
    }
  }

  private isLightColor(color: string): boolean {
    const hex = color.replace('#', '');
    const c_r = parseInt(hex.substring(0, 2), 16);
    const c_g = parseInt(hex.substring(2, 4), 16);
    const c_b = parseInt(hex.substring(4, 6), 16);
    const luma = (c_r * 299 + c_g * 587 + c_b * 114) / 1000;

    return luma > 128;
  }
}

export interface IDataTableColumn {
  name: string;
  source: string;
}
