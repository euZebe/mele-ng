import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-draw-result',
  templateUrl: './draw-result.component.html',
  styleUrls: ['./draw-result.component.css']
})
export class DrawResultComponent implements OnInit {

  constructor(private location: Location) {
  }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }
}
