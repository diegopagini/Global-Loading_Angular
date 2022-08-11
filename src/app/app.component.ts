import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PokemonService } from './services/pokemon.service';
import { SpinnerService } from './services/spinner.service';
import { StarWarsService } from './services/star-wars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoading$: Observable<boolean>;
  data: any;

  constructor(
    private _spinnerService: SpinnerService,
    private _pokemonService: PokemonService,
    private _starWarsService: StarWarsService
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this._spinnerService.getLoader();
  }

  getPokemons(): void {
    this._pokemonService.getPokemons().subscribe((data) => (this.data = data));
  }

  getStarWarsPeople(): void {
    this._starWarsService
      .getStarWarsPeople()
      .subscribe((data) => (this.data = data));
  }
}
