import { Component, OnInit } from '@angular/core';
import { CharacterApiService } from '../../services/character-api.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  characters: any[] = [];

  newCharacter: any = {};

  constructor(
    private characterThang: CharacterApiService
  ) { }

  ngOnInit() {
    setInterval( () => {this.characterThang.getCharacters()
      .subscribe(
        (allCharacters: any[]) => {
          this.characters = allCharacters;
          this.characters.sort((a,b) => {
            return b.id - a.id;
          });
        }
      )},5000);

  }

  submitCharacter() {
    this.characterThang.postCharacter(this.newCharacter)
      .subscribe(
        (character) => {
          this.characters.unshift(character);
        }
      );
  }



}
