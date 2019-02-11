import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-draw-result',
  templateUrl: './draw-result.component.html',
  styleUrls: ['./draw-result.component.css']
})
export class DrawResultComponent implements OnInit {
  drawID: string;

  constructor(private location: Location, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.drawID = params.id;
    });
  }

  goBack() {
    this.location.back();
  }
}
