import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { PokedexService } from '../../shared/services/pokedex.service';
import {
  map,
  combineAll,
  tap,
  zipAll,
  debounceTime,
  concatMap,
  concatAll,
  scan,
  flatMap,
  reduce,
} from 'rxjs/operators';
import { Observable, forkJoin, zip } from 'rxjs';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokedexComponent implements OnInit {
  pokemons$: any;
  requestsPokemon$: Observable<any>;

  constructor(
    private pokedexService: PokedexService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.pokedexService
      .getAllPokemons()
      .pipe(
        map(
          (response) =>
            (this.requestsPokemon$ = response.map((pokemon) =>
              this.pokedexService.getPokemon(pokemon.url)
            ))
        )
      )
      .subscribe();

    this.loadAllPokemons();
  }

  loadAllPokemons(): void {
    setTimeout(() => {
      this.cd.markForCheck();
      this.pokemons$ = forkJoin(this.requestsPokemon$).pipe(
        scan((acc, val) => [...acc, ...val], []),
        flatMap((items) => items),
        map((res) => {
          const badges = res.types.map((item) => item.type.name);
          const [type] = badges;
          return {
            number: res.id,
            name: res.name,
            badges,
            type,
          };
        }),
        reduce((all, item) => [...all, item], [])
      );
    }, 100);
  }
}
