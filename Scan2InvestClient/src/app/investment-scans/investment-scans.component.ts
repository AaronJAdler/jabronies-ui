import { Component, Input } from '@angular/core';
import { StockInformation } from '../app.component';

@Component({
  selector: 'app-investment-scans',
  templateUrl: './investment-scans.component.html',
  styleUrls: ['./investment-scans.component.css']
})
export class InvestmentScansComponent {
  @Input() StockInformations!: StockInformation[];
}
