import { FipeService } from './../../services/fipe.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { marcasCarros } from '../../models/data-card.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  marcas: any;

  error: any;

  value = '';

  combustiveis: string[] = [
    'Gasolina', 'Alcool', 'Flex', 'Disel'
  ];

  anos: string[] = [
    '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'
  ];

  precos: string[] = [
    'até R$ 20.000,00', '30.000,00', '40.000,00', '50.000,00', '60.000,00', '70.000,00', '80.000,00', '90.000,00', 'acima 100.000,00'
  ];

  listaCarrosPorMarca: any;

  marcaControl = new FormControl('', Validators.required);
  nomeCarroControl = new FormControl('', Validators.required);
  combustivelControl= new FormControl('');
  anoFabricacaoControl = new FormControl('');
  faixaPrecoControl = new FormControl('');

  constructor(private FipeService: FipeService) {
    this.getterFipe();
  }

  ngOnInit(): void { };

  getterFipe() {
    this.FipeService.getMarcasCarros().subscribe(
      (data: marcasCarros) => {
        this.marcas = data;
      }, error => {
        this.error = error;
        console.error("erro: ", error);
      })
  }

  onSearch() {
    if(this.marcaControl.value && this.nomeCarroControl.value){
      console.log(this.marcaControl.value, this.nomeCarroControl.value, this.combustivelControl.value, this.anoFabricacaoControl.value, this.faixaPrecoControl.value);
      this.getterVeiculosPorMarca();
    }

  }

  getterVeiculosPorMarca(){
    this.FipeService.getListaDeVeiculosPorMarca(this.marcaControl.value).subscribe(
      (data) => {
        this.listaCarrosPorMarca = data;
        console.log(this.listaCarrosPorMarca);
      }
    )
  }
}

