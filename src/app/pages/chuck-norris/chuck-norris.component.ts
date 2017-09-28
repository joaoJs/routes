import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chuck-norris',
  templateUrl: './chuck-norris.component.html',
  styleUrls: ['./chuck-norris.component.css']
})
export class ChuckNorrisComponent implements OnInit {

  randomJoke: string = "";

  constructor(
    private httpThang: HttpClient
  ) { }

  ngOnInit() {
    this.httpThang.get('https://api.icndb.com/jokes/random')
      .subscribe(
        (data: any) => {
          console.log(data);
          this.randomJoke = data.value.joke;
        },
        (err) => {
          console.log(err);
        }
      );
  }

}
