import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Scan2InvestClient';
  public StockInformationItems: StockInformation[] = [];

  constructor(){
    this.StockInformationItems.push(new StockInformation("Brand", "Company", "ImageFileName", new Array<InvestmentOption>(new InvestmentOption("Region", "StockPrice", "Symbol", "Type"))));
  }
}

export class StockInformation {
  brand_name_detected: string;
  company: string;
  image_file_name: string;
  investment_options: Array<InvestmentOption>;

  constructor(brand_name_detected: string, company: string, image_file_name: string, investment_options: Array<InvestmentOption>) {
    this.brand_name_detected = brand_name_detected;
    this.company = company;
    this.image_file_name = image_file_name;
    this.investment_options = investment_options;
  }
}

export class InvestmentOption {
  region: string;
  stock_price: string;
  symbol: string;
  type: string;

  constructor(region: string, stock_price: string, symbol: string, type: string) { 
    this.region = region;
    this.stock_price = stock_price;
    this.symbol = symbol;
    this.type = type;
   }
}

