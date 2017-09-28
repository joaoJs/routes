import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CharacterApiService {

  constructor(
    private httpThang: HttpClient
  ) { }

  getCharacters() {
    return this.httpThang.get('https://ih-crud-api.herokuapp.com/characters')

  }

  postCharacter(character) {
    return this.httpThang.post('https://ih-crud-api.herokuapp.com/characters',
    character)
  }

}
