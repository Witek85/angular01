import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-first-spinners',
  templateUrl: './first-spinners.component.html',
  styleUrls: ['./first-spinners.component.css']
})
export class FirstSpinnersComponent implements OnInit {
  public loadingPercent = 0;

  constructor() { }

  ngOnInit() {
    this.loadingProgress(500).subscribe(i => {
      console.log(i)
      this.loadingPercent = i
    });
  }

  loadingProgress(speed: number) {
    return interval(speed).pipe(
      map(i => i * 10),
      takeWhile(i => i <=100)
    );
  }

}
