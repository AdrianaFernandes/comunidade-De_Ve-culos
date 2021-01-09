import { Component, OnInit } from '@angular/core';
import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  veiculos: Veiculos[]

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cardService.veiculos().subscribe(veiculos=>this.veiculos=veiculos)
  }

}
