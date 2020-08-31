import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  constructor(private http: HttpClient) {}

  getAllPokemons(): Observable<any> {
    return this.http
      .get<any>('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
      .pipe(pluck('results'));
  }

  getPokemon(url: string): Observable<any> {
    return this.http
      .get<any>(`${url}`)
      .pipe(map(({ id, name, types }) => ({ id, name, types })));
  }
}
