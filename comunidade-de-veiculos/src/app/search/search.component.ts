import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

interface Marcas {
  id: number;
  name: string;
  fipe_name: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  combustiveis: string[] = [
    'Gasolina', 'Alcool', 'Flex', 'Disel'
  ];

  anos: string[] = [
    '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007',
    '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016',
    '2017', '2018', '2019', '2020'
  ];

  precos: string[] = [
    'até R$ 20.000,00', '30.000,00', '40.000,00', '50.000,00', '60.000,00', '70.000,00', '80.000,00', '90.000,00', 'acima 100.000,00'
  ];

}



