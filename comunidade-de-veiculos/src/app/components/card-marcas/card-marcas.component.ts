import { marcasCarros } from '../../models/data-card.model';
import { FipeService } from '../../services/fipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-marcas',
  templateUrl: './card-marcas.component.html',
  styleUrls: ['./card-marcas.component.scss']
})
export class CardMarcasComponent implements OnInit {
  
  marcas: any;
  error: any;

  constructor(private FipeService: FipeService) { 
    this.getterFipe();
  }
  
  ngOnInit() {};
  
  getterFipe(){
    this.FipeService.getMarcasCarros().subscribe(
      (data: marcasCarros) => {
        this.marcas = data;
        console.log("marcas", this.marcas);

    }, error => {
      this.error = error;
      console.error("erro: ", error);
    })
  }

}
