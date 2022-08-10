import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PokemonService } from './services/pokemon.service';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoading$: Observable<boolean>;

  constructor(
    private _spinnerService: SpinnerService,
    private _pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this._spinnerService.getLoader();
  }

  getPokemons(): void {
    this._pokemonService.getPokemons().subscribe(console.log);
  }
}
